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
    return (
        <section className={styles.mission}>
            <h2>Our Mission</h2>
            <p>
                neurOwn was founded on a simple but powerful belief: the transformative
                power of Artificial Intelligence should be accessible, trustworthy, and
                private for every business, not just tech giants.
            </p>
            <p>
                We specialize in bringing state-of-the-art AI directly to your premises.
                Our mission is to democratize AI for small and medium-sized businesses,
                including those in the non-tech sector like craftsmanship and
                production.
            </p>
        </section>
    );
}

function Problems() {
    return (
        <section className={styles.problems}>
            <h2>The Problem</h2>
            <div className={styles.problem}>
                <h3>Where is your data?</h3>
                <p>
                    Sensitive business data is often processed in the cloud by
                    third-party AI providers. This raises significant privacy and
                    security concerns, as well as potential compliance issues with data
                    protection regulations.
                </p>
            </div>
            <div className={styles.problem}>
                <h3>High Costs of Cloud AI Services</h3>
                <p>
                    Relying on cloud-based AI services can be expensive, especially for
                    small and medium-sized businesses. Ongoing costs for data storage,
                    processing, and API usage can quickly add up, making it difficult
                    for smaller enterprises to leverage AI effectively.
                </p>
            </div>
            <div className={styles.problem}>
                <h3>Big Tech Dependency</h3>
                <p>
                    Many AI solutions are provided by a few large technology companies,
                    leading to vendor lock-in and limited options for customization.
                    Businesses may find themselves dependent on these providers for
                    critical operations, reducing their flexibility and control over AI
                    implementations.
                </p>
            </div>
            <div className={styles.problem}>
                <h3>Transparency</h3>
                <p>
                    Many AI solutions operate as "black boxes," making it difficult for
                    businesses to understand how decisions are made. This lack of
                    transparency can hinder trust and make it challenging to comply with
                    regulations.
                </p>
            </div>
        </section>
    );
}

function Solutions() {
    return (
        <section className={styles.solutions}>
            <h2>Our Solution</h2>
            <div className={styles.solution}>
                <h3>On-Premises AI Deployment</h3>
                <p>
                    We bring cutting-edge AI models directly to your business location,
                    ensuring that your sensitive data remains within your control. This
                    approach enhances data privacy and security while complying with
                    data protection regulations.
                </p>
            </div>
            <div className={styles.solution}>
                <h3>Buy once, own it forever</h3>
                <p>
                    By deploying AI on-premises, we help you reduce ongoing costs
                    associated with cloud services. Our solutions are tailored to fit
                    the budget constraints of small and medium-sized businesses, making
                    AI adoption more accessible.
                </p>
            </div>
            <div className={styles.solution}>
                <h3>Independence</h3>
                <p>
                    Our on-premises AI solutions free you from dependence on third-party
                    cloud providers. You maintain full control over your AI systems,
                    reducing the risk of vendor lock-in and ensuring that your unique
                    business needs are met.
                </p>
            </div>
            <div className={styles.solution}>
                <h3>Transparency and Control</h3>
                <p>
                    Open-source models and transparent AI implementations allow you to
                    understand how decisions are made. This transparency builds trust
                    and helps ensure compliance with industry regulations.
                </p>
            </div>
        </section>
    );
}
