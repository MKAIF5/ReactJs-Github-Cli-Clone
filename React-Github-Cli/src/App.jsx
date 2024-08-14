import { useState } from "react";
import "./App.css";
import "./responsive.css";
import Nav from "./nav.jsx";
import SecMain from "./secMain.jsx";
import MiddleMain from "./middleMain.jsx";
import MiddleLast from "./middleLast.jsx";
import Footer from "./footer.jsx";
function App() {
  return (
    <>
      <Nav />
      <SecMain />
      <MiddleMain />
      <MiddleLast />
      <Footer />
    </>
  );
}

export default App;
