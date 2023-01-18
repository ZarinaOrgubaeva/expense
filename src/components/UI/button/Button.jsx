import "./Button.css"
export const Button = (props)=>{
    return (
        <button onClick={props.onClick}>{props.title}</button>
    )
}