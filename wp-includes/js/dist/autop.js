this["wp"] = this["wp"] || {}; this["wp"]["autop"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 279);
=======
/******/ 	return __webpack_require__(__webpack_require__.s = "zbAn");
>>>>>>> master
/******/ })
/************************************************************************/
/******/ ({

<<<<<<< HEAD
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

/***/ 279:
=======
/***/ "zbAn":
>>>>>>> master
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autop", function() { return autop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removep", function() { return removep; });
<<<<<<< HEAD
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);


/**
 * The regular expression for an HTML element.
 *
 * @type {string}
 */
var htmlSplitRegex = function () {
  /* eslint-disable no-multi-spaces */
  var comments = '!' + // Start of comment, after the <.
=======
/**
 * The regular expression for an HTML element.
 *
 * @type {RegExp}
 */
const htmlSplitRegex = (() => {
  /* eslint-disable no-multi-spaces */
  const comments = '!' + // Start of comment, after the <.
>>>>>>> master
  '(?:' + // Unroll the loop: Consume everything until --> is found.
  '-(?!->)' + // Dash not followed by end of comment.
  '[^\\-]*' + // Consume non-dashes.
  ')*' + // Loop possessively.
  '(?:-->)?'; // End of comment. If not found, match all input.

<<<<<<< HEAD
  var cdata = '!\\[CDATA\\[' + // Start of comment, after the <.
=======
  const cdata = '!\\[CDATA\\[' + // Start of comment, after the <.
>>>>>>> master
  '[^\\]]*' + // Consume non-].
  '(?:' + // Unroll the loop: Consume everything until ]]> is found.
  '](?!]>)' + // One ] not followed by end of comment.
  '[^\\]]*' + // Consume non-].
  ')*?' + // Loop possessively.
  '(?:]]>)?'; // End of comment. If not found, match all input.

<<<<<<< HEAD
  var escaped = '(?=' + // Is the element escaped?
  '!--' + '|' + '!\\[CDATA\\[' + ')' + '((?=!-)' + // If yes, which type?
  comments + '|' + cdata + ')';
  var regex = '(' + // Capture the entire match.
=======
  const escaped = '(?=' + // Is the element escaped?
  '!--' + '|' + '!\\[CDATA\\[' + ')' + '((?=!-)' + // If yes, which type?
  comments + '|' + cdata + ')';
  const regex = '(' + // Capture the entire match.
>>>>>>> master
  '<' + // Find start of element.
  '(' + // Conditional expression follows.
  escaped + // Find end of escaped element.
  '|' + // ... else ...
  '[^>]*>?' + // Find end of normal element.
  ')' + ')';
  return new RegExp(regex);
  /* eslint-enable no-multi-spaces */
<<<<<<< HEAD
}();
=======
})();
>>>>>>> master
/**
 * Separate HTML elements and comments from the text.
 *
 * @param  {string} input The text which has to be formatted.
<<<<<<< HEAD
 * @return {Array}        The formatted text.
=======
 * @return {string[]}        The formatted text.
>>>>>>> master
 */


function htmlSplit(input) {
<<<<<<< HEAD
  var parts = [];
  var workingInput = input;
  var match;

  while (match = workingInput.match(htmlSplitRegex)) {
    parts.push(workingInput.slice(0, match.index));
    parts.push(match[0]);
    workingInput = workingInput.slice(match.index + match[0].length);
=======
  const parts = [];
  let workingInput = input;
  let match;

  while (match = workingInput.match(htmlSplitRegex)) {
    // The `match` result, when invoked on a RegExp with the `g` flag (`/foo/g`) will not include `index`.
    // If the `g` flag is omitted, `index` is included.
    // `htmlSplitRegex` does not have the `g` flag so we can assert it will have an index number.
    // Assert `match.index` is a number.
    const index =
    /** @type {number} */
    match.index;
    parts.push(workingInput.slice(0, index));
    parts.push(match[0]);
    workingInput = workingInput.slice(index + match[0].length);
>>>>>>> master
  }

  if (workingInput.length) {
    parts.push(workingInput);
  }

  return parts;
}
/**
 * Replace characters or phrases within HTML elements only.
 *
<<<<<<< HEAD
 * @param  {string} haystack     The text which has to be formatted.
 * @param  {Object} replacePairs In the form {from: 'to', ...}.
 * @return {string}              The formatted text.
=======
 * @param  {string}                haystack     The text which has to be formatted.
 * @param  {Record<string,string>} replacePairs In the form {from: 'to', …}.
 * @return {string}                             The formatted text.
>>>>>>> master
 */


function replaceInHtmlTags(haystack, replacePairs) {
  // Find all elements.
<<<<<<< HEAD
  var textArr = htmlSplit(haystack);
  var changed = false; // Extract all needles.

  var needles = Object.keys(replacePairs); // Loop through delimiters (elements) only.

  for (var i = 1; i < textArr.length; i += 2) {
    for (var j = 0; j < needles.length; j++) {
      var needle = needles[j];
=======
  const textArr = htmlSplit(haystack);
  let changed = false; // Extract all needles.

  const needles = Object.keys(replacePairs); // Loop through delimiters (elements) only.

  for (let i = 1; i < textArr.length; i += 2) {
    for (let j = 0; j < needles.length; j++) {
      const needle = needles[j];
>>>>>>> master

      if (-1 !== textArr[i].indexOf(needle)) {
        textArr[i] = textArr[i].replace(new RegExp(needle, 'g'), replacePairs[needle]);
        changed = true; // After one strtr() break out of the foreach loop and look at next element.

        break;
      }
    }
  }

  if (changed) {
    haystack = textArr.join('');
  }

  return haystack;
}
/**
 * Replaces double line-breaks with paragraph elements.
 *
 * A group of regex replaces used to identify text formatted with newlines and
 * replace double line-breaks with HTML paragraph tags. The remaining line-
 * breaks after conversion become `<br />` tags, unless br is set to 'false'.
 *
 * @param  {string}    text The text which has to be formatted.
 * @param  {boolean}   br   Optional. If set, will convert all remaining line-
 *                          breaks after paragraphing. Default true.
 *
 * @example
 *```js
 * import { autop } from '@wordpress/autop';
 * autop( 'my text' ); // "<p>my text</p>"
 * ```
 *
 * @return {string}         Text which has been converted into paragraph tags.
 */


<<<<<<< HEAD
function autop(text) {
  var br = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var preTags = [];
=======
function autop(text, br = true) {
  const preTags = [];
>>>>>>> master

  if (text.trim() === '') {
    return '';
  } // Just to make things a little easier, pad the end.


  text = text + '\n';
  /*
   * Pre tags shouldn't be touched by autop.
   * Replace pre tags with placeholders and bring them back after autop.
   */

  if (text.indexOf('<pre') !== -1) {
<<<<<<< HEAD
    var textParts = text.split('</pre>');
    var lastText = textParts.pop();
    text = '';

    for (var i = 0; i < textParts.length; i++) {
      var textPart = textParts[i];
      var start = textPart.indexOf('<pre'); // Malformed html?
=======
    const textParts = text.split('</pre>');
    const lastText = textParts.pop();
    text = '';

    for (let i = 0; i < textParts.length; i++) {
      const textPart = textParts[i];
      const start = textPart.indexOf('<pre'); // Malformed html?
>>>>>>> master

      if (start === -1) {
        text += textPart;
        continue;
      }

<<<<<<< HEAD
      var name = '<pre wp-pre-tag-' + i + '></pre>';
=======
      const name = '<pre wp-pre-tag-' + i + '></pre>';
>>>>>>> master
      preTags.push([name, textPart.substr(start) + '</pre>']);
      text += textPart.substr(0, start) + name;
    }

    text += lastText;
  } // Change multiple <br>s into two line breaks, which will turn into paragraphs.


  text = text.replace(/<br\s*\/?>\s*<br\s*\/?>/g, '\n\n');
<<<<<<< HEAD
  var allBlocks = '(?:table|thead|tfoot|caption|col|colgroup|tbody|tr|td|th|div|dl|dd|dt|ul|ol|li|pre|form|map|area|blockquote|address|math|style|p|h[1-6]|hr|fieldset|legend|section|article|aside|hgroup|header|footer|nav|figure|figcaption|details|menu|summary)'; // Add a double line break above block-level opening tags.
=======
  const allBlocks = '(?:table|thead|tfoot|caption|col|colgroup|tbody|tr|td|th|div|dl|dd|dt|ul|ol|li|pre|form|map|area|blockquote|address|math|style|p|h[1-6]|hr|fieldset|legend|section|article|aside|hgroup|header|footer|nav|figure|figcaption|details|menu|summary)'; // Add a double line break above block-level opening tags.
>>>>>>> master

  text = text.replace(new RegExp('(<' + allBlocks + '[\\s/>])', 'g'), '\n\n$1'); // Add a double line break below block-level closing tags.

  text = text.replace(new RegExp('(</' + allBlocks + '>)', 'g'), '$1\n\n'); // Standardize newline characters to "\n".

  text = text.replace(/\r\n|\r/g, '\n'); // Find newlines in all elements and add placeholders.

  text = replaceInHtmlTags(text, {
    '\n': ' <!-- wpnl --> '
  }); // Collapse line breaks before and after <option> elements so they don't get autop'd.

  if (text.indexOf('<option') !== -1) {
    text = text.replace(/\s*<option/g, '<option');
    text = text.replace(/<\/option>\s*/g, '</option>');
  }
  /*
   * Collapse line breaks inside <object> elements, before <param> and <embed> elements
   * so they don't get autop'd.
   */


  if (text.indexOf('</object>') !== -1) {
    text = text.replace(/(<object[^>]*>)\s*/g, '$1');
    text = text.replace(/\s*<\/object>/g, '</object>');
    text = text.replace(/\s*(<\/?(?:param|embed)[^>]*>)\s*/g, '$1');
  }
  /*
   * Collapse line breaks inside <audio> and <video> elements,
   * before and after <source> and <track> elements.
   */


  if (text.indexOf('<source') !== -1 || text.indexOf('<track') !== -1) {
    text = text.replace(/([<\[](?:audio|video)[^>\]]*[>\]])\s*/g, '$1');
    text = text.replace(/\s*([<\[]\/(?:audio|video)[>\]])/g, '$1');
    text = text.replace(/\s*(<(?:source|track)[^>]*>)\s*/g, '$1');
  } // Collapse line breaks before and after <figcaption> elements.


  if (text.indexOf('<figcaption') !== -1) {
    text = text.replace(/\s*(<figcaption[^>]*>)/, '$1');
    text = text.replace(/<\/figcaption>\s*/, '</figcaption>');
  } // Remove more than two contiguous line breaks.


  text = text.replace(/\n\n+/g, '\n\n'); // Split up the contents into an array of strings, separated by double line breaks.

<<<<<<< HEAD
  var texts = text.split(/\n\s*\n/).filter(Boolean); // Reset text prior to rebuilding.

  text = ''; // Rebuild the content as a string, wrapping every bit with a <p>.

  texts.forEach(function (textPiece) {
=======
  const texts = text.split(/\n\s*\n/).filter(Boolean); // Reset text prior to rebuilding.

  text = ''; // Rebuild the content as a string, wrapping every bit with a <p>.

  texts.forEach(textPiece => {
>>>>>>> master
    text += '<p>' + textPiece.replace(/^\n*|\n*$/g, '') + '</p>\n';
  }); // Under certain strange conditions it could create a P of entirely whitespace.

  text = text.replace(/<p>\s*<\/p>/g, ''); // Add a closing <p> inside <div>, <address>, or <form> tag if missing.

  text = text.replace(/<p>([^<]+)<\/(div|address|form)>/g, '<p>$1</p></$2>'); // If an opening or closing block element tag is wrapped in a <p>, unwrap it.

  text = text.replace(new RegExp('<p>\\s*(</?' + allBlocks + '[^>]*>)\\s*</p>', 'g'), '$1'); // In some cases <li> may get wrapped in <p>, fix them.

  text = text.replace(/<p>(<li.+?)<\/p>/g, '$1'); // If a <blockquote> is wrapped with a <p>, move it inside the <blockquote>.

  text = text.replace(/<p><blockquote([^>]*)>/gi, '<blockquote$1><p>');
  text = text.replace(/<\/blockquote><\/p>/g, '</p></blockquote>'); // If an opening or closing block element tag is preceded by an opening <p> tag, remove it.

  text = text.replace(new RegExp('<p>\\s*(</?' + allBlocks + '[^>]*>)', 'g'), '$1'); // If an opening or closing block element tag is followed by a closing <p> tag, remove it.

  text = text.replace(new RegExp('(</?' + allBlocks + '[^>]*>)\\s*</p>', 'g'), '$1'); // Optionally insert line breaks.

  if (br) {
    // Replace newlines that shouldn't be touched with a placeholder.
<<<<<<< HEAD
    text = text.replace(/<(script|style).*?<\/\\1>/g, function (match) {
      return match[0].replace(/\n/g, '<WPPreserveNewline />');
    }); // Normalize <br>

    text = text.replace(/<br>|<br\/>/g, '<br />'); // Replace any new line characters that aren't preceded by a <br /> with a <br />.

    text = text.replace(/(<br \/>)?\s*\n/g, function (a, b) {
      return b ? a : '<br />\n';
    }); // Replace newline placeholders with newlines.
=======
    text = text.replace(/<(script|style).*?<\/\\1>/g, match => match[0].replace(/\n/g, '<WPPreserveNewline />')); // Normalize <br>

    text = text.replace(/<br>|<br\/>/g, '<br />'); // Replace any new line characters that aren't preceded by a <br /> with a <br />.

    text = text.replace(/(<br \/>)?\s*\n/g, (a, b) => b ? a : '<br />\n'); // Replace newline placeholders with newlines.
>>>>>>> master

    text = text.replace(/<WPPreserveNewline \/>/g, '\n');
  } // If a <br /> tag is after an opening or closing block tag, remove it.


  text = text.replace(new RegExp('(</?' + allBlocks + '[^>]*>)\\s*<br />', 'g'), '$1'); // If a <br /> tag is before a subset of opening or closing block tags, remove it.

  text = text.replace(/<br \/>(\s*<\/?(?:p|li|div|dl|dd|dt|th|pre|td|ul|ol)[^>]*>)/g, '$1');
  text = text.replace(/\n<\/p>$/g, '</p>'); // Replace placeholder <pre> tags with their original content.

<<<<<<< HEAD
  preTags.forEach(function (preTag) {
    var _preTag = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(preTag, 2),
        name = _preTag[0],
        original = _preTag[1];

=======
  preTags.forEach(preTag => {
    const [name, original] = preTag;
>>>>>>> master
    text = text.replace(name, original);
  }); // Restore newlines in all elements.

  if (-1 !== text.indexOf('<!-- wpnl -->')) {
    text = text.replace(/\s?<!-- wpnl -->\s?/g, '\n');
  }

  return text;
}
/**
 * Replaces `<p>` tags with two line breaks. "Opposite" of autop().
 *
 * Replaces `<p>` tags with two line breaks except where the `<p>` has attributes.
 * Unifies whitespace. Indents `<li>`, `<dt>` and `<dd>` for better readability.
 *
 * @param  {string} html The content from the editor.
 *
 * @example
 * ```js
 * import { removep } from '@wordpress/autop';
 * removep( '<p>my text</p>' ); // "my text"
 * ```
 *
 * @return {string}      The content with stripped paragraph tags.
 */

function removep(html) {
<<<<<<< HEAD
  var blocklist = 'blockquote|ul|ol|li|dl|dt|dd|table|thead|tbody|tfoot|tr|th|td|h[1-6]|fieldset|figure';
  var blocklist1 = blocklist + '|div|p';
  var blocklist2 = blocklist + '|pre';
  var preserve = [];
  var preserveLinebreaks = false;
  var preserveBr = false;
=======
  const blocklist = 'blockquote|ul|ol|li|dl|dt|dd|table|thead|tbody|tfoot|tr|th|td|h[1-6]|fieldset|figure';
  const blocklist1 = blocklist + '|div|p';
  const blocklist2 = blocklist + '|pre';
  /** @type {string[]} */

  const preserve = [];
  let preserveLinebreaks = false;
  let preserveBr = false;
>>>>>>> master

  if (!html) {
    return '';
  } // Protect script and style tags.


  if (html.indexOf('<script') !== -1 || html.indexOf('<style') !== -1) {
<<<<<<< HEAD
    html = html.replace(/<(script|style)[^>]*>[\s\S]*?<\/\1>/g, function (match) {
=======
    html = html.replace(/<(script|style)[^>]*>[\s\S]*?<\/\1>/g, match => {
>>>>>>> master
      preserve.push(match);
      return '<wp-preserve>';
    });
  } // Protect pre tags.


  if (html.indexOf('<pre') !== -1) {
    preserveLinebreaks = true;
<<<<<<< HEAD
    html = html.replace(/<pre[^>]*>[\s\S]+?<\/pre>/g, function (a) {
=======
    html = html.replace(/<pre[^>]*>[\s\S]+?<\/pre>/g, a => {
>>>>>>> master
      a = a.replace(/<br ?\/?>(\r\n|\n)?/g, '<wp-line-break>');
      a = a.replace(/<\/?p( [^>]*)?>(\r\n|\n)?/g, '<wp-line-break>');
      return a.replace(/\r?\n/g, '<wp-line-break>');
    });
  } // Remove line breaks but keep <br> tags inside image captions.


  if (html.indexOf('[caption') !== -1) {
    preserveBr = true;
<<<<<<< HEAD
    html = html.replace(/\[caption[\s\S]+?\[\/caption\]/g, function (a) {
=======
    html = html.replace(/\[caption[\s\S]+?\[\/caption\]/g, a => {
>>>>>>> master
      return a.replace(/<br([^>]*)>/g, '<wp-temp-br$1>').replace(/[\r\n\t]+/, '');
    });
  } // Normalize white space characters before and after block tags.


  html = html.replace(new RegExp('\\s*</(' + blocklist1 + ')>\\s*', 'g'), '</$1>\n');
  html = html.replace(new RegExp('\\s*<((?:' + blocklist1 + ')(?: [^>]*)?)>', 'g'), '\n<$1>'); // Mark </p> if it has any attributes.

  html = html.replace(/(<p [^>]+>[\s\S]*?)<\/p>/g, '$1</p#>'); // Preserve the first <p> inside a <div>.

  html = html.replace(/<div( [^>]*)?>\s*<p>/gi, '<div$1>\n\n'); // Remove paragraph tags.

  html = html.replace(/\s*<p>/gi, '');
  html = html.replace(/\s*<\/p>\s*/gi, '\n\n'); // Normalize white space chars and remove multiple line breaks.

  html = html.replace(/\n[\s\u00a0]+\n/g, '\n\n'); // Replace <br> tags with line breaks.

<<<<<<< HEAD
  html = html.replace(/(\s*)<br ?\/?>\s*/gi, function (match, space) {
=======
  html = html.replace(/(\s*)<br ?\/?>\s*/gi, (_, space) => {
>>>>>>> master
    if (space && space.indexOf('\n') !== -1) {
      return '\n\n';
    }

    return '\n';
  }); // Fix line breaks around <div>.

  html = html.replace(/\s*<div/g, '\n<div');
  html = html.replace(/<\/div>\s*/g, '</div>\n'); // Fix line breaks around caption shortcodes.

  html = html.replace(/\s*\[caption([^\[]+)\[\/caption\]\s*/gi, '\n\n[caption$1[/caption]\n\n');
  html = html.replace(/caption\]\n\n+\[caption/g, 'caption]\n\n[caption'); // Pad block elements tags with a line break.

  html = html.replace(new RegExp('\\s*<((?:' + blocklist2 + ')(?: [^>]*)?)\\s*>', 'g'), '\n<$1>');
  html = html.replace(new RegExp('\\s*</(' + blocklist2 + ')>\\s*', 'g'), '</$1>\n'); // Indent <li>, <dt> and <dd> tags.

  html = html.replace(/<((li|dt|dd)[^>]*)>/g, ' \t<$1>'); // Fix line breaks around <select> and <option>.

  if (html.indexOf('<option') !== -1) {
    html = html.replace(/\s*<option/g, '\n<option');
    html = html.replace(/\s*<\/select>/g, '\n</select>');
  } // Pad <hr> with two line breaks.


  if (html.indexOf('<hr') !== -1) {
    html = html.replace(/\s*<hr( [^>]*)?>\s*/g, '\n\n<hr$1>\n\n');
  } // Remove line breaks in <object> tags.


  if (html.indexOf('<object') !== -1) {
<<<<<<< HEAD
    html = html.replace(/<object[\s\S]+?<\/object>/g, function (a) {
=======
    html = html.replace(/<object[\s\S]+?<\/object>/g, a => {
>>>>>>> master
      return a.replace(/[\r\n]+/g, '');
    });
  } // Unmark special paragraph closing tags.


  html = html.replace(/<\/p#>/g, '</p>\n'); // Pad remaining <p> tags whit a line break.

  html = html.replace(/\s*(<p [^>]+>[\s\S]*?<\/p>)/g, '\n$1'); // Trim.

  html = html.replace(/^\s+/, '');
  html = html.replace(/[\s\u00a0]+$/, '');

  if (preserveLinebreaks) {
    html = html.replace(/<wp-line-break>/g, '\n');
  }

  if (preserveBr) {
    html = html.replace(/<wp-temp-br([^>]*)>/g, '<br$1>');
  } // Restore preserved tags.


  if (preserve.length) {
<<<<<<< HEAD
    html = html.replace(/<wp-preserve>/g, function () {
      return preserve.shift();
=======
    html = html.replace(/<wp-preserve>/g, () => {
      return (
        /** @type {string} */
        preserve.shift()
      );
>>>>>>> master
    });
  }

  return html;
}


<<<<<<< HEAD
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

=======
>>>>>>> master
/***/ })

/******/ });