// import Button from "components/Button"

const Wish = (props) => {
    const { wish, doneWish } = props

    return (
        <div className="bg-slate-100 text-slate-800 text-lg rounded-xl flex flex-col justify-between gap-4 px-6 py-6 drop-shadow-xl">
            <div className="flex flex-col gap-2">
              <p className="text-xl font-bold">{wish.title}</p>
              <p>{wish.description}</p>
            </div>
            {/* <Button onClick={() => doneWish(wish.id)} title="Выполнено!"/> */}
            <a onClick={() => doneWish(wish.id)}>"Выполнено!"</a>
        </div>
    )
}

export default Wish