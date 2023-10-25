/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Nunito&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.init-main-page {
  flex-grow: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.init-page p {
  color: #34515e;
  font-family: Nunito;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.desc-header {
  height: 3rem;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  border-bottom: 2px solid #cfd8dc;
  color: #CFCFCF;
  font-family: Nunito;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.desc {
  padding: 1rem;
  color: #263238;
  font-family: Nunito;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
}
.desc__text {
  margin-bottom: 1rem;
}
.desc__btns {
  display: flex;
  width: 10.5rem;
  justify-content: space-between;
  align-items: center;
}
.desc__btn {
  padding: 0.45rem 0.9rem;
  cursor: pointer;
  border-radius: 3px;
  border: none;
}
.desc__btn_red {
  background-color: #D32F2F;
  color: white;
}
.desc__btn_white {
  border: 1px solid #707070;
  background-color: #fafafa;
}
.desc__btn:hover {
  transition: 0.7s;
  filter: brightness(90%);
}

.test-start-page {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.test-start-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  padding: 0 1rem;
  width: 100%;
  border-bottom: 2px solid #cfd8dc;
  color: #8D8D8D;
  font-family: Nunito;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.test-start-header__text {
  color: #263238;
  font-family: Nunito;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.test-start-header__exit {
  cursor: pointer;
}

.test-info {
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
}
.test-info__vertical-line {
  border-left: 1px solid #8D8D8D;
}
.test-info__reset {
  cursor: pointer;
}

.test-start-main {
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1rem;
  gap: 1rem;
  overflow: auto;
}

.test-start-footer {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 1rem;
  width: 100%;
  border-top: 2px solid #cfd8dc;
  height: 3rem;
}
.test-start-footer__end {
  padding: 0.35rem 1rem;
  cursor: pointer;
  border-radius: 3px;
  border: 1px solid #D32F2F;
  background-color: white;
  color: #D32F2F;
  font-family: Nunito;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.test-start-footer__end:hover {
  background-color: #D32F2F;
  color: white;
  transition: 0.5s;
}

.test-start-quiz {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.test-start-quiz__question {
  color: #263238;
  font-family: Nunito;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
}
.test-start-quiz__answers {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1rem 2.5rem 0.2rem 2.5rem;
  background-color: #EFEFEF;
  border-radius: 3px;
}
.test-start-quiz__answer {
  margin-bottom: 0.8rem;
}

.test-exit-modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(196, 196, 196, 0.7);
  justify-content: center;
  align-items: center;
}
.test-exit-modal__content {
  border-radius: 3px;
  background: #FFF;
  box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.14);
  width: 20rem;
  height: 9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1.1rem 0;
}
.test-exit-modal__texts {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 2.5rem;
  color: #263238;
  text-align: center;
  font-family: Nunito;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
}
.test-exit-modal__text_normal {
  font-size: 14px;
}
.test-exit-modal__text_small {
  font-size: 10px;
}
.test-exit-modal__btns {
  width: 12rem;
  display: flex;
  justify-content: space-between;
}
.test-exit-modal__btn {
  padding: 0.45rem 1.2rem;
  cursor: pointer;
  border-radius: 3px;
  border: 1px solid #D32F2F;
}
.test-exit-modal__btn_red {
  background-color: #D32F2F;
  color: white;
}
.test-exit-modal__btn_white {
  background-color: white;
  color: #D32F2F;
}
.test-exit-modal__btn:hover {
  transition: 0.7s;
  filter: brightness(90%);
}

.test-results-page {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.test-results-header {
  display: flex;
  align-items: center;
  height: 3rem;
  padding: 0 1rem;
  width: 100%;
  border-bottom: 2px solid #cfd8dc;
  color: #8D8D8D;
  font-family: Nunito;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.test-results-header__text {
  color: #263238;
  font-family: Nunito;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0 auto;
}
.test-results-header__exit {
  cursor: pointer;
}

.test-results-info {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.test-results-info__text {
  color: #263238;
  text-align: center;
  font-family: Nunito;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 48px;
}
.test-results-info__result {
  color: #8D8D8D;
  text-align: center;
  font-family: Nunito;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
}

.test-results-main {
  padding: 1rem;
  flex-grow: 2;
}
.test-results-main__text {
  color: #8D8D8D;
  font-family: Nunito;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
}

.test-results-answer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 6.5rem;
  border-bottom: 1px dashed #E0E0E0;
  padding: 1rem 0;
  color: #263238;
  font-family: Nunito;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
}
.test-results-answer__question {
  color: #263238;
  font-family: Nunito;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
}
.test-results-answer__res {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 2.5rem;
  padding: 0 1rem;
}

.test-results-footer {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 1rem;
  width: 100%;
  border-top: 2px solid #cfd8dc;
  height: 3rem;
}
.test-results-footer__retry {
  padding: 0.35rem 1rem;
  cursor: pointer;
  border-radius: 3px;
  border: 1px solid #D32F2F;
  background-color: white;
  color: #D32F2F;
  font-family: Nunito;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.test-results-footer__retry:hover {
  background-color: #D32F2F;
  color: white;
  transition: 0.5s;
}

body {
  background: #fafafa;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: stretch;
}

header {
  display: flex;
  width: fit-content;
}

.menu {
  height: 100vh;
  width: 3rem;
  background-color: #eceff1;
  display: flex;
  flex-direction: column;
  transition: all 0.5s ease-in-out;
}
.menu.open {
  width: 13rem;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.header {
  height: 3rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 1rem;
  border-bottom: 2px solid #cfd8dc;
  margin-bottom: 1rem;
}
.header__burger {
  display: flex;
  align-items: center;
  justify-content: center;
}
.header__burger svg:hover {
  cursor: pointer;
}
.header__text {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transition: all 0.5s ease-in-out;
  display: none;
  color: #34515e;
  font-family: Nunito;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
  margin-left: 2.9rem;
  animation: fadeIn 0.7s;
}
.header__text.visible {
  display: inline-block;
}

.tests {
  width: 100%;
  padding: 0 0.5rem;
}
.tests__item {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  white-space: nowrap;
  display: none;
  animation: fadeIn 0.5s;
  width: 100%;
  margin-bottom: 0.4rem;
  padding: 0.1rem 0 0.1rem 0.5rem;
  border-radius: 0.2rem;
  color: #263238;
  font-family: Nunito;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.tests__item.visible {
  display: block;
}
.tests__item_chosen {
  background-color: #D32F2F;
  cursor: pointer;
  color: #fff;
}
.tests__item:hover {
  background-color: #D32F2F;
  cursor: pointer;
  color: #fff;
}

input[type=radio] {
  accent-color: white;
}
input[type=radio]:checked:after {
  width: 11px;
  height: 11px;
  border-radius: 15px;
  top: 0px;
  left: 0px;
  position: relative;
  background-color: #FF6659;
  content: "";
  display: inline-block;
  visibility: visible;
  border: 1px solid #D32F2F;
}`, "",{"version":3,"sources":["webpack://./src/styles/_config.scss","webpack://./src/styles/main.scss","webpack://./src/styles/_initPage.scss","webpack://./src/styles/_mixins.scss","webpack://./src/styles/_descPage.scss","webpack://./src/styles/_testStart.scss","webpack://./src/styles/_testResults.scss"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Nunito&display=swap\");\r\n$primary-color: #fafafa;\r\n$secondary-color: #D32F2F;\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n","@use \"config\" as cfg;\r\n@use \"initPage\";\r\n@use \"mixins\" as m;\r\n@use \"descPage\";\r\n@use \"testStart\";\r\n@use \"testResults\";\r\n\r\nbody {\r\n  background: cfg.$primary-color;\r\n  display: flex;\r\n  width: 100%;\r\n  height: 100%;\r\n  align-items: stretch;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  width: fit-content;\r\n}\r\n\r\n.menu {\r\n  height: 100vh;\r\n  width: 3rem;\r\n  background-color: #eceff1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  @include m.transition-ease;\r\n  &.open {\r\n    width: 13rem;\r\n  }\r\n}\r\n\r\n@keyframes fadeIn {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.header {\r\n  height: 3rem;\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n  padding: 0 1rem;\r\n  border-bottom: 2px solid #cfd8dc;\r\n  margin-bottom: 1rem;\r\n  &__burger {\r\n    @include m.center-element;\r\n    svg {\r\n      &:hover {\r\n        cursor: pointer;\r\n      }\r\n    }\r\n  }\r\n  &__text {\r\n    @include m.disable-selection;\r\n    @include m.transition-ease;\r\n    display: none;\r\n    color: #34515e;\r\n    font-family: Nunito;\r\n    font-size: 1rem;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: normal;\r\n    text-align: center;\r\n    margin-left: 2.9rem;\r\n    animation: fadeIn 0.7s;\r\n    &.visible {\r\n      display: inline-block;\r\n    }\r\n  }\r\n}\r\n\r\n.tests {\r\n  width: 100%;\r\n  padding: 0 0.5rem;\r\n  &__item {\r\n    @include m.disable-selection;\r\n    white-space: nowrap;\r\n    display: none;\r\n    animation: fadeIn 0.5s;\r\n    width: 100%;\r\n    margin-bottom: 0.4rem;\r\n    padding: 0.1rem 0 0.1rem 0.5rem;\r\n    border-radius: 0.2rem;\r\n    &.visible {\r\n      display: block;\r\n    }\r\n    color: #263238;\r\n    font-family: Nunito;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    &_chosen {\r\n      background-color: cfg.$secondary-color;\r\n      cursor: pointer;\r\n      color: #fff;\r\n    }\r\n    &:hover {\r\n      background-color: cfg.$secondary-color;\r\n      cursor: pointer;\r\n      color: #fff;\r\n    }\r\n  }\r\n}\r\n\r\ninput[type='radio'] {\r\n  accent-color:white;\r\n  &:checked:after {\r\n    width: 11px;\r\n    height: 11px;\r\n    border-radius: 15px;\r\n    top: 0px;\r\n    left: 0px;\r\n    position: relative;\r\n    background-color: #FF6659;;\r\n    content: '';\r\n    display: inline-block;\r\n    visibility: visible;\r\n    border: 1px solid cfg.$secondary-color;\r\n  }\r\n}","@use \"mixins\" as m;\r\n\r\n.init-main-page {\r\n  flex-grow: 2;\r\n  @include m.center-element;\r\n  height: 100vh;\r\n  @include m.disable-selection;\r\n}\r\n\r\n.init-page {\r\n  p {\r\n    color: #34515e;\r\n    font-family: Nunito;\r\n    font-size: 15px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n  }\r\n}\r\n","@use \"config\" as cfg;\r\n\r\n@mixin center-element {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n@mixin disable-selection {\r\n  -webkit-touch-callout: none;\r\n  -webkit-user-select: none;\r\n  -khtml-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n@mixin transition-ease {\r\n  transition: all 0.5s ease-in-out;\r\n}","@use \"config\" as cfg;\r\n\r\n.desc-header {\r\n    height: 3rem;\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 0 1rem;\r\n    border-bottom: 2px solid #cfd8dc;\r\n    color: #CFCFCF;\r\n    font-family: Nunito;\r\n    font-size: 15px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: normal;\r\n}\r\n\r\n.desc {\r\n    padding:1rem;\r\n    color: #263238;\r\n    font-family: Nunito;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: 24px;\r\n    &__text {\r\n        margin-bottom: 1rem;\r\n    }\r\n    &__btns {\r\n        display:flex;\r\n        width:10.5rem;\r\n        justify-content: space-between;\r\n        align-items:center;\r\n    }\r\n    &__btn {\r\n        padding:0.45rem 0.9rem;\r\n        cursor:pointer;\r\n        border-radius: 3px;\r\n        border:none;\r\n        &_red {\r\n            background-color:cfg.$secondary-color;\r\n            color:white;\r\n        }\r\n        &_white {\r\n            border: 1px solid #707070;\r\n            background-color:cfg.$primary-color;\r\n        }\r\n        &:hover {\r\n            transition: 0.7s;\r\n            filter: brightness(90%);\r\n        }\r\n    }\r\n}","@use \"config\" as cfg;\r\n\r\n.test-start-page {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n}\r\n\r\n.test-start-header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items:center;\r\n    height: 3rem;\r\n    padding:0 1rem;\r\n    width: 100%;\r\n    border-bottom: 2px solid #cfd8dc;\r\n    color: #8D8D8D;\r\n    font-family: Nunito;\r\n    font-size: 12px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    &__text {\r\n        color: #263238;\r\n        font-family: Nunito;\r\n        font-size: 16px;\r\n        font-style: normal;\r\n        font-weight: 700;\r\n        line-height: normal;\r\n    }\r\n    &__exit {\r\n        cursor:pointer;\r\n    }\r\n}\r\n\r\n.test-info {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    gap:0.5rem;\r\n    &__vertical-line {\r\n        border-left: 1px solid #8D8D8D;\r\n        \r\n    }\r\n    &__reset {\r\n        cursor: pointer;\r\n    }\r\n}\r\n\r\n.test-start-main {\r\n    flex-grow: 2;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    padding:1rem;\r\n    gap:1rem;\r\n    overflow: auto;\r\n}\r\n\r\n.test-start-footer {\r\n    display: flex;\r\n    align-items:center;\r\n    justify-content: flex-start;\r\n    padding:0 1rem;\r\n    width: 100%;\r\n    border-top: 2px solid #cfd8dc;\r\n    height:3rem;\r\n    &__end {\r\n        padding:0.35rem 1rem;\r\n        cursor:pointer;\r\n        border-radius: 3px;\r\n        border:1px solid cfg.$secondary-color;\r\n        background-color:white;\r\n        color:cfg.$secondary-color;\r\n        font-family: Nunito;\r\n        font-size: 14px;\r\n        font-style: normal;\r\n        font-weight: 400;\r\n        line-height: normal;\r\n        &:hover {\r\n            background-color:cfg.$secondary-color;\r\n            color:white;\r\n            transition: 0.5s;\r\n        }\r\n    }\r\n}\r\n\r\n.test-start-quiz {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap:1rem;\r\n    &__question {\r\n        color: #263238;\r\n        font-family: Nunito;\r\n        font-size: 16px;\r\n        font-style: normal;\r\n        font-weight: 400;\r\n        line-height: 24px;\r\n    }\r\n    &__answers {\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        justify-content: space-between;\r\n        padding:1rem 2.5rem 0.2rem 2.5rem;\r\n        background-color:#EFEFEF;\r\n        border-radius:3px;\r\n    }\r\n    &__answer {\r\n        margin-bottom: 0.8rem;\r\n    }\r\n}\r\n\r\n.test-exit-modal {\r\n    display: none;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%; \r\n    overflow: auto; \r\n    background-color: rgba(196, 196, 196, 0.70);\r\n    justify-content: center;\r\n    align-items:center;\r\n    &__content {\r\n        border-radius: 3px;\r\n        background: #FFF;\r\n        box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.14);\r\n        width:20rem;\r\n        height:9rem;\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items:center;\r\n        justify-content: space-between;\r\n        padding:1.1rem 0;\r\n    }\r\n    &__texts {\r\n        display:flex;\r\n        flex-direction: column;\r\n        justify-content: space-between;\r\n        height:2.5rem;\r\n        color: #263238;\r\n        text-align: center;\r\n        font-family: Nunito;\r\n        font-style: normal;\r\n        font-weight: 400;\r\n        line-height: 16px;\r\n    }\r\n    &__text {\r\n        &_normal{\r\n            font-size: 14px;\r\n        }\r\n        &_small{\r\n            font-size: 10px;\r\n        }\r\n    }\r\n    &__btns {\r\n        width:12rem;\r\n        display: flex;\r\n        justify-content: space-between;\r\n    }\r\n    &__btn {\r\n        padding:0.45rem 1.2rem;\r\n        cursor:pointer;\r\n        border-radius: 3px;\r\n        border:1px solid cfg.$secondary-color;\r\n        &_red {\r\n            background-color:cfg.$secondary-color;\r\n            color:white;\r\n        }\r\n        &_white {\r\n            background-color:white;\r\n            color:cfg.$secondary-color;\r\n        }\r\n        &:hover {\r\n            transition: 0.7s;\r\n            filter: brightness(90%);\r\n        }\r\n    }\r\n}","@use \"config\" as cfg;\r\n\r\n.test-results-page {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n}\r\n\r\n.test-results-header {\r\n    display: flex;\r\n    align-items:center;\r\n    height: 3rem;\r\n    padding:0 1rem;\r\n    width: 100%;\r\n    border-bottom: 2px solid #cfd8dc;\r\n    color: #8D8D8D;\r\n    font-family: Nunito;\r\n    font-size: 12px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    &__text {\r\n        color: #263238;\r\n        font-family: Nunito;\r\n        font-size: 16px;\r\n        font-style: normal;\r\n        font-weight: 700;\r\n        line-height: normal;\r\n        margin: 0 auto;\r\n    }\r\n    &__exit {\r\n        cursor:pointer;\r\n    }\r\n}\r\n\r\n.test-results-info {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n    &__text {\r\n        color: #263238;\r\n        text-align: center;\r\n        font-family: Nunito;\r\n        font-size: 24px;\r\n        font-style: normal;\r\n        font-weight: 400;\r\n        line-height: 48px;\r\n    }\r\n    &__result {\r\n        color: #8D8D8D;\r\n        text-align: center;\r\n        font-family: Nunito;\r\n        font-size: 13px;\r\n        font-style: normal;\r\n        font-weight: 400;\r\n        line-height: 16px;\r\n    }\r\n}\r\n\r\n.test-results-main {\r\n    padding: 1rem;\r\n    flex-grow: 2;\r\n    &__text {\r\n        color: #8D8D8D;\r\n        font-family: Nunito;\r\n        font-size: 16px;\r\n        font-style: normal;\r\n        font-weight: 400;\r\n        line-height: 16px;\r\n    }\r\n}\r\n\r\n.test-results-answer {\r\n    display:flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    height:6.5rem;\r\n    border-bottom:1px dashed #E0E0E0;\r\n    padding: 1rem 0;\r\n    color: #263238;\r\n    font-family: Nunito;\r\n    font-size: 13px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: 16px;\r\n    &__question {\r\n        color: #263238;\r\n        font-family: Nunito;\r\n        font-size: 16px;\r\n        font-style: normal;\r\n        font-weight: 400;\r\n        line-height: 24px;\r\n    }\r\n    &__res {\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: space-between;\r\n        height:2.5rem;\r\n        padding:0 1rem;\r\n    }\r\n}\r\n\r\n.test-results-footer {\r\n    display: flex;\r\n    align-items:center;\r\n    justify-content: flex-start;\r\n    padding:0 1rem;\r\n    width: 100%;\r\n    border-top: 2px solid #cfd8dc;\r\n    height:3rem;\r\n    &__retry {\r\n        padding:0.35rem 1rem;\r\n        cursor:pointer;\r\n        border-radius: 3px;\r\n        border:1px solid cfg.$secondary-color;\r\n        background-color:white;\r\n        color:cfg.$secondary-color;\r\n        font-family: Nunito;\r\n        font-size: 14px;\r\n        font-style: normal;\r\n        font-weight: 400;\r\n        line-height: normal;\r\n        &:hover {\r\n            background-color:cfg.$secondary-color;\r\n            color:white;\r\n            transition: 0.5s;\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
let burger = document.querySelector(".header__burger");
let menu = document.querySelector(".menu");
let navText = document.querySelector(".header__text");
let testsCol = document.querySelector(".tests");
let mainPage = document.querySelector("main");
let storedAnswers;
let showNav = false;
let testChosen = {
    test: 0,
    isChosen: false,
};
let tests = [
    {
        name: "1st Test",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae turpis vitae nisi venenatis rutrum nec non odio. Fusce non dolor orci. Integer eget odio enim. Praesent sed auctor erat. Vestibulum fringilla suscipit dui id ultricies. Nunc pellentesque viverra neque sed rutrum. Nunc tristique risus.",
        questionary: [
            {
                question: 'Question 1',
                correctAnswer: 'Answer 2',
                answers: [
                    'Answer 1',
                    'Answer 2',
                    'Answer 3',
                    'Answer 4',
                    'Answer 5',
                    'Answer 6',
                ],
            },
            {
                question: 'Question 2',
                correctAnswer: 'Answer 3',
                answers: [
                    'Answer 1',
                    'Answer 2',
                    'Answer 3',
                    'Answer 4',
                    'Answer 5',
                    'Answer 6',
                ],
            },
            {
                question: 'Question 3',
                correctAnswer: 'Answer 1',
                answers: [
                    'Answer 1',
                    'Answer 2',
                    'Answer 3',
                    'Answer 4',
                    'Answer 5',
                    'Answer 6',
                ],
            },
            {
                question: 'Question 4',
                correctAnswer: 'Answer 5',
                answers: [
                    'Answer 1',
                    'Answer 2',
                    'Answer 3',
                    'Answer 4',
                    'Answer 5',
                    'Answer 6',
                ],
            },
            {
                question: 'Question 5',
                correctAnswer: 'Answer 6',
                answers: [
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin odio sit amet.',
                    'Lorem ipsum dolor sit amet, aliquam sollicitudin odio sit amet.',
                ],
            },
        ]
    },
    {
        name: "2nd Test",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget vehicula diam, et luctus nulla. Etiam ultricies condimentum turpis quis volutpat. Sed semper nisi consequat auctor egestas. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam porta, enim ac porta condimentum.",
        questionary: [
            {
                question: 'Question 1',
                correctAnswer: 'Answer 2',
                answers: [
                    'Answer 1',
                    'Answer 2',
                    'Answer 3',
                    'Answer 4',
                    'Answer 5',
                    'Answer 6',
                ],
            },
            {
                question: 'Question 2',
                correctAnswer: 'Answer 3',
                answers: [
                    'Answer 1',
                    'Answer 2',
                    'Answer 3',
                    'Answer 4',
                    'Answer 5',
                    'Answer 6',
                ],
            },
            {
                question: 'Question 3',
                correctAnswer: 'Answer 1',
                answers: [
                    'Answer 1',
                    'Answer 2',
                    'Answer 3',
                    'Answer 4',
                    'Answer 5',
                    'Answer 6',
                ],
            },
            {
                question: 'Question 4',
                correctAnswer: 'Answer 5',
                answers: [
                    'Answer 1',
                    'Answer 2',
                    'Answer 3',
                    'Answer 4',
                    'Answer 5',
                    'Answer 6',
                ],
            },
            {
                question: 'Question 5',
                correctAnswer: 'Answer 6',
                answers: [
                    'Answer 1',
                    'Answer 2',
                    'Answer 3',
                    'Answer 4',
                    'Answer 5',
                    'Answer 6',
                ],
            },
        ],
    },
    {
        name: "3rd Test",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia fermentum euismod. Vestibulum sollicitudin, erat vitae congue aliquam, urna sem aliquam felis, vitae aliquam quam orci sit amet justo. Etiam iaculis id tortor id euismod. Phasellus hendrerit felis nec sem dignissim consequat. Vivamus mattis hendrerit.",
        questionary: [
            {
                question: 'Question 1',
                correctAnswer: 'Answer 2',
                answers: [
                    'Answer 1',
                    'Answer 2',
                    'Answer 3',
                    'Answer 4',
                    'Answer 5',
                    'Answer 6',
                ],
            },
            {
                question: 'Question 2',
                correctAnswer: 'Answer 3',
                answers: [
                    'Answer 1',
                    'Answer 2',
                    'Answer 3',
                    'Answer 4',
                    'Answer 5',
                    'Answer 6',
                ],
            },
            {
                question: 'Question 3',
                correctAnswer: 'Answer 1',
                answers: [
                    'Answer 1',
                    'Answer 2',
                    'Answer 3',
                    'Answer 4',
                    'Answer 5',
                    'Answer 6',
                ],
            },
            {
                question: 'Question 4',
                correctAnswer: 'Answer 5',
                answers: [
                    'Answer 1',
                    'Answer 2',
                    'Answer 3',
                    'Answer 4',
                    'Answer 5',
                    'Answer 6',
                ],
            },
            {
                question: 'Question 5',
                correctAnswer: 'Answer 6',
                answers: [
                    'Answer 1',
                    'Answer 2',
                    'Answer 3',
                    'Answer 4',
                    'Answer 5',
                    'Answer 6',
                ],
            },
        ],
    },
    {
        name: "4th Test",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut velit lorem, consequat non lobortis vel, finibus vel turpis. Donec erat justo, accumsan id egestas et, condimentum quis dolor. Duis ligula massa, viverra id mattis id, pulvinar ac urna. Sed ornare mattis tortor ac maximus. Maecenas.",
        questionary: [
            {
                question: 'Question 1',
                correctAnswer: 'Answer 2',
                answers: [
                    'Answer 1',
                    'Answer 2',
                    'Answer 3',
                    'Answer 4',
                    'Answer 5',
                    'Answer 6',
                ],
            },
            {
                question: 'Question 2',
                correctAnswer: 'Answer 3',
                answers: [
                    'Answer 1',
                    'Answer 2',
                    'Answer 3',
                    'Answer 4',
                    'Answer 5',
                    'Answer 6',
                ],
            },
            {
                question: 'Question 3',
                correctAnswer: 'Answer 1',
                answers: [
                    'Answer 1',
                    'Answer 2',
                    'Answer 3',
                    'Answer 4',
                    'Answer 5',
                    'Answer 6',
                ],
            },
            {
                question: 'Question 4',
                correctAnswer: 'Answer 5',
                answers: [
                    'Answer 1',
                    'Answer 2',
                    'Answer 3',
                    'Answer 4',
                    'Answer 5',
                    'Answer 6',
                ],
            },
            {
                question: 'Question 5',
                correctAnswer: 'Answer 6',
                answers: [
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin odio sit amet.',
                    'Lorem ipsum dolor sit amet, aliquam sollicitudin odio sit amet.',
                ],
            },
        ],
    },
];
tests.forEach((test) => {
    testsCol.innerHTML += `<li class='tests__item'>${test.name}</li>`;
});
let testItem = document.querySelectorAll(".tests__item");
let questionsDone = (radioBtns) => {
    let doneness = document.querySelector('.test-info__remain');
    let questions = document.querySelectorAll(".test-start-quiz__question");
    let counter = 0;
    radioBtns.forEach(el => {
        if (el.checked === true) {
            counter++;
        }
    });
    doneness.innerHTML = `${counter}/${questions.length}`;
};
let cancelDesc = () => {
    let cancelBtn = document.querySelector(".desc__btn_white");
    cancelBtn === null || cancelBtn === void 0 ? void 0 : cancelBtn.addEventListener("click", () => {
        mainPage.className = 'init-main-page';
        testItem[testChosen.test].classList.remove("tests__item_chosen");
        mainPage.innerHTML = `
        <section class="init-page">
            <p>Выберите тест из списка</p>
        </section>
        `;
    });
};
let exitTest = () => {
    let exitBtn = document.querySelector(".test-start-header__exit");
    let exitModal = document.querySelector(".test-exit-modal");
    let cancelBtn = document.querySelector(".test-exit-modal__btn_red");
    let exitTestBtn = document.querySelector(".test-exit-modal__btn_white");
    exitBtn.addEventListener('click', () => {
        exitModal.style.display = "flex";
    });
    cancelBtn.addEventListener('click', () => {
        exitModal.style.display = "none";
    });
    exitTestBtn.addEventListener('click', () => {
        testItem[testChosen.test].classList.remove("tests__item_chosen");
        mainPage.classList.replace('test-start-page', 'init-main-page');
        mainPage.innerHTML = `
            <section class="init-page">
                <p>Выберите тест из списка</p>
            </section>
        `;
    });
};
let radioChecked = (radioBtns) => {
    radioBtns.forEach(el => {
        el.addEventListener('click', () => {
            questionsDone(radioBtns);
        });
    });
};
let uncheckRadio = (radioBtns) => {
    let resetBtn = document.querySelector(".test-info__reset");
    resetBtn.addEventListener('click', () => {
        radioBtns.forEach(el => {
            el.checked = false;
        });
        questionsDone(radioBtns);
    });
};
let countDown = (radioBtns) => {
    let counter = 30 * 60 - 1;
    let timer = document.querySelector(".test-info__timer");
    let minutes = '';
    let seconds = '';
    setInterval(() => {
        if (counter <= 0) {
            testResults(true, radioBtns);
        }
        if (counter - Math.floor(counter / 60) * 60 > 9) {
            seconds = `${counter - Math.floor(counter / 60) * 60}`;
        }
        else {
            seconds = `0${counter - Math.floor(counter / 60) * 60}`;
        }
        if (Math.floor(counter / 60) > 9) {
            minutes = `${Math.floor(counter / 60)}`;
        }
        else {
            minutes = `0${Math.floor(counter / 60)}`;
        }
        timer.innerHTML = `00:${minutes}:${seconds}`;
        counter--;
    }, 1000);
};
let saveAnswers = (radioBtns) => {
    let answersArr;
    if (JSON.parse(localStorage.getItem("answers"))) {
        answersArr = JSON.parse(localStorage.getItem("answers"));
    }
    else {
        answersArr = [];
        for (let i = 0; i < tests.length; i++) {
            answersArr.push([]);
        }
    }
    if (radioBtns) {
        let answers = [];
        radioBtns.forEach(el => {
            if (el.checked === true) {
                answers.push({
                    question: el.name,
                    answer: el.value,
                });
            }
        });
        answersArr[testChosen.test] = answers;
    }
    localStorage.setItem("answers", JSON.stringify(answersArr));
    storedAnswers = JSON.parse(localStorage.getItem("answers"));
};
saveAnswers();
let startTest = (btn_class) => {
    let startBtn = document.querySelector(btn_class);
    startBtn === null || startBtn === void 0 ? void 0 : startBtn.addEventListener("click", () => {
        mainPage.className = 'test-start-page';
        mainPage.innerHTML = `
        <div class='test-start-header'>
            <span class='test-start-header__exit'>Выход</span>
            <span class='test-start-header__text'>${tests[testChosen.test].name}</span>
            <div class='test-info'>
                <span class='test-info__reset'>Сбросить все ответы</span>
                <span class='test-info__vertical-line'></span>
                <span class='test-info__remain'>0/5</span>
                <span class='test-info__vertical-line'></span>
                <span class='test-info__timer'>00:30:00</span>
            </span>
        </div>
        `;
        mainPage.innerHTML += `
        <div class='test-exit-modal'>
            <div class='test-exit-modal__content'>
                <div class='test-exit-modal__texts'>
                    <span class='test-exit-modal__text test-exit-modal__text_normal'>Вы уверены что хотите выйти?</span>
                    <span class='test-exit-modal__text test-exit-modal__text_small'>Все результаты будут сброшены</span>
                </div>
                <div class='test-exit-modal__btns'>
                    <input type='button' class='test-exit-modal__btn test-exit-modal__btn_white' value = 'Выход'/>
                    <input type='button' class='test-exit-modal__btn test-exit-modal__btn_red' value = 'Отмена'/>
                </div>
            </div>
        </div>
        `;
        let testMain = document.createElement('div');
        testMain.classList.add('test-start-main');
        tests[testChosen.test].questionary.forEach((el, index) => {
            let quiz = document.createElement('div');
            quiz.classList.add('test-start-quiz');
            let answersDiv = document.createElement('div');
            answersDiv.classList.add('test-start-quiz__answers');
            quiz.innerHTML += `
                <div class='test-start-quiz__question'>${index + 1}. ${el.question}</div>
            `;
            el.answers.forEach((answer, index) => {
                let answerItem = document.createElement('div');
                answerItem.classList.add('test-start-quiz__answer');
                answerItem.innerHTML = `
                <label>
                <input class='test-start-quiz__radio' type='radio' name='${el.question}' value='${answer}'>
                ${answer}
                </label>
                `;
                answersDiv.append(answerItem);
            });
            quiz.append(answersDiv);
            testMain.append(quiz);
        });
        mainPage.append(testMain);
        mainPage.innerHTML += `
        <div class='test-start-footer'>
            <input type='button' class='test-start-footer__end' value='Завершить' />
        </div>
        `;
        let radioBtns = document.querySelectorAll(".test-start-quiz__radio");
        exitTest();
        radioChecked(radioBtns);
        uncheckRadio(radioBtns);
        countDown(radioBtns);
        document.querySelector('.test-start-footer__end').addEventListener('click', () => testResults(true, radioBtns));
    });
};
let testResults = (saveRes, radioBtns) => {
    var _a;
    if (saveRes) {
        saveAnswers(radioBtns);
    }
    mainPage.className = 'test-results-page';
    mainPage.innerHTML = `
        <div class='test-results-header'>
            <span class='test-results-header__text'>${tests[testChosen.test].name}</span>
        </div>
    
        <div class='test-results-info'>
            <span class='test-results-info__text'>Тест завершён</span>
            <span class='test-results-info__result'>Вы ответили на ${storedAnswers[testChosen.test].length} из ${tests[testChosen.test].questionary.length} Вопросов</span>
        </div>
        `;
    let testResults = document.createElement('div');
    testResults.classList.add('test-results-main');
    testResults.innerHTML = `<span class='test-results-main__text'>Ваши ответы</span>`;
    tests[testChosen.test].questionary.forEach((el, index) => {
        let answer = document.createElement('div');
        answer.classList.add('test-results-answer');
        let userAnswerIndex = null;
        storedAnswers[testChosen.test].forEach((ans, ans_index) => {
            if (el.question === ans.question) {
                userAnswerIndex = ans_index;
            }
        });
        let userAnswer = '';
        if (userAnswerIndex === null) {
            userAnswer = 'Не ответили';
        }
        else {
            userAnswer = storedAnswers[testChosen.test][userAnswerIndex].answer;
        }
        answer.innerHTML = `
            <span class='test-results-answer__question'>${index + 1}. ${el.question}</span>
            <div class='test-results-answer__res'>
                <div class='test-results-answer__correct-answer'>Правильный ответ: ${el.correctAnswer}</div>
                <div class='test-results-answer__user-answer'>Вы ответили: ${userAnswer}</div>
            </div>
        `;
        testResults.append(answer);
    });
    mainPage.append(testResults);
    mainPage.innerHTML += `
    <div class='test-results-footer'>
        <input type='button' class='test-results-footer__retry' value='Пройти еще раз' />
    </div>
    `;
    startTest('.test-results-footer__retry');
    (_a = document.querySelector('.test-results-footer__retry')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        let answersChange = JSON.parse(localStorage.getItem("answers"));
        answersChange[testChosen.test] = [];
        localStorage.setItem("answers", JSON.stringify(answersChange));
    });
};
testItem.forEach((el, index) => {
    el.addEventListener("click", () => {
        if (!testChosen.isChosen) {
            testChosen.test = index;
            testChosen.isChosen = true;
            el.classList.add("tests__item_chosen");
            if (storedAnswers[testChosen.test].length != 0) {
                testResults(false);
            }
            else {
                mainPage.classList.replace('init-main-page', 'test-desc-page');
                mainPage.innerHTML = `
                <div class='desc-header'>
                    <p class='desc-header__text'>Описание</p>
                </div>
                <div class='desc'>
                    <p class='desc__text'>${tests[index].description}</p>
                    <div class='desc__btns'>
                        <input type='button' class='desc__btn desc__btn_red' value='Начать' />
                        <input type='button' class='desc__btn desc__btn_white' value='Отмена' />
                    </div>
                </div>
            `;
            }
        }
        else {
            testItem[testChosen.test].classList.remove("tests__item_chosen");
            testChosen.test = index;
            el.classList.add("tests__item_chosen");
            if (storedAnswers[testChosen.test].length != 0) {
                testResults(false);
            }
            else {
                mainPage.classList.replace('init-main-page', 'test-desc-page');
                mainPage.innerHTML = `
                <div class='desc-header'>
                    <p class='desc-header__text'>Описание</p>
                </div>
                <div class='desc'>
                    <p class='desc__text'>${tests[index].description}</p>
                    <div class='desc__btns'>
                        <input type='button' class='desc__btn desc__btn_red' value='Начать' />
                        <input type='button' class='desc__btn desc__btn_white' value='Отмена' />
                    </div>
                </div>
                `;
            }
        }
        startTest(".desc__btn_red");
        cancelDesc();
    });
});
burger.addEventListener("click", () => {
    if (!showNav) {
        burger.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M8.04754 13.0623L7.35387 13.774C7.06015 14.0753 6.5852 14.0753 6.29461 13.774L0.220288 7.545C-0.0734293 7.24365 -0.0734293 6.75636 0.220288 6.45821L6.29461 0.226013C6.58833 -0.0753378 7.06327 -0.0753378 7.35387 0.226013L8.04754 0.937715C8.34438 1.24227 8.33813 1.73918 8.03504 2.03733L4.26984 5.71766H13.2501C13.6657 5.71766 14 6.06068 14 6.48706V7.51294C14 7.93932 13.6657 8.28235 13.2501 8.28235H4.26984L8.03504 11.9627C8.34126 12.2608 8.34751 12.7577 8.04754 13.0623Z" fill="#8EACBB"/>
        </svg>`;
        menu.classList.add("open");
        navText.classList.add("visible");
        testItem.forEach((el) => {
            el.classList.add("visible");
        });
        showNav = true;
        localStorage.setItem('menu-closed', 'true');
    }
    else {
        burger.innerHTML = `<svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="12"
        viewBox="0 0 14 12"
        fill="none"
      >
        <line y1="1" x2="14" y2="1" stroke="#8EACBB" stroke-width="2" />
        <line y1="11" x2="14" y2="11" stroke="#8EACBB" stroke-width="2" />
        <line y1="6" x2="14" y2="6" stroke="#8EACBB" stroke-width="2" />
      </svg>`;
        menu.classList.remove("open");
        navText.classList.remove("visible");
        testItem.forEach((el) => {
            el.classList.remove("visible");
        });
        showNav = false;
        localStorage.setItem('menu-closed', 'false');
    }
});
if (localStorage.getItem('menu-closed') == 'true') {
    burger.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M8.04754 13.0623L7.35387 13.774C7.06015 14.0753 6.5852 14.0753 6.29461 13.774L0.220288 7.545C-0.0734293 7.24365 -0.0734293 6.75636 0.220288 6.45821L6.29461 0.226013C6.58833 -0.0753378 7.06327 -0.0753378 7.35387 0.226013L8.04754 0.937715C8.34438 1.24227 8.33813 1.73918 8.03504 2.03733L4.26984 5.71766H13.2501C13.6657 5.71766 14 6.06068 14 6.48706V7.51294C14 7.93932 13.6657 8.28235 13.2501 8.28235H4.26984L8.03504 11.9627C8.34126 12.2608 8.34751 12.7577 8.04754 13.0623Z" fill="#8EACBB"/>
        </svg>`;
    menu.classList.add("open");
    navText.classList.add("visible");
    testItem.forEach((el) => {
        el.classList.add("visible");
    });
    showNav = true;
    localStorage.setItem('menu-closed', 'true');
}

})();

/******/ })()
;
//# sourceMappingURL=bundle4db5b1c13ffb7ceca4c2.js.map