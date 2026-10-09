// import { useParams } from "react-router";
import { Link } from "react-router";

export default function CardProduct({ title, image, price, id }) {

    // const { id } = useParams()
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
                        <Link to={{}} className="btn btn-sm bg-gold" role="button">Add to cart</Link>
                    </div>
                </div>
            </div>
        </>
    )
}