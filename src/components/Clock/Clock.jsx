import React from "react";

function Clock({ time }) {
  return (
    <div className="release-clock">
      <div className="clock-control">
        <h1>{time.luni} </h1>
        <p>Months</p>
      </div>
      <div className="clock-control">
        <h1>{time.zile} </h1>
        <p>Days</p>
      </div>
      <div className="clock-control">
        <h1>{time.ore} </h1>
        <p>Hours</p>
      </div>
      <div className="clock-control">
        <h1>{time.minute}</h1>
        <p>Minutes</p>
      </div>
      <div className="clock-control">
        <h1>{time.secunde} </h1>
        <p>Seconds</p>
      </div>
    </div>
  );
}

export default Clock;
