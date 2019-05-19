import React from 'react';
import Cart from './Components/Cart'
import SingleProductPage from './Components/SingleProductPage'
import { CartProvider } from './Contexts/CartContext'
import { SettingProvider } from './Contexts/SettingContext'

function App() {
  return (
    <div className="App">
      <SettingProvider>
        <CartProvider>
          <Cart />
          <SingleProductPage />
        </CartProvider>
      </SettingProvider>

    </div>
  );
}

export default App;
