import { Route, Routes } from "react-router-dom";

import { Cryptos } from "../pages/cryptos";
import { CryptoDetails } from "../pages/cryptoDetails";

import { ROUTE_NAMES } from "./routeNames";

export const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.CRYPTOS} element={<Cryptos />} />
      <Route path={ROUTE_NAMES.CRYPTO_DETAILS} element={<CryptoDetails />} />
    </Routes>
  );
};
