const Input = (props: any) => {

    const {
        type,
        name,
        action,
        checked,
        className,
        value,
    } = props

    return(
        <input 
        type={type}
        name={name}
        value={value}
        className={className}
        onChange={action}
        checked={checked}
         />
    )
}
export default Input