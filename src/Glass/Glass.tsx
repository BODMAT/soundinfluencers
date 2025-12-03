import type { JSX } from "react";
import styles from "./Glass.module.scss"
export function Glass({ element }: { element: string | JSX.Element }) {
    return (
        <section className={styles.glass}>
            {element}
        </section>
    )
}