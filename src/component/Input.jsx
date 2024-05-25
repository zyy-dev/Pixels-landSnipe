import "./css/Input.css"

export default function Input (prop) {
    return (
        <input onChange={prop.onChange} placeholder={prop.title}></input>
    );
}