import CartContextProvider from "../../context/CartContext";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import MainContent from "../Layout/MainContent";

export default function DefaultLayout() {
    return (
        <div className="d-flex flex-column min-vh-100 text-gold">
            <CartContextProvider>
                <Header />
                <MainContent />
            </CartContextProvider>
            <Footer />
        </div>
    )
}