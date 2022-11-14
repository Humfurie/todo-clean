const Input = (props: any) => {

    const {
        type,
        name,
        action,
        checked,
        className,
        value,
        placeholder,
    } = props

    return(
        <input 
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        className={className}
        onChange={action}
        checked={checked}
         />
    )
}
export default Input