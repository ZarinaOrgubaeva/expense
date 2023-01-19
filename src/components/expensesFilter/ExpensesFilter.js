import styled from "styled-components";
const ExpensesFilter = ({ value, onChange }) => {
  return (
    <>
      <ExpensesFilterControl >
        <LabelHandler htmlFor="" >
          Filter by year
        </LabelHandler>
        <Select className="select" value={value} onChange={onChange}>
          <OptionHandler value="2023">2023</OptionHandler>
          <OptionHandler value="2022">2022</OptionHandler>
          <OptionHandler value="2021">2021</OptionHandler>
          <OptionHandler value="2020">2020</OptionHandler>
          <OptionHandler value="2019">2019</OptionHandler>
        </Select>
      </ExpensesFilterControl>
    </>
  );
};
export default ExpensesFilter;
//style
const ExpensesFilterControl = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5%;
`;
const Select = styled.select`
  width: 124px;
  height: 43px;
  background: #ffffff;
  border-radius: 6px;
  margin-left: 30rem;
  margin-top: 3rem;
  margin-bottom: 1rem;
`;
const OptionHandler = styled.option`
  text-align: center;
  width: 42px;
  height: 19px;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #222222;
`;
const LabelHandler = styled.label`
  margin-left: 1rem;
  margin-top: 3rem;
  width: 125px;
  height: 1.2rem;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.2rem;
  color: #ffffff;
`;
