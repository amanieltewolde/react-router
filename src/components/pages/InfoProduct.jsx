import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router"
import { endpoint } from "../../utilities/services/Api-endpoint";

export default function InfoProduct() {
    const { id } = useParams();
    const navigate = useNavigate()
    const [product, setProduct] = useState({})


    useEffect(() => {
        async function getProduct() {

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

            } catch (error) {
                console.log(error.message);

            }
        }
        getProduct()
    }, [id, navigate])

    return (
        <>
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