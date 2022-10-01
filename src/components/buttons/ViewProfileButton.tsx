import React, { useEffect, useState } from "react";
import axios from "axios";

import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Crypto } from "../../types/cryptoDetails";

import styled from "styled-components";

type ButtonProps = {
  handleClick: () => void;
};

const ViewProfileButton = styled.button`
  width: 40px;
  height: 28px;

  @media screen and (min-width: 350px) and (max-width: 639px) {
    padding: 0;
  }
`;

export const ViewProfileButtonComponent = (props: ButtonProps) => {
  const [total, setTotal] = useState("0");
  const [differencePercent, setDifferencePercent] = useState("0");
  const [differenceUsd, setDifferenceUsd] = useState("0");
  const { addedCryptos } = useTypedSelector((state) => state.bag);

  useEffect(() => {
    const ids = addedCryptos.map(({ id }) => id);
    const total = addedCryptos.reduce((result, crypto) => {
      return result + crypto.total;
    }, 0);

    setTotal(total ? total.toFixed(2) : "");
    const fetchData = async () => {
      const currentCryptos = await axios
        .get(`https://api.coincap.io/v2/assets?ids=${ids}`)
        .then((response) => response.data.data);

      const currentTotal = addedCryptos.reduce((result, crypto) => {
        const currentCrypto = currentCryptos.find(
          (current: Crypto) => current.id === crypto.id
        );
        return result + (+currentCrypto.priceUsd * crypto.amount || 0);
      }, 0);

      const diffPercent = ((currentTotal - total) / currentTotal) * 100;
      const diffUsd = currentTotal - total;

      setDifferencePercent(diffPercent.toFixed(2));
      setDifferenceUsd(diffUsd.toFixed(2));
    };

    fetchData();
  }, [addedCryptos]);

  const clickHandler = () => {
    props.handleClick();
  };

  return (
    <ViewProfileButton onClick={() => clickHandler()}>
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title />
        <g data-name="briefcase simple" id="briefcase_simple">
          <path d="M20,5H17V4a3,3,0,0,0-3-3H10A3,3,0,0,0,7,4V5H4A3,3,0,0,0,1,8V20a3,3,0,0,0,3,3H20a3,3,0,0,0,3-3V8A3,3,0,0,0,20,5ZM9,4a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1V5H9ZM4,7H20c2.28,0,.65,6-4,6H13a1,1,0,0,0-2,0H8C3.36,13,1.72,7,4,7ZM20,21H4a1,1,0,0,1-1-1V12.89C5.4,15.34,7.86,15,11,15a1,1,0,0,0,2,0c3.17,0,5.61.33,8-2.11V20A1,1,0,0,1,20,21Z" />
        </g>
      </svg>
      <div>
        {total ? `$${total} ${differenceUsd}(${differencePercent}%)` : ""}
      </div>
    </ViewProfileButton>
  );
};
