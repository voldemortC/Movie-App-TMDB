import Modal from "./Modal";
import "./Cart.css";
import CartContext from "../../store/cart-context";
import CartItems from "./CartItem/CartItems";
import { useContext } from "react";
export default function Cart(props) {
    
  const items = [
    {
      id: "c1",
      name: "sushi",
      amount: 2,
      price: 12.99,
    },
    {
      id: "c2",
      name: "Schnitzel",
      amount: 3,
      price: 14.99,
    },
  ];
  const billCtx = useContext(CartContext);

  const cartItemAdd = (item) => {
    billCtx.addItem({...item, amount:1});
  };
  const cartItemRemove = (id) => {
    billCtx.removeItem({id, amount:1});
  };

  const hasItems = billCtx.items.length > 0;

  const cartItems = (
    <ul className='cart-items'>
      {billCtx.items.map((item) => (
        <CartItems
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemove.bind(null, item.id)}
          onAdd={cartItemAdd.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.toggle}>
      <ul className='cart-items'>
      {billCtx.items.map((item) => (
        <CartItems
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemove.bind(null, item.id)}
          onAdd={cartItemAdd.bind(null, item)}
        />
      ))}
    </ul>
      <div className="total">
        <span>Total Amount</span>
        <span>{billCtx.totalAmount.toFixed(2)}</span>
      </div>
      <div className="actions">
        <button onClick={props.toggle}>
          Close
        </button>
        {hasItems && <button>Order</button>}
      </div>
    </Modal>
  );
}
