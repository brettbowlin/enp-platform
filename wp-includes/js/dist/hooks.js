this["wp"] = this["wp"] || {}; this["wp"]["hooks"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 433);
=======
/******/ 	return __webpack_require__(__webpack_require__.s = "gEOj");
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

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

=======
/***/ "gEOj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "defaultHooks", function() { return /* binding */ defaultHooks; });
__webpack_require__.d(__webpack_exports__, "createHooks", function() { return /* reexport */ build_module_createHooks; });
__webpack_require__.d(__webpack_exports__, "addAction", function() { return /* binding */ addAction; });
__webpack_require__.d(__webpack_exports__, "addFilter", function() { return /* binding */ addFilter; });
__webpack_require__.d(__webpack_exports__, "removeAction", function() { return /* binding */ removeAction; });
__webpack_require__.d(__webpack_exports__, "removeFilter", function() { return /* binding */ removeFilter; });
__webpack_require__.d(__webpack_exports__, "hasAction", function() { return /* binding */ hasAction; });
__webpack_require__.d(__webpack_exports__, "hasFilter", function() { return /* binding */ hasFilter; });
__webpack_require__.d(__webpack_exports__, "removeAllActions", function() { return /* binding */ removeAllActions; });
__webpack_require__.d(__webpack_exports__, "removeAllFilters", function() { return /* binding */ removeAllFilters; });
__webpack_require__.d(__webpack_exports__, "doAction", function() { return /* binding */ doAction; });
__webpack_require__.d(__webpack_exports__, "applyFilters", function() { return /* binding */ applyFilters; });
__webpack_require__.d(__webpack_exports__, "currentAction", function() { return /* binding */ currentAction; });
__webpack_require__.d(__webpack_exports__, "currentFilter", function() { return /* binding */ currentFilter; });
__webpack_require__.d(__webpack_exports__, "doingAction", function() { return /* binding */ doingAction; });
__webpack_require__.d(__webpack_exports__, "doingFilter", function() { return /* binding */ doingFilter; });
__webpack_require__.d(__webpack_exports__, "didAction", function() { return /* binding */ didAction; });
__webpack_require__.d(__webpack_exports__, "didFilter", function() { return /* binding */ didFilter; });
__webpack_require__.d(__webpack_exports__, "actions", function() { return /* binding */ actions; });
__webpack_require__.d(__webpack_exports__, "filters", function() { return /* binding */ filters; });

>>>>>>> master
// CONCATENATED MODULE: ./node_modules/@wordpress/hooks/build-module/validateNamespace.js
/**
 * Validate a namespace string.
 *
 * @param  {string} namespace The namespace to validate - should take the form
 *                            `vendor/plugin/function`.
 *
 * @return {boolean}             Whether the namespace is valid.
 */
function validateNamespace(namespace) {
  if ('string' !== typeof namespace || '' === namespace) {
    // eslint-disable-next-line no-console
    console.error('The namespace must be a non-empty string.');
    return false;
  }

  if (!/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(namespace)) {
    // eslint-disable-next-line no-console
    console.error('The namespace can only contain numbers, letters, dashes, periods, underscores and slashes.');
    return false;
  }

  return true;
}

/* harmony default export */ var build_module_validateNamespace = (validateNamespace);

// CONCATENATED MODULE: ./node_modules/@wordpress/hooks/build-module/validateHookName.js
/**
 * Validate a hookName string.
 *
 * @param  {string} hookName The hook name to validate. Should be a non empty string containing
 *                           only numbers, letters, dashes, periods and underscores. Also,
 *                           the hook name cannot begin with `__`.
 *
 * @return {boolean}            Whether the hook name is valid.
 */
function validateHookName(hookName) {
  if ('string' !== typeof hookName || '' === hookName) {
    // eslint-disable-next-line no-console
    console.error('The hook name must be a non-empty string.');
    return false;
  }

  if (/^__/.test(hookName)) {
    // eslint-disable-next-line no-console
    console.error('The hook name cannot begin with `__`.');
    return false;
  }

  if (!/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(hookName)) {
    // eslint-disable-next-line no-console
    console.error('The hook name can only contain numbers, letters, dashes, periods and underscores.');
    return false;
  }

  return true;
}

/* harmony default export */ var build_module_validateHookName = (validateHookName);

// CONCATENATED MODULE: ./node_modules/@wordpress/hooks/build-module/createAddHook.js
/**
 * Internal dependencies
 */


<<<<<<< HEAD
=======
/**
 * @callback AddHook
 *
 * Adds the hook to the appropriate hooks container.
 *
 * @param {string}               hookName  Name of hook to add
 * @param {string}               namespace The unique namespace identifying the callback in the form `vendor/plugin/function`.
 * @param {import('.').Callback} callback  Function to call when the hook is run
 * @param {number}               [priority=10]  Priority of this hook
 */
>>>>>>> master

/**
 * Returns a function which, when invoked, will add a hook.
 *
<<<<<<< HEAD
 * @param  {Object}   hooks Stored hooks, keyed by hook name.
 *
 * @return {Function}       Function that adds a new hook.
 */

function createAddHook(hooks) {
  /**
   * Adds the hook to the appropriate hooks container.
   *
   * @param {string}   hookName  Name of hook to add
   * @param {string}   namespace The unique namespace identifying the callback in the form `vendor/plugin/function`.
   * @param {Function} callback  Function to call when the hook is run
   * @param {?number}  priority  Priority of this hook (default=10)
   */
  return function addHook(hookName, namespace, callback) {
    var priority = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 10;
=======
 * @param  {import('.').Hooks}    hooks Hooks instance.
 * @param  {import('.').StoreKey} storeKey
 *
 * @return {AddHook} Function that adds a new hook.
 */

function createAddHook(hooks, storeKey) {
  return function addHook(hookName, namespace, callback, priority = 10) {
    const hooksStore = hooks[storeKey];
>>>>>>> master

    if (!build_module_validateHookName(hookName)) {
      return;
    }

    if (!build_module_validateNamespace(namespace)) {
      return;
    }

    if ('function' !== typeof callback) {
      // eslint-disable-next-line no-console
      console.error('The hook callback must be a function.');
      return;
    } // Validate numeric priority


    if ('number' !== typeof priority) {
      // eslint-disable-next-line no-console
      console.error('If specified, the hook priority must be a number.');
      return;
    }

<<<<<<< HEAD
    var handler = {
      callback: callback,
      priority: priority,
      namespace: namespace
    };

    if (hooks[hookName]) {
      // Find the correct insert index of the new hook.
      var handlers = hooks[hookName].handlers;
      var i;
=======
    const handler = {
      callback,
      priority,
      namespace
    };

    if (hooksStore[hookName]) {
      // Find the correct insert index of the new hook.
      const handlers = hooksStore[hookName].handlers;
      /** @type {number} */

      let i;
>>>>>>> master

      for (i = handlers.length; i > 0; i--) {
        if (priority >= handlers[i - 1].priority) {
          break;
        }
      }

      if (i === handlers.length) {
        // If append, operate via direct assignment.
        handlers[i] = handler;
      } else {
        // Otherwise, insert before index via splice.
        handlers.splice(i, 0, handler);
      } // We may also be currently executing this hook.  If the callback
      // we're adding would come after the current callback, there's no
      // problem; otherwise we need to increase the execution index of
      // any other runs by 1 to account for the added element.


<<<<<<< HEAD
      (hooks.__current || []).forEach(function (hookInfo) {
=======
      hooksStore.__current.forEach(hookInfo => {
>>>>>>> master
        if (hookInfo.name === hookName && hookInfo.currentIndex >= i) {
          hookInfo.currentIndex++;
        }
      });
    } else {
      // This is the first hook of its type.
<<<<<<< HEAD
      hooks[hookName] = {
=======
      hooksStore[hookName] = {
>>>>>>> master
        handlers: [handler],
        runs: 0
      };
    }

    if (hookName !== 'hookAdded') {
<<<<<<< HEAD
      doAction('hookAdded', hookName, namespace, callback, priority);
=======
      hooks.doAction('hookAdded', hookName, namespace, callback, priority);
>>>>>>> master
    }
  };
}

/* harmony default export */ var build_module_createAddHook = (createAddHook);

// CONCATENATED MODULE: ./node_modules/@wordpress/hooks/build-module/createRemoveHook.js
/**
 * Internal dependencies
 */


<<<<<<< HEAD
=======
/**
 * @callback RemoveHook
 * Removes the specified callback (or all callbacks) from the hook with a given hookName
 * and namespace.
 *
 * @param {string} hookName  The name of the hook to modify.
 * @param {string} namespace The unique namespace identifying the callback in the
 *                           form `vendor/plugin/function`.
 *
 * @return {number | undefined} The number of callbacks removed.
 */
>>>>>>> master

/**
 * Returns a function which, when invoked, will remove a specified hook or all
 * hooks by the given name.
 *
<<<<<<< HEAD
 * @param  {Object}   hooks      Stored hooks, keyed by hook name.
 * @param  {boolean}     removeAll  Whether to remove all callbacks for a hookName, without regard to namespace. Used to create `removeAll*` functions.
 *
 * @return {Function}            Function that removes hooks.
 */

function createRemoveHook(hooks, removeAll) {
  /**
   * Removes the specified callback (or all callbacks) from the hook with a
   * given hookName and namespace.
   *
   * @param {string}    hookName  The name of the hook to modify.
   * @param {string}    namespace The unique namespace identifying the callback in the form `vendor/plugin/function`.
   *
   * @return {number}             The number of callbacks removed.
   */
  return function removeHook(hookName, namespace) {
=======
 * @param  {import('.').Hooks}    hooks Hooks instance.
 * @param  {import('.').StoreKey} storeKey
 * @param  {boolean}              [removeAll=false] Whether to remove all callbacks for a hookName,
 *                                                  without regard to namespace. Used to create
 *                                                  `removeAll*` functions.
 *
 * @return {RemoveHook} Function that removes hooks.
 */

function createRemoveHook(hooks, storeKey, removeAll = false) {
  return function removeHook(hookName, namespace) {
    const hooksStore = hooks[storeKey];

>>>>>>> master
    if (!build_module_validateHookName(hookName)) {
      return;
    }

    if (!removeAll && !build_module_validateNamespace(namespace)) {
      return;
    } // Bail if no hooks exist by this name


<<<<<<< HEAD
    if (!hooks[hookName]) {
      return 0;
    }

    var handlersRemoved = 0;

    if (removeAll) {
      handlersRemoved = hooks[hookName].handlers.length;
      hooks[hookName] = {
        runs: hooks[hookName].runs,
=======
    if (!hooksStore[hookName]) {
      return 0;
    }

    let handlersRemoved = 0;

    if (removeAll) {
      handlersRemoved = hooksStore[hookName].handlers.length;
      hooksStore[hookName] = {
        runs: hooksStore[hookName].runs,
>>>>>>> master
        handlers: []
      };
    } else {
      // Try to find the specified callback to remove.
<<<<<<< HEAD
      var handlers = hooks[hookName].handlers;

      var _loop = function _loop(i) {
=======
      const handlers = hooksStore[hookName].handlers;

      for (let i = handlers.length - 1; i >= 0; i--) {
>>>>>>> master
        if (handlers[i].namespace === namespace) {
          handlers.splice(i, 1);
          handlersRemoved++; // This callback may also be part of a hook that is
          // currently executing.  If the callback we're removing
          // comes after the current callback, there's no problem;
          // otherwise we need to decrease the execution index of any
          // other runs by 1 to account for the removed element.

<<<<<<< HEAD
          (hooks.__current || []).forEach(function (hookInfo) {
=======
          hooksStore.__current.forEach(hookInfo => {
>>>>>>> master
            if (hookInfo.name === hookName && hookInfo.currentIndex >= i) {
              hookInfo.currentIndex--;
            }
          });
        }
<<<<<<< HEAD
      };

      for (var i = handlers.length - 1; i >= 0; i--) {
        _loop(i);
=======
>>>>>>> master
      }
    }

    if (hookName !== 'hookRemoved') {
<<<<<<< HEAD
      doAction('hookRemoved', hookName, namespace);
=======
      hooks.doAction('hookRemoved', hookName, namespace);
>>>>>>> master
    }

    return handlersRemoved;
  };
}

/* harmony default export */ var build_module_createRemoveHook = (createRemoveHook);

// CONCATENATED MODULE: ./node_modules/@wordpress/hooks/build-module/createHasHook.js
/**
<<<<<<< HEAD
 * Returns a function which, when invoked, will return whether any handlers are
 * attached to a particular hook.
 *
 * @param  {Object}   hooks Stored hooks, keyed by hook name.
 *
 * @return {Function}       Function that returns whether any handlers are
 *                          attached to a particular hook and optional namespace.
 */
function createHasHook(hooks) {
  /**
   * Returns whether any handlers are attached for the given hookName and optional namespace.
   *
   * @param {string}  hookName  The name of the hook to check for.
   * @param {?string} namespace Optional. The unique namespace identifying the callback
   *                                      in the form `vendor/plugin/function`.
   *
   * @return {boolean} Whether there are handlers that are attached to the given hook.
   */
  return function hasHook(hookName, namespace) {
    // Use the namespace if provided.
    if ('undefined' !== typeof namespace) {
      return hookName in hooks && hooks[hookName].handlers.some(function (hook) {
        return hook.namespace === namespace;
      });
    }

    return hookName in hooks;
=======
 * @callback HasHook
 *
 * Returns whether any handlers are attached for the given hookName and optional namespace.
 *
 * @param {string} hookName    The name of the hook to check for.
 * @param {string} [namespace] Optional. The unique namespace identifying the callback
 *                             in the form `vendor/plugin/function`.
 *
 * @return {boolean} Whether there are handlers that are attached to the given hook.
 */

/**
 * Returns a function which, when invoked, will return whether any handlers are
 * attached to a particular hook.
 *
 * @param  {import('.').Hooks}    hooks Hooks instance.
 * @param  {import('.').StoreKey} storeKey
 *
 * @return {HasHook} Function that returns whether any handlers are
 *                   attached to a particular hook and optional namespace.
 */
function createHasHook(hooks, storeKey) {
  return function hasHook(hookName, namespace) {
    const hooksStore = hooks[storeKey]; // Use the namespace if provided.

    if ('undefined' !== typeof namespace) {
      return hookName in hooksStore && hooksStore[hookName].handlers.some(hook => hook.namespace === namespace);
    }

    return hookName in hooksStore;
>>>>>>> master
  };
}

/* harmony default export */ var build_module_createHasHook = (createHasHook);

<<<<<<< HEAD
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(18);

// CONCATENATED MODULE: ./node_modules/@wordpress/hooks/build-module/createRunHook.js


=======
// CONCATENATED MODULE: ./node_modules/@wordpress/hooks/build-module/createRunHook.js
>>>>>>> master
/**
 * Returns a function which, when invoked, will execute all callbacks
 * registered to a hook of the specified type, optionally returning the final
 * value of the call chain.
 *
<<<<<<< HEAD
 * @param  {Object}   hooks          Stored hooks, keyed by hook name.
 * @param  {?boolean}    returnFirstArg Whether each hook callback is expected to
 *                                   return its first argument.
 *
 * @return {Function}                Function that runs hook callbacks.
 */
function createRunHook(hooks, returnFirstArg) {
  /**
   * Runs all callbacks for the specified hook.
   *
   * @param  {string} hookName The name of the hook to run.
   * @param  {...*}   args     Arguments to pass to the hook callbacks.
   *
   * @return {*}               Return value of runner, if applicable.
   */
  return function runHooks(hookName) {
    if (!hooks[hookName]) {
      hooks[hookName] = {
=======
 * @param  {import('.').Hooks}    hooks Hooks instance.
 * @param  {import('.').StoreKey} storeKey
 * @param  {boolean}              [returnFirstArg=false] Whether each hook callback is expected to
 *                                                       return its first argument.
 *
 * @return {(hookName:string, ...args: unknown[]) => unknown} Function that runs hook callbacks.
 */
function createRunHook(hooks, storeKey, returnFirstArg = false) {
  return function runHooks(hookName, ...args) {
    const hooksStore = hooks[storeKey];

    if (!hooksStore[hookName]) {
      hooksStore[hookName] = {
>>>>>>> master
        handlers: [],
        runs: 0
      };
    }

<<<<<<< HEAD
    hooks[hookName].runs++;
    var handlers = hooks[hookName].handlers; // The following code is stripped from production builds.

    if (false) {}

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

=======
    hooksStore[hookName].runs++;
    const handlers = hooksStore[hookName].handlers; // The following code is stripped from production builds.

    if (false) {}

>>>>>>> master
    if (!handlers || !handlers.length) {
      return returnFirstArg ? args[0] : undefined;
    }

<<<<<<< HEAD
    var hookInfo = {
=======
    const hookInfo = {
>>>>>>> master
      name: hookName,
      currentIndex: 0
    };

<<<<<<< HEAD
    hooks.__current.push(hookInfo);

    while (hookInfo.currentIndex < handlers.length) {
      var handler = handlers[hookInfo.currentIndex];
      var result = handler.callback.apply(null, args);
=======
    hooksStore.__current.push(hookInfo);

    while (hookInfo.currentIndex < handlers.length) {
      const handler = handlers[hookInfo.currentIndex];
      const result = handler.callback.apply(null, args);
>>>>>>> master

      if (returnFirstArg) {
        args[0] = result;
      }

      hookInfo.currentIndex++;
    }

<<<<<<< HEAD
    hooks.__current.pop();
=======
    hooksStore.__current.pop();
>>>>>>> master

    if (returnFirstArg) {
      return args[0];
    }
  };
}

/* harmony default export */ var build_module_createRunHook = (createRunHook);

// CONCATENATED MODULE: ./node_modules/@wordpress/hooks/build-module/createCurrentHook.js
/**
 * Returns a function which, when invoked, will return the name of the
 * currently running hook, or `null` if no hook of the given type is currently
 * running.
 *
<<<<<<< HEAD
 * @param  {Object}   hooks          Stored hooks, keyed by hook name.
 *
 * @return {Function}                Function that returns the current hook.
 */
function createCurrentHook(hooks) {
  /**
   * Returns the name of the currently running hook, or `null` if no hook of
   * the given type is currently running.
   *
   * @return {?string}             The name of the currently running hook, or
   *                               `null` if no hook is currently running.
   */
  return function currentHook() {
    if (!hooks.__current || !hooks.__current.length) {
      return null;
    }

    return hooks.__current[hooks.__current.length - 1].name;
=======
 * @param  {import('.').Hooks}    hooks Hooks instance.
 * @param  {import('.').StoreKey} storeKey
 *
 * @return {() => string | null} Function that returns the current hook name or null.
 */
function createCurrentHook(hooks, storeKey) {
  return function currentHook() {
    var _hooksStore$__current, _hooksStore$__current2;

    const hooksStore = hooks[storeKey];
    return (_hooksStore$__current = (_hooksStore$__current2 = hooksStore.__current[hooksStore.__current.length - 1]) === null || _hooksStore$__current2 === void 0 ? void 0 : _hooksStore$__current2.name) !== null && _hooksStore$__current !== void 0 ? _hooksStore$__current : null;
>>>>>>> master
  };
}

/* harmony default export */ var build_module_createCurrentHook = (createCurrentHook);

// CONCATENATED MODULE: ./node_modules/@wordpress/hooks/build-module/createDoingHook.js
/**
<<<<<<< HEAD
 * Returns a function which, when invoked, will return whether a hook is
 * currently being executed.
 *
 * @param  {Object}   hooks Stored hooks, keyed by hook name.
 *
 * @return {Function}       Function that returns whether a hook is currently
 *                          being executed.
 */
function createDoingHook(hooks) {
  /**
   * Returns whether a hook is currently being executed.
   *
   * @param  {?string} hookName The name of the hook to check for.  If
   *                            omitted, will check for any hook being executed.
   *
   * @return {boolean}             Whether the hook is being executed.
   */
  return function doingHook(hookName) {
    // If the hookName was not passed, check for any current hook.
    if ('undefined' === typeof hookName) {
      return 'undefined' !== typeof hooks.__current[0];
    } // Return the __current hook.


    return hooks.__current[0] ? hookName === hooks.__current[0].name : false;
=======
 * @callback DoingHook
 * Returns whether a hook is currently being executed.
 *
 * @param  {string} [hookName] The name of the hook to check for.  If
 *                             omitted, will check for any hook being executed.
 *
 * @return {boolean} Whether the hook is being executed.
 */

/**
 * Returns a function which, when invoked, will return whether a hook is
 * currently being executed.
 *
 * @param  {import('.').Hooks}    hooks Hooks instance.
 * @param  {import('.').StoreKey} storeKey
 *
 * @return {DoingHook} Function that returns whether a hook is currently
 *                     being executed.
 */
function createDoingHook(hooks, storeKey) {
  return function doingHook(hookName) {
    const hooksStore = hooks[storeKey]; // If the hookName was not passed, check for any current hook.

    if ('undefined' === typeof hookName) {
      return 'undefined' !== typeof hooksStore.__current[0];
    } // Return the __current hook.


    return hooksStore.__current[0] ? hookName === hooksStore.__current[0].name : false;
>>>>>>> master
  };
}

/* harmony default export */ var build_module_createDoingHook = (createDoingHook);

// CONCATENATED MODULE: ./node_modules/@wordpress/hooks/build-module/createDidHook.js
/**
 * Internal dependencies
 */

/**
<<<<<<< HEAD
 * Returns a function which, when invoked, will return the number of times a
 * hook has been called.
 *
 * @param  {Object}   hooks Stored hooks, keyed by hook name.
 *
 * @return {Function}       Function that returns a hook's call count.
 */

function createDidHook(hooks) {
  /**
   * Returns the number of times an action has been fired.
   *
   * @param  {string} hookName The hook name to check.
   *
   * @return {number}          The number of times the hook has run.
   */
  return function didHook(hookName) {
=======
 * @callback DidHook
 *
 * Returns the number of times an action has been fired.
 *
 * @param  {string} hookName The hook name to check.
 *
 * @return {number | undefined} The number of times the hook has run.
 */

/**
 * Returns a function which, when invoked, will return the number of times a
 * hook has been called.
 *
 * @param  {import('.').Hooks}    hooks Hooks instance.
 * @param  {import('.').StoreKey} storeKey
 *
 * @return {DidHook} Function that returns a hook's call count.
 */

function createDidHook(hooks, storeKey) {
  return function didHook(hookName) {
    const hooksStore = hooks[storeKey];

>>>>>>> master
    if (!build_module_validateHookName(hookName)) {
      return;
    }

<<<<<<< HEAD
    return hooks[hookName] && hooks[hookName].runs ? hooks[hookName].runs : 0;
=======
    return hooksStore[hookName] && hooksStore[hookName].runs ? hooksStore[hookName].runs : 0;
>>>>>>> master
  };
}

/* harmony default export */ var build_module_createDidHook = (createDidHook);

// CONCATENATED MODULE: ./node_modules/@wordpress/hooks/build-module/createHooks.js
/**
 * Internal dependencies
 */







/**
<<<<<<< HEAD
 * Returns an instance of the hooks object.
 *
 * @return {Object} Object that contains all hooks.
 */

function createHooks() {
  var actions = Object.create(null);
  var filters = Object.create(null);
  actions.__current = [];
  filters.__current = [];
  return {
    addAction: build_module_createAddHook(actions),
    addFilter: build_module_createAddHook(filters),
    removeAction: build_module_createRemoveHook(actions),
    removeFilter: build_module_createRemoveHook(filters),
    hasAction: build_module_createHasHook(actions),
    hasFilter: build_module_createHasHook(filters),
    removeAllActions: build_module_createRemoveHook(actions, true),
    removeAllFilters: build_module_createRemoveHook(filters, true),
    doAction: build_module_createRunHook(actions),
    applyFilters: build_module_createRunHook(filters, true),
    currentAction: build_module_createCurrentHook(actions),
    currentFilter: build_module_createCurrentHook(filters),
    doingAction: build_module_createDoingHook(actions),
    doingFilter: build_module_createDoingHook(filters),
    didAction: build_module_createDidHook(actions),
    didFilter: build_module_createDidHook(filters),
    actions: actions,
    filters: filters
  };
=======
 * Internal class for constructing hooks. Use `createHooks()` function
 *
 * Note, it is necessary to expose this class to make its type public.
 *
 * @private
 */

class createHooks_Hooks {
  constructor() {
    /** @type {import('.').Store} actions */
    this.actions = Object.create(null);
    this.actions.__current = [];
    /** @type {import('.').Store} filters */

    this.filters = Object.create(null);
    this.filters.__current = [];
    this.addAction = build_module_createAddHook(this, 'actions');
    this.addFilter = build_module_createAddHook(this, 'filters');
    this.removeAction = build_module_createRemoveHook(this, 'actions');
    this.removeFilter = build_module_createRemoveHook(this, 'filters');
    this.hasAction = build_module_createHasHook(this, 'actions');
    this.hasFilter = build_module_createHasHook(this, 'filters');
    this.removeAllActions = build_module_createRemoveHook(this, 'actions', true);
    this.removeAllFilters = build_module_createRemoveHook(this, 'filters', true);
    this.doAction = build_module_createRunHook(this, 'actions');
    this.applyFilters = build_module_createRunHook(this, 'filters', true);
    this.currentAction = build_module_createCurrentHook(this, 'actions');
    this.currentFilter = build_module_createCurrentHook(this, 'filters');
    this.doingAction = build_module_createDoingHook(this, 'actions');
    this.doingFilter = build_module_createDoingHook(this, 'filters');
    this.didAction = build_module_createDidHook(this, 'actions');
    this.didFilter = build_module_createDidHook(this, 'filters');
  }

}
/** @typedef {_Hooks} Hooks */

/**
 * Returns an instance of the hooks object.
 *
 * @return {Hooks} A Hooks instance.
 */

function createHooks() {
  return new createHooks_Hooks();
>>>>>>> master
}

/* harmony default export */ var build_module_createHooks = (createHooks);

// CONCATENATED MODULE: ./node_modules/@wordpress/hooks/build-module/index.js
<<<<<<< HEAD
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addAction", function() { return addAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFilter", function() { return addFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAction", function() { return removeAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFilter", function() { return removeFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasAction", function() { return hasAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasFilter", function() { return hasFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAllActions", function() { return removeAllActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAllFilters", function() { return removeAllFilters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doAction", function() { return doAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyFilters", function() { return applyFilters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentAction", function() { return currentAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentFilter", function() { return currentFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doingAction", function() { return doingAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doingFilter", function() { return doingFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "didAction", function() { return didAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "didFilter", function() { return didFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return build_module_actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filters", function() { return build_module_filters; });
/* concated harmony reexport createHooks */__webpack_require__.d(__webpack_exports__, "createHooks", function() { return build_module_createHooks; });
=======
>>>>>>> master
/**
 * Internal dependencies
 */

<<<<<<< HEAD

var _createHooks = build_module_createHooks(),
    addAction = _createHooks.addAction,
    addFilter = _createHooks.addFilter,
    removeAction = _createHooks.removeAction,
    removeFilter = _createHooks.removeFilter,
    hasAction = _createHooks.hasAction,
    hasFilter = _createHooks.hasFilter,
    removeAllActions = _createHooks.removeAllActions,
    removeAllFilters = _createHooks.removeAllFilters,
    doAction = _createHooks.doAction,
    applyFilters = _createHooks.applyFilters,
    currentAction = _createHooks.currentAction,
    currentFilter = _createHooks.currentFilter,
    doingAction = _createHooks.doingAction,
    doingFilter = _createHooks.doingFilter,
    didAction = _createHooks.didAction,
    didFilter = _createHooks.didFilter,
    build_module_actions = _createHooks.actions,
    build_module_filters = _createHooks.filters;

=======
/** @typedef {(...args: any[])=>any} Callback */

/**
 * @typedef Handler
 * @property {Callback} callback  The callback
 * @property {string}   namespace The namespace
 * @property {number}   priority  The namespace
 */

/**
 * @typedef Hook
 * @property {Handler[]} handlers Array of handlers
 * @property {number}    runs     Run counter
 */

/**
 * @typedef Current
 * @property {string} name         Hook name
 * @property {number} currentIndex The index
 */

/**
 * @typedef {Record<string, Hook> & {__current: Current[]}} Store
 */

/**
 * @typedef {'actions' | 'filters'} StoreKey
 */

/**
 * @typedef {import('./createHooks').Hooks} Hooks
 */

const defaultHooks = build_module_createHooks();
const {
  addAction,
  addFilter,
  removeAction,
  removeFilter,
  hasAction,
  hasFilter,
  removeAllActions,
  removeAllFilters,
  doAction,
  applyFilters,
  currentAction,
  currentFilter,
  doingAction,
  doingFilter,
  didAction,
  didFilter,
  actions,
  filters
} = defaultHooks;
>>>>>>> master



/***/ })

/******/ });