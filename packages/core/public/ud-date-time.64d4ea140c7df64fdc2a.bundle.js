(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DateTime; });
/* harmony import */ var D_GPM_github_com_AlonGvili_UniversalDashboard_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44);
/* harmony import */ var D_GPM_github_com_AlonGvili_UniversalDashboard_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45);
/* harmony import */ var D_GPM_github_com_AlonGvili_UniversalDashboard_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47);
/* harmony import */ var D_GPM_github_com_AlonGvili_UniversalDashboard_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46);
/* harmony import */ var D_GPM_github_com_AlonGvili_UniversalDashboard_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(421);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);








var DateTime =
/*#__PURE__*/
function (_React$Component) {
  Object(D_GPM_github_com_AlonGvili_UniversalDashboard_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(DateTime, _React$Component);

  function DateTime() {
    Object(D_GPM_github_com_AlonGvili_UniversalDashboard_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, DateTime);

    return Object(D_GPM_github_com_AlonGvili_UniversalDashboard_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(D_GPM_github_com_AlonGvili_UniversalDashboard_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(DateTime).apply(this, arguments));
  }

  Object(D_GPM_github_com_AlonGvili_UniversalDashboard_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(DateTime, [{
    key: "render",
    value: function render() {
      var y = this.props.value;
      var moment2 = moment__WEBPACK_IMPORTED_MODULE_6___default()(y);

      if (moment2.isValid) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, moment2.format(this.props.dateTimeFormat));
      }

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, y);
    }
  }]);

  return DateTime;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ }),

/***/ 550:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 422,
	"./af.js": 422,
	"./ar": 423,
	"./ar-dz": 424,
	"./ar-dz.js": 424,
	"./ar-kw": 425,
	"./ar-kw.js": 425,
	"./ar-ly": 426,
	"./ar-ly.js": 426,
	"./ar-ma": 427,
	"./ar-ma.js": 427,
	"./ar-sa": 428,
	"./ar-sa.js": 428,
	"./ar-tn": 429,
	"./ar-tn.js": 429,
	"./ar.js": 423,
	"./az": 430,
	"./az.js": 430,
	"./be": 431,
	"./be.js": 431,
	"./bg": 432,
	"./bg.js": 432,
	"./bm": 433,
	"./bm.js": 433,
	"./bn": 434,
	"./bn.js": 434,
	"./bo": 435,
	"./bo.js": 435,
	"./br": 436,
	"./br.js": 436,
	"./bs": 437,
	"./bs.js": 437,
	"./ca": 438,
	"./ca.js": 438,
	"./cs": 439,
	"./cs.js": 439,
	"./cv": 440,
	"./cv.js": 440,
	"./cy": 441,
	"./cy.js": 441,
	"./da": 442,
	"./da.js": 442,
	"./de": 443,
	"./de-at": 444,
	"./de-at.js": 444,
	"./de-ch": 445,
	"./de-ch.js": 445,
	"./de.js": 443,
	"./dv": 446,
	"./dv.js": 446,
	"./el": 447,
	"./el.js": 447,
	"./en-SG": 448,
	"./en-SG.js": 448,
	"./en-au": 449,
	"./en-au.js": 449,
	"./en-ca": 450,
	"./en-ca.js": 450,
	"./en-gb": 451,
	"./en-gb.js": 451,
	"./en-ie": 452,
	"./en-ie.js": 452,
	"./en-il": 453,
	"./en-il.js": 453,
	"./en-nz": 454,
	"./en-nz.js": 454,
	"./eo": 455,
	"./eo.js": 455,
	"./es": 456,
	"./es-do": 457,
	"./es-do.js": 457,
	"./es-us": 458,
	"./es-us.js": 458,
	"./es.js": 456,
	"./et": 459,
	"./et.js": 459,
	"./eu": 460,
	"./eu.js": 460,
	"./fa": 461,
	"./fa.js": 461,
	"./fi": 462,
	"./fi.js": 462,
	"./fo": 463,
	"./fo.js": 463,
	"./fr": 464,
	"./fr-ca": 465,
	"./fr-ca.js": 465,
	"./fr-ch": 466,
	"./fr-ch.js": 466,
	"./fr.js": 464,
	"./fy": 467,
	"./fy.js": 467,
	"./ga": 468,
	"./ga.js": 468,
	"./gd": 469,
	"./gd.js": 469,
	"./gl": 470,
	"./gl.js": 470,
	"./gom-latn": 471,
	"./gom-latn.js": 471,
	"./gu": 472,
	"./gu.js": 472,
	"./he": 473,
	"./he.js": 473,
	"./hi": 474,
	"./hi.js": 474,
	"./hr": 475,
	"./hr.js": 475,
	"./hu": 476,
	"./hu.js": 476,
	"./hy-am": 477,
	"./hy-am.js": 477,
	"./id": 478,
	"./id.js": 478,
	"./is": 479,
	"./is.js": 479,
	"./it": 480,
	"./it-ch": 481,
	"./it-ch.js": 481,
	"./it.js": 480,
	"./ja": 482,
	"./ja.js": 482,
	"./jv": 483,
	"./jv.js": 483,
	"./ka": 484,
	"./ka.js": 484,
	"./kk": 485,
	"./kk.js": 485,
	"./km": 486,
	"./km.js": 486,
	"./kn": 487,
	"./kn.js": 487,
	"./ko": 488,
	"./ko.js": 488,
	"./ku": 489,
	"./ku.js": 489,
	"./ky": 490,
	"./ky.js": 490,
	"./lb": 491,
	"./lb.js": 491,
	"./lo": 492,
	"./lo.js": 492,
	"./lt": 493,
	"./lt.js": 493,
	"./lv": 494,
	"./lv.js": 494,
	"./me": 495,
	"./me.js": 495,
	"./mi": 496,
	"./mi.js": 496,
	"./mk": 497,
	"./mk.js": 497,
	"./ml": 498,
	"./ml.js": 498,
	"./mn": 499,
	"./mn.js": 499,
	"./mr": 500,
	"./mr.js": 500,
	"./ms": 501,
	"./ms-my": 502,
	"./ms-my.js": 502,
	"./ms.js": 501,
	"./mt": 503,
	"./mt.js": 503,
	"./my": 504,
	"./my.js": 504,
	"./nb": 505,
	"./nb.js": 505,
	"./ne": 506,
	"./ne.js": 506,
	"./nl": 507,
	"./nl-be": 508,
	"./nl-be.js": 508,
	"./nl.js": 507,
	"./nn": 509,
	"./nn.js": 509,
	"./pa-in": 510,
	"./pa-in.js": 510,
	"./pl": 511,
	"./pl.js": 511,
	"./pt": 512,
	"./pt-br": 513,
	"./pt-br.js": 513,
	"./pt.js": 512,
	"./ro": 514,
	"./ro.js": 514,
	"./ru": 515,
	"./ru.js": 515,
	"./sd": 516,
	"./sd.js": 516,
	"./se": 517,
	"./se.js": 517,
	"./si": 518,
	"./si.js": 518,
	"./sk": 519,
	"./sk.js": 519,
	"./sl": 520,
	"./sl.js": 520,
	"./sq": 521,
	"./sq.js": 521,
	"./sr": 522,
	"./sr-cyrl": 523,
	"./sr-cyrl.js": 523,
	"./sr.js": 522,
	"./ss": 524,
	"./ss.js": 524,
	"./sv": 525,
	"./sv.js": 525,
	"./sw": 526,
	"./sw.js": 526,
	"./ta": 527,
	"./ta.js": 527,
	"./te": 528,
	"./te.js": 528,
	"./tet": 529,
	"./tet.js": 529,
	"./tg": 530,
	"./tg.js": 530,
	"./th": 531,
	"./th.js": 531,
	"./tl-ph": 532,
	"./tl-ph.js": 532,
	"./tlh": 533,
	"./tlh.js": 533,
	"./tr": 534,
	"./tr.js": 534,
	"./tzl": 535,
	"./tzl.js": 535,
	"./tzm": 536,
	"./tzm-latn": 537,
	"./tzm-latn.js": 537,
	"./tzm.js": 536,
	"./ug-cn": 538,
	"./ug-cn.js": 538,
	"./uk": 539,
	"./uk.js": 539,
	"./ur": 540,
	"./ur.js": 540,
	"./uz": 541,
	"./uz-latn": 542,
	"./uz-latn.js": 542,
	"./uz.js": 541,
	"./vi": 543,
	"./vi.js": 543,
	"./x-pseudo": 544,
	"./x-pseudo.js": 544,
	"./yo": 545,
	"./yo.js": 545,
	"./zh-cn": 546,
	"./zh-cn.js": 546,
	"./zh-hk": 547,
	"./zh-hk.js": 547,
	"./zh-tw": 548,
	"./zh-tw.js": 548
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 550;

/***/ })

}]);
//# sourceMappingURL=ud-date-time.64d4ea140c7df64fdc2a.bundle.map