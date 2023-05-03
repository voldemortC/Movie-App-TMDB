import {useState} from "react";
import Meals from "./components/Meals/Meals";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
function App() {
  const [showCart, setShowCart] = useState(true);
  function toggle(){
    setShowCart(!showCart)
  }
  return (
    <CartProvider>
      {!showCart && <Cart toggle = {toggle}/>}
      <Header toggle = {toggle}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
