module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/landing/[slug]": 0
/******/ 	};
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/landing/[slug].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/dist/next-server/lib/router-context.js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCI/NDEyNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../next-server/lib/router-context\n");

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/dist/next-server/lib/router/utils/get-asset-path-from-route.js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCI/ODU0NyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../next-server/lib/router/utils/get-asset-path-from-route\n");

/***/ }),

/***/ "./pages/landing/[slug].js":
/*!*********************************!*\
  !*** ./pages/landing/[slug].js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"next/dynamic\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/poliakovarthur/Projects/threekit/front/pages/landing/[slug].js\";\n\n\nconst Header = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/*! import() */ 7).then(__webpack_require__.bind(null, /*! ../../components/Header */ \"./components/Header.js\")), {\n  loadableGenerated: {\n    webpack: () => [/*require.resolve*/(/*! ../../components/Header */ \"./components/Header.js\")],\n    modules: [\"../../components/Header\"]\n  }\n});\nconst Banner = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ../../components/Banner */ \"./components/Banner.js\")), {\n  loadableGenerated: {\n    webpack: () => [/*require.resolve*/(/*! ../../components/Banner */ \"./components/Banner.js\")],\n    modules: [\"../../components/Banner\"]\n  }\n});\nconst Shoe = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ../../components/shoe/Player */ \"./components/shoe/Player.js\")), {\n  loadableGenerated: {\n    webpack: () => [/*require.resolve*/(/*! ../../components/shoe/Player */ \"./components/shoe/Player.js\")],\n    modules: [\"../../components/shoe/Player\"]\n  }\n});\nconst Sofa = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../../components/sofa/Player */ \"./components/sofa/Player.js\")), {\n  loadableGenerated: {\n    webpack: () => [/*require.resolve*/(/*! ../../components/sofa/Player */ \"./components/sofa/Player.js\")],\n    modules: [\"../../components/sofa/Player\"]\n  }\n});\nconst Door = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../../components/metal-door/Player */ \"./components/metal-door/Player.js\")), {\n  loadableGenerated: {\n    webpack: () => [/*require.resolve*/(/*! ../../components/metal-door/Player */ \"./components/metal-door/Player.js\")],\n    modules: [\"../../components/metal-door/Player\"]\n  }\n});\nconst CTA = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! ../../components/CTA */ \"./components/CTA.js\")), {\n  loadableGenerated: {\n    webpack: () => [/*require.resolve*/(/*! ../../components/CTA */ \"./components/CTA.js\")],\n    modules: [\"../../components/CTA\"]\n  }\n});\nconst MoreProductsDemo = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../../components/MoreProductsDemo */ \"./components/MoreProductsDemo.js\")), {\n  loadableGenerated: {\n    webpack: () => [/*require.resolve*/(/*! ../../components/MoreProductsDemo */ \"./components/MoreProductsDemo.js\")],\n    modules: [\"../../components/MoreProductsDemo\"]\n  }\n});\nconst ProductAbout = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/*! import() */ 9).then(__webpack_require__.bind(null, /*! ../../components/ProductAbout */ \"./components/ProductAbout.js\")), {\n  loadableGenerated: {\n    webpack: () => [/*require.resolve*/(/*! ../../components/ProductAbout */ \"./components/ProductAbout.js\")],\n    modules: [\"../../components/ProductAbout\"]\n  }\n});\nconst Footer = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/*! import() */ 6).then(__webpack_require__.bind(null, /*! ../../components/Footer */ \"./components/Footer.js\")), {\n  loadableGenerated: {\n    webpack: () => [/*require.resolve*/(/*! ../../components/Footer */ \"./components/Footer.js\")],\n    modules: [\"../../components/Footer\"]\n  }\n});\n\nfunction Landing({\n  page,\n  products,\n  slug\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: page.seo.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"description\",\n        content: page.seo.description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:title\",\n        content: page.seo.og_title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:description\",\n        content: page.seo.og_description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:image\",\n        content: `http://54.208.102.213:1337${page.seo.og_image.url}`\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"script\", {\n        src: \"https://preview.threekit.com/app/js/threekit-player.js\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Header, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Banner, {\n      banner: page.Banner\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, this), slug === \"shoe\" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Shoe, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 27\n    }, this), slug === \"sofa\" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Sofa, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 27\n    }, this), slug === \"metal-door\" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Door, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 33\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(CTA, {\n      cta: page.CTA\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MoreProductsDemo, {\n      more: page.MoreProducts,\n      products: products\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ProductAbout, {\n      about: page.About,\n      slug: slug\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Footer, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 5\n  }, this);\n}\n\nLanding.getInitialProps = async ({\n  query: {\n    slug\n  }\n}) => {\n  const landing = await fetch(`http://54.208.102.213:1337/landing/?Slug=${slug}`);\n  const products = await fetch(\"http://54.208.102.213:1337/products\");\n  const landingJson = await landing.json();\n  const productsJson = await products.json();\n  return {\n    page: landingJson[0],\n    products: productsJson,\n    slug\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Landing);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9sYW5kaW5nL1tzbHVnXS5qcz82ZTA5Il0sIm5hbWVzIjpbIkhlYWRlciIsImR5bmFtaWMiLCJCYW5uZXIiLCJTaG9lIiwiU29mYSIsIkRvb3IiLCJDVEEiLCJNb3JlUHJvZHVjdHNEZW1vIiwiUHJvZHVjdEFib3V0IiwiRm9vdGVyIiwiTGFuZGluZyIsInBhZ2UiLCJwcm9kdWN0cyIsInNsdWciLCJzZW8iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwib2dfdGl0bGUiLCJvZ19kZXNjcmlwdGlvbiIsIm9nX2ltYWdlIiwidXJsIiwiTW9yZVByb2R1Y3RzIiwiQWJvdXQiLCJnZXRJbml0aWFsUHJvcHMiLCJxdWVyeSIsImxhbmRpbmciLCJmZXRjaCIsImxhbmRpbmdKc29uIiwianNvbiIsInByb2R1Y3RzSnNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLE1BQU1BLE1BQU0sR0FBR0MsbURBQU8sQ0FBQyxNQUFNLHNJQUFQO0FBQUE7QUFBQSx3Q0FBYyx1REFBZDtBQUFBLGNBQWMseUJBQWQ7QUFBQTtBQUFBLEVBQXRCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHRCxtREFBTyxDQUFDLE1BQU0sc0lBQVA7QUFBQTtBQUFBLHdDQUFjLHVEQUFkO0FBQUEsY0FBYyx5QkFBZDtBQUFBO0FBQUEsRUFBdEI7QUFDQSxNQUFNRSxJQUFJLEdBQUdGLG1EQUFPLENBQUMsTUFBTSxnSkFBUDtBQUFBO0FBQUEsd0NBQWMsaUVBQWQ7QUFBQSxjQUFjLDhCQUFkO0FBQUE7QUFBQSxFQUFwQjtBQUNBLE1BQU1HLElBQUksR0FBR0gsbURBQU8sQ0FBQyxNQUFNLGdKQUFQO0FBQUE7QUFBQSx3Q0FBYyxpRUFBZDtBQUFBLGNBQWMsOEJBQWQ7QUFBQTtBQUFBLEVBQXBCO0FBQ0EsTUFBTUksSUFBSSxHQUFHSixtREFBTyxDQUFDLE1BQU0sNEpBQVA7QUFBQTtBQUFBLHdDQUFjLDZFQUFkO0FBQUEsY0FBYyxvQ0FBZDtBQUFBO0FB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QUE7QUFBQSxVQURGO0FBMEJEOztBQUVESCxPQUFPLENBQUNhLGVBQVIsR0FBMEIsT0FBTztBQUFFQyxPQUFLLEVBQUU7QUFBRVg7QUFBRjtBQUFULENBQVAsS0FBK0I7QUFDdkQsUUFBTVksT0FBTyxHQUFHLE1BQU1DLEtBQUssQ0FDeEIsNENBQTJDYixJQUFLLEVBRHhCLENBQTNCO0FBR0EsUUFBTUQsUUFBUSxHQUFHLE1BQU1jLEtBQUssQ0FBQyxxQ0FBRCxDQUE1QjtBQUNBLFFBQU1DLFdBQVcsR0FBRyxNQUFNRixPQUFPLENBQUNHLElBQVIsRUFBMUI7QUFDQSxRQUFNQyxZQUFZLEdBQUcsTUFBTWpCLFFBQVEsQ0FBQ2dCLElBQVQsRUFBM0I7QUFDQSxTQUFPO0FBQ0xqQixRQUFJLEVBQUVnQixXQUFXLENBQUMsQ0FBRCxDQURaO0FBRUxmLFlBQVEsRUFBRWlCLFlBRkw7QUFHTGhCO0FBSEssR0FBUDtBQUtELENBWkQ7O0FBY2VILHNFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvbGFuZGluZy9bc2x1Z10uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XG5cbmNvbnN0IEhlYWRlciA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi4vLi4vY29tcG9uZW50cy9IZWFkZXJcIikpO1xuY29uc3QgQmFubmVyID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCIuLi8uLi9jb21wb25lbnRzL0Jhbm5lclwiKSk7XG5jb25zdCBTaG9lID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCIuLi8uLi9jb21wb25lbnRzL3Nob2UvUGxheWVyXCIpKTtcbmNvbnN0IFNvZmEgPSBkeW5hbWljKCgpID0+IGltcG9ydChcIi4uLy4uL2NvbXBvbmVudHMvc29mYS9QbGF5ZXJcIikpO1xuY29uc3QgRG9vciA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi4vLi4vY29tcG9uZW50cy9tZXRhbC1kb29yL1BsYXllclwiKSk7XG5jb25zdCBDVEEgPSBkeW5hbWljKCgpID0+IGltcG9ydChcIi4uLy4uL2NvbXBvbmVudHMvQ1RBXCIpKTtcbmNvbnN0IE1vcmVQcm9kdWN0c0RlbW8gPSBkeW5hbWljKCgpID0+XG4gIGltcG9ydChcIi4uLy4uL2NvbXBvbmVudHMvTW9yZVByb2R1Y3RzRGVtb1wiKVxuKTtcbmNvbnN0IFByb2R1Y3RBYm91dCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi4vLi4vY29tcG9uZW50cy9Qcm9kdWN0QWJvdXRcIikpO1xuY29uc3QgRm9vdGVyID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCIuLi8uLi9jb21wb25lbnRzL0Zvb3RlclwiKSk7XG5cbmZ1bmN0aW9uIExhbmRpbmcoeyBwYWdlLCBwcm9kdWN0cywgc2x1ZyB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3BhZ2Uuc2VvLnRpdGxlfTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3BhZ2Uuc2VvLmRlc2NyaXB0aW9ufT48L21ldGE+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXtwYWdlLnNlby5vZ190aXRsZX0gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3BhZ2Uuc2VvLm9nX2Rlc2NyaXB0aW9ufSAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIHByb3BlcnR5PVwib2c6aW1hZ2VcIlxuICAgICAgICAgIGNvbnRlbnQ9e2BodHRwOi8vNTQuMjA4LjEwMi4yMTM6MTMzNyR7cGFnZS5zZW8ub2dfaW1hZ2UudXJsfWB9XG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL3ByZXZpZXcudGhyZWVraXQuY29tL2FwcC9qcy90aHJlZWtpdC1wbGF5ZXIuanNcIj48L3NjcmlwdD5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPEJhbm5lciBiYW5uZXI9e3BhZ2UuQmFubmVyfSAvPlxuICAgICAge3NsdWcgPT09IFwic2hvZVwiICYmIDxTaG9lIC8+fVxuICAgICAge3NsdWcgPT09IFwic29mYVwiICYmIDxTb2ZhIC8+fVxuICAgICAge3NsdWcgPT09IFwibWV0YWwtZG9vclwiICYmIDxEb29yIC8+fVxuICAgICAgPENUQSBjdGE9e3BhZ2UuQ1RBfSAvPlxuICAgICAgPE1vcmVQcm9kdWN0c0RlbW8gbW9yZT17cGFnZS5Nb3JlUHJvZHVjdHN9IHByb2R1Y3RzPXtwcm9kdWN0c30gLz5cbiAgICAgIDxQcm9kdWN0QWJvdXQgYWJvdXQ9e3BhZ2UuQWJvdXR9IHNsdWc9e3NsdWd9IC8+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbkxhbmRpbmcuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcXVlcnk6IHsgc2x1ZyB9IH0pID0+IHtcbiAgY29uc3QgbGFuZGluZyA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwOi8vNTQuMjA4LjEwMi4yMTM6MTMzNy9sYW5kaW5nLz9TbHVnPSR7c2x1Z31gXG4gICk7XG4gIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vNTQuMjA4LjEwMi4yMTM6MTMzNy9wcm9kdWN0c1wiKTtcbiAgY29uc3QgbGFuZGluZ0pzb24gPSBhd2FpdCBsYW5kaW5nLmpzb24oKTtcbiAgY29uc3QgcHJvZHVjdHNKc29uID0gYXdhaXQgcHJvZHVjdHMuanNvbigpO1xuICByZXR1cm4ge1xuICAgIHBhZ2U6IGxhbmRpbmdKc29uWzBdLFxuICAgIHByb2R1Y3RzOiBwcm9kdWN0c0pzb24sXG4gICAgc2x1ZyxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExhbmRpbmc7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/landing/[slug].js\n");

/***/ }),

/***/ "lodash/isEqual":
/*!*********************************!*\
  !*** external "lodash/isEqual" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash/isEqual\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2gvaXNFcXVhbFwiP2E2NGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibG9kYXNoL2lzRXF1YWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2gvaXNFcXVhbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///lodash/isEqual\n");

/***/ }),

/***/ "marked":
/*!*************************!*\
  !*** external "marked" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"marked\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtYXJrZWRcIj8yNWY3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im1hcmtlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1hcmtlZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///marked\n");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/dynamic\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2R5bmFtaWNcIj82ZDNmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvZHluYW1pYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZHluYW1pY1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/dynamic\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "pure-react-carousel":
/*!**************************************!*\
  !*** external "pure-react-carousel" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"pure-react-carousel\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwdXJlLXJlYWN0LWNhcm91c2VsXCI/NTQ3OCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwdXJlLXJlYWN0LWNhcm91c2VsLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHVyZS1yZWFjdC1jYXJvdXNlbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///pure-react-carousel\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-is\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiPzBkMzIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtaXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-is\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });