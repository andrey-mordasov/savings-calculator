import {
  Currencies,
  CurrenciesApiRequest,
  CurrenciesApiResponse,
} from "types/currency";

export const fetchCurrenciesApi = async ({
  base = Currencies.EUR,
  symbols = [],
  from = "2013-01-01",
  to = "2013-12-31",
}: CurrenciesApiRequest): Promise<CurrenciesApiResponse> => {
  let url = `https://api.frankfurter.dev/v1`;

  if (from) {
    url += `/${from}`;

    if (to) {
      url += `..${to}`;
    }
  } else {
    url += "/latest";
  }

  if (base || symbols) {
    url += "?";
  }

  if (base) {
    url += `base=${base}`;
  }

  if (symbols) {
    url += `&symbols=${symbols.join(",")}`;
  }

  const response = await fetch(url);
  const json = await response.json();

  return json;
};
