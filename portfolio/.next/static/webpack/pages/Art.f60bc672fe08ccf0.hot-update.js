"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Art",{

/***/ "./components/DarkModeSwitch.js":
/*!**************************************!*\
  !*** ./components/DarkModeSwitch.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/chakra-ui-icons.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar DarkModeSwitch = function() {\n    _s();\n    var ref = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorMode)(), colorMode = ref.colorMode, toggleColorMode = ref.toggleColorMode;\n    var iconColor = {\n        light: 'orange',\n        dark: 'red'\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n        __source: {\n            fileName: \"/home/nathan/Documents/GitHub/website/portfolio/components/DarkModeSwitch.js\",\n            lineNumber: 13,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.IconButton, {\n            \"aria-label\": \"Toggle dark mode\",\n            colorScheme: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue)('red', 'orange'),\n            icon: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue)(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__.MoonIcon, {\n            }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__.SunIcon, {\n            })),\n            onClick: toggleColorMode,\n            __source: {\n                fileName: \"/home/nathan/Documents/GitHub/website/portfolio/components/DarkModeSwitch.js\",\n                lineNumber: 14,\n                columnNumber: 13\n            },\n            __self: _this\n        })\n    }));\n};\n_s(DarkModeSwitch, \"uURyIwMgIfFLStF4nJMrxbb6o/4=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorMode\n    ];\n});\n_c = DarkModeSwitch;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DarkModeSwitch);\nvar _c;\n$RefreshReg$(_c, \"DarkModeSwitch\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0RhcmtNb2RlU3dpdGNoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQW9HO0FBQ3RCO0FBQzlDO0FBQ0E7OztBQUVoQyxHQUFLLENBQUNZLGNBQWMsR0FBRyxRQUN2QixHQUQ2QixDQUFDOztJQUMxQixHQUFLLENBQWtDWixHQUFjLEdBQWRBLDhEQUFZLElBQTNDYSxTQUFTLEdBQXNCYixHQUFjLENBQTdDYSxTQUFTLEVBQUVDLGVBQWUsR0FBS2QsR0FBYyxDQUFsQ2MsZUFBZTtJQUNsQyxHQUFLLENBQUNDLFNBQVMsR0FBRyxDQUFDO1FBQ2ZDLEtBQUssRUFBRSxDQUFRO1FBQ2ZDLElBQUksRUFBRSxDQUFLO0lBQ2YsQ0FBQztJQUNELE1BQU0sc0VBQ0RkLGtEQUFJOzs7Ozs7O3VGQUNBRix3REFBVTtZQUNQaUIsQ0FBVSxhQUFDLENBQWtCO1lBQzdCQyxXQUFXLEVBQUVqQixtRUFBaUIsQ0FBQyxDQUFLLE1BQUMsQ0FBUTtZQUM3Q2tCLElBQUksRUFBRWxCLG1FQUFpQixzRUFBRUssc0RBQVE7cUZBQUtELHFEQUFPOztZQUM3Q2UsT0FBTyxFQUFFUCxlQUFlOzs7Ozs7Ozs7QUFLeEMsQ0FBQztHQWpCS0YsY0FBYzs7UUFDdUJaLDBEQUFZOzs7S0FEakRZLGNBQWM7QUFtQnBCLCtEQUFlQSxjQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRGFya01vZGVTd2l0Y2guanM/MWYzNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb2xvck1vZGUsIEljb25CdXR0b24sIHVzZUNvbG9yTW9kZVZhbHVlLCBGbGV4LCBCdXR0b24sIFN3aXRjaCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgeyBTdW5JY29uLCBNb29uSWNvbiwgSGFtYnVyZ2VySWNvbiwgQ2xvc2VJY29uIH0gZnJvbSAnQGNoYWtyYS11aS9pY29ucydcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTmV4dExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5jb25zdCBEYXJrTW9kZVN3aXRjaCA9ICgpID0+IHtcbiAgICBjb25zdCB7IGNvbG9yTW9kZSwgdG9nZ2xlQ29sb3JNb2RlIH0gPSB1c2VDb2xvck1vZGUoKVxuICAgIGNvbnN0IGljb25Db2xvciA9IHtcbiAgICAgICAgbGlnaHQ6ICdvcmFuZ2UnLFxuICAgICAgICBkYXJrOiAncmVkJ1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8RmxleD5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlRvZ2dsZSBkYXJrIG1vZGVcIlxuICAgICAgICAgICAgICAgIGNvbG9yU2NoZW1lPXt1c2VDb2xvck1vZGVWYWx1ZSgncmVkJywnb3JhbmdlJyl9XG4gICAgICAgICAgICAgICAgaWNvbj17dXNlQ29sb3JNb2RlVmFsdWUoPE1vb25JY29uLz4sIDxTdW5JY29uLz4pfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUNvbG9yTW9kZX1cbiAgICAgICAgICAgID4gICAgXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgIDwvRmxleD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERhcmtNb2RlU3dpdGNoIl0sIm5hbWVzIjpbInVzZUNvbG9yTW9kZSIsIkljb25CdXR0b24iLCJ1c2VDb2xvck1vZGVWYWx1ZSIsIkZsZXgiLCJCdXR0b24iLCJTd2l0Y2giLCJTdW5JY29uIiwiTW9vbkljb24iLCJIYW1idXJnZXJJY29uIiwiQ2xvc2VJY29uIiwidXNlU3RhdGUiLCJOZXh0TGluayIsIkRhcmtNb2RlU3dpdGNoIiwiY29sb3JNb2RlIiwidG9nZ2xlQ29sb3JNb2RlIiwiaWNvbkNvbG9yIiwibGlnaHQiLCJkYXJrIiwiYXJpYS1sYWJlbCIsImNvbG9yU2NoZW1lIiwiaWNvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/DarkModeSwitch.js\n");

/***/ })

});