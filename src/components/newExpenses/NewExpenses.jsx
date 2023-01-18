import { useState } from "react";
import { ExpensesForm } from "../expensesForm/ExpensesForm"
import { Button } from "../UI/button/Button"
import "./NewExpenses.css"
export const NewExpenses =({onNewExpenseAdd})=>{
    const [
        showForm,
        setShowForm //ассинхронный
      ] = useState(false); // false
      
    const newExpenseButtonClickHandler = () =>{
     setShowForm((prevState)=>{
        return !prevState;
     })
    }
    return(
        <div className="container">
            { showForm ?  <ExpensesForm 
            onShowForm={newExpenseButtonClickHandler}
            onNewExpenseAdd={onNewExpenseAdd}/> 
            : <Button title="Добавить расходы" 
            onClick={newExpenseButtonClickHandler}/> 
         }
       </div>
    )
}