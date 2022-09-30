import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

body {
    margin: 0;
    background: #efefef;
}

a {
    text-decoration: none;
    color: black;
}

h1,h2,h3,h4,h5,h6 {
    margin: 0 auto;
}

button {
    border: 0;
    background: transparent;
    outline: none;
    cursor: pointer;
}

`;
