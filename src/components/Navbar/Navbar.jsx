import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [switchTheme, setSwitchTheme] = useState("jour");


  window.addEventListener('load', function(e){
    switchThemeFunction()
  })

  function switchThemeFunction() {
    let root = document.querySelector(":root");

    switch(switchTheme){
      case "jour":
        root.style.setProperty("--dark", "white");
        root.style.setProperty("--white", "black");
        setSwitchTheme("nuit");
        localStorage.setItem('theme', switchTheme)
      return
      case "nuit":
        root.style.setProperty("--white", "white");
        root.style.setProperty("--dark", "black");
        setSwitchTheme("jour");
        localStorage.setItem('theme', switchTheme)
        return
    }}

  //   if (switchTheme === "jour") {
  //     root.style.setProperty("--dark", "white");
  //     root.style.setProperty("--white", "black");
  //     setSwitchTheme("nuit");
  //   } else {
  //     root.style.setProperty("--white", "white");
  //     root.style.setProperty("--dark", "black");
  //     setSwitchTheme("jour");
  //   }

  //   localStorage.setItem('theme', switchTheme)
  // }

  // addEventListener('load', (event) => {
  //   switchThemeFunction(localStorage.getItem('theme'))
  // })
  return (
    <>
      <button onClick={switchThemeFunction}>{switchTheme}</button>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/works">Works</Link>
    </>
  );
}
