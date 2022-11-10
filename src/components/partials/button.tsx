const Button = (props: any) => {

    const {
        name,
        className,
        value,
        action,
        label,
    } = props
    return (
        <button
            name={name}
            className={className}
            value={value}
            onClick={e => {
                action(e.currentTarget.value)
            }}
        >
            {label}
        </button>
    )
}
export default Button