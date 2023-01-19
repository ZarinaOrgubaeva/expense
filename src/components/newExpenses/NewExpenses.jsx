import { useState } from "react";
import { ExpensesForm } from "../expensesForm/ExpensesForm";
import styled from "styled-components";
export const NewExpenses = ({ onNewExpenseAdd }) => {
  const [
    showForm,
    setShowForm, //ассинхронный
  ] = useState(false); // false

  const newExpenseButtonClickHandler = () => {
    setShowForm((prevState) => {
      return !prevState;
    });
  };
  return (
    <ContainerDivHandler className="container">
      {showForm ? (
        <ExpensesForm
          onShowForm={newExpenseButtonClickHandler}
          onNewExpenseAdd={onNewExpenseAdd}
        />
      ) : (
        <AddButton
          title="Добавить расходы"
          onClick={newExpenseButtonClickHandler}
        >
          Добавить расходы
        </AddButton>
      )}
    </ContainerDivHandler>
  );
};
//style
const ContainerDivHandler = styled.div`
  width: 48rem;
  height: 5, 68rem;
  background: #ad9be9;
  border-radius: 12px;
  margin-top: 5%;
  margin-left: 15rem;

`



const AddButton = styled.button`
  width: 228px;
  height: 51px;
  background: #4a026b;
  border-radius: 10px;
  color: white;
  margin-top: 2rem;
  margin-bottom: 2rem;
  margin-left: 16rem;
`;