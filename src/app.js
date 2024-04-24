/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let suit = ["♦", "♥", "♠", "♣"];
  let value = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "A",
    "J",
    "Q",
    "K"
  ];

  // This function will select a suit and value from each array
  let selectSuit = () => Math.floor(Math.random() * suit.length);
  let selectValue = () => Math.floor(Math.random() * value.length);

  function buildSuit() {
    let generateSuit = suit[selectSuit()];

    if (generateSuit === "♦" || generateSuit === "♥")
      return `<div class="generate-suit" style="color:red">${generateSuit}</div>`;

    return `<div class="generate-suit">${generateSuit}</div>`;
  }

  function buildValue() {
    let generateValue = value[selectValue()];
    return generateValue;
  }

  function drawCard() {
    let suit = buildSuit();
    let value = buildValue();

    document.querySelector(".top").innerHTML = suit;
    document.querySelector(".value").innerHTML = value;
    document.querySelector(".bottom").innerHTML = suit;
  }

  function displayCard() {
    document.querySelector(".card").innerHTML = `<div class="top"></div>
    <div class="value"></div>
    <div class="bottom"></div>`;

    drawCard();
  }

  displayCard();
};
