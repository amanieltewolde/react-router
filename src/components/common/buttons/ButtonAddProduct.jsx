import { useCartContext } from "../../../context/CartContext"

export default function ButtonAddProduct({ product }) {
    const { handleAddCardProducts } = useCartContext()

    return (
        <button onClick={() => handleAddCardProducts(product)} className="btn btn-sm bg-gold border border-3">Add to cart</button>

    )
}