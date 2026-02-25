export enum Currencies {
  AUD = "AUD", // Australian Dollar
  BGN = "BGN", // Bulgarian Lev
  BRL = "BRL", // Brazilian Real
  CAD = "CAD", // Canadian Dollar
  CHF = "CHF", // Swiss Franc
  CNY = "CNY", // Chinese Renminbi Yuan
  CZK = "CZK", // Czech Koruna
  DKK = "DKK", // Danish Krone
  EUR = "EUR", // Euro
  GBP = "GBP", // British Pound
  HKD = "HKD", // Hong Kong Dollar
  HUF = "HUF", // Hungarian Forint
  HRK = "HRK",
  IDR = "IDR", // Indonesian Rupiah
  ILS = "ILS", // Israeli New Sheqel
  INR = "INR", // Indian Rupee
  ISK = "ISK", // Icelandic Króna
  JPY = "JPY", // Japanese Yen
  KRW = "KRW", // South Korean Won
  MXN = "MXN", // Mexican Peso
  MYR = "MYR", // Malaysian Ringgit
  NOK = "NOK", // Norwegian Krone
  NZD = "NZD", // New Zealand Dollar
  PHP = "PHP", // Philippine Peso
  PLN = "PLN", // Polish Złoty
  RON = "RON", // Romanian Leu
  RUB = "RUB",
  LTL = "LTL",
  LVL = "LVL",
  SEK = "SEK", // Swedish Krona
  SGD = "SGD", // Singapore Dollar
  THB = "THB", // Thai Baht
  TRY = "TRY", // Turkish Lira
  USD = "USD", // United States Dollar
  ZAR = "ZAR", // South African Ran
}

export const Signs = {
  [Currencies.GBP]: "£",
  [Currencies.USD]: "$",
  [Currencies.EUR]: "€",
};

export type Currency = keyof typeof Currencies;

export interface CurrenciesApiRequest {
  base: Currency;
  symbols?: Array<Currency>;
  from?: string;
  to?: string;
  amount?: number;
}

export interface CurrenciesApiResponse {
  amount: number;
  base: Currency;
  start_date: string;
  end_date: string;
  rates: RatesHistory;
}

export type RatesHistory = Record<string, DateHistoryRates>;

export type DateHistoryRates = Partial<Record<Currency, number>>;
