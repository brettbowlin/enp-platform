this["wp"] = this["wp"] || {}; this["wp"]["element"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 437);
=======
/******/ 	return __webpack_require__(__webpack_require__.s = "o/Ny");
>>>>>>> master
/******/ })
/************************************************************************/
/******/ ({

<<<<<<< HEAD
/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
var arrayLikeToArray = __webpack_require__(25);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(arrayLikeToArray["a" /* default */])(arr);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
var iterableToArray = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var unsupportedIterableToArray = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _toConsumableArray; });




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || Object(iterableToArray["a" /* default */])(arr) || Object(unsupportedIterableToArray["a" /* default */])(arr) || _nonIterableSpread();
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

/***/ 21:
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

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

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
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

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(18);

// EXTERNAL MODULE: external {"this":"React"}
var external_this_React_ = __webpack_require__(21);

// CONCATENATED MODULE: ./node_modules/@wordpress/element/build-module/create-interpolate-element.js




/**
 * External dependencies
 */

var indoc, offset, output, stack;
=======
/***/ "Vx3V":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["escapeHtml"]; }());

/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

(function() { module.exports = window["lodash"]; }());

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

(function() { module.exports = window["React"]; }());

/***/ }),

/***/ "faye":
/***/ (function(module, exports) {

(function() { module.exports = window["ReactDOM"]; }());

/***/ }),

/***/ "o/Ny":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "createInterpolateElement", function() { return /* reexport */ create_interpolate_element; });
__webpack_require__.d(__webpack_exports__, "Children", function() { return /* reexport */ external_React_["Children"]; });
__webpack_require__.d(__webpack_exports__, "cloneElement", function() { return /* reexport */ external_React_["cloneElement"]; });
__webpack_require__.d(__webpack_exports__, "Component", function() { return /* reexport */ external_React_["Component"]; });
__webpack_require__.d(__webpack_exports__, "createContext", function() { return /* reexport */ external_React_["createContext"]; });
__webpack_require__.d(__webpack_exports__, "createElement", function() { return /* reexport */ external_React_["createElement"]; });
__webpack_require__.d(__webpack_exports__, "createRef", function() { return /* reexport */ external_React_["createRef"]; });
__webpack_require__.d(__webpack_exports__, "forwardRef", function() { return /* reexport */ external_React_["forwardRef"]; });
__webpack_require__.d(__webpack_exports__, "Fragment", function() { return /* reexport */ external_React_["Fragment"]; });
__webpack_require__.d(__webpack_exports__, "isValidElement", function() { return /* reexport */ external_React_["isValidElement"]; });
__webpack_require__.d(__webpack_exports__, "memo", function() { return /* reexport */ external_React_["memo"]; });
__webpack_require__.d(__webpack_exports__, "StrictMode", function() { return /* reexport */ external_React_["StrictMode"]; });
__webpack_require__.d(__webpack_exports__, "useCallback", function() { return /* reexport */ external_React_["useCallback"]; });
__webpack_require__.d(__webpack_exports__, "useContext", function() { return /* reexport */ external_React_["useContext"]; });
__webpack_require__.d(__webpack_exports__, "useDebugValue", function() { return /* reexport */ external_React_["useDebugValue"]; });
__webpack_require__.d(__webpack_exports__, "useEffect", function() { return /* reexport */ external_React_["useEffect"]; });
__webpack_require__.d(__webpack_exports__, "useImperativeHandle", function() { return /* reexport */ external_React_["useImperativeHandle"]; });
__webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return /* reexport */ external_React_["useLayoutEffect"]; });
__webpack_require__.d(__webpack_exports__, "useMemo", function() { return /* reexport */ external_React_["useMemo"]; });
__webpack_require__.d(__webpack_exports__, "useReducer", function() { return /* reexport */ external_React_["useReducer"]; });
__webpack_require__.d(__webpack_exports__, "useRef", function() { return /* reexport */ external_React_["useRef"]; });
__webpack_require__.d(__webpack_exports__, "useState", function() { return /* reexport */ external_React_["useState"]; });
__webpack_require__.d(__webpack_exports__, "lazy", function() { return /* reexport */ external_React_["lazy"]; });
__webpack_require__.d(__webpack_exports__, "Suspense", function() { return /* reexport */ external_React_["Suspense"]; });
__webpack_require__.d(__webpack_exports__, "concatChildren", function() { return /* reexport */ concatChildren; });
__webpack_require__.d(__webpack_exports__, "switchChildrenNodeName", function() { return /* reexport */ switchChildrenNodeName; });
__webpack_require__.d(__webpack_exports__, "createPortal", function() { return /* reexport */ external_ReactDOM_["createPortal"]; });
__webpack_require__.d(__webpack_exports__, "findDOMNode", function() { return /* reexport */ external_ReactDOM_["findDOMNode"]; });
__webpack_require__.d(__webpack_exports__, "render", function() { return /* reexport */ external_ReactDOM_["render"]; });
__webpack_require__.d(__webpack_exports__, "unmountComponentAtNode", function() { return /* reexport */ external_ReactDOM_["unmountComponentAtNode"]; });
__webpack_require__.d(__webpack_exports__, "isEmptyElement", function() { return /* reexport */ isEmptyElement; });
__webpack_require__.d(__webpack_exports__, "Platform", function() { return /* reexport */ platform; });
__webpack_require__.d(__webpack_exports__, "renderToString", function() { return /* reexport */ serialize; });
__webpack_require__.d(__webpack_exports__, "RawHTML", function() { return /* reexport */ RawHTML; });

// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__("cDcd");

// CONCATENATED MODULE: ./node_modules/@wordpress/element/build-module/create-interpolate-element.js
/**
 * Internal dependencies
 */

/** @typedef {import('./react').WPElement} WPElement */

let indoc, offset, output, stack;
>>>>>>> master
/**
 * Matches tags in the localized string
 *
 * This is used for extracting the tag pattern groups for parsing the localized
 * string and along with the map converting it to a react element.
 *
 * There are four references extracted using this tokenizer:
 *
 * match: Full match of the tag (i.e. <strong>, </strong>, <br/>)
 * isClosing: The closing slash, it it exists.
 * name: The name portion of the tag (strong, br) (if )
 * isSelfClosed: The slash on a self closing tag, if it exists.
 *
 * @type {RegExp}
 */

<<<<<<< HEAD
var tokenizer = /<(\/)?(\w+)\s*(\/)?>/g;
=======
const tokenizer = /<(\/)?(\w+)\s*(\/)?>/g;
/**
 * The stack frame tracking parse progress.
 *
 * @typedef Frame
 *
 * @property {WPElement} element            A parent element which may still have
 * @property {number}    tokenStart         Offset at which parent element first
 *                                          appears.
 * @property {number}    tokenLength        Length of string marking start of parent
 *                                          element.
 * @property {number}    [prevOffset]       Running offset at which parsing should
 *                                          continue.
 * @property {number}    [leadingTextStart] Offset at which last closing element
 *                                          finished, used for finding text between
 *                                          elements.
 * @property {WPElement[]} children         Children.
 */

>>>>>>> master
/**
 * Tracks recursive-descent parse state.
 *
 * This is a Stack frame holding parent elements until all children have been
 * parsed.
 *
 * @private
<<<<<<< HEAD
 * @param {WPElement} element          A parent element which may still have
 *                                     nested children not yet parsed.
 * @param {number}    tokenStart       Offset at which parent element first
 *                                     appears.
 * @param {number}    tokenLength      Length of string marking start of parent
 *                                     element.
 * @param {number}    prevOffset       Running offset at which parsing should
 *                                     continue.
 * @param {number}    leadingTextStart Offset at which last closing element
 *                                     finished, used for finding text between
 *                                     elements
=======
 * @param {WPElement} element            A parent element which may still have
 *                                       nested children not yet parsed.
 * @param {number}    tokenStart         Offset at which parent element first
 *                                       appears.
 * @param {number}    tokenLength        Length of string marking start of parent
 *                                       element.
 * @param {number}    [prevOffset]       Running offset at which parsing should
 *                                       continue.
 * @param {number}    [leadingTextStart] Offset at which last closing element
 *                                       finished, used for finding text between
 *                                       elements.
>>>>>>> master
 *
 * @return {Frame} The stack frame tracking parse progress.
 */

<<<<<<< HEAD
function Frame(element, tokenStart, tokenLength, prevOffset, leadingTextStart) {
  return {
    element: element,
    tokenStart: tokenStart,
    tokenLength: tokenLength,
    prevOffset: prevOffset,
    leadingTextStart: leadingTextStart,
=======
function createFrame(element, tokenStart, tokenLength, prevOffset, leadingTextStart) {
  return {
    element,
    tokenStart,
    tokenLength,
    prevOffset,
    leadingTextStart,
>>>>>>> master
    children: []
  };
}
/**
 * This function creates an interpolated element from a passed in string with
 * specific tags matching how the string should be converted to an element via
 * the conversion map value.
 *
 * @example
 * For example, for the given string:
 *
 * "This is a <span>string</span> with <a>a link</a> and a self-closing
 * <CustomComponentB/> tag"
 *
 * You would have something like this as the conversionMap value:
 *
 * ```js
 * {
 *     span: <span />,
 *     a: <a href={ 'https://github.com' } />,
 *     CustomComponentB: <CustomComponent />,
 * }
 * ```
 *
 * @param {string}  interpolatedString  The interpolation string to be parsed.
 * @param {Object}  conversionMap       The map used to convert the string to
 *                                      a react element.
 * @throws {TypeError}
 * @return {WPElement}  A wp element.
 */


<<<<<<< HEAD
var create_interpolate_element_createInterpolateElement = function createInterpolateElement(interpolatedString, conversionMap) {
=======
const createInterpolateElement = (interpolatedString, conversionMap) => {
>>>>>>> master
  indoc = interpolatedString;
  offset = 0;
  output = [];
  stack = [];
  tokenizer.lastIndex = 0;

<<<<<<< HEAD
  if (!create_interpolate_element_isValidConversionMap(conversionMap)) {
=======
  if (!isValidConversionMap(conversionMap)) {
>>>>>>> master
    throw new TypeError('The conversionMap provided is not valid. It must be an object with values that are WPElements');
  }

  do {// twiddle our thumbs
  } while (proceed(conversionMap));

<<<<<<< HEAD
  return external_this_React_["createElement"].apply(void 0, [external_this_React_["Fragment"], null].concat(Object(toConsumableArray["a" /* default */])(output)));
=======
  return Object(external_React_["createElement"])(external_React_["Fragment"], null, ...output);
>>>>>>> master
};
/**
 * Validate conversion map.
 *
 * A map is considered valid if it's an object and every value in the object
 * is a WPElement
 *
 * @private
 *
 * @param {Object} conversionMap  The map being validated.
 *
 * @return {boolean}  True means the map is valid.
 */


<<<<<<< HEAD
var create_interpolate_element_isValidConversionMap = function isValidConversionMap(conversionMap) {
  var isObject = Object(esm_typeof["a" /* default */])(conversionMap) === 'object';
  var values = isObject && Object.values(conversionMap);
  return isObject && values.length && values.every(function (element) {
    return Object(external_this_React_["isValidElement"])(element);
  });
=======
const isValidConversionMap = conversionMap => {
  const isObject = typeof conversionMap === 'object';
  const values = isObject && Object.values(conversionMap);
  return isObject && values.length && values.every(element => Object(external_React_["isValidElement"])(element));
>>>>>>> master
};
/**
 * This is the iterator over the matches in the string.
 *
 * @private
 *
 * @param {Object} conversionMap The conversion map for the string.
 *
 * @return {boolean} true for continuing to iterate, false for finished.
 */


function proceed(conversionMap) {
<<<<<<< HEAD
  var next = nextToken();

  var _next = Object(slicedToArray["a" /* default */])(next, 4),
      tokenType = _next[0],
      name = _next[1],
      startOffset = _next[2],
      tokenLength = _next[3];

  var stackDepth = stack.length;
  var leadingTextStart = startOffset > offset ? offset : null;
=======
  const next = nextToken();
  const [tokenType, name, startOffset, tokenLength] = next;
  const stackDepth = stack.length;
  const leadingTextStart = startOffset > offset ? offset : null;
>>>>>>> master

  if (!conversionMap[name]) {
    addText();
    return false;
  }

  switch (tokenType) {
    case 'no-more-tokens':
      if (stackDepth !== 0) {
<<<<<<< HEAD
        var _stack$pop = stack.pop(),
            stackLeadingText = _stack$pop.leadingTextStart,
            tokenStart = _stack$pop.tokenStart;

=======
        const {
          leadingTextStart: stackLeadingText,
          tokenStart
        } = stack.pop();
>>>>>>> master
        output.push(indoc.substr(stackLeadingText, tokenStart));
      }

      addText();
      return false;

    case 'self-closed':
      if (0 === stackDepth) {
        if (null !== leadingTextStart) {
          output.push(indoc.substr(leadingTextStart, startOffset - leadingTextStart));
        }

        output.push(conversionMap[name]);
        offset = startOffset + tokenLength;
        return true;
      } // otherwise we found an inner element


<<<<<<< HEAD
      addChild(new Frame(conversionMap[name], startOffset, tokenLength));
=======
      addChild(createFrame(conversionMap[name], startOffset, tokenLength));
>>>>>>> master
      offset = startOffset + tokenLength;
      return true;

    case 'opener':
<<<<<<< HEAD
      stack.push(new Frame(conversionMap[name], startOffset, tokenLength, startOffset + tokenLength, leadingTextStart));
=======
      stack.push(createFrame(conversionMap[name], startOffset, tokenLength, startOffset + tokenLength, leadingTextStart));
>>>>>>> master
      offset = startOffset + tokenLength;
      return true;

    case 'closer':
      // if we're not nesting then this is easy - close the block
      if (1 === stackDepth) {
        closeOuterElement(startOffset);
        offset = startOffset + tokenLength;
        return true;
      } // otherwise we're nested and we have to close out the current
      // block and add it as a innerBlock to the parent


<<<<<<< HEAD
      var stackTop = stack.pop();
      var text = indoc.substr(stackTop.prevOffset, startOffset - stackTop.prevOffset);
      stackTop.children.push(text);
      stackTop.prevOffset = startOffset + tokenLength;
      var frame = new Frame(stackTop.element, stackTop.tokenStart, stackTop.tokenLength, startOffset + tokenLength);
=======
      const stackTop = stack.pop();
      const text = indoc.substr(stackTop.prevOffset, startOffset - stackTop.prevOffset);
      stackTop.children.push(text);
      stackTop.prevOffset = startOffset + tokenLength;
      const frame = createFrame(stackTop.element, stackTop.tokenStart, stackTop.tokenLength, startOffset + tokenLength);
>>>>>>> master
      frame.children = stackTop.children;
      addChild(frame);
      offset = startOffset + tokenLength;
      return true;

    default:
      addText();
      return false;
  }
}
/**
 * Grabs the next token match in the string and returns it's details.
 *
 * @private
 *
 * @return {Array}  An array of details for the token matched.
 */


function nextToken() {
<<<<<<< HEAD
  var matches = tokenizer.exec(indoc); // we have no more tokens
=======
  const matches = tokenizer.exec(indoc); // we have no more tokens
>>>>>>> master

  if (null === matches) {
    return ['no-more-tokens'];
  }

<<<<<<< HEAD
  var startedAt = matches.index;

  var _matches = Object(slicedToArray["a" /* default */])(matches, 4),
      match = _matches[0],
      isClosing = _matches[1],
      name = _matches[2],
      isSelfClosed = _matches[3];

  var length = match.length;
=======
  const startedAt = matches.index;
  const [match, isClosing, name, isSelfClosed] = matches;
  const length = match.length;
>>>>>>> master

  if (isSelfClosed) {
    return ['self-closed', name, startedAt, length];
  }

  if (isClosing) {
    return ['closer', name, startedAt, length];
  }

  return ['opener', name, startedAt, length];
}
/**
 * Pushes text extracted from the indoc string to the output stack given the
 * current rawLength value and offset (if rawLength is provided ) or the
 * indoc.length and offset.
 *
 * @private
 */


function addText() {
<<<<<<< HEAD
  var length = indoc.length - offset;
=======
  const length = indoc.length - offset;
>>>>>>> master

  if (0 === length) {
    return;
  }

  output.push(indoc.substr(offset, length));
}
/**
 * Pushes a child element to the associated parent element's children for the
 * parent currently active in the stack.
 *
 * @private
 *
 * @param {Frame}    frame       The Frame containing the child element and it's
 *                               token information.
 */


function addChild(frame) {
<<<<<<< HEAD
  var element = frame.element,
      tokenStart = frame.tokenStart,
      tokenLength = frame.tokenLength,
      prevOffset = frame.prevOffset,
      children = frame.children;
  var parent = stack[stack.length - 1];
  var text = indoc.substr(parent.prevOffset, tokenStart - parent.prevOffset);
=======
  const {
    element,
    tokenStart,
    tokenLength,
    prevOffset,
    children
  } = frame;
  const parent = stack[stack.length - 1];
  const text = indoc.substr(parent.prevOffset, tokenStart - parent.prevOffset);
>>>>>>> master

  if (text) {
    parent.children.push(text);
  }

<<<<<<< HEAD
  parent.children.push(external_this_React_["cloneElement"].apply(void 0, [element, null].concat(Object(toConsumableArray["a" /* default */])(children))));
=======
  parent.children.push(Object(external_React_["cloneElement"])(element, null, ...children));
>>>>>>> master
  parent.prevOffset = prevOffset ? prevOffset : tokenStart + tokenLength;
}
/**
 * This is called for closing tags. It creates the element currently active in
 * the stack.
 *
 * @private
 *
 * @param {number} endOffset Offset at which the closing tag for the element
 *                           begins in the string. If this is greater than the
 *                           prevOffset attached to the element, then this
 *                           helps capture any remaining nested text nodes in
 *                           the element.
 */


function closeOuterElement(endOffset) {
<<<<<<< HEAD
  var _stack$pop2 = stack.pop(),
      element = _stack$pop2.element,
      leadingTextStart = _stack$pop2.leadingTextStart,
      prevOffset = _stack$pop2.prevOffset,
      tokenStart = _stack$pop2.tokenStart,
      children = _stack$pop2.children;

  var text = endOffset ? indoc.substr(prevOffset, endOffset - prevOffset) : indoc.substr(prevOffset);
=======
  const {
    element,
    leadingTextStart,
    prevOffset,
    tokenStart,
    children
  } = stack.pop();
  const text = endOffset ? indoc.substr(prevOffset, endOffset - prevOffset) : indoc.substr(prevOffset);
>>>>>>> master

  if (text) {
    children.push(text);
  }

  if (null !== leadingTextStart) {
    output.push(indoc.substr(leadingTextStart, tokenStart - leadingTextStart));
  }

<<<<<<< HEAD
  output.push(external_this_React_["cloneElement"].apply(void 0, [element, null].concat(Object(toConsumableArray["a" /* default */])(children))));
}

/* harmony default export */ var create_interpolate_element = (create_interpolate_element_createInterpolateElement);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(19);

// EXTERNAL MODULE: external {"this":"lodash"}
var external_this_lodash_ = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/@wordpress/element/build-module/react.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */
=======
  output.push(Object(external_React_["cloneElement"])(element, null, ...children));
}

/* harmony default export */ var create_interpolate_element = (createInterpolateElement);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");

// CONCATENATED MODULE: ./node_modules/@wordpress/element/build-module/react.js
/**
 * External dependencies
 */
// eslint-disable-next-line no-restricted-imports
>>>>>>> master


/**
 * Object containing a React element.
 *
 * @typedef {import('react').ReactElement} WPElement
 */

/**
 * Object containing a React component.
 *
<<<<<<< HEAD
 * @typedef {import('react').Component} WPComponent
=======
 * @typedef {import('react').ComponentType} WPComponent
>>>>>>> master
 */

/**
 * Object containing a React synthetic event.
 *
 * @typedef {import('react').SyntheticEvent} WPSyntheticEvent
 */

/**
 * Object that provides utilities for dealing with React children.
 */


/**
 * Creates a copy of an element with extended props.
 *
 * @param {WPElement} element Element
 * @param {?Object}   props   Props to apply to cloned element
 *
 * @return {WPElement} Cloned element.
 */


/**
 * A base class to create WordPress Components (Refs, state and lifecycle hooks)
 */


/**
 * Creates a context object containing two components: a provider and consumer.
 *
 * @param {Object} defaultValue A default data stored in the context.
 *
 * @return {Object} Context object.
 */


/**
 * Returns a new element of given type. Type can be either a string tag name or
 * another function which itself returns an element.
 *
 * @param {?(string|Function)} type     Tag name or element creator
 * @param {Object}             props    Element properties, either attribute
 *                                      set to apply to DOM node or values to
 *                                      pass through to element creator
 * @param {...WPElement}       children Descendant elements
 *
 * @return {WPElement} Element.
 */


/**
 * Returns an object tracking a reference to a rendered element via its
 * `current` property as either a DOMElement or Element, dependent upon the
 * type of element rendered with the ref attribute.
 *
 * @return {Object} Ref object.
 */


/**
 * Component enhancer used to enable passing a ref to its wrapped component.
 * Pass a function argument which receives `props` and `ref` as its arguments,
 * returning an element using the forwarded ref. The return value is a new
 * component which forwards its ref.
 *
 * @param {Function} forwarder Function passed `props` and `ref`, expected to
 *                             return an element.
 *
 * @return {WPComponent} Enhanced component.
 */


/**
 * A component which renders its children without any wrapping element.
 */


/**
 * Checks if an object is a valid WPElement.
 *
 * @param {Object} objectToCheck The object to be checked.
 *
 * @return {boolean} true if objectToTest is a valid WPElement and false otherwise.
 */


/**
 * @see https://reactjs.org/docs/react-api.html#reactmemo
 */


/**
 * Component that activates additional checks and warnings for its descendants.
 */


/**
 * @see https://reactjs.org/docs/hooks-reference.html#usecallback
 */


/**
 * @see https://reactjs.org/docs/hooks-reference.html#usecontext
 */


/**
 * @see https://reactjs.org/docs/hooks-reference.html#usedebugvalue
 */


/**
 * @see https://reactjs.org/docs/hooks-reference.html#useeffect
 */


/**
 * @see https://reactjs.org/docs/hooks-reference.html#useimperativehandle
 */


/**
 * @see https://reactjs.org/docs/hooks-reference.html#uselayouteffect
 */


/**
 * @see https://reactjs.org/docs/hooks-reference.html#usememo
 */


/**
 * @see https://reactjs.org/docs/hooks-reference.html#usereducer
 */


/**
 * @see https://reactjs.org/docs/hooks-reference.html#useref
 */


/**
 * @see https://reactjs.org/docs/hooks-reference.html#usestate
 */


/**
 * @see https://reactjs.org/docs/react-api.html#reactlazy
 */


/**
 * @see https://reactjs.org/docs/react-api.html#reactsuspense
 */


/**
 * Concatenate two or more React children objects.
 *
 * @param {...?Object} childrenArguments Array of children arguments (array of arrays/strings/objects) to concatenate.
 *
 * @return {Array} The concatenated value.
 */

<<<<<<< HEAD
function concatChildren() {
  for (var _len = arguments.length, childrenArguments = new Array(_len), _key = 0; _key < _len; _key++) {
    childrenArguments[_key] = arguments[_key];
  }

  return childrenArguments.reduce(function (accumulator, children, i) {
    external_this_React_["Children"].forEach(children, function (child, j) {
      if (child && 'string' !== typeof child) {
        child = Object(external_this_React_["cloneElement"])(child, {
=======
function concatChildren(...childrenArguments) {
  return childrenArguments.reduce((accumulator, children, i) => {
    external_React_["Children"].forEach(children, (child, j) => {
      if (child && 'string' !== typeof child) {
        child = Object(external_React_["cloneElement"])(child, {
>>>>>>> master
          key: [i, j].join()
        });
      }

      accumulator.push(child);
    });
    return accumulator;
  }, []);
}
/**
 * Switches the nodeName of all the elements in the children object.
 *
 * @param {?Object} children Children object.
 * @param {string}  nodeName Node name.
 *
 * @return {?Object} The updated children object.
 */

function switchChildrenNodeName(children, nodeName) {
<<<<<<< HEAD
  return children && external_this_React_["Children"].map(children, function (elt, index) {
    if (Object(external_this_lodash_["isString"])(elt)) {
      return Object(external_this_React_["createElement"])(nodeName, {
=======
  return children && external_React_["Children"].map(children, (elt, index) => {
    if (Object(external_lodash_["isString"])(elt)) {
      return Object(external_React_["createElement"])(nodeName, {
>>>>>>> master
        key: index
      }, elt);
    }

<<<<<<< HEAD
    var _elt$props = elt.props,
        childrenProp = _elt$props.children,
        props = Object(objectWithoutProperties["a" /* default */])(_elt$props, ["children"]);

    return Object(external_this_React_["createElement"])(nodeName, _objectSpread({
      key: index
    }, props), childrenProp);
  });
}

// EXTERNAL MODULE: external {"this":"ReactDOM"}
var external_this_ReactDOM_ = __webpack_require__(66);
=======
    const {
      children: childrenProp,
      ...props
    } = elt.props;
    return Object(external_React_["createElement"])(nodeName, {
      key: index,
      ...props
    }, childrenProp);
  });
}

// EXTERNAL MODULE: external "ReactDOM"
var external_ReactDOM_ = __webpack_require__("faye");
>>>>>>> master

// CONCATENATED MODULE: ./node_modules/@wordpress/element/build-module/react-platform.js
/**
 * External dependencies
 */

/**
 * Creates a portal into which a component can be rendered.
 *
 * @see https://github.com/facebook/react/issues/10309#issuecomment-318433235
 *
<<<<<<< HEAD
 * @param {WPElement}   child     Any renderable child, such as an element,
=======
 * @param {import('./react').WPElement}   child     Any renderable child, such as an element,
>>>>>>> master
 *                                string, or fragment.
 * @param {HTMLElement} container DOM node into which element should be rendered.
 */


/**
 * Finds the dom node of a React component.
 *
<<<<<<< HEAD
 * @param {WPComponent} component Component's instance.
=======
 * @param {import('./react').WPComponent} component Component's instance.
>>>>>>> master
 */


/**
 * Renders a given element into the target DOM node.
 *
<<<<<<< HEAD
 * @param {WPElement}   element Element to render.
=======
 * @param {import('./react').WPElement}   element Element to render.
>>>>>>> master
 * @param {HTMLElement} target  DOM node into which element should be rendered.
 */


/**
 * Removes any mounted element from the target DOM node.
 *
 * @param {Element} target DOM node in which element is to be removed
 */



// CONCATENATED MODULE: ./node_modules/@wordpress/element/build-module/utils.js
/**
 * External dependencies
 */

/**
 * Checks if the provided WP element is empty.
 *
 * @param {*} element WP element to check.
 * @return {boolean} True when an element is considered empty.
 */

<<<<<<< HEAD
var utils_isEmptyElement = function isEmptyElement(element) {
  if (Object(external_this_lodash_["isNumber"])(element)) {
    return false;
  }

  if (Object(external_this_lodash_["isString"])(element) || Object(external_this_lodash_["isArray"])(element)) {
=======
const isEmptyElement = element => {
  if (Object(external_lodash_["isNumber"])(element)) {
    return false;
  }

  if (Object(external_lodash_["isString"])(element) || Object(external_lodash_["isArray"])(element)) {
>>>>>>> master
    return !element.length;
  }

  return !element;
};

// CONCATENATED MODULE: ./node_modules/@wordpress/element/build-module/platform.js
/**
 * Parts of this source were derived and modified from react-native-web,
 * released under the MIT license.
 *
 * Copyright (c) 2016-present, Nicolas Gallagher.
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 */
<<<<<<< HEAD
var Platform = {
  OS: 'web',
  select: function select(spec) {
    return 'web' in spec ? spec.web : spec.default;
  }
=======
const Platform = {
  OS: 'web',
  select: spec => 'web' in spec ? spec.web : spec.default
>>>>>>> master
};
/**
 * Component used to detect the current Platform being used.
 * Use Platform.OS === 'web' to detect if running on web enviroment.
 *
 * This is the same concept as the React Native implementation.
 *
 * @see https://facebook.github.io/react-native/docs/platform-specific-code#platform-module
 *
 * Here is an example of how to use the select method:
 * @example
 * ```js
 * import { Platform } from '@wordpress/element';
 *
 * const placeholderLabel = Platform.select( {
 *   native: __( 'Add media' ),
 *   web: __( 'Drag images, upload new ones or select files from your library.' ),
 * } );
 * ```
 */

/* harmony default export */ var platform = (Platform);

<<<<<<< HEAD
// EXTERNAL MODULE: external {"this":["wp","escapeHtml"]}
var external_this_wp_escapeHtml_ = __webpack_require__(68);

// CONCATENATED MODULE: ./node_modules/@wordpress/element/build-module/raw-html.js



function raw_html_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function raw_html_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { raw_html_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { raw_html_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Internal dependencies
 */
=======
// EXTERNAL MODULE: external ["wp","escapeHtml"]
var external_wp_escapeHtml_ = __webpack_require__("Vx3V");

// CONCATENATED MODULE: ./node_modules/@wordpress/element/build-module/raw-html.js
/**
 * Internal dependencies
 */
 // Disable reason: JSDoc linter doesn't seem to parse the union (`&`) correctly.

/** @typedef {{children: string} & import('react').ComponentPropsWithoutRef<'div'>} RawHTMLProps */
>>>>>>> master

/**
 * Component used as equivalent of Fragment with unescaped HTML, in cases where
 * it is desirable to render dangerous HTML without needing a wrapper element.
 * To preserve additional props, a `div` wrapper _will_ be created if any props
 * aside from `children` are passed.
 *
<<<<<<< HEAD
 * @param {Object} props
 * @param {string} props.children HTML to render.
 * @param {Object} props.props    Any additonal props to be set on the containing div.
 *
 * @return {WPComponent} Dangerously-rendering component.
 */

function RawHTML(_ref) {
  var children = _ref.children,
      props = Object(objectWithoutProperties["a" /* default */])(_ref, ["children"]);

  // The DIV wrapper will be stripped by serializer, unless there are
  // non-children props present.
  return Object(external_this_React_["createElement"])('div', raw_html_objectSpread({
    dangerouslySetInnerHTML: {
      __html: children
    }
  }, props));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/element/build-module/serialize.js




function serialize_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function serialize_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { serialize_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { serialize_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

=======
 * @param {RawHTMLProps} props Children should be a string of HTML. Other props
 *                             will be passed through to div wrapper.
 *
 * @return {JSX.Element} Dangerously-rendering component.
 */

function RawHTML({
  children,
  ...props
}) {
  // The DIV wrapper will be stripped by serializer, unless there are
  // non-children props present.
  return Object(external_React_["createElement"])('div', {
    dangerouslySetInnerHTML: {
      __html: children
    },
    ...props
  });
}

// CONCATENATED MODULE: ./node_modules/@wordpress/element/build-module/serialize.js
>>>>>>> master
/**
 * Parts of this source were derived and modified from fast-react-render,
 * released under the MIT license.
 *
 * https://github.com/alt-j/fast-react-render
 *
 * Copyright (c) 2016 Andrey Morozov
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



<<<<<<< HEAD

var _createContext = Object(external_this_React_["createContext"])(),
    Provider = _createContext.Provider,
    Consumer = _createContext.Consumer;

var ForwardRef = Object(external_this_React_["forwardRef"])(function () {
=======
/** @typedef {import('./react').WPElement} WPElement */

const {
  Provider,
  Consumer
} = Object(external_React_["createContext"])(undefined);
const ForwardRef = Object(external_React_["forwardRef"])(() => {
>>>>>>> master
  return null;
});
/**
 * Valid attribute types.
 *
<<<<<<< HEAD
 * @type {Set}
 */

var ATTRIBUTES_TYPES = new Set(['string', 'boolean', 'number']);
/**
 * Element tags which can be self-closing.
 *
 * @type {Set}
 */

var SELF_CLOSING_TAGS = new Set(['area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr']);
=======
 * @type {Set<string>}
 */

const ATTRIBUTES_TYPES = new Set(['string', 'boolean', 'number']);
/**
 * Element tags which can be self-closing.
 *
 * @type {Set<string>}
 */

const SELF_CLOSING_TAGS = new Set(['area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr']);
>>>>>>> master
/**
 * Boolean attributes are attributes whose presence as being assigned is
 * meaningful, even if only empty.
 *
 * See: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes
 * Extracted from: https://html.spec.whatwg.org/multipage/indices.html#attributes-3
 *
 * Object.keys( [ ...document.querySelectorAll( '#attributes-1 > tbody > tr' ) ]
 *     .filter( ( tr ) => tr.lastChild.textContent.indexOf( 'Boolean attribute' ) !== -1 )
 *     .reduce( ( result, tr ) => Object.assign( result, {
 *         [ tr.firstChild.textContent.trim() ]: true
 *     } ), {} ) ).sort();
 *
<<<<<<< HEAD
 * @type {Set}
 */

var BOOLEAN_ATTRIBUTES = new Set(['allowfullscreen', 'allowpaymentrequest', 'allowusermedia', 'async', 'autofocus', 'autoplay', 'checked', 'controls', 'default', 'defer', 'disabled', 'download', 'formnovalidate', 'hidden', 'ismap', 'itemscope', 'loop', 'multiple', 'muted', 'nomodule', 'novalidate', 'open', 'playsinline', 'readonly', 'required', 'reversed', 'selected', 'typemustmatch']);
=======
 * @type {Set<string>}
 */

const BOOLEAN_ATTRIBUTES = new Set(['allowfullscreen', 'allowpaymentrequest', 'allowusermedia', 'async', 'autofocus', 'autoplay', 'checked', 'controls', 'default', 'defer', 'disabled', 'download', 'formnovalidate', 'hidden', 'ismap', 'itemscope', 'loop', 'multiple', 'muted', 'nomodule', 'novalidate', 'open', 'playsinline', 'readonly', 'required', 'reversed', 'selected', 'typemustmatch']);
>>>>>>> master
/**
 * Enumerated attributes are attributes which must be of a specific value form.
 * Like boolean attributes, these are meaningful if specified, even if not of a
 * valid enumerated value.
 *
 * See: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute
 * Extracted from: https://html.spec.whatwg.org/multipage/indices.html#attributes-3
 *
 * Object.keys( [ ...document.querySelectorAll( '#attributes-1 > tbody > tr' ) ]
 *     .filter( ( tr ) => /^("(.+?)";?\s*)+/.test( tr.lastChild.textContent.trim() ) )
 *     .reduce( ( result, tr ) => Object.assign( result, {
 *         [ tr.firstChild.textContent.trim() ]: true
 *     } ), {} ) ).sort();
 *
 * Some notable omissions:
 *
 *  - `alt`: https://blog.whatwg.org/omit-alt
 *
<<<<<<< HEAD
 * @type {Set}
 */

var ENUMERATED_ATTRIBUTES = new Set(['autocapitalize', 'autocomplete', 'charset', 'contenteditable', 'crossorigin', 'decoding', 'dir', 'draggable', 'enctype', 'formenctype', 'formmethod', 'http-equiv', 'inputmode', 'kind', 'method', 'preload', 'scope', 'shape', 'spellcheck', 'translate', 'type', 'wrap']);
=======
 * @type {Set<string>}
 */

const ENUMERATED_ATTRIBUTES = new Set(['autocapitalize', 'autocomplete', 'charset', 'contenteditable', 'crossorigin', 'decoding', 'dir', 'draggable', 'enctype', 'formenctype', 'formmethod', 'http-equiv', 'inputmode', 'kind', 'method', 'preload', 'scope', 'shape', 'spellcheck', 'translate', 'type', 'wrap']);
>>>>>>> master
/**
 * Set of CSS style properties which support assignment of unitless numbers.
 * Used in rendering of style properties, where `px` unit is assumed unless
 * property is included in this set or value is zero.
 *
 * Generated via:
 *
 * Object.entries( document.createElement( 'div' ).style )
 *     .filter( ( [ key ] ) => (
 *         ! /^(webkit|ms|moz)/.test( key ) &&
 *         ( e.style[ key ] = 10 ) &&
 *         e.style[ key ] === '10'
 *     ) )
 *     .map( ( [ key ] ) => key )
 *     .sort();
 *
<<<<<<< HEAD
 * @type {Set}
 */

var CSS_PROPERTIES_SUPPORTS_UNITLESS = new Set(['animation', 'animationIterationCount', 'baselineShift', 'borderImageOutset', 'borderImageSlice', 'borderImageWidth', 'columnCount', 'cx', 'cy', 'fillOpacity', 'flexGrow', 'flexShrink', 'floodOpacity', 'fontWeight', 'gridColumnEnd', 'gridColumnStart', 'gridRowEnd', 'gridRowStart', 'lineHeight', 'opacity', 'order', 'orphans', 'r', 'rx', 'ry', 'shapeImageThreshold', 'stopOpacity', 'strokeDasharray', 'strokeDashoffset', 'strokeMiterlimit', 'strokeOpacity', 'strokeWidth', 'tabSize', 'widows', 'x', 'y', 'zIndex', 'zoom']);
=======
 * @type {Set<string>}
 */

const CSS_PROPERTIES_SUPPORTS_UNITLESS = new Set(['animation', 'animationIterationCount', 'baselineShift', 'borderImageOutset', 'borderImageSlice', 'borderImageWidth', 'columnCount', 'cx', 'cy', 'fillOpacity', 'flexGrow', 'flexShrink', 'floodOpacity', 'fontWeight', 'gridColumnEnd', 'gridColumnStart', 'gridRowEnd', 'gridRowStart', 'lineHeight', 'opacity', 'order', 'orphans', 'r', 'rx', 'ry', 'shapeImageThreshold', 'stopOpacity', 'strokeDasharray', 'strokeDashoffset', 'strokeMiterlimit', 'strokeOpacity', 'strokeWidth', 'tabSize', 'widows', 'x', 'y', 'zIndex', 'zoom']);
>>>>>>> master
/**
 * Returns true if the specified string is prefixed by one of an array of
 * possible prefixes.
 *
 * @param {string}   string   String to check.
 * @param {string[]} prefixes Possible prefixes.
 *
 * @return {boolean} Whether string has prefix.
 */

function hasPrefix(string, prefixes) {
<<<<<<< HEAD
  return prefixes.some(function (prefix) {
    return string.indexOf(prefix) === 0;
  });
=======
  return prefixes.some(prefix => string.indexOf(prefix) === 0);
>>>>>>> master
}
/**
 * Returns true if the given prop name should be ignored in attributes
 * serialization, or false otherwise.
 *
 * @param {string} attribute Attribute to check.
 *
 * @return {boolean} Whether attribute should be ignored.
 */

function isInternalAttribute(attribute) {
  return 'key' === attribute || 'children' === attribute;
}
/**
 * Returns the normal form of the element's attribute value for HTML.
 *
 * @param {string} attribute Attribute name.
 * @param {*}      value     Non-normalized attribute value.
 *
<<<<<<< HEAD
 * @return {string} Normalized attribute value.
=======
 * @return {*} Normalized attribute value.
>>>>>>> master
 */


function getNormalAttributeValue(attribute, value) {
  switch (attribute) {
    case 'style':
      return renderStyle(value);
  }

  return value;
}
/**
 * Returns the normal form of the element's attribute name for HTML.
 *
 * @param {string} attribute Non-normalized attribute name.
 *
 * @return {string} Normalized attribute name.
 */


function getNormalAttributeName(attribute) {
  switch (attribute) {
    case 'htmlFor':
      return 'for';

    case 'className':
      return 'class';
  }

  return attribute.toLowerCase();
}
/**
 * Returns the normal form of the style property name for HTML.
 *
 * - Converts property names to kebab-case, e.g. 'backgroundColor' → 'background-color'
 * - Leaves custom attributes alone, e.g. '--myBackgroundColor' → '--myBackgroundColor'
 * - Converts vendor-prefixed property names to -kebab-case, e.g. 'MozTransform' → '-moz-transform'
 *
 * @param {string} property Property name.
 *
 * @return {string} Normalized property name.
 */


function getNormalStylePropertyName(property) {
<<<<<<< HEAD
  if (Object(external_this_lodash_["startsWith"])(property, '--')) {
=======
  if (Object(external_lodash_["startsWith"])(property, '--')) {
>>>>>>> master
    return property;
  }

  if (hasPrefix(property, ['ms', 'O', 'Moz', 'Webkit'])) {
<<<<<<< HEAD
    return '-' + Object(external_this_lodash_["kebabCase"])(property);
  }

  return Object(external_this_lodash_["kebabCase"])(property);
=======
    return '-' + Object(external_lodash_["kebabCase"])(property);
  }

  return Object(external_lodash_["kebabCase"])(property);
>>>>>>> master
}
/**
 * Returns the normal form of the style property value for HTML. Appends a
 * default pixel unit if numeric, not a unitless property, and not zero.
 *
 * @param {string} property Property name.
 * @param {*}      value    Non-normalized property value.
 *
 * @return {*} Normalized property value.
 */


function getNormalStylePropertyValue(property, value) {
  if (typeof value === 'number' && 0 !== value && !CSS_PROPERTIES_SUPPORTS_UNITLESS.has(property)) {
    return value + 'px';
  }

  return value;
}
/**
 * Serializes a React element to string.
 *
<<<<<<< HEAD
 * @param {WPElement} element       Element to serialize.
 * @param {?Object}   context       Context object.
 * @param {?Object}   legacyContext Legacy context object.
=======
 * @param {import('react').ReactNode} element         Element to serialize.
 * @param {Object}                    [context]       Context object.
 * @param {Object}                    [legacyContext] Legacy context object.
>>>>>>> master
 *
 * @return {string} Serialized element.
 */


<<<<<<< HEAD
function renderElement(element, context) {
  var legacyContext = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

=======
function renderElement(element, context, legacyContext = {}) {
>>>>>>> master
  if (null === element || undefined === element || false === element) {
    return '';
  }

  if (Array.isArray(element)) {
    return renderChildren(element, context, legacyContext);
  }

<<<<<<< HEAD
  switch (Object(esm_typeof["a" /* default */])(element)) {
    case 'string':
      return Object(external_this_wp_escapeHtml_["escapeHTML"])(element);
=======
  switch (typeof element) {
    case 'string':
      return Object(external_wp_escapeHtml_["escapeHTML"])(element);
>>>>>>> master

    case 'number':
      return element.toString();
  }

<<<<<<< HEAD
  var type = element.type,
      props = element.props;

  switch (type) {
    case external_this_React_["StrictMode"]:
    case external_this_React_["Fragment"]:
      return renderChildren(props.children, context, legacyContext);

    case RawHTML:
      var children = props.children,
          wrapperProps = Object(objectWithoutProperties["a" /* default */])(props, ["children"]);

      return renderNativeComponent(Object(external_this_lodash_["isEmpty"])(wrapperProps) ? null : 'div', serialize_objectSpread({}, wrapperProps, {
        dangerouslySetInnerHTML: {
          __html: children
        }
      }), context, legacyContext);
  }

  switch (Object(esm_typeof["a" /* default */])(type)) {
=======
  const {
    type,
    props
  } =
  /** @type {{type?: any, props?: any}} */
  element;

  switch (type) {
    case external_React_["StrictMode"]:
    case external_React_["Fragment"]:
      return renderChildren(props.children, context, legacyContext);

    case RawHTML:
      const {
        children,
        ...wrapperProps
      } = props;
      return renderNativeComponent(Object(external_lodash_["isEmpty"])(wrapperProps) ? null : 'div', { ...wrapperProps,
        dangerouslySetInnerHTML: {
          __html: children
        }
      }, context, legacyContext);
  }

  switch (typeof type) {
>>>>>>> master
    case 'string':
      return renderNativeComponent(type, props, context, legacyContext);

    case 'function':
      if (type.prototype && typeof type.prototype.render === 'function') {
        return renderComponent(type, props, context, legacyContext);
      }

      return renderElement(type(props, legacyContext), context, legacyContext);
  }

  switch (type && type.$$typeof) {
    case Provider.$$typeof:
      return renderChildren(props.children, props.value, legacyContext);

    case Consumer.$$typeof:
      return renderElement(props.children(context || type._currentValue), context, legacyContext);

    case ForwardRef.$$typeof:
      return renderElement(type.render(props), context, legacyContext);
  }

  return '';
}
/**
 * Serializes a native component type to string.
 *
<<<<<<< HEAD
 * @param {?string} type          Native component type to serialize, or null if
 *                                rendering as fragment of children content.
 * @param {Object}  props         Props object.
 * @param {?Object} context       Context object.
 * @param {?Object} legacyContext Legacy context object.
=======
 * @param {?string} type            Native component type to serialize, or null if
 *                                  rendering as fragment of children content.
 * @param {Object}  props           Props object.
 * @param {Object}  [context]       Context object.
 * @param {Object}  [legacyContext] Legacy context object.
>>>>>>> master
 *
 * @return {string} Serialized element.
 */

<<<<<<< HEAD
function renderNativeComponent(type, props, context) {
  var legacyContext = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var content = '';
=======
function renderNativeComponent(type, props, context, legacyContext = {}) {
  let content = '';
>>>>>>> master

  if (type === 'textarea' && props.hasOwnProperty('value')) {
    // Textarea children can be assigned as value prop. If it is, render in
    // place of children. Ensure to omit so it is not assigned as attribute
    // as well.
    content = renderChildren(props.value, context, legacyContext);
<<<<<<< HEAD
    props = Object(external_this_lodash_["omit"])(props, 'value');
=======
    props = Object(external_lodash_["omit"])(props, 'value');
>>>>>>> master
  } else if (props.dangerouslySetInnerHTML && typeof props.dangerouslySetInnerHTML.__html === 'string') {
    // Dangerous content is left unescaped.
    content = props.dangerouslySetInnerHTML.__html;
  } else if (typeof props.children !== 'undefined') {
    content = renderChildren(props.children, context, legacyContext);
  }

  if (!type) {
    return content;
  }

<<<<<<< HEAD
  var attributes = renderAttributes(props);
=======
  const attributes = renderAttributes(props);
>>>>>>> master

  if (SELF_CLOSING_TAGS.has(type)) {
    return '<' + type + attributes + '/>';
  }

  return '<' + type + attributes + '>' + content + '</' + type + '>';
}
<<<<<<< HEAD
/**
 * Serializes a non-native component type to string.
 *
 * @param {Function} Component     Component type to serialize.
 * @param {Object}   props         Props object.
 * @param {?Object}  context       Context object.
 * @param {?Object}  legacyContext Legacy context object.
=======
/** @typedef {import('./react').WPComponent} WPComponent */

/**
 * Serializes a non-native component type to string.
 *
 * @param {WPComponent} Component       Component type to serialize.
 * @param {Object}      props           Props object.
 * @param {Object}      [context]       Context object.
 * @param {Object}      [legacyContext] Legacy context object.
>>>>>>> master
 *
 * @return {string} Serialized element
 */

<<<<<<< HEAD
function renderComponent(Component, props, context) {
  var legacyContext = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var instance = new Component(props, legacyContext);

  if (typeof instance.getChildContext === 'function') {
    Object.assign(legacyContext, instance.getChildContext());
  }

  var html = renderElement(instance.render(), context, legacyContext);
=======
function renderComponent(Component, props, context, legacyContext = {}) {
  const instance = new
  /** @type {import('react').ComponentClass} */
  Component(props, legacyContext);

  if (typeof // Ignore reason: Current prettier reformats parens and mangles type assertion
  // prettier-ignore

  /** @type {{getChildContext?: () => unknown}} */
  instance.getChildContext === 'function') {
    Object.assign(legacyContext,
    /** @type {{getChildContext?: () => unknown}} */
    instance.getChildContext());
  }

  const html = renderElement(instance.render(), context, legacyContext);
>>>>>>> master
  return html;
}
/**
 * Serializes an array of children to string.
 *
<<<<<<< HEAD
 * @param {Array}   children      Children to serialize.
 * @param {?Object} context       Context object.
 * @param {?Object} legacyContext Legacy context object.
=======
 * @param {import('react').ReactNodeArray} children        Children to serialize.
 * @param {Object}                         [context]       Context object.
 * @param {Object}                         [legacyContext] Legacy context object.
>>>>>>> master
 *
 * @return {string} Serialized children.
 */

<<<<<<< HEAD
function renderChildren(children, context) {
  var legacyContext = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var result = '';
  children = Object(external_this_lodash_["castArray"])(children);

  for (var i = 0; i < children.length; i++) {
    var child = children[i];
=======
function renderChildren(children, context, legacyContext = {}) {
  let result = '';
  children = Object(external_lodash_["castArray"])(children);

  for (let i = 0; i < children.length; i++) {
    const child = children[i];
>>>>>>> master
    result += renderElement(child, context, legacyContext);
  }

  return result;
}
/**
 * Renders a props object as a string of HTML attributes.
 *
 * @param {Object} props Props object.
 *
 * @return {string} Attributes string.
 */


function renderAttributes(props) {
<<<<<<< HEAD
  var result = '';

  for (var key in props) {
    var attribute = getNormalAttributeName(key);

    if (!Object(external_this_wp_escapeHtml_["isValidAttributeName"])(attribute)) {
      continue;
    }

    var value = getNormalAttributeValue(key, props[key]); // If value is not of serializeable type, skip.

    if (!ATTRIBUTES_TYPES.has(Object(esm_typeof["a" /* default */])(value))) {
=======
  let result = '';

  for (const key in props) {
    const attribute = getNormalAttributeName(key);

    if (!Object(external_wp_escapeHtml_["isValidAttributeName"])(attribute)) {
      continue;
    }

    let value = getNormalAttributeValue(key, props[key]); // If value is not of serializeable type, skip.

    if (!ATTRIBUTES_TYPES.has(typeof value)) {
>>>>>>> master
      continue;
    } // Don't render internal attribute names.


    if (isInternalAttribute(key)) {
      continue;
    }

<<<<<<< HEAD
    var isBooleanAttribute = BOOLEAN_ATTRIBUTES.has(attribute); // Boolean attribute should be omitted outright if its value is false.
=======
    const isBooleanAttribute = BOOLEAN_ATTRIBUTES.has(attribute); // Boolean attribute should be omitted outright if its value is false.
>>>>>>> master

    if (isBooleanAttribute && value === false) {
      continue;
    }

<<<<<<< HEAD
    var isMeaningfulAttribute = isBooleanAttribute || hasPrefix(key, ['data-', 'aria-']) || ENUMERATED_ATTRIBUTES.has(attribute); // Only write boolean value as attribute if meaningful.
=======
    const isMeaningfulAttribute = isBooleanAttribute || hasPrefix(key, ['data-', 'aria-']) || ENUMERATED_ATTRIBUTES.has(attribute); // Only write boolean value as attribute if meaningful.
>>>>>>> master

    if (typeof value === 'boolean' && !isMeaningfulAttribute) {
      continue;
    }

    result += ' ' + attribute; // Boolean attributes should write attribute name, but without value.
    // Mere presence of attribute name is effective truthiness.

    if (isBooleanAttribute) {
      continue;
    }

    if (typeof value === 'string') {
<<<<<<< HEAD
      value = Object(external_this_wp_escapeHtml_["escapeAttribute"])(value);
=======
      value = Object(external_wp_escapeHtml_["escapeAttribute"])(value);
>>>>>>> master
    }

    result += '="' + value + '"';
  }

  return result;
}
/**
 * Renders a style object as a string attribute value.
 *
 * @param {Object} style Style object.
 *
 * @return {string} Style attribute value.
 */

function renderStyle(style) {
  // Only generate from object, e.g. tolerate string value.
<<<<<<< HEAD
  if (!Object(external_this_lodash_["isPlainObject"])(style)) {
    return style;
  }

  var result;

  for (var property in style) {
    var value = style[property];
=======
  if (!Object(external_lodash_["isPlainObject"])(style)) {
    return style;
  }

  let result;

  for (const property in style) {
    const value = style[property];
>>>>>>> master

    if (null === value || undefined === value) {
      continue;
    }

    if (result) {
      result += ';';
    } else {
      result = '';
    }

<<<<<<< HEAD
    var normalName = getNormalStylePropertyName(property);
    var normalValue = getNormalStylePropertyValue(property, value);
=======
    const normalName = getNormalStylePropertyName(property);
    const normalValue = getNormalStylePropertyValue(property, value);
>>>>>>> master
    result += normalName + ':' + normalValue;
  }

  return result;
}
/* harmony default export */ var serialize = (renderElement);

// CONCATENATED MODULE: ./node_modules/@wordpress/element/build-module/index.js
<<<<<<< HEAD
/* concated harmony reexport __experimentalCreateInterpolateElement */__webpack_require__.d(__webpack_exports__, "__experimentalCreateInterpolateElement", function() { return create_interpolate_element; });
/* concated harmony reexport Children */__webpack_require__.d(__webpack_exports__, "Children", function() { return external_this_React_["Children"]; });
/* concated harmony reexport cloneElement */__webpack_require__.d(__webpack_exports__, "cloneElement", function() { return external_this_React_["cloneElement"]; });
/* concated harmony reexport Component */__webpack_require__.d(__webpack_exports__, "Component", function() { return external_this_React_["Component"]; });
/* concated harmony reexport createContext */__webpack_require__.d(__webpack_exports__, "createContext", function() { return external_this_React_["createContext"]; });
/* concated harmony reexport createElement */__webpack_require__.d(__webpack_exports__, "createElement", function() { return external_this_React_["createElement"]; });
/* concated harmony reexport createRef */__webpack_require__.d(__webpack_exports__, "createRef", function() { return external_this_React_["createRef"]; });
/* concated harmony reexport forwardRef */__webpack_require__.d(__webpack_exports__, "forwardRef", function() { return external_this_React_["forwardRef"]; });
/* concated harmony reexport Fragment */__webpack_require__.d(__webpack_exports__, "Fragment", function() { return external_this_React_["Fragment"]; });
/* concated harmony reexport isValidElement */__webpack_require__.d(__webpack_exports__, "isValidElement", function() { return external_this_React_["isValidElement"]; });
/* concated harmony reexport memo */__webpack_require__.d(__webpack_exports__, "memo", function() { return external_this_React_["memo"]; });
/* concated harmony reexport StrictMode */__webpack_require__.d(__webpack_exports__, "StrictMode", function() { return external_this_React_["StrictMode"]; });
/* concated harmony reexport useCallback */__webpack_require__.d(__webpack_exports__, "useCallback", function() { return external_this_React_["useCallback"]; });
/* concated harmony reexport useContext */__webpack_require__.d(__webpack_exports__, "useContext", function() { return external_this_React_["useContext"]; });
/* concated harmony reexport useDebugValue */__webpack_require__.d(__webpack_exports__, "useDebugValue", function() { return external_this_React_["useDebugValue"]; });
/* concated harmony reexport useEffect */__webpack_require__.d(__webpack_exports__, "useEffect", function() { return external_this_React_["useEffect"]; });
/* concated harmony reexport useImperativeHandle */__webpack_require__.d(__webpack_exports__, "useImperativeHandle", function() { return external_this_React_["useImperativeHandle"]; });
/* concated harmony reexport useLayoutEffect */__webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return external_this_React_["useLayoutEffect"]; });
/* concated harmony reexport useMemo */__webpack_require__.d(__webpack_exports__, "useMemo", function() { return external_this_React_["useMemo"]; });
/* concated harmony reexport useReducer */__webpack_require__.d(__webpack_exports__, "useReducer", function() { return external_this_React_["useReducer"]; });
/* concated harmony reexport useRef */__webpack_require__.d(__webpack_exports__, "useRef", function() { return external_this_React_["useRef"]; });
/* concated harmony reexport useState */__webpack_require__.d(__webpack_exports__, "useState", function() { return external_this_React_["useState"]; });
/* concated harmony reexport lazy */__webpack_require__.d(__webpack_exports__, "lazy", function() { return external_this_React_["lazy"]; });
/* concated harmony reexport Suspense */__webpack_require__.d(__webpack_exports__, "Suspense", function() { return external_this_React_["Suspense"]; });
/* concated harmony reexport concatChildren */__webpack_require__.d(__webpack_exports__, "concatChildren", function() { return concatChildren; });
/* concated harmony reexport switchChildrenNodeName */__webpack_require__.d(__webpack_exports__, "switchChildrenNodeName", function() { return switchChildrenNodeName; });
/* concated harmony reexport createPortal */__webpack_require__.d(__webpack_exports__, "createPortal", function() { return external_this_ReactDOM_["createPortal"]; });
/* concated harmony reexport findDOMNode */__webpack_require__.d(__webpack_exports__, "findDOMNode", function() { return external_this_ReactDOM_["findDOMNode"]; });
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "render", function() { return external_this_ReactDOM_["render"]; });
/* concated harmony reexport unmountComponentAtNode */__webpack_require__.d(__webpack_exports__, "unmountComponentAtNode", function() { return external_this_ReactDOM_["unmountComponentAtNode"]; });
/* concated harmony reexport isEmptyElement */__webpack_require__.d(__webpack_exports__, "isEmptyElement", function() { return utils_isEmptyElement; });
/* concated harmony reexport Platform */__webpack_require__.d(__webpack_exports__, "Platform", function() { return platform; });
/* concated harmony reexport renderToString */__webpack_require__.d(__webpack_exports__, "renderToString", function() { return serialize; });
/* concated harmony reexport RawHTML */__webpack_require__.d(__webpack_exports__, "RawHTML", function() { return RawHTML; });
=======
>>>>>>> master









<<<<<<< HEAD
/***/ }),

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

/***/ 66:
/***/ (function(module, exports) {

(function() { module.exports = this["ReactDOM"]; }());

/***/ }),

/***/ 68:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["escapeHtml"]; }());

=======
>>>>>>> master
/***/ })

/******/ });