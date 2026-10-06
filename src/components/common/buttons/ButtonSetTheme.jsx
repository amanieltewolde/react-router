import { Moon } from "lucide-react";
import { useState, useEffect } from "react";

export default function ButtonSetTheme() {

    const [toggle, setToggle] = useState(() => {
        const savedDataTheme = JSON.parse(localStorage.getItem('dark-mode'));
        return savedDataTheme || false;
    })

    useEffect(() => {

        localStorage.setItem('dark-mode', JSON.stringify(toggle));

        if (toggle) {
            document.documentElement.setAttribute('data-bs-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-bs-theme', 'light');
        }
    }, [toggle]);

    useEffect(() => {
        return () => {
            document.documentElement.setAttribute('data-bs-theme', 'light');

            localStorage.removeItem('dark-mode');
        }
    }, [])

    return (
        <>
            <button value={toggle} onClick={() => setToggle(!toggle)} className="btn">
                {toggle ? <Moon fill="yellow" /> : <Moon />}
            </button>
        </>
    )
}