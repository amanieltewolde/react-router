import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router"
import { endpoint } from "../../utilities/services/Api-endpoint";

export default function InfoProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState({})


    useEffect(() => {
        async function getProduct() {
            const response = await fetch(`${endpoint}/${id}`)

            const data = await response.json();
            console.log(data);
            setProduct(data)
        }
        getProduct()
    }, [id])
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