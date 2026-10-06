import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router"
import { endpoint } from "../../utilities/services/Api-endpoint";
import { ArrowRight } from "lucide-react";
import { OctagonX } from "lucide-react";
import Loader from "../common/Loader";

export default function InfoProduct() {
    const { id } = useParams();
    const navigate = useNavigate()
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)


    useEffect(() => {
        async function getProduct() {

            setLoading(true)

            try {
                const response = await fetch(`${endpoint}/${id}`)

                if (!response.ok) {
                    if (response.status === 404 || response.status === 400) {
                        navigate('/products');
                    } else {
                        throw new Error('Something  went wrong with your request, please try later')
                    }
                }

                const data = await response.json();

                setProduct(data)

            } catch (e) {
                console.log(e.message);
                setError(e.message)

            } finally {
                setLoading(false)
            }
        }
        getProduct()
    }, [id, navigate])

    return (
        <>
            {error && <div className=" container alert alert-danger mt-5 fs-3" role="alert"><OctagonX /> {error}
                <div><ArrowRight /> <Link className="btn btn-dark" to={'/'}>Home</Link> </div>
            </div>}

            {loading && <Loader />}

            {!!product &&
                <>
                    <h1>{product.title}</h1>
                    <img src={product.thumbnail} alt={product.title} />
                    <p>{product.price}</p>
                    <p>{product.description}</p>
                    <span className="badge bg-success">{product.availabilityStatus
                    }</span>
                </>
            }
        </>
    )
}