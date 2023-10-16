/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.js */ \"./src/js/map.js\");\n/* harmony import */ var _units_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./units.js */ \"./src/js/units.js\");\n\n\nconst canvas = document.querySelector(\".canvas\");\nconst context = canvas.getContext(\"2d\");\n_map_js__WEBPACK_IMPORTED_MODULE_0__.Map.createRegion(context, 8, 8, 0, 0, 50, 50, \"#f00\");\nconst solider = (0,_units_js__WEBPACK_IMPORTED_MODULE_1__.Unit)(context, \"стрелок\", 10, {\n  width: 2,\n  height: 3\n}, _map_js__WEBPACK_IMPORTED_MODULE_0__.Map.positions, \"./Боец.png\");\n// solider.create(0, 2, 0);\n\n//# sourceURL=webpack://gulp/./src/js/app.js?");

/***/ }),

/***/ "./src/js/base.js":
/*!************************!*\
  !*** ./src/js/base.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameObject: () => (/* binding */ GameObject),\n/* harmony export */   GameObjectMethods: () => (/* binding */ GameObjectMethods)\n/* harmony export */ });\nclass GameObject {\n  context;\n  positions;\n  turnAngle;\n  localPositionX;\n  localPositionY;\n  globalPositionX;\n  globalPositionY;\n  width;\n  height;\n  deg;\n  image;\n  constructor(context, positions, imageSRC, width, height) {\n    this.context = context;\n    this.positions = positions;\n    this.imageSRC = imageSRC;\n    this.width = width;\n    this.height = height;\n  }\n}\nfunction GameObjectMethods() {\n  return {\n    clear() {\n      this.context.rotate(this.turnAngle * this.deg);\n      this.context.clearRect(this.globalPositionX, this.globalPositionY, this.width, this.height);\n    },\n    update() {\n      this.clear();\n      this.create(this.localPositionX, this.localPositionY, this.turnAngle);\n    },\n    create(localPositionX = 0, localPositionY = 0, corner = 0) {\n      this.turnAngle = corner;\n      this.localPositionX = localPositionX;\n      this.localPositionY = localPositionY;\n      this.deg = Math.PI / 180;\n      let positionX = 0;\n      let positionY = 0;\n      this.image = new Image();\n      this.image.src = this.imageSRC;\n      for (let i = 0; i < this.positions.length; i++) {\n        if (this.positions[i].localPositionX === localPositionX && this.positions[i].localPositionY === localPositionY) {\n          this.globalPositionX = position.globalPositionX;\n          this.globalPositionY = position.globalPositionY;\n        }\n      }\n      this.context.rotate(this.deg * corner);\n      console.log(this.imageSRC);\n      if (this.imageSRC == true) {\n        console.log(\"imageSRC = true\");\n        this.image.onload = () => {\n          this.context.drawImage(image, positionX, positionY);\n          console.log(\"onload\");\n        };\n      } else {\n        this.context.fillStyle = \"#f00\";\n        this.context.fillRect(positionX, positionY, this.width, this.height);\n      }\n    },\n    rotate(corner) {\n      this.turnAngle = corner;\n      this.update();\n    }\n  };\n}\n\n//# sourceURL=webpack://gulp/./src/js/base.js?");

/***/ }),

/***/ "./src/js/map.js":
/*!***********************!*\
  !*** ./src/js/map.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Map: () => (/* binding */ Map)\n/* harmony export */ });\nclass PositionCeil {\n  constructor(localPositionX = 0, localPositionY = 0, positionX = 0, positionY = 0) {\n    this.localPositionX = localPositionX;\n    this.localPositionY = localPositionY;\n    this.globalPositionX = positionX;\n    this.globalPositionY = positionY;\n  }\n}\nclass Map {\n  static positions = [];\n  static createCeil(context, positionX = 0, positionY = 0, width = 1, height = 1, strokeColor = \"#000\") {\n    context.strokeStyle = strokeColor;\n    context.rect(positionX, positionY, width, height);\n    context.stroke();\n  }\n  static createRow(context, length = 1, positionX = 0, positionY = 0, localPositionX = 0, localPositionY = 0, generalWidth = 10, generalHeight = 10, generalStrokeColor = \"#000\") {\n    localPositionX = 0;\n    for (let i = 0; i < length; i++) {\n      this.createCeil(context, positionX, positionY, generalWidth, generalHeight, generalStrokeColor);\n      this.positions.push(new PositionCeil());\n      this.positions.at(-1).globalPositionX = positionX;\n      this.positions.at(-1).globalPositionY = positionY;\n      this.positions.at(-1).localPositionX = localPositionX;\n      this.positions.at(-1).localPositionY = localPositionY;\n      localPositionX++;\n      positionX += generalWidth;\n    }\n  }\n  static createRegion(context, rows = 1, length = 1, basePositionX = 0, basePositionY = 0, generalWidth = 10, generalHeight = 10, generalStrokeColor = \"#000\") {\n    let positionX = basePositionX;\n    let positionY = basePositionY;\n    let locaclPositionY = 0;\n    for (let i = 0; i < rows; i++) {\n      let localPositionX = 0;\n      this.createRow(context, length, positionX, positionY, localPositionX, locaclPositionY, generalWidth, generalHeight, generalStrokeColor);\n      locaclPositionY++;\n      positionY += generalHeight;\n    }\n  }\n  static conclusion() {\n    console.log(this.positions);\n  }\n}\n\n//# sourceURL=webpack://gulp/./src/js/map.js?");

/***/ }),

/***/ "./src/js/units.js":
/*!*************************!*\
  !*** ./src/js/units.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Unit: () => (/* binding */ Unit)\n/* harmony export */ });\n/* harmony import */ var _weapons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weapons.js */ \"./src/js/weapons.js\");\n/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.js */ \"./src/js/base.js\");\n\n\nclass Review {\n  constructor(reviewX, reviewY) {\n    this.reviewX = reviewX;\n    this.reviewY = reviewY;\n  }\n}\nfunction Unit(context, name, HP, review, positions, imageSRC) {\n  let reviewPositions = [];\n  const unit = {\n    name,\n    HP,\n    review,\n    reviewPositions\n  };\n  return {\n    ...new _base_js__WEBPACK_IMPORTED_MODULE_1__.GameObject(context, positions, imageSRC),\n    ...(0,_base_js__WEBPACK_IMPORTED_MODULE_1__.GameObjectMethods)(),\n    ...unit,\n    setReview(width, height) {\n      for (let i = 0; i < review[width]; i++) {\n        for (let j = 0; j < review[height]; j++) {\n          this.reviewPositions.push(new Review(review[i] + this.globalPositionX, review[j] + this.globalPositionY));\n        }\n      }\n      console.log(this.reviewPositions);\n    }\n  };\n}\n\n//# sourceURL=webpack://gulp/./src/js/units.js?");

/***/ }),

/***/ "./src/js/weapons.js":
/*!***************************!*\
  !*** ./src/js/weapons.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Weapon: () => (/* binding */ Weapon)\n/* harmony export */ });\nfunction Weapon(name, type, attack, accuracy, review, range, rateFire, volume, oboims, ammunition, additionalAmmunition) {\n  const weapon = {\n    name,\n    type,\n    attack,\n    accuracy,\n    review,\n    range,\n    rateFire,\n    volume,\n    oboims,\n    ammunition,\n    additionalAmmunition\n  };\n  return {\n    ...weapon,\n    updateAmmunition() {\n      this.oboims = Math.floor(this.ammunition / this.volume);\n      this.realAmmunition = this.ammunition % this.volume;\n    }\n  };\n}\n\n//# sourceURL=webpack://gulp/./src/js/weapons.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;