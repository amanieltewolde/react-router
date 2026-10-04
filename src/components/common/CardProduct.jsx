export default function CardProduct({ title, image, price }) {
    return (
        <>
            <div className="card h-100">
                <img className="card-img-top" src={image} alt={title} />
                <div className="card-body">
                    <h4 className="card-title fs-6">{title}</h4>
                    <p>{price} €</p>
                </div>
            </div>
        </>
    )
}