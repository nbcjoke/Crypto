import { Crypto } from "../types/crypto";
import { AddedCrypto } from "../types/addedCrypto";

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
    let addedCryptos = JSON.parse(localStorage.getItem(this.key) || "[]");

    addedCryptos = addedCryptos.filter(
      (crypto: AddedCrypto) => crypto.id !== cryptoId
    );
    localStorage.setItem(this.key, JSON.stringify(addedCryptos));

    return addedCryptos;
  }
}
