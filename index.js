"use strict";

const selectColor = window.document.querySelector("#colorPick");
const labelColor = window.document.querySelector("#colorValue");
const characterBody = window.document.querySelector(".body");
const characterBackpack = window.document.querySelector(".backpack");
const characterLeg = window.document.getElementsByClassName("leg");
const character = [characterBody, characterBackpack];
character["characterLeg"] = [...characterLeg];

selectColor.addEventListener("input", () => changeColor());

function changeColor() {
  const selectedColor = selectColor.value;
  labelColor.innerText = selectedColor;
  character.map((partBody) => {
    partBody.style.background = selectedColor;
    window.localStorage.setItem("bodyColor", selectedColor);
    character["characterLeg"].map(
      (bodyPart) => (bodyPart.style.background = selectedColor)
    );
  });
}

function storageBodyColor() {
  character.map((partBody) => {
    partBody.style.background = window.localStorage.getItem("bodyColor");
    character["characterLeg"].map((bodyPart) => {
      return (bodyPart.style.background = window.localStorage.getItem(
        "bodyColor"
      ));
    });
  });
}
storageBodyColor();
