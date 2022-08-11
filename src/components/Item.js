
const Item = ({producto}) => {
  return (
    <article className="item">
        <h2 className="item__title">{producto.nombre}</h2>
        <p className="item__price">Precio : {producto.moneda} {producto.precio} </p>
        <p className="item__desc"> {producto.detalle} </p>
        <p className="item__img">  <img src={producto.foto}alt="new"/> </p>
    </article>
  )
}
export default Item