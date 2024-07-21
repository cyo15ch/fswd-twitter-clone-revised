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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/request.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/request.js":
/*!*****************************************!*\
  !*** ./app/javascript/packs/request.js ***!
  \*****************************************/
/*! exports provided: createUser, logInUser, logOutUser, authenticateUser, getTweets, getUsersTweets, postTweet, deleteTweet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUser", function() { return createUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logInUser", function() { return logInUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logOutUser", function() { return logOutUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authenticateUser", function() { return authenticateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTweets", function() { return getTweets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsersTweets", function() { return getUsersTweets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postTweet", function() { return postTweet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteTweet", function() { return deleteTweet; });
!(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

!(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).ajaxSetup({
  headers: {
    'X-CSRF-Token': !(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('meta[name="csrf-token"]').attr('content')
  },
  error: function error(request, errorMessage) {
    console.log(request, errorMessage);
  }
}); //____________________USER & SESSIONS__________________
//___________________Create a User_____________________

var createUser = function createUser(username, email, password, callback) {
  var request = {
    type: 'POST',
    url: 'api/users',
    data: {
      user: {
        username: username,
        email: email,
        password: password
      }
    },
    success: function success(response) {
      callback(response);
    }
  };
  !(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).ajax(request);
}; //___________Create Session (User Logs in)_____________

var logInUser = function logInUser(username, password, callback) {
  var request = {
    type: 'POST',
    url: 'api/sessions',
    data: {
      user: {
        username: username,
        password: password
      }
    },
    success: function success(response) {
      callback(response);
    }
  };
  !(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).ajax(request);
}; //___________Delete Session (User Logs Out)_____________

var logOutUser = function logOutUser(callback) {
  var request = {
    type: 'DELETE',
    url: 'api/sessions',
    success: function success(response) {
      callback(response);
    }
  };
  !(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).ajax(request);
}; //_____________Authenticate User________________

var authenticateUser = function authenticateUser(callback) {
  var request = {
    type: 'GET',
    url: 'api/authenticated',
    success: function success(response) {
      callback(response);
    }
  };
  !(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).ajax(request);
}; //__________________TWEETS______________________
//________________Get Tweets____________________

var getTweets = function getTweets(callback) {
  var request = {
    type: 'GET',
    url: 'api/tweets',
    success: function success(response) {
      callback(response);
    }
  };
  !(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).ajax(request);
}; //______________Get Users Tweets__________________

var getUsersTweets = function getUsersTweets(username, callback) {
  var request = {
    type: 'GET',
    url: '/api/users/' + username + '/tweets',
    success: function success(response) {
      if (response.error) {
        window.location.replace('/feed');
      } else {
        callback(response);
      }
    }
  };
  !(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).ajax(request);
}; //_______________Post a Tweet___________________

var postTweet = function postTweet(content, photo, callback) {
  var formData = new FormData();

  if (content) {
    formData.append('tweet[message]', content);
  }

  if (photo) {
    formData.append('tweet[image]', photo);
  }

  var request = {
    type: 'POST',
    url: 'api/tweets',
    cache: false,
    contentType: false,
    processData: false,
    xhrFields: {
      'withCredentials': true
    },
    data: formData,
    success: function success(response) {
      callback(response);
    }
  };
  !(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).ajax(request);
}; //_______________Delete a Tweet__________________

var deleteTweet = function deleteTweet(id, callback) {
  var request = {
    type: 'DELETE',
    url: 'api/tweets/' + id,
    success: function success(response) {
      if (response.success == true) {
        callback();
      }
    }
  };
  !(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).ajax(request);
};

/***/ })

/******/ });
//# sourceMappingURL=request-36d7fdd31179aec1577e.js.map