const Input = (props: any) => {

    const {
        type,
        name,
        action,
        checked,
        className
    } = props

    return(
        <input 
        type={type}
        name={name}
        className={className}
        onChange={e => {
            action(e.target.value)
        }}
        checked={checked}
         />
    )
}
export default Input