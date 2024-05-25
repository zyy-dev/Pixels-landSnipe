import "./css/input.css"

export default function Input (prop) {
    return (
        <input onChange={prop.onChange}>{prop.title}</input>
    );
}