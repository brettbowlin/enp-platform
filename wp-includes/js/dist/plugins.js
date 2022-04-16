this["wp"] = this["wp"] || {}; this["wp"]["plugins"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 444);
=======
/******/ 	return __webpack_require__(__webpack_require__.s = "ey5A");
>>>>>>> master
/******/ })
/************************************************************************/
/******/ ({

<<<<<<< HEAD
/***/ 0:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

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

/***/ 2:
/***/ (function(module, exports) {

(function() { module.exports = this["lodash"]; }());

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

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

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

// EXTERNAL MODULE: external {"this":["wp","element"]}
var external_this_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: external {"this":"lodash"}
var external_this_lodash_ = __webpack_require__(2);

// EXTERNAL MODULE: external {"this":["wp","hooks"]}
var external_this_wp_hooks_ = __webpack_require__(32);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(12);

// EXTERNAL MODULE: external {"this":["wp","compose"]}
var external_this_wp_compose_ = __webpack_require__(8);
=======
/***/ "4eJC":
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

/***/ "GRId":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "K9lf":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["compose"]; }());

/***/ }),

/***/ "Tqx9":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["primitives"]; }());

/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

(function() { module.exports = window["lodash"]; }());

/***/ }),

/***/ "ey5A":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "PluginArea", function() { return /* reexport */ plugin_area; });
__webpack_require__.d(__webpack_exports__, "withPluginContext", function() { return /* reexport */ withPluginContext; });
__webpack_require__.d(__webpack_exports__, "registerPlugin", function() { return /* reexport */ registerPlugin; });
__webpack_require__.d(__webpack_exports__, "unregisterPlugin", function() { return /* reexport */ unregisterPlugin; });
__webpack_require__.d(__webpack_exports__, "getPlugin", function() { return /* reexport */ getPlugin; });
__webpack_require__.d(__webpack_exports__, "getPlugins", function() { return /* reexport */ getPlugins; });

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__("GRId");

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");

// EXTERNAL MODULE: ./node_modules/memize/index.js
var memize = __webpack_require__("4eJC");
var memize_default = /*#__PURE__*/__webpack_require__.n(memize);

// EXTERNAL MODULE: external ["wp","hooks"]
var external_wp_hooks_ = __webpack_require__("g56x");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("wx14");

// EXTERNAL MODULE: external ["wp","compose"]
var external_wp_compose_ = __webpack_require__("K9lf");
>>>>>>> master

// CONCATENATED MODULE: ./node_modules/@wordpress/plugins/build-module/components/plugin-context/index.js



/**
 * WordPress dependencies
 */


<<<<<<< HEAD

var _createContext = Object(external_this_wp_element_["createContext"])({
  name: null,
  icon: null
}),
    Consumer = _createContext.Consumer,
    Provider = _createContext.Provider;

=======
const {
  Consumer,
  Provider
} = Object(external_wp_element_["createContext"])({
  name: null,
  icon: null
});
>>>>>>> master

/**
 * A Higher Order Component used to inject Plugin context to the
 * wrapped component.
 *
 * @param {Function} mapContextToProps Function called on every context change,
 *                                     expected to return object of props to
 *                                     merge with the component's own props.
 *
 * @return {WPComponent} Enhanced component with injected context as props.
 */

<<<<<<< HEAD
var plugin_context_withPluginContext = function withPluginContext(mapContextToProps) {
  return Object(external_this_wp_compose_["createHigherOrderComponent"])(function (OriginalComponent) {
    return function (props) {
      return Object(external_this_wp_element_["createElement"])(Consumer, null, function (context) {
        return Object(external_this_wp_element_["createElement"])(OriginalComponent, Object(esm_extends["a" /* default */])({}, props, mapContextToProps(context, props)));
      });
    };
  }, 'withPluginContext');
};

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(34);

// CONCATENATED MODULE: ./node_modules/@wordpress/plugins/build-module/api/index.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

=======
const withPluginContext = mapContextToProps => Object(external_wp_compose_["createHigherOrderComponent"])(OriginalComponent => {
  return props => Object(external_wp_element_["createElement"])(Consumer, null, context => Object(external_wp_element_["createElement"])(OriginalComponent, Object(esm_extends["a" /* default */])({}, props, mapContextToProps(context, props))));
}, 'withPluginContext');

// EXTERNAL MODULE: external ["wp","primitives"]
var external_wp_primitives_ = __webpack_require__("Tqx9");

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/plugins.js


/**
 * WordPress dependencies
 */

const plugins = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M10.5 4v4h3V4H15v4h1.5a1 1 0 011 1v4l-3 4v2a1 1 0 01-1 1h-3a1 1 0 01-1-1v-2l-3-4V9a1 1 0 011-1H9V4h1.5zm.5 12.5v2h2v-2l3-4v-3H8v3l3 4z"
}));
/* harmony default export */ var library_plugins = (plugins);

// CONCATENATED MODULE: ./node_modules/@wordpress/plugins/build-module/api/index.js
>>>>>>> master
/* eslint no-console: [ 'error', { allow: [ 'error' ] } ] */

/**
 * WordPress dependencies
 */

<<<<<<< HEAD
=======

>>>>>>> master
/**
 * External dependencies
 */


/**
 * Defined behavior of a plugin type.
 *
 * @typedef {Object} WPPlugin
 *
<<<<<<< HEAD
 * @property {string}                    name   A string identifying the plugin. Must be
 *                                              unique across all registered plugins.
 *                                              unique across all registered plugins.
 * @property {string|WPElement|Function} icon   An icon to be shown in the UI. It can
 *                                              be a slug of the Dashicon, or an element
 *                                              (or function returning an element) if you
 *                                              choose to render your own SVG.
 * @property {Function}                  render A component containing the UI elements
 *                                              to be rendered.
=======
 * @property {string}                    name    A string identifying the plugin. Must be
 *                                               unique across all registered plugins.
 * @property {string|WPElement|Function} [icon]  An icon to be shown in the UI. It can
 *                                               be a slug of the Dashicon, or an element
 *                                               (or function returning an element) if you
 *                                               choose to render your own SVG.
 * @property {Function}                  render  A component containing the UI elements
 *                                               to be rendered.
 * @property {string}                    [scope] The optional scope to be used when rendering inside
 *                                               a plugin area. No scope by default.
>>>>>>> master
 */

/**
 * Plugin definitions keyed by plugin name.
 *
 * @type {Object.<string,WPPlugin>}
 */

<<<<<<< HEAD
var plugins = {};
=======
const api_plugins = {};
>>>>>>> master
/**
 * Registers a plugin to the editor.
 *
 * @param {string}   name     A string identifying the plugin.Must be
 *                            unique across all registered plugins.
 * @param {WPPlugin} settings The settings for this plugin.
 *
<<<<<<< HEAD
 * @example <caption>ES5</caption>
=======
 * @example
>>>>>>> master
 * ```js
 * // Using ES5 syntax
 * var el = wp.element.createElement;
 * var Fragment = wp.element.Fragment;
 * var PluginSidebar = wp.editPost.PluginSidebar;
 * var PluginSidebarMoreMenuItem = wp.editPost.PluginSidebarMoreMenuItem;
 * var registerPlugin = wp.plugins.registerPlugin;
 * var moreIcon = wp.element.createElement( 'svg' ); //... svg element.
 *
 * function Component() {
 * 	return el(
 * 		Fragment,
 * 		{},
 * 		el(
 * 			PluginSidebarMoreMenuItem,
 * 			{
 * 				target: 'sidebar-name',
 * 			},
 * 			'My Sidebar'
 * 		),
 * 		el(
 * 			PluginSidebar,
 * 			{
 * 				name: 'sidebar-name',
 * 				title: 'My Sidebar',
 * 			},
 * 			'Content of the sidebar'
 * 		)
 * 	);
 * }
 * registerPlugin( 'plugin-name', {
 * 	icon: moreIcon,
 * 	render: Component,
<<<<<<< HEAD
 * } );
 * ```
 *
 * @example <caption>ESNext</caption>
=======
 * 	scope: 'my-page',
 * } );
 * ```
 *
 * @example
>>>>>>> master
 * ```js
 * // Using ESNext syntax
 * import { PluginSidebar, PluginSidebarMoreMenuItem } from '@wordpress/edit-post';
 * import { registerPlugin } from '@wordpress/plugins';
 * import { more } from '@wordpress/icons';
 *
 * const Component = () => (
 * 	<>
 * 		<PluginSidebarMoreMenuItem
 * 			target="sidebar-name"
 * 		>
 * 			My Sidebar
 * 		</PluginSidebarMoreMenuItem>
 * 		<PluginSidebar
 * 			name="sidebar-name"
 * 			title="My Sidebar"
 * 		>
 * 			Content of the sidebar
 * 		</PluginSidebar>
 * 	</>
 * );
 *
 * registerPlugin( 'plugin-name', {
 * 	icon: more,
 * 	render: Component,
<<<<<<< HEAD
=======
 * 	scope: 'my-page',
>>>>>>> master
 * } );
 * ```
 *
 * @return {WPPlugin} The final plugin settings object.
 */

function registerPlugin(name, settings) {
<<<<<<< HEAD
  if (Object(esm_typeof["a" /* default */])(settings) !== 'object') {
=======
  if (typeof settings !== 'object') {
>>>>>>> master
    console.error('No settings object provided!');
    return null;
  }

  if (typeof name !== 'string') {
<<<<<<< HEAD
    console.error('Plugin names must be strings.');
=======
    console.error('Plugin name must be string.');
>>>>>>> master
    return null;
  }

  if (!/^[a-z][a-z0-9-]*$/.test(name)) {
<<<<<<< HEAD
    console.error('Plugin names must include only lowercase alphanumeric characters or dashes, and start with a letter. Example: "my-plugin".');
    return null;
  }

  if (plugins[name]) {
    console.error("Plugin \"".concat(name, "\" is already registered."));
  }

  settings = Object(external_this_wp_hooks_["applyFilters"])('plugins.registerPlugin', settings, name);

  if (!Object(external_this_lodash_["isFunction"])(settings.render)) {
=======
    console.error('Plugin name must include only lowercase alphanumeric characters or dashes, and start with a letter. Example: "my-plugin".');
    return null;
  }

  if (api_plugins[name]) {
    console.error(`Plugin "${name}" is already registered.`);
  }

  settings = Object(external_wp_hooks_["applyFilters"])('plugins.registerPlugin', settings, name);
  const {
    render,
    scope
  } = settings;

  if (!Object(external_lodash_["isFunction"])(render)) {
>>>>>>> master
    console.error('The "render" property must be specified and must be a valid function.');
    return null;
  }

<<<<<<< HEAD
  plugins[name] = _objectSpread({
    name: name,
    icon: 'admin-plugins'
  }, settings);
  Object(external_this_wp_hooks_["doAction"])('plugins.pluginRegistered', settings, name);
=======
  if (scope) {
    if (typeof scope !== 'string') {
      console.error('Plugin scope must be string.');
      return null;
    }

    if (!/^[a-z][a-z0-9-]*$/.test(scope)) {
      console.error('Plugin scope must include only lowercase alphanumeric characters or dashes, and start with a letter. Example: "my-page".');
      return null;
    }
  }

  api_plugins[name] = {
    name,
    icon: library_plugins,
    ...settings
  };
  Object(external_wp_hooks_["doAction"])('plugins.pluginRegistered', settings, name);
>>>>>>> master
  return settings;
}
/**
 * Unregisters a plugin by name.
 *
 * @param {string} name Plugin name.
 *
<<<<<<< HEAD
 * @example <caption>ES5</caption>
=======
 * @example
>>>>>>> master
 * ```js
 * // Using ES5 syntax
 * var unregisterPlugin = wp.plugins.unregisterPlugin;
 *
 * unregisterPlugin( 'plugin-name' );
 * ```
 *
<<<<<<< HEAD
 * @example <caption>ESNext</caption>
 * ```js
 * // Using ESNext syntax
 * const { unregisterPlugin } = wp.plugins;
=======
 * @example
 * ```js
 * // Using ESNext syntax
 * import { unregisterPlugin } from '@wordpress/plugins';
>>>>>>> master
 *
 * unregisterPlugin( 'plugin-name' );
 * ```
 *
 * @return {?WPPlugin} The previous plugin settings object, if it has been
 *                     successfully unregistered; otherwise `undefined`.
 */

function unregisterPlugin(name) {
<<<<<<< HEAD
  if (!plugins[name]) {
=======
  if (!api_plugins[name]) {
>>>>>>> master
    console.error('Plugin "' + name + '" is not registered.');
    return;
  }

<<<<<<< HEAD
  var oldPlugin = plugins[name];
  delete plugins[name];
  Object(external_this_wp_hooks_["doAction"])('plugins.pluginUnregistered', oldPlugin, name);
=======
  const oldPlugin = api_plugins[name];
  delete api_plugins[name];
  Object(external_wp_hooks_["doAction"])('plugins.pluginUnregistered', oldPlugin, name);
>>>>>>> master
  return oldPlugin;
}
/**
 * Returns a registered plugin settings.
 *
 * @param {string} name Plugin name.
 *
 * @return {?WPPlugin} Plugin setting.
 */

function getPlugin(name) {
<<<<<<< HEAD
  return plugins[name];
}
/**
 * Returns all registered plugins.
 *
 * @return {WPPlugin[]} Plugin settings.
 */

function getPlugins() {
  return Object.values(plugins);
=======
  return api_plugins[name];
}
/**
 * Returns all registered plugins without a scope or for a given scope.
 *
 * @param {string} [scope] The scope to be used when rendering inside
 *                         a plugin area. No scope by default.
 *
 * @return {WPPlugin[]} The list of plugins without a scope or for a given scope.
 */

function getPlugins(scope) {
  return Object.values(api_plugins).filter(plugin => plugin.scope === scope);
>>>>>>> master
}

// CONCATENATED MODULE: ./node_modules/@wordpress/plugins/build-module/components/plugin-area/index.js


<<<<<<< HEAD






=======
>>>>>>> master
/**
 * External dependencies
 */

<<<<<<< HEAD
=======

>>>>>>> master
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



/**
 * A component that renders all plugin fills in a hidden div.
 *
<<<<<<< HEAD
 * @example <caption>ES5</caption>
=======
 * @example
>>>>>>> master
 * ```js
 * // Using ES5 syntax
 * var el = wp.element.createElement;
 * var PluginArea = wp.plugins.PluginArea;
 *
 * function Layout() {
 * 	return el(
 * 		'div',
<<<<<<< HEAD
 * 		{},
=======
 * 		{ scope: 'my-page' },
>>>>>>> master
 * 		'Content of the page',
 * 		PluginArea
 * 	);
 * }
 * ```
 *
<<<<<<< HEAD
 * @example <caption>ESNext</caption>
 * ```js
 * // Using ESNext syntax
 * const { PluginArea } = wp.plugins;
=======
 * @example
 * ```js
 * // Using ESNext syntax
 * import { PluginArea } from '@wordpress/plugins';
>>>>>>> master
 *
 * const Layout = () => (
 * 	<div>
 * 		Content of the page
<<<<<<< HEAD
 * 		<PluginArea />
=======
 * 		<PluginArea scope="my-page" />
>>>>>>> master
 * 	</div>
 * );
 * ```
 *
 * @return {WPComponent} The component to be rendered.
 */

<<<<<<< HEAD
var plugin_area_PluginArea =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(PluginArea, _Component);

  function PluginArea() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, PluginArea);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(PluginArea).apply(this, arguments));
    _this.setPlugins = _this.setPlugins.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.state = _this.getCurrentPluginsState();
    return _this;
  }

  Object(createClass["a" /* default */])(PluginArea, [{
    key: "getCurrentPluginsState",
    value: function getCurrentPluginsState() {
      return {
        plugins: Object(external_this_lodash_["map"])(getPlugins(), function (_ref) {
          var icon = _ref.icon,
              name = _ref.name,
              render = _ref.render;
          return {
            Plugin: render,
            context: {
              name: name,
              icon: icon
            }
          };
        })
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      Object(external_this_wp_hooks_["addAction"])('plugins.pluginRegistered', 'core/plugins/plugin-area/plugins-registered', this.setPlugins);
      Object(external_this_wp_hooks_["addAction"])('plugins.pluginUnregistered', 'core/plugins/plugin-area/plugins-unregistered', this.setPlugins);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      Object(external_this_wp_hooks_["removeAction"])('plugins.pluginRegistered', 'core/plugins/plugin-area/plugins-registered');
      Object(external_this_wp_hooks_["removeAction"])('plugins.pluginUnregistered', 'core/plugins/plugin-area/plugins-unregistered');
    }
  }, {
    key: "setPlugins",
    value: function setPlugins() {
      this.setState(this.getCurrentPluginsState);
    }
  }, {
    key: "render",
    value: function render() {
      return Object(external_this_wp_element_["createElement"])("div", {
        style: {
          display: 'none'
        }
      }, Object(external_this_lodash_["map"])(this.state.plugins, function (_ref2) {
        var context = _ref2.context,
            Plugin = _ref2.Plugin;
        return Object(external_this_wp_element_["createElement"])(Provider, {
          key: context.name,
          value: context
        }, Object(external_this_wp_element_["createElement"])(Plugin, null));
      }));
    }
  }]);

  return PluginArea;
}(external_this_wp_element_["Component"]);
=======
class plugin_area_PluginArea extends external_wp_element_["Component"] {
  constructor() {
    super(...arguments);
    this.setPlugins = this.setPlugins.bind(this);
    this.memoizedContext = memize_default()((name, icon) => {
      return {
        name,
        icon
      };
    });
    this.state = this.getCurrentPluginsState();
  }

  getCurrentPluginsState() {
    return {
      plugins: Object(external_lodash_["map"])(getPlugins(this.props.scope), ({
        icon,
        name,
        render
      }) => {
        return {
          Plugin: render,
          context: this.memoizedContext(name, icon)
        };
      })
    };
  }

  componentDidMount() {
    Object(external_wp_hooks_["addAction"])('plugins.pluginRegistered', 'core/plugins/plugin-area/plugins-registered', this.setPlugins);
    Object(external_wp_hooks_["addAction"])('plugins.pluginUnregistered', 'core/plugins/plugin-area/plugins-unregistered', this.setPlugins);
  }

  componentWillUnmount() {
    Object(external_wp_hooks_["removeAction"])('plugins.pluginRegistered', 'core/plugins/plugin-area/plugins-registered');
    Object(external_wp_hooks_["removeAction"])('plugins.pluginUnregistered', 'core/plugins/plugin-area/plugins-unregistered');
  }

  setPlugins() {
    this.setState(this.getCurrentPluginsState);
  }

  render() {
    return Object(external_wp_element_["createElement"])("div", {
      style: {
        display: 'none'
      }
    }, Object(external_lodash_["map"])(this.state.plugins, ({
      context,
      Plugin
    }) => Object(external_wp_element_["createElement"])(Provider, {
      key: context.name,
      value: context
    }, Object(external_wp_element_["createElement"])(Plugin, null))));
  }

}
>>>>>>> master

/* harmony default export */ var plugin_area = (plugin_area_PluginArea);

// CONCATENATED MODULE: ./node_modules/@wordpress/plugins/build-module/components/index.js



// CONCATENATED MODULE: ./node_modules/@wordpress/plugins/build-module/index.js
<<<<<<< HEAD
/* concated harmony reexport PluginArea */__webpack_require__.d(__webpack_exports__, "PluginArea", function() { return plugin_area; });
/* concated harmony reexport withPluginContext */__webpack_require__.d(__webpack_exports__, "withPluginContext", function() { return plugin_context_withPluginContext; });
/* concated harmony reexport registerPlugin */__webpack_require__.d(__webpack_exports__, "registerPlugin", function() { return registerPlugin; });
/* concated harmony reexport unregisterPlugin */__webpack_require__.d(__webpack_exports__, "unregisterPlugin", function() { return unregisterPlugin; });
/* concated harmony reexport getPlugin */__webpack_require__.d(__webpack_exports__, "getPlugin", function() { return getPlugin; });
/* concated harmony reexport getPlugins */__webpack_require__.d(__webpack_exports__, "getPlugins", function() { return getPlugins; });
=======
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

/***/ 8:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["compose"]; }());
=======
/***/ "g56x":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["hooks"]; }());

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
}
>>>>>>> master

/***/ })

/******/ });