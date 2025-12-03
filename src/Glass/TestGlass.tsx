import { Glass } from "./Glass"
import styles from "./Glass.module.scss"
import LogoSVG from "../assets/logo.svg"
export function TestGlass() {
    return (
        <section className={styles.testGlass}>
            TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST
            <div className={styles.testGlass__outer}><Glass element={
                <div className={styles.testGlass__inner}>
                    <img src="./icon.svg" alt="icon" />
                    <img src={LogoSVG} alt="logo" />
                </div>
            } />
            </div>
        </section >
    )
}