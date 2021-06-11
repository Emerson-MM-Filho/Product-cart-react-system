import './productCard.scss'
import image from './teste.jpg'

const ProductCard = () => {
  const url = ''
  return (
    <div className="card" >
      <img src={image} className="card-img-top" alt=''/>
        <div className="card-body">
          <h5 className="card-title">Product name</h5>
          <div className="card-price-container">
            <h5 className="card-current-price">R$ 99,99</h5>
            <h5 className="card-last-price">R$ 159,99</h5>
          </div>
          <a className="btn btn-primary" href={url}>
            Add to cart
          </a>
        </div>
    </div>
  )
}

export default ProductCard