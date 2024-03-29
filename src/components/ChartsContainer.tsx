import { useAppContext } from "../hooks/EditorContext";
import useLatestExchanges from "../hooks/useLatestExchanges";
import useTimeSeries from "../hooks/useTimeSeries";
import BarChartComponent from "./Charts/BarChart";
import LineChartComponent from "./Charts/LineChart";
import ErrorComponent from "./ErrorComponent";
import LoadingComponent from "./loading/LoadingComponent";

const ChartsContainer = () => {
  const {
    isError: isLatestChangesError,
    isFetching: isFechingLastestExchanges,
    latestExchanges,
    errMsg: latestExchangesErrorMsg,
  } = useLatestExchanges();
  const {
    isError: isTimeSeriesError,
    isFetching: isFetchingTimeSeries,
    errMsg: timeSeriesErrorMsg,
    exchangeTimeSeries,
  } = useTimeSeries();
  const { editableCPP, isEditor } = useAppContext();
  return (
    <article className="grid sm:gap-4 md:gap-2 grid-cols-1 lg:grid-cols-2 mx4 max-w-7xl mx-auto mb-4">
      <section
        className={`${
          !editableCPP.includes("barChart") && !isEditor && "hidden"
        }`}
      >
        {isLatestChangesError && (
          <ErrorComponent
            header="Error fetching latest exchanges data"
            body={latestExchangesErrorMsg}
          />
        )}
        {isFechingLastestExchanges && (
          <LoadingComponent isLoading={isFechingLastestExchanges} />
        )}
        {latestExchanges &&
          !isLatestChangesError &&
          !isFechingLastestExchanges && (
            <BarChartComponent
              data={latestExchanges.rates}
              isVisible={editableCPP.includes("barChart")}
            />
          )}
      </section>
      <section
        className={`${
          !editableCPP.includes("lineChart") && !isEditor && "hidden"
        }`}
      >
        {isTimeSeriesError && (
          <ErrorComponent
            header="Error fetching latest exchanges data"
            body={timeSeriesErrorMsg}
          />
        )}
        {isFetchingTimeSeries && (
          <LoadingComponent isLoading={isFetchingTimeSeries} />
        )}
        {exchangeTimeSeries && !isTimeSeriesError && !isFetchingTimeSeries && (
          <LineChartComponent
            data={exchangeTimeSeries}
            isVisible={editableCPP.includes("lineChart")}
          />
        )}
      </section>
    </article>
  );
};

export default ChartsContainer;
