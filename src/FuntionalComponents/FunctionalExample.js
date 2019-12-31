import React from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

function MyInfo() {
  return (
    <div>
      <Header />
      <MainContent />
      <h1>Megha Ukkali</h1>
      <p> This is the paragraph about me...</p>
      <p>The top 3 vacations I waould like to visit:</p>
      <ol>
        <li>New York</li>
        <li>London</li>
        <li>Switzerland</li>
      </ol>
      <Footer />
    </div>
  );
}

export default MyInfo;
