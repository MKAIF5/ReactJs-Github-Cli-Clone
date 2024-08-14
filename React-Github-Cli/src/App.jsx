import { useState } from "react";
import "./App.css";
import Nav from "./nav.jsx";
import SecMain from "./secMain.jsx";
import MiddleMain from "./middleMain.jsx";
function App() {
  return (
    <>
      <Nav />
      <SecMain />
      <MiddleMain />
    </>
  );
}

export default App;
