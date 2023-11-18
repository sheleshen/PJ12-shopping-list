import Footer from "components/Footer";
import { useState } from "react";
import Wish from "components/Wish";

function App() {

  const [wishes, setWishes] = useState([
      {
        id: 1,
        image: '../public/images/gem.png',
        title: 'Желание 1',
        description: 'Цитата для желаний'
      },
      {
        id: 2,
        image: '../public/images/gem.png',
        title: 'Желание 2',
        description: 'Цитата для желаний'
      },
      {
        id: 3,
        image: '../public/images/gem.png',
        title: 'Желание 3',
        description: 'Цитата для желаний'
      },
      {
        id: 4,
        image: '../public/images/gem.png',
        title: 'Желание 4',
        description: 'Цитата для желаний'
      }
    ])

    const doneWish = (id) => {
      console.log('Выполнить желание!')
      const filteredWish = wishes.filter(wish => wish.id !== id)
      setWishes(filteredWish)
    }

  return (
    <div className="bg-blue-dark min-h-screen">
      <img src="/public/images/stars-yellow.png" alt="" />
      <h1 className="my-10 mx-10 font-black text-5xl text-white">Ваш список желаний!</h1>

      <div className="my-10 mx-10 grid grid-cols sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {wishes.length === 0 && (<div className="font-bold text-4xl text-white">Время загадать желание!</div>)}
        {wishes.length > 0 && wishes.map((wish) => {
          return (
            <Wish key={wish.id} wish={wish} doneWish={doneWish}/>
          )
        })}
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
