import { useState } from 'react';
import './App.css';
import { NewExpenses } from './components/newExpenses/NewExpenses';
import { Expenses } from './components/expenses/Expenses';


function App() {
  const [expenses,setExpenses]=useState([
    {
      title: "Phone",
      price: 600,
      date: new Date(2019, 7, 7),
    },
    {
      title: "Desktop",
      price: 900,
      date: new Date(2023,1, 10),
    },
    {
      title: "Book",
      price: 250,
      date: new Date(2022,5,28),
    },
    {
      title: "Handbag",
      price: 500,
      date: new Date(2021,10,31),
    },
  ])

  const addNewExpenseHandler =(data)=>{
  const updatedExpense = [...expenses]
  updatedExpense.push(data)
  setExpenses(updatedExpense)
  }
  return (
    <div className="App">
      <NewExpenses onNewExpenseAdd={addNewExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
