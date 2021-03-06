function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var placeholderImage = _interopDefault(require('./placeholder.jpg'));
var fallbackImage = _interopDefault(require('./fallback.png'));

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      return function () {
        if (i >= o.length) return {
          done: true
        };
        return {
          done: false,
          value: o[i++]
        };
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  it = o[Symbol.iterator]();
  return it.next.bind(it);
}

var styles = {"carousel":"_2ILZE","maxCarousel":"_1_Dg2","carouselInner":"_2qwzr","slidesContainer":"_Pfcmb","gallery":"_3q7r8"};

var styles$1 = {"slides":"_L8X8r","RTL":"_or-gG","hasImages":"_FP5OY"};

var styles$2 = {"slide":"_1eGao"};

var styles$3 = {"figure":"_3iVQ0","image":"_t1897","thumbnail":"_1BRif","hidden":"_3UdL5"};

var styles$4 = {"widgetWrapper":"_3lwW_","disabled":"_1zlZS","textWrapper":"_1R7KP","captionWrapper":"_1OkCh","text":"__JnHV","shadow":"_3lLfB","buttonsWrapper":"_14Fp5","RTL":"_3Rfma","centerLeft":"_1cqA3","centerCenter":"_2GizQ","centerRight":"_2zEIf","topLeft":"_lhmht","topCenter":"_29p_Y","top":"_3r4Pe","topRight":"_1oKnM","bottomLeft":"_2A4to","bottomCenter":"_3apmu","bottom":"_2ljUm","bottomRight":"_3XvNX"};

var styles$5 = {"button":"_ZTBlf","buttonShadow":"_3LX_O","iconWrapper":"_lfOsC","rectangle":"_1Pekn","square":"_dZ8C-","circle":"_20GWq","icon":"_3WRGR"};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k;var ContextProvider=h;var Element=c;var ForwardRef=n;var Fragment=e;var Lazy=t;var Memo=r;var Portal=d;
var Profiler=g;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A(a)||z(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z(a)===k};var isContextProvider=function(a){return z(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z(a)===n};var isFragment=function(a){return z(a)===e};var isLazy=function(a){return z(a)===t};
var isMemo=function(a){return z(a)===r};var isPortal=function(a){return z(a)===d};var isProfiler=function(a){return z(a)===g};var isStrictMode=function(a){return z(a)===f};var isSuspense=function(a){return z(a)===p};
var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};var typeOf=z;

var reactIs_production_min = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element,
	ForwardRef: ForwardRef,
	Fragment: Fragment,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

var reactIs_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}
});

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning$1(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning$1(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning$1(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

var icons = {
  left: /*#__PURE__*/React__default.createElement("div", {
    className: styles$5.iconWrapper + ' ' + styles$5.rectangle
  }, /*#__PURE__*/React__default.createElement("svg", {
    className: styles$5.icon,
    height: "40",
    preserveAspectRatio: "xMidYMid meet",
    role: "img",
    viewBox: "0 0 20 40",
    width: "20",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default.createElement("title", null, "Left"), /*#__PURE__*/React__default.createElement("path", {
    d: "m19 1v37l-18-20z"
  }))),
  right: /*#__PURE__*/React__default.createElement("div", {
    className: styles$5.iconWrapper + ' ' + styles$5.rectangle
  }, /*#__PURE__*/React__default.createElement("svg", {
    className: styles$5.icon,
    height: "40",
    preserveAspectRatio: "xMidYMid meet",
    role: "img",
    viewBox: "0 0 20 40",
    width: "20",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default.createElement("title", null, "Right"), /*#__PURE__*/React__default.createElement("path", {
    d: "m1 1v38l18-19z"
  }))),
  play: /*#__PURE__*/React__default.createElement("div", {
    className: styles$5.iconWrapper + ' ' + styles$5.square
  }, /*#__PURE__*/React__default.createElement("svg", {
    className: styles$5.icon,
    height: "30",
    preserveAspectRatio: "xMidYMid meet",
    role: "img",
    viewBox: "0 0 30 30",
    width: "30",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default.createElement("title", null, "Play"), /*#__PURE__*/React__default.createElement("path", {
    d: "m1 1v28l28-14z"
  }))),
  pause: /*#__PURE__*/React__default.createElement("div", {
    className: styles$5.iconWrapper + ' ' + styles$5.square
  }, /*#__PURE__*/React__default.createElement("svg", {
    className: styles$5.icon,
    height: "30",
    preserveAspectRatio: "xMidYMid meet",
    role: "img",
    viewBox: "0 0 30 30",
    width: "30",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default.createElement("title", null, "Pause"), /*#__PURE__*/React__default.createElement("path", {
    d: "m1 1v28h9v-28zm19 0v28h9v-28z"
  }))),
  max: /*#__PURE__*/React__default.createElement("div", {
    className: styles$5.iconWrapper + ' ' + styles$5.square
  }, /*#__PURE__*/React__default.createElement("svg", {
    className: styles$5.icon,
    height: "30",
    preserveAspectRatio: "xMidYMid meet",
    role: "img",
    viewBox: "0 0 30 30",
    width: "30",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default.createElement("title", null, "Maximize"), /*#__PURE__*/React__default.createElement("path", {
    d: "m1 1v10h5v-5h5v-5zm18 0v5h5v5h5v-10zm-18 18v10h10v-5h-5v-5zm18 5v5h10v-10h-5v5z"
  }))),
  min: /*#__PURE__*/React__default.createElement("div", {
    className: styles$5.iconWrapper + ' ' + styles$5.square
  }, /*#__PURE__*/React__default.createElement("svg", {
    className: styles$5.icon,
    height: "30",
    preserveAspectRatio: "xMidYMid meet",
    role: "img",
    viewBox: "0 0 30 30",
    width: "30",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default.createElement("title", null, "Minimize"), /*#__PURE__*/React__default.createElement("path", {
    d: "m6 1v5h-5v5h10v-10zm13 0v10h10v-5h-5v-5zm-18 18v5h5v5h5v-10zm18 0v10h5v-5h5v-5z"
  }))),
  active: /*#__PURE__*/React__default.createElement("div", {
    className: styles$5.iconWrapper + ' ' + styles$5.circle
  }, /*#__PURE__*/React__default.createElement("svg", {
    className: styles$5.icon,
    height: "10",
    preserveAspectRatio: "xMidYMid meet",
    role: "img",
    viewBox: "0 0 10 10",
    width: "10",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default.createElement("title", null, "Stay"), /*#__PURE__*/React__default.createElement("circle", {
    cx: "5",
    cy: "5",
    r: "4",
    fill: "#888"
  }))),
  passive: /*#__PURE__*/React__default.createElement("div", {
    className: styles$5.iconWrapper + ' ' + styles$5.circle
  }, /*#__PURE__*/React__default.createElement("svg", {
    className: styles$5.icon,
    height: "10",
    preserveAspectRatio: "xMidYMid meet",
    role: "img",
    viewBox: "0 0 10 10",
    width: "10",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default.createElement("title", null, "Go"), /*#__PURE__*/React__default.createElement("circle", {
    cx: "5",
    cy: "5",
    r: "4"
  })))
};
var IconButton = function IconButton(props) {
  var icon = props.icon !== undefined ? props.icon : icons[props.name];
  return /*#__PURE__*/React__default.createElement("button", {
    className: styles$5.button + ("" + (props.hasShadow ? ' ' + styles$5.buttonShadow : '')),
    type: "button",
    "aria-label": props.label,
    "aria-disabled": false,
    onClick: props.onClick
  }, icon);
};
IconButton.propTypes = {
  icon: propTypes.node,
  name: propTypes.oneOf(['left', 'right', 'play', 'pause', 'max', 'min', 'active', 'passive']).isRequired,
  hasShadow: propTypes.bool.isRequired,
  label: propTypes.string.isRequired,
  onClick: propTypes.func
};

var useNoSwipe = function useNoSwipe(elementRef) {
  React.useEffect(function () {
    var el = elementRef.current;

    var handleSwipe = function handleSwipe(e) {
      e.stopPropagation();
    };

    if (el) {
      el.addEventListener('mousedown', handleSwipe);
      el.addEventListener('touchstart', handleSwipe, {
        passive: true
      });
    }

    return function () {
      if (!el) {
        el.removeEventListener('mousedown', handleSwipe);
        el.removeEventListener('touchstart', handleSwipe, {
          passive: true
        });
      }
    };
  }, [elementRef]);
};

var positiveNumber = function positiveNumber(allow0, optional) {
  if (allow0 === void 0) {
    allow0 = false;
  }

  if (optional === void 0) {
    optional = true;
  }

  return function (props, propName, componentName) {
    var prop = props[propName];
    if (optional && prop === undefined) return;
    if (typeof prop !== 'number' || prop < 0 || !allow0 && prop === 0) return new Error("Invalid prop `" + propName + "` of type `" + typeof prop + "` supplied to `" + componentName + "`, expected `number` " + (allow0 ? '>=' : '>') + " 0.");
  };
};
var numberBetween = function numberBetween(min, max, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$includeMin = _ref.includeMin,
      includeMin = _ref$includeMin === void 0 ? false : _ref$includeMin,
      _ref$includeMax = _ref.includeMax,
      includeMax = _ref$includeMax === void 0 ? false : _ref$includeMax,
      _ref$optional = _ref.optional,
      optional = _ref$optional === void 0 ? true : _ref$optional;

  return function (props, propName, componentName) {
    var prop = props[propName];
    if (optional && prop === undefined) return;
    if (typeof prop !== 'number' || !(min <= prop <= max) || !includeMin && min === prop || !includeMax && max === prop) return new Error("Invalid prop `" + propName + "` of type `" + typeof prop + "` supplied to `" + componentName + "`, expected " + min + " " + (includeMin ? '<=' : '<') + " `number` " + (includeMax ? '<=' : '<') + " " + max + ".");
  };
};
var comparator = {
  '>=': function _(a, b) {
    return a >= b;
  }
};
var compareToProp = function compareToProp(operator, otherPropName, optional) {
  if (optional === void 0) {
    optional = true;
  }

  return function (props, propName, componentName) {
    var prop = props[propName];
    var otherProp = props[otherPropName];
    if (optional && prop === undefined) return;
    if (typeof prop !== 'number' || typeof otherProp !== 'number' || !comparator[operator](prop, otherProp)) return new Error("Invalid prop `" + propName + "` of type `" + typeof prop + "` supplied to `" + componentName + "`, expected " + propName + " " + operator + " " + otherPropName + ".");
  };
};
var fallbackProps = function fallbackProps(_fallbackProps) {
  return function (props, propName, componentName) {
    var prop = props[propName];
    if (prop !== undefined) return;

    for (var _iterator = _createForOfIteratorHelperLoose(_fallbackProps), _step; !(_step = _iterator()).done;) {
      var fallbackProp = _step.value;
      if (props[fallbackProp] !== undefined) return;
    }

    return new Error("The props `" + _fallbackProps + "` and `" + propName + " are marked as at least one required in `" + componentName + ", but their values are all `undefined`.");
  };
};
var elementRef = propTypes.shape({
  current: propTypes.object
});
var objectFitStyles = propTypes.oneOf(['contain', 'cover', 'fill', 'none', 'scale-down']);
var smallWidgetPositions = propTypes.oneOf([false, 'topLeft', 'topCenter', 'topRight', 'centerLeft', 'centerCenter', 'centerRight', 'bottomLeft', 'bottomCenter', 'bottomRight']);
var largeWidgetPositions = propTypes.oneOf([false, 'top', 'bottom']);
var slideObject = propTypes.oneOfType([propTypes.object.isRequired, propTypes.element.isRequired]);
var imageObject = propTypes.shape({
  src: propTypes.string.isRequired,
  srcset: propTypes.string,
  alt: propTypes.string,
  thumbnail: propTypes.string
});

var arrowButtonPropTypes = {
  position: smallWidgetPositions.isRequired,
  isDisabled: propTypes.bool.isRequired,
  icon: propTypes.node,
  isRTL: propTypes.bool.isRequired,
  hasShadow: propTypes.bool.isRequired,
  onClick: propTypes.func.isRequired
};
var LeftButton = function LeftButton(props) {
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$4.widgetWrapper + ' ' + styles$4[props.position] + ("" + (props.isDisabled ? ' ' + styles$4.disabled : ''))
  }, /*#__PURE__*/React__default.createElement(IconButton, {
    icon: props.icon,
    name: "left",
    hasShadow: props.hasShadow,
    label: props.isRTL ? 'Go to Next Slide' : 'Go to Previous Slide',
    onClick: props.isDisabled ? undefined : props.onClick
  }));
};
LeftButton.propTypes = arrowButtonPropTypes;
var RightButton = function RightButton(props) {
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$4.widgetWrapper + ' ' + styles$4[props.position] + ("" + (props.isDisabled ? ' ' + styles$4.disabled : ''))
  }, /*#__PURE__*/React__default.createElement(IconButton, {
    icon: props.icon,
    name: "right",
    hasShadow: props.hasShadow,
    label: props.isRTL ? 'Go to Previous Slide' : 'Go to Next Slide',
    onClick: props.isDisabled ? undefined : props.onClick
  }));
};
RightButton.propTypes = arrowButtonPropTypes;
var MediaButton = function MediaButton(props) {
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$4.widgetWrapper + ' ' + styles$4[props.position]
  }, /*#__PURE__*/React__default.createElement(IconButton, {
    icon: props.isPlaying ? props.pauseIcon : props.playIcon,
    name: props.isPlaying ? 'pause' : 'play',
    hasShadow: props.hasShadow,
    label: props.isPlaying ? 'Pause Autoplay' : 'Start Autoplay',
    onClick: props.onClick
  }));
};
MediaButton.propTypes = {
  position: smallWidgetPositions.isRequired,
  isPlaying: propTypes.bool.isRequired,
  pauseIcon: propTypes.node,
  playIcon: propTypes.node,
  hasShadow: propTypes.bool.isRequired,
  onClick: propTypes.func.isRequired
};
var SizeButton = function SizeButton(props) {
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$4.widgetWrapper + ' ' + styles$4[props.position]
  }, /*#__PURE__*/React__default.createElement(IconButton, {
    icon: props.isMaximized ? props.minIcon : props.maxIcon,
    name: props.isMaximized ? 'min' : 'max',
    hasShadow: props.hasShadow,
    label: props.isMaximized ? 'Minimize Slides' : 'Maximize Slides',
    onClick: props.onClick
  }));
};
SizeButton.propTypes = {
  position: smallWidgetPositions.isRequired,
  isMaximized: propTypes.bool.isRequired,
  minIcon: propTypes.node,
  maxIcon: propTypes.node,
  hasShadow: propTypes.bool.isRequired,
  onClick: propTypes.func.isRequired
};
var IndexBoard = function IndexBoard(props) {
  var ref = React.useRef(null);
  return /*#__PURE__*/React__default.createElement("div", {
    ref: ref,
    className: styles$4.widgetWrapper + ' ' + styles$4.textWrapper + ' ' + styles$4[props.position] + (props.hasShadow ? ' ' + styles$4.shadow : ''),
    tabIndex: "-1"
  }, /*#__PURE__*/React__default.createElement("span", {
    className: styles$4.text
  }, props.curIndex || 0, " / ", props.totalIndices || 0));
};
IndexBoard.propTypes = {
  position: smallWidgetPositions.isRequired,
  hasShadow: propTypes.bool.isRequired,
  curIndex: propTypes.number.isRequired,
  totalIndices: propTypes.number.isRequired
};
IndexBoard.defaultProps = {
  curIndex: 0,
  totalIndices: 0
};
var DotButtons = function DotButtons(props) {
  var callbacks = props.callbacks;
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$4.widgetWrapper + ' ' + styles$4[props.position]
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles$4.buttonsWrapper + ("" + (props.isRTL ? ' ' + styles$4.RTL : ''))
  }, Object.keys(callbacks).map(function (key, index) {
    return /*#__PURE__*/React__default.createElement(IconButton, {
      key: index,
      icon: Number(key) === props.curIndex ? props.activeIcon : props.passiveIcon,
      name: Number(key) === props.curIndex ? 'active' : 'passive',
      label: Number(key) === props.curIndex ? "Stay on Slide " + (index + 1) : "Go to Slide " + (index + 1),
      hasShadow: props.hasShadow,
      onClick: callbacks[key]
    });
  })));
};
DotButtons.propTypes = {
  callbacks: propTypes.objectOf(propTypes.func).isRequired,
  position: largeWidgetPositions.isRequired,
  isRTL: propTypes.bool.isRequired,
  curIndex: propTypes.number.isRequired,
  activeIcon: propTypes.node,
  passiveIcon: propTypes.node,
  hasShadow: propTypes.bool.isRequired
};
DotButtons.defaultProps = {
  curIndex: 0
};
var Caption = /*#__PURE__*/React.memo(function (props) {
  var captionRef = React.useRef(null);
  useNoSwipe(captionRef);
  return /*#__PURE__*/React__default.createElement("figcaption", {
    ref: captionRef,
    className: styles$4.widgetWrapper + ' ' + styles$4.captionWrapper + ' ' + styles$4[props.position] + ' ' + (props.hasShadow ? ' ' + styles$4.shadow : ''),
    tabIndex: "-1"
  }, /*#__PURE__*/React__default.createElement("span", {
    className: styles$4.text
  }, props.text));
});
Caption.type.displayName = 'Caption';
Caption.propTypes = {
  position: largeWidgetPositions.isRequired,
  hasShadow: propTypes.bool.isRequired,
  text: propTypes.string
};

var useIntersectionObserver = function useIntersectionObserver(elementRef, rootRef, rootMargin) {
  if (rootMargin === void 0) {
    rootMargin = '0px 0px 0px 0px';
  }

  var _useState = React.useState(false),
      isIntersecting = _useState[0],
      setIsIntersecting = _useState[1];

  React.useEffect(function () {
    if (!('IntersectionObserver' in window)) {
      return function () {};
    }

    var root = rootRef !== null && rootRef !== void 0 && rootRef.current ? rootRef.current : null;
    var observer = new IntersectionObserver(function (_ref, observer) {
      var entry = _ref[0];

      if (!isIntersecting && entry.isIntersecting) {
        setIsIntersecting(true);
        observer.disconnect();
      }
    }, {
      root: root,
      rootMargin: rootMargin,
      threshold: 0
    });
    if (elementRef.current) observer.observe(elementRef.current);
    return function () {
      if (observer) observer.disconnect();
    };
  }, [rootRef, rootMargin, elementRef, isIntersecting]);

  if (!('IntersectionObserver' in window)) {
    return true;
  }

  return isIntersecting;
};

var handleError = function handleError(event) {
  event.target.src = fallbackImage;
};

var LazyLoadedImage = function LazyLoadedImage(props) {
  var imageRef = React.useRef(null);
  var isInViewport = useIntersectionObserver(imageRef, props.slidesContainerRef, '0px 101% 0px 101%');

  var _useState = React.useState(props.image.thumbnail),
      shouldShowThumbnail = _useState[0],
      setShouldShowThumbnail = _useState[1];

  var _useState2 = React.useState(false),
      hasError = _useState2[0],
      setHasError = _useState2[1];

  var handleLoad = function handleLoad() {
    if (isInViewport) setShouldShowThumbnail(false);
  };

  var handleError = function handleError() {
    setHasError(true);
  };

  var _props$image = props.image,
      src = _props$image.src,
      srcset = _props$image.srcset,
      alt = _props$image.alt,
      thumbnail = _props$image.thumbnail,
      otherImageProps = _objectWithoutPropertiesLoose(_props$image, ["src", "srcset", "alt", "thumbnail"]);

  src = isInViewport ? hasError ? fallbackImage : src : placeholderImage;
  srcset = isInViewport ? hasError ? null : srcset : null;
  thumbnail = isInViewport ? hasError ? fallbackImage : thumbnail : placeholderImage;
  return /*#__PURE__*/React__default.createElement(React.Fragment, null, /*#__PURE__*/React__default.createElement("img", _extends({
    ref: imageRef,
    className: styles$3.image,
    srcSet: srcset,
    src: src,
    alt: alt || null,
    style: props.style,
    onLoad: handleLoad,
    onError: handleError || handleLoad
  }, otherImageProps)), /*#__PURE__*/React__default.createElement("img", {
    className: styles$3.thumbnail + (shouldShowThumbnail ? '' : ' ' + styles$3.hidden),
    src: thumbnail,
    alt: alt || null,
    style: props.style,
    onError: handleError
  }));
};

LazyLoadedImage.propTypes = {
  slidesContainerRef: elementRef.isRequired,
  image: imageObject.isRequired,
  style: propTypes.object.isRequired
};
var Image = function Image(props) {
  var objectFit = props.objectFit === 'cover' ? null : props.objectFit;
  var style = {
    objectFit: objectFit
  };

  var _props$image2 = props.image,
      src = _props$image2.src,
      alt = _props$image2.alt,
      srcset = _props$image2.srcset,
      otherImageProps = _objectWithoutPropertiesLoose(_props$image2, ["src", "alt", "srcset", "thumbnail"]);

  var image = props.shouldLazyLoad ? /*#__PURE__*/React__default.createElement(LazyLoadedImage, {
    slidesContainerRef: props.slidesContainerRef,
    image: props.image,
    style: style
  }) : /*#__PURE__*/React__default.createElement("img", _extends({
    className: styles$3.image,
    srcSet: srcset,
    src: src,
    alt: alt || null,
    loading: "auto",
    style: style,
    onError: handleError
  }, otherImageProps));
  return /*#__PURE__*/React__default.createElement("figure", {
    className: styles$3.figure,
    "aria-label": props.image.alt || null
  }, image, props.hasCaption && props.image.alt && /*#__PURE__*/React__default.createElement(Caption, {
    text: props.image.alt || null,
    position: props.hasCaption,
    hasShadow: props.widgetsHasShadow
  }));
};
Image.propTypes = {
  objectFit: objectFitStyles.isRequired,
  image: imageObject.isRequired,
  shouldLazyLoad: propTypes.bool.isRequired,
  slidesContainerRef: elementRef.isRequired,
  hasCaption: largeWidgetPositions.isRequired,
  widgetsHasShadow: propTypes.bool.isRequired
};

var handleError$1 = function handleError(event) {
  event.target.src = fallbackImage;
};

var LazyLoadedImageThumbnail = function LazyLoadedImageThumbnail(props) {
  var imageRef = React.useRef(null);
  var isInViewport = useIntersectionObserver(imageRef, props.thumbnailsContainerRef, '0px 20% 0px 20%');
  var src = isInViewport ? props.src : placeholderImage;
  return /*#__PURE__*/React__default.createElement("img", {
    ref: imageRef,
    className: styles$3.image,
    src: src,
    alt: props.alt,
    "aria-label": props.alt,
    onError: handleError$1
  });
};

LazyLoadedImageThumbnail.propTypes = {
  thumbnailsContainerRef: elementRef.isRequired,
  src: propTypes.string.isRequired,
  alt: propTypes.string
};
var ImageThumbnail = function ImageThumbnail(props) {
  var src = props.image.thumbnail || props.image.src;
  var alt = props.image.alt || null;
  if (props.shouldLazyLoad) return /*#__PURE__*/React__default.createElement(LazyLoadedImageThumbnail, {
    thumbnailsContainerRef: props.thumbnailsContainerRef,
    src: src,
    alt: alt
  });
  return /*#__PURE__*/React__default.createElement("img", {
    className: styles$3.image,
    src: src,
    alt: alt,
    "aria-label": alt,
    loading: "auto",
    onError: handleError$1
  });
};
ImageThumbnail.propTypes = {
  image: imageObject.isRequired,
  shouldLazyLoad: propTypes.bool.isRequired,
  thumbnailsContainerRef: elementRef.isRequired
};

var styles$6 = {"userSlide":"_1JHpX","thumbnail":"_XQjA1"};

var UserSlide = function UserSlide(props) {
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$6.userSlide
  }, props.slide);
};
UserSlide.propTypes = {
  slide: propTypes.node.isRequired
};
var UserSlideThumbnail = function UserSlideThumbnail(props) {
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$6.userSlide + ' ' + styles$6.thumbnail,
    tabIndex: "-1"
  }, props.slide);
};
UserSlideThumbnail.propTypes = {
  slide: propTypes.node.isRequired
};

var Slide = function Slide(props) {
  var slide = props.isImage ? /*#__PURE__*/React__default.createElement(Image, {
    image: props.slide,
    shouldLazyLoad: props.shouldLazyLoad,
    objectFit: props.objectFit,
    widgetsHasShadow: props.widgetsHasShadow,
    hasCaption: props.hasCaption,
    slidesContainerRef: props.slidesContainerRef
  }) : /*#__PURE__*/React__default.createElement(UserSlide, {
    slide: props.slide
  });
  return /*#__PURE__*/React__default.createElement("li", {
    ref: props.reference,
    className: styles$2.slide,
    role: "presentation",
    "aria-live": props.isCurrent ? 'polite' : null
  }, slide);
};
Slide.propTypes = {
  isImage: propTypes.bool.isRequired,
  slide: slideObject.isRequired,
  shouldLazyLoad: propTypes.bool.isRequired,
  objectFit: objectFitStyles.isRequired,
  widgetsHasShadow: propTypes.bool.isRequired,
  hasCaption: largeWidgetPositions.isRequired,
  slidesContainerRef: elementRef.isRequired,
  reference: elementRef,
  isCurrent: propTypes.bool.isRequired
};

var Slides = function Slides(props) {
  var slides = props.slides;
  return /*#__PURE__*/React__default.createElement("ul", {
    ref: props.slidesRef,
    className: styles$1.slides + ("" + (props.isRTL ? ' ' + styles$1.RTL : '')) + ("" + (props.hasImages ? ' ' + styles$1.hasImages : ''))
  }, slides.map(function (slide, index) {
    var reference = null;
    if (index === 0) reference = props.minRef;else if (index === props.length - 1) reference = props.maxRef;
    return /*#__PURE__*/React__default.createElement(Slide, {
      key: index,
      draggable: "false",
      reference: reference,
      slidesContainerRef: props.slidesContainerRef,
      slide: slide,
      isImage: props.hasImages,
      shouldLazyLoad: props.shouldLazyLoad,
      objectFit: props.objectFit,
      widgetsHasShadow: props.widgetsHasShadow,
      hasCaption: props.hasCaptions,
      isCurrent: index === props.curIndex
    });
  }));
};
Slides.propTypes = {
  slides: propTypes.array.isRequired,
  isRTL: propTypes.bool.isRequired,
  slidesRef: elementRef.isRequired,
  minRef: elementRef.isRequired,
  length: positiveNumber(true),
  maxRef: elementRef.isRequired,
  slidesContainerRef: elementRef.isRequired,
  hasImages: propTypes.bool.isRequired,
  shouldLazyLoad: propTypes.bool.isRequired,
  objectFit: objectFitStyles.isRequired,
  widgetsHasShadow: propTypes.bool.isRequired,
  hasCaptions: largeWidgetPositions.isRequired,
  curIndex: propTypes.number
};

var styles$7 = {"thumbnailsWrapper":"_2c50p","thumbnails":"_-LJ2W","RTL":"_3NsOQ"};

var styles$8 = {"thumbnail":"_-cAh3","currentThumbnail":"_19gvi"};

var useNoDrag = function useNoDrag(elementRef) {
  React.useEffect(function () {
    var element = elementRef.current;

    var handleDrag = function handleDrag(e) {
      return e.preventDefault();
    };

    if (element) element.addEventListener('dragstart', handleDrag);
    return function () {
      if (element) element.removeEventListener('dragstart', handleDrag);
    };
  }, [elementRef]);
};

var useKeys = function useKeys(elementRef, callbacks) {
  var callbackRef = React.useRef(null);
  callbackRef.current = callbacks;
  React.useEffect(function () {
    var handleKeyDown = function handleKeyDown(event) {
      callbackRef.current[event.key] && callbackRef.current[event.key](event);
    };

    var element = elementRef.current;
    if (element) element.addEventListener('keydown', handleKeyDown);
    return function () {
      if (element) element.removeEventListener('keydown', handleKeyDown);
    };
  }, [elementRef, callbackRef]);
};

var Thumbnail = function Thumbnail(props) {
  var reference = React.useRef(null);
  var slide = props.isImage ? /*#__PURE__*/React__default.createElement(ImageThumbnail, {
    thumbnailsContainerRef: props.thumbnailsContainerRef,
    image: props.slide,
    shouldLazyLoad: props.shouldLazyLoad
  }) : /*#__PURE__*/React__default.createElement(UserSlideThumbnail, {
    slide: props.slide
  });
  var className = "" + styles$8.thumbnail + (props.isCurrent ? ' ' + styles$8.currentThumbnail : '');
  var style = 'width' in props ? {
    minWidth: props.width,
    width: props.width,
    maxWidth: props.width
  } : {};
  var ref = props.isCurrent ? props.reference : reference;
  useNoDrag(ref);
  useKeys(ref, {
    Enter: props.onClick
  });
  return /*#__PURE__*/React__default.createElement("li", {
    ref: ref,
    className: className,
    role: "button",
    tabIndex: 0,
    style: style,
    onMouseUpCapture: props.onClick
  }, slide);
};
Thumbnail.propTypes = {
  isImage: propTypes.bool.isRequired,
  thumbnailsContainerRef: elementRef.isRequired,
  slide: slideObject.isRequired,
  shouldLazyLoad: propTypes.bool.isRequired,
  isCurrent: propTypes.bool.isRequired,
  width: propTypes.string,
  reference: elementRef.isRequired,
  onClick: propTypes.func.isRequired
};

var useEventListener = function useEventListener(element, event, callback) {
  var callbackRef = React.useRef(null);
  callbackRef.current = callback;
  React.useEffect(function () {
    var callback = callbackRef.current;
    if (element) element.addEventListener(event, callback);
    return function () {
      if (element) element.removeEventListener(event, callback);
    };
  }, [element, event, callback]);
};

var useMediaQuery = function useMediaQuery(query) {
  var mediaQueryList = window.matchMedia(query);

  var _useState = React.useState(mediaQueryList.matches),
      matches = _useState[0],
      setMatches = _useState[1];

  React.useEffect(function () {
    var callback = function callback() {
      return setMatches(mediaQueryList.matches);
    };

    mediaQueryList.addEventListener('change', callback);
    return function () {
      return mediaQueryList.removeEventListener('change', callback);
    };
  }, [mediaQueryList]);
  return matches;
};

var useAnchor = function useAnchor(elementRef, isMaximized) {
  var element = elementRef && elementRef.current;
  var container = element && element.parentNode.parentNode;
  var wasInitialRender = !(element && container);
  var wasLeftMost = element && element.offsetLeft <= 0;
  var wasRightMost = element && container && element.offsetLeft + element.clientWidth >= container.clientWidth;
  var isReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  var centerElement = React.useCallback(function () {
    var element = elementRef.current;
    if (!element) return;
    var container = element.parentNode.parentNode;
    container.scrollTo({
      top: 0,
      left: element.offsetLeft - container.clientWidth / 2 + element.clientWidth / 2
    });
  }, [elementRef]);
  var centerElementSmoothly = React.useCallback(function () {
    var element = elementRef.current;
    if (!element) return;
    var container = element.parentNode.parentNode;
    var isLeftMost = element && element.offsetLeft === 0;
    var isRightMost = element && container && element.offsetLeft + element.clientWidth >= container.clientWidth;
    var options = wasInitialRender || wasLeftMost && isRightMost || wasRightMost && isLeftMost || isReducedMotion ? {} : {
      behavior: 'smooth'
    };
    container.scrollTo(_extends({
      top: 0,
      left: element.offsetLeft - container.clientWidth / 2 + element.clientWidth / 2
    }, options));
  }, [elementRef, wasInitialRender, wasLeftMost, wasRightMost, isReducedMotion]);
  React.useEffect(function () {
    return centerElement();
  }, [centerElement, isMaximized]);
  React.useEffect(function () {
    return centerElementSmoothly();
  });
  useEventListener(elementRef.current, 'click', centerElement);
  useEventListener(window, 'resize', centerElement);
};

var useNoOverScroll = function useNoOverScroll(elementRef) {
  return function (event) {
    if (Math.abs(event.deltaX) < Math.abs(event.deltaY)) return;
    var _elementRef$current = elementRef.current,
        scrollLeft = _elementRef$current.scrollLeft,
        scrollWidth = _elementRef$current.scrollWidth,
        offsetWidth = _elementRef$current.offsetWidth;
    if ((scrollLeft + event.deltaX < 0 || scrollLeft + event.deltaX > scrollWidth - offsetWidth) && event.cancelable) event.preventDefault();
  };
};

var useMouse = function useMouse(elementRef, _ref) {
  var onMouseMove = _ref.onMouseMove,
      onMouseUp = _ref.onMouseUp,
      onTap = _ref.onTap;
  var isMouseDown = false;
  var isMouseMoved = false;
  var mouseDownX = 0;
  var previousX = 0;
  var previousTime = Date.now();
  var instantaneousVelocity = 0;

  var handleMouseDown = function handleMouseDown(event) {
    if (elementRef.current) elementRef.current.classList.add('isGrabbing');
    if (event.buttons > 0) isMouseDown = true;
    mouseDownX = event.clientX;
    previousX = event.clientX;
    previousTime = Date.now();
  };

  var handleMouseMove = function handleMouseMove(event) {
    if (isMouseDown && event.buttons > 0) {
      onMouseMove(event.clientX - mouseDownX, 0, event.clientX - previousX);
      isMouseMoved = true;
      instantaneousVelocity = (event.clientX - previousX) / (Date.now() - previousTime);
      previousX = event.clientX;
      previousTime = Date.now();
    }
  };

  var handleMouseUp = function handleMouseUp(event) {
    if (elementRef.current) elementRef.current.classList.remove('isGrabbing');

    if (isMouseDown) {
      if (isMouseMoved) {
        onMouseUp(event.clientX - mouseDownX, 0, instantaneousVelocity, event);
      } else onTap();
    }

    isMouseDown = false;
    isMouseMoved = false;
  };

  return {
    onMouseDown: function onMouseDown(event) {
      return handleMouseDown(event);
    },
    onMouseMove: function onMouseMove(event) {
      return handleMouseMove(event);
    },
    onMouseUpCapture: function onMouseUpCapture(event) {
      return handleMouseUp(event);
    },
    onMouseLeave: function onMouseLeave(event) {
      return handleMouseUp(event);
    }
  };
};

var useMouseDrag = function useMouseDrag(elementRef) {
  var handleMouseMove = function handleMouseMove(displacementX, displacementY, deltaX) {
    var element = elementRef.current;
    if (!element) return;
    element.scrollTo({
      top: 0,
      left: element.scrollLeft - deltaX
    });
  };

  var handleMouseUp = function handleMouseUp(displacementX, displacementY, velocity, event) {
    if (Math.abs(displacementX) <= 2) return;
    event.stopPropagation();
    return false;
  };

  React.useEffect(function () {
    if (elementRef.current) elementRef.current.onselectstart = function () {
      return false;
    };
  }, [elementRef]);
  return useMouse(elementRef, {
    onMouseMove: handleMouseMove,
    onMouseUp: handleMouseUp,
    onTap: function onTap() {}
  });
};

var Thumbnails = function Thumbnails(props) {
  var callbacks = props.callbacks;
  var thumbnailsContainerRef = React.useRef(null);
  var thumbnailRef = React.useRef(null);
  useAnchor(thumbnailRef, props.isMaximized);
  var style = 'height' in props ? {
    flexBasis: props.height
  } : {};
  var wheelEventHandler = useNoOverScroll(thumbnailsContainerRef);
  var mouseEventHandlers = useMouseDrag(thumbnailsContainerRef);
  return /*#__PURE__*/React__default.createElement("div", _extends({
    ref: thumbnailsContainerRef,
    className: styles$7.thumbnailsWrapper,
    style: style,
    onWheel: wheelEventHandler
  }, mouseEventHandlers), /*#__PURE__*/React__default.createElement("ul", {
    className: styles$7.thumbnails + ("" + (props.isRTL ? ' ' + styles$7.RTL : ''))
  }, Object.keys(callbacks).map(function (key, index) {
    return /*#__PURE__*/React__default.createElement(Thumbnail, {
      key: index,
      reference: thumbnailRef,
      thumbnailsContainerRef: thumbnailsContainerRef,
      slide: props.slides[key],
      isImage: props.hasImages,
      shouldLazyLoad: props.shouldLazyLoad,
      isCurrent: Number(key) === props.curIndex,
      width: props.width,
      onClick: callbacks[key]
    });
  })));
};
Thumbnails.propTypes = {
  callbacks: propTypes.objectOf(propTypes.func.isRequired).isRequired,
  isMaximized: propTypes.bool.isRequired,
  width: propTypes.string,
  height: propTypes.string,
  isRTL: propTypes.bool.isRequired,
  slides: propTypes.array.isRequired,
  hasImages: propTypes.bool.isRequired,
  shouldLazyLoad: propTypes.bool.isRequired,
  curIndex: propTypes.number.isRequired
};
Thumbnails.defaultProps = {
  curIndex: 0
};

var getTouchDistinguisher = function getTouchDistinguisher() {
  var pinchTouchIdentifiers = new Set();

  function _recordPinchTouchIdentifiers(event) {
    for (var _iterator = _createForOfIteratorHelperLoose(event.touches), _step; !(_step = _iterator()).done;) {
      var touch = _step.value;
      pinchTouchIdentifiers.add(touch.identifier);
    }
  }

  function _isPinch(event) {
    return event.touches !== undefined && event.touches.length > 1 || event.scale !== undefined && event.scale !== 1;
  }

  function _wasPinch(event) {
    return event.changedTouches && pinchTouchIdentifiers.has(event.changedTouches[0].identifier);
  }

  function isPinch(event) {
    if (_isPinch(event)) {
      _recordPinchTouchIdentifiers(event);

      return true;
    }

    return _wasPinch(event);
  }

  return {
    isPinch: isPinch
  };
};

var useTouch = function useTouch(elementRef, _ref) {
  var onTouchMove = _ref.onTouchMove,
      onTouchEnd = _ref.onTouchEnd,
      onTap = _ref.onTap;
  var touchDistinguisher = getTouchDistinguisher();
  var touchStartX = 0;
  var touchStartY = 0;
  var isTouchStarted = false;
  var isTouchMoved = false;
  var previousX = 0;
  var previousTime = Date.now();
  var instantaneousVelocity = 0;

  var handleVerticalMovement = function handleVerticalMovement(event, displacementX, displacementY) {
    if (Math.abs(displacementX) > Math.abs(displacementY) && event.cancelable) event.preventDefault();
  };

  var shouldOmitEvent = function shouldOmitEvent(event, displacementX) {
    if (displacementX === void 0) {
      displacementX = 0;
    }

    if (touchDistinguisher.isPinch(event)) return true;
    if (!('visualViewport' in window)) return false;
    var _window$visualViewpor = window.visualViewport,
        scale = _window$visualViewpor.scale,
        offsetLeft = _window$visualViewpor.offsetLeft,
        width = _window$visualViewpor.width;
    if (scale <= 1) return false;
    if (offsetLeft <= 0 && displacementX > 0) return false;
    if (offsetLeft + width >= width * scale && displacementX < 0) return false;
    return true;
  };

  var handleTouchStart = function handleTouchStart(event) {
    event.stopPropagation();
    isTouchStarted = true;
    touchStartX = event.touches[0].clientX;
    touchStartY = event.touches[0].clientY;
    previousX = touchStartX;
    previousTime = Date.now();
  };

  var handleTouchMove = function handleTouchMove(event) {
    event.stopPropagation();
    if (!isTouchStarted) return;
    var displacementX = event.changedTouches[0].clientX - touchStartX;
    if (shouldOmitEvent(event, displacementX)) return;
    var displacementY = event.changedTouches[0].clientY - touchStartY;
    handleVerticalMovement(event, displacementX, displacementY);
    onTouchMove(displacementX, displacementY);
    isTouchMoved = true;
    instantaneousVelocity = (event.changedTouches[0].clientX - previousX) / (Date.now() - previousTime);
    previousX = event.changedTouches[0].clientX;
    previousTime = Date.now();
  };

  var handleTouchEnd = function handleTouchEnd(event) {
    event.stopPropagation();
    if (!isTouchStarted) return;
    var displacementX = event.changedTouches[0].clientX - touchStartX;

    if (shouldOmitEvent(event, displacementX)) {
      onTouchEnd(0, 0, 0);
      return;
    }

    var displacementY = event.changedTouches[0].clientY - touchStartY;
    handleVerticalMovement(event, displacementX, displacementY);
    if (isTouchMoved) onTouchEnd(displacementX, displacementY, instantaneousVelocity);else onTap();
    isTouchStarted = false;
    isTouchMoved = false;
  };

  var events = [{
    event: 'touchstart',
    callback: handleTouchStart
  }, {
    event: 'touchmove',
    callback: handleTouchMove
  }, {
    event: 'touchend',
    callback: handleTouchEnd
  }, {
    event: 'touchcancel',
    callback: handleTouchEnd
  }];
  React.useEffect(function () {
    var el = elementRef.current;
    if (el) events.forEach(function (_ref2) {
        var event = _ref2.event,
            callback = _ref2.callback;
        return el.addEventListener(event, callback, {
          passive: false
        });
      });
    return function () {
      if (el) events.forEach(function (_ref3) {
        var event = _ref3.event,
            callback = _ref3.callback;
        return el.removeEventListener(event, callback);
      });
    };
  }, [elementRef, events]);
};

var useSwipe = function useSwipe(elementRef, swipePercentageMin, _ref) {
  var onSwipeMoveX = _ref.onSwipeMoveX,
      onSwipeMoveY = _ref.onSwipeMoveY,
      onSwipeEndRight = _ref.onSwipeEndRight,
      onSwipeEndLeft = _ref.onSwipeEndLeft,
      onSwipeEndDisqualified = _ref.onSwipeEndDisqualified,
      onSwipeEndDown = _ref.onSwipeEndDown,
      onTap = _ref.onTap;
  var isInitialSwipeVertical;

  var handleSwipeEnd = function handleSwipeEnd(displacementX, displacementY, velocity) {
    if (displacementY === void 0) {
      displacementY = 0;
    }

    if (velocity === void 0) {
      velocity = 0;
    }

    var _elementRef$current = elementRef.current,
        width = _elementRef$current.clientWidth,
        height = _elementRef$current.clientHeight;
    var distanceXMin = width * swipePercentageMin;
    var distanceYMin = height * swipePercentageMin;
    var speed = Math.abs(velocity);
    if (!isInitialSwipeVertical && displacementX <= -distanceXMin) onSwipeEndLeft(displacementX, speed);else if (!isInitialSwipeVertical && displacementX >= distanceXMin) onSwipeEndRight(displacementX, speed);else if (isInitialSwipeVertical && displacementY >= distanceYMin) onSwipeEndDown();else onSwipeEndDisqualified(displacementX, speed);
    isInitialSwipeVertical = undefined;
  };

  var handleSwipeMove = function handleSwipeMove(displacementX, displacementY) {
    if (displacementY === void 0) {
      displacementY = 0;
    }

    if (isInitialSwipeVertical === false) onSwipeMoveX(displacementX);else if (isInitialSwipeVertical) onSwipeMoveY(displacementX, displacementY);else {
      isInitialSwipeVertical = displacementY !== 0 && Math.abs(displacementX) < Math.abs(displacementY);
      handleSwipeMove(displacementX, displacementY);
    }
  };

  useTouch(elementRef, {
    onTouchMove: handleSwipeMove,
    onTouchEnd: handleSwipeEnd,
    onTap: onTap
  });
  var mouseEventHandlers = useMouse(elementRef, {
    onMouseMove: handleSwipeMove,
    onMouseUp: handleSwipeEnd,
    onTap: onTap
  });
  useNoDrag(elementRef);
  return mouseEventHandlers;
};

var getTimer = function getTimer(interval, callback) {
  var _interval = interval;
  var _callback = callback;

  var _timer;

  function start() {
    _timer = setInterval(_callback, _interval);
  }

  function stop() {
    _timer && clearInterval(_timer);
  }

  function restart() {
    stop();
    start();
  }

  return {
    start: start,
    stop: stop,
    restart: restart
  };
};

var useTimer = function useTimer(interval, isStarted, callback) {
  var timer = interval ? getTimer(interval, callback) : null;

  var _useState = React.useState(!!timer && isStarted),
      isRunning = _useState[0],
      setIsRunning = _useState[1];

  var start = function start() {
    return !!timer && timer.start();
  };

  var stop = function stop() {
    return !!timer && timer.stop();
  };

  var restart = function restart() {
    return !!timer && timer.restart();
  };

  React.useEffect(function () {
    if (isRunning) start();
    return function () {
      stop();
    };
  });
  return [isRunning, setIsRunning, {
    stopTimer: stop,
    restartTimer: restart
  }];
};

var SlidesFactory = /*#__PURE__*/function () {
  function SlidesFactory() {}

  var _proto = SlidesFactory.prototype;

  _proto.CreateSlides = function CreateSlides(slides, options) {
    return new Slides$1(slides, options);
  };

  return SlidesFactory;
}();

var Slides$1 = /*#__PURE__*/function () {
  function Slides(items, _ref) {
    var index = _ref.index,
        _ref$isLoop = _ref.isLoop,
        isLoop = _ref$isLoop === void 0 ? false : _ref$isLoop;
    this._isLoop = isLoop;
    this._slides = items;
    if (!this._slides || !this._slides.length) return;
    this._length = this._slides.length;
    this._minIndex = 0;
    this._maxIndex = this._length - 1;
    this._headIndex = this._minIndex;
    this._curIndex = this._convertCurIndexForDisplayToCurIndex(index);
  }

  var _proto2 = Slides.prototype;

  _proto2._isIndexInRange = function _isIndexInRange(index) {
    return this._minIndex <= index && index <= this._maxIndex;
  };

  _proto2._convertCurIndexForDisplayToCurIndex = function _convertCurIndexForDisplayToCurIndex(index) {
    if (!index) return this._headIndex;
    if (!this._isIndexInRange(index)) return this._headIndex;
    return index;
  };

  _proto2.isMinIndex = function isMinIndex() {
    return this._curIndex === this._minIndex;
  };

  _proto2.isMaxIndex = function isMaxIndex() {
    return this._curIndex === this._maxIndex;
  };

  Slides._range = function _range(min, max) {
    var length = max - min + 1;
    return Array(length).fill(min).map(function (x, index) {
      return x + index;
    });
  };

  _proto2.calibrateIndex = function calibrateIndex(change) {
    if (!this._length) return false;
    if (!this._isLoop) return false;

    if (this._curIndex === this._minIndex && change < 0) {
      this._curIndex = this._maxIndex + 1;
      return true;
    } else if (this._curIndex === this._maxIndex && change > 0) {
      this._curIndex = this._minIndex - 1;
      return true;
    }

    return false;
  };

  _proto2.canUpdateIndex = function canUpdateIndex(change) {
    if (!this._length) return false;
    if (change === 0) return false;
    if (this._isLoop) return true;
    return this._isIndexInRange(this._curIndex + change);
  };

  _proto2.updateIndex = function updateIndex(change) {
    if (!this._length) return false;
    if (!this.canUpdateIndex(change)) return false;
    this._curIndex = Math.abs((this._length + this._curIndex + change) % this._length);
    return true;
  };

  _proto2._canGoToIndex = function _canGoToIndex(index) {
    if (!this._length) return false;
    return this._isIndexInRange(index);
  };

  _proto2.goToIndex = function goToIndex(index) {
    if (!this._length) return false;
    if (!this._canGoToIndex(index)) return false;
    this._curIndex = index;
    return true;
  };

  _createClass(Slides, [{
    key: "slides",
    get: function get() {
      return this._slides;
    }
  }, {
    key: "length",
    get: function get() {
      return this._length;
    }
  }, {
    key: "curIndex",
    get: function get() {
      return this._curIndex;
    }
  }, {
    key: "curIndexForDisplay",
    get: function get() {
      return this._curIndex + 1;
    }
  }, {
    key: "allIndices",
    get: function get() {
      if (!this._length) return [];
      return this.constructor._range(this._minIndex, this._maxIndex);
    }
  }]);

  return Slides;
}();

var useSlides = function useSlides(items, _ref) {
  var index = _ref.index,
      isLoop = _ref.isLoop;
  return React.useMemo(function () {
    var slidesFactory = new SlidesFactory();
    var slides = slidesFactory.CreateSlides(items, {
      index: index,
      isLoop: isLoop
    });
    var slidesElements = slides.slides;
    return [slides, slidesElements];
  }, [items, index, isLoop]);
};

var useKeyboard = function useKeyboard(elementRef) {
  React.useEffect(function () {
    var element = elementRef.current;

    var handleMouseDown = function handleMouseDown() {
      if (!element) return;
      element.setAttribute('data-is-not-keyboard-user', 'true');
    };

    var handleKeyDown = function handleKeyDown(event) {
      if (!element) return;
      if (event.key !== 'Tab') return;
      element.setAttribute('data-is-not-keyboard-user', 'false');
    };

    if (element) {
      element.addEventListener('mousedown', handleMouseDown);
      element.addEventListener('keydown', handleKeyDown);
    }

    return function () {
      if (element) {
        element.removeEventListener('mousedown', handleMouseDown);
        element.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, [elementRef]);
};

var useFixedPosition = function useFixedPosition(initialState, elementToFocusRef) {
  var _useState = React.useState(initialState),
      isFixed = _useState[0],
      setIsFixed = _useState[1];

  React.useEffect(function () {
    var scrollX = window.scrollX;
    var scrollY = window.scrollY;
    var bodyElement = document.querySelector('body');
    var overflowValue = bodyElement.style.overflow;

    if (isFixed) {
      bodyElement.style.overflow = 'hidden';
      elementToFocusRef.current.focus();
    }

    return function () {
      if (isFixed) {
        window.scrollTo(scrollX, scrollY);
        bodyElement.style.overflow = overflowValue;
      }
    };
  }, [isFixed, elementToFocusRef]);
  return [isFixed, setIsFixed];
};

var MAX_SWIPE_DOWN_DISTANCE = 1500;
var WIDGET_POSITIONS = ['topLeft', 'topCenter', 'topRight', 'centerLeft', 'centerCenter', 'centerRight', 'bottomLeft', 'bottomCenter', 'bottomRight', 'top', 'bottom'];
var WIDGET_POSITIONS_WITH_RTL = ['topRight', 'topCenter', 'topLeft', 'centerRight', 'centerCenter', 'centerLeft', 'bottomRight', 'bottomCenter', 'bottomLeft', 'top', 'bottom'];

var ReversedMap = function ReversedMap(map, isMaximized) {
  var _this = this;

  this.get = function (key) {
    return _this.reversedMap[key];
  };

  this.reversedMap = {};
  Object.keys(map).forEach(function (key) {
    if (isMaximized && key.endsWith('AtMax')) return;
    var value = map[key];
    _this.reversedMap[value] = key;
  });
};

var propTypes$1 = {
  images: propTypes.array && fallbackProps(['children']),
  children: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node]),
  isRTL: propTypes.bool.isRequired,
  isLoop: propTypes.bool.isRequired,
  isMaximized: propTypes.bool.isRequired,
  index: positiveNumber(true),
  shouldLazyLoad: propTypes.bool.isRequired,
  canAutoPlay: propTypes.bool.isRequired,
  isAutoPlaying: propTypes.bool.isRequired,
  autoPlayInterval: positiveNumber(false),
  hasTransition: propTypes.bool.isRequired,
  swipeThreshold: numberBetween(0, 1),
  swipeRollbackSpeed: positiveNumber(true),
  transitionSpeed: positiveNumber(true),
  transitionDurationLimit: positiveNumber(true),
  transitionDurationMin: positiveNumber(true),
  transitionDurationMax: compareToProp('>=', 'transitionDurationMin'),
  widgetsHasShadow: propTypes.bool.isRequired,
  hasLeftButton: smallWidgetPositions.isRequired,
  hasRightButton: smallWidgetPositions.isRequired,
  hasMediaButton: smallWidgetPositions.isRequired,
  hasSizeButton: smallWidgetPositions.isRequired,
  hasIndexBoard: smallWidgetPositions.isRequired,
  hasDotButtons: largeWidgetPositions.isRequired,
  hasCaptions: largeWidgetPositions.isRequired,
  hasThumbnails: propTypes.bool.isRequired,
  hasLeftButtonAtMax: smallWidgetPositions,
  hasRightButtonAtMax: smallWidgetPositions,
  hasMediaButtonAtMax: smallWidgetPositions,
  hasSizeButtonAtMax: smallWidgetPositions,
  hasIndexBoardAtMax: smallWidgetPositions,
  hasDotButtonsAtMax: largeWidgetPositions,
  hasCaptionsAtMax: largeWidgetPositions,
  hasThumbnailsAtMax: propTypes.bool,
  leftIcon: propTypes.node,
  rightIcon: propTypes.node,
  playIcon: propTypes.node,
  pauseIcon: propTypes.node,
  minIcon: propTypes.node,
  maxIcon: propTypes.node,
  activeIcon: propTypes.node,
  passiveIcon: propTypes.node,
  shouldSwipeOnMouse: propTypes.bool.isRequired,
  shouldMaximizeOnClick: propTypes.bool.isRequired,
  shouldMinimizeOnClick: propTypes.bool.isRequired,
  shouldMinimizeOnSwipeDown: propTypes.bool.isRequired,
  onIndexChange: propTypes.func.isRequired,
  className: propTypes.string,
  style: propTypes.object,
  objectFit: objectFitStyles.isRequired,
  objectFitAtMax: objectFitStyles.isRequired,
  thumbnailWidth: propTypes.string,
  thumbnailHeight: propTypes.string,
  zIndexAtMax: propTypes.number
};
var defaultProps = {
  index: 0,
  isRTL: false,
  isLoop: true,
  isMaximized: false,
  shouldLazyLoad: true,
  canAutoPlay: true,
  isAutoPlaying: false,
  autoPlayInterval: 5000,
  hasTransition: true,
  swipeThreshold: 0.1,
  swipeRollbackSpeed: 0.1,
  transitionSpeed: 1,
  transitionDurationMin: 250,
  transitionDurationLimit: 750,
  widgetsHasShadow: false,
  hasLeftButton: 'centerLeft',
  hasRightButton: 'centerRight',
  hasMediaButton: 'topLeft',
  hasSizeButton: 'topRight',
  hasIndexBoard: 'topCenter',
  hasDotButtons: false,
  hasCaptions: false,
  hasThumbnails: true,
  shouldSwipeOnMouse: true,
  shouldMaximizeOnClick: false,
  shouldMinimizeOnClick: false,
  shouldMinimizeOnSwipeDown: true,
  onIndexChange: function onIndexChange() {},
  onSwipeMoveX: function onSwipeMoveX() {},
  onSwipeMoveY: function onSwipeMoveY() {},
  onSwipeEndDown: function onSwipeEndDown() {},
  onTap: function onTap() {},
  objectFit: 'cover',
  objectFitAtMax: 'contain'
};
var getSettings = function getSettings(props, propNames, isMaximized) {
  var newProps = propNames.map(function (propName) {
    if (!isMaximized) return props[propName];
    var propNameAtMax = propName + 'AtMax';
    if (propNameAtMax in props) return props[propNameAtMax];
    return props[propName];
  });
  return propNames.reduce(function (obj, key, index) {
    var _extends2;

    return _extends({}, obj, (_extends2 = {}, _extends2[key] = newProps[index], _extends2));
  }, {});
};

var GalleryCarousel = function GalleryCarousel(props, ref) {
  var documentRef = React.useRef(document);
  var maximizedBackgroundRef = React.useRef(null);
  var carouselRef = React.useRef(null);
  var slidesContainerRef = React.useRef(null);
  var slidesRef = React.useRef(null);
  var slideMinRef = React.useRef(null);
  var slideMaxRef = React.useRef(null);
  var hasImages = ('images' in props);
  var children = Array.isArray(props.children) ? props.children : [props.children];
  var rawSlides = hasImages ? props.images : children;

  var _useSlides = useSlides(rawSlides, {
    index: props.index,
    isLoop: props.isLoop
  }),
      slides = _useSlides[0],
      slidesElements = _useSlides[1];

  var nSlides = slides.length;
  var increment = props.isRTL ? -1 : +1;
  var slidesMin = nSlides * -increment + "00%";
  var slidesMax = nSlides * increment + "00%";

  var _useState = React.useState(slides.curIndex),
      setCurIndex = _useState[1];

  var applyCurIndexUpdate = function applyCurIndexUpdate(curIndex) {
    setCurIndex(curIndex);
    props.onIndexChange({
      curIndex: slides.curIndex,
      curIndexForDisplay: slides.curIndexForDisplay
    });
  };

  var _useTimer = useTimer(props.canAutoPlay && props.autoPlayInterval, props.isAutoPlaying, function () {
    return updateIndex(+1);
  }),
      isPlaying = _useTimer[0],
      setIsPlaying = _useTimer[1],
      _useTimer$ = _useTimer[2],
      stopTimer = _useTimer$.stopTimer,
      restartTimer = _useTimer$.restartTimer;

  var handleMediaButtonClick = function handleMediaButtonClick() {
    setIsPlaying(function (isPlaying) {
      return !isPlaying;
    });
  };

  var isReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  React.useLayoutEffect(function () {
    if (isReducedMotion) setIsPlaying(false);
  }, [isReducedMotion, setIsPlaying]);

  var _useState2 = React.useState(false),
      wasPlaying = _useState2[0],
      setWasPlaying = _useState2[1];

  var handleVisibilityChange = React.useCallback(function () {
    if (document.visibilityState !== 'visible') {
      setWasPlaying(isPlaying);
      setIsPlaying(false);
    } else {
      setIsPlaying(wasPlaying);
    }
  }, [isPlaying, setIsPlaying, wasPlaying, setWasPlaying]);
  useEventListener(document, 'visibilitychange', handleVisibilityChange);

  var _useFixedPosition = useFixedPosition(props.isMaximized, slidesContainerRef),
      isMaximized = _useFixedPosition[0],
      setIsMaximized = _useFixedPosition[1];

  var handleSizeButtonClick = function handleSizeButtonClick() {
    setIsMaximized(function (isMaximized) {
      return !isMaximized;
    });
  };

  var applyTransitionDuration = function applyTransitionDuration(displacementX, speed, hasToUpdate) {
    if (displacementX === void 0) {
      displacementX = 0;
    }

    if (speed === void 0) {
      speed = props.transitionSpeed;
    }

    if (hasToUpdate === void 0) {
      hasToUpdate = true;
    }

    if (!props.hasTransition) return;
    if (isReducedMotion) return;
    var swipedDistance = Math.abs(displacementX);
    var transitionDistance = hasToUpdate ? Math.abs(slidesRef.current.clientWidth - swipedDistance) : swipedDistance;
    speed = hasToUpdate ? speed : props.swipeRollbackSpeed;
    var duration = transitionDistance / speed;
    if (duration > props.transitionDurationLimit / 2) duration = Math.atan(2 * duration / props.transitionDurationLimit) * props.transitionDurationLimit * 2 / Math.PI;
    if (props.transitionDurationMin) duration = Math.max(duration, props.transitionDurationMin);
    if (props.transitionDurationMax) duration = Math.min(duration, props.transitionDurationMax);
    if (isPlaying && duration > props.autoPlayInterval) duration = props.autoPlayInterval * 1;
    slidesRef.current.style.transitionDuration = duration + "ms";
    setTimeout(function () {
      if (slidesRef.current) slidesRef.current.style.transitionDuration = null;
    }, duration);
  };

  var applyTransitionY = function applyTransitionY(displacementX, displacementY) {
    if (displacementX === void 0) {
      displacementX = 0;
    }

    if (displacementY === void 0) {
      displacementY = 0;
    }

    var distance = displacementY > 0 ? displacementY : 0;
    var portion = 1 - distance / MAX_SWIPE_DOWN_DISTANCE;

    if (carouselRef.current) {
      if (carouselRef.current.style.transform !== "translate(" + displacementX + "px, " + displacementY + "px) scale(" + portion + ")") {
        carouselRef.current.style.transform = "translate(" + displacementX + "px, " + displacementY + "px) scale(" + portion + ")";
      }
    }

    if (maximizedBackgroundRef.current) {
      if (maximizedBackgroundRef.current.style.opacity !== portion) {
        maximizedBackgroundRef.current.style.opacity = portion;
      }
    }
  };

  var applyTransitionX = React.useCallback(function (displacementX) {
    if (displacementX === void 0) {
      displacementX = 0;
    }

    var targetPosition = displacementX === 0 ? -100 * slides.curIndex * increment + "%" : "calc(" + -100 * slides.curIndex * increment + "% + " + displacementX + "px)";

    if (slidesRef.current) {
      slidesRef.current.style.transform = "translateX(" + targetPosition + ")";
    }
  }, [slides.curIndex, increment]);
  React.useLayoutEffect(function () {
    return applyTransitionX();
  }, [applyTransitionX]);
  var shouldCalibrateIndex = props.isLoop && nSlides > 1;

  var handleSwipeMoveX = function handleSwipeMoveX(displacementX) {
    props.onSwipeMoveX(displacementX);
    if (props.canAutoPlay) stopTimer();
    var change = -displacementX * increment;

    if (shouldCalibrateIndex) {
      if (slides.isMinIndex() && change < 0 && slideMaxRef.current) {
        slideMaxRef.current.style.transform = "translateX(" + slidesMin + ")";
      } else if (slides.isMaxIndex() && change > 0 && slideMinRef.current) {
        slideMinRef.current.style.transform = "translateX(" + slidesMax + ")";
      } else {
        slideMinRef.current.style.transform = null;
        slideMaxRef.current.style.transform = null;
      }
    }

    applyTransitionX(displacementX);
  };

  var updateIndex = function updateIndex(change, displacementX, speed) {
    if (displacementX === void 0) {
      displacementX = 0;
    }

    if (props.canAutoPlay && change === 0) restartTimer();

    if (shouldCalibrateIndex && slideMinRef.current && slideMaxRef.current) {
      if (slides.isMinIndex() && change < 0) {
        slideMinRef.current.style.transform = "translateX(" + slidesMax + ")";
        slideMaxRef.current.style.transform = null;
      } else if (slides.isMaxIndex() && change > 0) {
        slideMinRef.current.style.transform = null;
        slideMaxRef.current.style.transform = "translateX(" + slidesMin + ")";
      } else if (change !== 0) {
        slideMinRef.current.style.transform = null;
        slideMaxRef.current.style.transform = null;
      }
    }

    if (slides.calibrateIndex(change) && shouldCalibrateIndex) {
      slidesRef.current.style.transitionDuration = null;
      applyTransitionX(displacementX);
    }

    slides.updateIndex(change);
    applyTransitionDuration(displacementX, speed, change !== 0);
    applyTransitionY(0, 0);
    applyTransitionX();
    applyCurIndexUpdate(slides.curIndex);
  };

  var rollBackIndexUpdate = function rollBackIndexUpdate() {
    return updateIndex(0, 0, 0);
  };

  useEventListener(window, 'orientationchange', rollBackIndexUpdate);

  var goToIndex = function goToIndex(index) {
    if (slideMinRef.current) slideMinRef.current.style.transform = null;
    if (slideMaxRef.current) slideMaxRef.current.style.transform = null;
    slides.goToIndex(index);
    applyTransitionX();
    applyCurIndexUpdate(slides.curIndex);
  };

  var indices = slides.allIndices;
  var goToIndexCallbacks = indices.map(function (index) {
    return function () {
      return goToIndex(index);
    };
  });
  var goToIndexCallbacksObject = indices.reduce(function (obj, key, index) {
    var _extends2;

    return _extends({}, obj, (_extends2 = {}, _extends2[key] = goToIndexCallbacks[index], _extends2));
  }, {});
  useKeys(documentRef, {
    Escape: function Escape() {
      return setIsMaximized(function () {
        return false;
      });
    }
  });
  useKeyboard(carouselRef);

  var goLeft = function goLeft() {
    return updateIndex(-increment);
  };

  var goRight = function goRight() {
    return updateIndex(+increment);
  };

  useKeys(carouselRef, {
    ArrowLeft: goLeft,
    ArrowRight: goRight,
    Enter: function Enter(event) {
      if (event.target !== event.currentTarget) return;
      handleSizeButtonClick();
    }
  });
  var isMaximizedRef = React.useRef(isMaximized);
  isMaximizedRef.current = isMaximized;

  var handleSwipeMoveY = function handleSwipeMoveY(displacementX, displacementY) {
    props.onSwipeMoveY(displacementX, displacementY);
    if (!props.shouldMinimizeOnSwipeDown) return;
    if (isMaximizedRef.current) applyTransitionY(displacementX, displacementY);
  };

  var handleSwipeEndDown = function handleSwipeEndDown() {
    props.onSwipeEndDown();
    if (!props.shouldMinimizeOnSwipeDown) return;
    applyTransitionY(0, 0);
    setIsMaximized(function () {
      return false;
    });
    rollBackIndexUpdate();
  };

  var handleTap = function handleTap() {
    props.onTap();
    if (isMaximizedRef.current && props.shouldMinimizeOnClick) setIsMaximized(function () {
      return false;
    });else if (!isMaximizedRef.current && props.shouldMaximizeOnClick) setIsMaximized(function () {
      return true;
    });
  };

  var mouseEventHandlers = useSwipe(slidesContainerRef, props.swipeThreshold, {
    onSwipeMoveX: handleSwipeMoveX,
    onSwipeMoveY: handleSwipeMoveY,
    onSwipeEndLeft: function onSwipeEndLeft(displacementX, speed) {
      return updateIndex(increment, displacementX, speed);
    },
    onSwipeEndRight: function onSwipeEndRight(displacementX, speed) {
      return updateIndex(-increment, displacementX, speed);
    },
    onSwipeEndDisqualified: function onSwipeEndDisqualified(displacementX, speed) {
      return updateIndex(0, displacementX, speed);
    },
    onSwipeEndDown: handleSwipeEndDown,
    onTap: handleTap
  });
  var propsClassName = 'className' in props ? ' ' + props.className : '';
  var galleryClassName = hasImages ? ' ' + styles.gallery : '';
  var carouselClassName = styles.carousel + propsClassName + galleryClassName;
  var maxCarouselClassName = styles.maxCarousel + galleryClassName;
  var carouselPlaceholder = isMaximized && /*#__PURE__*/React__default.createElement("div", {
    className: carouselClassName,
    style: props.style
  });
  var maxCarouselBackground = isMaximized && /*#__PURE__*/React__default.createElement("div", {
    ref: maximizedBackgroundRef,
    className: maxCarouselClassName,
    style: 'zIndexAtMax' in props ? {
      zIndex: props.zIndexAtMax
    } : {}
  });
  var settings = getSettings(props, ['objectFit', 'hasCaptions', 'hasThumbnails'], isMaximized);
  var widgetSettings = getSettings(props, ['hasLeftButton', 'hasRightButton', 'hasMediaButton', 'hasSizeButton', 'hasDotButtons', 'hasIndexBoard'], isMaximized);
  var leftButton = widgetSettings.hasLeftButton && /*#__PURE__*/React__default.createElement(LeftButton, {
    position: widgetSettings.hasLeftButton,
    isDisabled: !slides.canUpdateIndex(-increment),
    icon: props.leftIcon,
    isRTL: props.isRTL,
    hasShadow: props.widgetsHasShadow,
    onClick: goLeft
  });
  var rightButton = widgetSettings.hasRightButton && /*#__PURE__*/React__default.createElement(RightButton, {
    position: widgetSettings.hasRightButton,
    isDisabled: !slides.canUpdateIndex(+increment),
    icon: props.rightIcon,
    isRTL: props.isRTL,
    hasShadow: props.widgetsHasShadow,
    onClick: goRight
  });
  var mediaButton = widgetSettings.hasMediaButton && props.canAutoPlay && /*#__PURE__*/React__default.createElement(MediaButton, {
    position: widgetSettings.hasMediaButton,
    isPlaying: isPlaying,
    playIcon: props.playIcon,
    pauseIcon: props.pauseIcon,
    hasShadow: props.widgetsHasShadow,
    onClick: handleMediaButtonClick
  });
  var sizeButton = widgetSettings.hasSizeButton && /*#__PURE__*/React__default.createElement(SizeButton, {
    position: widgetSettings.hasSizeButton,
    isMaximized: isMaximized,
    minIcon: props.minIcon,
    maxIcon: props.maxIcon,
    hasShadow: props.widgetsHasShadow,
    onClick: handleSizeButtonClick
  });
  var indexBoard = widgetSettings.hasIndexBoard && /*#__PURE__*/React__default.createElement(IndexBoard, {
    position: widgetSettings.hasIndexBoard,
    hasShadow: props.widgetsHasShadow,
    curIndex: slides.curIndexForDisplay,
    totalIndices: indices.length
  });
  var dotButtons = widgetSettings.hasDotButtons && /*#__PURE__*/React__default.createElement(DotButtons, {
    callbacks: goToIndexCallbacksObject,
    position: widgetSettings.hasDotButtons,
    isRTL: props.isRTL,
    curIndex: slides.curIndex,
    activeIcon: props.activeIcon,
    passiveIcon: props.passiveIcon,
    hasShadow: props.widgetsHasShadow
  });
  var thumbnails = settings.hasThumbnails && /*#__PURE__*/React__default.createElement(Thumbnails, {
    isRTL: props.isRTL,
    isMaximized: isMaximized,
    width: props.thumbnailWidth,
    height: props.thumbnailHeight,
    slides: slidesElements,
    hasImages: hasImages,
    shouldLazyLoad: props.shouldLazyLoad,
    curIndex: slides.curIndex,
    callbacks: goToIndexCallbacksObject
  });
  var widgetsObj = {
    hasLeftButton: leftButton,
    hasRightButton: rightButton,
    hasMediaButton: mediaButton,
    hasSizeButton: sizeButton,
    hasDotButtons: dotButtons,
    hasIndexBoard: indexBoard
  };
  var positionsToWidgets = new ReversedMap(widgetSettings);
  var positions = props.isRTL ? WIDGET_POSITIONS_WITH_RTL : WIDGET_POSITIONS;
  var widgets = /*#__PURE__*/React__default.createElement(React.Fragment, null, positions.map(function (position, index) {
    return widgetsObj[positionsToWidgets.get(position)] && /*#__PURE__*/React__default.createElement(React.Fragment, {
      key: index
    }, widgetsObj[positionsToWidgets.get(position).replace(/AtMax$/, '')]);
  }));
  React.useImperativeHandle(ref, function () {
    return {
      play: function play() {
        return setIsPlaying(function () {
          return true;
        });
      },
      pause: function pause() {
        return setIsPlaying(function () {
          return false;
        });
      },
      toggleIsPlaying: function toggleIsPlaying() {
        return setIsPlaying(function (isPlaying) {
          return !isPlaying;
        });
      },
      maximize: function maximize() {
        return setIsMaximized(function () {
          return true;
        });
      },
      minimize: function minimize() {
        return setIsMaximized(function () {
          return false;
        });
      },
      toggleIsMaximized: function toggleIsMaximized() {
        return setIsMaximized(function (isMaximized) {
          return !isMaximized;
        });
      },
      goLeft: goLeft,
      goRight: goRight,
      goToIndex: goToIndex
    };
  });
  return /*#__PURE__*/React__default.createElement(React.Fragment, null, carouselPlaceholder, maxCarouselBackground, /*#__PURE__*/React__default.createElement("div", {
    ref: carouselRef,
    className: isMaximized ? maxCarouselClassName : carouselClassName,
    style: isMaximized ? 'zIndexAtMax' in props ? {
      zIndex: props.zIndexAtMax
    } : {} : props.style,
    "data-is-not-keyboard-user": "true"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles.carouselInner
  }, /*#__PURE__*/React__default.createElement("div", _extends({
    ref: slidesContainerRef,
    className: styles.slidesContainer,
    tabIndex: 0
  }, props.shouldSwipeOnMouse ? mouseEventHandlers : {}), /*#__PURE__*/React__default.createElement(Slides, {
    minRef: slideMinRef,
    maxRef: slideMaxRef,
    slidesRef: slidesRef,
    slidesContainerRef: slidesContainerRef,
    length: nSlides,
    slides: slidesElements,
    hasImages: hasImages,
    isRTL: props.isRTL,
    shouldLazyLoad: props.shouldLazyLoad,
    objectFit: settings.objectFit,
    widgetsHasShadow: props.widgetsHasShadow,
    hasCaptions: settings.hasCaptions,
    curIndex: slides.curIndex
  })), widgets), thumbnails));
};

var Carousel = /*#__PURE__*/React.forwardRef(GalleryCarousel);
Carousel.displayName = 'Carousel';
Carousel.propTypes = propTypes$1;
Carousel.defaultProps = defaultProps;

module.exports = Carousel;
//# sourceMappingURL=index.js.map
