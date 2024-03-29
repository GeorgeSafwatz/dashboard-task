import { AxiosRequestConfig } from "axios";
import axiosInstance from "../utils/api/apiConfig";
import { useEffect, useState } from "react";
import { ExchangeTimeSeries } from "../utils/api/timeSeriesModel";
import { getDateOneMonthAgo, todayDate } from "../utils/timeFormatter";

/**
 * Custom hook to fetch exchange time series data.
 * 
 * @param startDate The start date for the time series data (optional).
 * @param endDate The end date for the time series data (optional).
 * @returns An object containing exchange time series data, error message, error status, and fetch status.
 */
const useTimeSeries = (startDate?: string, endDate?: string) => {
  // Set default values for start and end dates if not provided
  if (!startDate || !endDate) {
    endDate = todayDate();
    startDate = getDateOneMonthAgo();
  }

  const [exchangeTimeSeries, setExchangeTimeSeries] = useState<ExchangeTimeSeries | null>(null);
  const [errMsg, setErrMsg] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();
    const requestOptions: AxiosRequestConfig = {
      method: "GET",
      signal: controller.signal,
    };

    const getExchangesTimeSeries = async () => {
      setIsFetching(true);
      try {
        const response = await axiosInstance.get<ExchangeTimeSeries>(
          `/timeseries?base=USD&symbols=EUR%2CGBP%2CEGP&start_date=${startDate}&end_date=${endDate}`,
          {
            ...requestOptions,
          }
        );
        setExchangeTimeSeries(response.data);
      } catch (error: any) {
        setIsError(true);
        setErrMsg(error.message);
        console.error("Error Time series data:", error);
      } finally {
        setIsFetching(false);
      }
    };

    getExchangesTimeSeries();

    return () => {
      controller.abort();
    };
  }, [endDate, startDate]);

  return {
    exchangeTimeSeries,
    errMsg,
    isError,
    isFetching,
  };
};

export default useTimeSeries;
