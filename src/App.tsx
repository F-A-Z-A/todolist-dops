import React, { useState } from "react";
import "./App.css";
import { Country } from "./Country";
import { v1 } from "uuid";

export type BanknotesType = "USD" | "RUB" | "All";
export type MoneyType = {
  banknote: BanknotesType;
  nominal: number;
  id: string;
};

const defaultMoney: MoneyType[] = [
  { banknote: "USD", nominal: 100, id: v1() },
  { banknote: "USD", nominal: 100, id: v1() },
  { banknote: "RUB", nominal: 100, id: v1() },
  { banknote: "USD", nominal: 100, id: v1() },
  { banknote: "USD", nominal: 100, id: v1() },
  { banknote: "RUB", nominal: 100, id: v1() },
  { banknote: "USD", nominal: 100, id: v1() },
  { banknote: "RUB", nominal: 100, id: v1() },
];

export const moneyFilter = (money: MoneyType[], filter: BanknotesType): MoneyType[] => {
  if (filter === "All") {
    return money;
  }
  return money.filter((el) => el.banknote === filter);
};

function App() {
  const [money, setMoney] = useState<MoneyType[]>(defaultMoney);
  const [filterValue, setFilterValue] = useState<BanknotesType>("All");
  const filteredMoney = moneyFilter(money, filterValue);
  const addMoney = (banknote: BanknotesType) => {
    setMoney([{ banknote: banknote, nominal: 100, id: v1() }, ...money]);
  };

  const removeMoney = (banknote: BanknotesType) => {
    // const test = money.find((el) => el.banknote === banknote);
    // if (test) {
    //   setMoney(money.filter((el) => el.id !== test.id));
    // }
    const index = money.findIndex((el) => el.banknote === banknote);
    if (index !== -1) {
      setMoney(money.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="App">
      <Country data={filteredMoney} setFilterValue={setFilterValue} addMoney={addMoney} removeMoney={removeMoney} />
    </div>
  );
}

export default App;

// -------------------------------------------------------------------------------------------
// import React, {useState} from 'react';
// import './App.css';
// import {Country} from "./Country";
// import {v1} from "uuid";
//
// export type BanknotsType = '' // создадим типы для banknotes -он может быть 'DOLLARS', 'RUBLS' или 'All'
// export type MoneyType = {
//     banknote: BanknotsType
//     nominal: any// не ленимся, убираем заглушку, и пишем правильный тип)
//     id: any// ложку за Димыча, за...
// }
//
// let defaultMoney: any = [  // типизируем
//     {banknote: 'USD', nominal: 100, id: v1()},
//     {banknote: 'USD', nominal: 100, id: v1()},
//     {banknote: 'RUB', nominal: 100, id: v1()},
//     {banknote: 'USD', nominal: 100, id: v1()},
//     {banknote: 'USD', nominal: 100, id: v1()},
//     {banknote: 'RUB', nominal: 100, id: v1()},
//     {banknote: 'USD', nominal: 100, id: v1()},
//     {banknote: 'RUB', nominal: 100, id: v1()},
// ]
//
//
// export const moneyFilter = (money: any, filter: any): any => {
//     //если пришел filter со значением 'All', то возвращаем все банкноты
//     //return money.filter... ну да, придется фильтровать
// }
//
//
// function App() {
//     // убираем заглушки в типизации и вставляем в качестве инициализационного значения defaultMoney
//     const [money, setMoney] = useState<any>([])
//     const [filterValue, setFilterValue] = useState<any>('')   // по умолчанию указываем все банкноты
//
//     // а вот сейчас притормаживаем. И вдумчиво: константа filteredMoney получает результат функции moneyFilter
//     // в функцию передаем деньги и фильтр, по которому ихбудем выдавать(ретёрнуть)
//     const filteredMoney = moneyFilter(грошы, фильтръ)
//
//     const addMoney = (banknote: BanknotsType) => {
//         // Добавление денег сделаем в последнюю очередь, после настройки фильтров и отрисовки денег
//     }
//
//     const removeMoney = (banknote: BanknotsType) => {
//         // Снятие денег сделаем в последнюю очередь, после настройки фильтров и отрисовки денег
//        // const index = money.findIndex
//        //  if (index !== -1) {
//        //      setMoney(money.filter((el, i) => ...));
//        //  }
//     }
//
//     return (
//         <div className="App">
//             <Country
//                 data={filteredMoney}   //отрисовать будем деньги после фильтрации
//                 setFilterValue={setFilterValue}  //useState передаем? Так можно было?!
//             />
//         </div>
//     );
// }
//
// export default App;
