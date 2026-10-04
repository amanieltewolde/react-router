import { useEffect } from "react"
import { endpoint } from "../../utilities/services/Api-endpoint";
import { useState } from "react";
import CardProduct from "../common/CardProduct";

export default function Products() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function getProducts() {
            const response = await fetch(endpoint)

            const data = await response.json();

            setProducts(data.products);
        }
        getProducts();
    }, [])


    return (
        <>
            <h2 className="mb-5">Products</h2>
            <div className="container-fluid d-flex
         justify-content-center">
                <div className="w-75 row row-cols-2 row-cols-lg-4 gx-2 gy-5">
                    {products.map(product => (
                        <div key={product.id} className="col">
                            <CardProduct
                                image={product.thumbnail}
                                price={product.price}
                                title={product.title}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}