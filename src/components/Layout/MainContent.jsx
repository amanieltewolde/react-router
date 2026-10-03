import AboutUs from "../pages/AboutUs";
import Home from "../pages/Home";
import Products from "../pages/Products";

export default function MainContent() {
    return (
        <main className="flex-grow-1">
            <Home />
            <Products />
            <AboutUs />
        </main>
    )
}