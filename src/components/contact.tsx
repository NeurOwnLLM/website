import styles from "./contact.module.scss";

export function Contact() {
    return (
        <section className={styles.contact}>
            <h2>Contact Us</h2>
            <h3>Email</h3>
            <p>
                For inquiries, please contact us at{" "}
                <a href="mailto:info@neurown.de">info@neurown.de</a>.
            </p>
        </section>
    );
}
