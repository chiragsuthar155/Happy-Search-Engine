import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import { MainPage } from "./components/MainPage";
import { ResultContextProvider } from "./contexts/ResultContextProvider";

ReactDOM.render(
  <ResultContextProvider>
    <Router>
      <MainPage />
    </Router>
  </ResultContextProvider>,
  document.getElementById("root")
);
