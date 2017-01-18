/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	document.write("Links to solutions:");

	__webpack_require__(1);
	__webpack_require__(5);
	__webpack_require__(6);
	__webpack_require__(7);
	__webpack_require__(8);
	__webpack_require__(9);
	__webpack_require__(10);
	//import {changeButtonStatus} from "./utilities"

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./style.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "\na, a:visited{\n  color: blue;\n}\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

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
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
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


/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var changeButtonStatus = exports.changeButtonStatus = function changeButtonStatus(button, el) {
	  var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

	  if (button.innerHTML == "Show") {
	    button.innerHTML = "Hide";
	    el.style.visibility = "visible";
	    if (value != "") {
	      el.innerHTML = value;
	    }
	  } else {
	    button.innerHTML = "Show";
	    el.style.visibility = "hidden";
	  }
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _utilities = __webpack_require__(5);

	var sum = 0;

	$(document).ready(function () {
	  var solution1 = document.getElementById("solution1");
	  var button = document.getElementById("button_solution1");

	  var solve1 = function solve1() {
	    if (!sum) {
	      // if not calculted yet
	      for (var i = 3; i < 1000; i++) {
	        if (!(i % 3 || i % 5)) {
	          sum += i;
	        }
	      }
	      solution1.innerHTML = sum;
	    }

	    (0, _utilities.changeButtonStatus)(button, solution1);
	  };

	  button.addEventListener("click", solve1);
	});

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _utilities = __webpack_require__(5);

	$(document).ready(function () {
	  var button_solution8 = document.getElementById("button_solution8");
	  var solution8 = document.getElementById("solution8");

	  var max_prod = 0;

	  var solve8 = function solve8() {
	    if (!max_prod) {
	      // if not calculated yet
	      var grid = "73167176531330624919225119674426574742355349194934" + "96983520312774506326239578318016984801869478851843" + "85861560789112949495459501737958331952853208805511" + "12540698747158523863050715693290963295227443043557" + "66896648950445244523161731856403098711121722383113" + "62229893423380308135336276614282806444486645238749" + "30358907296290491560440772390713810515859307960866" + "70172427121883998797908792274921901699720888093776" + "65727333001053367881220235421809751254540594752243" + "52584907711670556013604839586446706324415722155397" + "53697817977846174064955149290862569321978468622482" + "83972241375657056057490261407972968652414535100474" + "82166370484403199890008895243450658541227588666881" + "16427171479924442928230863465674813919123162824586" + "17866458359124566529476545682848912883142607690042" + "24219022671055626321111109370544217506941658960408" + "07198403850962455444362981230987879927244284909188" + "84580156166097919133875499200524063689912560717606" + "05886116467109405077541002256983155200055935729725" + "71636269561882670428252483600823257530420752963450";

	      for (var i = 0; i < grid.length; i++) {
	        var prod = 1;
	        for (var j = 0; j < 13 && i + j < grid.length; j++) {
	          prod *= grid[i + j];
	          if (!prod) break;
	        }
	        max_prod = Math.max(max_prod, prod);
	      }
	      solution8.innerHTML = max_prod;
	    }
	    (0, _utilities.changeButtonStatus)(button_solution8, solution8);
	  };
	  button_solution8.addEventListener("click", solve8);
	});

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _utilities = __webpack_require__(5);

	var sum = 0;

	var isPrime = function isPrime(number) {

	  if (number % 2 == 0 && number != 2) {
	    return 0;
	  }
	  for (var i = 3; i < parseInt(Math.sqrt(number) + 2); i += 2) {
	    if (number % i == 0) {
	      return 0;
	    }
	  }
	  return 1;
	};

	$(document).ready(function () {
	  var button_solution10 = document.getElementById("button_solution10");
	  var solution10 = document.getElementById("solution10");

	  var solve10 = function solve10() {
	    if (!sum) {
	      // if not calculated yet
	      console.log("Calculating...");
	      for (var i = 2; i < 2000000; i++) {
	        if (isPrime(i)) {
	          sum += i;
	        }
	      }
	      console.log("Finished!");
	    }
	    (0, _utilities.changeButtonStatus)(button_solution10, solution10, sum);
	  };
	  button_solution10.addEventListener("click", solve10);
	});

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	                value: true
	});
	exports.solve13 = undefined;

	var _utilities = __webpack_require__(5);

	var _utilities2 = _interopRequireDefault(_utilities);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var solve13 = exports.solve13 = function solve13() {
	                var numbers = "37107287533902102798797998220837590246510135740250\n                  46376937677490009712648124896970078050417018260538\n                  74324986199524741059474233309513058123726617309629\n                  91942213363574161572522430563301811072406154908250\n                  23067588207539346171171980310421047513778063246676\n                  89261670696623633820136378418383684178734361726757\n                  28112879812849979408065481931592621691275889832738\n                  44274228917432520321923589422876796487670272189318\n                  47451445736001306439091167216856844588711603153276\n                  70386486105843025439939619828917593665686757934951\n                  62176457141856560629502157223196586755079324193331\n                  64906352462741904929101432445813822663347944758178\n                  92575867718337217661963751590579239728245598838407\n                  58203565325359399008402633568948830189458628227828\n                  80181199384826282014278194139940567587151170094390\n                  35398664372827112653829987240784473053190104293586\n                  86515506006295864861532075273371959191420517255829\n                  71693888707715466499115593487603532921714970056938\n                  54370070576826684624621495650076471787294438377604\n                  53282654108756828443191190634694037855217779295145\n                  36123272525000296071075082563815656710885258350721\n                  45876576172410976447339110607218265236877223636045\n                  17423706905851860660448207621209813287860733969412\n                  81142660418086830619328460811191061556940512689692\n                  51934325451728388641918047049293215058642563049483\n                  62467221648435076201727918039944693004732956340691\n                  15732444386908125794514089057706229429197107928209\n                  55037687525678773091862540744969844508330393682126\n                  18336384825330154686196124348767681297534375946515\n                  80386287592878490201521685554828717201219257766954\n                  78182833757993103614740356856449095527097864797581\n                  16726320100436897842553539920931837441497806860984\n                  48403098129077791799088218795327364475675590848030\n                  87086987551392711854517078544161852424320693150332\n                  59959406895756536782107074926966537676326235447210\n                  69793950679652694742597709739166693763042633987085\n                  41052684708299085211399427365734116182760315001271\n                  65378607361501080857009149939512557028198746004375\n                  35829035317434717326932123578154982629742552737307\n                  94953759765105305946966067683156574377167401875275\n                  88902802571733229619176668713819931811048770190271\n                  25267680276078003013678680992525463401061632866526\n                  36270218540497705585629946580636237993140746255962\n                  24074486908231174977792365466257246923322810917141\n                  91430288197103288597806669760892938638285025333403\n                  34413065578016127815921815005561868836468420090470\n                  23053081172816430487623791969842487255036638784583\n                  11487696932154902810424020138335124462181441773470\n                  63783299490636259666498587618221225225512486764533\n                  67720186971698544312419572409913959008952310058822\n                  95548255300263520781532296796249481641953868218774\n                  76085327132285723110424803456124867697064507995236\n                  37774242535411291684276865538926205024910326572967\n                  23701913275725675285653248258265463092207058596522\n                  29798860272258331913126375147341994889534765745501\n                  18495701454879288984856827726077713721403798879715\n                  38298203783031473527721580348144513491373226651381\n                  34829543829199918180278916522431027392251122869539\n                  40957953066405232632538044100059654939159879593635\n                  29746152185502371307642255121183693803580388584903\n                  41698116222072977186158236678424689157993532961922\n                  62467957194401269043877107275048102390895523597457\n                  23189706772547915061505504953922979530901129967519\n                  86188088225875314529584099251203829009407770775672\n                  11306739708304724483816533873502340845647058077308\n                  82959174767140363198008187129011875491310547126581\n                  97623331044818386269515456334926366572897563400500\n                  42846280183517070527831839425882145521227251250327\n                  55121603546981200581762165212827652751691296897789\n                  32238195734329339946437501907836945765883352399886\n                  75506164965184775180738168837861091527357929701337\n                  62177842752192623401942399639168044983993173312731\n                  32924185707147349566916674687634660915035914677504\n                  99518671430235219628894890102423325116913619626622\n                  73267460800591547471830798392868535206946944540724\n                  76841822524674417161514036427982273348055556214818\n                  97142617910342598647204516893989422179826088076852\n                  87783646182799346313767754307809363333018982642090\n                  10848802521674670883215120185883543223812876952786\n                  71329612474782464538636993009049310363619763878039\n                  62184073572399794223406235393808339651327408011116\n                  66627891981488087797941876876144230030984490851411\n                  60661826293682836764744779239180335110989069790714\n                  85786944089552990653640447425576083659976645795096\n                  66024396409905389607120198219976047599490197230297\n                  64913982680032973156037120041377903785566085089252\n                  16730939319872750275468906903707539413042652315011\n                  94809377245048795150954100921645863754710598436791\n                  78639167021187492431995700641917969777599028300699\n                  15368713711936614952811305876380278410754449733078\n                  40789923115535562561142322423255033685442488917353\n                  44889911501440648020369068063960672322193204149535\n                  41503128880339536053299340368006977710650566631954\n                  81234880673210146739058568557934581403627822703280\n                  82616570773948327592232845941706525094512325230608\n                  22918802058777319719839450180888072429661980811197\n                  77158542502016545090413245809786882778948721859617\n                  72107838435069186155435662884062257473692284509516\n                  20849603980134001723930671666823555245252804609722\n                  53503534226472524250874054075591789781264330331690";

	                //console.log(numbers[0]);
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _utilities = __webpack_require__(5);

	var longest_chain = 0;
	var number_longest_chain = 0;
	var chain_size = [];

	var collatz_steps = function collatz_steps(n) {
	  var steps = 0;
	  while (n > 1) {
	    if (chain_size[n] != undefined) {
	      steps += chain_size[n];
	      break;
	    } else {
	      if (n % 2 == 0) {
	        n /= 2;
	      } else {
	        n = 3 * n + 1;
	      }
	      steps++;
	    }
	  }
	  return steps;
	};

	$(document).ready(function () {
	  var solution14 = document.getElementById("solution14");
	  var button = document.getElementById("button_solution14");

	  var solve14 = function solve14() {
	    if (!longest_chain) {
	      console.log("Calculating...");
	      for (var i = 1; i < 1000000; i++) {
	        chain_size[i] = collatz_steps(i);
	        if (longest_chain < chain_size[i]) {
	          longest_chain = Math.max(longest_chain, chain_size[i]);
	          number_longest_chain = i;
	        }
	      }
	      console.log("Finished");
	    }
	    (0, _utilities.changeButtonStatus)(button, solution14, number_longest_chain);
	  };
	  button.addEventListener("click", solve14);
	});

/***/ }
/******/ ]);