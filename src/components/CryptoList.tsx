import React, { useEffect } from "react";

import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

export const CryptoList: React.FC = () => {
  const { cryptos, isLoading, errors } = useTypedSelector(
    (state) => state.cryptos
  );
  const { fetchCryptos } = useActions();

  useEffect(() => {
    fetchCryptos();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (errors) {
    return <h1>{errors}</h1>;
  }

  return (
    <div>
      {cryptos.map((crypto) => (
        <div key={crypto.id}>{crypto.name}</div>
      ))}
    </div>
  );
  return <div></div>;
};
