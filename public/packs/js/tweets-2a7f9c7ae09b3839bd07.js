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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/tweets.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/tweets.js":
/*!****************************************!*\
  !*** ./app/javascript/packs/tweets.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_tweets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/tweets */ "./app/javascript/src/tweets.jsx");
/* harmony import */ var _src_tweets__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_tweets__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./app/javascript/src/tweets.jsx":
/*!***************************************!*\
  !*** ./app/javascript/src/tweets.jsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/User/fswd-twitter-clone/app/javascript/src/tweets.jsx: Identifier 'React' has already been declared. (2:7)\n\n  1 | import React from 'react'\n> 2 | import React, { useState, useEffect } from 'react'\n    |        ^\n  3 | import { getTweets, postTweet, deleteTweet } from '../packs/requests';\n  4 | import { getCurrentUser, countUsersTweets } from '../packs/utils';\n  5 | import ReactDOM from 'react-dom'\n    at instantiate (/Users/User/fswd-twitter-clone/node_modules/@babel/parser/lib/index.js:72:32)\n    at constructor (/Users/User/fswd-twitter-clone/node_modules/@babel/parser/lib/index.js:358:12)\n    at Object.raise (/Users/User/fswd-twitter-clone/node_modules/@babel/parser/lib/index.js:3334:19)\n    at ScopeHandler.checkRedeclarationInScope (/Users/User/fswd-twitter-clone/node_modules/@babel/parser/lib/index.js:3518:19)\n    at ScopeHandler.declareName (/Users/User/fswd-twitter-clone/node_modules/@babel/parser/lib/index.js:3484:12)\n    at Object.declareNameFromIdentifier (/Users/User/fswd-twitter-clone/node_modules/@babel/parser/lib/index.js:12057:16)\n    at Object.checkIdentifier (/Users/User/fswd-twitter-clone/node_modules/@babel/parser/lib/index.js:12052:12)\n    at Object.checkLVal (/Users/User/fswd-twitter-clone/node_modules/@babel/parser/lib/index.js:11978:12)\n    at Object.finishImportSpecifier (/Users/User/fswd-twitter-clone/node_modules/@babel/parser/lib/index.js:16182:10)\n    at Object.parseImportSpecifierLocal (/Users/User/fswd-twitter-clone/node_modules/@babel/parser/lib/index.js:16178:31)\n    at Object.maybeParseDefaultImportSpecifier (/Users/User/fswd-twitter-clone/node_modules/@babel/parser/lib/index.js:16295:12)\n    at Object.parseImport (/Users/User/fswd-twitter-clone/node_modules/@babel/parser/lib/index.js:16143:31)\n    at Object.parseStatementContent (/Users/User/fswd-twitter-clone/node_modules/@babel/parser/lib/index.js:14638:27)\n    at Object.parseStatement (/Users/User/fswd-twitter-clone/node_modules/@babel/parser/lib/index.js:14528:17)\n    at Object.parseBlockOrModuleBlockBody (/Users/User/fswd-twitter-clone/node_modules/@babel/parser/lib/index.js:15167:25)\n    at Object.parseBlockBody (/Users/User/fswd-twitter-clone/node_modules/@babel/parser/lib/index.js:15158:10)\n    at Object.parseProgram (/Users/User/fswd-twitter-clone/node_modules/@babel/parser/lib/index.js:14446:10)\n    at Object.parseTopLevel (/Users/User/fswd-twitter-clone/node_modules/@babel/parser/lib/index.js:14433:25)\n    at Object.parse (/Users/User/fswd-twitter-clone/node_modules/@babel/parser/lib/index.js:16392:10)\n    at parse (/Users/User/fswd-twitter-clone/node_modules/@babel/parser/lib/index.js:16444:38)\n    at parser (/Users/User/fswd-twitter-clone/node_modules/@babel/core/lib/parser/index.js:52:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/Users/User/fswd-twitter-clone/node_modules/@babel/core/lib/transformation/normalize-file.js:87:38)\n    at normalizeFile.next (<anonymous>)\n    at run (/Users/User/fswd-twitter-clone/node_modules/@babel/core/lib/transformation/index.js:31:50)\n    at run.next (<anonymous>)\n    at Function.transform (/Users/User/fswd-twitter-clone/node_modules/@babel/core/lib/transform.js:25:41)\n    at transform.next (<anonymous>)\n    at step (/Users/User/fswd-twitter-clone/node_modules/gensync/index.js:261:32)\n    at /Users/User/fswd-twitter-clone/node_modules/gensync/index.js:273:13");

/***/ })

/******/ });
//# sourceMappingURL=tweets-2a7f9c7ae09b3839bd07.js.map