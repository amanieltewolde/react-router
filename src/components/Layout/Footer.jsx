import Logo from "../common/Logo";

export default function Footer() {
    return (
        <footer className="bg-primary d-flex text-white p-2 justify-content-center gap-2">
            <Logo />
            <h3 className="fw-light fs-5">Website name here <span className='fs-6'>Copyright {new Date().getFullYear()}</span></h3>
        </footer >
    )
}