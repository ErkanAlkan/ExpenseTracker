import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  let dataPointsValues = props.dataPoints.map((point) => point.value);
  let totalMaximum = Math.max(...dataPointsValues);
  return (
    <div className="chart">
      {props.dataPoints.map((point) => (
        <ChartBar
          value={point.value}
          maxValue={totalMaximum}
          label={point.label}
          key={point.label}
        />
      ))}
    </div>
  );
};

export default Chart;
