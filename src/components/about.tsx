import { useApp } from "../contexts/AppContext";
import styles from "./about.module.scss";

export function About() {
    return (
        <>
            <Mission />
            <Problems />
            <Solutions />
        </>
    );
}

function Mission() {
    const { l } = useApp();
    return (
        <section className={styles.mission} id="about">
            <div className={styles.missionContent}>
                <h2>{l === "en"
                    ? "Our Mission"
                    : "Unsere Mission"
                }</h2>
                <p>
                    {l === "en"
                    ? "neurOwn was founded on a simple belief: Artificial Intelligence should be accessible, trustworthy, and private for every business, not just tech giants."
                    : "neurOwn wurde aus einer einfachen Überzeugung gegründet: Künstliche Intelligenz sollte für jedes Unternehmen zugänglich, vertrauenswürdig und sicher sein – nicht nur für Tech-Riesen."}
                </p>
                <p>
                    {l === "en"
                    ? "We specialize in bringing state-of-the-art AI directly to your premises. Our mission is to democratize AI and its safe use for small and medium-sized businesses, even if you don't hold a degree in computer science."
                    : "Wir sind auf lokale KI Lösungen spezialisiert, die komplett an ihrem Standort und unter Ihrer Kontrolle laufen. Unser Ziel ist es, kleinen und mittelständischen Unternehmen die Möglichkeit zu geben, im KI-Zeitalter am Ball zu bleiben – auch ohne Doktortitel in Informatik."}
                </p>
            </div>
        </section>
    );
}

function Problems() {
    const { l } = useApp();
    return (
        <section className={styles.problems}>
            <div className={styles.problemsContent}>
                <h2>{l === "en" ? "The Problem" : "Das Problem"}</h2>
                <div className={styles.problem}>
                    <h3>
                        {l === "en" ? "Where is your data?" : "Wo sind Ihre Daten?"}
                    </h3>
                    <p>
                        {l === "en"
                            ? "Business data is sensitive. But most AI tools rely on processing data in the cloud, by third-party providers. Beyond the privacy and security concerns, this quickly becomes a compliance nightmare with data protection regulations."
                            : "Geschäftsdaten sind sensibel. Doch die meisten KI-Tools verarbeiten sie dennoch in der Cloud oder bei Drittanbietern — ein Albtraum für den Datenschutzbeauftragten."}
                    </p>
                </div>
                <div className={styles.problem}>
                    <h3>
                        {l === "en"
                            ? "High Costs of Cloud AI Services"
                            : "Steigende Kosten"}
                    </h3>
                    <p>
                        {l === "en"
                            ? "Relying on cloud-based AI services can be expensive. Costs for ongoing API usage quickly add up, making it difficult for smaller enterprises to leverage AI while maintaining cost control. Considering that most cloud-based AI providers currently offer their services at a loss, price hikes are inevitable."
                            : "Cloud-basierte KI-Dienste sind teuer. Die Kosten für fortlaufende API-Nutzung summieren sich schnell, was es kleinen Unternehmen erschwert, KI kosteneffektiv zu nutzen. Und wenn Cloud-KI-Anbieter ihre Dienste (wie derzeit) mit Verlust anbieten, lassen Preiserhöhungen wohl nicht lang auf sich warten."}
                    </p>
                </div>
                <div className={styles.problem}>
                    <h3>
                        {l === "en"
                            ? "Big Tech Dependency"
                            : "Abhängigkeit und Abo-Falle"}
                    </h3>
                    <p>
                        {l === "en"
                            ? "What's worse, once you're locked in, escaping the price hike becomes difficult: Many AI solutions are provided by only few large technology companies, leading to vendor lock-in and limited options for customization, or alternatives. Because their tools are offered with a low entry threshold, businesses quickly find themselves dependent on these providers for critical operations."
                            : "Das wird vor allem problematisch sobald der Vendor-Lock-in greift: Gängige KI-Lösungen werden von wenigen Tech-Riesen angeboten. Möglichkeiten zur Anpassung oder Alternativen gibt es wenig, aber die Tools haben Anfangs eine verschwindend kleine Einstiegshürde. Schnell finden sich Unternehmen im Zugzwang wo die Abwicklung kritischer Geschäftsprozesse auf herkömmliche Weise nicht mehr konkurrenzfähig ist."}
                    </p>
                </div>
                <div className={styles.problem}>
                    <h3>{l === "en" ? "Transparency" : "Transparenz"}</h3>
                    <p>
                        {l === "en"
                            ? 'Many AI solutions operate as "black boxes," making it difficult to understand how decisions are made. This unnecessary lack of transparency prevents trust in what could be otherwise great solutions.'
                            : "Viele KI-Lösungen agieren als 'Black Box', wo es unmöglich ist, nachzuvollziehen, wie Entscheidungen getroffen werden. Dieses oft unnötige Transparenzdefizit verhindert Vertrauen in ansonsten großartige Lösungen."}
                    </p>
                </div>
            </div>
        </section>
    );
}

function Solutions() {
    const { l } = useApp();
    return (
        <section className={styles.solutions}>
            <div className={styles.solutionsContent}>
                <h2>{
                    l === "en"
                    ? "Our Solution"
                    : "Unsere Lösung"
                }</h2>
                <div className={styles.solution}>
                    <h3>{l === "en"
                        ? "On-Premise AI Deployment"
                        : "On-Premise Deployment"
                    }</h3>
                    <p>
                        {l === "en"
                        ? "We bring affordable AI models directly to your business location, ensuring that your sensitive data remains within your control. This is possible because we use light-weight open-source models that — once tailored to the use case — run on relatively modest hardware."
                        : "Wir bringen bezahlbare KI-Modelle direkt zu Ihrem Unternehmensstandort und stellen so sicher, dass Ihre Daten unter Ihrer Kontrolle bleiben. Dies ist möglich, weil wir effiziente Open-Source-Modelle verwenden, die – einmal auf den Anwendungsfall zugeschnitten – auf vergleichsweise günsitger Hardware laufen."}
                    </p>
                </div>
                <div className={styles.solution}>
                    <h3>{l === "en"
                        ? "Buy once, own forever"
                        : "Einmal kaufen, für immer nutzen"
                    }</h3>
                    <p>
                        {l === "en"
                        ? "We don't rent hardware. We don't sell subscriptions. Our software stack is open with fair-use licenses. Our business model is simple: sell the hardware, get paid for setup, know-how transfer, optional maintenance and training."
                        : "Wir vermieten keine Hardware. Wir verkaufen keine Abos. Unser Software-Stack ist offen mit Fair-Use Lizenzen. Unser Geschäftsmodell ist einfach: Verkauf von Hardware, Einrichtung und Wissenstransfer. Zusätzlich bieten wir Wartung und Mitarbeiter-Schulungen an."}
                    </p>
                </div>
                <div className={styles.solution}>
                    <h3>{l === "en"
                        ? "Independence"
                        : "Unabhängigkeit"
                    }</h3>
                    <p>
                        {l === "en"
                        ? "Our on-premises AI solutions free you from dependence on third-party cloud providers. You maintain full control over your AI systems, reducing the risk of vendor lock-in and ensuring that your unique business needs are met."
                        : "Ihre Lösung, ihre Regeln. Mit einem open-source Stack sind sie unabhängig von Drittanbietern, Cloud-Providern, und uns. Daten umziehen? Kein Problem. Sie behalten die volle Kontrolle über Ihre KI-Systeme und minimieren das Risiko von Vendor-Lock-ins."}
                    </p>
                </div>
                <div className={styles.solution}>
                    <h3>{l === "en"
                        ? "Transparency and Control"
                        : "Transparenz und Kontrolle"
                    }</h3>
                    <p>
                        {l === "en"
                        ? "Open-source models and transparent AI implementations allow you verify and audit which data ends up where. This transparency builds trust and helps ensure compliance with industry regulations."
                        : "Open-source Modelle und transparente KI-Implementierungen ermöglichen es Ihnen zu überprüfen und nachzuvollziehen, welche Daten wohin gelangen. Das schafft Transparenz und Vertrauen, und hilft bei der Einhaltung von Datenschutzauflagen."}
                    </p>
                </div>
            </div>
        </section>
    );
}
