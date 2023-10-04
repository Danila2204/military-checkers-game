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

/***/ "./scripts/app.js":
/*!************************!*\
  !*** ./scripts/app.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.js */ \"./scripts/map.js\");\n/* harmony import */ var _units_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./units.js */ \"./scripts/units.js\");\n\r\n\r\n\r\nconst canvas = document.querySelector(\".canvas\");\r\nconst context = canvas.getContext(\"2d\");\r\n_map_js__WEBPACK_IMPORTED_MODULE_0__.Map.createRegion(context, 8, 8, 0, 0, 50, 50, \"#f00\");\n\n//# sourceURL=webpack:///./scripts/app.js?");

/***/ }),

/***/ "./scripts/map.js":
/*!************************!*\
  !*** ./scripts/map.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Map: () => (/* binding */ Map)\n/* harmony export */ });\nclass PositionCeil {\r\n    constructor(localPositionX = 0, localPositionY = 0, positionX = 0, positionY = 0) {\r\n        this.localPositionX = localPositionX;\r\n        this.localPositionY = localPositionY;\r\n        this.globalPositionX = positionX;\r\n        this.globalPositionY = positionY;\r\n    }\r\n}\r\n\r\nclass Map {\r\n    static positions = [];\r\n\r\n    static createCeil(context, positionX = 0, positionY = 0, width = 1, height = 1, strokeColor = \"#000\") {\r\n        context.strokeStyle = strokeColor;\r\n        context.rect(positionX, positionY, width, height);\r\n        context.stroke();\r\n    }\r\n\r\n    static createRow(context, length = 1, positionX = 0, positionY = 0, localPositionX = 0, localPositionY = 0, generalWidth = 10, generalHeight = 10, generalStrokeColor = \"#000\") {\r\n        localPositionX = 0;\r\n\r\n        for (let i = 0; i < length; i++) {\r\n            this.createCeil(context, positionX, positionY, generalWidth, generalHeight, generalStrokeColor);\r\n            this.positions.push(new PositionCeil());\r\n            this.positions.at(-1).globalPositionX = positionX;\r\n            this.positions.at(-1).globalPositionY = positionY;\r\n            this.positions.at(-1).localPositionX = localPositionX;\r\n            this.positions.at(-1).localPositionY = localPositionY;\r\n            localPositionX++;\r\n            positionX += generalWidth;\r\n        }\r\n    }\r\n\r\n    static createRegion(context, rows = 1, length = 1, basePositionX = 0, basePositionY = 0, generalWidth = 10, generalHeight = 10, generalStrokeColor = \"#000\") {\r\n        let positionX = basePositionX;\r\n        let positionY = basePositionY;\r\n\r\n        let locaclPositionY = 0;\r\n\r\n        for (let i = 0; i < rows; i++) {\r\n            let localPositionX = 0;\r\n            this.createRow(context, length, positionX, positionY, localPositionX, locaclPositionY, generalWidth, generalHeight, generalStrokeColor);\r\n            locaclPositionY++;\r\n            positionY += generalHeight;\r\n        }\r\n    }\r\n\r\n    static conclusion() {\r\n        console.log(this.positions);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./scripts/map.js?");

/***/ }),

/***/ "./scripts/units.js":
/*!**************************!*\
  !*** ./scripts/units.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Unit: () => (/* binding */ Unit)\n/* harmony export */ });\n/* harmony import */ var _weapons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weapons.js */ \"./scripts/weapons.js\");\n\r\n\r\nfunction Unit(type, HP, protection, review, imageSRC, positions, context) {\r\n    const unit = {type, HP, protection, review, imageSRC};\r\n\r\n    return {\r\n        ...unit,\r\n        create(localPositionX = 0, localPositionY = 0, rotate = 0) {\r\n            let deg = Math.PI / 180;\r\n            let positionX = 0;\r\n            let positionY = 0;\r\n            let image = new Image();\r\n            image.src = imageSRC;\r\n            \r\n            for (let position of positions) {\r\n                if (position.localPositionX === localPositionX && position.localPositionY === localPositionY) {\r\n                    positionX = position.globalPositionX;\r\n                    positionY = position.globalPositionY;\r\n                }\r\n            }\r\n            context.rotate(deg * rotate)\r\n\r\n            if (imageSRC == true) {\r\n                image.onload = () => {\r\n                    context.drawImage(image, positionX, positionY);\r\n                }\r\n            } else {\r\n                context.fillStyle = \"#f00\";\r\n                context.fillRect(positionX, positionY, 50, 50);\r\n            }\r\n        },\r\n        rotate(deg) {\r\n            this.create(localPositionX, localPositionY, deg);\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./scripts/units.js?");

/***/ }),

/***/ "./scripts/weapons.js":
/*!****************************!*\
  !*** ./scripts/weapons.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Weapon: () => (/* binding */ Weapon)\n/* harmony export */ });\nfunction Weapon(name, type, attack, accuracy, review, range, rateFire, volume, oboims, ammunition, additionalAmmunition) {\r\n    const weapon = {name, type, attack, accuracy, review, range, rateFire, volume, oboims, ammunition, additionalAmmunition};\r\n\r\n    return {\r\n        ...weapon,\r\n        updateAmmunition() {\r\n            this.oboims = Math.floor(this.ammunition / this.volume);\r\n            this.realAmmunition = this.ammunition % this.volume;\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./scripts/weapons.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/app.js");
/******/ 	
/******/ })()
;