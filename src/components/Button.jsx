let Button = (props) =>{
    return (
        <>
            <button onClick={props.click} className={props.class} >{props.label}</button>
        </>
    )
}

export default Button