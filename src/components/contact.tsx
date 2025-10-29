import { useApp } from "../contexts/AppContext";
import styles from "./contact.module.scss";

export function Contact() {
    const { l } = useApp();

    return (
        <section className={styles.contact}>
            <div>
                <h2>{l === "en" ? "Contact Us" : "Kontakt"}</h2>
                <h3>Email</h3>
                <p>
                    {l === "en"
                        ? "For inquiries, please contact us at"
                        : "Fragen? Kontaktieren Sie uns unter"}{" "}
                    <a href="mailto:info@neurown.de">info@neurown.de</a>.
                </p>
            </div>
        </section>
    );
}
