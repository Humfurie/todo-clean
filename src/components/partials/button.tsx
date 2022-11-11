const Button = (props: any) => {

    const {
        name,
        className,
        label,
        action
    } = props
    return (
        <button
            name={name}
            className={className}
            onClick={action}
        >
            {label}
        </button>
    )
}
export default Button