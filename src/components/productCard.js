import './productCard.scss'

const ProductCard = (props) => {
  const { id, title, price, image } = props.product
  return (
    <div className="card" id={id}>
      <div className="card-body product-card">
        <img src={image} className="card-img-top" alt=''/>
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <div className="card-price-container">
          <h5 className="card-current-price">R$ {price.toFixed(2)}</h5>
          <h5 className="card-last-price">R$ {(price * 1.1).toFixed(2)}</h5>
        </div>
        <button className="btn btn-primary">
          Add to cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard