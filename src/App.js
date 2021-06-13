import { useState } from "react";

import './App.scss';
import ProductCard from "./components/productCard";
import ProductCart from "./components/productCart";

function App() {
  const savedCart = JSON.parse(localStorage.getItem('cart')) || []

  const [ allProducts, setAllProducts] = useState([])
  const [ productToAddInCart, setProductToAddInCart] = useState(savedCart)

  fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(arrayProducts => setAllProducts(arrayProducts))

  const addToCart = (element) => {
    setProductToAddInCart(prevProduct => {
      return [element, ...prevProduct]
    })
  }

  localStorage.setItem('cart', JSON.stringify(productToAddInCart))

  return (
    <div className='page-content'>
      <div className='all-products-cards'>
        {allProducts.map((current, index) => <ProductCard product={current} key={index} addToCart={addToCart}/>)}
      </div>
      <ProductCart productsToAdd={productToAddInCart}/>
    </div>
  );
}

export default App;
