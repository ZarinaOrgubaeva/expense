import { useState } from "react";
import { Button } from "../UI/button/Button";
import { FormInput } from "../UI/formInput/FormInput";
import "./ExpensesForm.css";
export const ExpensesForm = (props) => {
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [date, setDate] = useState();

  const titleInput = (event) => {
    setTitle(event.target.value);
  };
  const priceInput = (event) => {
    const value = event.target.value;
    if (value.charAt(0) !== "-") {
      setPrice(value);
    }
  };
  const dateInput = (event) => {
    setDate(event.target.value);
  };
  const cancelHandler = (event) => {
    event.preventDefault();
    props.onShowForm();
  };

  const saveHandler = (event) => {
    event.preventDefault();

    const expensesDate = {
      title,
      price,
      date,
    };
    props.onNewExpenseAdd(expensesDate)
  };
  return (
    <form>
      {/* title */}
      <FormInput
        id="name"
        labelName="Название"
        inputType="text"
        placeholder="Введите название..."
        value={title}
        onChange={titleInput}
      />

      {/* price */}
      <FormInput
        id="price"
        labelName="Стоимость расхода"
        inputType="number"
        value={price}
        onChange={priceInput}
      />

      {/* date */}
      <FormInput
        id="date"
        labelName="Дата"
        inputType="date"
        placeholder="dd.mm.yyyy"
        value={date}
        onChange={dateInput}
      />
      <Button title="Отмена" onClick={cancelHandler} />
      <Button title="Сохранить" onClick={saveHandler} />
    </form>
  );
};
