import { useCallback } from "react";

export const useBag = () => {
  const bagState: {}[] = [];
  const addItemToCart = useCallback((crypto: [], amount: number) => {
    bagState.push(...crypto, amount);
  }, []);
  //   const removeItemFromCart = useCallback((cryptoId: string) => {
  //     const cryptoIndexToRemove = bagState.findIndex(
  //       (crypto) => crypto.id === cryptoId
  //     );
  //     bagState.splice(cryptoIndexToRemove, 1);
  //   }, []);
  return {
    bagState,
    addItemToCart,
    // removeItemFromCart,
  };
};
