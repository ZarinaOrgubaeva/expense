import ChartBar from "./ChartBar";
import styled from "styled-components";
const getTheme = (props) => {
  let theme = "indigo";
  if (props.theme === "green") {
    theme = "green";
  }
  if (props.theme === "red") {
    theme = "red";
  }
  return theme;
};
const Chart = ({ items, theme }) => {
  const maximumPrice = 3000;
  const months = [
    {
      title: "Январь",
      currentPrice: 0,
    },
    {
      title: " Февраль",
      currentPrice: 0,
    },
    {
      title: "Mарт",
      currentPrice: 0,
    },
    {
      title: "Апрель",
      currentPrice: 0,
    },
    {
      title: "Май",
      currentPrice: 0,
    },
    {
      title: "Июнь",
      currentPrice: 0,
    },
    {
      title: "Июль",
      currentPrice: 0,
    },
    {
      title: "Август",
      currentPrice: 0,
    },
    {
      title: "Сентябрь",
      currentPrice: 0,
    },
    {
      title: "Октябрь",
      currentPrice: 0,
    },
    {
      title: "Ноябрь",
      currentPrice: 0,
    },
    {
      title: "Декабрь",
      currentPrice: 0,
    },
  ];

  items.forEach((item) => {
    const monthsNumber = item.date.getMonth();
    months[monthsNumber].currentPrice += item.price;
  });
  return (
    <Container theme={theme}>
      {months.map((item) => {
        return (
          <ChartBar
            key={item.title}
            title={item.title}
            currentPrice={item.currentPrice}
            maximumPrice={maximumPrice}
          />
        );
      })}
    </Container>
  );
};
export default Chart;

//style
const Container = styled.div`
  padding: 1rem;
  border-radius: 12px;
  background-color: ${getTheme};
  text-align: center;
  display: flex;
  justify-content: space-around;
  height: 10rem;
`;
