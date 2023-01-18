import "./ExpensesItem.css";
export const ExpensesItem = ({ date, title, price, }) => {
  return (
    <div className="container2">
      <div className="expensesDate">
        <h2>{date.toString()}</h2>
      </div>
      <p>{title}</p>
      <h3>{price}</h3>
    </div>
  );
};
