/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/greeter.js":
/*!************************!*\
  !*** ./src/greeter.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n// Greeter.js\nfunction greeter() {\n  var greet = document.createElement('div');\n  greet.textContent = \"Hi there and greetings ssss! wangxiaopeng\";\n  return greet;\n};\n\nexports.greeter = greeter;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ3JlZXRlci5qcz8zMzRiIl0sIm5hbWVzIjpbImdyZWV0ZXIiLCJncmVldCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInRleHRDb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0EsU0FBU0EsT0FBVCxHQUFtQjtBQUNqQixNQUFJQyxRQUFRQyxTQUFTQyxhQUFULENBQXVCLEtBQXZCLENBQVo7QUFDQUYsUUFBTUcsV0FBTixHQUFvQiwyQ0FBcEI7QUFDQSxTQUFPSCxLQUFQO0FBQ0Q7O1FBRU9ELE8sR0FBQUEsTyIsImZpbGUiOiIuL3NyYy9ncmVldGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gR3JlZXRlci5qc1xuZnVuY3Rpb24gZ3JlZXRlcigpIHtcbiAgdmFyIGdyZWV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGdyZWV0LnRleHRDb250ZW50ID0gXCJIaSB0aGVyZSBhbmQgZ3JlZXRpbmdzIHNzc3MhIHdhbmd4aWFvcGVuZ1wiO1xuICByZXR1cm4gZ3JlZXQ7XG59O1xuXG5leHBvcnQge2dyZWV0ZXJ9Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/greeter.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _greeter = __webpack_require__(/*! ./greeter */ \"./src/greeter.js\");\n\n__webpack_require__(/*! ./index.scss */ \"./src/index.scss\");\n\n//ES6 import\ndocument.querySelector(\"#root\").appendChild((0, _greeter.greeter)());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJuYW1lcyI6WyJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhcHBlbmRDaGlsZCJdLCJtYXBwaW5ncyI6Ijs7QUFDQTs7QUFDQTs7QUFGQTtBQUlBQSxTQUFTQyxhQUFULENBQXVCLE9BQXZCLEVBQWdDQyxXQUFoQyxDQUE0Qyx1QkFBNUMiLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL0VTNiBpbXBvcnRcbmltcG9ydCB7IGdyZWV0ZXIgfSBmcm9tIFwiLi9ncmVldGVyXCI7XG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcm9vdFwiKS5hcHBlbmRDaGlsZChncmVldGVyKCkpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguc2Nzcz9iNjEzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ii4vc3JjL2luZGV4LnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ });