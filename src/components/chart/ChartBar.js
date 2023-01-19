
import styled from "styled-components";
const ChartBar = ({ title, maximumPrice, currentPrice }) => {
  const fillHeight = (100 * currentPrice) / maximumPrice;
  return (
    <ChartBarContainer>
      <ChartBarInner>
        <ChartBarFilterDivHandler
          style={{ height: `${fillHeight}%` }}
        ></ChartBarFilterDivHandler>
      </ChartBarInner>
      <ChartBarMonthName >{title}</ChartBarMonthName>
    </ChartBarContainer>
  );
};
export default ChartBar;
//style
const ChartBarContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ChartBarInner = styled.div`
  height: 100%;
  width: 100%;
  border: 1px solid rgb(58, 56, 56);
  border-radius: 15px;
  background-color: #c5b1eb;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
const ChartBarFilterDivHandler = styled.div`
  background-color: blueviolet;
  width: 100%;
  transition: all 0.3s ease-out;
  margin-bottom: 0%;
`;
const ChartBarMonthName = styled.p`
  text-align: center;
  font-family: sans-serif;
  font-weight: 200;
`;
