
import styled from "styled-components";
export const ExpensesItem = ({ date, title, price }) => {
  return (
    <Container>
      <ExpensesDate>
        <ExpenseDateH2>{date.toString()}</ExpenseDateH2>
      </ExpensesDate>
      <TitleExpenseItem>{title}</TitleExpenseItem>
      <PriceExpensesItem>{price}</PriceExpensesItem>
    </Container>
  );
};

//style
const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 46rem;
  height: 6, 5rem;
  background: #4b4b4b;
  border-radius: 12px;
  color: white;
  margin-top: 5rem;
  border: 2px solid black;
  margin-left: -1rem;
`;
const ExpensesDate = styled.div`
  width: 82.11px;
  height: 80px;
  background: #2a2a2a;
  border: 1px solid #ffffff;
  border-radius: 10px;
  margin-left: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const ExpenseDateH2 = styled.h2`
  font-size: 10px;
`;
const TitleExpenseItem = styled.p`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  margin-top: 35px;
`;
const PriceExpensesItem = styled.h3`
  text-align: center;
  margin-top: 2rem;
  width: 112px;
  height: 44px;
  background: #40005d;
  border: 1px solid #ffffff;
  border-radius: 10px;
`;
