import { ExpensesItem } from "../expensesItem/ExpensesItem";
export const ExppensesList =(props) =>{
    if (props.items.length === 0 ) {
        return <h2>Пусто</h2>
    }
    return( 
        <ul> 
        {props.items.map((expenses) => {
            return ( <ExpensesItem
            key={expenses.id}
            title={expenses.title} 
            price={expenses.price}
            date={expenses.date}
            />);
          })}
          </ul>
    )
}