import { useState } from "react";

import './App.scss';
import ProductCard from "./components/productCard";
import ProductCart from "./components/productCart";

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
      <ProductCart productsToAdd={productToAddInCart}/>
    </div>
  );
}

export default App;
