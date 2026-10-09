import brandname from '../../assets/images/Logotest2.png'

export default function Home() {
    return (
        <>
            {/* <h2 className="mb-5">Home</h2> */}
            <div className='mt-5'>
                <img src={brandname} width={400} alt="brandname" />
                <h3 className='mt-3'>Welcome to our website</h3>
                <p>Enjoy your journey!!</p>
            </div>
        </>
    )
}