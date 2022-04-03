import Navbar from "./components/Navbar";
import "./assets/style.scss";
import Hero from "./components/Hero";
import About from "./components/About";
import Banner from "./components/Banner";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <About />
            <Banner />
        </div>
    );
}

export default App;
