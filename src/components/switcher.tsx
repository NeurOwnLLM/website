import { MoonIcon, SunIcon } from "lucide-react";
import { useApp } from "../contexts/AppContext";
import styles from "./switcher.module.scss";

export function LanguageSwitcher() {
    const { language, setLanguage } = useApp();

    return (
        <button
            className={styles.switcher}
            aria-label={`Switch language to ${language === "en" ? "de" : "en"}`}
            onClick={() => setLanguage((prev) => (prev === "en" ? "de" : "en"))}
        >
            {language.toUpperCase()}
        </button>
    );
}

export function ThemeSwitcher() {
    const { theme, setTheme } = useApp();

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <button
            className={styles.switcher}
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
        >
            {theme === "light" ? <SunIcon /> : <MoonIcon />}
        </button>
    );
}
