import React, { useState } from "react";

function App() {
  let time = new Date().toLocaleTimeString();

  var [currentTime, newTime] = useState(time);

  setInterval(refresh, 1000);

  function refresh() {
    const t = new Date().toLocaleTimeString();
    newTime(t);
  }

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={refresh}>Get Time</button>
    </div>
  );
}

export default App;
