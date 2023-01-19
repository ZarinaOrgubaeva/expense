import { useState } from "react";
import { FormInput } from "../UI/formInput/FormInput";
import styled from "styled-components"
const CanselButton = styled.button`
   width: 228px;
    height: 51px;
    background: #4A026B;
    border-radius: 10px;
    color: white;
    margin-top: 2rem;
    margin-bottom: 2rem;
    margin-left: 15rem;
`
const SaveButton = styled.button`
   width: 228px;
    height: 51px;
    background: #4A026B;
    border-radius: 10px;
    color: white;
    margin-top: 2rem;
    margin-bottom: 2rem;
    margin-left: 3rem;
`
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
      <CanselButton title="Отмена" onClick={cancelHandler}>Отмена</CanselButton>
      <SaveButton title="Сохранить" onClick={saveHandler}>Сохранить</SaveButton>
    </form>
  );
};
