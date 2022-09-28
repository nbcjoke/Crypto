import React from "react";

import { HeaderComponent } from "./components/header";
import { Router } from "./routes/routes";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <Router />
    </div>
  );
}

export default App;
