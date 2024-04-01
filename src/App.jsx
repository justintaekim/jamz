import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Content from "./components/Content";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Content />
      </div>
    </>
  );
}

export default App;
