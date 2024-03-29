import { FC } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { ExchangeTimeSeries } from "../../utils/api/timeSeriesModel";
import { useAppContext } from "../../hooks/EditorContext";
import ChartsOverlay from "./ChartsOverlay";

const LineChartComponent: FC<{
  data: ExchangeTimeSeries;
  isVisible: boolean;
}> = ({ data }) => {
  const { isEditor } = useAppContext();
  const convertedData: object[] = [];
  Object.entries(data.rates).forEach(([date, rates]) => {
    Object.entries(rates).forEach(([currency, rate]) => {
      let newData = {};
      if (currency === "EGP") {
        newData = {
          date: date,
          EGP: rate,
        };
      } else if (currency === "GBP") {
        newData = {
          date: date,
          GBP: rate,
        };
      } else {
        newData = {
          date: date,
          EUR: rate,
        };
      }
      convertedData.push(newData);
    });
  });
  return (
    <section
      className={` flex flex-col items-center justify-center ${
        isEditor && " border-2 border-indigo-400 relative"
      }`}
    >
      <ChartsOverlay cppName="lineChart" />
      <p className="text-indigo-400 font-bold text-2xl">
        Time series of exchanges{" "}
      </p>
      <LineChart
        width={600}
        height={400}
        data={convertedData}
        margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
      >
        <XAxis dataKey="date" />
        <YAxis dataKey={"value"} domain={[0, 50]} type="number" />
        <CartesianGrid stroke="grey" strokeDasharray="5 5" />
        <Line dataKey="GBP" stroke="#8884d8" strokeWidth={3} />
        <Line dataKey="EGP" stroke="#d88492" strokeWidth={3} />
        <Line dataKey="EUR" stroke="#8ed884" strokeWidth={3} />
        <Tooltip />
        <Legend />
      </LineChart>
    </section>
  );
};

export default LineChartComponent;
