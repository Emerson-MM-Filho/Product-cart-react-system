import './productCart.scss'
import ProductInCart from "./productInCart";

const ProductCart = (props) => {
  return (
    <div className='cart'>
      <h2>My products cart</h2>
      <div className='cart-header-product'>
        <h3>Item</h3>
        <h3>Price</h3>
      </div>
      {props.productsToAdd.map((current, index) => <ProductInCart product={current} key={index}/>)}
    </div>
  )
}

export default ProductCart