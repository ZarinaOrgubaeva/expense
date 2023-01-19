import { useState } from "react";
import ExpensesFilter from "../expensesFilter/ExpensesFilter";
import { ExppensesList } from "../expensesList/ExpensesList";
import styled from "styled-components";
import Chart from "../chart/Chart";
export const Expenses = ({ expenses }) => {
  const [selectedYear, setSelectedYear] = useState("2023");

  const yearChangeHandler = (event) => {
    setSelectedYear(event.target.value);
  };
  const filteredItems = expenses.filter((element) => {
    const stringifiedYear = element.date.getFullYear().toString();
    return stringifiedYear === selectedYear;
  });
  return (
    <ContentDivHandler>
      <ExpensesFilter value={selectedYear} onChange={yearChangeHandler} />
      <Chart items={filteredItems} theme="indigo" />
      <ExppensesList items={filteredItems} />
    </ContentDivHandler>
  );
};
//style
const ContentDivHandler = styled.div`
  width: 48.75rem;
  height: 39.5rem;
  background: #1f1f1f;
  border-radius: 12px;
  margin-bottom: 1rem;
  margin-left: 15rem;
`;
