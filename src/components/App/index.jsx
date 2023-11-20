import Footer from "components/Footer";
import { useState } from "react";
import Wish from "components/Wish";
import "components/App/App.css";

function App() {

  const [wishes, setWishes] = useState([
      {
        id: 1,
        image: '../public/images/gem.png',
        title: 'Увидеть Эйфелеву башню',
        description: 'Описание желания в несколько строк',
        addDone: false
      },
      {
        id: 2,
        image: '../public/images/gem.png',
        title: 'Полетать на воздушном шаре',
        description: 'Описание желания в несколько строк',
        addDone: false
      },
      {
        id: 3,
        image: '../public/images/gem.png',
        title: 'Увидеть любимую картину в оригинале',
        description: 'Описание желания в несколько строк',
        addDone: false
      },
      {
        id: 4,
        image: '../public/images/gem.png',
        title: 'Начать изучать новый иностранный язык',
        description: 'Описание желания в несколько строк',
        addDone: false
      },
      {
        id: 5,
        image: '../public/images/gem.png',
        title: 'Научиться играть на музыкальном инструменте',
        description: 'Описание желания в несколько строк',
        addDone: false
      }
    ])

    const deleteWish = (id) => {
      console.log('Удалить желание!')
      const filteredWish = wishes.filter(wish => wish.id !== id)
      setWishes(filteredWish)
    }

    const doneWish = (addDone) => {
      console.log('Выполнить желание!')
      
    }

  return (
    <div className="bg-blue-dark min-h-screen bg-image relative">
      <img src="/public/images/stars-yellow.png" alt="" />
      <h1 className="mx-10 py-10 font-bold text-6xl text-white">Ваш список желаний!</h1>

      <div className="mx-10 pb-40 sm:pb-36 md:pb-36 grid grid-cols sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {wishes.length === 0 && (<div className="font-bold text-4xl text-white">Время загадать желание!</div>)}
        {wishes.length > 0 && wishes.map((wish) => {
          return (
            <Wish key={wish.id} wish={wish} deleteWish={deleteWish} doneWish={doneWish}/>
          )
        })}
      </div>
      
      <Footer />
    </div>
  );
}

export default App;