import styles from "./Loader.module.scss"

const BAR_COUNT = 9;
const MIN_HEIGHT = 15;
const MAX_HEIGHT = 89;
// const MIN_DURATION = 700;
// const MAX_DURATION = 1000;
export function Loader() {
    const bars = Array.from({ length: BAR_COUNT }, (_, index) => (
        <span
            key={index}
            className={styles.loader__bar}
            style={{
                animationDelay: `${index * 0.15}s`,
                height: Math.floor(Math.random() * (MAX_HEIGHT - MIN_HEIGHT + 1)) + MIN_HEIGHT,
                // animationDuration: `${Math.floor(Math.random() * (MAX_DURATION - MIN_DURATION + 1)) + MIN_DURATION}ms`
            }}
        />
    ));
    return (
        <section className={styles.loader}>
            {bars}
        </section>
    )
}