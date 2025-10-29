import { useApp } from "../contexts/AppContext";
import styles from "./hero.module.scss";

export function Hero() {
    const { l } = useApp();

    const c = {
        en: {
            title: "Own Your AI Infrastructure",
            subtitle: "Take control of your data and AI capabilities with on-premise solutions designed for businesses of all sizes",
        },
        de: {
            title: "KI-Infrastruktur. Ohne Abhängigkeiten.",
            subtitle: "Behalten Sie volle Kontrolle über Ihre Daten mit unseren lokalen KI-Lösungen für kleine und mittelständische Unternehmen.",
        },
    };

    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <h1 className={styles.title}>{c[l].title}</h1>
                <p className={styles.subtitle}>{c[l].subtitle}</p>
                <a href="#about" className={styles.ctaButton}>
                    {l === 'en' ? 'Learn More' : 'Mehr Erfahren'}
                </a>
            </div>
        </section>
    );
}
