import Input from "../../UI/Input";
import  { useState, useRef } from "react";
import "./MealItemForm.css";

export default function MealItemForm(props) {
  const quantityRef = useRef();   
  const [amountIsValid, setAmountIsValid] = useState(true);
  function quantityHandler(e){
    e.preventDefault();
    const enteredQuantity = quantityRef.current.value;
    const enteredQuantityNumber = +enteredQuantity;
    if(enteredQuantity.trim().length === 0 || enteredQuantityNumber < 1 || enteredQuantityNumber > 5){
      setAmountIsValid(false);
      return;
    }
    props.addItemHandler(enteredQuantityNumber);
  }

  return (
    <form className="form" onSubmit={quantityHandler}>
      <Input label="Amount" ref= {quantityRef} input={{
        id : "amount_"+props.id,
        type : "number",
        min : "1",
        max : "5",
        defaultValue: "1",
        step: "1",
      }} />
      <button>+ Add</button>
      {!amountIsValid && <p>inValid input</p>}
    </form>
  );
}
