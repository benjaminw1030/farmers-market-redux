import React from "react";
import Header from "./Header";
import Produce from "./Produce";
import Schedule from "./Schedule";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="row">
        <Schedule />
        <Produce />
      </div>
    </div>
  );
}

export default App;
