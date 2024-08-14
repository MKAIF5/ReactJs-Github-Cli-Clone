import { useState } from "react";
import "./App.css";
import Nav from "./nav.jsx";
import SecMain from "./secMain.jsx";
import MiddleMain from "./middleMain.jsx";
import MiddleLast from "./middleLast.jsx";
function App() {
  return (
    <>
      <Nav />
      <SecMain />
      <MiddleMain />
      <MiddleLast />
    </>
  );
}

export default App;
