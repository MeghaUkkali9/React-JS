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

  const styles = {
    fontSize: 34,
    textAlign: "center"
  };

  const timeStyles = {};
  if (hours < 12) {
    time = "Good Morning!";
    timeStyles.color = "Red";
  } else if (hours >= 12 && hours < 17) {
    time = "Good Afternoon";
    timeStyles.color = "Yellow";
  } else {
    time = "Good Night";
    timeStyles.color = "Pink";
  }

  if (num % 2 === 0) {
    x = "The given number is even.";
  } else {
    x = "The given number is odd.";
  }

  return (
    <div style={styles}>
      <h2>Hello {firstName}</h2>
      <h3>
        Today's Date: {date1}, Day: {day}
      </h3>
      <h3> The given num: {num}</h3>
      <h3>{x}</h3>
      <h4 style={timeStyles}>{time}</h4>
    </div>
  );
}

export default App;
