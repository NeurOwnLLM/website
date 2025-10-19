import styles from "./footer.module.scss";

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p>&copy; 2025 neurOwn. All rights reserved.</p>
            </div>
        </footer>
    );
}
