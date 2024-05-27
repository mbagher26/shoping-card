import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProductSection from './components/productSection/ProductSection';
import products from './data/products';
import Toast from './components/Toast/Toast';
import Cart from './components/Cart/Cart';

function App() {
  const [allProducts, setAllProducts] = useState(products);
  return (
    <div className="App">
      <Navbar/>     
      <main className='pb-5'>
        <div className='container-app'>
          <h1 className='text-center mt-5'>All Products</h1>
          {allProducts.map(product => (
            <ProductSection key={product.id} product={product}/>
          ))}
        </div>
      </main>
      <Toast/>
      <Cart />
    </div>
  );
}

export default App;
