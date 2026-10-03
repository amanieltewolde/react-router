import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import MainContent from "./components/Layout/MainContent";

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}