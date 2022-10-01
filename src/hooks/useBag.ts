import { useCallback } from "react";
import { Crypto } from "../types/cryptoDetails";

interface AddedCrypto {
  id: string;
  name: string;
  total: number;
  amount: number;
}

export const useBag = () => {
  const key = "bag-storage";
  let storedCryptos: AddedCrypto[] = [];

  const addItemToCart = useCallback((cryptoToAdd: Crypto, amount: number) => {
    const addedCryptos = JSON.parse(localStorage.getItem(key) || "[]");

    const addedCrypto = addedCryptos.find(
      (crypto: AddedCrypto) => crypto.id === cryptoToAdd.id
    );
    if (addedCrypto) {
      addedCrypto.total += amount * +cryptoToAdd.priceUsd;
      addedCrypto.amount += amount;
    } else {
      addedCryptos.push({
        id: cryptoToAdd.id,
        name: cryptoToAdd.name,
        priceUsd: cryptoToAdd.priceUsd,
        amount,
        total: amount * +cryptoToAdd.priceUsd,
      });
    }
    storedCryptos = addedCryptos;
    localStorage.setItem(key, JSON.stringify(addedCryptos));
  }, []);

  const getAddedCryptos = useCallback((): AddedCrypto[] => {
    storedCryptos = JSON.parse(localStorage.getItem(key) || "[]");
    return storedCryptos;
  }, []);

  const removeAddedCrypto = useCallback((cryptoId: string) => {
    const addedCryptos = JSON.parse(localStorage.getItem(key) || "[]");
    const index = addedCryptos.findIndex(
      (crypto: AddedCrypto) => crypto.id === cryptoId
    );
    if (index < 0) {
      return;
    }
    addedCryptos.splice(index, 1);

    storedCryptos = addedCryptos;
    localStorage.setItem(key, JSON.stringify(addedCryptos));
  }, []);
  return {
    storedCryptos,
    addItemToCart,
    getAddedCryptos,
    removeAddedCrypto,
  };
};
