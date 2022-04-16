this["wp"] = this["wp"] || {}; this["wp"]["formatLibrary"] =
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
<<<<<<< HEAD
/******/ 	return __webpack_require__(__webpack_require__.s = 430);
=======
/******/ 	return __webpack_require__(__webpack_require__.s = "t1DA");
>>>>>>> master
/******/ })
/************************************************************************/
/******/ ({

<<<<<<< HEAD
/***/ 0:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(self);
}

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
=======
/***/ "1Yn1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Tqx9");
>>>>>>> master
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

<<<<<<< HEAD
var link = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M17.74 2.76c1.68 1.69 1.68 4.41 0 6.1l-1.53 1.52c-1.12 1.12-2.7 1.47-4.14 1.09l2.62-2.61.76-.77.76-.76c.84-.84.84-2.2 0-3.04-.84-.85-2.2-.85-3.04 0l-.77.76-3.38 3.38c-.37-1.44-.02-3.02 1.1-4.14l1.52-1.53c1.69-1.68 4.42-1.68 6.1 0zM8.59 13.43l5.34-5.34c.42-.42.42-1.1 0-1.52-.44-.43-1.13-.39-1.53 0l-5.33 5.34c-.42.42-.42 1.1 0 1.52.44.43 1.13.39 1.52 0zm-.76 2.29l4.14-4.15c.38 1.44.03 3.02-1.09 4.14l-1.52 1.53c-1.69 1.68-4.41 1.68-6.1 0-1.68-1.68-1.68-4.42 0-6.1l1.53-1.52c1.12-1.12 2.7-1.47 4.14-1.1l-4.14 4.15c-.85.84-.85 2.2 0 3.05.84.84 2.2.84 3.04 0z"
}));
/* harmony default export */ __webpack_exports__["a"] = (link);


/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectWithoutProperties; });
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var keyboardReturn = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M16 4h2v9H7v3l-5-4 5-4v3h9V4z"
}));
/* harmony default export */ __webpack_exports__["a"] = (keyboardReturn);


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

(function() { module.exports = this["lodash"]; }());

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
var arrayWithHoles = __webpack_require__(38);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var unsupportedIterableToArray = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
var nonIterableRest = __webpack_require__(39);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _slicedToArray; });




function _slicedToArray(arr, i) {
  return Object(arrayWithHoles["a" /* default */])(arr) || _iterableToArrayLimit(arr, i) || Object(unsupportedIterableToArray["a" /* default */])(arr, i) || Object(nonIterableRest["a" /* default */])();
}

/***/ }),

/***/ 22:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["keycodes"]; }());

/***/ }),

/***/ 24:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["richText"]; }());

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(o, minLen);
}

/***/ }),

/***/ 28:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["dom"]; }());

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var code = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M9.4,16.6L4.8,12l4.6-4.6L8,6l-6,6l6,6L9.4,16.6z M14.6,16.6l4.6-4.6l-4.6-4.6L16,6l6,6l-6,6L14.6,16.6z"
=======
const code = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M20.8 10.7l-4.3-4.3-1.1 1.1 4.3 4.3c.1.1.1.3 0 .4l-4.3 4.3 1.1 1.1 4.3-4.3c.7-.8.7-1.9 0-2.6zM4.2 11.8l4.3-4.3-1-1-4.3 4.3c-.7.7-.7 1.8 0 2.5l4.3 4.3 1.1-1.1-4.3-4.3c-.2-.1-.2-.3-.1-.4z"
>>>>>>> master
}));
/* harmony default export */ __webpack_exports__["a"] = (code);


/***/ }),

<<<<<<< HEAD
/***/ 3:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ 30:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["url"]; }());

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _typeof; });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["data"]; }());

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(19);

// EXTERNAL MODULE: external {"this":["wp","richText"]}
var external_this_wp_richText_ = __webpack_require__(24);

// EXTERNAL MODULE: external {"this":["wp","element"]}
var external_this_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: external {"this":["wp","i18n"]}
var external_this_wp_i18n_ = __webpack_require__(1);

// EXTERNAL MODULE: external {"this":["wp","blockEditor"]}
var external_this_wp_blockEditor_ = __webpack_require__(6);

// EXTERNAL MODULE: external {"this":["wp","primitives"]}
var external_this_wp_primitives_ = __webpack_require__(9);
=======
/***/ "1ZqX":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["data"]; }());

/***/ }),

/***/ "Bpkj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Tqx9");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const link = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z"
}));
/* harmony default export */ __webpack_exports__["a"] = (link);


/***/ }),

/***/ "Crq9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Tqx9");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const formatStrikethrough = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M9.1 9v-.5c0-.6.2-1.1.7-1.4.5-.3 1.2-.5 2-.5.7 0 1.4.1 2.1.3.7.2 1.4.5 2.1.9l.2-1.9c-.6-.3-1.2-.5-1.9-.7-.8-.1-1.6-.2-2.4-.2-1.5 0-2.7.3-3.6 1-.8.7-1.2 1.5-1.2 2.6V9h2zM20 12H4v1h8.3c.3.1.6.2.8.3.5.2.9.5 1.1.8.3.3.4.7.4 1.2 0 .7-.2 1.1-.8 1.5-.5.3-1.2.5-2.1.5-.8 0-1.6-.1-2.4-.3-.8-.2-1.5-.5-2.2-.8L7 18.1c.5.2 1.2.4 2 .6.8.2 1.6.3 2.4.3 1.7 0 3-.3 3.9-1 .9-.7 1.3-1.6 1.3-2.8 0-.9-.2-1.7-.7-2.2H20v-1z"
}));
/* harmony default export */ __webpack_exports__["a"] = (formatStrikethrough);


/***/ }),

/***/ "GRId":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "Mmq9":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["url"]; }());

/***/ }),

/***/ "Mp0b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Tqx9");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const linkOff = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M15.6 7.3h-.7l1.6-3.5-.9-.4-3.9 8.5H9v1.5h2l-1.3 2.8H8.4c-2 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7H10V7.3H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H9l-1.4 3.2.9.4 5.7-12.5h1.4c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.9 0 5.2-2.3 5.2-5.2 0-2.9-2.4-5.2-5.2-5.2z"
}));
/* harmony default export */ __webpack_exports__["a"] = (linkOff);


/***/ }),

/***/ "Tqx9":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["primitives"]; }());

/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

(function() { module.exports = window["lodash"]; }());

/***/ }),

/***/ "axFQ":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "btIw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Tqx9");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const keyboardReturn = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M6.734 16.106l2.176-2.38-1.093-1.028-3.846 4.158 3.846 4.157 1.093-1.027-2.176-2.38h2.811c1.125 0 2.25.03 3.374 0 1.428-.001 3.362-.25 4.963-1.277 1.66-1.065 2.868-2.906 2.868-5.859 0-2.479-1.327-4.896-3.65-5.93-1.82-.813-3.044-.8-4.806-.788l-.567.002v1.5c.184 0 .368 0 .553-.002 1.82-.007 2.704-.014 4.21.657 1.854.827 2.76 2.657 2.76 4.561 0 2.472-.973 3.824-2.178 4.596-1.258.807-2.864 1.04-4.163 1.04h-.02c-1.115.03-2.229 0-3.344 0H6.734z"
}));
/* harmony default export */ __webpack_exports__["a"] = (keyboardReturn);


/***/ }),

/***/ "gdqT":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["a11y"]; }());

/***/ }),

/***/ "iClF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

/** @typedef {{icon: JSX.Element, size?: number} & import('@wordpress/primitives').SVGProps} IconProps */

/**
 * Return an SVG icon.
 *
 * @param {IconProps} props icon is the SVG component to render
 *                          size is a number specifiying the icon size in pixels
 *                          Other props will be passed to wrapped SVG component
 *
 * @return {JSX.Element}  Icon component
 */

function Icon({
  icon,
  size = 24,
  ...props
}) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(icon, {
    width: size,
    height: size,
    ...props
  });
}

/* harmony default export */ __webpack_exports__["a"] = (Icon);


/***/ }),

/***/ "l3Sj":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ }),

/***/ "oMoS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Tqx9");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const button = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M19 6.5H5c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7c0-1.1-.9-2-2-2zm.5 9c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5v-7c0-.3.2-.5.5-.5h14c.3 0 .5.2.5.5v7zM8 12.8h8v-1.5H8v1.5z"
}));
/* harmony default export */ __webpack_exports__["a"] = (button);


/***/ }),

/***/ "qRz9":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["richText"]; }());

/***/ }),

/***/ "rmEH":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["htmlEntities"]; }());

/***/ }),

/***/ "t1DA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external ["wp","richText"]
var external_wp_richText_ = __webpack_require__("qRz9");

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__("GRId");

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__("l3Sj");

// EXTERNAL MODULE: external ["wp","blockEditor"]
var external_wp_blockEditor_ = __webpack_require__("axFQ");

// EXTERNAL MODULE: external ["wp","primitives"]
var external_wp_primitives_ = __webpack_require__("Tqx9");
>>>>>>> master

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/format-bold.js


/**
 * WordPress dependencies
 */

<<<<<<< HEAD
var formatBold = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M6 4v13h4.54c1.37 0 2.46-.33 3.26-1 .8-.66 1.2-1.58 1.2-2.77 0-.84-.17-1.51-.51-2.01s-.9-.85-1.67-1.03v-.09c.57-.1 1.02-.4 1.36-.9s.51-1.13.51-1.91c0-1.14-.39-1.98-1.17-2.5C12.75 4.26 11.5 4 9.78 4H6zm2.57 5.15V6.26h1.36c.73 0 1.27.11 1.61.32.34.22.51.58.51 1.07 0 .54-.16.92-.47 1.15s-.82.35-1.51.35h-1.5zm0 2.19h1.6c1.44 0 2.16.53 2.16 1.61 0 .6-.17 1.05-.51 1.34s-.86.43-1.57.43H8.57v-3.38z"
=======
const formatBold = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M14.7 11.3c1-.6 1.5-1.6 1.5-3 0-2.3-1.3-3.4-4-3.4H7v14h5.8c1.4 0 2.5-.3 3.3-1 .8-.7 1.2-1.7 1.2-2.9.1-1.9-.8-3.1-2.6-3.7zm-5.1-4h2.3c.6 0 1.1.1 1.4.4.3.3.5.7.5 1.2s-.2 1-.5 1.2c-.3.3-.8.4-1.4.4H9.6V7.3zm4.6 9c-.4.3-1 .4-1.7.4H9.6v-3.9h2.9c.7 0 1.3.2 1.7.5.4.3.6.8.6 1.5s-.2 1.2-.6 1.5z"
>>>>>>> master
}));
/* harmony default export */ var format_bold = (formatBold);

// CONCATENATED MODULE: ./node_modules/@wordpress/format-library/build-module/bold/index.js


/**
 * WordPress dependencies
 */




<<<<<<< HEAD
var bold_name = 'core/bold';

var title = Object(external_this_wp_i18n_["__"])('Bold');

var bold = {
  name: bold_name,
  title: title,
  tagName: 'strong',
  className: null,
  edit: function edit(_ref) {
    var isActive = _ref.isActive,
        value = _ref.value,
        onChange = _ref.onChange,
        onFocus = _ref.onFocus;

    function onToggle() {
      onChange(Object(external_this_wp_richText_["toggleFormat"])(value, {
=======
const bold_name = 'core/bold';

const title = Object(external_wp_i18n_["__"])('Bold');

const bold = {
  name: bold_name,
  title,
  tagName: 'strong',
  className: null,

  edit({
    isActive,
    value,
    onChange,
    onFocus
  }) {
    function onToggle() {
      onChange(Object(external_wp_richText_["toggleFormat"])(value, {
>>>>>>> master
        type: bold_name
      }));
    }

    function onClick() {
      onToggle();
      onFocus();
    }

<<<<<<< HEAD
    return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichTextShortcut"], {
      type: "primary",
      character: "b",
      onUse: onToggle
    }), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichTextToolbarButton"], {
=======
    return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wp_blockEditor_["RichTextShortcut"], {
      type: "primary",
      character: "b",
      onUse: onToggle
    }), Object(external_wp_element_["createElement"])(external_wp_blockEditor_["RichTextToolbarButton"], {
>>>>>>> master
      name: "bold",
      icon: format_bold,
      title: title,
      onClick: onClick,
      isActive: isActive,
      shortcutType: "primary",
      shortcutCharacter: "b"
<<<<<<< HEAD
    }), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["__unstableRichTextInputEvent"], {
=======
    }), Object(external_wp_element_["createElement"])(external_wp_blockEditor_["__unstableRichTextInputEvent"], {
>>>>>>> master
      inputType: "formatBold",
      onInput: onToggle
    }));
  }
<<<<<<< HEAD
};

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/code.js
var code = __webpack_require__(290);
=======

};

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/code.js
var code = __webpack_require__("1Yn1");
>>>>>>> master

// CONCATENATED MODULE: ./node_modules/@wordpress/format-library/build-module/code/index.js


/**
 * WordPress dependencies
 */




<<<<<<< HEAD
var code_name = 'core/code';

var code_title = Object(external_this_wp_i18n_["__"])('Inline Code');

var code_code = {
=======
const code_name = 'core/code';

const code_title = Object(external_wp_i18n_["__"])('Inline code');

const code_code = {
>>>>>>> master
  name: code_name,
  title: code_title,
  tagName: 'code',
  className: null,
<<<<<<< HEAD
  __unstableInputRule: function __unstableInputRule(value) {
    var BACKTICK = '`';
    var _value = value,
        start = _value.start,
        text = _value.text;
    var characterBefore = text.slice(start - 1, start); // Quick check the text for the necessary character.
=======

  __unstableInputRule(value) {
    const BACKTICK = '`';
    const {
      start,
      text
    } = value;
    const characterBefore = text.slice(start - 1, start); // Quick check the text for the necessary character.
>>>>>>> master

    if (characterBefore !== BACKTICK) {
      return value;
    }

<<<<<<< HEAD
    var textBefore = text.slice(0, start - 1);
    var indexBefore = textBefore.lastIndexOf(BACKTICK);
=======
    const textBefore = text.slice(0, start - 1);
    const indexBefore = textBefore.lastIndexOf(BACKTICK);
>>>>>>> master

    if (indexBefore === -1) {
      return value;
    }

<<<<<<< HEAD
    var startIndex = indexBefore;
    var endIndex = start - 2;
=======
    const startIndex = indexBefore;
    const endIndex = start - 2;
>>>>>>> master

    if (startIndex === endIndex) {
      return value;
    }

<<<<<<< HEAD
    value = Object(external_this_wp_richText_["remove"])(value, startIndex, startIndex + 1);
    value = Object(external_this_wp_richText_["remove"])(value, endIndex, endIndex + 1);
    value = Object(external_this_wp_richText_["applyFormat"])(value, {
=======
    value = Object(external_wp_richText_["remove"])(value, startIndex, startIndex + 1);
    value = Object(external_wp_richText_["remove"])(value, endIndex, endIndex + 1);
    value = Object(external_wp_richText_["applyFormat"])(value, {
>>>>>>> master
      type: code_name
    }, startIndex, endIndex);
    return value;
  },
<<<<<<< HEAD
  edit: function edit(_ref) {
    var value = _ref.value,
        onChange = _ref.onChange,
        onFocus = _ref.onFocus,
        isActive = _ref.isActive;

    function onClick() {
      onChange(Object(external_this_wp_richText_["toggleFormat"])(value, {
=======

  edit({
    value,
    onChange,
    onFocus,
    isActive
  }) {
    function onClick() {
      onChange(Object(external_wp_richText_["toggleFormat"])(value, {
>>>>>>> master
        type: code_name
      }));
      onFocus();
    }

<<<<<<< HEAD
    return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichTextToolbarButton"], {
=======
    return Object(external_wp_element_["createElement"])(external_wp_blockEditor_["RichTextToolbarButton"], {
>>>>>>> master
      icon: code["a" /* default */],
      title: code_title,
      onClick: onClick,
      isActive: isActive
    });
  }
<<<<<<< HEAD
};

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(17);

// EXTERNAL MODULE: external {"this":["wp","components"]}
var external_this_wp_components_ = __webpack_require__(3);

// EXTERNAL MODULE: external {"this":["wp","keycodes"]}
var external_this_wp_keycodes_ = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/keyboard-return.js
var keyboard_return = __webpack_require__(192);
=======

};

// EXTERNAL MODULE: external ["wp","components"]
var external_wp_components_ = __webpack_require__("tI+e");

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/keyboard-return.js
var keyboard_return = __webpack_require__("btIw");
>>>>>>> master

// CONCATENATED MODULE: ./node_modules/@wordpress/format-library/build-module/image/index.js


<<<<<<< HEAD







function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

=======
>>>>>>> master
/**
 * WordPress dependencies
 */






<<<<<<< HEAD

var ALLOWED_MEDIA_TYPES = ['image'];
var image_name = 'core/image';

var image_title = Object(external_this_wp_i18n_["__"])('Inline image');

var stopKeyPropagation = function stopKeyPropagation(event) {
  return event.stopPropagation();
};

function getRange() {
  var selection = window.getSelection();
  return selection.rangeCount ? selection.getRangeAt(0) : null;
}

var image_image = {
  name: image_name,
  title: image_title,
  keywords: [Object(external_this_wp_i18n_["__"])('photo'), Object(external_this_wp_i18n_["__"])('media')],
=======
const ALLOWED_MEDIA_TYPES = ['image'];
const image_name = 'core/image';

const image_title = Object(external_wp_i18n_["__"])('Inline image');

const image_image = {
  name: image_name,
  title: image_title,
  keywords: [Object(external_wp_i18n_["__"])('photo'), Object(external_wp_i18n_["__"])('media')],
>>>>>>> master
  object: true,
  tagName: 'img',
  className: null,
  attributes: {
    className: 'class',
    style: 'style',
    url: 'src',
    alt: 'alt'
  },
<<<<<<< HEAD
  edit:
  /*#__PURE__*/
  function (_Component) {
    Object(inherits["a" /* default */])(ImageEdit, _Component);

    function ImageEdit() {
      var _this;

      Object(classCallCheck["a" /* default */])(this, ImageEdit);

      _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(ImageEdit).apply(this, arguments));
      _this.onChange = _this.onChange.bind(Object(assertThisInitialized["a" /* default */])(_this));
      _this.onKeyDown = _this.onKeyDown.bind(Object(assertThisInitialized["a" /* default */])(_this));
      _this.openModal = _this.openModal.bind(Object(assertThisInitialized["a" /* default */])(_this));
      _this.closeModal = _this.closeModal.bind(Object(assertThisInitialized["a" /* default */])(_this));
      _this.anchorRef = null;
      _this.state = {
        modal: false
      };
      return _this;
    }

    Object(createClass["a" /* default */])(ImageEdit, [{
      key: "onChange",
      value: function onChange(width) {
        this.setState({
          width: width
        });
      }
    }, {
      key: "onKeyDown",
      value: function onKeyDown(event) {
        if ([external_this_wp_keycodes_["LEFT"], external_this_wp_keycodes_["DOWN"], external_this_wp_keycodes_["RIGHT"], external_this_wp_keycodes_["UP"], external_this_wp_keycodes_["BACKSPACE"], external_this_wp_keycodes_["ENTER"]].indexOf(event.keyCode) > -1) {
          // Stop the key event from propagating up to ObserveTyping.startTypingInTextField.
          event.stopPropagation();
        }
      }
    }, {
      key: "openModal",
      value: function openModal() {
        this.setState({
          modal: true
        });
      }
    }, {
      key: "closeModal",
      value: function closeModal() {
        this.setState({
          modal: false
        });
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        this.anchorRef = getRange();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        // When the popover is open or when the selected image changes,
        // update the anchorRef.
        if (!prevProps.isObjectActive && this.props.isObjectActive || prevProps.activeObjectAttributes.url !== this.props.activeObjectAttributes.url) {
          this.anchorRef = getRange();
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props = this.props,
            value = _this$props.value,
            onChange = _this$props.onChange,
            onFocus = _this$props.onFocus,
            isObjectActive = _this$props.isObjectActive,
            activeObjectAttributes = _this$props.activeObjectAttributes;
        return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["MediaUploadCheck"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichTextToolbarButton"], {
          icon: Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SVG"], {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24"
          }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
            d: "M4 16h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2zM4 5h10v9H4V5zm14 9v2h4v-2h-4zM2 20h20v-2H2v2zm6.4-8.8L7 9.4 5 12h8l-2.6-3.4-2 2.6z"
          })),
          title: image_title,
          onClick: this.openModal,
          isActive: isObjectActive
        }), this.state.modal && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["MediaUpload"], {
          allowedTypes: ALLOWED_MEDIA_TYPES,
          onSelect: function onSelect(_ref) {
            var id = _ref.id,
                url = _ref.url,
                alt = _ref.alt,
                width = _ref.width;

            _this2.closeModal();

            onChange(Object(external_this_wp_richText_["insertObject"])(value, {
              type: image_name,
              attributes: {
                className: "wp-image-".concat(id),
                style: "width: ".concat(Math.min(width, 150), "px;"),
                url: url,
                alt: alt
              }
            }));
            onFocus();
          },
          onClose: this.closeModal,
          render: function render(_ref2) {
            var open = _ref2.open;
            open();
            return null;
          }
        }), isObjectActive && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Popover"], {
          position: "bottom center",
          focusOnMount: false,
          anchorRef: this.anchorRef
        }, Object(external_this_wp_element_["createElement"])("form", {
          className: "block-editor-format-toolbar__image-container-content",
          onKeyPress: stopKeyPropagation,
          onKeyDown: this.onKeyDown,
          onSubmit: function onSubmit(event) {
            var newReplacements = value.replacements.slice();
            newReplacements[value.start] = {
              type: image_name,
              attributes: _objectSpread({}, activeObjectAttributes, {
                style: "width: ".concat(_this2.state.width, "px;")
              })
            };
            onChange(_objectSpread({}, value, {
              replacements: newReplacements
            }));
            event.preventDefault();
          }
        }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["TextControl"], {
          className: "block-editor-format-toolbar__image-container-value",
          type: "number",
          label: Object(external_this_wp_i18n_["__"])('Width'),
          value: this.state.width,
          min: 1,
          onChange: this.onChange
        }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
          icon: keyboard_return["a" /* default */],
          label: Object(external_this_wp_i18n_["__"])('Apply'),
          type: "submit"
        }))));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(props, state) {
        var style = props.activeObjectAttributes.style;

        if (style === state.previousStyle) {
          return null;
        }

        if (!style) {
          return {
            width: undefined,
            previousStyle: style
          };
        }

        return {
          width: style.replace(/\D/g, ''),
          previousStyle: style
        };
      }
    }]);

    return ImageEdit;
  }(external_this_wp_element_["Component"])
};

=======
  edit: Edit
};

function InlineUI({
  value,
  onChange,
  activeObjectAttributes,
  contentRef
}) {
  const {
    style
  } = activeObjectAttributes;
  const [width, setWidth] = Object(external_wp_element_["useState"])(style === null || style === void 0 ? void 0 : style.replace(/\D/g, ''));
  const anchorRef = Object(external_wp_richText_["useAnchorRef"])({
    ref: contentRef,
    value,
    settings: image_image
  });
  return Object(external_wp_element_["createElement"])(external_wp_components_["Popover"], {
    position: "bottom center",
    focusOnMount: false,
    anchorRef: anchorRef,
    className: "block-editor-format-toolbar__image-popover"
  }, Object(external_wp_element_["createElement"])("form", {
    className: "block-editor-format-toolbar__image-container-content",
    onSubmit: event => {
      const newReplacements = value.replacements.slice();
      newReplacements[value.start] = {
        type: image_name,
        attributes: { ...activeObjectAttributes,
          style: `width: ${width}px;`
        }
      };
      onChange({ ...value,
        replacements: newReplacements
      });
      event.preventDefault();
    }
  }, Object(external_wp_element_["createElement"])(external_wp_components_["TextControl"], {
    className: "block-editor-format-toolbar__image-container-value",
    type: "number",
    label: Object(external_wp_i18n_["__"])('Width'),
    value: width,
    min: 1,
    onChange: newWidth => setWidth(newWidth)
  }), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    icon: keyboard_return["a" /* default */],
    label: Object(external_wp_i18n_["__"])('Apply'),
    type: "submit"
  })));
}

function Edit({
  value,
  onChange,
  onFocus,
  isObjectActive,
  activeObjectAttributes,
  contentRef
}) {
  const [isModalOpen, setIsModalOpen] = Object(external_wp_element_["useState"])(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return Object(external_wp_element_["createElement"])(external_wp_blockEditor_["MediaUploadCheck"], null, Object(external_wp_element_["createElement"])(external_wp_blockEditor_["RichTextToolbarButton"], {
    icon: Object(external_wp_element_["createElement"])(external_wp_components_["SVG"], {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24"
    }, Object(external_wp_element_["createElement"])(external_wp_components_["Path"], {
      d: "M4 18.5h16V17H4v1.5zM16 13v1.5h4V13h-4zM5.1 15h7.8c.6 0 1.1-.5 1.1-1.1V6.1c0-.6-.5-1.1-1.1-1.1H5.1C4.5 5 4 5.5 4 6.1v7.8c0 .6.5 1.1 1.1 1.1zm.4-8.5h7V10l-1-1c-.3-.3-.8-.3-1 0l-1.6 1.5-1.2-.7c-.3-.2-.6-.2-.9 0l-1.3 1V6.5zm0 6.1l1.8-1.3 1.3.8c.3.2.7.2.9-.1l1.5-1.4 1.5 1.4v1.5h-7v-.9z"
    })),
    title: image_title,
    onClick: openModal,
    isActive: isObjectActive
  }), isModalOpen && Object(external_wp_element_["createElement"])(external_wp_blockEditor_["MediaUpload"], {
    allowedTypes: ALLOWED_MEDIA_TYPES,
    onSelect: ({
      id,
      url,
      alt,
      width: imgWidth
    }) => {
      closeModal();
      onChange(Object(external_wp_richText_["insertObject"])(value, {
        type: image_name,
        attributes: {
          className: `wp-image-${id}`,
          style: `width: ${Math.min(imgWidth, 150)}px;`,
          url,
          alt
        }
      }));
      onFocus();
    },
    onClose: closeModal,
    render: ({
      open
    }) => {
      open();
      return null;
    }
  }), isObjectActive && Object(external_wp_element_["createElement"])(InlineUI, {
    value: value,
    onChange: onChange,
    activeObjectAttributes: activeObjectAttributes,
    contentRef: contentRef
  }));
}

>>>>>>> master
// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/format-italic.js


/**
 * WordPress dependencies
 */

<<<<<<< HEAD
var formatItalic = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M14.78 6h-2.13l-2.8 9h2.12l-.62 2H4.6l.62-2h2.14l2.8-9H8.03l.62-2h6.75z"
=======
const formatItalic = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M12.5 5L10 19h1.9l2.5-14z"
>>>>>>> master
}));
/* harmony default export */ var format_italic = (formatItalic);

// CONCATENATED MODULE: ./node_modules/@wordpress/format-library/build-module/italic/index.js


/**
 * WordPress dependencies
 */




<<<<<<< HEAD
var italic_name = 'core/italic';

var italic_title = Object(external_this_wp_i18n_["__"])('Italic');

var italic = {
=======
const italic_name = 'core/italic';

const italic_title = Object(external_wp_i18n_["__"])('Italic');

const italic = {
>>>>>>> master
  name: italic_name,
  title: italic_title,
  tagName: 'em',
  className: null,
<<<<<<< HEAD
  edit: function edit(_ref) {
    var isActive = _ref.isActive,
        value = _ref.value,
        onChange = _ref.onChange,
        onFocus = _ref.onFocus;

    function onToggle() {
      onChange(Object(external_this_wp_richText_["toggleFormat"])(value, {
=======

  edit({
    isActive,
    value,
    onChange,
    onFocus
  }) {
    function onToggle() {
      onChange(Object(external_wp_richText_["toggleFormat"])(value, {
>>>>>>> master
        type: italic_name
      }));
    }

    function onClick() {
      onToggle();
      onFocus();
    }

<<<<<<< HEAD
    return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichTextShortcut"], {
      type: "primary",
      character: "i",
      onUse: onToggle
    }), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichTextToolbarButton"], {
=======
    return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wp_blockEditor_["RichTextShortcut"], {
      type: "primary",
      character: "i",
      onUse: onToggle
    }), Object(external_wp_element_["createElement"])(external_wp_blockEditor_["RichTextToolbarButton"], {
>>>>>>> master
      name: "italic",
      icon: format_italic,
      title: italic_title,
      onClick: onClick,
      isActive: isActive,
      shortcutType: "primary",
      shortcutCharacter: "i"
<<<<<<< HEAD
    }), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["__unstableRichTextInputEvent"], {
=======
    }), Object(external_wp_element_["createElement"])(external_wp_blockEditor_["__unstableRichTextInputEvent"], {
>>>>>>> master
      inputType: "formatItalic",
      onInput: onToggle
    }));
  }
<<<<<<< HEAD
};

// EXTERNAL MODULE: external {"this":["wp","url"]}
var external_this_wp_url_ = __webpack_require__(30);

// EXTERNAL MODULE: external {"this":["wp","htmlEntities"]}
var external_this_wp_htmlEntities_ = __webpack_require__(58);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/link-off.js


/**
 * WordPress dependencies
 */

var linkOff = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M17.74 2.26c1.68 1.69 1.68 4.41 0 6.1l-1.53 1.52c-.32.33-.69.58-1.08.77L13 10l1.69-1.64.76-.77.76-.76c.84-.84.84-2.2 0-3.04-.84-.85-2.2-.85-3.04 0l-.77.76-.76.76L10 7l-.65-2.14c.19-.38.44-.75.77-1.07l1.52-1.53c1.69-1.68 4.42-1.68 6.1 0zM2 4l8 6-6-8zm4-2l4 8-2-8H6zM2 6l8 4-8-2V6zm7.36 7.69L10 13l.74 2.35-1.38 1.39c-1.69 1.68-4.41 1.68-6.1 0-1.68-1.68-1.68-4.42 0-6.1l1.39-1.38L7 10l-.69.64-1.52 1.53c-.85.84-.85 2.2 0 3.04.84.85 2.2.85 3.04 0zM18 16l-8-6 6 8zm-4 2l-4-8 2 8h2zm4-4l-8-4 8 2v2z"
}));
/* harmony default export */ var link_off = (linkOff);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/link.js
var library_link = __webpack_require__(159);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(20);

// EXTERNAL MODULE: external {"this":"lodash"}
var external_this_lodash_ = __webpack_require__(2);
=======

};

// EXTERNAL MODULE: external ["wp","url"]
var external_wp_url_ = __webpack_require__("Mmq9");

// EXTERNAL MODULE: external ["wp","htmlEntities"]
var external_wp_htmlEntities_ = __webpack_require__("rmEH");

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/link-off.js
var link_off = __webpack_require__("Mp0b");

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/link.js
var library_link = __webpack_require__("Bpkj");

// EXTERNAL MODULE: external ["wp","a11y"]
var external_wp_a11y_ = __webpack_require__("gdqT");

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");
>>>>>>> master

// CONCATENATED MODULE: ./node_modules/@wordpress/format-library/build-module/link/utils.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Check for issues with the provided href.
 *
 * @param {string} href The href.
 *
 * @return {boolean} Is the href invalid?
 */

function isValidHref(href) {
  if (!href) {
    return false;
  }

<<<<<<< HEAD
  var trimmedHref = href.trim();
=======
  const trimmedHref = href.trim();
>>>>>>> master

  if (!trimmedHref) {
    return false;
  } // Does the href start with something that looks like a URL protocol?


  if (/^\S+:/.test(trimmedHref)) {
<<<<<<< HEAD
    var protocol = Object(external_this_wp_url_["getProtocol"])(trimmedHref);

    if (!Object(external_this_wp_url_["isValidProtocol"])(protocol)) {
=======
    const protocol = Object(external_wp_url_["getProtocol"])(trimmedHref);

    if (!Object(external_wp_url_["isValidProtocol"])(protocol)) {
>>>>>>> master
      return false;
    } // Add some extra checks for http(s) URIs, since these are the most common use-case.
    // This ensures URIs with an http protocol have exactly two forward slashes following the protocol.


<<<<<<< HEAD
    if (Object(external_this_lodash_["startsWith"])(protocol, 'http') && !/^https?:\/\/[^\/\s]/i.test(trimmedHref)) {
      return false;
    }

    var authority = Object(external_this_wp_url_["getAuthority"])(trimmedHref);

    if (!Object(external_this_wp_url_["isValidAuthority"])(authority)) {
      return false;
    }

    var path = Object(external_this_wp_url_["getPath"])(trimmedHref);

    if (path && !Object(external_this_wp_url_["isValidPath"])(path)) {
      return false;
    }

    var queryString = Object(external_this_wp_url_["getQueryString"])(trimmedHref);

    if (queryString && !Object(external_this_wp_url_["isValidQueryString"])(queryString)) {
      return false;
    }

    var fragment = Object(external_this_wp_url_["getFragment"])(trimmedHref);

    if (fragment && !Object(external_this_wp_url_["isValidFragment"])(fragment)) {
=======
    if (Object(external_lodash_["startsWith"])(protocol, 'http') && !/^https?:\/\/[^\/\s]/i.test(trimmedHref)) {
      return false;
    }

    const authority = Object(external_wp_url_["getAuthority"])(trimmedHref);

    if (!Object(external_wp_url_["isValidAuthority"])(authority)) {
      return false;
    }

    const path = Object(external_wp_url_["getPath"])(trimmedHref);

    if (path && !Object(external_wp_url_["isValidPath"])(path)) {
      return false;
    }

    const queryString = Object(external_wp_url_["getQueryString"])(trimmedHref);

    if (queryString && !Object(external_wp_url_["isValidQueryString"])(queryString)) {
      return false;
    }

    const fragment = Object(external_wp_url_["getFragment"])(trimmedHref);

    if (fragment && !Object(external_wp_url_["isValidFragment"])(fragment)) {
>>>>>>> master
      return false;
    }
  } // Validate anchor links.


<<<<<<< HEAD
  if (Object(external_this_lodash_["startsWith"])(trimmedHref, '#') && !Object(external_this_wp_url_["isValidFragment"])(trimmedHref)) {
=======
  if (Object(external_lodash_["startsWith"])(trimmedHref, '#') && !Object(external_wp_url_["isValidFragment"])(trimmedHref)) {
>>>>>>> master
    return false;
  }

  return true;
}
/**
 * Generates the format object that will be applied to the link text.
 *
 * @param {Object}  options
 * @param {string}  options.url              The href of the link.
<<<<<<< HEAD
 * @param {boolean} options.opensInNewWindow Whether this link will open in a new window.
 * @param {Object}  options.text             The text that is being hyperlinked.
=======
 * @param {string}  options.type             The type of the link.
 * @param {string}  options.id               The ID of the link.
 * @param {boolean} options.opensInNewWindow Whether this link will open in a new window.
>>>>>>> master
 *
 * @return {Object} The final format object.
 */

<<<<<<< HEAD
function createLinkFormat(_ref) {
  var url = _ref.url,
      opensInNewWindow = _ref.opensInNewWindow;
  var format = {
    type: 'core/link',
    attributes: {
      url: url
    }
  };
=======
function createLinkFormat({
  url,
  type,
  id,
  opensInNewWindow
}) {
  const format = {
    type: 'core/link',
    attributes: {
      url
    }
  };
  if (type) format.attributes.type = type;
  if (id) format.attributes.id = id;
>>>>>>> master

  if (opensInNewWindow) {
    format.attributes.target = '_blank';
    format.attributes.rel = 'noreferrer noopener';
  }

  return format;
}

// CONCATENATED MODULE: ./node_modules/@wordpress/format-library/build-module/link/inline.js


<<<<<<< HEAD


function inline_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function inline_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { inline_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { inline_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */

=======
>>>>>>> master
/**
 * WordPress dependencies
 */






<<<<<<< HEAD

=======
>>>>>>> master
/**
 * Internal dependencies
 */



<<<<<<< HEAD
function InlineLinkUI(_ref) {
  var isActive = _ref.isActive,
      activeAttributes = _ref.activeAttributes,
      addingLink = _ref.addingLink,
      value = _ref.value,
      onChange = _ref.onChange,
      speak = _ref.speak,
      stopAddingLink = _ref.stopAddingLink;

  /**
   * A unique key is generated when switching between editing and not editing
   * a link, based on:
   *
   * - This component may be rendered _either_ when a link is active _or_
   *   when adding or editing a link.
   * - It's only desirable to shift focus into the Popover when explicitly
   *   adding or editing a link, not when in the inline boundary of a link.
   * - Focus behavior can only be controlled on a Popover at the time it
   *   mounts, so a new instance of the component must be mounted to
   *   programmatically enact the focusOnMount behavior.
   *
   * @type {string}
   */
  var mountingKey = Object(external_this_wp_element_["useMemo"])(external_this_lodash_["uniqueId"], [addingLink]);
=======

function InlineLinkUI({
  isActive,
  activeAttributes,
  addingLink,
  value,
  onChange,
  speak,
  stopAddingLink,
  contentRef
}) {
>>>>>>> master
  /**
   * Pending settings to be applied to the next link. When inserting a new
   * link, toggle values cannot be applied immediately, because there is not
   * yet a link for them to apply to. Thus, they are maintained in a state
   * value until the time that the link can be inserted or edited.
   *
   * @type {[Object|undefined,Function]}
   */
<<<<<<< HEAD

  var _useState = Object(external_this_wp_element_["useState"])(),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      nextLinkValue = _useState2[0],
      setNextLinkValue = _useState2[1];

  var anchorRef = Object(external_this_wp_element_["useMemo"])(function () {
    var selection = window.getSelection();

    if (!selection.rangeCount) {
      return;
    }

    var range = selection.getRangeAt(0);

    if (addingLink && !isActive) {
      return range;
    }

    var element = range.startContainer; // If the caret is right before the element, select the next element.

    element = element.nextElementSibling || element;

    while (element.nodeType !== window.Node.ELEMENT_NODE) {
      element = element.parentNode;
    }

    return element.closest('a');
  }, [addingLink, value.start, value.end]);

  var linkValue = inline_objectSpread({
    url: activeAttributes.url,
    opensInNewTab: activeAttributes.target === '_blank'
  }, nextLinkValue);
=======
  const [nextLinkValue, setNextLinkValue] = Object(external_wp_element_["useState"])();
  const linkValue = {
    url: activeAttributes.url,
    type: activeAttributes.type,
    id: activeAttributes.id,
    opensInNewTab: activeAttributes.target === '_blank',
    ...nextLinkValue
  };
>>>>>>> master

  function onChangeLink(nextValue) {
    // Merge with values from state, both for the purpose of assigning the
    // next state value, and for use in constructing the new link format if
    // the link is ready to be applied.
<<<<<<< HEAD
    nextValue = inline_objectSpread({}, nextLinkValue, {}, nextValue); // LinkControl calls `onChange` immediately upon the toggling a setting.

    var didToggleSetting = linkValue.opensInNewTab !== nextValue.opensInNewTab && linkValue.url === nextValue.url; // If change handler was called as a result of a settings change during
    // link insertion, it must be held in state until the link is ready to
    // be applied.

    var didToggleSettingForNewLink = didToggleSetting && nextValue.url === undefined; // If link will be assigned, the state value can be considered flushed.
=======
    nextValue = { ...nextLinkValue,
      ...nextValue
    }; // LinkControl calls `onChange` immediately upon the toggling a setting.

    const didToggleSetting = linkValue.opensInNewTab !== nextValue.opensInNewTab && linkValue.url === nextValue.url; // If change handler was called as a result of a settings change during
    // link insertion, it must be held in state until the link is ready to
    // be applied.

    const didToggleSettingForNewLink = didToggleSetting && nextValue.url === undefined; // If link will be assigned, the state value can be considered flushed.
>>>>>>> master
    // Otherwise, persist the pending changes.

    setNextLinkValue(didToggleSettingForNewLink ? nextValue : undefined);

    if (didToggleSettingForNewLink) {
      return;
    }

<<<<<<< HEAD
    var newUrl = Object(external_this_wp_url_["prependHTTP"])(nextValue.url);
    var format = createLinkFormat({
      url: newUrl,
      opensInNewWindow: nextValue.opensInNewTab
    });

    if (Object(external_this_wp_richText_["isCollapsed"])(value) && !isActive) {
      var toInsert = Object(external_this_wp_richText_["applyFormat"])(Object(external_this_wp_richText_["create"])({
        text: newUrl
      }), format, 0, newUrl.length);
      onChange(Object(external_this_wp_richText_["insert"])(value, toInsert));
    } else {
      onChange(Object(external_this_wp_richText_["applyFormat"])(value, format));
=======
    const newUrl = Object(external_wp_url_["prependHTTP"])(nextValue.url);
    const format = createLinkFormat({
      url: newUrl,
      type: nextValue.type,
      id: nextValue.id !== undefined && nextValue.id !== null ? String(nextValue.id) : undefined,
      opensInNewWindow: nextValue.opensInNewTab
    });

    if (Object(external_wp_richText_["isCollapsed"])(value) && !isActive) {
      const newText = nextValue.title || newUrl;
      const toInsert = Object(external_wp_richText_["applyFormat"])(Object(external_wp_richText_["create"])({
        text: newText
      }), format, 0, newText.length);
      onChange(Object(external_wp_richText_["insert"])(value, toInsert));
    } else {
      const newValue = Object(external_wp_richText_["applyFormat"])(value, format);
      newValue.start = newValue.end;
      newValue.activeFormats = [];
      onChange(newValue);
>>>>>>> master
    } // Focus should only be shifted back to the formatted segment when the
    // URL is submitted.


    if (!didToggleSetting) {
      stopAddingLink();
    }

    if (!isValidHref(newUrl)) {
<<<<<<< HEAD
      speak(Object(external_this_wp_i18n_["__"])('Warning: the link has been inserted but may have errors. Please test it.'), 'assertive');
    } else if (isActive) {
      speak(Object(external_this_wp_i18n_["__"])('Link edited.'), 'assertive');
    } else {
      speak(Object(external_this_wp_i18n_["__"])('Link inserted.'), 'assertive');
    }
  }

  return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Popover"], {
    key: mountingKey,
    anchorRef: anchorRef,
    focusOnMount: addingLink ? 'firstElement' : false,
    onClose: stopAddingLink,
    position: "bottom center"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["__experimentalLinkControl"], {
=======
      speak(Object(external_wp_i18n_["__"])('Warning: the link has been inserted but may have errors. Please test it.'), 'assertive');
    } else if (isActive) {
      speak(Object(external_wp_i18n_["__"])('Link edited.'), 'assertive');
    } else {
      speak(Object(external_wp_i18n_["__"])('Link inserted.'), 'assertive');
    }
  }

  const anchorRef = Object(external_wp_richText_["useAnchorRef"])({
    ref: contentRef,
    value,
    settings: link_link
  }); // The focusOnMount prop shouldn't evolve during render of a Popover
  // otherwise it causes a render of the content.

  const focusOnMount = Object(external_wp_element_["useRef"])(addingLink ? 'firstElement' : false);
  return Object(external_wp_element_["createElement"])(external_wp_components_["Popover"], {
    anchorRef: anchorRef,
    focusOnMount: focusOnMount.current,
    onClose: stopAddingLink,
    position: "bottom center"
  }, Object(external_wp_element_["createElement"])(external_wp_blockEditor_["__experimentalLinkControl"], {
>>>>>>> master
    value: linkValue,
    onChange: onChangeLink,
    forceIsEditingLink: addingLink
  }));
}

<<<<<<< HEAD
/* harmony default export */ var inline = (Object(external_this_wp_components_["withSpokenMessages"])(InlineLinkUI));
=======
/* harmony default export */ var inline = (Object(external_wp_components_["withSpokenMessages"])(InlineLinkUI));
>>>>>>> master

// CONCATENATED MODULE: ./node_modules/@wordpress/format-library/build-module/link/index.js


<<<<<<< HEAD






=======
>>>>>>> master
/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */


<<<<<<< HEAD
var link_name = 'core/link';

var link_title = Object(external_this_wp_i18n_["__"])('Link');

var link_link = {
=======
const link_name = 'core/link';

const link_title = Object(external_wp_i18n_["__"])('Link');

function link_Edit({
  isActive,
  activeAttributes,
  value,
  onChange,
  onFocus,
  contentRef
}) {
  const [addingLink, setAddingLink] = Object(external_wp_element_["useState"])(false);

  function addLink() {
    const text = Object(external_wp_richText_["getTextContent"])(Object(external_wp_richText_["slice"])(value));

    if (text && Object(external_wp_url_["isURL"])(text)) {
      onChange(Object(external_wp_richText_["applyFormat"])(value, {
        type: link_name,
        attributes: {
          url: text
        }
      }));
    } else if (text && Object(external_wp_url_["isEmail"])(text)) {
      onChange(Object(external_wp_richText_["applyFormat"])(value, {
        type: link_name,
        attributes: {
          url: `mailto:${text}`
        }
      }));
    } else {
      setAddingLink(true);
    }
  }

  function stopAddingLink() {
    setAddingLink(false);
    onFocus();
  }

  function onRemoveFormat() {
    onChange(Object(external_wp_richText_["removeFormat"])(value, link_name));
    Object(external_wp_a11y_["speak"])(Object(external_wp_i18n_["__"])('Link removed.'), 'assertive');
  }

  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wp_blockEditor_["RichTextShortcut"], {
    type: "primary",
    character: "k",
    onUse: addLink
  }), Object(external_wp_element_["createElement"])(external_wp_blockEditor_["RichTextShortcut"], {
    type: "primaryShift",
    character: "k",
    onUse: onRemoveFormat
  }), isActive && Object(external_wp_element_["createElement"])(external_wp_blockEditor_["RichTextToolbarButton"], {
    name: "link",
    icon: link_off["a" /* default */],
    title: Object(external_wp_i18n_["__"])('Unlink'),
    onClick: onRemoveFormat,
    isActive: isActive,
    shortcutType: "primaryShift",
    shortcutCharacter: "k"
  }), !isActive && Object(external_wp_element_["createElement"])(external_wp_blockEditor_["RichTextToolbarButton"], {
    name: "link",
    icon: library_link["a" /* default */],
    title: link_title,
    onClick: addLink,
    isActive: isActive,
    shortcutType: "primary",
    shortcutCharacter: "k"
  }), (addingLink || isActive) && Object(external_wp_element_["createElement"])(inline, {
    addingLink: addingLink,
    stopAddingLink: stopAddingLink,
    isActive: isActive,
    activeAttributes: activeAttributes,
    value: value,
    onChange: onChange,
    contentRef: contentRef
  }));
}

const link_link = {
>>>>>>> master
  name: link_name,
  title: link_title,
  tagName: 'a',
  className: null,
  attributes: {
    url: 'href',
<<<<<<< HEAD
    target: 'target'
  },
  __unstablePasteRule: function __unstablePasteRule(value, _ref) {
    var html = _ref.html,
        plainText = _ref.plainText;

    if (Object(external_this_wp_richText_["isCollapsed"])(value)) {
      return value;
    }

    var pastedText = (html || plainText).replace(/<[^>]+>/g, '').trim(); // A URL was pasted, turn the selection into a link

    if (!Object(external_this_wp_url_["isURL"])(pastedText)) {
=======
    type: 'data-type',
    id: 'data-id',
    target: 'target'
  },

  __unstablePasteRule(value, {
    html,
    plainText
  }) {
    if (Object(external_wp_richText_["isCollapsed"])(value)) {
      return value;
    }

    const pastedText = (html || plainText).replace(/<[^>]+>/g, '').trim(); // A URL was pasted, turn the selection into a link

    if (!Object(external_wp_url_["isURL"])(pastedText)) {
>>>>>>> master
      return value;
    } // Allows us to ask for this information when we get a report.


    window.console.log('Created link:\n\n', pastedText);
<<<<<<< HEAD
    return Object(external_this_wp_richText_["applyFormat"])(value, {
      type: link_name,
      attributes: {
        url: Object(external_this_wp_htmlEntities_["decodeEntities"])(pastedText)
      }
    });
  },
  edit: Object(external_this_wp_components_["withSpokenMessages"])(
  /*#__PURE__*/
  function (_Component) {
    Object(inherits["a" /* default */])(LinkEdit, _Component);

    function LinkEdit() {
      var _this;

      Object(classCallCheck["a" /* default */])(this, LinkEdit);

      _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(LinkEdit).apply(this, arguments));
      _this.addLink = _this.addLink.bind(Object(assertThisInitialized["a" /* default */])(_this));
      _this.stopAddingLink = _this.stopAddingLink.bind(Object(assertThisInitialized["a" /* default */])(_this));
      _this.onRemoveFormat = _this.onRemoveFormat.bind(Object(assertThisInitialized["a" /* default */])(_this));
      _this.state = {
        addingLink: false
      };
      return _this;
    }

    Object(createClass["a" /* default */])(LinkEdit, [{
      key: "addLink",
      value: function addLink() {
        var _this$props = this.props,
            value = _this$props.value,
            onChange = _this$props.onChange;
        var text = Object(external_this_wp_richText_["getTextContent"])(Object(external_this_wp_richText_["slice"])(value));

        if (text && Object(external_this_wp_url_["isURL"])(text)) {
          onChange(Object(external_this_wp_richText_["applyFormat"])(value, {
            type: link_name,
            attributes: {
              url: text
            }
          }));
        } else if (text && Object(external_this_wp_url_["isEmail"])(text)) {
          onChange(Object(external_this_wp_richText_["applyFormat"])(value, {
            type: link_name,
            attributes: {
              url: "mailto:".concat(text)
            }
          }));
        } else {
          this.setState({
            addingLink: true
          });
        }
      }
    }, {
      key: "stopAddingLink",
      value: function stopAddingLink() {
        this.setState({
          addingLink: false
        });
        this.props.onFocus();
      }
    }, {
      key: "onRemoveFormat",
      value: function onRemoveFormat() {
        var _this$props2 = this.props,
            value = _this$props2.value,
            onChange = _this$props2.onChange,
            speak = _this$props2.speak;
        onChange(Object(external_this_wp_richText_["removeFormat"])(value, link_name));
        speak(Object(external_this_wp_i18n_["__"])('Link removed.'), 'assertive');
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props3 = this.props,
            isActive = _this$props3.isActive,
            activeAttributes = _this$props3.activeAttributes,
            value = _this$props3.value,
            onChange = _this$props3.onChange;
        return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichTextShortcut"], {
          type: "primary",
          character: "k",
          onUse: this.addLink
        }), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichTextShortcut"], {
          type: "primaryShift",
          character: "k",
          onUse: this.onRemoveFormat
        }), isActive && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichTextToolbarButton"], {
          name: "link",
          icon: link_off,
          title: Object(external_this_wp_i18n_["__"])('Unlink'),
          onClick: this.onRemoveFormat,
          isActive: isActive,
          shortcutType: "primaryShift",
          shortcutCharacter: "k"
        }), !isActive && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichTextToolbarButton"], {
          name: "link",
          icon: library_link["a" /* default */],
          title: link_title,
          onClick: this.addLink,
          isActive: isActive,
          shortcutType: "primary",
          shortcutCharacter: "k"
        }), (this.state.addingLink || isActive) && Object(external_this_wp_element_["createElement"])(inline, {
          addingLink: this.state.addingLink,
          stopAddingLink: this.stopAddingLink,
          isActive: isActive,
          activeAttributes: activeAttributes,
          value: value,
          onChange: onChange
        }));
      }
    }]);

    return LinkEdit;
  }(external_this_wp_element_["Component"]))
};

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/format-strikethrough.js


/**
 * WordPress dependencies
 */

var formatStrikethrough = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M15.82 12.25c.26 0 .5-.02.74-.07.23-.05.48-.12.73-.2v.84c-.46.17-.99.26-1.58.26-.88 0-1.54-.26-2.01-.79-.39-.44-.62-1.04-.68-1.79h-.94c.12.21.18.48.18.79 0 .54-.18.95-.55 1.26-.38.3-.9.45-1.56.45H8v-2.5H6.59l.93 2.5H6.49l-.59-1.67H3.62L3.04 13H2l.93-2.5H2v-1h1.31l.93-2.49H5.3l.92 2.49H8V7h1.77c1 0 1.41.17 1.77.41.37.24.55.62.55 1.13 0 .35-.09.64-.27.87l-.08.09h1.29c.05-.4.15-.77.31-1.1.23-.46.55-.82.98-1.06.43-.25.93-.37 1.51-.37.61 0 1.17.12 1.69.38l-.35.81c-.2-.1-.42-.18-.64-.25s-.46-.11-.71-.11c-.55 0-.99.2-1.31.59-.23.29-.38.66-.44 1.11H17v1h-2.95c.06.5.2.9.44 1.19.3.37.75.56 1.33.56zM4.44 8.96l-.18.54H5.3l-.22-.61c-.04-.11-.09-.28-.17-.51-.07-.24-.12-.41-.14-.51-.08.33-.18.69-.33 1.09zm4.53-1.09V9.5h1.19c.28-.02.49-.09.64-.18.19-.13.28-.35.28-.66 0-.28-.1-.48-.3-.61-.2-.12-.53-.18-.97-.18h-.84zm-3.33 2.64v-.01H3.91v.01h1.73zm5.28.01l-.03-.02H8.97v1.68h1.04c.4 0 .71-.08.92-.23.21-.16.31-.4.31-.74 0-.31-.11-.54-.32-.69z"
}));
/* harmony default export */ var format_strikethrough = (formatStrikethrough);
=======
    return Object(external_wp_richText_["applyFormat"])(value, {
      type: link_name,
      attributes: {
        url: Object(external_wp_htmlEntities_["decodeEntities"])(pastedText)
      }
    });
  },

  edit: link_Edit
};

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/format-strikethrough.js
var format_strikethrough = __webpack_require__("Crq9");
>>>>>>> master

// CONCATENATED MODULE: ./node_modules/@wordpress/format-library/build-module/strikethrough/index.js


/**
 * WordPress dependencies
 */




<<<<<<< HEAD
var strikethrough_name = 'core/strikethrough';

var strikethrough_title = Object(external_this_wp_i18n_["__"])('Strikethrough');

var strikethrough = {
=======
const strikethrough_name = 'core/strikethrough';

const strikethrough_title = Object(external_wp_i18n_["__"])('Strikethrough');

const strikethrough = {
>>>>>>> master
  name: strikethrough_name,
  title: strikethrough_title,
  tagName: 's',
  className: null,
<<<<<<< HEAD
  edit: function edit(_ref) {
    var isActive = _ref.isActive,
        value = _ref.value,
        onChange = _ref.onChange,
        onFocus = _ref.onFocus;

    function onClick() {
      onChange(Object(external_this_wp_richText_["toggleFormat"])(value, {
=======

  edit({
    isActive,
    value,
    onChange,
    onFocus
  }) {
    function onClick() {
      onChange(Object(external_wp_richText_["toggleFormat"])(value, {
>>>>>>> master
        type: strikethrough_name
      }));
      onFocus();
    }

<<<<<<< HEAD
    return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichTextToolbarButton"], {
      icon: format_strikethrough,
=======
    return Object(external_wp_element_["createElement"])(external_wp_blockEditor_["RichTextToolbarButton"], {
      icon: format_strikethrough["a" /* default */],
>>>>>>> master
      title: strikethrough_title,
      onClick: onClick,
      isActive: isActive
    });
  }
<<<<<<< HEAD
=======

>>>>>>> master
};

// CONCATENATED MODULE: ./node_modules/@wordpress/format-library/build-module/underline/index.js


/**
 * WordPress dependencies
 */



<<<<<<< HEAD
var underline_name = 'core/underline';
var underline = {
  name: underline_name,
  title: Object(external_this_wp_i18n_["__"])('Underline'),
=======
const underline_name = 'core/underline';
const underline = {
  name: underline_name,
  title: Object(external_wp_i18n_["__"])('Underline'),
>>>>>>> master
  tagName: 'span',
  className: null,
  attributes: {
    style: 'style'
  },
<<<<<<< HEAD
  edit: function edit(_ref) {
    var value = _ref.value,
        onChange = _ref.onChange;

    var onToggle = function onToggle() {
      onChange(Object(external_this_wp_richText_["toggleFormat"])(value, {
=======

  edit({
    value,
    onChange
  }) {
    const onToggle = () => {
      onChange(Object(external_wp_richText_["toggleFormat"])(value, {
>>>>>>> master
        type: underline_name,
        attributes: {
          style: 'text-decoration: underline;'
        }
      }));
    };

<<<<<<< HEAD
    return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichTextShortcut"], {
      type: "primary",
      character: "u",
      onUse: onToggle
    }), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["__unstableRichTextInputEvent"], {
=======
    return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wp_blockEditor_["RichTextShortcut"], {
      type: "primary",
      character: "u",
      onUse: onToggle
    }), Object(external_wp_element_["createElement"])(external_wp_blockEditor_["__unstableRichTextInputEvent"], {
>>>>>>> master
      inputType: "formatUnderline",
      onInput: onToggle
    }));
  }
<<<<<<< HEAD
};

// EXTERNAL MODULE: external {"this":["wp","data"]}
var external_this_wp_data_ = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(12);

// EXTERNAL MODULE: external {"this":["wp","dom"]}
var external_this_wp_dom_ = __webpack_require__(28);
=======

};

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/icon/index.js
var icon = __webpack_require__("iClF");

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/text-color.js
var text_color = __webpack_require__("uGfJ");

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__("1ZqX");
>>>>>>> master

// CONCATENATED MODULE: ./node_modules/@wordpress/format-library/build-module/text-color/inline.js


<<<<<<< HEAD


=======
>>>>>>> master
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





<<<<<<< HEAD


function getActiveColor(formatName, formatValue, colors) {
  var activeColorFormat = Object(external_this_wp_richText_["getActiveFormat"])(formatValue, formatName);
=======
/**
 * Internal dependencies
 */


function getActiveColor(formatName, formatValue, colors) {
  const activeColorFormat = Object(external_wp_richText_["getActiveFormat"])(formatValue, formatName);
>>>>>>> master

  if (!activeColorFormat) {
    return;
  }

<<<<<<< HEAD
  var styleColor = activeColorFormat.attributes.style;

  if (styleColor) {
    return styleColor.replace(new RegExp("^color:\\s*"), '');
  }

  var currentClass = activeColorFormat.attributes.class;

  if (currentClass) {
    var colorSlug = currentClass.replace(/.*has-(.*?)-color.*/, '$1');
    return Object(external_this_wp_blockEditor_["getColorObjectByAttributeValues"])(colors, colorSlug).color;
  }
}

var inline_ColorPopoverAtLink = function ColorPopoverAtLink(_ref) {
  var addingColor = _ref.addingColor,
      props = Object(objectWithoutProperties["a" /* default */])(_ref, ["addingColor"]);

  // There is no way to open a text formatter popover when another one is mounted.
  // The first popover will always be dismounted when a click outside happens, so we can store the
  // anchor Rect during the lifetime of the component.
  var anchorRect = Object(external_this_wp_element_["useMemo"])(function () {
    var selection = window.getSelection();
    var range = selection.rangeCount > 0 ? selection.getRangeAt(0) : null;

    if (!range) {
      return;
    }

    if (addingColor) {
      return Object(external_this_wp_dom_["getRectangleFromRange"])(range);
    }

    var element = range.startContainer; // If the caret is right before the element, select the next element.

    element = element.nextElementSibling || element;

    while (element.nodeType !== window.Node.ELEMENT_NODE) {
      element = element.parentNode;
    }

    var closest = element.closest('span');

    if (closest) {
      return closest.getBoundingClientRect();
    }
  }, []);

  if (!anchorRect) {
    return null;
  }

  return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["URLPopover"], Object(esm_extends["a" /* default */])({
    anchorRect: anchorRect
  }, props));
};

var inline_ColorPicker = function ColorPicker(_ref2) {
  var name = _ref2.name,
      value = _ref2.value,
      onChange = _ref2.onChange;
  var colors = Object(external_this_wp_data_["useSelect"])(function (select) {
    var _select = select('core/block-editor'),
        getSettings = _select.getSettings;

    return Object(external_this_lodash_["get"])(getSettings(), ['colors'], []);
  });
  var onColorChange = Object(external_this_wp_element_["useCallback"])(function (color) {
    if (color) {
      var colorObject = Object(external_this_wp_blockEditor_["getColorObjectByColorValue"])(colors, color);
      onChange(Object(external_this_wp_richText_["applyFormat"])(value, {
        type: name,
        attributes: colorObject ? {
          class: Object(external_this_wp_blockEditor_["getColorClassName"])('color', colorObject.slug)
        } : {
          style: "color:".concat(color)
        }
      }));
    } else {
      onChange(Object(external_this_wp_richText_["removeFormat"])(value, name));
    }
  }, [colors, onChange]);
  var activeColor = Object(external_this_wp_element_["useMemo"])(function () {
    return getActiveColor(name, value, colors);
  }, [name, value, colors]);
  return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["ColorPalette"], {
=======
  const styleColor = activeColorFormat.attributes.style;

  if (styleColor) {
    return styleColor.replace(new RegExp(`^color:\\s*`), '');
  }

  const currentClass = activeColorFormat.attributes.class;

  if (currentClass) {
    const colorSlug = currentClass.replace(/.*has-([^\s]*)-color.*/, '$1');
    return Object(external_wp_blockEditor_["getColorObjectByAttributeValues"])(colors, colorSlug).color;
  }
}

const ColorPicker = ({
  name,
  value,
  onChange
}) => {
  const colors = Object(external_wp_data_["useSelect"])(select => {
    const {
      getSettings
    } = select(external_wp_blockEditor_["store"]);
    return Object(external_lodash_["get"])(getSettings(), ['colors'], []);
  });
  const onColorChange = Object(external_wp_element_["useCallback"])(color => {
    if (color) {
      const colorObject = Object(external_wp_blockEditor_["getColorObjectByColorValue"])(colors, color);
      onChange(Object(external_wp_richText_["applyFormat"])(value, {
        type: name,
        attributes: colorObject ? {
          class: Object(external_wp_blockEditor_["getColorClassName"])('color', colorObject.slug)
        } : {
          style: `color:${color}`
        }
      }));
    } else {
      onChange(Object(external_wp_richText_["removeFormat"])(value, name));
    }
  }, [colors, onChange]);
  const activeColor = Object(external_wp_element_["useMemo"])(() => getActiveColor(name, value, colors), [name, value, colors]);
  return Object(external_wp_element_["createElement"])(external_wp_blockEditor_["ColorPalette"], {
>>>>>>> master
    value: activeColor,
    onChange: onColorChange
  });
};

<<<<<<< HEAD
var inline_InlineColorUI = function InlineColorUI(_ref3) {
  var name = _ref3.name,
      value = _ref3.value,
      onChange = _ref3.onChange,
      onClose = _ref3.onClose,
      isActive = _ref3.isActive,
      addingColor = _ref3.addingColor;
  return Object(external_this_wp_element_["createElement"])(inline_ColorPopoverAtLink, {
    value: value,
    isActive: isActive,
    addingColor: addingColor,
    onClose: onClose,
    className: "components-inline-color-popover"
  }, Object(external_this_wp_element_["createElement"])(inline_ColorPicker, {
=======
function InlineColorUI({
  name,
  value,
  onChange,
  onClose,
  contentRef
}) {
  const anchorRef = Object(external_wp_richText_["useAnchorRef"])({
    ref: contentRef,
    value,
    settings: textColor
  });
  return Object(external_wp_element_["createElement"])(external_wp_blockEditor_["URLPopover"], {
    value: value,
    onClose: onClose,
    className: "components-inline-color-popover",
    anchorRef: anchorRef
  }, Object(external_wp_element_["createElement"])(ColorPicker, {
>>>>>>> master
    name: name,
    value: value,
    onChange: onChange
  }));
<<<<<<< HEAD
};

/* harmony default export */ var text_color_inline = (Object(external_this_wp_components_["withSpokenMessages"])(inline_InlineColorUI));
=======
}
>>>>>>> master

// CONCATENATED MODULE: ./node_modules/@wordpress/format-library/build-module/text-color/index.js


<<<<<<< HEAD

=======
>>>>>>> master
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






<<<<<<< HEAD

=======
>>>>>>> master
/**
 * Internal dependencies
 */


<<<<<<< HEAD
var text_color_name = 'core/text-color';

var text_color_title = Object(external_this_wp_i18n_["__"])('Text Color');

var EMPTY_ARRAY = [];

function TextColorEdit(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange,
      isActive = _ref.isActive,
      activeAttributes = _ref.activeAttributes;

  var _useSelect = Object(external_this_wp_data_["useSelect"])(function (select) {
    var blockEditorSelect = select('core/block-editor');
    var settings;

    if (blockEditorSelect && blockEditorSelect.getSettings) {
      settings = blockEditorSelect.getSettings();
    } else {
      settings = {};
    }

    return {
      colors: Object(external_this_lodash_["get"])(settings, ['colors'], EMPTY_ARRAY),
      disableCustomColors: settings.disableCustomColors
    };
  }),
      colors = _useSelect.colors,
      disableCustomColors = _useSelect.disableCustomColors;

  var _useState = Object(external_this_wp_element_["useState"])(false),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      isAddingColor = _useState2[0],
      setIsAddingColor = _useState2[1];

  var enableIsAddingColor = Object(external_this_wp_element_["useCallback"])(function () {
    return setIsAddingColor(true);
  }, [setIsAddingColor]);
  var disableIsAddingColor = Object(external_this_wp_element_["useCallback"])(function () {
    return setIsAddingColor(false);
  }, [setIsAddingColor]);
  var colorIndicatorStyle = Object(external_this_wp_element_["useMemo"])(function () {
    var activeColor = getActiveColor(text_color_name, value, colors);
=======
const text_color_name = 'core/text-color';

const text_color_title = Object(external_wp_i18n_["__"])('Text color');

const EMPTY_ARRAY = [];

function TextColorEdit({
  value,
  onChange,
  isActive,
  activeAttributes,
  contentRef
}) {
  const allowCustomControl = Object(external_wp_blockEditor_["useSetting"])('color.custom');
  const colors = Object(external_wp_blockEditor_["useSetting"])('color.palette') || EMPTY_ARRAY;
  const [isAddingColor, setIsAddingColor] = Object(external_wp_element_["useState"])(false);
  const enableIsAddingColor = Object(external_wp_element_["useCallback"])(() => setIsAddingColor(true), [setIsAddingColor]);
  const disableIsAddingColor = Object(external_wp_element_["useCallback"])(() => setIsAddingColor(false), [setIsAddingColor]);
  const colorIndicatorStyle = Object(external_wp_element_["useMemo"])(() => {
    const activeColor = getActiveColor(text_color_name, value, colors);
>>>>>>> master

    if (!activeColor) {
      return undefined;
    }

    return {
      backgroundColor: activeColor
    };
  }, [value, colors]);
<<<<<<< HEAD
  var hasColorsToChoose = !Object(external_this_lodash_["isEmpty"])(colors) || disableCustomColors !== true;
=======
  const hasColorsToChoose = !Object(external_lodash_["isEmpty"])(colors) || !allowCustomControl;
>>>>>>> master

  if (!hasColorsToChoose && !isActive) {
    return null;
  }

<<<<<<< HEAD
  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichTextToolbarButton"], {
    key: isActive ? 'text-color' : 'text-color-not-active',
    className: "format-library-text-color-button",
    name: isActive ? 'text-color' : undefined,
    icon: Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Dashicon"], {
      icon: "editor-textcolor"
    }), isActive && Object(external_this_wp_element_["createElement"])("span", {
=======
  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wp_blockEditor_["RichTextToolbarButton"], {
    key: isActive ? 'text-color' : 'text-color-not-active',
    className: "format-library-text-color-button",
    name: isActive ? 'text-color' : undefined,
    icon: Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(icon["a" /* default */], {
      icon: text_color["a" /* default */]
    }), isActive && Object(external_wp_element_["createElement"])("span", {
>>>>>>> master
      className: "format-library-text-color-button__indicator",
      style: colorIndicatorStyle
    })),
    title: text_color_title // If has no colors to choose but a color is active remove the color onClick
    ,
<<<<<<< HEAD
    onClick: hasColorsToChoose ? enableIsAddingColor : function () {
      return onChange(Object(external_this_wp_richText_["removeFormat"])(value, text_color_name));
    }
  }), isAddingColor && Object(external_this_wp_element_["createElement"])(text_color_inline, {
    name: text_color_name,
    addingColor: isAddingColor,
    onClose: disableIsAddingColor,
    isActive: isActive,
    activeAttributes: activeAttributes,
    value: value,
    onChange: onChange
  }));
}

var textColor = {
=======
    onClick: hasColorsToChoose ? enableIsAddingColor : () => onChange(Object(external_wp_richText_["removeFormat"])(value, text_color_name))
  }), isAddingColor && Object(external_wp_element_["createElement"])(InlineColorUI, {
    name: text_color_name,
    onClose: disableIsAddingColor,
    activeAttributes: activeAttributes,
    value: value,
    onChange: onChange,
    contentRef: contentRef
  }));
}

const textColor = {
>>>>>>> master
  name: text_color_name,
  title: text_color_title,
  tagName: 'span',
  className: 'has-inline-color',
  attributes: {
    style: 'style',
    class: 'class'
  },
  edit: TextColorEdit
};

<<<<<<< HEAD
=======
// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/subscript.js


/**
 * WordPress dependencies
 */

const subscript = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M16.9 18.3l.8-1.2c.4-.6.7-1.2.9-1.6.2-.4.3-.8.3-1.2 0-.3-.1-.7-.2-1-.1-.3-.4-.5-.6-.7-.3-.2-.6-.3-1-.3s-.8.1-1.1.2c-.3.1-.7.3-1 .6l.2 1.3c.3-.3.5-.5.8-.6s.6-.2.9-.2c.3 0 .5.1.7.2.2.2.2.4.2.7 0 .3-.1.5-.2.8-.1.3-.4.7-.8 1.3L15 19.4h4.3v-1.2h-2.4zM14.1 7.2h-2L9.5 11 6.9 7.2h-2l3.6 5.3L4.7 18h2l2.7-4 2.7 4h2l-3.8-5.5 3.8-5.3z"
}));
/* harmony default export */ var library_subscript = (subscript);

// CONCATENATED MODULE: ./node_modules/@wordpress/format-library/build-module/subscript/index.js


/**
 * WordPress dependencies
 */




const subscript_name = 'core/subscript';

const subscript_title = Object(external_wp_i18n_["__"])('Subscript');

const subscript_subscript = {
  name: subscript_name,
  title: subscript_title,
  tagName: 'sub',
  className: null,

  edit({
    isActive,
    value,
    onChange,
    onFocus
  }) {
    function onToggle() {
      onChange(Object(external_wp_richText_["toggleFormat"])(value, {
        type: subscript_name
      }));
    }

    function onClick() {
      onToggle();
      onFocus();
    }

    return Object(external_wp_element_["createElement"])(external_wp_blockEditor_["RichTextToolbarButton"], {
      icon: library_subscript,
      title: subscript_title,
      onClick: onClick,
      isActive: isActive
    });
  }

};

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/superscript.js


/**
 * WordPress dependencies
 */

const superscript = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M16.9 10.3l.8-1.3c.4-.6.7-1.2.9-1.6.2-.4.3-.8.3-1.2 0-.3-.1-.7-.2-1-.2-.2-.4-.4-.7-.6-.3-.2-.6-.3-1-.3s-.8.1-1.1.2c-.3.1-.7.3-1 .6l.1 1.3c.3-.3.5-.5.8-.6s.6-.2.9-.2c.3 0 .5.1.7.2.2.2.2.4.2.7 0 .3-.1.5-.2.8-.1.3-.4.7-.8 1.3l-1.8 2.8h4.3v-1.2h-2.2zm-2.8-3.1h-2L9.5 11 6.9 7.2h-2l3.6 5.3L4.7 18h2l2.7-4 2.7 4h2l-3.8-5.5 3.8-5.3z"
}));
/* harmony default export */ var library_superscript = (superscript);

// CONCATENATED MODULE: ./node_modules/@wordpress/format-library/build-module/superscript/index.js


/**
 * WordPress dependencies
 */




const superscript_name = 'core/superscript';

const superscript_title = Object(external_wp_i18n_["__"])('Superscript');

const superscript_superscript = {
  name: superscript_name,
  title: superscript_title,
  tagName: 'sup',
  className: null,

  edit({
    isActive,
    value,
    onChange,
    onFocus
  }) {
    function onToggle() {
      onChange(Object(external_wp_richText_["toggleFormat"])(value, {
        type: superscript_name
      }));
    }

    function onClick() {
      onToggle();
      onFocus();
    }

    return Object(external_wp_element_["createElement"])(external_wp_blockEditor_["RichTextToolbarButton"], {
      icon: library_superscript,
      title: superscript_title,
      onClick: onClick,
      isActive: isActive
    });
  }

};

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/button.js
var library_button = __webpack_require__("oMoS");

// CONCATENATED MODULE: ./node_modules/@wordpress/format-library/build-module/keyboard/index.js


/**
 * WordPress dependencies
 */




const keyboard_name = 'core/keyboard';

const keyboard_title = Object(external_wp_i18n_["__"])('Keyboard input');

const keyboard = {
  name: keyboard_name,
  title: keyboard_title,
  tagName: 'kbd',
  className: null,

  edit({
    isActive,
    value,
    onChange,
    onFocus
  }) {
    function onToggle() {
      onChange(Object(external_wp_richText_["toggleFormat"])(value, {
        type: keyboard_name
      }));
    }

    function onClick() {
      onToggle();
      onFocus();
    }

    return Object(external_wp_element_["createElement"])(external_wp_blockEditor_["RichTextToolbarButton"], {
      icon: library_button["a" /* default */],
      title: keyboard_title,
      onClick: onClick,
      isActive: isActive
    });
  }

};

>>>>>>> master
// CONCATENATED MODULE: ./node_modules/@wordpress/format-library/build-module/default-formats.js
/**
 * Internal dependencies
 */








<<<<<<< HEAD
/* harmony default export */ var default_formats = ([bold, code_code, image_image, italic, link_link, strikethrough, underline, textColor]);

// CONCATENATED MODULE: ./node_modules/@wordpress/format-library/build-module/index.js


=======



/* harmony default export */ var default_formats = ([bold, code_code, image_image, italic, link_link, strikethrough, underline, textColor, subscript_subscript, superscript_superscript, keyboard]);

// CONCATENATED MODULE: ./node_modules/@wordpress/format-library/build-module/index.js
>>>>>>> master
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


<<<<<<< HEAD
default_formats.forEach(function (_ref) {
  var name = _ref.name,
      settings = Object(objectWithoutProperties["a" /* default */])(_ref, ["name"]);

  return Object(external_this_wp_richText_["registerFormatType"])(name, settings);
});
=======
default_formats.forEach(({
  name,
  ...settings
}) => Object(external_wp_richText_["registerFormatType"])(name, settings));
>>>>>>> master


/***/ }),

<<<<<<< HEAD
/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ 58:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["htmlEntities"]; }());

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blockEditor"]; }());

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["primitives"]; }());
=======
/***/ "tI+e":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "uGfJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Tqx9");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const textColor = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M12.9 6h-2l-4 11h1.9l1.1-3h4.2l1.1 3h1.9L12.9 6zm-2.5 6.5l1.5-4.9 1.7 4.9h-3.2z"
}));
/* harmony default export */ __webpack_exports__["a"] = (textColor);

>>>>>>> master

/***/ })

/******/ });