import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import MainContent from "../Layout/MainContent";

export default function DefaultLayout() {
    return (
        <div className="d-flex flex-column min-vh-100 text-gold">
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}