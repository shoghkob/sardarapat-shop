import React, { useState } from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import { Routes, Route } from 'react-router-dom'

const App = () => {
  const [cart, setCart] = useState([])

  const addToCart = (product) => { // {name: 'name', price: 1111}
    const exist = cart.find((x) => x.id === product.id)

    if (exist) {
      alert("The product has already added to cart!")
    } else {
      setCart([{ ...product, qty: 1 }, ...cart])
      alert("The product has been added to cart!")
    }
  }

  const incrementQty = (productId) => {
    const exist = cart.find((x) => x.id === productId)

    setCart(cart.map((curElm) => curElm.id === productId ? { ...exist, qty: exist.qty + 1 } : curElm))
  }

  const decrementQty = (productId) => {
    const exist = cart.find((x) => x.id === productId)

    if (exist.qty > 1) {
      setCart(cart.map((curElm) => curElm.id === productId ? { ...exist, qty: exist.qty - 1 } : curElm))
    } else {
      setCart(cart.filter((curElm) => curElm.id !== productId))
    }
  }

  //remove
  const removeProduct = (productId) => {
    setCart(cart.filter((curElm) => curElm.id !== productId))
  }

  return (
    <>
      <Header cartItemsCount={cart.length} />
      <div className="mt-[120px]">
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} incrementQty={incrementQty} decrementQty={decrementQty} removeProduct={removeProduct} />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
export default App;
