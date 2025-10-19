import "./App.css";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Products } from "./components/products";

function App() {
    return (
        <div className="app">
            <Header />
            <main className="main-content">
                <Hero />
                <About />
                <Products />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
