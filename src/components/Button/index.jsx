function Button(props) {
    const { title } = props

    return (
        <button className="mx-10 border border-solid border-color-white rounded-lg font-bold text-white px-3 py-2">
            {title}
        </button>
    )
}

export default Button