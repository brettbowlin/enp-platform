this["wp"] = this["wp"] || {}; this["wp"]["coreData"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 428);
=======
/******/ 	return __webpack_require__(__webpack_require__.s = "dsJ0");
>>>>>>> master
/******/ })
/************************************************************************/
/******/ ({

<<<<<<< HEAD
/***/ 0:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ 10:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ 18:
=======
/***/ "1ZqX":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["data"]; }());

/***/ }),

/***/ "51Zz":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["dataControls"]; }());

/***/ }),

/***/ "7Cbv":
>>>>>>> master
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

<<<<<<< HEAD
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

/***/ 30:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["url"]; }());

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

/***/ 42:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["apiFetch"]; }());

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var build_module_actions_namespaceObject = {};
__webpack_require__.r(build_module_actions_namespaceObject);
__webpack_require__.d(build_module_actions_namespaceObject, "receiveUserQuery", function() { return receiveUserQuery; });
__webpack_require__.d(build_module_actions_namespaceObject, "receiveCurrentUser", function() { return receiveCurrentUser; });
__webpack_require__.d(build_module_actions_namespaceObject, "addEntities", function() { return addEntities; });
__webpack_require__.d(build_module_actions_namespaceObject, "receiveEntityRecords", function() { return receiveEntityRecords; });
__webpack_require__.d(build_module_actions_namespaceObject, "receiveThemeSupports", function() { return receiveThemeSupports; });
__webpack_require__.d(build_module_actions_namespaceObject, "receiveEmbedPreview", function() { return receiveEmbedPreview; });
__webpack_require__.d(build_module_actions_namespaceObject, "editEntityRecord", function() { return actions_editEntityRecord; });
__webpack_require__.d(build_module_actions_namespaceObject, "undo", function() { return undo; });
__webpack_require__.d(build_module_actions_namespaceObject, "redo", function() { return redo; });
__webpack_require__.d(build_module_actions_namespaceObject, "__unstableCreateUndoLevel", function() { return __unstableCreateUndoLevel; });
__webpack_require__.d(build_module_actions_namespaceObject, "saveEntityRecord", function() { return saveEntityRecord; });
__webpack_require__.d(build_module_actions_namespaceObject, "saveEditedEntityRecord", function() { return saveEditedEntityRecord; });
__webpack_require__.d(build_module_actions_namespaceObject, "receiveUploadPermissions", function() { return receiveUploadPermissions; });
__webpack_require__.d(build_module_actions_namespaceObject, "receiveUserPermission", function() { return receiveUserPermission; });
__webpack_require__.d(build_module_actions_namespaceObject, "receiveAutosaves", function() { return receiveAutosaves; });
var build_module_selectors_namespaceObject = {};
__webpack_require__.r(build_module_selectors_namespaceObject);
__webpack_require__.d(build_module_selectors_namespaceObject, "isRequestingEmbedPreview", function() { return isRequestingEmbedPreview; });
__webpack_require__.d(build_module_selectors_namespaceObject, "getAuthors", function() { return getAuthors; });
__webpack_require__.d(build_module_selectors_namespaceObject, "getCurrentUser", function() { return getCurrentUser; });
__webpack_require__.d(build_module_selectors_namespaceObject, "getUserQueryResults", function() { return getUserQueryResults; });
__webpack_require__.d(build_module_selectors_namespaceObject, "getEntitiesByKind", function() { return getEntitiesByKind; });
__webpack_require__.d(build_module_selectors_namespaceObject, "getEntity", function() { return selectors_getEntity; });
__webpack_require__.d(build_module_selectors_namespaceObject, "getEntityRecord", function() { return getEntityRecord; });
__webpack_require__.d(build_module_selectors_namespaceObject, "__experimentalGetEntityRecordNoResolver", function() { return __experimentalGetEntityRecordNoResolver; });
__webpack_require__.d(build_module_selectors_namespaceObject, "getRawEntityRecord", function() { return getRawEntityRecord; });
__webpack_require__.d(build_module_selectors_namespaceObject, "getEntityRecords", function() { return getEntityRecords; });
__webpack_require__.d(build_module_selectors_namespaceObject, "getEntityRecordChangesByRecord", function() { return getEntityRecordChangesByRecord; });
__webpack_require__.d(build_module_selectors_namespaceObject, "getEntityRecordEdits", function() { return getEntityRecordEdits; });
__webpack_require__.d(build_module_selectors_namespaceObject, "getEntityRecordNonTransientEdits", function() { return getEntityRecordNonTransientEdits; });
__webpack_require__.d(build_module_selectors_namespaceObject, "hasEditsForEntityRecord", function() { return hasEditsForEntityRecord; });
__webpack_require__.d(build_module_selectors_namespaceObject, "getEditedEntityRecord", function() { return getEditedEntityRecord; });
__webpack_require__.d(build_module_selectors_namespaceObject, "isAutosavingEntityRecord", function() { return isAutosavingEntityRecord; });
__webpack_require__.d(build_module_selectors_namespaceObject, "isSavingEntityRecord", function() { return isSavingEntityRecord; });
__webpack_require__.d(build_module_selectors_namespaceObject, "getLastEntitySaveError", function() { return getLastEntitySaveError; });
__webpack_require__.d(build_module_selectors_namespaceObject, "getUndoEdit", function() { return getUndoEdit; });
__webpack_require__.d(build_module_selectors_namespaceObject, "getRedoEdit", function() { return getRedoEdit; });
__webpack_require__.d(build_module_selectors_namespaceObject, "hasUndo", function() { return hasUndo; });
__webpack_require__.d(build_module_selectors_namespaceObject, "hasRedo", function() { return hasRedo; });
__webpack_require__.d(build_module_selectors_namespaceObject, "getThemeSupports", function() { return getThemeSupports; });
__webpack_require__.d(build_module_selectors_namespaceObject, "getEmbedPreview", function() { return getEmbedPreview; });
__webpack_require__.d(build_module_selectors_namespaceObject, "isPreviewEmbedFallback", function() { return isPreviewEmbedFallback; });
__webpack_require__.d(build_module_selectors_namespaceObject, "hasUploadPermissions", function() { return hasUploadPermissions; });
__webpack_require__.d(build_module_selectors_namespaceObject, "canUser", function() { return canUser; });
__webpack_require__.d(build_module_selectors_namespaceObject, "getAutosaves", function() { return getAutosaves; });
__webpack_require__.d(build_module_selectors_namespaceObject, "getAutosave", function() { return getAutosave; });
__webpack_require__.d(build_module_selectors_namespaceObject, "hasFetchedAutosaves", function() { return hasFetchedAutosaves; });
__webpack_require__.d(build_module_selectors_namespaceObject, "getReferenceByDistinctEdits", function() { return getReferenceByDistinctEdits; });
var resolvers_namespaceObject = {};
__webpack_require__.r(resolvers_namespaceObject);
__webpack_require__.d(resolvers_namespaceObject, "getAuthors", function() { return resolvers_getAuthors; });
__webpack_require__.d(resolvers_namespaceObject, "getCurrentUser", function() { return resolvers_getCurrentUser; });
__webpack_require__.d(resolvers_namespaceObject, "getEntityRecord", function() { return resolvers_getEntityRecord; });
__webpack_require__.d(resolvers_namespaceObject, "getEntityRecords", function() { return resolvers_getEntityRecords; });
__webpack_require__.d(resolvers_namespaceObject, "getThemeSupports", function() { return resolvers_getThemeSupports; });
__webpack_require__.d(resolvers_namespaceObject, "getEmbedPreview", function() { return resolvers_getEmbedPreview; });
__webpack_require__.d(resolvers_namespaceObject, "hasUploadPermissions", function() { return resolvers_hasUploadPermissions; });
__webpack_require__.d(resolvers_namespaceObject, "canUser", function() { return resolvers_canUser; });
__webpack_require__.d(resolvers_namespaceObject, "getAutosaves", function() { return resolvers_getAutosaves; });
__webpack_require__.d(resolvers_namespaceObject, "getAutosave", function() { return resolvers_getAutosave; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(5);

// EXTERNAL MODULE: external {"this":["wp","data"]}
var external_this_wp_data_ = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(18);

// EXTERNAL MODULE: external {"this":"lodash"}
var external_this_lodash_ = __webpack_require__(2);

// EXTERNAL MODULE: external {"this":["wp","isShallowEqual"]}
var external_this_wp_isShallowEqual_ = __webpack_require__(51);
var external_this_wp_isShallowEqual_default = /*#__PURE__*/__webpack_require__.n(external_this_wp_isShallowEqual_);

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/utils/conservative-map-item.js
/**
 * External dependencies
 */

/**
 * Given the current and next item entity, returns the minimally "modified"
 * result of the next item, preferring value references from the original item
 * if equal. If all values match, the original item is returned.
 *
 * @param {Object} item     Original item.
 * @param {Object} nextItem Next item.
 *
 * @return {Object} Minimally modified merged item.
 */

function conservativeMapItem(item, nextItem) {
  // Return next item in its entirety if there is no original item.
  if (!item) {
    return nextItem;
  }

  var hasChanges = false;
  var result = {};

  for (var key in nextItem) {
    if (Object(external_this_lodash_["isEqual"])(item[key], nextItem[key])) {
      result[key] = item[key];
    } else {
      hasChanges = true;
      result[key] = nextItem[key];
    }
  }

  if (!hasChanges) {
    return item;
  }

  return result;
}

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/utils/if-matching-action.js
/**
 * A higher-order reducer creator which invokes the original reducer only if
 * the dispatching action matches the given predicate, **OR** if state is
 * initializing (undefined).
 *
 * @param {Function} isMatch Function predicate for allowing reducer call.
 *
 * @return {Function} Higher-order reducer.
 */
var ifMatchingAction = function ifMatchingAction(isMatch) {
  return function (reducer) {
    return function (state, action) {
      if (state === undefined || isMatch(action)) {
        return reducer(state, action);
      }

      return state;
    };
  };
};

/* harmony default export */ var if_matching_action = (ifMatchingAction);

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/utils/on-sub-key.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Higher-order reducer creator which creates a combined reducer object, keyed
 * by a property on the action object.
 *
 * @param {string} actionProperty Action property by which to key object.
 *
 * @return {Function} Higher-order reducer.
 */
var on_sub_key_onSubKey = function onSubKey(actionProperty) {
  return function (reducer) {
    return function () {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var action = arguments.length > 1 ? arguments[1] : undefined;
      // Retrieve subkey from action. Do not track if undefined; useful for cases
      // where reducer is scoped by action shape.
      var key = action[actionProperty];

      if (key === undefined) {
        return state;
      } // Avoid updating state if unchanged. Note that this also accounts for a
      // reducer which returns undefined on a key which is not yet tracked.


      var nextKeyState = reducer(state[key], action);

      if (nextKeyState === state[key]) {
        return state;
      }

      return _objectSpread({}, state, Object(defineProperty["a" /* default */])({}, key, nextKeyState));
    };
  };
};
/* harmony default export */ var on_sub_key = (on_sub_key_onSubKey);

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/utils/replace-action.js
/**
 * Higher-order reducer creator which substitutes the action object before
 * passing to the original reducer.
 *
 * @param {Function} replacer Function mapping original action to replacement.
 *
 * @return {Function} Higher-order reducer.
 */
var replaceAction = function replaceAction(replacer) {
  return function (reducer) {
    return function (state, action) {
      return reducer(state, replacer(action));
    };
  };
};

/* harmony default export */ var replace_action = (replaceAction);

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/utils/with-weak-map-cache.js
/**
 * External dependencies
 */

/**
 * Given a function, returns an enhanced function which caches the result and
 * tracks in WeakMap. The result is only cached if the original function is
 * passed a valid object-like argument (requirement for WeakMap key).
 *
 * @param {Function} fn Original function.
 *
 * @return {Function} Enhanced caching function.
 */

function withWeakMapCache(fn) {
  var cache = new WeakMap();
  return function (key) {
    var value;

    if (cache.has(key)) {
      value = cache.get(key);
    } else {
      value = fn(key); // Can reach here if key is not valid for WeakMap, since `has`
      // will return false for invalid key. Since `set` will throw,
      // ensure that key is valid before setting into cache.

      if (Object(external_this_lodash_["isObjectLike"])(key)) {
        cache.set(key, value);
      }
    }

    return value;
  };
}

/* harmony default export */ var with_weak_map_cache = (withWeakMapCache);

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/utils/index.js






// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/queried-data/actions.js


function actions_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function actions_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { actions_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { actions_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */

/**
 * Returns an action object used in signalling that items have been received.
 *
 * @param {Array} items Items received.
 *
 * @return {Object} Action object.
 */

function receiveItems(items) {
  return {
    type: 'RECEIVE_ITEMS',
    items: Object(external_this_lodash_["castArray"])(items)
  };
}
/**
 * Returns an action object used in signalling that queried data has been
 * received.
 *
 * @param {Array}   items Queried items received.
 * @param {?Object} query Optional query object.
 *
 * @return {Object} Action object.
 */

function receiveQueriedItems(items) {
  var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return actions_objectSpread({}, receiveItems(items), {
    query: query
  });
}

// EXTERNAL MODULE: ./node_modules/rememo/es/rememo.js
var rememo = __webpack_require__(40);

// EXTERNAL MODULE: ./node_modules/equivalent-key-map/equivalent-key-map.js
var equivalent_key_map = __webpack_require__(64);
var equivalent_key_map_default = /*#__PURE__*/__webpack_require__.n(equivalent_key_map);

// EXTERNAL MODULE: external {"this":["wp","url"]}
var external_this_wp_url_ = __webpack_require__(30);

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/queried-data/get-query-parts.js


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


/**
 * An object of properties describing a specific query.
 *
 * @typedef {Object} WPQueriedDataQueryParts
 *
 * @property {number} page      The query page (1-based index, default 1).
 * @property {number} perPage   Items per page for query (default 10).
 * @property {string} stableKey An encoded stable string of all non-pagination
 *                              query parameters.
 */

/**
 * Given a query object, returns an object of parts, including pagination
 * details (`page` and `perPage`, or default values). All other properties are
 * encoded into a stable (idempotent) `stableKey` value.
 *
 * @param {Object} query Optional query object.
 *
 * @return {WPQueriedDataQueryParts} Query parts.
 */

function getQueryParts(query) {
  /**
   * @type {WPQueriedDataQueryParts}
   */
  var parts = {
    stableKey: '',
    page: 1,
    perPage: 10
  }; // Ensure stable key by sorting keys. Also more efficient for iterating.

  var keys = Object.keys(query).sort();

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var value = query[key];

    switch (key) {
      case 'page':
        parts[key] = Number(value);
        break;

      case 'per_page':
        parts.perPage = Number(value);
        break;

      default:
        // While it could be any deterministic string, for simplicity's
        // sake mimic querystring encoding for stable key.
        //
        // TODO: For consistency with PHP implementation, addQueryArgs
        // should accept a key value pair, which may optimize its
        // implementation for our use here, vs. iterating an object
        // with only a single key.
        parts.stableKey += (parts.stableKey ? '&' : '') + Object(external_this_wp_url_["addQueryArgs"])('', Object(defineProperty["a" /* default */])({}, key, value)).slice(1);
    }
  }

  return parts;
}
/* harmony default export */ var get_query_parts = (with_weak_map_cache(getQueryParts));

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/queried-data/selectors.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


/**
 * Cache of state keys to EquivalentKeyMap where the inner map tracks queries
 * to their resulting items set. WeakMap allows garbage collection on expired
 * state references.
 *
 * @type {WeakMap<Object,EquivalentKeyMap>}
 */

var queriedItemsCacheByState = new WeakMap();
/**
 * Returns items for a given query, or null if the items are not known.
 *
 * @param {Object}  state State object.
 * @param {?Object} query Optional query.
 *
 * @return {?Array} Query items.
 */

function getQueriedItemsUncached(state, query) {
  var _getQueryParts = get_query_parts(query),
      stableKey = _getQueryParts.stableKey,
      page = _getQueryParts.page,
      perPage = _getQueryParts.perPage;

  if (!state.queries[stableKey]) {
    return null;
  }

  var itemIds = state.queries[stableKey];

  if (!itemIds) {
    return null;
  }

  var startOffset = perPage === -1 ? 0 : (page - 1) * perPage;
  var endOffset = perPage === -1 ? itemIds.length : Math.min(startOffset + perPage, itemIds.length);
  var items = [];

  for (var i = startOffset; i < endOffset; i++) {
    var itemId = itemIds[i];
    items.push(state.items[itemId]);
  }

  return items;
}
/**
 * Returns items for a given query, or null if the items are not known. Caches
 * result both per state (by reference) and per query (by deep equality).
 * The caching approach is intended to be durable to query objects which are
 * deeply but not referentially equal, since otherwise:
 *
 * `getQueriedItems( state, {} ) !== getQueriedItems( state, {} )`
 *
 * @param {Object}  state State object.
 * @param {?Object} query Optional query.
 *
 * @return {?Array} Query items.
 */


var getQueriedItems = Object(rememo["a" /* default */])(function (state) {
  var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var queriedItemsCache = queriedItemsCacheByState.get(state);

  if (queriedItemsCache) {
    var queriedItems = queriedItemsCache.get(query);

    if (queriedItems !== undefined) {
      return queriedItems;
    }
  } else {
    queriedItemsCache = new equivalent_key_map_default.a();
    queriedItemsCacheByState.set(state, queriedItemsCache);
  }

  var items = getQueriedItemsUncached(state, query);
  queriedItemsCache.set(query, items);
  return items;
});

// EXTERNAL MODULE: external {"this":"regeneratorRuntime"}
var external_this_regeneratorRuntime_ = __webpack_require__(23);
var external_this_regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(external_this_regeneratorRuntime_);

// EXTERNAL MODULE: external {"this":["wp","apiFetch"]}
var external_this_wp_apiFetch_ = __webpack_require__(42);
var external_this_wp_apiFetch_default = /*#__PURE__*/__webpack_require__.n(external_this_wp_apiFetch_);

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/controls.js


/**
 * WordPress dependencies
 */


/**
 * Trigger an API Fetch request.
 *
 * @param {Object} request API Fetch Request Object.
 * @return {Object} control descriptor.
 */

function apiFetch(request) {
  return {
    type: 'API_FETCH',
    request: request
  };
}
/**
 * Calls a selector using the current state.
 *
 * @param {string} selectorName Selector name.
 * @param  {Array} args         Selector arguments.
 *
 * @return {Object} control descriptor.
 */

function controls_select(selectorName) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return {
    type: 'SELECT',
    selectorName: selectorName,
    args: args
  };
}
/**
 * Dispatches a control action for triggering a registry select that has a
 * resolver.
 *
 * @param {string}  selectorName
 * @param {Array}   args  Arguments for the select.
 *
 * @return {Object} control descriptor.
 */

function resolveSelect(selectorName) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  return {
    type: 'RESOLVE_SELECT',
    selectorName: selectorName,
    args: args
  };
}
var controls = {
  API_FETCH: function API_FETCH(_ref) {
    var request = _ref.request;
    return external_this_wp_apiFetch_default()(request);
  },
  SELECT: Object(external_this_wp_data_["createRegistryControl"])(function (registry) {
    return function (_ref2) {
      var _registry$select;

      var selectorName = _ref2.selectorName,
          args = _ref2.args;
      return (_registry$select = registry.select('core'))[selectorName].apply(_registry$select, Object(toConsumableArray["a" /* default */])(args));
    };
  }),
  RESOLVE_SELECT: Object(external_this_wp_data_["createRegistryControl"])(function (registry) {
    return function (_ref3) {
      var _registry$__experimen;

      var selectorName = _ref3.selectorName,
          args = _ref3.args;
      return (_registry$__experimen = registry.__experimentalResolveSelect('core'))[selectorName].apply(_registry$__experimen, Object(toConsumableArray["a" /* default */])(args));
    };
  })
};
/* harmony default export */ var build_module_controls = (controls);

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/actions.js




var _marked =
/*#__PURE__*/
external_this_regeneratorRuntime_default.a.mark(actions_editEntityRecord),
    _marked2 =
/*#__PURE__*/
external_this_regeneratorRuntime_default.a.mark(undo),
    _marked3 =
/*#__PURE__*/
external_this_regeneratorRuntime_default.a.mark(redo),
    _marked4 =
/*#__PURE__*/
external_this_regeneratorRuntime_default.a.mark(saveEntityRecord),
    _marked5 =
/*#__PURE__*/
external_this_regeneratorRuntime_default.a.mark(saveEditedEntityRecord);

function build_module_actions_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function build_module_actions_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { build_module_actions_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { build_module_actions_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */




/**
 * Returns an action object used in signalling that authors have been received.
 *
 * @param {string}       queryID Query ID.
 * @param {Array|Object} users   Users received.
 *
 * @return {Object} Action object.
 */

function receiveUserQuery(queryID, users) {
  return {
    type: 'RECEIVE_USER_QUERY',
    users: Object(external_this_lodash_["castArray"])(users),
    queryID: queryID
  };
}
/**
 * Returns an action used in signalling that the current user has been received.
 *
 * @param {Object} currentUser Current user object.
 *
 * @return {Object} Action object.
 */

function receiveCurrentUser(currentUser) {
  return {
    type: 'RECEIVE_CURRENT_USER',
    currentUser: currentUser
  };
}
/**
 * Returns an action object used in adding new entities.
 *
 * @param {Array} entities  Entities received.
 *
 * @return {Object} Action object.
 */

function addEntities(entities) {
  return {
    type: 'ADD_ENTITIES',
    entities: entities
  };
}
/**
 * Returns an action object used in signalling that entity records have been received.
 *
 * @param {string}       kind            Kind of the received entity.
 * @param {string}       name            Name of the received entity.
 * @param {Array|Object} records         Records received.
 * @param {?Object}      query           Query Object.
 * @param {?boolean}     invalidateCache Should invalidate query caches
 *
 * @return {Object} Action object.
 */

function receiveEntityRecords(kind, name, records, query) {
  var invalidateCache = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // Auto drafts should not have titles, but some plugins rely on them so we can't filter this
  // on the server.
  if (kind === 'postType') {
    records = Object(external_this_lodash_["castArray"])(records).map(function (record) {
      return record.status === 'auto-draft' ? build_module_actions_objectSpread({}, record, {
        title: ''
      }) : record;
    });
  }

  var action;

  if (query) {
    action = receiveQueriedItems(records, query);
  } else {
    action = receiveItems(records);
  }

  return build_module_actions_objectSpread({}, action, {
    kind: kind,
    name: name,
    invalidateCache: invalidateCache
  });
}
/**
 * Returns an action object used in signalling that the index has been received.
 *
 * @param {Object} themeSupports Theme support for the current theme.
 *
 * @return {Object} Action object.
 */

function receiveThemeSupports(themeSupports) {
  return {
    type: 'RECEIVE_THEME_SUPPORTS',
    themeSupports: themeSupports
  };
}
/**
 * Returns an action object used in signalling that the preview data for
 * a given URl has been received.
 *
 * @param {string}  url     URL to preview the embed for.
 * @param {*}       preview Preview data.
 *
 * @return {Object} Action object.
 */

function receiveEmbedPreview(url, preview) {
  return {
    type: 'RECEIVE_EMBED_PREVIEW',
    url: url,
    preview: preview
  };
}
/**
 * Returns an action object that triggers an
 * edit to an entity record.
 *
 * @param {string} kind     Kind of the edited entity record.
 * @param {string} name     Name of the edited entity record.
 * @param {number} recordId Record ID of the edited entity record.
 * @param {Object} edits    The edits.
 * @param {Object} options  Options for the edit.
 * @param {boolean} options.undoIgnore Whether to ignore the edit in undo history or not.
 *
 * @return {Object} Action object.
 */

function actions_editEntityRecord(kind, name, recordId, edits) {
  var options,
      entity,
      _entity$transientEdit,
      transientEdits,
      _entity$mergedEdits,
      mergedEdits,
      record,
      editedRecord,
      edit,
      _args = arguments;

  return external_this_regeneratorRuntime_default.a.wrap(function editEntityRecord$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          options = _args.length > 4 && _args[4] !== undefined ? _args[4] : {};
          _context.next = 3;
          return controls_select('getEntity', kind, name);

        case 3:
          entity = _context.sent;

          if (entity) {
            _context.next = 6;
            break;
          }

          throw new Error("The entity being edited (".concat(kind, ", ").concat(name, ") does not have a loaded config."));

        case 6:
          _entity$transientEdit = entity.transientEdits, transientEdits = _entity$transientEdit === void 0 ? {} : _entity$transientEdit, _entity$mergedEdits = entity.mergedEdits, mergedEdits = _entity$mergedEdits === void 0 ? {} : _entity$mergedEdits;
          _context.next = 9;
          return controls_select('getRawEntityRecord', kind, name, recordId);

        case 9:
          record = _context.sent;
          _context.next = 12;
          return controls_select('getEditedEntityRecord', kind, name, recordId);

        case 12:
          editedRecord = _context.sent;
          edit = {
            kind: kind,
            name: name,
            recordId: recordId,
            // Clear edits when they are equal to their persisted counterparts
            // so that the property is not considered dirty.
            edits: Object.keys(edits).reduce(function (acc, key) {
              var recordValue = record[key];
              var editedRecordValue = editedRecord[key];
              var value = mergedEdits[key] ? build_module_actions_objectSpread({}, editedRecordValue, {}, edits[key]) : edits[key];
              acc[key] = Object(external_this_lodash_["isEqual"])(recordValue, value) ? undefined : value;
              return acc;
            }, {}),
            transientEdits: transientEdits
          };
          return _context.abrupt("return", build_module_actions_objectSpread({
            type: 'EDIT_ENTITY_RECORD'
          }, edit, {
            meta: {
              undo: !options.undoIgnore && build_module_actions_objectSpread({}, edit, {
                // Send the current values for things like the first undo stack entry.
                edits: Object.keys(edits).reduce(function (acc, key) {
                  acc[key] = editedRecord[key];
                  return acc;
                }, {})
              })
            }
          }));

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
/**
 * Action triggered to undo the last edit to
 * an entity record, if any.
 */

function undo() {
  var undoEdit;
  return external_this_regeneratorRuntime_default.a.wrap(function undo$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return controls_select('getUndoEdit');

        case 2:
          undoEdit = _context2.sent;

          if (undoEdit) {
            _context2.next = 5;
            break;
          }

          return _context2.abrupt("return");

        case 5:
          _context2.next = 7;
          return build_module_actions_objectSpread({
            type: 'EDIT_ENTITY_RECORD'
          }, undoEdit, {
            meta: {
              isUndo: true
            }
          });

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}
/**
 * Action triggered to redo the last undoed
 * edit to an entity record, if any.
 */

function redo() {
  var redoEdit;
  return external_this_regeneratorRuntime_default.a.wrap(function redo$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return controls_select('getRedoEdit');

        case 2:
          redoEdit = _context3.sent;

          if (redoEdit) {
            _context3.next = 5;
            break;
          }

          return _context3.abrupt("return");

        case 5:
          _context3.next = 7;
          return build_module_actions_objectSpread({
            type: 'EDIT_ENTITY_RECORD'
          }, redoEdit, {
            meta: {
              isRedo: true
            }
          });

        case 7:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}
/**
 * Forces the creation of a new undo level.
 *
 * @return {Object} Action object.
 */

function __unstableCreateUndoLevel() {
  return {
    type: 'CREATE_UNDO_LEVEL'
  };
}
/**
 * Action triggered to save an entity record.
 *
 * @param {string} kind    Kind of the received entity.
 * @param {string} name    Name of the received entity.
 * @param {Object} record  Record to be saved.
 * @param {Object} options Saving options.
 */

function saveEntityRecord(kind, name, record) {
  var _ref,
      _ref$isAutosave,
      isAutosave,
      entities,
      entity,
      entityIdKey,
      recordId,
      _i,
      _Object$entries,
      _Object$entries$_i,
      key,
      value,
      evaluatedValue,
      updatedRecord,
      error,
      persistedEntity,
      currentEdits,
      path,
      persistedRecord,
      currentUser,
      currentUserId,
      autosavePost,
      data,
      newRecord,
      _data,
      _args4 = arguments;

  return external_this_regeneratorRuntime_default.a.wrap(function saveEntityRecord$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _ref = _args4.length > 3 && _args4[3] !== undefined ? _args4[3] : {
            isAutosave: false
          }, _ref$isAutosave = _ref.isAutosave, isAutosave = _ref$isAutosave === void 0 ? false : _ref$isAutosave;
          _context4.next = 3;
          return getKindEntities(kind);

        case 3:
          entities = _context4.sent;
          entity = Object(external_this_lodash_["find"])(entities, {
            kind: kind,
            name: name
          });

          if (entity) {
            _context4.next = 7;
            break;
          }

          return _context4.abrupt("return");

        case 7:
          entityIdKey = entity.key || DEFAULT_ENTITY_KEY;
          recordId = record[entityIdKey]; // Evaluate optimized edits.
          // (Function edits that should be evaluated on save to avoid expensive computations on every edit.)

          _i = 0, _Object$entries = Object.entries(record);

        case 10:
          if (!(_i < _Object$entries.length)) {
            _context4.next = 24;
            break;
          }

          _Object$entries$_i = Object(slicedToArray["a" /* default */])(_Object$entries[_i], 2), key = _Object$entries$_i[0], value = _Object$entries$_i[1];

          if (!(typeof value === 'function')) {
            _context4.next = 21;
            break;
          }

          _context4.t0 = value;
          _context4.next = 16;
          return controls_select('getEditedEntityRecord', kind, name, recordId);

        case 16:
          _context4.t1 = _context4.sent;
          evaluatedValue = (0, _context4.t0)(_context4.t1);
          _context4.next = 20;
          return actions_editEntityRecord(kind, name, recordId, Object(defineProperty["a" /* default */])({}, key, evaluatedValue), {
            undoIgnore: true
          });

        case 20:
          record[key] = evaluatedValue;

        case 21:
          _i++;
          _context4.next = 10;
          break;

        case 24:
          _context4.next = 26;
          return {
            type: 'SAVE_ENTITY_RECORD_START',
            kind: kind,
            name: name,
            recordId: recordId,
            isAutosave: isAutosave
          };

        case 26:
          _context4.prev = 26;
          path = "".concat(entity.baseURL).concat(recordId ? '/' + recordId : '');
          _context4.next = 30;
          return controls_select('getRawEntityRecord', kind, name, recordId);

        case 30:
          persistedRecord = _context4.sent;

          if (!isAutosave) {
            _context4.next = 55;
            break;
          }

          _context4.next = 34;
          return controls_select('getCurrentUser');

        case 34:
          currentUser = _context4.sent;
          currentUserId = currentUser ? currentUser.id : undefined;
          _context4.next = 38;
          return controls_select('getAutosave', persistedRecord.type, persistedRecord.id, currentUserId);

        case 38:
          autosavePost = _context4.sent;
          // Autosaves need all expected fields to be present.
          // So we fallback to the previous autosave and then
          // to the actual persisted entity if the edits don't
          // have a value.
          data = build_module_actions_objectSpread({}, persistedRecord, {}, autosavePost, {}, record);
          data = Object.keys(data).reduce(function (acc, key) {
            if (['title', 'excerpt', 'content'].includes(key)) {
              // Edits should be the "raw" attribute values.
              acc[key] = Object(external_this_lodash_["get"])(data[key], 'raw', data[key]);
            }

            return acc;
          }, {
            status: data.status === 'auto-draft' ? 'draft' : data.status
          });
          _context4.next = 43;
          return apiFetch({
            path: "".concat(path, "/autosaves"),
            method: 'POST',
            data: data
          });

        case 43:
          updatedRecord = _context4.sent;

          if (!(persistedRecord.id === updatedRecord.id)) {
            _context4.next = 51;
            break;
          }

          newRecord = build_module_actions_objectSpread({}, persistedRecord, {}, data, {}, updatedRecord);
          newRecord = Object.keys(newRecord).reduce(function (acc, key) {
            // These properties are persisted in autosaves.
            if (['title', 'excerpt', 'content'].includes(key)) {
              // Edits should be the "raw" attribute values.
              acc[key] = Object(external_this_lodash_["get"])(newRecord[key], 'raw', newRecord[key]);
            } else if (key === 'status') {
              // Status is only persisted in autosaves when going from
              // "auto-draft" to "draft".
              acc[key] = persistedRecord.status === 'auto-draft' && newRecord.status === 'draft' ? newRecord.status : persistedRecord.status;
            } else {
              // These properties are not persisted in autosaves.
              acc[key] = Object(external_this_lodash_["get"])(persistedRecord[key], 'raw', persistedRecord[key]);
            }

            return acc;
          }, {});
          _context4.next = 49;
          return receiveEntityRecords(kind, name, newRecord, undefined, true);

        case 49:
          _context4.next = 53;
          break;

        case 51:
          _context4.next = 53;
          return receiveAutosaves(persistedRecord.id, updatedRecord);

        case 53:
          _context4.next = 70;
          break;

        case 55:
          // Auto drafts should be converted to drafts on explicit saves and we should not respect their default title,
          // but some plugins break with this behavior so we can't filter it on the server.
          _data = record;

          if (kind === 'postType' && persistedRecord && persistedRecord.status === 'auto-draft') {
            if (!_data.status) {
              _data = build_module_actions_objectSpread({}, _data, {
                status: 'draft'
              });
            }

            if (!_data.title || _data.title === 'Auto Draft') {
              _data = build_module_actions_objectSpread({}, _data, {
                title: ''
              });
            }
          } // Get the full local version of the record before the update,
          // to merge it with the edits and then propagate it to subscribers


          _context4.next = 59;
          return controls_select('__experimentalGetEntityRecordNoResolver', kind, name, recordId);

        case 59:
          persistedEntity = _context4.sent;
          _context4.next = 62;
          return controls_select('getEntityRecordEdits', kind, name, recordId);

        case 62:
          currentEdits = _context4.sent;
          _context4.next = 65;
          return receiveEntityRecords(kind, name, build_module_actions_objectSpread({}, persistedEntity, {}, _data), undefined, true);

        case 65:
          _context4.next = 67;
          return apiFetch({
            path: path,
            method: recordId ? 'PUT' : 'POST',
            data: _data
          });

        case 67:
          updatedRecord = _context4.sent;
          _context4.next = 70;
          return receiveEntityRecords(kind, name, updatedRecord, undefined, true);

        case 70:
          _context4.next = 93;
          break;

        case 72:
          _context4.prev = 72;
          _context4.t2 = _context4["catch"](26);
          error = _context4.t2; // If we got to the point in the try block where we made an optimistic update,
          // we need to roll it back here.

          if (!(persistedEntity && currentEdits)) {
            _context4.next = 93;
            break;
          }

          _context4.next = 78;
          return receiveEntityRecords(kind, name, persistedEntity, undefined, true);

        case 78:
          _context4.t3 = actions_editEntityRecord;
          _context4.t4 = kind;
          _context4.t5 = name;
          _context4.t6 = recordId;
          _context4.t7 = build_module_actions_objectSpread;
          _context4.t8 = {};
          _context4.t9 = currentEdits;
          _context4.t10 = {};
          _context4.next = 88;
          return controls_select('getEntityRecordEdits', kind, name, recordId);

        case 88:
          _context4.t11 = _context4.sent;
          _context4.t12 = (0, _context4.t7)(_context4.t8, _context4.t9, _context4.t10, _context4.t11);
          _context4.t13 = {
            undoIgnore: true
          };
          _context4.next = 93;
          return (0, _context4.t3)(_context4.t4, _context4.t5, _context4.t6, _context4.t12, _context4.t13);

        case 93:
          _context4.next = 95;
          return {
            type: 'SAVE_ENTITY_RECORD_FINISH',
            kind: kind,
            name: name,
            recordId: recordId,
            error: error,
            isAutosave: isAutosave
          };

        case 95:
          return _context4.abrupt("return", updatedRecord);

        case 96:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[26, 72]]);
}
/**
 * Action triggered to save an entity record's edits.
 *
 * @param {string} kind     Kind of the entity.
 * @param {string} name     Name of the entity.
 * @param {Object} recordId ID of the record.
 * @param {Object} options  Saving options.
 */

function saveEditedEntityRecord(kind, name, recordId, options) {
  var edits, record;
  return external_this_regeneratorRuntime_default.a.wrap(function saveEditedEntityRecord$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return controls_select('hasEditsForEntityRecord', kind, name, recordId);

        case 2:
          if (_context5.sent) {
            _context5.next = 4;
            break;
          }

          return _context5.abrupt("return");

        case 4:
          _context5.next = 6;
          return controls_select('getEntityRecordNonTransientEdits', kind, name, recordId);

        case 6:
          edits = _context5.sent;
          record = build_module_actions_objectSpread({
            id: recordId
          }, edits);
          return _context5.delegateYield(saveEntityRecord(kind, name, record, options), "t0", 9);

        case 9:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}
/**
 * Returns an action object used in signalling that Upload permissions have been received.
 *
 * @param {boolean} hasUploadPermissions Does the user have permission to upload files?
 *
 * @return {Object} Action object.
 */

function receiveUploadPermissions(hasUploadPermissions) {
  return {
    type: 'RECEIVE_USER_PERMISSION',
    key: 'create/media',
    isAllowed: hasUploadPermissions
  };
}
/**
 * Returns an action object used in signalling that the current user has
 * permission to perform an action on a REST resource.
 *
 * @param {string}  key       A key that represents the action and REST resource.
 * @param {boolean} isAllowed Whether or not the user can perform the action.
 *
 * @return {Object} Action object.
 */

function receiveUserPermission(key, isAllowed) {
  return {
    type: 'RECEIVE_USER_PERMISSION',
    key: key,
    isAllowed: isAllowed
  };
}
/**
 * Returns an action object used in signalling that the autosaves for a
 * post have been received.
 *
 * @param {number}       postId    The id of the post that is parent to the autosave.
 * @param {Array|Object} autosaves An array of autosaves or singular autosave object.
 *
 * @return {Object} Action object.
 */

function receiveAutosaves(postId, autosaves) {
  return {
    type: 'RECEIVE_AUTOSAVES',
    postId: postId,
    autosaves: Object(external_this_lodash_["castArray"])(autosaves)
  };
}

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/entities.js


var entities_marked =
/*#__PURE__*/
external_this_regeneratorRuntime_default.a.mark(loadPostTypeEntities),
    entities_marked2 =
/*#__PURE__*/
external_this_regeneratorRuntime_default.a.mark(loadTaxonomyEntities),
    entities_marked3 =
/*#__PURE__*/
external_this_regeneratorRuntime_default.a.mark(getKindEntities);

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



var DEFAULT_ENTITY_KEY = 'id';
var defaultEntities = [{
  name: 'site',
  kind: 'root',
  baseURL: '/wp/v2/settings'
}, {
  name: 'postType',
  kind: 'root',
  key: 'slug',
  baseURL: '/wp/v2/types'
}, {
  name: 'media',
  kind: 'root',
  baseURL: '/wp/v2/media',
  plural: 'mediaItems'
}, {
  name: 'taxonomy',
  kind: 'root',
  key: 'slug',
  baseURL: '/wp/v2/taxonomies',
  plural: 'taxonomies'
}, {
  name: 'widgetArea',
  kind: 'root',
  baseURL: '/__experimental/widget-areas',
  plural: 'widgetAreas',
  transientEdits: {
    blocks: true
  }
}, {
  name: 'user',
  kind: 'root',
  baseURL: '/wp/v2/users',
  plural: 'users'
}];
var kinds = [{
  name: 'postType',
  loadEntities: loadPostTypeEntities
}, {
  name: 'taxonomy',
  loadEntities: loadTaxonomyEntities
}];
/**
 * Returns the list of post type entities.
 *
 * @return {Promise} Entities promise
 */

function loadPostTypeEntities() {
  var postTypes;
  return external_this_regeneratorRuntime_default.a.wrap(function loadPostTypeEntities$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return apiFetch({
            path: '/wp/v2/types?context=edit'
          });

        case 2:
          postTypes = _context.sent;
          return _context.abrupt("return", Object(external_this_lodash_["map"])(postTypes, function (postType, name) {
            return {
              kind: 'postType',
              baseURL: '/wp/v2/' + postType.rest_base,
              name: name,
              transientEdits: {
                blocks: true,
                selectionStart: true,
                selectionEnd: true
              },
              mergedEdits: {
                meta: true
              }
            };
          }));

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, entities_marked);
}
/**
 * Returns the list of the taxonomies entities.
 *
 * @return {Promise} Entities promise
 */


function loadTaxonomyEntities() {
  var taxonomies;
  return external_this_regeneratorRuntime_default.a.wrap(function loadTaxonomyEntities$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return apiFetch({
            path: '/wp/v2/taxonomies?context=edit'
          });

        case 2:
          taxonomies = _context2.sent;
          return _context2.abrupt("return", Object(external_this_lodash_["map"])(taxonomies, function (taxonomy, name) {
            return {
              kind: 'taxonomy',
              baseURL: '/wp/v2/' + taxonomy.rest_base,
              name: name
            };
          }));

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  }, entities_marked2);
}
/**
 * Returns the entity's getter method name given its kind and name.
 *
 * @param {string}  kind      Entity kind.
 * @param {string}  name      Entity name.
 * @param {string}  prefix    Function prefix.
 * @param {boolean} usePlural Whether to use the plural form or not.
 *
 * @return {string} Method name
 */


var entities_getMethodName = function getMethodName(kind, name) {
  var prefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'get';
  var usePlural = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var entity = Object(external_this_lodash_["find"])(defaultEntities, {
    kind: kind,
    name: name
  });
  var kindPrefix = kind === 'root' ? '' : Object(external_this_lodash_["upperFirst"])(Object(external_this_lodash_["camelCase"])(kind));
  var nameSuffix = Object(external_this_lodash_["upperFirst"])(Object(external_this_lodash_["camelCase"])(name)) + (usePlural ? 's' : '');
  var suffix = usePlural && entity.plural ? Object(external_this_lodash_["upperFirst"])(Object(external_this_lodash_["camelCase"])(entity.plural)) : nameSuffix;
  return "".concat(prefix).concat(kindPrefix).concat(suffix);
};
/**
 * Loads the kind entities into the store.
 *
 * @param {string} kind  Kind
 *
 * @return {Array} Entities
 */

function getKindEntities(kind) {
  var entities, kindConfig;
  return external_this_regeneratorRuntime_default.a.wrap(function getKindEntities$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return controls_select('getEntitiesByKind', kind);

        case 2:
          entities = _context3.sent;

          if (!(entities && entities.length !== 0)) {
            _context3.next = 5;
            break;
          }

          return _context3.abrupt("return", entities);

        case 5:
          kindConfig = Object(external_this_lodash_["find"])(kinds, {
            name: kind
          });

          if (kindConfig) {
            _context3.next = 8;
            break;
          }

          return _context3.abrupt("return", []);

        case 8:
          _context3.next = 10;
          return kindConfig.loadEntities();

        case 10:
          entities = _context3.sent;
          _context3.next = 13;
          return addEntities(entities);

        case 13:
          return _context3.abrupt("return", entities);

        case 14:
        case "end":
          return _context3.stop();
      }
    }
  }, entities_marked3);
}

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/queried-data/reducer.js


function reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { reducer_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
 * Returns a merged array of item IDs, given details of the received paginated
 * items. The array is sparse-like with `undefined` entries where holes exist.
 *
 * @param {?Array<number>} itemIds     Original item IDs (default empty array).
 * @param {number[]}       nextItemIds Item IDs to merge.
 * @param {number}         page        Page of items merged.
 * @param {number}         perPage     Number of items per page.
 *
 * @return {number[]} Merged array of item IDs.
 */

function getMergedItemIds(itemIds, nextItemIds, page, perPage) {
  var nextItemIdsStartIndex = (page - 1) * perPage; // If later page has already been received, default to the larger known
  // size of the existing array, else calculate as extending the existing.

  var size = Math.max(itemIds.length, nextItemIdsStartIndex + nextItemIds.length); // Preallocate array since size is known.

  var mergedItemIds = new Array(size);

  for (var i = 0; i < size; i++) {
    // Preserve existing item ID except for subset of range of next items.
    var isInNextItemsRange = i >= nextItemIdsStartIndex && i < nextItemIdsStartIndex + nextItemIds.length;
    mergedItemIds[i] = isInNextItemsRange ? nextItemIds[i - nextItemIdsStartIndex] : itemIds[i];
  }

  return mergedItemIds;
}
/**
 * Reducer tracking items state, keyed by ID. Items are assumed to be normal,
 * where identifiers are common across all queries.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Next state.
 */

function reducer_items() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'RECEIVE_ITEMS':
      var key = action.key || DEFAULT_ENTITY_KEY;
      return reducer_objectSpread({}, state, {}, action.items.reduce(function (accumulator, value) {
        var itemId = value[key];
        accumulator[itemId] = conservativeMapItem(state[itemId], value);
        return accumulator;
      }, {}));
  }

  return state;
}
/**
 * Reducer tracking queries state, keyed by stable query key. Each reducer
 * query object includes `itemIds` and `requestingPageByPerPage`.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Next state.
 */


var queries = Object(external_this_lodash_["flowRight"])([// Limit to matching action type so we don't attempt to replace action on
// an unhandled action.
if_matching_action(function (action) {
  return 'query' in action;
}), // Inject query parts into action for use both in `onSubKey` and reducer.
replace_action(function (action) {
  // `ifMatchingAction` still passes on initialization, where state is
  // undefined and a query is not assigned. Avoid attempting to parse
  // parts. `onSubKey` will omit by lack of `stableKey`.
  if (action.query) {
    return reducer_objectSpread({}, action, {}, get_query_parts(action.query));
  }

  return action;
}), // Queries shape is shared, but keyed by query `stableKey` part. Original
// reducer tracks only a single query object.
on_sub_key('stableKey')])(function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var type = action.type,
      page = action.page,
      perPage = action.perPage,
      _action$key = action.key,
      key = _action$key === void 0 ? DEFAULT_ENTITY_KEY : _action$key;

  if (type !== 'RECEIVE_ITEMS') {
    return state;
  }

  return getMergedItemIds(state || [], Object(external_this_lodash_["map"])(action.items, key), page, perPage);
});
/* harmony default export */ var queried_data_reducer = (Object(external_this_wp_data_["combineReducers"])({
  items: reducer_items,
  queries: queries
}));

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/queried-data/index.js




// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/reducer.js




function build_module_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function build_module_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { build_module_reducer_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { build_module_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
 * Reducer managing terms state. Keyed by taxonomy slug, the value is either
 * undefined (if no request has been made for given taxonomy), null (if a
 * request is in-flight for given taxonomy), or the array of terms for the
 * taxonomy.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function terms() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'RECEIVE_TERMS':
      return build_module_reducer_objectSpread({}, state, Object(defineProperty["a" /* default */])({}, action.taxonomy, action.terms));
  }

  return state;
}
/**
 * Reducer managing authors state. Keyed by id.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function reducer_users() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    byId: {},
    queries: {}
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'RECEIVE_USER_QUERY':
      return {
        byId: build_module_reducer_objectSpread({}, state.byId, {}, Object(external_this_lodash_["keyBy"])(action.users, 'id')),
        queries: build_module_reducer_objectSpread({}, state.queries, Object(defineProperty["a" /* default */])({}, action.queryID, Object(external_this_lodash_["map"])(action.users, function (user) {
          return user.id;
        })))
      };
  }

  return state;
}
/**
 * Reducer managing current user state.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function reducer_currentUser() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'RECEIVE_CURRENT_USER':
      return action.currentUser;
  }

  return state;
}
/**
 * Reducer managing taxonomies.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function reducer_taxonomies() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'RECEIVE_TAXONOMIES':
      return action.taxonomies;
  }

  return state;
}
/**
 * Reducer managing theme supports data.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function themeSupports() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'RECEIVE_THEME_SUPPORTS':
      return build_module_reducer_objectSpread({}, state, {}, action.themeSupports);
  }

  return state;
}
/**
 * Higher Order Reducer for a given entity config. It supports:
 *
 *  - Fetching
 *  - Editing
 *  - Saving
 *
 * @param {Object} entityConfig  Entity config.
 *
 * @return {Function} Reducer.
 */

function reducer_entity(entityConfig) {
  return Object(external_this_lodash_["flowRight"])([// Limit to matching action type so we don't attempt to replace action on
  // an unhandled action.
  if_matching_action(function (action) {
    return action.name && action.kind && action.name === entityConfig.name && action.kind === entityConfig.kind;
  }), // Inject the entity config into the action.
  replace_action(function (action) {
    return build_module_reducer_objectSpread({}, action, {
      key: entityConfig.key || DEFAULT_ENTITY_KEY
    });
  })])(Object(external_this_wp_data_["combineReducers"])({
    queriedData: queried_data_reducer,
    edits: function edits() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var action = arguments.length > 1 ? arguments[1] : undefined;

      switch (action.type) {
        case 'RECEIVE_ITEMS':
          var nextState = build_module_reducer_objectSpread({}, state);

          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            var _loop = function _loop() {
              var record = _step.value;
              var recordId = record[action.key];
              var edits = nextState[recordId];

              if (!edits) {
                return "continue";
              }

              var nextEdits = Object.keys(edits).reduce(function (acc, key) {
                // If the edited value is still different to the persisted value,
                // keep the edited value in edits.
                if ( // Edits are the "raw" attribute values, but records may have
                // objects with more properties, so we use `get` here for the
                // comparison.
                !Object(external_this_lodash_["isEqual"])(edits[key], Object(external_this_lodash_["get"])(record[key], 'raw', record[key]))) {
                  acc[key] = edits[key];
                }

                return acc;
              }, {});

              if (Object.keys(nextEdits).length) {
                nextState[recordId] = nextEdits;
              } else {
                delete nextState[recordId];
              }
            };

            for (var _iterator = action.items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var _ret = _loop();

              if (_ret === "continue") continue;
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          return nextState;

        case 'EDIT_ENTITY_RECORD':
          var nextEdits = build_module_reducer_objectSpread({}, state[action.recordId], {}, action.edits);

          Object.keys(nextEdits).forEach(function (key) {
            // Delete cleared edits so that the properties
            // are not considered dirty.
            if (nextEdits[key] === undefined) {
              delete nextEdits[key];
            }
          });
          return build_module_reducer_objectSpread({}, state, Object(defineProperty["a" /* default */])({}, action.recordId, nextEdits));
      }

      return state;
    },
    saving: function saving() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var action = arguments.length > 1 ? arguments[1] : undefined;

      switch (action.type) {
        case 'SAVE_ENTITY_RECORD_START':
        case 'SAVE_ENTITY_RECORD_FINISH':
          return build_module_reducer_objectSpread({}, state, Object(defineProperty["a" /* default */])({}, action.recordId, {
            pending: action.type === 'SAVE_ENTITY_RECORD_START',
            error: action.error,
            isAutosave: action.isAutosave
          }));
      }

      return state;
    }
  }));
}
/**
 * Reducer keeping track of the registered entities.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */


function entitiesConfig() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultEntities;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'ADD_ENTITIES':
      return [].concat(Object(toConsumableArray["a" /* default */])(state), Object(toConsumableArray["a" /* default */])(action.entities));
  }

  return state;
}
/**
 * Reducer keeping track of the registered entities config and data.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

var reducer_entities = function entities() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var newConfig = entitiesConfig(state.config, action); // Generates a dynamic reducer for the entities

  var entitiesDataReducer = state.reducer;

  if (!entitiesDataReducer || newConfig !== state.config) {
    var entitiesByKind = Object(external_this_lodash_["groupBy"])(newConfig, 'kind');
    entitiesDataReducer = Object(external_this_wp_data_["combineReducers"])(Object.entries(entitiesByKind).reduce(function (memo, _ref) {
      var _ref2 = Object(slicedToArray["a" /* default */])(_ref, 2),
          kind = _ref2[0],
          subEntities = _ref2[1];

      var kindReducer = Object(external_this_wp_data_["combineReducers"])(subEntities.reduce(function (kindMemo, entityConfig) {
        return build_module_reducer_objectSpread({}, kindMemo, Object(defineProperty["a" /* default */])({}, entityConfig.name, reducer_entity(entityConfig)));
      }, {}));
      memo[kind] = kindReducer;
      return memo;
    }, {}));
  }

  var newData = entitiesDataReducer(state.data, action);

  if (newData === state.data && newConfig === state.config && entitiesDataReducer === state.reducer) {
    return state;
  }

  return {
    reducer: entitiesDataReducer,
    data: newData,
    config: newConfig
  };
};
/**
 * Reducer keeping track of entity edit undo history.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

var UNDO_INITIAL_STATE = [];
UNDO_INITIAL_STATE.offset = 0;
var lastEditAction;
function reducer_undo() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : UNDO_INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'EDIT_ENTITY_RECORD':
    case 'CREATE_UNDO_LEVEL':
      var isCreateUndoLevel = action.type === 'CREATE_UNDO_LEVEL';
      var isUndoOrRedo = !isCreateUndoLevel && (action.meta.isUndo || action.meta.isRedo);

      if (isCreateUndoLevel) {
        action = lastEditAction;
      } else if (!isUndoOrRedo) {
        // Don't lose the last edit cache if the new one only has transient edits.
        // Transient edits don't create new levels so updating the cache would make
        // us skip an edit later when creating levels explicitly.
        if (Object.keys(action.edits).some(function (key) {
          return !action.transientEdits[key];
        })) {
          lastEditAction = action;
        } else {
          lastEditAction = build_module_reducer_objectSpread({}, action, {
            edits: build_module_reducer_objectSpread({}, lastEditAction && lastEditAction.edits, {}, action.edits)
          });
        }
      }

      var nextState;

      if (isUndoOrRedo) {
        nextState = Object(toConsumableArray["a" /* default */])(state);
        nextState.offset = state.offset + (action.meta.isUndo ? -1 : 1);

        if (state.flattenedUndo) {
          // The first undo in a sequence of undos might happen while we have
          // flattened undos in state. If this is the case, we want execution
          // to continue as if we were creating an explicit undo level. This
          // will result in an extra undo level being appended with the flattened
          // undo values.
          isCreateUndoLevel = true;
          action = lastEditAction;
        } else {
          return nextState;
        }
      }

      if (!action.meta.undo) {
        return state;
      } // Transient edits don't create an undo level, but are
      // reachable in the next meaningful edit to which they
      // are merged. They are defined in the entity's config.


      if (!isCreateUndoLevel && !Object.keys(action.edits).some(function (key) {
        return !action.transientEdits[key];
      })) {
        nextState = Object(toConsumableArray["a" /* default */])(state);
        nextState.flattenedUndo = build_module_reducer_objectSpread({}, state.flattenedUndo, {}, action.edits);
        nextState.offset = state.offset;
        return nextState;
      } // Clear potential redos, because this only supports linear history.


      nextState = nextState || state.slice(0, state.offset || undefined);
      nextState.offset = nextState.offset || 0;
      nextState.pop();

      if (!isCreateUndoLevel) {
        nextState.push({
          kind: action.meta.undo.kind,
          name: action.meta.undo.name,
          recordId: action.meta.undo.recordId,
          edits: build_module_reducer_objectSpread({}, state.flattenedUndo, {}, action.meta.undo.edits)
        });
      } // When an edit is a function it's an optimization to avoid running some expensive operation.
      // We can't rely on the function references being the same so we opt out of comparing them here.


      var comparisonUndoEdits = Object.values(action.meta.undo.edits).filter(function (edit) {
        return typeof edit !== 'function';
      });
      var comparisonEdits = Object.values(action.edits).filter(function (edit) {
        return typeof edit !== 'function';
      });

      if (!external_this_wp_isShallowEqual_default()(comparisonUndoEdits, comparisonEdits)) {
        nextState.push({
          kind: action.kind,
          name: action.name,
          recordId: action.recordId,
          edits: isCreateUndoLevel ? build_module_reducer_objectSpread({}, state.flattenedUndo, {}, action.edits) : action.edits
        });
      }

      return nextState;
  }

  return state;
}
/**
 * Reducer managing embed preview data.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function embedPreviews() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'RECEIVE_EMBED_PREVIEW':
      var url = action.url,
          preview = action.preview;
      return build_module_reducer_objectSpread({}, state, Object(defineProperty["a" /* default */])({}, url, preview));
  }

  return state;
}
/**
 * State which tracks whether the user can perform an action on a REST
 * resource.
 *
 * @param  {Object} state  Current state.
 * @param  {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function userPermissions() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'RECEIVE_USER_PERMISSION':
      return build_module_reducer_objectSpread({}, state, Object(defineProperty["a" /* default */])({}, action.key, action.isAllowed));
  }

  return state;
}
/**
 * Reducer returning autosaves keyed by their parent's post id.
 *
 * @param  {Object} state  Current state.
 * @param  {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function reducer_autosaves() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'RECEIVE_AUTOSAVES':
      var postId = action.postId,
          autosavesData = action.autosaves;
      return build_module_reducer_objectSpread({}, state, Object(defineProperty["a" /* default */])({}, postId, autosavesData));
  }

  return state;
}
/* harmony default export */ var build_module_reducer = (Object(external_this_wp_data_["combineReducers"])({
  terms: terms,
  users: reducer_users,
  currentUser: reducer_currentUser,
  taxonomies: reducer_taxonomies,
  themeSupports: themeSupports,
  entities: reducer_entities,
  undo: reducer_undo,
  embedPreviews: embedPreviews,
  userPermissions: userPermissions,
  autosaves: reducer_autosaves
}));

// EXTERNAL MODULE: external {"this":["wp","deprecated"]}
var external_this_wp_deprecated_ = __webpack_require__(37);
var external_this_wp_deprecated_default = /*#__PURE__*/__webpack_require__.n(external_this_wp_deprecated_);

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/name.js
/**
 * The reducer key used by core data in store registration.
 * This is defined in a separate file to avoid cycle-dependency
 *
 * @type {string}
 */
var REDUCER_KEY = 'core';

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/selectors.js


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
 * Returns true if a request is in progress for embed preview data, or false
 * otherwise.
 *
 * @param {Object} state Data state.
 * @param {string} url   URL the preview would be for.
 *
 * @return {boolean} Whether a request is in progress for an embed preview.
 */

var isRequestingEmbedPreview = Object(external_this_wp_data_["createRegistrySelector"])(function (select) {
  return function (state, url) {
    return select('core/data').isResolving(REDUCER_KEY, 'getEmbedPreview', [url]);
  };
});
/**
 * Returns all available authors.
 *
 * @param {Object} state Data state.
 *
 * @return {Array} Authors list.
 */

function getAuthors(state) {
  return getUserQueryResults(state, 'authors');
}
/**
 * Returns the current user.
 *
 * @param {Object} state Data state.
 *
 * @return {Object} Current user object.
 */

function getCurrentUser(state) {
  return state.currentUser;
}
/**
 * Returns all the users returned by a query ID.
 *
 * @param {Object} state   Data state.
 * @param {string} queryID Query ID.
 *
 * @return {Array} Users list.
 */

var getUserQueryResults = Object(rememo["a" /* default */])(function (state, queryID) {
  var queryResults = state.users.queries[queryID];
  return Object(external_this_lodash_["map"])(queryResults, function (id) {
    return state.users.byId[id];
  });
}, function (state, queryID) {
  return [state.users.queries[queryID], state.users.byId];
});
/**
 * Returns whether the entities for the give kind are loaded.
 *
 * @param {Object} state   Data state.
 * @param {string} kind  Entity kind.
 *
 * @return {boolean} Whether the entities are loaded
 */

function getEntitiesByKind(state, kind) {
  return Object(external_this_lodash_["filter"])(state.entities.config, {
    kind: kind
  });
}
/**
 * Returns the entity object given its kind and name.
 *
 * @param {Object} state   Data state.
 * @param {string} kind  Entity kind.
 * @param {string} name  Entity name.
 *
 * @return {Object} Entity
 */

function selectors_getEntity(state, kind, name) {
  return Object(external_this_lodash_["find"])(state.entities.config, {
    kind: kind,
    name: name
  });
}
/**
 * Returns the Entity's record object by key.
 *
 * @param {Object} state  State tree
 * @param {string} kind   Entity kind.
 * @param {string} name   Entity name.
 * @param {number} key    Record's key
 *
 * @return {Object?} Record.
 */

function getEntityRecord(state, kind, name, key) {
  return Object(external_this_lodash_["get"])(state.entities.data, [kind, name, 'queriedData', 'items', key]);
}
/**
 * Returns the Entity's record object by key. Doesn't trigger a resolver nor requests the entity from the API if the entity record isn't available in the local state.
 *
 * @param {Object} state  State tree
 * @param {string} kind   Entity kind.
 * @param {string} name   Entity name.
 * @param {number} key    Record's key
 *
 * @return {Object?} Record.
 */

function __experimentalGetEntityRecordNoResolver(state, kind, name, key) {
  return getEntityRecord(state, kind, name, key);
}
/**
 * Returns the entity's record object by key,
 * with its attributes mapped to their raw values.
 *
 * @param {Object} state  State tree.
 * @param {string} kind   Entity kind.
 * @param {string} name   Entity name.
 * @param {number} key    Record's key.
 *
 * @return {Object?} Object with the entity's raw attributes.
 */

var getRawEntityRecord = Object(rememo["a" /* default */])(function (state, kind, name, key) {
  var record = getEntityRecord(state, kind, name, key);
  return record && Object.keys(record).reduce(function (accumulator, _key) {
    // Because edits are the "raw" attribute values,
    // we return those from record selectors to make rendering,
    // comparisons, and joins with edits easier.
    accumulator[_key] = Object(external_this_lodash_["get"])(record[_key], 'raw', record[_key]);
    return accumulator;
  }, {});
}, function (state) {
  return [state.entities.data];
});
/**
 * Returns the Entity's records.
 *
 * @param {Object}  state  State tree
 * @param {string}  kind   Entity kind.
 * @param {string}  name   Entity name.
 * @param {?Object} query  Optional terms query.
 *
 * @return {Array} Records.
 */

function getEntityRecords(state, kind, name, query) {
  var queriedState = Object(external_this_lodash_["get"])(state.entities.data, [kind, name, 'queriedData']);

  if (!queriedState) {
    return [];
  }

  return getQueriedItems(queriedState, query);
}
/**
 * Returns a map of objects with each edited
 * raw entity record and its corresponding edits.
 *
 * The map is keyed by entity `kind => name => key => { rawRecord, edits }`.
 *
 * @param {Object} state State tree.
 *
 * @return {{ [kind: string]: { [name: string]: { [key: string]: { rawRecord: Object<string,*>, edits: Object<string,*> } } } }} The map of edited records with their edits.
 */

var getEntityRecordChangesByRecord = Object(rememo["a" /* default */])(function (state) {
  var data = state.entities.data;
  return Object.keys(data).reduce(function (acc, kind) {
    Object.keys(data[kind]).forEach(function (name) {
      var editsKeys = Object.keys(data[kind][name].edits).filter(function (editsKey) {
        return hasEditsForEntityRecord(state, kind, name, editsKey);
      });

      if (editsKeys.length) {
        if (!acc[kind]) {
          acc[kind] = {};
        }

        if (!acc[kind][name]) {
          acc[kind][name] = {};
        }

        editsKeys.forEach(function (editsKey) {
          return acc[kind][name][editsKey] = {
            rawRecord: getRawEntityRecord(state, kind, name, editsKey),
            edits: getEntityRecordNonTransientEdits(state, kind, name, editsKey)
          };
        });
      }
    });
    return acc;
  }, {});
}, function (state) {
  return [state.entities.data];
});
/**
 * Returns the specified entity record's edits.
 *
 * @param {Object} state    State tree.
 * @param {string} kind     Entity kind.
 * @param {string} name     Entity name.
 * @param {number} recordId Record ID.
 *
 * @return {Object?} The entity record's edits.
 */

function getEntityRecordEdits(state, kind, name, recordId) {
  return Object(external_this_lodash_["get"])(state.entities.data, [kind, name, 'edits', recordId]);
}
/**
 * Returns the specified entity record's non transient edits.
 *
 * Transient edits don't create an undo level, and
 * are not considered for change detection.
 * They are defined in the entity's config.
 *
 * @param {Object} state    State tree.
 * @param {string} kind     Entity kind.
 * @param {string} name     Entity name.
 * @param {number} recordId Record ID.
 *
 * @return {Object?} The entity record's non transient edits.
 */

var getEntityRecordNonTransientEdits = Object(rememo["a" /* default */])(function (state, kind, name, recordId) {
  var _ref = selectors_getEntity(state, kind, name) || {},
      transientEdits = _ref.transientEdits;

  var edits = getEntityRecordEdits(state, kind, name, recordId) || {};

  if (!transientEdits) {
    return edits;
  }

  return Object.keys(edits).reduce(function (acc, key) {
    if (!transientEdits[key]) {
      acc[key] = edits[key];
    }

    return acc;
  }, {});
}, function (state) {
  return [state.entities.config, state.entities.data];
});
/**
 * Returns true if the specified entity record has edits,
 * and false otherwise.
 *
 * @param {Object} state    State tree.
 * @param {string} kind     Entity kind.
 * @param {string} name     Entity name.
 * @param {number} recordId Record ID.
 *
 * @return {boolean} Whether the entity record has edits or not.
 */

function hasEditsForEntityRecord(state, kind, name, recordId) {
  return isSavingEntityRecord(state, kind, name, recordId) || Object.keys(getEntityRecordNonTransientEdits(state, kind, name, recordId)).length > 0;
}
/**
 * Returns the specified entity record, merged with its edits.
 *
 * @param {Object} state    State tree.
 * @param {string} kind     Entity kind.
 * @param {string} name     Entity name.
 * @param {number} recordId Record ID.
 *
 * @return {Object?} The entity record, merged with its edits.
 */

var getEditedEntityRecord = Object(rememo["a" /* default */])(function (state, kind, name, recordId) {
  return selectors_objectSpread({}, getRawEntityRecord(state, kind, name, recordId), {}, getEntityRecordEdits(state, kind, name, recordId));
}, function (state) {
  return [state.entities.data];
});
/**
 * Returns true if the specified entity record is autosaving, and false otherwise.
 *
 * @param {Object} state    State tree.
 * @param {string} kind     Entity kind.
 * @param {string} name     Entity name.
 * @param {number} recordId Record ID.
 *
 * @return {boolean} Whether the entity record is autosaving or not.
 */

function isAutosavingEntityRecord(state, kind, name, recordId) {
  var _get = Object(external_this_lodash_["get"])(state.entities.data, [kind, name, 'saving', recordId], {}),
      pending = _get.pending,
      isAutosave = _get.isAutosave;

  return Boolean(pending && isAutosave);
}
/**
 * Returns true if the specified entity record is saving, and false otherwise.
 *
 * @param {Object} state    State tree.
 * @param {string} kind     Entity kind.
 * @param {string} name     Entity name.
 * @param {number} recordId Record ID.
 *
 * @return {boolean} Whether the entity record is saving or not.
 */

function isSavingEntityRecord(state, kind, name, recordId) {
  return Object(external_this_lodash_["get"])(state.entities.data, [kind, name, 'saving', recordId, 'pending'], false);
}
/**
 * Returns the specified entity record's last save error.
 *
 * @param {Object} state    State tree.
 * @param {string} kind     Entity kind.
 * @param {string} name     Entity name.
 * @param {number} recordId Record ID.
 *
 * @return {Object?} The entity record's save error.
 */

function getLastEntitySaveError(state, kind, name, recordId) {
  return Object(external_this_lodash_["get"])(state.entities.data, [kind, name, 'saving', recordId, 'error']);
}
/**
 * Returns the current undo offset for the
 * entity records edits history. The offset
 * represents how many items from the end
 * of the history stack we are at. 0 is the
 * last edit, -1 is the second last, and so on.
 *
 * @param {Object} state State tree.
 *
 * @return {number} The current undo offset.
 */

function getCurrentUndoOffset(state) {
  return state.undo.offset;
}
/**
 * Returns the previous edit from the current undo offset
 * for the entity records edits history, if any.
 *
 * @param {Object} state State tree.
 *
 * @return {Object?} The edit.
 */


function getUndoEdit(state) {
  return state.undo[state.undo.length - 2 + getCurrentUndoOffset(state)];
}
/**
 * Returns the next edit from the current undo offset
 * for the entity records edits history, if any.
 *
 * @param {Object} state State tree.
 *
 * @return {Object?} The edit.
 */

function getRedoEdit(state) {
  return state.undo[state.undo.length + getCurrentUndoOffset(state)];
}
/**
 * Returns true if there is a previous edit from the current undo offset
 * for the entity records edits history, and false otherwise.
 *
 * @param {Object} state State tree.
 *
 * @return {boolean} Whether there is a previous edit or not.
 */

function hasUndo(state) {
  return Boolean(getUndoEdit(state));
}
/**
 * Returns true if there is a next edit from the current undo offset
 * for the entity records edits history, and false otherwise.
 *
 * @param {Object} state State tree.
 *
 * @return {boolean} Whether there is a next edit or not.
 */

function hasRedo(state) {
  return Boolean(getRedoEdit(state));
}
/**
 * Return theme supports data in the index.
 *
 * @param {Object} state Data state.
 *
 * @return {*}           Index data.
 */

function getThemeSupports(state) {
  return state.themeSupports;
}
/**
 * Returns the embed preview for the given URL.
 *
 * @param {Object} state    Data state.
 * @param {string} url      Embedded URL.
 *
 * @return {*} Undefined if the preview has not been fetched, otherwise, the preview fetched from the embed preview API.
 */

function getEmbedPreview(state, url) {
  return state.embedPreviews[url];
}
/**
 * Determines if the returned preview is an oEmbed link fallback.
 *
 * WordPress can be configured to return a simple link to a URL if it is not embeddable.
 * We need to be able to determine if a URL is embeddable or not, based on what we
 * get back from the oEmbed preview API.
 *
 * @param {Object} state    Data state.
 * @param {string} url      Embedded URL.
 *
 * @return {boolean} Is the preview for the URL an oEmbed link fallback.
 */

function isPreviewEmbedFallback(state, url) {
  var preview = state.embedPreviews[url];
  var oEmbedLinkCheck = '<a href="' + url + '">' + url + '</a>';

  if (!preview) {
    return false;
  }

  return preview.html === oEmbedLinkCheck;
}
/**
 * Returns whether the current user can upload media.
 *
 * Calling this may trigger an OPTIONS request to the REST API via the
 * `canUser()` resolver.
 *
 * https://developer.wordpress.org/rest-api/reference/
 *
 * @deprecated since 5.0. Callers should use the more generic `canUser()` selector instead of
 *             `hasUploadPermissions()`, e.g. `canUser( 'create', 'media' )`.
 *
 * @param {Object} state Data state.
 *
 * @return {boolean} Whether or not the user can upload media. Defaults to `true` if the OPTIONS
 *                   request is being made.
 */

function hasUploadPermissions(state) {
  external_this_wp_deprecated_default()("select( 'core' ).hasUploadPermissions()", {
    alternative: "select( 'core' ).canUser( 'create', 'media' )"
  });
  return Object(external_this_lodash_["defaultTo"])(canUser(state, 'create', 'media'), true);
}
/**
 * Returns whether the current user can perform the given action on the given
 * REST resource.
 *
 * Calling this may trigger an OPTIONS request to the REST API via the
 * `canUser()` resolver.
 *
 * https://developer.wordpress.org/rest-api/reference/
 *
 * @param {Object}   state            Data state.
 * @param {string}   action           Action to check. One of: 'create', 'read', 'update', 'delete'.
 * @param {string}   resource         REST resource to check, e.g. 'media' or 'posts'.
 * @param {string=}  id               Optional ID of the rest resource to check.
 *
 * @return {boolean|undefined} Whether or not the user can perform the action,
 *                             or `undefined` if the OPTIONS request is still being made.
 */

function canUser(state, action, resource, id) {
  var key = Object(external_this_lodash_["compact"])([action, resource, id]).join('/');
  return Object(external_this_lodash_["get"])(state, ['userPermissions', key]);
}
/**
 * Returns the latest autosaves for the post.
 *
 * May return multiple autosaves since the backend stores one autosave per
 * author for each post.
 *
 * @param {Object} state    State tree.
 * @param {string} postType The type of the parent post.
 * @param {number} postId   The id of the parent post.
 *
 * @return {?Array} An array of autosaves for the post, or undefined if there is none.
 */

function getAutosaves(state, postType, postId) {
  return state.autosaves[postId];
}
/**
 * Returns the autosave for the post and author.
 *
 * @param {Object} state    State tree.
 * @param {string} postType The type of the parent post.
 * @param {number} postId   The id of the parent post.
 * @param {number} authorId The id of the author.
 *
 * @return {?Object} The autosave for the post and author.
 */

function getAutosave(state, postType, postId, authorId) {
  if (authorId === undefined) {
    return;
  }

  var autosaves = state.autosaves[postId];
  return Object(external_this_lodash_["find"])(autosaves, {
    author: authorId
  });
}
/**
 * Returns true if the REST request for autosaves has completed.
 *
 * @param {Object} state State tree.
 * @param {string} postType The type of the parent post.
 * @param {number} postId   The id of the parent post.
 *
 * @return {boolean} True if the REST request was completed. False otherwise.
 */

var hasFetchedAutosaves = Object(external_this_wp_data_["createRegistrySelector"])(function (select) {
  return function (state, postType, postId) {
    return select(REDUCER_KEY).hasFinishedResolution('getAutosaves', [postType, postId]);
  };
});
/**
 * Returns a new reference when edited values have changed. This is useful in
 * inferring where an edit has been made between states by comparison of the
 * return values using strict equality.
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

var getReferenceByDistinctEdits = Object(rememo["a" /* default */])(function () {
  return [];
}, function (state) {
  return [state.undo.length, state.undo.offset];
});

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/resolvers.js



function resolvers_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function resolvers_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { resolvers_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { resolvers_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var resolvers_marked =
/*#__PURE__*/
external_this_regeneratorRuntime_default.a.mark(resolvers_getAuthors),
    resolvers_marked2 =
/*#__PURE__*/
external_this_regeneratorRuntime_default.a.mark(resolvers_getCurrentUser),
    resolvers_marked3 =
/*#__PURE__*/
external_this_regeneratorRuntime_default.a.mark(resolvers_getEntityRecord),
    resolvers_marked4 =
/*#__PURE__*/
external_this_regeneratorRuntime_default.a.mark(resolvers_getEntityRecords),
    resolvers_marked5 =
/*#__PURE__*/
external_this_regeneratorRuntime_default.a.mark(resolvers_getThemeSupports),
    _marked6 =
/*#__PURE__*/
external_this_regeneratorRuntime_default.a.mark(resolvers_getEmbedPreview),
    _marked7 =
/*#__PURE__*/
external_this_regeneratorRuntime_default.a.mark(resolvers_hasUploadPermissions),
    _marked8 =
/*#__PURE__*/
external_this_regeneratorRuntime_default.a.mark(resolvers_canUser),
    _marked9 =
/*#__PURE__*/
external_this_regeneratorRuntime_default.a.mark(resolvers_getAutosaves),
    _marked10 =
/*#__PURE__*/
external_this_regeneratorRuntime_default.a.mark(resolvers_getAutosave);

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
 * Requests authors from the REST API.
 */

function resolvers_getAuthors() {
  var users;
  return external_this_regeneratorRuntime_default.a.wrap(function getAuthors$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return apiFetch({
            path: '/wp/v2/users/?who=authors&per_page=-1'
          });

        case 2:
          users = _context.sent;
          _context.next = 5;
          return receiveUserQuery('authors', users);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, resolvers_marked);
}
/**
 * Requests the current user from the REST API.
 */

function resolvers_getCurrentUser() {
  var currentUser;
  return external_this_regeneratorRuntime_default.a.wrap(function getCurrentUser$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return apiFetch({
            path: '/wp/v2/users/me'
          });

        case 2:
          currentUser = _context2.sent;
          _context2.next = 5;
          return receiveCurrentUser(currentUser);

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  }, resolvers_marked2);
}
/**
 * Requests an entity's record from the REST API.
 *
 * @param {string} kind   Entity kind.
 * @param {string} name   Entity name.
 * @param {number} key    Record's key
 */

function resolvers_getEntityRecord(kind, name) {
  var key,
      entities,
      entity,
      record,
      _args3 = arguments;
  return external_this_regeneratorRuntime_default.a.wrap(function getEntityRecord$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          key = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : '';
          _context3.next = 3;
          return getKindEntities(kind);

        case 3:
          entities = _context3.sent;
          entity = Object(external_this_lodash_["find"])(entities, {
            kind: kind,
            name: name
          });

          if (entity) {
            _context3.next = 7;
            break;
          }

          return _context3.abrupt("return");

        case 7:
          _context3.next = 9;
          return apiFetch({
            path: "".concat(entity.baseURL, "/").concat(key, "?context=edit")
          });

        case 9:
          record = _context3.sent;
          _context3.next = 12;
          return receiveEntityRecords(kind, name, record);

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, resolvers_marked3);
}
/**
 * Requests the entity's records from the REST API.
 *
 * @param {string}  kind   Entity kind.
 * @param {string}  name   Entity name.
 * @param {Object?} query  Query Object.
 */

function resolvers_getEntityRecords(kind, name) {
  var query,
      entities,
      entity,
      path,
      records,
      _args4 = arguments;
  return external_this_regeneratorRuntime_default.a.wrap(function getEntityRecords$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          query = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : {};
          _context4.next = 3;
          return getKindEntities(kind);

        case 3:
          entities = _context4.sent;
          entity = Object(external_this_lodash_["find"])(entities, {
            kind: kind,
            name: name
          });

          if (entity) {
            _context4.next = 7;
            break;
          }

          return _context4.abrupt("return");

        case 7:
          path = Object(external_this_wp_url_["addQueryArgs"])(entity.baseURL, resolvers_objectSpread({}, query, {
            context: 'edit'
          }));
          _context4.next = 10;
          return apiFetch({
            path: path
          });

        case 10:
          records = _context4.sent;
          _context4.next = 13;
          return receiveEntityRecords(kind, name, Object.values(records), query);

        case 13:
        case "end":
          return _context4.stop();
      }
    }
  }, resolvers_marked4);
}

resolvers_getEntityRecords.shouldInvalidate = function (action, kind, name) {
  return action.type === 'RECEIVE_ITEMS' && action.invalidateCache && kind === action.kind && name === action.name;
};
/**
 * Requests theme supports data from the index.
 */


function resolvers_getThemeSupports() {
  var activeThemes;
  return external_this_regeneratorRuntime_default.a.wrap(function getThemeSupports$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return apiFetch({
            path: '/wp/v2/themes?status=active'
          });

        case 2:
          activeThemes = _context5.sent;
          _context5.next = 5;
          return receiveThemeSupports(activeThemes[0].theme_supports);

        case 5:
        case "end":
          return _context5.stop();
      }
    }
  }, resolvers_marked5);
}
/**
 * Requests a preview from the from the Embed API.
 *
 * @param {string} url   URL to get the preview for.
 */

function resolvers_getEmbedPreview(url) {
  var embedProxyResponse;
  return external_this_regeneratorRuntime_default.a.wrap(function getEmbedPreview$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return apiFetch({
            path: Object(external_this_wp_url_["addQueryArgs"])('/oembed/1.0/proxy', {
              url: url
            })
          });

        case 3:
          embedProxyResponse = _context6.sent;
          _context6.next = 6;
          return receiveEmbedPreview(url, embedProxyResponse);

        case 6:
          _context6.next = 12;
          break;

        case 8:
          _context6.prev = 8;
          _context6.t0 = _context6["catch"](0);
          _context6.next = 12;
          return receiveEmbedPreview(url, false);

        case 12:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6, null, [[0, 8]]);
}
/**
 * Requests Upload Permissions from the REST API.
 *
 * @deprecated since 5.0. Callers should use the more generic `canUser()` selector instead of
 *            `hasUploadPermissions()`, e.g. `canUser( 'create', 'media' )`.
 */

function resolvers_hasUploadPermissions() {
  return external_this_regeneratorRuntime_default.a.wrap(function hasUploadPermissions$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          external_this_wp_deprecated_default()("select( 'core' ).hasUploadPermissions()", {
            alternative: "select( 'core' ).canUser( 'create', 'media' )"
          });
          return _context7.delegateYield(resolvers_canUser('create', 'media'), "t0", 2);

        case 2:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7);
}
/**
 * Checks whether the current user can perform the given action on the given
 * REST resource.
 *
 * @param {string}  action   Action to check. One of: 'create', 'read', 'update',
 *                           'delete'.
 * @param {string}  resource REST resource to check, e.g. 'media' or 'posts'.
 * @param {?string} id       ID of the rest resource to check.
 */

function resolvers_canUser(action, resource, id) {
  var methods, method, path, response, allowHeader, key, isAllowed;
  return external_this_regeneratorRuntime_default.a.wrap(function canUser$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          methods = {
            create: 'POST',
            read: 'GET',
            update: 'PUT',
            delete: 'DELETE'
          };
          method = methods[action];

          if (method) {
            _context8.next = 4;
            break;
          }

          throw new Error("'".concat(action, "' is not a valid action."));

        case 4:
          path = id ? "/wp/v2/".concat(resource, "/").concat(id) : "/wp/v2/".concat(resource);
          _context8.prev = 5;
          _context8.next = 8;
          return apiFetch({
            path: path,
            // Ideally this would always be an OPTIONS request, but unfortunately there's
            // a bug in the REST API which causes the Allow header to not be sent on
            // OPTIONS requests to /posts/:id routes.
            // https://core.trac.wordpress.org/ticket/45753
            method: id ? 'GET' : 'OPTIONS',
            parse: false
          });

        case 8:
          response = _context8.sent;
          _context8.next = 14;
          break;

        case 11:
          _context8.prev = 11;
          _context8.t0 = _context8["catch"](5);
          return _context8.abrupt("return");

        case 14:
          if (Object(external_this_lodash_["hasIn"])(response, ['headers', 'get'])) {
            // If the request is fetched using the fetch api, the header can be
            // retrieved using the 'get' method.
            allowHeader = response.headers.get('allow');
          } else {
            // If the request was preloaded server-side and is returned by the
            // preloading middleware, the header will be a simple property.
            allowHeader = Object(external_this_lodash_["get"])(response, ['headers', 'Allow'], '');
          }

          key = Object(external_this_lodash_["compact"])([action, resource, id]).join('/');
          isAllowed = Object(external_this_lodash_["includes"])(allowHeader, method);
          _context8.next = 19;
          return receiveUserPermission(key, isAllowed);

        case 19:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8, null, [[5, 11]]);
}
/**
 * Request autosave data from the REST API.
 *
 * @param {string} postType The type of the parent post.
 * @param {number} postId   The id of the parent post.
 */

function resolvers_getAutosaves(postType, postId) {
  var _ref, restBase, autosaves;

  return external_this_regeneratorRuntime_default.a.wrap(function getAutosaves$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return resolveSelect('getPostType', postType);

        case 2:
          _ref = _context9.sent;
          restBase = _ref.rest_base;
          _context9.next = 6;
          return apiFetch({
            path: "/wp/v2/".concat(restBase, "/").concat(postId, "/autosaves?context=edit")
          });

        case 6:
          autosaves = _context9.sent;

          if (!(autosaves && autosaves.length)) {
            _context9.next = 10;
            break;
          }

          _context9.next = 10;
          return receiveAutosaves(postId, autosaves);

        case 10:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked9);
}
/**
 * Request autosave data from the REST API.
 *
 * This resolver exists to ensure the underlying autosaves are fetched via
 * `getAutosaves` when a call to the `getAutosave` selector is made.
 *
 * @param {string} postType The type of the parent post.
 * @param {number} postId   The id of the parent post.
 */

function resolvers_getAutosave(postType, postId) {
  return external_this_regeneratorRuntime_default.a.wrap(function getAutosave$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return resolveSelect('getAutosaves', postType, postId);

        case 2:
        case "end":
          return _context10.stop();
      }
    }
  }, _marked10);
}

// EXTERNAL MODULE: external {"this":["wp","element"]}
var external_this_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: external {"this":["wp","blocks"]}
var external_this_wp_blocks_ = __webpack_require__(10);

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/entity-provider.js




function entity_provider_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function entity_provider_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { entity_provider_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { entity_provider_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



var entity_provider_entities = entity_provider_objectSpread({}, defaultEntities.reduce(function (acc, entity) {
  if (!acc[entity.kind]) {
    acc[entity.kind] = {};
  }

  acc[entity.kind][entity.name] = {
    context: Object(external_this_wp_element_["createContext"])()
  };
  return acc;
}, {}), {}, kinds.reduce(function (acc, kind) {
  acc[kind.name] = {};
  return acc;
}, {}));

var entity_provider_getEntity = function getEntity(kind, type) {
  if (!entity_provider_entities[kind]) {
    throw new Error("Missing entity config for kind: ".concat(kind, "."));
  }

  if (!entity_provider_entities[kind][type]) {
    entity_provider_entities[kind][type] = {
      context: Object(external_this_wp_element_["createContext"])()
    };
  }

  return entity_provider_entities[kind][type];
};
/**
 * Context provider component for providing
 * an entity for a specific entity type.
 *
 * @param {Object} props          The component's props.
 * @param {string} props.kind     The entity kind.
 * @param {string} props.type     The entity type.
 * @param {number} props.id       The entity ID.
 * @param {*}      props.children The children to wrap.
 *
 * @return {Object} The provided children, wrapped with
 *                   the entity's context provider.
 */


function EntityProvider(_ref) {
  var kind = _ref.kind,
      type = _ref.type,
      id = _ref.id,
      children = _ref.children;
  var Provider = entity_provider_getEntity(kind, type).context.Provider;
  return Object(external_this_wp_element_["createElement"])(Provider, {
    value: id
  }, children);
}
/**
 * Hook that returns the ID for the nearest
 * provided entity of the specified type.
 *
 * @param {string} kind The entity kind.
 * @param {string} type The entity type.
 */

function useEntityId(kind, type) {
  return Object(external_this_wp_element_["useContext"])(entity_provider_getEntity(kind, type).context);
}
/**
 * Hook that returns the value and a setter for the
 * specified property of the nearest provided
 * entity of the specified type.
 *
 * @param {string} kind The entity kind.
 * @param {string} type The entity type.
 * @param {string} prop The property name.
 *
 * @return {[*, Function]} A tuple where the first item is the
 *                          property value and the second is the
 *                          setter.
 */

function useEntityProp(kind, type, prop) {
  var id = useEntityId(kind, type);
  var value = Object(external_this_wp_data_["useSelect"])(function (select) {
    var _select = select('core'),
        getEntityRecord = _select.getEntityRecord,
        getEditedEntityRecord = _select.getEditedEntityRecord;

    getEntityRecord(kind, type, id); // Trigger resolver.

    var entity = getEditedEntityRecord(kind, type, id);
    return entity && entity[prop];
  }, [kind, type, id, prop]);

  var _useDispatch = Object(external_this_wp_data_["useDispatch"])('core'),
      editEntityRecord = _useDispatch.editEntityRecord;

  var setValue = Object(external_this_wp_element_["useCallback"])(function (newValue) {
    editEntityRecord(kind, type, id, Object(defineProperty["a" /* default */])({}, prop, newValue));
  }, [kind, type, id, prop]);
  return [value, setValue];
}
/**
 * Hook that returns block content getters and setters for
 * the nearest provided entity of the specified type.
 *
 * The return value has the shape `[ blocks, onInput, onChange ]`.
 * `onInput` is for block changes that don't create undo levels
 * or dirty the post, non-persistent changes, and `onChange` is for
 * peristent changes. They map directly to the props of a
 * `BlockEditorProvider` and are intended to be used with it,
 * or similar components or hooks.
 *
 * @param {string} kind                            The entity kind.
 * @param {string} type                            The entity type.
 * @param {Object} options
 * @param {Object} [options.initialEdits]          Initial edits object for the entity record.
 * @param {string} [options.blocksProp='blocks']   The name of the entity prop that holds the blocks array.
 * @param {string} [options.contentProp='content'] The name of the entity prop that holds the serialized blocks.
 *
 * @return {[WPBlock[], Function, Function]} The block array and setters.
 */

function useEntityBlockEditor(kind, type) {
  var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      initialEdits = _ref2.initialEdits,
      _ref2$blocksProp = _ref2.blocksProp,
      blocksProp = _ref2$blocksProp === void 0 ? 'blocks' : _ref2$blocksProp,
      _ref2$contentProp = _ref2.contentProp,
      contentProp = _ref2$contentProp === void 0 ? 'content' : _ref2$contentProp;

  var _useEntityProp = useEntityProp(kind, type, contentProp),
      _useEntityProp2 = Object(slicedToArray["a" /* default */])(_useEntityProp, 2),
      content = _useEntityProp2[0],
      setContent = _useEntityProp2[1];

  var _useDispatch2 = Object(external_this_wp_data_["useDispatch"])('core'),
      editEntityRecord = _useDispatch2.editEntityRecord;

  var id = useEntityId(kind, type);
  var initialBlocks = Object(external_this_wp_element_["useMemo"])(function () {
    if (initialEdits) {
      editEntityRecord(kind, type, id, initialEdits, {
        undoIgnore: true
      });
    } // Guard against other instances that might have
    // set content to a function already.


    if (typeof content !== 'function') {
      var parsedContent = Object(external_this_wp_blocks_["parse"])(content);
      return parsedContent.length ? parsedContent : [];
    }
  }, [id]); // Reset when the provided entity record changes.

  var _useEntityProp3 = useEntityProp(kind, type, blocksProp),
      _useEntityProp4 = Object(slicedToArray["a" /* default */])(_useEntityProp3, 2),
      _useEntityProp4$ = _useEntityProp4[0],
      blocks = _useEntityProp4$ === void 0 ? initialBlocks : _useEntityProp4$,
      onInput = _useEntityProp4[1];

  var onChange = Object(external_this_wp_element_["useCallback"])(function (nextBlocks) {
    onInput(nextBlocks); // Use a function edit to avoid serializing often.

    setContent(function (_ref3) {
      var blocksToSerialize = _ref3.blocks;
      return Object(external_this_wp_blocks_["serialize"])(blocksToSerialize);
    });
  }, [onInput, setContent]);
  return [blocks, onInput, onChange];
}

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/index.js
/* concated harmony reexport EntityProvider */__webpack_require__.d(__webpack_exports__, "EntityProvider", function() { return EntityProvider; });
/* concated harmony reexport useEntityId */__webpack_require__.d(__webpack_exports__, "useEntityId", function() { return useEntityId; });
/* concated harmony reexport useEntityProp */__webpack_require__.d(__webpack_exports__, "useEntityProp", function() { return useEntityProp; });
/* concated harmony reexport useEntityBlockEditor */__webpack_require__.d(__webpack_exports__, "useEntityBlockEditor", function() { return useEntityBlockEditor; });


function build_module_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function build_module_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { build_module_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { build_module_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */







 // The entity selectors/resolvers and actions are shortcuts to their generic equivalents
// (getEntityRecord, getEntityRecords, updateEntityRecord, updateEntityRecordss)
// Instead of getEntityRecord, the consumer could use more user-frieldly named selector: getPostType, getTaxonomy...
// The "kind" and the "name" of the entity are combined to generate these shortcuts.

var entitySelectors = defaultEntities.reduce(function (result, entity) {
  var kind = entity.kind,
      name = entity.name;

  result[entities_getMethodName(kind, name)] = function (state, key) {
    return getEntityRecord(state, kind, name, key);
  };

  result[entities_getMethodName(kind, name, 'get', true)] = function (state) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return getEntityRecords.apply(build_module_selectors_namespaceObject, [state, kind, name].concat(args));
  };

  return result;
}, {});
var entityResolvers = defaultEntities.reduce(function (result, entity) {
  var kind = entity.kind,
      name = entity.name;

  result[entities_getMethodName(kind, name)] = function (key) {
    return resolvers_getEntityRecord(kind, name, key);
  };

  var pluralMethodName = entities_getMethodName(kind, name, 'get', true);

  result[pluralMethodName] = function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return resolvers_getEntityRecords.apply(resolvers_namespaceObject, [kind, name].concat(args));
  };

  result[pluralMethodName].shouldInvalidate = function (action) {
    var _resolvers$getEntityR;

    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }

    return (_resolvers$getEntityR = resolvers_getEntityRecords).shouldInvalidate.apply(_resolvers$getEntityR, [action, kind, name].concat(args));
  };

  return result;
}, {});
var entityActions = defaultEntities.reduce(function (result, entity) {
  var kind = entity.kind,
      name = entity.name;

  result[entities_getMethodName(kind, name, 'save')] = function (key) {
    return saveEntityRecord(kind, name, key);
  };

  return result;
}, {});
Object(external_this_wp_data_["registerStore"])(REDUCER_KEY, {
  reducer: build_module_reducer,
  controls: build_module_controls,
  actions: build_module_objectSpread({}, build_module_actions_namespaceObject, {}, entityActions),
  selectors: build_module_objectSpread({}, build_module_selectors_namespaceObject, {}, entitySelectors),
  resolvers: build_module_objectSpread({}, resolvers_namespaceObject, {}, entityResolvers)
});




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

/***/ 51:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["isShallowEqual"]; }());

/***/ }),

/***/ 64:
=======
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/rng.js
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/regex.js
/* harmony default export */ var regex = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/validate.js


function validate(uuid) {
  return typeof uuid === 'string' && regex.test(uuid);
}

/* harmony default export */ var esm_browser_validate = (validate);
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/stringify.js

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var stringify_i = 0; stringify_i < 256; ++stringify_i) {
  byteToHex.push((stringify_i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!esm_browser_validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ var esm_browser_stringify = (stringify);
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/v4.js



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return esm_browser_stringify(rnds);
}

/* harmony default export */ var esm_browser_v4 = __webpack_exports__["a"] = (v4);

/***/ }),

/***/ "FtRg":
>>>>>>> master
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


<<<<<<< HEAD
=======
/***/ }),

/***/ "GRId":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "HSyU":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "Mmq9":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["url"]; }());

/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

(function() { module.exports = window["lodash"]; }());

/***/ }),

/***/ "dsJ0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "store", function() { return /* binding */ build_module_store; });
__webpack_require__.d(__webpack_exports__, "EntityProvider", function() { return /* reexport */ EntityProvider; });
__webpack_require__.d(__webpack_exports__, "useEntityId", function() { return /* reexport */ useEntityId; });
__webpack_require__.d(__webpack_exports__, "useEntityProp", function() { return /* reexport */ useEntityProp; });
__webpack_require__.d(__webpack_exports__, "useEntityBlockEditor", function() { return /* reexport */ useEntityBlockEditor; });
__webpack_require__.d(__webpack_exports__, "__experimentalFetchLinkSuggestions", function() { return /* reexport */ _experimental_fetch_link_suggestions; });
__webpack_require__.d(__webpack_exports__, "__experimentalFetchRemoteUrlData", function() { return /* reexport */ _experimental_fetch_remote_url_data; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/core-data/build-module/locks/actions.js
var locks_actions_namespaceObject = {};
__webpack_require__.r(locks_actions_namespaceObject);
__webpack_require__.d(locks_actions_namespaceObject, "__unstableAcquireStoreLock", function() { return __unstableAcquireStoreLock; });
__webpack_require__.d(locks_actions_namespaceObject, "__unstableEnqueueLockRequest", function() { return __unstableEnqueueLockRequest; });
__webpack_require__.d(locks_actions_namespaceObject, "__unstableReleaseStoreLock", function() { return __unstableReleaseStoreLock; });
__webpack_require__.d(locks_actions_namespaceObject, "__unstableProcessPendingLockRequests", function() { return __unstableProcessPendingLockRequests; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/core-data/build-module/actions.js
var build_module_actions_namespaceObject = {};
__webpack_require__.r(build_module_actions_namespaceObject);
__webpack_require__.d(build_module_actions_namespaceObject, "receiveUserQuery", function() { return receiveUserQuery; });
__webpack_require__.d(build_module_actions_namespaceObject, "receiveCurrentUser", function() { return receiveCurrentUser; });
__webpack_require__.d(build_module_actions_namespaceObject, "addEntities", function() { return addEntities; });
__webpack_require__.d(build_module_actions_namespaceObject, "receiveEntityRecords", function() { return receiveEntityRecords; });
__webpack_require__.d(build_module_actions_namespaceObject, "receiveCurrentTheme", function() { return receiveCurrentTheme; });
__webpack_require__.d(build_module_actions_namespaceObject, "receiveThemeSupports", function() { return receiveThemeSupports; });
__webpack_require__.d(build_module_actions_namespaceObject, "receiveEmbedPreview", function() { return receiveEmbedPreview; });
__webpack_require__.d(build_module_actions_namespaceObject, "deleteEntityRecord", function() { return deleteEntityRecord; });
__webpack_require__.d(build_module_actions_namespaceObject, "editEntityRecord", function() { return actions_editEntityRecord; });
__webpack_require__.d(build_module_actions_namespaceObject, "undo", function() { return undo; });
__webpack_require__.d(build_module_actions_namespaceObject, "redo", function() { return redo; });
__webpack_require__.d(build_module_actions_namespaceObject, "__unstableCreateUndoLevel", function() { return actions_unstableCreateUndoLevel; });
__webpack_require__.d(build_module_actions_namespaceObject, "saveEntityRecord", function() { return saveEntityRecord; });
__webpack_require__.d(build_module_actions_namespaceObject, "__experimentalBatch", function() { return __experimentalBatch; });
__webpack_require__.d(build_module_actions_namespaceObject, "saveEditedEntityRecord", function() { return saveEditedEntityRecord; });
__webpack_require__.d(build_module_actions_namespaceObject, "__experimentalSaveSpecifiedEntityEdits", function() { return __experimentalSaveSpecifiedEntityEdits; });
__webpack_require__.d(build_module_actions_namespaceObject, "receiveUploadPermissions", function() { return receiveUploadPermissions; });
__webpack_require__.d(build_module_actions_namespaceObject, "receiveUserPermission", function() { return receiveUserPermission; });
__webpack_require__.d(build_module_actions_namespaceObject, "receiveAutosaves", function() { return receiveAutosaves; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/core-data/build-module/selectors.js
var build_module_selectors_namespaceObject = {};
__webpack_require__.r(build_module_selectors_namespaceObject);
__webpack_require__.d(build_module_selectors_namespaceObject, "isRequestingEmbedPreview", function() { return isRequestingEmbedPreview; });
__webpack_require__.d(build_module_selectors_namespaceObject, "getAuthors", function() { return getAuthors; });
__webpack_require__.d(build_module_selectors_namespaceObject, "__unstableGetAuthor", function() { return __unstableGetAuthor; });
__webpack_require__.d(build_module_selectors_namespaceObject, "getCurrentUser", function() { return getCurrentUser; });
__webpack_require__.d(build_module_selectors_namespaceObject, "getUserQueryResults", function() { return getUserQueryResults; });
__webpack_require__.d(build_module_selectors_namespaceObject, "getEntitiesByKind", function() { return getEntitiesByKind; });
__webpack_require__.d(build_module_selectors_namespaceObject, "getEntity", function() { return getEntity; });
__webpack_require__.d(build_module_selectors_namespaceObject, "getEntityRecord", function() { return getEntityRecord; });
__webpack_require__.d(build_module_selectors_namespaceObject, "__experimentalGetEntityRecordNoResolver", function() { return __experimentalGetEntityRecordNoResolver; });
__webpack_require__.d(build_module_selectors_namespaceObject, "getRawEntityRecord", function() { return getRawEntityRecord; });
__webpack_require__.d(build_module_selectors_namespaceObject, "hasEntityRecords", function() { return hasEntityRecords; });
__webpack_require__.d(build_module_selectors_namespaceObject, "getEntityRecords", function() { return getEntityRecords; });
__webpack_require__.d(build_module_selectors_namespaceObject, "__experimentalGetDirtyEntityRecords", function() { return __experimentalGetDirtyEntityRecords; });
__webpack_require__.d(build_module_selectors_namespaceObject, "getEntityRecordEdits", function() { return getEntityRecordEdits; });
__webpack_require__.d(build_module_selectors_namespaceObject, "getEntityRecordNonTransientEdits", function() { return getEntityRecordNonTransientEdits; });
__webpack_require__.d(build_module_selectors_namespaceObject, "hasEditsForEntityRecord", function() { return hasEditsForEntityRecord; });
__webpack_require__.d(build_module_selectors_namespaceObject, "getEditedEntityRecord", function() { return getEditedEntityRecord; });
__webpack_require__.d(build_module_selectors_namespaceObject, "isAutosavingEntityRecord", function() { return isAutosavingEntityRecord; });
__webpack_require__.d(build_module_selectors_namespaceObject, "isSavingEntityRecord", function() { return isSavingEntityRecord; });
__webpack_require__.d(build_module_selectors_namespaceObject, "isDeletingEntityRecord", function() { return isDeletingEntityRecord; });
__webpack_require__.d(build_module_selectors_namespaceObject, "getLastEntitySaveError", function() { return getLastEntitySaveError; });
__webpack_require__.d(build_module_selectors_namespaceObject, "getLastEntityDeleteError", function() { return getLastEntityDeleteError; });
__webpack_require__.d(build_module_selectors_namespaceObject, "getUndoEdit", function() { return getUndoEdit; });
__webpack_require__.d(build_module_selectors_namespaceObject, "getRedoEdit", function() { return getRedoEdit; });
__webpack_require__.d(build_module_selectors_namespaceObject, "hasUndo", function() { return hasUndo; });
__webpack_require__.d(build_module_selectors_namespaceObject, "hasRedo", function() { return hasRedo; });
__webpack_require__.d(build_module_selectors_namespaceObject, "getCurrentTheme", function() { return getCurrentTheme; });
__webpack_require__.d(build_module_selectors_namespaceObject, "getThemeSupports", function() { return getThemeSupports; });
__webpack_require__.d(build_module_selectors_namespaceObject, "getEmbedPreview", function() { return getEmbedPreview; });
__webpack_require__.d(build_module_selectors_namespaceObject, "isPreviewEmbedFallback", function() { return isPreviewEmbedFallback; });
__webpack_require__.d(build_module_selectors_namespaceObject, "canUser", function() { return canUser; });
__webpack_require__.d(build_module_selectors_namespaceObject, "canUserEditEntityRecord", function() { return canUserEditEntityRecord; });
__webpack_require__.d(build_module_selectors_namespaceObject, "getAutosaves", function() { return getAutosaves; });
__webpack_require__.d(build_module_selectors_namespaceObject, "getAutosave", function() { return getAutosave; });
__webpack_require__.d(build_module_selectors_namespaceObject, "hasFetchedAutosaves", function() { return hasFetchedAutosaves; });
__webpack_require__.d(build_module_selectors_namespaceObject, "getReferenceByDistinctEdits", function() { return getReferenceByDistinctEdits; });
__webpack_require__.d(build_module_selectors_namespaceObject, "__experimentalGetTemplateForLink", function() { return __experimentalGetTemplateForLink; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/core-data/build-module/resolvers.js
var resolvers_namespaceObject = {};
__webpack_require__.r(resolvers_namespaceObject);
__webpack_require__.d(resolvers_namespaceObject, "getAuthors", function() { return resolvers_getAuthors; });
__webpack_require__.d(resolvers_namespaceObject, "__unstableGetAuthor", function() { return resolvers_unstableGetAuthor; });
__webpack_require__.d(resolvers_namespaceObject, "getCurrentUser", function() { return resolvers_getCurrentUser; });
__webpack_require__.d(resolvers_namespaceObject, "getEntityRecord", function() { return resolvers_getEntityRecord; });
__webpack_require__.d(resolvers_namespaceObject, "getRawEntityRecord", function() { return resolvers_getRawEntityRecord; });
__webpack_require__.d(resolvers_namespaceObject, "getEditedEntityRecord", function() { return resolvers_getEditedEntityRecord; });
__webpack_require__.d(resolvers_namespaceObject, "getEntityRecords", function() { return resolvers_getEntityRecords; });
__webpack_require__.d(resolvers_namespaceObject, "getCurrentTheme", function() { return resolvers_getCurrentTheme; });
__webpack_require__.d(resolvers_namespaceObject, "getThemeSupports", function() { return resolvers_getThemeSupports; });
__webpack_require__.d(resolvers_namespaceObject, "getEmbedPreview", function() { return resolvers_getEmbedPreview; });
__webpack_require__.d(resolvers_namespaceObject, "canUser", function() { return resolvers_canUser; });
__webpack_require__.d(resolvers_namespaceObject, "canUserEditEntityRecord", function() { return resolvers_canUserEditEntityRecord; });
__webpack_require__.d(resolvers_namespaceObject, "getAutosaves", function() { return resolvers_getAutosaves; });
__webpack_require__.d(resolvers_namespaceObject, "getAutosave", function() { return resolvers_getAutosave; });
__webpack_require__.d(resolvers_namespaceObject, "__experimentalGetTemplateForLink", function() { return resolvers_experimentalGetTemplateForLink; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/core-data/build-module/locks/selectors.js
var locks_selectors_namespaceObject = {};
__webpack_require__.r(locks_selectors_namespaceObject);
__webpack_require__.d(locks_selectors_namespaceObject, "__unstableGetPendingLockRequests", function() { return __unstableGetPendingLockRequests; });
__webpack_require__.d(locks_selectors_namespaceObject, "__unstableIsLockAvailable", function() { return __unstableIsLockAvailable; });

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__("1ZqX");

// EXTERNAL MODULE: external ["wp","dataControls"]
var external_wp_dataControls_ = __webpack_require__("51Zz");

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");

// EXTERNAL MODULE: external ["wp","isShallowEqual"]
var external_wp_isShallowEqual_ = __webpack_require__("rl8x");
var external_wp_isShallowEqual_default = /*#__PURE__*/__webpack_require__.n(external_wp_isShallowEqual_);

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/utils/if-matching-action.js
/**
 * A higher-order reducer creator which invokes the original reducer only if
 * the dispatching action matches the given predicate, **OR** if state is
 * initializing (undefined).
 *
 * @param {Function} isMatch Function predicate for allowing reducer call.
 *
 * @return {Function} Higher-order reducer.
 */
const ifMatchingAction = isMatch => reducer => (state, action) => {
  if (state === undefined || isMatch(action)) {
    return reducer(state, action);
  }

  return state;
};

/* harmony default export */ var if_matching_action = (ifMatchingAction);

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/utils/replace-action.js
/**
 * Higher-order reducer creator which substitutes the action object before
 * passing to the original reducer.
 *
 * @param {Function} replacer Function mapping original action to replacement.
 *
 * @return {Function} Higher-order reducer.
 */
const replaceAction = replacer => reducer => (state, action) => {
  return reducer(state, replacer(action));
};

/* harmony default export */ var replace_action = (replaceAction);

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/utils/conservative-map-item.js
/**
 * External dependencies
 */

/**
 * Given the current and next item entity, returns the minimally "modified"
 * result of the next item, preferring value references from the original item
 * if equal. If all values match, the original item is returned.
 *
 * @param {Object} item     Original item.
 * @param {Object} nextItem Next item.
 *
 * @return {Object} Minimally modified merged item.
 */

function conservativeMapItem(item, nextItem) {
  // Return next item in its entirety if there is no original item.
  if (!item) {
    return nextItem;
  }

  let hasChanges = false;
  const result = {};

  for (const key in nextItem) {
    if (Object(external_lodash_["isEqual"])(item[key], nextItem[key])) {
      result[key] = item[key];
    } else {
      hasChanges = true;
      result[key] = nextItem[key];
    }
  }

  if (!hasChanges) {
    return item;
  } // Only at this point, backfill properties from the original item which
  // weren't explicitly set into the result above. This is an optimization
  // to allow `hasChanges` to return early.


  for (const key in item) {
    if (!result.hasOwnProperty(key)) {
      result[key] = item[key];
    }
  }

  return result;
}

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/utils/on-sub-key.js
/**
 * Higher-order reducer creator which creates a combined reducer object, keyed
 * by a property on the action object.
 *
 * @param {string} actionProperty Action property by which to key object.
 *
 * @return {Function} Higher-order reducer.
 */
const onSubKey = actionProperty => reducer => (state = {}, action) => {
  // Retrieve subkey from action. Do not track if undefined; useful for cases
  // where reducer is scoped by action shape.
  const key = action[actionProperty];

  if (key === undefined) {
    return state;
  } // Avoid updating state if unchanged. Note that this also accounts for a
  // reducer which returns undefined on a key which is not yet tracked.


  const nextKeyState = reducer(state[key], action);

  if (nextKeyState === state[key]) {
    return state;
  }

  return { ...state,
    [key]: nextKeyState
  };
};
/* harmony default export */ var on_sub_key = (onSubKey);

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__("l3Sj");

// EXTERNAL MODULE: ./node_modules/uuid/dist/esm-browser/v4.js + 4 modules
var v4 = __webpack_require__("7Cbv");

// EXTERNAL MODULE: external ["wp","url"]
var external_wp_url_ = __webpack_require__("Mmq9");

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/queried-data/actions.js
/**
 * External dependencies
 */

/**
 * Returns an action object used in signalling that items have been received.
 *
 * @param {Array}   items Items received.
 * @param {?Object} edits Optional edits to reset.
 *
 * @return {Object} Action object.
 */

function receiveItems(items, edits) {
  return {
    type: 'RECEIVE_ITEMS',
    items: Object(external_lodash_["castArray"])(items),
    persistedEdits: edits
  };
}
/**
 * Returns an action object used in signalling that entity records have been
 * deleted and they need to be removed from entities state.
 *
 * @param {string}       kind             Kind of the removed entities.
 * @param {string}       name             Name of the removed entities.
 * @param {Array|number} records          Record IDs of the removed entities.
 * @param {boolean}      invalidateCache  Controls whether we want to invalidate the cache.
 * @return {Object} Action object.
 */

function removeItems(kind, name, records, invalidateCache = false) {
  return {
    type: 'REMOVE_ITEMS',
    itemIds: Object(external_lodash_["castArray"])(records),
    kind,
    name,
    invalidateCache
  };
}
/**
 * Returns an action object used in signalling that queried data has been
 * received.
 *
 * @param {Array}   items Queried items received.
 * @param {?Object} query Optional query object.
 * @param {?Object} edits Optional edits to reset.
 *
 * @return {Object} Action object.
 */

function receiveQueriedItems(items, query = {}, edits) {
  return { ...receiveItems(items, edits),
    query
  };
}

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/locks/actions.js
/**
 * WordPress dependencies
 */


function* __unstableAcquireStoreLock(store, path, {
  exclusive
}) {
  const promise = yield* __unstableEnqueueLockRequest(store, path, {
    exclusive
  });
  yield* __unstableProcessPendingLockRequests();
  return yield Object(external_wp_dataControls_["__unstableAwaitPromise"])(promise);
}
function* __unstableEnqueueLockRequest(store, path, {
  exclusive
}) {
  let notifyAcquired;
  const promise = new Promise(resolve => {
    notifyAcquired = resolve;
  });
  yield {
    type: 'ENQUEUE_LOCK_REQUEST',
    request: {
      store,
      path,
      exclusive,
      notifyAcquired
    }
  };
  return promise;
}
function* __unstableReleaseStoreLock(lock) {
  yield {
    type: 'RELEASE_LOCK',
    lock
  };
  yield* __unstableProcessPendingLockRequests();
}
function* __unstableProcessPendingLockRequests() {
  yield {
    type: 'PROCESS_PENDING_LOCK_REQUESTS'
  };
  const lockRequests = yield external_wp_data_["controls"].select('core', '__unstableGetPendingLockRequests');

  for (const request of lockRequests) {
    const {
      store,
      path,
      exclusive,
      notifyAcquired
    } = request;
    const isAvailable = yield external_wp_data_["controls"].select('core', '__unstableIsLockAvailable', store, path, {
      exclusive
    });

    if (isAvailable) {
      const lock = {
        store,
        path,
        exclusive
      };
      yield {
        type: 'GRANT_LOCK_REQUEST',
        lock,
        request
      };
      notifyAcquired(lock);
    }
  }
}

// EXTERNAL MODULE: external ["wp","apiFetch"]
var external_wp_apiFetch_ = __webpack_require__("ywyh");
var external_wp_apiFetch_default = /*#__PURE__*/__webpack_require__.n(external_wp_apiFetch_);

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/batch/default-processor.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Maximum number of requests to place in a single batch request. Obtained by
 * sending a preflight OPTIONS request to /batch/v1/.
 *
 * @type {number?}
 */

let maxItems = null;
/**
 * Default batch processor. Sends its input requests to /batch/v1.
 *
 * @param {Array} requests List of API requests to perform at once.
 *
 * @return {Promise} Promise that resolves to a list of objects containing
 *                   either `output` (if that request was succesful) or `error`
 *                   (if not ).
 */

async function defaultProcessor(requests) {
  if (maxItems === null) {
    const preflightResponse = await external_wp_apiFetch_default()({
      path: '/batch/v1',
      method: 'OPTIONS'
    });
    maxItems = preflightResponse.endpoints[0].args.requests.maxItems;
  }

  const results = [];

  for (const batchRequests of Object(external_lodash_["chunk"])(requests, maxItems)) {
    const batchResponse = await external_wp_apiFetch_default()({
      path: '/batch/v1',
      method: 'POST',
      data: {
        validation: 'require-all-validate',
        requests: batchRequests.map(request => ({
          path: request.path,
          body: request.data,
          // Rename 'data' to 'body'.
          method: request.method,
          headers: request.headers
        }))
      }
    });
    let batchResults;

    if (batchResponse.failed) {
      batchResults = batchResponse.responses.map(response => ({
        error: response === null || response === void 0 ? void 0 : response.body
      }));
    } else {
      batchResults = batchResponse.responses.map(response => {
        const result = {};

        if (response.status >= 200 && response.status < 300) {
          result.output = response.body;
        } else {
          result.error = response.body;
        }

        return result;
      });
    }

    results.push(...batchResults);
  }

  return results;
}

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/batch/create-batch.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


/**
 * Creates a batch, which can be used to combine multiple API requests into one
 * API request using the WordPress batch processing API (/v1/batch).
 *
 * ```
 * const batch = createBatch();
 * const dunePromise = batch.add( {
 *   path: '/v1/books',
 *   method: 'POST',
 *   data: { title: 'Dune' }
 * } );
 * const lotrPromise = batch.add( {
 *   path: '/v1/books',
 *   method: 'POST',
 *   data: { title: 'Lord of the Rings' }
 * } );
 * const isSuccess = await batch.run(); // Sends one POST to /v1/batch.
 * if ( isSuccess ) {
 *   console.log(
 *     'Saved two books:',
 *     await dunePromise,
 *     await lotrPromise
 *   );
 * }
 * ```
 *
 * @param {Function} [processor] Processor function. Can be used to replace the
 *                               default functionality which is to send an API
 *                               request to /v1/batch. Is given an array of
 *                               inputs and must return a promise that
 *                               resolves to an array of objects containing
 *                               either `output` or `error`.
 */

function createBatch(processor = defaultProcessor) {
  let lastId = 0;
  let queue = [];
  const pending = new ObservableSet();
  return {
    /**
     * Adds an input to the batch and returns a promise that is resolved or
     * rejected when the input is processed by `batch.run()`.
     *
     * You may also pass a thunk which allows inputs to be added
     * asychronously.
     *
     * ```
     * // Both are allowed:
     * batch.add( { path: '/v1/books', ... } );
     * batch.add( ( add ) => add( { path: '/v1/books', ... } ) );
     * ```
     *
     * If a thunk is passed, `batch.run()` will pause until either:
     *
     * - The thunk calls its `add` argument, or;
     * - The thunk returns a promise and that promise resolves, or;
     * - The thunk returns a non-promise.
     *
     * @param {any|Function} inputOrThunk Input to add or thunk to execute.
     
     * @return {Promise|any} If given an input, returns a promise that
     *                       is resolved or rejected when the batch is
     *                       processed. If given a thunk, returns the return
     *                       value of that thunk.
     */
    add(inputOrThunk) {
      const id = ++lastId;
      pending.add(id);

      const add = input => new Promise((resolve, reject) => {
        queue.push({
          input,
          resolve,
          reject
        });
        pending.delete(id);
      });

      if (Object(external_lodash_["isFunction"])(inputOrThunk)) {
        return Promise.resolve(inputOrThunk(add)).finally(() => {
          pending.delete(id);
        });
      }

      return add(inputOrThunk);
    },

    /**
     * Runs the batch. This calls `batchProcessor` and resolves or rejects
     * all promises returned by `add()`.
     *
     * @return {Promise} A promise that resolves to a boolean that is true
     *                   if the processor returned no errors.
     */
    async run() {
      if (pending.size) {
        await new Promise(resolve => {
          const unsubscribe = pending.subscribe(() => {
            if (!pending.size) {
              unsubscribe();
              resolve();
            }
          });
        });
      }

      let results;

      try {
        results = await processor(queue.map(({
          input
        }) => input));

        if (results.length !== queue.length) {
          throw new Error('run: Array returned by processor must be same size as input array.');
        }
      } catch (error) {
        for (const {
          reject
        } of queue) {
          reject(error);
        }

        throw error;
      }

      let isSuccess = true;

      for (const [result, {
        resolve,
        reject
      }] of Object(external_lodash_["zip"])(results, queue)) {
        if (result !== null && result !== void 0 && result.error) {
          reject(result.error);
          isSuccess = false;
        } else {
          var _result$output;

          resolve((_result$output = result === null || result === void 0 ? void 0 : result.output) !== null && _result$output !== void 0 ? _result$output : result);
        }
      }

      queue = [];
      return isSuccess;
    }

  };
}

class ObservableSet {
  constructor(...args) {
    this.set = new Set(...args);
    this.subscribers = new Set();
  }

  get size() {
    return this.set.size;
  }

  add(...args) {
    this.set.add(...args);
    this.subscribers.forEach(subscriber => subscriber());
    return this;
  }

  delete(...args) {
    const isSuccess = this.set.delete(...args);
    this.subscribers.forEach(subscriber => subscriber());
    return isSuccess;
  }

  subscribe(subscriber) {
    this.subscribers.add(subscriber);
    return () => {
      this.subscribers.delete(subscriber);
    };
  }

}

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/controls.js
/**
 * WordPress dependencies
 */

function regularFetch(url) {
  return {
    type: 'REGULAR_FETCH',
    url
  };
}
function getDispatch() {
  return {
    type: 'GET_DISPATCH'
  };
}
const controls = {
  async REGULAR_FETCH({
    url
  }) {
    const {
      data
    } = await window.fetch(url).then(res => res.json());
    return data;
  },

  GET_DISPATCH: Object(external_wp_data_["createRegistryControl"])(({
    dispatch
  }) => () => dispatch)
};
/* harmony default export */ var build_module_controls = (controls);

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/actions.js
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
 * Returns an action object used in signalling that authors have been received.
 *
 * @param {string}       queryID Query ID.
 * @param {Array|Object} users   Users received.
 *
 * @return {Object} Action object.
 */

function receiveUserQuery(queryID, users) {
  return {
    type: 'RECEIVE_USER_QUERY',
    users: Object(external_lodash_["castArray"])(users),
    queryID
  };
}
/**
 * Returns an action used in signalling that the current user has been received.
 *
 * @param {Object} currentUser Current user object.
 *
 * @return {Object} Action object.
 */

function receiveCurrentUser(currentUser) {
  return {
    type: 'RECEIVE_CURRENT_USER',
    currentUser
  };
}
/**
 * Returns an action object used in adding new entities.
 *
 * @param {Array} entities  Entities received.
 *
 * @return {Object} Action object.
 */

function addEntities(entities) {
  return {
    type: 'ADD_ENTITIES',
    entities
  };
}
/**
 * Returns an action object used in signalling that entity records have been received.
 *
 * @param {string}       kind            Kind of the received entity.
 * @param {string}       name            Name of the received entity.
 * @param {Array|Object} records         Records received.
 * @param {?Object}      query           Query Object.
 * @param {?boolean}     invalidateCache Should invalidate query caches.
 * @param {?Object}      edits           Edits to reset.
 * @return {Object} Action object.
 */

function receiveEntityRecords(kind, name, records, query, invalidateCache = false, edits) {
  // Auto drafts should not have titles, but some plugins rely on them so we can't filter this
  // on the server.
  if (kind === 'postType') {
    records = Object(external_lodash_["castArray"])(records).map(record => record.status === 'auto-draft' ? { ...record,
      title: ''
    } : record);
  }

  let action;

  if (query) {
    action = receiveQueriedItems(records, query, edits);
  } else {
    action = receiveItems(records, edits);
  }

  return { ...action,
    kind,
    name,
    invalidateCache
  };
}
/**
 * Returns an action object used in signalling that the current theme has been received.
 *
 * @param {Object} currentTheme The current theme.
 *
 * @return {Object} Action object.
 */

function receiveCurrentTheme(currentTheme) {
  return {
    type: 'RECEIVE_CURRENT_THEME',
    currentTheme
  };
}
/**
 * Returns an action object used in signalling that the index has been received.
 *
 * @param {Object} themeSupports Theme support for the current theme.
 *
 * @return {Object} Action object.
 */

function receiveThemeSupports(themeSupports) {
  return {
    type: 'RECEIVE_THEME_SUPPORTS',
    themeSupports
  };
}
/**
 * Returns an action object used in signalling that the preview data for
 * a given URl has been received.
 *
 * @param {string}  url     URL to preview the embed for.
 * @param {*}       preview Preview data.
 *
 * @return {Object} Action object.
 */

function receiveEmbedPreview(url, preview) {
  return {
    type: 'RECEIVE_EMBED_PREVIEW',
    url,
    preview
  };
}
/**
 * Action triggered to delete an entity record.
 *
 * @param {string}   kind                      Kind of the deleted entity.
 * @param {string}   name                      Name of the deleted entity.
 * @param {string}   recordId                  Record ID of the deleted entity.
 * @param {?Object}  query                     Special query parameters for the
 *                                             DELETE API call.
 * @param {Object}   [options]                 Delete options.
 * @param {Function} [options.__unstableFetch] Internal use only. Function to
 *                                             call instead of `apiFetch()`.
 *                                             Must return a control descriptor.
 */

function* deleteEntityRecord(kind, name, recordId, query, {
  __unstableFetch = null
} = {}) {
  const entities = yield getKindEntities(kind);
  const entity = Object(external_lodash_["find"])(entities, {
    kind,
    name
  });
  let error;
  let deletedRecord = false;

  if (!entity) {
    return;
  }

  const lock = yield* __unstableAcquireStoreLock('core', ['entities', 'data', kind, name, recordId], {
    exclusive: true
  });

  try {
    yield {
      type: 'DELETE_ENTITY_RECORD_START',
      kind,
      name,
      recordId
    };

    try {
      let path = `${entity.baseURL}/${recordId}`;

      if (query) {
        path = Object(external_wp_url_["addQueryArgs"])(path, query);
      }

      const options = {
        path,
        method: 'DELETE'
      };

      if (__unstableFetch) {
        deletedRecord = yield Object(external_wp_dataControls_["__unstableAwaitPromise"])(__unstableFetch(options));
      } else {
        deletedRecord = yield Object(external_wp_dataControls_["apiFetch"])(options);
      }

      yield removeItems(kind, name, recordId, true);
    } catch (_error) {
      error = _error;
    }

    yield {
      type: 'DELETE_ENTITY_RECORD_FINISH',
      kind,
      name,
      recordId,
      error
    };
    return deletedRecord;
  } finally {
    yield* __unstableReleaseStoreLock(lock);
  }
}
/**
 * Returns an action object that triggers an
 * edit to an entity record.
 *
 * @param {string} kind     Kind of the edited entity record.
 * @param {string} name     Name of the edited entity record.
 * @param {number} recordId Record ID of the edited entity record.
 * @param {Object} edits    The edits.
 * @param {Object} options  Options for the edit.
 * @param {boolean} options.undoIgnore Whether to ignore the edit in undo history or not.
 *
 * @return {Object} Action object.
 */

function* actions_editEntityRecord(kind, name, recordId, edits, options = {}) {
  const entity = yield external_wp_data_["controls"].select('core', 'getEntity', kind, name);

  if (!entity) {
    throw new Error(`The entity being edited (${kind}, ${name}) does not have a loaded config.`);
  }

  const {
    transientEdits = {},
    mergedEdits = {}
  } = entity;
  const record = yield external_wp_data_["controls"].select('core', 'getRawEntityRecord', kind, name, recordId);
  const editedRecord = yield external_wp_data_["controls"].select('core', 'getEditedEntityRecord', kind, name, recordId);
  const edit = {
    kind,
    name,
    recordId,
    // Clear edits when they are equal to their persisted counterparts
    // so that the property is not considered dirty.
    edits: Object.keys(edits).reduce((acc, key) => {
      const recordValue = record[key];
      const editedRecordValue = editedRecord[key];
      const value = mergedEdits[key] ? { ...editedRecordValue,
        ...edits[key]
      } : edits[key];
      acc[key] = Object(external_lodash_["isEqual"])(recordValue, value) ? undefined : value;
      return acc;
    }, {}),
    transientEdits
  };
  return {
    type: 'EDIT_ENTITY_RECORD',
    ...edit,
    meta: {
      undo: !options.undoIgnore && { ...edit,
        // Send the current values for things like the first undo stack entry.
        edits: Object.keys(edits).reduce((acc, key) => {
          acc[key] = editedRecord[key];
          return acc;
        }, {})
      }
    }
  };
}
/**
 * Action triggered to undo the last edit to
 * an entity record, if any.
 */

function* undo() {
  const undoEdit = yield external_wp_data_["controls"].select('core', 'getUndoEdit');

  if (!undoEdit) {
    return;
  }

  yield {
    type: 'EDIT_ENTITY_RECORD',
    ...undoEdit,
    meta: {
      isUndo: true
    }
  };
}
/**
 * Action triggered to redo the last undoed
 * edit to an entity record, if any.
 */

function* redo() {
  const redoEdit = yield external_wp_data_["controls"].select('core', 'getRedoEdit');

  if (!redoEdit) {
    return;
  }

  yield {
    type: 'EDIT_ENTITY_RECORD',
    ...redoEdit,
    meta: {
      isRedo: true
    }
  };
}
/**
 * Forces the creation of a new undo level.
 *
 * @return {Object} Action object.
 */

function actions_unstableCreateUndoLevel() {
  return {
    type: 'CREATE_UNDO_LEVEL'
  };
}
/**
 * Action triggered to save an entity record.
 *
 * @param {string}   kind                       Kind of the received entity.
 * @param {string}   name                       Name of the received entity.
 * @param {Object}   record                     Record to be saved.
 * @param {Object}   options                    Saving options.
 * @param {boolean}  [options.isAutosave=false] Whether this is an autosave.
 * @param {Function} [options.__unstableFetch]  Internal use only. Function to
 *                                              call instead of `apiFetch()`.
 *                                              Must return a control
 *                                              descriptor.
 */

function* saveEntityRecord(kind, name, record, {
  isAutosave = false,
  __unstableFetch = null
} = {}) {
  const entities = yield getKindEntities(kind);
  const entity = Object(external_lodash_["find"])(entities, {
    kind,
    name
  });

  if (!entity) {
    return;
  }

  const entityIdKey = entity.key || DEFAULT_ENTITY_KEY;
  const recordId = record[entityIdKey];
  const lock = yield* __unstableAcquireStoreLock('core', ['entities', 'data', kind, name, recordId || Object(v4["a" /* default */])()], {
    exclusive: true
  });

  try {
    // Evaluate optimized edits.
    // (Function edits that should be evaluated on save to avoid expensive computations on every edit.)
    for (const [key, value] of Object.entries(record)) {
      if (typeof value === 'function') {
        const evaluatedValue = value(yield external_wp_data_["controls"].select('core', 'getEditedEntityRecord', kind, name, recordId));
        yield actions_editEntityRecord(kind, name, recordId, {
          [key]: evaluatedValue
        }, {
          undoIgnore: true
        });
        record[key] = evaluatedValue;
      }
    }

    yield {
      type: 'SAVE_ENTITY_RECORD_START',
      kind,
      name,
      recordId,
      isAutosave
    };
    let updatedRecord;
    let error;

    try {
      const path = `${entity.baseURL}${recordId ? '/' + recordId : ''}`;
      const persistedRecord = yield external_wp_data_["controls"].select('core', 'getRawEntityRecord', kind, name, recordId);

      if (isAutosave) {
        // Most of this autosave logic is very specific to posts.
        // This is fine for now as it is the only supported autosave,
        // but ideally this should all be handled in the back end,
        // so the client just sends and receives objects.
        const currentUser = yield external_wp_data_["controls"].select('core', 'getCurrentUser');
        const currentUserId = currentUser ? currentUser.id : undefined;
        const autosavePost = yield external_wp_data_["controls"].select('core', 'getAutosave', persistedRecord.type, persistedRecord.id, currentUserId); // Autosaves need all expected fields to be present.
        // So we fallback to the previous autosave and then
        // to the actual persisted entity if the edits don't
        // have a value.

        let data = { ...persistedRecord,
          ...autosavePost,
          ...record
        };
        data = Object.keys(data).reduce((acc, key) => {
          if (['title', 'excerpt', 'content'].includes(key)) {
            // Edits should be the "raw" attribute values.
            acc[key] = Object(external_lodash_["get"])(data[key], 'raw', data[key]);
          }

          return acc;
        }, {
          status: data.status === 'auto-draft' ? 'draft' : data.status
        });
        const options = {
          path: `${path}/autosaves`,
          method: 'POST',
          data
        };

        if (__unstableFetch) {
          updatedRecord = yield Object(external_wp_dataControls_["__unstableAwaitPromise"])(__unstableFetch(options));
        } else {
          updatedRecord = yield Object(external_wp_dataControls_["apiFetch"])(options);
        } // An autosave may be processed by the server as a regular save
        // when its update is requested by the author and the post had
        // draft or auto-draft status.


        if (persistedRecord.id === updatedRecord.id) {
          let newRecord = { ...persistedRecord,
            ...data,
            ...updatedRecord
          };
          newRecord = Object.keys(newRecord).reduce((acc, key) => {
            // These properties are persisted in autosaves.
            if (['title', 'excerpt', 'content'].includes(key)) {
              // Edits should be the "raw" attribute values.
              acc[key] = Object(external_lodash_["get"])(newRecord[key], 'raw', newRecord[key]);
            } else if (key === 'status') {
              // Status is only persisted in autosaves when going from
              // "auto-draft" to "draft".
              acc[key] = persistedRecord.status === 'auto-draft' && newRecord.status === 'draft' ? newRecord.status : persistedRecord.status;
            } else {
              // These properties are not persisted in autosaves.
              acc[key] = Object(external_lodash_["get"])(persistedRecord[key], 'raw', persistedRecord[key]);
            }

            return acc;
          }, {});
          yield receiveEntityRecords(kind, name, newRecord, undefined, true);
        } else {
          yield receiveAutosaves(persistedRecord.id, updatedRecord);
        }
      } else {
        let edits = record;

        if (entity.__unstablePrePersist) {
          edits = { ...edits,
            ...entity.__unstablePrePersist(persistedRecord, edits)
          };
        }

        const options = {
          path,
          method: recordId ? 'PUT' : 'POST',
          data: edits
        };

        if (__unstableFetch) {
          updatedRecord = yield Object(external_wp_dataControls_["__unstableAwaitPromise"])(__unstableFetch(options));
        } else {
          updatedRecord = yield Object(external_wp_dataControls_["apiFetch"])(options);
        }

        yield receiveEntityRecords(kind, name, updatedRecord, undefined, true, edits);
      }
    } catch (_error) {
      error = _error;
    }

    yield {
      type: 'SAVE_ENTITY_RECORD_FINISH',
      kind,
      name,
      recordId,
      error,
      isAutosave
    };
    return updatedRecord;
  } finally {
    yield* __unstableReleaseStoreLock(lock);
  }
}
/**
 * Runs multiple core-data actions at the same time using one API request.
 *
 * Example:
 *
 * ```
 * const [ savedRecord, updatedRecord, deletedRecord ] =
 *   await dispatch( 'core' ).__experimentalBatch( [
 *     ( { saveEntityRecord } ) => saveEntityRecord( 'root', 'widget', widget ),
 *     ( { saveEditedEntityRecord } ) => saveEntityRecord( 'root', 'widget', 123 ),
 *     ( { deleteEntityRecord } ) => deleteEntityRecord( 'root', 'widget', 123, null ),
 *   ] );
 * ```
 *
 * @param {Array} requests Array of functions which are invoked simultaneously.
 *                         Each function is passed an object containing
 *                         `saveEntityRecord`, `saveEditedEntityRecord`, and
 *                         `deleteEntityRecord`.
 *
 * @return {Promise} A promise that resolves to an array containing the return
 *                   values of each function given in `requests`.
 */

function* __experimentalBatch(requests) {
  const batch = createBatch();
  const dispatch = yield getDispatch();
  const api = {
    saveEntityRecord(kind, name, record, options) {
      return batch.add(add => dispatch('core').saveEntityRecord(kind, name, record, { ...options,
        __unstableFetch: add
      }));
    },

    saveEditedEntityRecord(kind, name, recordId, options) {
      return batch.add(add => dispatch('core').saveEditedEntityRecord(kind, name, recordId, { ...options,
        __unstableFetch: add
      }));
    },

    deleteEntityRecord(kind, name, recordId, query, options) {
      return batch.add(add => dispatch('core').deleteEntityRecord(kind, name, recordId, query, { ...options,
        __unstableFetch: add
      }));
    }

  };
  const resultPromises = requests.map(request => request(api));
  const [, ...results] = yield Object(external_wp_dataControls_["__unstableAwaitPromise"])(Promise.all([batch.run(), ...resultPromises]));
  return results;
}
/**
 * Action triggered to save an entity record's edits.
 *
 * @param {string} kind     Kind of the entity.
 * @param {string} name     Name of the entity.
 * @param {Object} recordId ID of the record.
 * @param {Object} options  Saving options.
 */

function* saveEditedEntityRecord(kind, name, recordId, options) {
  if (!(yield external_wp_data_["controls"].select('core', 'hasEditsForEntityRecord', kind, name, recordId))) {
    return;
  }

  const edits = yield external_wp_data_["controls"].select('core', 'getEntityRecordNonTransientEdits', kind, name, recordId);
  const record = {
    id: recordId,
    ...edits
  };
  return yield* saveEntityRecord(kind, name, record, options);
}
/**
 * Action triggered to save only specified properties for the entity.
 *
 * @param {string} kind     Kind of the entity.
 * @param {string} name     Name of the entity.
 * @param {Object} recordId ID of the record.
 * @param {Array} itemsToSave List of entity properties to save.
 * @param {Object} options  Saving options.
 */

function* __experimentalSaveSpecifiedEntityEdits(kind, name, recordId, itemsToSave, options) {
  if (!(yield external_wp_data_["controls"].select('core', 'hasEditsForEntityRecord', kind, name, recordId))) {
    return;
  }

  const edits = yield external_wp_data_["controls"].select('core', 'getEntityRecordNonTransientEdits', kind, name, recordId);
  const editsToSave = {};

  for (const edit in edits) {
    if (itemsToSave.some(item => item === edit)) {
      editsToSave[edit] = edits[edit];
    }
  }

  return yield* saveEntityRecord(kind, name, editsToSave, options);
}
/**
 * Returns an action object used in signalling that Upload permissions have been received.
 *
 * @param {boolean} hasUploadPermissions Does the user have permission to upload files?
 *
 * @return {Object} Action object.
 */

function receiveUploadPermissions(hasUploadPermissions) {
  return {
    type: 'RECEIVE_USER_PERMISSION',
    key: 'create/media',
    isAllowed: hasUploadPermissions
  };
}
/**
 * Returns an action object used in signalling that the current user has
 * permission to perform an action on a REST resource.
 *
 * @param {string}  key       A key that represents the action and REST resource.
 * @param {boolean} isAllowed Whether or not the user can perform the action.
 *
 * @return {Object} Action object.
 */

function receiveUserPermission(key, isAllowed) {
  return {
    type: 'RECEIVE_USER_PERMISSION',
    key,
    isAllowed
  };
}
/**
 * Returns an action object used in signalling that the autosaves for a
 * post have been received.
 *
 * @param {number}       postId    The id of the post that is parent to the autosave.
 * @param {Array|Object} autosaves An array of autosaves or singular autosave object.
 *
 * @return {Object} Action object.
 */

function receiveAutosaves(postId, autosaves) {
  return {
    type: 'RECEIVE_AUTOSAVES',
    postId,
    autosaves: Object(external_lodash_["castArray"])(autosaves)
  };
}

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/entities.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


const DEFAULT_ENTITY_KEY = 'id';
const defaultEntities = [{
  label: Object(external_wp_i18n_["__"])('Base'),
  name: '__unstableBase',
  kind: 'root',
  baseURL: ''
}, {
  label: Object(external_wp_i18n_["__"])('Site'),
  name: 'site',
  kind: 'root',
  baseURL: '/wp/v2/settings',
  getTitle: record => {
    return Object(external_lodash_["get"])(record, ['title'], Object(external_wp_i18n_["__"])('Site Title'));
  }
}, {
  label: Object(external_wp_i18n_["__"])('Post Type'),
  name: 'postType',
  kind: 'root',
  key: 'slug',
  baseURL: '/wp/v2/types',
  baseURLParams: {
    context: 'edit'
  }
}, {
  name: 'media',
  kind: 'root',
  baseURL: '/wp/v2/media',
  baseURLParams: {
    context: 'edit'
  },
  plural: 'mediaItems',
  label: Object(external_wp_i18n_["__"])('Media')
}, {
  name: 'taxonomy',
  kind: 'root',
  key: 'slug',
  baseURL: '/wp/v2/taxonomies',
  baseURLParams: {
    context: 'edit'
  },
  plural: 'taxonomies',
  label: Object(external_wp_i18n_["__"])('Taxonomy')
}, {
  name: 'sidebar',
  kind: 'root',
  baseURL: '/wp/v2/sidebars',
  plural: 'sidebars',
  transientEdits: {
    blocks: true
  },
  label: Object(external_wp_i18n_["__"])('Widget areas')
}, {
  name: 'widget',
  kind: 'root',
  baseURL: '/wp/v2/widgets',
  baseURLParams: {
    context: 'edit'
  },
  plural: 'widgets',
  transientEdits: {
    blocks: true
  },
  label: Object(external_wp_i18n_["__"])('Widgets')
}, {
  name: 'widgetType',
  kind: 'root',
  baseURL: '/wp/v2/widget-types',
  baseURLParams: {
    context: 'edit'
  },
  plural: 'widgetTypes',
  label: Object(external_wp_i18n_["__"])('Widget types')
}, {
  label: Object(external_wp_i18n_["__"])('User'),
  name: 'user',
  kind: 'root',
  baseURL: '/wp/v2/users',
  baseURLParams: {
    context: 'edit'
  },
  plural: 'users'
}, {
  name: 'comment',
  kind: 'root',
  baseURL: '/wp/v2/comments',
  baseURLParams: {
    context: 'edit'
  },
  plural: 'comments',
  label: Object(external_wp_i18n_["__"])('Comment')
}, {
  name: 'menu',
  kind: 'root',
  baseURL: '/__experimental/menus',
  baseURLParams: {
    context: 'edit'
  },
  plural: 'menus',
  label: Object(external_wp_i18n_["__"])('Menu')
}, {
  name: 'menuItem',
  kind: 'root',
  baseURL: '/__experimental/menu-items',
  baseURLParams: {
    context: 'edit'
  },
  plural: 'menuItems',
  label: Object(external_wp_i18n_["__"])('Menu Item')
}, {
  name: 'menuLocation',
  kind: 'root',
  baseURL: '/__experimental/menu-locations',
  baseURLParams: {
    context: 'edit'
  },
  plural: 'menuLocations',
  label: Object(external_wp_i18n_["__"])('Menu Location'),
  key: 'name'
}];
const kinds = [{
  name: 'postType',
  loadEntities: loadPostTypeEntities
}, {
  name: 'taxonomy',
  loadEntities: loadTaxonomyEntities
}];
/**
 * Returns a function to be used to retrieve extra edits to apply before persisting a post type.
 *
 * @param {Object} persistedRecord Already persisted Post
 * @param {Object} edits Edits.
 * @return {Object} Updated edits.
 */

const prePersistPostType = (persistedRecord, edits) => {
  const newEdits = {};

  if ((persistedRecord === null || persistedRecord === void 0 ? void 0 : persistedRecord.status) === 'auto-draft') {
    // Saving an auto-draft should create a draft by default.
    if (!edits.status && !newEdits.status) {
      newEdits.status = 'draft';
    } // Fix the auto-draft default title.


    if ((!edits.title || edits.title === 'Auto Draft') && !newEdits.title && (!(persistedRecord !== null && persistedRecord !== void 0 && persistedRecord.title) || (persistedRecord === null || persistedRecord === void 0 ? void 0 : persistedRecord.title) === 'Auto Draft')) {
      newEdits.title = '';
    }
  }

  return newEdits;
};
/**
 * Returns the list of post type entities.
 *
 * @return {Promise} Entities promise
 */

function* loadPostTypeEntities() {
  const postTypes = yield Object(external_wp_dataControls_["apiFetch"])({
    path: '/wp/v2/types?context=edit'
  });
  return Object(external_lodash_["map"])(postTypes, (postType, name) => {
    const isTemplate = ['wp_template', 'wp_template_part'].includes(name);
    return {
      kind: 'postType',
      baseURL: '/wp/v2/' + postType.rest_base,
      baseURLParams: {
        context: 'edit'
      },
      name,
      label: postType.labels.singular_name,
      transientEdits: {
        blocks: true,
        selection: true
      },
      mergedEdits: {
        meta: true
      },
      getTitle: record => {
        var _record$title;

        return (record === null || record === void 0 ? void 0 : (_record$title = record.title) === null || _record$title === void 0 ? void 0 : _record$title.rendered) || (record === null || record === void 0 ? void 0 : record.title) || (isTemplate ? Object(external_lodash_["startCase"])(record.slug) : String(record.id));
      },
      __unstablePrePersist: isTemplate ? undefined : prePersistPostType,
      __unstable_rest_base: postType.rest_base
    };
  });
}
/**
 * Returns the list of the taxonomies entities.
 *
 * @return {Promise} Entities promise
 */


function* loadTaxonomyEntities() {
  const taxonomies = yield Object(external_wp_dataControls_["apiFetch"])({
    path: '/wp/v2/taxonomies?context=edit'
  });
  return Object(external_lodash_["map"])(taxonomies, (taxonomy, name) => {
    return {
      kind: 'taxonomy',
      baseURL: '/wp/v2/' + taxonomy.rest_base,
      baseURLParams: {
        context: 'edit'
      },
      name,
      label: taxonomy.labels.singular_name
    };
  });
}
/**
 * Returns the entity's getter method name given its kind and name.
 *
 * @param {string}  kind      Entity kind.
 * @param {string}  name      Entity name.
 * @param {string}  prefix    Function prefix.
 * @param {boolean} usePlural Whether to use the plural form or not.
 *
 * @return {string} Method name
 */


const getMethodName = (kind, name, prefix = 'get', usePlural = false) => {
  const entity = Object(external_lodash_["find"])(defaultEntities, {
    kind,
    name
  });
  const kindPrefix = kind === 'root' ? '' : Object(external_lodash_["upperFirst"])(Object(external_lodash_["camelCase"])(kind));
  const nameSuffix = Object(external_lodash_["upperFirst"])(Object(external_lodash_["camelCase"])(name)) + (usePlural ? 's' : '');
  const suffix = usePlural && entity.plural ? Object(external_lodash_["upperFirst"])(Object(external_lodash_["camelCase"])(entity.plural)) : nameSuffix;
  return `${prefix}${kindPrefix}${suffix}`;
};
/**
 * Loads the kind entities into the store.
 *
 * @param {string} kind  Kind
 *
 * @return {Array} Entities
 */

function* getKindEntities(kind) {
  let entities = yield external_wp_data_["controls"].select('core', 'getEntitiesByKind', kind);

  if (entities && entities.length !== 0) {
    return entities;
  }

  const kindConfig = Object(external_lodash_["find"])(kinds, {
    name: kind
  });

  if (!kindConfig) {
    return [];
  }

  entities = yield kindConfig.loadEntities();
  yield addEntities(entities);
  return entities;
}

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/utils/get-normalized-comma-separable.js
/**
 * Given a value which can be specified as one or the other of a comma-separated
 * string or an array, returns a value normalized to an array of strings, or
 * null if the value cannot be interpreted as either.
 *
 * @param {string|string[]|*} value
 *
 * @return {?(string[])} Normalized field value.
 */
function getNormalizedCommaSeparable(value) {
  if (typeof value === 'string') {
    return value.split(',');
  } else if (Array.isArray(value)) {
    return value;
  }

  return null;
}

/* harmony default export */ var get_normalized_comma_separable = (getNormalizedCommaSeparable);

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/utils/with-weak-map-cache.js
/**
 * External dependencies
 */

/**
 * Given a function, returns an enhanced function which caches the result and
 * tracks in WeakMap. The result is only cached if the original function is
 * passed a valid object-like argument (requirement for WeakMap key).
 *
 * @param {Function} fn Original function.
 *
 * @return {Function} Enhanced caching function.
 */

function withWeakMapCache(fn) {
  const cache = new WeakMap();
  return key => {
    let value;

    if (cache.has(key)) {
      value = cache.get(key);
    } else {
      value = fn(key); // Can reach here if key is not valid for WeakMap, since `has`
      // will return false for invalid key. Since `set` will throw,
      // ensure that key is valid before setting into cache.

      if (Object(external_lodash_["isObjectLike"])(key)) {
        cache.set(key, value);
      }
    }

    return value;
  };
}

/* harmony default export */ var with_weak_map_cache = (withWeakMapCache);

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/queried-data/get-query-parts.js
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


/**
 * An object of properties describing a specific query.
 *
 * @typedef {Object} WPQueriedDataQueryParts
 *
 * @property {number}      page      The query page (1-based index, default 1).
 * @property {number}      perPage   Items per page for query (default 10).
 * @property {string}      stableKey An encoded stable string of all non-
 *                                   pagination, non-fields query parameters.
 * @property {?(string[])} fields    Target subset of fields to derive from
 *                                   item objects.
 * @property {?(number[])} include   Specific item IDs to include.
 */

/**
 * Given a query object, returns an object of parts, including pagination
 * details (`page` and `perPage`, or default values). All other properties are
 * encoded into a stable (idempotent) `stableKey` value.
 *
 * @param {Object} query Optional query object.
 *
 * @return {WPQueriedDataQueryParts} Query parts.
 */

function getQueryParts(query) {
  /**
   * @type {WPQueriedDataQueryParts}
   */
  const parts = {
    stableKey: '',
    page: 1,
    perPage: 10,
    fields: null,
    include: null,
    context: 'default'
  }; // Ensure stable key by sorting keys. Also more efficient for iterating.

  const keys = Object.keys(query).sort();

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    let value = query[key];

    switch (key) {
      case 'page':
        parts[key] = Number(value);
        break;

      case 'per_page':
        parts.perPage = Number(value);
        break;

      case 'include':
        parts.include = get_normalized_comma_separable(value).map(Number);
        break;

      case 'context':
        parts.context = value;
        break;

      default:
        // While in theory, we could exclude "_fields" from the stableKey
        // because two request with different fields have the same results
        // We're not able to ensure that because the server can decide to omit
        // fields from the response even if we explicitely asked for it.
        // Example: Asking for titles in posts without title support.
        if (key === '_fields') {
          parts.fields = get_normalized_comma_separable(value); // Make sure to normalize value for `stableKey`

          value = parts.fields.join();
        } // While it could be any deterministic string, for simplicity's
        // sake mimic querystring encoding for stable key.
        //
        // TODO: For consistency with PHP implementation, addQueryArgs
        // should accept a key value pair, which may optimize its
        // implementation for our use here, vs. iterating an object
        // with only a single key.


        parts.stableKey += (parts.stableKey ? '&' : '') + Object(external_wp_url_["addQueryArgs"])('', {
          [key]: value
        }).slice(1);
    }
  }

  return parts;
}
/* harmony default export */ var get_query_parts = (with_weak_map_cache(getQueryParts));

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/queried-data/reducer.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */





function getContextFromAction(action) {
  const {
    query
  } = action;

  if (!query) {
    return 'default';
  }

  const queryParts = get_query_parts(query);
  return queryParts.context;
}
/**
 * Returns a merged array of item IDs, given details of the received paginated
 * items. The array is sparse-like with `undefined` entries where holes exist.
 *
 * @param {?Array<number>} itemIds     Original item IDs (default empty array).
 * @param {number[]}       nextItemIds Item IDs to merge.
 * @param {number}         page        Page of items merged.
 * @param {number}         perPage     Number of items per page.
 *
 * @return {number[]} Merged array of item IDs.
 */


function getMergedItemIds(itemIds, nextItemIds, page, perPage) {
  const receivedAllIds = page === 1 && perPage === -1;

  if (receivedAllIds) {
    return nextItemIds;
  }

  const nextItemIdsStartIndex = (page - 1) * perPage; // If later page has already been received, default to the larger known
  // size of the existing array, else calculate as extending the existing.

  const size = Math.max(itemIds.length, nextItemIdsStartIndex + nextItemIds.length); // Preallocate array since size is known.

  const mergedItemIds = new Array(size);

  for (let i = 0; i < size; i++) {
    // Preserve existing item ID except for subset of range of next items.
    const isInNextItemsRange = i >= nextItemIdsStartIndex && i < nextItemIdsStartIndex + nextItemIds.length;
    mergedItemIds[i] = isInNextItemsRange ? nextItemIds[i - nextItemIdsStartIndex] : itemIds[i];
  }

  return mergedItemIds;
}
/**
 * Reducer tracking items state, keyed by ID. Items are assumed to be normal,
 * where identifiers are common across all queries.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Next state.
 */

function reducer_items(state = {}, action) {
  switch (action.type) {
    case 'RECEIVE_ITEMS':
      {
        const context = getContextFromAction(action);
        const key = action.key || DEFAULT_ENTITY_KEY;
        return { ...state,
          [context]: { ...state[context],
            ...action.items.reduce((accumulator, value) => {
              var _state$context;

              const itemId = value[key];
              accumulator[itemId] = conservativeMapItem(state === null || state === void 0 ? void 0 : (_state$context = state[context]) === null || _state$context === void 0 ? void 0 : _state$context[itemId], value);
              return accumulator;
            }, {})
          }
        };
      }

    case 'REMOVE_ITEMS':
      return Object(external_lodash_["mapValues"])(state, contextState => Object(external_lodash_["omit"])(contextState, action.itemIds));
  }

  return state;
}
/**
 * Reducer tracking item completeness, keyed by ID. A complete item is one for
 * which all fields are known. This is used in supporting `_fields` queries,
 * where not all properties associated with an entity are necessarily returned.
 * In such cases, completeness is used as an indication of whether it would be
 * safe to use queried data for a non-`_fields`-limited request.
 *
 * @param {Object<string,boolean>} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object<string,boolean>} Next state.
 */

function itemIsComplete(state = {}, action) {
  switch (action.type) {
    case 'RECEIVE_ITEMS':
      {
        const context = getContextFromAction(action);
        const {
          query,
          key = DEFAULT_ENTITY_KEY
        } = action; // An item is considered complete if it is received without an associated
        // fields query. Ideally, this would be implemented in such a way where the
        // complete aggregate of all fields would satisfy completeness. Since the
        // fields are not consistent across all entity types, this would require
        // introspection on the REST schema for each entity to know which fields
        // compose a complete item for that entity.

        const queryParts = query ? get_query_parts(query) : {};
        const isCompleteQuery = !query || !Array.isArray(queryParts.fields);
        return { ...state,
          [context]: { ...state[context],
            ...action.items.reduce((result, item) => {
              var _state$context2;

              const itemId = item[key]; // Defer to completeness if already assigned. Technically the
              // data may be outdated if receiving items for a field subset.

              result[itemId] = (state === null || state === void 0 ? void 0 : (_state$context2 = state[context]) === null || _state$context2 === void 0 ? void 0 : _state$context2[itemId]) || isCompleteQuery;
              return result;
            }, {})
          }
        };
      }

    case 'REMOVE_ITEMS':
      return Object(external_lodash_["mapValues"])(state, contextState => Object(external_lodash_["omit"])(contextState, action.itemIds));
  }

  return state;
}
/**
 * Reducer tracking queries state, keyed by stable query key. Each reducer
 * query object includes `itemIds` and `requestingPageByPerPage`.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Next state.
 */

const receiveQueries = Object(external_lodash_["flowRight"])([// Limit to matching action type so we don't attempt to replace action on
// an unhandled action.
if_matching_action(action => 'query' in action), // Inject query parts into action for use both in `onSubKey` and reducer.
replace_action(action => {
  // `ifMatchingAction` still passes on initialization, where state is
  // undefined and a query is not assigned. Avoid attempting to parse
  // parts. `onSubKey` will omit by lack of `stableKey`.
  if (action.query) {
    return { ...action,
      ...get_query_parts(action.query)
    };
  }

  return action;
}), on_sub_key('context'), // Queries shape is shared, but keyed by query `stableKey` part. Original
// reducer tracks only a single query object.
on_sub_key('stableKey')])((state = null, action) => {
  const {
    type,
    page,
    perPage,
    key = DEFAULT_ENTITY_KEY
  } = action;

  if (type !== 'RECEIVE_ITEMS') {
    return state;
  }

  return getMergedItemIds(state || [], Object(external_lodash_["map"])(action.items, key), page, perPage);
});
/**
 * Reducer tracking queries state.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Next state.
 */

const reducer_queries = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_ITEMS':
      return receiveQueries(state, action);

    case 'REMOVE_ITEMS':
      const removedItems = action.itemIds.reduce((result, itemId) => {
        result[itemId] = true;
        return result;
      }, {});
      return Object(external_lodash_["mapValues"])(state, contextQueries => {
        return Object(external_lodash_["mapValues"])(contextQueries, queryItems => {
          return Object(external_lodash_["filter"])(queryItems, queryId => {
            return !removedItems[queryId];
          });
        });
      });

    default:
      return state;
  }
};

/* harmony default export */ var reducer = (Object(external_wp_data_["combineReducers"])({
  items: reducer_items,
  itemIsComplete,
  queries: reducer_queries
}));

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/locks/utils.js
function deepCopyLocksTreePath(tree, path) {
  const newTree = { ...tree
  };
  let currentNode = newTree;

  for (const branchName of path) {
    currentNode.children = { ...currentNode.children,
      [branchName]: {
        locks: [],
        children: {},
        ...currentNode.children[branchName]
      }
    };
    currentNode = currentNode.children[branchName];
  }

  return newTree;
}
function getNode(tree, path) {
  let currentNode = tree;

  for (const branchName of path) {
    const nextNode = currentNode.children[branchName];

    if (!nextNode) {
      return null;
    }

    currentNode = nextNode;
  }

  return currentNode;
}
function* iteratePath(tree, path) {
  let currentNode = tree;
  yield currentNode;

  for (const branchName of path) {
    const nextNode = currentNode.children[branchName];

    if (!nextNode) {
      break;
    }

    yield nextNode;
    currentNode = nextNode;
  }
}
function* iterateDescendants(node) {
  const stack = Object.values(node.children);

  while (stack.length) {
    const childNode = stack.pop();
    yield childNode;
    stack.push(...Object.values(childNode.children));
  }
}
function hasConflictingLock({
  exclusive
}, locks) {
  if (exclusive && locks.length) {
    return true;
  }

  if (!exclusive && locks.filter(lock => lock.exclusive).length) {
    return true;
  }

  return false;
}

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/locks/reducer.js
/**
 * Internal dependencies
 */

const DEFAULT_STATE = {
  requests: [],
  tree: {
    locks: [],
    children: {}
  }
};
/**
 * Reducer returning locks.
 *
 * @param  {Object} state  Current state.
 * @param  {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function reducer_locks(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case 'ENQUEUE_LOCK_REQUEST':
      {
        const {
          request
        } = action;
        return { ...state,
          requests: [request, ...state.requests]
        };
      }

    case 'GRANT_LOCK_REQUEST':
      {
        const {
          lock,
          request
        } = action;
        const {
          store,
          path
        } = request;
        const storePath = [store, ...path];
        const newTree = deepCopyLocksTreePath(state.tree, storePath);
        const node = getNode(newTree, storePath);
        node.locks = [...node.locks, lock];
        return { ...state,
          requests: state.requests.filter(r => r !== request),
          tree: newTree
        };
      }

    case 'RELEASE_LOCK':
      {
        const {
          lock
        } = action;
        const storePath = [lock.store, ...lock.path];
        const newTree = deepCopyLocksTreePath(state.tree, storePath);
        const node = getNode(newTree, storePath);
        node.locks = node.locks.filter(l => l !== lock);
        return { ...state,
          tree: newTree
        };
      }
  }

  return state;
}
/* harmony default export */ var locks_reducer = (reducer_locks);

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/reducer.js
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
 * Reducer managing terms state. Keyed by taxonomy slug, the value is either
 * undefined (if no request has been made for given taxonomy), null (if a
 * request is in-flight for given taxonomy), or the array of terms for the
 * taxonomy.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function terms(state = {}, action) {
  switch (action.type) {
    case 'RECEIVE_TERMS':
      return { ...state,
        [action.taxonomy]: action.terms
      };
  }

  return state;
}
/**
 * Reducer managing authors state. Keyed by id.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function reducer_users(state = {
  byId: {},
  queries: {}
}, action) {
  switch (action.type) {
    case 'RECEIVE_USER_QUERY':
      return {
        byId: { ...state.byId,
          ...Object(external_lodash_["keyBy"])(action.users, 'id')
        },
        queries: { ...state.queries,
          [action.queryID]: Object(external_lodash_["map"])(action.users, user => user.id)
        }
      };
  }

  return state;
}
/**
 * Reducer managing current user state.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function reducer_currentUser(state = {}, action) {
  switch (action.type) {
    case 'RECEIVE_CURRENT_USER':
      return action.currentUser;
  }

  return state;
}
/**
 * Reducer managing taxonomies.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function reducer_taxonomies(state = [], action) {
  switch (action.type) {
    case 'RECEIVE_TAXONOMIES':
      return action.taxonomies;
  }

  return state;
}
/**
 * Reducer managing the current theme.
 *
 * @param {string} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {string} Updated state.
 */

function currentTheme(state = undefined, action) {
  switch (action.type) {
    case 'RECEIVE_CURRENT_THEME':
      return action.currentTheme.stylesheet;
  }

  return state;
}
/**
 * Reducer managing installed themes.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function themes(state = {}, action) {
  switch (action.type) {
    case 'RECEIVE_CURRENT_THEME':
      return { ...state,
        [action.currentTheme.stylesheet]: action.currentTheme
      };
  }

  return state;
}
/**
 * Reducer managing theme supports data.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function themeSupports(state = {}, action) {
  switch (action.type) {
    case 'RECEIVE_THEME_SUPPORTS':
      return { ...state,
        ...action.themeSupports
      };
  }

  return state;
}
/**
 * Higher Order Reducer for a given entity config. It supports:
 *
 *  - Fetching
 *  - Editing
 *  - Saving
 *
 * @param {Object} entityConfig  Entity config.
 *
 * @return {Function} Reducer.
 */

function reducer_entity(entityConfig) {
  return Object(external_lodash_["flowRight"])([// Limit to matching action type so we don't attempt to replace action on
  // an unhandled action.
  if_matching_action(action => action.name && action.kind && action.name === entityConfig.name && action.kind === entityConfig.kind), // Inject the entity config into the action.
  replace_action(action => {
    return { ...action,
      key: entityConfig.key || DEFAULT_ENTITY_KEY
    };
  })])(Object(external_wp_data_["combineReducers"])({
    queriedData: reducer,
    edits: (state = {}, action) => {
      var _action$query$context, _action$query;

      switch (action.type) {
        case 'RECEIVE_ITEMS':
          const context = (_action$query$context = action === null || action === void 0 ? void 0 : (_action$query = action.query) === null || _action$query === void 0 ? void 0 : _action$query.context) !== null && _action$query$context !== void 0 ? _action$query$context : 'default';

          if (context !== 'default') {
            return state;
          }

          const nextState = { ...state
          };

          for (const record of action.items) {
            const recordId = record[action.key];
            const edits = nextState[recordId];

            if (!edits) {
              continue;
            }

            const nextEdits = Object.keys(edits).reduce((acc, key) => {
              // If the edited value is still different to the persisted value,
              // keep the edited value in edits.
              if ( // Edits are the "raw" attribute values, but records may have
              // objects with more properties, so we use `get` here for the
              // comparison.
              !Object(external_lodash_["isEqual"])(edits[key], Object(external_lodash_["get"])(record[key], 'raw', record[key])) && ( // Sometimes the server alters the sent value which means
              // we need to also remove the edits before the api request.
              !action.persistedEdits || !Object(external_lodash_["isEqual"])(edits[key], action.persistedEdits[key]))) {
                acc[key] = edits[key];
              }

              return acc;
            }, {});

            if (Object.keys(nextEdits).length) {
              nextState[recordId] = nextEdits;
            } else {
              delete nextState[recordId];
            }
          }

          return nextState;

        case 'EDIT_ENTITY_RECORD':
          const nextEdits = { ...state[action.recordId],
            ...action.edits
          };
          Object.keys(nextEdits).forEach(key => {
            // Delete cleared edits so that the properties
            // are not considered dirty.
            if (nextEdits[key] === undefined) {
              delete nextEdits[key];
            }
          });
          return { ...state,
            [action.recordId]: nextEdits
          };
      }

      return state;
    },
    saving: (state = {}, action) => {
      switch (action.type) {
        case 'SAVE_ENTITY_RECORD_START':
        case 'SAVE_ENTITY_RECORD_FINISH':
          return { ...state,
            [action.recordId]: {
              pending: action.type === 'SAVE_ENTITY_RECORD_START',
              error: action.error,
              isAutosave: action.isAutosave
            }
          };
      }

      return state;
    },
    deleting: (state = {}, action) => {
      switch (action.type) {
        case 'DELETE_ENTITY_RECORD_START':
        case 'DELETE_ENTITY_RECORD_FINISH':
          return { ...state,
            [action.recordId]: {
              pending: action.type === 'DELETE_ENTITY_RECORD_START',
              error: action.error
            }
          };
      }

      return state;
    }
  }));
}
/**
 * Reducer keeping track of the registered entities.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */


function entitiesConfig(state = defaultEntities, action) {
  switch (action.type) {
    case 'ADD_ENTITIES':
      return [...state, ...action.entities];
  }

  return state;
}
/**
 * Reducer keeping track of the registered entities config and data.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

const reducer_entities = (state = {}, action) => {
  const newConfig = entitiesConfig(state.config, action); // Generates a dynamic reducer for the entities

  let entitiesDataReducer = state.reducer;

  if (!entitiesDataReducer || newConfig !== state.config) {
    const entitiesByKind = Object(external_lodash_["groupBy"])(newConfig, 'kind');
    entitiesDataReducer = Object(external_wp_data_["combineReducers"])(Object.entries(entitiesByKind).reduce((memo, [kind, subEntities]) => {
      const kindReducer = Object(external_wp_data_["combineReducers"])(subEntities.reduce((kindMemo, entityConfig) => ({ ...kindMemo,
        [entityConfig.name]: reducer_entity(entityConfig)
      }), {}));
      memo[kind] = kindReducer;
      return memo;
    }, {}));
  }

  const newData = entitiesDataReducer(state.data, action);

  if (newData === state.data && newConfig === state.config && entitiesDataReducer === state.reducer) {
    return state;
  }

  return {
    reducer: entitiesDataReducer,
    data: newData,
    config: newConfig
  };
};
/**
 * Reducer keeping track of entity edit undo history.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

const UNDO_INITIAL_STATE = [];
UNDO_INITIAL_STATE.offset = 0;
let lastEditAction;
function reducer_undo(state = UNDO_INITIAL_STATE, action) {
  switch (action.type) {
    case 'EDIT_ENTITY_RECORD':
    case 'CREATE_UNDO_LEVEL':
      let isCreateUndoLevel = action.type === 'CREATE_UNDO_LEVEL';
      const isUndoOrRedo = !isCreateUndoLevel && (action.meta.isUndo || action.meta.isRedo);

      if (isCreateUndoLevel) {
        action = lastEditAction;
      } else if (!isUndoOrRedo) {
        // Don't lose the last edit cache if the new one only has transient edits.
        // Transient edits don't create new levels so updating the cache would make
        // us skip an edit later when creating levels explicitly.
        if (Object.keys(action.edits).some(key => !action.transientEdits[key])) {
          lastEditAction = action;
        } else {
          lastEditAction = { ...action,
            edits: { ...(lastEditAction && lastEditAction.edits),
              ...action.edits
            }
          };
        }
      }

      let nextState;

      if (isUndoOrRedo) {
        nextState = [...state];
        nextState.offset = state.offset + (action.meta.isUndo ? -1 : 1);

        if (state.flattenedUndo) {
          // The first undo in a sequence of undos might happen while we have
          // flattened undos in state. If this is the case, we want execution
          // to continue as if we were creating an explicit undo level. This
          // will result in an extra undo level being appended with the flattened
          // undo values.
          isCreateUndoLevel = true;
          action = lastEditAction;
        } else {
          return nextState;
        }
      }

      if (!action.meta.undo) {
        return state;
      } // Transient edits don't create an undo level, but are
      // reachable in the next meaningful edit to which they
      // are merged. They are defined in the entity's config.


      if (!isCreateUndoLevel && !Object.keys(action.edits).some(key => !action.transientEdits[key])) {
        nextState = [...state];
        nextState.flattenedUndo = { ...state.flattenedUndo,
          ...action.edits
        };
        nextState.offset = state.offset;
        return nextState;
      } // Clear potential redos, because this only supports linear history.


      nextState = nextState || state.slice(0, state.offset || undefined);
      nextState.offset = nextState.offset || 0;
      nextState.pop();

      if (!isCreateUndoLevel) {
        nextState.push({
          kind: action.meta.undo.kind,
          name: action.meta.undo.name,
          recordId: action.meta.undo.recordId,
          edits: { ...state.flattenedUndo,
            ...action.meta.undo.edits
          }
        });
      } // When an edit is a function it's an optimization to avoid running some expensive operation.
      // We can't rely on the function references being the same so we opt out of comparing them here.


      const comparisonUndoEdits = Object.values(action.meta.undo.edits).filter(edit => typeof edit !== 'function');
      const comparisonEdits = Object.values(action.edits).filter(edit => typeof edit !== 'function');

      if (!external_wp_isShallowEqual_default()(comparisonUndoEdits, comparisonEdits)) {
        nextState.push({
          kind: action.kind,
          name: action.name,
          recordId: action.recordId,
          edits: isCreateUndoLevel ? { ...state.flattenedUndo,
            ...action.edits
          } : action.edits
        });
      }

      return nextState;
  }

  return state;
}
/**
 * Reducer managing embed preview data.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function embedPreviews(state = {}, action) {
  switch (action.type) {
    case 'RECEIVE_EMBED_PREVIEW':
      const {
        url,
        preview
      } = action;
      return { ...state,
        [url]: preview
      };
  }

  return state;
}
/**
 * State which tracks whether the user can perform an action on a REST
 * resource.
 *
 * @param  {Object} state  Current state.
 * @param  {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function userPermissions(state = {}, action) {
  switch (action.type) {
    case 'RECEIVE_USER_PERMISSION':
      return { ...state,
        [action.key]: action.isAllowed
      };
  }

  return state;
}
/**
 * Reducer returning autosaves keyed by their parent's post id.
 *
 * @param  {Object} state  Current state.
 * @param  {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function reducer_autosaves(state = {}, action) {
  switch (action.type) {
    case 'RECEIVE_AUTOSAVES':
      const {
        postId,
        autosaves: autosavesData
      } = action;
      return { ...state,
        [postId]: autosavesData
      };
  }

  return state;
}
/* harmony default export */ var build_module_reducer = (Object(external_wp_data_["combineReducers"])({
  terms,
  users: reducer_users,
  currentTheme,
  currentUser: reducer_currentUser,
  taxonomies: reducer_taxonomies,
  themes,
  themeSupports,
  entities: reducer_entities,
  undo: reducer_undo,
  embedPreviews,
  userPermissions,
  autosaves: reducer_autosaves,
  locks: locks_reducer
}));

// EXTERNAL MODULE: ./node_modules/rememo/es/rememo.js
var rememo = __webpack_require__("pPDe");

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/name.js
/**
 * The reducer key used by core data in store registration.
 * This is defined in a separate file to avoid cycle-dependency
 *
 * @type {string}
 */
const STORE_NAME = 'core';

// EXTERNAL MODULE: ./node_modules/equivalent-key-map/equivalent-key-map.js
var equivalent_key_map = __webpack_require__("FtRg");
var equivalent_key_map_default = /*#__PURE__*/__webpack_require__.n(equivalent_key_map);

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/queried-data/selectors.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */


/**
 * Cache of state keys to EquivalentKeyMap where the inner map tracks queries
 * to their resulting items set. WeakMap allows garbage collection on expired
 * state references.
 *
 * @type {WeakMap<Object,EquivalentKeyMap>}
 */

const queriedItemsCacheByState = new WeakMap();
/**
 * Returns items for a given query, or null if the items are not known.
 *
 * @param {Object}  state State object.
 * @param {?Object} query Optional query.
 *
 * @return {?Array} Query items.
 */

function getQueriedItemsUncached(state, query) {
  var _state$queries, _state$queries$contex;

  const {
    stableKey,
    page,
    perPage,
    include,
    fields,
    context
  } = get_query_parts(query);
  let itemIds;

  if (Array.isArray(include) && !stableKey) {
    // If the parsed query yields a set of IDs, but otherwise no filtering,
    // it's safe to consider targeted item IDs as the include set. This
    // doesn't guarantee that those objects have been queried, which is
    // accounted for below in the loop `null` return.
    itemIds = include; // TODO: Avoid storing the empty stable string in reducer, since it
    // can be computed dynamically here always.
  } else if ((_state$queries = state.queries) !== null && _state$queries !== void 0 && (_state$queries$contex = _state$queries[context]) !== null && _state$queries$contex !== void 0 && _state$queries$contex[stableKey]) {
    itemIds = state.queries[context][stableKey];
  }

  if (!itemIds) {
    return null;
  }

  const startOffset = perPage === -1 ? 0 : (page - 1) * perPage;
  const endOffset = perPage === -1 ? itemIds.length : Math.min(startOffset + perPage, itemIds.length);
  const items = [];

  for (let i = startOffset; i < endOffset; i++) {
    var _state$items$context;

    const itemId = itemIds[i];

    if (Array.isArray(include) && !include.includes(itemId)) {
      continue;
    }

    if (!((_state$items$context = state.items[context]) !== null && _state$items$context !== void 0 && _state$items$context.hasOwnProperty(itemId))) {
      return null;
    }

    const item = state.items[context][itemId];
    let filteredItem;

    if (Array.isArray(fields)) {
      filteredItem = {};

      for (let f = 0; f < fields.length; f++) {
        const field = fields[f].split('.');
        const value = Object(external_lodash_["get"])(item, field);
        Object(external_lodash_["set"])(filteredItem, field, value);
      }
    } else {
      var _state$itemIsComplete;

      // If expecting a complete item, validate that completeness, or
      // otherwise abort.
      if (!((_state$itemIsComplete = state.itemIsComplete[context]) !== null && _state$itemIsComplete !== void 0 && _state$itemIsComplete[itemId])) {
        return null;
      }

      filteredItem = item;
    }

    items.push(filteredItem);
  }

  return items;
}
/**
 * Returns items for a given query, or null if the items are not known. Caches
 * result both per state (by reference) and per query (by deep equality).
 * The caching approach is intended to be durable to query objects which are
 * deeply but not referentially equal, since otherwise:
 *
 * `getQueriedItems( state, {} ) !== getQueriedItems( state, {} )`
 *
 * @param {Object}  state State object.
 * @param {?Object} query Optional query.
 *
 * @return {?Array} Query items.
 */


const getQueriedItems = Object(rememo["a" /* default */])((state, query = {}) => {
  let queriedItemsCache = queriedItemsCacheByState.get(state);

  if (queriedItemsCache) {
    const queriedItems = queriedItemsCache.get(query);

    if (queriedItems !== undefined) {
      return queriedItems;
    }
  } else {
    queriedItemsCache = new equivalent_key_map_default.a();
    queriedItemsCacheByState.set(state, queriedItemsCache);
  }

  const items = getQueriedItemsUncached(state, query);
  queriedItemsCache.set(query, items);
  return items;
});

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/selectors.js
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
 * Shared reference to an empty array for cases where it is important to avoid
 * returning a new array reference on every invocation, as in a connected or
 * other pure component which performs `shouldComponentUpdate` check on props.
 * This should be used as a last resort, since the normalized data should be
 * maintained by the reducer result in state.
 *
 * @type {Array}
 */

const EMPTY_ARRAY = [];
/**
 * Returns true if a request is in progress for embed preview data, or false
 * otherwise.
 *
 * @param {Object} state Data state.
 * @param {string} url   URL the preview would be for.
 *
 * @return {boolean} Whether a request is in progress for an embed preview.
 */

const isRequestingEmbedPreview = Object(external_wp_data_["createRegistrySelector"])(select => (state, url) => {
  return select('core/data').isResolving(STORE_NAME, 'getEmbedPreview', [url]);
});
/**
 * Returns all available authors.
 *
 * @param {Object}           state Data state.
 * @param {Object|undefined} query Optional object of query parameters to
 *                                 include with request.
 * @return {Array} Authors list.
 */

function getAuthors(state, query) {
  const path = Object(external_wp_url_["addQueryArgs"])('/wp/v2/users/?who=authors&per_page=100', query);
  return getUserQueryResults(state, path);
}
/**
 * Returns all available authors.
 *
 * @param {Object} state Data state.
 * @param {number} id The author id.
 *
 * @return {Array} Authors list.
 */

function __unstableGetAuthor(state, id) {
  return Object(external_lodash_["get"])(state, ['users', 'byId', id], null);
}
/**
 * Returns the current user.
 *
 * @param {Object} state Data state.
 *
 * @return {Object} Current user object.
 */

function getCurrentUser(state) {
  return state.currentUser;
}
/**
 * Returns all the users returned by a query ID.
 *
 * @param {Object} state   Data state.
 * @param {string} queryID Query ID.
 *
 * @return {Array} Users list.
 */

const getUserQueryResults = Object(rememo["a" /* default */])((state, queryID) => {
  const queryResults = state.users.queries[queryID];
  return Object(external_lodash_["map"])(queryResults, id => state.users.byId[id]);
}, (state, queryID) => [state.users.queries[queryID], state.users.byId]);
/**
 * Returns whether the entities for the give kind are loaded.
 *
 * @param {Object} state   Data state.
 * @param {string} kind  Entity kind.
 *
 * @return {Array<Object>} Array of entities with config matching kind.
 */

function getEntitiesByKind(state, kind) {
  return Object(external_lodash_["filter"])(state.entities.config, {
    kind
  });
}
/**
 * Returns the entity object given its kind and name.
 *
 * @param {Object} state   Data state.
 * @param {string} kind  Entity kind.
 * @param {string} name  Entity name.
 *
 * @return {Object} Entity
 */

function getEntity(state, kind, name) {
  return Object(external_lodash_["find"])(state.entities.config, {
    kind,
    name
  });
}
/**
 * Returns the Entity's record object by key. Returns `null` if the value is not
 * yet received, undefined if the value entity is known to not exist, or the
 * entity object if it exists and is received.
 *
 * @param {Object}  state State tree
 * @param {string}  kind  Entity kind.
 * @param {string}  name  Entity name.
 * @param {number}  key   Record's key
 * @param {?Object} query Optional query.
 *
 * @return {Object?} Record.
 */

function getEntityRecord(state, kind, name, key, query) {
  var _query$context, _queriedState$items$c;

  const queriedState = Object(external_lodash_["get"])(state.entities.data, [kind, name, 'queriedData']);

  if (!queriedState) {
    return undefined;
  }

  const context = (_query$context = query === null || query === void 0 ? void 0 : query.context) !== null && _query$context !== void 0 ? _query$context : 'default';

  if (query === undefined) {
    var _queriedState$itemIsC;

    // If expecting a complete item, validate that completeness.
    if (!((_queriedState$itemIsC = queriedState.itemIsComplete[context]) !== null && _queriedState$itemIsC !== void 0 && _queriedState$itemIsC[key])) {
      return undefined;
    }

    return queriedState.items[context][key];
  }

  const item = (_queriedState$items$c = queriedState.items[context]) === null || _queriedState$items$c === void 0 ? void 0 : _queriedState$items$c[key];

  if (item && query._fields) {
    const filteredItem = {};
    const fields = get_normalized_comma_separable(query._fields);

    for (let f = 0; f < fields.length; f++) {
      const field = fields[f].split('.');
      const value = Object(external_lodash_["get"])(item, field);
      Object(external_lodash_["set"])(filteredItem, field, value);
    }

    return filteredItem;
  }

  return item;
}
/**
 * Returns the Entity's record object by key. Doesn't trigger a resolver nor requests the entity from the API if the entity record isn't available in the local state.
 *
 * @param {Object} state  State tree
 * @param {string} kind   Entity kind.
 * @param {string} name   Entity name.
 * @param {number} key    Record's key
 *
 * @return {Object|null} Record.
 */

function __experimentalGetEntityRecordNoResolver(state, kind, name, key) {
  return getEntityRecord(state, kind, name, key);
}
/**
 * Returns the entity's record object by key,
 * with its attributes mapped to their raw values.
 *
 * @param {Object} state  State tree.
 * @param {string} kind   Entity kind.
 * @param {string} name   Entity name.
 * @param {number} key    Record's key.
 *
 * @return {Object?} Object with the entity's raw attributes.
 */

const getRawEntityRecord = Object(rememo["a" /* default */])((state, kind, name, key) => {
  const record = getEntityRecord(state, kind, name, key);
  return record && Object.keys(record).reduce((accumulator, _key) => {
    // Because edits are the "raw" attribute values,
    // we return those from record selectors to make rendering,
    // comparisons, and joins with edits easier.
    accumulator[_key] = Object(external_lodash_["get"])(record[_key], 'raw', record[_key]);
    return accumulator;
  }, {});
}, state => [state.entities.data]);
/**
 * Returns true if records have been received for the given set of parameters,
 * or false otherwise.
 *
 * @param {Object}  state State tree
 * @param {string}  kind  Entity kind.
 * @param {string}  name  Entity name.
 * @param {?Object} query Optional terms query.
 *
 * @return {boolean} Whether entity records have been received.
 */

function hasEntityRecords(state, kind, name, query) {
  return Array.isArray(getEntityRecords(state, kind, name, query));
}
/**
 * Returns the Entity's records.
 *
 * @param {Object}  state State tree
 * @param {string}  kind  Entity kind.
 * @param {string}  name  Entity name.
 * @param {?Object} query Optional terms query.
 *
 * @return {?Array} Records.
 */

function getEntityRecords(state, kind, name, query) {
  // Queried data state is prepopulated for all known entities. If this is not
  // assigned for the given parameters, then it is known to not exist. Thus, a
  // return value of an empty array is used instead of `null` (where `null` is
  // otherwise used to represent an unknown state).
  const queriedState = Object(external_lodash_["get"])(state.entities.data, [kind, name, 'queriedData']);

  if (!queriedState) {
    return EMPTY_ARRAY;
  }

  return getQueriedItems(queriedState, query);
}
/**
 * Returns the  list of dirty entity records.
 *
 * @param {Object} state State tree.
 *
 * @return {[{ title: string, key: string, name: string, kind: string }]} The list of updated records
 */

const __experimentalGetDirtyEntityRecords = Object(rememo["a" /* default */])(state => {
  const {
    entities: {
      data
    }
  } = state;
  const dirtyRecords = [];
  Object.keys(data).forEach(kind => {
    Object.keys(data[kind]).forEach(name => {
      const primaryKeys = Object.keys(data[kind][name].edits).filter(primaryKey => hasEditsForEntityRecord(state, kind, name, primaryKey));

      if (primaryKeys.length) {
        const entity = getEntity(state, kind, name);
        primaryKeys.forEach(primaryKey => {
          var _entity$getTitle;

          const entityRecord = getEditedEntityRecord(state, kind, name, primaryKey);
          dirtyRecords.push({
            // We avoid using primaryKey because it's transformed into a string
            // when it's used as an object key.
            key: entityRecord[entity.key || DEFAULT_ENTITY_KEY],
            title: (entity === null || entity === void 0 ? void 0 : (_entity$getTitle = entity.getTitle) === null || _entity$getTitle === void 0 ? void 0 : _entity$getTitle.call(entity, entityRecord)) || '',
            name,
            kind
          });
        });
      }
    });
  });
  return dirtyRecords;
}, state => [state.entities.data]);
/**
 * Returns the specified entity record's edits.
 *
 * @param {Object} state    State tree.
 * @param {string} kind     Entity kind.
 * @param {string} name     Entity name.
 * @param {number} recordId Record ID.
 *
 * @return {Object?} The entity record's edits.
 */

function getEntityRecordEdits(state, kind, name, recordId) {
  return Object(external_lodash_["get"])(state.entities.data, [kind, name, 'edits', recordId]);
}
/**
 * Returns the specified entity record's non transient edits.
 *
 * Transient edits don't create an undo level, and
 * are not considered for change detection.
 * They are defined in the entity's config.
 *
 * @param {Object} state    State tree.
 * @param {string} kind     Entity kind.
 * @param {string} name     Entity name.
 * @param {number} recordId Record ID.
 *
 * @return {Object?} The entity record's non transient edits.
 */

const getEntityRecordNonTransientEdits = Object(rememo["a" /* default */])((state, kind, name, recordId) => {
  const {
    transientEdits
  } = getEntity(state, kind, name) || {};
  const edits = getEntityRecordEdits(state, kind, name, recordId) || {};

  if (!transientEdits) {
    return edits;
  }

  return Object.keys(edits).reduce((acc, key) => {
    if (!transientEdits[key]) {
      acc[key] = edits[key];
    }

    return acc;
  }, {});
}, state => [state.entities.config, state.entities.data]);
/**
 * Returns true if the specified entity record has edits,
 * and false otherwise.
 *
 * @param {Object} state    State tree.
 * @param {string} kind     Entity kind.
 * @param {string} name     Entity name.
 * @param {number} recordId Record ID.
 *
 * @return {boolean} Whether the entity record has edits or not.
 */

function hasEditsForEntityRecord(state, kind, name, recordId) {
  return isSavingEntityRecord(state, kind, name, recordId) || Object.keys(getEntityRecordNonTransientEdits(state, kind, name, recordId)).length > 0;
}
/**
 * Returns the specified entity record, merged with its edits.
 *
 * @param {Object} state    State tree.
 * @param {string} kind     Entity kind.
 * @param {string} name     Entity name.
 * @param {number} recordId Record ID.
 *
 * @return {Object?} The entity record, merged with its edits.
 */

const getEditedEntityRecord = Object(rememo["a" /* default */])((state, kind, name, recordId) => ({ ...getRawEntityRecord(state, kind, name, recordId),
  ...getEntityRecordEdits(state, kind, name, recordId)
}), state => [state.entities.data]);
/**
 * Returns true if the specified entity record is autosaving, and false otherwise.
 *
 * @param {Object} state    State tree.
 * @param {string} kind     Entity kind.
 * @param {string} name     Entity name.
 * @param {number} recordId Record ID.
 *
 * @return {boolean} Whether the entity record is autosaving or not.
 */

function isAutosavingEntityRecord(state, kind, name, recordId) {
  const {
    pending,
    isAutosave
  } = Object(external_lodash_["get"])(state.entities.data, [kind, name, 'saving', recordId], {});
  return Boolean(pending && isAutosave);
}
/**
 * Returns true if the specified entity record is saving, and false otherwise.
 *
 * @param {Object} state    State tree.
 * @param {string} kind     Entity kind.
 * @param {string} name     Entity name.
 * @param {number} recordId Record ID.
 *
 * @return {boolean} Whether the entity record is saving or not.
 */

function isSavingEntityRecord(state, kind, name, recordId) {
  return Object(external_lodash_["get"])(state.entities.data, [kind, name, 'saving', recordId, 'pending'], false);
}
/**
 * Returns true if the specified entity record is deleting, and false otherwise.
 *
 * @param {Object} state    State tree.
 * @param {string} kind     Entity kind.
 * @param {string} name     Entity name.
 * @param {number} recordId Record ID.
 *
 * @return {boolean} Whether the entity record is deleting or not.
 */

function isDeletingEntityRecord(state, kind, name, recordId) {
  return Object(external_lodash_["get"])(state.entities.data, [kind, name, 'deleting', recordId, 'pending'], false);
}
/**
 * Returns the specified entity record's last save error.
 *
 * @param {Object} state    State tree.
 * @param {string} kind     Entity kind.
 * @param {string} name     Entity name.
 * @param {number} recordId Record ID.
 *
 * @return {Object?} The entity record's save error.
 */

function getLastEntitySaveError(state, kind, name, recordId) {
  return Object(external_lodash_["get"])(state.entities.data, [kind, name, 'saving', recordId, 'error']);
}
/**
 * Returns the specified entity record's last delete error.
 *
 * @param {Object} state    State tree.
 * @param {string} kind     Entity kind.
 * @param {string} name     Entity name.
 * @param {number} recordId Record ID.
 *
 * @return {Object?} The entity record's save error.
 */

function getLastEntityDeleteError(state, kind, name, recordId) {
  return Object(external_lodash_["get"])(state.entities.data, [kind, name, 'deleting', recordId, 'error']);
}
/**
 * Returns the current undo offset for the
 * entity records edits history. The offset
 * represents how many items from the end
 * of the history stack we are at. 0 is the
 * last edit, -1 is the second last, and so on.
 *
 * @param {Object} state State tree.
 *
 * @return {number} The current undo offset.
 */

function getCurrentUndoOffset(state) {
  return state.undo.offset;
}
/**
 * Returns the previous edit from the current undo offset
 * for the entity records edits history, if any.
 *
 * @param {Object} state State tree.
 *
 * @return {Object?} The edit.
 */


function getUndoEdit(state) {
  return state.undo[state.undo.length - 2 + getCurrentUndoOffset(state)];
}
/**
 * Returns the next edit from the current undo offset
 * for the entity records edits history, if any.
 *
 * @param {Object} state State tree.
 *
 * @return {Object?} The edit.
 */

function getRedoEdit(state) {
  return state.undo[state.undo.length + getCurrentUndoOffset(state)];
}
/**
 * Returns true if there is a previous edit from the current undo offset
 * for the entity records edits history, and false otherwise.
 *
 * @param {Object} state State tree.
 *
 * @return {boolean} Whether there is a previous edit or not.
 */

function hasUndo(state) {
  return Boolean(getUndoEdit(state));
}
/**
 * Returns true if there is a next edit from the current undo offset
 * for the entity records edits history, and false otherwise.
 *
 * @param {Object} state State tree.
 *
 * @return {boolean} Whether there is a next edit or not.
 */

function hasRedo(state) {
  return Boolean(getRedoEdit(state));
}
/**
 * Return the current theme.
 *
 * @param {Object} state Data state.
 *
 * @return {Object}      The current theme.
 */

function getCurrentTheme(state) {
  return state.themes[state.currentTheme];
}
/**
 * Return theme supports data in the index.
 *
 * @param {Object} state Data state.
 *
 * @return {*}           Index data.
 */

function getThemeSupports(state) {
  return state.themeSupports;
}
/**
 * Returns the embed preview for the given URL.
 *
 * @param {Object} state    Data state.
 * @param {string} url      Embedded URL.
 *
 * @return {*} Undefined if the preview has not been fetched, otherwise, the preview fetched from the embed preview API.
 */

function getEmbedPreview(state, url) {
  return state.embedPreviews[url];
}
/**
 * Determines if the returned preview is an oEmbed link fallback.
 *
 * WordPress can be configured to return a simple link to a URL if it is not embeddable.
 * We need to be able to determine if a URL is embeddable or not, based on what we
 * get back from the oEmbed preview API.
 *
 * @param {Object} state    Data state.
 * @param {string} url      Embedded URL.
 *
 * @return {boolean} Is the preview for the URL an oEmbed link fallback.
 */

function isPreviewEmbedFallback(state, url) {
  const preview = state.embedPreviews[url];
  const oEmbedLinkCheck = '<a href="' + url + '">' + url + '</a>';

  if (!preview) {
    return false;
  }

  return preview.html === oEmbedLinkCheck;
}
/**
 * Returns whether the current user can perform the given action on the given
 * REST resource.
 *
 * Calling this may trigger an OPTIONS request to the REST API via the
 * `canUser()` resolver.
 *
 * https://developer.wordpress.org/rest-api/reference/
 *
 * @param {Object}   state            Data state.
 * @param {string}   action           Action to check. One of: 'create', 'read', 'update', 'delete'.
 * @param {string}   resource         REST resource to check, e.g. 'media' or 'posts'.
 * @param {string=}  id               Optional ID of the rest resource to check.
 *
 * @return {boolean|undefined} Whether or not the user can perform the action,
 *                             or `undefined` if the OPTIONS request is still being made.
 */

function canUser(state, action, resource, id) {
  const key = Object(external_lodash_["compact"])([action, resource, id]).join('/');
  return Object(external_lodash_["get"])(state, ['userPermissions', key]);
}
/**
 * Returns whether the current user can edit the given entity.
 *
 * Calling this may trigger an OPTIONS request to the REST API via the
 * `canUser()` resolver.
 *
 * https://developer.wordpress.org/rest-api/reference/
 *
 * @param {Object} state    Data state.
 * @param {string} kind     Entity kind.
 * @param {string} name     Entity name.
 * @param {string} recordId Record's id.
 * @return {boolean|undefined} Whether or not the user can edit,
 * or `undefined` if the OPTIONS request is still being made.
 */

function canUserEditEntityRecord(state, kind, name, recordId) {
  const entity = getEntity(state, kind, name);

  if (!entity) {
    return false;
  }

  const resource = entity.__unstable_rest_base;
  return canUser(state, 'update', resource, recordId);
}
/**
 * Returns the latest autosaves for the post.
 *
 * May return multiple autosaves since the backend stores one autosave per
 * author for each post.
 *
 * @param {Object} state    State tree.
 * @param {string} postType The type of the parent post.
 * @param {number} postId   The id of the parent post.
 *
 * @return {?Array} An array of autosaves for the post, or undefined if there is none.
 */

function getAutosaves(state, postType, postId) {
  return state.autosaves[postId];
}
/**
 * Returns the autosave for the post and author.
 *
 * @param {Object} state    State tree.
 * @param {string} postType The type of the parent post.
 * @param {number} postId   The id of the parent post.
 * @param {number} authorId The id of the author.
 *
 * @return {?Object} The autosave for the post and author.
 */

function getAutosave(state, postType, postId, authorId) {
  if (authorId === undefined) {
    return;
  }

  const autosaves = state.autosaves[postId];
  return Object(external_lodash_["find"])(autosaves, {
    author: authorId
  });
}
/**
 * Returns true if the REST request for autosaves has completed.
 *
 * @param {Object} state State tree.
 * @param {string} postType The type of the parent post.
 * @param {number} postId   The id of the parent post.
 *
 * @return {boolean} True if the REST request was completed. False otherwise.
 */

const hasFetchedAutosaves = Object(external_wp_data_["createRegistrySelector"])(select => (state, postType, postId) => {
  return select(STORE_NAME).hasFinishedResolution('getAutosaves', [postType, postId]);
});
/**
 * Returns a new reference when edited values have changed. This is useful in
 * inferring where an edit has been made between states by comparison of the
 * return values using strict equality.
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

const getReferenceByDistinctEdits = Object(rememo["a" /* default */])(() => [], state => [state.undo.length, state.undo.offset, state.undo.flattenedUndo]);
/**
 * Retrieve the frontend template used for a given link.
 *
 * @param {Object} state Editor state.
 * @param {string} link  Link.
 *
 * @return {Object?} The template record.
 */

function __experimentalGetTemplateForLink(state, link) {
  const records = getEntityRecords(state, 'postType', 'wp_template', {
    'find-template': link
  });
  const template = records !== null && records !== void 0 && records.length ? records[0] : null;

  if (template) {
    return getEditedEntityRecord(state, 'postType', 'wp_template', template.id);
  }

  return template;
}

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/utils/if-not-resolved.js
/**
 * WordPress dependencies
 */

/**
 * Higher-order function which invokes the given resolver only if it has not
 * already been resolved with the arguments passed to the enhanced function.
 *
 * This only considers resolution state, and notably does not support resolver
 * custom `isFulfilled` behavior.
 *
 * @param {Function} resolver     Original resolver.
 * @param {string}   selectorName Selector name associated with resolver.
 *
 * @return {Function} Enhanced resolver.
 */

const ifNotResolved = (resolver, selectorName) =>
/**
 * @param {...any} args Original resolver arguments.
 */
function* resolveIfNotResolved(...args) {
  const hasStartedResolution = yield external_wp_data_["controls"].select('core', 'hasStartedResolution', selectorName, args);

  if (!hasStartedResolution) {
    yield* resolver(...args);
  }
};

/* harmony default export */ var if_not_resolved = (ifNotResolved);

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/resolvers.js
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
 * Internal dependencies
 */





/**
 * Requests authors from the REST API.
 *
 * @param {Object|undefined} query Optional object of query parameters to
 *                                 include with request.
 */

function* resolvers_getAuthors(query) {
  const path = Object(external_wp_url_["addQueryArgs"])('/wp/v2/users/?who=authors&per_page=100', query);
  const users = yield Object(external_wp_dataControls_["apiFetch"])({
    path
  });
  yield receiveUserQuery(path, users);
}
/**
 * Temporary approach to resolving editor access to author queries.
 *
 * @param {number} id The author id.
 */

function* resolvers_unstableGetAuthor(id) {
  const path = `/wp/v2/users?who=authors&include=${id}`;
  const users = yield Object(external_wp_dataControls_["apiFetch"])({
    path
  });
  yield receiveUserQuery('author', users);
}
/**
 * Requests the current user from the REST API.
 */

function* resolvers_getCurrentUser() {
  const currentUser = yield Object(external_wp_dataControls_["apiFetch"])({
    path: '/wp/v2/users/me'
  });
  yield receiveCurrentUser(currentUser);
}
/**
 * Requests an entity's record from the REST API.
 *
 * @param {string}           kind  Entity kind.
 * @param {string}           name  Entity name.
 * @param {number|string}    key   Record's key
 * @param {Object|undefined} query Optional object of query parameters to
 *                                 include with request.
 */

function* resolvers_getEntityRecord(kind, name, key = '', query) {
  const entities = yield getKindEntities(kind);
  const entity = Object(external_lodash_["find"])(entities, {
    kind,
    name
  });

  if (!entity) {
    return;
  }

  const lock = yield* __unstableAcquireStoreLock('core', ['entities', 'data', kind, name, key], {
    exclusive: false
  });

  try {
    if (query !== undefined && query._fields) {
      // If requesting specific fields, items and query assocation to said
      // records are stored by ID reference. Thus, fields must always include
      // the ID.
      query = { ...query,
        _fields: Object(external_lodash_["uniq"])([...(get_normalized_comma_separable(query._fields) || []), entity.key || DEFAULT_ENTITY_KEY]).join()
      };
    } // Disable reason: While true that an early return could leave `path`
    // unused, it's important that path is derived using the query prior to
    // additional query modifications in the condition below, since those
    // modifications are relevant to how the data is tracked in state, and not
    // for how the request is made to the REST API.
    // eslint-disable-next-line @wordpress/no-unused-vars-before-return


    const path = Object(external_wp_url_["addQueryArgs"])(entity.baseURL + '/' + key, { ...entity.baseURLParams,
      ...query
    });

    if (query !== undefined) {
      query = { ...query,
        include: [key]
      }; // The resolution cache won't consider query as reusable based on the
      // fields, so it's tested here, prior to initiating the REST request,
      // and without causing `getEntityRecords` resolution to occur.

      const hasRecords = yield external_wp_data_["controls"].select('core', 'hasEntityRecords', kind, name, query);

      if (hasRecords) {
        return;
      }
    }

    const record = yield Object(external_wp_dataControls_["apiFetch"])({
      path
    });
    yield receiveEntityRecords(kind, name, record, query);
  } catch (error) {// We need a way to handle and access REST API errors in state
    // Until then, catching the error ensures the resolver is marked as resolved.
  } finally {
    yield* __unstableReleaseStoreLock(lock);
  }
}
/**
 * Requests an entity's record from the REST API.
 */

const resolvers_getRawEntityRecord = if_not_resolved(resolvers_getEntityRecord, 'getEntityRecord');
/**
 * Requests an entity's record from the REST API.
 */

const resolvers_getEditedEntityRecord = if_not_resolved(resolvers_getRawEntityRecord, 'getRawEntityRecord');
/**
 * Requests the entity's records from the REST API.
 *
 * @param {string}  kind   Entity kind.
 * @param {string}  name   Entity name.
 * @param {Object?} query  Query Object.
 */

function* resolvers_getEntityRecords(kind, name, query = {}) {
  const entities = yield getKindEntities(kind);
  const entity = Object(external_lodash_["find"])(entities, {
    kind,
    name
  });

  if (!entity) {
    return;
  }

  const lock = yield* __unstableAcquireStoreLock('core', ['entities', 'data', kind, name], {
    exclusive: false
  });

  try {
    var _query;

    if (query._fields) {
      // If requesting specific fields, items and query assocation to said
      // records are stored by ID reference. Thus, fields must always include
      // the ID.
      query = { ...query,
        _fields: Object(external_lodash_["uniq"])([...(get_normalized_comma_separable(query._fields) || []), entity.key || DEFAULT_ENTITY_KEY]).join()
      };
    }

    const path = Object(external_wp_url_["addQueryArgs"])(entity.baseURL, { ...entity.baseURLParams,
      ...query
    });
    let records = Object.values(yield Object(external_wp_dataControls_["apiFetch"])({
      path
    })); // If we request fields but the result doesn't contain the fields,
    // explicitely set these fields as "undefined"
    // that way we consider the query "fullfilled".

    if (query._fields) {
      records = records.map(record => {
        query._fields.split(',').forEach(field => {
          if (!record.hasOwnProperty(field)) {
            record[field] = undefined;
          }
        });

        return record;
      });
    }

    yield receiveEntityRecords(kind, name, records, query); // When requesting all fields, the list of results can be used to
    // resolve the `getEntityRecord` selector in addition to `getEntityRecords`.
    // See https://github.com/WordPress/gutenberg/pull/26575

    if (!((_query = query) !== null && _query !== void 0 && _query._fields) && !query.context) {
      const key = entity.key || DEFAULT_ENTITY_KEY;
      const resolutionsArgs = records.filter(record => record[key]).map(record => [kind, name, record[key]]);
      yield {
        type: 'START_RESOLUTIONS',
        selectorName: 'getEntityRecord',
        args: resolutionsArgs
      };
      yield {
        type: 'FINISH_RESOLUTIONS',
        selectorName: 'getEntityRecord',
        args: resolutionsArgs
      };
    }
  } finally {
    yield* __unstableReleaseStoreLock(lock);
  }
}

resolvers_getEntityRecords.shouldInvalidate = (action, kind, name) => {
  return (action.type === 'RECEIVE_ITEMS' || action.type === 'REMOVE_ITEMS') && action.invalidateCache && kind === action.kind && name === action.name;
};
/**
 * Requests the current theme.
 */


function* resolvers_getCurrentTheme() {
  const activeThemes = yield Object(external_wp_dataControls_["apiFetch"])({
    path: '/wp/v2/themes?status=active'
  });
  yield receiveCurrentTheme(activeThemes[0]);
}
/**
 * Requests theme supports data from the index.
 */

function* resolvers_getThemeSupports() {
  const activeThemes = yield Object(external_wp_dataControls_["apiFetch"])({
    path: '/wp/v2/themes?status=active'
  });
  yield receiveThemeSupports(activeThemes[0].theme_supports);
}
/**
 * Requests a preview from the from the Embed API.
 *
 * @param {string} url   URL to get the preview for.
 */

function* resolvers_getEmbedPreview(url) {
  try {
    const embedProxyResponse = yield Object(external_wp_dataControls_["apiFetch"])({
      path: Object(external_wp_url_["addQueryArgs"])('/oembed/1.0/proxy', {
        url
      })
    });
    yield receiveEmbedPreview(url, embedProxyResponse);
  } catch (error) {
    // Embed API 404s if the URL cannot be embedded, so we have to catch the error from the apiRequest here.
    yield receiveEmbedPreview(url, false);
  }
}
/**
 * Checks whether the current user can perform the given action on the given
 * REST resource.
 *
 * @param {string}  action   Action to check. One of: 'create', 'read', 'update',
 *                           'delete'.
 * @param {string}  resource REST resource to check, e.g. 'media' or 'posts'.
 * @param {?string} id       ID of the rest resource to check.
 */

function* resolvers_canUser(action, resource, id) {
  const methods = {
    create: 'POST',
    read: 'GET',
    update: 'PUT',
    delete: 'DELETE'
  };
  const method = methods[action];

  if (!method) {
    throw new Error(`'${action}' is not a valid action.`);
  }

  const path = id ? `/wp/v2/${resource}/${id}` : `/wp/v2/${resource}`;
  let response;

  try {
    response = yield Object(external_wp_dataControls_["apiFetch"])({
      path,
      // Ideally this would always be an OPTIONS request, but unfortunately there's
      // a bug in the REST API which causes the Allow header to not be sent on
      // OPTIONS requests to /posts/:id routes.
      // https://core.trac.wordpress.org/ticket/45753
      method: id ? 'GET' : 'OPTIONS',
      parse: false
    });
  } catch (error) {
    // Do nothing if our OPTIONS request comes back with an API error (4xx or
    // 5xx). The previously determined isAllowed value will remain in the store.
    return;
  }

  let allowHeader;

  if (Object(external_lodash_["hasIn"])(response, ['headers', 'get'])) {
    // If the request is fetched using the fetch api, the header can be
    // retrieved using the 'get' method.
    allowHeader = response.headers.get('allow');
  } else {
    // If the request was preloaded server-side and is returned by the
    // preloading middleware, the header will be a simple property.
    allowHeader = Object(external_lodash_["get"])(response, ['headers', 'Allow'], '');
  }

  const key = Object(external_lodash_["compact"])([action, resource, id]).join('/');
  const isAllowed = Object(external_lodash_["includes"])(allowHeader, method);
  yield receiveUserPermission(key, isAllowed);
}
/**
 * Checks whether the current user can perform the given action on the given
 * REST resource.
 *
 * @param {string} kind     Entity kind.
 * @param {string} name     Entity name.
 * @param {string} recordId Record's id.
 */

function* resolvers_canUserEditEntityRecord(kind, name, recordId) {
  const entities = yield getKindEntities(kind);
  const entity = Object(external_lodash_["find"])(entities, {
    kind,
    name
  });

  if (!entity) {
    return;
  }

  const resource = entity.__unstable_rest_base;
  yield resolvers_canUser('update', resource, recordId);
}
/**
 * Request autosave data from the REST API.
 *
 * @param {string} postType The type of the parent post.
 * @param {number} postId   The id of the parent post.
 */

function* resolvers_getAutosaves(postType, postId) {
  const {
    rest_base: restBase
  } = yield external_wp_data_["controls"].resolveSelect('core', 'getPostType', postType);
  const autosaves = yield Object(external_wp_dataControls_["apiFetch"])({
    path: `/wp/v2/${restBase}/${postId}/autosaves?context=edit`
  });

  if (autosaves && autosaves.length) {
    yield receiveAutosaves(postId, autosaves);
  }
}
/**
 * Request autosave data from the REST API.
 *
 * This resolver exists to ensure the underlying autosaves are fetched via
 * `getAutosaves` when a call to the `getAutosave` selector is made.
 *
 * @param {string} postType The type of the parent post.
 * @param {number} postId   The id of the parent post.
 */

function* resolvers_getAutosave(postType, postId) {
  yield external_wp_data_["controls"].resolveSelect('core', 'getAutosaves', postType, postId);
}
/**
 * Retrieve the frontend template used for a given link.
 *
 * @param {string} link  Link.
 */

function* resolvers_experimentalGetTemplateForLink(link) {
  // Ideally this should be using an apiFetch call
  // We could potentially do so by adding a "filter" to the `wp_template` end point.
  // Also it seems the returned object is not a regular REST API post type.
  let template;

  try {
    template = yield regularFetch(Object(external_wp_url_["addQueryArgs"])(link, {
      '_wp-find-template': true
    }));
  } catch (e) {// For non-FSE themes, it is possible that this request returns an error.
  }

  if (!template) {
    return;
  }

  yield resolvers_getEntityRecord('postType', 'wp_template', template.id);
  const record = yield external_wp_data_["controls"].select('core', 'getEntityRecord', 'postType', 'wp_template', template.id);

  if (record) {
    yield receiveEntityRecords('postType', 'wp_template', [record], {
      'find-template': link
    });
  }
}

resolvers_experimentalGetTemplateForLink.shouldInvalidate = action => {
  return (action.type === 'RECEIVE_ITEMS' || action.type === 'REMOVE_ITEMS') && action.invalidateCache && action.kind === 'postType' && action.name === 'wp_template';
};

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/locks/selectors.js
/**
 * Internal dependencies
 */

function __unstableGetPendingLockRequests(state) {
  return state.locks.requests;
}
function __unstableIsLockAvailable(state, store, path, {
  exclusive
}) {
  const storePath = [store, ...path];
  const locks = state.locks.tree; // Validate all parents and the node itself

  for (const node of iteratePath(locks, storePath)) {
    if (hasConflictingLock({
      exclusive
    }, node.locks)) {
      return false;
    }
  } // iteratePath terminates early if path is unreachable, let's
  // re-fetch the node and check it exists in the tree.


  const node = getNode(locks, storePath);

  if (!node) {
    return true;
  } // Validate all nested nodes


  for (const descendant of iterateDescendants(node)) {
    if (hasConflictingLock({
      exclusive
    }, descendant.locks)) {
      return false;
    }
  }

  return true;
}

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__("GRId");

// EXTERNAL MODULE: external ["wp","blocks"]
var external_wp_blocks_ = __webpack_require__("HSyU");

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/entity-provider.js


/**
 * WordPress dependencies
 */



const entity_provider_EMPTY_ARRAY = [];
/**
 * Internal dependencies
 */


const entity_provider_entities = { ...defaultEntities.reduce((acc, entity) => {
    if (!acc[entity.kind]) {
      acc[entity.kind] = {};
    }

    acc[entity.kind][entity.name] = {
      context: Object(external_wp_element_["createContext"])()
    };
    return acc;
  }, {}),
  ...kinds.reduce((acc, kind) => {
    acc[kind.name] = {};
    return acc;
  }, {})
};

const entity_provider_getEntity = (kind, type) => {
  if (!entity_provider_entities[kind]) {
    throw new Error(`Missing entity config for kind: ${kind}.`);
  }

  if (!entity_provider_entities[kind][type]) {
    entity_provider_entities[kind][type] = {
      context: Object(external_wp_element_["createContext"])()
    };
  }

  return entity_provider_entities[kind][type];
};
/**
 * Context provider component for providing
 * an entity for a specific entity type.
 *
 * @param {Object} props          The component's props.
 * @param {string} props.kind     The entity kind.
 * @param {string} props.type     The entity type.
 * @param {number} props.id       The entity ID.
 * @param {*}      props.children The children to wrap.
 *
 * @return {Object} The provided children, wrapped with
 *                   the entity's context provider.
 */


function EntityProvider({
  kind,
  type,
  id,
  children
}) {
  const Provider = entity_provider_getEntity(kind, type).context.Provider;
  return Object(external_wp_element_["createElement"])(Provider, {
    value: id
  }, children);
}
/**
 * Hook that returns the ID for the nearest
 * provided entity of the specified type.
 *
 * @param {string} kind The entity kind.
 * @param {string} type The entity type.
 */

function useEntityId(kind, type) {
  return Object(external_wp_element_["useContext"])(entity_provider_getEntity(kind, type).context);
}
/**
 * Hook that returns the value and a setter for the
 * specified property of the nearest provided
 * entity of the specified type.
 *
 * @param {string} kind  The entity kind.
 * @param {string} type  The entity type.
 * @param {string} prop  The property name.
 * @param {string} [_id] An entity ID to use instead of the context-provided one.
 *
 * @return {[*, Function, *]} An array where the first item is the
 *                            property value, the second is the
 *                            setter and the third is the full value
 * 							  object from REST API containing more
 * 							  information like `raw`, `rendered` and
 * 							  `protected` props.
 */

function useEntityProp(kind, type, prop, _id) {
  const providerId = useEntityId(kind, type);
  const id = _id !== null && _id !== void 0 ? _id : providerId;
  const {
    value,
    fullValue
  } = Object(external_wp_data_["useSelect"])(select => {
    const {
      getEntityRecord,
      getEditedEntityRecord
    } = select('core');
    const entity = getEntityRecord(kind, type, id); // Trigger resolver.

    const editedEntity = getEditedEntityRecord(kind, type, id);
    return entity && editedEntity ? {
      value: editedEntity[prop],
      fullValue: entity[prop]
    } : {};
  }, [kind, type, id, prop]);
  const {
    editEntityRecord
  } = Object(external_wp_data_["useDispatch"])('core');
  const setValue = Object(external_wp_element_["useCallback"])(newValue => {
    editEntityRecord(kind, type, id, {
      [prop]: newValue
    });
  }, [kind, type, id, prop]);
  return [value, setValue, fullValue];
}
/**
 * Hook that returns block content getters and setters for
 * the nearest provided entity of the specified type.
 *
 * The return value has the shape `[ blocks, onInput, onChange ]`.
 * `onInput` is for block changes that don't create undo levels
 * or dirty the post, non-persistent changes, and `onChange` is for
 * peristent changes. They map directly to the props of a
 * `BlockEditorProvider` and are intended to be used with it,
 * or similar components or hooks.
 *
 * @param {string} kind                            The entity kind.
 * @param {string} type                            The entity type.
 * @param {Object} options
 * @param {string} [options.id]                    An entity ID to use instead of the context-provided one.
 *
 * @return {[WPBlock[], Function, Function]} The block array and setters.
 */

function useEntityBlockEditor(kind, type, {
  id: _id
} = {}) {
  const providerId = useEntityId(kind, type);
  const id = _id !== null && _id !== void 0 ? _id : providerId;
  const {
    content,
    blocks
  } = Object(external_wp_data_["useSelect"])(select => {
    const {
      getEditedEntityRecord
    } = select('core');
    const editedEntity = getEditedEntityRecord(kind, type, id);
    return {
      blocks: editedEntity.blocks,
      content: editedEntity.content
    };
  }, [kind, type, id]);
  const {
    __unstableCreateUndoLevel,
    editEntityRecord
  } = Object(external_wp_data_["useDispatch"])('core');
  Object(external_wp_element_["useEffect"])(() => {
    // Load the blocks from the content if not already in state
    // Guard against other instances that might have
    // set content to a function already or the blocks are already in state.
    if (content && typeof content !== 'function' && !blocks) {
      const parsedContent = Object(external_wp_blocks_["parse"])(content);
      editEntityRecord(kind, type, id, {
        blocks: parsedContent
      }, {
        undoIgnore: true
      });
    }
  }, [content]);
  const onChange = Object(external_wp_element_["useCallback"])((newBlocks, options) => {
    const {
      selection
    } = options;
    const edits = {
      blocks: newBlocks,
      selection
    };
    const noChange = blocks === edits.blocks;

    if (noChange) {
      return __unstableCreateUndoLevel(kind, type, id);
    } // We create a new function here on every persistent edit
    // to make sure the edit makes the post dirty and creates
    // a new undo level.


    edits.content = ({
      blocks: blocksForSerialization = []
    }) => Object(external_wp_blocks_["__unstableSerializeAndClean"])(blocksForSerialization);

    editEntityRecord(kind, type, id, edits);
  }, [kind, type, id, blocks]);
  const onInput = Object(external_wp_element_["useCallback"])((newBlocks, options) => {
    const {
      selection
    } = options;
    const edits = {
      blocks: newBlocks,
      selection
    };
    editEntityRecord(kind, type, id, edits);
  }, [kind, type, id]);
  return [blocks !== null && blocks !== void 0 ? blocks : entity_provider_EMPTY_ARRAY, onInput, onChange];
}

// EXTERNAL MODULE: external ["wp","htmlEntities"]
var external_wp_htmlEntities_ = __webpack_require__("rmEH");

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/fetch/__experimental-fetch-link-suggestions.js
/**
 * WordPress dependencies
 */




/**
 * Filters the search by type
 *
 * @typedef { 'post' | 'term' | 'post-format' } WPLinkSearchType
 */

/**
 * A link with an id may be of kind post-type or taxonomy
 *
 * @typedef { 'post-type' | 'taxonomy' } WPKind
 */

/**
 * @typedef WPLinkSearchOptions
 *
 * @property {boolean}             [isInitialSuggestions] Displays initial search suggestions, when true.
 * @property {WPLinkSearchType}    [type]                 Filters by search type.
 * @property {string}              [subtype]              Slug of the post-type or taxonomy.
 * @property {number}              [page]                 Which page of results to return.
 * @property {number}              [perPage]              Search results per page.
 */

/**
 * @typedef WPLinkSearchResult
 *
 * @property {number} id     Post or term id.
 * @property {string} url    Link url.
 * @property {string} title  Title of the link.
 * @property {string} type   The taxonomy or post type slug or type URL.
 * @property {WPKind} [kind] Link kind of post-type or taxonomy
 */

/**
 * @typedef WPEditorSettings
 *
 * @property {boolean} [ disablePostFormats ] Disables post formats, when true.
 */

/**
 * Fetches link suggestions from the API.
 *
 * @async
 * @param {string}              search
 * @param {WPLinkSearchOptions} [searchOptions]
 * @param {WPEditorSettings}    [settings]
 *
 * @example
 * ```js
 * import { __experimentalFetchLinkSuggestions as fetchLinkSuggestions } from '@wordpress/core-data';
 *
 * //...
 *
 * export function initialize( id, settings ) {
 *
 * settings.__experimentalFetchLinkSuggestions = (
 *     search,
 *     searchOptions
 * ) => fetchLinkSuggestions( search, searchOptions, settings );
 * ```
 * @return {Promise< WPLinkSearchResult[] >} List of search suggestions
 */

const fetchLinkSuggestions = async (search, searchOptions = {}, settings = {}) => {
  const {
    isInitialSuggestions = false,
    type = undefined,
    subtype = undefined,
    page = undefined,
    perPage = isInitialSuggestions ? 3 : 20
  } = searchOptions;
  const {
    disablePostFormats = false
  } = settings;
  const queries = [];

  if (!type || type === 'post') {
    queries.push(external_wp_apiFetch_default()({
      path: Object(external_wp_url_["addQueryArgs"])('/wp/v2/search', {
        search,
        page,
        per_page: perPage,
        type: 'post',
        subtype
      })
    }).then(results => {
      return results.map(result => {
        return { ...result,
          meta: {
            kind: 'post-type',
            subtype
          }
        };
      });
    }).catch(() => []) // fail by returning no results
    );
  }

  if (!type || type === 'term') {
    queries.push(external_wp_apiFetch_default()({
      path: Object(external_wp_url_["addQueryArgs"])('/wp/v2/search', {
        search,
        page,
        per_page: perPage,
        type: 'term',
        subtype
      })
    }).then(results => {
      return results.map(result => {
        return { ...result,
          meta: {
            kind: 'taxonomy',
            subtype
          }
        };
      });
    }).catch(() => []));
  }

  if (!disablePostFormats && (!type || type === 'post-format')) {
    queries.push(external_wp_apiFetch_default()({
      path: Object(external_wp_url_["addQueryArgs"])('/wp/v2/search', {
        search,
        page,
        per_page: perPage,
        type: 'post-format',
        subtype
      })
    }).then(results => {
      return results.map(result => {
        return { ...result,
          meta: {
            kind: 'taxonomy',
            subtype
          }
        };
      });
    }).catch(() => []));
  }

  return Promise.all(queries).then(results => {
    return results.reduce((accumulator, current) => accumulator.concat(current), //flatten list
    []).filter(
    /**
     * @param {{ id: number }} result
     */
    result => {
      return !!result.id;
    }).slice(0, perPage).map(
    /**
     * @param {{ id: number, url:string, title?:string, subtype?: string, type?: string }} result
     */
    result => {
      var _result$meta;

      return {
        id: result.id,
        url: result.url,
        title: Object(external_wp_htmlEntities_["decodeEntities"])(result.title || '') || Object(external_wp_i18n_["__"])('(no title)'),
        type: result.subtype || result.type,
        kind: result === null || result === void 0 ? void 0 : (_result$meta = result.meta) === null || _result$meta === void 0 ? void 0 : _result$meta.kind
      };
    });
  });
};

/* harmony default export */ var _experimental_fetch_link_suggestions = (fetchLinkSuggestions);

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/fetch/__experimental-fetch-remote-url-data.js
/**
 * WordPress dependencies
 */


/**
 * @typedef WPRemoteUrlData
 *
 * @property {string} title     contents of the remote URL's `<title>` tag.
 */

/**
 * Fetches data about a remote URL.
 * eg: <title> tag, favicon...etc.
 *
 * @async
 * @param {string}              url
 *
 * @example
 * ```js
 * import { __experimentalFetchRemoteUrlData as fetchRemoteUrlData } from '@wordpress/core-data';
 *
 * //...
 *
 * export function initialize( id, settings ) {
 *
 * settings.__experimentalFetchRemoteUrlData = (
 *     url
 * ) => fetchRemoteUrlData( url );
 * ```
 * @return {Promise< WPRemoteUrlData[] >} Remote URL data.
 */

const fetchRemoteUrlData = async url => {
  const endpoint = '/__experimental/url-details';
  const args = {
    url: Object(external_wp_url_["prependHTTP"])(url)
  };
  return external_wp_apiFetch_default()({
    path: Object(external_wp_url_["addQueryArgs"])(endpoint, args)
  });
};

/* harmony default export */ var _experimental_fetch_remote_url_data = (fetchRemoteUrlData);

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/fetch/index.js



// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */









 // The entity selectors/resolvers and actions are shortcuts to their generic equivalents
// (getEntityRecord, getEntityRecords, updateEntityRecord, updateEntityRecordss)
// Instead of getEntityRecord, the consumer could use more user-frieldly named selector: getPostType, getTaxonomy...
// The "kind" and the "name" of the entity are combined to generate these shortcuts.

const entitySelectors = defaultEntities.reduce((result, entity) => {
  const {
    kind,
    name
  } = entity;

  result[getMethodName(kind, name)] = (state, key) => getEntityRecord(state, kind, name, key);

  result[getMethodName(kind, name, 'get', true)] = (state, ...args) => getEntityRecords(state, kind, name, ...args);

  return result;
}, {});
const entityResolvers = defaultEntities.reduce((result, entity) => {
  const {
    kind,
    name
  } = entity;

  result[getMethodName(kind, name)] = key => resolvers_getEntityRecord(kind, name, key);

  const pluralMethodName = getMethodName(kind, name, 'get', true);

  result[pluralMethodName] = (...args) => resolvers_getEntityRecords(kind, name, ...args);

  result[pluralMethodName].shouldInvalidate = (action, ...args) => resolvers_getEntityRecords.shouldInvalidate(action, kind, name, ...args);

  return result;
}, {});
const entityActions = defaultEntities.reduce((result, entity) => {
  const {
    kind,
    name
  } = entity;

  result[getMethodName(kind, name, 'save')] = key => saveEntityRecord(kind, name, key);

  result[getMethodName(kind, name, 'delete')] = (key, query) => deleteEntityRecord(kind, name, key, query);

  return result;
}, {});
const storeConfig = {
  reducer: build_module_reducer,
  controls: { ...build_module_controls,
    ...external_wp_dataControls_["controls"]
  },
  actions: { ...build_module_actions_namespaceObject,
    ...entityActions,
    ...locks_actions_namespaceObject
  },
  selectors: { ...build_module_selectors_namespaceObject,
    ...entitySelectors,
    ...locks_selectors_namespaceObject
  },
  resolvers: { ...resolvers_namespaceObject,
    ...entityResolvers
  }
};
/**
 * Store definition for the code data namespace.
 *
 * @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/data/README.md#createReduxStore
 *
 * @type {Object}
 */

const build_module_store = Object(external_wp_data_["createReduxStore"])(STORE_NAME, storeConfig);
Object(external_wp_data_["register"])(build_module_store);





/***/ }),

/***/ "l3Sj":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ }),

/***/ "pPDe":
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

/***/ "rl8x":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["isShallowEqual"]; }());

/***/ }),

/***/ "rmEH":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["htmlEntities"]; }());

/***/ }),

/***/ "ywyh":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["apiFetch"]; }());

>>>>>>> master
/***/ })

/******/ });