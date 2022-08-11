import { useEffect, useState } from "react"

const productosIniciales = [
    {
        id: 1,
        nombre: "Producto 1",
        moneda: "USD",
        precio: 100
    },
    {
        id: 2,
        nombre: "Producto 2",
        moneda: "USD",
        precio: 200
    }
]


const ItemDetailContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const pedido = new Promise((res, rej) => {
            setTimeout(() => {
                res(productosIniciales.findIndex((producto) => producto.id === parseInt(window.location.pathname.split("/")[2])))
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
export default ItemListContainer