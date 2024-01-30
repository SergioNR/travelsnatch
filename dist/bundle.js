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

/***/ "./src/js/GTM.js":
/*!***********************!*\
  !*** ./src/js/GTM.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst loadGTM = () => {\n  (function (w, d, s, l, i) {\n    w[l] = w[l] || []\n    w[l].push({\n      'gtm.start': new Date().getTime(),\n      event: 'gtm.js'\n    })\n    const f = d.getElementsByTagName(s)[0]\n    const j = d.createElement(s)\n    const dl = l !== 'dataLayer' ? '&l=' + l : ''\n    j.async = true\n    j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl\n    f.parentNode.insertBefore(j, f)\n  })(window, document, 'script', 'dataLayer', 'GTM-KZZQLZ66')\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadGTM);\n\n\n\n\n\n//# sourceURL=webpack://template-repo/./src/js/GTM.js?");

/***/ }),

/***/ "./src/js/GTMEvents.js":
/*!*****************************!*\
  !*** ./src/js/GTMEvents.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   formStepImpression: () => (/* binding */ formStepImpression),\n/* harmony export */   formStepInteraction: () => (/* binding */ formStepInteraction),\n/* harmony export */   formStepSubmit: () => (/* binding */ formStepSubmit)\n/* harmony export */ });\nconst formStepImpression = (stepNumber, stepName, formName) => {\n  dataLayer.push({\n    event: \"formStepImpression\",\n    formStepNum: stepNumber,\n    stepName: stepName,\n    formName: formName\n  });\n};\n\nconst formStepSubmit = (stepNumber, stepName, formName) => {\n    dataLayer.push({\n        event: \"formStepSubmit\",\n        formStepNum: stepNumber,\n        stepName: stepName,\n        formName: formName\n    });\n};\n\nconst formStepInteraction = (stepNumber, stepName, interaction, formName) => {\n    dataLayer.push({\n        event: \"formStepInteraction\",\n        formStepNum: stepNumber,\n        stepName: stepName,\n        interaction: interaction,\n        stepName: stepName,\n        formName: formName\n    });\n}\n\n//# sourceURL=webpack://template-repo/./src/js/GTMEvents.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GTM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GTM.js */ \"./src/js/GTM.js\");\n/* harmony import */ var _GTMEvents_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GTMEvents.js */ \"./src/js/GTMEvents.js\");\n\n\n\n(0,_GTM_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\nconst heroEmailInput = document.querySelector(`.hero-email-input`);\n\nheroEmailInput.addEventListener(`focus`, () => {\n  heroEmailInput.classList.add(`active`);\n  (0,_GTMEvents_js__WEBPACK_IMPORTED_MODULE_1__.formStepInteraction)(1, `Hero`, `Focus`);\n});\n\nheroEmailInput.addEventListener(`focusout`, () => {\n  heroEmailInput.classList.add(`active`);\n  (0,_GTMEvents_js__WEBPACK_IMPORTED_MODULE_1__.formStepInteraction)(1, `Hero`, `FocusOut`);\n});\n\n// Create a new Intersection Observer instance\nconst observer = new IntersectionObserver((entries, observer) => {\n    // Loop over the entries\n    entries.forEach(entry => {\n        // If the element is visible\n        if (entry.isIntersecting) {\n\n\n            // You can also call your function here\n            (0,_GTMEvents_js__WEBPACK_IMPORTED_MODULE_1__.formStepImpression)(1, `Hero`, `Visible`);\n\n            // Once the event is fired, you might want to unobserve the target\n            observer.unobserve(entry.target);\n        }\n    });\n});\n\n// Start observing the `.hero-email-input` element\nobserver.observe(heroEmailInput);\n\nconst form = document.querySelector(`.form`);\n\n// Assuming `form` is your form element\nform.addEventListener('submit', (e) => {\n    e.preventDefault(); // Prevent the form from submitting normally\n  \n    // Get the form data\n    const data = e.target.emailInput.value;\n  \n    // Call the webhook\n    fetch('https://hook.eu1.make.com', {\n      method: 'POST', // or 'PUT'\n      headers: {\n        'Content-Type': 'application/json',\n        'Authorization': 'Basic ' + btoa('7vkudql149o1rkb04cvfzyowaoyjaa45:')\n      },\n      body: JSON.stringify(data), // data is the data you want to send, for example, form data\n    })\n    .then(response => response.json())\n    .then(data => {\n      console.log('Success:', data);\n    })\n    .catch((error) => {\n      console.error('Error:', error);\n    });\n  });\n\n//# sourceURL=webpack://template-repo/./src/js/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;