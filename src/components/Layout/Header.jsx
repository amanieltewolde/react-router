import { Link } from "react-router";


export default function Header() {
    return (
        <header className="bg-primary text-white">
            <nav className="navbar">
                <div className="container-fluid">
                    <div className="navbar-nav d-flex flex-row gap-2">
                        <Link className="nav-link" to='/'>Home</Link>
                        <Link className="nav-link" to='/products'>Products</Link>
                        <Link className="nav-link" to='/about_us'>About Us</Link>
                    </div>
                    <Link to="/" className="navbar-brand">
                        <img src="#" alt="Logo" className="d-inline-block align-text-top" />
                        website name here
                    </Link>
                    <button className="btn border text-white">button set theme here</button>
                </div>
            </nav>

        </header>
    )
}