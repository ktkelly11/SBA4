console.log("First file");

import "./script.mjs";
import "./third.mjs";
// can also use "import {name} from "file name""

const dropdown = document.getElementById("dog");

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
