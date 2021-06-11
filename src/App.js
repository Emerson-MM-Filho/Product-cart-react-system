import { useState } from "react";

import './App.scss';
import ProductCard from "./components/productCard";

function App() {
  const [ allProducts, setAllProducts] = useState([])
  fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(arrayProducts => setAllProducts(arrayProducts))

  return (
    <div className='page-content'>
      <div className='all-products-cards'>
        {allProducts.map((current, index) => <ProductCard product={current} key={index}/>)}
      </div>
      <div className='product-cart-container'>

      </div>
    </div>
  );
}

export default App;
