
export default function TextContainer({ children }) {
    return (
        <>
            <div className="bg-dark bg-opacity-75 container w-50 my-5 border border-warning  rounded-3">
                {children}
            </div>
        </>
    )
}