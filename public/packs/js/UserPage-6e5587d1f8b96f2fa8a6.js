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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/UserPage.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/UserPage.js":
/*!******************************************!*\
  !*** ./app/javascript/packs/UserPage.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_UserPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/UserPage */ "./app/javascript/src/UserPage.jsx");
/* harmony import */ var _src_UserPage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_UserPage__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./app/javascript/src/UserPage.jsx":
/*!*****************************************!*\
  !*** ./app/javascript/src/UserPage.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/User/MH_fswd-twitter-clone/app/javascript/src/UserPage.jsx: Identifier 'characters' has already been declared. (17:9)\n\n  15 |   const [currentUser, setCurrentUser] = useState(\"\");\n  16 |   const [tweetCount, setTweetCount] = useState(0);\n> 17 |   const [characters, setCharacters] = useState(140);\n     |          ^\n  18 |\n  19 |   //    the clicked user \n  20 |\n    at instantiate (/Users/User/MH_fswd-twitter-clone/node_modules/@babel/parser/lib/index.js:72:32)\n    at constructor (/Users/User/MH_fswd-twitter-clone/node_modules/@babel/parser/lib/index.js:358:12)\n    at Object.raise (/Users/User/MH_fswd-twitter-clone/node_modules/@babel/parser/lib/index.js:3334:19)\n    at ScopeHandler.checkRedeclarationInScope (/Users/User/MH_fswd-twitter-clone/node_modules/@babel/parser/lib/index.js:3518:19)\n    at ScopeHandler.declareName (/Users/User/MH_fswd-twitter-clone/node_modules/@babel/parser/lib/index.js:3484:12)\n    at Object.declareNameFromIdentifier (/Users/User/MH_fswd-twitter-clone/node_modules/@babel/parser/lib/index.js:12057:16)\n    at Object.checkIdentifier (/Users/User/MH_fswd-twitter-clone/node_modules/@babel/parser/lib/index.js:12052:12)\n    at Object.checkLVal (/Users/User/MH_fswd-twitter-clone/node_modules/@babel/parser/lib/index.js:11978:12)\n    at Object.checkLVal (/Users/User/MH_fswd-twitter-clone/node_modules/@babel/parser/lib/index.js:12018:14)\n    at Object.parseVarId (/Users/User/MH_fswd-twitter-clone/node_modules/@babel/parser/lib/index.js:15280:10)\n    at Object.parseVar (/Users/User/MH_fswd-twitter-clone/node_modules/@babel/parser/lib/index.js:15254:12)\n    at Object.parseVarStatement (/Users/User/MH_fswd-twitter-clone/node_modules/@babel/parser/lib/index.js:15057:10)\n    at Object.parseStatementContent (/Users/User/MH_fswd-twitter-clone/node_modules/@babel/parser/lib/index.js:14603:21)\n    at Object.parseStatement (/Users/User/MH_fswd-twitter-clone/node_modules/@babel/parser/lib/index.js:14528:17)\n    at Object.parseBlockOrModuleBlockBody (/Users/User/MH_fswd-twitter-clone/node_modules/@babel/parser/lib/index.js:15167:25)\n    at Object.parseBlockBody (/Users/User/MH_fswd-twitter-clone/node_modules/@babel/parser/lib/index.js:15158:10)\n    at Object.parseBlock (/Users/User/MH_fswd-twitter-clone/node_modules/@babel/parser/lib/index.js:15142:10)\n    at Object.parseFunctionBody (/Users/User/MH_fswd-twitter-clone/node_modules/@babel/parser/lib/index.js:13836:24)\n    at Object.parseArrowExpression (/Users/User/MH_fswd-twitter-clone/node_modules/@babel/parser/lib/index.js:13808:10)\n    at Object.parseParenAndDistinguishExpression (/Users/User/MH_fswd-twitter-clone/node_modules/@babel/parser/lib/index.js:13310:12)\n    at Object.parseExprAtom (/Users/User/MH_fswd-twitter-clone/node_modules/@babel/parser/lib/index.js:12867:23)\n    at Object.parseExprAtom (/Users/User/MH_fswd-twitter-clone/node_modules/@babel/parser/lib/index.js:8033:20)\n    at Object.parseExprSubscripts (/Users/User/MH_fswd-twitter-clone/node_modules/@babel/parser/lib/index.js:12539:23)\n    at Object.parseUpdate (/Users/User/MH_fswd-twitter-clone/node_modules/@babel/parser/lib/index.js:12518:21)\n    at Object.parseMaybeUnary (/Users/User/MH_fswd-twitter-clone/node_modules/@babel/parser/lib/index.js:12489:23)\n    at Object.parseMaybeUnaryOrPrivate (/Users/User/MH_fswd-twitter-clone/node_modules/@babel/parser/lib/index.js:12283:61)\n    at Object.parseExprOps (/Users/User/MH_fswd-twitter-clone/node_modules/@babel/parser/lib/index.js:12290:23)\n    at Object.parseMaybeConditional (/Users/User/MH_fswd-twitter-clone/node_modules/@babel/parser/lib/index.js:12260:23)\n    at Object.parseMaybeAssign (/Users/User/MH_fswd-twitter-clone/node_modules/@babel/parser/lib/index.js:12213:21)\n    at /Users/User/MH_fswd-twitter-clone/node_modules/@babel/parser/lib/index.js:12171:39");

/***/ })

/******/ });
//# sourceMappingURL=UserPage-6e5587d1f8b96f2fa8a6.js.map