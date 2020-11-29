"use strict";

const selectColor = window.document.querySelector("#colorPick");
selectColor.value = window.localStorage.getItem('color');
const characterBody = window.document.querySelector(".body");
characterBody.style.background = window.localStorage.getItem("color");
const characterBackpack = window.document.querySelector(".backpack");
characterBackpack.style.background = window.localStorage.getItem("color");

const characterLeg = window.document.querySelectorAll(".leg");

characterLeg[0].style.background = window.localStorage.getItem("color");
characterLeg[1].style.background = window.localStorage.getItem("color");

const character = [characterBody, characterBackpack, characterLeg];



selectColor.addEventListener("input", () => {
  for (let i = 0; i <= character.length - 1; ++i) {
    for (let j = 0; j <= characterLeg.length - 1; ++j) {
      if (character[i] === characterLeg) {
        characterLeg[j].style.background = selectColor.value;
        window.localStorage.setItem(
          "color",
          (characterLeg[j].style.background = selectColor.value)
        );
      } else {
        character[i].style.background = selectColor.value;
      }
    }
  }
});
