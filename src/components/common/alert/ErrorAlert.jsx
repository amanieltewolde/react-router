import { OctagonX } from "lucide-react";

export default function ErrorAlert({ children, message }) {
    return (
        <>
            <div className="container alert alert-danger mt-5 fs-3" role="alert">
                <OctagonX /> {message}
                {children}
            </div>
        </>
    )
}