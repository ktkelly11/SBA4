console.log("First file");

import "./script.mjs";
import "./third.mjs";
// can also use "import {name} from "file name""

const breedSelect = document.getElementById("dog");

const API_Key =
  "live_gq7bJyh2oCEFvPNVektDFnCpic3JV1FRHN1wDIfEdcEv7TbqXS7WbcftT5VbrqCF";

const url = " https://api.thedogapi.com/v1/breeds";
let storedBreeds = [];

const image = document.getElementsByTagName("img");

function populateDropdown(breeds) {
  breeds.forEach((breed) => {
    const option = document.createElement("option");
    option.textContent = breed.name;
    option.setAttribute("value", breed.name);
    breedSelect.appendChild(option);
  });
}

async function fetchBreeds() {
  try {
    const response = await fetch("https://api.thedogapi.com/v1/breeds");
    const data = await response.json();
    console.log(data);
    storedBreeds = data;
    populateDropdown(data);
  } catch (err) {
    console.log(err);
  }
}

fetchBreeds();

breedSelect.addEventListener("change", (evt) => {
  //  console.log(evt.target.value);
  async function getDogPics() {
    try {
      const selectedBreed = storedBreeds.find((breed) => {
        return breed.name === evt.target.value;
      });
      console.log(evt.target.value);
      //   console.log(storedBreeds);
      console.log(selectedBreed);
      fetch;
    } catch {}
  }
  getDogPics();
});
