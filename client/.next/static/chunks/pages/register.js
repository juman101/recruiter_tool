/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/register"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=C%3A%5CUsers%5Cjuman%5COneDrive%5CDesktop%5CImage-Uploader-main%5Cclient%5Cpages%5Cregister.js&page=%2Fregister!":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=C%3A%5CUsers%5Cjuman%5COneDrive%5CDesktop%5CImage-Uploader-main%5Cclient%5Cpages%5Cregister.js&page=%2Fregister! ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/register\",\n      function () {\n        return __webpack_require__(/*! ./pages/register.js */ \"./pages/register.js\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/register\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD1DJTNBJTVDVXNlcnMlNUNqdW1hbiU1Q09uZURyaXZlJTVDRGVza3RvcCU1Q0ltYWdlLVVwbG9hZGVyLW1haW4lNUNjbGllbnQlNUNwYWdlcyU1Q3JlZ2lzdGVyLmpzJnBhZ2U9JTJGcmVnaXN0ZXIhIiwibWFwcGluZ3MiOiI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1CQUFPLENBQUMsZ0RBQXFCO0FBQzVDO0FBQ0E7QUFDQSxPQUFPLElBQVU7QUFDakIsTUFBTSxVQUFVO0FBQ2hCO0FBQ0EsT0FBTztBQUNQO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLz9kMzkzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvcmVnaXN0ZXJcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCIuL3BhZ2VzL3JlZ2lzdGVyLmpzXCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5fX05FWFRfUC5wdXNoKFtcIi9yZWdpc3RlclwiXSlcbiAgICAgIH0pO1xuICAgIH1cbiAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=C%3A%5CUsers%5Cjuman%5COneDrive%5CDesktop%5CImage-Uploader-main%5Cclient%5Cpages%5Cregister.js&page=%2Fregister!\n"));

/***/ }),

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
  \***************************/
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Register = ()=>{\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const { state, dispatch } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context__WEBPACK_IMPORTED_MODULE_3__.Context);\n    const { user } = state;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (user !== null) router.push(\"/\");\n    }, [\n        user\n    ]);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"/api/register\", {\n                name,\n                email,\n                password\n            });\n            console.log(\"register response\", data);\n            (0,react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast)(\"Resgitration succefull please login\");\n        } catch (err) {\n            console.log(\"error here\");\n            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(err.response.data, {\n                style: {\n                    maxWidth: \"400px\"\n                }\n            });\n        // You can handle the error here, e.g., show an error message to the user\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"jumbotron text-center bg-primary square\",\n                children: \"Register Page\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\juman\\\\OneDrive\\\\Desktop\\\\Image-Uploader-main\\\\client\\\\pages\\\\register.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container col-md-4 offset-md-4 pb-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            className: \"form-control mb-4 p-4\",\n                            value: name,\n                            placeholder: \"Enter your name\",\n                            onChange: (e)=>setName(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\juman\\\\OneDrive\\\\Desktop\\\\Image-Uploader-main\\\\client\\\\pages\\\\register.js\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"email\",\n                            className: \"form-control mb-4 p-4\",\n                            value: email,\n                            placeholder: \"Enter your Email Address\",\n                            onChange: (e)=>setEmail(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\juman\\\\OneDrive\\\\Desktop\\\\Image-Uploader-main\\\\client\\\\pages\\\\register.js\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"password\",\n                            className: \"form-control mb-4 p-4\",\n                            value: password,\n                            placeholder: \"Set a password\",\n                            onChange: (e)=>setPassword(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\juman\\\\OneDrive\\\\Desktop\\\\Image-Uploader-main\\\\client\\\\pages\\\\register.js\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"btn btn-block btn-primary\",\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\juman\\\\OneDrive\\\\Desktop\\\\Image-Uploader-main\\\\client\\\\pages\\\\register.js\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\juman\\\\OneDrive\\\\Desktop\\\\Image-Uploader-main\\\\client\\\\pages\\\\register.js\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\juman\\\\OneDrive\\\\Desktop\\\\Image-Uploader-main\\\\client\\\\pages\\\\register.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Register, \"RxFisrZx2nVActUovrT3BhOxqTE=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Register;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Register);\nvar _c;\n$RefreshReg$(_c, \"Register\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZWdpc3Rlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNkQ7QUFDbkM7QUFDYTtBQUNGO0FBQ0c7QUFDeEMsTUFBTVEsV0FBVzs7SUFDZixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1QsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDVSxPQUFPQyxTQUFTLEdBQUdYLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ1ksVUFBVUMsWUFBWSxHQUFHYiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNYyxTQUFRUixzREFBU0E7SUFDdkIsTUFBTSxFQUFFUyxLQUFLLEVBQUVDLFFBQVEsRUFBRSxHQUFHZCxpREFBVUEsQ0FBQ0csNkNBQU9BO0lBQzlDLE1BQU0sRUFBQ1ksSUFBSSxFQUFDLEdBQUNGO0lBQ2JkLGdEQUFTQSxDQUFDO1FBQ04sSUFBR2dCLFNBQU8sTUFDVkgsT0FBT0ksSUFBSSxDQUFDO0lBQ2hCLEdBQUU7UUFBQ0Q7S0FBSztJQUtSLE1BQU1FLGVBQWUsT0FBT0M7UUFDMUJBLEVBQUVDLGNBQWM7UUFFaEIsSUFBSTtZQUNGLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUcsTUFBTW5CLGtEQUFVLENBQUUsaUJBQWdCO2dCQUNqREs7Z0JBQ0FFO2dCQUNBRTtZQUNGO1lBQ0FZLFFBQVFDLEdBQUcsQ0FBQyxxQkFBcUJIO1lBQ2xDbEIscURBQUtBLENBQUM7UUFDUCxFQUFFLE9BQU9zQixLQUFLO1lBQ1pGLFFBQVFDLEdBQUcsQ0FBQztZQUNackIsaURBQUtBLENBQUN1QixLQUFLLENBQUNELElBQUlFLFFBQVEsQ0FBQ04sSUFBSSxFQUFFO2dCQUM3Qk8sT0FBTztvQkFDTEMsVUFBVTtnQkFDWjtZQUNGO1FBQ0EseUVBQXlFO1FBQzNFO0lBQ0Y7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUNDO2dCQUFHQyxXQUFVOzBCQUEwQzs7Ozs7OzBCQUV4RCw4REFBQ0M7Z0JBQUlELFdBQVU7MEJBQ2IsNEVBQUNFO29CQUFLQyxVQUFVaEI7O3NDQUNkLDhEQUFDaUI7NEJBQ0NDLE1BQUs7NEJBQ0xMLFdBQVU7NEJBQ1ZNLE9BQU85Qjs0QkFDUCtCLGFBQVk7NEJBQ1pDLFVBQVUsQ0FBQ3BCLElBQU1YLFFBQVFXLEVBQUVxQixNQUFNLENBQUNILEtBQUs7Ozs7OztzQ0FHekMsOERBQUNGOzRCQUNDQyxNQUFLOzRCQUNMTCxXQUFVOzRCQUNWTSxPQUFPNUI7NEJBQ1A2QixhQUFZOzRCQUNaQyxVQUFVLENBQUNwQixJQUFNVCxTQUFTUyxFQUFFcUIsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7c0NBRzFDLDhEQUFDRjs0QkFDQ0MsTUFBSzs0QkFDTEwsV0FBVTs0QkFDVk0sT0FBTzFCOzRCQUNQMkIsYUFBWTs0QkFDWkMsVUFBVSxDQUFDcEIsSUFBTVAsWUFBWU8sRUFBRXFCLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7O3NDQUc3Qyw4REFBQ0k7NEJBQU9MLE1BQUs7NEJBQVNMLFdBQVU7c0NBQTRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3RFO0dBMUVNekI7O1FBSVVELGtEQUFTQTs7O0tBSm5CQztBQTRFTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9yZWdpc3Rlci5qcz9hMDk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSx1c2VFZmZlY3QsdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuY29uc3QgUmVnaXN0ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCByb3V0ZXIgPXVzZVJvdXRlcigpO1xuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChDb250ZXh0KTtcbiAgY29uc3Qge3VzZXJ9PXN0YXRlO1xuICB1c2VFZmZlY3QoKCk9PntcbiAgICAgIGlmKHVzZXIhPT1udWxsKVxuICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xuICB9LFt1c2VyXSk7XG5cblxuXG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KGAvYXBpL3JlZ2lzdGVyYCwge1xuICAgICAgICBuYW1lLFxuICAgICAgICBlbWFpbCxcbiAgICAgICAgcGFzc3dvcmQsXG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKFwicmVnaXN0ZXIgcmVzcG9uc2VcIiwgZGF0YSk7XG4gICAgIHRvYXN0KCdSZXNnaXRyYXRpb24gc3VjY2VmdWxsIHBsZWFzZSBsb2dpbicpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coXCJlcnJvciBoZXJlXCIpXG4gICAgICB0b2FzdC5lcnJvcihlcnIucmVzcG9uc2UuZGF0YSwge1xuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIG1heFdpZHRoOiAnNDAwcHgnLCAvLyBBZGp1c3QgdGhlIG1heGltdW0gd2lkdGggYXMgbmVlZGVkXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIC8vIFlvdSBjYW4gaGFuZGxlIHRoZSBlcnJvciBoZXJlLCBlLmcuLCBzaG93IGFuIGVycm9yIG1lc3NhZ2UgdG8gdGhlIHVzZXJcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgxIGNsYXNzTmFtZT1cImp1bWJvdHJvbiB0ZXh0LWNlbnRlciBiZy1wcmltYXJ5IHNxdWFyZVwiPlJlZ2lzdGVyIFBhZ2U8L2gxPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb2wtbWQtNCBvZmZzZXQtbWQtNCBwYi00XCI+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG1iLTQgcC00XCJcbiAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIG5hbWVcIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG1iLTQgcC00XCJcbiAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBFbWFpbCBBZGRyZXNzXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbWItNCBwLTRcIlxuICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZXQgYSBwYXNzd29yZFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1ibG9jayBidG4tcHJpbWFyeVwiPlxuICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNvbnRleHQiLCJheGlvcyIsInRvYXN0IiwiQ29udGV4dCIsInVzZVJvdXRlciIsIlJlZ2lzdGVyIiwibmFtZSIsInNldE5hbWUiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInJvdXRlciIsInN0YXRlIiwiZGlzcGF0Y2giLCJ1c2VyIiwicHVzaCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGEiLCJwb3N0IiwiY29uc29sZSIsImxvZyIsImVyciIsImVycm9yIiwicmVzcG9uc2UiLCJzdHlsZSIsIm1heFdpZHRoIiwiaDEiLCJjbGFzc05hbWUiLCJkaXYiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/register.js\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=C%3A%5CUsers%5Cjuman%5COneDrive%5CDesktop%5CImage-Uploader-main%5Cclient%5Cpages%5Cregister.js&page=%2Fregister!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);