import React from "react";
import PingButton from "./PingButton";
import Building from "./building/Building";

const App = () => {
  return (
    <div className="container">
      <div className="panel">
        <h1>Elevators</h1>
        <PingButton />
      </div>
      <Building />
    </div>
  );
};

export default App;
