import { useEffect } from "react"
import { endpoint } from "../../utilities/services/Api-endpoint";
import { useState } from "react";
import CardProduct from "../common/CardProduct";
import Loader from "../common/Loader";

export default function Products() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function getProducts() {

            setLoading(true)

            // Fake delay
            // await new Promise(resolve => setTimeout(resolve, 2000));

            const response = await fetch(`${endpoint}?limit=12`)

            const data = await response.json();

            setProducts(data.products);

            setLoading(false)
        }

        getProducts();
    }, [])


    return (
        <>
            <h2 className="mb-5">Products</h2>

            {loading && <Loader />}

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