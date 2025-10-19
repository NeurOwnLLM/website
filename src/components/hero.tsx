import { useApp } from "../contexts/AppContext";
import styles from "./hero.module.scss";

export function Hero() {
    const { l } = useApp();

    const c = {
        en: {
            title: "Title EN",
            subtitle: "Take control of your data",
        },
        de: {
            title: "Title DE",
            subtitle: "Own your own AI with neurOwn",
        },
    };

    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <h1 className={styles.title}>{c[l].title}</h1>
                <p className={styles.subtitle}>{c[l].subtitle}</p>
                <a href="#features" className={styles.ctaButton}>
                    Learn More
                </a>
            </div>
        </section>
    );
}
