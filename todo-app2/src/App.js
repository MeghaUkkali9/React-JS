import React from "react";
import Contact from "./Contact";

function App() {
  return (
    <div className="contact-list">
      <Contact
        name="Asian Large Elephant"
        imgURL="https://pixabay.com/photos/elephant-animals-asia-large-1822636/"
        alt="picture of elephant"
        Contact="243-123-4897"
        email="littlecat@gmail.com"
      />
      <Contact
        name="Baby Elephant"
        imgURL="https://pixabay.com/photos/elephant-young-watering-hole-2380009/"
        alt="pictue of baby elephant"
        Contact="254-123-4897"
        email="littlecat@gmail.com"
      />
    </div>
  );
}

export default App;
