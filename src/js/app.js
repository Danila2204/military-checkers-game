import { Map } from "./map.js";
import { Unit } from "./units.js"

const canvas = document.querySelector(".canvas");
const context = canvas.getContext("2d");

const WIDTH = 50;
const HEIGHT = 50;

Map.createRegion(context, 8, 8, 0, 0, WIDTH, HEIGHT, "#f00");

const solider = Unit(context, "стрелок", 10, {width: 2, height: 3}, Map.positions, "./imports/img/1.png", WIDTH, HEIGHT);
solider.create(0, 2, 0);