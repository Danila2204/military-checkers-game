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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.js */ \"./scripts/map.js\");\n/* harmony import */ var _units_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./units.js */ \"./scripts/units.js\");\n\r\n\r\n\r\nconst canvas = document.querySelector(\".canvas\");\r\nconst context = canvas.getContext(\"2d\");\r\n_map_js__WEBPACK_IMPORTED_MODULE_0__.Map.createRegion(context, 8, 8, 0, 0, 50, 50, \"#f00\");\r\n\r\nconst solider = (0,_units_js__WEBPACK_IMPORTED_MODULE_1__.Unit)(context, \"стрелок\", 10, 0, {width: 2, height: 3}, _map_js__WEBPACK_IMPORTED_MODULE_0__.Map.positions, \"\");\r\nconsole.log(solider);\r\nsolider.create(0, 2, 0);\n\n//# sourceURL=webpack:///./scripts/app.js?");

/***/ }),

/***/ "./scripts/base.js":
/*!*************************!*\
  !*** ./scripts/base.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameObject: () => (/* binding */ GameObject),\n/* harmony export */   GameObjectMethods: () => (/* binding */ GameObjectMethods)\n/* harmony export */ });\nclass GameObject {\r\n    context;\r\n    positions;\r\n    turnAngle;\r\n    localPositionX;\r\n    localPositionY;\r\n    globalPositionX;\r\n    globalPositionY;\r\n    width;\r\n    height;\r\n    deg;\r\n    image;\r\n\r\n    constructor(context, positions, imageSRC, width, height) {\r\n        this.context = context;\r\n        this.positions = positions;\r\n        this.imageSRC = imageSRC;\r\n        this.width = width;\r\n        this.height = height;\r\n    }\r\n}\r\n\r\nfunction GameObjectMethods() {\r\n    return {\r\n        clear() {\r\n            this.context.rotate(this.turnAngle * this.deg);\r\n            this.context.clearRect(this.globalPositionX, this.globalPositionY, this.width, this.height);\r\n        },\r\n        update() {\r\n            this.clear();\r\n            this.create(this.localPositionX, this.localPositionY, this.turnAngle);\r\n        },\r\n        create(localPositionX = 0, localPositionY = 0, corner = 0) {\r\n            this.turnAngle = corner;\r\n            this.localPositionX = localPositionX;\r\n            this.localPositionY = localPositionY;\r\n            this.deg = Math.PI / 180;\r\n    \r\n            let positionX = 0;\r\n            let positionY = 0;\r\n    \r\n            this.image = new Image();\r\n            this.image.src = this.imageSRC;\r\n    \r\n            for (let position of this.positions) {\r\n                if (position.localPositionX === localPositionX && position.localPositionY === localPositionY) {\r\n                    this.globalPositionX = position.globalPositionX;\r\n                    this.globalPositionY = position.globalPositionY;\r\n                }\r\n            }\r\n    \r\n            this.context.rotate(this.deg * corner);\r\n    \r\n            if (this.imageSRC == true) {\r\n                this.image.onload = () => {\r\n                    this.context.drawImage(image, positionX, positionY);\r\n                }\r\n            } else {\r\n                this.context.fillStyle = \"#f00\";\r\n                this.context.fillRect(positionX, positionY, 50, 50);\r\n            }\r\n        },\r\n        rotate(corner) {\r\n            this.turnAngle = corner;\r\n            this.update();\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./scripts/base.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Unit: () => (/* binding */ Unit)\n/* harmony export */ });\n/* harmony import */ var _weapons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weapons.js */ \"./scripts/weapons.js\");\n/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.js */ \"./scripts/base.js\");\n\r\n\r\n\r\nclass Review {\r\n    constructor(reviewX, reviewY) {\r\n        this.reviewX = reviewX;\r\n        this.reviewY = reviewY;\r\n    }\r\n}\r\n\r\nfunction Unit(context, name, HP, review, positions, imageSRC) {\r\n    let reviewPositions = [];\r\n    const unit = {name, HP, review, reviewPositions};\r\n\r\n    return {\r\n        ...new _base_js__WEBPACK_IMPORTED_MODULE_1__.GameObject(context, positions, imageSRC),\r\n        ...(0,_base_js__WEBPACK_IMPORTED_MODULE_1__.GameObjectMethods)(),\r\n        ...unit,\r\n        setReview(width, height) {\r\n            for (let i = 0; i < review[width]; i++) {\r\n                for (let j = 0; j < review[height]; j++) {\r\n                    this.reviewPositions.push(new Review(review[i] + this.globalPositionX, review[j] + this.globalPositionY));\r\n                }\r\n            }\r\n\r\n            console.log(this.reviewPositions);\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./scripts/units.js?");

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