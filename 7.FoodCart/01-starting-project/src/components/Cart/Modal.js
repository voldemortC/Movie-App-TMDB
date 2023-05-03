import ReactDOM from "react-dom";
import "./Modal.css";
export default function Modal(props){
    const Backdrop = props => {
        return(
            <div className = "backdrop" onClick = {props.closeModal}>
            </div>
        );
    }

    const ModalOverlay = props => {
        return(
            <div className = "modal">
                <div>
                    {props.children}
                </div>
            </div>
        );
    }

    return(
        <>
           {ReactDOM.createPortal(<Backdrop closeModal = {props.closeModal}/>, document.getElementById('overlays'))}
           {ReactDOM.createPortal(<ModalOverlay>{props.children}</ ModalOverlay>, document.getElementById('overlays')  )}           
        </>
    );
}