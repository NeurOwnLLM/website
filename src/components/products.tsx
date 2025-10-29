import { useApp } from "../contexts/AppContext";
import styles from "./products.module.scss";

export function Products() {
    const { l } = useApp();
    return (
        <section className={styles.products}>
            <h2>{l === "en"
                ? "Our Services"
                : "Unsere Dienstleistungen"
            }</h2>
            <p>
                {l === "en"
                ? "At neurOwn, we offer a comprehensive suite of AI and machine learning solutions designed to bring cutting-edge technology directly to your business."
                : "neurOwn bietet eine umfassende Palette von KI- und Machine Learning-Lösungen, die darauf ausgelegt sind, modernste Technologie direkt zu Ihrem Unternehmen zu bringen."}
            </p>
            <div className={styles.productList}>
                <Hardware />
                <Software />
                <Consulting />
            </div>
        </section>
    );
}

function Hardware() {
    const { l } = useApp();
    return (
        <div className={styles.productItem}>
            <h3>{l === "en"
                ? "AI Hardware Solutions"
                : "Hardware"
            }</h3>
            <p>
                {l === "en"
                ? "We provide powerful, energy-efficient AI computing hardware including the AMD-STRIX 395+, preconfigured and optimized for inference workloads. Our systems run at just 150W full load while supporting models up to 120B parameters, delivering enterprise-grade performance with minimal power consumption."
                : "Wir bieten leistungsstarke, energieeffiziente KI-Computing-Hardware. Basis ist der AMD-STRIX 395+, vorkonfiguriert und optimiert für Inferenz-Arbeitslasten. Unsere Systeme laufen bei nur 150W Vollast und unterstützen Modelle mit bis zu 120B Parametern."}
            </p>
        </div>
    );
}

function Software() {
    const { l } = useApp();
    return (
        <div className={styles.productItem}>
            <h3>
                {l === "en" ? "Software & Configuration" : "Software & Konfiguration"}
            </h3>
            <p>
                {l === "en"
                    ? "Our software solutions include complete setup and configuration of AI frameworks, model deployment, and ongoing maintenance. We specialize in open-source AI platforms that provide transparency and control, ensuring your AI systems run smoothly and securely on your premises. From initial installation to regular updates, we handle the technical complexity so you can focus on your business."
                    : "Unsere Software-Lösungen umfassen die vollständige Einrichtung und Konfiguration von KI-Frameworks, Modell-Deployment und laufende Wartung. Wir spezialisieren uns auf Open-Source-KI-Plattformen, die Transparenz und Kontrolle bieten und sicherstellen, dass Ihre KI-Systeme reibungslos und sicher an Ihrem Standort laufen. Von der ersten Installation bis zu regelmäßigen Updates: Wir übernehmen die technische Komplexität, damit Sie sich auf das wesentliche konzentrieren können."}
            </p>
        </div>
    );
}

function Consulting() {
    const { l } = useApp();
    return (
        <div className={styles.productItem}>
            <h3>{l === "en"
                ? "AI Consulting & Deployment"
                : "KI-Beratung & Implementierung"
            }</h3>
            <p>
                {l === "en"
                ? "Our expert consulting services help businesses identify AI opportunities, develop implementation strategies, and deploy custom AI solutions. We work closely with your team to understand your specific needs and create tailored AI workflows that integrate seamlessly with your existing processes. Whether you're just starting with AI or looking to optimize existing implementations, our consultants provide the guidance and expertise needed for successful adoption."
                : "Unsere Expertenberatung hilft Unternehmen dabei, KI-Chancen zu identifizieren, Strategien zu entwickeln und maßgeschneiderte KI-Lösungen zu implementieren. Wir arbeiten eng mit Ihrem Team zusammen, um Ihre spezifischen Anforderungen zu verstehen und maßgeschneiderte KI-Workflows zu erstellen, die sich nahtlos in Ihre bestehenden Prozesse integrieren. Ob Sie gerade erst mit KI beginnen oder bestehende Implementierungen optimieren möchten, unsere Berater bieten die Anleitung und Expertise, die für eine erfolgreiche Einführung erforderlich sind."}
            </p>
        </div>
    );
}
