import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  return (
    <Layout>
      {showCart && <Cart toggleCart = {toggleCart} />}
      <Products />
    </Layout>
  );
}

export default App;
