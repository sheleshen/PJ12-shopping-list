// import Button from "components/Button"
import "components/Wish/style.css";

const Wish = (props) => {
    const { wish, doneWish } = props

    return (
        <div className="border-blue-light text-white text-lg flex flex-col justify-between gap-4 px-6 py-6">
            <img src="{image}" alt="" />
            <div className="flex flex-col gap-2">
              <p className="text-xl font-bold">{wish.title}</p>
              <p className="text-blue-light">{wish.description}</p>
            </div>
            {/* <Button onClick={() => doneWish(wish.id)} title="Выполнено!"/> */}
            <div className="flex justify-start">
                <a className=" bg-blue-light rounded-xl font-bold text-white px-4 py-3 hover:bg-hover cursor-pointer" onClick={() => doneWish(wish.id)}>Выполнено!</a>
            </div>  
        </div>
    )
}

export default Wish