import './cart.scss'

const Cart = (props) => {
  const { image, title, price } = props.product

  return (
    <div className='cart'>
      <h2>My products</h2>
      <div className='cart-header-product'>
        <h3>Item</h3>
        <h3>Price</h3>
      </div>
      <div>
        <img src={image} alt=""/>
        <h5>{title}</h5>
        <p>{price}</p>
      </div>
    </div>
  )
}

export default Cart