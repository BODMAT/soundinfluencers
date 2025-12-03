import { Link, Outlet, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import styles from "./App.module.scss"
import LogoSVG from "../assets/logo.svg"
import { Loader } from "../Loader/Loader";
import { TestGlass } from "../Glass/TestGlass";

export function App() {
  return (
    <Router basename="/soundinfluencers/">
      <Routes>
        <Route path="/" element={
          <div className={styles.wrapper}>
            <header className={styles.header}>
              <div className={styles.header__container}>
                <Link to="" className={styles.header__logo}>
                  <img src="./icon.svg" alt="icon" />
                  <img src={LogoSVG} alt="logo" />
                </Link>
              </div>
            </header>
            <main className={styles.main}>
              <div className={styles.main__container}>
                <Outlet />
              </div>
            </main>
          </div>
        }>

          <Route index element={<Loader />} />
          <Route path="glass" element={<TestGlass />} />
          <Route path="*" element={<div className={styles.notFound}>404 - not found</div>} />
        </Route>
      </Routes>
    </Router>
  )
}