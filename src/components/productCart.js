import './productCart.scss'
import ProductInCart from "./productInCart";

const ProductCart = (props) => {
  const totalPrice = props.productsToAdd.reduce((acc, current) => {
    acc += current.price
    return acc
  }, 0)

  return (
    <div className='cart'>
      <h2>My products cart</h2>
      <div className='cart-header-product'>
        <h3>Item</h3>
        <h3>Price</h3>
      </div>
      {props.productsToAdd.map((current, index) => <ProductInCart product={current} key={index}/>)}
      <div className='total-price'>
        <h3>Total:
          <span>
            ${totalPrice.toFixed(2)}
          </span>
        </h3>
      </div>
    </div>
  )
}

export default ProductCart