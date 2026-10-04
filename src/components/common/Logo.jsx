import { Link } from "react-router";

export default function Logo() {
    return (
        <>
            <Link to="/" className="navbar-brand">
                <img src="#" alt="Logo" className="d-inline-block align-text-top" />
                website name here
            </Link>
        </>
    )
}