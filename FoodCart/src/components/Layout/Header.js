import "./Header.css";
import Button  from "./HeaderCartButton";
import MealsImage from "../../assets/meals.jpg";
export default function Headers(props){
    return(
        <>
            <header className = "header">
                <h1>ReactMeals</h1>
                <Button onClick = {props.toggle}/>
            </header>
            <div className= "main-image">
                <img src = {MealsImage} alt = "meals"/>
            </div>
        </>
    );
}