import React, { useState } from "react";

const Box = () => {
  let [a, setA] = useState("");

  function funct(e) {
    e.target.value != "" ? setA("Hello " + e.target.value + "!") : setA("");
  }

  return (
    <div>
      <form>
        <label for="inp">Enter your name:</label>
        <input onChange={funct} />
      </form>
      <p>{a}</p>
    </div>
  );
};

export default Box;
