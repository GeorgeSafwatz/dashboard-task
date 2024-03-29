/**
 * Represents an exchange rate for different currencies.
 */
interface ExchangeRate {
  /** The exchange rate for USD. */
  USD: number;
  /** The exchange rate for EUR. */
  EUR: number;
}

/**
 * Represents exchange rate data for a specific date.
 */
interface ExchangeRateData {
  /** The date for which the exchange rate data is provided. */
  [date: string]: ExchangeRate;
}

/**
 * Represents time series exchange rate data.
 */
export interface ExchangeTimeSeries {
  /** The base currency for the exchange rate data. */
  base: string;
  /** The end date for the time series data. */
  end_date: string;
  /** Exchange rate data for different dates. */
  rates: ExchangeRateData;
  /** The start date for the time series data. */
  start_date: string;
  /** Indicates whether the request was successful. */
  success: boolean;
  /** Indicates whether the data represents a time series. */
  timeseries: boolean;
}
