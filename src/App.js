import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProductSection from './components/productSection/ProductSection';
import Toast from './components/Toast/Toast';
import Cart from './components/Cart/Cart';
import DataProvider, { DataContext } from './Context/DataContext';
import products from './data/products';

function App() {

  const [allProducts, setAllProducts] = useState(products);
  const [userCart, setUserCart] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [showCart, setShowCart] = useState(false);

  return (
    <DataContext.Provider value={{allProducts, userCart, setUserCart, showCart, setShowCart, showToast, setShowToast }}>
      <div className="App">
        <Navbar />
        <main className='pb-5'>
          <div className='container-app'>
            <h1 className='text-center mt-5'>All Products</h1>
              <ProductSection />
          </div>
        </main>
        <Toast />
        <Cart />
      </div>
    </DataContext.Provider>

  );
}

export default App;
