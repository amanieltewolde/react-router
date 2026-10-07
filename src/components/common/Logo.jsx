import { Link } from "react-router";
import logo from '../../assets/images/Logotest2.png'

export default function Logo({ width }) {
    return (
        <>
            <Link to="/" className="navbar-brand">
                <img src={logo} width={width} alt="Logo" className="d-inline-block align-text-top" />
            </Link>
        </>
    )
}