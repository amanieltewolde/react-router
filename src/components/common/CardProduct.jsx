import { Link } from "react-router";
import { useCartContext } from "../../context/CartContext";

export default function CardProduct({ title, image, price, id, product, }) {
    const { handleAddCardProducts } = useCartContext()

    return (
        <>
            <div className="card h-100">
                <img className="card-img-top" src={image} alt={title} />
                <div className="card-body">
                    <h4 className="card-title fs-6 fw-bold">{title}</h4>
                    <p>{new Intl.NumberFormat('it-IT', ({
                        style: 'currency',
                        currency: 'EUR'
                    })).format(price)}</p>
                    <div className=" d-flex align-items-center gap-1">
                        <Link to={`/products/${id}`} className="btn btn-sm btn-primary" role="button">Info</Link>
                        <button onClick={() => handleAddCardProducts(product)} className="btn btn-sm bg-gold border border-3">Add to cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}