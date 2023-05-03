import CartIcon from "../Cart/CartIcon";
import "./HeaderCartButton.css";
import CartContext from "../../store/cart-context";
import { useContext, useState, useEffect } from "react";
export default function HeaderCartButton(props){
    const cartCtx = useContext(CartContext);
    const [buttonhighlighted, SetButtonHighlighted] = useState(false);

    useEffect(()=>{
        if(cartCtx.items.length === 0){
            return;
        }

        SetButtonHighlighted(true);

        const timer = setTimeout(()=>{
            SetButtonHighlighted(false);
        }, 300)
        
        return() => {
            clearTimeout(timer);
        };
    }, [cartCtx.items]);

    let numberOfCartItems = 0;
    if(cartCtx.items.length > 0){
        numberOfCartItems = cartCtx.items.reduce((currNum, item)=>{
            return currNum + item.amount;
        },0)
    }
    return(
        <button className = {`button ${!buttonhighlighted ? 'bump' : ''}`} onClick = {props.onClick}>
            <span className= "icon"><CartIcon /></span>
            <span>Your Cart</span>
            <span className = "badge">{numberOfCartItems}</span>
        </button>
    );
}