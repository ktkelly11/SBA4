console.log("First file");

import { breedSelect, url } from "./script.mjs";
// import * as dogStuff from "./script.mjs";
import "./third.mjs";
// can also use "import {name} from "file name""

const API_Key =
  "live_gq7bJyh2oCEFvPNVektDFnCpic3JV1FRHN1wDIfEdcEv7TbqXS7WbcftT5VbrqCF";

let storedBreeds = [];

const image = document.getElementById("pic");

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
    const response = await fetch(`${url}?api_key=${API_Key}`);
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
      //   console.log(breed);
      console.log(selectedBreed);
      console.log(selectedBreed.image.url);
      const response = await fetch(
        `https://api.thedogapi.com/v1/images/search?breed_id=${selectedBreed.image.url}`
      );
      const data = await response.json();
      console.log(data);

      // const img = document.createElement("img");
      image.src = selectedBreed.image.url;
      // image.appendChild(img);
      if (image.style.height >= image.style.width) {
        image.style.height = "500px";
      } else {
        image.style.width = "500px";
      }
    } catch (err) {
      console.log(err);
    }
  }
  getDogPics();
});
