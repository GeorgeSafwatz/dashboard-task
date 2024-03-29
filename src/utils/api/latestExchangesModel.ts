/**
 * Represents exchange rates for different currencies.
 */
export type ExchangeRate = {
  /** The exchange rate for USD. */
  USD: number;
  /** The exchange rate for EUR. */
  EUR: number;
  /** The exchange rate for GBP. */
  GBP: number;
  /** The exchange rate for EGP. */
  EGP: number;
};

/**
 * Represents the model for the latest exchange rates.
 */
export interface LatestExchangesModel {
  /** The base currency for the exchange rates. */
  base: string;
  /** The date of the latest exchange rates. */
  date: string;
  /** The exchange rates for different currencies. */
  rates: ExchangeRate;
  /** Indicates whether the request was successful. */
  success: boolean;
  /** The timestamp of when the data was retrieved. */
  timestamp: number;
}
