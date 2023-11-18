// import Button from "components/Button"

const Wish = (props) => {
    const { wish, doneWish } = props

    return (
        <div className="border border-solid border-yellow-200 text-white text-lg rounded-xl flex flex-col justify-between gap-4 px-6 py-6">
            <img src="{image}" alt="" />
            <div className="flex flex-col gap-2">
              <p className="text-xl font-bold">{wish.title}</p>
              <p>{wish.description}</p>
            </div>
            {/* <Button onClick={() => doneWish(wish.id)} title="Выполнено!"/> */}
            <a className="inline-block bg-yellow-500 rounded-xl font-bold text-white px-4 py-3 hover:bg-yellow-400 cursor-pointer" onClick={() => doneWish(wish.id)}>Выполнено!</a>
        </div>
    )
}

export default Wish