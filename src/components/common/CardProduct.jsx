// import { useParams } from "react-router";
import { Link } from "react-router";

export default function CardProduct({ title, image, price, id }) {

    // const { id } = useParams()
    return (
        <>
            <div className="card h-100">
                <img className="card-img-top" src={image} alt={title} />
                <div className="card-body">
                    <h4 className="card-title fs-6">{title}</h4>
                    <p>{new Intl.NumberFormat('it-IT', ({
                        style: 'currency',
                        currency: 'EUR'
                    })).format(price)}</p>
                    <Link to={`/products/${id}`} className="btn btn-primary" role="button">More info</Link>
                </div>
            </div>
        </>
    )
}