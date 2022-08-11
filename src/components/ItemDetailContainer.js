import { useEffect, useState } from "react"
import { forEach } from "react-bootstrap/esm/ElementChildren"
import ItemList from "./ItemList"

const productosIniciales = [
    {
        id: 1,
        nombre: "Producto 1",
        moneda: "USD",
        detalle: "Detalle del producto 1",
        foto: "imgPro.jpg",
        precio: 100
    }
]

const ItemDetailContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const pedido = new Promise((res, rej) => {
            setTimeout(() => {
                res(productosIniciales)
            }, 2000)
        })

        pedido.then((resultado) => {
            setProductos(resultado)
            setLoading(false)
        })

        pedido.catch((error) => {
            return (
                <p>"Termino el pedido mal"</p>
            )
        })

        pedido.finally(() => {
            return (
                <p>"Termino el pedido"</p>
            )
        })

    }, [])


    if (loading) {
        return (
            <p>Cargando...</p>
        )
    } else {
        return (
            <ItemList productos={productos} />
        )
    }
}
export default ItemDetailContainer