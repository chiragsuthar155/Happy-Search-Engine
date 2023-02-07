import React, { useState } from "react";
import App from "../App";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const MainPage = () => {
  const [dark, setDarkMode] = useState(true);

  return (
    <>
      <Navbar dark={dark} setDarkMode={setDarkMode} />
      <App dark={dark} />
      <Footer dark={dark} />
    </>
  );
};
