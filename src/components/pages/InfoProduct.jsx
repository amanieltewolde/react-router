import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router"
import { endpoint } from "../../utilities/services/Api-endpoint";
import { ArrowRight } from "lucide-react";
import Loader from "../common/Loader";
import ErrorAlert from "../common/alert/ErrorAlert";
import TextContainer from "../common/TextContainer";
import ButtonAddProduct from "../common/buttons/ButtonAddProduct";

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

                // Fake call to get a 500 error
                // const response = await fetch('https://dummyjson.com/http/500');

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
            {error &&
                <ErrorAlert
                    message={error}>

                    <div><ArrowRight /> <Link className="btn btn-dark" to={'/'}>Home</Link> </div>
                </ErrorAlert>}

            {loading && <Loader />}

            {!!product &&
                <>
                    <TextContainer>
                        <h1>{product.title}</h1>
                        <div className="d-flex">

                            <img src={product.thumbnail} alt={product.title} />
                            <div className="d-flex flex-column justify-content-center align-items-end gap-2">
                                <p className="fw-lighter text-end">{product.description}</p>
                                <span className="badge bg-success">{product.availabilityStatus}</span>
                                <p className="fw-bold"> {
                                    new Intl.NumberFormat('it-IT', ({
                                        style: 'currency',
                                        currency: 'EUR'
                                    })).format(product.price)
                                }</p>

                                <ButtonAddProduct product={product} />
                            </div>
                        </div>
                    </TextContainer>
                </>
            }
        </>
    )
}