import { NavLink } from "react-router";
import Logo from "../common/Logo";

const navLink = [
    {
        label: 'Home',
        path: '/',
    },

    {
        label: 'Products',
        path: '/products',
    },

    {
        label: 'About Us',
        path: '/about_us',
    },
];

export default function Header() {
    return (
        <header className="bg-primary text-white">
            <nav className="navbar">
                <div className="container-fluid">
                    <div className="navbar-nav d-flex flex-row gap-2">
                        {navLink.map(el => (
                            <NavLink key={el.path} className={({ isActive }) => `nav-link ${isActive ? 'fw-bold' : ''}`} to={el.path}>{el.label}</NavLink>
                        ))}

                    </div>
                    <Logo />

                    <button className="btn border text-white">button set theme here</button>
                </div>
            </nav>

        </header>
    )
}