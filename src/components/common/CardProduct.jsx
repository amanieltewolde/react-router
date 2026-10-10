import { Link } from "react-router";
import ButtonAddProduct from "./buttons/ButtonAddProduct";

export default function CardProduct({ title, image, price, id, product, }) {

    return (
        <>
            <div className="card h-100 bg-dark bg-opacity-75 border border-3 border-warning">
                <img className="card-img-top" src={image} alt={title} />
                <div className="d-flex flex-column card-body bg-primary bg-gradient">
                    <h4 className="card-title h6 text-gold bg-dark rounded">{title}</h4>
                    <p className="badge">{new Intl.NumberFormat('it-IT', ({
                        style: 'currency',
                        currency: 'EUR'
                    })).format(price)}</p>
                    <div className=" d-flex flex-grow-1 align-items-center justify-content-center gap-1">
                        <Link to={`/products/${id}`} className="btn btn-sm text-bg-dark" role="button">Info</Link>
                        <ButtonAddProduct product={product} />
                    </div>
                </div>
            </div>
        </>
    )
}