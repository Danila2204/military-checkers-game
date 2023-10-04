import { Map } from "./map.js";
import { Unit } from "./units.js"

const canvas = document.querySelector(".canvas");
const context = canvas.getContext("2d");
Map.createRegion(context, 8, 8, 0, 0, 50, 50, "#f00");