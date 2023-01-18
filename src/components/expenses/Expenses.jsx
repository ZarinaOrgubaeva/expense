import { useState } from "react";
import ExpensesFilter from "../expensesFilter/ExpensesFilter";
import { ExppensesList } from "../expensesList/ExpensesList";
import "./Expenses.css";
import Chart from "../chart/Chart";
export const Expenses = ({expenses}) => {
  const [selectedYear,setSelectedYear]=useState('2023')
  
  const yearChangeHandler = (event)=>{
   setSelectedYear(event.target.value ) 
  }
  const filteredItems = expenses.filter((element)=>{
   const stringifiedYear = element.date.getFullYear().toString()
    return stringifiedYear === selectedYear
  })
  return (
    <div className="content"> 
     <ExpensesFilter value={selectedYear} onChange={yearChangeHandler}/>
     <Chart items={filteredItems}/>
     <ExppensesList items={filteredItems}/>
     </div>
  );
};
