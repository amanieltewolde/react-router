import { NavLink } from "react-router";
import Logo from "../common/Logo";
import { ShoppingCart } from "lucide-react";
// import ButtonSetTheme from "../common/buttons/ButtonSetTheme";

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
        <header className="bg-black border-bottom border-4" >
            <nav className="navbar">
                <div className="container-fluid">
                    <div className="navbar-nav d-flex flex-row gap-2">
                        {navLink.map(el => (
                            <NavLink key={el.path} className={({ isActive }) => `nav-link fs-6 text-gold ${isActive ? 'fw-bold' : ''}`} to={el.path}>{el.label}</NavLink>
                        ))}

                    </div>
                    <Logo
                        width="75" />
                    {/* <ButtonSetTheme /> */}
                    <div>
                        <ShoppingCart />
                        <div className="badge bg-danger">x</div>
                    </div>
                </div>
            </nav>

        </header>
    )
}