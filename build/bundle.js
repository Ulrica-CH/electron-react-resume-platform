/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("electron");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ ((module) => {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***************************!*\
  !*** ./app/main/index.ts ***!
  \***************************/


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
function _path() {
  var data = _interopRequireDefault(__webpack_require__(/*! path */ "path"));
  _path = function _path() {
    return data;
  };
  return data;
}
function _electron() {
  var data = __webpack_require__(/*! electron */ "electron");
  _electron = function _electron() {
    return data;
  };
  return data;
}
/**
 * @desc electron 主入口
 */

function isDev() {
  console.log("development" === 'development');
  // 👉 还记得我们配置中通过 webpack.DefinePlugin 定义的构建变量吗
  return "development" === 'development';
}
function createWindow() {
  // 创建浏览器窗口
  var mainWindow = new (_electron().BrowserWindow)({
    width: 1200,
    height: 800,
    webPreferences: {
      devTools: true,
      nodeIntegration: true
    }
  });

  //在开发环境下，我们加载的是运行在 7001 端口的 React
  isDev() ? mainWindow.loadURL("http://127.0.0.1:7001") : mainWindow.loadURL("file://".concat(_path()["default"].join(__dirname, '../dist/index.html')));
}
_electron().app.whenReady().then(function () {
  createWindow();
  _electron().app.on('activate', function () {
    if (_electron().BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMseUJBQXlCLFNBQVMseUJBQXlCOzs7Ozs7VUNMcEc7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7Ozs7OztBQ25CQTtFQUFBO0VBQUE7SUFBQTtFQUFBO0VBQUE7QUFBQTtBQUNBO0VBQUE7RUFBQTtJQUFBO0VBQUE7RUFBQTtBQUFBO0FBSkE7QUFDQTtBQUNBOztBQUlBLFNBQVNBLEtBQUssR0FBRztFQUNmQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsYUFBb0IsS0FBSyxhQUFhLENBQUM7RUFDbkQ7RUFDQSxPQUFPQSxhQUFvQixLQUFLLGFBQWE7QUFDL0M7QUFFQSxTQUFTRyxZQUFZLEdBQUc7RUFDdEI7RUFDQSxJQUFNQyxVQUFVLEdBQUcsS0FBSUMseUJBQWEsRUFBQztJQUNuQ0MsS0FBSyxFQUFFLElBQUk7SUFDWEMsTUFBTSxFQUFFLEdBQUc7SUFDWEMsY0FBYyxFQUFFO01BQ2RDLFFBQVEsRUFBRSxJQUFJO01BQ2RDLGVBQWUsRUFBRTtJQUNuQjtFQUNGLENBQUMsQ0FBQzs7RUFFRjtFQUNBYixLQUFLLEVBQUUsR0FDSE8sVUFBVSxDQUFDTyxPQUFPLHlCQUF5QixHQUMzQ1AsVUFBVSxDQUFDTyxPQUFPLGtCQUFXQyxrQkFBSSxDQUFDQyxJQUFJLENBQUNDLFNBQVMsRUFBRSxvQkFBb0IsQ0FBQyxFQUFHO0FBQ2hGO0FBRUFDLGVBQUcsQ0FBQ0MsU0FBUyxFQUFFLENBQUNDLElBQUksQ0FBQyxZQUFNO0VBQ3pCZCxZQUFZLEVBQUU7RUFDZFksZUFBRyxDQUFDRyxFQUFFLENBQUMsVUFBVSxFQUFFLFlBQVk7SUFDN0IsSUFBSWIseUJBQWEsQ0FBQ2MsYUFBYSxFQUFFLENBQUNDLE1BQU0sS0FBSyxDQUFDLEVBQUVqQixZQUFZLEVBQUU7RUFDaEUsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGVjdHJvbi9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwiZWxlY3Ryb25cIiIsIndlYnBhY2s6Ly9lbGVjdHJvbi9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwicGF0aFwiIiwid2VicGFjazovL2VsZWN0cm9uLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovL2VsZWN0cm9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VsZWN0cm9uLy4vYXBwL21haW4vaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZWxlY3Ryb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvKipcbiAqIEBkZXNjIGVsZWN0cm9uIOS4u+WFpeWPo1xuICovXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7IGFwcCwgQnJvd3NlcldpbmRvdyB9IGZyb20gJ2VsZWN0cm9uJztcblxuZnVuY3Rpb24gaXNEZXYoKSB7XG4gIGNvbnNvbGUubG9nKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKTtcbiAgLy8g8J+RiSDov5jorrDlvpfmiJHku6zphY3nva7kuK3pgJrov4cgd2VicGFjay5EZWZpbmVQbHVnaW4g5a6a5LmJ55qE5p6E5bu65Y+Y6YeP5ZCXXG4gIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jztcbn1cblxuZnVuY3Rpb24gY3JlYXRlV2luZG93KCkge1xuICAvLyDliJvlu7rmtY/op4jlmajnqpflj6NcbiAgY29uc3QgbWFpbldpbmRvdyA9IG5ldyBCcm93c2VyV2luZG93KHtcbiAgICB3aWR0aDogMTIwMCxcbiAgICBoZWlnaHQ6IDgwMCxcbiAgICB3ZWJQcmVmZXJlbmNlczoge1xuICAgICAgZGV2VG9vbHM6IHRydWUsXG4gICAgICBub2RlSW50ZWdyYXRpb246IHRydWUsXG4gICAgfSxcbiAgfSk7XG5cbiAgLy/lnKjlvIDlj5Hnjq/looPkuIvvvIzmiJHku6zliqDovb3nmoTmmK/ov5DooYzlnKggNzAwMSDnq6/lj6PnmoQgUmVhY3RcbiAgaXNEZXYoKVxuICAgID8gbWFpbldpbmRvdy5sb2FkVVJMKGBodHRwOi8vMTI3LjAuMC4xOjcwMDFgKVxuICAgIDogbWFpbldpbmRvdy5sb2FkVVJMKGBmaWxlOi8vJHtwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4vZGlzdC9pbmRleC5odG1sJyl9YCk7XG59XG5cbmFwcC53aGVuUmVhZHkoKS50aGVuKCgpID0+IHtcbiAgY3JlYXRlV2luZG93KCk7XG4gIGFwcC5vbignYWN0aXZhdGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKEJyb3dzZXJXaW5kb3cuZ2V0QWxsV2luZG93cygpLmxlbmd0aCA9PT0gMCkgY3JlYXRlV2luZG93KCk7XG4gIH0pO1xufSk7XG4iXSwibmFtZXMiOlsiaXNEZXYiLCJjb25zb2xlIiwibG9nIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiY3JlYXRlV2luZG93IiwibWFpbldpbmRvdyIsIkJyb3dzZXJXaW5kb3ciLCJ3aWR0aCIsImhlaWdodCIsIndlYlByZWZlcmVuY2VzIiwiZGV2VG9vbHMiLCJub2RlSW50ZWdyYXRpb24iLCJsb2FkVVJMIiwicGF0aCIsImpvaW4iLCJfX2Rpcm5hbWUiLCJhcHAiLCJ3aGVuUmVhZHkiLCJ0aGVuIiwib24iLCJnZXRBbGxXaW5kb3dzIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==