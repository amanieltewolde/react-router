import Logo from "../common/Logo";

export default function Footer() {
    return (
        <footer className="bg-primary d-flex text-white p-2 justify-content-center align-items-center gap-2">
            <Logo
                width="60" />
            <span className='fs-6'>Copyright {new Date().getFullYear()}</span>
        </footer >
    )
}