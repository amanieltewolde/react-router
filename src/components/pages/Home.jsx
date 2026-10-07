import brandname from '../../assets/images/logo2.png'

export default function Home() {
    return (
        <>
            <h2 className="mb-5">Home</h2>
            <img src={brandname} width={150} alt="brandname" />
            <h3>Welcome to our website</h3>
            <p>Enjoy your journey!!</p>
        </>
    )
}