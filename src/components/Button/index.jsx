function Button(props) {
    const { title } = props

    return (
        <button className="bg-emerald-500 rounded-xl font-bold text-white px-4 py-3 hover:bg-emerald-600 cursor-pointer">
            {title}
        </button>
    )
}

export default Button