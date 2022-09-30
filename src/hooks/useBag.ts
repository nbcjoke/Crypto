import { useCallback } from "react";

export const useBag = () => {
  const bagState: {}[] = [];
  const addItemToCart = useCallback((crypto: any) => {
    bagState.push(...crypto);
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
