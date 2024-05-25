import "./css/Button.css";

export default function Button (prop) {

    return (
        <button onClick={prop.onClick} className={prop.className}>{prop.title}</button>
    );
}