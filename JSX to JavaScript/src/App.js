import React from "react";

function App() {
  const firstName = "Megha";
  const date = new Date();
  const hours = date.getHours();
  const date1 = date.getDate();
  const day = date.getDay();
  let num = 5;
  let x;
  let time;

  if (hours < 12) {
    time = "Good Morning!";
  } else if (hours >= 12 && hours < 17) {
    time = "Good Afternoon";
  } else {
    time = "Good Night";
  }

  if (num % 2 === 0) {
    x = "The given number is even.";
  } else {
    x = "the given number is odd.";
  }

  return (
    <div>
      <h2>Hello {firstName}</h2>
      <h3>
        Today's Date: {date1}, Day: {day}
      </h3>
      <h3> the given num: {num}</h3>
      <h3>{x}</h3>
      <h4>{time}</h4>
    </div>
  );
}

export default App;
