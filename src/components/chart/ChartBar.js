import "./ChartBar.css"
const ChartBar = ({title, maximumPrice, currentPrice}) =>{
    const fillHeight =(100 *  currentPrice ) / maximumPrice
return (
    <div className="chartBar">
        <div className="chartBarInner">
            <div className="chartBarFilter" style={{height: `${fillHeight}%`}}></div>
        </div>
        <p className="chartBarMonthName">{title}</p>
    </div>
)
}
export default ChartBar