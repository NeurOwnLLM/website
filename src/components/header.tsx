import styles from "./header.module.scss";
import { LanguageSwitcher, ThemeSwitcher } from "./switcher";

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.branding}>
                    <img src="/logo192.png" alt="Logo" className={styles.logoImage} />
                    <a href="/" className={styles.logo}>
                        neurOwn
                    </a>
                </div>
                <div className={styles.switchers}>
                    <LanguageSwitcher />
                    <ThemeSwitcher />
                </div>
            </div>
        </header>
    );
}
