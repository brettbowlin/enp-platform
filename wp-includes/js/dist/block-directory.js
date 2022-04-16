this["wp"] = this["wp"] || {}; this["wp"]["blockDirectory"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 429);
=======
/******/ 	return __webpack_require__(__webpack_require__.s = "7f3f");
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

/***/ 10:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

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

/***/ 23:
/***/ (function(module, exports) {

(function() { module.exports = this["regeneratorRuntime"]; }());

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

/***/ 3:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

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

/***/ 4:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["data"]; }());

/***/ }),

/***/ 42:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["apiFetch"]; }());

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var selectors_namespaceObject = {};
__webpack_require__.r(selectors_namespaceObject);
__webpack_require__.d(selectors_namespaceObject, "isRequestingDownloadableBlocks", function() { return isRequestingDownloadableBlocks; });
__webpack_require__.d(selectors_namespaceObject, "getDownloadableBlocks", function() { return selectors_getDownloadableBlocks; });
__webpack_require__.d(selectors_namespaceObject, "hasInstallBlocksPermission", function() { return selectors_hasInstallBlocksPermission; });
__webpack_require__.d(selectors_namespaceObject, "getInstalledBlockTypes", function() { return getInstalledBlockTypes; });
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, "fetchDownloadableBlocks", function() { return fetchDownloadableBlocks; });
__webpack_require__.d(actions_namespaceObject, "receiveDownloadableBlocks", function() { return receiveDownloadableBlocks; });
__webpack_require__.d(actions_namespaceObject, "setInstallBlocksPermission", function() { return setInstallBlocksPermission; });
__webpack_require__.d(actions_namespaceObject, "downloadBlock", function() { return actions_downloadBlock; });
__webpack_require__.d(actions_namespaceObject, "installBlock", function() { return actions_installBlock; });
__webpack_require__.d(actions_namespaceObject, "uninstallBlock", function() { return uninstallBlock; });
__webpack_require__.d(actions_namespaceObject, "addInstalledBlockType", function() { return addInstalledBlockType; });
__webpack_require__.d(actions_namespaceObject, "removeInstalledBlockType", function() { return removeInstalledBlockType; });

// EXTERNAL MODULE: external {"this":["wp","data"]}
var external_this_wp_data_ = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/store/reducer.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
=======
/***/ "//Lo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Tqx9");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

>>>>>>> master

/**
 * WordPress dependencies
 */

<<<<<<< HEAD
=======
const blockDefault = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M19 8h-1V6h-5v2h-2V6H6v2H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zm.5 10c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5v-8c0-.3.2-.5.5-.5h14c.3 0 .5.2.5.5v8z"
}));
/* harmony default export */ __webpack_exports__["a"] = (blockDefault);


/***/ }),

/***/ "1ZqX":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["data"]; }());

/***/ }),

/***/ "51Zz":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["dataControls"]; }());

/***/ }),

/***/ "7f3f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "store", function() { return /* reexport */ store; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-directory/build-module/store/selectors.js
var selectors_namespaceObject = {};
__webpack_require__.r(selectors_namespaceObject);
__webpack_require__.d(selectors_namespaceObject, "isRequestingDownloadableBlocks", function() { return selectors_isRequestingDownloadableBlocks; });
__webpack_require__.d(selectors_namespaceObject, "getDownloadableBlocks", function() { return selectors_getDownloadableBlocks; });
__webpack_require__.d(selectors_namespaceObject, "getInstalledBlockTypes", function() { return getInstalledBlockTypes; });
__webpack_require__.d(selectors_namespaceObject, "getNewBlockTypes", function() { return getNewBlockTypes; });
__webpack_require__.d(selectors_namespaceObject, "getUnusedBlockTypes", function() { return getUnusedBlockTypes; });
__webpack_require__.d(selectors_namespaceObject, "isInstalling", function() { return selectors_isInstalling; });
__webpack_require__.d(selectors_namespaceObject, "getErrorNotices", function() { return getErrorNotices; });
__webpack_require__.d(selectors_namespaceObject, "getErrorNoticeForBlock", function() { return selectors_getErrorNoticeForBlock; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-directory/build-module/store/actions.js
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, "fetchDownloadableBlocks", function() { return fetchDownloadableBlocks; });
__webpack_require__.d(actions_namespaceObject, "receiveDownloadableBlocks", function() { return receiveDownloadableBlocks; });
__webpack_require__.d(actions_namespaceObject, "installBlockType", function() { return actions_installBlockType; });
__webpack_require__.d(actions_namespaceObject, "uninstallBlockType", function() { return actions_uninstallBlockType; });
__webpack_require__.d(actions_namespaceObject, "addInstalledBlockType", function() { return addInstalledBlockType; });
__webpack_require__.d(actions_namespaceObject, "removeInstalledBlockType", function() { return removeInstalledBlockType; });
__webpack_require__.d(actions_namespaceObject, "setIsInstalling", function() { return setIsInstalling; });
__webpack_require__.d(actions_namespaceObject, "setErrorNotice", function() { return setErrorNotice; });
__webpack_require__.d(actions_namespaceObject, "clearErrorNotice", function() { return clearErrorNotice; });

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__("GRId");

// EXTERNAL MODULE: external ["wp","plugins"]
var external_wp_plugins_ = __webpack_require__("TvNi");

// EXTERNAL MODULE: external ["wp","hooks"]
var external_wp_hooks_ = __webpack_require__("g56x");

// EXTERNAL MODULE: external ["wp","blocks"]
var external_wp_blocks_ = __webpack_require__("HSyU");

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__("1ZqX");

// EXTERNAL MODULE: external ["wp","editor"]
var external_wp_editor_ = __webpack_require__("jSdM");

// EXTERNAL MODULE: external ["wp","dataControls"]
var external_wp_dataControls_ = __webpack_require__("51Zz");

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/store/reducer.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


>>>>>>> master
/**
 * Reducer returning an array of downloadable blocks.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

<<<<<<< HEAD
var reducer_downloadableBlocks = function downloadableBlocks() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    results: {},
    filterValue: undefined,
    isRequestingDownloadableBlocks: true
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'FETCH_DOWNLOADABLE_BLOCKS':
      return _objectSpread({}, state, {
        isRequestingDownloadableBlocks: true
      });

    case 'RECEIVE_DOWNLOADABLE_BLOCKS':
      return _objectSpread({}, state, {
        results: Object.assign({}, state.results, Object(defineProperty["a" /* default */])({}, action.filterValue, action.downloadableBlocks)),
        isRequestingDownloadableBlocks: false
      });
=======
const downloadableBlocks = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_DOWNLOADABLE_BLOCKS':
      return { ...state,
        [action.filterValue]: {
          isRequesting: true
        }
      };

    case 'RECEIVE_DOWNLOADABLE_BLOCKS':
      return { ...state,
        [action.filterValue]: {
          results: action.downloadableBlocks,
          isRequesting: false
        }
      };
>>>>>>> master
  }

  return state;
};
/**
 * Reducer managing the installation and deletion of blocks.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

<<<<<<< HEAD
var reducer_blockManagement = function blockManagement() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    installedBlockTypes: []
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'ADD_INSTALLED_BLOCK_TYPE':
      return _objectSpread({}, state, {
        installedBlockTypes: [].concat(Object(toConsumableArray["a" /* default */])(state.installedBlockTypes), [action.item])
      });

    case 'REMOVE_INSTALLED_BLOCK_TYPE':
      return _objectSpread({}, state, {
        installedBlockTypes: state.installedBlockTypes.filter(function (blockType) {
          return blockType.name !== action.item.name;
        })
      });
=======
const blockManagement = (state = {
  installedBlockTypes: [],
  isInstalling: {}
}, action) => {
  switch (action.type) {
    case 'ADD_INSTALLED_BLOCK_TYPE':
      return { ...state,
        installedBlockTypes: [...state.installedBlockTypes, action.item]
      };

    case 'REMOVE_INSTALLED_BLOCK_TYPE':
      return { ...state,
        installedBlockTypes: state.installedBlockTypes.filter(blockType => blockType.name !== action.item.name)
      };

    case 'SET_INSTALLING_BLOCK':
      return { ...state,
        isInstalling: { ...state.isInstalling,
          [action.blockId]: action.isInstalling
        }
      };
>>>>>>> master
  }

  return state;
};
/**
<<<<<<< HEAD
 * Reducer returns whether the user can install blocks.
=======
 * Reducer returning an object of error notices.
>>>>>>> master
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

<<<<<<< HEAD
function reducer_hasPermission() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === 'SET_INSTALL_BLOCKS_PERMISSION') {
    return action.hasPermission;
  }

  return state;
}
/* harmony default export */ var reducer = (Object(external_this_wp_data_["combineReducers"])({
  downloadableBlocks: reducer_downloadableBlocks,
  blockManagement: reducer_blockManagement,
  hasPermission: reducer_hasPermission
}));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/store/selectors.js
/**
 * Returns true if application is requesting for downloadable blocks.
 *
 * @param {Object} state       Global application state.
 *
 * @return {Array} Downloadable blocks
 */
function isRequestingDownloadableBlocks(state) {
  return state.downloadableBlocks.isRequestingDownloadableBlocks;
}
/**
 * Returns the available uninstalled blocks
 *
 * @param {Object} state       Global application state.
 * @param {string} filterValue Search string.
 *
 * @return {Array} Downloadable blocks
 */

function selectors_getDownloadableBlocks(state, filterValue) {
  if (!state.downloadableBlocks.results[filterValue]) {
    return [];
  }

  return state.downloadableBlocks.results[filterValue];
}
/**
 * Returns true if user has permission to install blocks.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} User has permission to install blocks.
 */

function selectors_hasInstallBlocksPermission(state) {
  return state.hasPermission;
}
/**
 * Returns the block types that have been installed on the server.
 *
 * @param {Object} state Global application state.
 *
 * @return {Array} Block type items.
 */

function getInstalledBlockTypes(state) {
  return state.blockManagement.installedBlockTypes;
}

// EXTERNAL MODULE: external {"this":"regeneratorRuntime"}
var external_this_regeneratorRuntime_ = __webpack_require__(23);
var external_this_regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(external_this_regeneratorRuntime_);

// EXTERNAL MODULE: external {"this":["wp","blocks"]}
var external_this_wp_blocks_ = __webpack_require__(10);

// EXTERNAL MODULE: external {"this":"lodash"}
var external_this_lodash_ = __webpack_require__(2);

// EXTERNAL MODULE: external {"this":["wp","apiFetch"]}
var external_this_wp_apiFetch_ = __webpack_require__(42);
var external_this_wp_apiFetch_default = /*#__PURE__*/__webpack_require__.n(external_this_wp_apiFetch_);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/store/controls.js




function controls_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function controls_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { controls_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { controls_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _marked =
/*#__PURE__*/
external_this_regeneratorRuntime_default.a.mark(loadAssets);

/**
 * External dependencies
 */

/**
=======
const errorNotices = (state = {}, action) => {
  switch (action.type) {
    case 'SET_ERROR_NOTICE':
      return { ...state,
        [action.blockId]: {
          message: action.message,
          isFatal: action.isFatal
        }
      };

    case 'CLEAR_ERROR_NOTICE':
      return Object(external_lodash_["omit"])(state, action.blockId);
  }

  return state;
};
/* harmony default export */ var reducer = (Object(external_wp_data_["combineReducers"])({
  downloadableBlocks,
  blockManagement,
  errorNotices
}));

// EXTERNAL MODULE: external ["wp","blockEditor"]
var external_wp_blockEditor_ = __webpack_require__("axFQ");

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/store/utils/has-block-type.js
/**
 * Check if a block list contains a specific block type. Recursively searches
 * through `innerBlocks` if they exist.
 *
 * @param {Object} blockType A block object to search for.
 * @param {Object[]} blocks  The list of blocks to look through.
 *
 * @return {boolean} Whether the blockType is found.
 */
function hasBlockType(blockType, blocks = []) {
  if (!blocks.length) {
    return false;
  }

  if (blocks.some(({
    name
  }) => name === blockType.name)) {
    return true;
  }

  for (let i = 0; i < blocks.length; i++) {
    if (hasBlockType(blockType, blocks[i].innerBlocks)) {
      return true;
    }
  }

  return false;
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/store/selectors.js
/**
>>>>>>> master
 * WordPress dependencies
 */


<<<<<<< HEAD

/**
 * Calls a selector using the current state.
 *
 * @param {string} storeName    Store name.
 * @param {string} selectorName Selector name.
 * @param {Array}  args         Selector arguments.
 *
 * @return {Object} Control descriptor.
 */

function controls_select(storeName, selectorName) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  return {
    type: 'SELECT',
    storeName: storeName,
    selectorName: selectorName,
    args: args
  };
}
/**
 * Calls a dispatcher using the current state.
 *
 * @param {string} storeName      Store name.
 * @param {string} dispatcherName Dispatcher name.
 * @param {Array}  args           Selector arguments.
 *
 * @return {Object} Control descriptor.
 */

function controls_dispatch(storeName, dispatcherName) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    args[_key2 - 2] = arguments[_key2];
  }

  return {
    type: 'DISPATCH',
    storeName: storeName,
    dispatcherName: dispatcherName,
    args: args
  };
}
/**
 * Trigger an API Fetch request.
 *
 * @param {Object} request API Fetch Request Object.
 *
 * @return {Object} Control descriptor.
 */

function apiFetch(request) {
  return {
    type: 'API_FETCH',
    request: request
  };
}
/**
 * Loads JavaScript
 *
 * @param {Array}    asset   The url for the JavaScript.
 * @param {Function} onLoad  Callback function on success.
 * @param {Function} onError Callback function on failure.
 */

var loadScript = function loadScript(asset, onLoad, onError) {
  if (!asset) {
    return;
  }

  var existing = document.querySelector("script[src=\"".concat(asset.src, "\"]"));

  if (existing) {
    existing.parentNode.removeChild(existing);
  }

  var script = document.createElement('script');
  script.src = typeof asset === 'string' ? asset : asset.src;
  script.onload = onLoad;
  script.onerror = onError;
  document.body.appendChild(script);
};
/**
 * Loads CSS file.
 *
 * @param {*} asset the url for the CSS file.
 */


var loadStyle = function loadStyle(asset) {
  if (!asset) {
    return;
  }

  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = typeof asset === 'string' ? asset : asset.src;
  document.body.appendChild(link);
};
/**
 * Load the asset files for a block
 *
 * @param {Array} assets A collection of URL for the assets.
 *
 * @return {Object} Control descriptor.
 */


function loadAssets(assets) {
  return external_this_regeneratorRuntime_default.a.wrap(function loadAssets$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", {
            type: 'LOAD_ASSETS',
            assets: assets
          });

        case 1:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
var controls = {
  SELECT: Object(external_this_wp_data_["createRegistryControl"])(function (registry) {
    return function (_ref) {
      var _registry$select;

      var storeName = _ref.storeName,
          selectorName = _ref.selectorName,
          args = _ref.args;
      return (_registry$select = registry.select(storeName))[selectorName].apply(_registry$select, Object(toConsumableArray["a" /* default */])(args));
    };
  }),
  DISPATCH: Object(external_this_wp_data_["createRegistryControl"])(function (registry) {
    return function (_ref2) {
      var _registry$dispatch;

      var storeName = _ref2.storeName,
          dispatcherName = _ref2.dispatcherName,
          args = _ref2.args;
      return (_registry$dispatch = registry.dispatch(storeName))[dispatcherName].apply(_registry$dispatch, Object(toConsumableArray["a" /* default */])(args));
    };
  }),
  API_FETCH: function API_FETCH(_ref3) {
    var request = _ref3.request;
    return external_this_wp_apiFetch_default()(controls_objectSpread({}, request));
  },
  LOAD_ASSETS: function LOAD_ASSETS(_ref4) {
    var assets = _ref4.assets;
    return new Promise(function (resolve, reject) {
      if (Array.isArray(assets)) {
        var scriptsCount = 0;
        Object(external_this_lodash_["forEach"])(assets, function (asset) {
          if (asset.match(/\.js$/) !== null) {
            scriptsCount++;
            loadScript(asset, function () {
              scriptsCount--;

              if (scriptsCount === 0) {
                return resolve(scriptsCount);
              }
            }, reject);
          } else {
            loadStyle(asset);
          }
        });
      } else {
        loadScript(assets.editor_script, function () {
          return resolve(0);
        }, reject);
        loadStyle(assets.style);
      }
    });
  }
};
/* harmony default export */ var store_controls = (controls);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/store/actions.js


var actions_marked =
/*#__PURE__*/
external_this_regeneratorRuntime_default.a.mark(actions_downloadBlock),
    _marked2 =
/*#__PURE__*/
external_this_regeneratorRuntime_default.a.mark(actions_installBlock),
    _marked3 =
/*#__PURE__*/
external_this_regeneratorRuntime_default.a.mark(uninstallBlock);

/**
 * WordPress dependencies
 */

=======
>>>>>>> master
/**
 * Internal dependencies
 */


/**
<<<<<<< HEAD
 * Returns an action object used in signalling that the downloadable blocks have been requested and is loading.
=======
 * Returns true if application is requesting for downloadable blocks.
 *
 * @param {Object} state       Global application state.
 * @param {string} filterValue Search string.
 *
 * @return {boolean} Whether a request is in progress for the blocks list.
 */

function selectors_isRequestingDownloadableBlocks(state, filterValue) {
  if (!state.downloadableBlocks[filterValue] || !state.downloadableBlocks[filterValue].isRequesting) {
    return false;
  }

  return state.downloadableBlocks[filterValue].isRequesting;
}
/**
 * Returns the available uninstalled blocks.
 *
 * @param {Object} state       Global application state.
 * @param {string} filterValue Search string.
 *
 * @return {Array} Downloadable blocks.
 */

function selectors_getDownloadableBlocks(state, filterValue) {
  if (!state.downloadableBlocks[filterValue] || !state.downloadableBlocks[filterValue].results) {
    return [];
  }

  return state.downloadableBlocks[filterValue].results;
}
/**
 * Returns the block types that have been installed on the server in this
 * session.
 *
 * @param {Object} state Global application state.
 *
 * @return {Array} Block type items
 */

function getInstalledBlockTypes(state) {
  return state.blockManagement.installedBlockTypes;
}
/**
 * Returns block types that have been installed on the server and used in the
 * current post.
 *
 * @param {Object} state Global application state.
 *
 * @return {Array} Block type items.
 */

const getNewBlockTypes = Object(external_wp_data_["createRegistrySelector"])(select => state => {
  const usedBlockTree = select(external_wp_blockEditor_["store"]).getBlocks();
  const installedBlockTypes = getInstalledBlockTypes(state);
  return installedBlockTypes.filter(blockType => hasBlockType(blockType, usedBlockTree));
});
/**
 * Returns the block types that have been installed on the server but are not
 * used in the current post.
 *
 * @param {Object} state Global application state.
 *
 * @return {Array} Block type items.
 */

const getUnusedBlockTypes = Object(external_wp_data_["createRegistrySelector"])(select => state => {
  const usedBlockTree = select(external_wp_blockEditor_["store"]).getBlocks();
  const installedBlockTypes = getInstalledBlockTypes(state);
  return installedBlockTypes.filter(blockType => !hasBlockType(blockType, usedBlockTree));
});
/**
 * Returns true if a block plugin install is in progress.
 *
 * @param {Object} state   Global application state.
 * @param {string} blockId Id of the block.
 *
 * @return {boolean} Whether this block is currently being installed.
 */

function selectors_isInstalling(state, blockId) {
  return state.blockManagement.isInstalling[blockId] || false;
}
/**
 * Returns all block error notices.
 *
 * @param {Object} state Global application state.
 *
 * @return {Object} Object with error notices.
 */

function getErrorNotices(state) {
  return state.errorNotices;
}
/**
 * Returns the error notice for a given block.
 *
 * @param {Object} state   Global application state.
 * @param {string} blockId The ID of the block plugin. eg: my-block
 *
 * @return {string|boolean} The error text, or false if no error.
 */

function selectors_getErrorNoticeForBlock(state, blockId) {
  return state.errorNotices[blockId];
}

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__("l3Sj");

// EXTERNAL MODULE: external ["wp","notices"]
var external_wp_notices_ = __webpack_require__("onLe");

// EXTERNAL MODULE: external ["wp","apiFetch"]
var external_wp_apiFetch_ = __webpack_require__("ywyh");
var external_wp_apiFetch_default = /*#__PURE__*/__webpack_require__.n(external_wp_apiFetch_);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/store/controls.js
/**
 * WordPress dependencies
 */

/**
 * Load an asset for a block.
 *
 * This function returns a Promise that will resolve once the asset is loaded,
 * or in the case of Stylesheets and Inline JavaScript, will resolve immediately.
 *
 * @param {HTMLElement} el A HTML Element asset to inject.
 *
 * @return {Promise} Promise which will resolve when the asset is loaded.
 */

const loadAsset = el => {
  return new Promise((resolve, reject) => {
    /*
     * Reconstruct the passed element, this is required as inserting the Node directly
     * won't always fire the required onload events, even if the asset wasn't already loaded.
     */
    const newNode = document.createElement(el.nodeName);
    ['id', 'rel', 'src', 'href', 'type'].forEach(attr => {
      if (el[attr]) {
        newNode[attr] = el[attr];
      }
    }); // Append inline <script> contents.

    if (el.innerHTML) {
      newNode.appendChild(document.createTextNode(el.innerHTML));
    }

    newNode.onload = () => resolve(true);

    newNode.onerror = () => reject(new Error('Error loading asset.'));

    document.body.appendChild(newNode); // Resolve Stylesheets and Inline JavaScript immediately.

    if ('link' === newNode.nodeName.toLowerCase() || 'script' === newNode.nodeName.toLowerCase() && !newNode.src) {
      resolve();
    }
  });
};
/**
 * Load the asset files for a block
 *
 * @param {Array} assets A collection of URLs for the assets.
 *
 * @return {Object} Control descriptor.
 */

function loadAssets(assets) {
  return {
    type: 'LOAD_ASSETS',
    assets
  };
}
const controls = {
  async LOAD_ASSETS() {
    /*
     * Fetch the current URL (post-new.php, or post.php?post=1&action=edit) and compare the
     * JavaScript and CSS assets loaded between the pages. This imports the required assets
     * for the block into the current page while not requiring that we know them up-front.
     * In the future this can be improved by reliance upon block.json and/or a script-loader
     * dependency API.
     */
    const response = await external_wp_apiFetch_default()({
      url: document.location.href,
      parse: false
    });
    const data = await response.text();
    const doc = new window.DOMParser().parseFromString(data, 'text/html');
    const newAssets = Array.from(doc.querySelectorAll('link[rel="stylesheet"],script')).filter(asset => asset.id && !document.getElementById(asset.id));
    /*
     * Load each asset in order, as they may depend upon an earlier loaded script.
     * Stylesheets and Inline Scripts will resolve immediately upon insertion.
     */

    for (const newAsset of newAssets) {
      await loadAsset(newAsset);
    }
  }

};
/* harmony default export */ var store_controls = (controls);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/store/utils/get-plugin-url.js
/**
 * Get the plugin's direct API link out of a block-directory response.
 *
 * @param {Object} block The block object
 *
 * @return {string} The plugin URL, if exists.
 */
function getPluginUrl(block) {
  if (!block) {
    return false;
  }

  const link = block.links['wp:plugin'] || block.links.self;

  if (link && link.length) {
    return link[0].href;
  }

  return false;
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/store/actions.js
/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */



/**
 * Returns an action object used in signalling that the downloadable blocks
 * have been requested and are loading.
 *
 * @param {string} filterValue Search string.
>>>>>>> master
 *
 * @return {Object} Action object.
 */

<<<<<<< HEAD
function fetchDownloadableBlocks() {
  return {
    type: 'FETCH_DOWNLOADABLE_BLOCKS'
  };
}
/**
 * Returns an action object used in signalling that the downloadable blocks have been updated.
 *
 * @param {Array} downloadableBlocks Downloadable blocks.
 * @param {string} filterValue Search string.
=======
function fetchDownloadableBlocks(filterValue) {
  return {
    type: 'FETCH_DOWNLOADABLE_BLOCKS',
    filterValue
  };
}
/**
 * Returns an action object used in signalling that the downloadable blocks
 * have been updated.
 *
 * @param {Array}  downloadableBlocks Downloadable blocks.
 * @param {string} filterValue        Search string.
>>>>>>> master
 *
 * @return {Object} Action object.
 */

function receiveDownloadableBlocks(downloadableBlocks, filterValue) {
  return {
    type: 'RECEIVE_DOWNLOADABLE_BLOCKS',
<<<<<<< HEAD
    downloadableBlocks: downloadableBlocks,
    filterValue: filterValue
  };
}
/**
 * Returns an action object used in signalling that the user does not have permission to install blocks.
 *
 @param {boolean} hasPermission User has permission to install blocks.
 *
 * @return {Object} Action object.
 */

function setInstallBlocksPermission(hasPermission) {
  return {
    type: 'SET_INSTALL_BLOCKS_PERMISSION',
    hasPermission: hasPermission
  };
}
/**
 * Action triggered to download block assets.
 *
 * @param {Object} item The selected block item
 * @param {Function} onSuccess The callback function when the action has succeeded.
 * @param {Function} onError The callback function when the action has failed.
 */

function actions_downloadBlock(item, onSuccess, onError) {
  var registeredBlocks;
  return external_this_regeneratorRuntime_default.a.wrap(function downloadBlock$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;

          if (item.assets.length) {
            _context.next = 3;
            break;
          }

          throw new Error('Block has no assets');

        case 3:
          _context.next = 5;
          return loadAssets(item.assets);

        case 5:
          registeredBlocks = Object(external_this_wp_blocks_["getBlockTypes"])();

          if (!registeredBlocks.length) {
            _context.next = 10;
            break;
          }

          onSuccess(item);
          _context.next = 11;
          break;

        case 10:
          throw new Error('Unable to get block types');

        case 11:
          _context.next = 17;
          break;

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](0);
          _context.next = 17;
          return onError(_context.t0);

        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, actions_marked, null, [[0, 13]]);
}
/**
 * Action triggered to install a block plugin.
 *
 * @param {string} item The block item returned by search.
 * @param {Function} onSuccess The callback function when the action has succeeded.
 * @param {Function} onError The callback function when the action has failed.
 *
 */

function actions_installBlock(_ref, onSuccess, onError) {
  var id, name, response;
  return external_this_regeneratorRuntime_default.a.wrap(function installBlock$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          id = _ref.id, name = _ref.name;
          _context2.prev = 1;
          _context2.next = 4;
          return apiFetch({
            path: '__experimental/block-directory/install',
            data: {
              slug: id
            },
            method: 'POST'
          });

        case 4:
          response = _context2.sent;

          if (!(response.success === false)) {
            _context2.next = 7;
            break;
          }

          throw new Error(response.errorMessage);

        case 7:
          _context2.next = 9;
          return addInstalledBlockType({
            id: id,
            name: name
          });

        case 9:
          onSuccess();
          _context2.next = 15;
          break;

        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](1);
          onError(_context2.t0);

        case 15:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[1, 12]]);
=======
    downloadableBlocks,
    filterValue
  };
}
/**
 * Action triggered to install a block plugin.
 *
 * @param {Object} block The block item returned by search.
 *
 * @return {boolean} Whether the block was successfully installed & loaded.
 */

function* actions_installBlockType(block) {
  const {
    id,
    assets
  } = block;
  let success = false;
  yield clearErrorNotice(id);

  try {
    yield setIsInstalling(block.id, true); // If we have a wp:plugin link, the plugin is installed but inactive.

    const url = getPluginUrl(block);
    let links = {};

    if (url) {
      yield Object(external_wp_dataControls_["apiFetch"])({
        url,
        data: {
          status: 'active'
        },
        method: 'PUT'
      });
    } else {
      const response = yield Object(external_wp_dataControls_["apiFetch"])({
        path: 'wp/v2/plugins',
        data: {
          slug: block.id,
          status: 'active'
        },
        method: 'POST'
      }); // Add the `self` link for newly-installed blocks.

      links = response._links;
    }

    yield addInstalledBlockType({ ...block,
      links: { ...block.links,
        ...links
      }
    });
    yield loadAssets(assets);
    const registeredBlocks = yield external_wp_data_["controls"].select(external_wp_blocks_["store"].name, 'getBlockTypes');

    if (!registeredBlocks.some(i => i.name === block.name)) {
      throw new Error(Object(external_wp_i18n_["__"])('Error registering block. Try reloading the page.'));
    }

    yield external_wp_data_["controls"].dispatch(external_wp_notices_["store"], 'createInfoNotice', Object(external_wp_i18n_["sprintf"])( // translators: %s is the block title.
    Object(external_wp_i18n_["__"])('Block %s installed and added.'), block.title), {
      speak: true,
      type: 'snackbar'
    });
    success = true;
  } catch (error) {
    let message = error.message || Object(external_wp_i18n_["__"])('An error occurred.'); // Errors we throw are fatal


    let isFatal = error instanceof Error; // Specific API errors that are fatal

    const fatalAPIErrors = {
      folder_exists: Object(external_wp_i18n_["__"])('This block is already installed. Try reloading the page.'),
      unable_to_connect_to_filesystem: Object(external_wp_i18n_["__"])('Error installing block. You can reload the page and try again.')
    };

    if (fatalAPIErrors[error.code]) {
      isFatal = true;
      message = fatalAPIErrors[error.code];
    }

    yield setErrorNotice(id, message, isFatal);
    yield external_wp_data_["controls"].dispatch(external_wp_notices_["store"], 'createErrorNotice', message, {
      speak: true,
      isDismissible: true
    });
  }

  yield setIsInstalling(block.id, false);
  return success;
>>>>>>> master
}
/**
 * Action triggered to uninstall a block plugin.
 *
<<<<<<< HEAD
 * @param {string} item The block item returned by search.
 * @param {Function} onSuccess The callback function when the action has succeeded.
 * @param {Function} onError The callback function when the action has failed.
 *
 */

function uninstallBlock(_ref2, onSuccess, onError) {
  var id, name, response;
  return external_this_regeneratorRuntime_default.a.wrap(function uninstallBlock$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          id = _ref2.id, name = _ref2.name;
          _context3.prev = 1;
          _context3.next = 4;
          return apiFetch({
            path: '__experimental/block-directory/uninstall',
            data: {
              slug: id
            },
            method: 'DELETE'
          });

        case 4:
          response = _context3.sent;

          if (!(response.success === false)) {
            _context3.next = 7;
            break;
          }

          throw new Error(response.errorMessage);

        case 7:
          _context3.next = 9;
          return removeInstalledBlockType({
            id: id,
            name: name
          });

        case 9:
          onSuccess();
          _context3.next = 15;
          break;

        case 12:
          _context3.prev = 12;
          _context3.t0 = _context3["catch"](1);
          onError(_context3.t0);

        case 15:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[1, 12]]);
}
/**
 * Returns an action object used to add a newly installed block type.
 *
 * @param {string} item The block item with the block id and name.
=======
 * @param {Object} block The blockType object.
 */

function* actions_uninstallBlockType(block) {
  try {
    yield Object(external_wp_dataControls_["apiFetch"])({
      url: getPluginUrl(block),
      data: {
        status: 'inactive'
      },
      method: 'PUT'
    });
    yield Object(external_wp_dataControls_["apiFetch"])({
      url: getPluginUrl(block),
      method: 'DELETE'
    });
    yield removeInstalledBlockType(block);
  } catch (error) {
    yield external_wp_data_["controls"].dispatch(external_wp_notices_["store"], 'createErrorNotice', error.message || Object(external_wp_i18n_["__"])('An error occurred.'));
  }
}
/**
 * Returns an action object used to add a block type to the "newly installed"
 * tracking list.
 *
 * @param {Object} item The block item with the block id and name.
>>>>>>> master
 *
 * @return {Object} Action object.
 */

function addInstalledBlockType(item) {
  return {
    type: 'ADD_INSTALLED_BLOCK_TYPE',
<<<<<<< HEAD
    item: item
  };
}
/**
 * Returns an action object used to remove a newly installed block type.
=======
    item
  };
}
/**
 * Returns an action object used to remove a block type from the "newly installed"
 * tracking list.
>>>>>>> master
 *
 * @param {string} item The block item with the block id and name.
 *
 * @return {Object} Action object.
 */

function removeInstalledBlockType(item) {
  return {
    type: 'REMOVE_INSTALLED_BLOCK_TYPE',
<<<<<<< HEAD
    item: item
=======
    item
  };
}
/**
 * Returns an action object used to indicate install in progress.
 *
 * @param {string} blockId
 * @param {boolean} isInstalling
 *
 * @return {Object} Action object.
 */

function setIsInstalling(blockId, isInstalling) {
  return {
    type: 'SET_INSTALLING_BLOCK',
    blockId,
    isInstalling
  };
}
/**
 * Sets an error notice to be displayed to the user for a given block.
 *
 * @param {string} blockId  The ID of the block plugin. eg: my-block
 * @param {string} message  The message shown in the notice.
 * @param {boolean} isFatal Whether the user can recover from the error.
 *
 * @return {Object} Action object.
 */

function setErrorNotice(blockId, message, isFatal = false) {
  return {
    type: 'SET_ERROR_NOTICE',
    blockId,
    message,
    isFatal
  };
}
/**
 * Sets the error notice to empty for specific block.
 *
 * @param {string} blockId The ID of the block plugin. eg: my-block
 *
 * @return {Object} Action object.
 */

function clearErrorNotice(blockId) {
  return {
    type: 'CLEAR_ERROR_NOTICE',
    blockId
>>>>>>> master
  };
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/store/resolvers.js
<<<<<<< HEAD


=======
>>>>>>> master
/**
 * External dependencies
 */

/**
<<<<<<< HEAD
=======
 * WordPress dependencies
 */


/**
>>>>>>> master
 * Internal dependencies
 */


<<<<<<< HEAD

/* harmony default export */ var resolvers = ({
  getDownloadableBlocks:
  /*#__PURE__*/
  external_this_regeneratorRuntime_default.a.mark(function getDownloadableBlocks(filterValue) {
    var results, blocks;
    return external_this_regeneratorRuntime_default.a.wrap(function getDownloadableBlocks$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (filterValue) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return");

          case 2:
            _context.prev = 2;
            _context.next = 5;
            return fetchDownloadableBlocks(filterValue);

          case 5:
            _context.next = 7;
            return apiFetch({
              path: "__experimental/block-directory/search?term=".concat(filterValue)
            });

          case 7:
            results = _context.sent;
            blocks = results.map(function (result) {
              return Object(external_this_lodash_["mapKeys"])(result, function (value, key) {
                return Object(external_this_lodash_["camelCase"])(key);
              });
            });
            _context.next = 11;
            return receiveDownloadableBlocks(blocks, filterValue);

          case 11:
            _context.next = 18;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](2);

            if (!(_context.t0.code === 'rest_user_cannot_view')) {
              _context.next = 18;
              break;
            }

            _context.next = 18;
            return setInstallBlocksPermission(false);

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, getDownloadableBlocks, null, [[2, 13]]);
  }),
  hasInstallBlocksPermission:
  /*#__PURE__*/
  external_this_regeneratorRuntime_default.a.mark(function hasInstallBlocksPermission() {
    return external_this_regeneratorRuntime_default.a.wrap(function hasInstallBlocksPermission$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return apiFetch({
              path: "__experimental/block-directory/search?term="
            });

          case 3:
            _context2.next = 5;
            return setInstallBlocksPermission(true);

          case 5:
            _context2.next = 12;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);

            if (!(_context2.t0.code === 'rest_user_cannot_view')) {
              _context2.next = 12;
              break;
            }

            _context2.next = 12;
            return setInstallBlocksPermission(false);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, hasInstallBlocksPermission, null, [[0, 7]]);
  })
=======
/* harmony default export */ var resolvers = ({
  *getDownloadableBlocks(filterValue) {
    if (!filterValue) {
      return;
    }

    try {
      yield fetchDownloadableBlocks(filterValue);
      const results = yield Object(external_wp_dataControls_["apiFetch"])({
        path: `wp/v2/block-directory/search?term=${filterValue}`
      });
      const blocks = results.map(result => Object(external_lodash_["mapKeys"])(result, (value, key) => {
        return Object(external_lodash_["camelCase"])(key);
      }));
      yield receiveDownloadableBlocks(blocks, filterValue);
    } catch (error) {}
  }

>>>>>>> master
});

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/store/index.js
/**
 * WordPress dependencies
 */

<<<<<<< HEAD
=======

>>>>>>> master
/**
 * Internal dependencies
 */






/**
 * Module Constants
 */

<<<<<<< HEAD
var MODULE_KEY = 'core/block-directory';
/**
 * Block editor data store configuration.
 *
 * @see https://github.com/WordPress/gutenberg/blob/master/packages/data/README.md#registerStore
=======
const STORE_NAME = 'core/block-directory';
/**
 * Block editor data store configuration.
 *
 * @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/data/README.md#registerStore
>>>>>>> master
 *
 * @type {Object}
 */

<<<<<<< HEAD
var storeConfig = {
  reducer: reducer,
  selectors: selectors_namespaceObject,
  actions: actions_namespaceObject,
  controls: store_controls,
  resolvers: resolvers
};
var store = Object(external_this_wp_data_["registerStore"])(MODULE_KEY, storeConfig);
/* harmony default export */ var build_module_store = (store);

// EXTERNAL MODULE: external {"this":["wp","element"]}
var external_this_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: external {"this":["wp","plugins"]}
var external_this_wp_plugins_ = __webpack_require__(55);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(20);

// EXTERNAL MODULE: external {"this":["wp","blockEditor"]}
var external_this_wp_blockEditor_ = __webpack_require__(6);

// EXTERNAL MODULE: external {"this":["wp","compose"]}
var external_this_wp_compose_ = __webpack_require__(8);

// EXTERNAL MODULE: external {"this":["wp","i18n"]}
var external_this_wp_i18n_ = __webpack_require__(1);

// EXTERNAL MODULE: external {"this":["wp","components"]}
var external_this_wp_components_ = __webpack_require__(3);
=======
const storeConfig = {
  reducer: reducer,
  selectors: selectors_namespaceObject,
  actions: actions_namespaceObject,
  controls: { ...external_wp_dataControls_["controls"],
    ...store_controls
  },
  resolvers: resolvers
};
/**
 * Store definition for the block directory namespace.
 *
 * @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/data/README.md#createReduxStore
 *
 * @type {Object}
 */

const store = Object(external_wp_data_["createReduxStore"])(STORE_NAME, storeConfig);
Object(external_wp_data_["register"])(store);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/components/auto-block-uninstaller/index.js
/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


function AutoBlockUninstaller() {
  const {
    uninstallBlockType
  } = Object(external_wp_data_["useDispatch"])(store);
  const shouldRemoveBlockTypes = Object(external_wp_data_["useSelect"])(select => {
    const {
      isAutosavingPost,
      isSavingPost
    } = select(external_wp_editor_["store"]);
    return isSavingPost() && !isAutosavingPost();
  }, []);
  const unusedBlockTypes = Object(external_wp_data_["useSelect"])(select => select(store).getUnusedBlockTypes(), []);
  Object(external_wp_element_["useEffect"])(() => {
    if (shouldRemoveBlockTypes && unusedBlockTypes.length) {
      unusedBlockTypes.forEach(blockType => {
        uninstallBlockType(blockType);
        Object(external_wp_blocks_["unregisterBlockType"])(blockType.name);
      });
    }
  }, [shouldRemoveBlockTypes]);
  return null;
}

// EXTERNAL MODULE: external ["wp","components"]
var external_wp_components_ = __webpack_require__("tI+e");

// EXTERNAL MODULE: external ["wp","compose"]
var external_wp_compose_ = __webpack_require__("K9lf");

// EXTERNAL MODULE: external ["wp","coreData"]
var external_wp_coreData_ = __webpack_require__("jZUy");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("wx14");

// EXTERNAL MODULE: external ["wp","htmlEntities"]
var external_wp_htmlEntities_ = __webpack_require__("rmEH");

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/icon/index.js
var build_module_icon = __webpack_require__("iClF");

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/star-filled.js
var star_filled = __webpack_require__("URob");

// EXTERNAL MODULE: external ["wp","primitives"]
var external_wp_primitives_ = __webpack_require__("Tqx9");

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/star-half.js


/**
 * WordPress dependencies
 */

const starHalf = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M9.518 8.783a.25.25 0 00.188-.137l2.069-4.192a.25.25 0 01.448 0l2.07 4.192a.25.25 0 00.187.137l4.626.672a.25.25 0 01.139.427l-3.347 3.262a.25.25 0 00-.072.222l.79 4.607a.25.25 0 01-.363.264l-4.137-2.176a.25.25 0 00-.233 0l-4.138 2.175a.25.25 0 01-.362-.263l.79-4.607a.25.25 0 00-.072-.222L4.753 9.882a.25.25 0 01.14-.427l4.625-.672zM12 14.533c.28 0 .559.067.814.2l1.895.997-.362-2.11a1.75 1.75 0 01.504-1.55l1.533-1.495-2.12-.308a1.75 1.75 0 01-1.317-.957L12 7.39v7.143z"
}));
/* harmony default export */ var star_half = (starHalf);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/star-empty.js
var star_empty = __webpack_require__("Xxwi");
>>>>>>> master

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/components/block-ratings/stars.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




<<<<<<< HEAD
function Stars(_ref) {
  var rating = _ref.rating;
  var stars = Math.round(rating / 0.5) * 0.5;
  var fullStarCount = Math.floor(rating);
  var halfStarCount = Math.ceil(rating - fullStarCount);
  var emptyStarCount = 5 - (fullStarCount + halfStarCount);
  return Object(external_this_wp_element_["createElement"])("div", {
    "aria-label": Object(external_this_wp_i18n_["sprintf"])(Object(external_this_wp_i18n_["__"])('%s out of 5 stars'), stars)
  }, Object(external_this_lodash_["times"])(fullStarCount, function (i) {
    return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Icon"], {
      key: "full_stars_".concat(i),
      icon: "star-filled",
      size: 16
    });
  }), Object(external_this_lodash_["times"])(halfStarCount, function (i) {
    return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Icon"], {
      key: "half_stars_".concat(i),
      icon: "star-half",
      size: 16
    });
  }), Object(external_this_lodash_["times"])(emptyStarCount, function (i) {
    return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Icon"], {
      key: "empty_stars_".concat(i),
      icon: "star-empty",
      size: 16
    });
  }));
=======
function Stars({
  rating
}) {
  const stars = Math.round(rating / 0.5) * 0.5;
  const fullStarCount = Math.floor(rating);
  const halfStarCount = Math.ceil(rating - fullStarCount);
  const emptyStarCount = 5 - (fullStarCount + halfStarCount);
  return Object(external_wp_element_["createElement"])("span", {
    "aria-label": Object(external_wp_i18n_["sprintf"])(
    /* translators: %s: number of stars. */
    Object(external_wp_i18n_["__"])('%s out of 5 stars'), stars)
  }, Object(external_lodash_["times"])(fullStarCount, i => Object(external_wp_element_["createElement"])(build_module_icon["a" /* default */], {
    key: `full_stars_${i}`,
    className: "block-directory-block-ratings__star-full",
    icon: star_filled["a" /* default */],
    size: 16
  })), Object(external_lodash_["times"])(halfStarCount, i => Object(external_wp_element_["createElement"])(build_module_icon["a" /* default */], {
    key: `half_stars_${i}`,
    className: "block-directory-block-ratings__star-half-full",
    icon: star_half,
    size: 16
  })), Object(external_lodash_["times"])(emptyStarCount, i => Object(external_wp_element_["createElement"])(build_module_icon["a" /* default */], {
    key: `empty_stars_${i}`,
    className: "block-directory-block-ratings__star-empty",
    icon: star_empty["a" /* default */],
    size: 16
  })));
>>>>>>> master
}

/* harmony default export */ var block_ratings_stars = (Stars);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/components/block-ratings/index.js


/**
<<<<<<< HEAD
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


var block_ratings_BlockRatings = function BlockRatings(_ref) {
  var rating = _ref.rating,
      ratingCount = _ref.ratingCount;
  return Object(external_this_wp_element_["createElement"])("div", {
    className: "block-directory-block-ratings"
  }, Object(external_this_wp_element_["createElement"])(block_ratings_stars, {
    rating: rating
  }), Object(external_this_wp_element_["createElement"])("span", {
    className: "block-directory-block-ratings__rating-count",
    "aria-label": // translators: %d: number of ratings (number).
    Object(external_this_wp_i18n_["sprintf"])(Object(external_this_wp_i18n_["_n"])('%d total rating', '%d total ratings', ratingCount), ratingCount)
  }, "(", ratingCount, ")"));
};
/* harmony default export */ var block_ratings = (block_ratings_BlockRatings);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/components/downloadable-block-header/index.js
=======
 * Internal dependencies
 */

const BlockRatings = ({
  rating
}) => Object(external_wp_element_["createElement"])("span", {
  className: "block-directory-block-ratings"
}, Object(external_wp_element_["createElement"])(block_ratings_stars, {
  rating: rating
}));
/* harmony default export */ var block_ratings = (BlockRatings);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/components/downloadable-block-icon/index.js
>>>>>>> master


/**
 * WordPress dependencies
 */


<<<<<<< HEAD
/**
 * Internal dependencies
 */




function DownloadableBlockHeader(_ref) {
  var icon = _ref.icon,
      title = _ref.title,
      rating = _ref.rating,
      ratingCount = _ref.ratingCount,
      _onClick = _ref.onClick;
  return Object(external_this_wp_element_["createElement"])("div", {
    className: "block-directory-downloadable-block-header__row"
  }, icon.match(/\.(jpeg|jpg|gif|png)(?:\?.*)?$/) !== null ? // translators: %s: Name of the plugin e.g: "Akismet".
  Object(external_this_wp_element_["createElement"])("img", {
    src: icon,
    alt: Object(external_this_wp_i18n_["sprintf"])(Object(external_this_wp_i18n_["__"])('%s block icon'), title)
  }) : Object(external_this_wp_element_["createElement"])("span", null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockIcon"], {
    icon: icon,
    showColors: true
  })), Object(external_this_wp_element_["createElement"])("div", {
    className: "block-directory-downloadable-block-header__column"
  }, Object(external_this_wp_element_["createElement"])("span", {
    role: "heading",
    className: "block-directory-downloadable-block-header__title"
  }, title), Object(external_this_wp_element_["createElement"])(block_ratings, {
    rating: rating,
    ratingCount: ratingCount
  })), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
    isDefault: true,
    onClick: function onClick(event) {
      event.preventDefault();

      _onClick();
    }
  }, Object(external_this_wp_i18n_["__"])('Add block')));
}

/* harmony default export */ var downloadable_block_header = (DownloadableBlockHeader);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/components/downloadable-block-author-info/index.js
=======
function DownloadableBlockIcon({
  icon
}) {
  const className = 'block-directory-downloadable-block-icon';
  return icon.match(/\.(jpeg|jpg|gif|png|svg)(?:\?.*)?$/) !== null ? Object(external_wp_element_["createElement"])("img", {
    className: className,
    src: icon,
    alt: ""
  }) : Object(external_wp_element_["createElement"])(external_wp_blockEditor_["BlockIcon"], {
    className: className,
    icon: icon,
    showColors: true
  });
}

/* harmony default export */ var downloadable_block_icon = (DownloadableBlockIcon);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/components/downloadable-block-notice/index.js
>>>>>>> master


/**
 * WordPress dependencies
 */


<<<<<<< HEAD

function DownloadableBlockAuthorInfo(_ref) {
  var author = _ref.author,
      authorBlockCount = _ref.authorBlockCount,
      authorBlockRating = _ref.authorBlockRating;
  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])("span", {
    className: "block-directory-downloadable-block-author-info__content-author"
  }, Object(external_this_wp_i18n_["sprintf"])(Object(external_this_wp_i18n_["__"])('Authored by %s'), author)), Object(external_this_wp_element_["createElement"])("span", {
    className: "block-directory-downloadable-block-author-info__content"
  }, Object(external_this_wp_i18n_["sprintf"])(Object(external_this_wp_i18n_["_n"])('This author has %d block, with an average rating of %d.', 'This author has %d blocks, with an average rating of %d.', authorBlockCount), authorBlockCount, authorBlockRating)));
}

/* harmony default export */ var downloadable_block_author_info = (DownloadableBlockAuthorInfo);

// EXTERNAL MODULE: external {"this":["wp","primitives"]}
var external_this_wp_primitives_ = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/update.js


/**
 * WordPress dependencies
 */

var update = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M10.2 3.28c3.53 0 6.43 2.61 6.92 6h2.08l-3.5 4-3.5-4h2.32c-.45-1.97-2.21-3.45-4.32-3.45-1.45 0-2.73.71-3.54 1.78L4.95 5.66C6.23 4.2 8.11 3.28 10.2 3.28zm-.4 13.44c-3.52 0-6.43-2.61-6.92-6H.8l3.5-4c1.17 1.33 2.33 2.67 3.5 4H5.48c.45 1.97 2.21 3.45 4.32 3.45 1.45 0 2.73-.71 3.54-1.78l1.71 1.95c-1.28 1.46-3.15 2.38-5.25 2.38z"
}));
/* harmony default export */ var library_update = (update);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/components/downloadable-block-info/index.js


/**
 * WordPress dependencies
 */





function DownloadableBlockInfo(_ref) {
  var description = _ref.description,
      activeInstalls = _ref.activeInstalls,
      humanizedUpdated = _ref.humanizedUpdated;
  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])("p", {
    className: "block-directory-downloadable-block-info__content"
  }, description), Object(external_this_wp_element_["createElement"])("div", {
    className: "block-directory-downloadable-block-info__row"
  }, Object(external_this_wp_element_["createElement"])("div", {
    className: "block-directory-downloadable-block-info__column"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Icon"], {
    icon: "chart-line"
  }), Object(external_this_wp_i18n_["sprintf"])(Object(external_this_wp_i18n_["_n"])('%d active installation', '%d active installations', activeInstalls), activeInstalls)), Object(external_this_wp_element_["createElement"])("div", {
    className: "block-directory-downloadable-block-info__column"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Icon"], {
    icon: library_update
  }), // translators: %s: Humanized date of last update e.g: "2 months ago".
  Object(external_this_wp_i18n_["sprintf"])(Object(external_this_wp_i18n_["__"])('Updated %s'), humanizedUpdated))));
}

/* harmony default export */ var downloadable_block_info = (DownloadableBlockInfo);
=======
/**
 * Internal dependencies
 */


const DownloadableBlockNotice = ({
  block
}) => {
  const errorNotice = Object(external_wp_data_["useSelect"])(select => select(store).getErrorNoticeForBlock(block.id), [block]);

  if (!errorNotice) {
    return null;
  }

  return Object(external_wp_element_["createElement"])("div", {
    className: "block-directory-downloadable-block-notice"
  }, Object(external_wp_element_["createElement"])("div", {
    className: "block-directory-downloadable-block-notice__content"
  }, errorNotice.message, errorNotice.isFatal ? ' ' + Object(external_wp_i18n_["__"])('Try reloading the page.') : null));
};
/* harmony default export */ var downloadable_block_notice = (DownloadableBlockNotice);
>>>>>>> master

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/components/downloadable-block-list-item/index.js


<<<<<<< HEAD
=======

/**
 * WordPress dependencies
 */






>>>>>>> master
/**
 * Internal dependencies
 */




<<<<<<< HEAD
function DownloadableBlockListItem(_ref) {
  var item = _ref.item,
      onClick = _ref.onClick;
  var icon = item.icon,
      title = item.title,
      description = item.description,
      rating = item.rating,
      activeInstalls = item.activeInstalls,
      ratingCount = item.ratingCount,
      author = item.author,
      humanizedUpdated = item.humanizedUpdated,
      authorBlockCount = item.authorBlockCount,
      authorBlockRating = item.authorBlockRating;
  return Object(external_this_wp_element_["createElement"])("li", {
    className: "block-directory-downloadable-block-list-item"
  }, Object(external_this_wp_element_["createElement"])("article", {
    className: "block-directory-downloadable-block-list-item__panel"
  }, Object(external_this_wp_element_["createElement"])("header", {
    className: "block-directory-downloadable-block-list-item__header"
  }, Object(external_this_wp_element_["createElement"])(downloadable_block_header, {
    icon: icon,
    onClick: onClick,
    title: title,
    rating: rating,
    ratingCount: ratingCount
  })), Object(external_this_wp_element_["createElement"])("section", {
    className: "block-directory-downloadable-block-list-item__body"
  }, Object(external_this_wp_element_["createElement"])(downloadable_block_info, {
    activeInstalls: activeInstalls,
    description: description,
    humanizedUpdated: humanizedUpdated
  })), Object(external_this_wp_element_["createElement"])("footer", {
    className: "block-directory-downloadable-block-list-item__footer"
  }, Object(external_this_wp_element_["createElement"])(downloadable_block_author_info, {
    author: author,
    authorBlockCount: authorBlockCount,
    authorBlockRating: authorBlockRating
  }))));
=======
 // Return the appropriate block item label, given the block data and status.

function getDownloadableBlockLabel({
  title,
  rating,
  ratingCount
}, {
  hasNotice,
  isInstalled,
  isInstalling
}) {
  const stars = Math.round(rating / 0.5) * 0.5;

  if (!isInstalled && hasNotice) {
    /* translators: %1$s: block title */
    return Object(external_wp_i18n_["sprintf"])('Retry installing %s.', Object(external_wp_htmlEntities_["decodeEntities"])(title));
  }

  if (isInstalled) {
    /* translators: %1$s: block title */
    return Object(external_wp_i18n_["sprintf"])('Add %s.', Object(external_wp_htmlEntities_["decodeEntities"])(title));
  }

  if (isInstalling) {
    /* translators: %1$s: block title */
    return Object(external_wp_i18n_["sprintf"])('Installing %s.', Object(external_wp_htmlEntities_["decodeEntities"])(title));
  } // No ratings yet, just use the title.


  if (ratingCount < 1) {
    /* translators: %1$s: block title */
    return Object(external_wp_i18n_["sprintf"])('Install %s.', Object(external_wp_htmlEntities_["decodeEntities"])(title));
  }

  return Object(external_wp_i18n_["sprintf"])(
  /* translators: %1$s: block title, %2$s: average rating, %3$s: total ratings count. */
  Object(external_wp_i18n_["_n"])('Install %1$s. %2$s stars with %3$s review.', 'Install %1$s. %2$s stars with %3$s reviews.', ratingCount), Object(external_wp_htmlEntities_["decodeEntities"])(title), stars, ratingCount);
}

function DownloadableBlockListItem({
  composite,
  item,
  onClick
}) {
  const {
    author,
    description,
    icon,
    rating,
    title
  } = item; // getBlockType returns a block object if this block exists, or null if not.

  const isInstalled = !!Object(external_wp_blocks_["getBlockType"])(item.name);
  const {
    hasNotice,
    isInstalling,
    isInstallable
  } = Object(external_wp_data_["useSelect"])(select => {
    const {
      getErrorNoticeForBlock,
      isInstalling: isBlockInstalling
    } = select(store);
    const notice = getErrorNoticeForBlock(item.id);
    const hasFatal = notice && notice.isFatal;
    return {
      hasNotice: !!notice,
      isInstalling: isBlockInstalling(item.id),
      isInstallable: !hasFatal
    };
  }, [item]);
  let statusText = '';

  if (isInstalled) {
    statusText = Object(external_wp_i18n_["__"])('Installed!');
  } else if (isInstalling) {
    statusText = Object(external_wp_i18n_["__"])('Installing…');
  }

  return Object(external_wp_element_["createElement"])(external_wp_components_["__unstableCompositeItem"], Object(esm_extends["a" /* default */])({
    role: "option",
    as: external_wp_components_["Button"]
  }, composite, {
    className: "block-directory-downloadable-block-list-item",
    onClick: event => {
      event.preventDefault();
      onClick();
    },
    isBusy: isInstalling,
    disabled: isInstalling || !isInstallable,
    label: getDownloadableBlockLabel(item, {
      hasNotice,
      isInstalled,
      isInstalling
    }),
    showTooltip: true,
    tooltipPosition: "top center"
  }), Object(external_wp_element_["createElement"])("div", {
    className: "block-directory-downloadable-block-list-item__icon"
  }, Object(external_wp_element_["createElement"])(downloadable_block_icon, {
    icon: icon,
    title: title
  }), isInstalling ? Object(external_wp_element_["createElement"])("span", {
    className: "block-directory-downloadable-block-list-item__spinner"
  }, Object(external_wp_element_["createElement"])(external_wp_components_["Spinner"], null)) : Object(external_wp_element_["createElement"])(block_ratings, {
    rating: rating
  })), Object(external_wp_element_["createElement"])("span", {
    className: "block-directory-downloadable-block-list-item__details"
  }, Object(external_wp_element_["createElement"])("span", {
    className: "block-directory-downloadable-block-list-item__title"
  }, Object(external_wp_element_["createInterpolateElement"])(Object(external_wp_i18n_["sprintf"])(
  /* translators: %1$s: block title, %2$s: author name. */
  Object(external_wp_i18n_["__"])('%1$s <span>by %2$s</span>'), Object(external_wp_htmlEntities_["decodeEntities"])(title), author), {
    span: Object(external_wp_element_["createElement"])("span", {
      className: "block-directory-downloadable-block-list-item__author"
    })
  })), hasNotice ? Object(external_wp_element_["createElement"])(downloadable_block_notice, {
    block: item
  }) : Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])("span", {
    className: "block-directory-downloadable-block-list-item__desc"
  }, !!statusText ? statusText : Object(external_wp_htmlEntities_["decodeEntities"])(description)), isInstallable && !(isInstalled || isInstalling) && Object(external_wp_element_["createElement"])(external_wp_components_["VisuallyHidden"], null, Object(external_wp_i18n_["__"])('Install block')))));
>>>>>>> master
}

/* harmony default export */ var downloadable_block_list_item = (DownloadableBlockListItem);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/components/downloadable-blocks-list/index.js


<<<<<<< HEAD
=======

>>>>>>> master
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
var DOWNLOAD_ERROR_NOTICE_ID = 'block-download-error';
var INSTALL_ERROR_NOTICE_ID = 'block-install-error';

function DownloadableBlocksList(_ref) {
  var items = _ref.items,
      _ref$onHover = _ref.onHover,
      onHover = _ref$onHover === void 0 ? external_this_lodash_["noop"] : _ref$onHover,
      children = _ref.children,
      downloadAndInstallBlock = _ref.downloadAndInstallBlock;
  return (
    /*
     * Disable reason: The `list` ARIA role is redundant but
     * Safari+VoiceOver won't announce the list otherwise.
     */

    /* eslint-disable jsx-a11y/no-redundant-roles */
    Object(external_this_wp_element_["createElement"])("ul", {
      role: "list",
      className: "block-directory-downloadable-blocks-list"
    }, items && items.map(function (item) {
      return Object(external_this_wp_element_["createElement"])(downloadable_block_list_item, {
        key: item.id,
        className: Object(external_this_wp_blocks_["getBlockMenuDefaultClassName"])(item.id),
        icons: item.icons,
        onClick: function onClick() {
          downloadAndInstallBlock(item);
          onHover(null);
        },
        onFocus: function onFocus() {
          return onHover(item);
        },
        onMouseEnter: function onMouseEnter() {
          return onHover(item);
        },
        onMouseLeave: function onMouseLeave() {
          return onHover(null);
        },
        onBlur: function onBlur() {
          return onHover(null);
        },
        item: item
      });
    }), children)
    /* eslint-enable jsx-a11y/no-redundant-roles */

  );
}

/* harmony default export */ var downloadable_blocks_list = (Object(external_this_wp_compose_["compose"])(Object(external_this_wp_data_["withDispatch"])(function (dispatch, props) {
  var _dispatch = dispatch('core/block-directory'),
      installBlock = _dispatch.installBlock,
      downloadBlock = _dispatch.downloadBlock;

  var _dispatch2 = dispatch('core/notices'),
      createErrorNotice = _dispatch2.createErrorNotice,
      removeNotice = _dispatch2.removeNotice;

  var _dispatch3 = dispatch('core/block-editor'),
      removeBlocks = _dispatch3.removeBlocks;

  var onSelect = props.onSelect;
  return {
    downloadAndInstallBlock: function downloadAndInstallBlock(item) {
      var onDownloadError = function onDownloadError() {
        createErrorNotice(Object(external_this_wp_i18n_["__"])('Block previews can’t load.'), {
          id: DOWNLOAD_ERROR_NOTICE_ID,
          actions: [{
            label: Object(external_this_wp_i18n_["__"])('Retry'),
            onClick: function onClick() {
              removeNotice(DOWNLOAD_ERROR_NOTICE_ID);
              downloadBlock(item, onSuccess, onDownloadError);
            }
          }]
        });
      };

      var onSuccess = function onSuccess() {
        var createdBlock = onSelect(item);

        var onInstallBlockError = function onInstallBlockError() {
          createErrorNotice(Object(external_this_wp_i18n_["__"])("Block previews can't install."), {
            id: INSTALL_ERROR_NOTICE_ID,
            actions: [{
              label: Object(external_this_wp_i18n_["__"])('Retry'),
              onClick: function onClick() {
                removeNotice(INSTALL_ERROR_NOTICE_ID);
                installBlock(item, external_this_lodash_["noop"], onInstallBlockError);
              }
            }, {
              label: Object(external_this_wp_i18n_["__"])('Remove'),
              onClick: function onClick() {
                removeNotice(INSTALL_ERROR_NOTICE_ID);
                removeBlocks(createdBlock.clientId);
                Object(external_this_wp_blocks_["unregisterBlockType"])(item.name);
              }
            }]
          });
        };

        installBlock(item, external_this_lodash_["noop"], onInstallBlockError);
      };

      downloadBlock(item, onSuccess, onDownloadError);
    }
  };
}))(DownloadableBlocksList));
=======


function DownloadableBlocksList({
  items,
  onHover = external_lodash_["noop"],
  onSelect
}) {
  const composite = Object(external_wp_components_["__unstableUseCompositeState"])();
  const {
    installBlockType
  } = Object(external_wp_data_["useDispatch"])(store);

  if (!items.length) {
    return null;
  }

  return Object(external_wp_element_["createElement"])(external_wp_components_["__unstableComposite"], Object(esm_extends["a" /* default */])({}, composite, {
    role: "listbox",
    className: "block-directory-downloadable-blocks-list",
    "aria-label": Object(external_wp_i18n_["__"])('Blocks available for install')
  }), items.map(item => {
    return Object(external_wp_element_["createElement"])(downloadable_block_list_item, {
      key: item.id,
      composite: composite,
      onClick: () => {
        // Check if the block is registered (`getBlockType`
        // will return an object). If so, insert the block.
        // This prevents installing existing plugins.
        if (Object(external_wp_blocks_["getBlockType"])(item.name)) {
          onSelect(item);
        } else {
          installBlockType(item).then(success => {
            if (success) {
              onSelect(item);
            }
          });
        }

        onHover(null);
      },
      onHover: onHover,
      item: item
    });
  }));
}

/* harmony default export */ var downloadable_blocks_list = (DownloadableBlocksList);

// EXTERNAL MODULE: external ["wp","a11y"]
var external_wp_a11y_ = __webpack_require__("gdqT");

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/components/downloadable-blocks-panel/inserter-panel.js


/**
 * WordPress dependencies
 */




function DownloadableBlocksInserterPanel({
  children,
  downloadableItems,
  hasLocalBlocks
}) {
  const count = downloadableItems.length;
  Object(external_wp_element_["useEffect"])(() => {
    Object(external_wp_a11y_["speak"])(Object(external_wp_i18n_["sprintf"])(
    /* translators: %d: number of available blocks. */
    Object(external_wp_i18n_["_n"])('%d additional block is available to install.', '%d additional blocks are available to install.', count), count));
  }, [count]);
  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, !hasLocalBlocks && Object(external_wp_element_["createElement"])("p", {
    className: "block-directory-downloadable-blocks-panel__no-local"
  }, Object(external_wp_i18n_["__"])('No results available from your installed blocks.')), Object(external_wp_element_["createElement"])("div", {
    className: "block-editor-inserter__quick-inserter-separator"
  }), Object(external_wp_element_["createElement"])("div", {
    className: "block-directory-downloadable-blocks-panel"
  }, Object(external_wp_element_["createElement"])("div", {
    className: "block-directory-downloadable-blocks-panel__header"
  }, Object(external_wp_element_["createElement"])("h2", {
    className: "block-directory-downloadable-blocks-panel__title"
  }, Object(external_wp_i18n_["__"])('Available to install')), Object(external_wp_element_["createElement"])("p", {
    className: "block-directory-downloadable-blocks-panel__description"
  }, Object(external_wp_i18n_["__"])('Select a block to install and add it to your post.'))), children));
}

/* harmony default export */ var inserter_panel = (DownloadableBlocksInserterPanel);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/block-default.js
var block_default = __webpack_require__("//Lo");

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/components/downloadable-blocks-panel/no-results.js


/**
 * WordPress dependencies
 */



function DownloadableBlocksNoResults() {
  return Object(external_wp_element_["createElement"])("div", {
    className: "block-editor-inserter__no-results"
  }, Object(external_wp_element_["createElement"])(build_module_icon["a" /* default */], {
    className: "block-editor-inserter__no-results-icon",
    icon: block_default["a" /* default */]
  }), Object(external_wp_element_["createElement"])("p", null, Object(external_wp_i18n_["__"])('No results found.')));
}

/* harmony default export */ var no_results = (DownloadableBlocksNoResults);
>>>>>>> master

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/components/downloadable-blocks-panel/index.js


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
function DownloadableBlocksPanel(_ref) {
  var downloadableItems = _ref.downloadableItems,
      onSelect = _ref.onSelect,
      onHover = _ref.onHover,
      hasPermission = _ref.hasPermission,
      isLoading = _ref.isLoading,
      isWaiting = _ref.isWaiting,
      debouncedSpeak = _ref.debouncedSpeak;

  if (!hasPermission) {
    debouncedSpeak(Object(external_this_wp_i18n_["__"])('No blocks found in your library. Please contact your site administrator to install new blocks.'));
    return Object(external_this_wp_element_["createElement"])("p", {
      className: "block-directory-downloadable-blocks-panel__description has-no-results"
    }, Object(external_this_wp_i18n_["__"])('No blocks found in your library.'), Object(external_this_wp_element_["createElement"])("br", null), Object(external_this_wp_i18n_["__"])('Please contact your site administrator to install new blocks.'));
  }

  if (isLoading || isWaiting) {
    return Object(external_this_wp_element_["createElement"])("p", {
      className: "block-directory-downloadable-blocks-panel__description has-no-results"
    }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Spinner"], null));
  }

  if (!downloadableItems.length) {
    return Object(external_this_wp_element_["createElement"])("p", {
      className: "block-directory-downloadable-blocks-panel__description has-no-results"
    }, Object(external_this_wp_i18n_["__"])('No blocks found in your library.'));
  }

  var resultsFoundMessage = Object(external_this_wp_i18n_["sprintf"])(Object(external_this_wp_i18n_["_n"])('No blocks found in your library. We did find %d block available for download.', 'No blocks found in your library. We did find %d blocks available for download.', downloadableItems.length), downloadableItems.length);
  debouncedSpeak(resultsFoundMessage);
  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])("p", {
    className: "block-directory-downloadable-blocks-panel__description"
  }, Object(external_this_wp_i18n_["__"])('No blocks found in your library. These blocks can be downloaded and installed:')), Object(external_this_wp_element_["createElement"])(downloadable_blocks_list, {
    items: downloadableItems,
    onSelect: onSelect,
    onHover: onHover
  }));
}

/* harmony default export */ var downloadable_blocks_panel = (Object(external_this_wp_compose_["compose"])([external_this_wp_components_["withSpokenMessages"], Object(external_this_wp_data_["withSelect"])(function (select, _ref2) {
  var filterValue = _ref2.filterValue;

  var _select = select('core/block-directory'),
      getDownloadableBlocks = _select.getDownloadableBlocks,
      hasInstallBlocksPermission = _select.hasInstallBlocksPermission,
      isRequestingDownloadableBlocks = _select.isRequestingDownloadableBlocks;

  var hasPermission = hasInstallBlocksPermission();
  var downloadableItems = hasPermission ? getDownloadableBlocks(filterValue) : [];
  var isLoading = isRequestingDownloadableBlocks();
  return {
    downloadableItems: downloadableItems,
    hasPermission: hasPermission,
    isLoading: isLoading
=======



function DownloadableBlocksPanel({
  downloadableItems,
  onSelect,
  onHover,
  hasLocalBlocks,
  hasPermission,
  isLoading,
  isTyping
}) {
  if (typeof hasPermission === 'undefined' || isLoading || isTyping) {
    return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, hasPermission && !hasLocalBlocks && Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])("p", {
      className: "block-directory-downloadable-blocks-panel__no-local"
    }, Object(external_wp_i18n_["__"])('No results available from your installed blocks.')), Object(external_wp_element_["createElement"])("div", {
      className: "block-editor-inserter__quick-inserter-separator"
    })), Object(external_wp_element_["createElement"])("div", {
      className: "block-directory-downloadable-blocks-panel has-blocks-loading"
    }, Object(external_wp_element_["createElement"])(external_wp_components_["Spinner"], null)));
  }

  if (false === hasPermission) {
    if (!hasLocalBlocks) {
      return Object(external_wp_element_["createElement"])(no_results, null);
    }

    return null;
  }

  return !!downloadableItems.length ? Object(external_wp_element_["createElement"])(inserter_panel, {
    downloadableItems: downloadableItems,
    hasLocalBlocks: hasLocalBlocks
  }, Object(external_wp_element_["createElement"])(downloadable_blocks_list, {
    items: downloadableItems,
    onSelect: onSelect,
    onHover: onHover
  })) : !hasLocalBlocks && Object(external_wp_element_["createElement"])(no_results, null);
}

/* harmony default export */ var downloadable_blocks_panel = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])((select, {
  filterValue,
  rootClientId = null
}) => {
  const {
    getDownloadableBlocks,
    isRequestingDownloadableBlocks
  } = select(store);
  const {
    canInsertBlockType
  } = select(external_wp_blockEditor_["store"]);
  const hasPermission = select(external_wp_coreData_["store"]).canUser('read', 'block-directory/search');

  function getInstallableBlocks(term) {
    return getDownloadableBlocks(term).filter(block => canInsertBlockType(block, rootClientId, true));
  }

  const downloadableItems = hasPermission ? getInstallableBlocks(filterValue) : [];
  const isLoading = isRequestingDownloadableBlocks(filterValue);
  return {
    downloadableItems,
    hasPermission,
    isLoading
>>>>>>> master
  };
})])(DownloadableBlocksPanel));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/plugins/inserter-menu-downloadable-blocks-panel/index.js


<<<<<<< HEAD

=======
>>>>>>> master
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



function InserterMenuDownloadableBlocksPanel() {
<<<<<<< HEAD
  var _useState = Object(external_this_wp_element_["useState"])(''),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      debouncedFilterValue = _useState2[0],
      setFilterValue = _useState2[1];

  var debouncedSetFilterValue = Object(external_this_lodash_["debounce"])(setFilterValue, 400);
  return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["__experimentalInserterMenuExtension"], null, function (_ref) {
    var onSelect = _ref.onSelect,
        onHover = _ref.onHover,
        filterValue = _ref.filterValue,
        hasItems = _ref.hasItems;

    if (hasItems || !filterValue) {
      return null;
    }

=======
  const [debouncedFilterValue, setFilterValue] = Object(external_wp_element_["useState"])('');
  const debouncedSetFilterValue = Object(external_lodash_["debounce"])(setFilterValue, 400);
  return Object(external_wp_element_["createElement"])(external_wp_blockEditor_["__unstableInserterMenuExtension"], null, ({
    onSelect,
    onHover,
    filterValue,
    hasItems,
    rootClientId
  }) => {
>>>>>>> master
    if (debouncedFilterValue !== filterValue) {
      debouncedSetFilterValue(filterValue);
    }

<<<<<<< HEAD
    return Object(external_this_wp_element_["createElement"])(downloadable_blocks_panel, {
      onSelect: onSelect,
      onHover: onHover,
      filterValue: debouncedFilterValue,
      isWaiting: filterValue !== debouncedFilterValue
=======
    if (!debouncedFilterValue) {
      return null;
    }

    return Object(external_wp_element_["createElement"])(downloadable_blocks_panel, {
      onSelect: onSelect,
      onHover: onHover,
      rootClientId: rootClientId,
      filterValue: debouncedFilterValue,
      hasLocalBlocks: hasItems,
      isTyping: filterValue !== debouncedFilterValue
>>>>>>> master
    });
  });
}

/* harmony default export */ var inserter_menu_downloadable_blocks_panel = (InserterMenuDownloadableBlocksPanel);

<<<<<<< HEAD
// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/plugins/index.js
=======
// EXTERNAL MODULE: external ["wp","editPost"]
var external_wp_editPost_ = __webpack_require__("BLhE");

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/components/compact-list/index.js
>>>>>>> master


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


<<<<<<< HEAD
Object(external_this_wp_plugins_["registerPlugin"])('block-directory', {
  render: function render() {
    return Object(external_this_wp_element_["createElement"])(inserter_menu_downloadable_blocks_panel, null);
  }
=======
function CompactList({
  items
}) {
  if (!items.length) {
    return null;
  }

  return Object(external_wp_element_["createElement"])("ul", {
    className: "block-directory-compact-list"
  }, items.map(({
    icon,
    id,
    title,
    author
  }) => Object(external_wp_element_["createElement"])("li", {
    key: id,
    className: "block-directory-compact-list__item"
  }, Object(external_wp_element_["createElement"])(downloadable_block_icon, {
    icon: icon,
    title: title
  }), Object(external_wp_element_["createElement"])("div", {
    className: "block-directory-compact-list__item-details"
  }, Object(external_wp_element_["createElement"])("div", {
    className: "block-directory-compact-list__item-title"
  }, title), Object(external_wp_element_["createElement"])("div", {
    className: "block-directory-compact-list__item-author"
  }, Object(external_wp_i18n_["sprintf"])(
  /* translators: %s: Name of the block author. */
  Object(external_wp_i18n_["__"])('By %s'), author))))));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/plugins/installed-blocks-pre-publish-panel/index.js


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



function InstalledBlocksPrePublishPanel() {
  const newBlockTypes = Object(external_wp_data_["useSelect"])(select => select(store).getNewBlockTypes(), []);

  if (!newBlockTypes.length) {
    return null;
  }

  return Object(external_wp_element_["createElement"])(external_wp_editPost_["PluginPrePublishPanel"], {
    icon: block_default["a" /* default */],
    title: Object(external_wp_i18n_["sprintf"])( // translators: %d: number of blocks (number).
    Object(external_wp_i18n_["_n"])('Added: %d block', 'Added: %d blocks', newBlockTypes.length), newBlockTypes.length),
    initialOpen: true
  }, Object(external_wp_element_["createElement"])("p", {
    className: "installed-blocks-pre-publish-panel__copy"
  }, Object(external_wp_i18n_["_n"])('The following block has been added to your site.', 'The following blocks have been added to your site.', newBlockTypes.length)), Object(external_wp_element_["createElement"])(CompactList, {
    items: newBlockTypes
  }));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/plugins/get-install-missing/install-button.js


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


function InstallButton({
  attributes,
  block,
  clientId
}) {
  const isInstallingBlock = Object(external_wp_data_["useSelect"])(select => select(store).isInstalling(block.id));
  const {
    installBlockType
  } = Object(external_wp_data_["useDispatch"])(store);
  const {
    replaceBlock
  } = Object(external_wp_data_["useDispatch"])(external_wp_blockEditor_["store"]);
  return Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    onClick: () => installBlockType(block).then(success => {
      if (success) {
        const blockType = Object(external_wp_blocks_["getBlockType"])(block.name);
        const [originalBlock] = Object(external_wp_blocks_["parse"])(attributes.originalContent);

        if (originalBlock) {
          replaceBlock(clientId, Object(external_wp_blocks_["createBlock"])(blockType.name, originalBlock.attributes, originalBlock.innerBlocks));
        }
      }
    }),
    disabled: isInstallingBlock,
    isBusy: isInstallingBlock,
    isPrimary: true
  }, Object(external_wp_i18n_["sprintf"])(
  /* translators: %s: block name */
  Object(external_wp_i18n_["__"])('Install %s'), block.title));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/plugins/get-install-missing/index.js



/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */




const getInstallMissing = OriginalComponent => props => {
  const {
    originalName
  } = props.attributes; // Disable reason: This is a valid component, but it's mistaken for a callback.
  // eslint-disable-next-line react-hooks/rules-of-hooks

  const {
    block,
    hasPermission
  } = Object(external_wp_data_["useSelect"])(select => {
    const {
      getDownloadableBlocks
    } = select(store);
    const blocks = getDownloadableBlocks('block:' + originalName).filter(({
      name
    }) => originalName === name);
    return {
      hasPermission: select(external_wp_coreData_["store"]).canUser('read', 'block-directory/search'),
      block: blocks.length && blocks[0]
    };
  }, [originalName]); // The user can't install blocks, or the block isn't available for download.

  if (!hasPermission || !block) {
    return Object(external_wp_element_["createElement"])(OriginalComponent, props);
  }

  return Object(external_wp_element_["createElement"])(ModifiedWarning, Object(esm_extends["a" /* default */])({}, props, {
    originalBlock: block
  }));
};

const ModifiedWarning = ({
  originalBlock,
  ...props
}) => {
  const {
    originalName,
    originalUndelimitedContent
  } = props.attributes;
  const {
    replaceBlock
  } = Object(external_wp_data_["useDispatch"])(external_wp_blockEditor_["store"]);

  const convertToHTML = () => {
    replaceBlock(props.clientId, Object(external_wp_blocks_["createBlock"])('core/html', {
      content: originalUndelimitedContent
    }));
  };

  const hasContent = !!originalUndelimitedContent;
  const hasHTMLBlock = Object(external_wp_blocks_["getBlockType"])('core/html');
  let messageHTML = Object(external_wp_i18n_["sprintf"])(
  /* translators: %s: block name */
  Object(external_wp_i18n_["__"])('Your site doesn’t include support for the %s block. You can try installing the block or remove it entirely.'), originalBlock.title || originalName);
  const actions = [Object(external_wp_element_["createElement"])(InstallButton, {
    key: "install",
    block: originalBlock,
    attributes: props.attributes,
    clientId: props.clientId
  })];

  if (hasContent && hasHTMLBlock) {
    messageHTML = Object(external_wp_i18n_["sprintf"])(
    /* translators: %s: block name */
    Object(external_wp_i18n_["__"])('Your site doesn’t include support for the %s block. You can try installing the block, convert it to a Custom HTML block, or remove it entirely.'), originalBlock.title || originalName);
    actions.push(Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
      key: "convert",
      onClick: convertToHTML,
      isLink: true
    }, Object(external_wp_i18n_["__"])('Keep as HTML')));
  }

  return Object(external_wp_element_["createElement"])("div", Object(external_wp_blockEditor_["useBlockProps"])(), Object(external_wp_element_["createElement"])(external_wp_blockEditor_["Warning"], {
    actions: actions
  }, messageHTML), Object(external_wp_element_["createElement"])(external_wp_element_["RawHTML"], null, originalUndelimitedContent));
};

/* harmony default export */ var get_install_missing = (getInstallMissing);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/plugins/index.js


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */





Object(external_wp_plugins_["registerPlugin"])('block-directory', {
  render() {
    return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(AutoBlockUninstaller, null), Object(external_wp_element_["createElement"])(inserter_menu_downloadable_blocks_panel, null), Object(external_wp_element_["createElement"])(InstalledBlocksPrePublishPanel, null));
  }

});
Object(external_wp_hooks_["addFilter"])('blocks.registerBlockType', 'block-directory/fallback', (settings, name) => {
  if (name !== 'core/missing') {
    return settings;
  }

  settings.edit = get_install_missing(settings.edit);
  return settings;
>>>>>>> master
});

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/index.js
/**
 * Internal dependencies
 */




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
=======
/***/ "BLhE":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["editPost"]; }());

/***/ }),

/***/ "GRId":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "HSyU":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "K9lf":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["compose"]; }());

/***/ }),

/***/ "Tqx9":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["primitives"]; }());

/***/ }),

/***/ "TvNi":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["plugins"]; }());

/***/ }),

/***/ "URob":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Tqx9");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const starFilled = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M11.776 4.454a.25.25 0 01.448 0l2.069 4.192a.25.25 0 00.188.137l4.626.672a.25.25 0 01.139.426l-3.348 3.263a.25.25 0 00-.072.222l.79 4.607a.25.25 0 01-.362.263l-4.138-2.175a.25.25 0 00-.232 0l-4.138 2.175a.25.25 0 01-.363-.263l.79-4.607a.25.25 0 00-.071-.222L4.754 9.881a.25.25 0 01.139-.426l4.626-.672a.25.25 0 00.188-.137l2.069-4.192z"
}));
/* harmony default export */ __webpack_exports__["a"] = (starFilled);


/***/ }),

/***/ "Xxwi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Tqx9");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const starEmpty = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  fillRule: "evenodd",
  d: "M9.706 8.646a.25.25 0 01-.188.137l-4.626.672a.25.25 0 00-.139.427l3.348 3.262a.25.25 0 01.072.222l-.79 4.607a.25.25 0 00.362.264l4.138-2.176a.25.25 0 01.233 0l4.137 2.175a.25.25 0 00.363-.263l-.79-4.607a.25.25 0 01.072-.222l3.347-3.262a.25.25 0 00-.139-.427l-4.626-.672a.25.25 0 01-.188-.137l-2.069-4.192a.25.25 0 00-.448 0L9.706 8.646zM12 7.39l-.948 1.921a1.75 1.75 0 01-1.317.957l-2.12.308 1.534 1.495c.412.402.6.982.503 1.55l-.362 2.11 1.896-.997a1.75 1.75 0 011.629 0l1.895.997-.362-2.11a1.75 1.75 0 01.504-1.55l1.533-1.495-2.12-.308a1.75 1.75 0 01-1.317-.957L12 7.39z",
  clipRule: "evenodd"
}));
/* harmony default export */ __webpack_exports__["a"] = (starEmpty);


/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

(function() { module.exports = window["lodash"]; }());

/***/ }),

/***/ "axFQ":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "g56x":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["hooks"]; }());

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

/***/ "jSdM":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["editor"]; }());

/***/ }),

/***/ "jZUy":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["coreData"]; }());

/***/ }),

/***/ "l3Sj":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ }),

/***/ "onLe":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["notices"]; }());

/***/ }),

/***/ "rmEH":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["htmlEntities"]; }());

/***/ }),

/***/ "tI+e":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "wx14":
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
>>>>>>> master
}

/***/ }),

<<<<<<< HEAD
/***/ 55:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["plugins"]; }());

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blockEditor"]; }());

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["compose"]; }());

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["primitives"]; }());
=======
/***/ "ywyh":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["apiFetch"]; }());
>>>>>>> master

/***/ })

/******/ });