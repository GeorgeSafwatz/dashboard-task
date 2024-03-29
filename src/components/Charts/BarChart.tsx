import { FC } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ExchangeRate } from "../../utils/api/latestExchangesModel";
import { useAppContext } from "../../hooks/EditorContext";
import ChartsOverlay from "./ChartsOverlay";

const BarChartContainer: FC<{ data: ExchangeRate; isVisible: boolean }> = ({
  data: rates,
}) => {
  const { isEditor } = useAppContext();
  const data = Object.entries(rates).map(([currency, value]) => {
    console.log({ currency, value });
    return {
      name: currency,
      value,
    };
  });

  return (
    <section
      className={`relative flex flex-col items-center justify-center ${
        isEditor && " border-2 border-indigo-400"
      }`}
    >
      <ChartsOverlay cppName="barChart" />
      <p className="text-indigo-400 font-bold text-2xl">Latest Exchanges</p>
      <BarChart
        width={600}
        height={400}
        data={data}
        margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis dataKey={"value"} domain={[0, 60]} />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </section>
  );
};

export default BarChartContainer;
