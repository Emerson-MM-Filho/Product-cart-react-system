import './cart.scss'

const Cart = (props) => {
  const { image, title, price } = props.product

  let name = ''
  const maxName = 15;

  if (title.length >= maxName) {
    for (let index = 0; index <= maxName; index += 1) {
      name += title[index]
      if (index === maxName) {
        name += '...'
      }
    }
  }


  return (
    <div className="product-card-cart">
      <img src={image} alt=""/>
      <h5>{name}</h5>
      <p>${price}</p>
    </div>
  )
}

export default Cart