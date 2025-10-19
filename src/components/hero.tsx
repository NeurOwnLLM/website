import { useApp } from "../contexts/AppContext";
import styles from "./hero.module.scss";

export function Hero() {
    const { l } = useApp();

    const c = {
        en: {
            title: "Own Your AI Infrastructure",
            subtitle: "Take control of your data and AI capabilities with on-premises solutions designed for businesses of all sizes",
        },
        de: {
            title: "Eigene KI-Infrastruktur",
            subtitle: "Übernehmen Sie die Kontrolle über Ihre Daten und KI-Fähigkeiten mit lokalen Lösungen für Unternehmen jeder Größe",
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
