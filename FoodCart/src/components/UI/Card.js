import "./Card.css";
export default function Card(props){
    const style = "card "+ props.className;
    return(
        <div className = {style}>
            {props.children}
        </div>
    );
}