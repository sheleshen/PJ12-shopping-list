import Button from "components/Button"

function Header() {
    return (
        <header className="px-10 bg-slate-100 py-8 text-slate-800 font-semibold flex justify-between items-center">
            <nav className="flex gap-8 justify-center text-lg">
                <div>
                    Список покупок
                </div>
                <div>
                    Отзывы
                </div>
                <div>
                    Контакты
                </div>
            </nav>
            <Button title='Связаться с нами'/>
        </header>
    )
}

export default Header