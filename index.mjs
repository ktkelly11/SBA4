console.log("First file");

import "./script.mjs";
import "./third.mjs";
// can also use "import {name} from "file name""

const breedSelect = document.getElementById("dog");

const API_Key =
  "live_gq7bJyh2oCEFvPNVektDFnCpic3JV1FRHN1wDIfEdcEv7TbqXS7WbcftT5VbrqCF";

const url = " https://api.thedogapi.com/v1";
let storedBreeds = [];

// fetch("https://api.thedogapi.com/v1/breeds")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

// function populateDropdown(breeds) {
//   breeds.forEach((breed) => {
//     const option = document.createElement("option");
//     option.textContent = breed.name;
//     option.setAttribute("value", breed.name);
//     breedSelect.appendChild(option);
//   });
// }

// async function fetchBreeds() {
//   try {
//     const response = await fetch("https://api.thedogapi.com/v1/breeds");
//     const data = await response.json();
//     console.log(data);
//     populateDropdown(data.results);
//   } catch (err) {
//     console.log(err);
//   }
// }

// fetchBreeds();
