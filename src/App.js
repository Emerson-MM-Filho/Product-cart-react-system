import { useState } from "react";

import './App.scss';
import ProductCard from "./components/productCard";
import Cart from "./components/cart";

function App() {
  const [ allProducts, setAllProducts] = useState([])
  const [ productToAddInCart, setProductToAddInCart] = useState([])

  fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(arrayProducts => setAllProducts(arrayProducts))

  const addToCart = (element) => {
    setProductToAddInCart(prevProduct => {
      return [element, ...prevProduct]
    })
  }


  return (
    <div className='page-content'>
      <div className='all-products-cards'>
        {allProducts.map((current, index) => <ProductCard product={current} key={index} addToCart={addToCart}/>)}
      </div>
      <div className='cart'>
        <h2>My products cart</h2>
        <div className='cart-header-product'>
          <h3>Item</h3>
          <h3>Price</h3>
        </div>
        {productToAddInCart.map((current, index) => <Cart product={current} key={index}/>)}
      </div>
    </div>
  );
}

export default App;
