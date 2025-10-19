import styles from "./products.module.scss";

export function Products() {
    return (
        <section className={styles.products}>
            <h2>Our Services</h2>
            <p>
                At neurOwn, we offer a comprehensive suite of AI and machine learning
                solutions designed to bring cutting-edge technology directly to your business.
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
    return (
        <div className={styles.productItem}>
            <h3>AI Hardware Solutions</h3>
            <p>
                We provide powerful, energy-efficient AI computing hardware including the AMD-STRIX 395+, 
                preconfigured and optimized for inference workloads. Our systems run at just 150W full load 
                while supporting models up to 120B parameters, delivering enterprise-grade performance 
                with minimal power consumption.
            </p>
        </div>
    );
}

function Software() {
    return (
        <div className={styles.productItem}>
            <h3>Software & Configuration</h3>
            <p>
                Our software solutions include complete setup and configuration of AI frameworks, 
                model deployment, and ongoing maintenance. We specialize in open-source AI platforms 
                that provide transparency and control, ensuring your AI systems run smoothly and 
                securely on your premises. From initial installation to regular updates, we handle 
                the technical complexity so you can focus on your business.
            </p>
        </div>
    );
}

function Consulting() {
    return (
        <div className={styles.productItem}>
            <h3>AI Consulting & Deployment</h3>
            <p>
                Our expert consulting services help businesses identify AI opportunities, 
                develop implementation strategies, and deploy custom AI solutions. We work 
                closely with your team to understand your specific needs and create tailored 
                AI workflows that integrate seamlessly with your existing processes. Whether 
                you're just starting with AI or looking to optimize existing implementations, 
                our consultants provide the guidance and expertise needed for successful adoption.
            </p>
        </div>
    );
}
