webpackJsonp([2,4],{

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato:300|Titillium+Web);", ""]);

// module
exports.push([module.i, "body {\n  font-family: 'Titillium Web', sans-serif;\n}\nmain {\n  padding: 85px 0;\n}\nh2 {\n  margin: 0 0 12px 0;\n  color: #a8395c;\n  line-height: 1.3;\n}\nh3 {\n  margin: 0 0 12px 0;\n  color: #a8395c;\n  font-size: 15px;\n  line-height: 1.3;\n}\np {\n  margin: 0;\n  color: #999;\n  font-family: 'Lato', sans-serif;\n  font-size: 14px;\n  line-height: 1.5;\n}\na {\n  text-decoration: none;\n}\na:hover {\n  text-decoration: underline;\n}\nul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n@media (min-width: 992px) {\n  h2 {\n    font-size: 35px;\n    margin-bottom: 28px;\n  }\n  h3 {\n    font-size: 18px;\n  }\n  p {\n    font-size: 15px;\n  }\n}\n.container {\n  max-width: 992px;\n  padding: 0 10px;\n  margin: 0 auto;\n  box-sizing: border-box;\n}\n.header-main {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 10;\n  background-color: #a8395c;\n  height: 54px;\n}\n.header-main .header-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  height: 100%;\n}\n.header-main .header-logo img,\n.header-main .header-logo a {\n  display: block;\n}\n.header-main .header-actions {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.header-main .header-actions .action-search {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin-right: 15px;\n  margin-top: 2px;\n}\n.header-main .header-actions .action-search .search-input {\n  display: block;\n  width: 100%;\n  background-color: #882e4a;\n  border: 1px solid #fff;\n  border-radius: 3px;\n  height: 30px;\n  color: white;\n  padding: 0 10px 0 35px;\n  font-size: 15px;\n  box-sizing: border-box;\n}\n.header-main .header-actions .action-search .search-icon {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  padding: 8px;\n  background: url(" + __webpack_require__(203) + ") no-repeat 50%;\n  cursor: pointer;\n}\n.header-main .header-actions .action-search .search-icon.submit {\n  display: none;\n}\n.header-main .header-actions .action-search .search-back {\n  position: absolute;\n  top: 2px;\n  left: 5px;\n  display: none;\n  width: 16px;\n  height: 16px;\n  background: url(" + __webpack_require__(202) + ") no-repeat 50%;\n  padding: 5px;\n}\n.header-main .header-actions .action-search .search-form {\n  display: none;\n  width: 100%;\n}\n.header-main .header-actions .action-menu {\n  position: relative;\n  cursor: pointer;\n  padding: 8px 0;\n}\n.header-main .header-actions .action-menu .line,\n.header-main .header-actions .action-menu .line:before,\n.header-main .header-actions .action-menu .line:after {\n  content: \"\";\n  display: block;\n  width: 20px;\n  height: 3px;\n  background-color: white;\n  position: relative;\n  border-radius: 5px;\n}\n.header-main .header-actions .action-menu .line:after {\n  top: 4px;\n}\n.header-main .header-actions .action-menu .line:before {\n  top: -7px;\n}\n.header-main .header-actions .action-menu .dropdown {\n  position: fixed;\n  top: 54px;\n  left: 0;\n  width: 100%;\n  height: 0;\n  background: white;\n  border: 1px solid #bbb;\n  box-sizing: border-box;\n  z-index: 5;\n  transition: height 0.1s ease-in-out;\n  visibility: hidden;\n  overflow: hidden;\n}\n.header-main .header-actions .action-menu .dropdown a {\n  display: block;\n  padding: 15px 12px 15px 55px;\n  color: #666;\n}\n.header-main .header-actions .action-menu .dropdown a.star {\n  background: url(" + __webpack_require__(204) + ") no-repeat 18px 50%;\n}\n.header-main .header-actions .action-menu .dropdown a.video {\n  background: url(" + __webpack_require__(205) + ") no-repeat 18px 50%;\n}\n.header-main .header-actions .action-menu .dropdown a:hover {\n  text-decoration: none;\n}\n.header-main .header-actions .action-menu .dropdown li:not(:last-child) {\n  border-bottom: 1px solid #eee;\n}\n.header-main .header-actions .action-menu .dropdown.active {\n  visibility: visible;\n  height: 99px;\n}\n.header-main.header-search .header-logo {\n  display: none;\n}\n.header-main.header-search .header-actions {\n  width: 100%;\n}\n.header-main.header-search .header-actions .action-search {\n  width: 100%;\n  margin: 0;\n}\n.header-main.header-search .header-actions .action-search .search-form {\n  display: block;\n}\n.header-main.header-search .header-actions .action-search .search-icon {\n  display: none;\n}\n.header-main.header-search .header-actions .action-search .search-back {\n  display: inline-block;\n}\n.header-main.header-search .header-actions .action-menu {\n  display: none;\n}\n@media (min-width: 992px) {\n  .header-main .header-actions .action-search {\n    margin-right: 20px;\n  }\n  .header-main .header-actions .action-menu .dropdown {\n    position: absolute;\n    width: auto;\n    height: auto;\n    right: 0;\n    left: auto;\n    top: 36px;\n    border-radius: 4px;\n  }\n  .header-main .header-actions .action-menu .dropdown a {\n    padding: 15px 150px 15px 55px;\n    margin: 5px;\n    border-radius: 4px;\n  }\n  .header-main .header-actions .action-menu .dropdown li:not(:last-child) {\n    border-bottom: none;\n  }\n  .header-main .header-actions .action-menu .dropdown a:hover {\n    background-color: #eee;\n  }\n  .header-main .header-actions .action-menu .dropdown.active {\n    height: auto;\n  }\n  .header-main.header-search .header-logo {\n    display: block;\n  }\n  .header-main.header-search .header-actions .action-search {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    margin-right: 20px;\n  }\n  .header-main.header-search .header-actions .action-search .search-back {\n    display: none;\n  }\n  .header-main.header-search .header-actions .action-search .search-form {\n    width: 250px;\n  }\n  .header-main.header-search .header-actions .action-search .search-icon {\n    display: block;\n    z-index: 10;\n    position: absolute;\n    top: 0;\n    right: 0;\n  }\n  .header-main.header-search .header-actions .action-search .search-input {\n    padding-left: 10px;\n    padding-right: 30px;\n  }\n  .header-main.header-search .header-actions .action-menu {\n    display: block;\n  }\n}\n.box {\n  border: 1px solid #bbb;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  padding: 10px;\n}\n@media (min-width: 992px) {\n  .box {\n    padding: 15px;\n  }\n}\n@-webkit-keyframes showIframe {\n  0% {\n    visibility: hidden;\n  }\n  100% {\n    visibility: visible;\n  }\n}\n@keyframes showIframe {\n  0% {\n    visibility: hidden;\n  }\n  100% {\n    visibility: visible;\n  }\n}\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\nbody.modal-opened app-video-modal {\n  display: block;\n  -webkit-animation: fadeIn 0.3s forwards;\n          animation: fadeIn 0.3s forwards;\n}\nbody.modal-opened app-video-modal .player-iframe {\n  -webkit-animation: showIframe 0s 0.3s both;\n          animation: showIframe 0s 0.3s both;\n}\nbody.modal-opened .header-main {\n  display: none;\n}\n@media (min-width: 992px) {\n  body.modal-opened .header-main {\n    display: block;\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ 16:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),

/***/ 201:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 202:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfhAxoTCyHYNXsQAAAAO0lEQVQoz2NgQAH/G/43MOAG/xv+////+78WfumQwSqNBzAxEAYErBikSlAiiwWZw9jwn4GBgfEashgA2w514U9zALcAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTctMDMtMjZUMTk6MTE6MzMrMDI6MDAa45SQAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE3LTAzLTI2VDE5OjExOjMzKzAyOjAwa74sLAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII="

/***/ }),

/***/ 203:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABAUlEQVQ4y52SMQ6CUAyGiTEOxhN4AGZnj2GYHJgYmIlx9wAMzsQDODg5MngCJ8IBmIyDMYwGHvo3KUnT8BB9yRcIf/v3tcVxxGmaxgMpKIEBBUiA6/QdY8wMQee35UB7gcBqIJPxfgUR8EEMnvyd8LqSPZEcV1U1Uvoc5KzfcdupNkjbyjpZxCzoBhy31mLJQtQ3J+gZx+21YFjwvxhcOO6ghaLt35Zc1/WY+ue4nTZIWHjQwCzVQzHopRZd2jOLOQ1MVQ6lbusvEFMmMuq5vbaoTmxtJp5OEIm3QSb0k9CeaVU0bRoY9YxWJnieBpn0bKLLZPO3CZ4VWP1kIEyObfIH8N3pOm1Pb2gAAAAASUVORK5CYII="

/***/ }),

/***/ 204:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAXCAMAAAAm/38fAAAAn1BMVEX///+oOVzSmKqpO12pPF+rQWL37PD79vf+/PyqPmCuR2jJhZvz5On58vT9+vu7ZH/79virP2GtRWawSmqwS2uxTm22WHa9aoTAb4jAb4nBcYrDdo7Rl6nUna7Wo7Pdsb/ivMjivsnw3OLw3ePy4efz4+j05uv05+v26u747/L58fP8+Pn+/f26Yn7Ig5nJhJrTnK3UnK7lw87lxM789/mhh8FBAAAA4klEQVQoz22RR3LFMAxD8WzJvfzee2/puf/ZsnCs72SMDSFQEKGh5HAfje5qgwdemx4ChO2GVksI7ZZ3SFP4+CcXGXC9AlnxKz12W28cA7xJrwDx2NvuHppQI5ACd5hoAEB3utxL0n457QIw0NmAf2rOO/lgztLFwrCRMhyCvUhSYCHJaz1PwAYVD3qQRBWPEugF7lYMt4reIM6f7/pQO8B/6h3oS8oySX34do0jpDqUUB6UwtE1PmE+q348m8PX31WAtVV9LuUFwKyjaG0AymYoVoUkFSuasTZm0XEJF2YjST9NQQr8T5iZ/QAAAABJRU5ErkJggg=="

/***/ }),

/***/ 205:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAATlBMVEX///+oOVz9+vuzUXDozNXVn7CsQmStRGXMi6Dcr73q0Njx3+Xy4uf58PP79vf//v61V3S3W3ipPF/OjqLWobLoytT16Oz47/L9+/z+/f10D6gkAAAAoUlEQVQoz3WSRxLDMAwDd1XcS3r5/0dzSLEPIW7SaigQJLyVSpc1dyWxV6r+VHdobN2pHb/3RTX30zxPfVYtn/dqM6zvwzo06giQWj0sW93loG0CqjbL3snSaIWkDsBjMzOoiaJ5BY6ebx+wZi102gOoHq9PAHrtyDp9gZ4ud2DSjDpvQK0wqzEIS4Wfh3bDBsNI4hDD2ONBxaONl+Hf+rwAsAAGjw3MchkAAAAASUVORK5CYII="

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(91);


/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(158);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(201)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/less-loader/index.js!./ficticia.less", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/less-loader/index.js!./ficticia.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

},[208]);
//# sourceMappingURL=styles.bundle.js.map