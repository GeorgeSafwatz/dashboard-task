import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { LatestExchangesModel } from "../utils/api/latestExchangesModel";
import axiosInstance from "../utils/api/apiConfig";

/**
 * Custom hook to fetch the latest exchange rates.
 *
 * @returns An object containing the latest exchange rates data, error status, and fetch status.
 */
const useLatestExchanges = () => {
  const [latestExchanges, setLatestExchanges] =
    useState<LatestExchangesModel | null>(null);
  const [errMsg, setErrMsg] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();
    const requestOptions: AxiosRequestConfig = {
      method: "GET",
      params: {
        base: "USD",
      },
      signal: controller.signal,
    };

    const getLastestExchanges = async () => {
      setIsFetching(true);
      try {
        const response = await axiosInstance.get<LatestExchangesModel>(
          "/latest?symbols=EUR%2CGBP%2CEGP",
          {
            ...requestOptions,
          }
        );
        setLatestExchanges(response.data);
      } catch (error: any) {
        setIsError(true);
        setErrMsg(error.message);
        console.error("Error fetching latest exchanges data:", error);
      } finally {
        setIsFetching(false);
      }
    };

    getLastestExchanges();

    return () => {
      controller.abort();
    };
  }, []);

  return { latestExchanges, isError, isFetching, errMsg };
};

export default useLatestExchanges;
