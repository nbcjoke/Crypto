import { Crypto } from "../types/cryptoDetails";
import { AddedCrypto } from "../types/bag";

export class BagService {
  private static key = "bag-storage";
  public static addItemToCart(cryptoToAdd: Crypto, amount: number) {
    const addedCryptos = JSON.parse(localStorage.getItem(this.key) || "[]");

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
    localStorage.setItem(this.key, JSON.stringify(addedCryptos));
    return addedCryptos;
  }

  public static getAddedCryptos(): AddedCrypto[] {
    return JSON.parse(localStorage.getItem(this.key) || "[]");
  }

  public static removeAddedCrypto(cryptoId: string) {
    const addedCryptos = JSON.parse(localStorage.getItem(this.key) || "[]");
    const index = addedCryptos.findIndex(
      (crypto: AddedCrypto) => crypto.id === cryptoId
    );
    if (index < 0) {
      return;
    }
    addedCryptos.splice(index, 1);
    localStorage.setItem(this.key, JSON.stringify(addedCryptos));

    return addedCryptos;
  }
}
