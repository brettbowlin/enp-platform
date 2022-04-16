this["wp"] = this["wp"] || {}; this["wp"]["editor"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 422);
=======
/******/ 	return __webpack_require__(__webpack_require__.s = "PLxR");
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

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(405);


/***/ }),

/***/ 118:
=======
/***/ "16Al":
>>>>>>> master
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



<<<<<<< HEAD
var ReactPropTypesSecret = __webpack_require__(119);
=======
var ReactPropTypesSecret = __webpack_require__("WbBG");
>>>>>>> master

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

<<<<<<< HEAD
/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
=======
/***/ "17x9":
/***/ (function(module, exports, __webpack_require__) {

>>>>>>> master
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

<<<<<<< HEAD


var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


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

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var close = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M14.95 6.46L11.41 10l3.54 3.54-1.41 1.41L10 11.42l-3.53 3.53-1.42-1.42L8.58 10 5.05 6.47l1.42-1.42L10 8.58l3.54-3.53z"
}));
/* harmony default export */ __webpack_exports__["a"] = (close);


/***/ }),

/***/ 128:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["wordcount"]; }());

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

/***/ 130:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["mediaUtils"]; }());

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

/***/ 152:
=======
if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__("16Al")();
}


/***/ }),

/***/ "1ZqX":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["data"]; }());

/***/ }),

/***/ "51Zz":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["dataControls"]; }());

/***/ }),

/***/ "6aBm":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["mediaUtils"]; }());

/***/ }),

/***/ "7fqt":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["wordcount"]; }());

/***/ }),

/***/ "CNgt":
>>>>>>> master
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
exports.__esModule = true;
<<<<<<< HEAD
var React = __webpack_require__(21);
var PropTypes = __webpack_require__(26);
var autosize = __webpack_require__(153);
var _getLineHeight = __webpack_require__(154);
var getLineHeight = _getLineHeight;
var UPDATE = 'autosize:update';
var DESTROY = 'autosize:destroy';
var RESIZED = 'autosize:resized';
=======
var React = __webpack_require__("cDcd");
var PropTypes = __webpack_require__("17x9");
var autosize = __webpack_require__("GemG");
var _getLineHeight = __webpack_require__("Rk8H");
var getLineHeight = _getLineHeight;
var RESIZED = "autosize:resized";
>>>>>>> master
/**
 * A light replacement for built-in textarea component
 * which automaticaly adjusts its height to match the content
 */
<<<<<<< HEAD
var TextareaAutosize = /** @class */ (function (_super) {
    __extends(TextareaAutosize, _super);
    function TextareaAutosize() {
=======
var TextareaAutosizeClass = /** @class */ (function (_super) {
    __extends(TextareaAutosizeClass, _super);
    function TextareaAutosizeClass() {
>>>>>>> master
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            lineHeight: null
        };
<<<<<<< HEAD
        _this.dispatchEvent = function (EVENT_TYPE) {
            var event = document.createEvent('Event');
            event.initEvent(EVENT_TYPE, true, false);
            _this.textarea.dispatchEvent(event);
        };
        _this.updateLineHeight = function () {
            _this.setState({
                lineHeight: getLineHeight(_this.textarea)
            });
=======
        _this.textarea = null;
        _this.onResize = function (e) {
            if (_this.props.onResize) {
                _this.props.onResize(e);
            }
        };
        _this.updateLineHeight = function () {
            if (_this.textarea) {
                _this.setState({
                    lineHeight: getLineHeight(_this.textarea)
                });
            }
>>>>>>> master
        };
        _this.onChange = function (e) {
            var onChange = _this.props.onChange;
            _this.currentValue = e.currentTarget.value;
            onChange && onChange(e);
        };
<<<<<<< HEAD
        _this.saveDOMNodeRef = function (ref) {
            var innerRef = _this.props.innerRef;
            if (innerRef) {
                innerRef(ref);
            }
            _this.textarea = ref;
        };
        _this.getLocals = function () {
            var _a = _this, _b = _a.props, onResize = _b.onResize, maxRows = _b.maxRows, onChange = _b.onChange, style = _b.style, innerRef = _b.innerRef, props = __rest(_b, ["onResize", "maxRows", "onChange", "style", "innerRef"]), lineHeight = _a.state.lineHeight, saveDOMNodeRef = _a.saveDOMNodeRef;
            var maxHeight = maxRows && lineHeight ? lineHeight * maxRows : null;
            return __assign({}, props, { saveDOMNodeRef: saveDOMNodeRef, style: maxHeight ? __assign({}, style, { maxHeight: maxHeight }) : style, onChange: _this.onChange });
        };
        return _this;
    }
    TextareaAutosize.prototype.componentDidMount = function () {
        var _this = this;
        var _a = this.props, onResize = _a.onResize, maxRows = _a.maxRows;
        if (typeof maxRows === 'number') {
            this.updateLineHeight();
        }
        /*
          the defer is needed to:
            - force "autosize" to activate the scrollbar when this.props.maxRows is passed
            - support StyledComponents (see #71)
        */
        setTimeout(function () { return autosize(_this.textarea); });
        if (onResize) {
            this.textarea.addEventListener(RESIZED, onResize);
        }
    };
    TextareaAutosize.prototype.componentWillUnmount = function () {
        var onResize = this.props.onResize;
        if (onResize) {
            this.textarea.removeEventListener(RESIZED, onResize);
        }
        this.dispatchEvent(DESTROY);
    };
    TextareaAutosize.prototype.render = function () {
        var _a = this.getLocals(), children = _a.children, saveDOMNodeRef = _a.saveDOMNodeRef, locals = __rest(_a, ["children", "saveDOMNodeRef"]);
        return (React.createElement("textarea", __assign({}, locals, { ref: saveDOMNodeRef }), children));
    };
    TextareaAutosize.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.value !== this.currentValue || this.props.rows !== prevProps.rows) {
            this.dispatchEvent(UPDATE);
        }
    };
    TextareaAutosize.defaultProps = {
        rows: 1
    };
    TextareaAutosize.propTypes = {
        rows: PropTypes.number,
        maxRows: PropTypes.number,
        onResize: PropTypes.func,
        innerRef: PropTypes.func
    };
    return TextareaAutosize;
}(React.Component));
exports["default"] = TextareaAutosize;
=======
        return _this;
    }
    TextareaAutosizeClass.prototype.componentDidMount = function () {
        var _this = this;
        var _a = this.props, maxRows = _a.maxRows, async = _a.async;
        if (typeof maxRows === "number") {
            this.updateLineHeight();
        }
        if (typeof maxRows === "number" || async) {
            /*
              the defer is needed to:
                - force "autosize" to activate the scrollbar when this.props.maxRows is passed
                - support StyledComponents (see #71)
            */
            setTimeout(function () { return _this.textarea && autosize(_this.textarea); });
        }
        else {
            this.textarea && autosize(this.textarea);
        }
        if (this.textarea) {
            this.textarea.addEventListener(RESIZED, this.onResize);
        }
    };
    TextareaAutosizeClass.prototype.componentWillUnmount = function () {
        if (this.textarea) {
            this.textarea.removeEventListener(RESIZED, this.onResize);
            autosize.destroy(this.textarea);
        }
    };
    TextareaAutosizeClass.prototype.render = function () {
        var _this = this;
        var _a = this, _b = _a.props, onResize = _b.onResize, maxRows = _b.maxRows, onChange = _b.onChange, style = _b.style, innerRef = _b.innerRef, children = _b.children, props = __rest(_b, ["onResize", "maxRows", "onChange", "style", "innerRef", "children"]), lineHeight = _a.state.lineHeight;
        var maxHeight = maxRows && lineHeight ? lineHeight * maxRows : null;
        return (React.createElement("textarea", __assign({}, props, { onChange: this.onChange, style: maxHeight ? __assign({}, style, { maxHeight: maxHeight }) : style, ref: function (element) {
                _this.textarea = element;
                if (typeof _this.props.innerRef === 'function') {
                    _this.props.innerRef(element);
                }
                else if (_this.props.innerRef) {
                    _this.props.innerRef.current = element;
                }
            } }), children));
    };
    TextareaAutosizeClass.prototype.componentDidUpdate = function () {
        this.textarea && autosize.update(this.textarea);
    };
    TextareaAutosizeClass.defaultProps = {
        rows: 1,
        async: false
    };
    TextareaAutosizeClass.propTypes = {
        rows: PropTypes.number,
        maxRows: PropTypes.number,
        onResize: PropTypes.func,
        innerRef: PropTypes.any,
        async: PropTypes.bool
    };
    return TextareaAutosizeClass;
}(React.Component));
exports.TextareaAutosize = React.forwardRef(function (props, ref) {
    return React.createElement(TextareaAutosizeClass, __assign({}, props, { innerRef: ref }));
});
>>>>>>> master


/***/ }),

<<<<<<< HEAD
/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	autosize 4.0.2
=======
/***/ "Civd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Tqx9");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const layout = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M18 5.5H6a.5.5 0 00-.5.5v3h13V6a.5.5 0 00-.5-.5zm.5 5H10v8h8a.5.5 0 00.5-.5v-7.5zm-10 0h-3V18a.5.5 0 00.5.5h2.5v-8zM6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z"
}));
/* harmony default export */ __webpack_exports__["a"] = (layout);


/***/ }),

/***/ "FqII":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["date"]; }());

/***/ }),

/***/ "GRId":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "GemG":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	autosize 4.0.4
>>>>>>> master
	license: MIT
	http://www.jacklmoore.com/autosize
*/
(function (global, factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else { var mod; }
})(this, function (module, exports) {
	'use strict';

	var map = typeof Map === "function" ? new Map() : function () {
		var keys = [];
		var values = [];

		return {
			has: function has(key) {
				return keys.indexOf(key) > -1;
			},
			get: function get(key) {
				return values[keys.indexOf(key)];
			},
			set: function set(key, value) {
				if (keys.indexOf(key) === -1) {
					keys.push(key);
					values.push(value);
				}
			},
			delete: function _delete(key) {
				var index = keys.indexOf(key);
				if (index > -1) {
					keys.splice(index, 1);
					values.splice(index, 1);
				}
			}
		};
	}();

	var createEvent = function createEvent(name) {
		return new Event(name, { bubbles: true });
	};
	try {
		new Event('test');
	} catch (e) {
		// IE does not support `new Event()`
		createEvent = function createEvent(name) {
			var evt = document.createEvent('Event');
			evt.initEvent(name, true, false);
			return evt;
		};
	}

	function assign(ta) {
		if (!ta || !ta.nodeName || ta.nodeName !== 'TEXTAREA' || map.has(ta)) return;

		var heightOffset = null;
		var clientWidth = null;
		var cachedHeight = null;

		function init() {
			var style = window.getComputedStyle(ta, null);

			if (style.resize === 'vertical') {
				ta.style.resize = 'none';
			} else if (style.resize === 'both') {
				ta.style.resize = 'horizontal';
			}

			if (style.boxSizing === 'content-box') {
				heightOffset = -(parseFloat(style.paddingTop) + parseFloat(style.paddingBottom));
			} else {
				heightOffset = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
			}
			// Fix when a textarea is not on document body and heightOffset is Not a Number
			if (isNaN(heightOffset)) {
				heightOffset = 0;
			}

			update();
		}

		function changeOverflow(value) {
			{
				// Chrome/Safari-specific fix:
				// When the textarea y-overflow is hidden, Chrome/Safari do not reflow the text to account for the space
				// made available by removing the scrollbar. The following forces the necessary text reflow.
				var width = ta.style.width;
				ta.style.width = '0px';
				// Force reflow:
				/* jshint ignore:start */
				ta.offsetWidth;
				/* jshint ignore:end */
				ta.style.width = width;
			}

			ta.style.overflowY = value;
		}

		function getParentOverflows(el) {
			var arr = [];

			while (el && el.parentNode && el.parentNode instanceof Element) {
				if (el.parentNode.scrollTop) {
					arr.push({
						node: el.parentNode,
						scrollTop: el.parentNode.scrollTop
					});
				}
				el = el.parentNode;
			}

			return arr;
		}

		function resize() {
			if (ta.scrollHeight === 0) {
				// If the scrollHeight is 0, then the element probably has display:none or is detached from the DOM.
				return;
			}

			var overflows = getParentOverflows(ta);
			var docTop = document.documentElement && document.documentElement.scrollTop; // Needed for Mobile IE (ticket #240)

			ta.style.height = '';
			ta.style.height = ta.scrollHeight + heightOffset + 'px';

			// used to check if an update is actually necessary on window.resize
			clientWidth = ta.clientWidth;

			// prevents scroll-position jumping
			overflows.forEach(function (el) {
				el.node.scrollTop = el.scrollTop;
			});

			if (docTop) {
				document.documentElement.scrollTop = docTop;
			}
		}

		function update() {
			resize();

			var styleHeight = Math.round(parseFloat(ta.style.height));
			var computed = window.getComputedStyle(ta, null);

			// Using offsetHeight as a replacement for computed.height in IE, because IE does not account use of border-box
			var actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(computed.height)) : ta.offsetHeight;

			// The actual height not matching the style height (set via the resize method) indicates that 
			// the max-height has been exceeded, in which case the overflow should be allowed.
			if (actualHeight < styleHeight) {
				if (computed.overflowY === 'hidden') {
					changeOverflow('scroll');
					resize();
					actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
				}
			} else {
				// Normally keep overflow set to hidden, to avoid flash of scrollbar as the textarea expands.
				if (computed.overflowY !== 'hidden') {
					changeOverflow('hidden');
					resize();
					actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
				}
			}

			if (cachedHeight !== actualHeight) {
				cachedHeight = actualHeight;
				var evt = createEvent('autosize:resized');
				try {
					ta.dispatchEvent(evt);
				} catch (err) {
					// Firefox will throw an error on dispatchEvent for a detached element
					// https://bugzilla.mozilla.org/show_bug.cgi?id=889376
				}
			}
		}

		var pageResize = function pageResize() {
			if (ta.clientWidth !== clientWidth) {
				update();
			}
		};

		var destroy = function (style) {
			window.removeEventListener('resize', pageResize, false);
			ta.removeEventListener('input', update, false);
			ta.removeEventListener('keyup', update, false);
			ta.removeEventListener('autosize:destroy', destroy, false);
			ta.removeEventListener('autosize:update', update, false);

			Object.keys(style).forEach(function (key) {
				ta.style[key] = style[key];
			});

			map.delete(ta);
		}.bind(ta, {
			height: ta.style.height,
			resize: ta.style.resize,
			overflowY: ta.style.overflowY,
			overflowX: ta.style.overflowX,
			wordWrap: ta.style.wordWrap
		});

		ta.addEventListener('autosize:destroy', destroy, false);

		// IE9 does not fire onpropertychange or oninput for deletions,
		// so binding to onkeyup to catch most of those events.
		// There is no way that I know of to detect something like 'cut' in IE9.
		if ('onpropertychange' in ta && 'oninput' in ta) {
			ta.addEventListener('keyup', update, false);
		}

		window.addEventListener('resize', pageResize, false);
		ta.addEventListener('input', update, false);
		ta.addEventListener('autosize:update', update, false);
		ta.style.overflowX = 'hidden';
		ta.style.wordWrap = 'break-word';

		map.set(ta, {
			destroy: destroy,
			update: update
		});

		init();
	}

	function destroy(ta) {
		var methods = map.get(ta);
		if (methods) {
			methods.destroy();
		}
	}

	function update(ta) {
		var methods = map.get(ta);
		if (methods) {
			methods.update();
		}
	}

	var autosize = null;

	// Do nothing in Node.js environment and IE8 (or lower)
	if (typeof window === 'undefined' || typeof window.getComputedStyle !== 'function') {
		autosize = function autosize(el) {
			return el;
		};
		autosize.destroy = function (el) {
			return el;
		};
		autosize.update = function (el) {
			return el;
		};
	} else {
		autosize = function autosize(el, options) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], function (x) {
					return assign(x, options);
				});
			}
			return el;
		};
		autosize.destroy = function (el) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], destroy);
			}
			return el;
		};
		autosize.update = function (el) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], update);
			}
			return el;
		};
	}

	exports.default = autosize;
	module.exports = exports['default'];
});

/***/ }),

<<<<<<< HEAD
/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

// Load in dependencies
var computedStyle = __webpack_require__(155);
=======
/***/ "HSyU":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "JREk":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["serverSideRender"]; }());

/***/ }),

/***/ "K2cm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Tqx9");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const redo = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M15.6 6.5l-1.1 1 2.9 3.3H8c-.9 0-1.7.3-2.3.9-1.4 1.5-1.4 4.2-1.4 5.6v.2h1.5v-.3c0-1.1 0-3.5 1-4.5.3-.3.7-.5 1.3-.5h9.2L14.5 15l1.1 1.1 4.6-4.6-4.6-5z"
}));
/* harmony default export */ __webpack_exports__["a"] = (redo);


/***/ }),

/***/ "K9lf":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["compose"]; }());

/***/ }),

/***/ "Mmq9":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["url"]; }());

/***/ }),

/***/ "NMb1":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["deprecated"]; }());

/***/ }),

/***/ "Ntru":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Tqx9");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const undo = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M18.3 11.7c-.6-.6-1.4-.9-2.3-.9H6.7l2.9-3.3-1.1-1-4.5 5L8.5 16l1-1-2.7-2.7H16c.5 0 .9.2 1.3.5 1 1 1 3.4 1 4.5v.3h1.5v-.2c0-1.5 0-4.3-1.5-5.7z"
}));
/* harmony default export */ __webpack_exports__["a"] = (undo);


/***/ }),

/***/ "O6Fj":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var TextareaAutosize_1 = __webpack_require__("CNgt");
exports["default"] = TextareaAutosize_1.TextareaAutosize;


/***/ }),

/***/ "PLxR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "storeConfig", function() { return /* reexport */ storeConfig; });
__webpack_require__.d(__webpack_exports__, "store", function() { return /* reexport */ store; });
__webpack_require__.d(__webpack_exports__, "userAutocompleter", function() { return /* reexport */ autocompleters_user; });
__webpack_require__.d(__webpack_exports__, "AutosaveMonitor", function() { return /* reexport */ autosave_monitor; });
__webpack_require__.d(__webpack_exports__, "DocumentOutline", function() { return /* reexport */ document_outline; });
__webpack_require__.d(__webpack_exports__, "DocumentOutlineCheck", function() { return /* reexport */ check; });
__webpack_require__.d(__webpack_exports__, "VisualEditorGlobalKeyboardShortcuts", function() { return /* reexport */ visual_editor_shortcuts; });
__webpack_require__.d(__webpack_exports__, "TextEditorGlobalKeyboardShortcuts", function() { return /* reexport */ TextEditorGlobalKeyboardShortcuts; });
__webpack_require__.d(__webpack_exports__, "EditorKeyboardShortcutsRegister", function() { return /* reexport */ register_shortcuts; });
__webpack_require__.d(__webpack_exports__, "EditorHistoryRedo", function() { return /* reexport */ editor_history_redo; });
__webpack_require__.d(__webpack_exports__, "EditorHistoryUndo", function() { return /* reexport */ editor_history_undo; });
__webpack_require__.d(__webpack_exports__, "EditorNotices", function() { return /* reexport */ editor_notices; });
__webpack_require__.d(__webpack_exports__, "EditorSnackbars", function() { return /* reexport */ EditorSnackbars; });
__webpack_require__.d(__webpack_exports__, "EntitiesSavedStates", function() { return /* reexport */ EntitiesSavedStates; });
__webpack_require__.d(__webpack_exports__, "ErrorBoundary", function() { return /* reexport */ error_boundary; });
__webpack_require__.d(__webpack_exports__, "LocalAutosaveMonitor", function() { return /* reexport */ local_autosave_monitor; });
__webpack_require__.d(__webpack_exports__, "PageAttributesCheck", function() { return /* reexport */ page_attributes_check; });
__webpack_require__.d(__webpack_exports__, "PageAttributesOrder", function() { return /* reexport */ page_attributes_order; });
__webpack_require__.d(__webpack_exports__, "PageAttributesParent", function() { return /* reexport */ page_attributes_parent; });
__webpack_require__.d(__webpack_exports__, "PageTemplate", function() { return /* reexport */ post_template; });
__webpack_require__.d(__webpack_exports__, "PostAuthor", function() { return /* reexport */ post_author; });
__webpack_require__.d(__webpack_exports__, "PostAuthorCheck", function() { return /* reexport */ post_author_check; });
__webpack_require__.d(__webpack_exports__, "PostComments", function() { return /* reexport */ post_comments; });
__webpack_require__.d(__webpack_exports__, "PostExcerpt", function() { return /* reexport */ post_excerpt; });
__webpack_require__.d(__webpack_exports__, "PostExcerptCheck", function() { return /* reexport */ post_excerpt_check; });
__webpack_require__.d(__webpack_exports__, "PostFeaturedImage", function() { return /* reexport */ post_featured_image; });
__webpack_require__.d(__webpack_exports__, "PostFeaturedImageCheck", function() { return /* reexport */ post_featured_image_check; });
__webpack_require__.d(__webpack_exports__, "PostFormat", function() { return /* reexport */ PostFormat; });
__webpack_require__.d(__webpack_exports__, "PostFormatCheck", function() { return /* reexport */ post_format_check; });
__webpack_require__.d(__webpack_exports__, "PostLastRevision", function() { return /* reexport */ post_last_revision; });
__webpack_require__.d(__webpack_exports__, "PostLastRevisionCheck", function() { return /* reexport */ post_last_revision_check; });
__webpack_require__.d(__webpack_exports__, "PostLockedModal", function() { return /* reexport */ PostLockedModal; });
__webpack_require__.d(__webpack_exports__, "PostPendingStatus", function() { return /* reexport */ post_pending_status; });
__webpack_require__.d(__webpack_exports__, "PostPendingStatusCheck", function() { return /* reexport */ post_pending_status_check; });
__webpack_require__.d(__webpack_exports__, "PostPingbacks", function() { return /* reexport */ post_pingbacks; });
__webpack_require__.d(__webpack_exports__, "PostPreviewButton", function() { return /* reexport */ post_preview_button; });
__webpack_require__.d(__webpack_exports__, "PostPublishButton", function() { return /* reexport */ post_publish_button; });
__webpack_require__.d(__webpack_exports__, "PostPublishButtonLabel", function() { return /* reexport */ post_publish_button_label; });
__webpack_require__.d(__webpack_exports__, "PostPublishPanel", function() { return /* reexport */ post_publish_panel; });
__webpack_require__.d(__webpack_exports__, "PostSavedState", function() { return /* reexport */ PostSavedState; });
__webpack_require__.d(__webpack_exports__, "PostSchedule", function() { return /* reexport */ PostSchedule; });
__webpack_require__.d(__webpack_exports__, "PostScheduleCheck", function() { return /* reexport */ post_schedule_check; });
__webpack_require__.d(__webpack_exports__, "PostScheduleLabel", function() { return /* reexport */ post_schedule_label; });
__webpack_require__.d(__webpack_exports__, "PostSlug", function() { return /* reexport */ post_slug; });
__webpack_require__.d(__webpack_exports__, "PostSlugCheck", function() { return /* reexport */ PostSlugCheck; });
__webpack_require__.d(__webpack_exports__, "PostSticky", function() { return /* reexport */ post_sticky; });
__webpack_require__.d(__webpack_exports__, "PostStickyCheck", function() { return /* reexport */ post_sticky_check; });
__webpack_require__.d(__webpack_exports__, "PostSwitchToDraftButton", function() { return /* reexport */ post_switch_to_draft_button; });
__webpack_require__.d(__webpack_exports__, "PostTaxonomies", function() { return /* reexport */ post_taxonomies; });
__webpack_require__.d(__webpack_exports__, "PostTaxonomiesCheck", function() { return /* reexport */ post_taxonomies_check; });
__webpack_require__.d(__webpack_exports__, "PostTextEditor", function() { return /* reexport */ PostTextEditor; });
__webpack_require__.d(__webpack_exports__, "PostTitle", function() { return /* reexport */ PostTitle; });
__webpack_require__.d(__webpack_exports__, "PostTrash", function() { return /* reexport */ post_trash; });
__webpack_require__.d(__webpack_exports__, "PostTrashCheck", function() { return /* reexport */ post_trash_check; });
__webpack_require__.d(__webpack_exports__, "PostTypeSupportCheck", function() { return /* reexport */ post_type_support_check; });
__webpack_require__.d(__webpack_exports__, "PostVisibility", function() { return /* reexport */ post_visibility; });
__webpack_require__.d(__webpack_exports__, "PostVisibilityLabel", function() { return /* reexport */ post_visibility_label; });
__webpack_require__.d(__webpack_exports__, "PostVisibilityCheck", function() { return /* reexport */ post_visibility_check; });
__webpack_require__.d(__webpack_exports__, "TableOfContents", function() { return /* reexport */ table_of_contents; });
__webpack_require__.d(__webpack_exports__, "UnsavedChangesWarning", function() { return /* reexport */ UnsavedChangesWarning; });
__webpack_require__.d(__webpack_exports__, "WordCount", function() { return /* reexport */ WordCount; });
__webpack_require__.d(__webpack_exports__, "EditorProvider", function() { return /* reexport */ provider; });
__webpack_require__.d(__webpack_exports__, "ServerSideRender", function() { return /* reexport */ external_wp_serverSideRender_default.a; });
__webpack_require__.d(__webpack_exports__, "RichText", function() { return /* reexport */ RichText; });
__webpack_require__.d(__webpack_exports__, "Autocomplete", function() { return /* reexport */ Autocomplete; });
__webpack_require__.d(__webpack_exports__, "AlignmentToolbar", function() { return /* reexport */ AlignmentToolbar; });
__webpack_require__.d(__webpack_exports__, "BlockAlignmentToolbar", function() { return /* reexport */ BlockAlignmentToolbar; });
__webpack_require__.d(__webpack_exports__, "BlockControls", function() { return /* reexport */ BlockControls; });
__webpack_require__.d(__webpack_exports__, "BlockEdit", function() { return /* reexport */ deprecated_BlockEdit; });
__webpack_require__.d(__webpack_exports__, "BlockEditorKeyboardShortcuts", function() { return /* reexport */ BlockEditorKeyboardShortcuts; });
__webpack_require__.d(__webpack_exports__, "BlockFormatControls", function() { return /* reexport */ BlockFormatControls; });
__webpack_require__.d(__webpack_exports__, "BlockIcon", function() { return /* reexport */ BlockIcon; });
__webpack_require__.d(__webpack_exports__, "BlockInspector", function() { return /* reexport */ BlockInspector; });
__webpack_require__.d(__webpack_exports__, "BlockList", function() { return /* reexport */ BlockList; });
__webpack_require__.d(__webpack_exports__, "BlockMover", function() { return /* reexport */ BlockMover; });
__webpack_require__.d(__webpack_exports__, "BlockNavigationDropdown", function() { return /* reexport */ BlockNavigationDropdown; });
__webpack_require__.d(__webpack_exports__, "BlockSelectionClearer", function() { return /* reexport */ BlockSelectionClearer; });
__webpack_require__.d(__webpack_exports__, "BlockSettingsMenu", function() { return /* reexport */ BlockSettingsMenu; });
__webpack_require__.d(__webpack_exports__, "BlockTitle", function() { return /* reexport */ BlockTitle; });
__webpack_require__.d(__webpack_exports__, "BlockToolbar", function() { return /* reexport */ BlockToolbar; });
__webpack_require__.d(__webpack_exports__, "ColorPalette", function() { return /* reexport */ ColorPalette; });
__webpack_require__.d(__webpack_exports__, "ContrastChecker", function() { return /* reexport */ ContrastChecker; });
__webpack_require__.d(__webpack_exports__, "CopyHandler", function() { return /* reexport */ CopyHandler; });
__webpack_require__.d(__webpack_exports__, "DefaultBlockAppender", function() { return /* reexport */ DefaultBlockAppender; });
__webpack_require__.d(__webpack_exports__, "FontSizePicker", function() { return /* reexport */ FontSizePicker; });
__webpack_require__.d(__webpack_exports__, "Inserter", function() { return /* reexport */ Inserter; });
__webpack_require__.d(__webpack_exports__, "InnerBlocks", function() { return /* reexport */ InnerBlocks; });
__webpack_require__.d(__webpack_exports__, "InspectorAdvancedControls", function() { return /* reexport */ InspectorAdvancedControls; });
__webpack_require__.d(__webpack_exports__, "InspectorControls", function() { return /* reexport */ InspectorControls; });
__webpack_require__.d(__webpack_exports__, "PanelColorSettings", function() { return /* reexport */ PanelColorSettings; });
__webpack_require__.d(__webpack_exports__, "PlainText", function() { return /* reexport */ PlainText; });
__webpack_require__.d(__webpack_exports__, "RichTextShortcut", function() { return /* reexport */ RichTextShortcut; });
__webpack_require__.d(__webpack_exports__, "RichTextToolbarButton", function() { return /* reexport */ RichTextToolbarButton; });
__webpack_require__.d(__webpack_exports__, "__unstableRichTextInputEvent", function() { return /* reexport */ __unstableRichTextInputEvent; });
__webpack_require__.d(__webpack_exports__, "MediaPlaceholder", function() { return /* reexport */ MediaPlaceholder; });
__webpack_require__.d(__webpack_exports__, "MediaUpload", function() { return /* reexport */ MediaUpload; });
__webpack_require__.d(__webpack_exports__, "MediaUploadCheck", function() { return /* reexport */ MediaUploadCheck; });
__webpack_require__.d(__webpack_exports__, "MultiSelectScrollIntoView", function() { return /* reexport */ MultiSelectScrollIntoView; });
__webpack_require__.d(__webpack_exports__, "NavigableToolbar", function() { return /* reexport */ NavigableToolbar; });
__webpack_require__.d(__webpack_exports__, "ObserveTyping", function() { return /* reexport */ ObserveTyping; });
__webpack_require__.d(__webpack_exports__, "PreserveScrollInReorder", function() { return /* reexport */ PreserveScrollInReorder; });
__webpack_require__.d(__webpack_exports__, "SkipToSelectedBlock", function() { return /* reexport */ SkipToSelectedBlock; });
__webpack_require__.d(__webpack_exports__, "URLInput", function() { return /* reexport */ URLInput; });
__webpack_require__.d(__webpack_exports__, "URLInputButton", function() { return /* reexport */ URLInputButton; });
__webpack_require__.d(__webpack_exports__, "URLPopover", function() { return /* reexport */ URLPopover; });
__webpack_require__.d(__webpack_exports__, "Warning", function() { return /* reexport */ Warning; });
__webpack_require__.d(__webpack_exports__, "WritingFlow", function() { return /* reexport */ WritingFlow; });
__webpack_require__.d(__webpack_exports__, "createCustomColorsHOC", function() { return /* reexport */ createCustomColorsHOC; });
__webpack_require__.d(__webpack_exports__, "getColorClassName", function() { return /* reexport */ getColorClassName; });
__webpack_require__.d(__webpack_exports__, "getColorObjectByAttributeValues", function() { return /* reexport */ getColorObjectByAttributeValues; });
__webpack_require__.d(__webpack_exports__, "getColorObjectByColorValue", function() { return /* reexport */ getColorObjectByColorValue; });
__webpack_require__.d(__webpack_exports__, "getFontSize", function() { return /* reexport */ getFontSize; });
__webpack_require__.d(__webpack_exports__, "getFontSizeClass", function() { return /* reexport */ getFontSizeClass; });
__webpack_require__.d(__webpack_exports__, "withColorContext", function() { return /* reexport */ withColorContext; });
__webpack_require__.d(__webpack_exports__, "withColors", function() { return /* reexport */ withColors; });
__webpack_require__.d(__webpack_exports__, "withFontSizes", function() { return /* reexport */ withFontSizes; });
__webpack_require__.d(__webpack_exports__, "mediaUpload", function() { return /* reexport */ mediaUpload; });
__webpack_require__.d(__webpack_exports__, "cleanForSlug", function() { return /* reexport */ cleanForSlug; });
__webpack_require__.d(__webpack_exports__, "transformStyles", function() { return /* reexport */ external_wp_blockEditor_["transformStyles"]; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/editor/build-module/store/selectors.js
var selectors_namespaceObject = {};
__webpack_require__.r(selectors_namespaceObject);
__webpack_require__.d(selectors_namespaceObject, "hasEditorUndo", function() { return hasEditorUndo; });
__webpack_require__.d(selectors_namespaceObject, "hasEditorRedo", function() { return hasEditorRedo; });
__webpack_require__.d(selectors_namespaceObject, "isEditedPostNew", function() { return selectors_isEditedPostNew; });
__webpack_require__.d(selectors_namespaceObject, "hasChangedContent", function() { return hasChangedContent; });
__webpack_require__.d(selectors_namespaceObject, "isEditedPostDirty", function() { return selectors_isEditedPostDirty; });
__webpack_require__.d(selectors_namespaceObject, "hasNonPostEntityChanges", function() { return selectors_hasNonPostEntityChanges; });
__webpack_require__.d(selectors_namespaceObject, "isCleanNewPost", function() { return selectors_isCleanNewPost; });
__webpack_require__.d(selectors_namespaceObject, "getCurrentPost", function() { return selectors_getCurrentPost; });
__webpack_require__.d(selectors_namespaceObject, "getCurrentPostType", function() { return selectors_getCurrentPostType; });
__webpack_require__.d(selectors_namespaceObject, "getCurrentPostId", function() { return selectors_getCurrentPostId; });
__webpack_require__.d(selectors_namespaceObject, "getCurrentPostRevisionsCount", function() { return getCurrentPostRevisionsCount; });
__webpack_require__.d(selectors_namespaceObject, "getCurrentPostLastRevisionId", function() { return getCurrentPostLastRevisionId; });
__webpack_require__.d(selectors_namespaceObject, "getPostEdits", function() { return selectors_getPostEdits; });
__webpack_require__.d(selectors_namespaceObject, "getReferenceByDistinctEdits", function() { return getReferenceByDistinctEdits; });
__webpack_require__.d(selectors_namespaceObject, "getCurrentPostAttribute", function() { return selectors_getCurrentPostAttribute; });
__webpack_require__.d(selectors_namespaceObject, "getEditedPostAttribute", function() { return selectors_getEditedPostAttribute; });
__webpack_require__.d(selectors_namespaceObject, "getAutosaveAttribute", function() { return getAutosaveAttribute; });
__webpack_require__.d(selectors_namespaceObject, "getEditedPostVisibility", function() { return selectors_getEditedPostVisibility; });
__webpack_require__.d(selectors_namespaceObject, "isCurrentPostPending", function() { return isCurrentPostPending; });
__webpack_require__.d(selectors_namespaceObject, "isCurrentPostPublished", function() { return selectors_isCurrentPostPublished; });
__webpack_require__.d(selectors_namespaceObject, "isCurrentPostScheduled", function() { return selectors_isCurrentPostScheduled; });
__webpack_require__.d(selectors_namespaceObject, "isEditedPostPublishable", function() { return selectors_isEditedPostPublishable; });
__webpack_require__.d(selectors_namespaceObject, "isEditedPostSaveable", function() { return selectors_isEditedPostSaveable; });
__webpack_require__.d(selectors_namespaceObject, "isEditedPostEmpty", function() { return isEditedPostEmpty; });
__webpack_require__.d(selectors_namespaceObject, "isEditedPostAutosaveable", function() { return selectors_isEditedPostAutosaveable; });
__webpack_require__.d(selectors_namespaceObject, "getAutosave", function() { return getAutosave; });
__webpack_require__.d(selectors_namespaceObject, "hasAutosave", function() { return hasAutosave; });
__webpack_require__.d(selectors_namespaceObject, "isEditedPostBeingScheduled", function() { return selectors_isEditedPostBeingScheduled; });
__webpack_require__.d(selectors_namespaceObject, "isEditedPostDateFloating", function() { return isEditedPostDateFloating; });
__webpack_require__.d(selectors_namespaceObject, "isSavingPost", function() { return selectors_isSavingPost; });
__webpack_require__.d(selectors_namespaceObject, "didPostSaveRequestSucceed", function() { return didPostSaveRequestSucceed; });
__webpack_require__.d(selectors_namespaceObject, "didPostSaveRequestFail", function() { return didPostSaveRequestFail; });
__webpack_require__.d(selectors_namespaceObject, "isAutosavingPost", function() { return selectors_isAutosavingPost; });
__webpack_require__.d(selectors_namespaceObject, "isPreviewingPost", function() { return isPreviewingPost; });
__webpack_require__.d(selectors_namespaceObject, "getEditedPostPreviewLink", function() { return selectors_getEditedPostPreviewLink; });
__webpack_require__.d(selectors_namespaceObject, "getSuggestedPostFormat", function() { return selectors_getSuggestedPostFormat; });
__webpack_require__.d(selectors_namespaceObject, "getBlocksForSerialization", function() { return getBlocksForSerialization; });
__webpack_require__.d(selectors_namespaceObject, "getEditedPostContent", function() { return getEditedPostContent; });
__webpack_require__.d(selectors_namespaceObject, "isPublishingPost", function() { return selectors_isPublishingPost; });
__webpack_require__.d(selectors_namespaceObject, "isPermalinkEditable", function() { return isPermalinkEditable; });
__webpack_require__.d(selectors_namespaceObject, "getPermalink", function() { return getPermalink; });
__webpack_require__.d(selectors_namespaceObject, "getEditedPostSlug", function() { return getEditedPostSlug; });
__webpack_require__.d(selectors_namespaceObject, "getPermalinkParts", function() { return getPermalinkParts; });
__webpack_require__.d(selectors_namespaceObject, "isPostLocked", function() { return selectors_isPostLocked; });
__webpack_require__.d(selectors_namespaceObject, "isPostSavingLocked", function() { return selectors_isPostSavingLocked; });
__webpack_require__.d(selectors_namespaceObject, "isPostAutosavingLocked", function() { return isPostAutosavingLocked; });
__webpack_require__.d(selectors_namespaceObject, "isPostLockTakeover", function() { return isPostLockTakeover; });
__webpack_require__.d(selectors_namespaceObject, "getPostLockUser", function() { return getPostLockUser; });
__webpack_require__.d(selectors_namespaceObject, "getActivePostLock", function() { return getActivePostLock; });
__webpack_require__.d(selectors_namespaceObject, "canUserUseUnfilteredHTML", function() { return selectors_canUserUseUnfilteredHTML; });
__webpack_require__.d(selectors_namespaceObject, "isPublishSidebarEnabled", function() { return selectors_isPublishSidebarEnabled; });
__webpack_require__.d(selectors_namespaceObject, "getEditorBlocks", function() { return getEditorBlocks; });
__webpack_require__.d(selectors_namespaceObject, "getEditorSelectionStart", function() { return getEditorSelectionStart; });
__webpack_require__.d(selectors_namespaceObject, "getEditorSelectionEnd", function() { return getEditorSelectionEnd; });
__webpack_require__.d(selectors_namespaceObject, "getEditorSelection", function() { return selectors_getEditorSelection; });
__webpack_require__.d(selectors_namespaceObject, "__unstableIsEditorReady", function() { return selectors_unstableIsEditorReady; });
__webpack_require__.d(selectors_namespaceObject, "getEditorSettings", function() { return selectors_getEditorSettings; });
__webpack_require__.d(selectors_namespaceObject, "getStateBeforeOptimisticTransaction", function() { return getStateBeforeOptimisticTransaction; });
__webpack_require__.d(selectors_namespaceObject, "inSomeHistory", function() { return inSomeHistory; });
__webpack_require__.d(selectors_namespaceObject, "getBlockName", function() { return getBlockName; });
__webpack_require__.d(selectors_namespaceObject, "isBlockValid", function() { return isBlockValid; });
__webpack_require__.d(selectors_namespaceObject, "getBlockAttributes", function() { return getBlockAttributes; });
__webpack_require__.d(selectors_namespaceObject, "getBlock", function() { return getBlock; });
__webpack_require__.d(selectors_namespaceObject, "getBlocks", function() { return selectors_getBlocks; });
__webpack_require__.d(selectors_namespaceObject, "__unstableGetBlockWithoutInnerBlocks", function() { return __unstableGetBlockWithoutInnerBlocks; });
__webpack_require__.d(selectors_namespaceObject, "getClientIdsOfDescendants", function() { return getClientIdsOfDescendants; });
__webpack_require__.d(selectors_namespaceObject, "getClientIdsWithDescendants", function() { return getClientIdsWithDescendants; });
__webpack_require__.d(selectors_namespaceObject, "getGlobalBlockCount", function() { return selectors_getGlobalBlockCount; });
__webpack_require__.d(selectors_namespaceObject, "getBlocksByClientId", function() { return getBlocksByClientId; });
__webpack_require__.d(selectors_namespaceObject, "getBlockCount", function() { return getBlockCount; });
__webpack_require__.d(selectors_namespaceObject, "getBlockSelectionStart", function() { return getBlockSelectionStart; });
__webpack_require__.d(selectors_namespaceObject, "getBlockSelectionEnd", function() { return getBlockSelectionEnd; });
__webpack_require__.d(selectors_namespaceObject, "getSelectedBlockCount", function() { return getSelectedBlockCount; });
__webpack_require__.d(selectors_namespaceObject, "hasSelectedBlock", function() { return hasSelectedBlock; });
__webpack_require__.d(selectors_namespaceObject, "getSelectedBlockClientId", function() { return getSelectedBlockClientId; });
__webpack_require__.d(selectors_namespaceObject, "getSelectedBlock", function() { return getSelectedBlock; });
__webpack_require__.d(selectors_namespaceObject, "getBlockRootClientId", function() { return getBlockRootClientId; });
__webpack_require__.d(selectors_namespaceObject, "getBlockHierarchyRootClientId", function() { return getBlockHierarchyRootClientId; });
__webpack_require__.d(selectors_namespaceObject, "getAdjacentBlockClientId", function() { return getAdjacentBlockClientId; });
__webpack_require__.d(selectors_namespaceObject, "getPreviousBlockClientId", function() { return getPreviousBlockClientId; });
__webpack_require__.d(selectors_namespaceObject, "getNextBlockClientId", function() { return getNextBlockClientId; });
__webpack_require__.d(selectors_namespaceObject, "getSelectedBlocksInitialCaretPosition", function() { return getSelectedBlocksInitialCaretPosition; });
__webpack_require__.d(selectors_namespaceObject, "getMultiSelectedBlockClientIds", function() { return getMultiSelectedBlockClientIds; });
__webpack_require__.d(selectors_namespaceObject, "getMultiSelectedBlocks", function() { return getMultiSelectedBlocks; });
__webpack_require__.d(selectors_namespaceObject, "getFirstMultiSelectedBlockClientId", function() { return getFirstMultiSelectedBlockClientId; });
__webpack_require__.d(selectors_namespaceObject, "getLastMultiSelectedBlockClientId", function() { return getLastMultiSelectedBlockClientId; });
__webpack_require__.d(selectors_namespaceObject, "isFirstMultiSelectedBlock", function() { return isFirstMultiSelectedBlock; });
__webpack_require__.d(selectors_namespaceObject, "isBlockMultiSelected", function() { return isBlockMultiSelected; });
__webpack_require__.d(selectors_namespaceObject, "isAncestorMultiSelected", function() { return isAncestorMultiSelected; });
__webpack_require__.d(selectors_namespaceObject, "getMultiSelectedBlocksStartClientId", function() { return getMultiSelectedBlocksStartClientId; });
__webpack_require__.d(selectors_namespaceObject, "getMultiSelectedBlocksEndClientId", function() { return getMultiSelectedBlocksEndClientId; });
__webpack_require__.d(selectors_namespaceObject, "getBlockOrder", function() { return getBlockOrder; });
__webpack_require__.d(selectors_namespaceObject, "getBlockIndex", function() { return getBlockIndex; });
__webpack_require__.d(selectors_namespaceObject, "isBlockSelected", function() { return isBlockSelected; });
__webpack_require__.d(selectors_namespaceObject, "hasSelectedInnerBlock", function() { return hasSelectedInnerBlock; });
__webpack_require__.d(selectors_namespaceObject, "isBlockWithinSelection", function() { return isBlockWithinSelection; });
__webpack_require__.d(selectors_namespaceObject, "hasMultiSelection", function() { return hasMultiSelection; });
__webpack_require__.d(selectors_namespaceObject, "isMultiSelecting", function() { return isMultiSelecting; });
__webpack_require__.d(selectors_namespaceObject, "isSelectionEnabled", function() { return isSelectionEnabled; });
__webpack_require__.d(selectors_namespaceObject, "getBlockMode", function() { return getBlockMode; });
__webpack_require__.d(selectors_namespaceObject, "isTyping", function() { return isTyping; });
__webpack_require__.d(selectors_namespaceObject, "isCaretWithinFormattedText", function() { return isCaretWithinFormattedText; });
__webpack_require__.d(selectors_namespaceObject, "getBlockInsertionPoint", function() { return getBlockInsertionPoint; });
__webpack_require__.d(selectors_namespaceObject, "isBlockInsertionPointVisible", function() { return isBlockInsertionPointVisible; });
__webpack_require__.d(selectors_namespaceObject, "isValidTemplate", function() { return isValidTemplate; });
__webpack_require__.d(selectors_namespaceObject, "getTemplate", function() { return getTemplate; });
__webpack_require__.d(selectors_namespaceObject, "getTemplateLock", function() { return getTemplateLock; });
__webpack_require__.d(selectors_namespaceObject, "canInsertBlockType", function() { return canInsertBlockType; });
__webpack_require__.d(selectors_namespaceObject, "getInserterItems", function() { return getInserterItems; });
__webpack_require__.d(selectors_namespaceObject, "hasInserterItems", function() { return hasInserterItems; });
__webpack_require__.d(selectors_namespaceObject, "getBlockListSettings", function() { return getBlockListSettings; });
__webpack_require__.d(selectors_namespaceObject, "__experimentalGetDefaultTemplateTypes", function() { return __experimentalGetDefaultTemplateTypes; });
__webpack_require__.d(selectors_namespaceObject, "__experimentalGetDefaultTemplatePartAreas", function() { return __experimentalGetDefaultTemplatePartAreas; });
__webpack_require__.d(selectors_namespaceObject, "__experimentalGetDefaultTemplateType", function() { return __experimentalGetDefaultTemplateType; });
__webpack_require__.d(selectors_namespaceObject, "__experimentalGetTemplateInfo", function() { return __experimentalGetTemplateInfo; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/editor/build-module/store/actions.js
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, "setupEditor", function() { return actions_setupEditor; });
__webpack_require__.d(actions_namespaceObject, "__experimentalTearDownEditor", function() { return actions_experimentalTearDownEditor; });
__webpack_require__.d(actions_namespaceObject, "resetPost", function() { return resetPost; });
__webpack_require__.d(actions_namespaceObject, "resetAutosave", function() { return resetAutosave; });
__webpack_require__.d(actions_namespaceObject, "__experimentalRequestPostUpdateStart", function() { return __experimentalRequestPostUpdateStart; });
__webpack_require__.d(actions_namespaceObject, "__experimentalRequestPostUpdateFinish", function() { return __experimentalRequestPostUpdateFinish; });
__webpack_require__.d(actions_namespaceObject, "updatePost", function() { return updatePost; });
__webpack_require__.d(actions_namespaceObject, "setupEditorState", function() { return setupEditorState; });
__webpack_require__.d(actions_namespaceObject, "editPost", function() { return actions_editPost; });
__webpack_require__.d(actions_namespaceObject, "savePost", function() { return actions_savePost; });
__webpack_require__.d(actions_namespaceObject, "refreshPost", function() { return refreshPost; });
__webpack_require__.d(actions_namespaceObject, "trashPost", function() { return trashPost; });
__webpack_require__.d(actions_namespaceObject, "autosave", function() { return actions_autosave; });
__webpack_require__.d(actions_namespaceObject, "redo", function() { return actions_redo; });
__webpack_require__.d(actions_namespaceObject, "undo", function() { return actions_undo; });
__webpack_require__.d(actions_namespaceObject, "createUndoLevel", function() { return createUndoLevel; });
__webpack_require__.d(actions_namespaceObject, "updatePostLock", function() { return actions_updatePostLock; });
__webpack_require__.d(actions_namespaceObject, "enablePublishSidebar", function() { return enablePublishSidebar; });
__webpack_require__.d(actions_namespaceObject, "disablePublishSidebar", function() { return disablePublishSidebar; });
__webpack_require__.d(actions_namespaceObject, "lockPostSaving", function() { return lockPostSaving; });
__webpack_require__.d(actions_namespaceObject, "unlockPostSaving", function() { return unlockPostSaving; });
__webpack_require__.d(actions_namespaceObject, "lockPostAutosaving", function() { return lockPostAutosaving; });
__webpack_require__.d(actions_namespaceObject, "unlockPostAutosaving", function() { return unlockPostAutosaving; });
__webpack_require__.d(actions_namespaceObject, "resetEditorBlocks", function() { return actions_resetEditorBlocks; });
__webpack_require__.d(actions_namespaceObject, "updateEditorSettings", function() { return actions_updateEditorSettings; });
__webpack_require__.d(actions_namespaceObject, "resetBlocks", function() { return resetBlocks; });
__webpack_require__.d(actions_namespaceObject, "receiveBlocks", function() { return receiveBlocks; });
__webpack_require__.d(actions_namespaceObject, "updateBlock", function() { return updateBlock; });
__webpack_require__.d(actions_namespaceObject, "updateBlockAttributes", function() { return updateBlockAttributes; });
__webpack_require__.d(actions_namespaceObject, "selectBlock", function() { return actions_selectBlock; });
__webpack_require__.d(actions_namespaceObject, "startMultiSelect", function() { return startMultiSelect; });
__webpack_require__.d(actions_namespaceObject, "stopMultiSelect", function() { return stopMultiSelect; });
__webpack_require__.d(actions_namespaceObject, "multiSelect", function() { return multiSelect; });
__webpack_require__.d(actions_namespaceObject, "clearSelectedBlock", function() { return actions_clearSelectedBlock; });
__webpack_require__.d(actions_namespaceObject, "toggleSelection", function() { return toggleSelection; });
__webpack_require__.d(actions_namespaceObject, "replaceBlocks", function() { return replaceBlocks; });
__webpack_require__.d(actions_namespaceObject, "replaceBlock", function() { return replaceBlock; });
__webpack_require__.d(actions_namespaceObject, "moveBlocksDown", function() { return moveBlocksDown; });
__webpack_require__.d(actions_namespaceObject, "moveBlocksUp", function() { return moveBlocksUp; });
__webpack_require__.d(actions_namespaceObject, "moveBlockToPosition", function() { return moveBlockToPosition; });
__webpack_require__.d(actions_namespaceObject, "insertBlock", function() { return insertBlock; });
__webpack_require__.d(actions_namespaceObject, "insertBlocks", function() { return actions_insertBlocks; });
__webpack_require__.d(actions_namespaceObject, "showInsertionPoint", function() { return showInsertionPoint; });
__webpack_require__.d(actions_namespaceObject, "hideInsertionPoint", function() { return hideInsertionPoint; });
__webpack_require__.d(actions_namespaceObject, "setTemplateValidity", function() { return actions_setTemplateValidity; });
__webpack_require__.d(actions_namespaceObject, "synchronizeTemplate", function() { return actions_synchronizeTemplate; });
__webpack_require__.d(actions_namespaceObject, "mergeBlocks", function() { return mergeBlocks; });
__webpack_require__.d(actions_namespaceObject, "removeBlocks", function() { return removeBlocks; });
__webpack_require__.d(actions_namespaceObject, "removeBlock", function() { return removeBlock; });
__webpack_require__.d(actions_namespaceObject, "toggleBlockMode", function() { return toggleBlockMode; });
__webpack_require__.d(actions_namespaceObject, "startTyping", function() { return startTyping; });
__webpack_require__.d(actions_namespaceObject, "stopTyping", function() { return stopTyping; });
__webpack_require__.d(actions_namespaceObject, "enterFormattedText", function() { return enterFormattedText; });
__webpack_require__.d(actions_namespaceObject, "exitFormattedText", function() { return exitFormattedText; });
__webpack_require__.d(actions_namespaceObject, "insertDefaultBlock", function() { return actions_insertDefaultBlock; });
__webpack_require__.d(actions_namespaceObject, "updateBlockListSettings", function() { return updateBlockListSettings; });

// EXTERNAL MODULE: external ["wp","blockEditor"]
var external_wp_blockEditor_ = __webpack_require__("axFQ");

// EXTERNAL MODULE: external ["wp","coreData"]
var external_wp_coreData_ = __webpack_require__("jZUy");

// EXTERNAL MODULE: external ["wp","richText"]
var external_wp_richText_ = __webpack_require__("qRz9");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("wx14");

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__("GRId");

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");

// EXTERNAL MODULE: external ["wp","blocks"]
var external_wp_blocks_ = __webpack_require__("HSyU");

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__("1ZqX");

// EXTERNAL MODULE: external ["wp","compose"]
var external_wp_compose_ = __webpack_require__("K9lf");

// EXTERNAL MODULE: external ["wp","hooks"]
var external_wp_hooks_ = __webpack_require__("g56x");

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/hooks/custom-sources-backwards-compatibility.js



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */







/** @typedef {import('@wordpress/compose').WPHigherOrderComponent} WPHigherOrderComponent */

/** @typedef {import('@wordpress/blocks').WPBlockSettings} WPBlockSettings */

/**
 * Object whose keys are the names of block attributes, where each value
 * represents the meta key to which the block attribute is intended to save.
 *
 * @see https://developer.wordpress.org/reference/functions/register_meta/
 *
 * @typedef {Object<string,string>} WPMetaAttributeMapping
 */

/**
 * Given a mapping of attribute names (meta source attributes) to their
 * associated meta key, returns a higher order component that overrides its
 * `attributes` and `setAttributes` props to sync any changes with the edited
 * post's meta keys.
 *
 * @param {WPMetaAttributeMapping} metaAttributes Meta attribute mapping.
 *
 * @return {WPHigherOrderComponent} Higher-order component.
 */

const createWithMetaAttributeSource = metaAttributes => Object(external_wp_compose_["createHigherOrderComponent"])(BlockEdit => ({
  attributes,
  setAttributes,
  ...props
}) => {
  const postType = Object(external_wp_data_["useSelect"])(select => select('core/editor').getCurrentPostType(), []);
  const [meta, setMeta] = Object(external_wp_coreData_["useEntityProp"])('postType', postType, 'meta');
  const mergedAttributes = Object(external_wp_element_["useMemo"])(() => ({ ...attributes,
    ...Object(external_lodash_["mapValues"])(metaAttributes, metaKey => meta[metaKey])
  }), [attributes, meta]);
  return Object(external_wp_element_["createElement"])(BlockEdit, Object(esm_extends["a" /* default */])({
    attributes: mergedAttributes,
    setAttributes: nextAttributes => {
      const nextMeta = Object(external_lodash_["mapKeys"])( // Filter to intersection of keys between the updated
      // attributes and those with an associated meta key.
      Object(external_lodash_["pickBy"])(nextAttributes, (value, key) => metaAttributes[key]), // Rename the keys to the expected meta key name.
      (value, attributeKey) => metaAttributes[attributeKey]);

      if (!Object(external_lodash_["isEmpty"])(nextMeta)) {
        setMeta(nextMeta);
      }

      setAttributes(nextAttributes);
    }
  }, props));
}, 'withMetaAttributeSource');
/**
 * Filters a registered block's settings to enhance a block's `edit` component
 * to upgrade meta-sourced attributes to use the post's meta entity property.
 *
 * @param {WPBlockSettings} settings Registered block settings.
 *
 * @return {WPBlockSettings} Filtered block settings.
 */


function shimAttributeSource(settings) {
  /** @type {WPMetaAttributeMapping} */
  const metaAttributes = Object(external_lodash_["mapValues"])(Object(external_lodash_["pickBy"])(settings.attributes, {
    source: 'meta'
  }), 'meta');

  if (!Object(external_lodash_["isEmpty"])(metaAttributes)) {
    settings.edit = createWithMetaAttributeSource(metaAttributes)(settings.edit);
  }

  return settings;
}

Object(external_wp_hooks_["addFilter"])('blocks.registerBlockType', 'core/editor/custom-sources-backwards-compatibility/shim-attribute-source', shimAttributeSource); // The above filter will only capture blocks registered after the filter was
// added. There may already be blocks registered by this point, and those must
// be updated to apply the shim.
//
// The following implementation achieves this, albeit with a couple caveats:
// - Only blocks registered on the global store will be modified.
// - The block settings are directly mutated, since there is currently no
//   mechanism to update an existing block registration. This is the reason for
//   `getBlockType` separate from `getBlockTypes`, since the latter returns a
//   _copy_ of the block registration (i.e. the mutation would not affect the
//   actual registered block settings).
//
// `getBlockTypes` or `getBlockType` implementation could change in the future
// in regards to creating settings clones, but the corresponding end-to-end
// tests for meta blocks should cover against any potential regressions.
//
// In the future, we could support updating block settings, at which point this
// implementation could use that mechanism instead.

Object(external_wp_data_["select"])(external_wp_blocks_["store"]).getBlockTypes().map(({
  name
}) => Object(external_wp_data_["select"])(external_wp_blocks_["store"]).getBlockType(name)).forEach(shimAttributeSource);

// EXTERNAL MODULE: external ["wp","apiFetch"]
var external_wp_apiFetch_ = __webpack_require__("ywyh");
var external_wp_apiFetch_default = /*#__PURE__*/__webpack_require__.n(external_wp_apiFetch_);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/autocompleters/user.js


/**
 * WordPress dependencies
 */

/** @typedef {import('@wordpress/components').WPCompleter} WPCompleter */

/**
 * A user mentions completer.
 *
 * @type {WPCompleter}
 */

/* harmony default export */ var autocompleters_user = ({
  name: 'users',
  className: 'editor-autocompleters__user',
  triggerPrefix: '@',

  options(search) {
    let payload = '';

    if (search) {
      payload = '?search=' + encodeURIComponent(search);
    }

    return external_wp_apiFetch_default()({
      path: '/wp/v2/users' + payload
    });
  },

  isDebounced: true,

  getOptionKeywords(user) {
    return [user.slug, user.name];
  },

  getOptionLabel(user) {
    const avatar = user.avatar_urls && user.avatar_urls[24] ? Object(external_wp_element_["createElement"])("img", {
      key: "avatar",
      className: "editor-autocompleters__user-avatar",
      alt: "",
      src: user.avatar_urls[24]
    }) : Object(external_wp_element_["createElement"])("span", {
      className: "editor-autocompleters__no-avatar"
    });
    return [avatar, Object(external_wp_element_["createElement"])("span", {
      key: "name",
      className: "editor-autocompleters__user-name"
    }, user.name), Object(external_wp_element_["createElement"])("span", {
      key: "slug",
      className: "editor-autocompleters__user-slug"
    }, user.slug)];
  },

  getOptionCompletion(user) {
    return `@${user.slug}`;
  }

});

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/hooks/default-autocompleters.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



function setDefaultCompleters(completers = []) {
  // Provide copies so filters may directly modify them.
  completers.push(Object(external_lodash_["clone"])(autocompleters_user));
  return completers;
}

Object(external_wp_hooks_["addFilter"])('editor.Autocomplete.completers', 'editor/autocompleters/set-default-completers', setDefaultCompleters);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/hooks/index.js
/**
 * Internal dependencies
 */



// EXTERNAL MODULE: external ["wp","dataControls"]
var external_wp_dataControls_ = __webpack_require__("51Zz");

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/store/defaults.js
/**
 * WordPress dependencies
 */

const PREFERENCES_DEFAULTS = {
  insertUsage: {},
  // Should be kept for backward compatibility, see: https://github.com/WordPress/gutenberg/issues/14580.
  isPublishSidebarEnabled: true
};
/**
 * The default post editor settings
 *
 *  allowedBlockTypes  boolean|Array Allowed block types
 *  richEditingEnabled boolean       Whether rich editing is enabled or not
 *  codeEditingEnabled boolean       Whether code editing is enabled or not
 *  enableCustomFields boolean       Whether the WordPress custom fields are enabled or not
 *  autosaveInterval   number        Autosave Interval
 *  availableTemplates array?        The available post templates
 *  disablePostFormats boolean       Whether or not the post formats are disabled
 *  allowedMimeTypes   array?        List of allowed mime types and file extensions
 *  maxUploadFileSize  number        Maximum upload file size
 *  supportsLayout     boolean      Whether the editor supports layouts.
 */

const EDITOR_SETTINGS_DEFAULTS = { ...external_wp_blockEditor_["SETTINGS_DEFAULTS"],
  richEditingEnabled: true,
  codeEditingEnabled: true,
  enableCustomFields: false,
  supportsLayout: true
};

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/store/reducer.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


/**
 * Returns a post attribute value, flattening nested rendered content using its
 * raw value in place of its original object form.
 *
 * @param {*} value Original value.
 *
 * @return {*} Raw value.
 */

function getPostRawValue(value) {
  if (value && 'object' === typeof value && 'raw' in value) {
    return value.raw;
  }

  return value;
}
/**
 * Returns true if the two object arguments have the same keys, or false
 * otherwise.
 *
 * @param {Object} a First object.
 * @param {Object} b Second object.
 *
 * @return {boolean} Whether the two objects have the same keys.
 */

function hasSameKeys(a, b) {
  return Object(external_lodash_["isEqual"])(Object(external_lodash_["keys"])(a), Object(external_lodash_["keys"])(b));
}
/**
 * Returns true if, given the currently dispatching action and the previously
 * dispatched action, the two actions are editing the same post property, or
 * false otherwise.
 *
 * @param {Object} action         Currently dispatching action.
 * @param {Object} previousAction Previously dispatched action.
 *
 * @return {boolean} Whether actions are updating the same post property.
 */

function isUpdatingSamePostProperty(action, previousAction) {
  return action.type === 'EDIT_POST' && hasSameKeys(action.edits, previousAction.edits);
}
/**
 * Returns true if, given the currently dispatching action and the previously
 * dispatched action, the two actions are modifying the same property such that
 * undo history should be batched.
 *
 * @param {Object} action         Currently dispatching action.
 * @param {Object} previousAction Previously dispatched action.
 *
 * @return {boolean} Whether to overwrite present state.
 */

function shouldOverwriteState(action, previousAction) {
  if (action.type === 'RESET_EDITOR_BLOCKS') {
    return !action.shouldCreateUndoLevel;
  }

  if (!previousAction || action.type !== previousAction.type) {
    return false;
  }

  return isUpdatingSamePostProperty(action, previousAction);
}
function reducer_postId(state = null, action) {
  switch (action.type) {
    case 'SETUP_EDITOR_STATE':
    case 'RESET_POST':
      return action.post.id;
  }

  return state;
}
function reducer_postType(state = null, action) {
  switch (action.type) {
    case 'SETUP_EDITOR_STATE':
    case 'RESET_POST':
      return action.post.type;
  }

  return state;
}
/**
 * Reducer returning whether the post blocks match the defined template or not.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {boolean} Updated state.
 */

function reducer_template(state = {
  isValid: true
}, action) {
  switch (action.type) {
    case 'SET_TEMPLATE_VALIDITY':
      return { ...state,
        isValid: action.isValid
      };
  }

  return state;
}
/**
 * Reducer returning the user preferences.
 *
 * @param {Object}  state                 Current state.
 * @param {Object}  action                Dispatched action.
 *
 * @return {string} Updated state.
 */

function preferences(state = PREFERENCES_DEFAULTS, action) {
  switch (action.type) {
    case 'ENABLE_PUBLISH_SIDEBAR':
      return { ...state,
        isPublishSidebarEnabled: true
      };

    case 'DISABLE_PUBLISH_SIDEBAR':
      return { ...state,
        isPublishSidebarEnabled: false
      };
  }

  return state;
}
/**
 * Reducer returning current network request state (whether a request to
 * the WP REST API is in progress, successful, or failed).
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function saving(state = {}, action) {
  switch (action.type) {
    case 'REQUEST_POST_UPDATE_START':
    case 'REQUEST_POST_UPDATE_FINISH':
      return {
        pending: action.type === 'REQUEST_POST_UPDATE_START',
        options: action.options || {}
      };
  }

  return state;
}
/**
 * Post Lock State.
 *
 * @typedef {Object} PostLockState
 *
 * @property {boolean} isLocked       Whether the post is locked.
 * @property {?boolean} isTakeover     Whether the post editing has been taken over.
 * @property {?boolean} activePostLock Active post lock value.
 * @property {?Object}  user           User that took over the post.
 */

/**
 * Reducer returning the post lock status.
 *
 * @param {PostLockState} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {PostLockState} Updated state.
 */

function postLock(state = {
  isLocked: false
}, action) {
  switch (action.type) {
    case 'UPDATE_POST_LOCK':
      return action.lock;
  }

  return state;
}
/**
 * Post saving lock.
 *
 * When post saving is locked, the post cannot be published or updated.
 *
 * @param {PostLockState} state  Current state.
 * @param {Object}        action Dispatched action.
 *
 * @return {PostLockState} Updated state.
 */

function postSavingLock(state = {}, action) {
  switch (action.type) {
    case 'LOCK_POST_SAVING':
      return { ...state,
        [action.lockName]: true
      };

    case 'UNLOCK_POST_SAVING':
      return Object(external_lodash_["omit"])(state, action.lockName);
  }

  return state;
}
/**
 * Post autosaving lock.
 *
 * When post autosaving is locked, the post will not autosave.
 *
 * @param {PostLockState} state  Current state.
 * @param {Object}        action Dispatched action.
 *
 * @return {PostLockState} Updated state.
 */

function postAutosavingLock(state = {}, action) {
  switch (action.type) {
    case 'LOCK_POST_AUTOSAVING':
      return { ...state,
        [action.lockName]: true
      };

    case 'UNLOCK_POST_AUTOSAVING':
      return Object(external_lodash_["omit"])(state, action.lockName);
  }

  return state;
}
/**
 * Reducer returning whether the editor is ready to be rendered.
 * The editor is considered ready to be rendered once
 * the post object is loaded properly and the initial blocks parsed.
 *
 * @param {boolean} state
 * @param {Object} action
 *
 * @return {boolean} Updated state.
 */

function reducer_isReady(state = false, action) {
  switch (action.type) {
    case 'SETUP_EDITOR_STATE':
      return true;

    case 'TEAR_DOWN_EDITOR':
      return false;
  }

  return state;
}
/**
 * Reducer returning the post editor setting.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function reducer_editorSettings(state = EDITOR_SETTINGS_DEFAULTS, action) {
  switch (action.type) {
    case 'UPDATE_EDITOR_SETTINGS':
      return { ...state,
        ...action.settings
      };
  }

  return state;
}
/* harmony default export */ var reducer = (Object(external_wp_data_["combineReducers"])({
  postId: reducer_postId,
  postType: reducer_postType,
  preferences,
  saving,
  postLock,
  template: reducer_template,
  postSavingLock,
  isReady: reducer_isReady,
  editorSettings: reducer_editorSettings,
  postAutosavingLock
}));

// EXTERNAL MODULE: ./node_modules/rememo/es/rememo.js
var rememo = __webpack_require__("pPDe");

// EXTERNAL MODULE: external ["wp","date"]
var external_wp_date_ = __webpack_require__("FqII");

// EXTERNAL MODULE: external ["wp","url"]
var external_wp_url_ = __webpack_require__("Mmq9");

// EXTERNAL MODULE: external ["wp","deprecated"]
var external_wp_deprecated_ = __webpack_require__("NMb1");
var external_wp_deprecated_default = /*#__PURE__*/__webpack_require__.n(external_wp_deprecated_);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/layout.js
var layout = __webpack_require__("Civd");

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/store/constants.js
/**
 * Set of post properties for which edits should assume a merging behavior,
 * assuming an object value.
 *
 * @type {Set}
 */
const EDIT_MERGE_PROPERTIES = new Set(['meta']);
/**
 * Constant for the store module (or reducer) key.
 *
 * @type {string}
 */

const STORE_NAME = 'core/editor';
const SAVE_POST_NOTICE_ID = 'SAVE_POST_NOTICE_ID';
const TRASH_POST_NOTICE_ID = 'TRASH_POST_NOTICE_ID';
const PERMALINK_POSTNAME_REGEX = /%(?:postname|pagename)%/;
const ONE_MINUTE_IN_MS = 60 * 1000;
const AUTOSAVE_PROPERTIES = ['title', 'excerpt', 'content'];

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/utils/url.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Returns the URL of a WPAdmin Page.
 *
 * TODO: This should be moved to a module less specific to the editor.
 *
 * @param {string} page  Page to navigate to.
 * @param {Object} query Query Args.
 *
 * @return {string} WPAdmin URL.
 */

function getWPAdminURL(page, query) {
  return Object(external_wp_url_["addQueryArgs"])(page, query);
}
/**
 * Performs some basic cleanup of a string for use as a post slug
 *
 * This replicates some of what sanitize_title() does in WordPress core, but
 * is only designed to approximate what the slug will be.
 *
 * Converts Latin-1 Supplement and Latin Extended-A letters to basic Latin letters.
 * Removes combining diacritical marks. Converts whitespace, periods,
 * and forward slashes to hyphens. Removes any remaining non-word characters
 * except hyphens and underscores. Converts remaining string to lowercase.
 * It does not account for octets, HTML entities, or other encoded characters.
 *
 * @param {string} string Title or slug to be processed
 *
 * @return {string} Processed string
 */

function cleanForSlug(string) {
  if (!string) {
    return '';
  }

  return Object(external_lodash_["trim"])(Object(external_lodash_["deburr"])(string).replace(/[\s\./]+/g, '-').replace(/[^\p{L}\p{N}_-]+/gu, '').toLowerCase(), '-');
}

// EXTERNAL MODULE: external ["wp","primitives"]
var external_wp_primitives_ = __webpack_require__("Tqx9");

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/header.js


/**
 * WordPress dependencies
 */

const header = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M18.5 10.5H10v8h8a.5.5 0 00.5-.5v-7.5zm-10 0h-3V18a.5.5 0 00.5.5h2.5v-8zM6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z"
}));
/* harmony default export */ var library_header = (header);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/footer.js


/**
 * WordPress dependencies
 */

const footer = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  fillRule: "evenodd",
  d: "M18 5.5h-8v8h8.5V6a.5.5 0 00-.5-.5zm-9.5 8h-3V6a.5.5 0 01.5-.5h2.5v8zM6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z"
}));
/* harmony default export */ var library_footer = (footer);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/sidebar.js


/**
 * WordPress dependencies
 */

const sidebar = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M18 5.5H6a.5.5 0 00-.5.5v3h13V6a.5.5 0 00-.5-.5zm.5 5H10v8h8a.5.5 0 00.5-.5v-7.5zM6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z"
}));
/* harmony default export */ var library_sidebar = (sidebar);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/store/utils/get-template-part-icon.js
/**
 * WordPress dependencies
 */

/**
 * Helper function to retrieve the corresponding icon by name.
 *
 * @param {string} iconName The name of the icon.
 *
 * @return {Object} The corresponding icon.
 */

function getTemplatePartIcon(iconName) {
  if ('header' === iconName) {
    return library_header;
  } else if ('footer' === iconName) {
    return library_footer;
  } else if ('sidebar' === iconName) {
    return library_sidebar;
  }

  return layout["a" /* default */];
}

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/store/selectors.js
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */






/**
 * Shared reference to an empty object for cases where it is important to avoid
 * returning a new object reference on every invocation, as in a connected or
 * other pure component which performs `shouldComponentUpdate` check on props.
 * This should be used as a last resort, since the normalized data should be
 * maintained by the reducer result in state.
 */

const EMPTY_OBJECT = {};
/**
 * Shared reference to an empty array for cases where it is important to avoid
 * returning a new array reference on every invocation, as in a connected or
 * other pure component which performs `shouldComponentUpdate` check on props.
 * This should be used as a last resort, since the normalized data should be
 * maintained by the reducer result in state.
 */

const EMPTY_ARRAY = [];
/**
 * Returns true if any past editor history snapshots exist, or false otherwise.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether undo history exists.
 */

const hasEditorUndo = Object(external_wp_data_["createRegistrySelector"])(select => () => {
  return select('core').hasUndo();
});
/**
 * Returns true if any future editor history snapshots exist, or false
 * otherwise.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether redo history exists.
 */

const hasEditorRedo = Object(external_wp_data_["createRegistrySelector"])(select => () => {
  return select('core').hasRedo();
});
/**
 * Returns true if the currently edited post is yet to be saved, or false if
 * the post has been saved.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the post is new.
 */

function selectors_isEditedPostNew(state) {
  return selectors_getCurrentPost(state).status === 'auto-draft';
}
/**
 * Returns true if content includes unsaved changes, or false otherwise.
 *
 * @param {Object} state Editor state.
 *
 * @return {boolean} Whether content includes unsaved changes.
 */

function hasChangedContent(state) {
  const edits = selectors_getPostEdits(state);
  return 'blocks' in edits || // `edits` is intended to contain only values which are different from
  // the saved post, so the mere presence of a property is an indicator
  // that the value is different than what is known to be saved. While
  // content in Visual mode is represented by the blocks state, in Text
  // mode it is tracked by `edits.content`.
  'content' in edits;
}
/**
 * Returns true if there are unsaved values for the current edit session, or
 * false if the editing state matches the saved or new post.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether unsaved values exist.
 */

const selectors_isEditedPostDirty = Object(external_wp_data_["createRegistrySelector"])(select => state => {
  // Edits should contain only fields which differ from the saved post (reset
  // at initial load and save complete). Thus, a non-empty edits state can be
  // inferred to contain unsaved values.
  const postType = selectors_getCurrentPostType(state);
  const postId = selectors_getCurrentPostId(state);

  if (select('core').hasEditsForEntityRecord('postType', postType, postId)) {
    return true;
  }

  return false;
});
/**
 * Returns true if there are unsaved edits for entities other than
 * the editor's post, and false otherwise.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether there are edits or not.
 */

const selectors_hasNonPostEntityChanges = Object(external_wp_data_["createRegistrySelector"])(select => state => {
  const dirtyEntityRecords = select('core').__experimentalGetDirtyEntityRecords();

  const {
    type,
    id
  } = selectors_getCurrentPost(state);
  return Object(external_lodash_["some"])(dirtyEntityRecords, entityRecord => entityRecord.kind !== 'postType' || entityRecord.name !== type || entityRecord.key !== id);
});
/**
 * Returns true if there are no unsaved values for the current edit session and
 * if the currently edited post is new (has never been saved before).
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether new post and unsaved values exist.
 */

function selectors_isCleanNewPost(state) {
  return !selectors_isEditedPostDirty(state) && selectors_isEditedPostNew(state);
}
/**
 * Returns the post currently being edited in its last known saved state, not
 * including unsaved edits. Returns an object containing relevant default post
 * values if the post has not yet been saved.
 *
 * @param {Object} state Global application state.
 *
 * @return {Object} Post object.
 */

const selectors_getCurrentPost = Object(external_wp_data_["createRegistrySelector"])(select => state => {
  const postId = selectors_getCurrentPostId(state);
  const postType = selectors_getCurrentPostType(state);
  const post = select('core').getRawEntityRecord('postType', postType, postId);

  if (post) {
    return post;
  } // This exists for compatibility with the previous selector behavior
  // which would guarantee an object return based on the editor reducer's
  // default empty object state.


  return EMPTY_OBJECT;
});
/**
 * Returns the post type of the post currently being edited.
 *
 * @param {Object} state Global application state.
 *
 * @return {string} Post type.
 */

function selectors_getCurrentPostType(state) {
  return state.postType;
}
/**
 * Returns the ID of the post currently being edited, or null if the post has
 * not yet been saved.
 *
 * @param {Object} state Global application state.
 *
 * @return {?number} ID of current post.
 */

function selectors_getCurrentPostId(state) {
  return state.postId;
}
/**
 * Returns the number of revisions of the post currently being edited.
 *
 * @param {Object} state Global application state.
 *
 * @return {number} Number of revisions.
 */

function getCurrentPostRevisionsCount(state) {
  return Object(external_lodash_["get"])(selectors_getCurrentPost(state), ['_links', 'version-history', 0, 'count'], 0);
}
/**
 * Returns the last revision ID of the post currently being edited,
 * or null if the post has no revisions.
 *
 * @param {Object} state Global application state.
 *
 * @return {?number} ID of the last revision.
 */

function getCurrentPostLastRevisionId(state) {
  return Object(external_lodash_["get"])(selectors_getCurrentPost(state), ['_links', 'predecessor-version', 0, 'id'], null);
}
/**
 * Returns any post values which have been changed in the editor but not yet
 * been saved.
 *
 * @param {Object} state Global application state.
 *
 * @return {Object} Object of key value pairs comprising unsaved edits.
 */

const selectors_getPostEdits = Object(external_wp_data_["createRegistrySelector"])(select => state => {
  const postType = selectors_getCurrentPostType(state);
  const postId = selectors_getCurrentPostId(state);
  return select('core').getEntityRecordEdits('postType', postType, postId) || EMPTY_OBJECT;
});
/**
 * Returns a new reference when edited values have changed. This is useful in
 * inferring where an edit has been made between states by comparison of the
 * return values using strict equality.
 *
 * @deprecated since Gutenberg 6.5.0.
 *
 * @example
 *
 * ```
 * const hasEditOccurred = (
 *    getReferenceByDistinctEdits( beforeState ) !==
 *    getReferenceByDistinctEdits( afterState )
 * );
 * ```
 *
 * @param {Object} state Editor state.
 *
 * @return {*} A value whose reference will change only when an edit occurs.
 */

const getReferenceByDistinctEdits = Object(external_wp_data_["createRegistrySelector"])(select => () =>
/* state */
{
  external_wp_deprecated_default()("`wp.data.select( 'core/editor' ).getReferenceByDistinctEdits`", {
    since: '5.4',
    alternative: "`wp.data.select( 'core' ).getReferenceByDistinctEdits`"
  });
  return select('core').getReferenceByDistinctEdits();
});
/**
 * Returns an attribute value of the saved post.
 *
 * @param {Object} state         Global application state.
 * @param {string} attributeName Post attribute name.
 *
 * @return {*} Post attribute value.
 */

function selectors_getCurrentPostAttribute(state, attributeName) {
  switch (attributeName) {
    case 'type':
      return selectors_getCurrentPostType(state);

    case 'id':
      return selectors_getCurrentPostId(state);

    default:
      const post = selectors_getCurrentPost(state);

      if (!post.hasOwnProperty(attributeName)) {
        break;
      }

      return getPostRawValue(post[attributeName]);
  }
}
/**
 * Returns a single attribute of the post being edited, preferring the unsaved
 * edit if one exists, but merging with the attribute value for the last known
 * saved state of the post (this is needed for some nested attributes like meta).
 *
 * @param {Object} state         Global application state.
 * @param {string} attributeName Post attribute name.
 *
 * @return {*} Post attribute value.
 */

const getNestedEditedPostProperty = (state, attributeName) => {
  const edits = selectors_getPostEdits(state);

  if (!edits.hasOwnProperty(attributeName)) {
    return selectors_getCurrentPostAttribute(state, attributeName);
  }

  return { ...selectors_getCurrentPostAttribute(state, attributeName),
    ...edits[attributeName]
  };
};
/**
 * Returns a single attribute of the post being edited, preferring the unsaved
 * edit if one exists, but falling back to the attribute for the last known
 * saved state of the post.
 *
 * @param {Object} state         Global application state.
 * @param {string} attributeName Post attribute name.
 *
 * @return {*} Post attribute value.
 */


function selectors_getEditedPostAttribute(state, attributeName) {
  // Special cases
  switch (attributeName) {
    case 'content':
      return getEditedPostContent(state);
  } // Fall back to saved post value if not edited.


  const edits = selectors_getPostEdits(state);

  if (!edits.hasOwnProperty(attributeName)) {
    return selectors_getCurrentPostAttribute(state, attributeName);
  } // Merge properties are objects which contain only the patch edit in state,
  // and thus must be merged with the current post attribute.


  if (EDIT_MERGE_PROPERTIES.has(attributeName)) {
    return getNestedEditedPostProperty(state, attributeName);
  }

  return edits[attributeName];
}
/**
 * Returns an attribute value of the current autosave revision for a post, or
 * null if there is no autosave for the post.
 *
 * @deprecated since 5.6. Callers should use the `getAutosave( postType, postId, userId )` selector
 * 			   from the '@wordpress/core-data' package and access properties on the returned
 * 			   autosave object using getPostRawValue.
 *
 * @param {Object} state         Global application state.
 * @param {string} attributeName Autosave attribute name.
 *
 * @return {*} Autosave attribute value.
 */

const getAutosaveAttribute = Object(external_wp_data_["createRegistrySelector"])(select => (state, attributeName) => {
  if (!Object(external_lodash_["includes"])(AUTOSAVE_PROPERTIES, attributeName) && attributeName !== 'preview_link') {
    return;
  }

  const postType = selectors_getCurrentPostType(state);
  const postId = selectors_getCurrentPostId(state);
  const currentUserId = Object(external_lodash_["get"])(select('core').getCurrentUser(), ['id']);
  const autosave = select('core').getAutosave(postType, postId, currentUserId);

  if (autosave) {
    return getPostRawValue(autosave[attributeName]);
  }
});
/**
 * Returns the current visibility of the post being edited, preferring the
 * unsaved value if different than the saved post. The return value is one of
 * "private", "password", or "public".
 *
 * @param {Object} state Global application state.
 *
 * @return {string} Post visibility.
 */

function selectors_getEditedPostVisibility(state) {
  const status = selectors_getEditedPostAttribute(state, 'status');

  if (status === 'private') {
    return 'private';
  }

  const password = selectors_getEditedPostAttribute(state, 'password');

  if (password) {
    return 'password';
  }

  return 'public';
}
/**
 * Returns true if post is pending review.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether current post is pending review.
 */

function isCurrentPostPending(state) {
  return selectors_getCurrentPost(state).status === 'pending';
}
/**
 * Return true if the current post has already been published.
 *
 * @param {Object}  state       Global application state.
 * @param {Object?} currentPost Explicit current post for bypassing registry selector.
 *
 * @return {boolean} Whether the post has been published.
 */

function selectors_isCurrentPostPublished(state, currentPost) {
  const post = currentPost || selectors_getCurrentPost(state);
  return ['publish', 'private'].indexOf(post.status) !== -1 || post.status === 'future' && !Object(external_wp_date_["isInTheFuture"])(new Date(Number(Object(external_wp_date_["getDate"])(post.date)) - ONE_MINUTE_IN_MS));
}
/**
 * Returns true if post is already scheduled.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether current post is scheduled to be posted.
 */

function selectors_isCurrentPostScheduled(state) {
  return selectors_getCurrentPost(state).status === 'future' && !selectors_isCurrentPostPublished(state);
}
/**
 * Return true if the post being edited can be published.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the post can been published.
 */

function selectors_isEditedPostPublishable(state) {
  const post = selectors_getCurrentPost(state); // TODO: Post being publishable should be superset of condition of post
  // being saveable. Currently this restriction is imposed at UI.
  //
  //  See: <PostPublishButton /> (`isButtonEnabled` assigned by `isSaveable`)

  return selectors_isEditedPostDirty(state) || ['publish', 'private', 'future'].indexOf(post.status) === -1;
}
/**
 * Returns true if the post can be saved, or false otherwise. A post must
 * contain a title, an excerpt, or non-empty content to be valid for save.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the post can be saved.
 */

function selectors_isEditedPostSaveable(state) {
  if (selectors_isSavingPost(state)) {
    return false;
  } // TODO: Post should not be saveable if not dirty. Cannot be added here at
  // this time since posts where meta boxes are present can be saved even if
  // the post is not dirty. Currently this restriction is imposed at UI, but
  // should be moved here.
  //
  //  See: `isEditedPostPublishable` (includes `isEditedPostDirty` condition)
  //  See: <PostSavedState /> (`forceIsDirty` prop)
  //  See: <PostPublishButton /> (`forceIsDirty` prop)
  //  See: https://github.com/WordPress/gutenberg/pull/4184


  return !!selectors_getEditedPostAttribute(state, 'title') || !!selectors_getEditedPostAttribute(state, 'excerpt') || !isEditedPostEmpty(state) || external_wp_element_["Platform"].OS === 'native';
}
/**
 * Returns true if the edited post has content. A post has content if it has at
 * least one saveable block or otherwise has a non-empty content property
 * assigned.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether post has content.
 */

function isEditedPostEmpty(state) {
  // While the condition of truthy content string is sufficient to determine
  // emptiness, testing saveable blocks length is a trivial operation. Since
  // this function can be called frequently, optimize for the fast case as a
  // condition of the mere existence of blocks. Note that the value of edited
  // content takes precedent over block content, and must fall through to the
  // default logic.
  const blocks = getEditorBlocks(state);

  if (blocks.length) {
    // Pierce the abstraction of the serializer in knowing that blocks are
    // joined with with newlines such that even if every individual block
    // produces an empty save result, the serialized content is non-empty.
    if (blocks.length > 1) {
      return false;
    } // There are two conditions under which the optimization cannot be
    // assumed, and a fallthrough to getEditedPostContent must occur:
    //
    // 1. getBlocksForSerialization has special treatment in omitting a
    //    single unmodified default block.
    // 2. Comment delimiters are omitted for a freeform or unregistered
    //    block in its serialization. The freeform block specifically may
    //    produce an empty string in its saved output.
    //
    // For all other content, the single block is assumed to make a post
    // non-empty, if only by virtue of its own comment delimiters.


    const blockName = blocks[0].name;

    if (blockName !== Object(external_wp_blocks_["getDefaultBlockName"])() && blockName !== Object(external_wp_blocks_["getFreeformContentHandlerName"])()) {
      return false;
    }
  }

  return !getEditedPostContent(state);
}
/**
 * Returns true if the post can be autosaved, or false otherwise.
 *
 * @param {Object} state    Global application state.
 * @param {Object} autosave A raw autosave object from the REST API.
 *
 * @return {boolean} Whether the post can be autosaved.
 */

const selectors_isEditedPostAutosaveable = Object(external_wp_data_["createRegistrySelector"])(select => state => {
  // A post must contain a title, an excerpt, or non-empty content to be valid for autosaving.
  if (!selectors_isEditedPostSaveable(state)) {
    return false;
  } // A post is not autosavable when there is a post autosave lock.


  if (isPostAutosavingLocked(state)) {
    return false;
  }

  const postType = selectors_getCurrentPostType(state);
  const postId = selectors_getCurrentPostId(state);
  const hasFetchedAutosave = select('core').hasFetchedAutosaves(postType, postId);
  const currentUserId = Object(external_lodash_["get"])(select('core').getCurrentUser(), ['id']); // Disable reason - this line causes the side-effect of fetching the autosave
  // via a resolver, moving below the return would result in the autosave never
  // being fetched.
  // eslint-disable-next-line @wordpress/no-unused-vars-before-return

  const autosave = select('core').getAutosave(postType, postId, currentUserId); // If any existing autosaves have not yet been fetched, this function is
  // unable to determine if the post is autosaveable, so return false.

  if (!hasFetchedAutosave) {
    return false;
  } // If we don't already have an autosave, the post is autosaveable.


  if (!autosave) {
    return true;
  } // To avoid an expensive content serialization, use the content dirtiness
  // flag in place of content field comparison against the known autosave.
  // This is not strictly accurate, and relies on a tolerance toward autosave
  // request failures for unnecessary saves.


  if (hasChangedContent(state)) {
    return true;
  } // If the title or excerpt has changed, the post is autosaveable.


  return ['title', 'excerpt'].some(field => getPostRawValue(autosave[field]) !== selectors_getEditedPostAttribute(state, field));
});
/**
 * Returns the current autosave, or null if one is not set (i.e. if the post
 * has yet to be autosaved, or has been saved or published since the last
 * autosave).
 *
 * @deprecated since 5.6. Callers should use the `getAutosave( postType, postId, userId )`
 * 			   selector from the '@wordpress/core-data' package.
 *
 * @param {Object} state Editor state.
 *
 * @return {?Object} Current autosave, if exists.
 */

const getAutosave = Object(external_wp_data_["createRegistrySelector"])(select => state => {
  external_wp_deprecated_default()("`wp.data.select( 'core/editor' ).getAutosave()`", {
    since: '5.3',
    alternative: "`wp.data.select( 'core' ).getAutosave( postType, postId, userId )`"
  });
  const postType = selectors_getCurrentPostType(state);
  const postId = selectors_getCurrentPostId(state);
  const currentUserId = Object(external_lodash_["get"])(select('core').getCurrentUser(), ['id']);
  const autosave = select('core').getAutosave(postType, postId, currentUserId);
  return Object(external_lodash_["mapValues"])(Object(external_lodash_["pick"])(autosave, AUTOSAVE_PROPERTIES), getPostRawValue);
});
/**
 * Returns the true if there is an existing autosave, otherwise false.
 *
 * @deprecated since 5.6. Callers should use the `getAutosave( postType, postId, userId )` selector
 *             from the '@wordpress/core-data' package and check for a truthy value.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether there is an existing autosave.
 */

const hasAutosave = Object(external_wp_data_["createRegistrySelector"])(select => state => {
  external_wp_deprecated_default()("`wp.data.select( 'core/editor' ).hasAutosave()`", {
    since: '5.3',
    alternative: "`!! wp.data.select( 'core' ).getAutosave( postType, postId, userId )`"
  });
  const postType = selectors_getCurrentPostType(state);
  const postId = selectors_getCurrentPostId(state);
  const currentUserId = Object(external_lodash_["get"])(select('core').getCurrentUser(), ['id']);
  return !!select('core').getAutosave(postType, postId, currentUserId);
});
/**
 * Return true if the post being edited is being scheduled. Preferring the
 * unsaved status values.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the post has been published.
 */

function selectors_isEditedPostBeingScheduled(state) {
  const date = selectors_getEditedPostAttribute(state, 'date'); // Offset the date by one minute (network latency)

  const checkedDate = new Date(Number(Object(external_wp_date_["getDate"])(date)) - ONE_MINUTE_IN_MS);
  return Object(external_wp_date_["isInTheFuture"])(checkedDate);
}
/**
 * Returns whether the current post should be considered to have a "floating"
 * date (i.e. that it would publish "Immediately" rather than at a set time).
 *
 * Unlike in the PHP backend, the REST API returns a full date string for posts
 * where the 0000-00-00T00:00:00 placeholder is present in the database. To
 * infer that a post is set to publish "Immediately" we check whether the date
 * and modified date are the same.
 *
 * @param {Object} state Editor state.
 *
 * @return {boolean} Whether the edited post has a floating date value.
 */

function isEditedPostDateFloating(state) {
  const date = selectors_getEditedPostAttribute(state, 'date');
  const modified = selectors_getEditedPostAttribute(state, 'modified'); // This should be the status of the persisted post
  // It shouldn't use the "edited" status otherwise it breaks the
  // infered post data floating status
  // See https://github.com/WordPress/gutenberg/issues/28083

  const status = selectors_getCurrentPost(state).status;

  if (status === 'draft' || status === 'auto-draft' || status === 'pending') {
    return date === modified || date === null;
  }

  return false;
}
/**
 * Returns true if the post is currently being saved, or false otherwise.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether post is being saved.
 */

const selectors_isSavingPost = Object(external_wp_data_["createRegistrySelector"])(select => state => {
  const postType = selectors_getCurrentPostType(state);
  const postId = selectors_getCurrentPostId(state);
  return select('core').isSavingEntityRecord('postType', postType, postId);
});
/**
 * Returns true if a previous post save was attempted successfully, or false
 * otherwise.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the post was saved successfully.
 */

const didPostSaveRequestSucceed = Object(external_wp_data_["createRegistrySelector"])(select => state => {
  const postType = selectors_getCurrentPostType(state);
  const postId = selectors_getCurrentPostId(state);
  return !select('core').getLastEntitySaveError('postType', postType, postId);
});
/**
 * Returns true if a previous post save was attempted but failed, or false
 * otherwise.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the post save failed.
 */

const didPostSaveRequestFail = Object(external_wp_data_["createRegistrySelector"])(select => state => {
  const postType = selectors_getCurrentPostType(state);
  const postId = selectors_getCurrentPostId(state);
  return !!select('core').getLastEntitySaveError('postType', postType, postId);
});
/**
 * Returns true if the post is autosaving, or false otherwise.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the post is autosaving.
 */

function selectors_isAutosavingPost(state) {
  if (!selectors_isSavingPost(state)) {
    return false;
  }

  return !!Object(external_lodash_["get"])(state.saving, ['options', 'isAutosave']);
}
/**
 * Returns true if the post is being previewed, or false otherwise.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the post is being previewed.
 */

function isPreviewingPost(state) {
  if (!selectors_isSavingPost(state)) {
    return false;
  }

  return !!state.saving.options.isPreview;
}
/**
 * Returns the post preview link
 *
 * @param {Object} state Global application state.
 *
 * @return {string?} Preview Link.
 */

function selectors_getEditedPostPreviewLink(state) {
  if (state.saving.pending || selectors_isSavingPost(state)) {
    return;
  }

  let previewLink = getAutosaveAttribute(state, 'preview_link');

  if (!previewLink) {
    previewLink = selectors_getEditedPostAttribute(state, 'link');

    if (previewLink) {
      previewLink = Object(external_wp_url_["addQueryArgs"])(previewLink, {
        preview: true
      });
    }
  }

  const featuredImageId = selectors_getEditedPostAttribute(state, 'featured_media');

  if (previewLink && featuredImageId) {
    return Object(external_wp_url_["addQueryArgs"])(previewLink, {
      _thumbnail_id: featuredImageId
    });
  }

  return previewLink;
}
/**
 * Returns a suggested post format for the current post, inferred only if there
 * is a single block within the post and it is of a type known to match a
 * default post format. Returns null if the format cannot be determined.
 *
 * @param {Object} state Global application state.
 *
 * @return {?string} Suggested post format.
 */

function selectors_getSuggestedPostFormat(state) {
  const blocks = getEditorBlocks(state);
  if (blocks.length > 2) return null;
  let name; // If there is only one block in the content of the post grab its name
  // so we can derive a suitable post format from it.

  if (blocks.length === 1) {
    name = blocks[0].name; // check for core/embed `video` and `audio` eligible suggestions

    if (name === 'core/embed') {
      var _blocks$0$attributes;

      const provider = (_blocks$0$attributes = blocks[0].attributes) === null || _blocks$0$attributes === void 0 ? void 0 : _blocks$0$attributes.providerNameSlug;

      if (['youtube', 'vimeo'].includes(provider)) {
        name = 'core/video';
      } else if (['spotify', 'soundcloud'].includes(provider)) {
        name = 'core/audio';
      }
    }
  } // If there are two blocks in the content and the last one is a text blocks
  // grab the name of the first one to also suggest a post format from it.


  if (blocks.length === 2 && blocks[1].name === 'core/paragraph') {
    name = blocks[0].name;
  } // We only convert to default post formats in core.


  switch (name) {
    case 'core/image':
      return 'image';

    case 'core/quote':
    case 'core/pullquote':
      return 'quote';

    case 'core/gallery':
      return 'gallery';

    case 'core/video':
      return 'video';

    case 'core/audio':
      return 'audio';

    default:
      return null;
  }
}
/**
 * Returns a set of blocks which are to be used in consideration of the post's
 * generated save content.
 *
 * @deprecated since Gutenberg 6.2.0.
 *
 * @param {Object} state Editor state.
 *
 * @return {WPBlock[]} Filtered set of blocks for save.
 */

function getBlocksForSerialization(state) {
  external_wp_deprecated_default()('`core/editor` getBlocksForSerialization selector', {
    since: '5.3',
    alternative: 'getEditorBlocks',
    hint: 'Blocks serialization pre-processing occurs at save time'
  });
  const blocks = state.editor.present.blocks.value; // WARNING: Any changes to the logic of this function should be verified
  // against the implementation of isEditedPostEmpty, which bypasses this
  // function for performance' sake, in an assumption of this current logic
  // being irrelevant to the optimized condition of emptiness.
  // A single unmodified default block is assumed to be equivalent to an
  // empty post.

  const isSingleUnmodifiedDefaultBlock = blocks.length === 1 && Object(external_wp_blocks_["isUnmodifiedDefaultBlock"])(blocks[0]);

  if (isSingleUnmodifiedDefaultBlock) {
    return [];
  }

  return blocks;
}
/**
 * Returns the content of the post being edited.
 *
 * @param {Object} state Global application state.
 *
 * @return {string} Post content.
 */

const getEditedPostContent = Object(external_wp_data_["createRegistrySelector"])(select => state => {
  const postId = selectors_getCurrentPostId(state);
  const postType = selectors_getCurrentPostType(state);
  const record = select('core').getEditedEntityRecord('postType', postType, postId);

  if (record) {
    if (typeof record.content === 'function') {
      return record.content(record);
    } else if (record.blocks) {
      return Object(external_wp_blocks_["__unstableSerializeAndClean"])(record.blocks);
    } else if (record.content) {
      return record.content;
    }
  }

  return '';
});
/**
 * Returns true if the post is being published, or false otherwise.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether post is being published.
 */

function selectors_isPublishingPost(state) {
  return selectors_isSavingPost(state) && !selectors_isCurrentPostPublished(state) && selectors_getEditedPostAttribute(state, 'status') === 'publish';
}
/**
 * Returns whether the permalink is editable or not.
 *
 * @param {Object} state Editor state.
 *
 * @return {boolean} Whether or not the permalink is editable.
 */

function isPermalinkEditable(state) {
  const permalinkTemplate = selectors_getEditedPostAttribute(state, 'permalink_template');
  return PERMALINK_POSTNAME_REGEX.test(permalinkTemplate);
}
/**
 * Returns the permalink for the post.
 *
 * @param {Object} state Editor state.
 *
 * @return {?string} The permalink, or null if the post is not viewable.
 */

function getPermalink(state) {
  const permalinkParts = getPermalinkParts(state);

  if (!permalinkParts) {
    return null;
  }

  const {
    prefix,
    postName,
    suffix
  } = permalinkParts;

  if (isPermalinkEditable(state)) {
    return prefix + postName + suffix;
  }

  return prefix;
}
/**
 * Returns the slug for the post being edited, preferring a manually edited
 * value if one exists, then a sanitized version of the current post title, and
 * finally the post ID.
 *
 * @param {Object} state Editor state.
 *
 * @return {string} The current slug to be displayed in the editor
 */

function getEditedPostSlug(state) {
  return selectors_getEditedPostAttribute(state, 'slug') || cleanForSlug(selectors_getEditedPostAttribute(state, 'title')) || selectors_getCurrentPostId(state);
}
/**
 * Returns the permalink for a post, split into it's three parts: the prefix,
 * the postName, and the suffix.
 *
 * @param {Object} state Editor state.
 *
 * @return {Object} An object containing the prefix, postName, and suffix for
 *                  the permalink, or null if the post is not viewable.
 */

function getPermalinkParts(state) {
  const permalinkTemplate = selectors_getEditedPostAttribute(state, 'permalink_template');

  if (!permalinkTemplate) {
    return null;
  }

  const postName = selectors_getEditedPostAttribute(state, 'slug') || selectors_getEditedPostAttribute(state, 'generated_slug');
  const [prefix, suffix] = permalinkTemplate.split(PERMALINK_POSTNAME_REGEX);
  return {
    prefix,
    postName,
    suffix
  };
}
/**
 * Returns whether the post is locked.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Is locked.
 */

function selectors_isPostLocked(state) {
  return state.postLock.isLocked;
}
/**
 * Returns whether post saving is locked.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Is locked.
 */

function selectors_isPostSavingLocked(state) {
  return Object.keys(state.postSavingLock).length > 0;
}
/**
 * Returns whether post autosaving is locked.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Is locked.
 */

function isPostAutosavingLocked(state) {
  return Object.keys(state.postAutosavingLock).length > 0;
}
/**
 * Returns whether the edition of the post has been taken over.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Is post lock takeover.
 */

function isPostLockTakeover(state) {
  return state.postLock.isTakeover;
}
/**
 * Returns details about the post lock user.
 *
 * @param {Object} state Global application state.
 *
 * @return {Object} A user object.
 */

function getPostLockUser(state) {
  return state.postLock.user;
}
/**
 * Returns the active post lock.
 *
 * @param {Object} state Global application state.
 *
 * @return {Object} The lock object.
 */

function getActivePostLock(state) {
  return state.postLock.activePostLock;
}
/**
 * Returns whether or not the user has the unfiltered_html capability.
 *
 * @param {Object} state Editor state.
 *
 * @return {boolean} Whether the user can or can't post unfiltered HTML.
 */

function selectors_canUserUseUnfilteredHTML(state) {
  return Object(external_lodash_["has"])(selectors_getCurrentPost(state), ['_links', 'wp:action-unfiltered-html']);
}
/**
 * Returns whether the pre-publish panel should be shown
 * or skipped when the user clicks the "publish" button.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the pre-publish panel should be shown or not.
 */

function selectors_isPublishSidebarEnabled(state) {
  if (state.preferences.hasOwnProperty('isPublishSidebarEnabled')) {
    return state.preferences.isPublishSidebarEnabled;
  }

  return PREFERENCES_DEFAULTS.isPublishSidebarEnabled;
}
/**
 * Return the current block list.
 *
 * @param {Object} state
 * @return {Array} Block list.
 */

function getEditorBlocks(state) {
  return selectors_getEditedPostAttribute(state, 'blocks') || EMPTY_ARRAY;
}
/**
 * A block selection object.
 *
 * @typedef {Object} WPBlockSelection
 *
 * @property {string} clientId     A block client ID.
 * @property {string} attributeKey A block attribute key.
 * @property {number} offset       An attribute value offset, based on the rich
 *                                 text value. See `wp.richText.create`.
 */

/**
 * Returns the current selection start.
 *
 * @param {Object} state
 * @return {WPBlockSelection} The selection start.
 *
 * @deprecated since Gutenberg 10.0.0.
 */

function getEditorSelectionStart(state) {
  var _getEditedPostAttribu;

  external_wp_deprecated_default()("select('core/editor').getEditorSelectionStart", {
    since: '10.0',
    plugin: 'Gutenberg',
    alternative: "select('core/editor').getEditorSelection"
  });
  return (_getEditedPostAttribu = selectors_getEditedPostAttribute(state, 'selection')) === null || _getEditedPostAttribu === void 0 ? void 0 : _getEditedPostAttribu.selectionStart;
}
/**
 * Returns the current selection end.
 *
 * @param {Object} state
 * @return {WPBlockSelection} The selection end.
 *
 * @deprecated since Gutenberg 10.0.0.
 */

function getEditorSelectionEnd(state) {
  var _getEditedPostAttribu2;

  external_wp_deprecated_default()("select('core/editor').getEditorSelectionStart", {
    since: '10.0',
    plugin: 'Gutenberg',
    alternative: "select('core/editor').getEditorSelection"
  });
  return (_getEditedPostAttribu2 = selectors_getEditedPostAttribute(state, 'selection')) === null || _getEditedPostAttribu2 === void 0 ? void 0 : _getEditedPostAttribu2.selectionEnd;
}
/**
 * Returns the current selection.
 *
 * @param {Object} state
 * @return {WPBlockSelection} The selection end.
 */

function selectors_getEditorSelection(state) {
  return selectors_getEditedPostAttribute(state, 'selection');
}
/**
 * Is the editor ready
 *
 * @param {Object} state
 * @return {boolean} is Ready.
 */

function selectors_unstableIsEditorReady(state) {
  return state.isReady;
}
/**
 * Returns the post editor settings.
 *
 * @param {Object} state Editor state.
 *
 * @return {Object} The editor settings object.
 */

function selectors_getEditorSettings(state) {
  return state.editorSettings;
}
/*
 * Backward compatibility
 */

/**
 * Returns state object prior to a specified optimist transaction ID, or `null`
 * if the transaction corresponding to the given ID cannot be found.
 *
 * @deprecated since Gutenberg 9.7.0.
 */

function getStateBeforeOptimisticTransaction() {
  external_wp_deprecated_default()("select('core/editor').getStateBeforeOptimisticTransaction", {
    since: '5.7',
    hint: 'No state history is kept on this store anymore'
  });
  return null;
}
/**
 * Returns true if an optimistic transaction is pending commit, for which the
 * before state satisfies the given predicate function.
 *
 * @deprecated since Gutenberg 9.7.0.
 */

function inSomeHistory() {
  external_wp_deprecated_default()("select('core/editor').inSomeHistory", {
    since: '5.7',
    hint: 'No state history is kept on this store anymore'
  });
  return false;
}

function getBlockEditorSelector(name) {
  return Object(external_wp_data_["createRegistrySelector"])(select => (state, ...args) => {
    external_wp_deprecated_default()("`wp.data.select( 'core/editor' )." + name + '`', {
      since: '5.3',
      alternative: "`wp.data.select( 'core/block-editor' )." + name + '`'
    });
    return select('core/block-editor')[name](...args);
  });
}
/**
 * @see getBlockName in core/block-editor store.
 */


const getBlockName = getBlockEditorSelector('getBlockName');
/**
 * @see isBlockValid in core/block-editor store.
 */

const isBlockValid = getBlockEditorSelector('isBlockValid');
/**
 * @see getBlockAttributes in core/block-editor store.
 */

const getBlockAttributes = getBlockEditorSelector('getBlockAttributes');
/**
 * @see getBlock in core/block-editor store.
 */

const getBlock = getBlockEditorSelector('getBlock');
/**
 * @see getBlocks in core/block-editor store.
 */

const selectors_getBlocks = getBlockEditorSelector('getBlocks');
/**
 * @see __unstableGetBlockWithoutInnerBlocks in core/block-editor store.
 */

const __unstableGetBlockWithoutInnerBlocks = getBlockEditorSelector('__unstableGetBlockWithoutInnerBlocks');
/**
 * @see getClientIdsOfDescendants in core/block-editor store.
 */

const getClientIdsOfDescendants = getBlockEditorSelector('getClientIdsOfDescendants');
/**
 * @see getClientIdsWithDescendants in core/block-editor store.
 */

const getClientIdsWithDescendants = getBlockEditorSelector('getClientIdsWithDescendants');
/**
 * @see getGlobalBlockCount in core/block-editor store.
 */

const selectors_getGlobalBlockCount = getBlockEditorSelector('getGlobalBlockCount');
/**
 * @see getBlocksByClientId in core/block-editor store.
 */

const getBlocksByClientId = getBlockEditorSelector('getBlocksByClientId');
/**
 * @see getBlockCount in core/block-editor store.
 */

const getBlockCount = getBlockEditorSelector('getBlockCount');
/**
 * @see getBlockSelectionStart in core/block-editor store.
 */

const getBlockSelectionStart = getBlockEditorSelector('getBlockSelectionStart');
/**
 * @see getBlockSelectionEnd in core/block-editor store.
 */

const getBlockSelectionEnd = getBlockEditorSelector('getBlockSelectionEnd');
/**
 * @see getSelectedBlockCount in core/block-editor store.
 */

const getSelectedBlockCount = getBlockEditorSelector('getSelectedBlockCount');
/**
 * @see hasSelectedBlock in core/block-editor store.
 */

const hasSelectedBlock = getBlockEditorSelector('hasSelectedBlock');
/**
 * @see getSelectedBlockClientId in core/block-editor store.
 */

const getSelectedBlockClientId = getBlockEditorSelector('getSelectedBlockClientId');
/**
 * @see getSelectedBlock in core/block-editor store.
 */

const getSelectedBlock = getBlockEditorSelector('getSelectedBlock');
/**
 * @see getBlockRootClientId in core/block-editor store.
 */

const getBlockRootClientId = getBlockEditorSelector('getBlockRootClientId');
/**
 * @see getBlockHierarchyRootClientId in core/block-editor store.
 */

const getBlockHierarchyRootClientId = getBlockEditorSelector('getBlockHierarchyRootClientId');
/**
 * @see getAdjacentBlockClientId in core/block-editor store.
 */

const getAdjacentBlockClientId = getBlockEditorSelector('getAdjacentBlockClientId');
/**
 * @see getPreviousBlockClientId in core/block-editor store.
 */

const getPreviousBlockClientId = getBlockEditorSelector('getPreviousBlockClientId');
/**
 * @see getNextBlockClientId in core/block-editor store.
 */

const getNextBlockClientId = getBlockEditorSelector('getNextBlockClientId');
/**
 * @see getSelectedBlocksInitialCaretPosition in core/block-editor store.
 */

const getSelectedBlocksInitialCaretPosition = getBlockEditorSelector('getSelectedBlocksInitialCaretPosition');
/**
 * @see getMultiSelectedBlockClientIds in core/block-editor store.
 */

const getMultiSelectedBlockClientIds = getBlockEditorSelector('getMultiSelectedBlockClientIds');
/**
 * @see getMultiSelectedBlocks in core/block-editor store.
 */

const getMultiSelectedBlocks = getBlockEditorSelector('getMultiSelectedBlocks');
/**
 * @see getFirstMultiSelectedBlockClientId in core/block-editor store.
 */

const getFirstMultiSelectedBlockClientId = getBlockEditorSelector('getFirstMultiSelectedBlockClientId');
/**
 * @see getLastMultiSelectedBlockClientId in core/block-editor store.
 */

const getLastMultiSelectedBlockClientId = getBlockEditorSelector('getLastMultiSelectedBlockClientId');
/**
 * @see isFirstMultiSelectedBlock in core/block-editor store.
 */

const isFirstMultiSelectedBlock = getBlockEditorSelector('isFirstMultiSelectedBlock');
/**
 * @see isBlockMultiSelected in core/block-editor store.
 */

const isBlockMultiSelected = getBlockEditorSelector('isBlockMultiSelected');
/**
 * @see isAncestorMultiSelected in core/block-editor store.
 */

const isAncestorMultiSelected = getBlockEditorSelector('isAncestorMultiSelected');
/**
 * @see getMultiSelectedBlocksStartClientId in core/block-editor store.
 */

const getMultiSelectedBlocksStartClientId = getBlockEditorSelector('getMultiSelectedBlocksStartClientId');
/**
 * @see getMultiSelectedBlocksEndClientId in core/block-editor store.
 */

const getMultiSelectedBlocksEndClientId = getBlockEditorSelector('getMultiSelectedBlocksEndClientId');
/**
 * @see getBlockOrder in core/block-editor store.
 */

const getBlockOrder = getBlockEditorSelector('getBlockOrder');
/**
 * @see getBlockIndex in core/block-editor store.
 */

const getBlockIndex = getBlockEditorSelector('getBlockIndex');
/**
 * @see isBlockSelected in core/block-editor store.
 */

const isBlockSelected = getBlockEditorSelector('isBlockSelected');
/**
 * @see hasSelectedInnerBlock in core/block-editor store.
 */

const hasSelectedInnerBlock = getBlockEditorSelector('hasSelectedInnerBlock');
/**
 * @see isBlockWithinSelection in core/block-editor store.
 */

const isBlockWithinSelection = getBlockEditorSelector('isBlockWithinSelection');
/**
 * @see hasMultiSelection in core/block-editor store.
 */

const hasMultiSelection = getBlockEditorSelector('hasMultiSelection');
/**
 * @see isMultiSelecting in core/block-editor store.
 */

const isMultiSelecting = getBlockEditorSelector('isMultiSelecting');
/**
 * @see isSelectionEnabled in core/block-editor store.
 */

const isSelectionEnabled = getBlockEditorSelector('isSelectionEnabled');
/**
 * @see getBlockMode in core/block-editor store.
 */

const getBlockMode = getBlockEditorSelector('getBlockMode');
/**
 * @see isTyping in core/block-editor store.
 */

const isTyping = getBlockEditorSelector('isTyping');
/**
 * @see isCaretWithinFormattedText in core/block-editor store.
 */

const isCaretWithinFormattedText = getBlockEditorSelector('isCaretWithinFormattedText');
/**
 * @see getBlockInsertionPoint in core/block-editor store.
 */

const getBlockInsertionPoint = getBlockEditorSelector('getBlockInsertionPoint');
/**
 * @see isBlockInsertionPointVisible in core/block-editor store.
 */

const isBlockInsertionPointVisible = getBlockEditorSelector('isBlockInsertionPointVisible');
/**
 * @see isValidTemplate in core/block-editor store.
 */

const isValidTemplate = getBlockEditorSelector('isValidTemplate');
/**
 * @see getTemplate in core/block-editor store.
 */

const getTemplate = getBlockEditorSelector('getTemplate');
/**
 * @see getTemplateLock in core/block-editor store.
 */

const getTemplateLock = getBlockEditorSelector('getTemplateLock');
/**
 * @see canInsertBlockType in core/block-editor store.
 */

const canInsertBlockType = getBlockEditorSelector('canInsertBlockType');
/**
 * @see getInserterItems in core/block-editor store.
 */

const getInserterItems = getBlockEditorSelector('getInserterItems');
/**
 * @see hasInserterItems in core/block-editor store.
 */

const hasInserterItems = getBlockEditorSelector('hasInserterItems');
/**
 * @see getBlockListSettings in core/block-editor store.
 */

const getBlockListSettings = getBlockEditorSelector('getBlockListSettings');
/**
 * Returns the default template types.
 *
 * @param {Object} state Global application state.
 *
 * @return {Object} The template types.
 */

function __experimentalGetDefaultTemplateTypes(state) {
  var _getEditorSettings;

  return (_getEditorSettings = selectors_getEditorSettings(state)) === null || _getEditorSettings === void 0 ? void 0 : _getEditorSettings.defaultTemplateTypes;
}
/**
 * Returns the default template part areas.
 *
 * @param {Object} state Global application state.
 *
 * @return {Array} The template part areas.
 */

const __experimentalGetDefaultTemplatePartAreas = Object(rememo["a" /* default */])(state => {
  var _getEditorSettings2;

  const areas = ((_getEditorSettings2 = selectors_getEditorSettings(state)) === null || _getEditorSettings2 === void 0 ? void 0 : _getEditorSettings2.defaultTemplatePartAreas) || [];
  return areas === null || areas === void 0 ? void 0 : areas.map(item => {
    return { ...item,
      icon: getTemplatePartIcon(item.icon)
    };
  });
}, state => {
  var _getEditorSettings3;

  return [(_getEditorSettings3 = selectors_getEditorSettings(state)) === null || _getEditorSettings3 === void 0 ? void 0 : _getEditorSettings3.defaultTemplatePartAreas];
});
/**
 * Returns a default template type searched by slug.
 *
 * @param {Object} state Global application state.
 * @param {string} slug The template type slug.
 *
 * @return {Object} The template type.
 */

const __experimentalGetDefaultTemplateType = Object(rememo["a" /* default */])((state, slug) => Object(external_lodash_["find"])(__experimentalGetDefaultTemplateTypes(state), {
  slug
}) || {}, (state, slug) => [__experimentalGetDefaultTemplateTypes(state), slug]);
/**
 * Given a template entity, return information about it which is ready to be
 * rendered, such as the title, description, and icon.
 *
 * @param {Object} state Global application state.
 * @param {Object} template The template for which we need information.
 * @return {Object} Information about the template, including title, description, and icon.
 */

function __experimentalGetTemplateInfo(state, template) {
  var _experimentalGetDefa;

  if (!template) {
    return {};
  }

  const {
    excerpt,
    slug,
    title,
    area
  } = template;

  const {
    title: defaultTitle,
    description: defaultDescription
  } = __experimentalGetDefaultTemplateType(state, slug);

  const templateTitle = Object(external_lodash_["isString"])(title) ? title : title === null || title === void 0 ? void 0 : title.rendered;
  const templateDescription = Object(external_lodash_["isString"])(excerpt) ? excerpt : excerpt === null || excerpt === void 0 ? void 0 : excerpt.raw;
  const templateIcon = ((_experimentalGetDefa = __experimentalGetDefaultTemplatePartAreas(state).find(item => area === item.area)) === null || _experimentalGetDefa === void 0 ? void 0 : _experimentalGetDefa.icon) || layout["a" /* default */];
  return {
    title: templateTitle && templateTitle !== slug ? templateTitle : defaultTitle || slug,
    description: templateDescription || defaultDescription,
    icon: templateIcon
  };
}

// EXTERNAL MODULE: external ["wp","notices"]
var external_wp_notices_ = __webpack_require__("onLe");

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__("l3Sj");

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/store/utils/notice-builder.js
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


/**
 * External dependencies
 */


/**
 * Builds the arguments for a success notification dispatch.
 *
 * @param {Object} data Incoming data to build the arguments from.
 *
 * @return {Array} Arguments for dispatch. An empty array signals no
 *                 notification should be sent.
 */

function getNotificationArgumentsForSaveSuccess(data) {
  const {
    previousPost,
    post,
    postType
  } = data; // Autosaves are neither shown a notice nor redirected.

  if (Object(external_lodash_["get"])(data.options, ['isAutosave'])) {
    return [];
  }

  const publishStatus = ['publish', 'private', 'future'];
  const isPublished = Object(external_lodash_["includes"])(publishStatus, previousPost.status);
  const willPublish = Object(external_lodash_["includes"])(publishStatus, post.status);
  let noticeMessage;
  let shouldShowLink = Object(external_lodash_["get"])(postType, ['viewable'], false);

  if (!isPublished && !willPublish) {
    // If saving a non-published post, don't show notice.
    noticeMessage = null;
  } else if (isPublished && !willPublish) {
    // If undoing publish status, show specific notice
    noticeMessage = postType.labels.item_reverted_to_draft;
    shouldShowLink = false;
  } else if (!isPublished && willPublish) {
    // If publishing or scheduling a post, show the corresponding
    // publish message
    noticeMessage = {
      publish: postType.labels.item_published,
      private: postType.labels.item_published_privately,
      future: postType.labels.item_scheduled
    }[post.status];
  } else {
    // Generic fallback notice
    noticeMessage = postType.labels.item_updated;
  }

  if (noticeMessage) {
    const actions = [];

    if (shouldShowLink) {
      actions.push({
        label: postType.labels.view_item,
        url: post.link
      });
    }

    return [noticeMessage, {
      id: SAVE_POST_NOTICE_ID,
      type: 'snackbar',
      actions
    }];
  }

  return [];
}
/**
 * Builds the fail notification arguments for dispatch.
 *
 * @param {Object} data Incoming data to build the arguments with.
 *
 * @return {Array} Arguments for dispatch. An empty array signals no
 *                 notification should be sent.
 */

function getNotificationArgumentsForSaveFail(data) {
  const {
    post,
    edits,
    error
  } = data;

  if (error && 'rest_autosave_no_changes' === error.code) {
    // Autosave requested a new autosave, but there were no changes. This shouldn't
    // result in an error notice for the user.
    return [];
  }

  const publishStatus = ['publish', 'private', 'future'];
  const isPublished = publishStatus.indexOf(post.status) !== -1; // If the post was being published, we show the corresponding publish error message
  // Unless we publish an "updating failed" message

  const messages = {
    publish: Object(external_wp_i18n_["__"])('Publishing failed.'),
    private: Object(external_wp_i18n_["__"])('Publishing failed.'),
    future: Object(external_wp_i18n_["__"])('Scheduling failed.')
  };
  let noticeMessage = !isPublished && publishStatus.indexOf(edits.status) !== -1 ? messages[edits.status] : Object(external_wp_i18n_["__"])('Updating failed.'); // Check if message string contains HTML. Notice text is currently only
  // supported as plaintext, and stripping the tags may muddle the meaning.

  if (error.message && !/<\/?[^>]*>/.test(error.message)) {
    noticeMessage = [noticeMessage, error.message].join(' ');
  }

  return [noticeMessage, {
    id: SAVE_POST_NOTICE_ID
  }];
}
/**
 * Builds the trash fail notification arguments for dispatch.
 *
 * @param {Object} data
 *
 * @return {Array} Arguments for dispatch.
 */

function getNotificationArgumentsForTrashFail(data) {
  return [data.error.message && data.error.code !== 'unknown_error' ? data.error.message : Object(external_wp_i18n_["__"])('Trashing failed'), {
    id: TRASH_POST_NOTICE_ID
  }];
}

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/store/actions.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */



/**
 * Returns an action generator used in signalling that editor has initialized with
 * the specified post object and editor settings.
 *
 * @param {Object} post      Post object.
 * @param {Object} edits     Initial edited attributes object.
 * @param {Array?} template  Block Template.
 */

function* actions_setupEditor(post, edits, template) {
  // In order to ensure maximum of a single parse during setup, edits are
  // included as part of editor setup action. Assume edited content as
  // canonical if provided, falling back to post.
  let content;

  if (Object(external_lodash_["has"])(edits, ['content'])) {
    content = edits.content;
  } else {
    content = post.content.raw;
  }

  let blocks = Object(external_wp_blocks_["parse"])(content); // Apply a template for new posts only, if exists.

  const isNewPost = post.status === 'auto-draft';

  if (isNewPost && template) {
    blocks = Object(external_wp_blocks_["synchronizeBlocksWithTemplate"])(blocks, template);
  }

  yield resetPost(post);
  yield {
    type: 'SETUP_EDITOR',
    post,
    edits,
    template
  };
  yield actions_resetEditorBlocks(blocks, {
    __unstableShouldCreateUndoLevel: false
  });
  yield setupEditorState(post);

  if (edits && Object.keys(edits).some(key => edits[key] !== (Object(external_lodash_["has"])(post, [key, 'raw']) ? post[key].raw : post[key]))) {
    yield actions_editPost(edits);
  }
}
/**
 * Returns an action object signalling that the editor is being destroyed and
 * that any necessary state or side-effect cleanup should occur.
 *
 * @return {Object} Action object.
 */

function actions_experimentalTearDownEditor() {
  return {
    type: 'TEAR_DOWN_EDITOR'
  };
}
/**
 * Returns an action object used in signalling that the latest version of the
 * post has been received, either by initialization or save.
 *
 * @param {Object} post Post object.
 *
 * @return {Object} Action object.
 */

function resetPost(post) {
  return {
    type: 'RESET_POST',
    post
  };
}
/**
 * Returns an action object used in signalling that the latest autosave of the
 * post has been received, by initialization or autosave.
 *
 * @deprecated since 5.6. Callers should use the `receiveAutosaves( postId, autosave )`
 * 			   selector from the '@wordpress/core-data' package.
 *
 * @param {Object} newAutosave Autosave post object.
 *
 * @return {Object} Action object.
 */

function* resetAutosave(newAutosave) {
  external_wp_deprecated_default()('resetAutosave action (`core/editor` store)', {
    since: '5.3',
    alternative: 'receiveAutosaves action (`core` store)'
  });
  const postId = yield external_wp_data_["controls"].select(STORE_NAME, 'getCurrentPostId');
  yield external_wp_data_["controls"].dispatch('core', 'receiveAutosaves', postId, newAutosave);
  return {
    type: '__INERT__'
  };
}
/**
 * Action for dispatching that a post update request has started.
 *
 * @param {Object} options
 *
 * @return {Object} An action object
 */

function __experimentalRequestPostUpdateStart(options = {}) {
  return {
    type: 'REQUEST_POST_UPDATE_START',
    options
  };
}
/**
 * Action for dispatching that a post update request has finished.
 *
 * @param {Object} options
 *
 * @return {Object} An action object
 */

function __experimentalRequestPostUpdateFinish(options = {}) {
  return {
    type: 'REQUEST_POST_UPDATE_FINISH',
    options
  };
}
/**
 * Returns an action object used in signalling that a patch of updates for the
 * latest version of the post have been received.
 *
 * @return {Object} Action object.
 * @deprecated since Gutenberg 9.7.0.
 */

function updatePost() {
  external_wp_deprecated_default()("wp.data.dispatch( 'core/editor' ).updatePost", {
    since: '5.7',
    alternative: 'User the core entitires store instead'
  });
  return {
    type: 'DO_NOTHING'
  };
}
/**
 * Returns an action object used to setup the editor state when first opening
 * an editor.
 *
 * @param {Object} post   Post object.
 *
 * @return {Object} Action object.
 */

function setupEditorState(post) {
  return {
    type: 'SETUP_EDITOR_STATE',
    post
  };
}
/**
 * Returns an action object used in signalling that attributes of the post have
 * been edited.
 *
 * @param {Object} edits   Post attributes to edit.
 * @param {Object} options Options for the edit.
 *
 * @yield {Object} Action object or control.
 */

function* actions_editPost(edits, options) {
  const {
    id,
    type
  } = yield external_wp_data_["controls"].select(STORE_NAME, 'getCurrentPost');
  yield external_wp_data_["controls"].dispatch('core', 'editEntityRecord', 'postType', type, id, edits, options);
}
/**
 * Action generator for saving the current post in the editor.
 *
 * @param {Object} options
 */

function* actions_savePost(options = {}) {
  if (!(yield external_wp_data_["controls"].select(STORE_NAME, 'isEditedPostSaveable'))) {
    return;
  }

  let edits = {
    content: yield external_wp_data_["controls"].select(STORE_NAME, 'getEditedPostContent')
  };

  if (!options.isAutosave) {
    yield external_wp_data_["controls"].dispatch(STORE_NAME, 'editPost', edits, {
      undoIgnore: true
    });
  }

  yield __experimentalRequestPostUpdateStart(options);
  const previousRecord = yield external_wp_data_["controls"].select(STORE_NAME, 'getCurrentPost');
  edits = {
    id: previousRecord.id,
    ...(yield external_wp_data_["controls"].select('core', 'getEntityRecordNonTransientEdits', 'postType', previousRecord.type, previousRecord.id)),
    ...edits
  };
  yield external_wp_data_["controls"].dispatch('core', 'saveEntityRecord', 'postType', previousRecord.type, edits, options);
  yield __experimentalRequestPostUpdateFinish(options);
  const error = yield external_wp_data_["controls"].select('core', 'getLastEntitySaveError', 'postType', previousRecord.type, previousRecord.id);

  if (error) {
    const args = getNotificationArgumentsForSaveFail({
      post: previousRecord,
      edits,
      error
    });

    if (args.length) {
      yield external_wp_data_["controls"].dispatch(external_wp_notices_["store"], 'createErrorNotice', ...args);
    }
  } else {
    const updatedRecord = yield external_wp_data_["controls"].select(STORE_NAME, 'getCurrentPost');
    const args = getNotificationArgumentsForSaveSuccess({
      previousPost: previousRecord,
      post: updatedRecord,
      postType: yield external_wp_data_["controls"].resolveSelect('core', 'getPostType', updatedRecord.type),
      options
    });

    if (args.length) {
      yield external_wp_data_["controls"].dispatch(external_wp_notices_["store"], 'createSuccessNotice', ...args);
    } // Make sure that any edits after saving create an undo level and are
    // considered for change detection.


    if (!options.isAutosave) {
      yield external_wp_data_["controls"].dispatch('core/block-editor', '__unstableMarkLastChangeAsPersistent');
    }
  }
}
/**
 * Action generator for handling refreshing the current post.
 */

function* refreshPost() {
  const post = yield external_wp_data_["controls"].select(STORE_NAME, 'getCurrentPost');
  const postTypeSlug = yield external_wp_data_["controls"].select(STORE_NAME, 'getCurrentPostType');
  const postType = yield external_wp_data_["controls"].resolveSelect('core', 'getPostType', postTypeSlug);
  const newPost = yield Object(external_wp_dataControls_["apiFetch"])({
    // Timestamp arg allows caller to bypass browser caching, which is
    // expected for this specific function.
    path: `/wp/v2/${postType.rest_base}/${post.id}` + `?context=edit&_timestamp=${Date.now()}`
  });
  yield external_wp_data_["controls"].dispatch(STORE_NAME, 'resetPost', newPost);
}
/**
 * Action generator for trashing the current post in the editor.
 */

function* trashPost() {
  const postTypeSlug = yield external_wp_data_["controls"].select(STORE_NAME, 'getCurrentPostType');
  const postType = yield external_wp_data_["controls"].resolveSelect('core', 'getPostType', postTypeSlug);
  yield external_wp_data_["controls"].dispatch(external_wp_notices_["store"], 'removeNotice', TRASH_POST_NOTICE_ID);

  try {
    const post = yield external_wp_data_["controls"].select(STORE_NAME, 'getCurrentPost');
    yield Object(external_wp_dataControls_["apiFetch"])({
      path: `/wp/v2/${postType.rest_base}/${post.id}`,
      method: 'DELETE'
    });
    yield external_wp_data_["controls"].dispatch(STORE_NAME, 'savePost');
  } catch (error) {
    yield external_wp_data_["controls"].dispatch(external_wp_notices_["store"], 'createErrorNotice', ...getNotificationArgumentsForTrashFail({
      error
    }));
  }
}
/**
 * Action generator used in signalling that the post should autosave.  This
 * includes server-side autosaving (default) and client-side (a.k.a. local)
 * autosaving (e.g. on the Web, the post might be committed to Session
 * Storage).
 *
 * @param {Object?} options Extra flags to identify the autosave.
 */

function* actions_autosave({
  local = false,
  ...options
} = {}) {
  if (local) {
    const post = yield external_wp_data_["controls"].select(STORE_NAME, 'getCurrentPost');
    const isPostNew = yield external_wp_data_["controls"].select(STORE_NAME, 'isEditedPostNew');
    const title = yield external_wp_data_["controls"].select(STORE_NAME, 'getEditedPostAttribute', 'title');
    const content = yield external_wp_data_["controls"].select(STORE_NAME, 'getEditedPostAttribute', 'content');
    const excerpt = yield external_wp_data_["controls"].select(STORE_NAME, 'getEditedPostAttribute', 'excerpt');
    yield {
      type: 'LOCAL_AUTOSAVE_SET',
      postId: post.id,
      isPostNew,
      title,
      content,
      excerpt
    };
  } else {
    yield external_wp_data_["controls"].dispatch(STORE_NAME, 'savePost', {
      isAutosave: true,
      ...options
    });
  }
}
/**
 * Returns an action object used in signalling that undo history should
 * restore last popped state.
 *
 * @yield {Object} Action object.
 */

function* actions_redo() {
  yield external_wp_data_["controls"].dispatch('core', 'redo');
}
/**
 * Returns an action object used in signalling that undo history should pop.
 *
 * @yield {Object} Action object.
 */

function* actions_undo() {
  yield external_wp_data_["controls"].dispatch('core', 'undo');
}
/**
 * Returns an action object used in signalling that undo history record should
 * be created.
 *
 * @return {Object} Action object.
 */

function createUndoLevel() {
  return {
    type: 'CREATE_UNDO_LEVEL'
  };
}
/**
 * Returns an action object used to lock the editor.
 *
 * @param {Object}  lock Details about the post lock status, user, and nonce.
 *
 * @return {Object} Action object.
 */

function actions_updatePostLock(lock) {
  return {
    type: 'UPDATE_POST_LOCK',
    lock
  };
}
/**
 * Returns an action object used in signalling that the user has enabled the
 * publish sidebar.
 *
 * @return {Object} Action object
 */

function enablePublishSidebar() {
  return {
    type: 'ENABLE_PUBLISH_SIDEBAR'
  };
}
/**
 * Returns an action object used in signalling that the user has disabled the
 * publish sidebar.
 *
 * @return {Object} Action object
 */

function disablePublishSidebar() {
  return {
    type: 'DISABLE_PUBLISH_SIDEBAR'
  };
}
/**
 * Returns an action object used to signal that post saving is locked.
 *
 * @param  {string} lockName The lock name.
 *
 * @example
 * ```
 * const { subscribe } = wp.data;
 *
 * const initialPostStatus = wp.data.select( 'core/editor' ).getEditedPostAttribute( 'status' );
 *
 * // Only allow publishing posts that are set to a future date.
 * if ( 'publish' !== initialPostStatus ) {
 *
 * 	// Track locking.
 * 	let locked = false;
 *
 * 	// Watch for the publish event.
 * 	let unssubscribe = subscribe( () => {
 * 		const currentPostStatus = wp.data.select( 'core/editor' ).getEditedPostAttribute( 'status' );
 * 		if ( 'publish' !== currentPostStatus ) {
 *
 * 			// Compare the post date to the current date, lock the post if the date isn't in the future.
 * 			const postDate = new Date( wp.data.select( 'core/editor' ).getEditedPostAttribute( 'date' ) );
 * 			const currentDate = new Date();
 * 			if ( postDate.getTime() <= currentDate.getTime() ) {
 * 				if ( ! locked ) {
 * 					locked = true;
 * 					wp.data.dispatch( 'core/editor' ).lockPostSaving( 'futurelock' );
 * 				}
 * 			} else {
 * 				if ( locked ) {
 * 					locked = false;
 * 					wp.data.dispatch( 'core/editor' ).unlockPostSaving( 'futurelock' );
 * 				}
 * 			}
 * 		}
 * 	} );
 * }
 * ```
 *
 * @return {Object} Action object
 */

function lockPostSaving(lockName) {
  return {
    type: 'LOCK_POST_SAVING',
    lockName
  };
}
/**
 * Returns an action object used to signal that post saving is unlocked.
 *
 * @param  {string} lockName The lock name.
 *
 * @example
 * ```
 * // Unlock post saving with the lock key `mylock`:
 * wp.data.dispatch( 'core/editor' ).unlockPostSaving( 'mylock' );
 * ```
 *
 * @return {Object} Action object
 */

function unlockPostSaving(lockName) {
  return {
    type: 'UNLOCK_POST_SAVING',
    lockName
  };
}
/**
 * Returns an action object used to signal that post autosaving is locked.
 *
 * @param  {string} lockName The lock name.
 *
 * @example
 * ```
 * // Lock post autosaving with the lock key `mylock`:
 * wp.data.dispatch( 'core/editor' ).lockPostAutosaving( 'mylock' );
 * ```
 *
 * @return {Object} Action object
 */

function lockPostAutosaving(lockName) {
  return {
    type: 'LOCK_POST_AUTOSAVING',
    lockName
  };
}
/**
 * Returns an action object used to signal that post autosaving is unlocked.
 *
 * @param  {string} lockName The lock name.
 *
 * @example
 * ```
 * // Unlock post saving with the lock key `mylock`:
 * wp.data.dispatch( 'core/editor' ).unlockPostAutosaving( 'mylock' );
 * ```
 *
 * @return {Object} Action object
 */

function unlockPostAutosaving(lockName) {
  return {
    type: 'UNLOCK_POST_AUTOSAVING',
    lockName
  };
}
/**
 * Returns an action object used to signal that the blocks have been updated.
 *
 * @param {Array}   blocks  Block Array.
 * @param {?Object} options Optional options.
 *
 * @yield {Object} Action object
 */

function* actions_resetEditorBlocks(blocks, options = {}) {
  const {
    __unstableShouldCreateUndoLevel,
    selection
  } = options;
  const edits = {
    blocks,
    selection
  };

  if (__unstableShouldCreateUndoLevel !== false) {
    const {
      id,
      type
    } = yield external_wp_data_["controls"].select(STORE_NAME, 'getCurrentPost');
    const noChange = (yield external_wp_data_["controls"].select('core', 'getEditedEntityRecord', 'postType', type, id)).blocks === edits.blocks;

    if (noChange) {
      return yield external_wp_data_["controls"].dispatch('core', '__unstableCreateUndoLevel', 'postType', type, id);
    } // We create a new function here on every persistent edit
    // to make sure the edit makes the post dirty and creates
    // a new undo level.


    edits.content = ({
      blocks: blocksForSerialization = []
    }) => Object(external_wp_blocks_["__unstableSerializeAndClean"])(blocksForSerialization);
  }

  yield* actions_editPost(edits);
}
/*
 * Returns an action object used in signalling that the post editor settings have been updated.
 *
 * @param {Object} settings Updated settings
 *
 * @return {Object} Action object
 */

function actions_updateEditorSettings(settings) {
  return {
    type: 'UPDATE_EDITOR_SETTINGS',
    settings
  };
}
/**
 * Backward compatibility
 */

const getBlockEditorAction = name => function* (...args) {
  external_wp_deprecated_default()("`wp.data.dispatch( 'core/editor' )." + name + '`', {
    since: '5.3',
    alternative: "`wp.data.dispatch( 'core/block-editor' )." + name + '`'
  });
  yield external_wp_data_["controls"].dispatch('core/block-editor', name, ...args);
};
/**
 * @see resetBlocks in core/block-editor store.
 */


const resetBlocks = getBlockEditorAction('resetBlocks');
/**
 * @see receiveBlocks in core/block-editor store.
 */

const receiveBlocks = getBlockEditorAction('receiveBlocks');
/**
 * @see updateBlock in core/block-editor store.
 */

const updateBlock = getBlockEditorAction('updateBlock');
/**
 * @see updateBlockAttributes in core/block-editor store.
 */

const updateBlockAttributes = getBlockEditorAction('updateBlockAttributes');
/**
 * @see selectBlock in core/block-editor store.
 */

const actions_selectBlock = getBlockEditorAction('selectBlock');
/**
 * @see startMultiSelect in core/block-editor store.
 */

const startMultiSelect = getBlockEditorAction('startMultiSelect');
/**
 * @see stopMultiSelect in core/block-editor store.
 */

const stopMultiSelect = getBlockEditorAction('stopMultiSelect');
/**
 * @see multiSelect in core/block-editor store.
 */

const multiSelect = getBlockEditorAction('multiSelect');
/**
 * @see clearSelectedBlock in core/block-editor store.
 */

const actions_clearSelectedBlock = getBlockEditorAction('clearSelectedBlock');
/**
 * @see toggleSelection in core/block-editor store.
 */

const toggleSelection = getBlockEditorAction('toggleSelection');
/**
 * @see replaceBlocks in core/block-editor store.
 */

const replaceBlocks = getBlockEditorAction('replaceBlocks');
/**
 * @see replaceBlock in core/block-editor store.
 */

const replaceBlock = getBlockEditorAction('replaceBlock');
/**
 * @see moveBlocksDown in core/block-editor store.
 */

const moveBlocksDown = getBlockEditorAction('moveBlocksDown');
/**
 * @see moveBlocksUp in core/block-editor store.
 */

const moveBlocksUp = getBlockEditorAction('moveBlocksUp');
/**
 * @see moveBlockToPosition in core/block-editor store.
 */

const moveBlockToPosition = getBlockEditorAction('moveBlockToPosition');
/**
 * @see insertBlock in core/block-editor store.
 */

const insertBlock = getBlockEditorAction('insertBlock');
/**
 * @see insertBlocks in core/block-editor store.
 */

const actions_insertBlocks = getBlockEditorAction('insertBlocks');
/**
 * @see showInsertionPoint in core/block-editor store.
 */

const showInsertionPoint = getBlockEditorAction('showInsertionPoint');
/**
 * @see hideInsertionPoint in core/block-editor store.
 */

const hideInsertionPoint = getBlockEditorAction('hideInsertionPoint');
/**
 * @see setTemplateValidity in core/block-editor store.
 */

const actions_setTemplateValidity = getBlockEditorAction('setTemplateValidity');
/**
 * @see synchronizeTemplate in core/block-editor store.
 */

const actions_synchronizeTemplate = getBlockEditorAction('synchronizeTemplate');
/**
 * @see mergeBlocks in core/block-editor store.
 */

const mergeBlocks = getBlockEditorAction('mergeBlocks');
/**
 * @see removeBlocks in core/block-editor store.
 */

const removeBlocks = getBlockEditorAction('removeBlocks');
/**
 * @see removeBlock in core/block-editor store.
 */

const removeBlock = getBlockEditorAction('removeBlock');
/**
 * @see toggleBlockMode in core/block-editor store.
 */

const toggleBlockMode = getBlockEditorAction('toggleBlockMode');
/**
 * @see startTyping in core/block-editor store.
 */

const startTyping = getBlockEditorAction('startTyping');
/**
 * @see stopTyping in core/block-editor store.
 */

const stopTyping = getBlockEditorAction('stopTyping');
/**
 * @see enterFormattedText in core/block-editor store.
 */

const enterFormattedText = getBlockEditorAction('enterFormattedText');
/**
 * @see exitFormattedText in core/block-editor store.
 */

const exitFormattedText = getBlockEditorAction('exitFormattedText');
/**
 * @see insertDefaultBlock in core/block-editor store.
 */

const actions_insertDefaultBlock = getBlockEditorAction('insertDefaultBlock');
/**
 * @see updateBlockListSettings in core/block-editor store.
 */

const updateBlockListSettings = getBlockEditorAction('updateBlockListSettings');

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/store/controls.js
/**
 * Function returning a sessionStorage key to set or retrieve a given post's
 * automatic session backup.
 *
 * Keys are crucially prefixed with 'wp-autosave-' so that wp-login.php's
 * `loggedout` handler can clear sessionStorage of any user-private content.
 *
 * @see https://github.com/WordPress/wordpress-develop/blob/6dad32d2aed47e6c0cf2aee8410645f6d7aba6bd/src/wp-login.php#L103
 *
 * @param {string}  postId     Post ID.
 * @param {boolean} isPostNew  Whether post new.
 * @return {string}            sessionStorage key
 */
function postKey(postId, isPostNew) {
  return `wp-autosave-block-editor-post-${isPostNew ? 'auto-draft' : postId}`;
}

function localAutosaveGet(postId, isPostNew) {
  return window.sessionStorage.getItem(postKey(postId, isPostNew));
}
function localAutosaveSet(postId, isPostNew, title, content, excerpt) {
  window.sessionStorage.setItem(postKey(postId, isPostNew), JSON.stringify({
    post_title: title,
    content,
    excerpt
  }));
}
function localAutosaveClear(postId, isPostNew) {
  window.sessionStorage.removeItem(postKey(postId, isPostNew));
}
const controls = {
  LOCAL_AUTOSAVE_SET({
    postId,
    isPostNew,
    title,
    content,
    excerpt
  }) {
    localAutosaveSet(postId, isPostNew, title, content, excerpt);
  }

};
/* harmony default export */ var store_controls = (controls);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/store/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */






/**
 * Post editor data store configuration.
 *
 * @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/data/README.md#registerStore
 *
 * @type {Object}
 */

const storeConfig = {
  reducer: reducer,
  selectors: selectors_namespaceObject,
  actions: actions_namespaceObject,
  controls: { ...external_wp_dataControls_["controls"],
    ...store_controls
  }
};
/**
 * Store definition for the editor namespace.
 *
 * @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/data/README.md#createReduxStore
 *
 * @type {Object}
 */

const store = Object(external_wp_data_["createReduxStore"])(STORE_NAME, { ...storeConfig,
  persist: ['preferences']
}); // Once we build a more generic persistence plugin that works across types of stores
// we'd be able to replace this with a register call.

Object(external_wp_data_["registerStore"])(STORE_NAME, { ...storeConfig,
  persist: ['preferences']
});

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/autocompleters/index.js


// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/autosave-monitor/index.js
/**
 * WordPress dependencies
 */



/**
 * AutosaveMonitor invokes `props.autosave()` within at most `interval` seconds after an unsaved change is detected.
 *
 * The logic is straightforward: a check is performed every `props.interval` seconds. If any changes are detected, `props.autosave()` is called.
 * The time between the change and the autosave varies but is no larger than `props.interval` seconds. Refer to the code below for more details, such as
 * the specific way of detecting changes.
 *
 * There are two caveats:
 * * If `props.isAutosaveable` happens to be false at a time of checking for changes, the check is retried every second.
 * * The timer may be disabled by setting `props.disableIntervalChecks` to `true`. In that mode, any change will immediately trigger `props.autosave()`.
 */

class autosave_monitor_AutosaveMonitor extends external_wp_element_["Component"] {
  constructor(props) {
    super(props);
    this.needsAutosave = !!(props.isDirty && props.isAutosaveable);
  }

  componentDidMount() {
    if (!this.props.disableIntervalChecks) {
      this.setAutosaveTimer();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.disableIntervalChecks) {
      if (this.props.editsReference !== prevProps.editsReference) {
        this.props.autosave();
      }

      return;
    }

    if (!this.props.isDirty) {
      this.needsAutosave = false;
      return;
    }

    if (this.props.isAutosaving && !prevProps.isAutosaving) {
      this.needsAutosave = false;
      return;
    }

    if (this.props.editsReference !== prevProps.editsReference) {
      this.needsAutosave = true;
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timerId);
  }

  setAutosaveTimer(timeout = this.props.interval * 1000) {
    this.timerId = setTimeout(() => {
      this.autosaveTimerHandler();
    }, timeout);
  }

  autosaveTimerHandler() {
    if (!this.props.isAutosaveable) {
      this.setAutosaveTimer(1000);
      return;
    }

    if (this.needsAutosave) {
      this.needsAutosave = false;
      this.props.autosave();
    }

    this.setAutosaveTimer();
  }

  render() {
    return null;
  }

}
/* harmony default export */ var autosave_monitor = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])((select, ownProps) => {
  const {
    getReferenceByDistinctEdits
  } = select('core');
  const {
    isEditedPostDirty,
    isEditedPostAutosaveable,
    isAutosavingPost,
    getEditorSettings
  } = select('core/editor');
  const {
    interval = getEditorSettings().autosaveInterval
  } = ownProps;
  return {
    editsReference: getReferenceByDistinctEdits(),
    isDirty: isEditedPostDirty(),
    isAutosaveable: isEditedPostAutosaveable(),
    isAutosaving: isAutosavingPost(),
    interval
  };
}), Object(external_wp_data_["withDispatch"])((dispatch, ownProps) => ({
  autosave() {
    const {
      autosave = dispatch('core/editor').autosave
    } = ownProps;
    autosave();
  }

}))])(autosave_monitor_AutosaveMonitor));

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__("TSYQ");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/document-outline/item.js


/**
 * External dependencies
 */


const TableOfContentsItem = ({
  children,
  isValid,
  level,
  href,
  onSelect
}) => Object(external_wp_element_["createElement"])("li", {
  className: classnames_default()('document-outline__item', `is-${level.toLowerCase()}`, {
    'is-invalid': !isValid
  })
}, Object(external_wp_element_["createElement"])("a", {
  href: href,
  className: "document-outline__button",
  onClick: onSelect
}, Object(external_wp_element_["createElement"])("span", {
  className: "document-outline__emdash",
  "aria-hidden": "true"
}), Object(external_wp_element_["createElement"])("strong", {
  className: "document-outline__level"
}, level), Object(external_wp_element_["createElement"])("span", {
  className: "document-outline__item-content"
}, children)));

/* harmony default export */ var document_outline_item = (TableOfContentsItem);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/document-outline/index.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */


/**
 * Module constants
 */

const emptyHeadingContent = Object(external_wp_element_["createElement"])("em", null, Object(external_wp_i18n_["__"])('(Empty heading)'));
const incorrectLevelContent = [Object(external_wp_element_["createElement"])("br", {
  key: "incorrect-break"
}), Object(external_wp_element_["createElement"])("em", {
  key: "incorrect-message"
}, Object(external_wp_i18n_["__"])('(Incorrect heading level)'))];
const singleH1Headings = [Object(external_wp_element_["createElement"])("br", {
  key: "incorrect-break-h1"
}), Object(external_wp_element_["createElement"])("em", {
  key: "incorrect-message-h1"
}, Object(external_wp_i18n_["__"])('(Your theme may already use a H1 for the post title)'))];
const multipleH1Headings = [Object(external_wp_element_["createElement"])("br", {
  key: "incorrect-break-multiple-h1"
}), Object(external_wp_element_["createElement"])("em", {
  key: "incorrect-message-multiple-h1"
}, Object(external_wp_i18n_["__"])('(Multiple H1 headings are not recommended)'))];
/**
 * Returns an array of heading blocks enhanced with the following properties:
 * level   - An integer with the heading level.
 * isEmpty - Flag indicating if the heading has no content.
 *
 * @param {?Array} blocks An array of blocks.
 *
 * @return {Array} An array of heading blocks enhanced with the properties described above.
 */

const computeOutlineHeadings = (blocks = []) => {
  return Object(external_lodash_["flatMap"])(blocks, (block = {}) => {
    if (block.name === 'core/heading') {
      return { ...block,
        level: block.attributes.level,
        isEmpty: isEmptyHeading(block)
      };
    }

    return computeOutlineHeadings(block.innerBlocks);
  });
};

const isEmptyHeading = heading => !heading.attributes.content || heading.attributes.content.length === 0;

const DocumentOutline = ({
  blocks = [],
  title,
  onSelect,
  isTitleSupported,
  hasOutlineItemsDisabled
}) => {
  const headings = computeOutlineHeadings(blocks);

  if (headings.length < 1) {
    return null;
  }

  let prevHeadingLevel = 1; // Not great but it's the simplest way to locate the title right now.

  const titleNode = document.querySelector('.editor-post-title__input');
  const hasTitle = isTitleSupported && title && titleNode;
  const countByLevel = Object(external_lodash_["countBy"])(headings, 'level');
  const hasMultipleH1 = countByLevel[1] > 1;
  return Object(external_wp_element_["createElement"])("div", {
    className: "document-outline"
  }, Object(external_wp_element_["createElement"])("ul", null, hasTitle && Object(external_wp_element_["createElement"])(document_outline_item, {
    level: Object(external_wp_i18n_["__"])('Title'),
    isValid: true,
    onSelect: onSelect,
    href: `#${titleNode.id}`,
    isDisabled: hasOutlineItemsDisabled
  }, title), headings.map((item, index) => {
    // Headings remain the same, go up by one, or down by any amount.
    // Otherwise there are missing levels.
    const isIncorrectLevel = item.level > prevHeadingLevel + 1;
    const isValid = !item.isEmpty && !isIncorrectLevel && !!item.level && (item.level !== 1 || !hasMultipleH1 && !hasTitle);
    prevHeadingLevel = item.level;
    return Object(external_wp_element_["createElement"])(document_outline_item, {
      key: index,
      level: `H${item.level}`,
      isValid: isValid,
      isDisabled: hasOutlineItemsDisabled,
      href: `#block-${item.clientId}`,
      onSelect: onSelect
    }, item.isEmpty ? emptyHeadingContent : Object(external_wp_richText_["getTextContent"])(Object(external_wp_richText_["create"])({
      html: item.attributes.content
    })), isIncorrectLevel && incorrectLevelContent, item.level === 1 && hasMultipleH1 && multipleH1Headings, hasTitle && item.level === 1 && !hasMultipleH1 && singleH1Headings);
  })));
};
/* harmony default export */ var document_outline = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])(select => {
  const {
    getBlocks
  } = select(external_wp_blockEditor_["store"]);
  const {
    getEditedPostAttribute
  } = select('core/editor');
  const {
    getPostType
  } = select('core');
  const postType = getPostType(getEditedPostAttribute('type'));
  return {
    title: getEditedPostAttribute('title'),
    blocks: getBlocks(),
    isTitleSupported: Object(external_lodash_["get"])(postType, ['supports', 'title'], false)
  };
}))(DocumentOutline));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/document-outline/check.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




function DocumentOutlineCheck({
  blocks,
  children
}) {
  const headings = Object(external_lodash_["filter"])(blocks, block => block.name === 'core/heading');

  if (headings.length < 1) {
    return null;
  }

  return children;
}

/* harmony default export */ var check = (Object(external_wp_data_["withSelect"])(select => ({
  blocks: select(external_wp_blockEditor_["store"]).getBlocks()
}))(DocumentOutlineCheck));

// EXTERNAL MODULE: external ["wp","keyboardShortcuts"]
var external_wp_keyboardShortcuts_ = __webpack_require__("hF7m");

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/global-keyboard-shortcuts/save-shortcut.js
/**
 * WordPress dependencies
 */




function SaveShortcut({
  resetBlocksOnSave
}) {
  const {
    resetEditorBlocks,
    savePost
  } = Object(external_wp_data_["useDispatch"])('core/editor');
  const {
    isEditedPostDirty,
    getPostEdits
  } = Object(external_wp_data_["useSelect"])(select => {
    const {
      isEditedPostDirty: _isEditedPostDirty,
      getPostEdits: _getPostEdits
    } = select('core/editor');
    return {
      isEditedPostDirty: _isEditedPostDirty,
      getPostEdits: _getPostEdits
    };
  }, []);
  Object(external_wp_keyboardShortcuts_["useShortcut"])('core/editor/save', event => {
    event.preventDefault(); // TODO: This should be handled in the `savePost` effect in
    // considering `isSaveable`. See note on `isEditedPostSaveable`
    // selector about dirtiness and meta-boxes.
    //
    // See: `isEditedPostSaveable`

    if (!isEditedPostDirty()) {
      return;
    } // The text editor requires that editor blocks are updated for a
    // save to work correctly. Usually this happens when the textarea
    // for the code editors blurs, but the shortcut can be used without
    // blurring the textarea.


    if (resetBlocksOnSave) {
      const postEdits = getPostEdits();

      if (postEdits.content && typeof postEdits.content === 'string') {
        const blocks = Object(external_wp_blocks_["parse"])(postEdits.content);
        resetEditorBlocks(blocks);
      }
    }

    savePost();
  }, {
    bindGlobal: true
  });
  return null;
}

/* harmony default export */ var save_shortcut = (SaveShortcut);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/global-keyboard-shortcuts/visual-editor-shortcuts.js


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



function VisualEditorGlobalKeyboardShortcuts() {
  const {
    redo,
    undo
  } = Object(external_wp_data_["useDispatch"])('core/editor');
  Object(external_wp_keyboardShortcuts_["useShortcut"])('core/editor/undo', event => {
    undo();
    event.preventDefault();
  }, {
    bindGlobal: true
  });
  Object(external_wp_keyboardShortcuts_["useShortcut"])('core/editor/redo', event => {
    redo();
    event.preventDefault();
  }, {
    bindGlobal: true
  });
  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wp_blockEditor_["BlockEditorKeyboardShortcuts"], null), Object(external_wp_element_["createElement"])(save_shortcut, null));
}

/* harmony default export */ var visual_editor_shortcuts = (VisualEditorGlobalKeyboardShortcuts);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/global-keyboard-shortcuts/text-editor-shortcuts.js


/**
 * Internal dependencies
 */

function TextEditorGlobalKeyboardShortcuts() {
  return Object(external_wp_element_["createElement"])(save_shortcut, {
    resetBlocksOnSave: true
  });
}

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/global-keyboard-shortcuts/register-shortcuts.js


/**
 * WordPress dependencies
 */






function EditorKeyboardShortcutsRegister() {
  // Registering the shortcuts
  const {
    registerShortcut
  } = Object(external_wp_data_["useDispatch"])(external_wp_keyboardShortcuts_["store"]);
  Object(external_wp_element_["useEffect"])(() => {
    registerShortcut({
      name: 'core/editor/save',
      category: 'global',
      description: Object(external_wp_i18n_["__"])('Save your changes.'),
      keyCombination: {
        modifier: 'primary',
        character: 's'
      }
    });
    registerShortcut({
      name: 'core/editor/undo',
      category: 'global',
      description: Object(external_wp_i18n_["__"])('Undo your last changes.'),
      keyCombination: {
        modifier: 'primary',
        character: 'z'
      }
    });
    registerShortcut({
      name: 'core/editor/redo',
      category: 'global',
      description: Object(external_wp_i18n_["__"])('Redo your last undo.'),
      keyCombination: {
        modifier: 'primaryShift',
        character: 'z'
      }
    });
  }, [registerShortcut]);
  return Object(external_wp_element_["createElement"])(external_wp_blockEditor_["BlockEditorKeyboardShortcuts"].Register, null);
}

/* harmony default export */ var register_shortcuts = (EditorKeyboardShortcutsRegister);

// EXTERNAL MODULE: external ["wp","components"]
var external_wp_components_ = __webpack_require__("tI+e");

// EXTERNAL MODULE: external ["wp","keycodes"]
var external_wp_keycodes_ = __webpack_require__("RxS6");

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/redo.js
var library_redo = __webpack_require__("K2cm");

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/undo.js
var library_undo = __webpack_require__("Ntru");

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/editor-history/redo.js



/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */



function EditorHistoryRedo(props, ref) {
  const hasRedo = Object(external_wp_data_["useSelect"])(select => select(store).hasEditorRedo(), []);
  const {
    redo
  } = Object(external_wp_data_["useDispatch"])(store);
  return Object(external_wp_element_["createElement"])(external_wp_components_["Button"], Object(esm_extends["a" /* default */])({}, props, {
    ref: ref,
    icon: !Object(external_wp_i18n_["isRTL"])() ? library_redo["a" /* default */] : library_undo["a" /* default */]
    /* translators: button label text should, if possible, be under 16 characters. */
    ,
    label: Object(external_wp_i18n_["__"])('Redo'),
    shortcut: external_wp_keycodes_["displayShortcut"].primaryShift('z') // If there are no redo levels we don't want to actually disable this
    // button, because it will remove focus for keyboard users.
    // See: https://github.com/WordPress/gutenberg/issues/3486
    ,
    "aria-disabled": !hasRedo,
    onClick: hasRedo ? redo : undefined,
    className: "editor-history__redo"
  }));
}

/* harmony default export */ var editor_history_redo = (Object(external_wp_element_["forwardRef"])(EditorHistoryRedo));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/editor-history/undo.js



/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */



function EditorHistoryUndo(props, ref) {
  const hasUndo = Object(external_wp_data_["useSelect"])(select => select(store).hasEditorUndo(), []);
  const {
    undo
  } = Object(external_wp_data_["useDispatch"])(store);
  return Object(external_wp_element_["createElement"])(external_wp_components_["Button"], Object(esm_extends["a" /* default */])({}, props, {
    ref: ref,
    icon: !Object(external_wp_i18n_["isRTL"])() ? library_undo["a" /* default */] : library_redo["a" /* default */]
    /* translators: button label text should, if possible, be under 16 characters. */
    ,
    label: Object(external_wp_i18n_["__"])('Undo'),
    shortcut: external_wp_keycodes_["displayShortcut"].primary('z') // If there are no undo levels we don't want to actually disable this
    // button, because it will remove focus for keyboard users.
    // See: https://github.com/WordPress/gutenberg/issues/3486
    ,
    "aria-disabled": !hasUndo,
    onClick: hasUndo ? undo : undefined,
    className: "editor-history__undo"
  }));
}

/* harmony default export */ var editor_history_undo = (Object(external_wp_element_["forwardRef"])(EditorHistoryUndo));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/template-validation-notice/index.js


/**
 * WordPress dependencies
 */






function TemplateValidationNotice({
  isValid,
  ...props
}) {
  if (isValid) {
    return null;
  }

  const confirmSynchronization = () => {
    if ( // eslint-disable-next-line no-alert
    window.confirm(Object(external_wp_i18n_["__"])('Resetting the template may result in loss of content, do you want to continue?'))) {
      props.synchronizeTemplate();
    }
  };

  return Object(external_wp_element_["createElement"])(external_wp_components_["Notice"], {
    className: "editor-template-validation-notice",
    isDismissible: false,
    status: "warning",
    actions: [{
      label: Object(external_wp_i18n_["__"])('Keep it as is'),
      onClick: props.resetTemplateValidity
    }, {
      label: Object(external_wp_i18n_["__"])('Reset the template'),
      onClick: confirmSynchronization
    }]
  }, Object(external_wp_i18n_["__"])('The content of your post doesn’t match the template assigned to your post type.'));
}

/* harmony default export */ var template_validation_notice = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])(select => ({
  isValid: select(external_wp_blockEditor_["store"]).isValidTemplate()
})), Object(external_wp_data_["withDispatch"])(dispatch => {
  const {
    setTemplateValidity,
    synchronizeTemplate
  } = dispatch(external_wp_blockEditor_["store"]);
  return {
    resetTemplateValidity: () => setTemplateValidity(true),
    synchronizeTemplate
  };
})])(TemplateValidationNotice));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/editor-notices/index.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


function EditorNotices({
  notices,
  onRemove
}) {
  const dismissibleNotices = Object(external_lodash_["filter"])(notices, {
    isDismissible: true,
    type: 'default'
  });
  const nonDismissibleNotices = Object(external_lodash_["filter"])(notices, {
    isDismissible: false,
    type: 'default'
  });
  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wp_components_["NoticeList"], {
    notices: nonDismissibleNotices,
    className: "components-editor-notices__pinned"
  }), Object(external_wp_element_["createElement"])(external_wp_components_["NoticeList"], {
    notices: dismissibleNotices,
    className: "components-editor-notices__dismissible",
    onRemove: onRemove
  }, Object(external_wp_element_["createElement"])(template_validation_notice, null)));
}
/* harmony default export */ var editor_notices = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])(select => ({
  notices: select(external_wp_notices_["store"]).getNotices()
})), Object(external_wp_data_["withDispatch"])(dispatch => ({
  onRemove: dispatch(external_wp_notices_["store"]).removeNotice
}))])(EditorNotices));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/editor-snackbars/index.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




function EditorSnackbars() {
  const notices = Object(external_wp_data_["useSelect"])(select => select(external_wp_notices_["store"]).getNotices(), []);
  const {
    removeNotice
  } = Object(external_wp_data_["useDispatch"])(external_wp_notices_["store"]);
  const snackbarNotices = Object(external_lodash_["filter"])(notices, {
    type: 'snackbar'
  });
  return Object(external_wp_element_["createElement"])(external_wp_components_["SnackbarList"], {
    notices: snackbarNotices,
    className: "components-editor-notices__snackbar",
    onRemove: removeNotice
  });
}

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/close.js
var library_close = __webpack_require__("w95h");

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/page.js


/**
 * WordPress dependencies
 */

const page_page = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M7 5.5h10a.5.5 0 01.5.5v12a.5.5 0 01-.5.5H7a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5zM17 4H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2zm-1 3.75H8v1.5h8v-1.5zM8 11h8v1.5H8V11zm6 3.25H8v1.5h6v-1.5z"
}));
/* harmony default export */ var library_page = (page_page);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/entities-saved-states/entity-record-item.js


/**
 * WordPress dependencies
 */





function EntityRecordItem({
  record,
  checked,
  onChange,
  closePanel
}) {
  const {
    name,
    kind,
    title,
    key
  } = record;
  const parentBlockId = Object(external_wp_data_["useSelect"])(select => {
    var _blocks$;

    // Get entity's blocks.
    const {
      blocks = []
    } = select('core').getEditedEntityRecord(kind, name, key); // Get parents of the entity's first block.

    const parents = select(external_wp_blockEditor_["store"]).getBlockParents((_blocks$ = blocks[0]) === null || _blocks$ === void 0 ? void 0 : _blocks$.clientId); // Return closest parent block's clientId.

    return parents[parents.length - 1];
  }, []); // Handle templates that might use default descriptive titles

  const entityRecordTitle = Object(external_wp_data_["useSelect"])(select => {
    if ('postType' !== kind || 'wp_template' !== name) {
      return title;
    }

    const template = select('core').getEditedEntityRecord(kind, name, key);
    return select('core/editor').__experimentalGetTemplateInfo(template).title;
  }, [name, kind, title, key]);
  const isSelected = Object(external_wp_data_["useSelect"])(select => {
    const selectedBlockId = select(external_wp_blockEditor_["store"]).getSelectedBlockClientId();
    return selectedBlockId === parentBlockId;
  }, [parentBlockId]);
  const isSelectedText = isSelected ? Object(external_wp_i18n_["__"])('Selected') : Object(external_wp_i18n_["__"])('Select');
  const {
    selectBlock
  } = Object(external_wp_data_["useDispatch"])(external_wp_blockEditor_["store"]);
  const selectParentBlock = Object(external_wp_element_["useCallback"])(() => selectBlock(parentBlockId), [parentBlockId]);
  const selectAndDismiss = Object(external_wp_element_["useCallback"])(() => {
    selectBlock(parentBlockId);
    closePanel();
  }, [parentBlockId]);
  return Object(external_wp_element_["createElement"])(external_wp_components_["PanelRow"], null, Object(external_wp_element_["createElement"])(external_wp_components_["CheckboxControl"], {
    label: Object(external_wp_element_["createElement"])("strong", null, entityRecordTitle || Object(external_wp_i18n_["__"])('Untitled')),
    checked: checked,
    onChange: onChange
  }), parentBlockId ? Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    onClick: selectParentBlock,
    className: "entities-saved-states__find-entity",
    disabled: isSelected
  }, isSelectedText), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    onClick: selectAndDismiss,
    className: "entities-saved-states__find-entity-small",
    disabled: isSelected
  }, isSelectedText)) : null);
}

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/entities-saved-states/entity-type-list.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


const ENTITY_NAME_ICONS = {
  site: layout["a" /* default */],
  page: library_page
};
function EntityTypeList({
  list,
  unselectedEntities,
  setUnselectedEntities,
  closePanel
}) {
  const firstRecord = list[0];
  const entity = Object(external_wp_data_["useSelect"])(select => select(external_wp_coreData_["store"]).getEntity(firstRecord.kind, firstRecord.name), [firstRecord.kind, firstRecord.name]); // Set icon based on type of entity.

  const {
    name
  } = firstRecord;
  const icon = ENTITY_NAME_ICONS[name];
  return Object(external_wp_element_["createElement"])(external_wp_components_["PanelBody"], {
    title: entity.label,
    initialOpen: true,
    icon: icon
  }, list.map(record => {
    return Object(external_wp_element_["createElement"])(EntityRecordItem, {
      key: record.key || record.property,
      record: record,
      checked: !Object(external_lodash_["some"])(unselectedEntities, elt => elt.kind === record.kind && elt.name === record.name && elt.key === record.key && elt.property === record.property),
      onChange: value => setUnselectedEntities(record, value),
      closePanel: closePanel
    });
  }));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/entities-saved-states/index.js



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */


const TRANSLATED_SITE_PROTPERTIES = {
  title: Object(external_wp_i18n_["__"])('Title'),
  description: Object(external_wp_i18n_["__"])('Tagline'),
  site_logo: Object(external_wp_i18n_["__"])('Logo'),
  show_on_front: Object(external_wp_i18n_["__"])('Show on front'),
  page_on_front: Object(external_wp_i18n_["__"])('Page on front')
};
function EntitiesSavedStates({
  close
}) {
  const saveButtonRef = Object(external_wp_element_["useRef"])();
  const {
    dirtyEntityRecords
  } = Object(external_wp_data_["useSelect"])(select => {
    const dirtyRecords = select(external_wp_coreData_["store"]).__experimentalGetDirtyEntityRecords(); // Remove site object and decouple into its edited pieces.


    const dirtyRecordsWithoutSite = dirtyRecords.filter(record => !(record.kind === 'root' && record.name === 'site'));
    const siteEdits = select(external_wp_coreData_["store"]).getEntityRecordEdits('root', 'site');
    const siteEditsAsEntities = [];

    for (const property in siteEdits) {
      siteEditsAsEntities.push({
        kind: 'root',
        name: 'site',
        title: TRANSLATED_SITE_PROTPERTIES[property] || property,
        property
      });
    }

    const dirtyRecordsWithSiteItems = [...dirtyRecordsWithoutSite, ...siteEditsAsEntities];
    return {
      dirtyEntityRecords: dirtyRecordsWithSiteItems
    };
  }, []);
  const {
    saveEditedEntityRecord,
    __experimentalSaveSpecifiedEntityEdits: saveSpecifiedEntityEdits
  } = Object(external_wp_data_["useDispatch"])(external_wp_coreData_["store"]); // To group entities by type.

  const partitionedSavables = Object.values(Object(external_lodash_["groupBy"])(dirtyEntityRecords, 'name')); // Unchecked entities to be ignored by save function.

  const [unselectedEntities, _setUnselectedEntities] = Object(external_wp_element_["useState"])([]);

  const setUnselectedEntities = ({
    kind,
    name,
    key,
    property
  }, checked) => {
    if (checked) {
      _setUnselectedEntities(unselectedEntities.filter(elt => elt.kind !== kind || elt.name !== name || elt.key !== key || elt.property !== property));
    } else {
      _setUnselectedEntities([...unselectedEntities, {
        kind,
        name,
        key,
        property
      }]);
    }
  };

  const saveCheckedEntities = () => {
    const entitiesToSave = dirtyEntityRecords.filter(({
      kind,
      name,
      key,
      property
    }) => {
      return !Object(external_lodash_["some"])(unselectedEntities, elt => elt.kind === kind && elt.name === name && elt.key === key && elt.property === property);
    });
    close(entitiesToSave);
    const siteItemsToSave = [];
    entitiesToSave.forEach(({
      kind,
      name,
      key,
      property
    }) => {
      if ('root' === kind && 'site' === name) {
        siteItemsToSave.push(property);
      } else {
        saveEditedEntityRecord(kind, name, key);
      }
    });
    saveSpecifiedEntityEdits('root', 'site', undefined, siteItemsToSave);
  }; // Explicitly define this with no argument passed.  Using `close` on
  // its own will use the event object in place of the expected saved entities.


  const dismissPanel = Object(external_wp_element_["useCallback"])(() => close(), [close]);
  const [saveDialogRef, saveDialogProps] = Object(external_wp_compose_["__experimentalUseDialog"])({
    onClose: () => dismissPanel()
  });
  return Object(external_wp_element_["createElement"])("div", Object(esm_extends["a" /* default */])({
    ref: saveDialogRef
  }, saveDialogProps, {
    className: "entities-saved-states__panel"
  }), Object(external_wp_element_["createElement"])("div", {
    className: "entities-saved-states__panel-header"
  }, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    ref: saveButtonRef,
    isPrimary: true,
    disabled: dirtyEntityRecords.length - unselectedEntities.length === 0,
    onClick: saveCheckedEntities,
    className: "editor-entities-saved-states__save-button"
  }, Object(external_wp_i18n_["__"])('Save')), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    icon: library_close["a" /* default */],
    onClick: dismissPanel,
    label: Object(external_wp_i18n_["__"])('Close panel')
  })), Object(external_wp_element_["createElement"])("div", {
    className: "entities-saved-states__text-prompt"
  }, Object(external_wp_element_["createElement"])("strong", null, Object(external_wp_i18n_["__"])('Select the changes you want to save')), Object(external_wp_element_["createElement"])("p", null, Object(external_wp_i18n_["__"])('Some changes may affect other areas of your site.'))), partitionedSavables.map(list => {
    return Object(external_wp_element_["createElement"])(EntityTypeList, {
      key: list[0].name,
      list: list,
      closePanel: dismissPanel,
      unselectedEntities: unselectedEntities,
      setUnselectedEntities: setUnselectedEntities
    });
  }));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/error-boundary/index.js


/**
 * WordPress dependencies
 */







function CopyButton({
  text,
  children
}) {
  const ref = Object(external_wp_compose_["useCopyToClipboard"])(text);
  return Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    isSecondary: true,
    ref: ref
  }, children);
}

class error_boundary_ErrorBoundary extends external_wp_element_["Component"] {
  constructor() {
    super(...arguments);
    this.reboot = this.reboot.bind(this);
    this.getContent = this.getContent.bind(this);
    this.state = {
      error: null
    };
  }

  componentDidCatch(error) {
    this.setState({
      error
    });
  }

  reboot() {
    this.props.onError();
  }

  getContent() {
    try {
      // While `select` in a component is generally discouraged, it is
      // used here because it (a) reduces the chance of data loss in the
      // case of additional errors by performing a direct retrieval and
      // (b) avoids the performance cost associated with unnecessary
      // content serialization throughout the lifetime of a non-erroring
      // application.
      return Object(external_wp_data_["select"])('core/editor').getEditedPostContent();
    } catch (error) {}
  }

  render() {
    const {
      error
    } = this.state;

    if (!error) {
      return this.props.children;
    }

    return Object(external_wp_element_["createElement"])(external_wp_blockEditor_["Warning"], {
      className: "editor-error-boundary",
      actions: [Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        key: "recovery",
        onClick: this.reboot,
        isSecondary: true
      }, Object(external_wp_i18n_["__"])('Attempt Recovery')), Object(external_wp_element_["createElement"])(CopyButton, {
        key: "copy-post",
        text: this.getContent
      }, Object(external_wp_i18n_["__"])('Copy Post Text')), Object(external_wp_element_["createElement"])(CopyButton, {
        key: "copy-error",
        text: error.stack
      }, Object(external_wp_i18n_["__"])('Copy Error'))]
    }, Object(external_wp_i18n_["__"])('The editor has encountered an unexpected error.'));
  }

}

/* harmony default export */ var error_boundary = (error_boundary_ErrorBoundary);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/local-autosave-monitor/index.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */



const requestIdleCallback = window.requestIdleCallback ? window.requestIdleCallback : window.requestAnimationFrame;
/**
 * Function which returns true if the current environment supports browser
 * sessionStorage, or false otherwise. The result of this function is cached and
 * reused in subsequent invocations.
 */

const hasSessionStorageSupport = Object(external_lodash_["once"])(() => {
  try {
    // Private Browsing in Safari 10 and earlier will throw an error when
    // attempting to set into sessionStorage. The test here is intentional in
    // causing a thrown error as condition bailing from local autosave.
    window.sessionStorage.setItem('__wpEditorTestSessionStorage', '');
    window.sessionStorage.removeItem('__wpEditorTestSessionStorage');
    return true;
  } catch (error) {
    return false;
  }
});
/**
 * Custom hook which manages the creation of a notice prompting the user to
 * restore a local autosave, if one exists.
 */

function useAutosaveNotice() {
  const {
    postId,
    isEditedPostNew,
    hasRemoteAutosave
  } = Object(external_wp_data_["useSelect"])(select => ({
    postId: select('core/editor').getCurrentPostId(),
    isEditedPostNew: select('core/editor').isEditedPostNew(),
    getEditedPostAttribute: select('core/editor').getEditedPostAttribute,
    hasRemoteAutosave: !!select('core/editor').getEditorSettings().autosave
  }), []);
  const {
    getEditedPostAttribute
  } = Object(external_wp_data_["useSelect"])('core/editor');
  const {
    createWarningNotice,
    removeNotice
  } = Object(external_wp_data_["useDispatch"])(external_wp_notices_["store"]);
  const {
    editPost,
    resetEditorBlocks
  } = Object(external_wp_data_["useDispatch"])('core/editor');
  Object(external_wp_element_["useEffect"])(() => {
    let localAutosave = localAutosaveGet(postId, isEditedPostNew);

    if (!localAutosave) {
      return;
    }

    try {
      localAutosave = JSON.parse(localAutosave);
    } catch (error) {
      // Not usable if it can't be parsed.
      return;
    }

    const {
      post_title: title,
      content,
      excerpt
    } = localAutosave;
    const edits = {
      title,
      content,
      excerpt
    };
    {
      // Only display a notice if there is a difference between what has been
      // saved and that which is stored in sessionStorage.
      const hasDifference = Object.keys(edits).some(key => {
        return edits[key] !== getEditedPostAttribute(key);
      });

      if (!hasDifference) {
        // If there is no difference, it can be safely ejected from storage.
        localAutosaveClear(postId, isEditedPostNew);
        return;
      }
    }

    if (hasRemoteAutosave) {
      return;
    }

    const noticeId = Object(external_lodash_["uniqueId"])('wpEditorAutosaveRestore');
    createWarningNotice(Object(external_wp_i18n_["__"])('The backup of this post in your browser is different from the version below.'), {
      id: noticeId,
      actions: [{
        label: Object(external_wp_i18n_["__"])('Restore the backup'),

        onClick() {
          editPost(Object(external_lodash_["omit"])(edits, ['content']));
          resetEditorBlocks(Object(external_wp_blocks_["parse"])(edits.content));
          removeNotice(noticeId);
        }

      }]
    });
  }, [isEditedPostNew, postId]);
}
/**
 * Custom hook which ejects a local autosave after a successful save occurs.
 */


function useAutosavePurge() {
  const {
    postId,
    isEditedPostNew,
    isDirty,
    isAutosaving,
    didError
  } = Object(external_wp_data_["useSelect"])(select => ({
    postId: select('core/editor').getCurrentPostId(),
    isEditedPostNew: select('core/editor').isEditedPostNew(),
    isDirty: select('core/editor').isEditedPostDirty(),
    isAutosaving: select('core/editor').isAutosavingPost(),
    didError: select('core/editor').didPostSaveRequestFail()
  }), []);
  const lastIsDirty = Object(external_wp_element_["useRef"])(isDirty);
  const lastIsAutosaving = Object(external_wp_element_["useRef"])(isAutosaving);
  Object(external_wp_element_["useEffect"])(() => {
    if (!didError && (lastIsAutosaving.current && !isAutosaving || lastIsDirty.current && !isDirty)) {
      localAutosaveClear(postId, isEditedPostNew);
    }

    lastIsDirty.current = isDirty;
    lastIsAutosaving.current = isAutosaving;
  }, [isDirty, isAutosaving, didError]); // Once the isEditedPostNew changes from true to false, let's clear the auto-draft autosave.

  const wasEditedPostNew = Object(external_wp_compose_["usePrevious"])(isEditedPostNew);
  const prevPostId = Object(external_wp_compose_["usePrevious"])(postId);
  Object(external_wp_element_["useEffect"])(() => {
    if (prevPostId === postId && wasEditedPostNew && !isEditedPostNew) {
      localAutosaveClear(postId, true);
    }
  }, [isEditedPostNew, postId]);
}

function LocalAutosaveMonitor() {
  const {
    autosave
  } = Object(external_wp_data_["useDispatch"])('core/editor');
  const deferedAutosave = Object(external_wp_element_["useCallback"])(() => {
    requestIdleCallback(() => autosave({
      local: true
    }));
  }, []);
  useAutosaveNotice();
  useAutosavePurge();
  const {
    localAutosaveInterval
  } = Object(external_wp_data_["useSelect"])(select => ({
    localAutosaveInterval: select('core/editor').getEditorSettings().__experimentalLocalAutosaveInterval
  }), []);
  return Object(external_wp_element_["createElement"])(autosave_monitor, {
    interval: localAutosaveInterval,
    autosave: deferedAutosave
  });
}

/* harmony default export */ var local_autosave_monitor = (Object(external_wp_compose_["ifCondition"])(hasSessionStorageSupport)(LocalAutosaveMonitor));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/page-attributes/check.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


function PageAttributesCheck({
  children
}) {
  const postType = Object(external_wp_data_["useSelect"])(select => {
    const {
      getEditedPostAttribute
    } = select(store);
    const {
      getPostType
    } = select(external_wp_coreData_["store"]);
    return getPostType(getEditedPostAttribute('type'));
  }, []);
  const supportsPageAttributes = Object(external_lodash_["get"])(postType, ['supports', 'page-attributes'], false); // Only render fields if post type supports page attributes or available templates exist.

  if (!supportsPageAttributes) {
    return null;
  }

  return children;
}
/* harmony default export */ var page_attributes_check = (PageAttributesCheck);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-type-support-check/index.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * A component which renders its own children only if the current editor post
 * type supports one of the given `supportKeys` prop.
 *
 * @param {Object}    props             Props.
 * @param {string}    [props.postType]  Current post type.
 * @param {WPElement} props.children    Children to be rendered if post
 *                                                                   type supports.
 * @param {(string|string[])}                      props.supportKeys String or string array of keys
 *                                                                   to test.
 *
 * @return {WPComponent} The component to be rendered.
 */

function PostTypeSupportCheck({
  postType,
  children,
  supportKeys
}) {
  let isSupported = true;

  if (postType) {
    isSupported = Object(external_lodash_["some"])(Object(external_lodash_["castArray"])(supportKeys), key => !!postType.supports[key]);
  }

  if (!isSupported) {
    return null;
  }

  return children;
}
/* harmony default export */ var post_type_support_check = (Object(external_wp_data_["withSelect"])(select => {
  const {
    getEditedPostAttribute
  } = select('core/editor');
  const {
    getPostType
  } = select('core');
  return {
    postType: getPostType(getEditedPostAttribute('type'))
  };
})(PostTypeSupportCheck));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/page-attributes/order.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


const PageAttributesOrder = Object(external_wp_compose_["withState"])({
  orderInput: null
})(({
  onUpdateOrder,
  order = 0,
  orderInput,
  setState
}) => {
  const setUpdatedOrder = value => {
    setState({
      orderInput: value
    });
    const newOrder = Number(value);

    if (Number.isInteger(newOrder) && Object(external_lodash_["invoke"])(value, ['trim']) !== '') {
      onUpdateOrder(Number(value));
    }
  };

  const value = orderInput === null ? order : orderInput;
  return Object(external_wp_element_["createElement"])(external_wp_components_["TextControl"], {
    className: "editor-page-attributes__order",
    type: "number",
    label: Object(external_wp_i18n_["__"])('Order'),
    value: value,
    onChange: setUpdatedOrder,
    size: 6,
    onBlur: () => {
      setState({
        orderInput: null
      });
    }
  });
});

function PageAttributesOrderWithChecks(props) {
  return Object(external_wp_element_["createElement"])(post_type_support_check, {
    supportKeys: "page-attributes"
  }, Object(external_wp_element_["createElement"])(PageAttributesOrder, props));
}

/* harmony default export */ var page_attributes_order = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])(select => {
  return {
    order: select('core/editor').getEditedPostAttribute('menu_order')
  };
}), Object(external_wp_data_["withDispatch"])(dispatch => ({
  onUpdateOrder(order) {
    dispatch('core/editor').editPost({
      menu_order: order
    });
  }

}))])(PageAttributesOrderWithChecks));

// EXTERNAL MODULE: external ["wp","htmlEntities"]
var external_wp_htmlEntities_ = __webpack_require__("rmEH");

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/utils/terms.js
/**
 * External dependencies
 */

/**
 * Returns terms in a tree form.
 *
 * @param {Array} flatTerms  Array of terms in flat format.
 *
 * @return {Array} Array of terms in tree format.
 */

function buildTermsTree(flatTerms) {
  const flatTermsWithParentAndChildren = flatTerms.map(term => {
    return {
      children: [],
      parent: null,
      ...term
    };
  });
  const termsByParent = Object(external_lodash_["groupBy"])(flatTermsWithParentAndChildren, 'parent');

  if (termsByParent.null && termsByParent.null.length) {
    return flatTermsWithParentAndChildren;
  }

  const fillWithChildren = terms => {
    return terms.map(term => {
      const children = termsByParent[term.id];
      return { ...term,
        children: children && children.length ? fillWithChildren(children) : []
      };
    });
  };

  return fillWithChildren(termsByParent['0'] || []);
} // Lodash unescape function handles &#39; but not &#039; which may be return in some API requests.

const unescapeString = arg => {
  return Object(external_lodash_["unescape"])(arg.replace('&#039;', "'"));
};
/**
 * Returns a term object with name unescaped.
 * The unescape of the name property is done using lodash unescape function.
 *
 * @param {Object} term The term object to unescape.
 *
 * @return {Object} Term object with name property unescaped.
 */

const unescapeTerm = term => {
  return { ...term,
    name: unescapeString(term.name)
  };
};
/**
 * Returns an array of term objects with names unescaped.
 * The unescape of each term is performed using the unescapeTerm function.
 *
 * @param {Object[]} terms Array of term objects to unescape.
 *
 * @return {Object[]} Array of term objects unescaped.
 */

const unescapeTerms = terms => {
  return Object(external_lodash_["map"])(terms, unescapeTerm);
};

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/page-attributes/parent.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */



function getTitle(post) {
  var _post$title;

  return post !== null && post !== void 0 && (_post$title = post.title) !== null && _post$title !== void 0 && _post$title.rendered ? Object(external_wp_htmlEntities_["decodeEntities"])(post.title.rendered) : `#${post.id} (${Object(external_wp_i18n_["__"])('no title')})`;
}

const getItemPriority = (name, searchValue) => {
  const normalizedName = Object(external_lodash_["deburr"])(name).toLowerCase();
  const normalizedSearch = Object(external_lodash_["deburr"])(searchValue).toLowerCase();

  if (normalizedName === normalizedSearch) {
    return 0;
  }

  if (normalizedName.startsWith(normalizedSearch)) {
    return normalizedName.length;
  }

  return Infinity;
};
function PageAttributesParent() {
  const {
    editPost
  } = Object(external_wp_data_["useDispatch"])('core/editor');
  const [fieldValue, setFieldValue] = Object(external_wp_element_["useState"])(false);
  const {
    parentPost,
    parentPostId,
    items,
    postType
  } = Object(external_wp_data_["useSelect"])(select => {
    const {
      getPostType,
      getEntityRecords,
      getEntityRecord
    } = select('core');
    const {
      getCurrentPostId,
      getEditedPostAttribute
    } = select('core/editor');
    const postTypeSlug = getEditedPostAttribute('type');
    const pageId = getEditedPostAttribute('parent');
    const pType = getPostType(postTypeSlug);
    const postId = getCurrentPostId();
    const isHierarchical = Object(external_lodash_["get"])(pType, ['hierarchical'], false);
    const query = {
      per_page: 100,
      exclude: postId,
      parent_exclude: postId,
      orderby: 'menu_order',
      order: 'asc',
      _fields: 'id,title,parent'
    }; // Perform a search when the field is changed.

    if (!!fieldValue) {
      query.search = fieldValue;
    }

    return {
      parentPostId: pageId,
      parentPost: pageId ? getEntityRecord('postType', postTypeSlug, pageId) : null,
      items: isHierarchical ? getEntityRecords('postType', postTypeSlug, query) : [],
      postType: pType
    };
  }, [fieldValue]);
  const isHierarchical = Object(external_lodash_["get"])(postType, ['hierarchical'], false);
  const parentPageLabel = Object(external_lodash_["get"])(postType, ['labels', 'parent_item_colon']);
  const pageItems = items || [];
  const parentOptions = Object(external_wp_element_["useMemo"])(() => {
    const getOptionsFromTree = (tree, level = 0) => {
      const mappedNodes = tree.map(treeNode => [{
        value: treeNode.id,
        label: Object(external_lodash_["repeat"])('— ', level) + Object(external_lodash_["unescape"])(treeNode.name),
        rawName: treeNode.name
      }, ...getOptionsFromTree(treeNode.children || [], level + 1)]);
      const sortedNodes = mappedNodes.sort(([a], [b]) => {
        const priorityA = getItemPriority(a.rawName, fieldValue);
        const priorityB = getItemPriority(b.rawName, fieldValue);
        return priorityA >= priorityB ? 1 : -1;
      });
      return Object(external_lodash_["flatten"])(sortedNodes);
    };

    let tree = pageItems.map(item => ({
      id: item.id,
      parent: item.parent,
      name: getTitle(item)
    })); // Only build a hierarchical tree when not searching.

    if (!fieldValue) {
      tree = buildTermsTree(tree);
    }

    const opts = getOptionsFromTree(tree); // Ensure the current parent is in the options list.

    const optsHasParent = Object(external_lodash_["find"])(opts, item => item.value === parentPostId);

    if (parentPost && !optsHasParent) {
      opts.unshift({
        value: parentPostId,
        label: getTitle(parentPost)
      });
    }

    return opts;
  }, [pageItems, fieldValue]);

  if (!isHierarchical || !parentPageLabel) {
    return null;
  }
  /**
   * Handle user input.
   *
   * @param {string} inputValue The current value of the input field.
   */


  const handleKeydown = inputValue => {
    setFieldValue(inputValue);
  };
  /**
   * Handle author selection.
   *
   * @param {Object} selectedPostId The selected Author.
   */


  const handleChange = selectedPostId => {
    editPost({
      parent: selectedPostId
    });
  };

  return Object(external_wp_element_["createElement"])(external_wp_components_["ComboboxControl"], {
    className: "editor-page-attributes__parent",
    label: parentPageLabel,
    value: parentPostId,
    options: parentOptions,
    onFilterValueChange: Object(external_lodash_["debounce"])(handleKeydown, 300),
    onChange: handleChange
  });
}
/* harmony default export */ var page_attributes_parent = (PageAttributesParent);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-template/index.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


function PostTemplate({}) {
  const {
    availableTemplates,
    selectedTemplate,
    isViewable
  } = Object(external_wp_data_["useSelect"])(select => {
    var _getPostType$viewable, _getPostType;

    const {
      getEditedPostAttribute,
      getEditorSettings,
      getCurrentPostType
    } = select(store);
    const {
      getPostType
    } = select(external_wp_coreData_["store"]);
    return {
      selectedTemplate: getEditedPostAttribute('template'),
      availableTemplates: getEditorSettings().availableTemplates,
      isViewable: (_getPostType$viewable = (_getPostType = getPostType(getCurrentPostType())) === null || _getPostType === void 0 ? void 0 : _getPostType.viewable) !== null && _getPostType$viewable !== void 0 ? _getPostType$viewable : false
    };
  }, []);
  const {
    editPost
  } = Object(external_wp_data_["useDispatch"])(store);

  if (!isViewable || Object(external_lodash_["isEmpty"])(availableTemplates)) {
    return null;
  }

  return Object(external_wp_element_["createElement"])(external_wp_components_["SelectControl"], {
    label: Object(external_wp_i18n_["__"])('Template:'),
    value: selectedTemplate,
    onChange: templateSlug => {
      editPost({
        template: templateSlug || ''
      });
    },
    options: Object(external_lodash_["map"])(availableTemplates, (templateName, templateSlug) => ({
      value: templateSlug,
      label: templateName
    }))
  });
}
/* harmony default export */ var post_template = (PostTemplate);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-author/combobox.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






function PostAuthorCombobox() {
  const [fieldValue, setFieldValue] = Object(external_wp_element_["useState"])();
  const {
    authorId,
    isLoading,
    authors,
    postAuthor
  } = Object(external_wp_data_["useSelect"])(select => {
    const {
      __unstableGetAuthor,
      getAuthors,
      isResolving
    } = select('core');
    const {
      getEditedPostAttribute
    } = select('core/editor');

    const author = __unstableGetAuthor(getEditedPostAttribute('author'));

    const query = !fieldValue || '' === fieldValue ? {} : {
      search: fieldValue
    };
    return {
      authorId: getEditedPostAttribute('author'),
      postAuthor: author,
      authors: getAuthors(query),
      isLoading: isResolving('core', 'getAuthors', [query])
    };
  }, [fieldValue]);
  const {
    editPost
  } = Object(external_wp_data_["useDispatch"])('core/editor');
  const authorOptions = Object(external_wp_element_["useMemo"])(() => {
    const fetchedAuthors = (authors !== null && authors !== void 0 ? authors : []).map(author => {
      return {
        value: author.id,
        label: author.name
      };
    }); // Ensure the current author is included in the dropdown list.

    const foundAuthor = fetchedAuthors.findIndex(({
      value
    }) => (postAuthor === null || postAuthor === void 0 ? void 0 : postAuthor.id) === value);

    if (foundAuthor < 0 && postAuthor) {
      return [{
        value: postAuthor.id,
        label: postAuthor.name
      }, ...fetchedAuthors];
    }

    return fetchedAuthors;
  }, [authors, postAuthor]); // Initializes the post author properly
  // Also ensures external changes are reflected.

  Object(external_wp_element_["useEffect"])(() => {
    if (postAuthor) {
      setFieldValue(postAuthor.name);
    }
  }, [postAuthor]);
  /**
   * Handle author selection.
   *
   * @param {number} postAuthorId The selected Author.
   */

  const handleSelect = postAuthorId => {
    if (!postAuthorId) {
      return;
    }

    editPost({
      author: postAuthorId
    });
  };
  /**
   * Handle user input.
   *
   * @param {string} inputValue The current value of the input field.
   */


  const handleKeydown = inputValue => {
    setFieldValue(inputValue);
  };

  if (!postAuthor) {
    return null;
  }

  return Object(external_wp_element_["createElement"])(external_wp_components_["ComboboxControl"], {
    label: Object(external_wp_i18n_["__"])('Author'),
    options: authorOptions,
    value: authorId,
    onFilterValueChange: Object(external_lodash_["debounce"])(handleKeydown, 300),
    onChange: handleSelect,
    isLoading: isLoading,
    allowReset: false
  });
}

/* harmony default export */ var combobox = (PostAuthorCombobox);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-author/select.js


/**
 * WordPress dependencies
 */





function PostAuthorSelect() {
  const {
    editPost
  } = Object(external_wp_data_["useDispatch"])('core/editor');
  const {
    postAuthor,
    authors
  } = Object(external_wp_data_["useSelect"])(select => {
    const authorsFromAPI = select('core').getAuthors();
    return {
      postAuthor: select('core/editor').getEditedPostAttribute('author'),
      authors: authorsFromAPI.map(author => ({
        label: Object(external_wp_htmlEntities_["decodeEntities"])(author.name),
        value: author.id
      }))
    };
  }, []);

  const setAuthorId = value => {
    const author = Number(value);
    editPost({
      author
    });
  };

  return Object(external_wp_element_["createElement"])(external_wp_components_["SelectControl"], {
    className: "post-author-selector",
    label: Object(external_wp_i18n_["__"])('Author'),
    options: authors,
    onChange: setAuthorId,
    value: postAuthor
  });
}

/* harmony default export */ var post_author_select = (PostAuthorSelect);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-author/index.js


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



const minimumUsersForCombobox = 25;

function PostAuthor() {
  const showCombobox = Object(external_wp_data_["useSelect"])(select => {
    // Not using `getUsers()` because it requires `list_users` capability.
    const authors = select(external_wp_coreData_["store"]).getAuthors();
    return (authors === null || authors === void 0 ? void 0 : authors.length) >= minimumUsersForCombobox;
  }, []);

  if (showCombobox) {
    return Object(external_wp_element_["createElement"])(combobox, null);
  }

  return Object(external_wp_element_["createElement"])(post_author_select, null);
}

/* harmony default export */ var post_author = (PostAuthor);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-author/check.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


function PostAuthorCheck({
  hasAssignAuthorAction,
  authors,
  children
}) {
  if (!hasAssignAuthorAction || !authors || 1 >= authors.length) {
    return null;
  }

  return Object(external_wp_element_["createElement"])(post_type_support_check, {
    supportKeys: "author"
  }, children);
}
/* harmony default export */ var post_author_check = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])(select => {
  const post = select('core/editor').getCurrentPost();
  return {
    hasAssignAuthorAction: Object(external_lodash_["get"])(post, ['_links', 'wp:action-assign-author'], false),
    postType: select('core/editor').getCurrentPostType(),
    authors: select('core').getAuthors()
  };
}), external_wp_compose_["withInstanceId"]])(PostAuthorCheck));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-comments/index.js


/**
 * WordPress dependencies
 */





function PostComments({
  commentStatus = 'open',
  ...props
}) {
  const onToggleComments = () => props.editPost({
    comment_status: commentStatus === 'open' ? 'closed' : 'open'
  });

  return Object(external_wp_element_["createElement"])(external_wp_components_["CheckboxControl"], {
    label: Object(external_wp_i18n_["__"])('Allow comments'),
    checked: commentStatus === 'open',
    onChange: onToggleComments
  });
}

/* harmony default export */ var post_comments = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])(select => {
  return {
    commentStatus: select('core/editor').getEditedPostAttribute('comment_status')
  };
}), Object(external_wp_data_["withDispatch"])(dispatch => ({
  editPost: dispatch('core/editor').editPost
}))])(PostComments));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-excerpt/index.js


/**
 * WordPress dependencies
 */





function PostExcerpt({
  excerpt,
  onUpdateExcerpt
}) {
  return Object(external_wp_element_["createElement"])("div", {
    className: "editor-post-excerpt"
  }, Object(external_wp_element_["createElement"])(external_wp_components_["TextareaControl"], {
    label: Object(external_wp_i18n_["__"])('Write an excerpt (optional)'),
    className: "editor-post-excerpt__textarea",
    onChange: value => onUpdateExcerpt(value),
    value: excerpt
  }), Object(external_wp_element_["createElement"])(external_wp_components_["ExternalLink"], {
    href: Object(external_wp_i18n_["__"])('https://wordpress.org/support/article/excerpt/')
  }, Object(external_wp_i18n_["__"])('Learn more about manual excerpts')));
}

/* harmony default export */ var post_excerpt = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])(select => {
  return {
    excerpt: select('core/editor').getEditedPostAttribute('excerpt')
  };
}), Object(external_wp_data_["withDispatch"])(dispatch => ({
  onUpdateExcerpt(excerpt) {
    dispatch('core/editor').editPost({
      excerpt
    });
  }

}))])(PostExcerpt));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-excerpt/check.js



/**
 * Internal dependencies
 */


function PostExcerptCheck(props) {
  return Object(external_wp_element_["createElement"])(post_type_support_check, Object(esm_extends["a" /* default */])({}, props, {
    supportKeys: "excerpt"
  }));
}

/* harmony default export */ var post_excerpt_check = (PostExcerptCheck);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/theme-support-check/index.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


function ThemeSupportCheck({
  themeSupports,
  children,
  postType,
  supportKeys
}) {
  const isSupported = Object(external_lodash_["some"])(Object(external_lodash_["castArray"])(supportKeys), key => {
    const supported = Object(external_lodash_["get"])(themeSupports, [key], false); // 'post-thumbnails' can be boolean or an array of post types.
    // In the latter case, we need to verify `postType` exists
    // within `supported`. If `postType` isn't passed, then the check
    // should fail.

    if ('post-thumbnails' === key && Object(external_lodash_["isArray"])(supported)) {
      return Object(external_lodash_["includes"])(supported, postType);
    }

    return supported;
  });

  if (!isSupported) {
    return null;
  }

  return children;
}
/* harmony default export */ var theme_support_check = (Object(external_wp_data_["withSelect"])(select => {
  const {
    getThemeSupports
  } = select('core');
  const {
    getEditedPostAttribute
  } = select('core/editor');
  return {
    postType: getEditedPostAttribute('type'),
    themeSupports: getThemeSupports()
  };
})(ThemeSupportCheck));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-featured-image/check.js



/**
 * Internal dependencies
 */



function PostFeaturedImageCheck(props) {
  return Object(external_wp_element_["createElement"])(theme_support_check, {
    supportKeys: "post-thumbnails"
  }, Object(external_wp_element_["createElement"])(post_type_support_check, Object(esm_extends["a" /* default */])({}, props, {
    supportKeys: "thumbnail"
  })));
}

/* harmony default export */ var post_featured_image_check = (PostFeaturedImageCheck);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-featured-image/index.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */


const ALLOWED_MEDIA_TYPES = ['image']; // Used when labels from post type were not yet loaded or when they are not present.

const DEFAULT_FEATURE_IMAGE_LABEL = Object(external_wp_i18n_["__"])('Featured image');

const DEFAULT_SET_FEATURE_IMAGE_LABEL = Object(external_wp_i18n_["__"])('Set featured image');

const DEFAULT_REMOVE_FEATURE_IMAGE_LABEL = Object(external_wp_i18n_["__"])('Remove image');

function PostFeaturedImage({
  currentPostId,
  featuredImageId,
  onUpdateImage,
  onDropImage,
  onRemoveImage,
  media,
  postType,
  noticeUI
}) {
  var _media$media_details$, _media$media_details$2;

  const postLabel = Object(external_lodash_["get"])(postType, ['labels'], {});
  const instructions = Object(external_wp_element_["createElement"])("p", null, Object(external_wp_i18n_["__"])('To edit the featured image, you need permission to upload media.'));
  let mediaWidth, mediaHeight, mediaSourceUrl;

  if (media) {
    const mediaSize = Object(external_wp_hooks_["applyFilters"])('editor.PostFeaturedImage.imageSize', 'post-thumbnail', media.id, currentPostId);

    if (Object(external_lodash_["has"])(media, ['media_details', 'sizes', mediaSize])) {
      // use mediaSize when available
      mediaWidth = media.media_details.sizes[mediaSize].width;
      mediaHeight = media.media_details.sizes[mediaSize].height;
      mediaSourceUrl = media.media_details.sizes[mediaSize].source_url;
    } else {
      // get fallbackMediaSize if mediaSize is not available
      const fallbackMediaSize = Object(external_wp_hooks_["applyFilters"])('editor.PostFeaturedImage.imageSize', 'thumbnail', media.id, currentPostId);

      if (Object(external_lodash_["has"])(media, ['media_details', 'sizes', fallbackMediaSize])) {
        // use fallbackMediaSize when mediaSize is not available
        mediaWidth = media.media_details.sizes[fallbackMediaSize].width;
        mediaHeight = media.media_details.sizes[fallbackMediaSize].height;
        mediaSourceUrl = media.media_details.sizes[fallbackMediaSize].source_url;
      } else {
        // use full image size when mediaFallbackSize and mediaSize are not available
        mediaWidth = media.media_details.width;
        mediaHeight = media.media_details.height;
        mediaSourceUrl = media.source_url;
      }
    }
  }

  return Object(external_wp_element_["createElement"])(post_featured_image_check, null, noticeUI, Object(external_wp_element_["createElement"])("div", {
    className: "editor-post-featured-image"
  }, media && Object(external_wp_element_["createElement"])("div", {
    id: `editor-post-featured-image-${featuredImageId}-describedby`,
    className: "hidden"
  }, media.alt_text && Object(external_wp_i18n_["sprintf"])( // Translators: %s: The selected image alt text.
  Object(external_wp_i18n_["__"])('Current image: %s'), media.alt_text), !media.alt_text && Object(external_wp_i18n_["sprintf"])( // Translators: %s: The selected image filename.
  Object(external_wp_i18n_["__"])('The current image has no alternative text. The file name is: %s'), ((_media$media_details$ = media.media_details.sizes) === null || _media$media_details$ === void 0 ? void 0 : (_media$media_details$2 = _media$media_details$.full) === null || _media$media_details$2 === void 0 ? void 0 : _media$media_details$2.file) || media.slug)), Object(external_wp_element_["createElement"])(external_wp_blockEditor_["MediaUploadCheck"], {
    fallback: instructions
  }, Object(external_wp_element_["createElement"])(external_wp_blockEditor_["MediaUpload"], {
    title: postLabel.featured_image || DEFAULT_FEATURE_IMAGE_LABEL,
    onSelect: onUpdateImage,
    unstableFeaturedImageFlow: true,
    allowedTypes: ALLOWED_MEDIA_TYPES,
    modalClass: "editor-post-featured-image__media-modal",
    render: ({
      open
    }) => Object(external_wp_element_["createElement"])("div", {
      className: "editor-post-featured-image__container"
    }, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
      className: !featuredImageId ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview',
      onClick: open,
      "aria-label": !featuredImageId ? null : Object(external_wp_i18n_["__"])('Edit or update the image'),
      "aria-describedby": !featuredImageId ? null : `editor-post-featured-image-${featuredImageId}-describedby`
    }, !!featuredImageId && media && Object(external_wp_element_["createElement"])(external_wp_components_["ResponsiveWrapper"], {
      naturalWidth: mediaWidth,
      naturalHeight: mediaHeight,
      isInline: true
    }, Object(external_wp_element_["createElement"])("img", {
      src: mediaSourceUrl,
      alt: ""
    })), !!featuredImageId && !media && Object(external_wp_element_["createElement"])(external_wp_components_["Spinner"], null), !featuredImageId && (postLabel.set_featured_image || DEFAULT_SET_FEATURE_IMAGE_LABEL)), Object(external_wp_element_["createElement"])(external_wp_components_["DropZone"], {
      onFilesDrop: onDropImage
    })),
    value: featuredImageId
  })), !!featuredImageId && media && !media.isLoading && Object(external_wp_element_["createElement"])(external_wp_blockEditor_["MediaUploadCheck"], null, Object(external_wp_element_["createElement"])(external_wp_blockEditor_["MediaUpload"], {
    title: postLabel.featured_image || DEFAULT_FEATURE_IMAGE_LABEL,
    onSelect: onUpdateImage,
    unstableFeaturedImageFlow: true,
    allowedTypes: ALLOWED_MEDIA_TYPES,
    modalClass: "editor-post-featured-image__media-modal",
    render: ({
      open
    }) => Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
      onClick: open,
      isSecondary: true
    }, Object(external_wp_i18n_["__"])('Replace Image'))
  })), !!featuredImageId && Object(external_wp_element_["createElement"])(external_wp_blockEditor_["MediaUploadCheck"], null, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    onClick: onRemoveImage,
    isLink: true,
    isDestructive: true
  }, postLabel.remove_featured_image || DEFAULT_REMOVE_FEATURE_IMAGE_LABEL))));
}

const applyWithSelect = Object(external_wp_data_["withSelect"])(select => {
  const {
    getMedia,
    getPostType
  } = select('core');
  const {
    getCurrentPostId,
    getEditedPostAttribute
  } = select('core/editor');
  const featuredImageId = getEditedPostAttribute('featured_media');
  return {
    media: featuredImageId ? getMedia(featuredImageId) : null,
    currentPostId: getCurrentPostId(),
    postType: getPostType(getEditedPostAttribute('type')),
    featuredImageId
  };
});
const applyWithDispatch = Object(external_wp_data_["withDispatch"])((dispatch, {
  noticeOperations
}, {
  select
}) => {
  const {
    editPost
  } = dispatch('core/editor');
  return {
    onUpdateImage(image) {
      editPost({
        featured_media: image.id
      });
    },

    onDropImage(filesList) {
      select(external_wp_blockEditor_["store"]).getSettings().mediaUpload({
        allowedTypes: ['image'],
        filesList,

        onFileChange([image]) {
          editPost({
            featured_media: image.id
          });
        },

        onError(message) {
          noticeOperations.removeAllNotices();
          noticeOperations.createErrorNotice(message);
        }

      });
    },

    onRemoveImage() {
      editPost({
        featured_media: 0
      });
    }

  };
});
/* harmony default export */ var post_featured_image = (Object(external_wp_compose_["compose"])(external_wp_components_["withNotices"], applyWithSelect, applyWithDispatch, Object(external_wp_components_["withFilters"])('editor.PostFeaturedImage'))(PostFeaturedImage));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-format/check.js



/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */



function PostFormatCheck({
  disablePostFormats,
  ...props
}) {
  return !disablePostFormats && Object(external_wp_element_["createElement"])(post_type_support_check, Object(esm_extends["a" /* default */])({}, props, {
    supportKeys: "post-formats"
  }));
}

/* harmony default export */ var post_format_check = (Object(external_wp_data_["withSelect"])(select => {
  const editorSettings = select('core/editor').getEditorSettings();
  return {
    disablePostFormats: editorSettings.disablePostFormats
  };
})(PostFormatCheck));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-format/index.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */

 // All WP post formats, sorted alphabetically by translated name.

const POST_FORMATS = [{
  id: 'aside',
  caption: Object(external_wp_i18n_["__"])('Aside')
}, {
  id: 'audio',
  caption: Object(external_wp_i18n_["__"])('Audio')
}, {
  id: 'chat',
  caption: Object(external_wp_i18n_["__"])('Chat')
}, {
  id: 'gallery',
  caption: Object(external_wp_i18n_["__"])('Gallery')
}, {
  id: 'image',
  caption: Object(external_wp_i18n_["__"])('Image')
}, {
  id: 'link',
  caption: Object(external_wp_i18n_["__"])('Link')
}, {
  id: 'quote',
  caption: Object(external_wp_i18n_["__"])('Quote')
}, {
  id: 'standard',
  caption: Object(external_wp_i18n_["__"])('Standard')
}, {
  id: 'status',
  caption: Object(external_wp_i18n_["__"])('Status')
}, {
  id: 'video',
  caption: Object(external_wp_i18n_["__"])('Video')
}].sort((a, b) => {
  const normalizedA = a.caption.toUpperCase();
  const normalizedB = b.caption.toUpperCase();

  if (normalizedA < normalizedB) {
    return -1;
  }

  if (normalizedA > normalizedB) {
    return 1;
  }

  return 0;
});
function PostFormat() {
  const instanceId = Object(external_wp_compose_["useInstanceId"])(PostFormat);
  const postFormatSelectorId = `post-format-selector-${instanceId}`;
  const {
    postFormat,
    suggestedFormat,
    supportedFormats
  } = Object(external_wp_data_["useSelect"])(select => {
    const {
      getEditedPostAttribute,
      getSuggestedPostFormat
    } = select('core/editor');

    const _postFormat = getEditedPostAttribute('format');

    const themeSupports = select('core').getThemeSupports();
    return {
      postFormat: _postFormat !== null && _postFormat !== void 0 ? _postFormat : 'standard',
      suggestedFormat: getSuggestedPostFormat(),
      // Ensure current format is always in the set.
      // The current format may not be a format supported by the theme.
      supportedFormats: Object(external_lodash_["union"])([_postFormat], Object(external_lodash_["get"])(themeSupports, ['formats'], []))
    };
  }, []);
  const formats = POST_FORMATS.filter(format => Object(external_lodash_["includes"])(supportedFormats, format.id));
  const suggestion = Object(external_lodash_["find"])(formats, format => format.id === suggestedFormat);
  const {
    editPost
  } = Object(external_wp_data_["useDispatch"])('core/editor');

  const onUpdatePostFormat = format => editPost({
    format
  });

  return Object(external_wp_element_["createElement"])(post_format_check, null, Object(external_wp_element_["createElement"])("div", {
    className: "editor-post-format"
  }, Object(external_wp_element_["createElement"])("div", {
    className: "editor-post-format__content"
  }, Object(external_wp_element_["createElement"])("label", {
    htmlFor: postFormatSelectorId
  }, Object(external_wp_i18n_["__"])('Post Format')), Object(external_wp_element_["createElement"])(external_wp_components_["SelectControl"], {
    value: postFormat,
    onChange: format => onUpdatePostFormat(format),
    id: postFormatSelectorId,
    options: formats.map(format => ({
      label: format.caption,
      value: format.id
    }))
  })), suggestion && suggestion.id !== postFormat && Object(external_wp_element_["createElement"])("div", {
    className: "editor-post-format__suggestion"
  }, Object(external_wp_i18n_["__"])('Suggestion:'), ' ', Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    isLink: true,
    onClick: () => onUpdatePostFormat(suggestion.id)
  }, suggestion.caption))));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/backup.js


/**
 * WordPress dependencies
 */

const backup = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M5.5 12h1.75l-2.5 3-2.5-3H4a8 8 0 113.134 6.35l.907-1.194A6.5 6.5 0 105.5 12zm9.53 1.97l-2.28-2.28V8.5a.75.75 0 00-1.5 0V12a.747.747 0 00.218.529l1.282-.84-1.28.842 2.5 2.5a.75.75 0 101.06-1.061z"
}));
/* harmony default export */ var library_backup = (backup);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-last-revision/check.js


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


function PostLastRevisionCheck({
  lastRevisionId,
  revisionsCount,
  children
}) {
  if (!lastRevisionId || revisionsCount < 2) {
    return null;
  }

  return Object(external_wp_element_["createElement"])(post_type_support_check, {
    supportKeys: "revisions"
  }, children);
}
/* harmony default export */ var post_last_revision_check = (Object(external_wp_data_["withSelect"])(select => {
  const {
    getCurrentPostLastRevisionId,
    getCurrentPostRevisionsCount
  } = select('core/editor');
  return {
    lastRevisionId: getCurrentPostLastRevisionId(),
    revisionsCount: getCurrentPostRevisionsCount()
  };
})(PostLastRevisionCheck));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-last-revision/index.js


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */




function LastRevision({
  lastRevisionId,
  revisionsCount
}) {
  return Object(external_wp_element_["createElement"])(post_last_revision_check, null, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    href: getWPAdminURL('revision.php', {
      revision: lastRevisionId,
      gutenberg: true
    }),
    className: "editor-post-last-revision__title",
    icon: library_backup
  }, Object(external_wp_i18n_["sprintf"])(
  /* translators: %d: number of revisions */
  Object(external_wp_i18n_["_n"])('%d Revision', '%d Revisions', revisionsCount), revisionsCount)));
}

/* harmony default export */ var post_last_revision = (Object(external_wp_data_["withSelect"])(select => {
  const {
    getCurrentPostLastRevisionId,
    getCurrentPostRevisionsCount
  } = select('core/editor');
  return {
    lastRevisionId: getCurrentPostLastRevisionId(),
    revisionsCount: getCurrentPostRevisionsCount()
  };
})(LastRevision));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-preview-button/index.js


/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */








function writeInterstitialMessage(targetDocument) {
  let markup = Object(external_wp_element_["renderToString"])(Object(external_wp_element_["createElement"])("div", {
    className: "editor-post-preview-button__interstitial-message"
  }, Object(external_wp_element_["createElement"])(external_wp_components_["SVG"], {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 96 96"
  }, Object(external_wp_element_["createElement"])(external_wp_components_["Path"], {
    className: "outer",
    d: "M48 12c19.9 0 36 16.1 36 36S67.9 84 48 84 12 67.9 12 48s16.1-36 36-36",
    fill: "none"
  }), Object(external_wp_element_["createElement"])(external_wp_components_["Path"], {
    className: "inner",
    d: "M69.5 46.4c0-3.9-1.4-6.7-2.6-8.8-1.6-2.6-3.1-4.9-3.1-7.5 0-2.9 2.2-5.7 5.4-5.7h.4C63.9 19.2 56.4 16 48 16c-11.2 0-21 5.7-26.7 14.4h2.1c3.3 0 8.5-.4 8.5-.4 1.7-.1 1.9 2.4.2 2.6 0 0-1.7.2-3.7.3L40 67.5l7-20.9L42 33c-1.7-.1-3.3-.3-3.3-.3-1.7-.1-1.5-2.7.2-2.6 0 0 5.3.4 8.4.4 3.3 0 8.5-.4 8.5-.4 1.7-.1 1.9 2.4.2 2.6 0 0-1.7.2-3.7.3l11.5 34.3 3.3-10.4c1.6-4.5 2.4-7.8 2.4-10.5zM16.1 48c0 12.6 7.3 23.5 18 28.7L18.8 35c-1.7 4-2.7 8.4-2.7 13zm32.5 2.8L39 78.6c2.9.8 5.9 1.3 9 1.3 3.7 0 7.3-.6 10.6-1.8-.1-.1-.2-.3-.2-.4l-9.8-26.9zM76.2 36c0 3.2-.6 6.9-2.4 11.4L64 75.6c9.5-5.5 15.9-15.8 15.9-27.6 0-5.5-1.4-10.8-3.9-15.3.1 1 .2 2.1.2 3.3z",
    fill: "none"
  })), Object(external_wp_element_["createElement"])("p", null, Object(external_wp_i18n_["__"])('Generating preview…'))));
  markup += `
		<style>
			body {
				margin: 0;
			}
			.editor-post-preview-button__interstitial-message {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				height: 100vh;
				width: 100vw;
			}
			@-webkit-keyframes paint {
				0% {
					stroke-dashoffset: 0;
				}
			}
			@-moz-keyframes paint {
				0% {
					stroke-dashoffset: 0;
				}
			}
			@-o-keyframes paint {
				0% {
					stroke-dashoffset: 0;
				}
			}
			@keyframes paint {
				0% {
					stroke-dashoffset: 0;
				}
			}
			.editor-post-preview-button__interstitial-message svg {
				width: 192px;
				height: 192px;
				stroke: #555d66;
				stroke-width: 0.75;
			}
			.editor-post-preview-button__interstitial-message svg .outer,
			.editor-post-preview-button__interstitial-message svg .inner {
				stroke-dasharray: 280;
				stroke-dashoffset: 280;
				-webkit-animation: paint 1.5s ease infinite alternate;
				-moz-animation: paint 1.5s ease infinite alternate;
				-o-animation: paint 1.5s ease infinite alternate;
				animation: paint 1.5s ease infinite alternate;
			}
			p {
				text-align: center;
				font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
			}
		</style>
	`;
  /**
   * Filters the interstitial message shown when generating previews.
   *
   * @param {string} markup The preview interstitial markup.
   */

  markup = Object(external_wp_hooks_["applyFilters"])('editor.PostPreview.interstitialMarkup', markup);
  targetDocument.write(markup);
  targetDocument.title = Object(external_wp_i18n_["__"])('Generating preview…');
  targetDocument.close();
}

class post_preview_button_PostPreviewButton extends external_wp_element_["Component"] {
  constructor() {
    super(...arguments);
    this.buttonRef = Object(external_wp_element_["createRef"])();
    this.openPreviewWindow = this.openPreviewWindow.bind(this);
  }

  componentDidUpdate(prevProps) {
    const {
      previewLink
    } = this.props; // This relies on the window being responsible to unset itself when
    // navigation occurs or a new preview window is opened, to avoid
    // unintentional forceful redirects.

    if (previewLink && !prevProps.previewLink) {
      this.setPreviewWindowLink(previewLink);
    }
  }
  /**
   * Sets the preview window's location to the given URL, if a preview window
   * exists and is not closed.
   *
   * @param {string} url URL to assign as preview window location.
   */


  setPreviewWindowLink(url) {
    const {
      previewWindow
    } = this;

    if (previewWindow && !previewWindow.closed) {
      previewWindow.location = url;

      if (this.buttonRef.current) {
        this.buttonRef.current.focus();
      }
    }
  }

  getWindowTarget() {
    const {
      postId
    } = this.props;
    return `wp-preview-${postId}`;
  }

  openPreviewWindow(event) {
    // Our Preview button has its 'href' and 'target' set correctly for a11y
    // purposes. Unfortunately, though, we can't rely on the default 'click'
    // handler since sometimes it incorrectly opens a new tab instead of reusing
    // the existing one.
    // https://github.com/WordPress/gutenberg/pull/8330
    event.preventDefault(); // Open up a Preview tab if needed. This is where we'll show the preview.

    if (!this.previewWindow || this.previewWindow.closed) {
      this.previewWindow = window.open('', this.getWindowTarget());
    } // Focus the Preview tab. This might not do anything, depending on the browser's
    // and user's preferences.
    // https://html.spec.whatwg.org/multipage/interaction.html#dom-window-focus


    this.previewWindow.focus();

    if ( // If we don't need to autosave the post before previewing, then we simply
    // load the Preview URL in the Preview tab.
    !this.props.isAutosaveable || // Do not save or overwrite the post, if the post is already locked.
    this.props.isPostLocked) {
      this.setPreviewWindowLink(event.target.href);
      return;
    } // Request an autosave. This happens asynchronously and causes the component
    // to update when finished.


    if (this.props.isDraft) {
      this.props.savePost({
        isPreview: true
      });
    } else {
      this.props.autosave({
        isPreview: true
      });
    } // Display a 'Generating preview' message in the Preview tab while we wait for the
    // autosave to finish.


    writeInterstitialMessage(this.previewWindow.document);
  }

  render() {
    const {
      previewLink,
      currentPostLink,
      isSaveable,
      role
    } = this.props; // Link to the `?preview=true` URL if we have it, since this lets us see
    // changes that were autosaved since the post was last published. Otherwise,
    // just link to the post's URL.

    const href = previewLink || currentPostLink;
    const classNames = classnames_default()({
      'editor-post-preview': !this.props.className
    }, this.props.className);
    return Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
      isTertiary: !this.props.className,
      className: classNames,
      href: href,
      target: this.getWindowTarget(),
      disabled: !isSaveable,
      onClick: this.openPreviewWindow,
      ref: this.buttonRef,
      role: role
    }, this.props.textContent ? this.props.textContent : Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_i18n_["_x"])('Preview', 'imperative verb'), Object(external_wp_element_["createElement"])(external_wp_components_["VisuallyHidden"], {
      as: "span"
    },
    /* translators: accessibility text */
    Object(external_wp_i18n_["__"])('(opens in a new tab)'))));
  }

}
/* harmony default export */ var post_preview_button = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])((select, {
  forcePreviewLink,
  forceIsAutosaveable
}) => {
  const {
    getCurrentPostId,
    getCurrentPostAttribute,
    getEditedPostAttribute,
    isEditedPostSaveable,
    isEditedPostAutosaveable,
    getEditedPostPreviewLink,
    isPostLocked
  } = select('core/editor');
  const {
    getPostType
  } = select('core');
  const previewLink = getEditedPostPreviewLink();
  const postType = getPostType(getEditedPostAttribute('type'));
  return {
    postId: getCurrentPostId(),
    currentPostLink: getCurrentPostAttribute('link'),
    previewLink: forcePreviewLink !== undefined ? forcePreviewLink : previewLink,
    isSaveable: isEditedPostSaveable(),
    isAutosaveable: forceIsAutosaveable || isEditedPostAutosaveable(),
    isViewable: Object(external_lodash_["get"])(postType, ['viewable'], false),
    isDraft: ['draft', 'auto-draft'].indexOf(getEditedPostAttribute('status')) !== -1,
    isPostLocked: isPostLocked()
  };
}), Object(external_wp_data_["withDispatch"])(dispatch => ({
  autosave: dispatch('core/editor').autosave,
  savePost: dispatch('core/editor').savePost
})), Object(external_wp_compose_["ifCondition"])(({
  isViewable
}) => isViewable)])(post_preview_button_PostPreviewButton));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-locked-modal/index.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */



function PostLockedModal() {
  const instanceId = Object(external_wp_compose_["useInstanceId"])(PostLockedModal);
  const hookName = 'core/editor/post-locked-modal-' + instanceId;
  const {
    autosave,
    updatePostLock
  } = Object(external_wp_data_["useDispatch"])('core/editor');
  const {
    isLocked,
    isTakeover,
    user,
    postId,
    postLockUtils,
    activePostLock,
    postType
  } = Object(external_wp_data_["useSelect"])(select => {
    const {
      isPostLocked,
      isPostLockTakeover,
      getPostLockUser,
      getCurrentPostId,
      getActivePostLock,
      getEditedPostAttribute,
      getEditorSettings
    } = select('core/editor');
    const {
      getPostType
    } = select('core');
    return {
      isLocked: isPostLocked(),
      isTakeover: isPostLockTakeover(),
      user: getPostLockUser(),
      postId: getCurrentPostId(),
      postLockUtils: getEditorSettings().postLockUtils,
      activePostLock: getActivePostLock(),
      postType: getPostType(getEditedPostAttribute('type'))
    };
  });
  Object(external_wp_element_["useEffect"])(() => {
    /**
     * Keep the lock refreshed.
     *
     * When the user does not send a heartbeat in a heartbeat-tick
     * the user is no longer editing and another user can start editing.
     *
     * @param {Object} data Data to send in the heartbeat request.
     */
    function sendPostLock(data) {
      if (isLocked) {
        return;
      }

      data['wp-refresh-post-lock'] = {
        lock: activePostLock,
        post_id: postId
      };
    }
    /**
     * Refresh post locks: update the lock string or show the dialog if somebody has taken over editing.
     *
     * @param {Object} data Data received in the heartbeat request
     */


    function receivePostLock(data) {
      if (!data['wp-refresh-post-lock']) {
        return;
      }

      const received = data['wp-refresh-post-lock'];

      if (received.lock_error) {
        // Auto save and display the takeover modal.
        autosave();
        updatePostLock({
          isLocked: true,
          isTakeover: true,
          user: {
            avatar: received.lock_error.avatar_src
          }
        });
      } else if (received.new_lock) {
        updatePostLock({
          isLocked: false,
          activePostLock: received.new_lock
        });
      }
    }
    /**
     * Unlock the post before the window is exited.
     */


    function releasePostLock() {
      if (isLocked || !activePostLock) {
        return;
      }

      const data = new window.FormData();
      data.append('action', 'wp-remove-post-lock');
      data.append('_wpnonce', postLockUtils.unlockNonce);
      data.append('post_ID', postId);
      data.append('active_post_lock', activePostLock);

      if (window.navigator.sendBeacon) {
        window.navigator.sendBeacon(postLockUtils.ajaxUrl, data);
      } else {
        const xhr = new window.XMLHttpRequest();
        xhr.open('POST', postLockUtils.ajaxUrl, false);
        xhr.send(data);
      }
    } // Details on these events on the Heartbeat API docs
    // https://developer.wordpress.org/plugins/javascript/heartbeat-api/


    Object(external_wp_hooks_["addAction"])('heartbeat.send', hookName, sendPostLock);
    Object(external_wp_hooks_["addAction"])('heartbeat.tick', hookName, receivePostLock);
    window.addEventListener('beforeunload', releasePostLock);
    return () => {
      Object(external_wp_hooks_["removeAction"])('heartbeat.send', hookName);
      Object(external_wp_hooks_["removeAction"])('heartbeat.tick', hookName);
      window.removeEventListener('beforeunload', releasePostLock);
    };
  }, []);

  if (!isLocked) {
    return null;
  }

  const userDisplayName = user.name;
  const userAvatar = user.avatar;
  const unlockUrl = Object(external_wp_url_["addQueryArgs"])('post.php', {
    'get-post-lock': '1',
    lockKey: true,
    post: postId,
    action: 'edit',
    _wpnonce: postLockUtils.nonce
  });
  const allPostsUrl = getWPAdminURL('edit.php', {
    post_type: Object(external_lodash_["get"])(postType, ['slug'])
  });

  const allPostsLabel = Object(external_wp_i18n_["__"])('Exit the Editor');

  return Object(external_wp_element_["createElement"])(external_wp_components_["Modal"], {
    title: isTakeover ? Object(external_wp_i18n_["__"])('Someone else has taken over this post.') : Object(external_wp_i18n_["__"])('This post is already being edited.'),
    focusOnMount: true,
    shouldCloseOnClickOutside: false,
    shouldCloseOnEsc: false,
    isDismissible: false,
    className: "editor-post-locked-modal"
  }, !!userAvatar && Object(external_wp_element_["createElement"])("img", {
    src: userAvatar,
    alt: Object(external_wp_i18n_["__"])('Avatar'),
    className: "editor-post-locked-modal__avatar"
  }), !!isTakeover && Object(external_wp_element_["createElement"])("div", null, Object(external_wp_element_["createElement"])("div", null, userDisplayName ? Object(external_wp_i18n_["sprintf"])(
  /* translators: %s: user's display name */
  Object(external_wp_i18n_["__"])('%s now has editing control of this post. Don’t worry, your changes up to this moment have been saved.'), userDisplayName) : Object(external_wp_i18n_["__"])('Another user now has editing control of this post. Don’t worry, your changes up to this moment have been saved.')), Object(external_wp_element_["createElement"])("div", {
    className: "editor-post-locked-modal__buttons"
  }, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    isPrimary: true,
    href: allPostsUrl
  }, allPostsLabel))), !isTakeover && Object(external_wp_element_["createElement"])("div", null, Object(external_wp_element_["createElement"])("div", null, userDisplayName ? Object(external_wp_i18n_["sprintf"])(
  /* translators: %s: user's display name */
  Object(external_wp_i18n_["__"])('%s is currently working on this post, which means you cannot make changes, unless you take over.'), userDisplayName) : Object(external_wp_i18n_["__"])('Another user is currently working on this post, which means you cannot make changes, unless you take over.')), Object(external_wp_element_["createElement"])("div", {
    className: "editor-post-locked-modal__buttons"
  }, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    isSecondary: true,
    href: allPostsUrl
  }, allPostsLabel), Object(external_wp_element_["createElement"])(post_preview_button, null), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    isPrimary: true,
    href: unlockUrl
  }, Object(external_wp_i18n_["__"])('Take Over')))));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-pending-status/check.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



function PostPendingStatusCheck({
  hasPublishAction,
  isPublished,
  children
}) {
  if (isPublished || !hasPublishAction) {
    return null;
  }

  return children;
}
/* harmony default export */ var post_pending_status_check = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])(select => {
  const {
    isCurrentPostPublished,
    getCurrentPostType,
    getCurrentPost
  } = select('core/editor');
  return {
    hasPublishAction: Object(external_lodash_["get"])(getCurrentPost(), ['_links', 'wp:action-publish'], false),
    isPublished: isCurrentPostPublished(),
    postType: getCurrentPostType()
  };
}))(PostPendingStatusCheck));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-pending-status/index.js


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


function PostPendingStatus({
  status,
  onUpdateStatus
}) {
  const togglePendingStatus = () => {
    const updatedStatus = status === 'pending' ? 'draft' : 'pending';
    onUpdateStatus(updatedStatus);
  };

  return Object(external_wp_element_["createElement"])(post_pending_status_check, null, Object(external_wp_element_["createElement"])(external_wp_components_["CheckboxControl"], {
    label: Object(external_wp_i18n_["__"])('Pending review'),
    checked: status === 'pending',
    onChange: togglePendingStatus
  }));
}
/* harmony default export */ var post_pending_status = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])(select => ({
  status: select('core/editor').getEditedPostAttribute('status')
})), Object(external_wp_data_["withDispatch"])(dispatch => ({
  onUpdateStatus(status) {
    dispatch('core/editor').editPost({
      status
    });
  }

})))(PostPendingStatus));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-pingbacks/index.js


/**
 * WordPress dependencies
 */





function PostPingbacks({
  pingStatus = 'open',
  ...props
}) {
  const onTogglePingback = () => props.editPost({
    ping_status: pingStatus === 'open' ? 'closed' : 'open'
  });

  return Object(external_wp_element_["createElement"])(external_wp_components_["CheckboxControl"], {
    label: Object(external_wp_i18n_["__"])('Allow pingbacks & trackbacks'),
    checked: pingStatus === 'open',
    onChange: onTogglePingback
  });
}

/* harmony default export */ var post_pingbacks = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])(select => {
  return {
    pingStatus: select('core/editor').getEditedPostAttribute('ping_status')
  };
}), Object(external_wp_data_["withDispatch"])(dispatch => ({
  editPost: dispatch('core/editor').editPost
}))])(PostPingbacks));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-publish-button/label.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




function PublishButtonLabel({
  isPublished,
  isBeingScheduled,
  isSaving,
  isPublishing,
  hasPublishAction,
  isAutosaving,
  hasNonPostEntityChanges
}) {
  if (isPublishing) {
    /* translators: button label text should, if possible, be under 16 characters. */
    return Object(external_wp_i18n_["__"])('Publishing…');
  } else if (isPublished && isSaving && !isAutosaving) {
    /* translators: button label text should, if possible, be under 16 characters. */
    return Object(external_wp_i18n_["__"])('Updating…');
  } else if (isBeingScheduled && isSaving && !isAutosaving) {
    /* translators: button label text should, if possible, be under 16 characters. */
    return Object(external_wp_i18n_["__"])('Scheduling…');
  }

  if (!hasPublishAction) {
    return hasNonPostEntityChanges ? Object(external_wp_i18n_["__"])('Submit for Review…') : Object(external_wp_i18n_["__"])('Submit for Review');
  } else if (isPublished) {
    return hasNonPostEntityChanges ? Object(external_wp_i18n_["__"])('Update…') : Object(external_wp_i18n_["__"])('Update');
  } else if (isBeingScheduled) {
    return hasNonPostEntityChanges ? Object(external_wp_i18n_["__"])('Schedule…') : Object(external_wp_i18n_["__"])('Schedule');
  }

  return Object(external_wp_i18n_["__"])('Publish');
}
/* harmony default export */ var post_publish_button_label = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])((select, {
  forceIsSaving
}) => {
  const {
    isCurrentPostPublished,
    isEditedPostBeingScheduled,
    isSavingPost,
    isPublishingPost,
    getCurrentPost,
    getCurrentPostType,
    isAutosavingPost
  } = select('core/editor');
  return {
    isPublished: isCurrentPostPublished(),
    isBeingScheduled: isEditedPostBeingScheduled(),
    isSaving: forceIsSaving || isSavingPost(),
    isPublishing: isPublishingPost(),
    hasPublishAction: Object(external_lodash_["get"])(getCurrentPost(), ['_links', 'wp:action-publish'], false),
    postType: getCurrentPostType(),
    isAutosaving: isAutosavingPost()
  };
})])(PublishButtonLabel));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-publish-button/index.js



/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */


class post_publish_button_PostPublishButton extends external_wp_element_["Component"] {
  constructor(props) {
    super(props);
    this.buttonNode = Object(external_wp_element_["createRef"])();
    this.createOnClick = this.createOnClick.bind(this);
    this.closeEntitiesSavedStates = this.closeEntitiesSavedStates.bind(this);
    this.state = {
      entitiesSavedStatesCallback: false
    };
  }

  componentDidMount() {
    if (this.props.focusOnMount) {
      this.buttonNode.current.focus();
    }
  }

  createOnClick(callback) {
    return (...args) => {
      const {
        hasNonPostEntityChanges
      } = this.props;

      if (hasNonPostEntityChanges) {
        // The modal for multiple entity saving will open,
        // hold the callback for saving/publishing the post
        // so that we can call it if the post entity is checked.
        this.setState({
          entitiesSavedStatesCallback: () => callback(...args)
        }); // Open the save panel by setting its callback.
        // To set a function on the useState hook, we must set it
        // with another function (() => myFunction). Passing the
        // function on its own will cause an error when called.

        this.props.setEntitiesSavedStatesCallback(() => this.closeEntitiesSavedStates);
        return external_lodash_["noop"];
      }

      return callback(...args);
    };
  }

  closeEntitiesSavedStates(savedEntities) {
    const {
      postType,
      postId
    } = this.props;
    const {
      entitiesSavedStatesCallback
    } = this.state;
    this.setState({
      entitiesSavedStatesCallback: false
    }, () => {
      if (savedEntities && Object(external_lodash_["some"])(savedEntities, elt => elt.kind === 'postType' && elt.name === postType && elt.key === postId)) {
        // The post entity was checked, call the held callback from `createOnClick`.
        entitiesSavedStatesCallback();
      }
    });
  }

  render() {
    const {
      forceIsDirty,
      forceIsSaving,
      hasPublishAction,
      isBeingScheduled,
      isOpen,
      isPostSavingLocked,
      isPublishable,
      isPublished,
      isSaveable,
      isSaving,
      isAutoSaving,
      isToggle,
      onSave,
      onStatusChange,
      onSubmit = external_lodash_["noop"],
      onToggle,
      visibility,
      hasNonPostEntityChanges
    } = this.props;
    const isButtonDisabled = isSaving || forceIsSaving || !isSaveable || isPostSavingLocked || !isPublishable && !forceIsDirty;
    const isToggleDisabled = isPublished || isSaving || forceIsSaving || !isSaveable || !isPublishable && !forceIsDirty;
    let publishStatus;

    if (!hasPublishAction) {
      publishStatus = 'pending';
    } else if (visibility === 'private') {
      publishStatus = 'private';
    } else if (isBeingScheduled) {
      publishStatus = 'future';
    } else {
      publishStatus = 'publish';
    }

    const onClickButton = () => {
      if (isButtonDisabled) {
        return;
      }

      onSubmit();
      onStatusChange(publishStatus);
      onSave();
    };

    const onClickToggle = () => {
      if (isToggleDisabled) {
        return;
      }

      onToggle();
    };

    const buttonProps = {
      'aria-disabled': isButtonDisabled && !hasNonPostEntityChanges,
      className: 'editor-post-publish-button',
      isBusy: !isAutoSaving && isSaving && isPublished,
      isPrimary: true,
      onClick: this.createOnClick(onClickButton)
    };
    const toggleProps = {
      'aria-disabled': isToggleDisabled && !hasNonPostEntityChanges,
      'aria-expanded': isOpen,
      className: 'editor-post-publish-panel__toggle',
      isBusy: isSaving && isPublished,
      isPrimary: true,
      onClick: this.createOnClick(onClickToggle)
    };
    const toggleChildren = isBeingScheduled ? Object(external_wp_i18n_["__"])('Schedule…') : Object(external_wp_i18n_["__"])('Publish');
    const buttonChildren = Object(external_wp_element_["createElement"])(post_publish_button_label, {
      forceIsSaving: forceIsSaving,
      hasNonPostEntityChanges: hasNonPostEntityChanges
    });
    const componentProps = isToggle ? toggleProps : buttonProps;
    const componentChildren = isToggle ? toggleChildren : buttonChildren;
    return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], Object(esm_extends["a" /* default */])({
      ref: this.buttonNode
    }, componentProps, {
      className: classnames_default()(componentProps.className, 'editor-post-publish-button__button', {
        'has-changes-dot': hasNonPostEntityChanges
      })
    }), componentChildren));
  }

}
/* harmony default export */ var post_publish_button = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])(select => {
  const {
    isSavingPost,
    isAutosavingPost,
    isEditedPostBeingScheduled,
    getEditedPostVisibility,
    isCurrentPostPublished,
    isEditedPostSaveable,
    isEditedPostPublishable,
    isPostSavingLocked,
    getCurrentPost,
    getCurrentPostType,
    getCurrentPostId,
    hasNonPostEntityChanges
  } = select('core/editor');

  const _isAutoSaving = isAutosavingPost();

  return {
    isSaving: isSavingPost() || _isAutoSaving,
    isAutoSaving: _isAutoSaving,
    isBeingScheduled: isEditedPostBeingScheduled(),
    visibility: getEditedPostVisibility(),
    isSaveable: isEditedPostSaveable(),
    isPostSavingLocked: isPostSavingLocked(),
    isPublishable: isEditedPostPublishable(),
    isPublished: isCurrentPostPublished(),
    hasPublishAction: Object(external_lodash_["get"])(getCurrentPost(), ['_links', 'wp:action-publish'], false),
    postType: getCurrentPostType(),
    postId: getCurrentPostId(),
    hasNonPostEntityChanges: hasNonPostEntityChanges()
  };
}), Object(external_wp_data_["withDispatch"])(dispatch => {
  const {
    editPost,
    savePost
  } = dispatch('core/editor');
  return {
    onStatusChange: status => editPost({
      status
    }, {
      undoIgnore: true
    }),
    onSave: savePost
  };
})])(post_publish_button_PostPublishButton));

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/close-small.js
var close_small = __webpack_require__("bWcr");

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/wordpress.js
var wordpress = __webpack_require__("wduq");

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-visibility/utils.js
/**
 * WordPress dependencies
 */

const visibilityOptions = [{
  value: 'public',
  label: Object(external_wp_i18n_["__"])('Public'),
  info: Object(external_wp_i18n_["__"])('Visible to everyone.')
}, {
  value: 'private',
  label: Object(external_wp_i18n_["__"])('Private'),
  info: Object(external_wp_i18n_["__"])('Only visible to site admins and editors.')
}, {
  value: 'password',
  label: Object(external_wp_i18n_["__"])('Password Protected'),
  info: Object(external_wp_i18n_["__"])('Protected with a password you choose. Only those with the password can view this post.')
}];

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-visibility/index.js


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


class post_visibility_PostVisibility extends external_wp_element_["Component"] {
  constructor(props) {
    super(...arguments);
    this.setPublic = this.setPublic.bind(this);
    this.setPrivate = this.setPrivate.bind(this);
    this.setPasswordProtected = this.setPasswordProtected.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.state = {
      hasPassword: !!props.password
    };
  }

  setPublic() {
    const {
      visibility,
      onUpdateVisibility,
      status
    } = this.props;
    onUpdateVisibility(visibility === 'private' ? 'draft' : status);
    this.setState({
      hasPassword: false
    });
  }

  setPrivate() {
    if ( // eslint-disable-next-line no-alert
    !window.confirm(Object(external_wp_i18n_["__"])('Would you like to privately publish this post now?'))) {
      return;
    }

    const {
      onUpdateVisibility,
      onSave
    } = this.props;
    onUpdateVisibility('private');
    this.setState({
      hasPassword: false
    });
    onSave();
  }

  setPasswordProtected() {
    const {
      visibility,
      onUpdateVisibility,
      status,
      password
    } = this.props;
    onUpdateVisibility(visibility === 'private' ? 'draft' : status, password || '');
    this.setState({
      hasPassword: true
    });
  }

  updatePassword(event) {
    const {
      status,
      onUpdateVisibility
    } = this.props;
    onUpdateVisibility(status, event.target.value);
  }

  render() {
    const {
      visibility,
      password,
      instanceId
    } = this.props;
    const visibilityHandlers = {
      public: {
        onSelect: this.setPublic,
        checked: visibility === 'public' && !this.state.hasPassword
      },
      private: {
        onSelect: this.setPrivate,
        checked: visibility === 'private'
      },
      password: {
        onSelect: this.setPasswordProtected,
        checked: this.state.hasPassword
      }
    };
    return [Object(external_wp_element_["createElement"])("fieldset", {
      key: "visibility-selector",
      className: "editor-post-visibility__dialog-fieldset"
    }, Object(external_wp_element_["createElement"])("legend", {
      className: "editor-post-visibility__dialog-legend"
    }, Object(external_wp_i18n_["__"])('Post Visibility')), visibilityOptions.map(({
      value,
      label,
      info
    }) => Object(external_wp_element_["createElement"])("div", {
      key: value,
      className: "editor-post-visibility__choice"
    }, Object(external_wp_element_["createElement"])("input", {
      type: "radio",
      name: `editor-post-visibility__setting-${instanceId}`,
      value: value,
      onChange: visibilityHandlers[value].onSelect,
      checked: visibilityHandlers[value].checked,
      id: `editor-post-${value}-${instanceId}`,
      "aria-describedby": `editor-post-${value}-${instanceId}-description`,
      className: "editor-post-visibility__dialog-radio"
    }), Object(external_wp_element_["createElement"])("label", {
      htmlFor: `editor-post-${value}-${instanceId}`,
      className: "editor-post-visibility__dialog-label"
    }, label), Object(external_wp_element_["createElement"])("p", {
      id: `editor-post-${value}-${instanceId}-description`,
      className: "editor-post-visibility__dialog-info"
    }, info)))), this.state.hasPassword && Object(external_wp_element_["createElement"])("div", {
      className: "editor-post-visibility__dialog-password",
      key: "password-selector"
    }, Object(external_wp_element_["createElement"])(external_wp_components_["VisuallyHidden"], {
      as: "label",
      htmlFor: `editor-post-visibility__dialog-password-input-${instanceId}`
    }, Object(external_wp_i18n_["__"])('Create password')), Object(external_wp_element_["createElement"])("input", {
      className: "editor-post-visibility__dialog-password-input",
      id: `editor-post-visibility__dialog-password-input-${instanceId}`,
      type: "text",
      onChange: this.updatePassword,
      value: password,
      placeholder: Object(external_wp_i18n_["__"])('Use a secure password')
    }))];
  }

}
/* harmony default export */ var post_visibility = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])(select => {
  const {
    getEditedPostAttribute,
    getEditedPostVisibility
  } = select('core/editor');
  return {
    status: getEditedPostAttribute('status'),
    visibility: getEditedPostVisibility(),
    password: getEditedPostAttribute('password')
  };
}), Object(external_wp_data_["withDispatch"])(dispatch => {
  const {
    savePost,
    editPost
  } = dispatch('core/editor');
  return {
    onSave: savePost,

    onUpdateVisibility(status, password = '') {
      editPost({
        status,
        password
      });
    }

  };
}), external_wp_compose_["withInstanceId"]])(post_visibility_PostVisibility));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-visibility/label.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



function PostVisibilityLabel({
  visibility
}) {
  const getVisibilityLabel = () => Object(external_lodash_["find"])(visibilityOptions, {
    value: visibility
  }).label;

  return getVisibilityLabel(visibility);
}

/* harmony default export */ var post_visibility_label = (Object(external_wp_data_["withSelect"])(select => ({
  visibility: select('core/editor').getEditedPostVisibility()
}))(PostVisibilityLabel));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-schedule/index.js


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */



function getDayOfTheMonth(date = new Date(), firstDay = true) {
  const d = new Date(date);
  return new Date(d.getFullYear(), d.getMonth() + (firstDay ? 0 : 1), firstDay ? 1 : 0).toISOString();
}

function PostSchedule() {
  const {
    postDate,
    postType
  } = Object(external_wp_data_["useSelect"])(select => ({
    postDate: select(store).getEditedPostAttribute('date'),
    postType: select(store).getCurrentPostType()
  }), []);
  const {
    editPost
  } = Object(external_wp_data_["useDispatch"])(store);

  const onUpdateDate = date => editPost({
    date
  });

  const [previewedMonth, setPreviewedMonth] = Object(external_wp_element_["useState"])(getDayOfTheMonth(postDate)); // Pick up published and schduled site posts.

  const eventsByPostType = Object(external_wp_data_["useSelect"])(select => select(external_wp_coreData_["store"]).getEntityRecords('postType', postType, {
    status: 'publish,future',
    after: getDayOfTheMonth(previewedMonth),
    before: getDayOfTheMonth(previewedMonth, false),
    exclude: [select(store).getCurrentPostId()]
  }), [previewedMonth, postType]);
  const events = Object(external_wp_element_["useMemo"])(() => (eventsByPostType || []).map(({
    title,
    type,
    date: eventDate
  }) => ({
    title: title === null || title === void 0 ? void 0 : title.rendered,
    type,
    date: new Date(eventDate)
  })), [eventsByPostType]);
  const ref = Object(external_wp_element_["useRef"])();

  const settings = Object(external_wp_date_["__experimentalGetSettings"])(); // To know if the current timezone is a 12 hour time with look for "a" in the time format
  // We also make sure this a is not escaped by a "/"


  const is12HourTime = /a(?!\\)/i.test(settings.formats.time.toLowerCase() // Test only the lower case a
  .replace(/\\\\/g, '') // Replace "//" with empty strings
  .split('').reverse().join('') // Reverse the string and test for "a" not followed by a slash
  );

  function onChange(newDate) {
    onUpdateDate(newDate);
    const {
      ownerDocument
    } = ref.current;
    ownerDocument.activeElement.blur();
  }

  return Object(external_wp_element_["createElement"])(external_wp_components_["DateTimePicker"], {
    ref: ref,
    currentDate: postDate,
    onChange: onChange,
    is12Hour: is12HourTime,
    events: events,
    onMonthPreviewed: setPreviewedMonth
  });
}

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-schedule/label.js
/**
 * WordPress dependencies
 */



function PostScheduleLabel({
  date,
  isFloating
}) {
  const settings = Object(external_wp_date_["__experimentalGetSettings"])();

  return date && !isFloating ? Object(external_wp_date_["format"])(`${settings.formats.date} ${settings.formats.time}`, date) : Object(external_wp_i18n_["__"])('Immediately');
}
/* harmony default export */ var post_schedule_label = (Object(external_wp_data_["withSelect"])(select => {
  return {
    date: select('core/editor').getEditedPostAttribute('date'),
    isFloating: select('core/editor').isEditedPostDateFloating()
  };
})(PostScheduleLabel));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-taxonomies/most-used-terms.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


const MAX_MOST_USED_TERMS = 10;
const DEFAULT_QUERY = {
  per_page: MAX_MOST_USED_TERMS,
  orderby: 'count',
  order: 'desc',
  hide_empty: true,
  _fields: 'id,name,count'
};
function MostUsedTerms({
  onSelect,
  taxonomy
}) {
  const {
    _terms,
    showTerms
  } = Object(external_wp_data_["useSelect"])(select => {
    const mostUsedTerms = select(external_wp_coreData_["store"]).getEntityRecords('taxonomy', taxonomy.slug, DEFAULT_QUERY);
    return {
      _terms: mostUsedTerms,
      showTerms: (mostUsedTerms === null || mostUsedTerms === void 0 ? void 0 : mostUsedTerms.length) >= MAX_MOST_USED_TERMS
    };
  }, []);

  if (!showTerms) {
    return null;
  }

  const terms = unescapeTerms(_terms);
  const label = Object(external_lodash_["get"])(taxonomy, ['labels', 'most_used']);
  return Object(external_wp_element_["createElement"])("div", {
    className: "editor-post-taxonomies__flat-term-most-used"
  }, Object(external_wp_element_["createElement"])("h3", {
    className: "editor-post-taxonomies__flat-term-most-used-label"
  }, label), Object(external_wp_element_["createElement"])("ul", {
    role: "list",
    className: "editor-post-taxonomies__flat-term-most-used-list"
  }, terms.map(term => Object(external_wp_element_["createElement"])("li", {
    key: term.id
  }, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    isLink: true,
    onClick: () => onSelect(term)
  }, term.name)))));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-taxonomies/flat-term-selector.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */









/**
 * Internal dependencies
 */




/**
 * Module constants
 */

const MAX_TERMS_SUGGESTIONS = 20;
const flat_term_selector_DEFAULT_QUERY = {
  per_page: MAX_TERMS_SUGGESTIONS,
  orderby: 'count',
  order: 'desc',
  _fields: 'id,name,count'
};

const isSameTermName = (termA, termB) => unescapeString(termA).toLowerCase() === unescapeString(termB).toLowerCase();

const termNamesToIds = (names, terms) => {
  return names.map(termName => Object(external_lodash_["find"])(terms, term => isSameTermName(term.name, termName)).id);
};

class flat_term_selector_FlatTermSelector extends external_wp_element_["Component"] {
  constructor() {
    super(...arguments);
    this.onChange = this.onChange.bind(this);
    this.searchTerms = Object(external_lodash_["debounce"])(this.searchTerms.bind(this), 500);
    this.findOrCreateTerm = this.findOrCreateTerm.bind(this);
    this.appendTerm = this.appendTerm.bind(this);
    this.state = {
      loading: !Object(external_lodash_["isEmpty"])(this.props.terms),
      availableTerms: [],
      selectedTerms: []
    };
  }

  componentDidMount() {
    if (!Object(external_lodash_["isEmpty"])(this.props.terms)) {
      this.initRequest = this.fetchTerms({
        include: this.props.terms.join(','),
        per_page: -1
      });
      this.initRequest.then(() => {
        this.setState({
          loading: false
        });
      }, xhr => {
        if (xhr.statusText === 'abort') {
          return;
        }

        this.setState({
          loading: false
        });
      });
    }
  }

  componentWillUnmount() {
    Object(external_lodash_["invoke"])(this.initRequest, ['abort']);
    Object(external_lodash_["invoke"])(this.searchRequest, ['abort']);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.terms !== this.props.terms) {
      this.updateSelectedTerms(this.props.terms);
    }
  }

  fetchTerms(params = {}) {
    const {
      taxonomy
    } = this.props;
    const query = { ...flat_term_selector_DEFAULT_QUERY,
      ...params
    };
    const request = external_wp_apiFetch_default()({
      path: Object(external_wp_url_["addQueryArgs"])(`/wp/v2/${taxonomy.rest_base}`, query)
    });
    request.then(unescapeTerms).then(terms => {
      this.setState(state => ({
        availableTerms: state.availableTerms.concat(terms.filter(term => !Object(external_lodash_["find"])(state.availableTerms, availableTerm => availableTerm.id === term.id)))
      }));
      this.updateSelectedTerms(this.props.terms);
    });
    return request;
  }

  updateSelectedTerms(terms = []) {
    const selectedTerms = terms.reduce((accumulator, termId) => {
      const termObject = Object(external_lodash_["find"])(this.state.availableTerms, term => term.id === termId);

      if (termObject) {
        accumulator.push(termObject.name);
      }

      return accumulator;
    }, []);
    this.setState({
      selectedTerms
    });
  }

  findOrCreateTerm(termName) {
    const {
      taxonomy
    } = this.props;
    const termNameEscaped = Object(external_lodash_["escape"])(termName); // Tries to create a term or fetch it if it already exists.

    return external_wp_apiFetch_default()({
      path: `/wp/v2/${taxonomy.rest_base}`,
      method: 'POST',
      data: {
        name: termNameEscaped
      }
    }).catch(error => {
      const errorCode = error.code;

      if (errorCode === 'term_exists') {
        // If the terms exist, fetch it instead of creating a new one.
        this.addRequest = external_wp_apiFetch_default()({
          path: Object(external_wp_url_["addQueryArgs"])(`/wp/v2/${taxonomy.rest_base}`, { ...flat_term_selector_DEFAULT_QUERY,
            search: termNameEscaped
          })
        }).then(unescapeTerms);
        return this.addRequest.then(searchResult => {
          return Object(external_lodash_["find"])(searchResult, result => isSameTermName(result.name, termName));
        });
      }

      return Promise.reject(error);
    }).then(unescapeTerm);
  }

  onChange(termNames) {
    const uniqueTerms = Object(external_lodash_["uniqBy"])(termNames, term => term.toLowerCase());
    this.setState({
      selectedTerms: uniqueTerms
    });
    const newTermNames = uniqueTerms.filter(termName => !Object(external_lodash_["find"])(this.state.availableTerms, term => isSameTermName(term.name, termName)));

    if (newTermNames.length === 0) {
      return this.props.onUpdateTerms(termNamesToIds(uniqueTerms, this.state.availableTerms), this.props.taxonomy.rest_base);
    }

    Promise.all(newTermNames.map(this.findOrCreateTerm)).then(newTerms => {
      const newAvailableTerms = this.state.availableTerms.concat(newTerms);
      this.setState({
        availableTerms: newAvailableTerms
      });
      return this.props.onUpdateTerms(termNamesToIds(uniqueTerms, newAvailableTerms), this.props.taxonomy.rest_base);
    });
  }

  searchTerms(search = '') {
    Object(external_lodash_["invoke"])(this.searchRequest, ['abort']);

    if (search.length >= 3) {
      this.searchRequest = this.fetchTerms({
        search
      });
    }
  }

  appendTerm(newTerm) {
    const {
      onUpdateTerms,
      taxonomy,
      terms = [],
      slug,
      speak
    } = this.props;

    if (terms.includes(newTerm.id)) {
      return;
    }

    const newTerms = [...terms, newTerm.id];
    const termAddedMessage = Object(external_wp_i18n_["sprintf"])(
    /* translators: %s: term name. */
    Object(external_wp_i18n_["_x"])('%s added', 'term'), Object(external_lodash_["get"])(taxonomy, ['labels', 'singular_name'], slug === 'post_tag' ? Object(external_wp_i18n_["__"])('Tag') : Object(external_wp_i18n_["__"])('Term')));
    speak(termAddedMessage, 'assertive');
    this.setState({
      availableTerms: [...this.state.availableTerms, newTerm]
    });
    onUpdateTerms(newTerms, taxonomy.rest_base);
  }

  render() {
    const {
      slug,
      taxonomy,
      hasAssignAction
    } = this.props;

    if (!hasAssignAction) {
      return null;
    }

    const {
      loading,
      availableTerms,
      selectedTerms
    } = this.state;
    const termNames = availableTerms.map(term => term.name);
    const newTermLabel = Object(external_lodash_["get"])(taxonomy, ['labels', 'add_new_item'], slug === 'post_tag' ? Object(external_wp_i18n_["__"])('Add new tag') : Object(external_wp_i18n_["__"])('Add new Term'));
    const singularName = Object(external_lodash_["get"])(taxonomy, ['labels', 'singular_name'], slug === 'post_tag' ? Object(external_wp_i18n_["__"])('Tag') : Object(external_wp_i18n_["__"])('Term'));
    const termAddedLabel = Object(external_wp_i18n_["sprintf"])(
    /* translators: %s: term name. */
    Object(external_wp_i18n_["_x"])('%s added', 'term'), singularName);
    const termRemovedLabel = Object(external_wp_i18n_["sprintf"])(
    /* translators: %s: term name. */
    Object(external_wp_i18n_["_x"])('%s removed', 'term'), singularName);
    const removeTermLabel = Object(external_wp_i18n_["sprintf"])(
    /* translators: %s: term name. */
    Object(external_wp_i18n_["_x"])('Remove %s', 'term'), singularName);
    return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wp_components_["FormTokenField"], {
      value: selectedTerms,
      suggestions: termNames,
      onChange: this.onChange,
      onInputChange: this.searchTerms,
      maxSuggestions: MAX_TERMS_SUGGESTIONS,
      disabled: loading,
      label: newTermLabel,
      messages: {
        added: termAddedLabel,
        removed: termRemovedLabel,
        remove: removeTermLabel
      }
    }), Object(external_wp_element_["createElement"])(MostUsedTerms, {
      taxonomy: taxonomy,
      onSelect: this.appendTerm
    }));
  }

}

/* harmony default export */ var flat_term_selector = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])((select, {
  slug
}) => {
  const {
    getCurrentPost
  } = select(store);
  const {
    getTaxonomy
  } = select(external_wp_coreData_["store"]);
  const taxonomy = getTaxonomy(slug);
  return {
    hasCreateAction: taxonomy ? Object(external_lodash_["get"])(getCurrentPost(), ['_links', 'wp:action-create-' + taxonomy.rest_base], false) : false,
    hasAssignAction: taxonomy ? Object(external_lodash_["get"])(getCurrentPost(), ['_links', 'wp:action-assign-' + taxonomy.rest_base], false) : false,
    terms: taxonomy ? select(store).getEditedPostAttribute(taxonomy.rest_base) : [],
    taxonomy
  };
}), Object(external_wp_data_["withDispatch"])(dispatch => {
  return {
    onUpdateTerms(terms, restBase) {
      dispatch(store).editPost({
        [restBase]: terms
      });
    }

  };
}), external_wp_components_["withSpokenMessages"], Object(external_wp_components_["withFilters"])('editor.PostTaxonomyType'))(flat_term_selector_FlatTermSelector));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-publish-panel/maybe-tags-panel.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */



const TagsPanel = () => {
  const panelBodyTitle = [Object(external_wp_i18n_["__"])('Suggestion:'), Object(external_wp_element_["createElement"])("span", {
    className: "editor-post-publish-panel__link",
    key: "label"
  }, Object(external_wp_i18n_["__"])('Add tags'))];
  return Object(external_wp_element_["createElement"])(external_wp_components_["PanelBody"], {
    initialOpen: false,
    title: panelBodyTitle
  }, Object(external_wp_element_["createElement"])("p", null, Object(external_wp_i18n_["__"])('Tags help users and search engines navigate your site and find your content. Add a few keywords to describe your post.')), Object(external_wp_element_["createElement"])(flat_term_selector, {
    slug: 'post_tag'
  }));
};

class maybe_tags_panel_MaybeTagsPanel extends external_wp_element_["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      hadTagsWhenOpeningThePanel: props.hasTags
    };
  }
  /*
   * We only want to show the tag panel if the post didn't have
   * any tags when the user hit the Publish button.
   *
   * We can't use the prop.hasTags because it'll change to true
   * if the user adds a new tag within the pre-publish panel.
   * This would force a re-render and a new prop.hasTags check,
   * hiding this panel and keeping the user from adding
   * more than one tag.
   */


  render() {
    if (!this.state.hadTagsWhenOpeningThePanel) {
      return Object(external_wp_element_["createElement"])(TagsPanel, null);
    }

    return null;
  }

}

/* harmony default export */ var maybe_tags_panel = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])(select => {
  const postType = select('core/editor').getCurrentPostType();
  const tagsTaxonomy = select('core').getTaxonomy('post_tag');
  const tags = tagsTaxonomy && select('core/editor').getEditedPostAttribute(tagsTaxonomy.rest_base);
  return {
    areTagsFetched: tagsTaxonomy !== undefined,
    isPostTypeSupported: tagsTaxonomy && Object(external_lodash_["some"])(tagsTaxonomy.types, type => type === postType),
    hasTags: tags && tags.length
  };
}), Object(external_wp_compose_["ifCondition"])(({
  areTagsFetched,
  isPostTypeSupported
}) => isPostTypeSupported && areTagsFetched))(maybe_tags_panel_MaybeTagsPanel));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-publish-panel/maybe-post-format-panel.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



const getSuggestion = (supportedFormats, suggestedPostFormat) => {
  const formats = POST_FORMATS.filter(format => Object(external_lodash_["includes"])(supportedFormats, format.id));
  return Object(external_lodash_["find"])(formats, format => format.id === suggestedPostFormat);
};

const PostFormatSuggestion = ({
  suggestedPostFormat,
  suggestionText,
  onUpdatePostFormat
}) => Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
  isLink: true,
  onClick: () => onUpdatePostFormat(suggestedPostFormat)
}, suggestionText);

function PostFormatPanel() {
  const {
    currentPostFormat,
    suggestion
  } = Object(external_wp_data_["useSelect"])(select => {
    const {
      getEditedPostAttribute,
      getSuggestedPostFormat
    } = select('core/editor');
    const supportedFormats = Object(external_lodash_["get"])(select('core').getThemeSupports(), ['formats'], []);
    return {
      currentPostFormat: getEditedPostAttribute('format'),
      suggestion: getSuggestion(supportedFormats, getSuggestedPostFormat())
    };
  }, []);
  const {
    editPost
  } = Object(external_wp_data_["useDispatch"])('core/editor');

  const onUpdatePostFormat = format => editPost({
    format
  });

  const panelBodyTitle = [Object(external_wp_i18n_["__"])('Suggestion:'), Object(external_wp_element_["createElement"])("span", {
    className: "editor-post-publish-panel__link",
    key: "label"
  }, Object(external_wp_i18n_["__"])('Use a post format'))];

  if (!suggestion || suggestion.id === currentPostFormat) {
    return null;
  }

  return Object(external_wp_element_["createElement"])(external_wp_components_["PanelBody"], {
    initialOpen: false,
    title: panelBodyTitle
  }, Object(external_wp_element_["createElement"])("p", null, Object(external_wp_i18n_["__"])('Your theme uses post formats to highlight different kinds of content, like images or videos. Apply a post format to see this special styling.')), Object(external_wp_element_["createElement"])("p", null, Object(external_wp_element_["createElement"])(PostFormatSuggestion, {
    onUpdatePostFormat: onUpdatePostFormat,
    suggestedPostFormat: suggestion.id,
    suggestionText: Object(external_wp_i18n_["sprintf"])(
    /* translators: %s: post format */
    Object(external_wp_i18n_["__"])('Apply the "%1$s" format.'), suggestion.caption)
  })));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-publish-panel/prepublish.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */








function PostPublishPanelPrepublish({
  children
}) {
  const {
    isBeingScheduled,
    isRequestingSiteIcon,
    hasPublishAction,
    siteIconUrl,
    siteTitle,
    siteHome
  } = Object(external_wp_data_["useSelect"])(select => {
    const {
      isResolving
    } = select('core/data');
    const {
      getCurrentPost,
      isEditedPostBeingScheduled
    } = select('core/editor');
    const {
      getEntityRecord
    } = select('core');
    const siteData = getEntityRecord('root', '__unstableBase', undefined) || {};
    return {
      hasPublishAction: Object(external_lodash_["get"])(getCurrentPost(), ['_links', 'wp:action-publish'], false),
      isBeingScheduled: isEditedPostBeingScheduled(),
      isRequestingSiteIcon: isResolving('core', 'getEntityRecord', ['root', '__unstableBase', undefined]),
      siteIconUrl: siteData.site_icon_url,
      siteTitle: siteData.name,
      siteHome: siteData.home && Object(external_wp_url_["filterURLForDisplay"])(siteData.home)
    };
  }, []);
  let siteIcon = Object(external_wp_element_["createElement"])(external_wp_components_["Icon"], {
    className: "components-site-icon",
    size: "36px",
    icon: wordpress["a" /* default */]
  });

  if (siteIconUrl) {
    siteIcon = Object(external_wp_element_["createElement"])("img", {
      alt: Object(external_wp_i18n_["__"])('Site Icon'),
      className: "components-site-icon",
      src: siteIconUrl
    });
  }

  if (isRequestingSiteIcon) {
    siteIcon = null;
  }

  let prePublishTitle, prePublishBodyText;

  if (!hasPublishAction) {
    prePublishTitle = Object(external_wp_i18n_["__"])('Are you ready to submit for review?');
    prePublishBodyText = Object(external_wp_i18n_["__"])('When you’re ready, submit your work for review, and an Editor will be able to approve it for you.');
  } else if (isBeingScheduled) {
    prePublishTitle = Object(external_wp_i18n_["__"])('Are you ready to schedule?');
    prePublishBodyText = Object(external_wp_i18n_["__"])('Your work will be published at the specified date and time.');
  } else {
    prePublishTitle = Object(external_wp_i18n_["__"])('Are you ready to publish?');
    prePublishBodyText = Object(external_wp_i18n_["__"])('Double-check your settings before publishing.');
  }

  return Object(external_wp_element_["createElement"])("div", {
    className: "editor-post-publish-panel__prepublish"
  }, Object(external_wp_element_["createElement"])("div", null, Object(external_wp_element_["createElement"])("strong", null, prePublishTitle)), Object(external_wp_element_["createElement"])("p", null, prePublishBodyText), Object(external_wp_element_["createElement"])("div", {
    className: "components-site-card"
  }, siteIcon, Object(external_wp_element_["createElement"])("div", {
    className: "components-site-info"
  }, Object(external_wp_element_["createElement"])("span", {
    className: "components-site-name"
  }, siteTitle || Object(external_wp_i18n_["__"])('(Untitled)')), Object(external_wp_element_["createElement"])("span", {
    className: "components-site-home"
  }, siteHome))), hasPublishAction && Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wp_components_["PanelBody"], {
    initialOpen: false,
    title: [Object(external_wp_i18n_["__"])('Visibility:'), Object(external_wp_element_["createElement"])("span", {
      className: "editor-post-publish-panel__link",
      key: "label"
    }, Object(external_wp_element_["createElement"])(post_visibility_label, null))]
  }, Object(external_wp_element_["createElement"])(post_visibility, null)), Object(external_wp_element_["createElement"])(external_wp_components_["PanelBody"], {
    initialOpen: false,
    title: [Object(external_wp_i18n_["__"])('Publish:'), Object(external_wp_element_["createElement"])("span", {
      className: "editor-post-publish-panel__link",
      key: "label"
    }, Object(external_wp_element_["createElement"])(post_schedule_label, null))]
  }, Object(external_wp_element_["createElement"])(PostSchedule, null))), Object(external_wp_element_["createElement"])(PostFormatPanel, null), Object(external_wp_element_["createElement"])(maybe_tags_panel, null), children);
}

/* harmony default export */ var prepublish = (PostPublishPanelPrepublish);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-publish-panel/postpublish.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */


const POSTNAME = '%postname%';
/**
 * Returns URL for a future post.
 *
 * @param {Object} post         Post object.
 *
 * @return {string} PostPublish URL.
 */

const getFuturePostUrl = post => {
  const {
    slug
  } = post;

  if (post.permalink_template.includes(POSTNAME)) {
    return post.permalink_template.replace(POSTNAME, slug);
  }

  return post.permalink_template;
};

function postpublish_CopyButton({
  text,
  onCopy,
  children
}) {
  const ref = Object(external_wp_compose_["useCopyToClipboard"])(text, onCopy);
  return Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    isSecondary: true,
    ref: ref
  }, children);
}

class postpublish_PostPublishPanelPostpublish extends external_wp_element_["Component"] {
  constructor() {
    super(...arguments);
    this.state = {
      showCopyConfirmation: false
    };
    this.onCopy = this.onCopy.bind(this);
    this.onSelectInput = this.onSelectInput.bind(this);
    this.postLink = Object(external_wp_element_["createRef"])();
  }

  componentDidMount() {
    if (this.props.focusOnMount) {
      this.postLink.current.focus();
    }
  }

  componentWillUnmount() {
    clearTimeout(this.dismissCopyConfirmation);
  }

  onCopy() {
    this.setState({
      showCopyConfirmation: true
    });
    clearTimeout(this.dismissCopyConfirmation);
    this.dismissCopyConfirmation = setTimeout(() => {
      this.setState({
        showCopyConfirmation: false
      });
    }, 4000);
  }

  onSelectInput(event) {
    event.target.select();
  }

  render() {
    const {
      children,
      isScheduled,
      post,
      postType
    } = this.props;
    const postLabel = Object(external_lodash_["get"])(postType, ['labels', 'singular_name']);
    const viewPostLabel = Object(external_lodash_["get"])(postType, ['labels', 'view_item']);
    const link = post.status === 'future' ? getFuturePostUrl(post) : post.link;
    const postPublishNonLinkHeader = isScheduled ? Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_i18n_["__"])('is now scheduled. It will go live on'), ' ', Object(external_wp_element_["createElement"])(post_schedule_label, null), ".") : Object(external_wp_i18n_["__"])('is now live.');
    return Object(external_wp_element_["createElement"])("div", {
      className: "post-publish-panel__postpublish"
    }, Object(external_wp_element_["createElement"])(external_wp_components_["PanelBody"], {
      className: "post-publish-panel__postpublish-header"
    }, Object(external_wp_element_["createElement"])("a", {
      ref: this.postLink,
      href: link
    }, Object(external_wp_htmlEntities_["decodeEntities"])(post.title) || Object(external_wp_i18n_["__"])('(no title)')), ' ', postPublishNonLinkHeader), Object(external_wp_element_["createElement"])(external_wp_components_["PanelBody"], null, Object(external_wp_element_["createElement"])("p", {
      className: "post-publish-panel__postpublish-subheader"
    }, Object(external_wp_element_["createElement"])("strong", null, Object(external_wp_i18n_["__"])('What’s next?'))), Object(external_wp_element_["createElement"])(external_wp_components_["TextControl"], {
      className: "post-publish-panel__postpublish-post-address",
      readOnly: true,
      label: Object(external_wp_i18n_["sprintf"])(
      /* translators: %s: post type singular name */
      Object(external_wp_i18n_["__"])('%s address'), postLabel),
      value: Object(external_wp_url_["safeDecodeURIComponent"])(link),
      onFocus: this.onSelectInput
    }), Object(external_wp_element_["createElement"])("div", {
      className: "post-publish-panel__postpublish-buttons"
    }, !isScheduled && Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
      isSecondary: true,
      href: link
    }, viewPostLabel), Object(external_wp_element_["createElement"])(postpublish_CopyButton, {
      text: link,
      onCopy: this.onCopy
    }, this.state.showCopyConfirmation ? Object(external_wp_i18n_["__"])('Copied!') : Object(external_wp_i18n_["__"])('Copy Link')))), children);
  }

}

/* harmony default export */ var postpublish = (Object(external_wp_data_["withSelect"])(select => {
  const {
    getEditedPostAttribute,
    getCurrentPost,
    isCurrentPostScheduled
  } = select('core/editor');
  const {
    getPostType
  } = select('core');
  return {
    post: getCurrentPost(),
    postType: getPostType(getEditedPostAttribute('type')),
    isScheduled: isCurrentPostScheduled()
  };
})(postpublish_PostPublishPanelPostpublish));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-publish-panel/index.js



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */




class post_publish_panel_PostPublishPanel extends external_wp_element_["Component"] {
  constructor() {
    super(...arguments);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {
    // Automatically collapse the publish sidebar when a post
    // is published and the user makes an edit.
    if (prevProps.isPublished && !this.props.isSaving && this.props.isDirty) {
      this.props.onClose();
    }
  }

  onSubmit() {
    const {
      onClose,
      hasPublishAction,
      isPostTypeViewable
    } = this.props;

    if (!hasPublishAction || !isPostTypeViewable) {
      onClose();
    }
  }

  render() {
    const {
      forceIsDirty,
      forceIsSaving,
      isBeingScheduled,
      isPublished,
      isPublishSidebarEnabled,
      isScheduled,
      isSaving,
      onClose,
      onTogglePublishSidebar,
      PostPublishExtension,
      PrePublishExtension,
      ...additionalProps
    } = this.props;
    const propsForPanel = Object(external_lodash_["omit"])(additionalProps, ['hasPublishAction', 'isDirty', 'isPostTypeViewable']);
    const isPublishedOrScheduled = isPublished || isScheduled && isBeingScheduled;
    const isPrePublish = !isPublishedOrScheduled && !isSaving;
    const isPostPublish = isPublishedOrScheduled && !isSaving;
    return Object(external_wp_element_["createElement"])("div", Object(esm_extends["a" /* default */])({
      className: "editor-post-publish-panel"
    }, propsForPanel), Object(external_wp_element_["createElement"])("div", {
      className: "editor-post-publish-panel__header"
    }, isPostPublish ? Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
      onClick: onClose,
      icon: close_small["a" /* default */],
      label: Object(external_wp_i18n_["__"])('Close panel')
    }) : Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])("div", {
      className: "editor-post-publish-panel__header-publish-button"
    }, Object(external_wp_element_["createElement"])(post_publish_button, {
      focusOnMount: true,
      onSubmit: this.onSubmit,
      forceIsDirty: forceIsDirty,
      forceIsSaving: forceIsSaving
    })), Object(external_wp_element_["createElement"])("div", {
      className: "editor-post-publish-panel__header-cancel-button"
    }, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
      onClick: onClose,
      isSecondary: true
    }, Object(external_wp_i18n_["__"])('Cancel'))))), Object(external_wp_element_["createElement"])("div", {
      className: "editor-post-publish-panel__content"
    }, isPrePublish && Object(external_wp_element_["createElement"])(prepublish, null, PrePublishExtension && Object(external_wp_element_["createElement"])(PrePublishExtension, null)), isPostPublish && Object(external_wp_element_["createElement"])(postpublish, {
      focusOnMount: true
    }, PostPublishExtension && Object(external_wp_element_["createElement"])(PostPublishExtension, null)), isSaving && Object(external_wp_element_["createElement"])(external_wp_components_["Spinner"], null)), Object(external_wp_element_["createElement"])("div", {
      className: "editor-post-publish-panel__footer"
    }, Object(external_wp_element_["createElement"])(external_wp_components_["CheckboxControl"], {
      label: Object(external_wp_i18n_["__"])('Always show pre-publish checks.'),
      checked: isPublishSidebarEnabled,
      onChange: onTogglePublishSidebar
    })));
  }

}
/* harmony default export */ var post_publish_panel = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])(select => {
  const {
    getPostType
  } = select('core');
  const {
    getCurrentPost,
    getEditedPostAttribute,
    isCurrentPostPublished,
    isCurrentPostScheduled,
    isEditedPostBeingScheduled,
    isEditedPostDirty,
    isSavingPost
  } = select('core/editor');
  const {
    isPublishSidebarEnabled
  } = select('core/editor');
  const postType = getPostType(getEditedPostAttribute('type'));
  return {
    hasPublishAction: Object(external_lodash_["get"])(getCurrentPost(), ['_links', 'wp:action-publish'], false),
    isPostTypeViewable: Object(external_lodash_["get"])(postType, ['viewable'], false),
    isBeingScheduled: isEditedPostBeingScheduled(),
    isDirty: isEditedPostDirty(),
    isPublished: isCurrentPostPublished(),
    isPublishSidebarEnabled: isPublishSidebarEnabled(),
    isSaving: isSavingPost(),
    isScheduled: isCurrentPostScheduled()
  };
}), Object(external_wp_data_["withDispatch"])((dispatch, {
  isPublishSidebarEnabled
}) => {
  const {
    disablePublishSidebar,
    enablePublishSidebar
  } = dispatch('core/editor');
  return {
    onTogglePublishSidebar: () => {
      if (isPublishSidebarEnabled) {
        disablePublishSidebar();
      } else {
        enablePublishSidebar();
      }
    }
  };
}), external_wp_components_["withFocusReturn"], external_wp_components_["withConstrainedTabbing"]])(post_publish_panel_PostPublishPanel));

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/icon/index.js
var build_module_icon = __webpack_require__("iClF");

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/cloud.js


/**
 * WordPress dependencies
 */

const cloud = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M17.3 10.1c0-2.5-2.1-4.4-4.8-4.4-2.2 0-4.1 1.4-4.6 3.3h-.2C5.7 9 4 10.7 4 12.8c0 2.1 1.7 3.8 3.7 3.8h9c1.8 0 3.2-1.5 3.2-3.3.1-1.6-1.1-2.9-2.6-3.2zm-.5 5.1h-9c-1.2 0-2.2-1.1-2.2-2.3s1-2.4 2.2-2.4h1.3l.3-1.1c.4-1.3 1.7-2.2 3.2-2.2 1.8 0 3.3 1.3 3.3 2.9v1.3l1.3.2c.8.1 1.4.9 1.4 1.8-.1 1-.9 1.8-1.8 1.8z"
}));
/* harmony default export */ var library_cloud = (cloud);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/check.js
var library_check = __webpack_require__("RMJe");

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/cloud-upload.js


/**
 * WordPress dependencies
 */

const cloudUpload = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M17.3 10.1c0-2.5-2.1-4.4-4.8-4.4-2.2 0-4.1 1.4-4.6 3.3h-.2C5.7 9 4 10.7 4 12.8c0 2.1 1.7 3.8 3.7 3.8h9c1.8 0 3.2-1.5 3.2-3.3.1-1.6-1.1-2.9-2.6-3.2zm-.5 5.1h-4v-2.4L14 14l1-1-3-3-3 3 1 1 1.2-1.2v2.4H7.7c-1.2 0-2.2-1.1-2.2-2.3s1-2.4 2.2-2.4H9l.3-1.1c.4-1.3 1.7-2.2 3.2-2.2 1.8 0 3.3 1.3 3.3 2.9v1.3l1.3.2c.8.1 1.4.9 1.4 1.8 0 1-.8 1.8-1.7 1.8z"
}));
/* harmony default export */ var cloud_upload = (cloudUpload);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-switch-to-draft-button/index.js


/**
 * WordPress dependencies
 */





function PostSwitchToDraftButton({
  isSaving,
  isPublished,
  isScheduled,
  onClick
}) {
  const isMobileViewport = Object(external_wp_compose_["useViewportMatch"])('small', '<');

  if (!isPublished && !isScheduled) {
    return null;
  }

  const onSwitch = () => {
    let alertMessage;

    if (isPublished) {
      alertMessage = Object(external_wp_i18n_["__"])('Are you sure you want to unpublish this post?');
    } else if (isScheduled) {
      alertMessage = Object(external_wp_i18n_["__"])('Are you sure you want to unschedule this post?');
    } // eslint-disable-next-line no-alert


    if (window.confirm(alertMessage)) {
      onClick();
    }
  };

  return Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    className: "editor-post-switch-to-draft",
    onClick: onSwitch,
    disabled: isSaving,
    isTertiary: true
  }, isMobileViewport ? Object(external_wp_i18n_["__"])('Draft') : Object(external_wp_i18n_["__"])('Switch to draft'));
}

/* harmony default export */ var post_switch_to_draft_button = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])(select => {
  const {
    isSavingPost,
    isCurrentPostPublished,
    isCurrentPostScheduled
  } = select('core/editor');
  return {
    isSaving: isSavingPost(),
    isPublished: isCurrentPostPublished(),
    isScheduled: isCurrentPostScheduled()
  };
}), Object(external_wp_data_["withDispatch"])(dispatch => {
  const {
    editPost,
    savePost
  } = dispatch('core/editor');
  return {
    onClick: () => {
      editPost({
        status: 'draft'
      });
      savePost();
    }
  };
})])(PostSwitchToDraftButton));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-saved-state/index.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */


/**
 * Component showing whether the post is saved or not and providing save
 * buttons.
 *
 * @param {Object} props               Component props.
 * @param {?boolean} props.forceIsDirty  Whether to force the post to be marked
 * as dirty.
 * @param {?boolean} props.forceIsSaving Whether to force the post to be marked
 * as being saved.
 * @param {?boolean} props.showIconLabels Whether interface buttons show labels instead of icons
 * @return {import('@wordpress/element').WPComponent} The component.
 */

function PostSavedState({
  forceIsDirty,
  forceIsSaving,
  showIconLabels = false
}) {
  const [forceSavedMessage, setForceSavedMessage] = Object(external_wp_element_["useState"])(false);
  const isLargeViewport = Object(external_wp_compose_["useViewportMatch"])('small');
  const {
    isAutosaving,
    isDirty,
    isNew,
    isPending,
    isPublished,
    isSaveable,
    isSaving,
    isScheduled,
    hasPublishAction
  } = Object(external_wp_data_["useSelect"])(select => {
    var _getCurrentPost$_link, _getCurrentPost, _getCurrentPost$_link2;

    const {
      isEditedPostNew,
      isCurrentPostPublished,
      isCurrentPostScheduled,
      isEditedPostDirty,
      isSavingPost,
      isEditedPostSaveable,
      getCurrentPost,
      isAutosavingPost,
      getEditedPostAttribute
    } = select('core/editor');
    return {
      isAutosaving: isAutosavingPost(),
      isDirty: forceIsDirty || isEditedPostDirty(),
      isNew: isEditedPostNew(),
      isPending: 'pending' === getEditedPostAttribute('status'),
      isPublished: isCurrentPostPublished(),
      isSaving: forceIsSaving || isSavingPost(),
      isSaveable: isEditedPostSaveable(),
      isScheduled: isCurrentPostScheduled(),
      hasPublishAction: (_getCurrentPost$_link = (_getCurrentPost = getCurrentPost()) === null || _getCurrentPost === void 0 ? void 0 : (_getCurrentPost$_link2 = _getCurrentPost._links) === null || _getCurrentPost$_link2 === void 0 ? void 0 : _getCurrentPost$_link2['wp:action-publish']) !== null && _getCurrentPost$_link !== void 0 ? _getCurrentPost$_link : false
    };
  }, [forceIsDirty, forceIsSaving]);
  const {
    savePost
  } = Object(external_wp_data_["useDispatch"])('core/editor');
  const wasSaving = Object(external_wp_compose_["usePrevious"])(isSaving);
  Object(external_wp_element_["useEffect"])(() => {
    let timeoutId;

    if (wasSaving && !isSaving) {
      setForceSavedMessage(true);
      timeoutId = setTimeout(() => {
        setForceSavedMessage(false);
      }, 1000);
    }

    return () => clearTimeout(timeoutId);
  }, [isSaving]);

  if (isSaving) {
    // TODO: Classes generation should be common across all return
    // paths of this function, including proper naming convention for
    // the "Save Draft" button.
    const classes = classnames_default()('editor-post-saved-state', 'is-saving', Object(external_wp_components_["__unstableGetAnimateClassName"])({
      type: 'loading'
    }), {
      'is-autosaving': isAutosaving
    });
    return Object(external_wp_element_["createElement"])("span", {
      className: classes
    }, Object(external_wp_element_["createElement"])(build_module_icon["a" /* default */], {
      icon: library_cloud
    }), isAutosaving ? Object(external_wp_i18n_["__"])('Autosaving') : Object(external_wp_i18n_["__"])('Saving'));
  }

  if (isPublished || isScheduled) {
    return Object(external_wp_element_["createElement"])(post_switch_to_draft_button, null);
  }

  if (!isSaveable) {
    return null;
  }

  if (forceSavedMessage || !isNew && !isDirty) {
    return Object(external_wp_element_["createElement"])("span", {
      className: "editor-post-saved-state is-saved"
    }, Object(external_wp_element_["createElement"])(build_module_icon["a" /* default */], {
      icon: library_check["a" /* default */]
    }), Object(external_wp_i18n_["__"])('Saved'));
  } // Once the post has been submitted for review this button
  // is not needed for the contributor role.


  if (!hasPublishAction && isPending) {
    return null;
  }
  /* translators: button label text should, if possible, be under 16 characters. */


  const label = isPending ? Object(external_wp_i18n_["__"])('Save as pending') : Object(external_wp_i18n_["__"])('Save draft');
  /* translators: button label text should, if possible, be under 16 characters. */

  const shortLabel = Object(external_wp_i18n_["__"])('Save');

  if (!isLargeViewport) {
    return Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
      className: "editor-post-save-draft",
      label: label,
      onClick: () => savePost(),
      shortcut: external_wp_keycodes_["displayShortcut"].primary('s'),
      icon: cloud_upload
    }, showIconLabels && shortLabel);
  }

  return Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    className: "editor-post-save-draft",
    onClick: () => savePost(),
    shortcut: external_wp_keycodes_["displayShortcut"].primary('s'),
    isTertiary: true
  }, label);
}

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-schedule/check.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



function PostScheduleCheck({
  hasPublishAction,
  children
}) {
  if (!hasPublishAction) {
    return null;
  }

  return children;
}
/* harmony default export */ var post_schedule_check = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])(select => {
  const {
    getCurrentPost,
    getCurrentPostType
  } = select('core/editor');
  return {
    hasPublishAction: Object(external_lodash_["get"])(getCurrentPost(), ['_links', 'wp:action-publish'], false),
    postType: getCurrentPostType()
  };
})])(PostScheduleCheck));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-slug/check.js


/**
 * Internal dependencies
 */

function PostSlugCheck({
  children
}) {
  return Object(external_wp_element_["createElement"])(post_type_support_check, {
    supportKeys: "slug"
  }, children);
}

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-slug/index.js


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */



class post_slug_PostSlug extends external_wp_element_["Component"] {
  constructor({
    postSlug,
    postTitle,
    postID
  }) {
    super(...arguments);
    this.state = {
      editedSlug: Object(external_wp_url_["safeDecodeURIComponent"])(postSlug) || cleanForSlug(postTitle) || postID
    };
    this.setSlug = this.setSlug.bind(this);
  }

  setSlug(event) {
    const {
      postSlug,
      onUpdateSlug
    } = this.props;
    const {
      value
    } = event.target;
    const editedSlug = cleanForSlug(value);

    if (editedSlug === postSlug) {
      return;
    }

    onUpdateSlug(editedSlug);
  }

  render() {
    const {
      instanceId
    } = this.props;
    const {
      editedSlug
    } = this.state;
    const inputId = 'editor-post-slug-' + instanceId;
    return Object(external_wp_element_["createElement"])(PostSlugCheck, null, Object(external_wp_element_["createElement"])("label", {
      htmlFor: inputId
    }, Object(external_wp_i18n_["__"])('Slug')), Object(external_wp_element_["createElement"])("input", {
      type: "text",
      id: inputId,
      value: editedSlug,
      onChange: event => this.setState({
        editedSlug: event.target.value
      }),
      onBlur: this.setSlug,
      className: "editor-post-slug__input"
    }));
  }

}
/* harmony default export */ var post_slug = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])(select => {
  const {
    getCurrentPost,
    getEditedPostAttribute
  } = select('core/editor');
  const {
    id
  } = getCurrentPost();
  return {
    postSlug: getEditedPostAttribute('slug'),
    postTitle: getEditedPostAttribute('title'),
    postID: id
  };
}), Object(external_wp_data_["withDispatch"])(dispatch => {
  const {
    editPost
  } = dispatch('core/editor');
  return {
    onUpdateSlug(slug) {
      editPost({
        slug
      });
    }

  };
}), external_wp_compose_["withInstanceId"]])(post_slug_PostSlug));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-sticky/check.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



function PostStickyCheck({
  hasStickyAction,
  postType,
  children
}) {
  if (postType !== 'post' || !hasStickyAction) {
    return null;
  }

  return children;
}
/* harmony default export */ var post_sticky_check = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])(select => {
  const post = select('core/editor').getCurrentPost();
  return {
    hasStickyAction: Object(external_lodash_["get"])(post, ['_links', 'wp:action-sticky'], false),
    postType: select('core/editor').getCurrentPostType()
  };
})])(PostStickyCheck));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-sticky/index.js


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


function PostSticky({
  onUpdateSticky,
  postSticky = false
}) {
  return Object(external_wp_element_["createElement"])(post_sticky_check, null, Object(external_wp_element_["createElement"])(external_wp_components_["CheckboxControl"], {
    label: Object(external_wp_i18n_["__"])('Stick to the top of the blog'),
    checked: postSticky,
    onChange: () => onUpdateSticky(!postSticky)
  }));
}
/* harmony default export */ var post_sticky = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])(select => {
  return {
    postSticky: select('core/editor').getEditedPostAttribute('sticky')
  };
}), Object(external_wp_data_["withDispatch"])(dispatch => {
  return {
    onUpdateSticky(postSticky) {
      dispatch('core/editor').editPost({
        sticky: postSticky
      });
    }

  };
})])(PostSticky));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-taxonomies/hierarchical-term-selector.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */


/**
 * Module Constants
 */

const hierarchical_term_selector_DEFAULT_QUERY = {
  per_page: -1,
  orderby: 'name',
  order: 'asc',
  _fields: 'id,name,parent'
};
const MIN_TERMS_COUNT_FOR_FILTER = 8;

class hierarchical_term_selector_HierarchicalTermSelector extends external_wp_element_["Component"] {
  constructor() {
    super(...arguments);
    this.findTerm = this.findTerm.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onChangeFormName = this.onChangeFormName.bind(this);
    this.onChangeFormParent = this.onChangeFormParent.bind(this);
    this.onAddTerm = this.onAddTerm.bind(this);
    this.onToggleForm = this.onToggleForm.bind(this);
    this.setFilterValue = this.setFilterValue.bind(this);
    this.sortBySelected = this.sortBySelected.bind(this);
    this.state = {
      loading: true,
      availableTermsTree: [],
      availableTerms: [],
      adding: false,
      formName: '',
      formParent: '',
      showForm: false,
      filterValue: '',
      filteredTermsTree: []
    };
  }

  onChange(termId) {
    const {
      onUpdateTerms,
      terms = [],
      taxonomy
    } = this.props;
    const hasTerm = terms.indexOf(termId) !== -1;
    const newTerms = hasTerm ? Object(external_lodash_["without"])(terms, termId) : [...terms, termId];
    onUpdateTerms(newTerms, taxonomy.rest_base);
  }

  onChangeFormName(event) {
    const newValue = event.target.value.trim() === '' ? '' : event.target.value;
    this.setState({
      formName: newValue
    });
  }

  onChangeFormParent(newParent) {
    this.setState({
      formParent: newParent
    });
  }

  onToggleForm() {
    this.setState(state => ({
      showForm: !state.showForm
    }));
  }

  findTerm(terms, parent, name) {
    return Object(external_lodash_["find"])(terms, term => {
      return (!term.parent && !parent || parseInt(term.parent) === parseInt(parent)) && term.name.toLowerCase() === name.toLowerCase();
    });
  }

  onAddTerm(event) {
    event.preventDefault();
    const {
      onUpdateTerms,
      taxonomy,
      terms,
      slug
    } = this.props;
    const {
      formName,
      formParent,
      adding,
      availableTerms
    } = this.state;

    if (formName === '' || adding) {
      return;
    } // check if the term we are adding already exists


    const existingTerm = this.findTerm(availableTerms, formParent, formName);

    if (existingTerm) {
      // if the term we are adding exists but is not selected select it
      if (!Object(external_lodash_["some"])(terms, term => term === existingTerm.id)) {
        onUpdateTerms([...terms, existingTerm.id], taxonomy.rest_base);
      }

      this.setState({
        formName: '',
        formParent: ''
      });
      return;
    }

    this.setState({
      adding: true
    });
    this.addRequest = external_wp_apiFetch_default()({
      path: `/wp/v2/${taxonomy.rest_base}`,
      method: 'POST',
      data: {
        name: formName,
        parent: formParent ? formParent : undefined
      }
    }); // Tries to create a term or fetch it if it already exists

    const findOrCreatePromise = this.addRequest.catch(error => {
      const errorCode = error.code;

      if (errorCode === 'term_exists') {
        // search the new category created since last fetch
        this.addRequest = external_wp_apiFetch_default()({
          path: Object(external_wp_url_["addQueryArgs"])(`/wp/v2/${taxonomy.rest_base}`, { ...hierarchical_term_selector_DEFAULT_QUERY,
            parent: formParent || 0,
            search: formName
          })
        });
        return this.addRequest.then(searchResult => {
          return this.findTerm(searchResult, formParent, formName);
        });
      }

      return Promise.reject(error);
    });
    findOrCreatePromise.then(term => {
      const hasTerm = !!Object(external_lodash_["find"])(this.state.availableTerms, availableTerm => availableTerm.id === term.id);
      const newAvailableTerms = hasTerm ? this.state.availableTerms : [term, ...this.state.availableTerms];
      const termAddedMessage = Object(external_wp_i18n_["sprintf"])(
      /* translators: %s: taxonomy name */
      Object(external_wp_i18n_["_x"])('%s added', 'term'), Object(external_lodash_["get"])(this.props.taxonomy, ['labels', 'singular_name'], slug === 'category' ? Object(external_wp_i18n_["__"])('Category') : Object(external_wp_i18n_["__"])('Term')));
      this.props.speak(termAddedMessage, 'assertive');
      this.addRequest = null;
      this.setState({
        adding: false,
        formName: '',
        formParent: '',
        availableTerms: newAvailableTerms,
        availableTermsTree: this.sortBySelected(buildTermsTree(newAvailableTerms))
      });
      onUpdateTerms([...terms, term.id], taxonomy.rest_base);
    }, xhr => {
      if (xhr.statusText === 'abort') {
        return;
      }

      this.addRequest = null;
      this.setState({
        adding: false
      });
    });
  }

  componentDidMount() {
    this.fetchTerms();
  }

  componentWillUnmount() {
    Object(external_lodash_["invoke"])(this.fetchRequest, ['abort']);
    Object(external_lodash_["invoke"])(this.addRequest, ['abort']);
  }

  componentDidUpdate(prevProps) {
    if (this.props.taxonomy !== prevProps.taxonomy) {
      this.fetchTerms();
    }
  }

  fetchTerms() {
    const {
      taxonomy
    } = this.props;

    if (!taxonomy) {
      return;
    }

    this.fetchRequest = external_wp_apiFetch_default()({
      path: Object(external_wp_url_["addQueryArgs"])(`/wp/v2/${taxonomy.rest_base}`, hierarchical_term_selector_DEFAULT_QUERY)
    });
    this.fetchRequest.then(terms => {
      // resolve
      const availableTermsTree = this.sortBySelected(buildTermsTree(terms));
      this.fetchRequest = null;
      this.setState({
        loading: false,
        availableTermsTree,
        availableTerms: terms
      });
    }, xhr => {
      // reject
      if (xhr.statusText === 'abort') {
        return;
      }

      this.fetchRequest = null;
      this.setState({
        loading: false
      });
    });
  }

  sortBySelected(termsTree) {
    const {
      terms
    } = this.props;

    const treeHasSelection = termTree => {
      if (terms.indexOf(termTree.id) !== -1) {
        return true;
      }

      if (undefined === termTree.children) {
        return false;
      }

      const anyChildIsSelected = termTree.children.map(treeHasSelection).filter(child => child).length > 0;

      if (anyChildIsSelected) {
        return true;
      }

      return false;
    };

    const termOrChildIsSelected = (termA, termB) => {
      const termASelected = treeHasSelection(termA);
      const termBSelected = treeHasSelection(termB);

      if (termASelected === termBSelected) {
        return 0;
      }

      if (termASelected && !termBSelected) {
        return -1;
      }

      if (!termASelected && termBSelected) {
        return 1;
      }

      return 0;
    };

    termsTree.sort(termOrChildIsSelected);
    return termsTree;
  }

  setFilterValue(event) {
    const {
      availableTermsTree
    } = this.state;
    const filterValue = event.target.value;
    const filteredTermsTree = availableTermsTree.map(this.getFilterMatcher(filterValue)).filter(term => term);

    const getResultCount = terms => {
      let count = 0;

      for (let i = 0; i < terms.length; i++) {
        count++;

        if (undefined !== terms[i].children) {
          count += getResultCount(terms[i].children);
        }
      }

      return count;
    };

    this.setState({
      filterValue,
      filteredTermsTree
    });
    const resultCount = getResultCount(filteredTermsTree);
    const resultsFoundMessage = Object(external_wp_i18n_["sprintf"])(
    /* translators: %d: number of results */
    Object(external_wp_i18n_["_n"])('%d result found.', '%d results found.', resultCount), resultCount);
    this.props.debouncedSpeak(resultsFoundMessage, 'assertive');
  }

  getFilterMatcher(filterValue) {
    const matchTermsForFilter = originalTerm => {
      if ('' === filterValue) {
        return originalTerm;
      } // Shallow clone, because we'll be filtering the term's children and
      // don't want to modify the original term.


      const term = { ...originalTerm
      }; // Map and filter the children, recursive so we deal with grandchildren
      // and any deeper levels.

      if (term.children.length > 0) {
        term.children = term.children.map(matchTermsForFilter).filter(child => child);
      } // If the term's name contains the filterValue, or it has children
      // (i.e. some child matched at some point in the tree) then return it.


      if (-1 !== term.name.toLowerCase().indexOf(filterValue.toLowerCase()) || term.children.length > 0) {
        return term;
      } // Otherwise, return false. After mapping, the list of terms will need
      // to have false values filtered out.


      return false;
    };

    return matchTermsForFilter;
  }

  renderTerms(renderedTerms) {
    const {
      terms = []
    } = this.props;
    return renderedTerms.map(term => {
      return Object(external_wp_element_["createElement"])("div", {
        key: term.id,
        className: "editor-post-taxonomies__hierarchical-terms-choice"
      }, Object(external_wp_element_["createElement"])(external_wp_components_["CheckboxControl"], {
        checked: terms.indexOf(term.id) !== -1,
        onChange: () => {
          const termId = parseInt(term.id, 10);
          this.onChange(termId);
        },
        label: Object(external_lodash_["unescape"])(term.name)
      }), !!term.children.length && Object(external_wp_element_["createElement"])("div", {
        className: "editor-post-taxonomies__hierarchical-terms-subchoices"
      }, this.renderTerms(term.children)));
    });
  }

  render() {
    const {
      slug,
      taxonomy,
      instanceId,
      hasCreateAction,
      hasAssignAction
    } = this.props;

    if (!hasAssignAction) {
      return null;
    }

    const {
      availableTermsTree,
      availableTerms,
      filteredTermsTree,
      formName,
      formParent,
      loading,
      showForm,
      filterValue
    } = this.state;

    const labelWithFallback = (labelProperty, fallbackIsCategory, fallbackIsNotCategory) => Object(external_lodash_["get"])(taxonomy, ['labels', labelProperty], slug === 'category' ? fallbackIsCategory : fallbackIsNotCategory);

    const newTermButtonLabel = labelWithFallback('add_new_item', Object(external_wp_i18n_["__"])('Add new category'), Object(external_wp_i18n_["__"])('Add new term'));
    const newTermLabel = labelWithFallback('new_item_name', Object(external_wp_i18n_["__"])('Add new category'), Object(external_wp_i18n_["__"])('Add new term'));
    const parentSelectLabel = labelWithFallback('parent_item', Object(external_wp_i18n_["__"])('Parent Category'), Object(external_wp_i18n_["__"])('Parent Term'));
    const noParentOption = `— ${parentSelectLabel} —`;
    const newTermSubmitLabel = newTermButtonLabel;
    const inputId = `editor-post-taxonomies__hierarchical-terms-input-${instanceId}`;
    const filterInputId = `editor-post-taxonomies__hierarchical-terms-filter-${instanceId}`;
    const filterLabel = Object(external_lodash_["get"])(this.props.taxonomy, ['labels', 'search_items'], Object(external_wp_i18n_["__"])('Search Terms'));
    const groupLabel = Object(external_lodash_["get"])(this.props.taxonomy, ['name'], Object(external_wp_i18n_["__"])('Terms'));
    const showFilter = availableTerms.length >= MIN_TERMS_COUNT_FOR_FILTER;
    return [showFilter && Object(external_wp_element_["createElement"])("label", {
      key: "filter-label",
      htmlFor: filterInputId
    }, filterLabel), showFilter && Object(external_wp_element_["createElement"])("input", {
      type: "search",
      id: filterInputId,
      value: filterValue,
      onChange: this.setFilterValue,
      className: "editor-post-taxonomies__hierarchical-terms-filter",
      key: "term-filter-input"
    }), Object(external_wp_element_["createElement"])("div", {
      className: "editor-post-taxonomies__hierarchical-terms-list",
      key: "term-list",
      tabIndex: "0",
      role: "group",
      "aria-label": groupLabel
    }, this.renderTerms('' !== filterValue ? filteredTermsTree : availableTermsTree)), !loading && hasCreateAction && Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
      key: "term-add-button",
      onClick: this.onToggleForm,
      className: "editor-post-taxonomies__hierarchical-terms-add",
      "aria-expanded": showForm,
      isLink: true
    }, newTermButtonLabel), showForm && Object(external_wp_element_["createElement"])("form", {
      onSubmit: this.onAddTerm,
      key: "hierarchical-terms-form"
    }, Object(external_wp_element_["createElement"])("label", {
      htmlFor: inputId,
      className: "editor-post-taxonomies__hierarchical-terms-label"
    }, newTermLabel), Object(external_wp_element_["createElement"])("input", {
      type: "text",
      id: inputId,
      className: "editor-post-taxonomies__hierarchical-terms-input",
      value: formName,
      onChange: this.onChangeFormName,
      required: true
    }), !!availableTerms.length && Object(external_wp_element_["createElement"])(external_wp_components_["TreeSelect"], {
      label: parentSelectLabel,
      noOptionLabel: noParentOption,
      onChange: this.onChangeFormParent,
      selectedId: formParent,
      tree: availableTermsTree
    }), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
      isSecondary: true,
      type: "submit",
      className: "editor-post-taxonomies__hierarchical-terms-submit"
    }, newTermSubmitLabel))];
  }

}

/* harmony default export */ var hierarchical_term_selector = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])((select, {
  slug
}) => {
  const {
    getCurrentPost
  } = select('core/editor');
  const {
    getTaxonomy
  } = select('core');
  const taxonomy = getTaxonomy(slug);
  return {
    hasCreateAction: taxonomy ? Object(external_lodash_["get"])(getCurrentPost(), ['_links', 'wp:action-create-' + taxonomy.rest_base], false) : false,
    hasAssignAction: taxonomy ? Object(external_lodash_["get"])(getCurrentPost(), ['_links', 'wp:action-assign-' + taxonomy.rest_base], false) : false,
    terms: taxonomy ? select('core/editor').getEditedPostAttribute(taxonomy.rest_base) : [],
    taxonomy
  };
}), Object(external_wp_data_["withDispatch"])(dispatch => ({
  onUpdateTerms(terms, restBase) {
    dispatch('core/editor').editPost({
      [restBase]: terms
    });
  }

})), external_wp_components_["withSpokenMessages"], external_wp_compose_["withInstanceId"], Object(external_wp_components_["withFilters"])('editor.PostTaxonomyType')])(hierarchical_term_selector_HierarchicalTermSelector));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-taxonomies/index.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



function PostTaxonomies({
  postType,
  taxonomies,
  taxonomyWrapper = external_lodash_["identity"]
}) {
  const availableTaxonomies = Object(external_lodash_["filter"])(taxonomies, taxonomy => Object(external_lodash_["includes"])(taxonomy.types, postType));
  const visibleTaxonomies = Object(external_lodash_["filter"])(availableTaxonomies, taxonomy => taxonomy.visibility.show_ui);
  return visibleTaxonomies.map(taxonomy => {
    const TaxonomyComponent = taxonomy.hierarchical ? hierarchical_term_selector : flat_term_selector;
    return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], {
      key: `taxonomy-${taxonomy.slug}`
    }, taxonomyWrapper(Object(external_wp_element_["createElement"])(TaxonomyComponent, {
      slug: taxonomy.slug
    }), taxonomy));
  });
}
/* harmony default export */ var post_taxonomies = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])(select => {
  return {
    postType: select('core/editor').getCurrentPostType(),
    taxonomies: select('core').getTaxonomies({
      per_page: -1
    })
  };
})])(PostTaxonomies));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-taxonomies/check.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



function PostTaxonomiesCheck({
  postType,
  taxonomies,
  children
}) {
  const hasTaxonomies = Object(external_lodash_["some"])(taxonomies, taxonomy => Object(external_lodash_["includes"])(taxonomy.types, postType));

  if (!hasTaxonomies) {
    return null;
  }

  return children;
}
/* harmony default export */ var post_taxonomies_check = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])(select => {
  return {
    postType: select('core/editor').getCurrentPostType(),
    taxonomies: select('core').getTaxonomies({
      per_page: -1
    })
  };
})])(PostTaxonomiesCheck));

// EXTERNAL MODULE: ./node_modules/react-autosize-textarea/lib/index.js
var lib = __webpack_require__("O6Fj");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-text-editor/index.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */







function PostTextEditor() {
  const postContent = Object(external_wp_data_["useSelect"])(select => select('core/editor').getEditedPostContent(), []);
  const {
    editPost,
    resetEditorBlocks
  } = Object(external_wp_data_["useDispatch"])('core/editor');
  const [value, setValue] = Object(external_wp_element_["useState"])(postContent);
  const [isDirty, setIsDirty] = Object(external_wp_element_["useState"])(false);
  const instanceId = Object(external_wp_compose_["useInstanceId"])(PostTextEditor);

  if (!isDirty && value !== postContent) {
    setValue(postContent);
  }
  /**
   * Handles a textarea change event to notify the onChange prop callback and
   * reflect the new value in the component's own state. This marks the start
   * of the user's edits, if not already changed, preventing future props
   * changes to value from replacing the rendered value. This is expected to
   * be followed by a reset to dirty state via `stopEditing`.
   *
   * @see stopEditing
   *
   * @param {Event} event Change event.
   */


  const onChange = event => {
    const newValue = event.target.value;
    editPost({
      content: newValue
    });
    setValue(newValue);
    setIsDirty(true);
  };
  /**
   * Function called when the user has completed their edits, responsible for
   * ensuring that changes, if made, are surfaced to the onPersist prop
   * callback and resetting dirty state.
   */


  const stopEditing = () => {
    if (isDirty) {
      const blocks = Object(external_wp_blocks_["parse"])(value);
      resetEditorBlocks(blocks);
      setIsDirty(false);
    }
  };

  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wp_components_["VisuallyHidden"], {
    as: "label",
    htmlFor: `post-content-${instanceId}`
  }, Object(external_wp_i18n_["__"])('Type text or HTML')), Object(external_wp_element_["createElement"])(lib_default.a, {
    autoComplete: "off",
    dir: "auto",
    value: value,
    onChange: onChange,
    onBlur: stopEditing,
    className: "editor-post-text-editor",
    id: `post-content-${instanceId}`,
    placeholder: Object(external_wp_i18n_["__"])('Start writing with text or HTML')
  }));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-title/index.js


/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */










/**
 * Internal dependencies
 */


/**
 * Constants
 */

const REGEXP_NEWLINES = /[\r\n]+/g;
function PostTitle() {
  const instanceId = Object(external_wp_compose_["useInstanceId"])(PostTitle);
  const ref = Object(external_wp_element_["useRef"])();
  const [isSelected, setIsSelected] = Object(external_wp_element_["useState"])(false);
  const {
    editPost
  } = Object(external_wp_data_["useDispatch"])('core/editor');
  const {
    insertDefaultBlock,
    clearSelectedBlock,
    insertBlocks
  } = Object(external_wp_data_["useDispatch"])(external_wp_blockEditor_["store"]);
  const {
    isCleanNewPost,
    title,
    placeholder,
    isFocusMode,
    hasFixedToolbar
  } = Object(external_wp_data_["useSelect"])(select => {
    const {
      getEditedPostAttribute,
      isCleanNewPost: _isCleanNewPost
    } = select('core/editor');
    const {
      getSettings
    } = select(external_wp_blockEditor_["store"]);
    const {
      titlePlaceholder,
      focusMode,
      hasFixedToolbar: _hasFixedToolbar
    } = getSettings();
    return {
      isCleanNewPost: _isCleanNewPost(),
      title: getEditedPostAttribute('title'),
      placeholder: titlePlaceholder,
      isFocusMode: focusMode,
      hasFixedToolbar: _hasFixedToolbar
    };
  });
  Object(external_wp_element_["useEffect"])(() => {
    if (!ref.current) {
      return;
    }

    const {
      ownerDocument
    } = ref.current;
    const {
      activeElement,
      body
    } = ownerDocument; // Only autofocus the title when the post is entirely empty. This should
    // only happen for a new post, which means we focus the title on new
    // post so the author can start typing right away, without needing to
    // click anything.

    if (isCleanNewPost && (!activeElement || body === activeElement)) {
      ref.current.focus();
    }
  }, [isCleanNewPost]);

  function onEnterPress() {
    insertDefaultBlock(undefined, undefined, 0);
  }

  function onInsertBlockAfter(blocks) {
    insertBlocks(blocks, 0);
  }

  function onUpdate(newTitle) {
    editPost({
      title: newTitle
    });
  }

  function onSelect() {
    setIsSelected(true);
    clearSelectedBlock();
  }

  function onUnselect() {
    setIsSelected(false);
  }

  function onChange(event) {
    onUpdate(event.target.value.replace(REGEXP_NEWLINES, ' '));
  }

  function onKeyDown(event) {
    if (event.keyCode === external_wp_keycodes_["ENTER"]) {
      event.preventDefault();
      onEnterPress();
    }
  }

  function onPaste(event) {
    const clipboardData = event.clipboardData;
    let plainText = '';
    let html = ''; // IE11 only supports `Text` as an argument for `getData` and will
    // otherwise throw an invalid argument error, so we try the standard
    // arguments first, then fallback to `Text` if they fail.

    try {
      plainText = clipboardData.getData('text/plain');
      html = clipboardData.getData('text/html');
    } catch (error1) {
      try {
        html = clipboardData.getData('Text');
      } catch (error2) {
        // Some browsers like UC Browser paste plain text by default and
        // don't support clipboardData at all, so allow default
        // behaviour.
        return;
      }
    } // Allows us to ask for this information when we get a report.


    window.console.log('Received HTML:\n\n', html);
    window.console.log('Received plain text:\n\n', plainText);
    const content = Object(external_wp_blocks_["pasteHandler"])({
      HTML: html,
      plainText
    });

    if (typeof content !== 'string' && content.length) {
      event.preventDefault();
      const [firstBlock] = content;

      if (!title && (firstBlock.name === 'core/heading' || firstBlock.name === 'core/paragraph')) {
        onUpdate(firstBlock.attributes.content);
        onInsertBlockAfter(content.slice(1));
      } else {
        onInsertBlockAfter(content);
      }
    }
  } // The wp-block className is important for editor styles.
  // This same block is used in both the visual and the code editor.


  const className = classnames_default()('wp-block editor-post-title editor-post-title__block', {
    'is-selected': isSelected,
    'is-focus-mode': isFocusMode,
    'has-fixed-toolbar': hasFixedToolbar
  });
  const decodedPlaceholder = Object(external_wp_htmlEntities_["decodeEntities"])(placeholder);
  return Object(external_wp_element_["createElement"])(post_type_support_check, {
    supportKeys: "title"
  }, Object(external_wp_element_["createElement"])("div", {
    className: className
  }, Object(external_wp_element_["createElement"])(external_wp_components_["VisuallyHidden"], {
    as: "label",
    htmlFor: `post-title-${instanceId}`
  }, decodedPlaceholder || Object(external_wp_i18n_["__"])('Add title')), Object(external_wp_element_["createElement"])(lib_default.a, {
    ref: ref,
    id: `post-title-${instanceId}`,
    className: "editor-post-title__input",
    value: title,
    onChange: onChange,
    placeholder: decodedPlaceholder || Object(external_wp_i18n_["__"])('Add title'),
    onFocus: onSelect,
    onBlur: onUnselect,
    onKeyDown: onKeyDown,
    onKeyPress: onUnselect,
    onPaste: onPaste
  })));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-trash/index.js


/**
 * WordPress dependencies
 */





function PostTrash({
  isNew,
  postId,
  postType,
  ...props
}) {
  if (isNew || !postId) {
    return null;
  }

  const onClick = () => props.trashPost(postId, postType);

  return Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    className: "editor-post-trash",
    isDestructive: true,
    isTertiary: true,
    onClick: onClick
  }, Object(external_wp_i18n_["__"])('Move to trash'));
}

/* harmony default export */ var post_trash = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])(select => {
  const {
    isEditedPostNew,
    getCurrentPostId,
    getCurrentPostType
  } = select('core/editor');
  return {
    isNew: isEditedPostNew(),
    postId: getCurrentPostId(),
    postType: getCurrentPostType()
  };
}), Object(external_wp_data_["withDispatch"])(dispatch => ({
  trashPost: dispatch('core/editor').trashPost
}))])(PostTrash));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-trash/check.js
/**
 * WordPress dependencies
 */


function PostTrashCheck({
  isNew,
  postId,
  canUserDelete,
  children
}) {
  if (isNew || !postId || !canUserDelete) {
    return null;
  }

  return children;
}

/* harmony default export */ var post_trash_check = (Object(external_wp_data_["withSelect"])(select => {
  const {
    isEditedPostNew,
    getCurrentPostId,
    getCurrentPostType
  } = select('core/editor');
  const {
    getPostType,
    canUser
  } = select('core');
  const postId = getCurrentPostId();
  const postType = getPostType(getCurrentPostType());
  const resource = (postType === null || postType === void 0 ? void 0 : postType.rest_base) || ''; // eslint-disable-line camelcase

  return {
    isNew: isEditedPostNew(),
    postId,
    canUserDelete: postId && resource ? canUser('delete', resource, postId) : false
  };
})(PostTrashCheck));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-visibility/check.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



function PostVisibilityCheck({
  hasPublishAction,
  render
}) {
  const canEdit = hasPublishAction;
  return render({
    canEdit
  });
}
/* harmony default export */ var post_visibility_check = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])(select => {
  const {
    getCurrentPost,
    getCurrentPostType
  } = select('core/editor');
  return {
    hasPublishAction: Object(external_lodash_["get"])(getCurrentPost(), ['_links', 'wp:action-publish'], false),
    postType: getCurrentPostType()
  };
})])(PostVisibilityCheck));

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/info.js


/**
 * WordPress dependencies
 */

const info_info = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M12 3.2c-4.8 0-8.8 3.9-8.8 8.8 0 4.8 3.9 8.8 8.8 8.8 4.8 0 8.8-3.9 8.8-8.8 0-4.8-4-8.8-8.8-8.8zm0 16c-4 0-7.2-3.3-7.2-7.2C4.8 8 8 4.8 12 4.8s7.2 3.3 7.2 7.2c0 4-3.2 7.2-7.2 7.2zM11 17h2v-6h-2v6zm0-8h2V7h-2v2z"
}));
/* harmony default export */ var library_info = (info_info);

// EXTERNAL MODULE: external ["wp","wordcount"]
var external_wp_wordcount_ = __webpack_require__("7fqt");

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/word-count/index.js


/**
 * WordPress dependencies
 */



function WordCount() {
  const content = Object(external_wp_data_["useSelect"])(select => select('core/editor').getEditedPostAttribute('content'));
  /*
   * translators: If your word count is based on single characters (e.g. East Asian characters),
   * enter 'characters_excluding_spaces' or 'characters_including_spaces'. Otherwise, enter 'words'.
   * Do not translate into your own language.
   */

  const wordCountType = Object(external_wp_i18n_["_x"])('words', 'Word count type. Do not translate!');

  return Object(external_wp_element_["createElement"])("span", {
    className: "word-count"
  }, Object(external_wp_wordcount_["count"])(content, wordCountType));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/character-count/index.js
/**
 * WordPress dependencies
 */


function CharacterCount() {
  const content = Object(external_wp_data_["useSelect"])(select => select('core/editor').getEditedPostAttribute('content'));
  return Object(external_wp_wordcount_["count"])(content, 'characters_including_spaces');
}

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/table-of-contents/panel.js


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */





function TableOfContentsPanel({
  hasOutlineItemsDisabled,
  onRequestClose
}) {
  const {
    headingCount,
    paragraphCount,
    numberOfBlocks
  } = Object(external_wp_data_["useSelect"])(select => {
    const {
      getGlobalBlockCount
    } = select(external_wp_blockEditor_["store"]);
    return {
      headingCount: getGlobalBlockCount('core/heading'),
      paragraphCount: getGlobalBlockCount('core/paragraph'),
      numberOfBlocks: getGlobalBlockCount()
    };
  }, []);
  return (
    /*
     * Disable reason: The `list` ARIA role is redundant but
     * Safari+VoiceOver won't announce the list otherwise.
     */

    /* eslint-disable jsx-a11y/no-redundant-roles */
    Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])("div", {
      className: "table-of-contents__wrapper",
      role: "note",
      "aria-label": Object(external_wp_i18n_["__"])('Document Statistics'),
      tabIndex: "0"
    }, Object(external_wp_element_["createElement"])("ul", {
      role: "list",
      className: "table-of-contents__counts"
    }, Object(external_wp_element_["createElement"])("li", {
      className: "table-of-contents__count"
    }, Object(external_wp_i18n_["__"])('Characters'), Object(external_wp_element_["createElement"])("span", {
      className: "table-of-contents__number"
    }, Object(external_wp_element_["createElement"])(CharacterCount, null))), Object(external_wp_element_["createElement"])("li", {
      className: "table-of-contents__count"
    }, Object(external_wp_i18n_["__"])('Words'), Object(external_wp_element_["createElement"])(WordCount, null)), Object(external_wp_element_["createElement"])("li", {
      className: "table-of-contents__count"
    }, Object(external_wp_i18n_["__"])('Headings'), Object(external_wp_element_["createElement"])("span", {
      className: "table-of-contents__number"
    }, headingCount)), Object(external_wp_element_["createElement"])("li", {
      className: "table-of-contents__count"
    }, Object(external_wp_i18n_["__"])('Paragraphs'), Object(external_wp_element_["createElement"])("span", {
      className: "table-of-contents__number"
    }, paragraphCount)), Object(external_wp_element_["createElement"])("li", {
      className: "table-of-contents__count"
    }, Object(external_wp_i18n_["__"])('Blocks'), Object(external_wp_element_["createElement"])("span", {
      className: "table-of-contents__number"
    }, numberOfBlocks)))), headingCount > 0 && Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])("hr", null), Object(external_wp_element_["createElement"])("h2", {
      className: "table-of-contents__title"
    }, Object(external_wp_i18n_["__"])('Document Outline')), Object(external_wp_element_["createElement"])(document_outline, {
      onSelect: onRequestClose,
      hasOutlineItemsDisabled: hasOutlineItemsDisabled
    })))
    /* eslint-enable jsx-a11y/no-redundant-roles */

  );
}

/* harmony default export */ var panel = (TableOfContentsPanel);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/table-of-contents/index.js



/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */



function TableOfContents({
  hasOutlineItemsDisabled,
  repositionDropdown,
  ...props
}, ref) {
  const hasBlocks = Object(external_wp_data_["useSelect"])(select => !!select(external_wp_blockEditor_["store"]).getBlockCount(), []);
  return Object(external_wp_element_["createElement"])(external_wp_components_["Dropdown"], {
    position: repositionDropdown ? 'middle right right' : 'bottom',
    className: "table-of-contents",
    contentClassName: "table-of-contents__popover",
    renderToggle: ({
      isOpen,
      onToggle
    }) => Object(external_wp_element_["createElement"])(external_wp_components_["Button"], Object(esm_extends["a" /* default */])({}, props, {
      ref: ref,
      onClick: hasBlocks ? onToggle : undefined,
      icon: library_info,
      "aria-expanded": isOpen,
      "aria-haspopup": "true"
      /* translators: button label text should, if possible, be under 16 characters. */
      ,
      label: Object(external_wp_i18n_["__"])('Details'),
      tooltipPosition: "bottom",
      "aria-disabled": !hasBlocks
    })),
    renderContent: ({
      onClose
    }) => Object(external_wp_element_["createElement"])(panel, {
      onRequestClose: onClose,
      hasOutlineItemsDisabled: hasOutlineItemsDisabled
    })
  });
}

/* harmony default export */ var table_of_contents = (Object(external_wp_element_["forwardRef"])(TableOfContents));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/unsaved-changes-warning/index.js
/**
 * WordPress dependencies
 */



/**
 * Warns the user if there are unsaved changes before leaving the editor.
 * Compatible with Post Editor and Site Editor.
 *
 * @return {WPComponent} The component.
 */

function UnsavedChangesWarning() {
  const isDirty = Object(external_wp_data_["useSelect"])(select => {
    return () => {
      const {
        __experimentalGetDirtyEntityRecords
      } = select('core');

      const dirtyEntityRecords = __experimentalGetDirtyEntityRecords();

      return dirtyEntityRecords.length > 0;
    };
  }, []);
  /**
   * Warns the user if there are unsaved changes before leaving the editor.
   *
   * @param {Event} event `beforeunload` event.
   *
   * @return {?string} Warning prompt message, if unsaved changes exist.
   */

  const warnIfUnsavedChanges = event => {
    // We need to call the selector directly in the listener to avoid race
    // conditions with `BrowserURL` where `componentDidUpdate` gets the
    // new value of `isEditedPostDirty` before this component does,
    // causing this component to incorrectly think a trashed post is still dirty.
    if (isDirty()) {
      event.returnValue = Object(external_wp_i18n_["__"])('You have unsaved changes. If you proceed, they will be lost.');
      return event.returnValue;
    }
  };

  Object(external_wp_element_["useEffect"])(() => {
    window.addEventListener('beforeunload', warnIfUnsavedChanges);
    return () => {
      window.removeEventListener('beforeunload', warnIfUnsavedChanges);
    };
  }, []);
  return null;
}

// EXTERNAL MODULE: external ["wp","reusableBlocks"]
var external_wp_reusableBlocks_ = __webpack_require__("diJD");

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/provider/with-registry-provider.js


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


const withRegistryProvider = Object(external_wp_compose_["createHigherOrderComponent"])(WrappedComponent => Object(external_wp_data_["withRegistry"])(props => {
  const {
    useSubRegistry = true,
    registry,
    ...additionalProps
  } = props;

  if (!useSubRegistry) {
    return Object(external_wp_element_["createElement"])(WrappedComponent, additionalProps);
  }

  const [subRegistry, setSubRegistry] = Object(external_wp_element_["useState"])(null);
  Object(external_wp_element_["useEffect"])(() => {
    const newRegistry = Object(external_wp_data_["createRegistry"])({
      'core/block-editor': external_wp_blockEditor_["storeConfig"]
    }, registry);
    newRegistry.registerStore('core/editor', storeConfig);
    setSubRegistry(newRegistry);
  }, [registry]);

  if (!subRegistry) {
    return null;
  }

  return Object(external_wp_element_["createElement"])(external_wp_data_["RegistryProvider"], {
    value: subRegistry
  }, Object(external_wp_element_["createElement"])(WrappedComponent, additionalProps));
}), 'withRegistryProvider');
/* harmony default export */ var with_registry_provider = (withRegistryProvider);

// EXTERNAL MODULE: external ["wp","mediaUtils"]
var external_wp_mediaUtils_ = __webpack_require__("6aBm");

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/utils/media-upload/index.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Upload a media file when the file upload button is activated.
 * Wrapper around mediaUpload() that injects the current post ID.
 *
 * @param   {Object}   $0                   Parameters object passed to the function.
 * @param   {?Object}  $0.additionalData    Additional data to include in the request.
 * @param   {string}   $0.allowedTypes      Array with the types of media that can be uploaded, if unset all types are allowed.
 * @param   {Array}    $0.filesList         List of files.
 * @param   {?number}  $0.maxUploadFileSize Maximum upload size in bytes allowed for the site.
 * @param   {Function} $0.onError           Function called when an error happens.
 * @param   {Function} $0.onFileChange      Function called each time a file or a temporary representation of the file is available.
 */

function mediaUpload({
  additionalData = {},
  allowedTypes,
  filesList,
  maxUploadFileSize,
  onError = external_lodash_["noop"],
  onFileChange
}) {
  const {
    getCurrentPostId,
    getEditorSettings
  } = Object(external_wp_data_["select"])('core/editor');
  const wpAllowedMimeTypes = getEditorSettings().allowedMimeTypes;
  maxUploadFileSize = maxUploadFileSize || getEditorSettings().maxUploadFileSize;
  Object(external_wp_mediaUtils_["uploadMedia"])({
    allowedTypes,
    filesList,
    onFileChange,
    additionalData: {
      post: getCurrentPostId(),
      ...additionalData
    },
    maxUploadFileSize,
    onError: ({
      message
    }) => onError(message),
    wpAllowedMimeTypes
  });
}

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/provider/use-block-editor-settings.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



/**
 * React hook used to compute the block editor settings to use for the post editor.
 *
 * @param {Object}  settings    EditorProvider settings prop.
 * @param {boolean} hasTemplate Whether template mode is enabled.
 *
 * @return {Object} Block Editor Settings.
 */

function useBlockEditorSettings(settings, hasTemplate) {
  const {
    reusableBlocks,
    hasUploadPermissions,
    canUseUnfilteredHTML,
    isTitleSelected
  } = Object(external_wp_data_["useSelect"])(select => {
    const {
      canUserUseUnfilteredHTML,
      isPostTitleSelected
    } = select(store);
    const {
      canUser
    } = select(external_wp_coreData_["store"]);
    return {
      canUseUnfilteredHTML: canUserUseUnfilteredHTML(),
      reusableBlocks: select(external_wp_coreData_["store"]).getEntityRecords('postType', 'wp_block',
      /**
       * Unbounded queries are not supported on native so as a workaround, we set per_page with the maximum value that native version can handle.
       * Related issue: https://github.com/wordpress-mobile/gutenberg-mobile/issues/2661
       */
      {
        per_page: external_wp_element_["Platform"].select({
          web: -1,
          native: 100
        })
      }),
      hasUploadPermissions: Object(external_lodash_["defaultTo"])(canUser('create', 'media'), true),
      // This selector is only defined on mobile.
      isTitleSelected: isPostTitleSelected && isPostTitleSelected()
    };
  }, []);
  const {
    undo
  } = Object(external_wp_data_["useDispatch"])(store);
  return Object(external_wp_element_["useMemo"])(() => ({ ...Object(external_lodash_["pick"])(settings, ['__experimentalBlockDirectory', '__experimentalBlockPatternCategories', '__experimentalBlockPatterns', '__experimentalFeatures', '__experimentalGlobalStylesBaseStyles', '__experimentalGlobalStylesUserEntityId', '__experimentalPreferredStyleVariations', '__experimentalSetIsInserterOpened', 'alignWide', 'allowedBlockTypes', 'bodyPlaceholder', 'codeEditingEnabled', 'colors', 'disableCustomColors', 'disableCustomFontSizes', 'disableCustomGradients', 'enableCustomLineHeight', 'enableCustomSpacing', 'enableCustomUnits', 'focusMode', 'fontSizes', 'gradients', 'hasFixedToolbar', 'hasReducedUI', 'imageDefaultSize', 'imageDimensions', 'imageEditing', 'imageSizes', 'isRTL', 'keepCaretInsideBlock', 'maxWidth', 'onUpdateDefaultBlockStyles', 'styles', 'template', 'templateLock', 'titlePlaceholder', 'supportsLayout', 'widgetTypesToHideFromLegacyWidgetBlock']),
    mediaUpload: hasUploadPermissions ? mediaUpload : undefined,
    __experimentalReusableBlocks: reusableBlocks,
    __experimentalFetchLinkSuggestions: (search, searchOptions) => Object(external_wp_coreData_["__experimentalFetchLinkSuggestions"])(search, searchOptions, settings),
    __experimentalFetchRemoteUrlData: url => Object(external_wp_coreData_["__experimentalFetchRemoteUrlData"])(url),
    __experimentalCanUserUseUnfilteredHTML: canUseUnfilteredHTML,
    __experimentalUndo: undo,
    __experimentalShouldInsertAtTheTop: isTitleSelected,
    outlineMode: hasTemplate
  }), [settings, hasUploadPermissions, reusableBlocks, canUseUnfilteredHTML, undo, isTitleSelected, hasTemplate]);
}

/* harmony default export */ var use_block_editor_settings = (useBlockEditorSettings);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/provider/index.js


/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */





function EditorProvider({
  __unstableTemplate,
  post,
  settings,
  recovery,
  initialEdits,
  children
}) {
  const defaultBlockContext = Object(external_wp_element_["useMemo"])(() => {
    if (post.type === 'wp_template') {
      return {};
    }

    return {
      postId: post.id,
      postType: post.type
    };
  }, [post.id, post.type]);
  const {
    selection,
    isReady
  } = Object(external_wp_data_["useSelect"])(select => {
    const {
      getEditorSelection,
      __unstableIsEditorReady
    } = select(store);
    return {
      isReady: __unstableIsEditorReady(),
      selection: getEditorSelection()
    };
  }, []);
  const {
    id,
    type
  } = __unstableTemplate !== null && __unstableTemplate !== void 0 ? __unstableTemplate : post;
  const [blocks, onInput, onChange] = Object(external_wp_coreData_["useEntityBlockEditor"])('postType', type, {
    id
  });
  const editorSettings = use_block_editor_settings(settings, !!__unstableTemplate);
  const {
    updatePostLock,
    setupEditor,
    updateEditorSettings,
    __experimentalTearDownEditor
  } = Object(external_wp_data_["useDispatch"])(store);
  const {
    createWarningNotice
  } = Object(external_wp_data_["useDispatch"])(external_wp_notices_["store"]); // Iniitialize and tear down the editor.
  // Ideally this should be synced on each change and not just something you do once.

  Object(external_wp_element_["useLayoutEffect"])(() => {
    // Assume that we don't need to initialize in the case of an error recovery.
    if (recovery) {
      return;
    }

    updatePostLock(settings.postLock);
    setupEditor(post, initialEdits, settings.template);

    if (settings.autosave) {
      createWarningNotice(Object(external_wp_i18n_["__"])('There is an autosave of this post that is more recent than the version below.'), {
        id: 'autosave-exists',
        actions: [{
          label: Object(external_wp_i18n_["__"])('View the autosave'),
          url: settings.autosave.editLink
        }]
      });
    }

    return () => {
      __experimentalTearDownEditor();
    };
  }, []); // Synchronize the editor settings as they change

  Object(external_wp_element_["useEffect"])(() => {
    updateEditorSettings(settings);
  }, [settings]);

  if (!isReady) {
    return null;
  }

  return Object(external_wp_element_["createElement"])(external_wp_coreData_["EntityProvider"], {
    kind: "root",
    type: "site"
  }, Object(external_wp_element_["createElement"])(external_wp_coreData_["EntityProvider"], {
    kind: "postType",
    type: post.type,
    id: post.id
  }, Object(external_wp_element_["createElement"])(external_wp_blockEditor_["BlockContextProvider"], {
    value: defaultBlockContext
  }, Object(external_wp_element_["createElement"])(external_wp_blockEditor_["BlockEditorProvider"], {
    value: blocks,
    onChange: onChange,
    onInput: onInput,
    selection: selection,
    settings: editorSettings,
    useSubRegistry: false
  }, children, Object(external_wp_element_["createElement"])(external_wp_reusableBlocks_["ReusableBlocksMenuItems"], null)))));
}

/* harmony default export */ var provider = (with_registry_provider(EditorProvider));

// EXTERNAL MODULE: external ["wp","serverSideRender"]
var external_wp_serverSideRender_ = __webpack_require__("JREk");
var external_wp_serverSideRender_default = /*#__PURE__*/__webpack_require__.n(external_wp_serverSideRender_);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/deprecated.js


// Block Creation Components

/**
 * WordPress dependencies
 */





function deprecateComponent(name, Wrapped, staticsToHoist = []) {
  const Component = Object(external_wp_element_["forwardRef"])((props, ref) => {
    external_wp_deprecated_default()('wp.editor.' + name, {
      since: '5.3',
      alternative: 'wp.blockEditor.' + name
    });
    return Object(external_wp_element_["createElement"])(Wrapped, Object(esm_extends["a" /* default */])({
      ref: ref
    }, props));
  });
  staticsToHoist.forEach(staticName => {
    Component[staticName] = deprecateComponent(name + '.' + staticName, Wrapped[staticName]);
  });
  return Component;
}

function deprecateFunction(name, func) {
  return (...args) => {
    external_wp_deprecated_default()('wp.editor.' + name, {
      since: '5.3',
      alternative: 'wp.blockEditor.' + name
    });
    return func(...args);
  };
}

const RichText = deprecateComponent('RichText', external_wp_blockEditor_["RichText"], ['Content']);
RichText.isEmpty = deprecateFunction('RichText.isEmpty', external_wp_blockEditor_["RichText"].isEmpty);

const Autocomplete = deprecateComponent('Autocomplete', external_wp_blockEditor_["Autocomplete"]);
const AlignmentToolbar = deprecateComponent('AlignmentToolbar', external_wp_blockEditor_["AlignmentToolbar"]);
const BlockAlignmentToolbar = deprecateComponent('BlockAlignmentToolbar', external_wp_blockEditor_["BlockAlignmentToolbar"]);
const BlockControls = deprecateComponent('BlockControls', external_wp_blockEditor_["BlockControls"], ['Slot']);
const deprecated_BlockEdit = deprecateComponent('BlockEdit', external_wp_blockEditor_["BlockEdit"]);
const BlockEditorKeyboardShortcuts = deprecateComponent('BlockEditorKeyboardShortcuts', external_wp_blockEditor_["BlockEditorKeyboardShortcuts"]);
const BlockFormatControls = deprecateComponent('BlockFormatControls', external_wp_blockEditor_["BlockFormatControls"], ['Slot']);
const BlockIcon = deprecateComponent('BlockIcon', external_wp_blockEditor_["BlockIcon"]);
const BlockInspector = deprecateComponent('BlockInspector', external_wp_blockEditor_["BlockInspector"]);
const BlockList = deprecateComponent('BlockList', external_wp_blockEditor_["BlockList"]);
const BlockMover = deprecateComponent('BlockMover', external_wp_blockEditor_["BlockMover"]);
const BlockNavigationDropdown = deprecateComponent('BlockNavigationDropdown', external_wp_blockEditor_["BlockNavigationDropdown"]);
const BlockSelectionClearer = deprecateComponent('BlockSelectionClearer', external_wp_blockEditor_["BlockSelectionClearer"]);
const BlockSettingsMenu = deprecateComponent('BlockSettingsMenu', external_wp_blockEditor_["BlockSettingsMenu"]);
const BlockTitle = deprecateComponent('BlockTitle', external_wp_blockEditor_["BlockTitle"]);
const BlockToolbar = deprecateComponent('BlockToolbar', external_wp_blockEditor_["BlockToolbar"]);
const ColorPalette = deprecateComponent('ColorPalette', external_wp_blockEditor_["ColorPalette"]);
const ContrastChecker = deprecateComponent('ContrastChecker', external_wp_blockEditor_["ContrastChecker"]);
const CopyHandler = deprecateComponent('CopyHandler', external_wp_blockEditor_["CopyHandler"]);
const DefaultBlockAppender = deprecateComponent('DefaultBlockAppender', external_wp_blockEditor_["DefaultBlockAppender"]);
const FontSizePicker = deprecateComponent('FontSizePicker', external_wp_blockEditor_["FontSizePicker"]);
const Inserter = deprecateComponent('Inserter', external_wp_blockEditor_["Inserter"]);
const InnerBlocks = deprecateComponent('InnerBlocks', external_wp_blockEditor_["InnerBlocks"], ['ButtonBlockAppender', 'DefaultBlockAppender', 'Content']);
const InspectorAdvancedControls = deprecateComponent('InspectorAdvancedControls', external_wp_blockEditor_["InspectorAdvancedControls"], ['Slot']);
const InspectorControls = deprecateComponent('InspectorControls', external_wp_blockEditor_["InspectorControls"], ['Slot']);
const PanelColorSettings = deprecateComponent('PanelColorSettings', external_wp_blockEditor_["PanelColorSettings"]);
const PlainText = deprecateComponent('PlainText', external_wp_blockEditor_["PlainText"]);
const RichTextShortcut = deprecateComponent('RichTextShortcut', external_wp_blockEditor_["RichTextShortcut"]);
const RichTextToolbarButton = deprecateComponent('RichTextToolbarButton', external_wp_blockEditor_["RichTextToolbarButton"]);
const __unstableRichTextInputEvent = deprecateComponent('__unstableRichTextInputEvent', external_wp_blockEditor_["__unstableRichTextInputEvent"]);
const MediaPlaceholder = deprecateComponent('MediaPlaceholder', external_wp_blockEditor_["MediaPlaceholder"]);
const MediaUpload = deprecateComponent('MediaUpload', external_wp_blockEditor_["MediaUpload"]);
const MediaUploadCheck = deprecateComponent('MediaUploadCheck', external_wp_blockEditor_["MediaUploadCheck"]);
const MultiSelectScrollIntoView = deprecateComponent('MultiSelectScrollIntoView', external_wp_blockEditor_["MultiSelectScrollIntoView"]);
const NavigableToolbar = deprecateComponent('NavigableToolbar', external_wp_blockEditor_["NavigableToolbar"]);
const ObserveTyping = deprecateComponent('ObserveTyping', external_wp_blockEditor_["ObserveTyping"]);
const PreserveScrollInReorder = deprecateComponent('PreserveScrollInReorder', external_wp_blockEditor_["PreserveScrollInReorder"]);
const SkipToSelectedBlock = deprecateComponent('SkipToSelectedBlock', external_wp_blockEditor_["SkipToSelectedBlock"]);
const URLInput = deprecateComponent('URLInput', external_wp_blockEditor_["URLInput"]);
const URLInputButton = deprecateComponent('URLInputButton', external_wp_blockEditor_["URLInputButton"]);
const URLPopover = deprecateComponent('URLPopover', external_wp_blockEditor_["URLPopover"]);
const Warning = deprecateComponent('Warning', external_wp_blockEditor_["Warning"]);
const WritingFlow = deprecateComponent('WritingFlow', external_wp_blockEditor_["WritingFlow"]);
const createCustomColorsHOC = deprecateFunction('createCustomColorsHOC', external_wp_blockEditor_["createCustomColorsHOC"]);
const getColorClassName = deprecateFunction('getColorClassName', external_wp_blockEditor_["getColorClassName"]);
const getColorObjectByAttributeValues = deprecateFunction('getColorObjectByAttributeValues', external_wp_blockEditor_["getColorObjectByAttributeValues"]);
const getColorObjectByColorValue = deprecateFunction('getColorObjectByColorValue', external_wp_blockEditor_["getColorObjectByColorValue"]);
const getFontSize = deprecateFunction('getFontSize', external_wp_blockEditor_["getFontSize"]);
const getFontSizeClass = deprecateFunction('getFontSizeClass', external_wp_blockEditor_["getFontSizeClass"]);
const withColorContext = deprecateFunction('withColorContext', external_wp_blockEditor_["withColorContext"]);
const withColors = deprecateFunction('withColors', external_wp_blockEditor_["withColors"]);
const withFontSizes = deprecateFunction('withFontSizes', external_wp_blockEditor_["withFontSizes"]);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/index.js
// Block Creation Components
 // Post Related Components


























































 // State Related Components




// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/utils/index.js
/**
 * Internal dependencies
 */




// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/index.js
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */





/*
 * Backward compatibility
 */




/***/ }),

/***/ "RMJe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Tqx9");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const check = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M18.3 5.6L9.9 16.9l-4.6-3.4-.9 1.2 5.8 4.3 9.3-12.6z"
}));
/* harmony default export */ __webpack_exports__["a"] = (check);


/***/ }),

/***/ "Rk8H":
/***/ (function(module, exports, __webpack_require__) {

// Load in dependencies
var computedStyle = __webpack_require__("jTPX");
>>>>>>> master

/**
 * Calculate the `line-height` of a given node
 * @param {HTMLElement} node Element to calculate line height of. Must be in the DOM.
 * @returns {Number} `line-height` of the element in pixels
 */
function lineHeight(node) {
  // Grab the line-height via style
  var lnHeightStr = computedStyle(node, 'line-height');
  var lnHeight = parseFloat(lnHeightStr, 10);

  // If the lineHeight did not contain a unit (i.e. it was numeric), convert it to ems (e.g. '2.3' === '2.3em')
  if (lnHeightStr === lnHeight + '') {
    // Save the old lineHeight style and update the em unit to the element
    var _lnHeightStyle = node.style.lineHeight;
    node.style.lineHeight = lnHeightStr + 'em';

    // Calculate the em based height
    lnHeightStr = computedStyle(node, 'line-height');
    lnHeight = parseFloat(lnHeightStr, 10);

    // Revert the lineHeight style
    if (_lnHeightStyle) {
      node.style.lineHeight = _lnHeightStyle;
    } else {
      delete node.style.lineHeight;
    }
  }

  // If the lineHeight is in `pt`, convert it to pixels (4px for 3pt)
  // DEV: `em` units are converted to `pt` in IE6
  // Conversion ratio from https://developer.mozilla.org/en-US/docs/Web/CSS/length
  if (lnHeightStr.indexOf('pt') !== -1) {
    lnHeight *= 4;
    lnHeight /= 3;
  // Otherwise, if the lineHeight is in `mm`, convert it to pixels (96px for 25.4mm)
  } else if (lnHeightStr.indexOf('mm') !== -1) {
    lnHeight *= 96;
    lnHeight /= 25.4;
  // Otherwise, if the lineHeight is in `cm`, convert it to pixels (96px for 2.54cm)
  } else if (lnHeightStr.indexOf('cm') !== -1) {
    lnHeight *= 96;
    lnHeight /= 2.54;
  // Otherwise, if the lineHeight is in `in`, convert it to pixels (96px for 1in)
  } else if (lnHeightStr.indexOf('in') !== -1) {
    lnHeight *= 96;
  // Otherwise, if the lineHeight is in `pc`, convert it to pixels (12pt for 1pc)
  } else if (lnHeightStr.indexOf('pc') !== -1) {
    lnHeight *= 16;
  }

  // Continue our computation
  lnHeight = Math.round(lnHeight);

  // If the line-height is "normal", calculate by font-size
  if (lnHeightStr === 'normal') {
    // Create a temporary node
    var nodeName = node.nodeName;
    var _node = document.createElement(nodeName);
    _node.innerHTML = '&nbsp;';

    // If we have a text area, reset it to only 1 row
    // https://github.com/twolfson/line-height/issues/4
    if (nodeName.toUpperCase() === 'TEXTAREA') {
      _node.setAttribute('rows', '1');
    }

    // Set the font-size of the element
    var fontSizeStr = computedStyle(node, 'font-size');
    _node.style.fontSize = fontSizeStr;

    // Remove default padding/border which can affect offset height
    // https://github.com/twolfson/line-height/issues/4
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetHeight
    _node.style.padding = '0px';
    _node.style.border = '0px';

    // Append it to the body
    var body = document.body;
    body.appendChild(_node);

    // Assume the line height of the element is the height
    var height = _node.offsetHeight;
    lnHeight = height;

    // Remove our child from the DOM
    body.removeChild(_node);
  }

  // Return the calculated height
  return lnHeight;
}

// Export lineHeight
module.exports = lineHeight;


/***/ }),

<<<<<<< HEAD
/***/ 155:
=======
/***/ "RxS6":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["keycodes"]; }());

/***/ }),

/***/ "TSYQ":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "Tqx9":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["primitives"]; }());

/***/ }),

/***/ "WbBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

(function() { module.exports = window["lodash"]; }());

/***/ }),

/***/ "axFQ":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "bWcr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Tqx9");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const closeSmall = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"
}));
/* harmony default export */ __webpack_exports__["a"] = (closeSmall);


/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

(function() { module.exports = window["React"]; }());

/***/ }),

/***/ "diJD":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["reusableBlocks"]; }());

/***/ }),

/***/ "g56x":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["hooks"]; }());

/***/ }),

/***/ "hF7m":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["keyboardShortcuts"]; }());

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

/***/ "jTPX":
>>>>>>> master
/***/ (function(module, exports) {

// This code has been refactored for 140 bytes
// You can see the original here: https://github.com/twolfson/computedStyle/blob/04cd1da2e30fa45844f95f5cb1ac898e9b9ef050/lib/computedStyle.js
var computedStyle = function (el, prop, getComputedStyle) {
  getComputedStyle = window.getComputedStyle;

  // In one fell swoop
  return (
    // If we have getComputedStyle
    getComputedStyle ?
      // Query it
      // TODO: From CSS-Query notes, we might need (node, null) for FF
      getComputedStyle(el) :

    // Otherwise, we are in IE and use currentStyle
      el.currentStyle
  )[
    // Switch to camelCase for CSSOM
    // DEV: Grabbed from jQuery
    // https://github.com/jquery/jquery/blob/1.9-stable/src/css.js#L191-L194
    // https://github.com/jquery/jquery/blob/1.9-stable/src/core.js#L593-L597
    prop.replace(/-(\w)/gi, function (word, letter) {
      return letter.toUpperCase();
    })
  ];
};

module.exports = computedStyle;


/***/ }),

<<<<<<< HEAD
/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

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

/***/ 182:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["notices"]; }());

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

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * WordPress dependencies
 */


function Icon(_ref) {
  var icon = _ref.icon,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref, ["icon", "size"]);

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["cloneElement"])(icon, _objectSpread({
    width: size,
    height: size
  }, props));
}

/* harmony default export */ __webpack_exports__["a"] = (Icon);


/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var check = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M15.3 5.3l-6.8 6.8-2.8-2.8-1.4 1.4 4.2 4.2 8.2-8.2"
}));
/* harmony default export */ __webpack_exports__["a"] = (check);


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

/***/ 22:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["keycodes"]; }());

/***/ }),

/***/ 23:
/***/ (function(module, exports) {

(function() { module.exports = this["regeneratorRuntime"]; }());

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

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(118)();
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

/***/ 30:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["url"]; }());

/***/ }),

/***/ 32:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["hooks"]; }());

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

/***/ 37:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["deprecated"]; }());

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

/***/ 40:
=======
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

/***/ "pPDe":
>>>>>>> master
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


var LEAF_KEY, hasWeakMap;

/**
 * Arbitrary value used as key for referencing cache object in WeakMap tree.
 *
 * @type {Object}
 */
LEAF_KEY = {};

/**
 * Whether environment supports WeakMap.
 *
 * @type {boolean}
 */
hasWeakMap = typeof WeakMap !== 'undefined';

/**
 * Returns the first argument as the sole entry in an array.
 *
 * @param {*} value Value to return.
 *
 * @return {Array} Value returned as entry in array.
 */
function arrayOf( value ) {
	return [ value ];
}

/**
 * Returns true if the value passed is object-like, or false otherwise. A value
 * is object-like if it can support property assignment, e.g. object or array.
 *
 * @param {*} value Value to test.
 *
 * @return {boolean} Whether value is object-like.
 */
function isObjectLike( value ) {
	return !! value && 'object' === typeof value;
}

/**
 * Creates and returns a new cache object.
 *
 * @return {Object} Cache object.
 */
function createCache() {
	var cache = {
		clear: function() {
			cache.head = null;
		},
	};

	return cache;
}

/**
 * Returns true if entries within the two arrays are strictly equal by
 * reference from a starting index.
 *
 * @param {Array}  a         First array.
 * @param {Array}  b         Second array.
 * @param {number} fromIndex Index from which to start comparison.
 *
 * @return {boolean} Whether arrays are shallowly equal.
 */
function isShallowEqual( a, b, fromIndex ) {
	var i;

	if ( a.length !== b.length ) {
		return false;
	}

	for ( i = fromIndex; i < a.length; i++ ) {
		if ( a[ i ] !== b[ i ] ) {
			return false;
		}
	}

	return true;
}

/**
 * Returns a memoized selector function. The getDependants function argument is
 * called before the memoized selector and is expected to return an immutable
 * reference or array of references on which the selector depends for computing
 * its own return value. The memoize cache is preserved only as long as those
 * dependant references remain the same. If getDependants returns a different
 * reference(s), the cache is cleared and the selector value regenerated.
 *
 * @param {Function} selector      Selector function.
 * @param {Function} getDependants Dependant getter returning an immutable
 *                                 reference or array of reference used in
 *                                 cache bust consideration.
 *
 * @return {Function} Memoized selector.
 */
/* harmony default export */ __webpack_exports__["a"] = (function( selector, getDependants ) {
	var rootCache, getCache;

	// Use object source as dependant if getter not provided
	if ( ! getDependants ) {
		getDependants = arrayOf;
	}

	/**
	 * Returns the root cache. If WeakMap is supported, this is assigned to the
	 * root WeakMap cache set, otherwise it is a shared instance of the default
	 * cache object.
	 *
	 * @return {(WeakMap|Object)} Root cache object.
	 */
	function getRootCache() {
		return rootCache;
	}

	/**
	 * Returns the cache for a given dependants array. When possible, a WeakMap
	 * will be used to create a unique cache for each set of dependants. This
	 * is feasible due to the nature of WeakMap in allowing garbage collection
	 * to occur on entries where the key object is no longer referenced. Since
	 * WeakMap requires the key to be an object, this is only possible when the
	 * dependant is object-like. The root cache is created as a hierarchy where
	 * each top-level key is the first entry in a dependants set, the value a
	 * WeakMap where each key is the next dependant, and so on. This continues
	 * so long as the dependants are object-like. If no dependants are object-
	 * like, then the cache is shared across all invocations.
	 *
	 * @see isObjectLike
	 *
	 * @param {Array} dependants Selector dependants.
	 *
	 * @return {Object} Cache object.
	 */
	function getWeakMapCache( dependants ) {
		var caches = rootCache,
			isUniqueByDependants = true,
			i, dependant, map, cache;

		for ( i = 0; i < dependants.length; i++ ) {
			dependant = dependants[ i ];

			// Can only compose WeakMap from object-like key.
			if ( ! isObjectLike( dependant ) ) {
				isUniqueByDependants = false;
				break;
			}

			// Does current segment of cache already have a WeakMap?
			if ( caches.has( dependant ) ) {
				// Traverse into nested WeakMap.
				caches = caches.get( dependant );
			} else {
				// Create, set, and traverse into a new one.
				map = new WeakMap();
				caches.set( dependant, map );
				caches = map;
			}
		}

		// We use an arbitrary (but consistent) object as key for the last item
		// in the WeakMap to serve as our running cache.
		if ( ! caches.has( LEAF_KEY ) ) {
			cache = createCache();
			cache.isUniqueByDependants = isUniqueByDependants;
			caches.set( LEAF_KEY, cache );
		}

		return caches.get( LEAF_KEY );
	}

	// Assign cache handler by availability of WeakMap
	getCache = hasWeakMap ? getWeakMapCache : getRootCache;

	/**
	 * Resets root memoization cache.
	 */
	function clear() {
		rootCache = hasWeakMap ? new WeakMap() : createCache();
	}

	// eslint-disable-next-line jsdoc/check-param-names
	/**
	 * The augmented selector call, considering first whether dependants have
	 * changed before passing it to underlying memoize function.
	 *
	 * @param {Object} source    Source object for derivation.
	 * @param {...*}   extraArgs Additional arguments to pass to selector.
	 *
	 * @return {*} Selector result.
	 */
	function callSelector( /* source, ...extraArgs */ ) {
		var len = arguments.length,
			cache, node, i, args, dependants;

		// Create copy of arguments (avoid leaking deoptimization).
		args = new Array( len );
		for ( i = 0; i < len; i++ ) {
			args[ i ] = arguments[ i ];
		}

		dependants = getDependants.apply( null, args );
		cache = getCache( dependants );

		// If not guaranteed uniqueness by dependants (primitive type or lack
		// of WeakMap support), shallow compare against last dependants and, if
		// references have changed, destroy cache to recalculate result.
		if ( ! cache.isUniqueByDependants ) {
			if ( cache.lastDependants && ! isShallowEqual( dependants, cache.lastDependants, 0 ) ) {
				cache.clear();
			}

			cache.lastDependants = dependants;
		}

		node = cache.head;
		while ( node ) {
			// Check whether node arguments match arguments
			if ( ! isShallowEqual( node.args, args, 1 ) ) {
				node = node.next;
				continue;
			}

			// At this point we can assume we've found a match

			// Surface matched node to head if not already
			if ( node !== cache.head ) {
				// Adjust siblings to point to each other.
				node.prev.next = node.next;
				if ( node.next ) {
					node.next.prev = node.prev;
				}

				node.next = cache.head;
				node.prev = null;
				cache.head.prev = node;
				cache.head = node;
			}

			// Return immediately
			return node.val;
		}

		// No cached value found. Continue to insertion phase:

		node = {
			// Generate the result from original function
			val: selector.apply( null, args ),
		};

		// Avoid including the source object in the cache.
		args[ 0 ] = null;
		node.args = args;

		// Don't need to check whether node is already head, since it would
		// have been returned above already if it was

		// Shift existing head down list
		if ( cache.head ) {
			cache.head.prev = node;
			node.next = cache.head;
		}

		cache.head = node;

		return node.val;
	}

	callSelector.getDependants = getDependants;
	callSelector.clear = clear;
	clear();

	return callSelector;
});


/***/ }),

<<<<<<< HEAD
/***/ 405:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var BEGIN = 'BEGIN';
var COMMIT = 'COMMIT';
var REVERT = 'REVERT';
// Array({transactionID: string or null, beforeState: {object}, action: {object}}
var INITIAL_OPTIMIST = [];

module.exports = optimist;
module.exports.BEGIN = BEGIN;
module.exports.COMMIT = COMMIT;
module.exports.REVERT = REVERT;
function optimist(fn) {
  function beginReducer(state, action) {
    var _separateState = separateState(state);

    var optimist = _separateState.optimist;
    var innerState = _separateState.innerState;

    optimist = optimist.concat([{ beforeState: innerState, action: action }]);
    innerState = fn(innerState, action);
    validateState(innerState, action);
    return _extends({ optimist: optimist }, innerState);
  }
  function commitReducer(state, action) {
    var _separateState2 = separateState(state);

    var optimist = _separateState2.optimist;
    var innerState = _separateState2.innerState;

    var newOptimist = [],
        started = false,
        committed = false;
    optimist.forEach(function (entry) {
      if (started) {
        if (entry.beforeState && matchesTransaction(entry.action, action.optimist.id)) {
          committed = true;
          newOptimist.push({ action: entry.action });
        } else {
          newOptimist.push(entry);
        }
      } else if (entry.beforeState && !matchesTransaction(entry.action, action.optimist.id)) {
        started = true;
        newOptimist.push(entry);
      } else if (entry.beforeState && matchesTransaction(entry.action, action.optimist.id)) {
        committed = true;
      }
    });
    if (!committed) {
      console.error('Cannot commit transaction with id "' + action.optimist.id + '" because it does not exist');
    }
    optimist = newOptimist;
    return baseReducer(optimist, innerState, action);
  }
  function revertReducer(state, action) {
    var _separateState3 = separateState(state);

    var optimist = _separateState3.optimist;
    var innerState = _separateState3.innerState;

    var newOptimist = [],
        started = false,
        gotInitialState = false,
        currentState = innerState;
    optimist.forEach(function (entry) {
      if (entry.beforeState && matchesTransaction(entry.action, action.optimist.id)) {
        currentState = entry.beforeState;
        gotInitialState = true;
      }
      if (!matchesTransaction(entry.action, action.optimist.id)) {
        if (entry.beforeState) {
          started = true;
        }
        if (started) {
          if (gotInitialState && entry.beforeState) {
            newOptimist.push({
              beforeState: currentState,
              action: entry.action
            });
          } else {
            newOptimist.push(entry);
          }
        }
        if (gotInitialState) {
          currentState = fn(currentState, entry.action);
          validateState(innerState, action);
        }
      }
    });
    if (!gotInitialState) {
      console.error('Cannot revert transaction with id "' + action.optimist.id + '" because it does not exist');
    }
    optimist = newOptimist;
    return baseReducer(optimist, currentState, action);
  }
  function baseReducer(optimist, innerState, action) {
    if (optimist.length) {
      optimist = optimist.concat([{ action: action }]);
    }
    innerState = fn(innerState, action);
    validateState(innerState, action);
    return _extends({ optimist: optimist }, innerState);
  }
  return function (state, action) {
    if (action.optimist) {
      switch (action.optimist.type) {
        case BEGIN:
          return beginReducer(state, action);
        case COMMIT:
          return commitReducer(state, action);
        case REVERT:
          return revertReducer(state, action);
      }
    }

    var _separateState4 = separateState(state);

    var optimist = _separateState4.optimist;
    var innerState = _separateState4.innerState;

    if (state && !optimist.length) {
      var nextState = fn(innerState, action);
      if (nextState === innerState) {
        return state;
      }
      validateState(nextState, action);
      return _extends({ optimist: optimist }, nextState);
    }
    return baseReducer(optimist, innerState, action);
  };
}

function matchesTransaction(action, id) {
  return action.optimist && action.optimist.id === id;
}

function validateState(newState, action) {
  if (!newState || typeof newState !== 'object' || Array.isArray(newState)) {
    throw new TypeError('Error while handling "' + action.type + '": Optimist requires that state is always a plain object.');
  }
}

function separateState(state) {
  if (!state) {
    return { optimist: INITIAL_OPTIMIST, innerState: state };
  } else {
    var _state$optimist = state.optimist;

    var _optimist = _state$optimist === undefined ? INITIAL_OPTIMIST : _state$optimist;

    var innerState = _objectWithoutProperties(state, ['optimist']);

    return { optimist: _optimist, innerState: innerState };
  }
}

/***/ }),

/***/ 42:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["apiFetch"]; }());

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, "setupEditor", function() { return setupEditor; });
__webpack_require__.d(actions_namespaceObject, "__experimentalTearDownEditor", function() { return __experimentalTearDownEditor; });
__webpack_require__.d(actions_namespaceObject, "resetPost", function() { return resetPost; });
__webpack_require__.d(actions_namespaceObject, "resetAutosave", function() { return resetAutosave; });
__webpack_require__.d(actions_namespaceObject, "__experimentalRequestPostUpdateStart", function() { return __experimentalRequestPostUpdateStart; });
__webpack_require__.d(actions_namespaceObject, "__experimentalRequestPostUpdateFinish", function() { return __experimentalRequestPostUpdateFinish; });
__webpack_require__.d(actions_namespaceObject, "updatePost", function() { return updatePost; });
__webpack_require__.d(actions_namespaceObject, "setupEditorState", function() { return setupEditorState; });
__webpack_require__.d(actions_namespaceObject, "editPost", function() { return actions_editPost; });
__webpack_require__.d(actions_namespaceObject, "__experimentalOptimisticUpdatePost", function() { return __experimentalOptimisticUpdatePost; });
__webpack_require__.d(actions_namespaceObject, "savePost", function() { return actions_savePost; });
__webpack_require__.d(actions_namespaceObject, "refreshPost", function() { return refreshPost; });
__webpack_require__.d(actions_namespaceObject, "trashPost", function() { return trashPost; });
__webpack_require__.d(actions_namespaceObject, "autosave", function() { return actions_autosave; });
__webpack_require__.d(actions_namespaceObject, "__experimentalLocalAutosave", function() { return actions_experimentalLocalAutosave; });
__webpack_require__.d(actions_namespaceObject, "redo", function() { return actions_redo; });
__webpack_require__.d(actions_namespaceObject, "undo", function() { return actions_undo; });
__webpack_require__.d(actions_namespaceObject, "createUndoLevel", function() { return createUndoLevel; });
__webpack_require__.d(actions_namespaceObject, "updatePostLock", function() { return updatePostLock; });
__webpack_require__.d(actions_namespaceObject, "__experimentalFetchReusableBlocks", function() { return actions_experimentalFetchReusableBlocks; });
__webpack_require__.d(actions_namespaceObject, "__experimentalReceiveReusableBlocks", function() { return __experimentalReceiveReusableBlocks; });
__webpack_require__.d(actions_namespaceObject, "__experimentalSaveReusableBlock", function() { return __experimentalSaveReusableBlock; });
__webpack_require__.d(actions_namespaceObject, "__experimentalDeleteReusableBlock", function() { return __experimentalDeleteReusableBlock; });
__webpack_require__.d(actions_namespaceObject, "__experimentalUpdateReusableBlock", function() { return __experimentalUpdateReusableBlock; });
__webpack_require__.d(actions_namespaceObject, "__experimentalConvertBlockToStatic", function() { return __experimentalConvertBlockToStatic; });
__webpack_require__.d(actions_namespaceObject, "__experimentalConvertBlockToReusable", function() { return __experimentalConvertBlockToReusable; });
__webpack_require__.d(actions_namespaceObject, "enablePublishSidebar", function() { return enablePublishSidebar; });
__webpack_require__.d(actions_namespaceObject, "disablePublishSidebar", function() { return disablePublishSidebar; });
__webpack_require__.d(actions_namespaceObject, "lockPostSaving", function() { return lockPostSaving; });
__webpack_require__.d(actions_namespaceObject, "unlockPostSaving", function() { return unlockPostSaving; });
__webpack_require__.d(actions_namespaceObject, "lockPostAutosaving", function() { return lockPostAutosaving; });
__webpack_require__.d(actions_namespaceObject, "unlockPostAutosaving", function() { return unlockPostAutosaving; });
__webpack_require__.d(actions_namespaceObject, "resetEditorBlocks", function() { return actions_resetEditorBlocks; });
__webpack_require__.d(actions_namespaceObject, "updateEditorSettings", function() { return updateEditorSettings; });
__webpack_require__.d(actions_namespaceObject, "resetBlocks", function() { return resetBlocks; });
__webpack_require__.d(actions_namespaceObject, "receiveBlocks", function() { return receiveBlocks; });
__webpack_require__.d(actions_namespaceObject, "updateBlock", function() { return updateBlock; });
__webpack_require__.d(actions_namespaceObject, "updateBlockAttributes", function() { return updateBlockAttributes; });
__webpack_require__.d(actions_namespaceObject, "selectBlock", function() { return selectBlock; });
__webpack_require__.d(actions_namespaceObject, "startMultiSelect", function() { return startMultiSelect; });
__webpack_require__.d(actions_namespaceObject, "stopMultiSelect", function() { return stopMultiSelect; });
__webpack_require__.d(actions_namespaceObject, "multiSelect", function() { return multiSelect; });
__webpack_require__.d(actions_namespaceObject, "clearSelectedBlock", function() { return clearSelectedBlock; });
__webpack_require__.d(actions_namespaceObject, "toggleSelection", function() { return toggleSelection; });
__webpack_require__.d(actions_namespaceObject, "replaceBlocks", function() { return actions_replaceBlocks; });
__webpack_require__.d(actions_namespaceObject, "replaceBlock", function() { return replaceBlock; });
__webpack_require__.d(actions_namespaceObject, "moveBlocksDown", function() { return moveBlocksDown; });
__webpack_require__.d(actions_namespaceObject, "moveBlocksUp", function() { return moveBlocksUp; });
__webpack_require__.d(actions_namespaceObject, "moveBlockToPosition", function() { return moveBlockToPosition; });
__webpack_require__.d(actions_namespaceObject, "insertBlock", function() { return insertBlock; });
__webpack_require__.d(actions_namespaceObject, "insertBlocks", function() { return insertBlocks; });
__webpack_require__.d(actions_namespaceObject, "showInsertionPoint", function() { return showInsertionPoint; });
__webpack_require__.d(actions_namespaceObject, "hideInsertionPoint", function() { return hideInsertionPoint; });
__webpack_require__.d(actions_namespaceObject, "setTemplateValidity", function() { return setTemplateValidity; });
__webpack_require__.d(actions_namespaceObject, "synchronizeTemplate", function() { return synchronizeTemplate; });
__webpack_require__.d(actions_namespaceObject, "mergeBlocks", function() { return mergeBlocks; });
__webpack_require__.d(actions_namespaceObject, "removeBlocks", function() { return removeBlocks; });
__webpack_require__.d(actions_namespaceObject, "removeBlock", function() { return removeBlock; });
__webpack_require__.d(actions_namespaceObject, "toggleBlockMode", function() { return toggleBlockMode; });
__webpack_require__.d(actions_namespaceObject, "startTyping", function() { return startTyping; });
__webpack_require__.d(actions_namespaceObject, "stopTyping", function() { return stopTyping; });
__webpack_require__.d(actions_namespaceObject, "enterFormattedText", function() { return enterFormattedText; });
__webpack_require__.d(actions_namespaceObject, "exitFormattedText", function() { return exitFormattedText; });
__webpack_require__.d(actions_namespaceObject, "insertDefaultBlock", function() { return insertDefaultBlock; });
__webpack_require__.d(actions_namespaceObject, "updateBlockListSettings", function() { return updateBlockListSettings; });
var selectors_namespaceObject = {};
__webpack_require__.r(selectors_namespaceObject);
__webpack_require__.d(selectors_namespaceObject, "hasEditorUndo", function() { return hasEditorUndo; });
__webpack_require__.d(selectors_namespaceObject, "hasEditorRedo", function() { return hasEditorRedo; });
__webpack_require__.d(selectors_namespaceObject, "isEditedPostNew", function() { return selectors_isEditedPostNew; });
__webpack_require__.d(selectors_namespaceObject, "hasChangedContent", function() { return hasChangedContent; });
__webpack_require__.d(selectors_namespaceObject, "isEditedPostDirty", function() { return selectors_isEditedPostDirty; });
__webpack_require__.d(selectors_namespaceObject, "hasNonPostEntityChanges", function() { return selectors_hasNonPostEntityChanges; });
__webpack_require__.d(selectors_namespaceObject, "isCleanNewPost", function() { return selectors_isCleanNewPost; });
__webpack_require__.d(selectors_namespaceObject, "getCurrentPost", function() { return selectors_getCurrentPost; });
__webpack_require__.d(selectors_namespaceObject, "getCurrentPostType", function() { return selectors_getCurrentPostType; });
__webpack_require__.d(selectors_namespaceObject, "getCurrentPostId", function() { return selectors_getCurrentPostId; });
__webpack_require__.d(selectors_namespaceObject, "getCurrentPostRevisionsCount", function() { return getCurrentPostRevisionsCount; });
__webpack_require__.d(selectors_namespaceObject, "getCurrentPostLastRevisionId", function() { return getCurrentPostLastRevisionId; });
__webpack_require__.d(selectors_namespaceObject, "getPostEdits", function() { return getPostEdits; });
__webpack_require__.d(selectors_namespaceObject, "getReferenceByDistinctEdits", function() { return getReferenceByDistinctEdits; });
__webpack_require__.d(selectors_namespaceObject, "getCurrentPostAttribute", function() { return selectors_getCurrentPostAttribute; });
__webpack_require__.d(selectors_namespaceObject, "getEditedPostAttribute", function() { return selectors_getEditedPostAttribute; });
__webpack_require__.d(selectors_namespaceObject, "getAutosaveAttribute", function() { return getAutosaveAttribute; });
__webpack_require__.d(selectors_namespaceObject, "getEditedPostVisibility", function() { return selectors_getEditedPostVisibility; });
__webpack_require__.d(selectors_namespaceObject, "isCurrentPostPending", function() { return isCurrentPostPending; });
__webpack_require__.d(selectors_namespaceObject, "isCurrentPostPublished", function() { return selectors_isCurrentPostPublished; });
__webpack_require__.d(selectors_namespaceObject, "isCurrentPostScheduled", function() { return selectors_isCurrentPostScheduled; });
__webpack_require__.d(selectors_namespaceObject, "isEditedPostPublishable", function() { return selectors_isEditedPostPublishable; });
__webpack_require__.d(selectors_namespaceObject, "isEditedPostSaveable", function() { return selectors_isEditedPostSaveable; });
__webpack_require__.d(selectors_namespaceObject, "isEditedPostEmpty", function() { return isEditedPostEmpty; });
__webpack_require__.d(selectors_namespaceObject, "isEditedPostAutosaveable", function() { return selectors_isEditedPostAutosaveable; });
__webpack_require__.d(selectors_namespaceObject, "getAutosave", function() { return getAutosave; });
__webpack_require__.d(selectors_namespaceObject, "hasAutosave", function() { return hasAutosave; });
__webpack_require__.d(selectors_namespaceObject, "isEditedPostBeingScheduled", function() { return selectors_isEditedPostBeingScheduled; });
__webpack_require__.d(selectors_namespaceObject, "isEditedPostDateFloating", function() { return isEditedPostDateFloating; });
__webpack_require__.d(selectors_namespaceObject, "isSavingPost", function() { return selectors_isSavingPost; });
__webpack_require__.d(selectors_namespaceObject, "didPostSaveRequestSucceed", function() { return didPostSaveRequestSucceed; });
__webpack_require__.d(selectors_namespaceObject, "didPostSaveRequestFail", function() { return didPostSaveRequestFail; });
__webpack_require__.d(selectors_namespaceObject, "isAutosavingPost", function() { return selectors_isAutosavingPost; });
__webpack_require__.d(selectors_namespaceObject, "isPreviewingPost", function() { return isPreviewingPost; });
__webpack_require__.d(selectors_namespaceObject, "getEditedPostPreviewLink", function() { return selectors_getEditedPostPreviewLink; });
__webpack_require__.d(selectors_namespaceObject, "getSuggestedPostFormat", function() { return selectors_getSuggestedPostFormat; });
__webpack_require__.d(selectors_namespaceObject, "getBlocksForSerialization", function() { return getBlocksForSerialization; });
__webpack_require__.d(selectors_namespaceObject, "getEditedPostContent", function() { return getEditedPostContent; });
__webpack_require__.d(selectors_namespaceObject, "__experimentalGetReusableBlock", function() { return __experimentalGetReusableBlock; });
__webpack_require__.d(selectors_namespaceObject, "__experimentalIsSavingReusableBlock", function() { return __experimentalIsSavingReusableBlock; });
__webpack_require__.d(selectors_namespaceObject, "__experimentalIsFetchingReusableBlock", function() { return __experimentalIsFetchingReusableBlock; });
__webpack_require__.d(selectors_namespaceObject, "__experimentalGetReusableBlocks", function() { return selectors_experimentalGetReusableBlocks; });
__webpack_require__.d(selectors_namespaceObject, "getStateBeforeOptimisticTransaction", function() { return getStateBeforeOptimisticTransaction; });
__webpack_require__.d(selectors_namespaceObject, "isPublishingPost", function() { return selectors_isPublishingPost; });
__webpack_require__.d(selectors_namespaceObject, "isPermalinkEditable", function() { return selectors_isPermalinkEditable; });
__webpack_require__.d(selectors_namespaceObject, "getPermalink", function() { return getPermalink; });
__webpack_require__.d(selectors_namespaceObject, "getPermalinkParts", function() { return selectors_getPermalinkParts; });
__webpack_require__.d(selectors_namespaceObject, "inSomeHistory", function() { return inSomeHistory; });
__webpack_require__.d(selectors_namespaceObject, "isPostLocked", function() { return isPostLocked; });
__webpack_require__.d(selectors_namespaceObject, "isPostSavingLocked", function() { return selectors_isPostSavingLocked; });
__webpack_require__.d(selectors_namespaceObject, "isPostAutosavingLocked", function() { return isPostAutosavingLocked; });
__webpack_require__.d(selectors_namespaceObject, "isPostLockTakeover", function() { return isPostLockTakeover; });
__webpack_require__.d(selectors_namespaceObject, "getPostLockUser", function() { return getPostLockUser; });
__webpack_require__.d(selectors_namespaceObject, "getActivePostLock", function() { return getActivePostLock; });
__webpack_require__.d(selectors_namespaceObject, "canUserUseUnfilteredHTML", function() { return selectors_canUserUseUnfilteredHTML; });
__webpack_require__.d(selectors_namespaceObject, "isPublishSidebarEnabled", function() { return selectors_isPublishSidebarEnabled; });
__webpack_require__.d(selectors_namespaceObject, "getEditorBlocks", function() { return selectors_getEditorBlocks; });
__webpack_require__.d(selectors_namespaceObject, "getEditorSelectionStart", function() { return selectors_getEditorSelectionStart; });
__webpack_require__.d(selectors_namespaceObject, "getEditorSelectionEnd", function() { return selectors_getEditorSelectionEnd; });
__webpack_require__.d(selectors_namespaceObject, "__unstableIsEditorReady", function() { return __unstableIsEditorReady; });
__webpack_require__.d(selectors_namespaceObject, "getEditorSettings", function() { return selectors_getEditorSettings; });
__webpack_require__.d(selectors_namespaceObject, "getBlockName", function() { return selectors_getBlockName; });
__webpack_require__.d(selectors_namespaceObject, "isBlockValid", function() { return isBlockValid; });
__webpack_require__.d(selectors_namespaceObject, "getBlockAttributes", function() { return getBlockAttributes; });
__webpack_require__.d(selectors_namespaceObject, "getBlock", function() { return selectors_getBlock; });
__webpack_require__.d(selectors_namespaceObject, "getBlocks", function() { return selectors_getBlocks; });
__webpack_require__.d(selectors_namespaceObject, "__unstableGetBlockWithoutInnerBlocks", function() { return __unstableGetBlockWithoutInnerBlocks; });
__webpack_require__.d(selectors_namespaceObject, "getClientIdsOfDescendants", function() { return getClientIdsOfDescendants; });
__webpack_require__.d(selectors_namespaceObject, "getClientIdsWithDescendants", function() { return getClientIdsWithDescendants; });
__webpack_require__.d(selectors_namespaceObject, "getGlobalBlockCount", function() { return getGlobalBlockCount; });
__webpack_require__.d(selectors_namespaceObject, "getBlocksByClientId", function() { return selectors_getBlocksByClientId; });
__webpack_require__.d(selectors_namespaceObject, "getBlockCount", function() { return getBlockCount; });
__webpack_require__.d(selectors_namespaceObject, "getBlockSelectionStart", function() { return getBlockSelectionStart; });
__webpack_require__.d(selectors_namespaceObject, "getBlockSelectionEnd", function() { return getBlockSelectionEnd; });
__webpack_require__.d(selectors_namespaceObject, "getSelectedBlockCount", function() { return getSelectedBlockCount; });
__webpack_require__.d(selectors_namespaceObject, "hasSelectedBlock", function() { return hasSelectedBlock; });
__webpack_require__.d(selectors_namespaceObject, "getSelectedBlockClientId", function() { return selectors_getSelectedBlockClientId; });
__webpack_require__.d(selectors_namespaceObject, "getSelectedBlock", function() { return getSelectedBlock; });
__webpack_require__.d(selectors_namespaceObject, "getBlockRootClientId", function() { return getBlockRootClientId; });
__webpack_require__.d(selectors_namespaceObject, "getBlockHierarchyRootClientId", function() { return getBlockHierarchyRootClientId; });
__webpack_require__.d(selectors_namespaceObject, "getAdjacentBlockClientId", function() { return getAdjacentBlockClientId; });
__webpack_require__.d(selectors_namespaceObject, "getPreviousBlockClientId", function() { return getPreviousBlockClientId; });
__webpack_require__.d(selectors_namespaceObject, "getNextBlockClientId", function() { return getNextBlockClientId; });
__webpack_require__.d(selectors_namespaceObject, "getSelectedBlocksInitialCaretPosition", function() { return getSelectedBlocksInitialCaretPosition; });
__webpack_require__.d(selectors_namespaceObject, "getMultiSelectedBlockClientIds", function() { return getMultiSelectedBlockClientIds; });
__webpack_require__.d(selectors_namespaceObject, "getMultiSelectedBlocks", function() { return getMultiSelectedBlocks; });
__webpack_require__.d(selectors_namespaceObject, "getFirstMultiSelectedBlockClientId", function() { return getFirstMultiSelectedBlockClientId; });
__webpack_require__.d(selectors_namespaceObject, "getLastMultiSelectedBlockClientId", function() { return getLastMultiSelectedBlockClientId; });
__webpack_require__.d(selectors_namespaceObject, "isFirstMultiSelectedBlock", function() { return isFirstMultiSelectedBlock; });
__webpack_require__.d(selectors_namespaceObject, "isBlockMultiSelected", function() { return isBlockMultiSelected; });
__webpack_require__.d(selectors_namespaceObject, "isAncestorMultiSelected", function() { return isAncestorMultiSelected; });
__webpack_require__.d(selectors_namespaceObject, "getMultiSelectedBlocksStartClientId", function() { return getMultiSelectedBlocksStartClientId; });
__webpack_require__.d(selectors_namespaceObject, "getMultiSelectedBlocksEndClientId", function() { return getMultiSelectedBlocksEndClientId; });
__webpack_require__.d(selectors_namespaceObject, "getBlockOrder", function() { return getBlockOrder; });
__webpack_require__.d(selectors_namespaceObject, "getBlockIndex", function() { return getBlockIndex; });
__webpack_require__.d(selectors_namespaceObject, "isBlockSelected", function() { return isBlockSelected; });
__webpack_require__.d(selectors_namespaceObject, "hasSelectedInnerBlock", function() { return hasSelectedInnerBlock; });
__webpack_require__.d(selectors_namespaceObject, "isBlockWithinSelection", function() { return isBlockWithinSelection; });
__webpack_require__.d(selectors_namespaceObject, "hasMultiSelection", function() { return hasMultiSelection; });
__webpack_require__.d(selectors_namespaceObject, "isMultiSelecting", function() { return isMultiSelecting; });
__webpack_require__.d(selectors_namespaceObject, "isSelectionEnabled", function() { return isSelectionEnabled; });
__webpack_require__.d(selectors_namespaceObject, "getBlockMode", function() { return getBlockMode; });
__webpack_require__.d(selectors_namespaceObject, "isTyping", function() { return isTyping; });
__webpack_require__.d(selectors_namespaceObject, "isCaretWithinFormattedText", function() { return isCaretWithinFormattedText; });
__webpack_require__.d(selectors_namespaceObject, "getBlockInsertionPoint", function() { return getBlockInsertionPoint; });
__webpack_require__.d(selectors_namespaceObject, "isBlockInsertionPointVisible", function() { return isBlockInsertionPointVisible; });
__webpack_require__.d(selectors_namespaceObject, "isValidTemplate", function() { return isValidTemplate; });
__webpack_require__.d(selectors_namespaceObject, "getTemplate", function() { return getTemplate; });
__webpack_require__.d(selectors_namespaceObject, "getTemplateLock", function() { return getTemplateLock; });
__webpack_require__.d(selectors_namespaceObject, "canInsertBlockType", function() { return selectors_canInsertBlockType; });
__webpack_require__.d(selectors_namespaceObject, "getInserterItems", function() { return selectors_getInserterItems; });
__webpack_require__.d(selectors_namespaceObject, "hasInserterItems", function() { return hasInserterItems; });
__webpack_require__.d(selectors_namespaceObject, "getBlockListSettings", function() { return getBlockListSettings; });

// EXTERNAL MODULE: external {"this":["wp","blockEditor"]}
var external_this_wp_blockEditor_ = __webpack_require__(6);

// EXTERNAL MODULE: external {"this":["wp","blocks"]}
var external_this_wp_blocks_ = __webpack_require__(10);

// EXTERNAL MODULE: external {"this":["wp","coreData"]}
var external_this_wp_coreData_ = __webpack_require__(75);

// EXTERNAL MODULE: external {"this":["wp","keyboardShortcuts"]}
var external_this_wp_keyboardShortcuts_ = __webpack_require__(48);

// EXTERNAL MODULE: external {"this":["wp","notices"]}
var external_this_wp_notices_ = __webpack_require__(182);

// EXTERNAL MODULE: external {"this":["wp","richText"]}
var external_this_wp_richText_ = __webpack_require__(24);

// EXTERNAL MODULE: external {"this":["wp","viewport"]}
var external_this_wp_viewport_ = __webpack_require__(56);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(5);

// EXTERNAL MODULE: external {"this":["wp","data"]}
var external_this_wp_data_ = __webpack_require__(4);

// EXTERNAL MODULE: external {"this":["wp","dataControls"]}
var external_this_wp_dataControls_ = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/redux-optimist/index.js
var redux_optimist = __webpack_require__(115);
var redux_optimist_default = /*#__PURE__*/__webpack_require__.n(redux_optimist);

// EXTERNAL MODULE: external {"this":"lodash"}
var external_this_lodash_ = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/store/defaults.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * WordPress dependencies
 */

var PREFERENCES_DEFAULTS = {
  insertUsage: {},
  // Should be kept for backward compatibility, see: https://github.com/WordPress/gutenberg/issues/14580.
  isPublishSidebarEnabled: true
};
/**
 * The default post editor settings
 *
 *  allowedBlockTypes  boolean|Array Allowed block types
 *  richEditingEnabled boolean       Whether rich editing is enabled or not
 *  codeEditingEnabled boolean       Whether code editing is enabled or not
 *  enableCustomFields boolean       Whether the WordPress custom fields are enabled or not
 *  autosaveInterval   number        Autosave Interval
 *  availableTemplates array?        The available post templates
 *  disablePostFormats boolean       Whether or not the post formats are disabled
 *  allowedMimeTypes   array?        List of allowed mime types and file extensions
 *  maxUploadFileSize  number        Maximum upload file size
 */

var EDITOR_SETTINGS_DEFAULTS = _objectSpread({}, external_this_wp_blockEditor_["SETTINGS_DEFAULTS"], {
  richEditingEnabled: true,
  codeEditingEnabled: true,
  enableCustomFields: false
});

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/store/reducer.js



function reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { reducer_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */
=======
/***/ "qRz9":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["richText"]; }());

/***/ }),

/***/ "rmEH":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["htmlEntities"]; }());

/***/ }),

/***/ "tI+e":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "w95h":
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

/**
 * Internal dependencies
 */


/**
 * Returns a post attribute value, flattening nested rendered content using its
 * raw value in place of its original object form.
 *
 * @param {*} value Original value.
 *
 * @return {*} Raw value.
 */

function getPostRawValue(value) {
  if (value && 'object' === Object(esm_typeof["a" /* default */])(value) && 'raw' in value) {
    return value.raw;
  }

  return value;
}
/**
 * Returns true if the two object arguments have the same keys, or false
 * otherwise.
 *
 * @param {Object} a First object.
 * @param {Object} b Second object.
 *
 * @return {boolean} Whether the two objects have the same keys.
 */

function hasSameKeys(a, b) {
  return Object(external_this_lodash_["isEqual"])(Object(external_this_lodash_["keys"])(a), Object(external_this_lodash_["keys"])(b));
}
/**
 * Returns true if, given the currently dispatching action and the previously
 * dispatched action, the two actions are editing the same post property, or
 * false otherwise.
 *
 * @param {Object} action         Currently dispatching action.
 * @param {Object} previousAction Previously dispatched action.
 *
 * @return {boolean} Whether actions are updating the same post property.
 */

function isUpdatingSamePostProperty(action, previousAction) {
  return action.type === 'EDIT_POST' && hasSameKeys(action.edits, previousAction.edits);
}
/**
 * Returns true if, given the currently dispatching action and the previously
 * dispatched action, the two actions are modifying the same property such that
 * undo history should be batched.
 *
 * @param {Object} action         Currently dispatching action.
 * @param {Object} previousAction Previously dispatched action.
 *
 * @return {boolean} Whether to overwrite present state.
 */

function shouldOverwriteState(action, previousAction) {
  if (action.type === 'RESET_EDITOR_BLOCKS') {
    return !action.shouldCreateUndoLevel;
  }

  if (!previousAction || action.type !== previousAction.type) {
    return false;
  }

  return isUpdatingSamePostProperty(action, previousAction);
}
function reducer_postId() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SETUP_EDITOR_STATE':
    case 'RESET_POST':
    case 'UPDATE_POST':
      return action.post.id;
  }

  return state;
}
function reducer_postType() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SETUP_EDITOR_STATE':
    case 'RESET_POST':
    case 'UPDATE_POST':
      return action.post.type;
  }

  return state;
}
/**
 * Reducer returning whether the post blocks match the defined template or not.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {boolean} Updated state.
 */

function reducer_template() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    isValid: true
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SET_TEMPLATE_VALIDITY':
      return reducer_objectSpread({}, state, {
        isValid: action.isValid
      });
  }

  return state;
}
/**
 * Reducer returning the user preferences.
 *
 * @param {Object}  state                 Current state.
 * @param {Object}  action                Dispatched action.
 *
 * @return {string} Updated state.
 */

function preferences() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : PREFERENCES_DEFAULTS;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'ENABLE_PUBLISH_SIDEBAR':
      return reducer_objectSpread({}, state, {
        isPublishSidebarEnabled: true
      });

    case 'DISABLE_PUBLISH_SIDEBAR':
      return reducer_objectSpread({}, state, {
        isPublishSidebarEnabled: false
      });
  }

  return state;
}
/**
 * Reducer returning current network request state (whether a request to
 * the WP REST API is in progress, successful, or failed).
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function saving() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'REQUEST_POST_UPDATE_START':
    case 'REQUEST_POST_UPDATE_FINISH':
      return {
        pending: action.type === 'REQUEST_POST_UPDATE_START',
        options: action.options || {}
      };
  }

  return state;
}
/**
 * Post Lock State.
 *
 * @typedef {Object} PostLockState
 *
 * @property {boolean} isLocked       Whether the post is locked.
 * @property {?boolean} isTakeover     Whether the post editing has been taken over.
 * @property {?boolean} activePostLock Active post lock value.
 * @property {?Object}  user           User that took over the post.
 */

/**
 * Reducer returning the post lock status.
 *
 * @param {PostLockState} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {PostLockState} Updated state.
 */

function postLock() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    isLocked: false
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'UPDATE_POST_LOCK':
      return action.lock;
  }

  return state;
}
/**
 * Post saving lock.
 *
 * When post saving is locked, the post cannot be published or updated.
 *
 * @param {PostLockState} state  Current state.
 * @param {Object}        action Dispatched action.
 *
 * @return {PostLockState} Updated state.
 */

function postSavingLock() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'LOCK_POST_SAVING':
      return reducer_objectSpread({}, state, Object(defineProperty["a" /* default */])({}, action.lockName, true));

    case 'UNLOCK_POST_SAVING':
      return Object(external_this_lodash_["omit"])(state, action.lockName);
  }

  return state;
}
/**
 * Post autosaving lock.
 *
 * When post autosaving is locked, the post will not autosave.
 *
 * @param {PostLockState} state  Current state.
 * @param {Object}        action Dispatched action.
 *
 * @return {PostLockState} Updated state.
 */

function postAutosavingLock() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'LOCK_POST_AUTOSAVING':
      return reducer_objectSpread({}, state, Object(defineProperty["a" /* default */])({}, action.lockName, true));

    case 'UNLOCK_POST_AUTOSAVING':
      return Object(external_this_lodash_["omit"])(state, action.lockName);
  }

  return state;
}
var reducer_reusableBlocks = Object(external_this_wp_data_["combineReducers"])({
  data: function data() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments.length > 1 ? arguments[1] : undefined;

    switch (action.type) {
      case 'RECEIVE_REUSABLE_BLOCKS':
        {
          return reducer_objectSpread({}, state, {}, Object(external_this_lodash_["keyBy"])(action.results, 'id'));
        }

      case 'UPDATE_REUSABLE_BLOCK':
        {
          var id = action.id,
              changes = action.changes;
          return reducer_objectSpread({}, state, Object(defineProperty["a" /* default */])({}, id, reducer_objectSpread({}, state[id], {}, changes)));
        }

      case 'SAVE_REUSABLE_BLOCK_SUCCESS':
        {
          var _id = action.id,
              updatedId = action.updatedId; // If a temporary reusable block is saved, we swap the temporary id with the final one

          if (_id === updatedId) {
            return state;
          }

          var value = state[_id];
          return reducer_objectSpread({}, Object(external_this_lodash_["omit"])(state, _id), Object(defineProperty["a" /* default */])({}, updatedId, reducer_objectSpread({}, value, {
            id: updatedId
          })));
        }

      case 'REMOVE_REUSABLE_BLOCK':
        {
          var _id2 = action.id;
          return Object(external_this_lodash_["omit"])(state, _id2);
        }
    }

    return state;
  },
  isFetching: function isFetching() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments.length > 1 ? arguments[1] : undefined;

    switch (action.type) {
      case 'FETCH_REUSABLE_BLOCKS':
        {
          var id = action.id;

          if (!id) {
            return state;
          }

          return reducer_objectSpread({}, state, Object(defineProperty["a" /* default */])({}, id, true));
        }

      case 'FETCH_REUSABLE_BLOCKS_SUCCESS':
      case 'FETCH_REUSABLE_BLOCKS_FAILURE':
        {
          var _id3 = action.id;
          return Object(external_this_lodash_["omit"])(state, _id3);
        }
    }

    return state;
  },
  isSaving: function isSaving() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments.length > 1 ? arguments[1] : undefined;

    switch (action.type) {
      case 'SAVE_REUSABLE_BLOCK':
        return reducer_objectSpread({}, state, Object(defineProperty["a" /* default */])({}, action.id, true));

      case 'SAVE_REUSABLE_BLOCK_SUCCESS':
      case 'SAVE_REUSABLE_BLOCK_FAILURE':
        {
          var id = action.id;
          return Object(external_this_lodash_["omit"])(state, id);
        }
    }

    return state;
  }
});
/**
 * Reducer returning whether the editor is ready to be rendered.
 * The editor is considered ready to be rendered once
 * the post object is loaded properly and the initial blocks parsed.
 *
 * @param {boolean} state
 * @param {Object} action
 *
 * @return {boolean} Updated state.
 */

function reducer_isReady() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SETUP_EDITOR_STATE':
      return true;

    case 'TEAR_DOWN_EDITOR':
      return false;
  }

  return state;
}
/**
 * Reducer returning the post editor setting.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function reducer_editorSettings() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : EDITOR_SETTINGS_DEFAULTS;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'UPDATE_EDITOR_SETTINGS':
      return reducer_objectSpread({}, state, {}, action.settings);
  }

  return state;
}
/* harmony default export */ var reducer = (redux_optimist_default()(Object(external_this_wp_data_["combineReducers"])({
  postId: reducer_postId,
  postType: reducer_postType,
  preferences: preferences,
  saving: saving,
  postLock: postLock,
  reusableBlocks: reducer_reusableBlocks,
  template: reducer_template,
  postSavingLock: postSavingLock,
  isReady: reducer_isReady,
  editorSettings: reducer_editorSettings,
  postAutosavingLock: postAutosavingLock
})));

// EXTERNAL MODULE: ./node_modules/refx/refx.js
var refx = __webpack_require__(89);
var refx_default = /*#__PURE__*/__webpack_require__.n(refx);

// EXTERNAL MODULE: external {"this":"regeneratorRuntime"}
var external_this_regeneratorRuntime_ = __webpack_require__(23);
var external_this_regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(external_this_regeneratorRuntime_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(49);

// EXTERNAL MODULE: external {"this":["wp","apiFetch"]}
var external_this_wp_apiFetch_ = __webpack_require__(42);
var external_this_wp_apiFetch_default = /*#__PURE__*/__webpack_require__.n(external_this_wp_apiFetch_);

// EXTERNAL MODULE: external {"this":["wp","i18n"]}
var external_this_wp_i18n_ = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(18);

// EXTERNAL MODULE: external {"this":["wp","deprecated"]}
var external_this_wp_deprecated_ = __webpack_require__(37);
var external_this_wp_deprecated_default = /*#__PURE__*/__webpack_require__.n(external_this_wp_deprecated_);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/store/constants.js
/**
 * Set of post properties for which edits should assume a merging behavior,
 * assuming an object value.
 *
 * @type {Set}
 */
var EDIT_MERGE_PROPERTIES = new Set(['meta']);
/**
 * Constant for the store module (or reducer) key.
 *
 * @type {string}
 */

var STORE_KEY = 'core/editor';
var POST_UPDATE_TRANSACTION_ID = 'post-update';
var SAVE_POST_NOTICE_ID = 'SAVE_POST_NOTICE_ID';
var TRASH_POST_NOTICE_ID = 'TRASH_POST_NOTICE_ID';
var PERMALINK_POSTNAME_REGEX = /%(?:postname|pagename)%/;
var ONE_MINUTE_IN_MS = 60 * 1000;
var AUTOSAVE_PROPERTIES = ['title', 'excerpt', 'content'];

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/store/utils/notice-builder.js
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


/**
 * External dependencies
 */


/**
 * Builds the arguments for a success notification dispatch.
 *
 * @param {Object} data Incoming data to build the arguments from.
 *
 * @return {Array} Arguments for dispatch. An empty array signals no
 *                 notification should be sent.
 */

function getNotificationArgumentsForSaveSuccess(data) {
  var previousPost = data.previousPost,
      post = data.post,
      postType = data.postType; // Autosaves are neither shown a notice nor redirected.

  if (Object(external_this_lodash_["get"])(data.options, ['isAutosave'])) {
    return [];
  }

  var publishStatus = ['publish', 'private', 'future'];
  var isPublished = Object(external_this_lodash_["includes"])(publishStatus, previousPost.status);
  var willPublish = Object(external_this_lodash_["includes"])(publishStatus, post.status);
  var noticeMessage;
  var shouldShowLink = Object(external_this_lodash_["get"])(postType, ['viewable'], false);

  if (!isPublished && !willPublish) {
    // If saving a non-published post, don't show notice.
    noticeMessage = null;
  } else if (isPublished && !willPublish) {
    // If undoing publish status, show specific notice
    noticeMessage = postType.labels.item_reverted_to_draft;
    shouldShowLink = false;
  } else if (!isPublished && willPublish) {
    // If publishing or scheduling a post, show the corresponding
    // publish message
    noticeMessage = {
      publish: postType.labels.item_published,
      private: postType.labels.item_published_privately,
      future: postType.labels.item_scheduled
    }[post.status];
  } else {
    // Generic fallback notice
    noticeMessage = postType.labels.item_updated;
  }

  if (noticeMessage) {
    var actions = [];

    if (shouldShowLink) {
      actions.push({
        label: postType.labels.view_item,
        url: post.link
      });
    }

    return [noticeMessage, {
      id: SAVE_POST_NOTICE_ID,
      type: 'snackbar',
      actions: actions
    }];
  }

  return [];
}
/**
 * Builds the fail notification arguments for dispatch.
 *
 * @param {Object} data Incoming data to build the arguments with.
 *
 * @return {Array} Arguments for dispatch. An empty array signals no
 *                 notification should be sent.
 */

function getNotificationArgumentsForSaveFail(data) {
  var post = data.post,
      edits = data.edits,
      error = data.error;

  if (error && 'rest_autosave_no_changes' === error.code) {
    // Autosave requested a new autosave, but there were no changes. This shouldn't
    // result in an error notice for the user.
    return [];
  }

  var publishStatus = ['publish', 'private', 'future'];
  var isPublished = publishStatus.indexOf(post.status) !== -1; // If the post was being published, we show the corresponding publish error message
  // Unless we publish an "updating failed" message

  var messages = {
    publish: Object(external_this_wp_i18n_["__"])('Publishing failed.'),
    private: Object(external_this_wp_i18n_["__"])('Publishing failed.'),
    future: Object(external_this_wp_i18n_["__"])('Scheduling failed.')
  };
  var noticeMessage = !isPublished && publishStatus.indexOf(edits.status) !== -1 ? messages[edits.status] : Object(external_this_wp_i18n_["__"])('Updating failed.'); // Check if message string contains HTML. Notice text is currently only
  // supported as plaintext, and stripping the tags may muddle the meaning.

  if (error.message && !/<\/?[^>]*>/.test(error.message)) {
    noticeMessage = [noticeMessage, error.message].join(' ');
  }

  return [noticeMessage, {
    id: SAVE_POST_NOTICE_ID
  }];
}
/**
 * Builds the trash fail notification arguments for dispatch.
 *
 * @param {Object} data
 *
 * @return {Array} Arguments for dispatch.
 */

function getNotificationArgumentsForTrashFail(data) {
  return [data.error.message && data.error.code !== 'unknown_error' ? data.error.message : Object(external_this_wp_i18n_["__"])('Trashing failed'), {
    id: TRASH_POST_NOTICE_ID
  }];
}

// EXTERNAL MODULE: ./node_modules/memize/index.js
var memize = __webpack_require__(46);
var memize_default = /*#__PURE__*/__webpack_require__.n(memize);

// EXTERNAL MODULE: external {"this":["wp","autop"]}
var external_this_wp_autop_ = __webpack_require__(85);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/store/utils/serialize-blocks.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Serializes blocks following backwards compatibility conventions.
 *
 * @param {Array} blocksForSerialization The blocks to serialize.
 *
 * @return {string} The blocks serialization.
 */

var serializeBlocks = memize_default()(function (blocksForSerialization) {
  // A single unmodified default block is assumed to
  // be equivalent to an empty post.
  if (blocksForSerialization.length === 1 && Object(external_this_wp_blocks_["isUnmodifiedDefaultBlock"])(blocksForSerialization[0])) {
    blocksForSerialization = [];
  }

  var content = Object(external_this_wp_blocks_["serialize"])(blocksForSerialization); // For compatibility, treat a post consisting of a
  // single freeform block as legacy content and apply
  // pre-block-editor removep'd content formatting.

  if (blocksForSerialization.length === 1 && blocksForSerialization[0].name === Object(external_this_wp_blocks_["getFreeformContentHandlerName"])()) {
    content = Object(external_this_wp_autop_["removep"])(content);
  }

  return content;
}, {
  maxSize: 1
});
/* harmony default export */ var serialize_blocks = (serializeBlocks);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/store/actions.js




function actions_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function actions_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { actions_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { actions_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _marked =
/*#__PURE__*/
external_this_regeneratorRuntime_default.a.mark(setupEditor),
    _marked2 =
/*#__PURE__*/
external_this_regeneratorRuntime_default.a.mark(resetAutosave),
    _marked3 =
/*#__PURE__*/
external_this_regeneratorRuntime_default.a.mark(actions_editPost),
    _marked4 =
/*#__PURE__*/
external_this_regeneratorRuntime_default.a.mark(actions_savePost),
    _marked5 =
/*#__PURE__*/
external_this_regeneratorRuntime_default.a.mark(refreshPost),
    _marked6 =
/*#__PURE__*/
external_this_regeneratorRuntime_default.a.mark(trashPost),
    _marked7 =
/*#__PURE__*/
external_this_regeneratorRuntime_default.a.mark(actions_autosave),
    _marked8 =
/*#__PURE__*/
external_this_regeneratorRuntime_default.a.mark(actions_experimentalLocalAutosave),
    _marked9 =
/*#__PURE__*/
external_this_regeneratorRuntime_default.a.mark(actions_redo),
    _marked10 =
/*#__PURE__*/
external_this_regeneratorRuntime_default.a.mark(actions_undo),
    _marked11 =
/*#__PURE__*/
external_this_regeneratorRuntime_default.a.mark(actions_resetEditorBlocks);

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */




/**
 * Returns an action generator used in signalling that editor has initialized with
 * the specified post object and editor settings.
 *
 * @param {Object} post      Post object.
 * @param {Object} edits     Initial edited attributes object.
 * @param {Array?} template  Block Template.
 */

function setupEditor(post, edits, template) {
  var content, blocks, isNewPost;
  return external_this_regeneratorRuntime_default.a.wrap(function setupEditor$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // In order to ensure maximum of a single parse during setup, edits are
          // included as part of editor setup action. Assume edited content as
          // canonical if provided, falling back to post.
          if (Object(external_this_lodash_["has"])(edits, ['content'])) {
            content = edits.content;
          } else {
            content = post.content.raw;
          }

          blocks = Object(external_this_wp_blocks_["parse"])(content); // Apply a template for new posts only, if exists.

          isNewPost = post.status === 'auto-draft';

          if (isNewPost && template) {
            blocks = Object(external_this_wp_blocks_["synchronizeBlocksWithTemplate"])(blocks, template);
          }

          _context.next = 6;
          return resetPost(post);

        case 6:
          _context.next = 8;
          return {
            type: 'SETUP_EDITOR',
            post: post,
            edits: edits,
            template: template
          };

        case 8:
          _context.next = 10;
          return actions_resetEditorBlocks(blocks, {
            __unstableShouldCreateUndoLevel: false
          });

        case 10:
          _context.next = 12;
          return setupEditorState(post);

        case 12:
          if (!(edits && Object.keys(edits).some(function (key) {
            return edits[key] !== (Object(external_this_lodash_["has"])(post, [key, 'raw']) ? post[key].raw : post[key]);
          }))) {
            _context.next = 15;
            break;
          }

          _context.next = 15;
          return actions_editPost(edits);

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
/**
 * Returns an action object signalling that the editor is being destroyed and
 * that any necessary state or side-effect cleanup should occur.
 *
 * @return {Object} Action object.
 */

function __experimentalTearDownEditor() {
  return {
    type: 'TEAR_DOWN_EDITOR'
  };
}
/**
 * Returns an action object used in signalling that the latest version of the
 * post has been received, either by initialization or save.
 *
 * @param {Object} post Post object.
 *
 * @return {Object} Action object.
 */

function resetPost(post) {
  return {
    type: 'RESET_POST',
    post: post
  };
}
/**
 * Returns an action object used in signalling that the latest autosave of the
 * post has been received, by initialization or autosave.
 *
 * @deprecated since 5.6. Callers should use the `receiveAutosaves( postId, autosave )`
 * 			   selector from the '@wordpress/core-data' package.
 *
 * @param {Object} newAutosave Autosave post object.
 *
 * @return {Object} Action object.
 */

function resetAutosave(newAutosave) {
  var postId;
  return external_this_regeneratorRuntime_default.a.wrap(function resetAutosave$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          external_this_wp_deprecated_default()('resetAutosave action (`core/editor` store)', {
            alternative: 'receiveAutosaves action (`core` store)',
            plugin: 'Gutenberg'
          });
          _context2.next = 3;
          return Object(external_this_wp_dataControls_["select"])(STORE_KEY, 'getCurrentPostId');

        case 3:
          postId = _context2.sent;
          _context2.next = 6;
          return Object(external_this_wp_dataControls_["dispatch"])('core', 'receiveAutosaves', postId, newAutosave);

        case 6:
          return _context2.abrupt("return", {
            type: '__INERT__'
          });

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}
/**
 * Action for dispatching that a post update request has started.
 *
 * @param {Object} options
 *
 * @return {Object} An action object
 */

function __experimentalRequestPostUpdateStart() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    type: 'REQUEST_POST_UPDATE_START',
    options: options
  };
}
/**
 * Action for dispatching that a post update request has finished.
 *
 * @param {Object} options
 *
 * @return {Object} An action object
 */

function __experimentalRequestPostUpdateFinish() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    type: 'REQUEST_POST_UPDATE_FINISH',
    options: options
  };
}
/**
 * Returns an action object used in signalling that a patch of updates for the
 * latest version of the post have been received.
 *
 * @param {Object} edits Updated post fields.
 *
 * @return {Object} Action object.
 */

function updatePost(edits) {
  return {
    type: 'UPDATE_POST',
    edits: edits
  };
}
/**
 * Returns an action object used to setup the editor state when first opening
 * an editor.
 *
 * @param {Object} post   Post object.
 *
 * @return {Object} Action object.
 */

function setupEditorState(post) {
  return {
    type: 'SETUP_EDITOR_STATE',
    post: post
  };
}
/**
 * Returns an action object used in signalling that attributes of the post have
 * been edited.
 *
 * @param {Object} edits   Post attributes to edit.
 * @param {Object} options Options for the edit.
 *
 * @yield {Object} Action object or control.
 */

function actions_editPost(edits, options) {
  var _ref, id, type;

  return external_this_regeneratorRuntime_default.a.wrap(function editPost$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return Object(external_this_wp_dataControls_["select"])(STORE_KEY, 'getCurrentPost');

        case 2:
          _ref = _context3.sent;
          id = _ref.id;
          type = _ref.type;
          _context3.next = 7;
          return Object(external_this_wp_dataControls_["dispatch"])('core', 'editEntityRecord', 'postType', type, id, edits, options);

        case 7:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}
/**
 * Returns action object produced by the updatePost creator augmented by
 * an optimist option that signals optimistically applying updates.
 *
 * @param {Object} edits  Updated post fields.
 *
 * @return {Object} Action object.
 */

function __experimentalOptimisticUpdatePost(edits) {
  return actions_objectSpread({}, updatePost(edits), {
    optimist: {
      id: POST_UPDATE_TRANSACTION_ID
    }
  });
}
/**
 * Action generator for saving the current post in the editor.
 *
 * @param {Object} options
 */

function actions_savePost() {
  var options,
      edits,
      previousRecord,
      error,
      args,
      updatedRecord,
      _args4,
      _args5 = arguments;

  return external_this_regeneratorRuntime_default.a.wrap(function savePost$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          options = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : {};
          _context4.next = 3;
          return Object(external_this_wp_dataControls_["select"])(STORE_KEY, 'isEditedPostSaveable');

        case 3:
          if (_context4.sent) {
            _context4.next = 5;
            break;
          }

          return _context4.abrupt("return");

        case 5:
          _context4.next = 7;
          return Object(external_this_wp_dataControls_["select"])(STORE_KEY, 'getEditedPostContent');

        case 7:
          _context4.t0 = _context4.sent;
          edits = {
            content: _context4.t0
          };

          if (options.isAutosave) {
            _context4.next = 12;
            break;
          }

          _context4.next = 12;
          return Object(external_this_wp_dataControls_["dispatch"])(STORE_KEY, 'editPost', edits, {
            undoIgnore: true
          });

        case 12:
          _context4.next = 14;
          return __experimentalRequestPostUpdateStart(options);

        case 14:
          _context4.next = 16;
          return Object(external_this_wp_dataControls_["select"])(STORE_KEY, 'getCurrentPost');

        case 16:
          previousRecord = _context4.sent;
          _context4.t1 = actions_objectSpread;
          _context4.t2 = {
            id: previousRecord.id
          };
          _context4.next = 21;
          return Object(external_this_wp_dataControls_["select"])('core', 'getEntityRecordNonTransientEdits', 'postType', previousRecord.type, previousRecord.id);

        case 21:
          _context4.t3 = _context4.sent;
          _context4.t4 = {};
          _context4.t5 = edits;
          edits = (0, _context4.t1)(_context4.t2, _context4.t3, _context4.t4, _context4.t5);
          _context4.next = 27;
          return Object(external_this_wp_dataControls_["dispatch"])('core', 'saveEntityRecord', 'postType', previousRecord.type, edits, options);

        case 27:
          _context4.next = 29;
          return __experimentalRequestPostUpdateFinish(options);

        case 29:
          _context4.next = 31;
          return Object(external_this_wp_dataControls_["select"])('core', 'getLastEntitySaveError', 'postType', previousRecord.type, previousRecord.id);

        case 31:
          error = _context4.sent;

          if (!error) {
            _context4.next = 39;
            break;
          }

          args = getNotificationArgumentsForSaveFail({
            post: previousRecord,
            edits: edits,
            error: error
          });

          if (!args.length) {
            _context4.next = 37;
            break;
          }

          _context4.next = 37;
          return external_this_wp_dataControls_["dispatch"].apply(void 0, ['core/notices', 'createErrorNotice'].concat(Object(toConsumableArray["a" /* default */])(args)));

        case 37:
          _context4.next = 57;
          break;

        case 39:
          _context4.next = 41;
          return Object(external_this_wp_dataControls_["select"])(STORE_KEY, 'getCurrentPost');

        case 41:
          updatedRecord = _context4.sent;
          _context4.t6 = getNotificationArgumentsForSaveSuccess;
          _context4.t7 = previousRecord;
          _context4.t8 = updatedRecord;
          _context4.next = 47;
          return Object(external_this_wp_dataControls_["select"])('core', 'getPostType', updatedRecord.type);

        case 47:
          _context4.t9 = _context4.sent;
          _context4.t10 = options;
          _context4.t11 = {
            previousPost: _context4.t7,
            post: _context4.t8,
            postType: _context4.t9,
            options: _context4.t10
          };
          _args4 = (0, _context4.t6)(_context4.t11);

          if (!_args4.length) {
            _context4.next = 54;
            break;
          }

          _context4.next = 54;
          return external_this_wp_dataControls_["dispatch"].apply(void 0, ['core/notices', 'createSuccessNotice'].concat(Object(toConsumableArray["a" /* default */])(_args4)));

        case 54:
          if (options.isAutosave) {
            _context4.next = 57;
            break;
          }

          _context4.next = 57;
          return Object(external_this_wp_dataControls_["dispatch"])('core/block-editor', '__unstableMarkLastChangeAsPersistent');

        case 57:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}
/**
 * Action generator for handling refreshing the current post.
 */

function refreshPost() {
  var post, postTypeSlug, postType, newPost;
  return external_this_regeneratorRuntime_default.a.wrap(function refreshPost$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return Object(external_this_wp_dataControls_["select"])(STORE_KEY, 'getCurrentPost');

        case 2:
          post = _context5.sent;
          _context5.next = 5;
          return Object(external_this_wp_dataControls_["select"])(STORE_KEY, 'getCurrentPostType');

        case 5:
          postTypeSlug = _context5.sent;
          _context5.next = 8;
          return Object(external_this_wp_dataControls_["select"])('core', 'getPostType', postTypeSlug);

        case 8:
          postType = _context5.sent;
          _context5.next = 11;
          return Object(external_this_wp_dataControls_["apiFetch"])({
            // Timestamp arg allows caller to bypass browser caching, which is
            // expected for this specific function.
            path: "/wp/v2/".concat(postType.rest_base, "/").concat(post.id) + "?context=edit&_timestamp=".concat(Date.now())
          });

        case 11:
          newPost = _context5.sent;
          _context5.next = 14;
          return Object(external_this_wp_dataControls_["dispatch"])(STORE_KEY, 'resetPost', newPost);

        case 14:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}
/**
 * Action generator for trashing the current post in the editor.
 */

function trashPost() {
  var postTypeSlug, postType, post;
  return external_this_regeneratorRuntime_default.a.wrap(function trashPost$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return Object(external_this_wp_dataControls_["select"])(STORE_KEY, 'getCurrentPostType');

        case 2:
          postTypeSlug = _context6.sent;
          _context6.next = 5;
          return Object(external_this_wp_dataControls_["select"])('core', 'getPostType', postTypeSlug);

        case 5:
          postType = _context6.sent;
          _context6.next = 8;
          return Object(external_this_wp_dataControls_["dispatch"])('core/notices', 'removeNotice', TRASH_POST_NOTICE_ID);

        case 8:
          _context6.prev = 8;
          _context6.next = 11;
          return Object(external_this_wp_dataControls_["select"])(STORE_KEY, 'getCurrentPost');

        case 11:
          post = _context6.sent;
          _context6.next = 14;
          return Object(external_this_wp_dataControls_["apiFetch"])({
            path: "/wp/v2/".concat(postType.rest_base, "/").concat(post.id),
            method: 'DELETE'
          });

        case 14:
          _context6.next = 16;
          return Object(external_this_wp_dataControls_["dispatch"])(STORE_KEY, 'savePost');

        case 16:
          _context6.next = 22;
          break;

        case 18:
          _context6.prev = 18;
          _context6.t0 = _context6["catch"](8);
          _context6.next = 22;
          return external_this_wp_dataControls_["dispatch"].apply(void 0, ['core/notices', 'createErrorNotice'].concat(Object(toConsumableArray["a" /* default */])(getNotificationArgumentsForTrashFail({
            error: _context6.t0
          }))));

        case 22:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6, null, [[8, 18]]);
}
/**
 * Action generator used in signalling that the post should autosave.
 *
 * @param {Object?} options Extra flags to identify the autosave.
 */

function actions_autosave(options) {
  return external_this_regeneratorRuntime_default.a.wrap(function autosave$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return Object(external_this_wp_dataControls_["dispatch"])(STORE_KEY, 'savePost', actions_objectSpread({
            isAutosave: true
          }, options));

        case 2:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7);
}
function actions_experimentalLocalAutosave() {
  var post, title, content, excerpt;
  return external_this_regeneratorRuntime_default.a.wrap(function __experimentalLocalAutosave$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return Object(external_this_wp_dataControls_["select"])(STORE_KEY, 'getCurrentPost');

        case 2:
          post = _context8.sent;
          _context8.next = 5;
          return Object(external_this_wp_dataControls_["select"])(STORE_KEY, 'getEditedPostAttribute', 'title');

        case 5:
          title = _context8.sent;
          _context8.next = 8;
          return Object(external_this_wp_dataControls_["select"])(STORE_KEY, 'getEditedPostAttribute', 'content');

        case 8:
          content = _context8.sent;
          _context8.next = 11;
          return Object(external_this_wp_dataControls_["select"])(STORE_KEY, 'getEditedPostAttribute', 'excerpt');

        case 11:
          excerpt = _context8.sent;
          _context8.next = 14;
          return {
            type: 'LOCAL_AUTOSAVE_SET',
            postId: post.id,
            title: title,
            content: content,
            excerpt: excerpt
          };

        case 14:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8);
}
/**
 * Returns an action object used in signalling that undo history should
 * restore last popped state.
 *
 * @yield {Object} Action object.
 */

function actions_redo() {
  return external_this_regeneratorRuntime_default.a.wrap(function redo$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return Object(external_this_wp_dataControls_["dispatch"])('core', 'redo');

        case 2:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked9);
}
/**
 * Returns an action object used in signalling that undo history should pop.
 *
 * @yield {Object} Action object.
 */

function actions_undo() {
  return external_this_regeneratorRuntime_default.a.wrap(function undo$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return Object(external_this_wp_dataControls_["dispatch"])('core', 'undo');

        case 2:
        case "end":
          return _context10.stop();
      }
    }
  }, _marked10);
}
/**
 * Returns an action object used in signalling that undo history record should
 * be created.
 *
 * @return {Object} Action object.
 */

function createUndoLevel() {
  return {
    type: 'CREATE_UNDO_LEVEL'
  };
}
/**
 * Returns an action object used to lock the editor.
 *
 * @param {Object}  lock Details about the post lock status, user, and nonce.
 *
 * @return {Object} Action object.
 */

function updatePostLock(lock) {
  return {
    type: 'UPDATE_POST_LOCK',
    lock: lock
  };
}
/**
 * Returns an action object used to fetch a single reusable block or all
 * reusable blocks from the REST API into the store.
 *
 * @param {?string} id If given, only a single reusable block with this ID will
 *                     be fetched.
 *
 * @return {Object} Action object.
 */

function actions_experimentalFetchReusableBlocks(id) {
  return {
    type: 'FETCH_REUSABLE_BLOCKS',
    id: id
  };
}
/**
 * Returns an action object used in signalling that reusable blocks have been
 * received. `results` is an array of objects containing:
 *  - `reusableBlock` - Details about how the reusable block is persisted.
 *  - `parsedBlock` - The original block.
 *
 * @param {Object[]} results Reusable blocks received.
 *
 * @return {Object} Action object.
 */

function __experimentalReceiveReusableBlocks(results) {
  return {
    type: 'RECEIVE_REUSABLE_BLOCKS',
    results: results
  };
}
/**
 * Returns an action object used to save a reusable block that's in the store to
 * the REST API.
 *
 * @param {Object} id The ID of the reusable block to save.
 *
 * @return {Object} Action object.
 */

function __experimentalSaveReusableBlock(id) {
  return {
    type: 'SAVE_REUSABLE_BLOCK',
    id: id
  };
}
/**
 * Returns an action object used to delete a reusable block via the REST API.
 *
 * @param {number} id The ID of the reusable block to delete.
 *
 * @return {Object} Action object.
 */

function __experimentalDeleteReusableBlock(id) {
  return {
    type: 'DELETE_REUSABLE_BLOCK',
    id: id
  };
}
/**
 * Returns an action object used in signalling that a reusable block is
 * to be updated.
 *
 * @param {number} id      The ID of the reusable block to update.
 * @param {Object} changes The changes to apply.
 *
 * @return {Object} Action object.
 */

function __experimentalUpdateReusableBlock(id, changes) {
  return {
    type: 'UPDATE_REUSABLE_BLOCK',
    id: id,
    changes: changes
  };
}
/**
 * Returns an action object used to convert a reusable block into a static
 * block.
 *
 * @param {string} clientId The client ID of the block to attach.
 *
 * @return {Object} Action object.
 */

function __experimentalConvertBlockToStatic(clientId) {
  return {
    type: 'CONVERT_BLOCK_TO_STATIC',
    clientId: clientId
  };
}
/**
 * Returns an action object used to convert a static block into a reusable
 * block.
 *
 * @param {string} clientIds The client IDs of the block to detach.
 *
 * @return {Object} Action object.
 */

function __experimentalConvertBlockToReusable(clientIds) {
  return {
    type: 'CONVERT_BLOCK_TO_REUSABLE',
    clientIds: Object(external_this_lodash_["castArray"])(clientIds)
  };
}
/**
 * Returns an action object used in signalling that the user has enabled the
 * publish sidebar.
 *
 * @return {Object} Action object
 */

function enablePublishSidebar() {
  return {
    type: 'ENABLE_PUBLISH_SIDEBAR'
  };
}
/**
 * Returns an action object used in signalling that the user has disabled the
 * publish sidebar.
 *
 * @return {Object} Action object
 */

function disablePublishSidebar() {
  return {
    type: 'DISABLE_PUBLISH_SIDEBAR'
  };
}
/**
 * Returns an action object used to signal that post saving is locked.
 *
 * @param  {string} lockName The lock name.
 *
 * @example
 * ```
 * const { subscribe } = wp.data;
 *
 * const initialPostStatus = wp.data.select( 'core/editor' ).getEditedPostAttribute( 'status' );
 *
 * // Only allow publishing posts that are set to a future date.
 * if ( 'publish' !== initialPostStatus ) {
 *
 * 	// Track locking.
 * 	let locked = false;
 *
 * 	// Watch for the publish event.
 * 	let unssubscribe = subscribe( () => {
 * 		const currentPostStatus = wp.data.select( 'core/editor' ).getEditedPostAttribute( 'status' );
 * 		if ( 'publish' !== currentPostStatus ) {
 *
 * 			// Compare the post date to the current date, lock the post if the date isn't in the future.
 * 			const postDate = new Date( wp.data.select( 'core/editor' ).getEditedPostAttribute( 'date' ) );
 * 			const currentDate = new Date();
 * 			if ( postDate.getTime() <= currentDate.getTime() ) {
 * 				if ( ! locked ) {
 * 					locked = true;
 * 					wp.data.dispatch( 'core/editor' ).lockPostSaving( 'futurelock' );
 * 				}
 * 			} else {
 * 				if ( locked ) {
 * 					locked = false;
 * 					wp.data.dispatch( 'core/editor' ).unlockPostSaving( 'futurelock' );
 * 				}
 * 			}
 * 		}
 * 	} );
 * }
 * ```
 *
 * @return {Object} Action object
 */

function lockPostSaving(lockName) {
  return {
    type: 'LOCK_POST_SAVING',
    lockName: lockName
  };
}
/**
 * Returns an action object used to signal that post saving is unlocked.
 *
 * @param  {string} lockName The lock name.
 *
 * @example
 * ```
 * // Unlock post saving with the lock key `mylock`:
 * wp.data.dispatch( 'core/editor' ).unlockPostSaving( 'mylock' );
 * ```
 *
 * @return {Object} Action object
 */

function unlockPostSaving(lockName) {
  return {
    type: 'UNLOCK_POST_SAVING',
    lockName: lockName
  };
}
/**
 * Returns an action object used to signal that post autosaving is locked.
 *
 * @param  {string} lockName The lock name.
 *
 * @example
 * ```
 * // Lock post autosaving with the lock key `mylock`:
 * wp.data.dispatch( 'core/editor' ).lockPostAutosaving( 'mylock' );
 * ```
 *
 * @return {Object} Action object
 */

function lockPostAutosaving(lockName) {
  return {
    type: 'LOCK_POST_AUTOSAVING',
    lockName: lockName
  };
}
/**
 * Returns an action object used to signal that post autosaving is unlocked.
 *
 * @param  {string} lockName The lock name.
 *
 * @example
 * ```
 * // Unlock post saving with the lock key `mylock`:
 * wp.data.dispatch( 'core/editor' ).unlockPostAutosaving( 'mylock' );
 * ```
 *
 * @return {Object} Action object
 */

function unlockPostAutosaving(lockName) {
  return {
    type: 'UNLOCK_POST_AUTOSAVING',
    lockName: lockName
  };
}
/**
 * Returns an action object used to signal that the blocks have been updated.
 *
 * @param {Array}   blocks  Block Array.
 * @param {?Object} options Optional options.
 *
 * @yield {Object} Action object
 */

function actions_resetEditorBlocks(blocks) {
  var options,
      __unstableShouldCreateUndoLevel,
      selectionStart,
      selectionEnd,
      edits,
      _ref2,
      id,
      type,
      noChange,
      _args12 = arguments;

  return external_this_regeneratorRuntime_default.a.wrap(function resetEditorBlocks$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          options = _args12.length > 1 && _args12[1] !== undefined ? _args12[1] : {};
          __unstableShouldCreateUndoLevel = options.__unstableShouldCreateUndoLevel, selectionStart = options.selectionStart, selectionEnd = options.selectionEnd;
          edits = {
            blocks: blocks,
            selectionStart: selectionStart,
            selectionEnd: selectionEnd
          };

          if (!(__unstableShouldCreateUndoLevel !== false)) {
            _context11.next = 19;
            break;
          }

          _context11.next = 6;
          return Object(external_this_wp_dataControls_["select"])(STORE_KEY, 'getCurrentPost');

        case 6:
          _ref2 = _context11.sent;
          id = _ref2.id;
          type = _ref2.type;
          _context11.next = 11;
          return Object(external_this_wp_dataControls_["select"])('core', 'getEditedEntityRecord', 'postType', type, id);

        case 11:
          _context11.t0 = _context11.sent.blocks;
          _context11.t1 = edits.blocks;
          noChange = _context11.t0 === _context11.t1;

          if (!noChange) {
            _context11.next = 18;
            break;
          }

          _context11.next = 17;
          return Object(external_this_wp_dataControls_["dispatch"])('core', '__unstableCreateUndoLevel', 'postType', type, id);

        case 17:
          return _context11.abrupt("return", _context11.sent);

        case 18:
          // We create a new function here on every persistent edit
          // to make sure the edit makes the post dirty and creates
          // a new undo level.
          edits.content = function (_ref3) {
            var _ref3$blocks = _ref3.blocks,
                blocksForSerialization = _ref3$blocks === void 0 ? [] : _ref3$blocks;
            return serialize_blocks(blocksForSerialization);
          };

        case 19:
          return _context11.delegateYield(actions_editPost(edits), "t2", 20);

        case 20:
        case "end":
          return _context11.stop();
      }
    }
  }, _marked11);
}
/*
 * Returns an action object used in signalling that the post editor settings have been updated.
 *
 * @param {Object} settings Updated settings
 *
 * @return {Object} Action object
 */

function updateEditorSettings(settings) {
  return {
    type: 'UPDATE_EDITOR_SETTINGS',
    settings: settings
  };
}
/**
 * Backward compatibility
 */

var actions_getBlockEditorAction = function getBlockEditorAction(name) {
  return (
    /*#__PURE__*/
    external_this_regeneratorRuntime_default.a.mark(function _callee() {
      var _len,
          args,
          _key,
          _args13 = arguments;

      return external_this_regeneratorRuntime_default.a.wrap(function _callee$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              external_this_wp_deprecated_default()("`wp.data.dispatch( 'core/editor' )." + name + '`', {
                alternative: "`wp.data.dispatch( 'core/block-editor' )." + name + '`'
              });

              for (_len = _args13.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = _args13[_key];
              }

              _context12.next = 4;
              return external_this_wp_dataControls_["dispatch"].apply(void 0, ['core/block-editor', name].concat(args));

            case 4:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee);
    })
  );
};
/**
 * @see resetBlocks in core/block-editor store.
 */


var resetBlocks = actions_getBlockEditorAction('resetBlocks');
/**
 * @see receiveBlocks in core/block-editor store.
 */

var receiveBlocks = actions_getBlockEditorAction('receiveBlocks');
/**
 * @see updateBlock in core/block-editor store.
 */

var updateBlock = actions_getBlockEditorAction('updateBlock');
/**
 * @see updateBlockAttributes in core/block-editor store.
 */

var updateBlockAttributes = actions_getBlockEditorAction('updateBlockAttributes');
/**
 * @see selectBlock in core/block-editor store.
 */

var selectBlock = actions_getBlockEditorAction('selectBlock');
/**
 * @see startMultiSelect in core/block-editor store.
 */

var startMultiSelect = actions_getBlockEditorAction('startMultiSelect');
/**
 * @see stopMultiSelect in core/block-editor store.
 */

var stopMultiSelect = actions_getBlockEditorAction('stopMultiSelect');
/**
 * @see multiSelect in core/block-editor store.
 */

var multiSelect = actions_getBlockEditorAction('multiSelect');
/**
 * @see clearSelectedBlock in core/block-editor store.
 */

var clearSelectedBlock = actions_getBlockEditorAction('clearSelectedBlock');
/**
 * @see toggleSelection in core/block-editor store.
 */

var toggleSelection = actions_getBlockEditorAction('toggleSelection');
/**
 * @see replaceBlocks in core/block-editor store.
 */

var actions_replaceBlocks = actions_getBlockEditorAction('replaceBlocks');
/**
 * @see replaceBlock in core/block-editor store.
 */

var replaceBlock = actions_getBlockEditorAction('replaceBlock');
/**
 * @see moveBlocksDown in core/block-editor store.
 */

var moveBlocksDown = actions_getBlockEditorAction('moveBlocksDown');
/**
 * @see moveBlocksUp in core/block-editor store.
 */

var moveBlocksUp = actions_getBlockEditorAction('moveBlocksUp');
/**
 * @see moveBlockToPosition in core/block-editor store.
 */

var moveBlockToPosition = actions_getBlockEditorAction('moveBlockToPosition');
/**
 * @see insertBlock in core/block-editor store.
 */

var insertBlock = actions_getBlockEditorAction('insertBlock');
/**
 * @see insertBlocks in core/block-editor store.
 */

var insertBlocks = actions_getBlockEditorAction('insertBlocks');
/**
 * @see showInsertionPoint in core/block-editor store.
 */

var showInsertionPoint = actions_getBlockEditorAction('showInsertionPoint');
/**
 * @see hideInsertionPoint in core/block-editor store.
 */

var hideInsertionPoint = actions_getBlockEditorAction('hideInsertionPoint');
/**
 * @see setTemplateValidity in core/block-editor store.
 */

var setTemplateValidity = actions_getBlockEditorAction('setTemplateValidity');
/**
 * @see synchronizeTemplate in core/block-editor store.
 */

var synchronizeTemplate = actions_getBlockEditorAction('synchronizeTemplate');
/**
 * @see mergeBlocks in core/block-editor store.
 */

var mergeBlocks = actions_getBlockEditorAction('mergeBlocks');
/**
 * @see removeBlocks in core/block-editor store.
 */

var removeBlocks = actions_getBlockEditorAction('removeBlocks');
/**
 * @see removeBlock in core/block-editor store.
 */

var removeBlock = actions_getBlockEditorAction('removeBlock');
/**
 * @see toggleBlockMode in core/block-editor store.
 */

var toggleBlockMode = actions_getBlockEditorAction('toggleBlockMode');
/**
 * @see startTyping in core/block-editor store.
 */

var startTyping = actions_getBlockEditorAction('startTyping');
/**
 * @see stopTyping in core/block-editor store.
 */

var stopTyping = actions_getBlockEditorAction('stopTyping');
/**
 * @see enterFormattedText in core/block-editor store.
 */

var enterFormattedText = actions_getBlockEditorAction('enterFormattedText');
/**
 * @see exitFormattedText in core/block-editor store.
 */

var exitFormattedText = actions_getBlockEditorAction('exitFormattedText');
/**
 * @see insertDefaultBlock in core/block-editor store.
 */

var insertDefaultBlock = actions_getBlockEditorAction('insertDefaultBlock');
/**
 * @see updateBlockListSettings in core/block-editor store.
 */

var updateBlockListSettings = actions_getBlockEditorAction('updateBlockListSettings');

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/rememo/es/rememo.js
var rememo = __webpack_require__(40);

// EXTERNAL MODULE: external {"this":["wp","date"]}
var external_this_wp_date_ = __webpack_require__(60);

// EXTERNAL MODULE: external {"this":["wp","url"]}
var external_this_wp_url_ = __webpack_require__(30);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/store/selectors.js



function selectors_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function selectors_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { selectors_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { selectors_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */





/**
 * Shared reference to an empty object for cases where it is important to avoid
 * returning a new object reference on every invocation, as in a connected or
 * other pure component which performs `shouldComponentUpdate` check on props.
 * This should be used as a last resort, since the normalized data should be
 * maintained by the reducer result in state.
 */

var EMPTY_OBJECT = {};
/**
 * Shared reference to an empty array for cases where it is important to avoid
 * returning a new array reference on every invocation, as in a connected or
 * other pure component which performs `shouldComponentUpdate` check on props.
 * This should be used as a last resort, since the normalized data should be
 * maintained by the reducer result in state.
 */

var EMPTY_ARRAY = [];
/**
 * Returns true if any past editor history snapshots exist, or false otherwise.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether undo history exists.
 */

var hasEditorUndo = Object(external_this_wp_data_["createRegistrySelector"])(function (select) {
  return function () {
    return select('core').hasUndo();
  };
});
/**
 * Returns true if any future editor history snapshots exist, or false
 * otherwise.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether redo history exists.
 */

var hasEditorRedo = Object(external_this_wp_data_["createRegistrySelector"])(function (select) {
  return function () {
    return select('core').hasRedo();
  };
});
/**
 * Returns true if the currently edited post is yet to be saved, or false if
 * the post has been saved.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the post is new.
 */

function selectors_isEditedPostNew(state) {
  return selectors_getCurrentPost(state).status === 'auto-draft';
}
/**
 * Returns true if content includes unsaved changes, or false otherwise.
 *
 * @param {Object} state Editor state.
 *
 * @return {boolean} Whether content includes unsaved changes.
 */

function hasChangedContent(state) {
  var edits = getPostEdits(state);
  return 'blocks' in edits || // `edits` is intended to contain only values which are different from
  // the saved post, so the mere presence of a property is an indicator
  // that the value is different than what is known to be saved. While
  // content in Visual mode is represented by the blocks state, in Text
  // mode it is tracked by `edits.content`.
  'content' in edits;
}
/**
 * Returns true if there are unsaved values for the current edit session, or
 * false if the editing state matches the saved or new post.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether unsaved values exist.
 */

var selectors_isEditedPostDirty = Object(external_this_wp_data_["createRegistrySelector"])(function (select) {
  return function (state) {
    // Edits should contain only fields which differ from the saved post (reset
    // at initial load and save complete). Thus, a non-empty edits state can be
    // inferred to contain unsaved values.
    var postType = selectors_getCurrentPostType(state);
    var postId = selectors_getCurrentPostId(state);

    if (select('core').hasEditsForEntityRecord('postType', postType, postId)) {
      return true;
    }

    return false;
  };
});
/**
 * Returns true if there are unsaved edits for entities other than
 * the editor's post, and false otherwise.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether there are edits or not.
 */

var selectors_hasNonPostEntityChanges = Object(external_this_wp_data_["createRegistrySelector"])(function (select) {
  return function (state) {
    var enableFullSiteEditing = selectors_getEditorSettings(state).__experimentalEnableFullSiteEditing;

    if (!enableFullSiteEditing) {
      return false;
    }

    var entityRecordChangesByRecord = select('core').getEntityRecordChangesByRecord();
    var changedKinds = Object.keys(entityRecordChangesByRecord);

    if (changedKinds.length > 1 || changedKinds.length === 1 && !entityRecordChangesByRecord.postType) {
      // Return true if there is more than one edited entity kind
      // or the edited entity kind is not the editor's post's kind.
      return true;
    } else if (!entityRecordChangesByRecord.postType) {
      // Don't continue if there are no edited entity kinds.
      return false;
    }

    var _getCurrentPost = selectors_getCurrentPost(state),
        type = _getCurrentPost.type,
        id = _getCurrentPost.id;

    var changedPostTypes = Object.keys(entityRecordChangesByRecord.postType);

    if (changedPostTypes.length > 1 || changedPostTypes.length === 1 && !entityRecordChangesByRecord.postType[type]) {
      // Return true if there is more than one edited post type
      // or the edited entity's post type is not the editor's post's post type.
      return true;
    }

    var changedPosts = Object.keys(entityRecordChangesByRecord.postType[type]);

    if (changedPosts.length > 1 || changedPosts.length === 1 && !entityRecordChangesByRecord.postType[type][id]) {
      // Return true if there is more than one edited post
      // or the edited post is not the editor's post.
      return true;
    }

    return false;
  };
});
/**
 * Returns true if there are no unsaved values for the current edit session and
 * if the currently edited post is new (has never been saved before).
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether new post and unsaved values exist.
 */

function selectors_isCleanNewPost(state) {
  return !selectors_isEditedPostDirty(state) && selectors_isEditedPostNew(state);
}
/**
 * Returns the post currently being edited in its last known saved state, not
 * including unsaved edits. Returns an object containing relevant default post
 * values if the post has not yet been saved.
 *
 * @param {Object} state Global application state.
 *
 * @return {Object} Post object.
 */

var selectors_getCurrentPost = Object(external_this_wp_data_["createRegistrySelector"])(function (select) {
  return function (state) {
    var postId = selectors_getCurrentPostId(state);
    var postType = selectors_getCurrentPostType(state);
    var post = select('core').getRawEntityRecord('postType', postType, postId);

    if (post) {
      return post;
    } // This exists for compatibility with the previous selector behavior
    // which would guarantee an object return based on the editor reducer's
    // default empty object state.


    return EMPTY_OBJECT;
  };
});
/**
 * Returns the post type of the post currently being edited.
 *
 * @param {Object} state Global application state.
 *
 * @return {string} Post type.
 */

function selectors_getCurrentPostType(state) {
  return state.postType;
}
/**
 * Returns the ID of the post currently being edited, or null if the post has
 * not yet been saved.
 *
 * @param {Object} state Global application state.
 *
 * @return {?number} ID of current post.
 */

function selectors_getCurrentPostId(state) {
  return state.postId;
}
/**
 * Returns the number of revisions of the post currently being edited.
 *
 * @param {Object} state Global application state.
 *
 * @return {number} Number of revisions.
 */

function getCurrentPostRevisionsCount(state) {
  return Object(external_this_lodash_["get"])(selectors_getCurrentPost(state), ['_links', 'version-history', 0, 'count'], 0);
}
/**
 * Returns the last revision ID of the post currently being edited,
 * or null if the post has no revisions.
 *
 * @param {Object} state Global application state.
 *
 * @return {?number} ID of the last revision.
 */

function getCurrentPostLastRevisionId(state) {
  return Object(external_this_lodash_["get"])(selectors_getCurrentPost(state), ['_links', 'predecessor-version', 0, 'id'], null);
}
/**
 * Returns any post values which have been changed in the editor but not yet
 * been saved.
 *
 * @param {Object} state Global application state.
 *
 * @return {Object} Object of key value pairs comprising unsaved edits.
 */

var getPostEdits = Object(external_this_wp_data_["createRegistrySelector"])(function (select) {
  return function (state) {
    var postType = selectors_getCurrentPostType(state);
    var postId = selectors_getCurrentPostId(state);
    return select('core').getEntityRecordEdits('postType', postType, postId) || EMPTY_OBJECT;
  };
});
/**
 * Returns a new reference when edited values have changed. This is useful in
 * inferring where an edit has been made between states by comparison of the
 * return values using strict equality.
 *
 * @deprecated since Gutenberg 6.5.0.
 *
 * @example
 *
 * ```
 * const hasEditOccurred = (
 *    getReferenceByDistinctEdits( beforeState ) !==
 *    getReferenceByDistinctEdits( afterState )
 * );
 * ```
 *
 * @param {Object} state Editor state.
 *
 * @return {*} A value whose reference will change only when an edit occurs.
 */

var getReferenceByDistinctEdits = Object(external_this_wp_data_["createRegistrySelector"])(function (select) {
  return function ()
  /* state */
  {
    external_this_wp_deprecated_default()("`wp.data.select( 'core/editor' ).getReferenceByDistinctEdits`", {
      alternative: "`wp.data.select( 'core' ).getReferenceByDistinctEdits`"
    });
    return select('core').getReferenceByDistinctEdits();
  };
});
/**
 * Returns an attribute value of the saved post.
 *
 * @param {Object} state         Global application state.
 * @param {string} attributeName Post attribute name.
 *
 * @return {*} Post attribute value.
 */

function selectors_getCurrentPostAttribute(state, attributeName) {
  switch (attributeName) {
    case 'type':
      return selectors_getCurrentPostType(state);

    case 'id':
      return selectors_getCurrentPostId(state);

    default:
      var post = selectors_getCurrentPost(state);

      if (!post.hasOwnProperty(attributeName)) {
        break;
      }

      return getPostRawValue(post[attributeName]);
  }
}
/**
 * Returns a single attribute of the post being edited, preferring the unsaved
 * edit if one exists, but merging with the attribute value for the last known
 * saved state of the post (this is needed for some nested attributes like meta).
 *
 * @param {Object} state         Global application state.
 * @param {string} attributeName Post attribute name.
 *
 * @return {*} Post attribute value.
 */

var getNestedEditedPostProperty = function getNestedEditedPostProperty(state, attributeName) {
  var edits = getPostEdits(state);

  if (!edits.hasOwnProperty(attributeName)) {
    return selectors_getCurrentPostAttribute(state, attributeName);
  }

  return selectors_objectSpread({}, selectors_getCurrentPostAttribute(state, attributeName), {}, edits[attributeName]);
};
/**
 * Returns a single attribute of the post being edited, preferring the unsaved
 * edit if one exists, but falling back to the attribute for the last known
 * saved state of the post.
 *
 * @param {Object} state         Global application state.
 * @param {string} attributeName Post attribute name.
 *
 * @return {*} Post attribute value.
 */


function selectors_getEditedPostAttribute(state, attributeName) {
  // Special cases
  switch (attributeName) {
    case 'content':
      return getEditedPostContent(state);
  } // Fall back to saved post value if not edited.


  var edits = getPostEdits(state);

  if (!edits.hasOwnProperty(attributeName)) {
    return selectors_getCurrentPostAttribute(state, attributeName);
  } // Merge properties are objects which contain only the patch edit in state,
  // and thus must be merged with the current post attribute.


  if (EDIT_MERGE_PROPERTIES.has(attributeName)) {
    return getNestedEditedPostProperty(state, attributeName);
  }

  return edits[attributeName];
}
/**
 * Returns an attribute value of the current autosave revision for a post, or
 * null if there is no autosave for the post.
 *
 * @deprecated since 5.6. Callers should use the `getAutosave( postType, postId, userId )` selector
 * 			   from the '@wordpress/core-data' package and access properties on the returned
 * 			   autosave object using getPostRawValue.
 *
 * @param {Object} state         Global application state.
 * @param {string} attributeName Autosave attribute name.
 *
 * @return {*} Autosave attribute value.
 */

var getAutosaveAttribute = Object(external_this_wp_data_["createRegistrySelector"])(function (select) {
  return function (state, attributeName) {
    if (!Object(external_this_lodash_["includes"])(AUTOSAVE_PROPERTIES, attributeName) && attributeName !== 'preview_link') {
      return;
    }

    var postType = selectors_getCurrentPostType(state);
    var postId = selectors_getCurrentPostId(state);
    var currentUserId = Object(external_this_lodash_["get"])(select('core').getCurrentUser(), ['id']);
    var autosave = select('core').getAutosave(postType, postId, currentUserId);

    if (autosave) {
      return getPostRawValue(autosave[attributeName]);
    }
  };
});
/**
 * Returns the current visibility of the post being edited, preferring the
 * unsaved value if different than the saved post. The return value is one of
 * "private", "password", or "public".
 *
 * @param {Object} state Global application state.
 *
 * @return {string} Post visibility.
 */

function selectors_getEditedPostVisibility(state) {
  var status = selectors_getEditedPostAttribute(state, 'status');

  if (status === 'private') {
    return 'private';
  }

  var password = selectors_getEditedPostAttribute(state, 'password');

  if (password) {
    return 'password';
  }

  return 'public';
}
/**
 * Returns true if post is pending review.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether current post is pending review.
 */

function isCurrentPostPending(state) {
  return selectors_getCurrentPost(state).status === 'pending';
}
/**
 * Return true if the current post has already been published.
 *
 * @param {Object}  state       Global application state.
 * @param {Object?} currentPost Explicit current post for bypassing registry selector.
 *
 * @return {boolean} Whether the post has been published.
 */

function selectors_isCurrentPostPublished(state, currentPost) {
  var post = currentPost || selectors_getCurrentPost(state);
  return ['publish', 'private'].indexOf(post.status) !== -1 || post.status === 'future' && !Object(external_this_wp_date_["isInTheFuture"])(new Date(Number(Object(external_this_wp_date_["getDate"])(post.date)) - ONE_MINUTE_IN_MS));
}
/**
 * Returns true if post is already scheduled.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether current post is scheduled to be posted.
 */

function selectors_isCurrentPostScheduled(state) {
  return selectors_getCurrentPost(state).status === 'future' && !selectors_isCurrentPostPublished(state);
}
/**
 * Return true if the post being edited can be published.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the post can been published.
 */

function selectors_isEditedPostPublishable(state) {
  var post = selectors_getCurrentPost(state); // TODO: Post being publishable should be superset of condition of post
  // being saveable. Currently this restriction is imposed at UI.
  //
  //  See: <PostPublishButton /> (`isButtonEnabled` assigned by `isSaveable`)

  return selectors_isEditedPostDirty(state) || ['publish', 'private', 'future'].indexOf(post.status) === -1;
}
/**
 * Returns true if the post can be saved, or false otherwise. A post must
 * contain a title, an excerpt, or non-empty content to be valid for save.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the post can be saved.
 */

function selectors_isEditedPostSaveable(state) {
  if (selectors_isSavingPost(state)) {
    return false;
  } // TODO: Post should not be saveable if not dirty. Cannot be added here at
  // this time since posts where meta boxes are present can be saved even if
  // the post is not dirty. Currently this restriction is imposed at UI, but
  // should be moved here.
  //
  //  See: `isEditedPostPublishable` (includes `isEditedPostDirty` condition)
  //  See: <PostSavedState /> (`forceIsDirty` prop)
  //  See: <PostPublishButton /> (`forceIsDirty` prop)
  //  See: https://github.com/WordPress/gutenberg/pull/4184


  return !!selectors_getEditedPostAttribute(state, 'title') || !!selectors_getEditedPostAttribute(state, 'excerpt') || !isEditedPostEmpty(state);
}
/**
 * Returns true if the edited post has content. A post has content if it has at
 * least one saveable block or otherwise has a non-empty content property
 * assigned.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether post has content.
 */

function isEditedPostEmpty(state) {
  // While the condition of truthy content string is sufficient to determine
  // emptiness, testing saveable blocks length is a trivial operation. Since
  // this function can be called frequently, optimize for the fast case as a
  // condition of the mere existence of blocks. Note that the value of edited
  // content takes precedent over block content, and must fall through to the
  // default logic.
  var blocks = selectors_getEditorBlocks(state);

  if (blocks.length) {
    // Pierce the abstraction of the serializer in knowing that blocks are
    // joined with with newlines such that even if every individual block
    // produces an empty save result, the serialized content is non-empty.
    if (blocks.length > 1) {
      return false;
    } // There are two conditions under which the optimization cannot be
    // assumed, and a fallthrough to getEditedPostContent must occur:
    //
    // 1. getBlocksForSerialization has special treatment in omitting a
    //    single unmodified default block.
    // 2. Comment delimiters are omitted for a freeform or unregistered
    //    block in its serialization. The freeform block specifically may
    //    produce an empty string in its saved output.
    //
    // For all other content, the single block is assumed to make a post
    // non-empty, if only by virtue of its own comment delimiters.


    var blockName = blocks[0].name;

    if (blockName !== Object(external_this_wp_blocks_["getDefaultBlockName"])() && blockName !== Object(external_this_wp_blocks_["getFreeformContentHandlerName"])()) {
      return false;
    }
  }

  return !getEditedPostContent(state);
}
/**
 * Returns true if the post can be autosaved, or false otherwise.
 *
 * @param {Object} state    Global application state.
 * @param {Object} autosave A raw autosave object from the REST API.
 *
 * @return {boolean} Whether the post can be autosaved.
 */

var selectors_isEditedPostAutosaveable = Object(external_this_wp_data_["createRegistrySelector"])(function (select) {
  return function (state) {
    // A post must contain a title, an excerpt, or non-empty content to be valid for autosaving.
    if (!selectors_isEditedPostSaveable(state)) {
      return false;
    } // A post is not autosavable when there is a post autosave lock.


    if (isPostAutosavingLocked(state)) {
      return false;
    }

    var postType = selectors_getCurrentPostType(state);
    var postId = selectors_getCurrentPostId(state);
    var hasFetchedAutosave = select('core').hasFetchedAutosaves(postType, postId);
    var currentUserId = Object(external_this_lodash_["get"])(select('core').getCurrentUser(), ['id']); // Disable reason - this line causes the side-effect of fetching the autosave
    // via a resolver, moving below the return would result in the autosave never
    // being fetched.
    // eslint-disable-next-line @wordpress/no-unused-vars-before-return

    var autosave = select('core').getAutosave(postType, postId, currentUserId); // If any existing autosaves have not yet been fetched, this function is
    // unable to determine if the post is autosaveable, so return false.

    if (!hasFetchedAutosave) {
      return false;
    } // If we don't already have an autosave, the post is autosaveable.


    if (!autosave) {
      return true;
    } // To avoid an expensive content serialization, use the content dirtiness
    // flag in place of content field comparison against the known autosave.
    // This is not strictly accurate, and relies on a tolerance toward autosave
    // request failures for unnecessary saves.


    if (hasChangedContent(state)) {
      return true;
    } // If the title or excerpt has changed, the post is autosaveable.


    return ['title', 'excerpt'].some(function (field) {
      return getPostRawValue(autosave[field]) !== selectors_getEditedPostAttribute(state, field);
    });
  };
});
/**
 * Returns the current autosave, or null if one is not set (i.e. if the post
 * has yet to be autosaved, or has been saved or published since the last
 * autosave).
 *
 * @deprecated since 5.6. Callers should use the `getAutosave( postType, postId, userId )`
 * 			   selector from the '@wordpress/core-data' package.
 *
 * @param {Object} state Editor state.
 *
 * @return {?Object} Current autosave, if exists.
 */

var getAutosave = Object(external_this_wp_data_["createRegistrySelector"])(function (select) {
  return function (state) {
    external_this_wp_deprecated_default()("`wp.data.select( 'core/editor' ).getAutosave()`", {
      alternative: "`wp.data.select( 'core' ).getAutosave( postType, postId, userId )`",
      plugin: 'Gutenberg'
    });
    var postType = selectors_getCurrentPostType(state);
    var postId = selectors_getCurrentPostId(state);
    var currentUserId = Object(external_this_lodash_["get"])(select('core').getCurrentUser(), ['id']);
    var autosave = select('core').getAutosave(postType, postId, currentUserId);
    return Object(external_this_lodash_["mapValues"])(Object(external_this_lodash_["pick"])(autosave, AUTOSAVE_PROPERTIES), getPostRawValue);
  };
});
/**
 * Returns the true if there is an existing autosave, otherwise false.
 *
 * @deprecated since 5.6. Callers should use the `getAutosave( postType, postId, userId )` selector
 *             from the '@wordpress/core-data' package and check for a truthy value.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether there is an existing autosave.
 */

var hasAutosave = Object(external_this_wp_data_["createRegistrySelector"])(function (select) {
  return function (state) {
    external_this_wp_deprecated_default()("`wp.data.select( 'core/editor' ).hasAutosave()`", {
      alternative: "`!! wp.data.select( 'core' ).getAutosave( postType, postId, userId )`",
      plugin: 'Gutenberg'
    });
    var postType = selectors_getCurrentPostType(state);
    var postId = selectors_getCurrentPostId(state);
    var currentUserId = Object(external_this_lodash_["get"])(select('core').getCurrentUser(), ['id']);
    return !!select('core').getAutosave(postType, postId, currentUserId);
  };
});
/**
 * Return true if the post being edited is being scheduled. Preferring the
 * unsaved status values.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the post has been published.
 */

function selectors_isEditedPostBeingScheduled(state) {
  var date = selectors_getEditedPostAttribute(state, 'date'); // Offset the date by one minute (network latency)

  var checkedDate = new Date(Number(Object(external_this_wp_date_["getDate"])(date)) - ONE_MINUTE_IN_MS);
  return Object(external_this_wp_date_["isInTheFuture"])(checkedDate);
}
/**
 * Returns whether the current post should be considered to have a "floating"
 * date (i.e. that it would publish "Immediately" rather than at a set time).
 *
 * Unlike in the PHP backend, the REST API returns a full date string for posts
 * where the 0000-00-00T00:00:00 placeholder is present in the database. To
 * infer that a post is set to publish "Immediately" we check whether the date
 * and modified date are the same.
 *
 * @param {Object} state Editor state.
 *
 * @return {boolean} Whether the edited post has a floating date value.
 */

function isEditedPostDateFloating(state) {
  var date = selectors_getEditedPostAttribute(state, 'date');
  var modified = selectors_getEditedPostAttribute(state, 'modified');
  var status = selectors_getEditedPostAttribute(state, 'status');

  if (status === 'draft' || status === 'auto-draft' || status === 'pending') {
    return date === modified;
  }

  return false;
}
/**
 * Returns true if the post is currently being saved, or false otherwise.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether post is being saved.
 */

var selectors_isSavingPost = Object(external_this_wp_data_["createRegistrySelector"])(function (select) {
  return function (state) {
    var postType = selectors_getCurrentPostType(state);
    var postId = selectors_getCurrentPostId(state);
    return select('core').isSavingEntityRecord('postType', postType, postId);
  };
});
/**
 * Returns true if a previous post save was attempted successfully, or false
 * otherwise.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the post was saved successfully.
 */

var didPostSaveRequestSucceed = Object(external_this_wp_data_["createRegistrySelector"])(function (select) {
  return function (state) {
    var postType = selectors_getCurrentPostType(state);
    var postId = selectors_getCurrentPostId(state);
    return !select('core').getLastEntitySaveError('postType', postType, postId);
  };
});
/**
 * Returns true if a previous post save was attempted but failed, or false
 * otherwise.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the post save failed.
 */

var didPostSaveRequestFail = Object(external_this_wp_data_["createRegistrySelector"])(function (select) {
  return function (state) {
    var postType = selectors_getCurrentPostType(state);
    var postId = selectors_getCurrentPostId(state);
    return !!select('core').getLastEntitySaveError('postType', postType, postId);
  };
});
/**
 * Returns true if the post is autosaving, or false otherwise.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the post is autosaving.
 */

function selectors_isAutosavingPost(state) {
  if (!selectors_isSavingPost(state)) {
    return false;
  }

  return !!Object(external_this_lodash_["get"])(state.saving, ['options', 'isAutosave']);
}
/**
 * Returns true if the post is being previewed, or false otherwise.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the post is being previewed.
 */

function isPreviewingPost(state) {
  if (!selectors_isSavingPost(state)) {
    return false;
  }

  return !!state.saving.options.isPreview;
}
/**
 * Returns the post preview link
 *
 * @param {Object} state Global application state.
 *
 * @return {string?} Preview Link.
 */

function selectors_getEditedPostPreviewLink(state) {
  if (state.saving.pending || selectors_isSavingPost(state)) {
    return;
  }

  var previewLink = getAutosaveAttribute(state, 'preview_link');

  if (!previewLink) {
    previewLink = selectors_getEditedPostAttribute(state, 'link');

    if (previewLink) {
      previewLink = Object(external_this_wp_url_["addQueryArgs"])(previewLink, {
        preview: true
      });
    }
  }

  var featuredImageId = selectors_getEditedPostAttribute(state, 'featured_media');

  if (previewLink && featuredImageId) {
    return Object(external_this_wp_url_["addQueryArgs"])(previewLink, {
      _thumbnail_id: featuredImageId
    });
  }

  return previewLink;
}
/**
 * Returns a suggested post format for the current post, inferred only if there
 * is a single block within the post and it is of a type known to match a
 * default post format. Returns null if the format cannot be determined.
 *
 * @param {Object} state Global application state.
 *
 * @return {?string} Suggested post format.
 */

function selectors_getSuggestedPostFormat(state) {
  var blocks = selectors_getEditorBlocks(state);
  var name; // If there is only one block in the content of the post grab its name
  // so we can derive a suitable post format from it.

  if (blocks.length === 1) {
    name = blocks[0].name;
  } // If there are two blocks in the content and the last one is a text blocks
  // grab the name of the first one to also suggest a post format from it.


  if (blocks.length === 2) {
    if (blocks[1].name === 'core/paragraph') {
      name = blocks[0].name;
    }
  } // We only convert to default post formats in core.


  switch (name) {
    case 'core/image':
      return 'image';

    case 'core/quote':
    case 'core/pullquote':
      return 'quote';

    case 'core/gallery':
      return 'gallery';

    case 'core/video':
    case 'core-embed/youtube':
    case 'core-embed/vimeo':
      return 'video';

    case 'core/audio':
    case 'core-embed/spotify':
    case 'core-embed/soundcloud':
      return 'audio';
  }

  return null;
}
/**
 * Returns a set of blocks which are to be used in consideration of the post's
 * generated save content.
 *
 * @deprecated since Gutenberg 6.2.0.
 *
 * @param {Object} state Editor state.
 *
 * @return {WPBlock[]} Filtered set of blocks for save.
 */

function getBlocksForSerialization(state) {
  external_this_wp_deprecated_default()('`core/editor` getBlocksForSerialization selector', {
    plugin: 'Gutenberg',
    alternative: 'getEditorBlocks',
    hint: 'Blocks serialization pre-processing occurs at save time'
  });
  var blocks = state.editor.present.blocks.value; // WARNING: Any changes to the logic of this function should be verified
  // against the implementation of isEditedPostEmpty, which bypasses this
  // function for performance' sake, in an assumption of this current logic
  // being irrelevant to the optimized condition of emptiness.
  // A single unmodified default block is assumed to be equivalent to an
  // empty post.

  var isSingleUnmodifiedDefaultBlock = blocks.length === 1 && Object(external_this_wp_blocks_["isUnmodifiedDefaultBlock"])(blocks[0]);

  if (isSingleUnmodifiedDefaultBlock) {
    return [];
  }

  return blocks;
}
/**
 * Returns the content of the post being edited.
 *
 * @param {Object} state Global application state.
 *
 * @return {string} Post content.
 */

var getEditedPostContent = Object(external_this_wp_data_["createRegistrySelector"])(function (select) {
  return function (state) {
    var postId = selectors_getCurrentPostId(state);
    var postType = selectors_getCurrentPostType(state);
    var record = select('core').getEditedEntityRecord('postType', postType, postId);

    if (record) {
      if (typeof record.content === 'function') {
        return record.content(record);
      } else if (record.blocks) {
        return serialize_blocks(record.blocks);
      } else if (record.content) {
        return record.content;
      }
    }

    return '';
  };
});
/**
 * Returns the reusable block with the given ID.
 *
 * @param {Object}        state Global application state.
 * @param {number|string} ref   The reusable block's ID.
 *
 * @return {Object} The reusable block, or null if none exists.
 */

var __experimentalGetReusableBlock = Object(rememo["a" /* default */])(function (state, ref) {
  var block = state.reusableBlocks.data[ref];

  if (!block) {
    return null;
  }

  var isTemporary = isNaN(parseInt(ref));
  return selectors_objectSpread({}, block, {
    id: isTemporary ? ref : +ref,
    isTemporary: isTemporary
  });
}, function (state, ref) {
  return [state.reusableBlocks.data[ref]];
});
/**
 * Returns whether or not the reusable block with the given ID is being saved.
 *
 * @param {Object} state Global application state.
 * @param {string} ref   The reusable block's ID.
 *
 * @return {boolean} Whether or not the reusable block is being saved.
 */

function __experimentalIsSavingReusableBlock(state, ref) {
  return state.reusableBlocks.isSaving[ref] || false;
}
/**
 * Returns true if the reusable block with the given ID is being fetched, or
 * false otherwise.
 *
 * @param {Object} state Global application state.
 * @param {string} ref   The reusable block's ID.
 *
 * @return {boolean} Whether the reusable block is being fetched.
 */

function __experimentalIsFetchingReusableBlock(state, ref) {
  return !!state.reusableBlocks.isFetching[ref];
}
/**
 * Returns an array of all reusable blocks.
 *
 * @param {Object} state Global application state.
 *
 * @return {Array} An array of all reusable blocks.
 */

var selectors_experimentalGetReusableBlocks = Object(rememo["a" /* default */])(function (state) {
  return Object(external_this_lodash_["map"])(state.reusableBlocks.data, function (value, ref) {
    return __experimentalGetReusableBlock(state, ref);
  });
}, function (state) {
  return [state.reusableBlocks.data];
});
/**
 * Returns state object prior to a specified optimist transaction ID, or `null`
 * if the transaction corresponding to the given ID cannot be found.
 *
 * @param {Object} state         Current global application state.
 * @param {Object} transactionId Optimist transaction ID.
 *
 * @return {Object} Global application state prior to transaction.
 */

function getStateBeforeOptimisticTransaction(state, transactionId) {
  var transaction = Object(external_this_lodash_["find"])(state.optimist, function (entry) {
    return entry.beforeState && Object(external_this_lodash_["get"])(entry.action, ['optimist', 'id']) === transactionId;
  });
  return transaction ? transaction.beforeState : null;
}
/**
 * Returns true if the post is being published, or false otherwise.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether post is being published.
 */

function selectors_isPublishingPost(state) {
  if (!selectors_isSavingPost(state)) {
    return false;
  } // Saving is optimistic, so assume that current post would be marked as
  // published if publishing


  if (!selectors_isCurrentPostPublished(state)) {
    return false;
  } // Use post update transaction ID to retrieve the state prior to the
  // optimistic transaction


  var stateBeforeRequest = getStateBeforeOptimisticTransaction(state, POST_UPDATE_TRANSACTION_ID); // Consider as publishing when current post prior to request was not
  // considered published

  return !!stateBeforeRequest && !selectors_isCurrentPostPublished(null, stateBeforeRequest.currentPost);
}
/**
 * Returns whether the permalink is editable or not.
 *
 * @param {Object} state Editor state.
 *
 * @return {boolean} Whether or not the permalink is editable.
 */

function selectors_isPermalinkEditable(state) {
  var permalinkTemplate = selectors_getEditedPostAttribute(state, 'permalink_template');
  return PERMALINK_POSTNAME_REGEX.test(permalinkTemplate);
}
/**
 * Returns the permalink for the post.
 *
 * @param {Object} state Editor state.
 *
 * @return {?string} The permalink, or null if the post is not viewable.
 */

function getPermalink(state) {
  var permalinkParts = selectors_getPermalinkParts(state);

  if (!permalinkParts) {
    return null;
  }

  var prefix = permalinkParts.prefix,
      postName = permalinkParts.postName,
      suffix = permalinkParts.suffix;

  if (selectors_isPermalinkEditable(state)) {
    return prefix + postName + suffix;
  }

  return prefix;
}
/**
 * Returns the permalink for a post, split into it's three parts: the prefix,
 * the postName, and the suffix.
 *
 * @param {Object} state Editor state.
 *
 * @return {Object} An object containing the prefix, postName, and suffix for
 *                  the permalink, or null if the post is not viewable.
 */

function selectors_getPermalinkParts(state) {
  var permalinkTemplate = selectors_getEditedPostAttribute(state, 'permalink_template');

  if (!permalinkTemplate) {
    return null;
  }

  var postName = selectors_getEditedPostAttribute(state, 'slug') || selectors_getEditedPostAttribute(state, 'generated_slug');

  var _permalinkTemplate$sp = permalinkTemplate.split(PERMALINK_POSTNAME_REGEX),
      _permalinkTemplate$sp2 = Object(slicedToArray["a" /* default */])(_permalinkTemplate$sp, 2),
      prefix = _permalinkTemplate$sp2[0],
      suffix = _permalinkTemplate$sp2[1];

  return {
    prefix: prefix,
    postName: postName,
    suffix: suffix
  };
}
/**
 * Returns true if an optimistic transaction is pending commit, for which the
 * before state satisfies the given predicate function.
 *
 * @param {Object}   state     Editor state.
 * @param {Function} predicate Function given state, returning true if match.
 *
 * @return {boolean} Whether predicate matches for some history.
 */

function inSomeHistory(state, predicate) {
  var optimist = state.optimist; // In recursion, optimist state won't exist. Assume exhausted options.

  if (!optimist) {
    return false;
  }

  return optimist.some(function (_ref) {
    var beforeState = _ref.beforeState;
    return beforeState && predicate(beforeState);
  });
}
/**
 * Returns whether the post is locked.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Is locked.
 */

function isPostLocked(state) {
  return state.postLock.isLocked;
}
/**
 * Returns whether post saving is locked.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Is locked.
 */

function selectors_isPostSavingLocked(state) {
  return Object.keys(state.postSavingLock).length > 0;
}
/**
 * Returns whether post autosaving is locked.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Is locked.
 */

function isPostAutosavingLocked(state) {
  return Object.keys(state.postAutosavingLock).length > 0;
}
/**
 * Returns whether the edition of the post has been taken over.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Is post lock takeover.
 */

function isPostLockTakeover(state) {
  return state.postLock.isTakeover;
}
/**
 * Returns details about the post lock user.
 *
 * @param {Object} state Global application state.
 *
 * @return {Object} A user object.
 */

function getPostLockUser(state) {
  return state.postLock.user;
}
/**
 * Returns the active post lock.
 *
 * @param {Object} state Global application state.
 *
 * @return {Object} The lock object.
 */

function getActivePostLock(state) {
  return state.postLock.activePostLock;
}
/**
 * Returns whether or not the user has the unfiltered_html capability.
 *
 * @param {Object} state Editor state.
 *
 * @return {boolean} Whether the user can or can't post unfiltered HTML.
 */

function selectors_canUserUseUnfilteredHTML(state) {
  return Object(external_this_lodash_["has"])(selectors_getCurrentPost(state), ['_links', 'wp:action-unfiltered-html']);
}
/**
 * Returns whether the pre-publish panel should be shown
 * or skipped when the user clicks the "publish" button.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the pre-publish panel should be shown or not.
 */

function selectors_isPublishSidebarEnabled(state) {
  if (state.preferences.hasOwnProperty('isPublishSidebarEnabled')) {
    return state.preferences.isPublishSidebarEnabled;
  }

  return PREFERENCES_DEFAULTS.isPublishSidebarEnabled;
}
/**
 * Return the current block list.
 *
 * @param {Object} state
 * @return {Array} Block list.
 */

function selectors_getEditorBlocks(state) {
  return selectors_getEditedPostAttribute(state, 'blocks') || EMPTY_ARRAY;
}
/**
 * A block selection object.
 *
 * @typedef {Object} WPBlockSelection
 *
 * @property {string} clientId     A block client ID.
 * @property {string} attributeKey A block attribute key.
 * @property {number} offset       An attribute value offset, based on the rich
 *                                 text value. See `wp.richText.create`.
 */

/**
 * Returns the current selection start.
 *
 * @param {Object} state
 * @return {WPBlockSelection} The selection start.
 */

function selectors_getEditorSelectionStart(state) {
  return selectors_getEditedPostAttribute(state, 'selectionStart');
}
/**
 * Returns the current selection end.
 *
 * @param {Object} state
 * @return {WPBlockSelection} The selection end.
 */

function selectors_getEditorSelectionEnd(state) {
  return selectors_getEditedPostAttribute(state, 'selectionEnd');
}
/**
 * Is the editor ready
 *
 * @param {Object} state
 * @return {boolean} is Ready.
 */

function __unstableIsEditorReady(state) {
  return state.isReady;
}
/**
 * Returns the post editor settings.
 *
 * @param {Object} state Editor state.
 *
 * @return {Object} The editor settings object.
 */

function selectors_getEditorSettings(state) {
  return state.editorSettings;
}
/*
 * Backward compatibility
 */

function getBlockEditorSelector(name) {
  return Object(external_this_wp_data_["createRegistrySelector"])(function (select) {
    return function (state) {
      var _select;

      external_this_wp_deprecated_default()("`wp.data.select( 'core/editor' )." + name + '`', {
        alternative: "`wp.data.select( 'core/block-editor' )." + name + '`'
      });

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return (_select = select('core/block-editor'))[name].apply(_select, args);
    };
  });
}
/**
 * @see getBlockName in core/block-editor store.
 */


var selectors_getBlockName = getBlockEditorSelector('getBlockName');
/**
 * @see isBlockValid in core/block-editor store.
 */

var isBlockValid = getBlockEditorSelector('isBlockValid');
/**
 * @see getBlockAttributes in core/block-editor store.
 */

var getBlockAttributes = getBlockEditorSelector('getBlockAttributes');
/**
 * @see getBlock in core/block-editor store.
 */

var selectors_getBlock = getBlockEditorSelector('getBlock');
/**
 * @see getBlocks in core/block-editor store.
 */

var selectors_getBlocks = getBlockEditorSelector('getBlocks');
/**
 * @see __unstableGetBlockWithoutInnerBlocks in core/block-editor store.
 */

var __unstableGetBlockWithoutInnerBlocks = getBlockEditorSelector('__unstableGetBlockWithoutInnerBlocks');
/**
 * @see getClientIdsOfDescendants in core/block-editor store.
 */

var getClientIdsOfDescendants = getBlockEditorSelector('getClientIdsOfDescendants');
/**
 * @see getClientIdsWithDescendants in core/block-editor store.
 */

var getClientIdsWithDescendants = getBlockEditorSelector('getClientIdsWithDescendants');
/**
 * @see getGlobalBlockCount in core/block-editor store.
 */

var getGlobalBlockCount = getBlockEditorSelector('getGlobalBlockCount');
/**
 * @see getBlocksByClientId in core/block-editor store.
 */

var selectors_getBlocksByClientId = getBlockEditorSelector('getBlocksByClientId');
/**
 * @see getBlockCount in core/block-editor store.
 */

var getBlockCount = getBlockEditorSelector('getBlockCount');
/**
 * @see getBlockSelectionStart in core/block-editor store.
 */

var getBlockSelectionStart = getBlockEditorSelector('getBlockSelectionStart');
/**
 * @see getBlockSelectionEnd in core/block-editor store.
 */

var getBlockSelectionEnd = getBlockEditorSelector('getBlockSelectionEnd');
/**
 * @see getSelectedBlockCount in core/block-editor store.
 */

var getSelectedBlockCount = getBlockEditorSelector('getSelectedBlockCount');
/**
 * @see hasSelectedBlock in core/block-editor store.
 */

var hasSelectedBlock = getBlockEditorSelector('hasSelectedBlock');
/**
 * @see getSelectedBlockClientId in core/block-editor store.
 */

var selectors_getSelectedBlockClientId = getBlockEditorSelector('getSelectedBlockClientId');
/**
 * @see getSelectedBlock in core/block-editor store.
 */

var getSelectedBlock = getBlockEditorSelector('getSelectedBlock');
/**
 * @see getBlockRootClientId in core/block-editor store.
 */

var getBlockRootClientId = getBlockEditorSelector('getBlockRootClientId');
/**
 * @see getBlockHierarchyRootClientId in core/block-editor store.
 */

var getBlockHierarchyRootClientId = getBlockEditorSelector('getBlockHierarchyRootClientId');
/**
 * @see getAdjacentBlockClientId in core/block-editor store.
 */

var getAdjacentBlockClientId = getBlockEditorSelector('getAdjacentBlockClientId');
/**
 * @see getPreviousBlockClientId in core/block-editor store.
 */

var getPreviousBlockClientId = getBlockEditorSelector('getPreviousBlockClientId');
/**
 * @see getNextBlockClientId in core/block-editor store.
 */

var getNextBlockClientId = getBlockEditorSelector('getNextBlockClientId');
/**
 * @see getSelectedBlocksInitialCaretPosition in core/block-editor store.
 */

var getSelectedBlocksInitialCaretPosition = getBlockEditorSelector('getSelectedBlocksInitialCaretPosition');
/**
 * @see getMultiSelectedBlockClientIds in core/block-editor store.
 */

var getMultiSelectedBlockClientIds = getBlockEditorSelector('getMultiSelectedBlockClientIds');
/**
 * @see getMultiSelectedBlocks in core/block-editor store.
 */

var getMultiSelectedBlocks = getBlockEditorSelector('getMultiSelectedBlocks');
/**
 * @see getFirstMultiSelectedBlockClientId in core/block-editor store.
 */

var getFirstMultiSelectedBlockClientId = getBlockEditorSelector('getFirstMultiSelectedBlockClientId');
/**
 * @see getLastMultiSelectedBlockClientId in core/block-editor store.
 */

var getLastMultiSelectedBlockClientId = getBlockEditorSelector('getLastMultiSelectedBlockClientId');
/**
 * @see isFirstMultiSelectedBlock in core/block-editor store.
 */

var isFirstMultiSelectedBlock = getBlockEditorSelector('isFirstMultiSelectedBlock');
/**
 * @see isBlockMultiSelected in core/block-editor store.
 */

var isBlockMultiSelected = getBlockEditorSelector('isBlockMultiSelected');
/**
 * @see isAncestorMultiSelected in core/block-editor store.
 */

var isAncestorMultiSelected = getBlockEditorSelector('isAncestorMultiSelected');
/**
 * @see getMultiSelectedBlocksStartClientId in core/block-editor store.
 */

var getMultiSelectedBlocksStartClientId = getBlockEditorSelector('getMultiSelectedBlocksStartClientId');
/**
 * @see getMultiSelectedBlocksEndClientId in core/block-editor store.
 */

var getMultiSelectedBlocksEndClientId = getBlockEditorSelector('getMultiSelectedBlocksEndClientId');
/**
 * @see getBlockOrder in core/block-editor store.
 */

var getBlockOrder = getBlockEditorSelector('getBlockOrder');
/**
 * @see getBlockIndex in core/block-editor store.
 */

var getBlockIndex = getBlockEditorSelector('getBlockIndex');
/**
 * @see isBlockSelected in core/block-editor store.
 */

var isBlockSelected = getBlockEditorSelector('isBlockSelected');
/**
 * @see hasSelectedInnerBlock in core/block-editor store.
 */

var hasSelectedInnerBlock = getBlockEditorSelector('hasSelectedInnerBlock');
/**
 * @see isBlockWithinSelection in core/block-editor store.
 */

var isBlockWithinSelection = getBlockEditorSelector('isBlockWithinSelection');
/**
 * @see hasMultiSelection in core/block-editor store.
 */

var hasMultiSelection = getBlockEditorSelector('hasMultiSelection');
/**
 * @see isMultiSelecting in core/block-editor store.
 */

var isMultiSelecting = getBlockEditorSelector('isMultiSelecting');
/**
 * @see isSelectionEnabled in core/block-editor store.
 */

var isSelectionEnabled = getBlockEditorSelector('isSelectionEnabled');
/**
 * @see getBlockMode in core/block-editor store.
 */

var getBlockMode = getBlockEditorSelector('getBlockMode');
/**
 * @see isTyping in core/block-editor store.
 */

var isTyping = getBlockEditorSelector('isTyping');
/**
 * @see isCaretWithinFormattedText in core/block-editor store.
 */

var isCaretWithinFormattedText = getBlockEditorSelector('isCaretWithinFormattedText');
/**
 * @see getBlockInsertionPoint in core/block-editor store.
 */

var getBlockInsertionPoint = getBlockEditorSelector('getBlockInsertionPoint');
/**
 * @see isBlockInsertionPointVisible in core/block-editor store.
 */

var isBlockInsertionPointVisible = getBlockEditorSelector('isBlockInsertionPointVisible');
/**
 * @see isValidTemplate in core/block-editor store.
 */

var isValidTemplate = getBlockEditorSelector('isValidTemplate');
/**
 * @see getTemplate in core/block-editor store.
 */

var getTemplate = getBlockEditorSelector('getTemplate');
/**
 * @see getTemplateLock in core/block-editor store.
 */

var getTemplateLock = getBlockEditorSelector('getTemplateLock');
/**
 * @see canInsertBlockType in core/block-editor store.
 */

var selectors_canInsertBlockType = getBlockEditorSelector('canInsertBlockType');
/**
 * @see getInserterItems in core/block-editor store.
 */

var selectors_getInserterItems = getBlockEditorSelector('getInserterItems');
/**
 * @see hasInserterItems in core/block-editor store.
 */

var hasInserterItems = getBlockEditorSelector('hasInserterItems');
/**
 * @see getBlockListSettings in core/block-editor store.
 */

var getBlockListSettings = getBlockEditorSelector('getBlockListSettings');

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/store/effects/reusable-blocks.js




function reusable_blocks_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function reusable_blocks_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { reusable_blocks_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { reusable_blocks_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */



 // TODO: Ideally this would be the only dispatch in scope. This requires either
// refactoring editor actions to yielded controls, or replacing direct dispatch
// on the editor store with action creators (e.g. `REMOVE_REUSABLE_BLOCK`).


/**
 * Internal dependencies
 */



/**
 * Module Constants
 */

var REUSABLE_BLOCK_NOTICE_ID = 'REUSABLE_BLOCK_NOTICE_ID';
/**
 * Fetch Reusable blocks Effect Handler.
 *
 * @param {Object} action  action object.
 * @param {Object} store   Redux Store.
 */

var fetchReusableBlocks =
/*#__PURE__*/
function () {
  var _ref = Object(asyncToGenerator["a" /* default */])(
  /*#__PURE__*/
  external_this_regeneratorRuntime_default.a.mark(function _callee(action, store) {
    var id, dispatch, postType, posts, results;
    return external_this_regeneratorRuntime_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = action.id;
            dispatch = store.dispatch; // TODO: these are potentially undefined, this fix is in place
            // until there is a filter to not use reusable blocks if undefined

            _context.next = 4;
            return external_this_wp_apiFetch_default()({
              path: '/wp/v2/types/wp_block'
            });

          case 4:
            postType = _context.sent;

            if (postType) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return");

          case 7:
            _context.prev = 7;

            if (!id) {
              _context.next = 15;
              break;
            }

            _context.next = 11;
            return external_this_wp_apiFetch_default()({
              path: "/wp/v2/".concat(postType.rest_base, "/").concat(id)
            });

          case 11:
            _context.t0 = _context.sent;
            posts = [_context.t0];
            _context.next = 18;
            break;

          case 15:
            _context.next = 17;
            return external_this_wp_apiFetch_default()({
              path: "/wp/v2/".concat(postType.rest_base, "?per_page=-1")
            });

          case 17:
            posts = _context.sent;

          case 18:
            results = Object(external_this_lodash_["compact"])(Object(external_this_lodash_["map"])(posts, function (post) {
              if (post.status !== 'publish' || post.content.protected) {
                return null;
              }

              return reusable_blocks_objectSpread({}, post, {
                content: post.content.raw,
                title: post.title.raw
              });
            }));

            if (results.length) {
              dispatch(__experimentalReceiveReusableBlocks(results));
            }

            dispatch({
              type: 'FETCH_REUSABLE_BLOCKS_SUCCESS',
              id: id
            });
            _context.next = 26;
            break;

          case 23:
            _context.prev = 23;
            _context.t1 = _context["catch"](7);
            dispatch({
              type: 'FETCH_REUSABLE_BLOCKS_FAILURE',
              id: id,
              error: _context.t1
            });

          case 26:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[7, 23]]);
  }));

  return function fetchReusableBlocks(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * Save Reusable blocks Effect Handler.
 *
 * @param {Object} action  action object.
 * @param {Object} store   Redux Store.
 */

var saveReusableBlocks =
/*#__PURE__*/
function () {
  var _ref2 = Object(asyncToGenerator["a" /* default */])(
  /*#__PURE__*/
  external_this_regeneratorRuntime_default.a.mark(function _callee2(action, store) {
    var postType, id, dispatch, state, _getReusableBlock, title, content, isTemporary, data, path, method, updatedReusableBlock, message;

    return external_this_regeneratorRuntime_default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return external_this_wp_apiFetch_default()({
              path: '/wp/v2/types/wp_block'
            });

          case 2:
            postType = _context2.sent;

            if (postType) {
              _context2.next = 5;
              break;
            }

            return _context2.abrupt("return");

          case 5:
            id = action.id;
            dispatch = store.dispatch;
            state = store.getState();
            _getReusableBlock = __experimentalGetReusableBlock(state, id), title = _getReusableBlock.title, content = _getReusableBlock.content, isTemporary = _getReusableBlock.isTemporary;
            data = isTemporary ? {
              title: title,
              content: content,
              status: 'publish'
            } : {
              id: id,
              title: title,
              content: content,
              status: 'publish'
            };
            path = isTemporary ? "/wp/v2/".concat(postType.rest_base) : "/wp/v2/".concat(postType.rest_base, "/").concat(id);
            method = isTemporary ? 'POST' : 'PUT';
            _context2.prev = 12;
            _context2.next = 15;
            return external_this_wp_apiFetch_default()({
              path: path,
              data: data,
              method: method
            });

          case 15:
            updatedReusableBlock = _context2.sent;
            dispatch({
              type: 'SAVE_REUSABLE_BLOCK_SUCCESS',
              updatedId: updatedReusableBlock.id,
              id: id
            });
            message = isTemporary ? Object(external_this_wp_i18n_["__"])('Block created.') : Object(external_this_wp_i18n_["__"])('Block updated.');
            Object(external_this_wp_data_["dispatch"])('core/notices').createSuccessNotice(message, {
              id: REUSABLE_BLOCK_NOTICE_ID,
              type: 'snackbar'
            });

            Object(external_this_wp_data_["dispatch"])('core/block-editor').__unstableSaveReusableBlock(id, updatedReusableBlock.id);

            _context2.next = 26;
            break;

          case 22:
            _context2.prev = 22;
            _context2.t0 = _context2["catch"](12);
            dispatch({
              type: 'SAVE_REUSABLE_BLOCK_FAILURE',
              id: id
            });
            Object(external_this_wp_data_["dispatch"])('core/notices').createErrorNotice(_context2.t0.message, {
              id: REUSABLE_BLOCK_NOTICE_ID
            });

          case 26:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[12, 22]]);
  }));

  return function saveReusableBlocks(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
/**
 * Delete Reusable blocks Effect Handler.
 *
 * @param {Object} action  action object.
 * @param {Object} store   Redux Store.
 */

var deleteReusableBlocks =
/*#__PURE__*/
function () {
  var _ref3 = Object(asyncToGenerator["a" /* default */])(
  /*#__PURE__*/
  external_this_regeneratorRuntime_default.a.mark(function _callee3(action, store) {
    var postType, id, getState, dispatch, reusableBlock, allBlocks, associatedBlocks, associatedBlockClientIds, transactionId, message;
    return external_this_regeneratorRuntime_default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return external_this_wp_apiFetch_default()({
              path: '/wp/v2/types/wp_block'
            });

          case 2:
            postType = _context3.sent;

            if (postType) {
              _context3.next = 5;
              break;
            }

            return _context3.abrupt("return");

          case 5:
            id = action.id;
            getState = store.getState, dispatch = store.dispatch; // Don't allow a reusable block with a temporary ID to be deleted

            reusableBlock = __experimentalGetReusableBlock(getState(), id);

            if (!(!reusableBlock || reusableBlock.isTemporary)) {
              _context3.next = 10;
              break;
            }

            return _context3.abrupt("return");

          case 10:
            // Remove any other blocks that reference this reusable block
            allBlocks = Object(external_this_wp_data_["select"])('core/block-editor').getBlocks();
            associatedBlocks = allBlocks.filter(function (block) {
              return Object(external_this_wp_blocks_["isReusableBlock"])(block) && block.attributes.ref === id;
            });
            associatedBlockClientIds = associatedBlocks.map(function (block) {
              return block.clientId;
            });
            transactionId = Object(external_this_lodash_["uniqueId"])();
            dispatch({
              type: 'REMOVE_REUSABLE_BLOCK',
              id: id,
              optimist: {
                type: redux_optimist["BEGIN"],
                id: transactionId
              }
            }); // Remove the parsed block.

            if (associatedBlockClientIds.length) {
              Object(external_this_wp_data_["dispatch"])('core/block-editor').removeBlocks(associatedBlockClientIds);
            }

            _context3.prev = 16;
            _context3.next = 19;
            return external_this_wp_apiFetch_default()({
              path: "/wp/v2/".concat(postType.rest_base, "/").concat(id),
              method: 'DELETE'
            });

          case 19:
            dispatch({
              type: 'DELETE_REUSABLE_BLOCK_SUCCESS',
              id: id,
              optimist: {
                type: redux_optimist["COMMIT"],
                id: transactionId
              }
            });
            message = Object(external_this_wp_i18n_["__"])('Block deleted.');
            Object(external_this_wp_data_["dispatch"])('core/notices').createSuccessNotice(message, {
              id: REUSABLE_BLOCK_NOTICE_ID,
              type: 'snackbar'
            });
            _context3.next = 28;
            break;

          case 24:
            _context3.prev = 24;
            _context3.t0 = _context3["catch"](16);
            dispatch({
              type: 'DELETE_REUSABLE_BLOCK_FAILURE',
              id: id,
              optimist: {
                type: redux_optimist["REVERT"],
                id: transactionId
              }
            });
            Object(external_this_wp_data_["dispatch"])('core/notices').createErrorNotice(_context3.t0.message, {
              id: REUSABLE_BLOCK_NOTICE_ID
            });

          case 28:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[16, 24]]);
  }));

  return function deleteReusableBlocks(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
/**
 * Convert a reusable block to a static block effect handler
 *
 * @param {Object} action  action object.
 * @param {Object} store   Redux Store.
 */

var reusable_blocks_convertBlockToStatic = function convertBlockToStatic(action, store) {
  var state = store.getState();
  var oldBlock = Object(external_this_wp_data_["select"])('core/block-editor').getBlock(action.clientId);
  var reusableBlock = __experimentalGetReusableBlock(state, oldBlock.attributes.ref);
  var newBlocks = Object(external_this_wp_blocks_["parse"])(reusableBlock.content);
  Object(external_this_wp_data_["dispatch"])('core/block-editor').replaceBlocks(oldBlock.clientId, newBlocks);
};
/**
 * Convert a static block to a reusable block effect handler
 *
 * @param {Object} action  action object.
 * @param {Object} store   Redux Store.
 */

var reusable_blocks_convertBlockToReusable = function convertBlockToReusable(action, store) {
  var dispatch = store.dispatch;
  var reusableBlock = {
    id: Object(external_this_lodash_["uniqueId"])('reusable'),
    title: Object(external_this_wp_i18n_["__"])('Untitled Reusable Block'),
    content: Object(external_this_wp_blocks_["serialize"])(Object(external_this_wp_data_["select"])('core/block-editor').getBlocksByClientId(action.clientIds))
  };
  dispatch(__experimentalReceiveReusableBlocks([reusableBlock]));
  dispatch(__experimentalSaveReusableBlock(reusableBlock.id));
  Object(external_this_wp_data_["dispatch"])('core/block-editor').replaceBlocks(action.clientIds, Object(external_this_wp_blocks_["createBlock"])('core/block', {
    ref: reusableBlock.id
  }));
};

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/store/effects.js
/**
 * Internal dependencies
 */

/* harmony default export */ var effects = ({
  FETCH_REUSABLE_BLOCKS: function FETCH_REUSABLE_BLOCKS(action, store) {
    fetchReusableBlocks(action, store);
  },
  SAVE_REUSABLE_BLOCK: function SAVE_REUSABLE_BLOCK(action, store) {
    saveReusableBlocks(action, store);
  },
  DELETE_REUSABLE_BLOCK: function DELETE_REUSABLE_BLOCK(action, store) {
    deleteReusableBlocks(action, store);
  },
  CONVERT_BLOCK_TO_STATIC: reusable_blocks_convertBlockToStatic,
  CONVERT_BLOCK_TO_REUSABLE: reusable_blocks_convertBlockToReusable
});

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/store/middlewares.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


/**
 * Applies the custom middlewares used specifically in the editor module.
 *
 * @param {Object} store Store Object.
 *
 * @return {Object} Update Store Object.
 */

function applyMiddlewares(store) {
  var enhancedDispatch = function enhancedDispatch() {
    throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
  };

  var middlewareAPI = {
    getState: store.getState,
    dispatch: function dispatch() {
      return enhancedDispatch.apply(void 0, arguments);
    }
  };
  enhancedDispatch = refx_default()(effects)(middlewareAPI)(store.dispatch);
  store.dispatch = enhancedDispatch;
  return store;
}

/* harmony default export */ var middlewares = (applyMiddlewares);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/store/controls.js
/**
 * WordPress dependencies
 */

/**
 * Returns a control descriptor signalling to subscribe to the registry and
 * resolve the control promise only when the next state change occurs.
 *
 * @return {Object} Control descriptor.
 */

function awaitNextStateChange() {
  return {
    type: 'AWAIT_NEXT_STATE_CHANGE'
  };
}
/**
 * Returns a control descriptor signalling to resolve with the current data
 * registry.
 *
 * @return {Object} Control descriptor.
 */

function getRegistry() {
  return {
    type: 'GET_REGISTRY'
  };
}
/**
 * Function returning a sessionStorage key to set or retrieve a given post's
 * automatic session backup.
 *
 * Keys are crucially prefixed with 'wp-autosave-' so that wp-login.php's
 * `loggedout` handler can clear sessionStorage of any user-private content.
 *
 * @see https://github.com/WordPress/wordpress-develop/blob/6dad32d2aed47e6c0cf2aee8410645f6d7aba6bd/src/wp-login.php#L103
 *
 * @param {string} postId  Post ID.
 * @return {string}        sessionStorage key
 */

function postKey(postId) {
  return "wp-autosave-block-editor-post-".concat(postId);
}

function localAutosaveGet(postId) {
  return window.sessionStorage.getItem(postKey(postId));
}
function localAutosaveSet(postId, title, content, excerpt) {
  window.sessionStorage.setItem(postKey(postId), JSON.stringify({
    post_title: title,
    content: content,
    excerpt: excerpt
  }));
}
function localAutosaveClear(postId) {
  window.sessionStorage.removeItem(postKey(postId));
}
var controls = {
  AWAIT_NEXT_STATE_CHANGE: Object(external_this_wp_data_["createRegistryControl"])(function (registry) {
    return function () {
      return new Promise(function (resolve) {
        var unsubscribe = registry.subscribe(function () {
          unsubscribe();
          resolve();
        });
      });
    };
  }),
  GET_REGISTRY: Object(external_this_wp_data_["createRegistryControl"])(function (registry) {
    return function () {
      return registry;
    };
  }),
  LOCAL_AUTOSAVE_SET: function LOCAL_AUTOSAVE_SET(_ref) {
    var postId = _ref.postId,
        title = _ref.title,
        content = _ref.content,
        excerpt = _ref.excerpt;
    localAutosaveSet(postId, title, content, excerpt);
  }
};
/* harmony default export */ var store_controls = (controls);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/store/index.js


function store_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function store_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { store_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { store_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */







/**
 * Post editor data store configuration.
 *
 * @see https://github.com/WordPress/gutenberg/blob/master/packages/data/README.md#registerStore
 *
 * @type {Object}
 */

var storeConfig = {
  reducer: reducer,
  selectors: selectors_namespaceObject,
  actions: actions_namespaceObject,
  controls: store_objectSpread({}, external_this_wp_dataControls_["controls"], {}, store_controls)
};
var store_store = Object(external_this_wp_data_["registerStore"])(STORE_KEY, store_objectSpread({}, storeConfig, {
  persist: ['preferences']
}));
middlewares(store_store);
/* harmony default export */ var build_module_store = (store_store);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(19);

// EXTERNAL MODULE: external {"this":["wp","element"]}
var external_this_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: external {"this":["wp","compose"]}
var external_this_wp_compose_ = __webpack_require__(8);

// EXTERNAL MODULE: external {"this":["wp","hooks"]}
var external_this_wp_hooks_ = __webpack_require__(32);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/hooks/custom-sources-backwards-compatibility.js






function custom_sources_backwards_compatibility_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function custom_sources_backwards_compatibility_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { custom_sources_backwards_compatibility_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { custom_sources_backwards_compatibility_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






/** @typedef {import('@wordpress/compose').WPHigherOrderComponent} WPHigherOrderComponent */

/** @typedef {import('@wordpress/blocks').WPBlockSettings} WPBlockSettings */

/**
 * Object whose keys are the names of block attributes, where each value
 * represents the meta key to which the block attribute is intended to save.
 *
 * @see https://developer.wordpress.org/reference/functions/register_meta/
 *
 * @typedef {Object<string,string>} WPMetaAttributeMapping
 */

/**
 * Given a mapping of attribute names (meta source attributes) to their
 * associated meta key, returns a higher order component that overrides its
 * `attributes` and `setAttributes` props to sync any changes with the edited
 * post's meta keys.
 *
 * @param {WPMetaAttributeMapping} metaAttributes Meta attribute mapping.
 *
 * @return {WPHigherOrderComponent} Higher-order component.
 */

var custom_sources_backwards_compatibility_createWithMetaAttributeSource = function createWithMetaAttributeSource(metaAttributes) {
  return Object(external_this_wp_compose_["createHigherOrderComponent"])(function (BlockEdit) {
    return function (_ref) {
      var attributes = _ref.attributes,
          _setAttributes = _ref.setAttributes,
          props = Object(objectWithoutProperties["a" /* default */])(_ref, ["attributes", "setAttributes"]);

      var postType = Object(external_this_wp_data_["useSelect"])(function (select) {
        return select('core/editor').getCurrentPostType();
      }, []);

      var _useEntityProp = Object(external_this_wp_coreData_["useEntityProp"])('postType', postType, 'meta'),
          _useEntityProp2 = Object(slicedToArray["a" /* default */])(_useEntityProp, 2),
          meta = _useEntityProp2[0],
          setMeta = _useEntityProp2[1];

      var mergedAttributes = Object(external_this_wp_element_["useMemo"])(function () {
        return custom_sources_backwards_compatibility_objectSpread({}, attributes, {}, Object(external_this_lodash_["mapValues"])(metaAttributes, function (metaKey) {
          return meta[metaKey];
        }));
      }, [attributes, meta]);
      return Object(external_this_wp_element_["createElement"])(BlockEdit, Object(esm_extends["a" /* default */])({
        attributes: mergedAttributes,
        setAttributes: function setAttributes(nextAttributes) {
          var nextMeta = Object(external_this_lodash_["mapKeys"])( // Filter to intersection of keys between the updated
          // attributes and those with an associated meta key.
          Object(external_this_lodash_["pickBy"])(nextAttributes, function (value, key) {
            return metaAttributes[key];
          }), // Rename the keys to the expected meta key name.
          function (value, attributeKey) {
            return metaAttributes[attributeKey];
          });

          if (!Object(external_this_lodash_["isEmpty"])(nextMeta)) {
            setMeta(nextMeta);
          }

          _setAttributes(nextAttributes);
        }
      }, props));
    };
  }, 'withMetaAttributeSource');
};
/**
 * Filters a registered block's settings to enhance a block's `edit` component
 * to upgrade meta-sourced attributes to use the post's meta entity property.
 *
 * @param {WPBlockSettings} settings Registered block settings.
 *
 * @return {WPBlockSettings} Filtered block settings.
 */


function shimAttributeSource(settings) {
  /** @type {WPMetaAttributeMapping} */
  var metaAttributes = Object(external_this_lodash_["mapValues"])(Object(external_this_lodash_["pickBy"])(settings.attributes, {
    source: 'meta'
  }), 'meta');

  if (!Object(external_this_lodash_["isEmpty"])(metaAttributes)) {
    settings.edit = custom_sources_backwards_compatibility_createWithMetaAttributeSource(metaAttributes)(settings.edit);
  }

  return settings;
}

Object(external_this_wp_hooks_["addFilter"])('blocks.registerBlockType', 'core/editor/custom-sources-backwards-compatibility/shim-attribute-source', shimAttributeSource); // The above filter will only capture blocks registered after the filter was
// added. There may already be blocks registered by this point, and those must
// be updated to apply the shim.
//
// The following implementation achieves this, albeit with a couple caveats:
// - Only blocks registered on the global store will be modified.
// - The block settings are directly mutated, since there is currently no
//   mechanism to update an existing block registration. This is the reason for
//   `getBlockType` separate from `getBlockTypes`, since the latter returns a
//   _copy_ of the block registration (i.e. the mutation would not affect the
//   actual registered block settings).
//
// `getBlockTypes` or `getBlockType` implementation could change in the future
// in regards to creating settings clones, but the corresponding end-to-end
// tests for meta blocks should cover against any potential regressions.
//
// In the future, we could support updating block settings, at which point this
// implementation could use that mechanism instead.

Object(external_this_wp_data_["select"])('core/blocks').getBlockTypes().map(function (_ref2) {
  var name = _ref2.name;
  return Object(external_this_wp_data_["select"])('core/blocks').getBlockType(name);
}).forEach(shimAttributeSource);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/autocompleters/block.js



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/** @typedef {import('@wordpress/block-editor').WPEditorInserterItem} WPEditorInserterItem */

/** @typedef {import('@wordpress/components').WPCompleter} WPCompleter */

/**
 * Returns the client ID of the parent where a newly inserted block would be
 * placed.
 *
 * @return {string} Client ID of the parent where a newly inserted block would
 *                  be placed.
 */

function defaultGetBlockInsertionParentClientId() {
  return Object(external_this_wp_data_["select"])('core/block-editor').getBlockInsertionPoint().rootClientId;
}
/**
 * Returns the inserter items for the specified parent block.
 *
 * @param {string} rootClientId Client ID of the block for which to retrieve
 *                              inserter items.
 *
 * @return {Array<WPEditorInserterItem>} The inserter items for the specified
 *                                      parent.
 */


function defaultGetInserterItems(rootClientId) {
  return Object(external_this_wp_data_["select"])('core/block-editor').getInserterItems(rootClientId);
}
/**
 * Returns the name of the currently selected block.
 *
 * @return {string?} The name of the currently selected block or `null` if no
 *                   block is selected.
 */


function defaultGetSelectedBlockName() {
  var _select = Object(external_this_wp_data_["select"])('core/block-editor'),
      getSelectedBlockClientId = _select.getSelectedBlockClientId,
      getBlockName = _select.getBlockName;

  var selectedBlockClientId = getSelectedBlockClientId();
  return selectedBlockClientId ? getBlockName(selectedBlockClientId) : null;
}
/**
 * Triggers a fetch of reusable blocks, once.
 *
 * TODO: Reusable blocks fetching should be reimplemented as a core-data entity
 * resolver, not relying on `core/editor` (see #7119). The implementation here
 * is imperfect in that the options result will not await the completion of the
 * fetch request and thus will not include any reusable blocks. This has always
 * been true, but relied upon the fact the user would be delayed in typing an
 * autocompleter search query. Once implemented using resolvers, the status of
 * this request could be subscribed to as part of a promised return value using
 * the result of `hasFinishedResolution`. There is currently reliable way to
 * determine that a reusable blocks fetch request has completed.
 *
 * @return {Promise} Promise resolving once reusable blocks fetched.
 */


var block_fetchReusableBlocks = Object(external_this_lodash_["once"])(function () {
  Object(external_this_wp_data_["dispatch"])('core/editor').__experimentalFetchReusableBlocks();
});
/**
 * Creates a blocks repeater for replacing the current block with a selected block type.
 *
 * @return {WPCompleter} A blocks completer.
 */

function createBlockCompleter() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$getBlockInsertio = _ref.getBlockInsertionParentClientId,
      getBlockInsertionParentClientId = _ref$getBlockInsertio === void 0 ? defaultGetBlockInsertionParentClientId : _ref$getBlockInsertio,
      _ref$getInserterItems = _ref.getInserterItems,
      getInserterItems = _ref$getInserterItems === void 0 ? defaultGetInserterItems : _ref$getInserterItems,
      _ref$getSelectedBlock = _ref.getSelectedBlockName,
      getSelectedBlockName = _ref$getSelectedBlock === void 0 ? defaultGetSelectedBlockName : _ref$getSelectedBlock;

  return {
    name: 'blocks',
    className: 'editor-autocompleters__block',
    triggerPrefix: '/',
    options: function options() {
      block_fetchReusableBlocks();
      var selectedBlockName = getSelectedBlockName();
      return getInserterItems(getBlockInsertionParentClientId()).filter( // Avoid offering to replace the current block with a block of the same type.
      function (inserterItem) {
        return selectedBlockName !== inserterItem.name;
      });
    },
    getOptionKeywords: function getOptionKeywords(inserterItem) {
      var title = inserterItem.title,
          _inserterItem$keyword = inserterItem.keywords,
          keywords = _inserterItem$keyword === void 0 ? [] : _inserterItem$keyword,
          category = inserterItem.category;
      return [category].concat(Object(toConsumableArray["a" /* default */])(keywords), [title]);
    },
    getOptionLabel: function getOptionLabel(inserterItem) {
      var icon = inserterItem.icon,
          title = inserterItem.title;
      return [Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockIcon"], {
        key: "icon",
        icon: icon,
        showColors: true
      }), title];
    },
    allowContext: function allowContext(before, after) {
      return !(/\S/.test(before) || /\S/.test(after));
    },
    getOptionCompletion: function getOptionCompletion(inserterItem) {
      var name = inserterItem.name,
          initialAttributes = inserterItem.initialAttributes;
      return {
        action: 'replace',
        value: Object(external_this_wp_blocks_["createBlock"])(name, initialAttributes)
      };
    },
    isOptionDisabled: function isOptionDisabled(inserterItem) {
      return inserterItem.isDisabled;
    }
  };
}
/**
 * Creates a blocks repeater for replacing the current block with a selected block type.
 *
 * @return {WPCompleter} A blocks completer.
 */

/* harmony default export */ var autocompleters_block = (createBlockCompleter());

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/autocompleters/user.js
=======
const close = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"
}));
/* harmony default export */ __webpack_exports__["a"] = (close);


/***/ }),

/***/ "wduq":
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
/** @typedef {import('@wordpress/components').WPCompleter} WPCompleter */

/**
 * A user mentions completer.
 *
 * @type {WPCompleter}
 */

/* harmony default export */ var autocompleters_user = ({
  name: 'users',
  className: 'editor-autocompleters__user',
  triggerPrefix: '@',
  options: function options(search) {
    var payload = '';

    if (search) {
      payload = '?search=' + encodeURIComponent(search);
    }

    return external_this_wp_apiFetch_default()({
      path: '/wp/v2/users' + payload
    });
  },
  isDebounced: true,
  getOptionKeywords: function getOptionKeywords(user) {
    return [user.slug, user.name];
  },
  getOptionLabel: function getOptionLabel(user) {
    var avatar = user.avatar_urls && user.avatar_urls[24] ? Object(external_this_wp_element_["createElement"])("img", {
      key: "avatar",
      className: "editor-autocompleters__user-avatar",
      alt: "",
      src: user.avatar_urls[24]
    }) : Object(external_this_wp_element_["createElement"])("span", {
      className: "editor-autocompleters__no-avatar"
    });
    return [avatar, Object(external_this_wp_element_["createElement"])("span", {
      key: "name",
      className: "editor-autocompleters__user-name"
    }, user.name), Object(external_this_wp_element_["createElement"])("span", {
      key: "slug",
      className: "editor-autocompleters__user-slug"
    }, user.slug)];
  },
  getOptionCompletion: function getOptionCompletion(user) {
    return "@".concat(user.slug);
  }
});

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/autocompleters/index.js



// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(17);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/autosave-monitor/index.js






/**
 * WordPress dependencies
 */



var autosave_monitor_AutosaveMonitor =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(AutosaveMonitor, _Component);

  function AutosaveMonitor() {
    Object(classCallCheck["a" /* default */])(this, AutosaveMonitor);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(AutosaveMonitor).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(AutosaveMonitor, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          isDirty = _this$props.isDirty,
          editsReference = _this$props.editsReference,
          isAutosaveable = _this$props.isAutosaveable,
          isAutosaving = _this$props.isAutosaving; // The edits reference is held for comparison to avoid scheduling an
      // autosave if an edit has not been made since the last autosave
      // completion. This is assigned when the autosave completes, and reset
      // when an edit occurs.
      //
      // See: https://github.com/WordPress/gutenberg/issues/12318

      if (editsReference !== prevProps.editsReference) {
        this.didAutosaveForEditsReference = false;
      }

      if (!isAutosaving && prevProps.isAutosaving) {
        this.didAutosaveForEditsReference = true;
      }

      if (prevProps.isDirty !== isDirty || prevProps.isAutosaveable !== isAutosaveable || prevProps.editsReference !== editsReference) {
        this.toggleTimer(isDirty && isAutosaveable && !this.didAutosaveForEditsReference);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.toggleTimer(false);
    }
  }, {
    key: "toggleTimer",
    value: function toggleTimer(isPendingSave) {
      var _this = this;

      var _this$props2 = this.props,
          interval = _this$props2.interval,
          _this$props2$shouldTh = _this$props2.shouldThrottle,
          shouldThrottle = _this$props2$shouldTh === void 0 ? false : _this$props2$shouldTh; // By default, AutosaveMonitor will wait for a pause in editing before
      // autosaving. In other words, its action is "debounced".
      //
      // The `shouldThrottle` props allows overriding this behaviour, thus
      // making the autosave action "throttled".

      if (!shouldThrottle && this.pendingSave) {
        clearTimeout(this.pendingSave);
        delete this.pendingSave;
      }

      if (isPendingSave && !(shouldThrottle && this.pendingSave)) {
        this.pendingSave = setTimeout(function () {
          _this.props.autosave();

          delete _this.pendingSave;
        }, interval * 1000);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return AutosaveMonitor;
}(external_this_wp_element_["Component"]);
/* harmony default export */ var autosave_monitor = (Object(external_this_wp_compose_["compose"])([Object(external_this_wp_data_["withSelect"])(function (select, ownProps) {
  var _select = select('core'),
      getReferenceByDistinctEdits = _select.getReferenceByDistinctEdits;

  var _select2 = select('core/editor'),
      isEditedPostDirty = _select2.isEditedPostDirty,
      isEditedPostAutosaveable = _select2.isEditedPostAutosaveable,
      isAutosavingPost = _select2.isAutosavingPost,
      getEditorSettings = _select2.getEditorSettings;

  var _ownProps$interval = ownProps.interval,
      interval = _ownProps$interval === void 0 ? getEditorSettings().autosaveInterval : _ownProps$interval;
  return {
    isDirty: isEditedPostDirty(),
    isAutosaveable: isEditedPostAutosaveable(),
    editsReference: getReferenceByDistinctEdits(),
    isAutosaving: isAutosavingPost(),
    interval: interval
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch, ownProps) {
  return {
    autosave: function autosave() {
      var _ownProps$autosave = ownProps.autosave,
          autosave = _ownProps$autosave === void 0 ? dispatch('core/editor').autosave : _ownProps$autosave;
      autosave();
    }
  };
})])(autosave_monitor_AutosaveMonitor));

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(11);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/document-outline/item.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



var item_TableOfContentsItem = function TableOfContentsItem(_ref) {
  var children = _ref.children,
      isValid = _ref.isValid,
      level = _ref.level,
      _ref$path = _ref.path,
      path = _ref$path === void 0 ? [] : _ref$path,
      href = _ref.href,
      onSelect = _ref.onSelect;
  return Object(external_this_wp_element_["createElement"])("li", {
    className: classnames_default()('document-outline__item', "is-".concat(level.toLowerCase()), {
      'is-invalid': !isValid
    })
  }, Object(external_this_wp_element_["createElement"])("a", {
    href: href,
    className: "document-outline__button",
    onClick: onSelect
  }, Object(external_this_wp_element_["createElement"])("span", {
    className: "document-outline__emdash",
    "aria-hidden": "true"
  }), // path is an array of nodes that are ancestors of the heading starting in the top level node.
  // This mapping renders each ancestor to make it easier for the user to know where the headings are nested.
  path.map(function (_ref2, index) {
    var clientId = _ref2.clientId;
    return Object(external_this_wp_element_["createElement"])("strong", {
      key: index,
      className: "document-outline__level"
    }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockTitle"], {
      clientId: clientId
    }));
  }), Object(external_this_wp_element_["createElement"])("strong", {
    className: "document-outline__level"
  }, level), Object(external_this_wp_element_["createElement"])("span", {
    className: "document-outline__item-content"
  }, children)));
};

/* harmony default export */ var document_outline_item = (item_TableOfContentsItem);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/document-outline/index.js




function document_outline_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function document_outline_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { document_outline_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { document_outline_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


/**
 * Module constants
 */

var emptyHeadingContent = Object(external_this_wp_element_["createElement"])("em", null, Object(external_this_wp_i18n_["__"])('(Empty heading)'));
var incorrectLevelContent = [Object(external_this_wp_element_["createElement"])("br", {
  key: "incorrect-break"
}), Object(external_this_wp_element_["createElement"])("em", {
  key: "incorrect-message"
}, Object(external_this_wp_i18n_["__"])('(Incorrect heading level)'))];
var singleH1Headings = [Object(external_this_wp_element_["createElement"])("br", {
  key: "incorrect-break-h1"
}), Object(external_this_wp_element_["createElement"])("em", {
  key: "incorrect-message-h1"
}, Object(external_this_wp_i18n_["__"])('(Your theme may already use a H1 for the post title)'))];
var multipleH1Headings = [Object(external_this_wp_element_["createElement"])("br", {
  key: "incorrect-break-multiple-h1"
}), Object(external_this_wp_element_["createElement"])("em", {
  key: "incorrect-message-multiple-h1"
}, Object(external_this_wp_i18n_["__"])('(Multiple H1 headings are not recommended)'))];
/**
 * Returns an array of heading blocks enhanced with the following properties:
 * path    - An array of blocks that are ancestors of the heading starting from a top-level node.
 *           Can be an empty array if the heading is a top-level node (is not nested inside another block).
 * level   - An integer with the heading level.
 * isEmpty - Flag indicating if the heading has no content.
 *
 * @param {?Array} blocks An array of blocks.
 * @param {?Array} path   An array of blocks that are ancestors of the blocks passed as blocks.
 *
 * @return {Array} An array of heading blocks enhanced with the properties described above.
 */

var document_outline_computeOutlineHeadings = function computeOutlineHeadings() {
  var blocks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return Object(external_this_lodash_["flatMap"])(blocks, function () {
    var block = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (block.name === 'core/heading') {
      return document_outline_objectSpread({}, block, {
        path: path,
        level: block.attributes.level,
        isEmpty: isEmptyHeading(block)
      });
    }

    return computeOutlineHeadings(block.innerBlocks, [].concat(Object(toConsumableArray["a" /* default */])(path), [block]));
  });
};

var isEmptyHeading = function isEmptyHeading(heading) {
  return !heading.attributes.content || heading.attributes.content.length === 0;
};

var document_outline_DocumentOutline = function DocumentOutline(_ref) {
  var _ref$blocks = _ref.blocks,
      blocks = _ref$blocks === void 0 ? [] : _ref$blocks,
      title = _ref.title,
      onSelect = _ref.onSelect,
      isTitleSupported = _ref.isTitleSupported,
      hasOutlineItemsDisabled = _ref.hasOutlineItemsDisabled;
  var headings = document_outline_computeOutlineHeadings(blocks);

  if (headings.length < 1) {
    return null;
  }

  var prevHeadingLevel = 1; // Not great but it's the simplest way to locate the title right now.

  var titleNode = document.querySelector('.editor-post-title__input');
  var hasTitle = isTitleSupported && title && titleNode;
  var countByLevel = Object(external_this_lodash_["countBy"])(headings, 'level');
  var hasMultipleH1 = countByLevel[1] > 1;
  return Object(external_this_wp_element_["createElement"])("div", {
    className: "document-outline"
  }, Object(external_this_wp_element_["createElement"])("ul", null, hasTitle && Object(external_this_wp_element_["createElement"])(document_outline_item, {
    level: Object(external_this_wp_i18n_["__"])('Title'),
    isValid: true,
    onSelect: onSelect,
    href: "#".concat(titleNode.id),
    isDisabled: hasOutlineItemsDisabled
  }, title), headings.map(function (item, index) {
    // Headings remain the same, go up by one, or down by any amount.
    // Otherwise there are missing levels.
    var isIncorrectLevel = item.level > prevHeadingLevel + 1;
    var isValid = !item.isEmpty && !isIncorrectLevel && !!item.level && (item.level !== 1 || !hasMultipleH1 && !hasTitle);
    prevHeadingLevel = item.level;
    return Object(external_this_wp_element_["createElement"])(document_outline_item, {
      key: index,
      level: "H".concat(item.level),
      isValid: isValid,
      path: item.path,
      isDisabled: hasOutlineItemsDisabled,
      href: "#block-".concat(item.clientId),
      onSelect: onSelect
    }, item.isEmpty ? emptyHeadingContent : Object(external_this_wp_richText_["getTextContent"])(Object(external_this_wp_richText_["create"])({
      html: item.attributes.content
    })), isIncorrectLevel && incorrectLevelContent, item.level === 1 && hasMultipleH1 && multipleH1Headings, hasTitle && item.level === 1 && !hasMultipleH1 && singleH1Headings);
  })));
};
/* harmony default export */ var document_outline = (Object(external_this_wp_compose_["compose"])(Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select('core/block-editor'),
      getBlocks = _select.getBlocks;

  var _select2 = select('core/editor'),
      getEditedPostAttribute = _select2.getEditedPostAttribute;

  var _select3 = select('core'),
      getPostType = _select3.getPostType;

  var postType = getPostType(getEditedPostAttribute('type'));
  return {
    title: getEditedPostAttribute('title'),
    blocks: getBlocks(),
    isTitleSupported: Object(external_this_lodash_["get"])(postType, ['supports', 'title'], false)
  };
}))(document_outline_DocumentOutline));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/document-outline/check.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



function DocumentOutlineCheck(_ref) {
  var blocks = _ref.blocks,
      children = _ref.children;
  var headings = Object(external_this_lodash_["filter"])(blocks, function (block) {
    return block.name === 'core/heading';
  });

  if (headings.length < 1) {
    return null;
  }

  return children;
}

/* harmony default export */ var check = (Object(external_this_wp_data_["withSelect"])(function (select) {
  return {
    blocks: select('core/block-editor').getBlocks()
  };
})(DocumentOutlineCheck));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/global-keyboard-shortcuts/save-shortcut.js
/**
 * WordPress dependencies
 */



function SaveShortcut() {
  var _useDispatch = Object(external_this_wp_data_["useDispatch"])('core/editor'),
      savePost = _useDispatch.savePost;

  var isEditedPostDirty = Object(external_this_wp_data_["useSelect"])(function (select) {
    return select('core/editor').isEditedPostDirty;
  }, []);
  Object(external_this_wp_keyboardShortcuts_["useShortcut"])('core/editor/save', function (event) {
    event.preventDefault(); // TODO: This should be handled in the `savePost` effect in
    // considering `isSaveable`. See note on `isEditedPostSaveable`
    // selector about dirtiness and meta-boxes.
    //
    // See: `isEditedPostSaveable`

    if (!isEditedPostDirty()) {
      return;
    }

    savePost();
  }, {
    bindGlobal: true
  });
  return null;
}

/* harmony default export */ var save_shortcut = (SaveShortcut);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/global-keyboard-shortcuts/visual-editor-shortcuts.js


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



function VisualEditorGlobalKeyboardShortcuts() {
  var _useDispatch = Object(external_this_wp_data_["useDispatch"])('core/editor'),
      redo = _useDispatch.redo,
      undo = _useDispatch.undo,
      savePost = _useDispatch.savePost;

  var isEditedPostDirty = Object(external_this_wp_data_["useSelect"])(function (select) {
    return select('core/editor').isEditedPostDirty;
  }, []);
  Object(external_this_wp_keyboardShortcuts_["useShortcut"])('core/editor/undo', function (event) {
    undo();
    event.preventDefault();
  }, {
    bindGlobal: true
  });
  Object(external_this_wp_keyboardShortcuts_["useShortcut"])('core/editor/redo', function (event) {
    redo();
    event.preventDefault();
  }, {
    bindGlobal: true
  });
  Object(external_this_wp_keyboardShortcuts_["useShortcut"])('core/editor/save', function (event) {
    event.preventDefault(); // TODO: This should be handled in the `savePost` effect in
    // considering `isSaveable`. See note on `isEditedPostSaveable`
    // selector about dirtiness and meta-boxes.
    //
    // See: `isEditedPostSaveable`

    if (!isEditedPostDirty()) {
      return;
    }

    savePost();
  }, {
    bindGlobal: true
  });
  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockEditorKeyboardShortcuts"], null), Object(external_this_wp_element_["createElement"])(save_shortcut, null));
}

/* harmony default export */ var visual_editor_shortcuts = (VisualEditorGlobalKeyboardShortcuts);
function EditorGlobalKeyboardShortcuts() {
  external_this_wp_deprecated_default()('EditorGlobalKeyboardShortcuts', {
    alternative: 'VisualEditorGlobalKeyboardShortcuts',
    plugin: 'Gutenberg'
  });
  return Object(external_this_wp_element_["createElement"])(VisualEditorGlobalKeyboardShortcuts, null);
}

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/global-keyboard-shortcuts/text-editor-shortcuts.js


/**
 * Internal dependencies
 */

function TextEditorGlobalKeyboardShortcuts() {
  return Object(external_this_wp_element_["createElement"])(save_shortcut, null);
}

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/global-keyboard-shortcuts/register-shortcuts.js


/**
 * WordPress dependencies
 */





function EditorKeyboardShortcutsRegister() {
  // Registering the shortcuts
  var _useDispatch = Object(external_this_wp_data_["useDispatch"])('core/keyboard-shortcuts'),
      registerShortcut = _useDispatch.registerShortcut;

  Object(external_this_wp_element_["useEffect"])(function () {
    registerShortcut({
      name: 'core/editor/save',
      category: 'global',
      description: Object(external_this_wp_i18n_["__"])('Save your changes.'),
      keyCombination: {
        modifier: 'primary',
        character: 's'
      }
    });
    registerShortcut({
      name: 'core/editor/undo',
      category: 'global',
      description: Object(external_this_wp_i18n_["__"])('Undo your last changes.'),
      keyCombination: {
        modifier: 'primary',
        character: 'z'
      }
    });
    registerShortcut({
      name: 'core/editor/redo',
      category: 'global',
      description: Object(external_this_wp_i18n_["__"])('Redo your last undo.'),
      keyCombination: {
        modifier: 'primaryShift',
        character: 'z'
      }
    });
  }, [registerShortcut]);
  return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockEditorKeyboardShortcuts"].Register, null);
}

/* harmony default export */ var register_shortcuts = (EditorKeyboardShortcutsRegister);

// EXTERNAL MODULE: external {"this":["wp","components"]}
var external_this_wp_components_ = __webpack_require__(3);

// EXTERNAL MODULE: external {"this":["wp","keycodes"]}
var external_this_wp_keycodes_ = __webpack_require__(22);

// EXTERNAL MODULE: external {"this":["wp","primitives"]}
var external_this_wp_primitives_ = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/redo.js


/**
 * WordPress dependencies
 */

var redo_redo = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M8 5h5V2l6 4-6 4V7H8c-2.2 0-4 1.8-4 4s1.8 4 4 4h5v2H8c-3.3 0-6-2.7-6-6s2.7-6 6-6z"
}));
/* harmony default export */ var library_redo = (redo_redo);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/editor-history/redo.js


/**
 * WordPress dependencies
 */







function EditorHistoryRedo(_ref) {
  var hasRedo = _ref.hasRedo,
      redo = _ref.redo;
  return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
    icon: library_redo,
    label: Object(external_this_wp_i18n_["__"])('Redo'),
    shortcut: external_this_wp_keycodes_["displayShortcut"].primaryShift('z') // If there are no redo levels we don't want to actually disable this
    // button, because it will remove focus for keyboard users.
    // See: https://github.com/WordPress/gutenberg/issues/3486
    ,
    "aria-disabled": !hasRedo,
    onClick: hasRedo ? redo : undefined,
    className: "editor-history__redo"
  });
}

/* harmony default export */ var editor_history_redo = (Object(external_this_wp_compose_["compose"])([Object(external_this_wp_data_["withSelect"])(function (select) {
  return {
    hasRedo: select('core/editor').hasEditorRedo()
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  return {
    redo: dispatch('core/editor').redo
  };
})])(EditorHistoryRedo));

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/undo.js


/**
 * WordPress dependencies
 */

var undo_undo = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M12 5H7V2L1 6l6 4V7h5c2.2 0 4 1.8 4 4s-1.8 4-4 4H7v2h5c3.3 0 6-2.7 6-6s-2.7-6-6-6z"
}));
/* harmony default export */ var library_undo = (undo_undo);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/editor-history/undo.js


/**
 * WordPress dependencies
 */







function EditorHistoryUndo(_ref) {
  var hasUndo = _ref.hasUndo,
      undo = _ref.undo;
  return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
    icon: library_undo,
    label: Object(external_this_wp_i18n_["__"])('Undo'),
    shortcut: external_this_wp_keycodes_["displayShortcut"].primary('z') // If there are no undo levels we don't want to actually disable this
    // button, because it will remove focus for keyboard users.
    // See: https://github.com/WordPress/gutenberg/issues/3486
    ,
    "aria-disabled": !hasUndo,
    onClick: hasUndo ? undo : undefined,
    className: "editor-history__undo"
  });
}

/* harmony default export */ var editor_history_undo = (Object(external_this_wp_compose_["compose"])([Object(external_this_wp_data_["withSelect"])(function (select) {
  return {
    hasUndo: select('core/editor').hasEditorUndo()
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  return {
    undo: dispatch('core/editor').undo
  };
})])(EditorHistoryUndo));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/template-validation-notice/index.js



/**
 * WordPress dependencies
 */





function TemplateValidationNotice(_ref) {
  var isValid = _ref.isValid,
      props = Object(objectWithoutProperties["a" /* default */])(_ref, ["isValid"]);

  if (isValid) {
    return null;
  }

  var confirmSynchronization = function confirmSynchronization() {
    if ( // eslint-disable-next-line no-alert
    window.confirm(Object(external_this_wp_i18n_["__"])('Resetting the template may result in loss of content, do you want to continue?'))) {
      props.synchronizeTemplate();
    }
  };

  return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Notice"], {
    className: "editor-template-validation-notice",
    isDismissible: false,
    status: "warning",
    actions: [{
      label: Object(external_this_wp_i18n_["__"])('Keep it as is'),
      onClick: props.resetTemplateValidity
    }, {
      label: Object(external_this_wp_i18n_["__"])('Reset the template'),
      onClick: confirmSynchronization,
      isPrimary: true
    }]
  }, Object(external_this_wp_i18n_["__"])('The content of your post doesn’t match the template assigned to your post type.'));
}

/* harmony default export */ var template_validation_notice = (Object(external_this_wp_compose_["compose"])([Object(external_this_wp_data_["withSelect"])(function (select) {
  return {
    isValid: select('core/block-editor').isValidTemplate()
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/block-editor'),
      setTemplateValidity = _dispatch.setTemplateValidity,
      synchronizeTemplate = _dispatch.synchronizeTemplate;

  return {
    resetTemplateValidity: function resetTemplateValidity() {
      return setTemplateValidity(true);
    },
    synchronizeTemplate: synchronizeTemplate
  };
})])(TemplateValidationNotice));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/editor-notices/index.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


function EditorNotices(_ref) {
  var notices = _ref.notices,
      onRemove = _ref.onRemove;
  var dismissibleNotices = Object(external_this_lodash_["filter"])(notices, {
    isDismissible: true,
    type: 'default'
  });
  var nonDismissibleNotices = Object(external_this_lodash_["filter"])(notices, {
    isDismissible: false,
    type: 'default'
  });
  var snackbarNotices = Object(external_this_lodash_["filter"])(notices, {
    type: 'snackbar'
  });
  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["NoticeList"], {
    notices: nonDismissibleNotices,
    className: "components-editor-notices__pinned"
  }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["NoticeList"], {
    notices: dismissibleNotices,
    className: "components-editor-notices__dismissible",
    onRemove: onRemove
  }, Object(external_this_wp_element_["createElement"])(template_validation_notice, null)), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SnackbarList"], {
    notices: snackbarNotices,
    className: "components-editor-notices__snackbar",
    onRemove: onRemove
  }));
}
/* harmony default export */ var editor_notices = (Object(external_this_wp_compose_["compose"])([Object(external_this_wp_data_["withSelect"])(function (select) {
  return {
    notices: select('core/notices').getNotices()
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  return {
    onRemove: dispatch('core/notices').removeNotice
  };
})])(EditorNotices));

// EXTERNAL MODULE: ./node_modules/equivalent-key-map/equivalent-key-map.js
var equivalent_key_map = __webpack_require__(64);
var equivalent_key_map_default = /*#__PURE__*/__webpack_require__.n(equivalent_key_map);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/entities-saved-states/index.js




/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






var entities_saved_states_EntitiesSavedStatesCheckbox = function EntitiesSavedStatesCheckbox(_ref) {
  var id = _ref.id,
      name = _ref.name,
      rawRecord = _ref.changes.rawRecord,
      checked = _ref.checked,
      setCheckedById = _ref.setCheckedById;
  return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["CheckboxControl"], {
    label: "".concat(name, ": \"").concat(rawRecord.name || rawRecord.slug || rawRecord.title || Object(external_this_wp_i18n_["__"])('Untitled'), "\""),
    checked: checked,
    onChange: function onChange(nextChecked) {
      return setCheckedById(id, nextChecked);
    }
  });
};

function EntitiesSavedStates(_ref2) {
  var isOpen = _ref2.isOpen,
      _onRequestClose = _ref2.onRequestClose,
      _ref2$ignoredForSave = _ref2.ignoredForSave,
      ignoredForSave = _ref2$ignoredForSave === void 0 ? new equivalent_key_map_default.a() : _ref2$ignoredForSave;
  var entityRecordChangesByRecord = Object(external_this_wp_data_["useSelect"])(function (select) {
    return select('core').getEntityRecordChangesByRecord();
  });

  var _useDispatch = Object(external_this_wp_data_["useDispatch"])('core'),
      saveEditedEntityRecord = _useDispatch.saveEditedEntityRecord;

  var _useState = Object(external_this_wp_element_["useState"])(function () {
    return new equivalent_key_map_default.a();
  }),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      checkedById = _useState2[0],
      _setCheckedById = _useState2[1];

  var setCheckedById = function setCheckedById(id, checked) {
    return _setCheckedById(function (prevCheckedById) {
      var nextCheckedById = new equivalent_key_map_default.a(prevCheckedById);

      if (checked) {
        nextCheckedById.set(id, true);
      } else {
        nextCheckedById.delete(id);
      }

      return nextCheckedById;
    });
  };

  var saveCheckedEntities = function saveCheckedEntities() {
    checkedById.forEach(function (_checked, id) {
      if (!ignoredForSave.has(id)) {
        saveEditedEntityRecord.apply(void 0, Object(toConsumableArray["a" /* default */])(id.filter(function (s, i) {
          return i !== id.length - 1 || s !== 'undefined';
        })));
      }
    });

    _onRequestClose(checkedById);
  };

  return isOpen && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Modal"], {
    title: Object(external_this_wp_i18n_["__"])('What do you want to save?'),
    onRequestClose: function onRequestClose() {
      return _onRequestClose();
    },
    contentLabel: Object(external_this_wp_i18n_["__"])('Select items to save.')
  }, Object.keys(entityRecordChangesByRecord).map(function (changedKind) {
    return Object.keys(entityRecordChangesByRecord[changedKind]).map(function (changedName) {
      return Object.keys(entityRecordChangesByRecord[changedKind][changedName]).map(function (changedKey) {
        var id = [changedKind, changedName, changedKey];
        return Object(external_this_wp_element_["createElement"])(entities_saved_states_EntitiesSavedStatesCheckbox, {
          key: id.join(' | '),
          id: id,
          name: changedName,
          changes: entityRecordChangesByRecord[changedKind][changedName][changedKey],
          checked: checkedById.get(id),
          setCheckedById: setCheckedById
        });
      });
    });
  }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
    isPrimary: true,
    disabled: checkedById.size === 0,
    onClick: saveCheckedEntities,
    className: "editor-entities-saved-states__save-button"
  }, Object(external_this_wp_i18n_["__"])('Save')));
}

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/error-boundary/index.js








/**
 * WordPress dependencies
 */






var error_boundary_ErrorBoundary =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(ErrorBoundary, _Component);

  function ErrorBoundary() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, ErrorBoundary);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(ErrorBoundary).apply(this, arguments));
    _this.reboot = _this.reboot.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.getContent = _this.getContent.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.state = {
      error: null
    };
    return _this;
  }

  Object(createClass["a" /* default */])(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error) {
      this.setState({
        error: error
      });
    }
  }, {
    key: "reboot",
    value: function reboot() {
      this.props.onError();
    }
  }, {
    key: "getContent",
    value: function getContent() {
      try {
        // While `select` in a component is generally discouraged, it is
        // used here because it (a) reduces the chance of data loss in the
        // case of additional errors by performing a direct retrieval and
        // (b) avoids the performance cost associated with unnecessary
        // content serialization throughout the lifetime of a non-erroring
        // application.
        return Object(external_this_wp_data_["select"])('core/editor').getEditedPostContent();
      } catch (error) {}
    }
  }, {
    key: "render",
    value: function render() {
      var error = this.state.error;

      if (!error) {
        return this.props.children;
      }

      return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["Warning"], {
        className: "editor-error-boundary",
        actions: [Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
          key: "recovery",
          onClick: this.reboot,
          isSecondary: true
        }, Object(external_this_wp_i18n_["__"])('Attempt Recovery')), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ClipboardButton"], {
          key: "copy-post",
          text: this.getContent,
          isSecondary: true
        }, Object(external_this_wp_i18n_["__"])('Copy Post Text')), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ClipboardButton"], {
          key: "copy-error",
          text: error.stack,
          isSecondary: true
        }, Object(external_this_wp_i18n_["__"])('Copy Error'))]
      }, Object(external_this_wp_i18n_["__"])('The editor has encountered an unexpected error.'));
    }
  }]);

  return ErrorBoundary;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var error_boundary = (error_boundary_ErrorBoundary);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/local-autosave-monitor/index.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */



var requestIdleCallback = window.requestIdleCallback ? window.requestIdleCallback : window.requestAnimationFrame;
/**
 * Function which returns true if the current environment supports browser
 * sessionStorage, or false otherwise. The result of this function is cached and
 * reused in subsequent invocations.
 */

var hasSessionStorageSupport = Object(external_this_lodash_["once"])(function () {
  try {
    // Private Browsing in Safari 10 and earlier will throw an error when
    // attempting to set into sessionStorage. The test here is intentional in
    // causing a thrown error as condition bailing from local autosave.
    window.sessionStorage.setItem('__wpEditorTestSessionStorage', '');
    window.sessionStorage.removeItem('__wpEditorTestSessionStorage');
    return true;
  } catch (error) {
    return false;
  }
});
/**
 * Custom hook which manages the creation of a notice prompting the user to
 * restore a local autosave, if one exists.
 */

function useAutosaveNotice() {
  var _useSelect = Object(external_this_wp_data_["useSelect"])(function (select) {
    return {
      postId: select('core/editor').getCurrentPostId(),
      getEditedPostAttribute: select('core/editor').getEditedPostAttribute,
      hasRemoteAutosave: !!select('core/editor').getEditorSettings().autosave
    };
  }, []),
      postId = _useSelect.postId,
      getEditedPostAttribute = _useSelect.getEditedPostAttribute,
      hasRemoteAutosave = _useSelect.hasRemoteAutosave;

  var _useDispatch = Object(external_this_wp_data_["useDispatch"])('core/notices'),
      createWarningNotice = _useDispatch.createWarningNotice,
      removeNotice = _useDispatch.removeNotice;

  var _useDispatch2 = Object(external_this_wp_data_["useDispatch"])('core/editor'),
      editPost = _useDispatch2.editPost,
      resetEditorBlocks = _useDispatch2.resetEditorBlocks;

  Object(external_this_wp_element_["useEffect"])(function () {
    var localAutosave = localAutosaveGet(postId);

    if (!localAutosave) {
      return;
    }

    try {
      localAutosave = JSON.parse(localAutosave);
    } catch (error) {
      // Not usable if it can't be parsed.
      return;
    }

    var _localAutosave = localAutosave,
        title = _localAutosave.post_title,
        content = _localAutosave.content,
        excerpt = _localAutosave.excerpt;
    var edits = {
      title: title,
      content: content,
      excerpt: excerpt
    };
    {
      // Only display a notice if there is a difference between what has been
      // saved and that which is stored in sessionStorage.
      var hasDifference = Object.keys(edits).some(function (key) {
        return edits[key] !== getEditedPostAttribute(key);
      });

      if (!hasDifference) {
        // If there is no difference, it can be safely ejected from storage.
        localAutosaveClear(postId);
        return;
      }
    }

    if (hasRemoteAutosave) {
      return;
    }

    var noticeId = Object(external_this_lodash_["uniqueId"])('wpEditorAutosaveRestore');
    createWarningNotice(Object(external_this_wp_i18n_["__"])('The backup of this post in your browser is different from the version below.'), {
      id: noticeId,
      actions: [{
        label: Object(external_this_wp_i18n_["__"])('Restore the backup'),
        onClick: function onClick() {
          editPost(Object(external_this_lodash_["omit"])(edits, ['content']));
          resetEditorBlocks(Object(external_this_wp_blocks_["parse"])(edits.content));
          removeNotice(noticeId);
        }
      }]
    });
  }, [postId]);
}
/**
 * Custom hook which ejects a local autosave after a successful save occurs.
 */


function useAutosavePurge() {
  var _useSelect2 = Object(external_this_wp_data_["useSelect"])(function (select) {
    return {
      postId: select('core/editor').getCurrentPostId(),
      isDirty: select('core/editor').isEditedPostDirty(),
      isAutosaving: select('core/editor').isAutosavingPost(),
      didError: select('core/editor').didPostSaveRequestFail()
    };
  }, []),
      postId = _useSelect2.postId,
      isDirty = _useSelect2.isDirty,
      isAutosaving = _useSelect2.isAutosaving,
      didError = _useSelect2.didError;

  var lastIsDirty = Object(external_this_wp_element_["useRef"])(isDirty);
  var lastIsAutosaving = Object(external_this_wp_element_["useRef"])(isAutosaving);
  Object(external_this_wp_element_["useEffect"])(function () {
    if (!didError && (lastIsAutosaving.current && !isAutosaving || lastIsDirty.current && !isDirty)) {
      localAutosaveClear(postId);
    }

    lastIsDirty.current = isDirty;
    lastIsAutosaving.current = isAutosaving;
  }, [isDirty, isAutosaving, didError]);
}

function LocalAutosaveMonitor() {
  var _useDispatch3 = Object(external_this_wp_data_["useDispatch"])('core/editor'),
      __experimentalLocalAutosave = _useDispatch3.__experimentalLocalAutosave;

  var autosave = Object(external_this_wp_element_["useCallback"])(function () {
    requestIdleCallback(__experimentalLocalAutosave);
  }, []);
  useAutosaveNotice();
  useAutosavePurge();

  var _useSelect3 = Object(external_this_wp_data_["useSelect"])(function (select) {
    return {
      localAutosaveInterval: select('core/editor').getEditorSettings().__experimentalLocalAutosaveInterval
    };
  }, []),
      localAutosaveInterval = _useSelect3.localAutosaveInterval;

  return Object(external_this_wp_element_["createElement"])(autosave_monitor, {
    interval: localAutosaveInterval,
    autosave: autosave,
    shouldThrottle: true
  });
}

/* harmony default export */ var local_autosave_monitor = (Object(external_this_wp_compose_["ifCondition"])(hasSessionStorageSupport)(LocalAutosaveMonitor));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/page-attributes/check.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


function PageAttributesCheck(_ref) {
  var availableTemplates = _ref.availableTemplates,
      postType = _ref.postType,
      children = _ref.children;
  var supportsPageAttributes = Object(external_this_lodash_["get"])(postType, ['supports', 'page-attributes'], false); // Only render fields if post type supports page attributes or available templates exist.

  if (!supportsPageAttributes && Object(external_this_lodash_["isEmpty"])(availableTemplates)) {
    return null;
  }

  return children;
}
/* harmony default export */ var page_attributes_check = (Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select('core/editor'),
      getEditedPostAttribute = _select.getEditedPostAttribute,
      getEditorSettings = _select.getEditorSettings;

  var _select2 = select('core'),
      getPostType = _select2.getPostType;

  var _getEditorSettings = getEditorSettings(),
      availableTemplates = _getEditorSettings.availableTemplates;

  return {
    postType: getPostType(getEditedPostAttribute('type')),
    availableTemplates: availableTemplates
  };
})(PageAttributesCheck));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-type-support-check/index.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * A component which renders its own children only if the current editor post
 * type supports one of the given `supportKeys` prop.
 *
 * @param {Object}    props             Props.
 * @param {string}    [props.postType]  Current post type.
 * @param {WPElement} props.children    Children to be rendered if post
 *                                                                   type supports.
 * @param {(string|string[])}                      props.supportKeys String or string array of keys
 *                                                                   to test.
 *
 * @return {WPComponent} The component to be rendered.
 */

function PostTypeSupportCheck(_ref) {
  var postType = _ref.postType,
      children = _ref.children,
      supportKeys = _ref.supportKeys;
  var isSupported = true;

  if (postType) {
    isSupported = Object(external_this_lodash_["some"])(Object(external_this_lodash_["castArray"])(supportKeys), function (key) {
      return !!postType.supports[key];
    });
  }

  if (!isSupported) {
    return null;
  }

  return children;
}
/* harmony default export */ var post_type_support_check = (Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select('core/editor'),
      getEditedPostAttribute = _select.getEditedPostAttribute;

  var _select2 = select('core'),
      getPostType = _select2.getPostType;

  return {
    postType: getPostType(getEditedPostAttribute('type'))
  };
})(PostTypeSupportCheck));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/page-attributes/order.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


var PageAttributesOrder = Object(external_this_wp_compose_["withState"])({
  orderInput: null
})(function (_ref) {
  var onUpdateOrder = _ref.onUpdateOrder,
      _ref$order = _ref.order,
      order = _ref$order === void 0 ? 0 : _ref$order,
      orderInput = _ref.orderInput,
      setState = _ref.setState;

  var setUpdatedOrder = function setUpdatedOrder(value) {
    setState({
      orderInput: value
    });
    var newOrder = Number(value);

    if (Number.isInteger(newOrder) && Object(external_this_lodash_["invoke"])(value, ['trim']) !== '') {
      onUpdateOrder(Number(value));
    }
  };

  var value = orderInput === null ? order : orderInput;
  return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["TextControl"], {
    className: "editor-page-attributes__order",
    type: "number",
    label: Object(external_this_wp_i18n_["__"])('Order'),
    value: value,
    onChange: setUpdatedOrder,
    size: 6,
    onBlur: function onBlur() {
      setState({
        orderInput: null
      });
    }
  });
});

function PageAttributesOrderWithChecks(props) {
  return Object(external_this_wp_element_["createElement"])(post_type_support_check, {
    supportKeys: "page-attributes"
  }, Object(external_this_wp_element_["createElement"])(PageAttributesOrder, props));
}

/* harmony default export */ var page_attributes_order = (Object(external_this_wp_compose_["compose"])([Object(external_this_wp_data_["withSelect"])(function (select) {
  return {
    order: select('core/editor').getEditedPostAttribute('menu_order')
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  return {
    onUpdateOrder: function onUpdateOrder(order) {
      dispatch('core/editor').editPost({
        menu_order: order
      });
    }
  };
})])(PageAttributesOrderWithChecks));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/utils/terms.js


function terms_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function terms_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { terms_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { terms_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */

/**
 * Returns terms in a tree form.
 *
 * @param {Array} flatTerms  Array of terms in flat format.
 *
 * @return {Array} Array of terms in tree format.
 */

function buildTermsTree(flatTerms) {
  var flatTermsWithParentAndChildren = flatTerms.map(function (term) {
    return terms_objectSpread({
      children: [],
      parent: null
    }, term);
  });
  var termsByParent = Object(external_this_lodash_["groupBy"])(flatTermsWithParentAndChildren, 'parent');

  if (termsByParent.null && termsByParent.null.length) {
    return flatTermsWithParentAndChildren;
  }

  var fillWithChildren = function fillWithChildren(terms) {
    return terms.map(function (term) {
      var children = termsByParent[term.id];
      return terms_objectSpread({}, term, {
        children: children && children.length ? fillWithChildren(children) : []
      });
    });
  };

  return fillWithChildren(termsByParent['0'] || []);
}

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/page-attributes/parent.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


function PageAttributesParent(_ref) {
  var parent = _ref.parent,
      postType = _ref.postType,
      items = _ref.items,
      onUpdateParent = _ref.onUpdateParent;
  var isHierarchical = Object(external_this_lodash_["get"])(postType, ['hierarchical'], false);
  var parentPageLabel = Object(external_this_lodash_["get"])(postType, ['labels', 'parent_item_colon']);
  var pageItems = items || [];

  if (!isHierarchical || !parentPageLabel || !pageItems.length) {
    return null;
  }

  var pagesTree = buildTermsTree(pageItems.map(function (item) {
    return {
      id: item.id,
      parent: item.parent,
      name: item.title && item.title.raw ? item.title.raw : "#".concat(item.id, " (").concat(Object(external_this_wp_i18n_["__"])('no title'), ")")
    };
  }));
  return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["TreeSelect"], {
    className: "editor-page-attributes__parent",
    label: parentPageLabel,
    noOptionLabel: "(".concat(Object(external_this_wp_i18n_["__"])('no parent'), ")"),
    tree: pagesTree,
    selectedId: parent,
    onChange: onUpdateParent
  });
}
var applyWithSelect = Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select('core'),
      getPostType = _select.getPostType,
      getEntityRecords = _select.getEntityRecords;

  var _select2 = select('core/editor'),
      getCurrentPostId = _select2.getCurrentPostId,
      getEditedPostAttribute = _select2.getEditedPostAttribute;

  var postTypeSlug = getEditedPostAttribute('type');
  var postType = getPostType(postTypeSlug);
  var postId = getCurrentPostId();
  var isHierarchical = Object(external_this_lodash_["get"])(postType, ['hierarchical'], false);
  var query = {
    per_page: -1,
    exclude: postId,
    parent_exclude: postId,
    orderby: 'menu_order',
    order: 'asc'
  };
  return {
    parent: getEditedPostAttribute('parent'),
    items: isHierarchical ? getEntityRecords('postType', postTypeSlug, query) : [],
    postType: postType
  };
});
var applyWithDispatch = Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/editor'),
      editPost = _dispatch.editPost;

  return {
    onUpdateParent: function onUpdateParent(parent) {
      editPost({
        parent: parent || 0
      });
    }
  };
});
/* harmony default export */ var page_attributes_parent = (Object(external_this_wp_compose_["compose"])([applyWithSelect, applyWithDispatch])(PageAttributesParent));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/page-attributes/template.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





function PageTemplate(_ref) {
  var availableTemplates = _ref.availableTemplates,
      selectedTemplate = _ref.selectedTemplate,
      onUpdate = _ref.onUpdate;

  if (Object(external_this_lodash_["isEmpty"])(availableTemplates)) {
    return null;
  }

  return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SelectControl"], {
    label: Object(external_this_wp_i18n_["__"])('Template:'),
    value: selectedTemplate,
    onChange: onUpdate,
    className: "editor-page-attributes__template",
    options: Object(external_this_lodash_["map"])(availableTemplates, function (templateName, templateSlug) {
      return {
        value: templateSlug,
        label: templateName
      };
    })
  });
}
/* harmony default export */ var page_attributes_template = (Object(external_this_wp_compose_["compose"])(Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select('core/editor'),
      getEditedPostAttribute = _select.getEditedPostAttribute,
      getEditorSettings = _select.getEditorSettings;

  var _getEditorSettings = getEditorSettings(),
      availableTemplates = _getEditorSettings.availableTemplates;

  return {
    selectedTemplate: getEditedPostAttribute('template'),
    availableTemplates: availableTemplates
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  return {
    onUpdate: function onUpdate(templateSlug) {
      dispatch('core/editor').editPost({
        template: templateSlug || ''
      });
    }
  };
}))(PageTemplate));

// EXTERNAL MODULE: external {"this":["wp","htmlEntities"]}
var external_this_wp_htmlEntities_ = __webpack_require__(58);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-author/check.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


function PostAuthorCheck(_ref) {
  var hasAssignAuthorAction = _ref.hasAssignAuthorAction,
      authors = _ref.authors,
      children = _ref.children;

  if (!hasAssignAuthorAction || authors.length < 2) {
    return null;
  }

  return Object(external_this_wp_element_["createElement"])(post_type_support_check, {
    supportKeys: "author"
  }, children);
}
/* harmony default export */ var post_author_check = (Object(external_this_wp_compose_["compose"])([Object(external_this_wp_data_["withSelect"])(function (select) {
  var post = select('core/editor').getCurrentPost();
  return {
    hasAssignAuthorAction: Object(external_this_lodash_["get"])(post, ['_links', 'wp:action-assign-author'], false),
    postType: select('core/editor').getCurrentPostType(),
    authors: select('core').getAuthors()
  };
}), external_this_wp_compose_["withInstanceId"]])(PostAuthorCheck));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-author/index.js








/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


var post_author_PostAuthor =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(PostAuthor, _Component);

  function PostAuthor() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, PostAuthor);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(PostAuthor).apply(this, arguments));
    _this.setAuthorId = _this.setAuthorId.bind(Object(assertThisInitialized["a" /* default */])(_this));
    return _this;
  }

  Object(createClass["a" /* default */])(PostAuthor, [{
    key: "setAuthorId",
    value: function setAuthorId(event) {
      var onUpdateAuthor = this.props.onUpdateAuthor;
      var value = event.target.value;
      onUpdateAuthor(Number(value));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          postAuthor = _this$props.postAuthor,
          instanceId = _this$props.instanceId,
          authors = _this$props.authors;
      var selectId = 'post-author-selector-' + instanceId; // Disable reason: A select with an onchange throws a warning

      /* eslint-disable jsx-a11y/no-onchange */

      return Object(external_this_wp_element_["createElement"])(post_author_check, null, Object(external_this_wp_element_["createElement"])("label", {
        htmlFor: selectId
      }, Object(external_this_wp_i18n_["__"])('Author')), Object(external_this_wp_element_["createElement"])("select", {
        id: selectId,
        value: postAuthor,
        onChange: this.setAuthorId,
        className: "editor-post-author__select"
      }, authors.map(function (author) {
        return Object(external_this_wp_element_["createElement"])("option", {
          key: author.id,
          value: author.id
        }, Object(external_this_wp_htmlEntities_["decodeEntities"])(author.name));
      })));
      /* eslint-enable jsx-a11y/no-onchange */
    }
  }]);

  return PostAuthor;
}(external_this_wp_element_["Component"]);
/* harmony default export */ var post_author = (Object(external_this_wp_compose_["compose"])([Object(external_this_wp_data_["withSelect"])(function (select) {
  return {
    postAuthor: select('core/editor').getEditedPostAttribute('author'),
    authors: select('core').getAuthors()
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  return {
    onUpdateAuthor: function onUpdateAuthor(author) {
      dispatch('core/editor').editPost({
        author: author
      });
    }
  };
}), external_this_wp_compose_["withInstanceId"]])(post_author_PostAuthor));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-comments/index.js



/**
 * WordPress dependencies
 */





function PostComments(_ref) {
  var _ref$commentStatus = _ref.commentStatus,
      commentStatus = _ref$commentStatus === void 0 ? 'open' : _ref$commentStatus,
      props = Object(objectWithoutProperties["a" /* default */])(_ref, ["commentStatus"]);

  var onToggleComments = function onToggleComments() {
    return props.editPost({
      comment_status: commentStatus === 'open' ? 'closed' : 'open'
    });
  };

  return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["CheckboxControl"], {
    label: Object(external_this_wp_i18n_["__"])('Allow comments'),
    checked: commentStatus === 'open',
    onChange: onToggleComments
  });
}

/* harmony default export */ var post_comments = (Object(external_this_wp_compose_["compose"])([Object(external_this_wp_data_["withSelect"])(function (select) {
  return {
    commentStatus: select('core/editor').getEditedPostAttribute('comment_status')
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  return {
    editPost: dispatch('core/editor').editPost
  };
})])(PostComments));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-excerpt/index.js


/**
 * WordPress dependencies
 */





function PostExcerpt(_ref) {
  var excerpt = _ref.excerpt,
      onUpdateExcerpt = _ref.onUpdateExcerpt;
  return Object(external_this_wp_element_["createElement"])("div", {
    className: "editor-post-excerpt"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["TextareaControl"], {
    label: Object(external_this_wp_i18n_["__"])('Write an excerpt (optional)'),
    className: "editor-post-excerpt__textarea",
    onChange: function onChange(value) {
      return onUpdateExcerpt(value);
    },
    value: excerpt
  }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ExternalLink"], {
    href: Object(external_this_wp_i18n_["__"])('https://wordpress.org/support/article/excerpt/')
  }, Object(external_this_wp_i18n_["__"])('Learn more about manual excerpts')));
}

/* harmony default export */ var post_excerpt = (Object(external_this_wp_compose_["compose"])([Object(external_this_wp_data_["withSelect"])(function (select) {
  return {
    excerpt: select('core/editor').getEditedPostAttribute('excerpt')
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  return {
    onUpdateExcerpt: function onUpdateExcerpt(excerpt) {
      dispatch('core/editor').editPost({
        excerpt: excerpt
      });
    }
  };
})])(PostExcerpt));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-excerpt/check.js



/**
 * Internal dependencies
 */


function PostExcerptCheck(props) {
  return Object(external_this_wp_element_["createElement"])(post_type_support_check, Object(esm_extends["a" /* default */])({}, props, {
    supportKeys: "excerpt"
  }));
}

/* harmony default export */ var post_excerpt_check = (PostExcerptCheck);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/theme-support-check/index.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


function ThemeSupportCheck(_ref) {
  var themeSupports = _ref.themeSupports,
      children = _ref.children,
      postType = _ref.postType,
      supportKeys = _ref.supportKeys;
  var isSupported = Object(external_this_lodash_["some"])(Object(external_this_lodash_["castArray"])(supportKeys), function (key) {
    var supported = Object(external_this_lodash_["get"])(themeSupports, [key], false); // 'post-thumbnails' can be boolean or an array of post types.
    // In the latter case, we need to verify `postType` exists
    // within `supported`. If `postType` isn't passed, then the check
    // should fail.

    if ('post-thumbnails' === key && Object(external_this_lodash_["isArray"])(supported)) {
      return Object(external_this_lodash_["includes"])(supported, postType);
    }

    return supported;
  });

  if (!isSupported) {
    return null;
  }

  return children;
}
/* harmony default export */ var theme_support_check = (Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select('core'),
      getThemeSupports = _select.getThemeSupports;

  var _select2 = select('core/editor'),
      getEditedPostAttribute = _select2.getEditedPostAttribute;

  return {
    postType: getEditedPostAttribute('type'),
    themeSupports: getThemeSupports()
  };
})(ThemeSupportCheck));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-featured-image/check.js



/**
 * Internal dependencies
 */



function PostFeaturedImageCheck(props) {
  return Object(external_this_wp_element_["createElement"])(theme_support_check, {
    supportKeys: "post-thumbnails"
  }, Object(external_this_wp_element_["createElement"])(post_type_support_check, Object(esm_extends["a" /* default */])({}, props, {
    supportKeys: "thumbnail"
  })));
}

/* harmony default export */ var post_featured_image_check = (PostFeaturedImageCheck);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-featured-image/index.js



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */


var ALLOWED_MEDIA_TYPES = ['image']; // Used when labels from post type were not yet loaded or when they are not present.

var DEFAULT_FEATURE_IMAGE_LABEL = Object(external_this_wp_i18n_["__"])('Featured image');

var DEFAULT_SET_FEATURE_IMAGE_LABEL = Object(external_this_wp_i18n_["__"])('Set featured image');

var DEFAULT_REMOVE_FEATURE_IMAGE_LABEL = Object(external_this_wp_i18n_["__"])('Remove image');

function PostFeaturedImage(_ref) {
  var currentPostId = _ref.currentPostId,
      featuredImageId = _ref.featuredImageId,
      onUpdateImage = _ref.onUpdateImage,
      onDropImage = _ref.onDropImage,
      onRemoveImage = _ref.onRemoveImage,
      media = _ref.media,
      postType = _ref.postType,
      noticeUI = _ref.noticeUI;
  var postLabel = Object(external_this_lodash_["get"])(postType, ['labels'], {});
  var instructions = Object(external_this_wp_element_["createElement"])("p", null, Object(external_this_wp_i18n_["__"])('To edit the featured image, you need permission to upload media.'));
  var mediaWidth, mediaHeight, mediaSourceUrl;

  if (media) {
    var mediaSize = Object(external_this_wp_hooks_["applyFilters"])('editor.PostFeaturedImage.imageSize', 'post-thumbnail', media.id, currentPostId);

    if (Object(external_this_lodash_["has"])(media, ['media_details', 'sizes', mediaSize])) {
      // use mediaSize when available
      mediaWidth = media.media_details.sizes[mediaSize].width;
      mediaHeight = media.media_details.sizes[mediaSize].height;
      mediaSourceUrl = media.media_details.sizes[mediaSize].source_url;
    } else {
      // get fallbackMediaSize if mediaSize is not available
      var fallbackMediaSize = Object(external_this_wp_hooks_["applyFilters"])('editor.PostFeaturedImage.imageSize', 'thumbnail', media.id, currentPostId);

      if (Object(external_this_lodash_["has"])(media, ['media_details', 'sizes', fallbackMediaSize])) {
        // use fallbackMediaSize when mediaSize is not available
        mediaWidth = media.media_details.sizes[fallbackMediaSize].width;
        mediaHeight = media.media_details.sizes[fallbackMediaSize].height;
        mediaSourceUrl = media.media_details.sizes[fallbackMediaSize].source_url;
      } else {
        // use full image size when mediaFallbackSize and mediaSize are not available
        mediaWidth = media.media_details.width;
        mediaHeight = media.media_details.height;
        mediaSourceUrl = media.source_url;
      }
    }
  }

  return Object(external_this_wp_element_["createElement"])(post_featured_image_check, null, noticeUI, Object(external_this_wp_element_["createElement"])("div", {
    className: "editor-post-featured-image"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["MediaUploadCheck"], {
    fallback: instructions
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["MediaUpload"], {
    title: postLabel.featured_image || DEFAULT_FEATURE_IMAGE_LABEL,
    onSelect: onUpdateImage,
    unstableFeaturedImageFlow: true,
    allowedTypes: ALLOWED_MEDIA_TYPES,
    modalClass: !featuredImageId ? 'editor-post-featured-image__media-modal' : 'editor-post-featured-image__media-modal',
    render: function render(_ref2) {
      var open = _ref2.open;
      return Object(external_this_wp_element_["createElement"])("div", {
        className: "editor-post-featured-image__container"
      }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
        className: !featuredImageId ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview',
        onClick: open,
        "aria-label": !featuredImageId ? null : Object(external_this_wp_i18n_["__"])('Edit or update the image')
      }, !!featuredImageId && media && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ResponsiveWrapper"], {
        naturalWidth: mediaWidth,
        naturalHeight: mediaHeight,
        isInline: true
      }, Object(external_this_wp_element_["createElement"])("img", {
        src: mediaSourceUrl,
        alt: ""
      })), !!featuredImageId && !media && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Spinner"], null), !featuredImageId && (postLabel.set_featured_image || DEFAULT_SET_FEATURE_IMAGE_LABEL)), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["DropZone"], {
        onFilesDrop: onDropImage
      }));
    },
    value: featuredImageId
  })), !!featuredImageId && media && !media.isLoading && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["MediaUploadCheck"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["MediaUpload"], {
    title: postLabel.featured_image || DEFAULT_FEATURE_IMAGE_LABEL,
    onSelect: onUpdateImage,
    unstableFeaturedImageFlow: true,
    allowedTypes: ALLOWED_MEDIA_TYPES,
    modalClass: "editor-post-featured-image__media-modal",
    render: function render(_ref3) {
      var open = _ref3.open;
      return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
        onClick: open,
        isSecondary: true
      }, Object(external_this_wp_i18n_["__"])('Replace Image'));
    }
  })), !!featuredImageId && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["MediaUploadCheck"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
    onClick: onRemoveImage,
    isLink: true,
    isDestructive: true
  }, postLabel.remove_featured_image || DEFAULT_REMOVE_FEATURE_IMAGE_LABEL))));
}

var post_featured_image_applyWithSelect = Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select('core'),
      getMedia = _select.getMedia,
      getPostType = _select.getPostType;

  var _select2 = select('core/editor'),
      getCurrentPostId = _select2.getCurrentPostId,
      getEditedPostAttribute = _select2.getEditedPostAttribute;

  var featuredImageId = getEditedPostAttribute('featured_media');
  return {
    media: featuredImageId ? getMedia(featuredImageId) : null,
    currentPostId: getCurrentPostId(),
    postType: getPostType(getEditedPostAttribute('type')),
    featuredImageId: featuredImageId
  };
});
var post_featured_image_applyWithDispatch = Object(external_this_wp_data_["withDispatch"])(function (dispatch, _ref4, _ref5) {
  var noticeOperations = _ref4.noticeOperations;
  var select = _ref5.select;

  var _dispatch = dispatch('core/editor'),
      editPost = _dispatch.editPost;

  return {
    onUpdateImage: function onUpdateImage(image) {
      editPost({
        featured_media: image.id
      });
    },
    onDropImage: function onDropImage(filesList) {
      select('core/block-editor').getSettings().mediaUpload({
        allowedTypes: ['image'],
        filesList: filesList,
        onFileChange: function onFileChange(_ref6) {
          var _ref7 = Object(slicedToArray["a" /* default */])(_ref6, 1),
              image = _ref7[0];

          editPost({
            featured_media: image.id
          });
        },
        onError: function onError(message) {
          noticeOperations.removeAllNotices();
          noticeOperations.createErrorNotice(message);
        }
      });
    },
    onRemoveImage: function onRemoveImage() {
      editPost({
        featured_media: 0
      });
    }
  };
});
/* harmony default export */ var post_featured_image = (Object(external_this_wp_compose_["compose"])(external_this_wp_components_["withNotices"], post_featured_image_applyWithSelect, post_featured_image_applyWithDispatch, Object(external_this_wp_components_["withFilters"])('editor.PostFeaturedImage'))(PostFeaturedImage));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-format/check.js




/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */



function PostFormatCheck(_ref) {
  var disablePostFormats = _ref.disablePostFormats,
      props = Object(objectWithoutProperties["a" /* default */])(_ref, ["disablePostFormats"]);

  return !disablePostFormats && Object(external_this_wp_element_["createElement"])(post_type_support_check, Object(esm_extends["a" /* default */])({}, props, {
    supportKeys: "post-formats"
  }));
}

/* harmony default export */ var post_format_check = (Object(external_this_wp_data_["withSelect"])(function (select) {
  var editorSettings = select('core/editor').getEditorSettings();
  return {
    disablePostFormats: editorSettings.disablePostFormats
  };
})(PostFormatCheck));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-format/index.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


var POST_FORMATS = [{
  id: 'aside',
  caption: Object(external_this_wp_i18n_["__"])('Aside')
}, {
  id: 'gallery',
  caption: Object(external_this_wp_i18n_["__"])('Gallery')
}, {
  id: 'link',
  caption: Object(external_this_wp_i18n_["__"])('Link')
}, {
  id: 'image',
  caption: Object(external_this_wp_i18n_["__"])('Image')
}, {
  id: 'quote',
  caption: Object(external_this_wp_i18n_["__"])('Quote')
}, {
  id: 'standard',
  caption: Object(external_this_wp_i18n_["__"])('Standard')
}, {
  id: 'status',
  caption: Object(external_this_wp_i18n_["__"])('Status')
}, {
  id: 'video',
  caption: Object(external_this_wp_i18n_["__"])('Video')
}, {
  id: 'audio',
  caption: Object(external_this_wp_i18n_["__"])('Audio')
}, {
  id: 'chat',
  caption: Object(external_this_wp_i18n_["__"])('Chat')
}];

function PostFormat(_ref) {
  var onUpdatePostFormat = _ref.onUpdatePostFormat,
      _ref$postFormat = _ref.postFormat,
      postFormat = _ref$postFormat === void 0 ? 'standard' : _ref$postFormat,
      supportedFormats = _ref.supportedFormats,
      suggestedFormat = _ref.suggestedFormat,
      instanceId = _ref.instanceId;
  var postFormatSelectorId = 'post-format-selector-' + instanceId;
  var formats = POST_FORMATS.filter(function (format) {
    return Object(external_this_lodash_["includes"])(supportedFormats, format.id);
  });
  var suggestion = Object(external_this_lodash_["find"])(formats, function (format) {
    return format.id === suggestedFormat;
  }); // Disable reason: We need to change the value immiediately to show/hide the suggestion if needed

  return Object(external_this_wp_element_["createElement"])(post_format_check, null, Object(external_this_wp_element_["createElement"])("div", {
    className: "editor-post-format"
  }, Object(external_this_wp_element_["createElement"])("div", {
    className: "editor-post-format__content"
  }, Object(external_this_wp_element_["createElement"])("label", {
    htmlFor: postFormatSelectorId
  }, Object(external_this_wp_i18n_["__"])('Post Format')), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SelectControl"], {
    value: postFormat,
    onChange: function onChange(format) {
      return onUpdatePostFormat(format);
    },
    id: postFormatSelectorId,
    options: formats.map(function (format) {
      return {
        label: format.caption,
        value: format.id
      };
    })
  })), suggestion && suggestion.id !== postFormat && Object(external_this_wp_element_["createElement"])("div", {
    className: "editor-post-format__suggestion"
  }, Object(external_this_wp_i18n_["__"])('Suggestion:'), ' ', Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
    isLink: true,
    onClick: function onClick() {
      return onUpdatePostFormat(suggestion.id);
    }
  }, suggestion.caption))));
}

/* harmony default export */ var post_format = (Object(external_this_wp_compose_["compose"])([Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select('core/editor'),
      getEditedPostAttribute = _select.getEditedPostAttribute,
      getSuggestedPostFormat = _select.getSuggestedPostFormat;

  var postFormat = getEditedPostAttribute('format');
  var themeSupports = select('core').getThemeSupports(); // Ensure current format is always in the set.
  // The current format may not be a format supported by the theme.

  var supportedFormats = Object(external_this_lodash_["union"])([postFormat], Object(external_this_lodash_["get"])(themeSupports, ['formats'], []));
  return {
    postFormat: postFormat,
    supportedFormats: supportedFormats,
    suggestedFormat: getSuggestedPostFormat()
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  return {
    onUpdatePostFormat: function onUpdatePostFormat(postFormat) {
      dispatch('core/editor').editPost({
        format: postFormat
      });
    }
  };
}), external_this_wp_compose_["withInstanceId"]])(PostFormat));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-last-revision/check.js


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


function PostLastRevisionCheck(_ref) {
  var lastRevisionId = _ref.lastRevisionId,
      revisionsCount = _ref.revisionsCount,
      children = _ref.children;

  if (!lastRevisionId || revisionsCount < 2) {
    return null;
  }

  return Object(external_this_wp_element_["createElement"])(post_type_support_check, {
    supportKeys: "revisions"
  }, children);
}
/* harmony default export */ var post_last_revision_check = (Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select('core/editor'),
      getCurrentPostLastRevisionId = _select.getCurrentPostLastRevisionId,
      getCurrentPostRevisionsCount = _select.getCurrentPostRevisionsCount;

  return {
    lastRevisionId: getCurrentPostLastRevisionId(),
    revisionsCount: getCurrentPostRevisionsCount()
  };
})(PostLastRevisionCheck));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/utils/url.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Returns the URL of a WPAdmin Page.
 *
 * TODO: This should be moved to a module less specific to the editor.
 *
 * @param {string} page  Page to navigate to.
 * @param {Object} query Query Args.
 *
 * @return {string} WPAdmin URL.
 */

function getWPAdminURL(page, query) {
  return Object(external_this_wp_url_["addQueryArgs"])(page, query);
}
/**
 * Performs some basic cleanup of a string for use as a post slug
 *
 * This replicates some of what sanitize_title() does in WordPress core, but
 * is only designed to approximate what the slug will be.
 *
 * Converts whitespace, periods, forward slashes and underscores to hyphens.
 * Converts Latin-1 Supplement and Latin Extended-A letters to basic Latin
 * letters. Removes combining diacritical marks. Converts remaining string
 * to lowercase. It does not touch octets, HTML entities, or other encoded
 * characters.
 *
 * @param {string} string Title or slug to be processed
 *
 * @return {string} Processed string
 */

function cleanForSlug(string) {
  if (!string) {
    return '';
  }

  return Object(external_this_lodash_["toLower"])(Object(external_this_lodash_["deburr"])(Object(external_this_lodash_["trim"])(string.replace(/[\s\./_]+/g, '-'), '-')));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-last-revision/index.js


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */




function LastRevision(_ref) {
  var lastRevisionId = _ref.lastRevisionId,
      revisionsCount = _ref.revisionsCount;
  return Object(external_this_wp_element_["createElement"])(post_last_revision_check, null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
    href: getWPAdminURL('revision.php', {
      revision: lastRevisionId,
      gutenberg: true
    }),
    className: "editor-post-last-revision__title",
    icon: "backup"
  }, Object(external_this_wp_i18n_["sprintf"])(Object(external_this_wp_i18n_["_n"])('%d Revision', '%d Revisions', revisionsCount), revisionsCount)));
}

/* harmony default export */ var post_last_revision = (Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select('core/editor'),
      getCurrentPostLastRevisionId = _select.getCurrentPostLastRevisionId,
      getCurrentPostRevisionsCount = _select.getCurrentPostRevisionsCount;

  return {
    lastRevisionId: getCurrentPostLastRevisionId(),
    revisionsCount: getCurrentPostRevisionsCount()
  };
})(LastRevision));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-preview-button/index.js








/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */








function writeInterstitialMessage(targetDocument) {
  var markup = Object(external_this_wp_element_["renderToString"])(Object(external_this_wp_element_["createElement"])("div", {
    className: "editor-post-preview-button__interstitial-message"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SVG"], {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 96 96"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
    className: "outer",
    d: "M48 12c19.9 0 36 16.1 36 36S67.9 84 48 84 12 67.9 12 48s16.1-36 36-36",
    fill: "none"
  }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
    className: "inner",
    d: "M69.5 46.4c0-3.9-1.4-6.7-2.6-8.8-1.6-2.6-3.1-4.9-3.1-7.5 0-2.9 2.2-5.7 5.4-5.7h.4C63.9 19.2 56.4 16 48 16c-11.2 0-21 5.7-26.7 14.4h2.1c3.3 0 8.5-.4 8.5-.4 1.7-.1 1.9 2.4.2 2.6 0 0-1.7.2-3.7.3L40 67.5l7-20.9L42 33c-1.7-.1-3.3-.3-3.3-.3-1.7-.1-1.5-2.7.2-2.6 0 0 5.3.4 8.4.4 3.3 0 8.5-.4 8.5-.4 1.7-.1 1.9 2.4.2 2.6 0 0-1.7.2-3.7.3l11.5 34.3 3.3-10.4c1.6-4.5 2.4-7.8 2.4-10.5zM16.1 48c0 12.6 7.3 23.5 18 28.7L18.8 35c-1.7 4-2.7 8.4-2.7 13zm32.5 2.8L39 78.6c2.9.8 5.9 1.3 9 1.3 3.7 0 7.3-.6 10.6-1.8-.1-.1-.2-.3-.2-.4l-9.8-26.9zM76.2 36c0 3.2-.6 6.9-2.4 11.4L64 75.6c9.5-5.5 15.9-15.8 15.9-27.6 0-5.5-1.4-10.8-3.9-15.3.1 1 .2 2.1.2 3.3z",
    fill: "none"
  })), Object(external_this_wp_element_["createElement"])("p", null, Object(external_this_wp_i18n_["__"])('Generating preview…'))));
  markup += "\n\t\t<style>\n\t\t\tbody {\n\t\t\t\tmargin: 0;\n\t\t\t}\n\t\t\t.editor-post-preview-button__interstitial-message {\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: column;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t\twidth: 100vw;\n\t\t\t}\n\t\t\t@-webkit-keyframes paint {\n\t\t\t\t0% {\n\t\t\t\t\tstroke-dashoffset: 0;\n\t\t\t\t}\n\t\t\t}\n\t\t\t@-moz-keyframes paint {\n\t\t\t\t0% {\n\t\t\t\t\tstroke-dashoffset: 0;\n\t\t\t\t}\n\t\t\t}\n\t\t\t@-o-keyframes paint {\n\t\t\t\t0% {\n\t\t\t\t\tstroke-dashoffset: 0;\n\t\t\t\t}\n\t\t\t}\n\t\t\t@keyframes paint {\n\t\t\t\t0% {\n\t\t\t\t\tstroke-dashoffset: 0;\n\t\t\t\t}\n\t\t\t}\n\t\t\t.editor-post-preview-button__interstitial-message svg {\n\t\t\t\twidth: 192px;\n\t\t\t\theight: 192px;\n\t\t\t\tstroke: #555d66;\n\t\t\t\tstroke-width: 0.75;\n\t\t\t}\n\t\t\t.editor-post-preview-button__interstitial-message svg .outer,\n\t\t\t.editor-post-preview-button__interstitial-message svg .inner {\n\t\t\t\tstroke-dasharray: 280;\n\t\t\t\tstroke-dashoffset: 280;\n\t\t\t\t-webkit-animation: paint 1.5s ease infinite alternate;\n\t\t\t\t-moz-animation: paint 1.5s ease infinite alternate;\n\t\t\t\t-o-animation: paint 1.5s ease infinite alternate;\n\t\t\t\tanimation: paint 1.5s ease infinite alternate;\n\t\t\t}\n\t\t\tp {\n\t\t\t\ttext-align: center;\n\t\t\t\tfont-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\", sans-serif;\n\t\t\t}\n\t\t</style>\n\t";
  /**
   * Filters the interstitial message shown when generating previews.
   *
   * @param {string} markup The preview interstitial markup.
   */

  markup = Object(external_this_wp_hooks_["applyFilters"])('editor.PostPreview.interstitialMarkup', markup);
  targetDocument.write(markup);
  targetDocument.title = Object(external_this_wp_i18n_["__"])('Generating preview…');
  targetDocument.close();
}

var post_preview_button_PostPreviewButton =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(PostPreviewButton, _Component);

  function PostPreviewButton() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, PostPreviewButton);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(PostPreviewButton).apply(this, arguments));
    _this.openPreviewWindow = _this.openPreviewWindow.bind(Object(assertThisInitialized["a" /* default */])(_this));
    return _this;
  }

  Object(createClass["a" /* default */])(PostPreviewButton, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var previewLink = this.props.previewLink; // This relies on the window being responsible to unset itself when
      // navigation occurs or a new preview window is opened, to avoid
      // unintentional forceful redirects.

      if (previewLink && !prevProps.previewLink) {
        this.setPreviewWindowLink(previewLink);
      }
    }
    /**
     * Sets the preview window's location to the given URL, if a preview window
     * exists and is not closed.
     *
     * @param {string} url URL to assign as preview window location.
     */

  }, {
    key: "setPreviewWindowLink",
    value: function setPreviewWindowLink(url) {
      var previewWindow = this.previewWindow;

      if (previewWindow && !previewWindow.closed) {
        previewWindow.location = url;
      }
    }
  }, {
    key: "getWindowTarget",
    value: function getWindowTarget() {
      var postId = this.props.postId;
      return "wp-preview-".concat(postId);
    }
  }, {
    key: "openPreviewWindow",
    value: function openPreviewWindow(event) {
      // Our Preview button has its 'href' and 'target' set correctly for a11y
      // purposes. Unfortunately, though, we can't rely on the default 'click'
      // handler since sometimes it incorrectly opens a new tab instead of reusing
      // the existing one.
      // https://github.com/WordPress/gutenberg/pull/8330
      event.preventDefault(); // Open up a Preview tab if needed. This is where we'll show the preview.

      if (!this.previewWindow || this.previewWindow.closed) {
        this.previewWindow = window.open('', this.getWindowTarget());
      } // Focus the Preview tab. This might not do anything, depending on the browser's
      // and user's preferences.
      // https://html.spec.whatwg.org/multipage/interaction.html#dom-window-focus


      this.previewWindow.focus(); // If we don't need to autosave the post before previewing, then we simply
      // load the Preview URL in the Preview tab.

      if (!this.props.isAutosaveable) {
        this.setPreviewWindowLink(event.target.href);
        return;
      } // Request an autosave. This happens asynchronously and causes the component
      // to update when finished.


      if (this.props.isDraft) {
        this.props.savePost({
          isPreview: true
        });
      } else {
        this.props.autosave({
          isPreview: true
        });
      } // Display a 'Generating preview' message in the Preview tab while we wait for the
      // autosave to finish.


      writeInterstitialMessage(this.previewWindow.document);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          previewLink = _this$props.previewLink,
          currentPostLink = _this$props.currentPostLink,
          isSaveable = _this$props.isSaveable; // Link to the `?preview=true` URL if we have it, since this lets us see
      // changes that were autosaved since the post was last published. Otherwise,
      // just link to the post's URL.

      var href = previewLink || currentPostLink;
      return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
        isSecondary: true,
        className: "editor-post-preview",
        href: href,
        target: this.getWindowTarget(),
        disabled: !isSaveable,
        onClick: this.openPreviewWindow
      }, Object(external_this_wp_i18n_["_x"])('Preview', 'imperative verb'), Object(external_this_wp_element_["createElement"])("span", {
        className: "screen-reader-text"
      },
      /* translators: accessibility text */
      Object(external_this_wp_i18n_["__"])('(opens in a new tab)')));
    }
  }]);

  return PostPreviewButton;
}(external_this_wp_element_["Component"]);
/* harmony default export */ var post_preview_button = (Object(external_this_wp_compose_["compose"])([Object(external_this_wp_data_["withSelect"])(function (select, _ref) {
  var forcePreviewLink = _ref.forcePreviewLink,
      forceIsAutosaveable = _ref.forceIsAutosaveable;

  var _select = select('core/editor'),
      getCurrentPostId = _select.getCurrentPostId,
      getCurrentPostAttribute = _select.getCurrentPostAttribute,
      getEditedPostAttribute = _select.getEditedPostAttribute,
      isEditedPostSaveable = _select.isEditedPostSaveable,
      isEditedPostAutosaveable = _select.isEditedPostAutosaveable,
      getEditedPostPreviewLink = _select.getEditedPostPreviewLink;

  var _select2 = select('core'),
      getPostType = _select2.getPostType;

  var previewLink = getEditedPostPreviewLink();
  var postType = getPostType(getEditedPostAttribute('type'));
  return {
    postId: getCurrentPostId(),
    currentPostLink: getCurrentPostAttribute('link'),
    previewLink: forcePreviewLink !== undefined ? forcePreviewLink : previewLink,
    isSaveable: isEditedPostSaveable(),
    isAutosaveable: forceIsAutosaveable || isEditedPostAutosaveable(),
    isViewable: Object(external_this_lodash_["get"])(postType, ['viewable'], false),
    isDraft: ['draft', 'auto-draft'].indexOf(getEditedPostAttribute('status')) !== -1
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  return {
    autosave: dispatch('core/editor').autosave,
    savePost: dispatch('core/editor').savePost
  };
}), Object(external_this_wp_compose_["ifCondition"])(function (_ref2) {
  var isViewable = _ref2.isViewable;
  return isViewable;
})])(post_preview_button_PostPreviewButton));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-locked-modal/index.js








/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */




var post_locked_modal_PostLockedModal =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(PostLockedModal, _Component);

  function PostLockedModal() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, PostLockedModal);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(PostLockedModal).apply(this, arguments));
    _this.sendPostLock = _this.sendPostLock.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.receivePostLock = _this.receivePostLock.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.releasePostLock = _this.releasePostLock.bind(Object(assertThisInitialized["a" /* default */])(_this));
    return _this;
  }

  Object(createClass["a" /* default */])(PostLockedModal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var hookName = this.getHookName(); // Details on these events on the Heartbeat API docs
      // https://developer.wordpress.org/plugins/javascript/heartbeat-api/

      Object(external_this_wp_hooks_["addAction"])('heartbeat.send', hookName, this.sendPostLock);
      Object(external_this_wp_hooks_["addAction"])('heartbeat.tick', hookName, this.receivePostLock);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var hookName = this.getHookName();
      Object(external_this_wp_hooks_["removeAction"])('heartbeat.send', hookName);
      Object(external_this_wp_hooks_["removeAction"])('heartbeat.tick', hookName);
    }
    /**
     * Returns a `@wordpress/hooks` hook name specific to the instance of the
     * component.
     *
     * @return {string} Hook name prefix.
     */

  }, {
    key: "getHookName",
    value: function getHookName() {
      var instanceId = this.props.instanceId;
      return 'core/editor/post-locked-modal-' + instanceId;
    }
    /**
     * Keep the lock refreshed.
     *
     * When the user does not send a heartbeat in a heartbeat-tick
     * the user is no longer editing and another user can start editing.
     *
     * @param {Object} data Data to send in the heartbeat request.
     */

  }, {
    key: "sendPostLock",
    value: function sendPostLock(data) {
      var _this$props = this.props,
          isLocked = _this$props.isLocked,
          activePostLock = _this$props.activePostLock,
          postId = _this$props.postId;

      if (isLocked) {
        return;
      }

      data['wp-refresh-post-lock'] = {
        lock: activePostLock,
        post_id: postId
      };
    }
    /**
     * Refresh post locks: update the lock string or show the dialog if somebody has taken over editing.
     *
     * @param {Object} data Data received in the heartbeat request
     */

  }, {
    key: "receivePostLock",
    value: function receivePostLock(data) {
      if (!data['wp-refresh-post-lock']) {
        return;
      }

      var _this$props2 = this.props,
          autosave = _this$props2.autosave,
          updatePostLock = _this$props2.updatePostLock;
      var received = data['wp-refresh-post-lock'];

      if (received.lock_error) {
        // Auto save and display the takeover modal.
        autosave();
        updatePostLock({
          isLocked: true,
          isTakeover: true,
          user: {
            avatar: received.lock_error.avatar_src
          }
        });
      } else if (received.new_lock) {
        updatePostLock({
          isLocked: false,
          activePostLock: received.new_lock
        });
      }
    }
    /**
     * Unlock the post before the window is exited.
     */

  }, {
    key: "releasePostLock",
    value: function releasePostLock() {
      var _this$props3 = this.props,
          isLocked = _this$props3.isLocked,
          activePostLock = _this$props3.activePostLock,
          postLockUtils = _this$props3.postLockUtils,
          postId = _this$props3.postId;

      if (isLocked || !activePostLock) {
        return;
      }

      var data = new window.FormData();
      data.append('action', 'wp-remove-post-lock');
      data.append('_wpnonce', postLockUtils.unlockNonce);
      data.append('post_ID', postId);
      data.append('active_post_lock', activePostLock);

      if (window.navigator.sendBeacon) {
        window.navigator.sendBeacon(postLockUtils.ajaxUrl, data);
      } else {
        var xhr = new window.XMLHttpRequest();
        xhr.open('POST', postLockUtils.ajaxUrl, false);
        xhr.send(data);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          user = _this$props4.user,
          postId = _this$props4.postId,
          isLocked = _this$props4.isLocked,
          isTakeover = _this$props4.isTakeover,
          postLockUtils = _this$props4.postLockUtils,
          postType = _this$props4.postType;

      if (!isLocked) {
        return null;
      }

      var userDisplayName = user.name;
      var userAvatar = user.avatar;
      var unlockUrl = Object(external_this_wp_url_["addQueryArgs"])('post.php', {
        'get-post-lock': '1',
        lockKey: true,
        post: postId,
        action: 'edit',
        _wpnonce: postLockUtils.nonce
      });
      var allPostsUrl = getWPAdminURL('edit.php', {
        post_type: Object(external_this_lodash_["get"])(postType, ['slug'])
      });

      var allPostsLabel = Object(external_this_wp_i18n_["__"])('Exit the Editor');

      return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Modal"], {
        title: isTakeover ? Object(external_this_wp_i18n_["__"])('Someone else has taken over this post.') : Object(external_this_wp_i18n_["__"])('This post is already being edited.'),
        focusOnMount: true,
        shouldCloseOnClickOutside: false,
        shouldCloseOnEsc: false,
        isDismissible: false,
        className: "editor-post-locked-modal"
      }, !!userAvatar && Object(external_this_wp_element_["createElement"])("img", {
        src: userAvatar,
        alt: Object(external_this_wp_i18n_["__"])('Avatar'),
        className: "editor-post-locked-modal__avatar"
      }), !!isTakeover && Object(external_this_wp_element_["createElement"])("div", null, Object(external_this_wp_element_["createElement"])("div", null, userDisplayName ? Object(external_this_wp_i18n_["sprintf"])(
      /* translators: %s: user's display name */
      Object(external_this_wp_i18n_["__"])('%s now has editing control of this post. Don’t worry, your changes up to this moment have been saved.'), userDisplayName) : Object(external_this_wp_i18n_["__"])('Another user now has editing control of this post. Don’t worry, your changes up to this moment have been saved.')), Object(external_this_wp_element_["createElement"])("div", {
        className: "editor-post-locked-modal__buttons"
      }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
        isPrimary: true,
        href: allPostsUrl
      }, allPostsLabel))), !isTakeover && Object(external_this_wp_element_["createElement"])("div", null, Object(external_this_wp_element_["createElement"])("div", null, userDisplayName ? Object(external_this_wp_i18n_["sprintf"])(
      /* translators: %s: user's display name */
      Object(external_this_wp_i18n_["__"])('%s is currently working on this post, which means you cannot make changes, unless you take over.'), userDisplayName) : Object(external_this_wp_i18n_["__"])('Another user is currently working on this post, which means you cannot make changes, unless you take over.')), Object(external_this_wp_element_["createElement"])("div", {
        className: "editor-post-locked-modal__buttons"
      }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
        isSecondary: true,
        href: allPostsUrl
      }, allPostsLabel), Object(external_this_wp_element_["createElement"])(post_preview_button, null), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
        isPrimary: true,
        href: unlockUrl
      }, Object(external_this_wp_i18n_["__"])('Take Over')))));
    }
  }]);

  return PostLockedModal;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var post_locked_modal = (Object(external_this_wp_compose_["compose"])(Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select('core/editor'),
      isPostLocked = _select.isPostLocked,
      isPostLockTakeover = _select.isPostLockTakeover,
      getPostLockUser = _select.getPostLockUser,
      getCurrentPostId = _select.getCurrentPostId,
      getActivePostLock = _select.getActivePostLock,
      getEditedPostAttribute = _select.getEditedPostAttribute,
      getEditorSettings = _select.getEditorSettings;

  var _select2 = select('core'),
      getPostType = _select2.getPostType;

  return {
    isLocked: isPostLocked(),
    isTakeover: isPostLockTakeover(),
    user: getPostLockUser(),
    postId: getCurrentPostId(),
    postLockUtils: getEditorSettings().postLockUtils,
    activePostLock: getActivePostLock(),
    postType: getPostType(getEditedPostAttribute('type'))
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/editor'),
      autosave = _dispatch.autosave,
      updatePostLock = _dispatch.updatePostLock;

  return {
    autosave: autosave,
    updatePostLock: updatePostLock
  };
}), external_this_wp_compose_["withInstanceId"], Object(external_this_wp_compose_["withGlobalEvents"])({
  beforeunload: 'releasePostLock'
}))(post_locked_modal_PostLockedModal));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-pending-status/check.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



function PostPendingStatusCheck(_ref) {
  var hasPublishAction = _ref.hasPublishAction,
      isPublished = _ref.isPublished,
      children = _ref.children;

  if (isPublished || !hasPublishAction) {
    return null;
  }

  return children;
}
/* harmony default export */ var post_pending_status_check = (Object(external_this_wp_compose_["compose"])(Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select('core/editor'),
      isCurrentPostPublished = _select.isCurrentPostPublished,
      getCurrentPostType = _select.getCurrentPostType,
      getCurrentPost = _select.getCurrentPost;

  return {
    hasPublishAction: Object(external_this_lodash_["get"])(getCurrentPost(), ['_links', 'wp:action-publish'], false),
    isPublished: isCurrentPostPublished(),
    postType: getCurrentPostType()
  };
}))(PostPendingStatusCheck));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-pending-status/index.js


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


function PostPendingStatus(_ref) {
  var status = _ref.status,
      onUpdateStatus = _ref.onUpdateStatus;

  var togglePendingStatus = function togglePendingStatus() {
    var updatedStatus = status === 'pending' ? 'draft' : 'pending';
    onUpdateStatus(updatedStatus);
  };

  return Object(external_this_wp_element_["createElement"])(post_pending_status_check, null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["CheckboxControl"], {
    label: Object(external_this_wp_i18n_["__"])('Pending review'),
    checked: status === 'pending',
    onChange: togglePendingStatus
  }));
}
/* harmony default export */ var post_pending_status = (Object(external_this_wp_compose_["compose"])(Object(external_this_wp_data_["withSelect"])(function (select) {
  return {
    status: select('core/editor').getEditedPostAttribute('status')
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  return {
    onUpdateStatus: function onUpdateStatus(status) {
      dispatch('core/editor').editPost({
        status: status
      });
    }
  };
}))(PostPendingStatus));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-pingbacks/index.js



/**
 * WordPress dependencies
 */





function PostPingbacks(_ref) {
  var _ref$pingStatus = _ref.pingStatus,
      pingStatus = _ref$pingStatus === void 0 ? 'open' : _ref$pingStatus,
      props = Object(objectWithoutProperties["a" /* default */])(_ref, ["pingStatus"]);

  var onTogglePingback = function onTogglePingback() {
    return props.editPost({
      ping_status: pingStatus === 'open' ? 'closed' : 'open'
    });
  };

  return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["CheckboxControl"], {
    label: Object(external_this_wp_i18n_["__"])('Allow pingbacks & trackbacks'),
    checked: pingStatus === 'open',
    onChange: onTogglePingback
  });
}

/* harmony default export */ var post_pingbacks = (Object(external_this_wp_compose_["compose"])([Object(external_this_wp_data_["withSelect"])(function (select) {
  return {
    pingStatus: select('core/editor').getEditedPostAttribute('ping_status')
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  return {
    editPost: dispatch('core/editor').editPost
  };
})])(PostPingbacks));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-publish-button/label.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




function PublishButtonLabel(_ref) {
  var isPublished = _ref.isPublished,
      isBeingScheduled = _ref.isBeingScheduled,
      isSaving = _ref.isSaving,
      isPublishing = _ref.isPublishing,
      hasPublishAction = _ref.hasPublishAction,
      isAutosaving = _ref.isAutosaving,
      hasNonPostEntityChanges = _ref.hasNonPostEntityChanges;

  if (isPublishing) {
    return Object(external_this_wp_i18n_["__"])('Publishing…');
  } else if (isPublished && isSaving && !isAutosaving) {
    return Object(external_this_wp_i18n_["__"])('Updating…');
  } else if (isBeingScheduled && isSaving && !isAutosaving) {
    return Object(external_this_wp_i18n_["__"])('Scheduling…');
  }

  if (!hasPublishAction) {
    return hasNonPostEntityChanges ? Object(external_this_wp_i18n_["__"])('Submit for Review…') : Object(external_this_wp_i18n_["__"])('Submit for Review');
  } else if (isPublished) {
    return hasNonPostEntityChanges ? Object(external_this_wp_i18n_["__"])('Update…') : Object(external_this_wp_i18n_["__"])('Update');
  } else if (isBeingScheduled) {
    return hasNonPostEntityChanges ? Object(external_this_wp_i18n_["__"])('Schedule…') : Object(external_this_wp_i18n_["__"])('Schedule');
  }

  return hasNonPostEntityChanges ? Object(external_this_wp_i18n_["__"])('Publish…') : Object(external_this_wp_i18n_["__"])('Publish');
}
/* harmony default export */ var post_publish_button_label = (Object(external_this_wp_compose_["compose"])([Object(external_this_wp_data_["withSelect"])(function (select, _ref2) {
  var forceIsSaving = _ref2.forceIsSaving;

  var _select = select('core/editor'),
      isCurrentPostPublished = _select.isCurrentPostPublished,
      isEditedPostBeingScheduled = _select.isEditedPostBeingScheduled,
      isSavingPost = _select.isSavingPost,
      isPublishingPost = _select.isPublishingPost,
      getCurrentPost = _select.getCurrentPost,
      getCurrentPostType = _select.getCurrentPostType,
      isAutosavingPost = _select.isAutosavingPost;

  return {
    isPublished: isCurrentPostPublished(),
    isBeingScheduled: isEditedPostBeingScheduled(),
    isSaving: forceIsSaving || isSavingPost(),
    isPublishing: isPublishingPost(),
    hasPublishAction: Object(external_this_lodash_["get"])(getCurrentPost(), ['_links', 'wp:action-publish'], false),
    postType: getCurrentPostType(),
    isAutosaving: isAutosavingPost()
  };
})])(PublishButtonLabel));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-publish-button/index.js









/**
 * External dependencies
 */




/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */



var post_publish_button_PostPublishButton =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(PostPublishButton, _Component);

  function PostPublishButton(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, PostPublishButton);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(PostPublishButton).call(this, props));
    _this.buttonNode = Object(external_this_wp_element_["createRef"])();
    _this.createOnClick = _this.createOnClick.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.closeEntitiesSavedStates = _this.closeEntitiesSavedStates.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.state = {
      entitiesSavedStatesCallback: false
    };
    _this.createIgnoredForSave = memize_default()(function (postType, postId) {
      return new equivalent_key_map_default.a([[['postType', postType, String(postId)], true]]);
    }, {
      maxSize: 1
    });
    return _this;
  }

  Object(createClass["a" /* default */])(PostPublishButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.focusOnMount) {
        this.buttonNode.current.focus();
      }
    }
  }, {
    key: "createOnClick",
    value: function createOnClick(callback) {
      var _this2 = this;

      return function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var hasNonPostEntityChanges = _this2.props.hasNonPostEntityChanges;

        if (hasNonPostEntityChanges) {
          // The modal for multiple entity saving will open,
          // hold the callback for saving/publishing the post
          // so that we can call it if the post entity is checked.
          _this2.setState({
            entitiesSavedStatesCallback: function entitiesSavedStatesCallback() {
              return callback.apply(void 0, args);
            }
          });

          return external_this_lodash_["noop"];
        }

        return callback.apply(void 0, args);
      };
    }
  }, {
    key: "closeEntitiesSavedStates",
    value: function closeEntitiesSavedStates(savedById) {
      var _this$props = this.props,
          postType = _this$props.postType,
          postId = _this$props.postId;
      var entitiesSavedStatesCallback = this.state.entitiesSavedStatesCallback;
      this.setState({
        entitiesSavedStatesCallback: false
      }, function () {
        if (savedById && savedById.has(['postType', postType, String(postId)])) {
          // The post entity was checked, call the held callback from `createOnClick`.
          entitiesSavedStatesCallback();
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          forceIsDirty = _this$props2.forceIsDirty,
          forceIsSaving = _this$props2.forceIsSaving,
          hasPublishAction = _this$props2.hasPublishAction,
          isBeingScheduled = _this$props2.isBeingScheduled,
          isOpen = _this$props2.isOpen,
          isPostSavingLocked = _this$props2.isPostSavingLocked,
          isPublishable = _this$props2.isPublishable,
          isPublished = _this$props2.isPublished,
          isSaveable = _this$props2.isSaveable,
          isSaving = _this$props2.isSaving,
          isToggle = _this$props2.isToggle,
          onSave = _this$props2.onSave,
          onStatusChange = _this$props2.onStatusChange,
          _this$props2$onSubmit = _this$props2.onSubmit,
          onSubmit = _this$props2$onSubmit === void 0 ? external_this_lodash_["noop"] : _this$props2$onSubmit,
          onToggle = _this$props2.onToggle,
          visibility = _this$props2.visibility,
          hasNonPostEntityChanges = _this$props2.hasNonPostEntityChanges,
          postType = _this$props2.postType,
          postId = _this$props2.postId;
      var entitiesSavedStatesCallback = this.state.entitiesSavedStatesCallback;
      var isButtonDisabled = isSaving || forceIsSaving || !isSaveable || isPostSavingLocked || !isPublishable && !forceIsDirty;
      var isToggleDisabled = isPublished || isSaving || forceIsSaving || !isSaveable || !isPublishable && !forceIsDirty;
      var publishStatus;

      if (!hasPublishAction) {
        publishStatus = 'pending';
      } else if (visibility === 'private') {
        publishStatus = 'private';
      } else if (isBeingScheduled) {
        publishStatus = 'future';
      } else {
        publishStatus = 'publish';
      }

      var onClickButton = function onClickButton() {
        if (isButtonDisabled) {
          return;
        }

        onSubmit();
        onStatusChange(publishStatus);
        onSave();
      };

      var onClickToggle = function onClickToggle() {
        if (isToggleDisabled) {
          return;
        }

        onToggle();
      };

      var buttonProps = {
        'aria-disabled': isButtonDisabled && !hasNonPostEntityChanges,
        className: 'editor-post-publish-button',
        isBusy: isSaving && isPublished,
        isPrimary: true,
        onClick: this.createOnClick(onClickButton)
      };
      var toggleProps = {
        'aria-disabled': isToggleDisabled && !hasNonPostEntityChanges,
        'aria-expanded': isOpen,
        className: 'editor-post-publish-panel__toggle',
        isBusy: isSaving && isPublished,
        isPrimary: true,
        onClick: this.createOnClick(onClickToggle)
      };
      var toggleChildren = isBeingScheduled ? Object(external_this_wp_i18n_["__"])('Schedule…') : Object(external_this_wp_i18n_["__"])('Publish…');
      var buttonChildren = Object(external_this_wp_element_["createElement"])(post_publish_button_label, {
        forceIsSaving: forceIsSaving,
        hasNonPostEntityChanges: hasNonPostEntityChanges
      });
      var componentProps = isToggle ? toggleProps : buttonProps;
      var componentChildren = isToggle ? toggleChildren : buttonChildren;
      return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(EntitiesSavedStates, {
        isOpen: Boolean(entitiesSavedStatesCallback),
        onRequestClose: this.closeEntitiesSavedStates,
        ignoredForSave: this.createIgnoredForSave(postType, postId)
      }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], Object(esm_extends["a" /* default */])({
        ref: this.buttonNode
      }, componentProps, {
        className: classnames_default()(componentProps.className, 'editor-post-publish-button__button', {
          'has-changes-dot': hasNonPostEntityChanges
        })
      }), componentChildren));
    }
  }]);

  return PostPublishButton;
}(external_this_wp_element_["Component"]);
/* harmony default export */ var post_publish_button = (Object(external_this_wp_compose_["compose"])([Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select('core/editor'),
      isSavingPost = _select.isSavingPost,
      isEditedPostBeingScheduled = _select.isEditedPostBeingScheduled,
      getEditedPostVisibility = _select.getEditedPostVisibility,
      isCurrentPostPublished = _select.isCurrentPostPublished,
      isEditedPostSaveable = _select.isEditedPostSaveable,
      isEditedPostPublishable = _select.isEditedPostPublishable,
      isPostSavingLocked = _select.isPostSavingLocked,
      getCurrentPost = _select.getCurrentPost,
      getCurrentPostType = _select.getCurrentPostType,
      getCurrentPostId = _select.getCurrentPostId,
      hasNonPostEntityChanges = _select.hasNonPostEntityChanges;

  return {
    isSaving: isSavingPost(),
    isBeingScheduled: isEditedPostBeingScheduled(),
    visibility: getEditedPostVisibility(),
    isSaveable: isEditedPostSaveable(),
    isPostSavingLocked: isPostSavingLocked(),
    isPublishable: isEditedPostPublishable(),
    isPublished: isCurrentPostPublished(),
    hasPublishAction: Object(external_this_lodash_["get"])(getCurrentPost(), ['_links', 'wp:action-publish'], false),
    postType: getCurrentPostType(),
    postId: getCurrentPostId(),
    hasNonPostEntityChanges: hasNonPostEntityChanges()
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/editor'),
      editPost = _dispatch.editPost,
      savePost = _dispatch.savePost;

  return {
    onStatusChange: function onStatusChange(status) {
      return editPost({
        status: status
      }, {
        undoIgnore: true
      });
    },
    onSave: savePost
  };
})])(post_publish_button_PostPublishButton));

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/close.js
var library_close = __webpack_require__(120);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-visibility/utils.js
/**
 * WordPress dependencies
 */

var visibilityOptions = [{
  value: 'public',
  label: Object(external_this_wp_i18n_["__"])('Public'),
  info: Object(external_this_wp_i18n_["__"])('Visible to everyone.')
}, {
  value: 'private',
  label: Object(external_this_wp_i18n_["__"])('Private'),
  info: Object(external_this_wp_i18n_["__"])('Only visible to site admins and editors.')
}, {
  value: 'password',
  label: Object(external_this_wp_i18n_["__"])('Password Protected'),
  info: Object(external_this_wp_i18n_["__"])('Protected with a password you choose. Only those with the password can view this post.')
}];

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-visibility/index.js








/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


var post_visibility_PostVisibility =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(PostVisibility, _Component);

  function PostVisibility(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, PostVisibility);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(PostVisibility).apply(this, arguments));
    _this.setPublic = _this.setPublic.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.setPrivate = _this.setPrivate.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.setPasswordProtected = _this.setPasswordProtected.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.updatePassword = _this.updatePassword.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.state = {
      hasPassword: !!props.password
    };
    return _this;
  }

  Object(createClass["a" /* default */])(PostVisibility, [{
    key: "setPublic",
    value: function setPublic() {
      var _this$props = this.props,
          visibility = _this$props.visibility,
          onUpdateVisibility = _this$props.onUpdateVisibility,
          status = _this$props.status;
      onUpdateVisibility(visibility === 'private' ? 'draft' : status);
      this.setState({
        hasPassword: false
      });
    }
  }, {
    key: "setPrivate",
    value: function setPrivate() {
      if ( // eslint-disable-next-line no-alert
      !window.confirm(Object(external_this_wp_i18n_["__"])('Would you like to privately publish this post now?'))) {
        return;
      }

      var _this$props2 = this.props,
          onUpdateVisibility = _this$props2.onUpdateVisibility,
          onSave = _this$props2.onSave;
      onUpdateVisibility('private');
      this.setState({
        hasPassword: false
      });
      onSave();
    }
  }, {
    key: "setPasswordProtected",
    value: function setPasswordProtected() {
      var _this$props3 = this.props,
          visibility = _this$props3.visibility,
          onUpdateVisibility = _this$props3.onUpdateVisibility,
          status = _this$props3.status,
          password = _this$props3.password;
      onUpdateVisibility(visibility === 'private' ? 'draft' : status, password || '');
      this.setState({
        hasPassword: true
      });
    }
  }, {
    key: "updatePassword",
    value: function updatePassword(event) {
      var _this$props4 = this.props,
          status = _this$props4.status,
          onUpdateVisibility = _this$props4.onUpdateVisibility;
      onUpdateVisibility(status, event.target.value);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          visibility = _this$props5.visibility,
          password = _this$props5.password,
          instanceId = _this$props5.instanceId;
      var visibilityHandlers = {
        public: {
          onSelect: this.setPublic,
          checked: visibility === 'public' && !this.state.hasPassword
        },
        private: {
          onSelect: this.setPrivate,
          checked: visibility === 'private'
        },
        password: {
          onSelect: this.setPasswordProtected,
          checked: this.state.hasPassword
        }
      };
      return [Object(external_this_wp_element_["createElement"])("fieldset", {
        key: "visibility-selector",
        className: "editor-post-visibility__dialog-fieldset"
      }, Object(external_this_wp_element_["createElement"])("legend", {
        className: "editor-post-visibility__dialog-legend"
      }, Object(external_this_wp_i18n_["__"])('Post Visibility')), visibilityOptions.map(function (_ref) {
        var value = _ref.value,
            label = _ref.label,
            info = _ref.info;
        return Object(external_this_wp_element_["createElement"])("div", {
          key: value,
          className: "editor-post-visibility__choice"
        }, Object(external_this_wp_element_["createElement"])("input", {
          type: "radio",
          name: "editor-post-visibility__setting-".concat(instanceId),
          value: value,
          onChange: visibilityHandlers[value].onSelect,
          checked: visibilityHandlers[value].checked,
          id: "editor-post-".concat(value, "-").concat(instanceId),
          "aria-describedby": "editor-post-".concat(value, "-").concat(instanceId, "-description"),
          className: "editor-post-visibility__dialog-radio"
        }), Object(external_this_wp_element_["createElement"])("label", {
          htmlFor: "editor-post-".concat(value, "-").concat(instanceId),
          className: "editor-post-visibility__dialog-label"
        }, label), Object(external_this_wp_element_["createElement"])("p", {
          id: "editor-post-".concat(value, "-").concat(instanceId, "-description"),
          className: "editor-post-visibility__dialog-info"
        }, info));
      })), this.state.hasPassword && Object(external_this_wp_element_["createElement"])("div", {
        className: "editor-post-visibility__dialog-password",
        key: "password-selector"
      }, Object(external_this_wp_element_["createElement"])("label", {
        htmlFor: "editor-post-visibility__dialog-password-input-".concat(instanceId),
        className: "screen-reader-text"
      }, Object(external_this_wp_i18n_["__"])('Create password')), Object(external_this_wp_element_["createElement"])("input", {
        className: "editor-post-visibility__dialog-password-input",
        id: "editor-post-visibility__dialog-password-input-".concat(instanceId),
        type: "text",
        onChange: this.updatePassword,
        value: password,
        placeholder: Object(external_this_wp_i18n_["__"])('Use a secure password')
      }))];
    }
  }]);

  return PostVisibility;
}(external_this_wp_element_["Component"]);
/* harmony default export */ var post_visibility = (Object(external_this_wp_compose_["compose"])([Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select('core/editor'),
      getEditedPostAttribute = _select.getEditedPostAttribute,
      getEditedPostVisibility = _select.getEditedPostVisibility;

  return {
    status: getEditedPostAttribute('status'),
    visibility: getEditedPostVisibility(),
    password: getEditedPostAttribute('password')
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/editor'),
      savePost = _dispatch.savePost,
      editPost = _dispatch.editPost;

  return {
    onSave: savePost,
    onUpdateVisibility: function onUpdateVisibility(status) {
      var password = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      editPost({
        status: status,
        password: password
      });
    }
  };
}), external_this_wp_compose_["withInstanceId"]])(post_visibility_PostVisibility));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-visibility/label.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



function PostVisibilityLabel(_ref) {
  var visibility = _ref.visibility;

  var getVisibilityLabel = function getVisibilityLabel() {
    return Object(external_this_lodash_["find"])(visibilityOptions, {
      value: visibility
    }).label;
  };

  return getVisibilityLabel(visibility);
}

/* harmony default export */ var post_visibility_label = (Object(external_this_wp_data_["withSelect"])(function (select) {
  return {
    visibility: select('core/editor').getEditedPostVisibility()
  };
})(PostVisibilityLabel));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-schedule/index.js


/**
 * WordPress dependencies
 */




function PostSchedule(_ref) {
  var date = _ref.date,
      onUpdateDate = _ref.onUpdateDate;

  var settings = Object(external_this_wp_date_["__experimentalGetSettings"])(); // To know if the current timezone is a 12 hour time with look for "a" in the time format
  // We also make sure this a is not escaped by a "/"


  var is12HourTime = /a(?!\\)/i.test(settings.formats.time.toLowerCase() // Test only the lower case a
  .replace(/\\\\/g, '') // Replace "//" with empty strings
  .split('').reverse().join('') // Reverse the string and test for "a" not followed by a slash
  );
  return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["DateTimePicker"], {
    key: "date-time-picker",
    currentDate: date,
    onChange: onUpdateDate,
    is12Hour: is12HourTime
  });
}
/* harmony default export */ var post_schedule = (Object(external_this_wp_compose_["compose"])([Object(external_this_wp_data_["withSelect"])(function (select) {
  return {
    date: select('core/editor').getEditedPostAttribute('date')
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  return {
    onUpdateDate: function onUpdateDate(date) {
      dispatch('core/editor').editPost({
        date: date
      });
    }
  };
})])(PostSchedule));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-schedule/label.js
/**
 * WordPress dependencies
 */



function PostScheduleLabel(_ref) {
  var date = _ref.date,
      isFloating = _ref.isFloating;

  var settings = Object(external_this_wp_date_["__experimentalGetSettings"])();

  return date && !isFloating ? Object(external_this_wp_date_["dateI18n"])("".concat(settings.formats.date, " ").concat(settings.formats.time), date) : Object(external_this_wp_i18n_["__"])('Immediately');
}
/* harmony default export */ var post_schedule_label = (Object(external_this_wp_data_["withSelect"])(function (select) {
  return {
    date: select('core/editor').getEditedPostAttribute('date'),
    isFloating: select('core/editor').isEditedPostDateFloating()
  };
})(PostScheduleLabel));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-taxonomies/flat-term-selector.js









function flat_term_selector_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function flat_term_selector_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { flat_term_selector_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { flat_term_selector_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */








/**
 * Module constants
 */

var DEFAULT_QUERY = {
  per_page: -1,
  orderby: 'count',
  order: 'desc',
  _fields: 'id,name'
};
var MAX_TERMS_SUGGESTIONS = 20;

var isSameTermName = function isSameTermName(termA, termB) {
  return termA.toLowerCase() === termB.toLowerCase();
};
/**
 * Returns a term object with name unescaped.
 * The unescape of the name property is done using lodash unescape function.
 *
 * @param {Object} term The term object to unescape.
 *
 * @return {Object} Term object with name property unescaped.
 */


var flat_term_selector_unescapeTerm = function unescapeTerm(term) {
  return flat_term_selector_objectSpread({}, term, {
    name: Object(external_this_lodash_["unescape"])(term.name)
  });
};
/**
 * Returns an array of term objects with names unescaped.
 * The unescape of each term is performed using the unescapeTerm function.
 *
 * @param {Object[]} terms Array of term objects to unescape.
 *
 * @return {Object[]} Array of term objects unescaped.
 */


var flat_term_selector_unescapeTerms = function unescapeTerms(terms) {
  return Object(external_this_lodash_["map"])(terms, flat_term_selector_unescapeTerm);
};

var flat_term_selector_FlatTermSelector =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(FlatTermSelector, _Component);

  function FlatTermSelector() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, FlatTermSelector);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(FlatTermSelector).apply(this, arguments));
    _this.onChange = _this.onChange.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.searchTerms = Object(external_this_lodash_["throttle"])(_this.searchTerms.bind(Object(assertThisInitialized["a" /* default */])(_this)), 500);
    _this.findOrCreateTerm = _this.findOrCreateTerm.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.state = {
      loading: !Object(external_this_lodash_["isEmpty"])(_this.props.terms),
      availableTerms: [],
      selectedTerms: []
    };
    return _this;
  }

  Object(createClass["a" /* default */])(FlatTermSelector, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (!Object(external_this_lodash_["isEmpty"])(this.props.terms)) {
        this.initRequest = this.fetchTerms({
          include: this.props.terms.join(','),
          per_page: -1
        });
        this.initRequest.then(function () {
          _this2.setState({
            loading: false
          });
        }, function (xhr) {
          if (xhr.statusText === 'abort') {
            return;
          }

          _this2.setState({
            loading: false
          });
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      Object(external_this_lodash_["invoke"])(this.initRequest, ['abort']);
      Object(external_this_lodash_["invoke"])(this.searchRequest, ['abort']);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.terms !== this.props.terms) {
        this.updateSelectedTerms(this.props.terms);
      }
    }
  }, {
    key: "fetchTerms",
    value: function fetchTerms() {
      var _this3 = this;

      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var taxonomy = this.props.taxonomy;

      var query = flat_term_selector_objectSpread({}, DEFAULT_QUERY, {}, params);

      var request = external_this_wp_apiFetch_default()({
        path: Object(external_this_wp_url_["addQueryArgs"])("/wp/v2/".concat(taxonomy.rest_base), query)
      });
      request.then(flat_term_selector_unescapeTerms).then(function (terms) {
        _this3.setState(function (state) {
          return {
            availableTerms: state.availableTerms.concat(terms.filter(function (term) {
              return !Object(external_this_lodash_["find"])(state.availableTerms, function (availableTerm) {
                return availableTerm.id === term.id;
              });
            }))
          };
        });

        _this3.updateSelectedTerms(_this3.props.terms);
      });
      return request;
    }
  }, {
    key: "updateSelectedTerms",
    value: function updateSelectedTerms() {
      var _this4 = this;

      var terms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var selectedTerms = terms.reduce(function (accumulator, termId) {
        var termObject = Object(external_this_lodash_["find"])(_this4.state.availableTerms, function (term) {
          return term.id === termId;
        });

        if (termObject) {
          accumulator.push(termObject.name);
        }

        return accumulator;
      }, []);
      this.setState({
        selectedTerms: selectedTerms
      });
    }
  }, {
    key: "findOrCreateTerm",
    value: function findOrCreateTerm(termName) {
      var _this5 = this;

      var taxonomy = this.props.taxonomy;
      var termNameEscaped = Object(external_this_lodash_["escape"])(termName); // Tries to create a term or fetch it if it already exists.

      return external_this_wp_apiFetch_default()({
        path: "/wp/v2/".concat(taxonomy.rest_base),
        method: 'POST',
        data: {
          name: termNameEscaped
        }
      }).catch(function (error) {
        var errorCode = error.code;

        if (errorCode === 'term_exists') {
          // If the terms exist, fetch it instead of creating a new one.
          _this5.addRequest = external_this_wp_apiFetch_default()({
            path: Object(external_this_wp_url_["addQueryArgs"])("/wp/v2/".concat(taxonomy.rest_base), flat_term_selector_objectSpread({}, DEFAULT_QUERY, {
              search: termNameEscaped
            }))
          }).then(flat_term_selector_unescapeTerms);
          return _this5.addRequest.then(function (searchResult) {
            return Object(external_this_lodash_["find"])(searchResult, function (result) {
              return isSameTermName(result.name, termName);
            });
          });
        }

        return Promise.reject(error);
      }).then(flat_term_selector_unescapeTerm);
    }
  }, {
    key: "onChange",
    value: function onChange(termNames) {
      var _this6 = this;

      var uniqueTerms = Object(external_this_lodash_["uniqBy"])(termNames, function (term) {
        return term.toLowerCase();
      });
      this.setState({
        selectedTerms: uniqueTerms
      });
      var newTermNames = uniqueTerms.filter(function (termName) {
        return !Object(external_this_lodash_["find"])(_this6.state.availableTerms, function (term) {
          return isSameTermName(term.name, termName);
        });
      });

      var termNamesToIds = function termNamesToIds(names, availableTerms) {
        return names.map(function (termName) {
          return Object(external_this_lodash_["find"])(availableTerms, function (term) {
            return isSameTermName(term.name, termName);
          }).id;
        });
      };

      if (newTermNames.length === 0) {
        return this.props.onUpdateTerms(termNamesToIds(uniqueTerms, this.state.availableTerms), this.props.taxonomy.rest_base);
      }

      Promise.all(newTermNames.map(this.findOrCreateTerm)).then(function (newTerms) {
        var newAvailableTerms = _this6.state.availableTerms.concat(newTerms);

        _this6.setState({
          availableTerms: newAvailableTerms
        });

        return _this6.props.onUpdateTerms(termNamesToIds(uniqueTerms, newAvailableTerms), _this6.props.taxonomy.rest_base);
      });
    }
  }, {
    key: "searchTerms",
    value: function searchTerms() {
      var search = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      Object(external_this_lodash_["invoke"])(this.searchRequest, ['abort']);
      this.searchRequest = this.fetchTerms({
        search: search
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          slug = _this$props.slug,
          taxonomy = _this$props.taxonomy,
          hasAssignAction = _this$props.hasAssignAction;

      if (!hasAssignAction) {
        return null;
      }

      var _this$state = this.state,
          loading = _this$state.loading,
          availableTerms = _this$state.availableTerms,
          selectedTerms = _this$state.selectedTerms;
      var termNames = availableTerms.map(function (term) {
        return term.name;
      });
      var newTermLabel = Object(external_this_lodash_["get"])(taxonomy, ['labels', 'add_new_item'], slug === 'post_tag' ? Object(external_this_wp_i18n_["__"])('Add new tag') : Object(external_this_wp_i18n_["__"])('Add new Term'));
      var singularName = Object(external_this_lodash_["get"])(taxonomy, ['labels', 'singular_name'], slug === 'post_tag' ? Object(external_this_wp_i18n_["__"])('Tag') : Object(external_this_wp_i18n_["__"])('Term'));
      var termAddedLabel = Object(external_this_wp_i18n_["sprintf"])(Object(external_this_wp_i18n_["_x"])('%s added', 'term'), singularName);
      var termRemovedLabel = Object(external_this_wp_i18n_["sprintf"])(Object(external_this_wp_i18n_["_x"])('%s removed', 'term'), singularName);
      var removeTermLabel = Object(external_this_wp_i18n_["sprintf"])(Object(external_this_wp_i18n_["_x"])('Remove %s', 'term'), singularName);
      return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["FormTokenField"], {
        value: selectedTerms,
        suggestions: termNames,
        onChange: this.onChange,
        onInputChange: this.searchTerms,
        maxSuggestions: MAX_TERMS_SUGGESTIONS,
        disabled: loading,
        label: newTermLabel,
        messages: {
          added: termAddedLabel,
          removed: termRemovedLabel,
          remove: removeTermLabel
        }
      });
    }
  }]);

  return FlatTermSelector;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var flat_term_selector = (Object(external_this_wp_compose_["compose"])(Object(external_this_wp_data_["withSelect"])(function (select, _ref) {
  var slug = _ref.slug;

  var _select = select('core/editor'),
      getCurrentPost = _select.getCurrentPost;

  var _select2 = select('core'),
      getTaxonomy = _select2.getTaxonomy;

  var taxonomy = getTaxonomy(slug);
  return {
    hasCreateAction: taxonomy ? Object(external_this_lodash_["get"])(getCurrentPost(), ['_links', 'wp:action-create-' + taxonomy.rest_base], false) : false,
    hasAssignAction: taxonomy ? Object(external_this_lodash_["get"])(getCurrentPost(), ['_links', 'wp:action-assign-' + taxonomy.rest_base], false) : false,
    terms: taxonomy ? select('core/editor').getEditedPostAttribute(taxonomy.rest_base) : [],
    taxonomy: taxonomy
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  return {
    onUpdateTerms: function onUpdateTerms(terms, restBase) {
      dispatch('core/editor').editPost(Object(defineProperty["a" /* default */])({}, restBase, terms));
    }
  };
}), Object(external_this_wp_components_["withFilters"])('editor.PostTaxonomyType'))(flat_term_selector_FlatTermSelector));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-publish-panel/maybe-tags-panel.js







/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */



var maybe_tags_panel_TagsPanel = function TagsPanel() {
  var panelBodyTitle = [Object(external_this_wp_i18n_["__"])('Suggestion:'), Object(external_this_wp_element_["createElement"])("span", {
    className: "editor-post-publish-panel__link",
    key: "label"
  }, Object(external_this_wp_i18n_["__"])('Add tags'))];
  return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], {
    initialOpen: false,
    title: panelBodyTitle
  }, Object(external_this_wp_element_["createElement"])("p", null, Object(external_this_wp_i18n_["__"])('Tags help users and search engines navigate your site and find your content. Add a few keywords to describe your post.')), Object(external_this_wp_element_["createElement"])(flat_term_selector, {
    slug: 'post_tag'
  }));
};

var maybe_tags_panel_MaybeTagsPanel =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(MaybeTagsPanel, _Component);

  function MaybeTagsPanel(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, MaybeTagsPanel);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(MaybeTagsPanel).call(this, props));
    _this.state = {
      hadTagsWhenOpeningThePanel: props.hasTags
    };
    return _this;
  }
  /*
   * We only want to show the tag panel if the post didn't have
   * any tags when the user hit the Publish button.
   *
   * We can't use the prop.hasTags because it'll change to true
   * if the user adds a new tag within the pre-publish panel.
   * This would force a re-render and a new prop.hasTags check,
   * hiding this panel and keeping the user from adding
   * more than one tag.
   */


  Object(createClass["a" /* default */])(MaybeTagsPanel, [{
    key: "render",
    value: function render() {
      if (!this.state.hadTagsWhenOpeningThePanel) {
        return Object(external_this_wp_element_["createElement"])(maybe_tags_panel_TagsPanel, null);
      }

      return null;
    }
  }]);

  return MaybeTagsPanel;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var maybe_tags_panel = (Object(external_this_wp_compose_["compose"])(Object(external_this_wp_data_["withSelect"])(function (select) {
  var postType = select('core/editor').getCurrentPostType();
  var tagsTaxonomy = select('core').getTaxonomy('post_tag');
  var tags = tagsTaxonomy && select('core/editor').getEditedPostAttribute(tagsTaxonomy.rest_base);
  return {
    areTagsFetched: tagsTaxonomy !== undefined,
    isPostTypeSupported: tagsTaxonomy && Object(external_this_lodash_["some"])(tagsTaxonomy.types, function (type) {
      return type === postType;
    }),
    hasTags: tags && tags.length
  };
}), Object(external_this_wp_compose_["ifCondition"])(function (_ref) {
  var areTagsFetched = _ref.areTagsFetched,
      isPostTypeSupported = _ref.isPostTypeSupported;
  return isPostTypeSupported && areTagsFetched;
}))(maybe_tags_panel_MaybeTagsPanel));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-publish-panel/maybe-post-format-panel.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */



var maybe_post_format_panel_PostFormatSuggestion = function PostFormatSuggestion(_ref) {
  var suggestedPostFormat = _ref.suggestedPostFormat,
      suggestionText = _ref.suggestionText,
      onUpdatePostFormat = _ref.onUpdatePostFormat;
  return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
    isLink: true,
    onClick: function onClick() {
      return onUpdatePostFormat(suggestedPostFormat);
    }
  }, suggestionText);
};

var maybe_post_format_panel_PostFormatPanel = function PostFormatPanel(_ref2) {
  var suggestion = _ref2.suggestion,
      onUpdatePostFormat = _ref2.onUpdatePostFormat;
  var panelBodyTitle = [Object(external_this_wp_i18n_["__"])('Suggestion:'), Object(external_this_wp_element_["createElement"])("span", {
    className: "editor-post-publish-panel__link",
    key: "label"
  }, Object(external_this_wp_i18n_["__"])('Use a post format'))];
  return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], {
    initialOpen: false,
    title: panelBodyTitle
  }, Object(external_this_wp_element_["createElement"])("p", null, Object(external_this_wp_i18n_["__"])('Your theme uses post formats to highlight different kinds of content, like images or videos. Apply a post format to see this special styling.')), Object(external_this_wp_element_["createElement"])("p", null, Object(external_this_wp_element_["createElement"])(maybe_post_format_panel_PostFormatSuggestion, {
    onUpdatePostFormat: onUpdatePostFormat,
    suggestedPostFormat: suggestion.id,
    suggestionText: Object(external_this_wp_i18n_["sprintf"])(Object(external_this_wp_i18n_["__"])('Apply the "%1$s" format.'), suggestion.caption)
  })));
};

var maybe_post_format_panel_getSuggestion = function getSuggestion(supportedFormats, suggestedPostFormat) {
  var formats = POST_FORMATS.filter(function (format) {
    return Object(external_this_lodash_["includes"])(supportedFormats, format.id);
  });
  return Object(external_this_lodash_["find"])(formats, function (format) {
    return format.id === suggestedPostFormat;
  });
};

/* harmony default export */ var maybe_post_format_panel = (Object(external_this_wp_compose_["compose"])(Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select('core/editor'),
      getEditedPostAttribute = _select.getEditedPostAttribute,
      getSuggestedPostFormat = _select.getSuggestedPostFormat;

  var supportedFormats = Object(external_this_lodash_["get"])(select('core').getThemeSupports(), ['formats'], []);
  return {
    currentPostFormat: getEditedPostAttribute('format'),
    suggestion: maybe_post_format_panel_getSuggestion(supportedFormats, getSuggestedPostFormat())
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  return {
    onUpdatePostFormat: function onUpdatePostFormat(postFormat) {
      dispatch('core/editor').editPost({
        format: postFormat
      });
    }
  };
}), Object(external_this_wp_compose_["ifCondition"])(function (_ref3) {
  var suggestion = _ref3.suggestion,
      currentPostFormat = _ref3.currentPostFormat;
  return suggestion && suggestion.id !== currentPostFormat;
}))(maybe_post_format_panel_PostFormatPanel));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-publish-panel/prepublish.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */








function PostPublishPanelPrepublish(_ref) {
  var hasPublishAction = _ref.hasPublishAction,
      isBeingScheduled = _ref.isBeingScheduled,
      children = _ref.children;
  var prePublishTitle, prePublishBodyText;

  if (!hasPublishAction) {
    prePublishTitle = Object(external_this_wp_i18n_["__"])('Are you ready to submit for review?');
    prePublishBodyText = Object(external_this_wp_i18n_["__"])('When you’re ready, submit your work for review, and an Editor will be able to approve it for you.');
  } else if (isBeingScheduled) {
    prePublishTitle = Object(external_this_wp_i18n_["__"])('Are you ready to schedule?');
    prePublishBodyText = Object(external_this_wp_i18n_["__"])('Your work will be published at the specified date and time.');
  } else {
    prePublishTitle = Object(external_this_wp_i18n_["__"])('Are you ready to publish?');
    prePublishBodyText = Object(external_this_wp_i18n_["__"])('Double-check your settings before publishing.');
  }

  return Object(external_this_wp_element_["createElement"])("div", {
    className: "editor-post-publish-panel__prepublish"
  }, Object(external_this_wp_element_["createElement"])("div", null, Object(external_this_wp_element_["createElement"])("strong", null, prePublishTitle)), Object(external_this_wp_element_["createElement"])("p", null, prePublishBodyText), hasPublishAction && Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], {
    initialOpen: false,
    title: [Object(external_this_wp_i18n_["__"])('Visibility:'), Object(external_this_wp_element_["createElement"])("span", {
      className: "editor-post-publish-panel__link",
      key: "label"
    }, Object(external_this_wp_element_["createElement"])(post_visibility_label, null))]
  }, Object(external_this_wp_element_["createElement"])(post_visibility, null)), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], {
    initialOpen: false,
    title: [Object(external_this_wp_i18n_["__"])('Publish:'), Object(external_this_wp_element_["createElement"])("span", {
      className: "editor-post-publish-panel__link",
      key: "label"
    }, Object(external_this_wp_element_["createElement"])(post_schedule_label, null))]
  }, Object(external_this_wp_element_["createElement"])(post_schedule, null))), Object(external_this_wp_element_["createElement"])(maybe_post_format_panel, null), Object(external_this_wp_element_["createElement"])(maybe_tags_panel, null), children);
}

/* harmony default export */ var prepublish = (Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select('core/editor'),
      getCurrentPost = _select.getCurrentPost,
      isEditedPostBeingScheduled = _select.isEditedPostBeingScheduled;

  return {
    hasPublishAction: Object(external_this_lodash_["get"])(getCurrentPost(), ['_links', 'wp:action-publish'], false),
    isBeingScheduled: isEditedPostBeingScheduled()
  };
})(PostPublishPanelPrepublish));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-publish-panel/postpublish.js








/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */



var postpublish_PostPublishPanelPostpublish =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(PostPublishPanelPostpublish, _Component);

  function PostPublishPanelPostpublish() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, PostPublishPanelPostpublish);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(PostPublishPanelPostpublish).apply(this, arguments));
    _this.state = {
      showCopyConfirmation: false
    };
    _this.onCopy = _this.onCopy.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onSelectInput = _this.onSelectInput.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.postLink = Object(external_this_wp_element_["createRef"])();
    return _this;
  }

  Object(createClass["a" /* default */])(PostPublishPanelPostpublish, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.focusOnMount) {
        this.postLink.current.focus();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.dismissCopyConfirmation);
    }
  }, {
    key: "onCopy",
    value: function onCopy() {
      var _this2 = this;

      this.setState({
        showCopyConfirmation: true
      });
      clearTimeout(this.dismissCopyConfirmation);
      this.dismissCopyConfirmation = setTimeout(function () {
        _this2.setState({
          showCopyConfirmation: false
        });
      }, 4000);
    }
  }, {
    key: "onSelectInput",
    value: function onSelectInput(event) {
      event.target.select();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          isScheduled = _this$props.isScheduled,
          post = _this$props.post,
          postType = _this$props.postType;
      var postLabel = Object(external_this_lodash_["get"])(postType, ['labels', 'singular_name']);
      var viewPostLabel = Object(external_this_lodash_["get"])(postType, ['labels', 'view_item']);
      var postPublishNonLinkHeader = isScheduled ? Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_i18n_["__"])('is now scheduled. It will go live on'), ' ', Object(external_this_wp_element_["createElement"])(post_schedule_label, null), ".") : Object(external_this_wp_i18n_["__"])('is now live.');
      return Object(external_this_wp_element_["createElement"])("div", {
        className: "post-publish-panel__postpublish"
      }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], {
        className: "post-publish-panel__postpublish-header"
      }, Object(external_this_wp_element_["createElement"])("a", {
        ref: this.postLink,
        href: post.link
      }, Object(external_this_wp_htmlEntities_["decodeEntities"])(post.title) || Object(external_this_wp_i18n_["__"])('(no title)')), ' ', postPublishNonLinkHeader), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], null, Object(external_this_wp_element_["createElement"])("p", {
        className: "post-publish-panel__postpublish-subheader"
      }, Object(external_this_wp_element_["createElement"])("strong", null, Object(external_this_wp_i18n_["__"])('What’s next?'))), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["TextControl"], {
        className: "post-publish-panel__postpublish-post-address",
        readOnly: true,
        label: Object(external_this_wp_i18n_["sprintf"])(
        /* translators: %s: post type singular name */
        Object(external_this_wp_i18n_["__"])('%s address'), postLabel),
        value: Object(external_this_wp_url_["safeDecodeURIComponent"])(post.link),
        onFocus: this.onSelectInput
      }), Object(external_this_wp_element_["createElement"])("div", {
        className: "post-publish-panel__postpublish-buttons"
      }, !isScheduled && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
        isSecondary: true,
        href: post.link
      }, viewPostLabel), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ClipboardButton"], {
        isSecondary: true,
        text: post.link,
        onCopy: this.onCopy
      }, this.state.showCopyConfirmation ? Object(external_this_wp_i18n_["__"])('Copied!') : Object(external_this_wp_i18n_["__"])('Copy Link')))), children);
    }
  }]);

  return PostPublishPanelPostpublish;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var postpublish = (Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select('core/editor'),
      getEditedPostAttribute = _select.getEditedPostAttribute,
      getCurrentPost = _select.getCurrentPost,
      isCurrentPostScheduled = _select.isCurrentPostScheduled;

  var _select2 = select('core'),
      getPostType = _select2.getPostType;

  return {
    post: getCurrentPost(),
    postType: getPostType(getEditedPostAttribute('type')),
    isScheduled: isCurrentPostScheduled()
  };
})(postpublish_PostPublishPanelPostpublish));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-publish-panel/index.js










/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */




var post_publish_panel_PostPublishPanel =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(PostPublishPanel, _Component);

  function PostPublishPanel() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, PostPublishPanel);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(PostPublishPanel).apply(this, arguments));
    _this.onSubmit = _this.onSubmit.bind(Object(assertThisInitialized["a" /* default */])(_this));
    return _this;
  }

  Object(createClass["a" /* default */])(PostPublishPanel, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      // Automatically collapse the publish sidebar when a post
      // is published and the user makes an edit.
      if (prevProps.isPublished && !this.props.isSaving && this.props.isDirty) {
        this.props.onClose();
      }
    }
  }, {
    key: "onSubmit",
    value: function onSubmit() {
      var _this$props = this.props,
          onClose = _this$props.onClose,
          hasPublishAction = _this$props.hasPublishAction,
          isPostTypeViewable = _this$props.isPostTypeViewable;

      if (!hasPublishAction || !isPostTypeViewable) {
        onClose();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          forceIsDirty = _this$props2.forceIsDirty,
          forceIsSaving = _this$props2.forceIsSaving,
          isBeingScheduled = _this$props2.isBeingScheduled,
          isPublished = _this$props2.isPublished,
          isPublishSidebarEnabled = _this$props2.isPublishSidebarEnabled,
          isScheduled = _this$props2.isScheduled,
          isSaving = _this$props2.isSaving,
          onClose = _this$props2.onClose,
          onTogglePublishSidebar = _this$props2.onTogglePublishSidebar,
          PostPublishExtension = _this$props2.PostPublishExtension,
          PrePublishExtension = _this$props2.PrePublishExtension,
          additionalProps = Object(objectWithoutProperties["a" /* default */])(_this$props2, ["forceIsDirty", "forceIsSaving", "isBeingScheduled", "isPublished", "isPublishSidebarEnabled", "isScheduled", "isSaving", "onClose", "onTogglePublishSidebar", "PostPublishExtension", "PrePublishExtension"]);

      var propsForPanel = Object(external_this_lodash_["omit"])(additionalProps, ['hasPublishAction', 'isDirty', 'isPostTypeViewable']);
      var isPublishedOrScheduled = isPublished || isScheduled && isBeingScheduled;
      var isPrePublish = !isPublishedOrScheduled && !isSaving;
      var isPostPublish = isPublishedOrScheduled && !isSaving;
      return Object(external_this_wp_element_["createElement"])("div", Object(esm_extends["a" /* default */])({
        className: "editor-post-publish-panel"
      }, propsForPanel), Object(external_this_wp_element_["createElement"])("div", {
        className: "editor-post-publish-panel__header"
      }, isPostPublish ? Object(external_this_wp_element_["createElement"])("div", {
        className: "editor-post-publish-panel__header-published"
      }, isScheduled ? Object(external_this_wp_i18n_["__"])('Scheduled') : Object(external_this_wp_i18n_["__"])('Published')) : Object(external_this_wp_element_["createElement"])("div", {
        className: "editor-post-publish-panel__header-publish-button"
      }, Object(external_this_wp_element_["createElement"])(post_publish_button, {
        focusOnMount: true,
        onSubmit: this.onSubmit,
        forceIsDirty: forceIsDirty,
        forceIsSaving: forceIsSaving
      })), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
        "aria-expanded": true,
        onClick: onClose,
        icon: library_close["a" /* default */],
        label: Object(external_this_wp_i18n_["__"])('Close panel')
      })), Object(external_this_wp_element_["createElement"])("div", {
        className: "editor-post-publish-panel__content"
      }, isPrePublish && Object(external_this_wp_element_["createElement"])(prepublish, null, PrePublishExtension && Object(external_this_wp_element_["createElement"])(PrePublishExtension, null)), isPostPublish && Object(external_this_wp_element_["createElement"])(postpublish, {
        focusOnMount: true
      }, PostPublishExtension && Object(external_this_wp_element_["createElement"])(PostPublishExtension, null)), isSaving && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Spinner"], null)), Object(external_this_wp_element_["createElement"])("div", {
        className: "editor-post-publish-panel__footer"
      }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["CheckboxControl"], {
        label: Object(external_this_wp_i18n_["__"])('Always show pre-publish checks.'),
        checked: isPublishSidebarEnabled,
        onChange: onTogglePublishSidebar
      })));
    }
  }]);

  return PostPublishPanel;
}(external_this_wp_element_["Component"]);
/* harmony default export */ var post_publish_panel = (Object(external_this_wp_compose_["compose"])([Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select('core'),
      getPostType = _select.getPostType;

  var _select2 = select('core/editor'),
      getCurrentPost = _select2.getCurrentPost,
      getEditedPostAttribute = _select2.getEditedPostAttribute,
      isCurrentPostPublished = _select2.isCurrentPostPublished,
      isCurrentPostScheduled = _select2.isCurrentPostScheduled,
      isEditedPostBeingScheduled = _select2.isEditedPostBeingScheduled,
      isEditedPostDirty = _select2.isEditedPostDirty,
      isSavingPost = _select2.isSavingPost;

  var _select3 = select('core/editor'),
      isPublishSidebarEnabled = _select3.isPublishSidebarEnabled;

  var postType = getPostType(getEditedPostAttribute('type'));
  return {
    hasPublishAction: Object(external_this_lodash_["get"])(getCurrentPost(), ['_links', 'wp:action-publish'], false),
    isPostTypeViewable: Object(external_this_lodash_["get"])(postType, ['viewable'], false),
    isBeingScheduled: isEditedPostBeingScheduled(),
    isDirty: isEditedPostDirty(),
    isPublished: isCurrentPostPublished(),
    isPublishSidebarEnabled: isPublishSidebarEnabled(),
    isSaving: isSavingPost(),
    isScheduled: isCurrentPostScheduled()
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch, _ref) {
  var isPublishSidebarEnabled = _ref.isPublishSidebarEnabled;

  var _dispatch = dispatch('core/editor'),
      disablePublishSidebar = _dispatch.disablePublishSidebar,
      enablePublishSidebar = _dispatch.enablePublishSidebar;

  return {
    onTogglePublishSidebar: function onTogglePublishSidebar() {
      if (isPublishSidebarEnabled) {
        disablePublishSidebar();
      } else {
        enablePublishSidebar();
      }
    }
  };
}), external_this_wp_components_["withFocusReturn"], external_this_wp_components_["withConstrainedTabbing"]])(post_publish_panel_PostPublishPanel));

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/icon/index.js
var build_module_icon = __webpack_require__(191);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/check.js
var library_check = __webpack_require__(193);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-switch-to-draft-button/index.js


/**
 * WordPress dependencies
 */





function PostSwitchToDraftButton(_ref) {
  var isSaving = _ref.isSaving,
      isPublished = _ref.isPublished,
      isScheduled = _ref.isScheduled,
      onClick = _ref.onClick;
  var isMobileViewport = Object(external_this_wp_compose_["useViewportMatch"])('small', '<');

  if (!isPublished && !isScheduled) {
    return null;
  }

  var onSwitch = function onSwitch() {
    var alertMessage;

    if (isPublished) {
      alertMessage = Object(external_this_wp_i18n_["__"])('Are you sure you want to unpublish this post?');
    } else if (isScheduled) {
      alertMessage = Object(external_this_wp_i18n_["__"])('Are you sure you want to unschedule this post?');
    } // eslint-disable-next-line no-alert


    if (window.confirm(alertMessage)) {
      onClick();
    }
  };

  return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
    className: "editor-post-switch-to-draft",
    onClick: onSwitch,
    disabled: isSaving,
    isTertiary: true
  }, isMobileViewport ? Object(external_this_wp_i18n_["__"])('Draft') : Object(external_this_wp_i18n_["__"])('Switch to draft'));
}

/* harmony default export */ var post_switch_to_draft_button = (Object(external_this_wp_compose_["compose"])([Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select('core/editor'),
      isSavingPost = _select.isSavingPost,
      isCurrentPostPublished = _select.isCurrentPostPublished,
      isCurrentPostScheduled = _select.isCurrentPostScheduled;

  return {
    isSaving: isSavingPost(),
    isPublished: isCurrentPostPublished(),
    isScheduled: isCurrentPostScheduled()
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/editor'),
      editPost = _dispatch.editPost,
      savePost = _dispatch.savePost;

  return {
    onClick: function onClick() {
      editPost({
        status: 'draft'
      });
      savePost();
    }
  };
})])(PostSwitchToDraftButton));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-saved-state/index.js







/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */









/**
 * Internal dependencies
 */


/**
 * Component showing whether the post is saved or not and displaying save links.
 *
 * @param   {Object}    Props Component Props.
 */

var post_saved_state_PostSavedState =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(PostSavedState, _Component);

  function PostSavedState() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, PostSavedState);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(PostSavedState).apply(this, arguments));
    _this.state = {
      forceSavedMessage: false
    };
    return _this;
  }

  Object(createClass["a" /* default */])(PostSavedState, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      if (prevProps.isSaving && !this.props.isSaving) {
        this.setState({
          forceSavedMessage: true
        });
        this.props.setTimeout(function () {
          _this2.setState({
            forceSavedMessage: false
          });
        }, 1000);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          post = _this$props.post,
          isNew = _this$props.isNew,
          isScheduled = _this$props.isScheduled,
          isPublished = _this$props.isPublished,
          isDirty = _this$props.isDirty,
          isSaving = _this$props.isSaving,
          isSaveable = _this$props.isSaveable,
          onSave = _this$props.onSave,
          isAutosaving = _this$props.isAutosaving,
          isPending = _this$props.isPending,
          isLargeViewport = _this$props.isLargeViewport;
      var forceSavedMessage = this.state.forceSavedMessage;

      if (isSaving) {
        // TODO: Classes generation should be common across all return
        // paths of this function, including proper naming convention for
        // the "Save Draft" button.
        var classes = classnames_default()('editor-post-saved-state', 'is-saving', {
          'is-autosaving': isAutosaving
        });
        return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Animate"], {
          type: "loading"
        }, function (_ref) {
          var animateClassName = _ref.className;
          return Object(external_this_wp_element_["createElement"])("span", {
            className: classnames_default()(classes, animateClassName)
          }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Dashicon"], {
            icon: "cloud"
          }), isAutosaving ? Object(external_this_wp_i18n_["__"])('Autosaving') : Object(external_this_wp_i18n_["__"])('Saving'));
        });
      }

      if (isPublished || isScheduled) {
        return Object(external_this_wp_element_["createElement"])(post_switch_to_draft_button, null);
      }

      if (!isSaveable) {
        return null;
      }

      if (forceSavedMessage || !isNew && !isDirty) {
        return Object(external_this_wp_element_["createElement"])("span", {
          className: "editor-post-saved-state is-saved"
        }, Object(external_this_wp_element_["createElement"])(build_module_icon["a" /* default */], {
          icon: library_check["a" /* default */]
        }), Object(external_this_wp_i18n_["__"])('Saved'));
      } // Once the post has been submitted for review this button
      // is not needed for the contributor role.


      var hasPublishAction = Object(external_this_lodash_["get"])(post, ['_links', 'wp:action-publish'], false);

      if (!hasPublishAction && isPending) {
        return null;
      }

      var label = isPending ? Object(external_this_wp_i18n_["__"])('Save as Pending') : Object(external_this_wp_i18n_["__"])('Save Draft');

      if (!isLargeViewport) {
        return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
          className: "editor-post-save-draft",
          label: label,
          onClick: function onClick() {
            return onSave();
          },
          shortcut: external_this_wp_keycodes_["displayShortcut"].primary('s'),
          icon: "cloud-upload"
        });
      }

      return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
        className: "editor-post-save-draft",
        onClick: function onClick() {
          return onSave();
        },
        shortcut: external_this_wp_keycodes_["displayShortcut"].primary('s'),
        isTertiary: true
      }, label);
    }
  }]);

  return PostSavedState;
}(external_this_wp_element_["Component"]);
/* harmony default export */ var post_saved_state = (Object(external_this_wp_compose_["compose"])([Object(external_this_wp_data_["withSelect"])(function (select, _ref2) {
  var forceIsDirty = _ref2.forceIsDirty,
      forceIsSaving = _ref2.forceIsSaving;

  var _select = select('core/editor'),
      isEditedPostNew = _select.isEditedPostNew,
      isCurrentPostPublished = _select.isCurrentPostPublished,
      isCurrentPostScheduled = _select.isCurrentPostScheduled,
      isEditedPostDirty = _select.isEditedPostDirty,
      isSavingPost = _select.isSavingPost,
      isEditedPostSaveable = _select.isEditedPostSaveable,
      getCurrentPost = _select.getCurrentPost,
      isAutosavingPost = _select.isAutosavingPost,
      getEditedPostAttribute = _select.getEditedPostAttribute;

  return {
    post: getCurrentPost(),
    isNew: isEditedPostNew(),
    isPublished: isCurrentPostPublished(),
    isScheduled: isCurrentPostScheduled(),
    isDirty: forceIsDirty || isEditedPostDirty(),
    isSaving: forceIsSaving || isSavingPost(),
    isSaveable: isEditedPostSaveable(),
    isAutosaving: isAutosavingPost(),
    isPending: 'pending' === getEditedPostAttribute('status')
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  return {
    onSave: dispatch('core/editor').savePost
  };
}), external_this_wp_compose_["withSafeTimeout"], Object(external_this_wp_viewport_["withViewportMatch"])({
  isLargeViewport: 'small'
})])(post_saved_state_PostSavedState));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-schedule/check.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



function PostScheduleCheck(_ref) {
  var hasPublishAction = _ref.hasPublishAction,
      children = _ref.children;

  if (!hasPublishAction) {
    return null;
  }

  return children;
}
/* harmony default export */ var post_schedule_check = (Object(external_this_wp_compose_["compose"])([Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select('core/editor'),
      getCurrentPost = _select.getCurrentPost,
      getCurrentPostType = _select.getCurrentPostType;

  return {
    hasPublishAction: Object(external_this_lodash_["get"])(getCurrentPost(), ['_links', 'wp:action-publish'], false),
    postType: getCurrentPostType()
  };
})])(PostScheduleCheck));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-slug/check.js


/**
 * Internal dependencies
 */

function PostSlugCheck(_ref) {
  var children = _ref.children;
  return Object(external_this_wp_element_["createElement"])(post_type_support_check, {
    supportKeys: "slug"
  }, children);
}

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-slug/index.js








/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */



var post_slug_PostSlug =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(PostSlug, _Component);

  function PostSlug(_ref) {
    var _this;

    var postSlug = _ref.postSlug,
        postTitle = _ref.postTitle,
        postID = _ref.postID;

    Object(classCallCheck["a" /* default */])(this, PostSlug);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(PostSlug).apply(this, arguments));
    _this.state = {
      editedSlug: Object(external_this_wp_url_["safeDecodeURIComponent"])(postSlug) || cleanForSlug(postTitle) || postID
    };
    _this.setSlug = _this.setSlug.bind(Object(assertThisInitialized["a" /* default */])(_this));
    return _this;
  }

  Object(createClass["a" /* default */])(PostSlug, [{
    key: "setSlug",
    value: function setSlug(event) {
      var _this$props = this.props,
          postSlug = _this$props.postSlug,
          onUpdateSlug = _this$props.onUpdateSlug;
      var value = event.target.value;
      var editedSlug = cleanForSlug(value);

      if (editedSlug === postSlug) {
        return;
      }

      onUpdateSlug(editedSlug);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var instanceId = this.props.instanceId;
      var editedSlug = this.state.editedSlug;
      var inputId = 'editor-post-slug-' + instanceId;
      return Object(external_this_wp_element_["createElement"])(PostSlugCheck, null, Object(external_this_wp_element_["createElement"])("label", {
        htmlFor: inputId
      }, Object(external_this_wp_i18n_["__"])('Slug')), Object(external_this_wp_element_["createElement"])("input", {
        type: "text",
        id: inputId,
        value: editedSlug,
        onChange: function onChange(event) {
          return _this2.setState({
            editedSlug: event.target.value
          });
        },
        onBlur: this.setSlug,
        className: "editor-post-slug__input"
      }));
    }
  }]);

  return PostSlug;
}(external_this_wp_element_["Component"]);
/* harmony default export */ var post_slug = (Object(external_this_wp_compose_["compose"])([Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select('core/editor'),
      getCurrentPost = _select.getCurrentPost,
      getEditedPostAttribute = _select.getEditedPostAttribute;

  var _getCurrentPost = getCurrentPost(),
      id = _getCurrentPost.id;

  return {
    postSlug: getEditedPostAttribute('slug'),
    postTitle: getEditedPostAttribute('title'),
    postID: id
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/editor'),
      editPost = _dispatch.editPost;

  return {
    onUpdateSlug: function onUpdateSlug(slug) {
      editPost({
        slug: slug
      });
    }
  };
}), external_this_wp_compose_["withInstanceId"]])(post_slug_PostSlug));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-sticky/check.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



function PostStickyCheck(_ref) {
  var hasStickyAction = _ref.hasStickyAction,
      postType = _ref.postType,
      children = _ref.children;

  if (postType !== 'post' || !hasStickyAction) {
    return null;
  }

  return children;
}
/* harmony default export */ var post_sticky_check = (Object(external_this_wp_compose_["compose"])([Object(external_this_wp_data_["withSelect"])(function (select) {
  var post = select('core/editor').getCurrentPost();
  return {
    hasStickyAction: Object(external_this_lodash_["get"])(post, ['_links', 'wp:action-sticky'], false),
    postType: select('core/editor').getCurrentPostType()
  };
})])(PostStickyCheck));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-sticky/index.js


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


function PostSticky(_ref) {
  var onUpdateSticky = _ref.onUpdateSticky,
      _ref$postSticky = _ref.postSticky,
      postSticky = _ref$postSticky === void 0 ? false : _ref$postSticky;
  return Object(external_this_wp_element_["createElement"])(post_sticky_check, null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["CheckboxControl"], {
    label: Object(external_this_wp_i18n_["__"])('Stick to the top of the blog'),
    checked: postSticky,
    onChange: function onChange() {
      return onUpdateSticky(!postSticky);
    }
  }));
}
/* harmony default export */ var post_sticky = (Object(external_this_wp_compose_["compose"])([Object(external_this_wp_data_["withSelect"])(function (select) {
  return {
    postSticky: select('core/editor').getEditedPostAttribute('sticky')
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  return {
    onUpdateSticky: function onUpdateSticky(postSticky) {
      dispatch('core/editor').editPost({
        sticky: postSticky
      });
    }
  };
})])(PostSticky));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-taxonomies/hierarchical-term-selector.js










function hierarchical_term_selector_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function hierarchical_term_selector_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { hierarchical_term_selector_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { hierarchical_term_selector_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */


/**
 * Module Constants
 */

var hierarchical_term_selector_DEFAULT_QUERY = {
  per_page: -1,
  orderby: 'name',
  order: 'asc',
  _fields: 'id,name,parent'
};
var MIN_TERMS_COUNT_FOR_FILTER = 8;

var hierarchical_term_selector_HierarchicalTermSelector =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(HierarchicalTermSelector, _Component);

  function HierarchicalTermSelector() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, HierarchicalTermSelector);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(HierarchicalTermSelector).apply(this, arguments));
    _this.findTerm = _this.findTerm.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onChange = _this.onChange.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onChangeFormName = _this.onChangeFormName.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onChangeFormParent = _this.onChangeFormParent.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onAddTerm = _this.onAddTerm.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onToggleForm = _this.onToggleForm.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.setFilterValue = _this.setFilterValue.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.sortBySelected = _this.sortBySelected.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.state = {
      loading: true,
      availableTermsTree: [],
      availableTerms: [],
      adding: false,
      formName: '',
      formParent: '',
      showForm: false,
      filterValue: '',
      filteredTermsTree: []
    };
    return _this;
  }

  Object(createClass["a" /* default */])(HierarchicalTermSelector, [{
    key: "onChange",
    value: function onChange(termId) {
      var _this$props = this.props,
          onUpdateTerms = _this$props.onUpdateTerms,
          _this$props$terms = _this$props.terms,
          terms = _this$props$terms === void 0 ? [] : _this$props$terms,
          taxonomy = _this$props.taxonomy;
      var hasTerm = terms.indexOf(termId) !== -1;
      var newTerms = hasTerm ? Object(external_this_lodash_["without"])(terms, termId) : [].concat(Object(toConsumableArray["a" /* default */])(terms), [termId]);
      onUpdateTerms(newTerms, taxonomy.rest_base);
    }
  }, {
    key: "onChangeFormName",
    value: function onChangeFormName(event) {
      var newValue = event.target.value.trim() === '' ? '' : event.target.value;
      this.setState({
        formName: newValue
      });
    }
  }, {
    key: "onChangeFormParent",
    value: function onChangeFormParent(newParent) {
      this.setState({
        formParent: newParent
      });
    }
  }, {
    key: "onToggleForm",
    value: function onToggleForm() {
      this.setState(function (state) {
        return {
          showForm: !state.showForm
        };
      });
    }
  }, {
    key: "findTerm",
    value: function findTerm(terms, parent, name) {
      return Object(external_this_lodash_["find"])(terms, function (term) {
        return (!term.parent && !parent || parseInt(term.parent) === parseInt(parent)) && term.name.toLowerCase() === name.toLowerCase();
      });
    }
  }, {
    key: "onAddTerm",
    value: function onAddTerm(event) {
      var _this2 = this;

      event.preventDefault();
      var _this$props2 = this.props,
          onUpdateTerms = _this$props2.onUpdateTerms,
          taxonomy = _this$props2.taxonomy,
          terms = _this$props2.terms,
          slug = _this$props2.slug;
      var _this$state = this.state,
          formName = _this$state.formName,
          formParent = _this$state.formParent,
          adding = _this$state.adding,
          availableTerms = _this$state.availableTerms;

      if (formName === '' || adding) {
        return;
      } // check if the term we are adding already exists


      var existingTerm = this.findTerm(availableTerms, formParent, formName);

      if (existingTerm) {
        // if the term we are adding exists but is not selected select it
        if (!Object(external_this_lodash_["some"])(terms, function (term) {
          return term === existingTerm.id;
        })) {
          onUpdateTerms([].concat(Object(toConsumableArray["a" /* default */])(terms), [existingTerm.id]), taxonomy.rest_base);
        }

        this.setState({
          formName: '',
          formParent: ''
        });
        return;
      }

      this.setState({
        adding: true
      });
      this.addRequest = external_this_wp_apiFetch_default()({
        path: "/wp/v2/".concat(taxonomy.rest_base),
        method: 'POST',
        data: {
          name: formName,
          parent: formParent ? formParent : undefined
        }
      }); // Tries to create a term or fetch it if it already exists

      var findOrCreatePromise = this.addRequest.catch(function (error) {
        var errorCode = error.code;

        if (errorCode === 'term_exists') {
          // search the new category created since last fetch
          _this2.addRequest = external_this_wp_apiFetch_default()({
            path: Object(external_this_wp_url_["addQueryArgs"])("/wp/v2/".concat(taxonomy.rest_base), hierarchical_term_selector_objectSpread({}, hierarchical_term_selector_DEFAULT_QUERY, {
              parent: formParent || 0,
              search: formName
            }))
          });
          return _this2.addRequest.then(function (searchResult) {
            return _this2.findTerm(searchResult, formParent, formName);
          });
        }

        return Promise.reject(error);
      });
      findOrCreatePromise.then(function (term) {
        var hasTerm = !!Object(external_this_lodash_["find"])(_this2.state.availableTerms, function (availableTerm) {
          return availableTerm.id === term.id;
        });
        var newAvailableTerms = hasTerm ? _this2.state.availableTerms : [term].concat(Object(toConsumableArray["a" /* default */])(_this2.state.availableTerms));
        var termAddedMessage = Object(external_this_wp_i18n_["sprintf"])(Object(external_this_wp_i18n_["_x"])('%s added', 'term'), Object(external_this_lodash_["get"])(_this2.props.taxonomy, ['labels', 'singular_name'], slug === 'category' ? Object(external_this_wp_i18n_["__"])('Category') : Object(external_this_wp_i18n_["__"])('Term')));

        _this2.props.speak(termAddedMessage, 'assertive');

        _this2.addRequest = null;

        _this2.setState({
          adding: false,
          formName: '',
          formParent: '',
          availableTerms: newAvailableTerms,
          availableTermsTree: _this2.sortBySelected(buildTermsTree(newAvailableTerms))
        });

        onUpdateTerms([].concat(Object(toConsumableArray["a" /* default */])(terms), [term.id]), taxonomy.rest_base);
      }, function (xhr) {
        if (xhr.statusText === 'abort') {
          return;
        }

        _this2.addRequest = null;

        _this2.setState({
          adding: false
        });
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchTerms();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      Object(external_this_lodash_["invoke"])(this.fetchRequest, ['abort']);
      Object(external_this_lodash_["invoke"])(this.addRequest, ['abort']);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.taxonomy !== prevProps.taxonomy) {
        this.fetchTerms();
      }
    }
  }, {
    key: "fetchTerms",
    value: function fetchTerms() {
      var _this3 = this;

      var taxonomy = this.props.taxonomy;

      if (!taxonomy) {
        return;
      }

      this.fetchRequest = external_this_wp_apiFetch_default()({
        path: Object(external_this_wp_url_["addQueryArgs"])("/wp/v2/".concat(taxonomy.rest_base), hierarchical_term_selector_DEFAULT_QUERY)
      });
      this.fetchRequest.then(function (terms) {
        // resolve
        var availableTermsTree = _this3.sortBySelected(buildTermsTree(terms));

        _this3.fetchRequest = null;

        _this3.setState({
          loading: false,
          availableTermsTree: availableTermsTree,
          availableTerms: terms
        });
      }, function (xhr) {
        // reject
        if (xhr.statusText === 'abort') {
          return;
        }

        _this3.fetchRequest = null;

        _this3.setState({
          loading: false
        });
      });
    }
  }, {
    key: "sortBySelected",
    value: function sortBySelected(termsTree) {
      var terms = this.props.terms;

      var treeHasSelection = function treeHasSelection(termTree) {
        if (terms.indexOf(termTree.id) !== -1) {
          return true;
        }

        if (undefined === termTree.children) {
          return false;
        }

        var anyChildIsSelected = termTree.children.map(treeHasSelection).filter(function (child) {
          return child;
        }).length > 0;

        if (anyChildIsSelected) {
          return true;
        }

        return false;
      };

      var termOrChildIsSelected = function termOrChildIsSelected(termA, termB) {
        var termASelected = treeHasSelection(termA);
        var termBSelected = treeHasSelection(termB);

        if (termASelected === termBSelected) {
          return 0;
        }

        if (termASelected && !termBSelected) {
          return -1;
        }

        if (!termASelected && termBSelected) {
          return 1;
        }

        return 0;
      };

      termsTree.sort(termOrChildIsSelected);
      return termsTree;
    }
  }, {
    key: "setFilterValue",
    value: function setFilterValue(event) {
      var availableTermsTree = this.state.availableTermsTree;
      var filterValue = event.target.value;
      var filteredTermsTree = availableTermsTree.map(this.getFilterMatcher(filterValue)).filter(function (term) {
        return term;
      });

      var getResultCount = function getResultCount(terms) {
        var count = 0;

        for (var i = 0; i < terms.length; i++) {
          count++;

          if (undefined !== terms[i].children) {
            count += getResultCount(terms[i].children);
          }
        }

        return count;
      };

      this.setState({
        filterValue: filterValue,
        filteredTermsTree: filteredTermsTree
      });
      var resultCount = getResultCount(filteredTermsTree);
      var resultsFoundMessage = Object(external_this_wp_i18n_["sprintf"])(Object(external_this_wp_i18n_["_n"])('%d result found.', '%d results found.', resultCount), resultCount);
      this.props.debouncedSpeak(resultsFoundMessage, 'assertive');
    }
  }, {
    key: "getFilterMatcher",
    value: function getFilterMatcher(filterValue) {
      var matchTermsForFilter = function matchTermsForFilter(originalTerm) {
        if ('' === filterValue) {
          return originalTerm;
        } // Shallow clone, because we'll be filtering the term's children and
        // don't want to modify the original term.


        var term = hierarchical_term_selector_objectSpread({}, originalTerm); // Map and filter the children, recursive so we deal with grandchildren
        // and any deeper levels.


        if (term.children.length > 0) {
          term.children = term.children.map(matchTermsForFilter).filter(function (child) {
            return child;
          });
        } // If the term's name contains the filterValue, or it has children
        // (i.e. some child matched at some point in the tree) then return it.


        if (-1 !== term.name.toLowerCase().indexOf(filterValue.toLowerCase()) || term.children.length > 0) {
          return term;
        } // Otherwise, return false. After mapping, the list of terms will need
        // to have false values filtered out.


        return false;
      };

      return matchTermsForFilter;
    }
  }, {
    key: "renderTerms",
    value: function renderTerms(renderedTerms) {
      var _this4 = this;

      var _this$props$terms2 = this.props.terms,
          terms = _this$props$terms2 === void 0 ? [] : _this$props$terms2;
      return renderedTerms.map(function (term) {
        return Object(external_this_wp_element_["createElement"])("div", {
          key: term.id,
          className: "editor-post-taxonomies__hierarchical-terms-choice"
        }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["CheckboxControl"], {
          checked: terms.indexOf(term.id) !== -1,
          onChange: function onChange() {
            var termId = parseInt(term.id, 10);

            _this4.onChange(termId);
          },
          label: Object(external_this_lodash_["unescape"])(term.name)
        }), !!term.children.length && Object(external_this_wp_element_["createElement"])("div", {
          className: "editor-post-taxonomies__hierarchical-terms-subchoices"
        }, _this4.renderTerms(term.children)));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          slug = _this$props3.slug,
          taxonomy = _this$props3.taxonomy,
          instanceId = _this$props3.instanceId,
          hasCreateAction = _this$props3.hasCreateAction,
          hasAssignAction = _this$props3.hasAssignAction;

      if (!hasAssignAction) {
        return null;
      }

      var _this$state2 = this.state,
          availableTermsTree = _this$state2.availableTermsTree,
          availableTerms = _this$state2.availableTerms,
          filteredTermsTree = _this$state2.filteredTermsTree,
          formName = _this$state2.formName,
          formParent = _this$state2.formParent,
          loading = _this$state2.loading,
          showForm = _this$state2.showForm,
          filterValue = _this$state2.filterValue;

      var labelWithFallback = function labelWithFallback(labelProperty, fallbackIsCategory, fallbackIsNotCategory) {
        return Object(external_this_lodash_["get"])(taxonomy, ['labels', labelProperty], slug === 'category' ? fallbackIsCategory : fallbackIsNotCategory);
      };

      var newTermButtonLabel = labelWithFallback('add_new_item', Object(external_this_wp_i18n_["__"])('Add new category'), Object(external_this_wp_i18n_["__"])('Add new term'));
      var newTermLabel = labelWithFallback('new_item_name', Object(external_this_wp_i18n_["__"])('Add new category'), Object(external_this_wp_i18n_["__"])('Add new term'));
      var parentSelectLabel = labelWithFallback('parent_item', Object(external_this_wp_i18n_["__"])('Parent Category'), Object(external_this_wp_i18n_["__"])('Parent Term'));
      var noParentOption = "\u2014 ".concat(parentSelectLabel, " \u2014");
      var newTermSubmitLabel = newTermButtonLabel;
      var inputId = "editor-post-taxonomies__hierarchical-terms-input-".concat(instanceId);
      var filterInputId = "editor-post-taxonomies__hierarchical-terms-filter-".concat(instanceId);
      var filterLabel = Object(external_this_lodash_["get"])(this.props.taxonomy, ['labels', 'search_items'], Object(external_this_wp_i18n_["__"])('Search Terms'));
      var groupLabel = Object(external_this_lodash_["get"])(this.props.taxonomy, ['name'], Object(external_this_wp_i18n_["__"])('Terms'));
      var showFilter = availableTerms.length >= MIN_TERMS_COUNT_FOR_FILTER;
      return [showFilter && Object(external_this_wp_element_["createElement"])("label", {
        key: "filter-label",
        htmlFor: filterInputId
      }, filterLabel), showFilter && Object(external_this_wp_element_["createElement"])("input", {
        type: "search",
        id: filterInputId,
        value: filterValue,
        onChange: this.setFilterValue,
        className: "editor-post-taxonomies__hierarchical-terms-filter",
        key: "term-filter-input"
      }), Object(external_this_wp_element_["createElement"])("div", {
        className: "editor-post-taxonomies__hierarchical-terms-list",
        key: "term-list",
        tabIndex: "0",
        role: "group",
        "aria-label": groupLabel
      }, this.renderTerms('' !== filterValue ? filteredTermsTree : availableTermsTree)), !loading && hasCreateAction && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
        key: "term-add-button",
        onClick: this.onToggleForm,
        className: "editor-post-taxonomies__hierarchical-terms-add",
        "aria-expanded": showForm,
        isLink: true
      }, newTermButtonLabel), showForm && Object(external_this_wp_element_["createElement"])("form", {
        onSubmit: this.onAddTerm,
        key: "hierarchical-terms-form"
      }, Object(external_this_wp_element_["createElement"])("label", {
        htmlFor: inputId,
        className: "editor-post-taxonomies__hierarchical-terms-label"
      }, newTermLabel), Object(external_this_wp_element_["createElement"])("input", {
        type: "text",
        id: inputId,
        className: "editor-post-taxonomies__hierarchical-terms-input",
        value: formName,
        onChange: this.onChangeFormName,
        required: true
      }), !!availableTerms.length && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["TreeSelect"], {
        label: parentSelectLabel,
        noOptionLabel: noParentOption,
        onChange: this.onChangeFormParent,
        selectedId: formParent,
        tree: availableTermsTree
      }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
        isSecondary: true,
        type: "submit",
        className: "editor-post-taxonomies__hierarchical-terms-submit"
      }, newTermSubmitLabel))];
    }
  }]);

  return HierarchicalTermSelector;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var hierarchical_term_selector = (Object(external_this_wp_compose_["compose"])([Object(external_this_wp_data_["withSelect"])(function (select, _ref) {
  var slug = _ref.slug;

  var _select = select('core/editor'),
      getCurrentPost = _select.getCurrentPost;

  var _select2 = select('core'),
      getTaxonomy = _select2.getTaxonomy;

  var taxonomy = getTaxonomy(slug);
  return {
    hasCreateAction: taxonomy ? Object(external_this_lodash_["get"])(getCurrentPost(), ['_links', 'wp:action-create-' + taxonomy.rest_base], false) : false,
    hasAssignAction: taxonomy ? Object(external_this_lodash_["get"])(getCurrentPost(), ['_links', 'wp:action-assign-' + taxonomy.rest_base], false) : false,
    terms: taxonomy ? select('core/editor').getEditedPostAttribute(taxonomy.rest_base) : [],
    taxonomy: taxonomy
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  return {
    onUpdateTerms: function onUpdateTerms(terms, restBase) {
      dispatch('core/editor').editPost(Object(defineProperty["a" /* default */])({}, restBase, terms));
    }
  };
}), external_this_wp_components_["withSpokenMessages"], external_this_wp_compose_["withInstanceId"], Object(external_this_wp_components_["withFilters"])('editor.PostTaxonomyType')])(hierarchical_term_selector_HierarchicalTermSelector));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-taxonomies/index.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



function PostTaxonomies(_ref) {
  var postType = _ref.postType,
      taxonomies = _ref.taxonomies,
      _ref$taxonomyWrapper = _ref.taxonomyWrapper,
      taxonomyWrapper = _ref$taxonomyWrapper === void 0 ? external_this_lodash_["identity"] : _ref$taxonomyWrapper;
  var availableTaxonomies = Object(external_this_lodash_["filter"])(taxonomies, function (taxonomy) {
    return Object(external_this_lodash_["includes"])(taxonomy.types, postType);
  });
  var visibleTaxonomies = Object(external_this_lodash_["filter"])(availableTaxonomies, function (taxonomy) {
    return taxonomy.visibility.show_ui;
  });
  return visibleTaxonomies.map(function (taxonomy) {
    var TaxonomyComponent = taxonomy.hierarchical ? hierarchical_term_selector : flat_term_selector;
    return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], {
      key: "taxonomy-".concat(taxonomy.slug)
    }, taxonomyWrapper(Object(external_this_wp_element_["createElement"])(TaxonomyComponent, {
      slug: taxonomy.slug
    }), taxonomy));
  });
}
/* harmony default export */ var post_taxonomies = (Object(external_this_wp_compose_["compose"])([Object(external_this_wp_data_["withSelect"])(function (select) {
  return {
    postType: select('core/editor').getCurrentPostType(),
    taxonomies: select('core').getTaxonomies({
      per_page: -1
    })
  };
})])(PostTaxonomies));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-taxonomies/check.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



function PostTaxonomiesCheck(_ref) {
  var postType = _ref.postType,
      taxonomies = _ref.taxonomies,
      children = _ref.children;
  var hasTaxonomies = Object(external_this_lodash_["some"])(taxonomies, function (taxonomy) {
    return Object(external_this_lodash_["includes"])(taxonomy.types, postType);
  });

  if (!hasTaxonomies) {
    return null;
  }

  return children;
}
/* harmony default export */ var post_taxonomies_check = (Object(external_this_wp_compose_["compose"])([Object(external_this_wp_data_["withSelect"])(function (select) {
  return {
    postType: select('core/editor').getCurrentPostType(),
    taxonomies: select('core').getTaxonomies({
      per_page: -1
    })
  };
})])(PostTaxonomiesCheck));

// EXTERNAL MODULE: ./node_modules/react-autosize-textarea/lib/index.js
var lib = __webpack_require__(72);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-text-editor/index.js








/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






var post_text_editor_PostTextEditor =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(PostTextEditor, _Component);

  function PostTextEditor() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, PostTextEditor);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(PostTextEditor).apply(this, arguments));
    _this.edit = _this.edit.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.stopEditing = _this.stopEditing.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.state = {};
    return _this;
  }

  Object(createClass["a" /* default */])(PostTextEditor, [{
    key: "edit",

    /**
     * Handles a textarea change event to notify the onChange prop callback and
     * reflect the new value in the component's own state. This marks the start
     * of the user's edits, if not already changed, preventing future props
     * changes to value from replacing the rendered value. This is expected to
     * be followed by a reset to dirty state via `stopEditing`.
     *
     * @see stopEditing
     *
     * @param {Event} event Change event.
     */
    value: function edit(event) {
      var value = event.target.value;
      this.props.onChange(value);
      this.setState({
        value: value,
        isDirty: true
      });
    }
    /**
     * Function called when the user has completed their edits, responsible for
     * ensuring that changes, if made, are surfaced to the onPersist prop
     * callback and resetting dirty state.
     */

  }, {
    key: "stopEditing",
    value: function stopEditing() {
      if (this.state.isDirty) {
        this.props.onPersist(this.state.value);
        this.setState({
          isDirty: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var value = this.state.value;
      var instanceId = this.props.instanceId;
      return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])("label", {
        htmlFor: "post-content-".concat(instanceId),
        className: "screen-reader-text"
      }, Object(external_this_wp_i18n_["__"])('Type text or HTML')), Object(external_this_wp_element_["createElement"])(lib_default.a, {
        autoComplete: "off",
        dir: "auto",
        value: value,
        onChange: this.edit,
        onBlur: this.stopEditing,
        className: "editor-post-text-editor",
        id: "post-content-".concat(instanceId),
        placeholder: Object(external_this_wp_i18n_["__"])('Start writing with text or HTML')
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (state.isDirty) {
        return null;
      }

      return {
        value: props.value,
        isDirty: false
      };
    }
  }]);

  return PostTextEditor;
}(external_this_wp_element_["Component"]);
/* harmony default export */ var post_text_editor = (Object(external_this_wp_compose_["compose"])([Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select('core/editor'),
      getEditedPostContent = _select.getEditedPostContent;

  return {
    value: getEditedPostContent()
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/editor'),
      editPost = _dispatch.editPost,
      resetEditorBlocks = _dispatch.resetEditorBlocks;

  return {
    onChange: function onChange(content) {
      editPost({
        content: content
      });
    },
    onPersist: function onPersist(content) {
      var blocks = Object(external_this_wp_blocks_["parse"])(content);
      resetEditorBlocks(blocks);
    }
  };
}), external_this_wp_compose_["withInstanceId"]])(post_text_editor_PostTextEditor));

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/link.js
var library_link = __webpack_require__(159);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-permalink/editor.js








/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */



var editor_PostPermalinkEditor =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(PostPermalinkEditor, _Component);

  function PostPermalinkEditor(_ref) {
    var _this;

    var permalinkParts = _ref.permalinkParts,
        slug = _ref.slug;

    Object(classCallCheck["a" /* default */])(this, PostPermalinkEditor);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(PostPermalinkEditor).apply(this, arguments));
    _this.state = {
      editedPostName: slug || permalinkParts.postName
    };
    _this.onSavePermalink = _this.onSavePermalink.bind(Object(assertThisInitialized["a" /* default */])(_this));
    return _this;
  }

  Object(createClass["a" /* default */])(PostPermalinkEditor, [{
    key: "onSavePermalink",
    value: function onSavePermalink(event) {
      var postName = cleanForSlug(this.state.editedPostName);
      event.preventDefault();
      this.props.onSave();

      if (postName === this.props.postName) {
        return;
      }

      this.props.editPost({
        slug: postName
      });
      this.setState({
        editedPostName: postName
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props$permalink = this.props.permalinkParts,
          prefix = _this$props$permalink.prefix,
          suffix = _this$props$permalink.suffix;
      var editedPostName = this.state.editedPostName;
      /* eslint-disable jsx-a11y/no-autofocus */
      // Autofocus is allowed here, as this mini-UI is only loaded when the user clicks to open it.

      return Object(external_this_wp_element_["createElement"])("form", {
        className: "editor-post-permalink-editor",
        onSubmit: this.onSavePermalink
      }, Object(external_this_wp_element_["createElement"])("span", {
        className: "editor-post-permalink__editor-container"
      }, Object(external_this_wp_element_["createElement"])("span", {
        className: "editor-post-permalink-editor__prefix"
      }, prefix), Object(external_this_wp_element_["createElement"])("input", {
        className: "editor-post-permalink-editor__edit",
        "aria-label": Object(external_this_wp_i18n_["__"])('Edit post permalink'),
        value: editedPostName,
        onChange: function onChange(event) {
          return _this2.setState({
            editedPostName: event.target.value
          });
        },
        type: "text",
        autoFocus: true
      }), Object(external_this_wp_element_["createElement"])("span", {
        className: "editor-post-permalink-editor__suffix"
      }, suffix), "\u200E"), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
        className: "editor-post-permalink-editor__save",
        isSecondary: true,
        onClick: this.onSavePermalink
      }, Object(external_this_wp_i18n_["__"])('Save')));
      /* eslint-enable jsx-a11y/no-autofocus */
    }
  }]);

  return PostPermalinkEditor;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var editor = (Object(external_this_wp_compose_["compose"])([Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select('core/editor'),
      getPermalinkParts = _select.getPermalinkParts;

  return {
    permalinkParts: getPermalinkParts()
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/editor'),
      editPost = _dispatch.editPost;

  return {
    editPost: editPost
  };
})])(editor_PostPermalinkEditor));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-permalink/index.js








/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */




var post_permalink_PostPermalink =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(PostPermalink, _Component);

  function PostPermalink() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, PostPermalink);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(PostPermalink).apply(this, arguments));
    _this.addVisibilityCheck = _this.addVisibilityCheck.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onVisibilityChange = _this.onVisibilityChange.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.state = {
      isCopied: false,
      isEditingPermalink: false
    };
    return _this;
  }

  Object(createClass["a" /* default */])(PostPermalink, [{
    key: "addVisibilityCheck",
    value: function addVisibilityCheck() {
      window.addEventListener('visibilitychange', this.onVisibilityChange);
    }
  }, {
    key: "onVisibilityChange",
    value: function onVisibilityChange() {
      var _this$props = this.props,
          isEditable = _this$props.isEditable,
          refreshPost = _this$props.refreshPost; // If the user just returned after having clicked the "Change Permalinks" button,
      // fetch a new copy of the post from the server, just in case they enabled permalinks.

      if (!isEditable && 'visible' === document.visibilityState) {
        refreshPost();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      // If we've just stopped editing the permalink, focus on the new permalink.
      if (prevState.isEditingPermalink && !this.state.isEditingPermalink) {
        this.linkElement.focus();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('visibilitychange', this.addVisibilityCheck);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          isEditable = _this$props2.isEditable,
          isNew = _this$props2.isNew,
          isPublished = _this$props2.isPublished,
          isViewable = _this$props2.isViewable,
          permalinkParts = _this$props2.permalinkParts,
          postLink = _this$props2.postLink,
          postSlug = _this$props2.postSlug,
          postID = _this$props2.postID,
          postTitle = _this$props2.postTitle;

      if (isNew || !isViewable || !permalinkParts || !postLink) {
        return null;
      }

      var _this$state = this.state,
          isCopied = _this$state.isCopied,
          isEditingPermalink = _this$state.isEditingPermalink;
      var ariaLabel = isCopied ? Object(external_this_wp_i18n_["__"])('Permalink copied') : Object(external_this_wp_i18n_["__"])('Copy the permalink');
      var prefix = permalinkParts.prefix,
          suffix = permalinkParts.suffix;
      var slug = Object(external_this_wp_url_["safeDecodeURIComponent"])(postSlug) || cleanForSlug(postTitle) || postID;
      var samplePermalink = isEditable ? prefix + slug + suffix : prefix;
      return Object(external_this_wp_element_["createElement"])("div", {
        className: "editor-post-permalink"
      }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ClipboardButton"], {
        className: classnames_default()('editor-post-permalink__copy', {
          'is-copied': isCopied
        }),
        text: samplePermalink,
        label: ariaLabel,
        onCopy: function onCopy() {
          return _this2.setState({
            isCopied: true
          });
        },
        "aria-disabled": isCopied,
        icon: library_link["a" /* default */]
      }), Object(external_this_wp_element_["createElement"])("span", {
        className: "editor-post-permalink__label"
      }, Object(external_this_wp_i18n_["__"])('Permalink:')), !isEditingPermalink && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ExternalLink"], {
        className: "editor-post-permalink__link",
        href: !isPublished ? postLink : samplePermalink,
        target: "_blank",
        ref: function ref(linkElement) {
          return _this2.linkElement = linkElement;
        }
      }, Object(external_this_wp_url_["safeDecodeURI"])(samplePermalink), "\u200E"), isEditingPermalink && Object(external_this_wp_element_["createElement"])(editor, {
        slug: slug,
        onSave: function onSave() {
          return _this2.setState({
            isEditingPermalink: false
          });
        }
      }), isEditable && !isEditingPermalink && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
        className: "editor-post-permalink__edit",
        isSecondary: true,
        onClick: function onClick() {
          return _this2.setState({
            isEditingPermalink: true
          });
        }
      }, Object(external_this_wp_i18n_["__"])('Edit')));
    }
  }]);

  return PostPermalink;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var post_permalink = (Object(external_this_wp_compose_["compose"])([Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select('core/editor'),
      isEditedPostNew = _select.isEditedPostNew,
      isPermalinkEditable = _select.isPermalinkEditable,
      getCurrentPost = _select.getCurrentPost,
      getPermalinkParts = _select.getPermalinkParts,
      getEditedPostAttribute = _select.getEditedPostAttribute,
      isCurrentPostPublished = _select.isCurrentPostPublished;

  var _select2 = select('core'),
      getPostType = _select2.getPostType;

  var _getCurrentPost = getCurrentPost(),
      id = _getCurrentPost.id,
      link = _getCurrentPost.link;

  var postTypeName = getEditedPostAttribute('type');
  var postType = getPostType(postTypeName);
  return {
    isNew: isEditedPostNew(),
    postLink: link,
    permalinkParts: getPermalinkParts(),
    postSlug: getEditedPostAttribute('slug'),
    isEditable: isPermalinkEditable(),
    isPublished: isCurrentPostPublished(),
    postTitle: getEditedPostAttribute('title'),
    postID: id,
    isViewable: Object(external_this_lodash_["get"])(postType, ['viewable'], false)
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/editor'),
      refreshPost = _dispatch.refreshPost;

  return {
    refreshPost: refreshPost
  };
})])(post_permalink_PostPermalink));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-title/index.js








/**
 * External dependencies
 */



/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */



/**
 * Constants
 */

var REGEXP_NEWLINES = /[\r\n]+/g;

var post_title_PostTitle =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(PostTitle, _Component);

  function PostTitle() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, PostTitle);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(PostTitle).apply(this, arguments));
    _this.onChange = _this.onChange.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onSelect = _this.onSelect.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onUnselect = _this.onUnselect.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onKeyDown = _this.onKeyDown.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.state = {
      isSelected: false
    };
    return _this;
  }

  Object(createClass["a" /* default */])(PostTitle, [{
    key: "handleFocusOutside",
    value: function handleFocusOutside() {
      this.onUnselect();
    }
  }, {
    key: "onSelect",
    value: function onSelect() {
      this.setState({
        isSelected: true
      });
      this.props.clearSelectedBlock();
    }
  }, {
    key: "onUnselect",
    value: function onUnselect() {
      this.setState({
        isSelected: false
      });
    }
  }, {
    key: "onChange",
    value: function onChange(event) {
      var newTitle = event.target.value.replace(REGEXP_NEWLINES, ' ');
      this.props.onUpdate(newTitle);
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(event) {
      if (event.keyCode === external_this_wp_keycodes_["ENTER"]) {
        event.preventDefault();
        this.props.onEnterPress();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          hasFixedToolbar = _this$props.hasFixedToolbar,
          isCleanNewPost = _this$props.isCleanNewPost,
          isFocusMode = _this$props.isFocusMode,
          isPostTypeViewable = _this$props.isPostTypeViewable,
          instanceId = _this$props.instanceId,
          placeholder = _this$props.placeholder,
          title = _this$props.title;
      var isSelected = this.state.isSelected; // The wp-block className is important for editor styles.

      var className = classnames_default()('wp-block editor-post-title__block', {
        'is-selected': isSelected,
        'is-focus-mode': isFocusMode,
        'has-fixed-toolbar': hasFixedToolbar
      });
      var decodedPlaceholder = Object(external_this_wp_htmlEntities_["decodeEntities"])(placeholder);
      return Object(external_this_wp_element_["createElement"])(post_type_support_check, {
        supportKeys: "title"
      }, Object(external_this_wp_element_["createElement"])("div", {
        className: "editor-post-title"
      }, Object(external_this_wp_element_["createElement"])("div", {
        className: className
      }, Object(external_this_wp_element_["createElement"])("div", null, Object(external_this_wp_element_["createElement"])("label", {
        htmlFor: "post-title-".concat(instanceId),
        className: "screen-reader-text"
      }, decodedPlaceholder || Object(external_this_wp_i18n_["__"])('Add title')), Object(external_this_wp_element_["createElement"])(lib_default.a, {
        id: "post-title-".concat(instanceId),
        className: "editor-post-title__input",
        value: title,
        onChange: this.onChange,
        placeholder: decodedPlaceholder || Object(external_this_wp_i18n_["__"])('Add title'),
        onFocus: this.onSelect,
        onKeyDown: this.onKeyDown,
        onKeyPress: this.onUnselect
        /*
        	Only autofocus the title when the post is entirely empty.
        	This should only happen for a new post, which means we
        	focus the title on new post so the author can start typing
        	right away, without needing to click anything.
        */

        /* eslint-disable jsx-a11y/no-autofocus */
        ,
        autoFocus: document.body === document.activeElement && isCleanNewPost
        /* eslint-enable jsx-a11y/no-autofocus */

      })), isSelected && isPostTypeViewable && Object(external_this_wp_element_["createElement"])(post_permalink, null))));
    }
  }]);

  return PostTitle;
}(external_this_wp_element_["Component"]);

var post_title_applyWithSelect = Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select('core/editor'),
      getEditedPostAttribute = _select.getEditedPostAttribute,
      isCleanNewPost = _select.isCleanNewPost;

  var _select2 = select('core/block-editor'),
      getSettings = _select2.getSettings;

  var _select3 = select('core'),
      getPostType = _select3.getPostType;

  var postType = getPostType(getEditedPostAttribute('type'));

  var _getSettings = getSettings(),
      titlePlaceholder = _getSettings.titlePlaceholder,
      focusMode = _getSettings.focusMode,
      hasFixedToolbar = _getSettings.hasFixedToolbar;

  return {
    isCleanNewPost: isCleanNewPost(),
    title: getEditedPostAttribute('title'),
    isPostTypeViewable: Object(external_this_lodash_["get"])(postType, ['viewable'], false),
    placeholder: titlePlaceholder,
    isFocusMode: focusMode,
    hasFixedToolbar: hasFixedToolbar
  };
});
var post_title_applyWithDispatch = Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/block-editor'),
      insertDefaultBlock = _dispatch.insertDefaultBlock,
      clearSelectedBlock = _dispatch.clearSelectedBlock;

  var _dispatch2 = dispatch('core/editor'),
      editPost = _dispatch2.editPost;

  return {
    onEnterPress: function onEnterPress() {
      insertDefaultBlock(undefined, undefined, 0);
    },
    onUpdate: function onUpdate(title) {
      editPost({
        title: title
      });
    },
    clearSelectedBlock: clearSelectedBlock
  };
});
/* harmony default export */ var post_title = (Object(external_this_wp_compose_["compose"])(post_title_applyWithSelect, post_title_applyWithDispatch, external_this_wp_compose_["withInstanceId"], external_this_wp_components_["withFocusOutside"])(post_title_PostTitle));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-trash/index.js



/**
 * WordPress dependencies
 */





function PostTrash(_ref) {
  var isNew = _ref.isNew,
      postId = _ref.postId,
      postType = _ref.postType,
      props = Object(objectWithoutProperties["a" /* default */])(_ref, ["isNew", "postId", "postType"]);

  if (isNew || !postId) {
    return null;
  }

  var onClick = function onClick() {
    return props.trashPost(postId, postType);
  };

  return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
    className: "editor-post-trash is-link",
    onClick: onClick
  }, Object(external_this_wp_i18n_["__"])('Move to Trash'));
}

/* harmony default export */ var post_trash = (Object(external_this_wp_compose_["compose"])([Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select('core/editor'),
      isEditedPostNew = _select.isEditedPostNew,
      getCurrentPostId = _select.getCurrentPostId,
      getCurrentPostType = _select.getCurrentPostType;

  return {
    isNew: isEditedPostNew(),
    postId: getCurrentPostId(),
    postType: getCurrentPostType()
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  return {
    trashPost: dispatch('core/editor').trashPost
  };
})])(PostTrash));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-trash/check.js
/**
 * WordPress dependencies
 */


function PostTrashCheck(_ref) {
  var isNew = _ref.isNew,
      postId = _ref.postId,
      children = _ref.children;

  if (isNew || !postId) {
    return null;
  }

  return children;
}

/* harmony default export */ var post_trash_check = (Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select('core/editor'),
      isEditedPostNew = _select.isEditedPostNew,
      getCurrentPostId = _select.getCurrentPostId;

  return {
    isNew: isEditedPostNew(),
    postId: getCurrentPostId()
  };
})(PostTrashCheck));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-visibility/check.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



function PostVisibilityCheck(_ref) {
  var hasPublishAction = _ref.hasPublishAction,
      render = _ref.render;
  var canEdit = hasPublishAction;
  return render({
    canEdit: canEdit
  });
}
/* harmony default export */ var post_visibility_check = (Object(external_this_wp_compose_["compose"])([Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select('core/editor'),
      getCurrentPost = _select.getCurrentPost,
      getCurrentPostType = _select.getCurrentPostType;

  return {
    hasPublishAction: Object(external_this_lodash_["get"])(getCurrentPost(), ['_links', 'wp:action-publish'], false),
    postType: getCurrentPostType()
  };
})])(PostVisibilityCheck));

// EXTERNAL MODULE: external {"this":["wp","wordcount"]}
var external_this_wp_wordcount_ = __webpack_require__(128);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/word-count/index.js


/**
 * WordPress dependencies
 */




function WordCount(_ref) {
  var content = _ref.content;

  /*
   * translators: If your word count is based on single characters (e.g. East Asian characters),
   * enter 'characters_excluding_spaces' or 'characters_including_spaces'. Otherwise, enter 'words'.
   * Do not translate into your own language.
   */
  var wordCountType = Object(external_this_wp_i18n_["_x"])('words', 'Word count type. Do not translate!');

  return Object(external_this_wp_element_["createElement"])("span", {
    className: "word-count"
  }, Object(external_this_wp_wordcount_["count"])(content, wordCountType));
}

/* harmony default export */ var word_count = (Object(external_this_wp_data_["withSelect"])(function (select) {
  return {
    content: select('core/editor').getEditedPostAttribute('content')
  };
})(WordCount));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/table-of-contents/panel.js


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */




function TableOfContentsPanel(_ref) {
  var headingCount = _ref.headingCount,
      paragraphCount = _ref.paragraphCount,
      numberOfBlocks = _ref.numberOfBlocks,
      hasOutlineItemsDisabled = _ref.hasOutlineItemsDisabled,
      onRequestClose = _ref.onRequestClose;
  return (
    /*
     * Disable reason: The `list` ARIA role is redundant but
     * Safari+VoiceOver won't announce the list otherwise.
     */

    /* eslint-disable jsx-a11y/no-redundant-roles */
    Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])("div", {
      className: "table-of-contents__wrapper",
      role: "note",
      "aria-label": Object(external_this_wp_i18n_["__"])('Document Statistics'),
      tabIndex: "0"
    }, Object(external_this_wp_element_["createElement"])("ul", {
      role: "list",
      className: "table-of-contents__counts"
    }, Object(external_this_wp_element_["createElement"])("li", {
      className: "table-of-contents__count"
    }, Object(external_this_wp_i18n_["__"])('Words'), Object(external_this_wp_element_["createElement"])(word_count, null)), Object(external_this_wp_element_["createElement"])("li", {
      className: "table-of-contents__count"
    }, Object(external_this_wp_i18n_["__"])('Headings'), Object(external_this_wp_element_["createElement"])("span", {
      className: "table-of-contents__number"
    }, headingCount)), Object(external_this_wp_element_["createElement"])("li", {
      className: "table-of-contents__count"
    }, Object(external_this_wp_i18n_["__"])('Paragraphs'), Object(external_this_wp_element_["createElement"])("span", {
      className: "table-of-contents__number"
    }, paragraphCount)), Object(external_this_wp_element_["createElement"])("li", {
      className: "table-of-contents__count"
    }, Object(external_this_wp_i18n_["__"])('Blocks'), Object(external_this_wp_element_["createElement"])("span", {
      className: "table-of-contents__number"
    }, numberOfBlocks)))), headingCount > 0 && Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])("hr", null), Object(external_this_wp_element_["createElement"])("h2", {
      className: "table-of-contents__title"
    }, Object(external_this_wp_i18n_["__"])('Document Outline')), Object(external_this_wp_element_["createElement"])(document_outline, {
      onSelect: onRequestClose,
      hasOutlineItemsDisabled: hasOutlineItemsDisabled
    })))
    /* eslint-enable jsx-a11y/no-redundant-roles */

  );
}

/* harmony default export */ var panel = (Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select('core/block-editor'),
      getGlobalBlockCount = _select.getGlobalBlockCount;

  return {
    headingCount: getGlobalBlockCount('core/heading'),
    paragraphCount: getGlobalBlockCount('core/paragraph'),
    numberOfBlocks: getGlobalBlockCount()
  };
})(TableOfContentsPanel));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/table-of-contents/index.js


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



function TableOfContents(_ref) {
  var hasBlocks = _ref.hasBlocks,
      hasOutlineItemsDisabled = _ref.hasOutlineItemsDisabled;
  return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Dropdown"], {
    position: "bottom",
    className: "table-of-contents",
    contentClassName: "table-of-contents__popover",
    renderToggle: function renderToggle(_ref2) {
      var isOpen = _ref2.isOpen,
          onToggle = _ref2.onToggle;
      return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
        onClick: hasBlocks ? onToggle : undefined,
        icon: "info-outline",
        "aria-expanded": isOpen,
        label: Object(external_this_wp_i18n_["__"])('Content structure'),
        tooltipPosition: "bottom",
        "aria-disabled": !hasBlocks
      });
    },
    renderContent: function renderContent(_ref3) {
      var onClose = _ref3.onClose;
      return Object(external_this_wp_element_["createElement"])(panel, {
        onRequestClose: onClose,
        hasOutlineItemsDisabled: hasOutlineItemsDisabled
      });
    }
  });
}

/* harmony default export */ var table_of_contents = (Object(external_this_wp_data_["withSelect"])(function (select) {
  return {
    hasBlocks: !!select('core/block-editor').getBlockCount()
  };
})(TableOfContents));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/unsaved-changes-warning/index.js







/**
 * WordPress dependencies
 */




var unsaved_changes_warning_UnsavedChangesWarning =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(UnsavedChangesWarning, _Component);

  function UnsavedChangesWarning() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, UnsavedChangesWarning);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(UnsavedChangesWarning).apply(this, arguments));
    _this.warnIfUnsavedChanges = _this.warnIfUnsavedChanges.bind(Object(assertThisInitialized["a" /* default */])(_this));
    return _this;
  }

  Object(createClass["a" /* default */])(UnsavedChangesWarning, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('beforeunload', this.warnIfUnsavedChanges);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('beforeunload', this.warnIfUnsavedChanges);
    }
    /**
     * Warns the user if there are unsaved changes before leaving the editor.
     *
     * @param {Event} event `beforeunload` event.
     *
     * @return {?string} Warning prompt message, if unsaved changes exist.
     */

  }, {
    key: "warnIfUnsavedChanges",
    value: function warnIfUnsavedChanges(event) {
      var isEditedPostDirty = this.props.isEditedPostDirty;

      if (isEditedPostDirty()) {
        event.returnValue = Object(external_this_wp_i18n_["__"])('You have unsaved changes. If you proceed, they will be lost.');
        return event.returnValue;
      }
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return UnsavedChangesWarning;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var unsaved_changes_warning = (Object(external_this_wp_data_["withSelect"])(function (select) {
  return {
    // We need to call the selector directly in the listener to avoid race
    // conditions with `BrowserURL` where `componentDidUpdate` gets the
    // new value of `isEditedPostDirty` before this component does,
    // causing this component to incorrectly think a trashed post is still dirty.
    isEditedPostDirty: select('core/editor').isEditedPostDirty
  };
})(unsaved_changes_warning_UnsavedChangesWarning));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/provider/with-registry-provider.js




/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



var withRegistryProvider = Object(external_this_wp_compose_["createHigherOrderComponent"])(function (WrappedComponent) {
  return Object(external_this_wp_data_["withRegistry"])(function (props) {
    var _props$useSubRegistry = props.useSubRegistry,
        useSubRegistry = _props$useSubRegistry === void 0 ? true : _props$useSubRegistry,
        registry = props.registry,
        additionalProps = Object(objectWithoutProperties["a" /* default */])(props, ["useSubRegistry", "registry"]);

    if (!useSubRegistry) {
      return Object(external_this_wp_element_["createElement"])(WrappedComponent, additionalProps);
    }

    var _useState = Object(external_this_wp_element_["useState"])(null),
        _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
        subRegistry = _useState2[0],
        setSubRegistry = _useState2[1];

    Object(external_this_wp_element_["useEffect"])(function () {
      var newRegistry = Object(external_this_wp_data_["createRegistry"])({
        'core/block-editor': external_this_wp_blockEditor_["storeConfig"]
      }, registry);
      var store = newRegistry.registerStore('core/editor', storeConfig); // This should be removed after the refactoring of the effects to controls.

      middlewares(store);
      setSubRegistry(newRegistry);
    }, [registry]);

    if (!subRegistry) {
      return null;
    }

    return Object(external_this_wp_element_["createElement"])(external_this_wp_data_["RegistryProvider"], {
      value: subRegistry
    }, Object(external_this_wp_element_["createElement"])(WrappedComponent, additionalProps));
  });
}, 'withRegistryProvider');
/* harmony default export */ var with_registry_provider = (withRegistryProvider);

// EXTERNAL MODULE: external {"this":["wp","mediaUtils"]}
var external_this_wp_mediaUtils_ = __webpack_require__(130);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/utils/media-upload/index.js


function media_upload_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function media_upload_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { media_upload_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { media_upload_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Upload a media file when the file upload button is activated.
 * Wrapper around mediaUpload() that injects the current post ID.
 *
 * @param   {Object}   $0                   Parameters object passed to the function.
 * @param   {?Object}  $0.additionalData    Additional data to include in the request.
 * @param   {string}   $0.allowedTypes      Array with the types of media that can be uploaded, if unset all types are allowed.
 * @param   {Array}    $0.filesList         List of files.
 * @param   {?number}  $0.maxUploadFileSize Maximum upload size in bytes allowed for the site.
 * @param   {Function} $0.onError           Function called when an error happens.
 * @param   {Function} $0.onFileChange      Function called each time a file or a temporary representation of the file is available.
 */

/* harmony default export */ var media_upload = (function (_ref) {
  var _ref$additionalData = _ref.additionalData,
      additionalData = _ref$additionalData === void 0 ? {} : _ref$additionalData,
      allowedTypes = _ref.allowedTypes,
      filesList = _ref.filesList,
      maxUploadFileSize = _ref.maxUploadFileSize,
      _ref$onError = _ref.onError,
      _onError = _ref$onError === void 0 ? external_this_lodash_["noop"] : _ref$onError,
      onFileChange = _ref.onFileChange;

  var _select = Object(external_this_wp_data_["select"])('core/editor'),
      getCurrentPostId = _select.getCurrentPostId,
      getEditorSettings = _select.getEditorSettings;

  var wpAllowedMimeTypes = getEditorSettings().allowedMimeTypes;
  maxUploadFileSize = maxUploadFileSize || getEditorSettings().maxUploadFileSize;
  Object(external_this_wp_mediaUtils_["uploadMedia"])({
    allowedTypes: allowedTypes,
    filesList: filesList,
    onFileChange: onFileChange,
    additionalData: media_upload_objectSpread({
      post: getCurrentPostId()
    }, additionalData),
    maxUploadFileSize: maxUploadFileSize,
    onError: function onError(_ref2) {
      var message = _ref2.message;
      return _onError(message);
    },
    wpAllowedMimeTypes: wpAllowedMimeTypes
  });
});

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/utils/index.js
/**
 * Internal dependencies
 */




// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/reusable-blocks-buttons/reusable-block-convert-button.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






function ReusableBlockConvertButton(_ref) {
  var isVisible = _ref.isVisible,
      isReusable = _ref.isReusable,
      onConvertToStatic = _ref.onConvertToStatic,
      onConvertToReusable = _ref.onConvertToReusable;

  if (!isVisible) {
    return null;
  }

  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, !isReusable && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["MenuItem"], {
    icon: "controls-repeat",
    onClick: onConvertToReusable
  }, Object(external_this_wp_i18n_["__"])('Add to Reusable blocks')), isReusable && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["MenuItem"], {
    icon: "controls-repeat",
    onClick: onConvertToStatic
  }, Object(external_this_wp_i18n_["__"])('Convert to Regular Block')));
}
/* harmony default export */ var reusable_block_convert_button = (Object(external_this_wp_compose_["compose"])([Object(external_this_wp_data_["withSelect"])(function (select, _ref2) {
  var clientIds = _ref2.clientIds;

  var _select = select('core/block-editor'),
      getBlocksByClientId = _select.getBlocksByClientId,
      canInsertBlockType = _select.canInsertBlockType;

  var _select2 = select('core/editor'),
      getReusableBlock = _select2.__experimentalGetReusableBlock;

  var _select3 = select('core'),
      canUser = _select3.canUser;

  var blocks = getBlocksByClientId(clientIds);
  var isReusable = blocks.length === 1 && blocks[0] && Object(external_this_wp_blocks_["isReusableBlock"])(blocks[0]) && !!getReusableBlock(blocks[0].attributes.ref); // Show 'Convert to Regular Block' when selected block is a reusable block

  var isVisible = isReusable || // Hide 'Add to Reusable blocks' when reusable blocks are disabled
  canInsertBlockType('core/block') && Object(external_this_lodash_["every"])(blocks, function (block) {
    return (// Guard against the case where a regular block has *just* been converted
      !!block && // Hide 'Add to Reusable blocks' on invalid blocks
      block.isValid && // Hide 'Add to Reusable blocks' when block doesn't support being made reusable
      Object(external_this_wp_blocks_["hasBlockSupport"])(block.name, 'reusable', true)
    );
  }) && // Hide 'Add to Reusable blocks' when current doesn't have permission to do that
  !!canUser('create', 'blocks');
  return {
    isReusable: isReusable,
    isVisible: isVisible
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch, _ref3) {
  var clientIds = _ref3.clientIds,
      _ref3$onToggle = _ref3.onToggle,
      onToggle = _ref3$onToggle === void 0 ? external_this_lodash_["noop"] : _ref3$onToggle;

  var _dispatch = dispatch('core/editor'),
      convertBlockToReusable = _dispatch.__experimentalConvertBlockToReusable,
      convertBlockToStatic = _dispatch.__experimentalConvertBlockToStatic;

  return {
    onConvertToStatic: function onConvertToStatic() {
      if (clientIds.length !== 1) {
        return;
      }

      convertBlockToStatic(clientIds[0]);
      onToggle();
    },
    onConvertToReusable: function onConvertToReusable() {
      convertBlockToReusable(clientIds);
      onToggle();
    }
  };
})])(ReusableBlockConvertButton));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/reusable-blocks-buttons/reusable-block-delete-button.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */







function ReusableBlockDeleteButton(_ref) {
  var isVisible = _ref.isVisible,
      isDisabled = _ref.isDisabled,
      onDelete = _ref.onDelete;

  if (!isVisible) {
    return null;
  }

  return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["MenuItem"], {
    icon: library_close["a" /* default */],
    disabled: isDisabled,
    onClick: function onClick() {
      return onDelete();
    }
  }, Object(external_this_wp_i18n_["__"])('Remove from Reusable blocks'));
}
/* harmony default export */ var reusable_block_delete_button = (Object(external_this_wp_compose_["compose"])([Object(external_this_wp_data_["withSelect"])(function (select, _ref2) {
  var clientId = _ref2.clientId;

  var _select = select('core/block-editor'),
      getBlock = _select.getBlock;

  var _select2 = select('core'),
      canUser = _select2.canUser;

  var _select3 = select('core/editor'),
      getReusableBlock = _select3.__experimentalGetReusableBlock;

  var block = getBlock(clientId);
  var reusableBlock = block && Object(external_this_wp_blocks_["isReusableBlock"])(block) ? getReusableBlock(block.attributes.ref) : null;
  return {
    isVisible: !!reusableBlock && !!canUser('delete', 'blocks', reusableBlock.id),
    isDisabled: reusableBlock && reusableBlock.isTemporary
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch, _ref3, _ref4) {
  var clientId = _ref3.clientId,
      _ref3$onToggle = _ref3.onToggle,
      onToggle = _ref3$onToggle === void 0 ? external_this_lodash_["noop"] : _ref3$onToggle;
  var select = _ref4.select;

  var _dispatch = dispatch('core/editor'),
      deleteReusableBlock = _dispatch.__experimentalDeleteReusableBlock;

  var _select4 = select('core/block-editor'),
      getBlock = _select4.getBlock;

  return {
    onDelete: function onDelete() {
      // TODO: Make this a <Confirm /> component or similar
      // eslint-disable-next-line no-alert
      var hasConfirmed = window.confirm(Object(external_this_wp_i18n_["__"])('Are you sure you want to delete this Reusable Block?\n\n' + 'It will be permanently removed from all posts and pages that use it.'));

      if (hasConfirmed) {
        var block = getBlock(clientId);
        deleteReusableBlock(block.attributes.ref);
        onToggle();
      }
    }
  };
})])(ReusableBlockDeleteButton));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/reusable-blocks-buttons/index.js


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */




function ReusableBlocksButtons(_ref) {
  var clientIds = _ref.clientIds;
  return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["__experimentalBlockSettingsMenuPluginsExtension"], null, function (_ref2) {
    var onClose = _ref2.onClose;
    return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(reusable_block_convert_button, {
      clientIds: clientIds,
      onToggle: onClose
    }), clientIds.length === 1 && Object(external_this_wp_element_["createElement"])(reusable_block_delete_button, {
      clientId: clientIds[0],
      onToggle: onClose
    }));
  });
}

/* harmony default export */ var reusable_blocks_buttons = (Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select('core/block-editor'),
      getSelectedBlockClientIds = _select.getSelectedBlockClientIds;

  return {
    clientIds: getSelectedBlockClientIds()
  };
})(ReusableBlocksButtons));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/convert-to-group-buttons/icons.js


/**
 * WordPress dependencies
 */

var GroupSVG = Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SVG"], {
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M8 5a1 1 0 0 0-1 1v3H6a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3h1a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H8zm3 6H7v2h4v-2zM9 9V7h4v2H9z"
}), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M1 3a2 2 0 0 0 1 1.732v10.536A2 2 0 1 0 4.732 18h10.536A2 2 0 1 0 18 15.268V4.732A2 2 0 1 0 15.268 2H4.732A2 2 0 0 0 1 3zm14.268 1H4.732A2.01 2.01 0 0 1 4 4.732v10.536c.304.175.557.428.732.732h10.536a2.01 2.01 0 0 1 .732-.732V4.732A2.01 2.01 0 0 1 15.268 4z"
}));
var Group = Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Icon"], {
  icon: GroupSVG
});
var UngroupSVG = Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SVG"], {
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M9 2H15C16.1 2 17 2.9 17 4V7C17 8.1 16.1 9 15 9H9C7.9 9 7 8.1 7 7V4C7 2.9 7.9 2 9 2ZM9 7H15V4H9V7Z"
}), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M5 11H11C12.1 11 13 11.9 13 13V16C13 17.1 12.1 18 11 18H5C3.9 18 3 17.1 3 16V13C3 11.9 3.9 11 5 11ZM5 16H11V13H5V16Z"
}));
var Ungroup = Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Icon"], {
  icon: UngroupSVG
});

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/convert-to-group-buttons/convert-button.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */


function ConvertToGroupButton(_ref) {
  var onConvertToGroup = _ref.onConvertToGroup,
      onConvertFromGroup = _ref.onConvertFromGroup,
      _ref$isGroupable = _ref.isGroupable,
      isGroupable = _ref$isGroupable === void 0 ? false : _ref$isGroupable,
      _ref$isUngroupable = _ref.isUngroupable,
      isUngroupable = _ref$isUngroupable === void 0 ? false : _ref$isUngroupable;
  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, isGroupable && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["MenuItem"], {
    icon: Group,
    onClick: onConvertToGroup
  }, Object(external_this_wp_i18n_["_x"])('Group', 'verb')), isUngroupable && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["MenuItem"], {
    icon: Ungroup,
    onClick: onConvertFromGroup
  }, Object(external_this_wp_i18n_["_x"])('Ungroup', 'Ungrouping blocks from within a Group block back into individual blocks within the Editor ')));
}
/* harmony default export */ var convert_button = (Object(external_this_wp_compose_["compose"])([Object(external_this_wp_data_["withSelect"])(function (select, _ref2) {
  var clientIds = _ref2.clientIds;

  var _select = select('core/block-editor'),
      getBlockRootClientId = _select.getBlockRootClientId,
      getBlocksByClientId = _select.getBlocksByClientId,
      canInsertBlockType = _select.canInsertBlockType;

  var _select2 = select('core/blocks'),
      getGroupingBlockName = _select2.getGroupingBlockName;

  var groupingBlockName = getGroupingBlockName();
  var rootClientId = clientIds && clientIds.length > 0 ? getBlockRootClientId(clientIds[0]) : undefined;
  var groupingBlockAvailable = canInsertBlockType(groupingBlockName, rootClientId);
  var blocksSelection = getBlocksByClientId(clientIds);
  var isSingleGroupingBlock = blocksSelection.length === 1 && blocksSelection[0] && blocksSelection[0].name === groupingBlockName; // Do we have
  // 1. Grouping block available to be inserted?
  // 2. One or more blocks selected
  // (we allow single Blocks to become groups unless
  // they are a soltiary group block themselves)

  var isGroupable = groupingBlockAvailable && blocksSelection.length && !isSingleGroupingBlock; // Do we have a single Group Block selected and does that group have inner blocks?

  var isUngroupable = isSingleGroupingBlock && !!blocksSelection[0].innerBlocks.length;
  return {
    isGroupable: isGroupable,
    isUngroupable: isUngroupable,
    blocksSelection: blocksSelection,
    groupingBlockName: groupingBlockName
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch, _ref3) {
  var clientIds = _ref3.clientIds,
      _ref3$onToggle = _ref3.onToggle,
      onToggle = _ref3$onToggle === void 0 ? external_this_lodash_["noop"] : _ref3$onToggle,
      _ref3$blocksSelection = _ref3.blocksSelection,
      blocksSelection = _ref3$blocksSelection === void 0 ? [] : _ref3$blocksSelection,
      groupingBlockName = _ref3.groupingBlockName;

  var _dispatch = dispatch('core/block-editor'),
      replaceBlocks = _dispatch.replaceBlocks;

  return {
    onConvertToGroup: function onConvertToGroup() {
      if (!blocksSelection.length) {
        return;
      } // Activate the `transform` on the Grouping Block which does the conversion


      var newBlocks = Object(external_this_wp_blocks_["switchToBlockType"])(blocksSelection, groupingBlockName);

      if (newBlocks) {
        replaceBlocks(clientIds, newBlocks);
      }

      onToggle();
    },
    onConvertFromGroup: function onConvertFromGroup() {
      if (!blocksSelection.length) {
        return;
      }

      var innerBlocks = blocksSelection[0].innerBlocks;

      if (!innerBlocks.length) {
        return;
      }

      replaceBlocks(clientIds, innerBlocks);
      onToggle();
    }
  };
})])(ConvertToGroupButton));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/convert-to-group-buttons/index.js


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



function ConvertToGroupButtons(_ref) {
  var clientIds = _ref.clientIds;
  return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["__experimentalBlockSettingsMenuPluginsExtension"], null, function (_ref2) {
    var onClose = _ref2.onClose;
    return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(convert_button, {
      clientIds: clientIds,
      onToggle: onClose
    }));
  });
}

/* harmony default export */ var convert_to_group_buttons = (Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select('core/block-editor'),
      getSelectedBlockClientIds = _select.getSelectedBlockClientIds;

  return {
    clientIds: getSelectedBlockClientIds()
  };
})(ConvertToGroupButtons));

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/provider/index.js










function provider_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function provider_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { provider_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { provider_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */










/**
 * Internal dependencies
 */






var fetchLinkSuggestions =
/*#__PURE__*/
function () {
  var _ref = Object(asyncToGenerator["a" /* default */])(
  /*#__PURE__*/
  external_this_regeneratorRuntime_default.a.mark(function _callee(search) {
    var _ref2,
        _ref2$perPage,
        perPage,
        posts,
        _args = arguments;

    return external_this_regeneratorRuntime_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref2 = _args.length > 1 && _args[1] !== undefined ? _args[1] : {}, _ref2$perPage = _ref2.perPage, perPage = _ref2$perPage === void 0 ? 20 : _ref2$perPage;
            _context.next = 3;
            return external_this_wp_apiFetch_default()({
              path: Object(external_this_wp_url_["addQueryArgs"])('/wp/v2/search', {
                search: search,
                per_page: perPage,
                type: 'post'
              })
            });

          case 3:
            posts = _context.sent;
            return _context.abrupt("return", Object(external_this_lodash_["map"])(posts, function (post) {
              return {
                id: post.id,
                url: post.url,
                title: Object(external_this_wp_htmlEntities_["decodeEntities"])(post.title) || Object(external_this_wp_i18n_["__"])('(no title)'),
                type: post.subtype || post.type
              };
            }));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetchLinkSuggestions(_x) {
    return _ref.apply(this, arguments);
  };
}();

var provider_EditorProvider =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(EditorProvider, _Component);

  function EditorProvider(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, EditorProvider);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(EditorProvider).apply(this, arguments));
    _this.getBlockEditorSettings = memize_default()(_this.getBlockEditorSettings, {
      maxSize: 1
    }); // Assume that we don't need to initialize in the case of an error recovery.

    if (props.recovery) {
      return Object(possibleConstructorReturn["a" /* default */])(_this);
    }

    props.updatePostLock(props.settings.postLock);
    props.setupEditor(props.post, props.initialEdits, props.settings.template);

    if (props.settings.autosave) {
      props.createWarningNotice(Object(external_this_wp_i18n_["__"])('There is an autosave of this post that is more recent than the version below.'), {
        id: 'autosave-exists',
        actions: [{
          label: Object(external_this_wp_i18n_["__"])('View the autosave'),
          url: props.settings.autosave.editLink
        }]
      });
    }

    return _this;
  }

  Object(createClass["a" /* default */])(EditorProvider, [{
    key: "getBlockEditorSettings",
    value: function getBlockEditorSettings(settings, reusableBlocks, __experimentalFetchReusableBlocks, hasUploadPermissions, canUserUseUnfilteredHTML, undo, shouldInsertAtTheTop) {
      return provider_objectSpread({}, Object(external_this_lodash_["pick"])(settings, ['alignWide', 'allowedBlockTypes', '__experimentalPreferredStyleVariations', 'availableLegacyWidgets', 'bodyPlaceholder', 'codeEditingEnabled', 'colors', 'disableCustomColors', 'disableCustomFontSizes', 'disableCustomGradients', 'focusMode', 'fontSizes', 'hasFixedToolbar', 'hasPermissionsToManageWidgets', 'imageSizes', 'imageDimensions', 'isRTL', 'maxWidth', 'styles', 'template', 'templateLock', 'titlePlaceholder', 'onUpdateDefaultBlockStyles', '__experimentalEnableLegacyWidgetBlock', '__experimentalBlockDirectory', '__experimentalEnableFullSiteEditing', '__experimentalEnableFullSiteEditingDemo', '__experimentalEnablePageTemplates', 'showInserterHelpPanel', 'gradients']), {
        mediaUpload: hasUploadPermissions ? media_upload : undefined,
        __experimentalReusableBlocks: reusableBlocks,
        __experimentalFetchReusableBlocks: __experimentalFetchReusableBlocks,
        __experimentalFetchLinkSuggestions: fetchLinkSuggestions,
        __experimentalCanUserUseUnfilteredHTML: canUserUseUnfilteredHTML,
        __experimentalUndo: undo,
        __experimentalShouldInsertAtTheTop: shouldInsertAtTheTop
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.updateEditorSettings(this.props.settings);

      if (!this.props.settings.styles) {
        return;
      }

      var updatedStyles = Object(external_this_wp_blockEditor_["transformStyles"])(this.props.settings.styles, '.editor-styles-wrapper');
      Object(external_this_lodash_["map"])(updatedStyles, function (updatedCSS) {
        if (updatedCSS) {
          var node = document.createElement('style');
          node.innerHTML = updatedCSS;
          document.body.appendChild(node);
        }
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.settings !== prevProps.settings) {
        this.props.updateEditorSettings(this.props.settings);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.tearDownEditor();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          canUserUseUnfilteredHTML = _this$props.canUserUseUnfilteredHTML,
          children = _this$props.children,
          post = _this$props.post,
          blocks = _this$props.blocks,
          resetEditorBlocks = _this$props.resetEditorBlocks,
          selectionStart = _this$props.selectionStart,
          selectionEnd = _this$props.selectionEnd,
          isReady = _this$props.isReady,
          settings = _this$props.settings,
          reusableBlocks = _this$props.reusableBlocks,
          resetEditorBlocksWithoutUndoLevel = _this$props.resetEditorBlocksWithoutUndoLevel,
          hasUploadPermissions = _this$props.hasUploadPermissions,
          isPostTitleSelected = _this$props.isPostTitleSelected,
          __experimentalFetchReusableBlocks = _this$props.__experimentalFetchReusableBlocks,
          undo = _this$props.undo;

      if (!isReady) {
        return null;
      }

      var editorSettings = this.getBlockEditorSettings(settings, reusableBlocks, __experimentalFetchReusableBlocks, hasUploadPermissions, canUserUseUnfilteredHTML, undo, isPostTitleSelected);
      return Object(external_this_wp_element_["createElement"])(external_this_wp_coreData_["EntityProvider"], {
        kind: "root",
        type: "site"
      }, Object(external_this_wp_element_["createElement"])(external_this_wp_coreData_["EntityProvider"], {
        kind: "postType",
        type: post.type,
        id: post.id
      }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockEditorProvider"], {
        value: blocks,
        onInput: resetEditorBlocksWithoutUndoLevel,
        onChange: resetEditorBlocks,
        selectionStart: selectionStart,
        selectionEnd: selectionEnd,
        settings: editorSettings,
        useSubRegistry: false
      }, children, Object(external_this_wp_element_["createElement"])(reusable_blocks_buttons, null), Object(external_this_wp_element_["createElement"])(convert_to_group_buttons, null))));
    }
  }]);

  return EditorProvider;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var provider = (Object(external_this_wp_compose_["compose"])([with_registry_provider, Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select('core/editor'),
      canUserUseUnfilteredHTML = _select.canUserUseUnfilteredHTML,
      isEditorReady = _select.__unstableIsEditorReady,
      getEditorBlocks = _select.getEditorBlocks,
      getEditorSelectionStart = _select.getEditorSelectionStart,
      getEditorSelectionEnd = _select.getEditorSelectionEnd,
      __experimentalGetReusableBlocks = _select.__experimentalGetReusableBlocks,
      isPostTitleSelected = _select.isPostTitleSelected;

  var _select2 = select('core'),
      canUser = _select2.canUser;

  return {
    canUserUseUnfilteredHTML: canUserUseUnfilteredHTML(),
    isReady: isEditorReady(),
    blocks: getEditorBlocks(),
    selectionStart: getEditorSelectionStart(),
    selectionEnd: getEditorSelectionEnd(),
    reusableBlocks: __experimentalGetReusableBlocks(),
    hasUploadPermissions: Object(external_this_lodash_["defaultTo"])(canUser('create', 'media'), true),
    // This selector is only defined on mobile.
    isPostTitleSelected: isPostTitleSelected && isPostTitleSelected()
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/editor'),
      setupEditor = _dispatch.setupEditor,
      updatePostLock = _dispatch.updatePostLock,
      resetEditorBlocks = _dispatch.resetEditorBlocks,
      updateEditorSettings = _dispatch.updateEditorSettings,
      __experimentalFetchReusableBlocks = _dispatch.__experimentalFetchReusableBlocks,
      __experimentalTearDownEditor = _dispatch.__experimentalTearDownEditor,
      undo = _dispatch.undo;

  var _dispatch2 = dispatch('core/notices'),
      createWarningNotice = _dispatch2.createWarningNotice;

  return {
    setupEditor: setupEditor,
    updatePostLock: updatePostLock,
    createWarningNotice: createWarningNotice,
    resetEditorBlocks: resetEditorBlocks,
    updateEditorSettings: updateEditorSettings,
    resetEditorBlocksWithoutUndoLevel: function resetEditorBlocksWithoutUndoLevel(blocks, options) {
      resetEditorBlocks(blocks, provider_objectSpread({}, options, {
        __unstableShouldCreateUndoLevel: false
      }));
    },
    tearDownEditor: __experimentalTearDownEditor,
    __experimentalFetchReusableBlocks: __experimentalFetchReusableBlocks,
    undo: undo
  };
})])(provider_EditorProvider));

// EXTERNAL MODULE: external {"this":["wp","serverSideRender"]}
var external_this_wp_serverSideRender_ = __webpack_require__(67);
var external_this_wp_serverSideRender_default = /*#__PURE__*/__webpack_require__.n(external_this_wp_serverSideRender_);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/deprecated.js


// Block Creation Components

/**
 * WordPress dependencies
 */





function deprecateComponent(name, Wrapped) {
  var staticsToHoist = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var Component = Object(external_this_wp_element_["forwardRef"])(function (props, ref) {
    external_this_wp_deprecated_default()('wp.editor.' + name, {
      alternative: 'wp.blockEditor.' + name
    });
    return Object(external_this_wp_element_["createElement"])(Wrapped, Object(esm_extends["a" /* default */])({
      ref: ref
    }, props));
  });
  staticsToHoist.forEach(function (staticName) {
    Component[staticName] = deprecateComponent(name + '.' + staticName, Wrapped[staticName]);
  });
  return Component;
}

function deprecateFunction(name, func) {
  return function () {
    external_this_wp_deprecated_default()('wp.editor.' + name, {
      alternative: 'wp.blockEditor.' + name
    });
    return func.apply(void 0, arguments);
  };
}

var RichText = deprecateComponent('RichText', external_this_wp_blockEditor_["RichText"], ['Content']);
RichText.isEmpty = deprecateFunction('RichText.isEmpty', external_this_wp_blockEditor_["RichText"].isEmpty);

var Autocomplete = deprecateComponent('Autocomplete', external_this_wp_blockEditor_["Autocomplete"]);
var AlignmentToolbar = deprecateComponent('AlignmentToolbar', external_this_wp_blockEditor_["AlignmentToolbar"]);
var BlockAlignmentToolbar = deprecateComponent('BlockAlignmentToolbar', external_this_wp_blockEditor_["BlockAlignmentToolbar"]);
var BlockControls = deprecateComponent('BlockControls', external_this_wp_blockEditor_["BlockControls"], ['Slot']);
var deprecated_BlockEdit = deprecateComponent('BlockEdit', external_this_wp_blockEditor_["BlockEdit"]);
var BlockEditorKeyboardShortcuts = deprecateComponent('BlockEditorKeyboardShortcuts', external_this_wp_blockEditor_["BlockEditorKeyboardShortcuts"]);
var BlockFormatControls = deprecateComponent('BlockFormatControls', external_this_wp_blockEditor_["BlockFormatControls"], ['Slot']);
var BlockIcon = deprecateComponent('BlockIcon', external_this_wp_blockEditor_["BlockIcon"]);
var BlockInspector = deprecateComponent('BlockInspector', external_this_wp_blockEditor_["BlockInspector"]);
var BlockList = deprecateComponent('BlockList', external_this_wp_blockEditor_["BlockList"]);
var BlockMover = deprecateComponent('BlockMover', external_this_wp_blockEditor_["BlockMover"]);
var BlockNavigationDropdown = deprecateComponent('BlockNavigationDropdown', external_this_wp_blockEditor_["BlockNavigationDropdown"]);
var BlockSelectionClearer = deprecateComponent('BlockSelectionClearer', external_this_wp_blockEditor_["BlockSelectionClearer"]);
var BlockSettingsMenu = deprecateComponent('BlockSettingsMenu', external_this_wp_blockEditor_["BlockSettingsMenu"]);
var BlockTitle = deprecateComponent('BlockTitle', external_this_wp_blockEditor_["BlockTitle"]);
var BlockToolbar = deprecateComponent('BlockToolbar', external_this_wp_blockEditor_["BlockToolbar"]);
var ColorPalette = deprecateComponent('ColorPalette', external_this_wp_blockEditor_["ColorPalette"]);
var ContrastChecker = deprecateComponent('ContrastChecker', external_this_wp_blockEditor_["ContrastChecker"]);
var CopyHandler = deprecateComponent('CopyHandler', external_this_wp_blockEditor_["CopyHandler"]);
var DefaultBlockAppender = deprecateComponent('DefaultBlockAppender', external_this_wp_blockEditor_["DefaultBlockAppender"]);
var FontSizePicker = deprecateComponent('FontSizePicker', external_this_wp_blockEditor_["FontSizePicker"]);
var Inserter = deprecateComponent('Inserter', external_this_wp_blockEditor_["Inserter"]);
var InnerBlocks = deprecateComponent('InnerBlocks', external_this_wp_blockEditor_["InnerBlocks"], ['ButtonBlockAppender', 'DefaultBlockAppender', 'Content']);
var InspectorAdvancedControls = deprecateComponent('InspectorAdvancedControls', external_this_wp_blockEditor_["InspectorAdvancedControls"], ['Slot']);
var InspectorControls = deprecateComponent('InspectorControls', external_this_wp_blockEditor_["InspectorControls"], ['Slot']);
var PanelColorSettings = deprecateComponent('PanelColorSettings', external_this_wp_blockEditor_["PanelColorSettings"]);
var PlainText = deprecateComponent('PlainText', external_this_wp_blockEditor_["PlainText"]);
var RichTextShortcut = deprecateComponent('RichTextShortcut', external_this_wp_blockEditor_["RichTextShortcut"]);
var RichTextToolbarButton = deprecateComponent('RichTextToolbarButton', external_this_wp_blockEditor_["RichTextToolbarButton"]);
var __unstableRichTextInputEvent = deprecateComponent('__unstableRichTextInputEvent', external_this_wp_blockEditor_["__unstableRichTextInputEvent"]);
var MediaPlaceholder = deprecateComponent('MediaPlaceholder', external_this_wp_blockEditor_["MediaPlaceholder"]);
var MediaUpload = deprecateComponent('MediaUpload', external_this_wp_blockEditor_["MediaUpload"]);
var MediaUploadCheck = deprecateComponent('MediaUploadCheck', external_this_wp_blockEditor_["MediaUploadCheck"]);
var MultiBlocksSwitcher = deprecateComponent('MultiBlocksSwitcher', external_this_wp_blockEditor_["MultiBlocksSwitcher"]);
var MultiSelectScrollIntoView = deprecateComponent('MultiSelectScrollIntoView', external_this_wp_blockEditor_["MultiSelectScrollIntoView"]);
var NavigableToolbar = deprecateComponent('NavigableToolbar', external_this_wp_blockEditor_["NavigableToolbar"]);
var ObserveTyping = deprecateComponent('ObserveTyping', external_this_wp_blockEditor_["ObserveTyping"]);
var PreserveScrollInReorder = deprecateComponent('PreserveScrollInReorder', external_this_wp_blockEditor_["PreserveScrollInReorder"]);
var SkipToSelectedBlock = deprecateComponent('SkipToSelectedBlock', external_this_wp_blockEditor_["SkipToSelectedBlock"]);
var URLInput = deprecateComponent('URLInput', external_this_wp_blockEditor_["URLInput"]);
var URLInputButton = deprecateComponent('URLInputButton', external_this_wp_blockEditor_["URLInputButton"]);
var URLPopover = deprecateComponent('URLPopover', external_this_wp_blockEditor_["URLPopover"]);
var Warning = deprecateComponent('Warning', external_this_wp_blockEditor_["Warning"]);
var WritingFlow = deprecateComponent('WritingFlow', external_this_wp_blockEditor_["WritingFlow"]);
var createCustomColorsHOC = deprecateFunction('createCustomColorsHOC', external_this_wp_blockEditor_["createCustomColorsHOC"]);
var getColorClassName = deprecateFunction('getColorClassName', external_this_wp_blockEditor_["getColorClassName"]);
var getColorObjectByAttributeValues = deprecateFunction('getColorObjectByAttributeValues', external_this_wp_blockEditor_["getColorObjectByAttributeValues"]);
var getColorObjectByColorValue = deprecateFunction('getColorObjectByColorValue', external_this_wp_blockEditor_["getColorObjectByColorValue"]);
var getFontSize = deprecateFunction('getFontSize', external_this_wp_blockEditor_["getFontSize"]);
var getFontSizeClass = deprecateFunction('getFontSizeClass', external_this_wp_blockEditor_["getFontSizeClass"]);
var withColorContext = deprecateFunction('withColorContext', external_this_wp_blockEditor_["withColorContext"]);
var withColors = deprecateFunction('withColors', external_this_wp_blockEditor_["withColors"]);
var withFontSizes = deprecateFunction('withFontSizes', external_this_wp_blockEditor_["withFontSizes"]);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/index.js
// Block Creation Components
 // Post Related Components

























































 // State Related Components




// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/hooks/default-autocompleters.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



function setDefaultCompleters() {
  var completers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var blockName = arguments.length > 1 ? arguments[1] : undefined;
  // Provide copies so filters may directly modify them.
  completers.push(Object(external_this_lodash_["clone"])(autocompleters_user)); // Add blocks autocompleter for Paragraph block

  if (blockName === Object(external_this_wp_blocks_["getDefaultBlockName"])()) {
    completers.push(Object(external_this_lodash_["clone"])(autocompleters_block));
  }

  return completers;
}

Object(external_this_wp_hooks_["addFilter"])('editor.Autocomplete.completers', 'editor/autocompleters/set-default-completers', setDefaultCompleters);

// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/hooks/index.js
/**
 * Internal dependencies
 */



// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/index.js
/* concated harmony reexport AutosaveMonitor */__webpack_require__.d(__webpack_exports__, "AutosaveMonitor", function() { return autosave_monitor; });
/* concated harmony reexport DocumentOutline */__webpack_require__.d(__webpack_exports__, "DocumentOutline", function() { return document_outline; });
/* concated harmony reexport DocumentOutlineCheck */__webpack_require__.d(__webpack_exports__, "DocumentOutlineCheck", function() { return check; });
/* concated harmony reexport VisualEditorGlobalKeyboardShortcuts */__webpack_require__.d(__webpack_exports__, "VisualEditorGlobalKeyboardShortcuts", function() { return visual_editor_shortcuts; });
/* concated harmony reexport EditorGlobalKeyboardShortcuts */__webpack_require__.d(__webpack_exports__, "EditorGlobalKeyboardShortcuts", function() { return EditorGlobalKeyboardShortcuts; });
/* concated harmony reexport TextEditorGlobalKeyboardShortcuts */__webpack_require__.d(__webpack_exports__, "TextEditorGlobalKeyboardShortcuts", function() { return TextEditorGlobalKeyboardShortcuts; });
/* concated harmony reexport EditorKeyboardShortcutsRegister */__webpack_require__.d(__webpack_exports__, "EditorKeyboardShortcutsRegister", function() { return register_shortcuts; });
/* concated harmony reexport EditorHistoryRedo */__webpack_require__.d(__webpack_exports__, "EditorHistoryRedo", function() { return editor_history_redo; });
/* concated harmony reexport EditorHistoryUndo */__webpack_require__.d(__webpack_exports__, "EditorHistoryUndo", function() { return editor_history_undo; });
/* concated harmony reexport EditorNotices */__webpack_require__.d(__webpack_exports__, "EditorNotices", function() { return editor_notices; });
/* concated harmony reexport EntitiesSavedStates */__webpack_require__.d(__webpack_exports__, "EntitiesSavedStates", function() { return EntitiesSavedStates; });
/* concated harmony reexport ErrorBoundary */__webpack_require__.d(__webpack_exports__, "ErrorBoundary", function() { return error_boundary; });
/* concated harmony reexport LocalAutosaveMonitor */__webpack_require__.d(__webpack_exports__, "LocalAutosaveMonitor", function() { return local_autosave_monitor; });
/* concated harmony reexport PageAttributesCheck */__webpack_require__.d(__webpack_exports__, "PageAttributesCheck", function() { return page_attributes_check; });
/* concated harmony reexport PageAttributesOrder */__webpack_require__.d(__webpack_exports__, "PageAttributesOrder", function() { return page_attributes_order; });
/* concated harmony reexport PageAttributesParent */__webpack_require__.d(__webpack_exports__, "PageAttributesParent", function() { return page_attributes_parent; });
/* concated harmony reexport PageTemplate */__webpack_require__.d(__webpack_exports__, "PageTemplate", function() { return page_attributes_template; });
/* concated harmony reexport PostAuthor */__webpack_require__.d(__webpack_exports__, "PostAuthor", function() { return post_author; });
/* concated harmony reexport PostAuthorCheck */__webpack_require__.d(__webpack_exports__, "PostAuthorCheck", function() { return post_author_check; });
/* concated harmony reexport PostComments */__webpack_require__.d(__webpack_exports__, "PostComments", function() { return post_comments; });
/* concated harmony reexport PostExcerpt */__webpack_require__.d(__webpack_exports__, "PostExcerpt", function() { return post_excerpt; });
/* concated harmony reexport PostExcerptCheck */__webpack_require__.d(__webpack_exports__, "PostExcerptCheck", function() { return post_excerpt_check; });
/* concated harmony reexport PostFeaturedImage */__webpack_require__.d(__webpack_exports__, "PostFeaturedImage", function() { return post_featured_image; });
/* concated harmony reexport PostFeaturedImageCheck */__webpack_require__.d(__webpack_exports__, "PostFeaturedImageCheck", function() { return post_featured_image_check; });
/* concated harmony reexport PostFormat */__webpack_require__.d(__webpack_exports__, "PostFormat", function() { return post_format; });
/* concated harmony reexport PostFormatCheck */__webpack_require__.d(__webpack_exports__, "PostFormatCheck", function() { return post_format_check; });
/* concated harmony reexport PostLastRevision */__webpack_require__.d(__webpack_exports__, "PostLastRevision", function() { return post_last_revision; });
/* concated harmony reexport PostLastRevisionCheck */__webpack_require__.d(__webpack_exports__, "PostLastRevisionCheck", function() { return post_last_revision_check; });
/* concated harmony reexport PostLockedModal */__webpack_require__.d(__webpack_exports__, "PostLockedModal", function() { return post_locked_modal; });
/* concated harmony reexport PostPendingStatus */__webpack_require__.d(__webpack_exports__, "PostPendingStatus", function() { return post_pending_status; });
/* concated harmony reexport PostPendingStatusCheck */__webpack_require__.d(__webpack_exports__, "PostPendingStatusCheck", function() { return post_pending_status_check; });
/* concated harmony reexport PostPingbacks */__webpack_require__.d(__webpack_exports__, "PostPingbacks", function() { return post_pingbacks; });
/* concated harmony reexport PostPreviewButton */__webpack_require__.d(__webpack_exports__, "PostPreviewButton", function() { return post_preview_button; });
/* concated harmony reexport PostPublishButton */__webpack_require__.d(__webpack_exports__, "PostPublishButton", function() { return post_publish_button; });
/* concated harmony reexport PostPublishButtonLabel */__webpack_require__.d(__webpack_exports__, "PostPublishButtonLabel", function() { return post_publish_button_label; });
/* concated harmony reexport PostPublishPanel */__webpack_require__.d(__webpack_exports__, "PostPublishPanel", function() { return post_publish_panel; });
/* concated harmony reexport PostSavedState */__webpack_require__.d(__webpack_exports__, "PostSavedState", function() { return post_saved_state; });
/* concated harmony reexport PostSchedule */__webpack_require__.d(__webpack_exports__, "PostSchedule", function() { return post_schedule; });
/* concated harmony reexport PostScheduleCheck */__webpack_require__.d(__webpack_exports__, "PostScheduleCheck", function() { return post_schedule_check; });
/* concated harmony reexport PostScheduleLabel */__webpack_require__.d(__webpack_exports__, "PostScheduleLabel", function() { return post_schedule_label; });
/* concated harmony reexport PostSlug */__webpack_require__.d(__webpack_exports__, "PostSlug", function() { return post_slug; });
/* concated harmony reexport PostSlugCheck */__webpack_require__.d(__webpack_exports__, "PostSlugCheck", function() { return PostSlugCheck; });
/* concated harmony reexport PostSticky */__webpack_require__.d(__webpack_exports__, "PostSticky", function() { return post_sticky; });
/* concated harmony reexport PostStickyCheck */__webpack_require__.d(__webpack_exports__, "PostStickyCheck", function() { return post_sticky_check; });
/* concated harmony reexport PostSwitchToDraftButton */__webpack_require__.d(__webpack_exports__, "PostSwitchToDraftButton", function() { return post_switch_to_draft_button; });
/* concated harmony reexport PostTaxonomies */__webpack_require__.d(__webpack_exports__, "PostTaxonomies", function() { return post_taxonomies; });
/* concated harmony reexport PostTaxonomiesCheck */__webpack_require__.d(__webpack_exports__, "PostTaxonomiesCheck", function() { return post_taxonomies_check; });
/* concated harmony reexport PostTextEditor */__webpack_require__.d(__webpack_exports__, "PostTextEditor", function() { return post_text_editor; });
/* concated harmony reexport PostTitle */__webpack_require__.d(__webpack_exports__, "PostTitle", function() { return post_title; });
/* concated harmony reexport PostTrash */__webpack_require__.d(__webpack_exports__, "PostTrash", function() { return post_trash; });
/* concated harmony reexport PostTrashCheck */__webpack_require__.d(__webpack_exports__, "PostTrashCheck", function() { return post_trash_check; });
/* concated harmony reexport PostTypeSupportCheck */__webpack_require__.d(__webpack_exports__, "PostTypeSupportCheck", function() { return post_type_support_check; });
/* concated harmony reexport PostVisibility */__webpack_require__.d(__webpack_exports__, "PostVisibility", function() { return post_visibility; });
/* concated harmony reexport PostVisibilityLabel */__webpack_require__.d(__webpack_exports__, "PostVisibilityLabel", function() { return post_visibility_label; });
/* concated harmony reexport PostVisibilityCheck */__webpack_require__.d(__webpack_exports__, "PostVisibilityCheck", function() { return post_visibility_check; });
/* concated harmony reexport TableOfContents */__webpack_require__.d(__webpack_exports__, "TableOfContents", function() { return table_of_contents; });
/* concated harmony reexport UnsavedChangesWarning */__webpack_require__.d(__webpack_exports__, "UnsavedChangesWarning", function() { return unsaved_changes_warning; });
/* concated harmony reexport WordCount */__webpack_require__.d(__webpack_exports__, "WordCount", function() { return word_count; });
/* concated harmony reexport EditorProvider */__webpack_require__.d(__webpack_exports__, "EditorProvider", function() { return provider; });
/* concated harmony reexport blockAutocompleter */__webpack_require__.d(__webpack_exports__, "blockAutocompleter", function() { return autocompleters_block; });
/* concated harmony reexport userAutocompleter */__webpack_require__.d(__webpack_exports__, "userAutocompleter", function() { return autocompleters_user; });
/* concated harmony reexport ServerSideRender */__webpack_require__.d(__webpack_exports__, "ServerSideRender", function() { return external_this_wp_serverSideRender_default.a; });
/* concated harmony reexport RichText */__webpack_require__.d(__webpack_exports__, "RichText", function() { return RichText; });
/* concated harmony reexport Autocomplete */__webpack_require__.d(__webpack_exports__, "Autocomplete", function() { return Autocomplete; });
/* concated harmony reexport AlignmentToolbar */__webpack_require__.d(__webpack_exports__, "AlignmentToolbar", function() { return AlignmentToolbar; });
/* concated harmony reexport BlockAlignmentToolbar */__webpack_require__.d(__webpack_exports__, "BlockAlignmentToolbar", function() { return BlockAlignmentToolbar; });
/* concated harmony reexport BlockControls */__webpack_require__.d(__webpack_exports__, "BlockControls", function() { return BlockControls; });
/* concated harmony reexport BlockEdit */__webpack_require__.d(__webpack_exports__, "BlockEdit", function() { return deprecated_BlockEdit; });
/* concated harmony reexport BlockEditorKeyboardShortcuts */__webpack_require__.d(__webpack_exports__, "BlockEditorKeyboardShortcuts", function() { return BlockEditorKeyboardShortcuts; });
/* concated harmony reexport BlockFormatControls */__webpack_require__.d(__webpack_exports__, "BlockFormatControls", function() { return BlockFormatControls; });
/* concated harmony reexport BlockIcon */__webpack_require__.d(__webpack_exports__, "BlockIcon", function() { return BlockIcon; });
/* concated harmony reexport BlockInspector */__webpack_require__.d(__webpack_exports__, "BlockInspector", function() { return BlockInspector; });
/* concated harmony reexport BlockList */__webpack_require__.d(__webpack_exports__, "BlockList", function() { return BlockList; });
/* concated harmony reexport BlockMover */__webpack_require__.d(__webpack_exports__, "BlockMover", function() { return BlockMover; });
/* concated harmony reexport BlockNavigationDropdown */__webpack_require__.d(__webpack_exports__, "BlockNavigationDropdown", function() { return BlockNavigationDropdown; });
/* concated harmony reexport BlockSelectionClearer */__webpack_require__.d(__webpack_exports__, "BlockSelectionClearer", function() { return BlockSelectionClearer; });
/* concated harmony reexport BlockSettingsMenu */__webpack_require__.d(__webpack_exports__, "BlockSettingsMenu", function() { return BlockSettingsMenu; });
/* concated harmony reexport BlockTitle */__webpack_require__.d(__webpack_exports__, "BlockTitle", function() { return BlockTitle; });
/* concated harmony reexport BlockToolbar */__webpack_require__.d(__webpack_exports__, "BlockToolbar", function() { return BlockToolbar; });
/* concated harmony reexport ColorPalette */__webpack_require__.d(__webpack_exports__, "ColorPalette", function() { return ColorPalette; });
/* concated harmony reexport ContrastChecker */__webpack_require__.d(__webpack_exports__, "ContrastChecker", function() { return ContrastChecker; });
/* concated harmony reexport CopyHandler */__webpack_require__.d(__webpack_exports__, "CopyHandler", function() { return CopyHandler; });
/* concated harmony reexport DefaultBlockAppender */__webpack_require__.d(__webpack_exports__, "DefaultBlockAppender", function() { return DefaultBlockAppender; });
/* concated harmony reexport FontSizePicker */__webpack_require__.d(__webpack_exports__, "FontSizePicker", function() { return FontSizePicker; });
/* concated harmony reexport Inserter */__webpack_require__.d(__webpack_exports__, "Inserter", function() { return Inserter; });
/* concated harmony reexport InnerBlocks */__webpack_require__.d(__webpack_exports__, "InnerBlocks", function() { return InnerBlocks; });
/* concated harmony reexport InspectorAdvancedControls */__webpack_require__.d(__webpack_exports__, "InspectorAdvancedControls", function() { return InspectorAdvancedControls; });
/* concated harmony reexport InspectorControls */__webpack_require__.d(__webpack_exports__, "InspectorControls", function() { return InspectorControls; });
/* concated harmony reexport PanelColorSettings */__webpack_require__.d(__webpack_exports__, "PanelColorSettings", function() { return PanelColorSettings; });
/* concated harmony reexport PlainText */__webpack_require__.d(__webpack_exports__, "PlainText", function() { return PlainText; });
/* concated harmony reexport RichTextShortcut */__webpack_require__.d(__webpack_exports__, "RichTextShortcut", function() { return RichTextShortcut; });
/* concated harmony reexport RichTextToolbarButton */__webpack_require__.d(__webpack_exports__, "RichTextToolbarButton", function() { return RichTextToolbarButton; });
/* concated harmony reexport __unstableRichTextInputEvent */__webpack_require__.d(__webpack_exports__, "__unstableRichTextInputEvent", function() { return __unstableRichTextInputEvent; });
/* concated harmony reexport MediaPlaceholder */__webpack_require__.d(__webpack_exports__, "MediaPlaceholder", function() { return MediaPlaceholder; });
/* concated harmony reexport MediaUpload */__webpack_require__.d(__webpack_exports__, "MediaUpload", function() { return MediaUpload; });
/* concated harmony reexport MediaUploadCheck */__webpack_require__.d(__webpack_exports__, "MediaUploadCheck", function() { return MediaUploadCheck; });
/* concated harmony reexport MultiBlocksSwitcher */__webpack_require__.d(__webpack_exports__, "MultiBlocksSwitcher", function() { return MultiBlocksSwitcher; });
/* concated harmony reexport MultiSelectScrollIntoView */__webpack_require__.d(__webpack_exports__, "MultiSelectScrollIntoView", function() { return MultiSelectScrollIntoView; });
/* concated harmony reexport NavigableToolbar */__webpack_require__.d(__webpack_exports__, "NavigableToolbar", function() { return NavigableToolbar; });
/* concated harmony reexport ObserveTyping */__webpack_require__.d(__webpack_exports__, "ObserveTyping", function() { return ObserveTyping; });
/* concated harmony reexport PreserveScrollInReorder */__webpack_require__.d(__webpack_exports__, "PreserveScrollInReorder", function() { return PreserveScrollInReorder; });
/* concated harmony reexport SkipToSelectedBlock */__webpack_require__.d(__webpack_exports__, "SkipToSelectedBlock", function() { return SkipToSelectedBlock; });
/* concated harmony reexport URLInput */__webpack_require__.d(__webpack_exports__, "URLInput", function() { return URLInput; });
/* concated harmony reexport URLInputButton */__webpack_require__.d(__webpack_exports__, "URLInputButton", function() { return URLInputButton; });
/* concated harmony reexport URLPopover */__webpack_require__.d(__webpack_exports__, "URLPopover", function() { return URLPopover; });
/* concated harmony reexport Warning */__webpack_require__.d(__webpack_exports__, "Warning", function() { return Warning; });
/* concated harmony reexport WritingFlow */__webpack_require__.d(__webpack_exports__, "WritingFlow", function() { return WritingFlow; });
/* concated harmony reexport createCustomColorsHOC */__webpack_require__.d(__webpack_exports__, "createCustomColorsHOC", function() { return createCustomColorsHOC; });
/* concated harmony reexport getColorClassName */__webpack_require__.d(__webpack_exports__, "getColorClassName", function() { return getColorClassName; });
/* concated harmony reexport getColorObjectByAttributeValues */__webpack_require__.d(__webpack_exports__, "getColorObjectByAttributeValues", function() { return getColorObjectByAttributeValues; });
/* concated harmony reexport getColorObjectByColorValue */__webpack_require__.d(__webpack_exports__, "getColorObjectByColorValue", function() { return getColorObjectByColorValue; });
/* concated harmony reexport getFontSize */__webpack_require__.d(__webpack_exports__, "getFontSize", function() { return getFontSize; });
/* concated harmony reexport getFontSizeClass */__webpack_require__.d(__webpack_exports__, "getFontSizeClass", function() { return getFontSizeClass; });
/* concated harmony reexport withColorContext */__webpack_require__.d(__webpack_exports__, "withColorContext", function() { return withColorContext; });
/* concated harmony reexport withColors */__webpack_require__.d(__webpack_exports__, "withColors", function() { return withColors; });
/* concated harmony reexport withFontSizes */__webpack_require__.d(__webpack_exports__, "withFontSizes", function() { return withFontSizes; });
/* concated harmony reexport mediaUpload */__webpack_require__.d(__webpack_exports__, "mediaUpload", function() { return media_upload; });
/* concated harmony reexport cleanForSlug */__webpack_require__.d(__webpack_exports__, "cleanForSlug", function() { return cleanForSlug; });
/* concated harmony reexport storeConfig */__webpack_require__.d(__webpack_exports__, "storeConfig", function() { return storeConfig; });
/* concated harmony reexport transformStyles */__webpack_require__.d(__webpack_exports__, "transformStyles", function() { return external_this_wp_blockEditor_["transformStyles"]; });
/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */






/*
 * Backward compatibility
 */


=======
const wordpress = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M20 10c0-5.51-4.49-10-10-10C4.48 0 0 4.49 0 10c0 5.52 4.48 10 10 10 5.51 0 10-4.48 10-10zM7.78 15.37L4.37 6.22c.55-.02 1.17-.08 1.17-.08.5-.06.44-1.13-.06-1.11 0 0-1.45.11-2.37.11-.18 0-.37 0-.58-.01C4.12 2.69 6.87 1.11 10 1.11c2.33 0 4.45.87 6.05 2.34-.68-.11-1.65.39-1.65 1.58 0 .74.45 1.36.9 2.1.35.61.55 1.36.55 2.46 0 1.49-1.4 5-1.4 5l-3.03-8.37c.54-.02.82-.17.82-.17.5-.05.44-1.25-.06-1.22 0 0-1.44.12-2.38.12-.87 0-2.33-.12-2.33-.12-.5-.03-.56 1.2-.06 1.22l.92.08 1.26 3.41zM17.41 10c.24-.64.74-1.87.43-4.25.7 1.29 1.05 2.71 1.05 4.25 0 3.29-1.73 6.24-4.4 7.78.97-2.59 1.94-5.2 2.92-7.78zM6.1 18.09C3.12 16.65 1.11 13.53 1.11 10c0-1.3.23-2.48.72-3.59C3.25 10.3 4.67 14.2 6.1 18.09zm4.03-6.63l2.58 6.98c-.86.29-1.76.45-2.71.45-.79 0-1.57-.11-2.29-.33.81-2.38 1.62-4.74 2.42-7.1z"
}));
/* harmony default export */ __webpack_exports__["a"] = (wordpress);
>>>>>>> master


/***/ }),

<<<<<<< HEAD
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

/***/ 44:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["dataControls"]; }());

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Memize options object.
 *
 * @typedef MemizeOptions
 *
 * @property {number} [maxSize] Maximum size of the cache.
 */

/**
 * Internal cache entry.
 *
 * @typedef MemizeCacheNode
 *
 * @property {?MemizeCacheNode|undefined} [prev] Previous node.
 * @property {?MemizeCacheNode|undefined} [next] Next node.
 * @property {Array<*>}                   args   Function arguments for cache
 *                                               entry.
 * @property {*}                          val    Function result.
 */

/**
 * Properties of the enhanced function for controlling cache.
 *
 * @typedef MemizeMemoizedFunction
 *
 * @property {()=>void} clear Clear the cache.
 */

/**
 * Accepts a function to be memoized, and returns a new memoized function, with
 * optional options.
 *
 * @template {Function} F
 *
 * @param {F}             fn        Function to memoize.
 * @param {MemizeOptions} [options] Options object.
 *
 * @return {F & MemizeMemoizedFunction} Memoized function.
 */
function memize( fn, options ) {
	var size = 0;

	/** @type {?MemizeCacheNode|undefined} */
	var head;

	/** @type {?MemizeCacheNode|undefined} */
	var tail;

	options = options || {};

	function memoized( /* ...args */ ) {
		var node = head,
			len = arguments.length,
			args, i;

		searchCache: while ( node ) {
			// Perform a shallow equality test to confirm that whether the node
			// under test is a candidate for the arguments passed. Two arrays
			// are shallowly equal if their length matches and each entry is
			// strictly equal between the two sets. Avoid abstracting to a
			// function which could incur an arguments leaking deoptimization.

			// Check whether node arguments match arguments length
			if ( node.args.length !== arguments.length ) {
				node = node.next;
				continue;
			}

			// Check whether node arguments match arguments values
			for ( i = 0; i < len; i++ ) {
				if ( node.args[ i ] !== arguments[ i ] ) {
					node = node.next;
					continue searchCache;
				}
			}

			// At this point we can assume we've found a match

			// Surface matched node to head if not already
			if ( node !== head ) {
				// As tail, shift to previous. Must only shift if not also
				// head, since if both head and tail, there is no previous.
				if ( node === tail ) {
					tail = node.prev;
				}

				// Adjust siblings to point to each other. If node was tail,
				// this also handles new tail's empty `next` assignment.
				/** @type {MemizeCacheNode} */ ( node.prev ).next = node.next;
				if ( node.next ) {
					node.next.prev = node.prev;
				}

				node.next = head;
				node.prev = null;
				/** @type {MemizeCacheNode} */ ( head ).prev = node;
				head = node;
			}

			// Return immediately
			return node.val;
		}

		// No cached value found. Continue to insertion phase:

		// Create a copy of arguments (avoid leaking deoptimization)
		args = new Array( len );
		for ( i = 0; i < len; i++ ) {
			args[ i ] = arguments[ i ];
		}

		node = {
			args: args,

			// Generate the result from original function
			val: fn.apply( null, args ),
		};

		// Don't need to check whether node is already head, since it would
		// have been returned above already if it was

		// Shift existing head down list
		if ( head ) {
			head.prev = node;
			node.next = head;
		} else {
			// If no head, follows that there's no tail (at initial or reset)
			tail = node;
		}

		// Trim tail if we're reached max size and are pending cache insertion
		if ( size === /** @type {MemizeOptions} */ ( options ).maxSize ) {
			tail = /** @type {MemizeCacheNode} */ ( tail ).prev;
			/** @type {MemizeCacheNode} */ ( tail ).next = null;
		} else {
			size++;
		}

		head = node;

		return node.val;
	}

	memoized.clear = function() {
		head = null;
		tail = null;
		size = 0;
	};

	if ( false ) {}

	// Ignore reason: There's not a clear solution to create an intersection of
	// the function with additional properties, where the goal is to retain the
	// function signature of the incoming argument and add control properties
	// on the return value.

	// @ts-ignore
	return memoized;
}

module.exports = memize;


/***/ }),

/***/ 48:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["keyboardShortcuts"]; }());

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
=======
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

/***/ 56:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["viewport"]; }());

/***/ }),

/***/ 58:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["htmlEntities"]; }());

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blockEditor"]; }());

/***/ }),

/***/ 60:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["date"]; }());

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

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

/**
 * Given an instance of EquivalentKeyMap, returns its internal value pair tuple
 * for a key, if one exists. The tuple members consist of the last reference
 * value for the key (used in efficient subsequent lookups) and the value
 * assigned for the key at the leaf node.
 *
 * @param {EquivalentKeyMap} instance EquivalentKeyMap instance.
 * @param {*} key                     The key for which to return value pair.
 *
 * @return {?Array} Value pair, if exists.
 */
function getValuePair(instance, key) {
  var _map = instance._map,
      _arrayTreeMap = instance._arrayTreeMap,
      _objectTreeMap = instance._objectTreeMap; // Map keeps a reference to the last object-like key used to set the
  // value, which can be used to shortcut immediately to the value.

  if (_map.has(key)) {
    return _map.get(key);
  } // Sort keys to ensure stable retrieval from tree.


  var properties = Object.keys(key).sort(); // Tree by type to avoid conflicts on numeric object keys, empty value.

  var map = Array.isArray(key) ? _arrayTreeMap : _objectTreeMap;

  for (var i = 0; i < properties.length; i++) {
    var property = properties[i];
    map = map.get(property);

    if (map === undefined) {
      return;
    }

    var propertyValue = key[property];
    map = map.get(propertyValue);

    if (map === undefined) {
      return;
    }
  }

  var valuePair = map.get('_ekm_value');

  if (!valuePair) {
    return;
  } // If reached, it implies that an object-like key was set with another
  // reference, so delete the reference and replace with the current.


  _map.delete(valuePair[0]);

  valuePair[0] = key;
  map.set('_ekm_value', valuePair);

  _map.set(key, valuePair);

  return valuePair;
}
/**
 * Variant of a Map object which enables lookup by equivalent (deeply equal)
 * object and array keys.
 */


var EquivalentKeyMap =
/*#__PURE__*/
function () {
  /**
   * Constructs a new instance of EquivalentKeyMap.
   *
   * @param {Iterable.<*>} iterable Initial pair of key, value for map.
   */
  function EquivalentKeyMap(iterable) {
    _classCallCheck(this, EquivalentKeyMap);

    this.clear();

    if (iterable instanceof EquivalentKeyMap) {
      // Map#forEach is only means of iterating with support for IE11.
      var iterablePairs = [];
      iterable.forEach(function (value, key) {
        iterablePairs.push([key, value]);
      });
      iterable = iterablePairs;
    }

    if (iterable != null) {
      for (var i = 0; i < iterable.length; i++) {
        this.set(iterable[i][0], iterable[i][1]);
      }
    }
  }
  /**
   * Accessor property returning the number of elements.
   *
   * @return {number} Number of elements.
   */


  _createClass(EquivalentKeyMap, [{
    key: "set",

    /**
     * Add or update an element with a specified key and value.
     *
     * @param {*} key   The key of the element to add.
     * @param {*} value The value of the element to add.
     *
     * @return {EquivalentKeyMap} Map instance.
     */
    value: function set(key, value) {
      // Shortcut non-object-like to set on internal Map.
      if (key === null || _typeof(key) !== 'object') {
        this._map.set(key, value);

        return this;
      } // Sort keys to ensure stable assignment into tree.


      var properties = Object.keys(key).sort();
      var valuePair = [key, value]; // Tree by type to avoid conflicts on numeric object keys, empty value.

      var map = Array.isArray(key) ? this._arrayTreeMap : this._objectTreeMap;

      for (var i = 0; i < properties.length; i++) {
        var property = properties[i];

        if (!map.has(property)) {
          map.set(property, new EquivalentKeyMap());
        }

        map = map.get(property);
        var propertyValue = key[property];

        if (!map.has(propertyValue)) {
          map.set(propertyValue, new EquivalentKeyMap());
        }

        map = map.get(propertyValue);
      } // If an _ekm_value exists, there was already an equivalent key. Before
      // overriding, ensure that the old key reference is removed from map to
      // avoid memory leak of accumulating equivalent keys. This is, in a
      // sense, a poor man's WeakMap, while still enabling iterability.


      var previousValuePair = map.get('_ekm_value');

      if (previousValuePair) {
        this._map.delete(previousValuePair[0]);
      }

      map.set('_ekm_value', valuePair);

      this._map.set(key, valuePair);

      return this;
    }
    /**
     * Returns a specified element.
     *
     * @param {*} key The key of the element to return.
     *
     * @return {?*} The element associated with the specified key or undefined
     *              if the key can't be found.
     */

  }, {
    key: "get",
    value: function get(key) {
      // Shortcut non-object-like to get from internal Map.
      if (key === null || _typeof(key) !== 'object') {
        return this._map.get(key);
      }

      var valuePair = getValuePair(this, key);

      if (valuePair) {
        return valuePair[1];
      }
    }
    /**
     * Returns a boolean indicating whether an element with the specified key
     * exists or not.
     *
     * @param {*} key The key of the element to test for presence.
     *
     * @return {boolean} Whether an element with the specified key exists.
     */

  }, {
    key: "has",
    value: function has(key) {
      if (key === null || _typeof(key) !== 'object') {
        return this._map.has(key);
      } // Test on the _presence_ of the pair, not its value, as even undefined
      // can be a valid member value for a key.


      return getValuePair(this, key) !== undefined;
    }
    /**
     * Removes the specified element.
     *
     * @param {*} key The key of the element to remove.
     *
     * @return {boolean} Returns true if an element existed and has been
     *                   removed, or false if the element does not exist.
     */

  }, {
    key: "delete",
    value: function _delete(key) {
      if (!this.has(key)) {
        return false;
      } // This naive implementation will leave orphaned child trees. A better
      // implementation should traverse and remove orphans.


      this.set(key, undefined);
      return true;
    }
    /**
     * Executes a provided function once per each key/value pair, in insertion
     * order.
     *
     * @param {Function} callback Function to execute for each element.
     * @param {*}        thisArg  Value to use as `this` when executing
     *                            `callback`.
     */

  }, {
    key: "forEach",
    value: function forEach(callback) {
      var _this = this;

      var thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;

      this._map.forEach(function (value, key) {
        // Unwrap value from object-like value pair.
        if (key !== null && _typeof(key) === 'object') {
          value = value[1];
        }

        callback.call(thisArg, value, key, _this);
      });
    }
    /**
     * Removes all elements.
     */

  }, {
    key: "clear",
    value: function clear() {
      this._map = new Map();
      this._arrayTreeMap = new Map();
      this._objectTreeMap = new Map();
    }
  }, {
    key: "size",
    get: function get() {
      return this._map.size;
    }
  }]);

  return EquivalentKeyMap;
}();

module.exports = EquivalentKeyMap;


/***/ }),

/***/ 67:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["serverSideRender"]; }());

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

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var TextareaAutosize_1 = __webpack_require__(152);
exports["default"] = TextareaAutosize_1["default"];


/***/ }),

/***/ 75:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["coreData"]; }());

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["compose"]; }());

/***/ }),

/***/ 85:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["autop"]; }());

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function flattenIntoMap( map, effects ) {
	var i;
	if ( Array.isArray( effects ) ) {
		for ( i = 0; i < effects.length; i++ ) {
			flattenIntoMap( map, effects[ i ] );
		}
	} else {
		for ( i in effects ) {
			map[ i ] = ( map[ i ] || [] ).concat( effects[ i ] );
		}
	}
}

function refx( effects ) {
	var map = {},
		middleware;

	flattenIntoMap( map, effects );

	middleware = function( store ) {
		return function( next ) {
			return function( action ) {
				var handlers = map[ action.type ],
					result = next( action ),
					i, handlerAction;

				if ( handlers ) {
					for ( i = 0; i < handlers.length; i++ ) {
						handlerAction = handlers[ i ]( action, store );
						if ( handlerAction ) {
							store.dispatch( handlerAction );
						}
					}
				}

				return result;
			};
		};
	};

	middleware.effects = map;

	return middleware;
}

module.exports = refx;


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