import React from "react";

import { HeaderComponent } from "./components/header";
import { Router } from "./routes/routes";
import GlobalStyles from "./styles/global";

function App() {
  return (
    <>
      <HeaderComponent />
      <Router />
      <GlobalStyles />
    </>
  );
}

export default App;
