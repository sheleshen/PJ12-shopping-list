// import Button from "components/Button"
import classNames from "classnames";
import "components/Wish/style.css";

const Wish = (props) => {
    const { wish, deleteWish, doneWish } = props

    return (
        <div className="border-blue-light text-white flex flex-col justify-between gap-4 px-6 py-6">
            {/* <img src="{image}" alt="" /> */}
            
            {/* <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" className="text-blue-light">
                <path d="M234.7 42.7L197 56.8c-3 1.1-5 4-5 7.2s2 6.1 5 7.2l37.7 14.1L248.8 123c1.1 3 4 5 7.2 5s6.1-2 7.2-5l14.1-37.7L315 71.2c3-1.1 5-4 5-7.2s-2-6.1-5-7.2L277.3 42.7 263.2 5c-1.1-3-4-5-7.2-5s-6.1 2-7.2 5L234.7 42.7zM46.1 395.4c-18.7 18.7-18.7 49.1 0 67.9l34.6 34.6c18.7 18.7 49.1 18.7 67.9 0L529.9 116.5c18.7-18.7 18.7-49.1 0-67.9L495.3 14.1c-18.7-18.7-49.1-18.7-67.9 0L46.1 395.4zM484.6 82.6l-105 105-23.3-23.3 105-105 23.3 23.3zM7.5 117.2C3 118.9 0 123.2 0 128s3 9.1 7.5 10.8L64 160l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L128 160l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L128 96 106.8 39.5C105.1 35 100.8 32 96 32s-9.1 3-10.8 7.5L64 96 7.5 117.2zm352 256c-4.5 1.7-7.5 6-7.5 10.8s3 9.1 7.5 10.8L416 416l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L480 416l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L480 352l-21.2-56.5c-1.7-4.5-6-7.5-10.8-7.5s-9.1 3-10.8 7.5L416 352l-56.5 21.2z"/>
            </svg> */}

            {/* <i class="fa-solid fa-wand-magic-sparkles" className="text-white"></i> */}

            <div className="flex flex-col gap-2">
              <p className="text-2xl font-bold">{wish.title}</p>
              <p className="text-base text-blue-light">{wish.description}</p>
            </div>
            {/* <Button onClick={() => doneWish(wish.id)} title="Выполнено!"/> */}
            <div className="flex justify-start gap-2">
                {/* <a className={classNames("bg-blue-light rounded-xl font-bold text-white px-4 py-3 hover:bg-hover cursor-pointer", {
                    "bg-green-500": wish.addDone
                })} onClick={() => doneWish(wish.addDone)} value={wish.addDone}>Выполнить</a> */}
                <a className="bg-blue-light rounded-xl font-bold text-white px-4 py-3 hover:bg-hover cursor-pointer">
                    Выполнить
                </a>
                <a className="bg-green-500 rounded-xl font-bold text-white px-4 py-3 hover:bg-hover cursor-pointer">
                    Выполнено!
                </a>
                <a className=" bg-red-400 rounded-xl font-bold text-white px-4 py-3 hover:bg-hover cursor-pointer" onClick={() => deleteWish(wish.id)}>
                    Удалить
                </a>
            </div>  
        </div>
    )
}

export default Wish