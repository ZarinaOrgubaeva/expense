import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = ({ items }) => {
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
    <div className="chart">
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
    </div>
  );
};
export default Chart;
