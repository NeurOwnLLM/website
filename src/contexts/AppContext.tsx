import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    type Dispatch,
    type SetStateAction,
} from "react";

export type Language = "en" | "de";
export type Theme = "light" | "dark";

interface AppContextType {
    language: Language;
    setLanguage: Dispatch<SetStateAction<Language>>;
    theme: Theme;
    setTheme: Dispatch<SetStateAction<Theme>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
    children: React.ReactNode;
}

/** Basic context for the app
 * this includes language and theme (dark/light)
 */
export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [language, setLanguage] = useState<Language>("en");
    const [theme, setTheme] = useState<Theme>(() => {
        // Check if user has a theme preference in localStorage
        const savedTheme = localStorage.getItem("theme") as Theme;
        if (savedTheme) {
            return savedTheme;
        }

        if (
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
            return "dark";
        }

        return "dark";
    });

    // Update document class and localStorage when theme changes
    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    // Update HTML lang attribute when language changes
    useEffect(() => {
        document.documentElement.setAttribute("lang", language);
    }, [language]);

    return (
        <AppContext.Provider
            value={{
                language,
                setLanguage,
                theme,
                setTheme,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useApp = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error("useApp must be used within an AppProvider");
    }
    return context;
};
