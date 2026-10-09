import { useEffect } from "react"
import { endpoint } from "../../utilities/services/Api-endpoint";
import { useState } from "react";
import CardProduct from "../common/CardProduct";
import Loader from "../common/Loader";
import { useNavigate } from "react-router";
import ErrorAlert from "../common/alert/ErrorAlert";
import TextContainer from "../common/TextContainer";

export default function Products() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)


    const navigate = useNavigate()

    useEffect(() => {
        async function getProducts() {
            setLoading(true)
            try {
                // Fake delay
                // await new Promise(resolve => setTimeout(resolve, 2000));

                const response = await fetch(`${endpoint}?limit=12`)

                // Fake call to get a 500 error
                // const response = await fetch('https://dummyjson.com/http/500');

                if (!response.ok) {
                    if (response.status === 404 || response.status === 400) {
                        navigate('/products');
                    } else {
                        throw new Error('Error fetching your data, please try later')
                    }
                }

                const data = await response.json();
                setProducts(data.products);
            } catch (e) {
                setError(e.message)
                console.log(e);

                console.log(e.message);

            } finally {
                setLoading(false)
            }
        }
        getProducts();
    }, [navigate])

    return (
        <>
            <TextContainer>
                <h2>Products</h2>
            </TextContainer>

            {loading && <Loader />}

            {error &&
                <ErrorAlert
                    message={error}
                />}


            <div className="container-fluid d-flex justify-content-center">
                <div className="w-75 row row-cols-2 row-cols-lg-4 gx-2 gy-5">
                    {products.map(product => (
                        <div key={product.id} className="col">
                            <CardProduct
                                image={product.thumbnail}
                                price={product.price}
                                title={product.title}
                                id={product.id}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}