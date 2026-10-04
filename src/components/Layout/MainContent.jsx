import { Outlet } from "react-router";


export default function MainContent() {
    return (
        <main className="flex-grow-1">
            <Outlet />
        </main>
    )
}