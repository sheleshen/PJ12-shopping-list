import Footer from "components/Footer";
import { useState } from "react";
import Wish from "components/Wish";

function App() {

  const [wishes, setWishes] = useState([
      {
        id: 1,
        title: 'Желание 1',
        description: 'Цитата для желаний'
      },
      {
        id: 2,
        title: 'Желание 2',
        description: 'Цитата для желаний'
      },
      {
        id: 3,
        title: 'Желание 3',
        description: 'Цитата для желаний'
      },
      {
        id: 4,
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
    <div>
      <h1 className="my-10 mx-10 font-black text-5xl text-slate-700">Ваш список желаний!</h1>

      <div className="my-10 mx-10 grid grid-cols-3 gap-5">
        {wishes.length === 0 && (<div className="font-black text-xl text-slate-700">Время загадать желание!</div>)}
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
