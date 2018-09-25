(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./@ra-web-tech-ui-toolkit-common-utils/bundles/common-utils.umd.js":
/*!**************************************************************************!*\
  !*** ./@ra-web-tech-ui-toolkit-common-utils/bundles/common-utils.umd.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 */
(function (global, factory) {
	 true ? factory(exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js"), __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js"), __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js"), __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/esm5/ngx-translate-core.js"), __webpack_require__(/*! ngx-device-detector */ "./@ra-web-tech-ui-toolkit-common-utils/node_modules/ngx-device-detector/ngx-device-detector.umd.js"), __webpack_require__(/*! element-resize-detector */ "./@ra-web-tech-ui-toolkit-common-utils/node_modules/element-resize-detector/src/element-resize-detector.js"), __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js"), __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js"), __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js"), __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js"), __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js"), __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js"), __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js"), __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js")) :
	undefined;
}(this, (function (exports,_angular_core,_angular_material,lodash,_angular_forms,rxjs,_ngxTranslate_core,ngxDeviceDetector,elementResizeDetectorMaker___default,_angular_animations,_angular_cdk_overlay,rxjs_operators,_angular_cdk_scrolling,_angular_cdk_portal,_angular_cdk_platform,_angular_common,_angular_flexLayout,_angular_platformBrowser,_angular_common_http) { 'use strict';

var elementResizeDetectorMaker___default__default = elementResizeDetectorMaker___default['default'];

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};



function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}



function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TypeUtils = /** @class */ (function () {
    function TypeUtils() {
    }
    // tslint:disable-next-line no-any
    /**
     * @param {?} input
     * @return {?}
     */
    TypeUtils.isObject = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return lodash.isObjectLike(input) && !lodash.isArray(input);
    };
    // tslint:disable-next-line no-any
    /**
     * @param {?} input
     * @return {?}
     */
    TypeUtils.isStringOrNumber = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return lodash.isString(input) || lodash.isNumber(input);
    };
    return TypeUtils;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * A method checking whether a value is of type ValueType, i.e. string, number, or boolean.
 * @param {?} val
 * @return {?}
 */
function isValueType(val) {
    return lodash.isString(val) || lodash.isNumber(val) || lodash.isBoolean(val);
}
/**
 * @record
 * @template T
 */

/** @enum {string} */
var CursorStyle = {
    Default: 'default',
    Inherit: 'inherit',
    Pointer: 'pointer',
    Text: 'text',
};
/**
 * A type guard checking whether a value is instance of CursorStyle or undefined.
 * @param {?} val
 * @return {?}
 */
function isCursorStyleOrUndefined(val) {
    return val === CursorStyle.Default || val === CursorStyle.Inherit || val === CursorStyle.Pointer || val === CursorStyle.Text
        || lodash.isNil(val);
}
/**
 * Default image extensions.
 * ['gif', 'jpg', 'jpeg', 'png', 'svg']
 */
var DefaultImageExtensions = ['gif', 'jpg', 'jpeg', 'png', 'svg'];
//region TextAlign
var TextAlign = strEnum([
    'Left',
    'Right',
    'Center'
]);
/**
 * A type guard checking whether a value is instance of TextAlign.
 * @param {?} val
 * @return {?}
 */
function isTextAlign(val) {
    return val === TextAlign.Left || val === TextAlign.Right || val === TextAlign.Center;
}
/**
 * Utility function to create a K:V from a list of strings
 * see https://basarat.gitbooks.io/typescript/docs/types/literal-types.html for more info.
 *
 * @template T
 * @param {?} o
 * @return {?}
 */
function strEnum(o) {
    return o.reduce(function (res, key) {
        res[key] = key;
        return res;
        // tslint:disable-next-line no-null-keyword
    }, Object.create(null));
}
/** @enum {number} */
var KeyCode = {
    Alt: 18,
    A: 65,
    B: 66,
    C: 67,
    D: 68,
    E: 69,
    F: 70,
    G: 71,
    H: 72,
    I: 73,
    J: 74,
    K: 75,
    L: 76,
    M: 77,
    N: 78,
    O: 79,
    P: 80,
    Q: 81,
    R: 82,
    S: 83,
    T: 84,
    U: 85,
    V: 86,
    W: 87,
    X: 88,
    Y: 89,
    Z: 90,
    Del: 127,
    UP_ARROW: 38,
    DOWN_ARROW: 40,
    RIGHT_ARROW: 39,
    LEFT_ARROW: 37,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    HOME: 36,
    END: 35,
    ENTER: 13,
    SPACE: 32,
    TAB: 9,
    ESCAPE: 27,
    BACKSPACE: 8,
    DELETE: 46,
    NUMBER_0: 48,
    NUMPAD_0: 96,
    NUMPAD_1: 97,
    NUMPAD_2: 98,
    NUMPAD_9: 105,
};
KeyCode[KeyCode.Alt] = "Alt";
KeyCode[KeyCode.A] = "A";
KeyCode[KeyCode.B] = "B";
KeyCode[KeyCode.C] = "C";
KeyCode[KeyCode.D] = "D";
KeyCode[KeyCode.E] = "E";
KeyCode[KeyCode.F] = "F";
KeyCode[KeyCode.G] = "G";
KeyCode[KeyCode.H] = "H";
KeyCode[KeyCode.I] = "I";
KeyCode[KeyCode.J] = "J";
KeyCode[KeyCode.K] = "K";
KeyCode[KeyCode.L] = "L";
KeyCode[KeyCode.M] = "M";
KeyCode[KeyCode.N] = "N";
KeyCode[KeyCode.O] = "O";
KeyCode[KeyCode.P] = "P";
KeyCode[KeyCode.Q] = "Q";
KeyCode[KeyCode.R] = "R";
KeyCode[KeyCode.S] = "S";
KeyCode[KeyCode.T] = "T";
KeyCode[KeyCode.U] = "U";
KeyCode[KeyCode.V] = "V";
KeyCode[KeyCode.W] = "W";
KeyCode[KeyCode.X] = "X";
KeyCode[KeyCode.Y] = "Y";
KeyCode[KeyCode.Z] = "Z";
KeyCode[KeyCode.Del] = "Del";
KeyCode[KeyCode.UP_ARROW] = "UP_ARROW";
KeyCode[KeyCode.DOWN_ARROW] = "DOWN_ARROW";
KeyCode[KeyCode.RIGHT_ARROW] = "RIGHT_ARROW";
KeyCode[KeyCode.LEFT_ARROW] = "LEFT_ARROW";
KeyCode[KeyCode.PAGE_UP] = "PAGE_UP";
KeyCode[KeyCode.PAGE_DOWN] = "PAGE_DOWN";
KeyCode[KeyCode.HOME] = "HOME";
KeyCode[KeyCode.END] = "END";
KeyCode[KeyCode.ENTER] = "ENTER";
KeyCode[KeyCode.SPACE] = "SPACE";
KeyCode[KeyCode.TAB] = "TAB";
KeyCode[KeyCode.ESCAPE] = "ESCAPE";
KeyCode[KeyCode.BACKSPACE] = "BACKSPACE";
KeyCode[KeyCode.DELETE] = "DELETE";
KeyCode[KeyCode.NUMBER_0] = "NUMBER_0";
KeyCode[KeyCode.NUMPAD_0] = "NUMPAD_0";
KeyCode[KeyCode.NUMPAD_1] = "NUMPAD_1";
KeyCode[KeyCode.NUMPAD_2] = "NUMPAD_2";
KeyCode[KeyCode.NUMPAD_9] = "NUMPAD_9";
/**
 * Function that returns key from KeyboardEvent.
 * Handles altKey modifier (MAC OS).
 * Handles Numeric keypad numbers.
 * @param {?} event
 * @return {?}
 */
function getKeyFromKeyboardEvent(event) {
    if (event.key && !event.altKey) {
        return event.key;
    }
    //magic from StackOverflow
    // tslint:disable object-literal-key-quotes
    var /** @type {?} */ toAscii = {
        '188': '44',
        '109': '45',
        '190': '46',
        '191': '47',
        '192': '96',
        '220': '92',
        '222': '39',
        '221': '93',
        '219': '91',
        '173': '45',
        '187': '61',
        //IE Key codes
        '186': '59',
        //IE Key codes
        '189': '45' //IE Key codes
    };
    var /** @type {?} */ shiftUps = {
        '96': '~',
        '49': '!',
        '50': '@',
        '51': '#',
        '52': '$',
        '53': '%',
        '54': '^',
        '55': '&',
        '56': '*',
        '57': '(',
        '48': ')',
        '45': '_',
        '61': '+',
        '91': '{',
        '93': '}',
        '92': '|',
        '59': ':',
        '39': '"',
        '44': '<',
        '46': '>',
        '47': '?'
    };
    // tslint:enable object-literal-key-quotes
    var /** @type {?} */ keyCode = event.which;
    var /** @type {?} */ char;
    if (toAscii.hasOwnProperty(keyCode)) {
        keyCode = toAscii[keyCode];
    }
    if (!event.shiftKey && typeof keyCode === 'number' && (keyCode >= 65 && keyCode <= 90)) {
        char = String.fromCharCode(/** @type {?} */ (keyCode) + 32);
    }
    else if (event.shiftKey && shiftUps.hasOwnProperty(keyCode)) {
        char = shiftUps[keyCode];
    }
    else {
        char = String.fromCharCode((KeyCode.NUMPAD_0 <= /** @type {?} */ (keyCode) && /** @type {?} */ (keyCode) <= KeyCode.NUMPAD_9) ? /** @type {?} */ (keyCode) - KeyCode.NUMBER_0 : /** @type {?} */ (keyCode));
    }
    return char;
}
/** @enum {string} */
var Direction = {
    Left: 'LEFT',
    Right: 'RIGHT',
};
/** @enum {number} */
var SizeUnits = {
    Pixels: 0,
    Percent: 1,
};
SizeUnits[SizeUnits.Pixels] = "Pixels";
SizeUnits[SizeUnits.Percent] = "Percent";
/**
 * Size with units, i. e. number and its unit (pixels or percent).
 * @record
 */

/**
 * Size with units class implementing ISizeWithUnits interface.
 */
var SizeWithUnits = /** @class */ (function () {
    function SizeWithUnits(size, units) {
        if (units === void 0) { units = SizeUnits.Pixels; }
        this.size = size;
        this.units = units;
    }
    /**
     * Converts Size to SizeWithUnits.
     */
    /**
     * Converts Size to SizeWithUnits.
     * @param {?} size
     * @return {?}
     */
    SizeWithUnits.fromSize = /**
     * Converts Size to SizeWithUnits.
     * @param {?} size
     * @return {?}
     */
    function (size) {
        if (instanceOfSizeWithUnits(size)) {
            return size;
        }
        return new SizeWithUnits(/** @type {?} */ (size));
    };
    return SizeWithUnits;
}());
/**
 * A method checking whether a variable is instance of SizeUnits.
 * @param {?} val
 * @return {?}
 */
function isSizeUnits(val) {
    return lodash.isNil(val) ? false : (val === SizeUnits.Percent || val === SizeUnits.Pixels);
}
/**
 * A method checking whether a variable is instance of ISizeWithUnits.
 * @param {?} object
 * @return {?}
 */
function instanceOfSizeWithUnits(object) {
    return lodash.isNil(object) ? false :
        (!lodash.isNil(object.size) && lodash.isNumber(object.size) &&
            !lodash.isNil(object.units) && isSizeUnits(object.units));
}
/**
 * A type guard checking whether a value is instance of ClassDef.
 * @param {?} val
 * @return {?}
 */
function isClassDef(val) {
    var /** @type {?} */ result = false;
    if (lodash.isString(val)) {
        result = true;
    }
    else if (lodash.isArray(val)) {
        result = true;
        lodash.forEach(val, function (value) {
            !lodash.isString(value) && (result = false);
        });
    }
    else if (val instanceof Set) {
        result = true;
        val.forEach(function (key, value) {
            !lodash.isString(value) && (result = false);
        });
    }
    else if (TypeUtils.isObject(val)) {
        result = true;
        lodash.forEach(val, function (value) {
            !lodash.isBoolean(value) && (result = false);
        });
    }
    return result;
}
//endregion

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Immutable decorator entry point.
 * @param {?} target
 * @return {?}
 */
function Immutable(target) {
    // save a reference to the original constructor
    var /** @type {?} */ original = target;
    /**
     * @param {?} constructor
     * @param {?} args
     * @return {?}
     */
    function construct(constructor, args) {
        var /** @type {?} */ c = function () {
            return constructor.apply(this, args);
        };
        c.prototype = constructor.prototype;
        return new c();
    }
    // the new constructor behaviour
    var /** @type {?} */ f = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var /** @type {?} */ instance = construct(original, args);
        Object.freeze(instance);
        return instance;
    };
    // copy prototype so instanceof operator still works
    f.prototype = original.prototype;
    // return new constructor (will override original)
    return f;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Base class of all custom form controls.
 * Handles support for the ag-Grid library.
 * @abstract
 */
var ControlValueAccessorBase = /** @class */ (function () {
    function ControlValueAccessorBase(_ngControl) {
        this._ngControl = _ngControl;
        if (this._ngControl) {
            this._ngControl.valueAccessor = this;
        }
    }
    /**
     * Focus after GUI attached, called from ag-Grid.
     */
    // tslint:disable-next-line
    /**
     * Focus after GUI attached, called from ag-Grid.
     * @param {?} params
     * @return {?}
     */
    ControlValueAccessorBase.prototype.afterGuiAttached = /**
     * Focus after GUI attached, called from ag-Grid.
     * @param {?} params
     * @return {?}
     */
    function (params) {
        var _this = this;
        setTimeout(function () {
            _this.focus();
        });
    };
    /**
     * A method handling ag-Grid parameters.
     */
    // tslint:disable-next-line:no-any
    /**
     * A method handling ag-Grid parameters.
     * @param {?} params
     * @return {?}
     */
    ControlValueAccessorBase.prototype.agInit = /**
     * A method handling ag-Grid parameters.
     * @param {?} params
     * @return {?}
     */
    function (params) {
        var _this = this;
        this._agGridParams = params;
        if (params.value) {
            if (params.value.hasOwnProperty('control')) {
                this._ngControl = new _angular_forms.FormControlDirective([params.value.control.validator], [params.value.control.asyncValidator], [this], "Support for using the ngModel input property and ngModelChange event with reactive form directives\n                     has been deprecated in Angular v6");
                (/** @type {?} */ (this._ngControl)).form = params.value.control;
                // tslint:disable-next-line:no-any
                this.registerOnChange(function (val) {
                    _this._agGridParams.value.control.setValue(val);
                });
                // tslint:disable-next-line:no-any
                params.value.control.valueChanges.subscribe(function (value) {
                    _this.writeValue(value);
                });
                this.writeValue(params.value.control.value);
            }
            var /** @type {?} */ changes = {};
            var /** @type {?} */ hasConfig = false;
            if (params.value.hasOwnProperty('props')) {
                for (var /** @type {?} */ prop in params.value.props) {
                    if (params.value.props.hasOwnProperty(prop)) {
                        if (prop === 'config') {
                            hasConfig = true;
                        }
                        changes[prop] = new _angular_core.SimpleChange(this[prop], params.value.props[prop], true);
                        this[prop] = params.value.props[prop];
                    }
                }
                if (!hasConfig) {
                    var /** @type {?} */ newConfig = {
                        enableFlatMode: true,
                        fillParent: true
                    };
                    changes["config"] = new _angular_core.SimpleChange(undefined, newConfig, true);
                    params.value.props.config = newConfig;
                }
                else if (params.value.props.config.enableFlatMode === undefined) {
                    params.value.props.config.enableFlatMode = true;
                }
                else if (params.value.props.config.fillParent === undefined) {
                    params.value.props.config.fillParent = true;
                }
            }
            else {
                var /** @type {?} */ props = {
                    enableFlatMode: true,
                    fillParent: true
                };
                changes["props"] = new _angular_core.SimpleChange(undefined, props, true);
                params.value.props = props;
            }
            // tslint:disable-next-line
            if (this['ngOnChanges']) {
                // tslint:disable-next-line
                this['ngOnChanges'](changes);
            }
            if (params.value.hasOwnProperty('onAgInit') && typeof params.value.onAgInit === 'function') {
                params.value.onAgInit(this, params.value);
            }
        }
    };
    /**
     * Gets ag-Grid params value.
     */
    /**
     * Gets ag-Grid params value.
     * @return {?}
     */
    ControlValueAccessorBase.prototype.getValue = /**
     * Gets ag-Grid params value.
     * @return {?}
     */
    function () {
        return this._agGridParams.value;
    };
    return ControlValueAccessorBase;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @abstract
 */
var DomUtils = /** @class */ (function () {
    function DomUtils() {
    }
    /**
     * @param {?} renderer
     * @param {?} el
     * @return {?}
     */
    DomUtils.removeAllChildren = /**
     * @param {?} renderer
     * @param {?} el
     * @return {?}
     */
    function (renderer, el) {
        var /** @type {?} */ children = el.childNodes;
        var /** @type {?} */ dummy = renderer;
        for (var /** @type {?} */ i = children.length - 1; i >= 0; i--) {
            //TODO: solve this in future - angular DebugRenderer2 is asynchronous and therefore it causes a lot of issues
            // -> we are using native HTML functions
            //renderer.removeChild(el, children[i]);
            el.removeChild(children[i]);
        }
    };
    /**
     * Returns references to all parent elements of an element that matches the className, you can specify `breakOnClass` parameter
     * so the search won't continue when this class has been found.
     */
    /**
     * Returns references to all parent elements of an element that matches the className, you can specify `breakOnClass` parameter
     * so the search won't continue when this class has been found.
     * @param {?} el
     * @param {?} className
     * @param {?=} breakOnClass
     * @return {?}
     */
    DomUtils.getParentsOfClass = /**
     * Returns references to all parent elements of an element that matches the className, you can specify `breakOnClass` parameter
     * so the search won't continue when this class has been found.
     * @param {?} el
     * @param {?} className
     * @param {?=} breakOnClass
     * @return {?}
     */
    function (el, className, breakOnClass) {
        if (breakOnClass === void 0) { breakOnClass = ''; }
        var /** @type {?} */ result = [];
        var /** @type {?} */ parent = el.parentElement;
        while (parent) {
            if (parent.classList.contains(breakOnClass)) {
                break;
            }
            if (parent.classList.contains(className)) {
                result.push(parent);
            }
            parent = parent.parentElement;
        }
        return result;
    };
    return DomUtils;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */

var AcceleratorUtils = /** @class */ (function () {
    function AcceleratorUtils() {
    }
    /**
     * A method which searches for the accelerator key.
     */
    /**
     * A method which searches for the accelerator key.
     * @param {?} text
     * @return {?}
     */
    AcceleratorUtils.findAcceleratorKey = /**
     * A method which searches for the accelerator key.
     * @param {?} text
     * @return {?}
     */
    function (text) {
        // That has to be this unpleasant way for AoT compilation and Rollup.
        var /** @type {?} */ result = text.search(/&[A-Za-z]/);
        return result;
    };
    /**
     * Routine that removes an ampersand from a text which is to be used as an accelerator key, also returns its index and a char,
     * if the accelerator key was found.
     */
    /**
     * Routine that removes an ampersand from a text which is to be used as an accelerator key, also returns its index and a char,
     * if the accelerator key was found.
     * @param {?} text
     * @return {?}
     */
    AcceleratorUtils.parseText = /**
     * Routine that removes an ampersand from a text which is to be used as an accelerator key, also returns its index and a char,
     * if the accelerator key was found.
     * @param {?} text
     * @return {?}
     */
    function (text) {
        text = text.replace('\\&', '\u0000');
        var /** @type {?} */ index = AcceleratorUtils.findAcceleratorKey(text);
        if (index !== -1) {
            text = text.replace('\u0000', '&');
            return {
                text: text.slice(0, index) + text.slice(index + 1),
                index: index,
                key: text[index + 1].toLowerCase()
            };
        }
        else {
            text = text.replace('\u0000', '&');
            return {
                text: text
            };
        }
    };
    /**
     * Replaces an element text with a DOM structure where a certain char is underlined, or makes reverse if the underline
     * parameter is false.
     */
    /**
     * Replaces an element text with a DOM structure where a certain char is underlined, or makes reverse if the underline
     * parameter is false.
     * @param {?} renderer
     * @param {?} element
     * @param {?} acceleratorCharIndex
     * @param {?} underline
     * @return {?}
     */
    AcceleratorUtils.underlineAcceleratorCharInElement = /**
     * Replaces an element text with a DOM structure where a certain char is underlined, or makes reverse if the underline
     * parameter is false.
     * @param {?} renderer
     * @param {?} element
     * @param {?} acceleratorCharIndex
     * @param {?} underline
     * @return {?}
     */
    function (renderer, element, acceleratorCharIndex, underline) {
        if (!element) {
            console.warn('Trying to underline accelerator on non-existing element.');
            return;
        }
        if (underline) {
            var /** @type {?} */ text = element.textContent || '';
            var /** @type {?} */ acceleratorChar = text[acceleratorCharIndex];
            var /** @type {?} */ textBefore = text.slice(0, acceleratorCharIndex);
            var /** @type {?} */ textAfter = text.slice(acceleratorCharIndex + 1);
            DomUtils.removeAllChildren(renderer, element);
            var /** @type {?} */ firstText = renderer.createElement('span');
            renderer.appendChild(firstText, renderer.createText(textBefore));
            var /** @type {?} */ underscore = renderer.createElement('span');
            underscore.style.position = 'relative';
            var /** @type {?} */ svg = this.createUnderlineSvg();
            var /** @type {?} */ line = this.createUnderlineLine(element);
            renderer.appendChild(svg, line);
            renderer.appendChild(underscore, svg);
            renderer.appendChild(underscore, renderer.createText(acceleratorChar));
            var /** @type {?} */ secondText = renderer.createElement('span');
            renderer.appendChild(secondText, renderer.createText(textAfter));
            renderer.appendChild(element, firstText);
            renderer.appendChild(element, underscore);
            renderer.appendChild(element, secondText);
        }
        else {
            var /** @type {?} */ text = (/** @type {?} */ (element)).textContent || '';
            DomUtils.removeAllChildren(renderer, element);
            renderer.appendChild(element, renderer.createText(text));
        }
    };
    /**
     * A method which creates SVG element for the underline.
     * @return {?}
     */
    AcceleratorUtils.createUnderlineSvg = /**
     * A method which creates SVG element for the underline.
     * @return {?}
     */
    function () {
        var /** @type {?} */ svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.style.position = 'absolute';
        svg.style.height = '100%';
        svg.style.width = '100%';
        svg.style.left = '0px';
        svg.style.top = '0px';
        return svg;
    };
    /**
     * A method which creates the SVG line.
     * @param {?} element
     * @return {?}
     */
    AcceleratorUtils.createUnderlineLine = /**
     * A method which creates the SVG line.
     * @param {?} element
     * @return {?}
     */
    function (element) {
        var /** @type {?} */ elementColor = window.getComputedStyle(element).color;
        var /** @type {?} */ line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', '10%');
        line.setAttribute('y1', '85%');
        line.setAttribute('x2', '90%');
        line.setAttribute('y2', '85%');
        line.setAttribute('style', 'stroke:' + elementColor + ';stroke-width:1');
        return line;
    };
    return AcceleratorUtils;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */

/**
 * A service which provides the accelerator key functionality.
 */
var AcceleratorService = /** @class */ (function () {
    function AcceleratorService(renderer) {
        var _this = this;
        this._isEnabled = true;
        /**
         * A subject emitted after ALT key down.
         */
        this.acceleratorOn = new rxjs.Subject();
        /**
         * A subject emitted after ALT key up.
         */
        this.acceleratorOff = new rxjs.Subject();
        /**
         * A subject emitted after ALT+key key down.
         * Fires the string representation of the pressed accelerator key.
         */
        this.acceleratorDo = new rxjs.Subject();
        this.acceleratorState = false;
        this.lastKeyCode = 0;
        renderer.listen('document', 'keydown', function (event) {
            if (!_this._isEnabled) {
                return;
            }
            if (!_this.acceleratorState && event.keyCode === KeyCode.Alt) {
                event.preventDefault();
                _this.acceleratorStateOn();
            }
            else if (_this.acceleratorState && event.keyCode >= KeyCode.A && event.keyCode <= KeyCode.Z
                && event.keyCode !== _this.lastKeyCode) {
                event.preventDefault();
                _this.acceleratorDo.next(getKeyFromKeyboardEvent(event).toLowerCase());
                _this.lastKeyCode = event.keyCode;
            }
        });
        renderer.listen('document', 'keyup', function (event) {
            if (_this.acceleratorState && event.keyCode === KeyCode.Alt) {
                event.preventDefault();
                _this.acceleratorStateOff();
            }
            else if (_this.acceleratorState && event.keyCode >= KeyCode.A && event.keyCode <= KeyCode.Z) {
                _this.lastKeyCode = 0;
            }
        });
        renderer.listen('window', 'blur', function (event) {
            if (_this.acceleratorState) {
                _this.acceleratorStateOff();
            }
        });
    }
    Object.defineProperty(AcceleratorService.prototype, "isEnabled", {
        /**
         * A parameter determining whether the service is enabled or not.
         * @default true
         */
        get: /**
         * A parameter determining whether the service is enabled or not.
         * \@default true
         * @return {?}
         */
        function () {
            return this._isEnabled;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (this.acceleratorState && !val) {
                this.acceleratorStateOff();
            }
            this._isEnabled = val;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    AcceleratorService.prototype.acceleratorStateOn = /**
     * @return {?}
     */
    function () {
        this.acceleratorState = true;
        this.acceleratorOn.next();
    };
    /**
     * @return {?}
     */
    AcceleratorService.prototype.acceleratorStateOff = /**
     * @return {?}
     */
    function () {
        this.acceleratorState = false;
        this.acceleratorOff.next();
    };
    AcceleratorService.decorators = [
        { type: _angular_core.Injectable },
    ];
    /** @nocollapse */
    AcceleratorService.ctorParameters = function () { return [
        { type: _angular_core.Renderer2, },
    ]; };
    return AcceleratorService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */

/**
 * Basic console logger.
 */
var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger() {
    }
    /**
     * A method which writes warn message in the console.
     */
    /**
     * A method which writes warn message in the console.
     * @param {?} log
     * @return {?}
     */
    ConsoleLogger.prototype.warn = /**
     * A method which writes warn message in the console.
     * @param {?} log
     * @return {?}
     */
    function (log) {
        console.warn(log);
    };
    /**
     * A method which writes error message in the console.
     */
    /**
     * A method which writes error message in the console.
     * @param {?} log
     * @return {?}
     */
    ConsoleLogger.prototype.error = /**
     * A method which writes error message in the console.
     * @param {?} log
     * @return {?}
     */
    function (log) {
        console.error(log);
    };
    /**
     * A method which writes info message in the console.
     */
    /**
     * A method which writes info message in the console.
     * @param {?} log
     * @return {?}
     */
    ConsoleLogger.prototype.info = /**
     * A method which writes info message in the console.
     * @param {?} log
     * @return {?}
     */
    function (log) {
        //tslint:disable-next-line no-console
        console.info(log);
    };
    /**
     * A method which writes log message in the console.
     */
    /**
     * A method which writes log message in the console.
     * @param {?} log
     * @return {?}
     */
    ConsoleLogger.prototype.log = /**
     * A method which writes log message in the console.
     * @param {?} log
     * @return {?}
     */
    function (log) {
        console.log(log);
    };
    return ConsoleLogger;
}());
/**
 * Default implementation of ILogger which does nothing.
 */
var EmptyLogger = /** @class */ (function () {
    function EmptyLogger() {
    }
    /**
     * Noop implementation of warn method.
     */
    /**
     * Noop implementation of warn method.
     * @param {?} log
     * @return {?}
     */
    EmptyLogger.prototype.warn = /**
     * Noop implementation of warn method.
     * @param {?} log
     * @return {?}
     */
    function (log) {
        rxjs.noop();
    };
    /**
     * Noop implementation of error method.
     */
    /**
     * Noop implementation of error method.
     * @param {?} log
     * @return {?}
     */
    EmptyLogger.prototype.error = /**
     * Noop implementation of error method.
     * @param {?} log
     * @return {?}
     */
    function (log) {
        rxjs.noop();
    };
    /**
     * Noop implementation of info method.
     */
    /**
     * Noop implementation of info method.
     * @param {?} log
     * @return {?}
     */
    EmptyLogger.prototype.info = /**
     * Noop implementation of info method.
     * @param {?} log
     * @return {?}
     */
    function (log) {
        rxjs.noop();
    };
    /**
     * Noop implementation of log method.
     */
    /**
     * Noop implementation of log method.
     * @param {?} log
     * @return {?}
     */
    EmptyLogger.prototype.log = /**
     * Noop implementation of log method.
     * @param {?} log
     * @return {?}
     */
    function (log) {
        rxjs.noop();
    };
    return EmptyLogger;
}());
var LOGGER = new _angular_core.InjectionToken('Default logger', { providedIn: 'root', factory: function () { return new EmptyLogger(); } });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Logger utilities used for logging in the toolkit components.
 */
var LoggerUtils = /** @class */ (function () {
    function LoggerUtils() {
    }
    /**
     * A method which warns about invalid input.
     * @param {?} component
     * @param {?} input
     * @param {?} receivedValue
     * @param {?} correctValue
     * @param {?} logger
     * @return {?}
     */
    LoggerUtils.logInvalidInput = /**
     * A method which warns about invalid input.
     * @param {?} component
     * @param {?} input
     * @param {?} receivedValue
     * @param {?} correctValue
     * @param {?} logger
     * @return {?}
     */
    function (component, input, receivedValue, correctValue, logger) {
        this.invalidInputLog(component, input, receivedValue, correctValue, logger, 'warn');
    };
    /**
     * A method which errors about invalid input.
     * @param {?} component
     * @param {?} input
     * @param {?} receivedValue
     * @param {?} correctValue
     * @param {?} logger
     * @return {?}
     */
    LoggerUtils.errorInvalidInput = /**
     * A method which errors about invalid input.
     * @param {?} component
     * @param {?} input
     * @param {?} receivedValue
     * @param {?} correctValue
     * @param {?} logger
     * @return {?}
     */
    function (component, input, receivedValue, correctValue, logger) {
        this.invalidInputLog(component, input, receivedValue, correctValue, logger, 'error');
    };
    /**
     * A method which warns about unsupported type.
     * @param {?} component
     * @param {?} control
     * @param {?} logger
     * @return {?}
     */
    LoggerUtils.logUnsupportedType = /**
     * A method which warns about unsupported type.
     * @param {?} component
     * @param {?} control
     * @param {?} logger
     * @return {?}
     */
    function (component, control, logger) {
        logger.warn("Unsupported type of " + control + " inside of " + component);
    };
    /**
     * A method which warns about invalid input value.
     * @param {?} component
     * @param {?} input
     * @param {?} logger
     * @return {?}
     */
    LoggerUtils.logInvalidInputValue = /**
     * A method which warns about invalid input value.
     * @param {?} component
     * @param {?} input
     * @param {?} logger
     * @return {?}
     */
    function (component, input, logger) {
        logger.warn("Invalid input value of " + input + " on " + component + ".");
    };
    /**
     * A method which warns about value mismatch.
     * @param {?} component
     * @param {?} input
     * @param {?} receivedValue
     * @param {?} correctValues
     * @param {?} logger
     * @return {?}
     */
    LoggerUtils.logInvalidMatchValue = /**
     * A method which warns about value mismatch.
     * @param {?} component
     * @param {?} input
     * @param {?} receivedValue
     * @param {?} correctValues
     * @param {?} logger
     * @return {?}
     */
    function (component, input, receivedValue, correctValues, logger) {
        if (receivedValue === 'undefined') {
            return;
        }
        logger.warn("Invalid input " + input + " on " + component + ". " +
            ("Expected some values from [" + correctValues.join(', ') + "] but received " + receivedValue + "."));
    };
    /**
     * A method which warns about invalid config.
     * @param {?} component
     * @param {?} configParameter
     * @param {?} logger
     * @param {?=} newValue
     * @param {?=} reason
     * @return {?}
     */
    LoggerUtils.logInvalidConfig = /**
     * A method which warns about invalid config.
     * @param {?} component
     * @param {?} configParameter
     * @param {?} logger
     * @param {?=} newValue
     * @param {?=} reason
     * @return {?}
     */
    function (component, configParameter, logger, newValue, reason) {
        var /** @type {?} */ message = "Invalid config." + configParameter + " on " + component;
        reason && (message += '\n' + ("Reason: Parameter \"" + configParameter + "\" " + reason));
        newValue !== undefined && (message += '\n' + ("Parameter value changed to: " + newValue));
        logger.warn(message);
    };
    /**
     * A private method handles the proper invalid input logging.
     * @param {?} component
     * @param {?} input
     * @param {?} receivedValue
     * @param {?} correctValue
     * @param {?} logger
     * @param {?} log
     * @return {?}
     */
    LoggerUtils.invalidInputLog = /**
     * A private method handles the proper invalid input logging.
     * @param {?} component
     * @param {?} input
     * @param {?} receivedValue
     * @param {?} correctValue
     * @param {?} logger
     * @param {?} log
     * @return {?}
     */
    function (component, input, receivedValue, correctValue, logger, log) {
        if (lodash.isNil(receivedValue)) {
            return;
        }
        var /** @type {?} */ received = (receivedValue instanceof Array) ? 'array' : typeof receivedValue;
        var /** @type {?} */ logString = "Invalid input " + input + " on " + component + ". Expected " + correctValue + " but received " + received + ".";
        log === 'warn' ? logger.warn(logString) : logger.error(logString);
    };
    return LoggerUtils;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} val
 * @param {?} type
 * @return {?}
 */
function checkType(val, type) {
    switch (type) {
        case 'string':
            return lodash.isString(val);
        case 'number':
            return lodash.isNumber(val);
        case 'boolean':
            return lodash.isBoolean(val);
        case 'array':
            return lodash.isArray(val);
        case 'object':
            return TypeUtils.isObject(val);
        default:
            if (lodash.isFunction(type)) {
                return type(val);
            }
            throw Error("Invalid config type for value " + val);
    }
}
/**
 * @param {?} propName
 * @param {?} params
 * @param {?} instance
 * @return {?}
 */
function writeDefault(propName, params, instance) {
    var /** @type {?} */ prop = params[propName];
    var /** @type {?} */ val;
    if (typeof prop.default === 'function') {
        val = prop.default();
    }
    else {
        val = prop.default;
    }
    instance[propName] = val;
}
/**
 * @param {?} propName
 * @param {?} params
 * @param {?} options
 * @param {?} instance
 * @return {?}
 */
function writeOption(propName, params, options, instance) {
    var /** @type {?} */ prop = params[propName];
    if (checkType(options[propName], prop.type)) {
        instance[propName] = options[propName];
    }
    else {
        // type is invalid
        lodash.isFunction(instance.onInvalidType) &&
            instance.onInvalidType(propName, prop.typeDisplayName || prop.type, options[propName]);
        writeDefault(propName, params, instance);
    }
}
/**
 * @param {?} propName
 * @param {?} params
 * @param {?} options
 * @param {?} instance
 * @return {?}
 */
function setDefaultAndCheckType(propName, params, options, instance) {
    if (options && options.hasOwnProperty(propName)) {
        writeOption(propName, params, options, instance);
    }
    else {
        writeDefault(propName, params, instance);
    }
}
/**
 * @param {?} params
 * @param {?} options
 * @param {?} instance
 * @return {?}
 */
function setDefaultsAndCheckyTypes(params, options, instance) {
    for (var /** @type {?} */ propName in params) {
        if (params.hasOwnProperty(propName)) {
            setDefaultAndCheckType(propName, params, options, instance);
        }
    }
}
/**
 * Config decorator entry point.
 * @param {?} params
 * @return {?}
 */
function Config(params) {
    return function (target) {
        // save a reference to the original constructor
        var /** @type {?} */ original = target;
        /**
         * @param {?} constructor
         * @param {?} args
         * @return {?}
         */
        function construct(constructor, args) {
            var /** @type {?} */ konstructor = function () {
                return constructor.apply(this, args);
            };
            konstructor.prototype = constructor.prototype;
            return new konstructor();
        }
        // the new constructor behaviour
        var /** @type {?} */ wrapper = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var /** @type {?} */ instance = construct(original, args);
            setDefaultsAndCheckyTypes(params, args[0], instance);
            return instance;
        };
        // copy prototype so instanceof operator still works
        wrapper.prototype = original.prototype;
        // return new constructor (will override original)
        return wrapper;
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// tslint:disable-next-line no-any
var elementResizeDetectorMaker = elementResizeDetectorMaker___default__default || elementResizeDetectorMaker___default;
/**
 * @record
 */

var TruncateConfig = /** @class */ (function () {
    function TruncateConfig(options, logger) {
        if (options === void 0) { options = /** @type {?} */ ({}); }
        this.logger = logger;
    }
    // tslint:disable-next-line:no-any
    /**
     * @param {?} propName
     * @param {?} expected
     * @param {?} got
     * @return {?}
     */
    TruncateConfig.prototype.onInvalidType = /**
     * @param {?} propName
     * @param {?} expected
     * @param {?} got
     * @return {?}
     */
    function (propName, expected, got) {
        this.logger && LoggerUtils.logInvalidInput('TruncateConfig', propName, got, expected, this.logger);
    };
    TruncateConfig = __decorate([
        Config({
            allowMultiline: {
                default: false,
                type: 'boolean'
            },
            disabled: {
                default: false,
                type: 'boolean'
            },
            enableAcceleratorKey: {
                default: false,
                type: 'boolean'
            }
        }),
        __metadata("design:paramtypes", [Object, Object])
    ], TruncateConfig);
    return TruncateConfig;
}());
var TruncateHelper = /** @class */ (function () {
    function TruncateHelper() {
    }
    /**
     * @param {?} renderer
     * @param {?} el
     * @param {?} text
     * @param {?} lineClamp
     * @param {?} aci
     * @return {?}
     */
    TruncateHelper.truncate = /**
     * @param {?} renderer
     * @param {?} el
     * @param {?} text
     * @param {?} lineClamp
     * @param {?} aci
     * @return {?}
     */
    function (renderer, el, text, lineClamp, aci) {
        // measurement element is made a child of the clamped element to get it's style
        var /** @type {?} */ measure = renderer.createElement('div');
        (function (m) {
            m.style.position = 'absolute'; // prevent page reflow
            m.style.whiteSpace = 'pre'; // cross-browser width results
            m.style.visibility = 'hidden'; // prevent drawing
        })(/** @type {?} */ (measure));
        var /** @type {?} */ lineStart = 0;
        var /** @type {?} */ wordStart = 0;
        var /** @type {?} */ lineCount = 1;
        var /** @type {?} */ wasNewLine = false;
        var /** @type {?} */ lineText = '';
        var /** @type {?} */ line;
        var /** @type {?} */ acceleratorLineIndex = 0;
        var /** @type {?} */ acceleratorCharIndex = aci;
        var /** @type {?} */ lineElement = 'div';
        var /** @type {?} */ processAcceleratorCharIndex = function (lt) {
            if (aci > 0) {
                if (acceleratorCharIndex > lt.length) {
                    acceleratorCharIndex -= lt.length;
                    acceleratorLineIndex++;
                }
                else if (acceleratorCharIndex === lt.length) {
                    acceleratorCharIndex = 0;
                    acceleratorLineIndex++;
                }
            }
        };
        // get all the text, remove any line changes
        text = text.replace(/\n/g, ' ');
        text += ' ';
        // remove all content
        DomUtils.removeAllChildren(renderer, el);
        // add measurement element within so it inherits styles
        renderer.appendChild(el, measure);
        /**
         * @param {?} pos
         * @return {?}
         */
        function processWord(pos) {
            var /** @type {?} */ lineWidth = el.clientWidth - 1;
            // ignore any further processing if we have total lines
            if (lineCount === lineClamp) {
                return '';
            }
            // create a text node and place it in the measurement element
            // renderer.appendChild(
            //     measure,
            //     renderer.createText(text.substr(lineStart, pos - lineStart))
            // );
            measure.appendChild(document.createTextNode(text.substr(lineStart, pos - lineStart)));
            // have we exceeded allowed line width?
            if (lineWidth <= /** @type {?} */ ((measure)).clientWidth) {
                if (wasNewLine) {
                    // we have a long word so it gets a line of it's own
                    lineText = text.substr(lineStart, pos + 1 - lineStart);
                    // next line start position
                    lineStart = pos + 1;
                }
                else {
                    // grab the text until this word
                    lineText = text.substr(lineStart, wordStart - lineStart);
                    // next line start position
                    lineStart = wordStart;
                }
                // create a line element
                line = renderer.createElement(lineElement);
                renderer.addClass(line, 'truncate-line');
                // add text to the line element
                renderer.appendChild(line, renderer.createText(lineText));
                // add the line element to the container
                renderer.appendChild(el, line);
                // yes, we created a new line
                wasNewLine = true;
                lineCount++;
                // find accelerator char line
                processAcceleratorCharIndex(lineText);
                if (measure.firstChild) {
                    measure.removeChild(measure.firstChild);
                    processWord(pos);
                    return '';
                }
            }
            else {
                // did not create a new line
                wasNewLine = false;
            }
            // remember last word start position
            wordStart = pos + 1;
            // clear measurement element
            //renderer.removeChild(measure, measure!.firstChild);
            measure.removeChild(measure.firstChild);
            return '';
        }
        // http://ejohn.org/blog/search-and-dont-replace/
        // tslint:disable-next-line no-any
        text.replace(/ /g, function (m, pos) {
            return processWord(pos);
        });
        // remove the measurement element from the container
        renderer.removeChild(el, measure);
        //renderer.destroyNode(measure);
        // create the last line element
        line = renderer.createElement(lineElement);
        renderer.addClass(line, 'truncate-line');
        // give styles required for text-overflow to kick in
        (function (s) {
            s.overflow = 'hidden';
            s.textOverflow = 'ellipsis';
            s.whiteSpace = 'nowrap';
            s.width = '100%';
        })(line.style);
        lineText = text.substr(lineStart);
        // find accelerator char line
        processAcceleratorCharIndex(lineText);
        // add all remaining text to the line element
        renderer.appendChild(line, renderer.createText(lineText.trim()));
        // add the line element to the container
        renderer.appendChild(el, line);
        return {
            lineIndex: aci !== -1 ? acceleratorLineIndex : -1,
            charIndex: aci !== -1 ? acceleratorCharIndex : -1
        };
    };
    return TruncateHelper;
}());
var TruncateDirective = /** @class */ (function () {
    function TruncateDirective(el, _renderer, _accSvc, _device, logger) {
        this.el = el;
        this._renderer = _renderer;
        this._accSvc = _accSvc;
        this._device = _device;
        this.logger = logger;
        this._config = new TruncateConfig(undefined, this.logger);
        this._skipAccelerator = false;
        /**
         * Triggered whenever there is accelerator key event.
         */
        this.acceleratorEvent = new _angular_core.EventEmitter();
        /**
         * Triggered whenever truncation state changes.
         */
        this.overflowChange = new _angular_core.EventEmitter();
        this.lastOverflow = undefined;
        this.acceleratorKey = '';
        this.acceleratorCharIndex = -1;
        this.acceleratorLineIndex = -1;
        this.childrenRemoved = false;
        this.truncateWidth = 0;
        this.truncateHeight = 0;
        this._componentName = 'TruncateDirective';
    }
    Object.defineProperty(TruncateDirective.prototype, "text", {
        get: /**
         * Text to truncate.
         * \@default ' '
         * @return {?}
         */
        function () {
            return this._text;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (lodash.isString(val)) {
                this._text = val;
            }
            else {
                this._text = '';
                //log error to the console
                LoggerUtils.logInvalidInput(this._componentName, 'raUiTruncate', val, 'string', this.logger);
            }
            this.refresh(true, false);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TruncateDirective.prototype, "config", {
        get: /**
         * Configuration object.
         * \@default Config with default fields.
         * @return {?}
         */
        function () {
            return this._config;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (TypeUtils.isObject(val)) {
                this._config = new TruncateConfig(val, this.logger);
            }
            else {
                this._config = new TruncateConfig(undefined, this.logger);
                //log error to the console
                LoggerUtils.logInvalidInput(this._componentName, 'truncateConfig', val, 'ITruncateConfig', this.logger);
            }
            this.refresh(false, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TruncateDirective.prototype, "skipAccelerator", {
        get: /**
         * Ability to skip accelerator events while preserving parsing of & in the text. Useful if you need accelerator key support
         *  but not to trigger it at certain situations, for example if host component gets disabled.
         *  \@default false
         * @return {?}
         */
        function () {
            return this._skipAccelerator;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (lodash.isBoolean(val)) {
                this._skipAccelerator = val;
            }
            else {
                this._skipAccelerator = false;
                //log error to the console
                LoggerUtils.logInvalidInput(this._componentName, 'truncateSkipAccelerator', val, 'boolean', this.logger);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TruncateDirective.prototype, "lineHeight", {
        /**
         * Gets the line height.
         */
        get: /**
         * Gets the line height.
         * @return {?}
         */
        function () {
            var _this = this;
            return (function (element) {
                var /** @type {?} */ temp = _this._renderer.createElement(element.nodeName);
                _this._renderer.setAttribute(temp, 'style', 'margin:0px;padding:0px;font-family:' +
                    element.style.fontFamily + ';font-size:' + element.style.fontSize);
                temp.innerHTML = 'test';
                //this._renderer.appendChild(element.parentNode, temp);
                element.parentNode.appendChild(temp);
                var /** @type {?} */ ret = temp.clientHeight;
                //this._renderer.removeChild(element.parentNode, temp);
                element.parentNode.removeChild(temp);
                return ret;
            })(this.el.nativeElement);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Tells if inner text overflows element.
     */
    /**
     * Tells if inner text overflows element.
     * @return {?}
     */
    TruncateDirective.prototype.isOverflown = /**
     * Tells if inner text overflows element.
     * @return {?}
     */
    function () {
        if (this.config.disabled || !this.text) {
            return false;
        }
        if (this.config.allowMultiline) {
            var /** @type {?} */ span = this.el.nativeElement.querySelectorAll('.truncate-line');
            var /** @type {?} */ lastSpan = span[span.length - 1];
            return this.textOverflowsElement(lastSpan);
        }
        else {
            return this.textOverflowsElement(this.el.nativeElement);
        }
    };
    /**
     * Event handler for acceleratorOn event.
     */
    /**
     * Event handler for acceleratorOn event.
     * @return {?}
     */
    TruncateDirective.prototype._raiseAcceleratorOn = /**
     * Event handler for acceleratorOn event.
     * @return {?}
     */
    function () {
        if (this.skipAccelerator || this.parsedText === undefined || this.parsedText.index === undefined) {
            return;
        }
        if (this.el.nativeElement.querySelector('.truncate-line')) {
            var /** @type {?} */ lines = this.el.nativeElement.querySelectorAll('.truncate-line');
            if (lines.length === 0) {
                return;
            }
            this.truncateLineElement = lines[this.acceleratorLineIndex];
            AcceleratorUtils.underlineAcceleratorCharInElement(this._renderer, this.truncateLineElement, this.acceleratorCharIndex, true);
        }
        else {
            AcceleratorUtils.underlineAcceleratorCharInElement(this._renderer, this.el.nativeElement, this.acceleratorCharIndex, true);
        }
    };
    /**
     * Event handler for acceleratorOff event.
     */
    /**
     * Event handler for acceleratorOff event.
     * @return {?}
     */
    TruncateDirective.prototype._raiseAcceleratorOff = /**
     * Event handler for acceleratorOff event.
     * @return {?}
     */
    function () {
        if (this.skipAccelerator || this.parsedText === undefined || this.parsedText.index === undefined) {
            return;
        }
        if (this.el.nativeElement.querySelector('.truncate-line')) {
            AcceleratorUtils.underlineAcceleratorCharInElement(this._renderer, this.truncateLineElement, this.acceleratorCharIndex, false);
        }
        else {
            AcceleratorUtils.underlineAcceleratorCharInElement(this._renderer, this.el.nativeElement, this.acceleratorCharIndex, false);
        }
    };
    /**
     * Manually raise event which tells that underlined char was pressed by user. You normally should not need this.
     */
    /**
     * Manually raise event which tells that underlined char was pressed by user. You normally should not need this.
     * @return {?}
     */
    TruncateDirective.prototype.raiseAcceleratorDo = /**
     * Manually raise event which tells that underlined char was pressed by user. You normally should not need this.
     * @return {?}
     */
    function () {
        this.acceleratorEvent.emit();
    };
    /**
     * Refreshes truncation, only relevant for multi-line truncate.
     */
    /**
     * Refreshes truncation, only relevant for multi-line truncate.
     * @return {?}
     */
    TruncateDirective.prototype.forceRefresh = /**
     * Refreshes truncation, only relevant for multi-line truncate.
     * @return {?}
     */
    function () {
        this.refresh(true, true);
    };
    /**
     * @param {?} textHasChanged
     * @param {?} configHasChanged
     * @return {?}
     */
    TruncateDirective.prototype.refresh = /**
     * @param {?} textHasChanged
     * @param {?} configHasChanged
     * @return {?}
     */
    function (textHasChanged, configHasChanged) {
        this.unregisterAcceleratorObserver();
        this.checkIsAcceleratorServiceEnabledAndProvided();
        if (this.isAcceleratorKeyEnabled()) {
            this.registerAcceleratorObserver();
        }
        this.initialize(textHasChanged, configHasChanged);
        this.truncate();
        this.prevEnableAcceleratorKey = this.config.enableAcceleratorKey;
    };
    /**
     * @param {?} textHasChanged
     * @param {?} configHasChanged
     * @return {?}
     */
    TruncateDirective.prototype.initialize = /**
     * @param {?} textHasChanged
     * @param {?} configHasChanged
     * @return {?}
     */
    function (textHasChanged, configHasChanged) {
        this.childrenRemoved = false;
        // Before truncate kick in it's necessary to remove resize handler if it is there.
        this.unregisterResizeObserver();
        // If text was changed, remove all children so we can set it up again.
        (textHasChanged || this.config.enableAcceleratorKey !== this.prevEnableAcceleratorKey) && this.removeAllChildren();
        if (this.el.nativeElement.querySelector('.truncate-line')) {
            // If there was previously multi-line truncate, clear it's result. We don't need to do this if text was
            // changed.
            !textHasChanged && this.removeAllChildren();
        }
        else {
            // If there was previously single-line truncate, clear it's result.
            if (configHasChanged) {
                this._renderer.removeClass(this.el.nativeElement, 'ellipsis');
            }
        }
        // If text hasn't been set yet - set it up.
        if (this.text && this.text.trim() !== '' && this.childrenRemoved) {
            this.acceleratorCharIndex = -1;
            if (this.isAcceleratorKeyEnabled()) {
                this.parsedText = AcceleratorUtils.parseText(this.text);
                if (this.parsedText.index !== undefined) {
                    this.acceleratorCharIndex = this.parsedText.index;
                    this.acceleratorKey = /** @type {?} */ (this.parsedText.key);
                }
                else {
                    this.unregisterAcceleratorObserver();
                }
            }
            var /** @type {?} */ text = (this.isAcceleratorKeyEnabled() && this.parsedText) ? this.parsedText.text : this.text;
            this._renderer.appendChild(this.el.nativeElement, this._renderer.createText(text));
        }
        else {
            textHasChanged && (this.parsedText = undefined);
        }
    };
    /**
     * @return {?}
     */
    TruncateDirective.prototype.registerResizeObserver = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.observer = elementResizeDetectorMaker({
            strategy: 'scroll'
        });
        this.observer.listenTo(this.el.nativeElement, function (element) {
            _this.onSizeChanged();
        });
    };
    /**
     * @return {?}
     */
    TruncateDirective.prototype.unregisterResizeObserver = /**
     * @return {?}
     */
    function () {
        if (this.observer) {
            this.observer.uninstall(this.el.nativeElement);
            this.observer = undefined;
        }
    };
    /**
     * @return {?}
     */
    TruncateDirective.prototype.registerAcceleratorObserver = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.acceleratorOnSubscription = /** @type {?} */ ((this._accSvc)).acceleratorOn.subscribe(function () {
            _this._raiseAcceleratorOn();
        });
        this.acceleratorOffSubscription = /** @type {?} */ ((this._accSvc)).acceleratorOff.subscribe(function () {
            _this._raiseAcceleratorOff();
        });
        this.acceleratorDoSubscription = /** @type {?} */ ((this._accSvc)).acceleratorDo.subscribe(function (char) {
            if (!_this.skipAccelerator && char === _this.acceleratorKey) {
                _this.raiseAcceleratorDo();
            }
        });
    };
    /**
     * @return {?}
     */
    TruncateDirective.prototype.unregisterAcceleratorObserver = /**
     * @return {?}
     */
    function () {
        this.acceleratorOnSubscription && this.acceleratorOnSubscription.unsubscribe();
        this.acceleratorOffSubscription && this.acceleratorOffSubscription.unsubscribe();
        this.acceleratorDoSubscription && this.acceleratorDoSubscription.unsubscribe();
        this.acceleratorOnSubscription = undefined;
        this.acceleratorOffSubscription = undefined;
        this.acceleratorDoSubscription = undefined;
    };
    /**
     * @return {?}
     */
    TruncateDirective.prototype.onSizeChanged = /**
     * @return {?}
     */
    function () {
        if (this.el.nativeElement.clientWidth === this.truncateWidth && this.el.nativeElement.clientHeight === this.truncateHeight) {
            return;
        }
        this.truncateWidth = this.el.nativeElement.clientWidth;
        this.truncateHeight = this.el.nativeElement.clientHeight;
        // If size has changed we need to recalculate multi-line truncate.
        if (this.config.allowMultiline) {
            this.initialize(false, false);
            this.truncate();
        }
    };
    /**
     * @return {?}
     */
    TruncateDirective.prototype.truncate = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Do not truncate if it has been disabled.
        if (this.config.disabled || !this.text || this.text.trim() === '') {
            return;
        }
        // Process truncate
        if (this.config.allowMultiline) {
            this.truncateMultiline();
            // This needs to run after all (Renderer) events are finished.
            setTimeout(function () {
                _this.registerResizeObserver();
            });
        }
        else {
            this._renderer.addClass(this.el.nativeElement, 'ellipsis');
        }
        // Process overflow changed event.
        var /** @type {?} */ isOverflown = this.isOverflown();
        if (this.lastOverflow === undefined || this.lastOverflow !== isOverflown) {
            this.overflowChange.next(isOverflown);
        }
        this.lastOverflow = isOverflown;
    };
    /**
     * @return {?}
     */
    TruncateDirective.prototype.truncateMultiline = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ lines = this.countLines();
        var /** @type {?} */ text = (this.isAcceleratorKeyEnabled() && this.parsedText) ? this.parsedText.text : this.text;
        var /** @type {?} */ acceleratorCharPositon = TruncateHelper.truncate(this._renderer, this.el.nativeElement, text, lines, this.acceleratorCharIndex);
        this.acceleratorCharIndex = acceleratorCharPositon.charIndex;
        this.acceleratorLineIndex = acceleratorCharPositon.lineIndex;
    };
    /**
     * @return {?}
     */
    TruncateDirective.prototype.removeAllChildren = /**
     * @return {?}
     */
    function () {
        this.childrenRemoved = true;
        // Before calling this make sure resize handler is not registered.
        DomUtils.removeAllChildren(this._renderer, this.el.nativeElement);
    };
    /**
     * @return {?}
     */
    TruncateDirective.prototype.countLines = /**
     * @return {?}
     */
    function () {
        return Math.floor(this.el.nativeElement.clientHeight / this.lineHeight) || 1;
    };
    /**
     * @param {?} element
     * @return {?}
     */
    TruncateDirective.prototype.textOverflowsElement = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        var /** @type {?} */ deviceInfo = this._device.getDeviceInfo();
        var /** @type {?} */ fix = ((deviceInfo.browser === ngxDeviceDetector.BROWSERS.IE || deviceInfo.browser === ngxDeviceDetector.BROWSERS.MS_EDGE) ? 1 : 0);
        return element.offsetWidth + fix < element.scrollWidth;
    };
    /**
     * @return {?}
     */
    TruncateDirective.prototype.isAcceleratorKeyEnabled = /**
     * @return {?}
     */
    function () {
        if (!this._accSvc || !this._accSvc.isEnabled) {
            return false;
        }
        return /** @type {?} */ (this.config.enableAcceleratorKey);
    };
    /**
     * @return {?}
     */
    TruncateDirective.prototype.checkIsAcceleratorServiceEnabledAndProvided = /**
     * @return {?}
     */
    function () {
        if (!this._accSvc && this.config.enableAcceleratorKey) {
            console.warn('Accelerator Service is enabled but not provided.');
        }
    };
    TruncateDirective.decorators = [
        { type: _angular_core.Directive, args: [{
                    selector: '[raUiTruncate]'
                },] },
    ];
    /** @nocollapse */
    TruncateDirective.ctorParameters = function () { return [
        { type: _angular_core.ElementRef, },
        { type: _angular_core.Renderer2, },
        { type: AcceleratorService, decorators: [{ type: _angular_core.Optional },] },
        { type: ngxDeviceDetector.DeviceDetectorService, },
        { type: undefined, decorators: [{ type: _angular_core.Inject, args: [LOGGER,] },] },
    ]; };
    TruncateDirective.propDecorators = {
        "text": [{ type: _angular_core.Input, args: ['raUiTruncate',] },],
        "config": [{ type: _angular_core.Input, args: ['truncateConfig',] },],
        "skipAccelerator": [{ type: _angular_core.Input, args: ['truncateSkipAccelerator',] },],
        "acceleratorEvent": [{ type: _angular_core.Output, args: ['onTruncateAccelerator',] },],
        "overflowChange": [{ type: _angular_core.Output, args: ['truncateOverflowChange',] },],
    };
    return TruncateDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {number} */
var TooltipArrowPosition = {
    None: 0,
    Top: 1,
    Left: 2,
    Bottom: 3,
    Right: 4,
};
TooltipArrowPosition[TooltipArrowPosition.None] = "None";
TooltipArrowPosition[TooltipArrowPosition.Top] = "Top";
TooltipArrowPosition[TooltipArrowPosition.Left] = "Left";
TooltipArrowPosition[TooltipArrowPosition.Bottom] = "Bottom";
TooltipArrowPosition[TooltipArrowPosition.Right] = "Right";
/**
 * @record
 */

var tooltipState = _angular_animations.trigger('state', [
    _angular_animations.state('initial, void, hidden', _angular_animations.style({ transform: 'scale(0)' })),
    _angular_animations.state('visible', _angular_animations.style({ transform: 'scale(1)' })),
    _angular_animations.transition('* => visible', _angular_animations.animate('150ms cubic-bezier(0.0, 0.0, 0.2, 1)')),
    _angular_animations.transition('* => hidden', _angular_animations.animate('150ms cubic-bezier(0.4, 0.0, 1, 1)'))
]);
var TooltipComponent = /** @class */ (function () {
    function TooltipComponent(changeDetectorRef, translate) {
        var _this = this;
        this.changeDetectorRef = changeDetectorRef;
        this.translate = translate;
        this._message = '';
        /**
         * Disables translate feature.
         */
        this.disableTranslate = false;
        this._tooltipArrowPosition = TooltipArrowPosition.None;
        this.__visibility = 'initial';
        /**
         * Defines the interpolation parameters for translation.
         */
        this.translateParams = {};
        this.addRightMargin = false;
        this._translatedMessage = '';
        this._forceStayOnInteraction = false;
        this.ready = new rxjs.Subject();
        this.hidden = new rxjs.Subject();
        this.closeOnInteraction = false;
        if (this.translate) {
            this.translate.onLangChange.subscribe(function (event) {
                _this.translateOrUpdateMessage();
            });
        }
    }
    Object.defineProperty(TooltipComponent.prototype, "message", {
        get: /**
         * @return {?}
         */
        function () {
            return this._message;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._message = val;
            this.translateOrUpdateMessage();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipComponent.prototype, "afterReady", {
        /**
         * Returns an observable that notifies when the tooltip is ready to be shown.
         */
        get: /**
         * Returns an observable that notifies when the tooltip is ready to be shown.
         * @return {?}
         */
        function () {
            return this.ready.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipComponent.prototype, "afterHidden", {
        /**
         * Returns an observable that notifies when the tooltip has been hidden from view.
         */
        get: /**
         * Returns an observable that notifies when the tooltip has been hidden from view.
         * @return {?}
         */
        function () {
            return this.hidden.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipComponent.prototype, "visible", {
        /**
         * Returns true if tooltip is shown to the user.
         */
        get: /**
         * Returns true if tooltip is shown to the user.
         * @return {?}
         */
        function () {
            return this._visibility === 'visible';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipComponent.prototype, "tooltipArrowPosition", {
        get: /**
         * @return {?}
         */
        function () {
            return this._tooltipArrowPosition;
        },
        /**
         * Determines where to show a tooltip arrow.
         */
        set: /**
         * Determines where to show a tooltip arrow.
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val === this._tooltipArrowPosition) {
                return;
            }
            this._tooltipArrowPosition = val;
            this.changeDetectorRef.detectChanges();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipComponent.prototype, "_visibility", {
        get: /**
         * @return {?}
         */
        function () {
            return this.__visibility;
        },
        /**
         * Property watched by the animation framework to show or hide the tooltip
         */
        set: /**
         * Property watched by the animation framework to show or hide the tooltip
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this.__visibility = val;
            // Forces the element to have a layout in IE and Edge. This fixes issues where the element
            // won't be rendered if the animations are disabled or there is no web animations polyfill.
            this._zoom = val === 'visible' ? 1 : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TooltipComponent.prototype._onBodyClick = /**
     * @return {?}
     */
    function () {
        this._hideIfShouldCloseOnInteraction();
    };
    /**
     * Shows tooltip after the specified delay.
     */
    /**
     * Shows tooltip after the specified delay.
     * @param {?} delay
     * @param {?} positionStrategy
     * @param {?} mouseEventRef
     * @return {?}
     */
    TooltipComponent.prototype.show = /**
     * Shows tooltip after the specified delay.
     * @param {?} delay
     * @param {?} positionStrategy
     * @param {?} mouseEventRef
     * @return {?}
     */
    function (delay, positionStrategy, mouseEventRef) {
        var _this = this;
        // Cancel the delayed hide if it is scheduled
        this.hideTimeoutId && clearTimeout(this.hideTimeoutId);
        // Body interactions should cancel the tooltip if there is a delay in showing.
        this.closeOnInteraction = true;
        this.showTimeoutId = window.setTimeout(function () {
            if (positionStrategy instanceof _angular_cdk_overlay.GlobalPositionStrategy) {
                var /** @type {?} */ global = /** @type {?} */ (positionStrategy);
                global.left(mouseEventRef.instance.clientX + 'px');
                global.top(mouseEventRef.instance.clientY + 'px');
                global.apply();
            }
            _this._visibility = 'visible';
            // Mark for check so if any parent component has set the
            // ChangeDetectionStrategy to OnPush it will be checked anyways
            // Mark for check so if any parent component has set the
            // ChangeDetectionStrategy to OnPush it will be checked anyways
            _this._markForCheck();
        }, delay);
    };
    /**
     * Hides tooltip after the specified delay.
     */
    /**
     * Hides tooltip after the specified delay.
     * @param {?} delay
     * @return {?}
     */
    TooltipComponent.prototype.hide = /**
     * Hides tooltip after the specified delay.
     * @param {?} delay
     * @return {?}
     */
    function (delay) {
        var _this = this;
        // Cancel the delayed show if it is scheduled
        this.showTimeoutId && clearTimeout(this.showTimeoutId);
        this.hideTimeoutId = window.setTimeout(function () {
            _this._visibility = 'hidden';
            // Mark for check so if any parent component has set the
            // ChangeDetectionStrategy to OnPush it will be checked anyways
            // Mark for check so if any parent component has set the
            // ChangeDetectionStrategy to OnPush it will be checked anyways
            _this._markForCheck();
        }, delay);
    };
    /**
     * @return {?}
     */
    TooltipComponent.prototype._animationStart = /**
     * @return {?}
     */
    function () {
        this.closeOnInteraction = false;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TooltipComponent.prototype._animationDone = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var /** @type {?} */ toState = /** @type {?} */ (event.toState);
        toState === 'hidden' && !this.visible && this.hidden.next();
        if (toState === 'visible' || toState === 'hidden') {
            this.closeOnInteraction = true;
        }
    };
    /**
     * @return {?}
     */
    TooltipComponent.prototype._markForCheck = /**
     * @return {?}
     */
    function () {
        this.changeDetectorRef.markForCheck();
    };
    /**
     * @return {?}
     */
    TooltipComponent.prototype._hideIfShouldCloseOnInteraction = /**
     * @return {?}
     */
    function () {
        this.closeOnInteraction && !this._forceStayOnInteraction && this.hide(0);
    };
    /**
     * @return {?}
     */
    TooltipComponent.prototype.shouldTranslate = /**
     * @return {?}
     */
    function () {
        return (!this.disableTranslate && this.message.trim() !== '' && !!this.translate);
    };
    /**
     * @return {?}
     */
    TooltipComponent.prototype.translateOrUpdateMessage = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.shouldTranslate()) {
            this.translate.get(this.message, this.translateParams).subscribe(function (res) {
                _this._translatedMessage = res;
                _this.createTemplateContext(_this._translatedMessage);
                _this.ready.next();
            });
        }
        else {
            this._translatedMessage = this.message;
            this.createTemplateContext(this._translatedMessage);
            this.ready.next();
        }
        this._templateContext = {
            message: this._translatedMessage
        };
    };
    /**
     * @param {?} message
     * @return {?}
     */
    TooltipComponent.prototype.createTemplateContext = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        this._templateContext = {
            message: message
        };
    };
    TooltipComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ra-ui-tooltip',
                    template: "<div class=\"tooltip-content\" [style.max-width]=\"maxWidth\" [@state]=\"_visibility\" (@state.start)=\"_animationStart()\" (@state.done)=\"_animationDone($event)\"><div class=\"arrow-up\" *ngIf=\"tooltipArrowPosition == 1\"></div><div fxFlexFill fxLayout=\"row\" style=\"align-items: center;\"><div class=\"arrow-left\" *ngIf=\"tooltipArrowPosition == 2\"></div><div class=\"tooltip-message\" [ngClass]=\"tooltipClass\"><div *ngIf=\"_templateRef; else noTemplate\" [style.max-width]=\"maxWidth\"><ng-template [ngTemplateOutlet]=\"_templateRef\" [ngTemplateOutletContext]=\"_templateContext\"></ng-template></div><ng-template #noTemplate>{{_translatedMessage}}</ng-template></div><div class=\"arrow-right\" *ngIf=\"tooltipArrowPosition == 4\"></div></div><div class=\"arrow-down\" *ngIf=\"tooltipArrowPosition == 3\"></div></div>",
                    styles: [".tooltip-panel{pointer-events:none!important}ra-ui-tooltip .tooltip-message{color:#fff;border-radius:4px;word-wrap:break-word;padding:8px;font-size:10pt;width:100%;box-sizing:border-box}"],
                    encapsulation: _angular_core.ViewEncapsulation.None,
                    changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    animations: [tooltipState]
                },] },
    ];
    /** @nocollapse */
    TooltipComponent.ctorParameters = function () { return [
        { type: _angular_core.ChangeDetectorRef, },
        { type: _ngxTranslate_core.TranslateService, decorators: [{ type: _angular_core.Optional },] },
    ]; };
    TooltipComponent.propDecorators = {
        "_zoom": [{ type: _angular_core.HostBinding, args: ['style.zoom',] },],
        "_onBodyClick": [{ type: _angular_core.HostListener, args: ['body:click',] },],
    };
    return TooltipComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
//region TooltipPosition
var TooltipPosition = strEnum([
    'Cover',
    'Top',
    'Left',
    'Bottom',
    'Right',
    'Center',
    'Cursor'
]);
//endregion

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TooltipPositionStrategyBuilderService = /** @class */ (function () {
    function TooltipPositionStrategyBuilderService(overlay) {
        this.overlay = overlay;
    }
    /**
     * Returns PositionStrategy instance based on TooltipPosition configuration.
     */
    /**
     * Returns PositionStrategy instance based on TooltipPosition configuration.
     * @param {?} elementRef
     * @param {?} position
     * @return {?}
     */
    TooltipPositionStrategyBuilderService.prototype.build = /**
     * Returns PositionStrategy instance based on TooltipPosition configuration.
     * @param {?} elementRef
     * @param {?} position
     * @return {?}
     */
    function (elementRef, position) {
        if (position === TooltipPosition.Cursor) {
            var /** @type {?} */ strategy = this.overlay
                .position()
                .global();
            return strategy;
        }
        else {
            var /** @type {?} */ strategy = this.overlay
                .position()
                .flexibleConnectedTo(elementRef)
                .withFlexibleDimensions(false);
            return strategy;
        }
    };
    /**
     * Returns the origin position and a fallback position based on the user's position preference.
     * The fallback position is the inverse of the origin.
     */
    /**
     * Returns the origin position and a fallback position based on the user's position preference.
     * The fallback position is the inverse of the origin.
     * @param {?} position
     * @return {?}
     */
    TooltipPositionStrategyBuilderService.prototype.getOrigin = /**
     * Returns the origin position and a fallback position based on the user's position preference.
     * The fallback position is the inverse of the origin.
     * @param {?} position
     * @return {?}
     */
    function (position) {
        var /** @type {?} */ result;
        switch (position) {
            case TooltipPosition.Top:
                result = { originX: 'center', originY: 'top' };
                break;
            case TooltipPosition.Bottom:
                result = { originX: 'center', originY: 'bottom' };
                break;
            case TooltipPosition.Left:
                result = { originX: 'start', originY: 'center' };
                break;
            case TooltipPosition.Right:
                result = { originX: 'end', originY: 'center' };
                break;
            case TooltipPosition.Center:
                return {
                    main: {
                        originX: 'center',
                        originY: 'center'
                    },
                    fallback: {
                        originX: 'center',
                        originY: 'center'
                    }
                };
            case TooltipPosition.Cover:
                return {
                    main: {
                        originX: 'start',
                        originY: 'top'
                    },
                    fallback: {
                        originX: 'start',
                        originY: 'top'
                    }
                };
            default:
                throw new Error('Invalid Tooltip.Position');
        }
        var _a = this.invertPosition(result.originX, result.originY, position), x = _a.x, y = _a.y;
        return {
            main: result,
            fallback: { originX: x, originY: y }
        };
    };
    /**
     * Returns the overlay position and a fallback position based on the user's preference
     */
    /**
     * Returns the overlay position and a fallback position based on the user's preference
     * @param {?} position
     * @return {?}
     */
    TooltipPositionStrategyBuilderService.prototype.getOverlayPosition = /**
     * Returns the overlay position and a fallback position based on the user's preference
     * @param {?} position
     * @return {?}
     */
    function (position) {
        var /** @type {?} */ result;
        switch (position) {
            case TooltipPosition.Top:
                result = { overlayX: 'center', overlayY: 'bottom' };
                break;
            case TooltipPosition.Bottom:
                result = { overlayX: 'center', overlayY: 'top' };
                break;
            case TooltipPosition.Left:
                result = { overlayX: 'end', overlayY: 'center' };
                break;
            case TooltipPosition.Right:
                result = { overlayX: 'start', overlayY: 'center' };
                break;
            case TooltipPosition.Center:
                return {
                    main: {
                        overlayX: 'center',
                        overlayY: 'center'
                    },
                    fallback: {
                        overlayX: 'center',
                        overlayY: 'center'
                    }
                };
            case TooltipPosition.Cover:
                return {
                    main: {
                        overlayX: 'start',
                        overlayY: 'top'
                    },
                    fallback: {
                        overlayX: 'start',
                        overlayY: 'top'
                    }
                };
            default:
                throw new Error('Invalid Tooltip.Position');
        }
        var _a = this.invertPosition(result.overlayX, result.overlayY, position), x = _a.x, y = _a.y;
        return {
            main: result,
            fallback: { overlayX: x, overlayY: y }
        };
    };
    /**
     * Inverts an overlay position.
     * @param {?} x
     * @param {?} y
     * @param {?} position
     * @return {?}
     */
    TooltipPositionStrategyBuilderService.prototype.invertPosition = /**
     * Inverts an overlay position.
     * @param {?} x
     * @param {?} y
     * @param {?} position
     * @return {?}
     */
    function (x, y, position) {
        if (position === TooltipPosition.Top || position === TooltipPosition.Bottom) {
            if (y === 'top') {
                y = 'bottom';
            }
            else if (y === 'bottom') {
                y = 'top';
            }
        }
        else if (position === TooltipPosition.Left || position === TooltipPosition.Right) {
            if (x === 'end') {
                x = 'start';
            }
            else if (x === 'start') {
                x = 'end';
            }
        }
        return { x: x, y: y };
    };
    TooltipPositionStrategyBuilderService.decorators = [
        { type: _angular_core.Injectable },
    ];
    /** @nocollapse */
    TooltipPositionStrategyBuilderService.ctorParameters = function () { return [
        { type: _angular_cdk_overlay.Overlay, },
    ]; };
    return TooltipPositionStrategyBuilderService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Tooltip config interface.
 * @record
 */

/**
 * Interface emitted in beforeShow output.
 * @record
 */

var TOOLTIP_PANEL_CLASS = 'tooltip-panel';
var SCROLL_THROTTLE_MS = 20;
var TOOLTIP_MINIMAL_WIDTH = 150;
var DEFAULT_SHOW_MS = 1500;
var DEFAULT_HIDE_MS = 0;
var DEFAULT_TOUCHEND_HIDE_MS = 0;
var TOOLTIP_COVER_RIGHT_MARGIN = 20;
var MouseEventRef = /** @class */ (function () {
    function MouseEventRef() {
    }
    return MouseEventRef;
}());
/**
 * A method that checks whether a value is of type TooltipPosition.
 * @param {?} val
 * @return {?}
 */
function isTooltipPosition(val) {
    return val === TooltipPosition.Cover
        || val === TooltipPosition.Top
        || val === TooltipPosition.Left
        || val === TooltipPosition.Bottom
        || val === TooltipPosition.Right
        || val === TooltipPosition.Center
        || val === TooltipPosition.Cursor;
}
/**
 * Configuration object for TooltipDirective, this class is immutable.
 */
var TooltipConfig = /** @class */ (function () {
    /**
     * Creates new instance, handles default options.
     */
    function TooltipConfig(options, logger) {
        if (options === void 0) { options = /** @type {?} */ ({}); }
        this.logger = logger;
        if (!lodash.isNumber(options.maxWidth)) {
            this.onInvalidType('maxWidth', 'number', options.maxWidth);
            this.maxWidth = TOOLTIP_MINIMAL_WIDTH;
        }
        else {
            this.maxWidth = options.maxWidth;
        }
        (options.maxWidth && options.maxWidth < TOOLTIP_MINIMAL_WIDTH) && (this.maxWidth = TOOLTIP_MINIMAL_WIDTH);
    }
    /**
     * A method called when a field with incorrect type is passed to the config.
     */
    // tslint:disable-next-line:no-any
    /**
     * A method called when a field with incorrect type is passed to the config.
     * @param {?} propName
     * @param {?} expected
     * @param {?} got
     * @return {?}
     */
    TooltipConfig.prototype.onInvalidType = /**
     * A method called when a field with incorrect type is passed to the config.
     * @param {?} propName
     * @param {?} expected
     * @param {?} got
     * @return {?}
     */
    function (propName, expected, got) {
        this.logger && LoggerUtils.logInvalidInput('TooltipConfig', propName, got, expected, this.logger);
    };
    /**
     * Configuration object for TooltipDirective, this class is immutable.
     */
    TooltipConfig = __decorate([
        Immutable,
        Config({
            explicit: {
                default: false,
                type: 'boolean'
            },
            position: {
                default: TooltipPosition.Cover,
                type: isTooltipPosition,
                typeDisplayName: 'TooltipPosition'
            },
            showDelay: {
                default: DEFAULT_SHOW_MS,
                type: 'number'
            },
            hideDelay: {
                default: DEFAULT_HIDE_MS,
                type: 'number'
            },
            touchHideDelay: {
                default: DEFAULT_TOUCHEND_HIDE_MS,
                type: 'number'
            },
            tooltipClass: {
                default: '',
                type: isClassDef,
                typeDisplayName: 'ClassDef'
            }
        }),
        __metadata("design:paramtypes", [Object, Object])
    ], TooltipConfig);
    return TooltipConfig;
}());
/**
 * RA WTUI tooltip directive. Displays tooltip over the element it is used with.
 */
var TooltipDirective = /** @class */ (function () {
    //endregion
    //region Constructor and Life Cycle Hooks
    function TooltipDirective(overlay, viewContainerRef, platform, posStrategyBuilder, elementRef, scrollDispatcher, ngZone, logger) {
        var _this = this;
        this.overlay = overlay;
        this.viewContainerRef = viewContainerRef;
        this.platform = platform;
        this.posStrategyBuilder = posStrategyBuilder;
        this.elementRef = elementRef;
        this.scrollDispatcher = scrollDispatcher;
        this.ngZone = ngZone;
        this.logger = logger;
        this._config = new TooltipConfig(undefined, this.logger);
        this._disabled = false;
        this._disableTranslate = false;
        this._translateParams = {};
        /**
         * An event emitted before the tooltip is shown.
         */
        this.beforeShow = new _angular_core.EventEmitter();
        this.shouldRecreateOverlay = false;
        this.mouseEventRef = new MouseEventRef();
        this.destroyed = new rxjs.Subject();
        this.manualListeners = new Map();
        this._componentName = 'TooltipDirective';
        var /** @type {?} */ element = elementRef.nativeElement;
        // The mouse events shouldn't be bound on iOS devices, because
        // they can prevent the first tap from firing its click event.
        if (!platform.IOS) {
            this.manualListeners.set('mouseenter', function (event) { return _this._onMouseEnter(event); });
            this.manualListeners.set('mouseleave', function () { return _this._onMouseLeave(); });
            this.manualListeners
                .forEach(function (listener, event) { return elementRef.nativeElement.addEventListener(event, listener); });
        }
        else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
            // When we bind a gesture event on an element (in this case `longpress`), HammerJS
            // will add some inline styles by default, including `user-select: none`. This is
            // problematic on iOS, because it will prevent users from typing in inputs. If
            // we're on iOS and the tooltip is attached on an input or textarea, we clear
            // the `user-select` to avoid these issues.
            element.style.webkitUserSelect = element.style.userSelect = '';
        }
    }
    Object.defineProperty(TooltipDirective.prototype, "text", {
        get: /**
         * Text to show inside tooltip.
         * \@default ' '
         * @return {?}
         */
        function () {
            return this._text;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (lodash.isString(val)) {
                this._text = val;
            }
            else {
                this._text = '';
                //log error to the console
                LoggerUtils.logInvalidInput(this._componentName, 'raUiTooltip', val, 'string', this.logger);
            }
            this.updateTooltipMessage();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "config", {
        get: /**
         * Configuration object.
         * \@default Config with default fields.
         * @return {?}
         */
        function () {
            return this._config;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (TypeUtils.isObject(val)) {
                this._config = new TooltipConfig(val, this.logger);
            }
            else {
                this._config = new TooltipConfig(undefined, this.logger);
                //log error to the console
                LoggerUtils.logInvalidInput(this._componentName, 'tooltipConfig', val, 'ITooltipConfig', this.logger);
            }
            this.onConfigChanged();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "disabled", {
        get: /**
         * Disables tooltip for both: Implicit and Explicit modes.
         * \@default false
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            var /** @type {?} */ previousValue = this._disabled;
            if (lodash.isBoolean(val)) {
                this._disabled = val;
            }
            else {
                this._disabled = false;
                //log error to the console
                LoggerUtils.logInvalidInput(this._componentName, 'tooltipDisabled', val, 'boolean', this.logger);
            }
            this.setDisabledState(previousValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "disableTranslate", {
        get: /**
         * Disables the translation feature for the tooltip.
         * \@default false
         * @return {?}
         */
        function () {
            return this._disableTranslate;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (lodash.isBoolean(val)) {
                this._disableTranslate = val;
            }
            else {
                this._disableTranslate = false;
                //log error to the console
                LoggerUtils.logInvalidInput(this._componentName, 'tooltipDisableTranslate', val, 'boolean', this.logger);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "translateParams", {
        get: /**
         * Parameters for translation, these are optional. If changed, translation will get updated.
         * \@default { }
         * @return {?}
         */
        function () {
            return this._translateParams;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (TypeUtils.isObject(val)) {
                this._translateParams = val;
            }
            else {
                this._translateParams = {};
                //log error to the console
                LoggerUtils.logInvalidInput(this._componentName, 'tooltipTranslateParams', val, 'object', this.logger);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "visible", {
        //endregion
        //region Public Properties
        /**
         * Returns true if tooltip has been shown to the user.
         */
        get: /**
         * Returns true if tooltip has been shown to the user.
         * @return {?}
         */
        function () {
            return !!this._tooltipInstance && this._tooltipInstance.visible;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TooltipDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.onConfigChanged();
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._overlayRef) {
            this._overlayRef.dispose();
            this._tooltipInstance = undefined;
        }
        // Clean up the event listeners set in the constructor
        if (!this.platform.IOS) {
            this.manualListeners.forEach(function (listener, event) {
                return _this.elementRef.nativeElement.removeEventListener(event, listener);
            });
            this.manualListeners.clear();
        }
        this.destroyed.next();
        this.destroyed.complete();
    };
    //endregion
    //region Public Methods
    /**
     * Shows the tooltip, only available for Explicit mode.
     */
    /**
     * Shows the tooltip, only available for Explicit mode.
     * @param {?=} delay
     * @return {?}
     */
    TooltipDirective.prototype.show = /**
     * Shows the tooltip, only available for Explicit mode.
     * @param {?=} delay
     * @return {?}
     */
    function (delay) {
        var _this = this;
        if (delay === void 0) { delay = this.showDelay; }
        if ((this.disabled || this._text.trim() === '') || this.visible) {
            return;
        }
        this.detach();
        var /** @type {?} */ _overlayRef = this.createOverlay();
        this.portal = this.portal || new _angular_cdk_portal.ComponentPortal(TooltipComponent, this.viewContainerRef);
        this._tooltipInstance = _overlayRef.attach(this.portal).instance;
        this._tooltipInstance._forceStayOnInteraction = !!this.config.explicit;
        this._tooltipInstance.afterHidden
            .pipe(rxjs_operators.takeUntil(this.destroyed))
            .subscribe(function () { return _this.detach(); });
        this._tooltipInstance.afterReady
            .pipe(rxjs_operators.take(1), rxjs_operators.takeUntil(this.destroyed))
            .subscribe(function () {
            _this._tooltipInstance && _this._tooltipInstance.show(delay, _this.positionStrategy, _this.mouseEventRef);
        });
        this._tooltipInstance._templateRef = this.templateRef;
        this.updateTooltipClass();
        this.updateDisableTranslate();
        this.updateTanslateParams();
        this.updateTooltipMessage();
        this.updateMaxWidth();
    };
    /**
     * Hides the tooltip, only available for Explicit mode.
     */
    /**
     * Hides the tooltip, only available for Explicit mode.
     * @param {?=} delay
     * @return {?}
     */
    TooltipDirective.prototype.hide = /**
     * Hides the tooltip, only available for Explicit mode.
     * @param {?=} delay
     * @return {?}
     */
    function (delay) {
        if (delay === void 0) { delay = this.hideDelay; }
        this._tooltipInstance && this._tooltipInstance.hide(delay);
        // We need to recreate overlay for cursor mode each time it's shown because it's position is each time different,
        // or if we are in Cover mode since maxWidth is different based on scroll position.
        (this.config.position === TooltipPosition.Cursor || this.config.position === TooltipPosition.Cover) &&
            (this.shouldRecreateOverlay = true);
    };
    /**
     * Toggles the tooltip.
     */
    /**
     * Toggles the tooltip.
     * @return {?}
     */
    TooltipDirective.prototype.toggle = /**
     * Toggles the tooltip.
     * @return {?}
     */
    function () {
        this.visible ? this.hide() : this.show();
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype._onLongPress = /**
     * @return {?}
     */
    function () {
        !this.config.explicit && this.show();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TooltipDirective.prototype._onMouseMove = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.mouseEventRef.instance = event;
        if (this.positionStrategy instanceof _angular_cdk_overlay.GlobalPositionStrategy) {
            var /** @type {?} */ global = /** @type {?} */ (this.positionStrategy);
            global.left(this.mouseEventRef.instance.clientX + 'px');
            global.top(this.mouseEventRef.instance.clientY + 'px');
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TooltipDirective.prototype._onMouseEnter = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var /** @type {?} */ e = {
            result: true
        };
        this.beforeShow.emit(e);
        if (e.result) {
            this.mouseEventRef.instance = event;
            !this.config.explicit && this.show();
        }
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype._onMouseLeave = /**
     * @return {?}
     */
    function () {
        !this.config.explicit && this.hide();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TooltipDirective.prototype._onKeyDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.config.explicit && this.visible && event.keyCode === KeyCode.ESCAPE) {
            event.stopPropagation();
            this.hide(0);
        }
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype._onTouchEnd = /**
     * @return {?}
     */
    function () {
        !this.config.explicit && this.hide();
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.onConfigChanged = /**
     * @return {?}
     */
    function () {
        this.shouldRecreateOverlay = true;
        this.hideTooltipIfItsShown();
        this.showDelay = /** @type {?} */ (this.config.showDelay);
        this.hideDelay = /** @type {?} */ (this.config.hideDelay);
        this.touchHideDelay = /** @type {?} */ (this.config.touchHideDelay);
        this.tooltipClass = this.config.tooltipClass || '';
        this.updateTooltipClass();
        if (this._overlayRef) {
            this.updatePosition();
            if (this._tooltipInstance) {
                /** @type {?} */ ((this._tooltipInstance)).show(0, this.positionStrategy, this.mouseEventRef);
            }
            this._overlayRef.updatePosition();
        }
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    TooltipDirective.prototype.setDisabledState = /**
     * @param {?} disabled
     * @return {?}
     */
    function (disabled) {
        if (disabled === this._disabled) {
            return;
        }
        this.hideTooltipIfItsShown();
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.hideTooltipIfItsShown = /**
     * @return {?}
     */
    function () {
        this.visible && this.hide(0);
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.createOverlay = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._overlayRef) {
            return this._overlayRef;
        }
        this.positionStrategy = this.posStrategyBuilder.build(this.elementRef, /** @type {?} */ (this.config.position));
        if (this.positionStrategy instanceof _angular_cdk_overlay.FlexibleConnectedPositionStrategy) {
            var /** @type {?} */ connStrategy = /** @type {?} */ (this.positionStrategy);
            var /** @type {?} */ scrollableAncestors = this.scrollDispatcher.getAncestorScrollContainers(this.elementRef);
            connStrategy.withScrollableContainers(scrollableAncestors);
            connStrategy.positionChanges.pipe(rxjs_operators.takeUntil(this.destroyed)).subscribe(function (change) {
                if (!_this._tooltipInstance) {
                    return;
                }
                _this.updateTooltipArrowPosition(change.connectionPair);
                if (!_this.config.explicit
                    && change.scrollableViewProperties.isOverlayClipped
                    && _this._tooltipInstance.visible) {
                    // After position changes occur and the overlay is clipped by
                    // a parent scrollable then close the tooltip (for 'Implicit' mode).
                    // After position changes occur and the overlay is clipped by
                    // a parent scrollable then close the tooltip (for 'Implicit' mode).
                    _this.ngZone.run(function () { return _this.hide(0); });
                }
            });
        }
        this.maxWidth = this.config.position === TooltipPosition.Cover ?
            window.innerWidth - (this.elementRef.nativeElement.getBoundingClientRect().left) - TOOLTIP_COVER_RIGHT_MARGIN :
            this.config.maxWidth;
        this._overlayRef = this.overlay.create({
            direction: 'ltr',
            positionStrategy: this.positionStrategy,
            maxWidth: this.maxWidth,
            panelClass: TOOLTIP_PANEL_CLASS,
            scrollStrategy: this.overlay.scrollStrategies.reposition({
                scrollThrottle: SCROLL_THROTTLE_MS
            })
        });
        this.updatePosition();
        this._overlayRef.detachments()
            .pipe(rxjs_operators.takeUntil(this.destroyed))
            .subscribe(function () { return _this.detach(); });
        // Because overlay just got created, we don't need to recreate it.
        this.shouldRecreateOverlay = false;
        return this._overlayRef;
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.detach = /**
     * @return {?}
     */
    function () {
        if (this._overlayRef && this._overlayRef.hasAttached()) {
            this.shouldRecreateOverlay ?
                this._overlayRef.dispose() :
                this._overlayRef.detach();
        }
        if (this.shouldRecreateOverlay) {
            this._overlayRef = undefined;
        }
        this._tooltipInstance = undefined;
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.updateTooltipClass = /**
     * @return {?}
     */
    function () {
        this._tooltipInstance && (this._tooltipInstance.tooltipClass = this.tooltipClass);
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.updateDisableTranslate = /**
     * @return {?}
     */
    function () {
        this._tooltipInstance && (this._tooltipInstance.disableTranslate = this.disableTranslate);
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.updateTanslateParams = /**
     * @return {?}
     */
    function () {
        this._tooltipInstance && (this._tooltipInstance.translateParams = this.translateParams);
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.updateTooltipMessage = /**
     * @return {?}
     */
    function () {
        if (!this._tooltipInstance) {
            return;
        }
        this._tooltipInstance.message = this.text;
        this._tooltipInstance._markForCheck();
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.updatePosition = /**
     * @return {?}
     */
    function () {
        if (!(this.positionStrategy instanceof _angular_cdk_overlay.FlexibleConnectedPositionStrategy)) {
            return;
        }
        var /** @type {?} */ connStrategy = /** @type {?} */ (this.positionStrategy);
        var /** @type {?} */ origin = this.posStrategyBuilder.getOrigin(/** @type {?} */ (this.config.position));
        var /** @type {?} */ overlay = this.posStrategyBuilder.getOverlayPosition(/** @type {?} */ (this.config.position));
        connStrategy.withPositions([
            __assign({}, origin.main, overlay.main),
            __assign({}, origin.fallback, overlay.fallback)
        ]);
    };
    /**
     * @param {?} tooltipPosition
     * @return {?}
     */
    TooltipDirective.prototype.updateTooltipArrowPosition = /**
     * @param {?} tooltipPosition
     * @return {?}
     */
    function (tooltipPosition) {
        if (!this._tooltipInstance) {
            return;
        }
        if (this.compareTooltipPosition(tooltipPosition, 'center', 'bottom', 'center', 'top')) {
            this._tooltipInstance.tooltipArrowPosition = TooltipArrowPosition.Top;
        }
        else if (this.compareTooltipPosition(tooltipPosition, 'center', 'top', 'center', 'bottom')) {
            this._tooltipInstance.tooltipArrowPosition = TooltipArrowPosition.Bottom;
        }
        else if (this.compareTooltipPosition(tooltipPosition, 'start', 'center', 'end', 'center')) {
            this._tooltipInstance.tooltipArrowPosition = TooltipArrowPosition.Right;
        }
        else if (this.compareTooltipPosition(tooltipPosition, 'end', 'center', 'start', 'center')) {
            this._tooltipInstance.tooltipArrowPosition = TooltipArrowPosition.Left;
        }
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.updateMaxWidth = /**
     * @return {?}
     */
    function () {
        if (!this._tooltipInstance) {
            return;
        }
        this._tooltipInstance.maxWidth = this.maxWidth ? this.maxWidth + 'px' : undefined;
    };
    /**
     * @param {?} tooltipPosition
     * @param {?} originX
     * @param {?} originY
     * @param {?} overlayX
     * @param {?} overlayY
     * @return {?}
     */
    TooltipDirective.prototype.compareTooltipPosition = /**
     * @param {?} tooltipPosition
     * @param {?} originX
     * @param {?} originY
     * @param {?} overlayX
     * @param {?} overlayY
     * @return {?}
     */
    function (tooltipPosition, originX, originY, overlayX, overlayY) {
        return (tooltipPosition.originX === originX &&
            tooltipPosition.originY === originY &&
            tooltipPosition.overlayX === overlayX &&
            tooltipPosition.overlayY === overlayY);
    };
    TooltipDirective.decorators = [
        { type: _angular_core.Directive, args: [{
                    selector: '[raUiTooltip]',
                    providers: [TooltipPositionStrategyBuilderService],
                    exportAs: 'tooltip-directive'
                },] },
    ];
    //endregion
    /** @nocollapse */
    TooltipDirective.ctorParameters = function () { return [
        { type: _angular_cdk_overlay.Overlay, },
        { type: _angular_core.ViewContainerRef, },
        { type: _angular_cdk_platform.Platform, },
        { type: TooltipPositionStrategyBuilderService, },
        { type: _angular_core.ElementRef, },
        { type: _angular_cdk_scrolling.ScrollDispatcher, },
        { type: _angular_core.NgZone, },
        { type: undefined, decorators: [{ type: _angular_core.Inject, args: [LOGGER,] },] },
    ]; };
    TooltipDirective.propDecorators = {
        "text": [{ type: _angular_core.Input, args: ['raUiTooltip',] },],
        "config": [{ type: _angular_core.Input, args: ['tooltipConfig',] },],
        "disabled": [{ type: _angular_core.Input, args: ['tooltipDisabled',] },],
        "disableTranslate": [{ type: _angular_core.Input, args: ['tooltipDisableTranslate',] },],
        "translateParams": [{ type: _angular_core.Input, args: ['tooltipTranslateParams',] },],
        "beforeShow": [{ type: _angular_core.Output, args: ['tooltipBeforeShow',] },],
        "templateRef": [{ type: _angular_core.ContentChild, args: ['tooltip',] },],
        "_onLongPress": [{ type: _angular_core.HostListener, args: ['longpress',] },],
        "_onMouseMove": [{ type: _angular_core.HostListener, args: ['mousemove', ['$event'],] },],
        "_onMouseEnter": [{ type: _angular_core.HostListener, args: ['mouseenter', ['$event'],] },],
        "_onMouseLeave": [{ type: _angular_core.HostListener, args: ['mouseleave',] },],
    };
    return TooltipDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
//region TextAlign
var TextAlignVertically = strEnum([
    'Start',
    'End',
    'Center'
]);
/**
 * @record
 */

/**
 * A method that checks whether a value is of type TextAlignVertically.
 * @param {?} val
 * @return {?}
 */
function isTextAlignVertically(val) {
    return val === TextAlignVertically.Start || val === TextAlignVertically.End || val === TextAlignVertically.Center;
}
/**
 * Configuration object for StaticTextComponent, this class is immutable.
 */
var StaticTextConfig = /** @class */ (function () {
    /**
     * Creates new instance, handles default options.
     */
    function StaticTextConfig(options, logger) {
        if (options === void 0) { options = /** @type {?} */ ({}); }
        this.logger = logger;
        if (!lodash.isBoolean(options.enableScrollBar)) {
            this.onInvalidType('enableScrollBar', 'boolean', options.enableScrollBar);
            this.enableScrollBar = false;
        }
        else {
            this.enableScrollBar = options.enableScrollBar;
        }
        if (!lodash.isBoolean(options.allowMultiline)) {
            this.onInvalidType('allowMultiline', 'boolean', options.allowMultiline);
            this.allowMultiline = false;
        }
        else {
            this.allowMultiline = options.allowMultiline;
        }
        if (this.enableScrollBar && !this.allowMultiline) {
            this.allowMultiline = true;
        }
    }
    /**
     * A method called when a field with incorrect type is passed to the config.
     */
    // tslint:disable-next-line:no-any
    /**
     * A method called when a field with incorrect type is passed to the config.
     * @param {?} propName
     * @param {?} expected
     * @param {?} got
     * @return {?}
     */
    StaticTextConfig.prototype.onInvalidType = /**
     * A method called when a field with incorrect type is passed to the config.
     * @param {?} propName
     * @param {?} expected
     * @param {?} got
     * @return {?}
     */
    function (propName, expected, got) {
        this.logger && LoggerUtils.logInvalidInput('StaticTextConfig', propName, got, expected, this.logger);
    };
    /**
     * Configuration object for StaticTextComponent, this class is immutable.
     */
    StaticTextConfig = __decorate([
        Immutable,
        Config({
            disableTruncate: {
                default: false,
                type: 'boolean'
            },
            disableAcceleratorKey: {
                default: false,
                type: 'boolean'
            },
            disableTranslate: {
                default: false,
                type: 'boolean'
            },
            tooltipConfig: {
                default: new TooltipConfig(),
                type: 'object',
                typeDisplayName: 'ITooltipConfig'
            },
            disableTooltip: {
                default: false,
                type: 'boolean'
            },
            suffix: {
                default: '',
                type: 'string'
            },
            textAlign: {
                default: TextAlign.Left,
                type: isTextAlign,
                typeDisplayName: 'TextAlign'
            },
            textAlignVertically: {
                default: TextAlignVertically.Start,
                type: isTextAlignVertically,
                typeDisplayName: 'TextAlignVertically'
            },
            cursorStyle: {
                default: undefined,
                type: isCursorStyleOrUndefined,
                typeDisplayName: 'CursorStyle'
            }
        }),
        __metadata("design:paramtypes", [Object, Object])
    ], StaticTextConfig);
    return StaticTextConfig;
}());
/**
 * RA WTUI static text component. Supports features such as truncation, translation, tooltip, or accelerator key.
 */
var StaticTextComponent = /** @class */ (function (_super) {
    __extends(StaticTextComponent, _super);
    //endregion
    //region Constructor and Life Cycle Hooks
    function StaticTextComponent(changeRef, ngControl, accSvc, translate, logger) {
        var _this = _super.call(this, ngControl) || this;
        _this.changeRef = changeRef;
        _this.accSvc = accSvc;
        _this.translate = translate;
        _this.logger = logger;
        _this._config = new StaticTextConfig(undefined, _this.logger);
        _this._value = '';
        _this._translateParams = {};
        _this._disabled = false;
        _this._color = '';
        /**
         * Gets emitted on accelerator key event.
         */
        _this.onAccelerator = new _angular_core.EventEmitter();
        /**
         * Gets emitted whenever overflow state changes.
         */
        _this.overflowChange = new _angular_core.EventEmitter();
        /**
         * Gets emitted whenever disabled state changes.
         */
        _this.disabledChange = new _angular_core.EventEmitter();
        //endregion
        //region Private Properties
        _this._translatedText = '';
        _this._tooltipText = '';
        _this._cls = '';
        _this._truncateConfig = new TruncateConfig();
        _this._prevSuffix = '';
        _this._flexAlign = '';
        _this.onChangeCallback = rxjs.noop;
        _this._componentName = 'StaticTextComponent';
        if (_this.translate) {
            _this.translate.onLangChange.subscribe(function (event) {
                _this.onLanguageChanged(event.lang);
            });
        }
        else {
            _this.translateOrUpdateText();
        }
        return _this;
    }
    Object.defineProperty(StaticTextComponent.prototype, "config", {
        get: /**
         * Stores configuration object, if changed, component will get updated.
         * \@default Config with default fields.
         * @return {?}
         */
        function () {
            return this._config;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (TypeUtils.isObject(val)) {
                this._config = new StaticTextConfig(val, this.logger);
            }
            else {
                this._config = new StaticTextConfig(undefined, this.logger);
                //log error to the console
                LoggerUtils.logInvalidInput(this._componentName, 'config', val, 'IStaticTextConfig', this.logger);
            }
            this.onConfigChanged();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StaticTextComponent.prototype, "value", {
        get: /**
         * Text to display or translation key.
         * \@default ' '
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (isValueType(val)) {
                this._value = val.toString();
            }
            else {
                this._value = '';
                //log error to the console
                LoggerUtils.logInvalidInput(this._componentName, 'value', val, 'string|number|boolean', this.logger);
            }
            this.translateOrUpdateText();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StaticTextComponent.prototype, "translateParams", {
        get: /**
         * Parameters for translation. If changed, translation will get updated.
         * \@default { }
         * @return {?}
         */
        function () {
            return this._translateParams;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (TypeUtils.isObject(val)) {
                this._translateParams = val;
            }
            else {
                this._translateParams = {};
                //log error to the console
                LoggerUtils.logInvalidInput(this._componentName, 'translateParams', val, 'object', this.logger);
            }
            this.translateOrUpdateText();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StaticTextComponent.prototype, "disabled", {
        get: /**
         * Disabling control will disable tooltip and accelerator key features also.
         * \@default false
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            var /** @type {?} */ previousValue = this._disabled;
            if (lodash.isBoolean(val)) {
                this._disabled = val;
            }
            else {
                this._disabled = false;
                //log error to the console
                LoggerUtils.logInvalidInput(this._componentName, 'disabled', val, 'boolean', this.logger);
            }
            this.setDisabledState(previousValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StaticTextComponent.prototype, "color", {
        get: /**
         * Defines font color, use '', 'primary', 'accent' or 'warn' here, or a custom value which will add class onto
         * text component.
         * \@default ' '.
         * @return {?}
         */
        function () {
            return this._color;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (lodash.isString(val)) {
                this._color = lodash.toLower(lodash.trim(val));
            }
            else {
                this._color = '';
                //log error to the console
                LoggerUtils.logInvalidInput(this._componentName, 'color', val, 'string', this.logger);
            }
            this.updateClass();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StaticTextComponent.prototype, "isMultiLine", {
        get: /**
         * This attribute defines whenever is allowed multi line
         * @return {?}
         */
        function () {
            return this._config.allowMultiline;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StaticTextComponent.prototype, "lineHeight", {
        //endregion
        //region Public Properties
        /**
         * Gets line height of the text.
         */
        get: /**
         * Gets line height of the text.
         * @return {?}
         */
        function () {
            return this._truncate.lineHeight;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    StaticTextComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.onConfigChanged();
    };
    //endregion
    //region ControlValueAccessor
    /**
     * @param {?} value
     * @return {?}
     */
    StaticTextComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (lodash.isNil(value) || !isValueType(value)) {
            LoggerUtils.logInvalidInput(this._componentName, 'ngModel', value, 'string|number|boolean', this.logger);
            value = '';
        }
        if (value !== this.value) {
            this.value = value;
            this.translateOrUpdateText();
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    StaticTextComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChangeCallback = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    StaticTextComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        rxjs.noop();
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    StaticTextComponent.prototype.setDisabledState = /**
     * @param {?} disabled
     * @return {?}
     */
    function (disabled) {
        if (disabled !== this._disabled) {
            this.disabledChange.next(this._disabled);
            this.updateClass();
            // If we don't have reference to TruncateDirective, component hasn't been initialized yet, so it's not necessary
            // to fire this event.
            if (this._disabled && this._truncate) {
                this._truncate._raiseAcceleratorOff();
            }
            this._style = this.getStyle(this.config);
            this.changeRef.markForCheck();
        }
    };
    //endregion
    //region Public Methods
    /**
     * Call this to explicitly recalculate truncation, only relevant for multi-line truncation.
     */
    /**
     * Call this to explicitly recalculate truncation, only relevant for multi-line truncation.
     * @return {?}
     */
    StaticTextComponent.prototype.refreshTruncate = /**
     * Call this to explicitly recalculate truncation, only relevant for multi-line truncation.
     * @return {?}
     */
    function () {
        this._truncate.forceRefresh();
    };
    /**
     * Noop implementation of focus.
     * Made to satisfy the ControlValueAccessorBase abstract method.
     */
    /**
     * Noop implementation of focus.
     * Made to satisfy the ControlValueAccessorBase abstract method.
     * @return {?}
     */
    StaticTextComponent.prototype.focus = /**
     * Noop implementation of focus.
     * Made to satisfy the ControlValueAccessorBase abstract method.
     * @return {?}
     */
    function () {
        rxjs.noop();
    };
    //endregion
    //region Private Methods
    /**
     * @param {?} event
     * @return {?}
     */
    StaticTextComponent.prototype._onTooltipBeforeShow = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.result = this._truncate.isOverflown() && !this.disabled && !this.config.disableTooltip;
    };
    /**
     * @return {?}
     */
    StaticTextComponent.prototype._onAccelerator = /**
     * @return {?}
     */
    function () {
        !this.disabled && this.onAccelerator.emit();
    };
    /**
     * @param {?} isOverflown
     * @return {?}
     */
    StaticTextComponent.prototype._onOverflowChanged = /**
     * @param {?} isOverflown
     * @return {?}
     */
    function (isOverflown) {
        this.overflowChange.emit(isOverflown);
    };
    /**
     * @return {?}
     */
    StaticTextComponent.prototype.onConfigChanged = /**
     * @return {?}
     */
    function () {
        this.updateClass();
        this._style = this.getStyle(this.config);
        this.updateTruncateConfig();
        // If suffix has changed we need to update text
        if (this._prevSuffix !== this.config.suffix) {
            this.translateOrUpdateText();
            this._prevSuffix = /** @type {?} */ (this.config.suffix);
        }
        if (!lodash.isEmpty(this.value)) {
            this._tooltipText = this._removeAcceleratorAmpersandIfNeeded(this._translatedText);
        }
        this._flexAlign = (/** @type {?} */ (this._config.textAlignVertically)).toLowerCase();
    };
    /**
     * @return {?}
     */
    StaticTextComponent.prototype.onTextChanged = /**
     * @return {?}
     */
    function () {
        if (lodash.isEmpty(this.value)) {
            this._tooltipText = '';
            this.changeRef.markForCheck();
            return;
        }
        this._tooltipText = this._removeAcceleratorAmpersandIfNeeded(this._translatedText);
        if (this.config.suffix !== '') {
            this._translatedText = this._translatedText + this.config.suffix;
        }
        this.changeRef.markForCheck();
    };
    /**
     * @param {?} val
     * @return {?}
     */
    StaticTextComponent.prototype._removeAcceleratorAmpersandIfNeeded = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        return (this.config && this.config.disableAcceleratorKey) || (this.accSvc && !this.accSvc.isEnabled) ?
            val : AcceleratorUtils.parseText(val).text;
    };
    /**
     * @param {?} lang
     * @return {?}
     */
    StaticTextComponent.prototype.onLanguageChanged = /**
     * @param {?} lang
     * @return {?}
     */
    function (lang) {
        this.translateOrUpdateText();
    };
    /**
     * @return {?}
     */
    StaticTextComponent.prototype.translateOrUpdateText = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.shouldTranslate()) {
            this.translate.get(/** @type {?} */ (this.value), this.translateParams).subscribe(function (res) {
                _this._translatedText = res;
                _this.onTextChanged();
            });
        }
        else {
            this._translatedText = /** @type {?} */ (this.value);
            this.onTextChanged();
        }
    };
    /**
     * @return {?}
     */
    StaticTextComponent.prototype.updateClass = /**
     * @return {?}
     */
    function () {
        this._cls = this.config.enableScrollBar ? 'static-text static-text-scrollbar ' + this.color : 'static-text ' + this.color;
    };
    /**
     * @param {?} config
     * @return {?}
     */
    StaticTextComponent.prototype.getStyle = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        // tslint:disable-next-line no-any
        var /** @type {?} */ style$$1 = {};
        // Handle scrollbar
        style$$1.overflowY = config.enableScrollBar ? 'auto' : 'hidden';
        // Handle text align
        style$$1.textAlign = (/** @type {?} */ (config.textAlign)).toLowerCase();
        // Fill parent container
        style$$1.width = '100%';
        style$$1.height = config.allowMultiline ? '100%' : 'auto';
        style$$1.maxHeight = 'inherit';
        style$$1.cursor = this._disabled ? undefined : this.config.cursorStyle;
        return style$$1;
    };
    /**
     * @return {?}
     */
    StaticTextComponent.prototype.shouldTranslate = /**
     * @return {?}
     */
    function () {
        return ((/** @type {?} */ (this.value)).trim() !== '' && this.translate && !this.config.disableTranslate);
    };
    /**
     * @return {?}
     */
    StaticTextComponent.prototype.updateTruncateConfig = /**
     * @return {?}
     */
    function () {
        this._truncateConfig = new TruncateConfig({
            allowMultiline: this.config.allowMultiline,
            disabled: this.config.enableScrollBar || this.config.disableTruncate,
            enableAcceleratorKey: (this.accSvc ? !this.config.disableAcceleratorKey : false)
        });
    };
    StaticTextComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ra-ui-static-text',
                    template: "<ng-container *ngIf=\"isMultiLine;then isMultiLineTemplate else isNotMultiLineTemplate\"></ng-container><ng-template #isNotMultiLineTemplate><div #view [ngStyle]=\"_style\" [ngClass]=\"_cls\" [attr.disabled]=\"disabled ? true : null\" [raUiTooltip]=\"_tooltipText\" [tooltipConfig]=\"config.tooltipConfig\" (tooltipBeforeShow)=\"_onTooltipBeforeShow($event)\" [tooltipDisableTranslate]=\"true\" [raUiTruncate]=\"_translatedText\" [truncateSkipAccelerator]=\"disabled\" (onTruncateAccelerator)=\"_onAccelerator()\" (truncateOverflowChange)=\"_onOverflowChanged($event)\" [truncateConfig]=\"_truncateConfig\"></div></ng-template><ng-template #isMultiLineTemplate><div #view fxLayout=\"column\" [fxLayoutAlign]=\"_flexAlign\" [ngStyle]=\"_style\" [ngClass]=\"_cls\" [attr.disabled]=\"disabled ? true : null\" [raUiTooltip]=\"_tooltipText\" [tooltipConfig]=\"config.tooltipConfig\" (tooltipBeforeShow)=\"_onTooltipBeforeShow($event)\" [tooltipDisableTranslate]=\"true\" [raUiTruncate]=\"_translatedText\" [truncateSkipAccelerator]=\"disabled\" (onTruncateAccelerator)=\"_onAccelerator()\" (truncateOverflowChange)=\"_onOverflowChanged($event)\" [truncateConfig]=\"_truncateConfig\"></div></ng-template>",
                    styles: ["ra-ui-static-text .static-text{overflow:hidden;position:relative;pointer-events:all;cursor:text;-webkit-text-size-adjust:none}ra-ui-static-text .static-text[disabled]{cursor:default}ra-ui-static-text .static-text.static-text-scrollbar{border-radius:2px;background-color:rgba(0,0,0,.05)}"],
                    changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    encapsulation: _angular_core.ViewEncapsulation.None
                },] },
    ];
    //endregion
    /** @nocollapse */
    StaticTextComponent.ctorParameters = function () { return [
        { type: _angular_core.ChangeDetectorRef, },
        { type: _angular_forms.NgControl, decorators: [{ type: _angular_core.Self }, { type: _angular_core.Optional },] },
        { type: AcceleratorService, decorators: [{ type: _angular_core.Optional },] },
        { type: _ngxTranslate_core.TranslateService, decorators: [{ type: _angular_core.Optional },] },
        { type: undefined, decorators: [{ type: _angular_core.Inject, args: [LOGGER,] },] },
    ]; };
    StaticTextComponent.propDecorators = {
        "config": [{ type: _angular_core.Input },],
        "value": [{ type: _angular_core.Input },],
        "translateParams": [{ type: _angular_core.Input },],
        "disabled": [{ type: _angular_core.Input },],
        "color": [{ type: _angular_core.Input },],
        "onAccelerator": [{ type: _angular_core.Output },],
        "overflowChange": [{ type: _angular_core.Output },],
        "disabledChange": [{ type: _angular_core.Output },],
        "_truncate": [{ type: _angular_core.ViewChild, args: [TruncateDirective,] },],
        "_view": [{ type: _angular_core.ViewChild, args: ['view',] },],
        "isMultiLine": [{ type: _angular_core.HostBinding, args: ['class.multi-line',] },],
    };
    return StaticTextComponent;
}(ControlValueAccessorBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Available button types.
 */
var ButtonStyle = strEnum([
    'Basic',
    'Raised',
    'Fab',
    'MiniFab',
    'Icon',
    'IconWithLabel'
]);
/** @enum {string} */
var ButtonType = {
    Button: 'button',
    Submit: 'submit',
    Reset: 'reset',
};
var MAT_COLORS = ['primary', 'accent', 'warn'];
/**
 * @record
 */

/**
 * A method that checks whether a value is of type ButtonStyle.
 * @param {?} val
 * @return {?}
 */
function isButtonStyle(val) {
    return val === ButtonStyle.Basic
        || val === ButtonStyle.Raised
        || val === ButtonStyle.Fab
        || val === ButtonStyle.MiniFab
        || val === ButtonStyle.Icon
        || val === ButtonStyle.IconWithLabel;
}
/**
 * A method that checks whether a value is of type ButtonType.
 * @param {?} val
 * @return {?}
 */
function isButtonType(val) {
    return val === ButtonType.Button || val === ButtonType.Reset || val === ButtonType.Submit;
}
/**
 * Configuration object for ButtonConfig, this class is immutable.
 */
var ButtonConfig = /** @class */ (function () {
    function ButtonConfig(options, logger) {
        if (options === void 0) { options = /** @type {?} */ ({}); }
        this.logger = logger;
        if (!lodash.isBoolean(options.disableTranslate)) {
            this.onInvalidType('disableTranslate', 'boolean', options.disableTranslate);
            this.disableTranslate = false;
        }
        else {
            this.disableTranslate = options.disableTranslate;
        }
        if (!lodash.isBoolean(options.disableAcceleratorKey)) {
            this.onInvalidType('disableAcceleratorKey', 'boolean', options.disableAcceleratorKey);
            this.disableAcceleratorKey = false;
        }
        else {
            this.disableAcceleratorKey = options.disableAcceleratorKey;
        }
        if (!TypeUtils.isObject(options.staticTextConfig)) {
            this.onInvalidType('staticTextConfig', 'IStaticTextConfig', options.staticTextConfig);
            this.staticTextConfig = new StaticTextConfig({
                textAlign: TextAlign.Center,
                disableAcceleratorKey: this.disableAcceleratorKey,
                disableTranslate: this.disableTranslate,
                cursorStyle: CursorStyle.Pointer,
                allowMultiline: false,
                suffix: '',
                textAlignVertically: TextAlignVertically.Center,
                tooltipConfig: new TooltipConfig(),
                disableTooltip: true,
                enableScrollBar: false
            });
        }
        else {
            this.staticTextConfig = new StaticTextConfig({
                textAlign: (options.staticTextConfig && options.staticTextConfig.textAlign) || TextAlign.Center,
                disableAcceleratorKey: this.disableAcceleratorKey,
                disableTranslate: this.disableTranslate,
                cursorStyle: (options.staticTextConfig && options.staticTextConfig.cursorStyle) || CursorStyle.Pointer,
                allowMultiline: (options.staticTextConfig && options.staticTextConfig.allowMultiline) || false,
                suffix: (options.staticTextConfig && options.staticTextConfig.suffix) || '',
                textAlignVertically: (options.staticTextConfig &&
                    options.staticTextConfig.textAlignVertically) || TextAlignVertically.Center,
                tooltipConfig: new TooltipConfig(),
                disableTooltip: true,
                enableScrollBar: false
            });
        }
    }
    /**
     * A method called when a field with incorrect type is passed to the config.
     */
    // tslint:disable-next-line:no-any
    /**
     * A method called when a field with incorrect type is passed to the config.
     * @param {?} propName
     * @param {?} expected
     * @param {?} got
     * @return {?}
     */
    ButtonConfig.prototype.onInvalidType = /**
     * A method called when a field with incorrect type is passed to the config.
     * @param {?} propName
     * @param {?} expected
     * @param {?} got
     * @return {?}
     */
    function (propName, expected, got) {
        this.logger && LoggerUtils.logInvalidInput('ButtonConfig', propName, got, expected, this.logger);
    };
    /**
     * Configuration object for ButtonConfig, this class is immutable.
     */
    ButtonConfig = __decorate([
        Immutable,
        Config({
            buttonStyle: {
                default: ButtonStyle.Basic,
                type: isButtonStyle,
                typeDisplayName: 'ButtonStyle'
            },
            buttonType: {
                default: ButtonType.Button,
                type: isButtonType,
                typeDisplayName: 'ButtonType'
            },
            canOverflow: {
                default: false,
                type: 'boolean'
            },
            disableTooltip: {
                default: false,
                type: 'boolean'
            },
            enableImmediateArrow: {
                default: false,
                type: 'boolean'
            },
            fillParent: {
                default: false,
                type: 'boolean'
            },
            tabIndex: {
                default: undefined,
                type: 'number'
            },
            tooltipConfig: {
                default: new TooltipConfig({ position: 'Top' }),
                type: 'object',
                typeDisplayName: 'ITooltipConfig'
            }
        }),
        __metadata("design:paramtypes", [Object, Object])
    ], ButtonConfig);
    return ButtonConfig;
}());
/**
 * RA WTUI button component.
 */
var ButtonComponent = /** @class */ (function () {
    //endregion
    function ButtonComponent(logger) {
        this.logger = logger;
        /**
         * A button configuration
         */
        this._config = new ButtonConfig(undefined, this.logger);
        /**
         * A parameter defining the button color.
         * Available options: primary, accent, warn.
         */
        this._color = '';
        this._label = '';
        this._disabled = false;
        /**
         * A parameter defining the name of an icon.
         * \@default ' '
         */
        this._iconName = '';
        this._tooltipText = '';
        this._translateParams = {};
        /**
         * A click event emitter.
         */
        this.onClick = new _angular_core.EventEmitter();
        /**
         * A double-click event emitter.
         */
        this.onDoubleClick = new _angular_core.EventEmitter();
        /**
         * A focus change event emitter.
         */
        this.focusChange = new _angular_core.EventEmitter();
        /**
         * A mouse down event emitter.
         */
        this.pressStart = new _angular_core.EventEmitter();
        /**
         * A mouse up event emitter.
         */
        this.pressEnd = new _angular_core.EventEmitter();
        /**
         * A flag for fill parent feature.
         */
        this._shouldFillParent = false;
        /**
         * A property storing the button style.
         * \@default ButtonStyle.Basic
         */
        this.ButtonStyle = ButtonStyle;
        /**
         * A flag for default color when none of the three basic options is set.
         */
        this._isDefaultColor = true;
        /**
         * A parameter determining whether the immediate commit arrow should be displayed or not.
         */
        this._displayImmediateArrow = false;
        /**
         * A parameter determining whether a (mini)fab button should display icon or label.
         */
        this._displayIconInFab = false;
        /**
         * A parameter defining whether a button can overflow or not.
         */
        this._canOverflow = false;
        /**
         * Flag for checking if the mouse down event occurred.
         */
        this.mouseDownOccurred = false;
        this._longPress = {
            longPressInProgress: false
        };
        this._showTooltip = false;
        this._tooltipMessage = '';
        /**
         * Name of the component.
         */
        this._componentName = 'ButtonComponent';
    }
    Object.defineProperty(ButtonComponent.prototype, "config", {
        get: /**
         * A parameter defining the configuration of the button.
         * \@default Config with default fields.
         * @return {?}
         */
        function () {
            return this._config;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (TypeUtils.isObject(val)) {
                this._config = new ButtonConfig(val, this.logger);
                this._shouldFillParent = this._config.fillParent || false;
            }
            else {
                this._config = new ButtonConfig(undefined, this.logger);
                this._shouldFillParent = false;
                //log error to the console
                LoggerUtils.logInvalidInput(this._componentName, 'config', val, 'IButtonConfig', this.logger);
            }
            if (!lodash.isEmpty(this._label)) {
                this._updateTooltipMessage(this._label);
            }
            this._displayImmediateArrow = (this._config.enableImmediateArrow &&
                (this._config.buttonStyle === ButtonStyle.Raised || this._config.buttonStyle === ButtonStyle.Basic)) || false;
            this._canOverflow = this._config.canOverflow;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonComponent.prototype, "color", {
        get: /**
         * A parameter defining the button color.
         * Available options: primary, accent, warn.
         * Button gets default color when no color is specified.
         * \@default ' '
         * @return {?}
         */
        function () {
            return this._color;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            var /** @type {?} */ sanitizedValue = '';
            this._color = '';
            //check input value is string
            if (lodash.isString(val)) {
                sanitizedValue = lodash.toLower(lodash.trim(val));
                this._isDefaultColor = !lodash.includes(MAT_COLORS, sanitizedValue);
                this._isDefaultColor ?
                    LoggerUtils.logInvalidMatchValue(this._componentName, 'color', val, MAT_COLORS, this.logger) :
                    this._color = sanitizedValue;
            }
            else {
                //log error to the console
                this._isDefaultColor = true;
                LoggerUtils.logInvalidInput(this._componentName, 'color', val, 'string', this.logger);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonComponent.prototype, "label", {
        get: /**
         * A parameter defining the button's label.
         * This parameter does not matter when the button's type is mat-icon-button.
         * \@default ' '
         * @return {?}
         */
        function () {
            return this._label;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (lodash.isString(val)) {
                this._label = val;
                this._updateTooltipMessage(val);
            }
            else {
                this._label = '';
                //log error to the console
                LoggerUtils.logInvalidInput(this._componentName, 'label', val, 'string', this.logger);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonComponent.prototype, "disabled", {
        get: /**
         * A parameter defining whether the button is disabled or enabled.
         * False by default.
         * \@default false
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (lodash.isBoolean(val)) {
                this._disabled = val;
            }
            else {
                this._disabled = false;
                //log error to the console
                LoggerUtils.logInvalidInput(this._componentName, 'disabled', val, 'boolean', this.logger);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonComponent.prototype, "iconName", {
        get: /**
         * @return {?}
         */
        function () {
            return this._iconName;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (lodash.isString(val)) {
                this._iconName = this._addIconPrefix(lodash.toLower(lodash.trim(val)));
            }
            else {
                this._iconName = '';
                //log error to the console
                LoggerUtils.logInvalidInput(this._componentName, 'iconName', val, 'string', this.logger);
            }
            this._displayIconInFab = !lodash.isEmpty(this._iconName);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonComponent.prototype, "tooltipText", {
        get: /**
         * A parameter defining the text that should be displayed in the button's tooltip.
         * If not specified, no tooltip is shown except truncated labels. In such cases, the label is shown as tooltip.
         * \@default ' '
         * @return {?}
         */
        function () {
            return this._tooltipText;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (lodash.isString(val)) {
                this._tooltipText = val;
            }
            else {
                this._tooltipText = '';
                //log error to the console
                LoggerUtils.logInvalidInput(this._componentName, 'tooltipText', val, 'string', this.logger);
            }
            if (lodash.isEmpty(val)) {
                this._showTooltip = false;
                this._tooltipMessage = this._removeAcceleratorAmpersandIfNeeded(this._label);
            }
            else {
                this._showTooltip = true;
                this._tooltipMessage = this._tooltipText;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonComponent.prototype, "translateParams", {
        get: /**
         * Parameters for translation, these are optional. If changed, translation will get updated.
         * \@default { }
         * @return {?}
         */
        function () {
            return this._translateParams;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (TypeUtils.isObject(val)) {
                this._translateParams = val;
            }
            else {
                this._translateParams = {};
                //log error to the console
                LoggerUtils.logInvalidInput('ButtonComponent', 'translateParams', val, 'object', this.logger);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * A method handling ag-Grid parameters
     */
    // tslint:disable-next-line:no-any
    /**
     * A method handling ag-Grid parameters
     * @param {?} params
     * @return {?}
     */
    ButtonComponent.prototype.agInit = /**
     * A method handling ag-Grid parameters
     * @param {?} params
     * @return {?}
     */
    function (params) {
        this._agGridParams = params;
        if (params.value) {
            if (params.value.hasOwnProperty('props')) {
                for (var /** @type {?} */ prop in params.value.props) {
                    if (params.value.props.hasOwnProperty(prop)) {
                        this[prop] = params.value.props[prop];
                    }
                }
            }
            if (params.value.hasOwnProperty('onAgInit') && typeof params.value.onAgInit === 'function') {
                params.value.onAgInit(this, params.value);
            }
        }
    };
    /**
     * A function that adds 'ra-ide-' prefix to the icon name if needed.
     */
    /**
     * A function that adds 'ra-ide-' prefix to the icon name if needed.
     * @param {?} icon
     * @return {?}
     */
    ButtonComponent.prototype._addIconPrefix = /**
     * A function that adds 'ra-ide-' prefix to the icon name if needed.
     * @param {?} icon
     * @return {?}
     */
    function (icon) {
        if (lodash.isEmpty(icon)) {
            return '';
        }
        return icon.indexOf('ra-icon-') === -1 ? 'ra-icon-' + icon : icon;
    };
    /**
     * A function that emits an event after doubleclicking the button.
     */
    /**
     * A function that emits an event after doubleclicking the button.
     * @param {?} dblClck
     * @return {?}
     */
    ButtonComponent.prototype._whenDoubleClicked = /**
     * A function that emits an event after doubleclicking the button.
     * @param {?} dblClck
     * @return {?}
     */
    function (dblClck) {
        if (!this.disabled) {
            this.onDoubleClick.emit(dblClck);
        }
    };
    /**
     * A function that focuses the button.
     * @return {?}
     */
    ButtonComponent.prototype.focus = /**
     * A function that focuses the button.
     * @return {?}
     */
    function () {
        if (!this.disabled) {
            this.innerButton.focus();
        }
    };
    /**
     * @param {?} ev
     * @return {?}
     */
    ButtonComponent.prototype._onBlurEvent = /**
     * @param {?} ev
     * @return {?}
     */
    function (ev) {
        if (!this.disabled) {
            this.focusChange.emit(false);
            this.innerButton._elementRef.nativeElement.blur();
        }
    };
    /**
     * @param {?} ev
     * @return {?}
     */
    ButtonComponent.prototype._onFocusEvent = /**
     * @param {?} ev
     * @return {?}
     */
    function (ev) {
        if (!this.disabled) {
            this.focusChange.emit(true);
        }
    };
    /**
     * @param {?} ev
     * @return {?}
     */
    ButtonComponent.prototype._onMouseDown = /**
     * @param {?} ev
     * @return {?}
     */
    function (ev) {
        if (this.disabled || ev.button !== 0) {
            return;
        }
        this.pressStart.emit(ev);
        this.mouseDownOccurred = true;
    };
    /**
     * @param {?} ev
     * @return {?}
     */
    ButtonComponent.prototype._onMouseUp = /**
     * @param {?} ev
     * @return {?}
     */
    function (ev) {
        if (this.disabled || ev.button !== 0) {
            return;
        }
        this.pressEnd.emit(ev);
        if (this.mouseDownOccurred) {
            this.onClick.emit(ev);
            this.mouseDownOccurred = false;
        }
    };
    /**
     * @param {?} ev
     * @return {?}
     */
    ButtonComponent.prototype._onKeyDown = /**
     * @param {?} ev
     * @return {?}
     */
    function (ev) {
        if (this.disabled || this._longPress.longPressInProgress) {
            return;
        }
        if (ev.keyCode === KeyCode.SPACE || ev.keyCode === KeyCode.ENTER) {
            this.pressStart.emit(ev);
            this._longPress = {
                longPressInProgress: true,
                keyCode: ev.keyCode
            };
        }
    };
    /**
     * @param {?} ev
     * @return {?}
     */
    ButtonComponent.prototype._onKeyUp = /**
     * @param {?} ev
     * @return {?}
     */
    function (ev) {
        if (this.disabled || this._longPress.keyCode !== ev.keyCode) {
            return;
        }
        if (ev.keyCode === KeyCode.SPACE || ev.keyCode === KeyCode.ENTER) {
            this.pressEnd.emit(ev);
            this.onClick.emit(ev);
            this._longPress = {
                longPressInProgress: false
            };
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ButtonComponent.prototype._onTooltipBeforeShow = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var /** @type {?} */ overflown = !lodash.isNil(this.staticTextRef) ? this.staticTextRef._truncate.isOverflown() : false;
        event.result = (overflown || this._showTooltip) && !this.disabled
            && !this._config.disableTooltip;
    };
    /**
     * @param {?} text
     * @return {?}
     */
    ButtonComponent.prototype._removeAcceleratorAmpersandIfNeeded = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        return this._config.disableAcceleratorKey ? text : AcceleratorUtils.parseText(text).text;
    };
    /**
     * @param {?} text
     * @return {?}
     */
    ButtonComponent.prototype._updateTooltipMessage = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        if (lodash.isEmpty(this._tooltipText)) {
            this._tooltipMessage = this._removeAcceleratorAmpersandIfNeeded(text);
            this._showTooltip = false;
        }
    };
    ButtonComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ra-ui-button',
                    template: "<span [ngSwitch]=\"_config.buttonStyle\"><button *ngSwitchCase=\"ButtonStyle.Raised\" mat-raised-button (dblclick)=\"_whenDoubleClicked($event)\" [color]=\"color\" [disabled]=\"disabled\" [ngClass]=\"{ 'is-disabled': disabled, 'fill-parent': _config.fillParent, 'immediate-arrow': _config.enableImmediateArrow, 'default-color': _isDefaultColor, 'can-overflow': _canOverflow, 'ra-ui-button': true}\" [tabindex]=\"_config.tabIndex\" (focus)=\"_onFocusEvent($event)\" (blur)=\"_onBlurEvent($event)\" (mousedown)=\"_onMouseDown($event)\" (mouseup)=\"_onMouseUp($event)\" (keydown)=\"_onKeyDown($event)\" (keyup)=\"_onKeyUp($event)\" [raUiTooltip]=\"_tooltipMessage\" [tooltipConfig]=\"_config.tooltipConfig\" [tooltipDisabled]=\"_config.disableTooltip\" (tooltipBeforeShow)=\"_onTooltipBeforeShow($event)\" [type]=\"_config.buttonType\" #innerButton><div class=\"static-text-wrapper\"><ra-ui-static-text [color]=\"color\" (onAccelerator)=\"focus()\" [disabled]=\"disabled\" [config]=\"config.staticTextConfig\" [translateParams]=\"_translateParams\" [value]=\"label\" #staticText></ra-ui-static-text></div></button> <button *ngSwitchCase=\"ButtonStyle.Basic\" mat-button (dblclick)=\"_whenDoubleClicked($event)\" [color]=\"color\" [disabled]=\"disabled\" [ngClass]=\"{ 'is-disabled': disabled, 'fill-parent': _config.fillParent, 'immediate-arrow': _config.enableImmediateArrow, 'default-color': _isDefaultColor, 'can-overflow': _canOverflow, 'ra-ui-button': true}\" [tabindex]=\"_config.tabIndex\" (focus)=\"_onFocusEvent($event)\" (blur)=\"_onBlurEvent($event)\" (mousedown)=\"_onMouseDown($event)\" (mouseup)=\"_onMouseUp($event)\" (keydown)=\"_onKeyDown($event)\" (keyup)=\"_onKeyUp($event)\" [raUiTooltip]=\"_tooltipMessage\" [tooltipConfig]=\"_config.tooltipConfig\" [tooltipDisabled]=\"_config.disableTooltip\" (tooltipBeforeShow)=\"_onTooltipBeforeShow($event)\" [type]=\"_config.buttonType\" #innerButton><div class=\"static-text-wrapper\"><ra-ui-static-text (onAccelerator)=\"focus()\" [disabled]=\"disabled\" [config]=\"config.staticTextConfig\" [translateParams]=\"_translateParams\" [value]=\"label\" #staticText></ra-ui-static-text></div></button> <button *ngSwitchCase=\"ButtonStyle.Fab\" mat-fab (dblclick)=\"_whenDoubleClicked($event)\" [color]=\"color\" [disabled]=\"disabled\" [ngClass]=\"{ 'is-disabled': disabled, 'default-color': _isDefaultColor, 'ra-ui-button': true}\" (focus)=\"_onFocusEvent($event)\" (blur)=\"_onBlurEvent($event)\" (mousedown)=\"_onMouseDown($event)\" (mouseup)=\"_onMouseUp($event)\" (keydown)=\"_onKeyDown($event)\" (keyup)=\"_onKeyUp($event)\" [tabindex]=\"_config.tabIndex\" [raUiTooltip]=\"_tooltipMessage\" [tooltipConfig]=\"_config.tooltipConfig\" [tooltipDisabled]=\"_config.disableTooltip\" (tooltipBeforeShow)=\"_onTooltipBeforeShow($event)\" [type]=\"_config.buttonType\" #innerButton><mat-icon *ngIf=\"_displayIconInFab; else enableFabLabel\" [class]=\"_iconName\"></mat-icon><ng-template #enableFabLabel><div class=\"static-text-wrapper\"><ra-ui-static-text [color]=\"color\" (onAccelerator)=\"focus()\" [disabled]=\"disabled\" [config]=\"config.staticTextConfig\" [translateParams]=\"_translateParams\" [value]=\"label\" #staticText></ra-ui-static-text></div></ng-template></button> <button *ngSwitchCase=\"ButtonStyle.MiniFab\" mat-mini-fab (dblclick)=\"_whenDoubleClicked($event)\" [color]=\"color\" [disabled]=\"disabled\" [ngClass]=\"{ 'is-disabled': disabled, 'default-color': _isDefaultColor, 'ra-ui-button': true}\" (focus)=\"_onFocusEvent($event)\" (blur)=\"_onBlurEvent($event)\" (mousedown)=\"_onMouseDown($event)\" (mouseup)=\"_onMouseUp($event)\" (keydown)=\"_onKeyDown($event)\" (keyup)=\"_onKeyUp($event)\" [tabindex]=\"_config.tabIndex\" [raUiTooltip]=\"_tooltipMessage\" [tooltipConfig]=\"_config.tooltipConfig\" [tooltipDisabled]=\"_config.disableTooltip\" (tooltipBeforeShow)=\"_onTooltipBeforeShow($event)\" [type]=\"_config.buttonType\" #innerButton><mat-icon *ngIf=\"_displayIconInFab; else enableMiniFabLabel\" [class]=\"_iconName\"></mat-icon><ng-template #enableMiniFabLabel><div class=\"static-text-wrapper\"><ra-ui-static-text [color]=\"color\" (onAccelerator)=\"focus()\" [disabled]=\"disabled\" [config]=\"config.staticTextConfig\" [translateParams]=\"_translateParams\" [value]=\"label\" #staticText></ra-ui-static-text></div></ng-template></button> <button *ngSwitchCase=\"ButtonStyle.Icon\" mat-icon-button (dblclick)=\"_whenDoubleClicked($event)\" [color]=\"color\" [disabled]=\"disabled\" [ngClass]=\"{ 'is-disabled': disabled, 'default-color': _isDefaultColor, 'ra-ui-button': true}\" [tabindex]=\"_config.tabIndex\" (focus)=\"_onFocusEvent($event)\" (blur)=\"_onBlurEvent($event)\" (mousedown)=\"_onMouseDown($event)\" (keydown)=\"_onKeyDown($event)\" (keyup)=\"_onKeyUp($event)\" (mouseup)=\"_onMouseUp($event)\" [raUiTooltip]=\"_tooltipMessage\" [tooltipConfig]=\"_config.tooltipConfig\" [tooltipDisabled]=\"_config.disableTooltip\" (tooltipBeforeShow)=\"_onTooltipBeforeShow($event)\" [type]=\"_config.buttonType\" #innerButton><mat-icon [class]=\"_iconName\"></mat-icon></button> <button *ngSwitchCase=\"ButtonStyle.IconWithLabel\" mat-button (dblclick)=\"_whenDoubleClicked($event)\" [color]=\"color\" [disabled]=\"disabled\" [ngClass]=\"{ 'is-disabled': disabled, 'fill-parent': _config.fillParent, 'default-color': _isDefaultColor, 'ra-ui-button': true}\" class=\"ra-ui-icon-with-text-button\" [tabindex]=\"_config.tabIndex\" (focus)=\"_onFocusEvent($event)\" (blur)=\"_onBlurEvent($event)\" (mousedown)=\"_onMouseDown($event)\" (mouseup)=\"_onMouseUp($event)\" (keydown)=\"_onKeyDown($event)\" (keyup)=\"_onKeyUp($event)\" [raUiTooltip]=\"_tooltipMessage\" [tooltipConfig]=\"_config.tooltipConfig\" [tooltipDisabled]=\"_config.disableTooltip\" (tooltipBeforeShow)=\"_onTooltipBeforeShow($event)\" [type]=\"_config.buttonType\" #innerButton><mat-icon [class]=\"_iconName\"></mat-icon><div class=\"static-text-wrapper\"><ra-ui-static-text (onAccelerator)=\"focus()\" [disabled]=\"disabled\" [config]=\"config.staticTextConfig\" [translateParams]=\"_translateParams\" [value]=\"label\" #staticText></ra-ui-static-text></div></button></span><ra-ui-immediate-arrow *ngIf=\"_displayImmediateArrow\" class=\"button-immediate-arrow\"></ra-ui-immediate-arrow>",
                    styles: ["ra-ui-button,ra-ui-button button{display:inline-block}ra-ui-button button:not(.can-overflow),ra-ui-button:not(.can-overflow){max-width:100%}ra-ui-button button.fill-parent,ra-ui-button.fill-parent{width:100%}ra-ui-button button.fill-parent.immediate-arrow,ra-ui-button.fill-parent.immediate-arrow{width:calc(100% - 17px)}ra-ui-button button.ra-ui-icon-with-text-button.mat-button,ra-ui-button.ra-ui-icon-with-text-button.mat-button{min-width:32px;padding-right:16px;padding-left:16px}ra-ui-button.fill-parent{width:100%}ra-ui-button.fill-parent.immediate-arrow{width:calc(100% - 17px)}ra-ui-button .mat-fab mat-icon{font-size:32px}ra-ui-button .mat-mini-fab mat-icon{font-size:20px}ra-ui-button .mat-icon-button mat-icon{font-size:20px}"],
                    changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    encapsulation: _angular_core.ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    ButtonComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core.Inject, args: [LOGGER,] },] },
    ]; };
    ButtonComponent.propDecorators = {
        "config": [{ type: _angular_core.Input },],
        "color": [{ type: _angular_core.Input },],
        "label": [{ type: _angular_core.Input },],
        "disabled": [{ type: _angular_core.Input },],
        "iconName": [{ type: _angular_core.Input },],
        "tooltipText": [{ type: _angular_core.Input },],
        "translateParams": [{ type: _angular_core.Input },],
        "onClick": [{ type: _angular_core.Output },],
        "onDoubleClick": [{ type: _angular_core.Output },],
        "focusChange": [{ type: _angular_core.Output },],
        "pressStart": [{ type: _angular_core.Output },],
        "pressEnd": [{ type: _angular_core.Output },],
        "innerButton": [{ type: _angular_core.ViewChild, args: ['innerButton',] },],
        "staticTextRef": [{ type: _angular_core.ViewChild, args: ['staticText',] },],
        "_shouldFillParent": [{ type: _angular_core.HostBinding, args: ['class.fill-parent',] },],
    };
    return ButtonComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * RA WTUI immediate commit arrow component. It is used to mark components which send data to backend immediately after change.
 * Components which support displaying the immediate arrow provide enableImmediateArrow field in their config.
 * Set this property to true to enable the feature.
 */
var ImmediateArrowComponent = /** @class */ (function () {
    function ImmediateArrowComponent() {
    }
    ImmediateArrowComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ra-ui-immediate-arrow',
                    template: "<span><mat-icon class=\"ra-icon-immediate-commit\"></mat-icon></span>",
                    styles: ["ra-ui-immediate-arrow{display:inline-block;width:17px;text-align:right;pointer-events:all;cursor:inherit}ra-ui-immediate-arrow mat-icon.mat-icon.ra-icon-immediate-commit{height:inherit;width:inherit;font-size:8px;padding-right:2px;vertical-align:middle}"],
                    preserveWhitespaces: false,
                    encapsulation: _angular_core.ViewEncapsulation.None
                },] },
    ];
    return ImmediateArrowComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var RaUiImmediateArrowModule = /** @class */ (function () {
    function RaUiImmediateArrowModule() {
    }
    RaUiImmediateArrowModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    declarations: [
                        ImmediateArrowComponent
                    ],
                    imports: [
                        _angular_common.CommonModule,
                        _angular_material.MatIconModule
                    ],
                    exports: [
                        ImmediateArrowComponent
                    ]
                },] },
    ];
    return RaUiImmediateArrowModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// tslint:disable-next-line no-any
var elementResizeDetectorMaker$1 = elementResizeDetectorMaker___default__default || elementResizeDetectorMaker___default;
/**
 * @record
 */

var SizeChangeDirective = /** @class */ (function () {
    function SizeChangeDirective(element) {
        this.element = element;
        /**
         * A size change event.
         */
        this.onSizeChange = new _angular_core.EventEmitter();
        this.observer = elementResizeDetectorMaker$1({
            strategy: 'scroll'
        });
    }
    /**
     * @return {?}
     */
    SizeChangeDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.observer.listenTo(this.element.nativeElement, function (element) {
            var /** @type {?} */ event = {
                width: element.offsetWidth,
                height: element.offsetHeight,
                target: element
            };
            _this.onSizeChange.emit(event);
        });
    };
    /**
     * @return {?}
     */
    SizeChangeDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.observer.uninstall(this.element.nativeElement);
    };
    SizeChangeDirective.decorators = [
        { type: _angular_core.Directive, args: [{
                    selector: '[raUiOnSizeChange]'
                },] },
    ];
    /** @nocollapse */
    SizeChangeDirective.ctorParameters = function () { return [
        { type: _angular_core.ElementRef, },
    ]; };
    SizeChangeDirective.propDecorators = {
        "onSizeChange": [{ type: _angular_core.Output, args: ['raUiOnSizeChange',] },],
    };
    return SizeChangeDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var RaUiSizeChangeModule = /** @class */ (function () {
    function RaUiSizeChangeModule() {
    }
    RaUiSizeChangeModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    imports: [
                        _angular_common.CommonModule
                    ],
                    declarations: [
                        SizeChangeDirective
                    ],
                    exports: [
                        SizeChangeDirective
                    ],
                    providers: []
                },] },
    ];
    return RaUiSizeChangeModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var RaUiAcceleratorModule = /** @class */ (function () {
    function RaUiAcceleratorModule() {
    }
    RaUiAcceleratorModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    imports: [
                        _angular_common.CommonModule,
                        RaUiSizeChangeModule
                    ],
                    declarations: [],
                    exports: []
                },] },
    ];
    return RaUiAcceleratorModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var RaUiTruncateModule = /** @class */ (function () {
    function RaUiTruncateModule() {
    }
    RaUiTruncateModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    imports: [
                        _angular_common.CommonModule,
                        RaUiSizeChangeModule,
                        RaUiAcceleratorModule,
                        ngxDeviceDetector.DeviceDetectorModule.forRoot()
                    ],
                    declarations: [
                        TruncateDirective
                    ],
                    exports: [
                        TruncateDirective
                    ]
                },] },
    ];
    return RaUiTruncateModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var RaUiTooltipModule = /** @class */ (function () {
    function RaUiTooltipModule() {
    }
    RaUiTooltipModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    imports: [
                        _angular_common.CommonModule,
                        _angular_cdk_overlay.OverlayModule,
                        _angular_flexLayout.FlexLayoutModule
                    ],
                    declarations: [
                        TooltipDirective,
                        TooltipComponent
                    ],
                    entryComponents: [TooltipComponent],
                    exports: [
                        TooltipDirective
                    ]
                },] },
    ];
    return RaUiTooltipModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var RaUiStaticTextModule = /** @class */ (function () {
    function RaUiStaticTextModule() {
    }
    RaUiStaticTextModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    imports: [
                        _angular_common.CommonModule,
                        RaUiSizeChangeModule,
                        RaUiTooltipModule,
                        RaUiTruncateModule,
                        RaUiAcceleratorModule,
                        _angular_flexLayout.FlexLayoutModule
                    ],
                    declarations: [
                        StaticTextComponent
                    ],
                    exports: [
                        StaticTextComponent
                    ]
                },] },
    ];
    return RaUiStaticTextModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var RaUiButtonModule = /** @class */ (function () {
    function RaUiButtonModule() {
    }
    RaUiButtonModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    declarations: [
                        ButtonComponent
                    ],
                    imports: [
                        _angular_common.CommonModule,
                        _angular_material.MatButtonModule,
                        _angular_material.MatIconModule,
                        RaUiStaticTextModule,
                        RaUiImmediateArrowModule,
                        RaUiTooltipModule,
                        _angular_forms.FormsModule,
                        _angular_forms.ReactiveFormsModule
                    ],
                    exports: [
                        ButtonComponent
                    ]
                },] },
    ];
    return RaUiButtonModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ImageHelper = /** @class */ (function () {
    function ImageHelper() {
    }
    /**
     * The method creates a base-64 encoded ASCII string from a String
     */
    /**
     * The method creates a base-64 encoded ASCII string from a String
     * @param {?} rawValue
     * @return {?}
     */
    ImageHelper.convertTextFromBinaryToAscii = /**
     * The method creates a base-64 encoded ASCII string from a String
     * @param {?} rawValue
     * @return {?}
     */
    function (rawValue) {
        return window.btoa(rawValue);
    };
    /**
     * The method decodes a string of data which has been encoded using base-64 encoding
     */
    /**
     * The method decodes a string of data which has been encoded using base-64 encoding
     * @param {?} encodedValue
     * @return {?}
     */
    ImageHelper.convertTextFromAsciiToBinary = /**
     * The method decodes a string of data which has been encoded using base-64 encoding
     * @param {?} encodedValue
     * @return {?}
     */
    function (encodedValue) {
        return window.atob(encodedValue);
    };
    /**
     * The method parse a Xml and returns value of a attribute from a specific element
     */
    /**
     * The method parse a Xml and returns value of a attribute from a specific element
     * @param {?} source
     * @param {?} tagName
     * @param {?} attributeName
     * @return {?}
     */
    ImageHelper.parseValueFromXmlByAttribute = /**
     * The method parse a Xml and returns value of a attribute from a specific element
     * @param {?} source
     * @param {?} tagName
     * @param {?} attributeName
     * @return {?}
     */
    function (source, tagName, attributeName) {
        var /** @type {?} */ parser = new DOMParser();
        var /** @type {?} */ xml = parser.parseFromString(source, 'application/xml');
        var /** @type {?} */ svg = xml.querySelector(tagName);
        if (lodash.isNil(svg)) {
            return '';
        }
        var /** @type {?} */ attributeValue = svg.getAttribute(attributeName);
        return !lodash.isNil(attributeValue) ? attributeValue : '';
    };
    /**
     * The method parse svg definition encoded by base64 from string
     */
    /**
     * The method parse svg definition encoded by base64 from string
     * @param {?} value
     * @return {?}
     */
    ImageHelper.parseBase64sourceFromImageSource = /**
     * The method parse svg definition encoded by base64 from string
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var /** @type {?} */ splitted = lodash.split(value, ',');
        var /** @type {?} */ tailed = lodash.tail(splitted);
        return lodash.join(tailed);
    };
    /**
     * This method checks whether image source represent binary data
     * in an ASCII string format by translating it into a radix-64 representation
     */
    /**
     * This method checks whether image source represent binary data
     * in an ASCII string format by translating it into a radix-64 representation
     * @param {?} value
     * @return {?}
     */
    ImageHelper.isBase64 = /**
     * This method checks whether image source represent binary data
     * in an ASCII string format by translating it into a radix-64 representation
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (lodash.isNil(value)) {
            return false;
        }
        // tslint:disable-next-line max-line-length
        return /^\s*data:([A-Za-z]+\/[A-Za-z]+(\+xml)?(;[a-z\-]+=[a-z\-]+)?)?(;base64)?,[a-z0-9!$&',()*+,;=\-._~:@\/?%\s]*\s*$/i.test(value);
    };
    /**
     * The method returns extension from a source path. If anything fail the method returns empty string
     */
    /**
     * The method returns extension from a source path. If anything fail the method returns empty string
     * @param {?} source
     * @return {?}
     */
    ImageHelper.getExtension = /**
     * The method returns extension from a source path. If anything fail the method returns empty string
     * @param {?} source
     * @return {?}
     */
    function (source) {
        var /** @type {?} */ sanitizedSource = lodash.trim(source);
        if (lodash.isEmpty(sanitizedSource)) {
            return '';
        }
        var /** @type {?} */ extension = ImageHelper.isBase64(sanitizedSource) ?
            ImageHelper.getExtensionFromBase64(sanitizedSource) :
            ImageHelper.getExtensionFromSource(sanitizedSource);
        extension = lodash.toLower(lodash.trim(extension));
        //svg value is - data:image/svg+xml;base64, ...
        if (extension === 'svg+xml') {
            extension = 'svg';
        }
        return extension;
    };
    /**
     * The method checks source path has extension svg
     */
    /**
     * The method checks source path has extension svg
     * @param {?} source
     * @return {?}
     */
    ImageHelper.isSvg = /**
     * The method checks source path has extension svg
     * @param {?} source
     * @return {?}
     */
    function (source) {
        return this.getExtension(source) === 'svg';
    };
    /**
     * @param {?} source
     * @return {?}
     */
    ImageHelper.getExtensionFromBase64 = /**
     * @param {?} source
     * @return {?}
     */
    function (source) {
        //data:image/gif;base64, ...
        var /** @type {?} */ splittedByForwardSlash = lodash.split(source, '/');
        if (splittedByForwardSlash.length < 2) {
            return '';
        }
        var /** @type {?} */ splittedBySemicolon = lodash.split(splittedByForwardSlash[1], ';');
        return splittedBySemicolon.length > 1 ? splittedBySemicolon[0] : '';
    };
    /**
     * @param {?} source
     * @return {?}
     */
    ImageHelper.getExtensionFromSource = /**
     * @param {?} source
     * @return {?}
     */
    function (source) {
        var /** @type {?} */ splittedByDot = lodash.split(source, '.');
        return splittedByDot.length > 1 ? lodash.last(splittedByDot) : '';
    };
    return ImageHelper;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */

/**
 * The image info
 */
var ImageDimension = /** @class */ (function () {
    function ImageDimension(item) {
        if (item === void 0) { item = /** @type {?} */ ({}); }
        this.width = item.width;
        this.height = item.height;
        this.sourcePath = item.sourcePath;
        this.isExtensionValid = item.isExtensionValid;
    }
    return ImageDimension;
}());
/**
 * @record
 */

/**
 * Configuration object for the ImageConfig, this class is immutable.
 */
var ImageConfig = /** @class */ (function () {
    function ImageConfig(options, logger) {
        if (options === void 0) { options = /** @type {?} */ ({}); }
        this.logger = logger;
        if (lodash.isArray(options.supportedExtensions)) {
            this.supportedExtensions = options.supportedExtensions.map(function (item) { return lodash.trim(lodash.lowerCase(item)); });
        }
        else {
            this.supportedExtensions = DefaultImageExtensions;
            this.onInvalidType('supportedExtensions', 'array', options.supportedExtensions);
        }
        if (lodash.isString(options.supportErrorMessage)) {
            this.supportErrorMessage = options.supportErrorMessage;
        }
        else {
            this.supportErrorMessage = 'RA_UI_COMMON_UTILS.IMAGE.SUPPORT_ERROR';
            this.onInvalidType('supportErrorMessage', 'string', options.supportErrorMessage);
        }
    }
    /**
     * A method called when a field with incorrect type is passed to the config.
     */
    // tslint:disable-next-line:no-any
    /**
     * A method called when a field with incorrect type is passed to the config.
     * @param {?} propName
     * @param {?} expected
     * @param {?} got
     * @return {?}
     */
    ImageConfig.prototype.onInvalidType = /**
     * A method called when a field with incorrect type is passed to the config.
     * @param {?} propName
     * @param {?} expected
     * @param {?} got
     * @return {?}
     */
    function (propName, expected, got) {
        this.logger && LoggerUtils.logInvalidInput('ImageConfig', propName, got, expected, this.logger);
    };
    /**
     * Configuration object for the ImageConfig, this class is immutable.
     */
    ImageConfig = __decorate([
        Immutable,
        Config({
            existErrorMessage: {
                default: 'RA_UI_COMMON_UTILS.IMAGE.EXIST_ERROR',
                type: 'string'
            }
        }),
        __metadata("design:paramtypes", [Object, Object])
    ], ImageConfig);
    return ImageConfig;
}());
/**
 * RA WTUI image component.
 */
var ImageComponent = /** @class */ (function (_super) {
    __extends(ImageComponent, _super);
    //endregion
    //region constructor
    function ImageComponent(changeRef, ngControl, sanitizer, http, logger) {
        var _this = _super.call(this, ngControl) || this;
        _this.changeRef = changeRef;
        _this.ngControl = ngControl;
        _this.sanitizer = sanitizer;
        _this.http = http;
        _this.logger = logger;
        _this._config = new ImageConfig(undefined, _this.logger);
        _this._value = '';
        _this._translateParams = {};
        /**
         * An observable fired when the image is loaded
         */
        _this.loaded = new _angular_core.EventEmitter();
        /**
         * This attribute shows description of error, will be raised.
         * There are 2 possible error titles: not supported of file extension and the image does not exist
         */
        _this._errorTitle = '';
        /**
         * The flag, which representing the validity of the file extension by source path
         */
        _this.isExtensionValid = false;
        /**
         * The flag, which representing the validity of the image
         */
        _this.isImageValid = false;
        _this._componentName = 'ImageComponent';
        return _this;
    }
    Object.defineProperty(ImageComponent.prototype, "config", {
        get: /**
         * Settings with static values
         * \@default Config with default fields
         * @return {?}
         */
        function () {
            return this._config;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (TypeUtils.isObject(val)) {
                this._config = new ImageConfig(val, this.logger);
            }
            else {
                this._config = new ImageConfig(undefined, this.logger);
                //log error to the console
                LoggerUtils.logInvalidInput(this._componentName, 'config', val, 'IImageConfig', this.logger);
            }
            this.updateTranslateParamsExtensions();
            this.checkErrors();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageComponent.prototype, "value", {
        get: /**
         * This attribute defines the image URL
         * \@default ' '
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (lodash.isString(val)) {
                this._value = val;
            }
            else {
                this._value = '';
                //log error to the console
                LoggerUtils.logInvalidInput(this._componentName, 'value', val, 'string', this.logger);
            }
            this._plainUrlNotSanitized = this.sanitizer.bypassSecurityTrustResourceUrl(this._value);
            this._plainStyleUrlNotSanitized = this.sanitizer.bypassSecurityTrustStyle("url(" + this._value + ")");
            this.handleUnsupportedError();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageComponent.prototype, "translateParams", {
        get: /**
         * @return {?}
         */
        function () {
            return this._translateParams;
        },
        set: /**
         * Parameters for translation, these are optional. If changed, translation will get updated.
         * \@default { }
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (TypeUtils.isObject(val)) {
                this._translateParams = val;
            }
            else {
                this._translateParams = {};
                //log error to the console
                LoggerUtils.logInvalidInput(this._componentName, 'translateParams', val, 'object', this.logger);
            }
            this.updateTranslateParamsExtensions();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageComponent.prototype, "_width", {
        get: /**
         * @return {?}
         */
        function () {
            return this._widthProp + 'px';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageComponent.prototype, "_height", {
        get: /**
         * @return {?}
         */
        function () {
            return this._heightProp + 'px';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageComponent.prototype, "_shouldDisplay", {
        /**
         * This getter determines whether the component should be displayed
         */
        get: /**
         * This getter determines whether the component should be displayed
         * @return {?}
         */
        function () {
            return this.isImageValid && this.isExtensionValid;
        },
        enumerable: true,
        configurable: true
    });
    //endregion
    //region Control Value accessor
    /**
     * ControlValueAccessor implementation
     * A function that handles source of the image
     */
    /**
     * ControlValueAccessor implementation
     * A function that handles source of the image
     * @param {?} value
     * @return {?}
     */
    ImageComponent.prototype.writeValue = /**
     * ControlValueAccessor implementation
     * A function that handles source of the image
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (lodash.isNil(value) || !lodash.isString(value)) {
            LoggerUtils.logInvalidInput(this._componentName, 'ngModel', value, 'string', this.logger);
            value = '';
        }
        this.value = value;
        this.changeRef.markForCheck();
    };
    /**
     * ControlValueAccessor implementation
     */
    /**
     * ControlValueAccessor implementation
     * @param {?} fn
     * @return {?}
     */
    ImageComponent.prototype.registerOnChange = /**
     * ControlValueAccessor implementation
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        rxjs.noop();
    };
    /**
     * ControlValueAccessor implementation
     */
    /**
     * ControlValueAccessor implementation
     * @param {?} fn
     * @return {?}
     */
    ImageComponent.prototype.registerOnTouched = /**
     * ControlValueAccessor implementation
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        rxjs.noop();
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    ImageComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        rxjs.noop();
    };
    /**
     * Noop implementation of focus.
     * Made to satisfy the ControlValueAccessorBase abstract method.
     */
    /**
     * Noop implementation of focus.
     * Made to satisfy the ControlValueAccessorBase abstract method.
     * @return {?}
     */
    ImageComponent.prototype.focus = /**
     * Noop implementation of focus.
     * Made to satisfy the ControlValueAccessorBase abstract method.
     * @return {?}
     */
    function () {
        rxjs.noop();
    };
    //endregion
    //region angular life-cycles
    /**
     * @return {?}
     */
    ImageComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.updateTranslateParamsExtensions();
    };
    /**
     * @return {?}
     */
    ImageComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        !lodash.isNil(this.sourceRequestSubscription) && this.sourceRequestSubscription.unsubscribe();
        !lodash.isNil(this.sourceXmlRequestSubscription) && this.sourceXmlRequestSubscription.unsubscribe();
    };
    //endregion
    //region Image observables, load/error
    /**
     * This method stores width a and height of a image after loaded
     */
    /**
     * This method stores width a and height of a image after loaded
     * @return {?}
     */
    ImageComponent.prototype._imageLoaded = /**
     * This method stores width a and height of a image after loaded
     * @return {?}
     */
    function () {
        var _this = this;
        if (!ImageHelper.isSvg(this.value)) {
            this.initImageDimensions();
            this.emitValueImageLoaded();
            return;
        }
        //this code is handled only a image has svg format
        if (ImageHelper.isBase64(this.value)) {
            var /** @type {?} */ xml = ImageHelper.convertTextFromAsciiToBinary(ImageHelper.parseBase64sourceFromImageSource(this.value));
            var /** @type {?} */ width = ImageHelper.parseValueFromXmlByAttribute(xml, 'svg', 'width') || '';
            var /** @type {?} */ height = ImageHelper.parseValueFromXmlByAttribute(xml, 'svg', 'height') || '';
            this.initImageDimensions(width, height);
            this.emitValueImageLoaded();
        }
        else {
            //get width and height from svg file
            this.sourceXmlRequestSubscription = this.http.request('get', this.value, {
                responseType: 'text'
            }).subscribe(function (data) {
                var /** @type {?} */ width = ImageHelper.parseValueFromXmlByAttribute(data, 'svg', 'width') || '';
                var /** @type {?} */ height = ImageHelper.parseValueFromXmlByAttribute(data, 'svg', 'height') || '';
                _this.initImageDimensions(width, height);
                _this.emitValueImageLoaded();
            });
        }
    };
    /**
     * @return {?}
     */
    ImageComponent.prototype._errorHandler = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (lodash.isEmpty(this.value)) {
            this.handleNotExistError();
            return;
        }
        this.sourceRequestSubscription = this.http.request('get', this.value, {
            responseType: 'text'
        }).subscribe(function (data) {
            _this.isImageValid = true;
            _this.handleUnsupportedError();
        }, function (error) {
            if (ImageHelper.isBase64(_this.value)) {
                _this.isImageValid = true;
                _this.handleUnsupportedError();
            }
            else {
                _this.handleNotExistError();
            }
        }, function () {
            rxjs.noop();
        });
    };
    /**
     * This method is invoked, when the image does not exist and set new image.
     * @return {?}
     */
    ImageComponent.prototype.handleNotExistError = /**
     * This method is invoked, when the image does not exist and set new image.
     * @return {?}
     */
    function () {
        this._errorTitle = this.config.existErrorMessage || '';
        this.isImageValid = false;
        this.changeRef.markForCheck();
    };
    /**
     * This method set unsupported message error, when the file extension is not support
     * @return {?}
     */
    ImageComponent.prototype.handleUnsupportedError = /**
     * This method set unsupported message error, when the file extension is not support
     * @return {?}
     */
    function () {
        this._errorTitle = '';
        this.isExtensionValid = true;
        if (this.isSupportedFormat()) {
            return;
        }
        this._errorTitle = this.config.supportErrorMessage || '';
        this.isExtensionValid = false;
        this.changeRef.markForCheck();
    };
    /**
     * @return {?}
     */
    ImageComponent.prototype.checkErrors = /**
     * @return {?}
     */
    function () {
        this.isImageValid ? this.handleUnsupportedError() : this.handleNotExistError();
    };
    /**
     * This method checks, whether the image has supported file extension.
     * @return {?}
     */
    ImageComponent.prototype.isSupportedFormat = /**
     * This method checks, whether the image has supported file extension.
     * @return {?}
     */
    function () {
        var /** @type {?} */ extension = ImageHelper.getExtension(this.value);
        if (lodash.isEmpty(extension)) {
            return false;
        }
        return this.isExtensionSupported(extension);
    };
    /**
     * This method checks, whether image file extension is support
     * @param {?} extension
     * @return {?}
     */
    ImageComponent.prototype.isExtensionSupported = /**
     * This method checks, whether image file extension is support
     * @param {?} extension
     * @return {?}
     */
    function (extension) {
        return lodash.indexOf(this.config.supportedExtensions, extension) >= 0;
    };
    /**
     * This method updates translateParams.supportedExtensions with the supportedExtensions from config
     * @return {?}
     */
    ImageComponent.prototype.updateTranslateParamsExtensions = /**
     * This method updates translateParams.supportedExtensions with the supportedExtensions from config
     * @return {?}
     */
    function () {
        var /** @type {?} */ translateParamsExtensions = {
            supportedExtensions: "*.[" + (this.config.supportedExtensions && this.config.supportedExtensions.join(', ')) + "]"
        };
        this._translateParams = lodash.merge(this.translateParams, translateParamsExtensions);
    };
    //endregion
    /**
     * This method recalculates width and height of background-image depending on the parent container
     */
    /**
     * This method recalculates width and height of background-image depending on the parent container
     * @param {?} event
     * @return {?}
     */
    ImageComponent.prototype._onContainerChange = /**
     * This method recalculates width and height of background-image depending on the parent container
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.width === 0 || event.height === 0 ||
            lodash.isNil(this._heightProp) || lodash.isNil(this._widthProp)) {
            return;
        }
        if (event.width > this._widthProp || event.height > this._heightProp) {
            this._widthProp = this._naturalWidth;
            this._heightProp = this._naturalHeight;
            this.changeRef.markForCheck();
            return;
        }
        //outer container was change I need update height & width of background-image with aspect ratio
        if (event.width < this._naturalWidth || event.height < this._naturalHeight) {
            var /** @type {?} */ ratio = event.width / this._naturalWidth;
            this._heightProp = Math.ceil(this._naturalHeight * ratio);
            this._widthProp = Math.ceil(this._naturalWidth * ratio);
        }
        this.changeRef.detectChanges();
    };
    /**
     * The helper method, called an observable fired when the image is loaded
     * @return {?}
     */
    ImageComponent.prototype.emitValueImageLoaded = /**
     * The helper method, called an observable fired when the image is loaded
     * @return {?}
     */
    function () {
        this.isImageValid = true;
        this.loaded.emit(new ImageDimension({
            width: this._naturalWidth,
            height: this._naturalHeight,
            sourcePath: this._value,
            isExtensionValid: this.isExtensionValid
        }));
        this.handleUnsupportedError();
    };
    /**
     * The method which initialized image dimensions when a image is loaded.
     * @param {?=} width
     * @param {?=} height
     * @return {?}
     */
    ImageComponent.prototype.initImageDimensions = /**
     * The method which initialized image dimensions when a image is loaded.
     * @param {?=} width
     * @param {?=} height
     * @return {?}
     */
    function (width, height) {
        this._widthProp = this._naturalWidth = !lodash.isNil(width) ? lodash.parseInt(width) : this._imgRef.nativeElement.naturalWidth;
        this._heightProp = this._naturalHeight = !lodash.isNil(height) ? lodash.parseInt(height) : this._imgRef.nativeElement.naturalHeight;
    };
    ImageComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ra-ui-image',
                    template: "<div *ngIf=\"_shouldDisplay; else errorTemplate\" class=\"image-wrapper\" (raUiOnSizeChange)=\"_onContainerChange($event)\"><div class=\"image-background\" [style.width]=\"_width\" [style.height]=\"_height\" [style.background-image]=\"_plainStyleUrlNotSanitized\"></div></div><ng-template #errorTemplate><ra-ui-not-found-image [raUiTooltip]=\"_errorTitle\" [tooltipConfig]=\"{position: 'Center'}\" [tooltipTranslateParams]=\"translateParams\"></ra-ui-not-found-image></ng-template><img [src]=\"_plainUrlNotSanitized\" (error)=\"_errorHandler()\" (load)=\"_imageLoaded()\" #image>",
                    styles: ["ra-ui-image{display:flex;height:100%;width:100%;justify-content:center;align-items:center;box-sizing:border-box}ra-ui-image>.image-wrapper{width:inherit;height:inherit;display:flex;flex-direction:column;justify-content:center;align-items:center}ra-ui-image>.image-wrapper .image-background{max-width:100%;max-height:100%;background:no-repeat center;background-size:contain}ra-ui-image>img{display:none}"],
                    providers: [ImageHelper],
                    changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    encapsulation: _angular_core.ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    ImageComponent.ctorParameters = function () { return [
        { type: _angular_core.ChangeDetectorRef, },
        { type: _angular_forms.NgControl, decorators: [{ type: _angular_core.Self }, { type: _angular_core.Optional },] },
        { type: _angular_platformBrowser.DomSanitizer, },
        { type: _angular_common_http.HttpClient, },
        { type: undefined, decorators: [{ type: _angular_core.Inject, args: [LOGGER,] },] },
    ]; };
    ImageComponent.propDecorators = {
        "config": [{ type: _angular_core.Input },],
        "value": [{ type: _angular_core.Input },],
        "translateParams": [{ type: _angular_core.Input },],
        "loaded": [{ type: _angular_core.Output },],
        "_imgRef": [{ type: _angular_core.ViewChild, args: ['image',] },],
    };
    return ImageComponent;
}(ControlValueAccessorBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NotFoundImageComponent = /** @class */ (function () {
    function NotFoundImageComponent() {
    }
    NotFoundImageComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ra-ui-not-found-image',
                    template: "<svg class=\"not-found-icon\" viewBox=\"0 0 1000 1000\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid meet\"><path d=\"M356.495 677.53c4.362-7.076 11.919-10.988 19.661-10.988 4.116 0 8.284 1.096 12.022 3.4 10.865 6.646 14.264 20.838 7.598 31.683l-62.863 102.564c-6.636 10.854-20.818 14.254-31.683 7.598s-14.264-20.828-7.598-31.683l62.863-102.574zM509.501 866.038c-0.020 0-0.041 0-0.061 0-12.698 0-22.999-10.281-23.040-22.989l-0.061-29.696c0-0.133 0-0.256 0-0.389 0-0.102 0-0.205 0-0.287l-0.184-89.866c-0.041-12.728 10.26-23.060 22.979-23.091 0.020 0 0.041 0 0.061 0 12.698 0 22.999 10.281 23.040 22.989l0.246 120.248c0.041 12.718-10.26 23.060-22.979 23.081zM635.822 669.942c3.758-2.304 7.916-3.4 12.022-3.4 7.762 0 15.319 3.912 19.661 10.998l46.899 76.524c0.143 0.215 0.276 0.44 0.42 0.655l15.319 24.996c2.263 3.574 3.584 7.813 3.584 12.349 0 12.728-10.322 23.040-23.040 23.040-8.458 0-15.841-4.547-19.855-11.346l-15.319-24.986c-0.143-0.215-0.276-0.451-0.399-0.666l-46.879-76.483c-6.656-10.854-3.256-25.037 7.588-31.683zM379.095 424.397c5.376-7.639 5.417-36.383 0.143-44.38l-162.478-162.55c-7.721-5.427-36.905-5.427-44.063-0.481l-56.044 56.013c-5.437 7.68-5.417 36.895-0.481 44.032l162.796 162.908c7.721 5.427 36.905 5.427 44.063 0.471l39.322 39.311c-26.235 26.276-95.857 26.276-122.143 0l-163.348-163.379c-26.255-26.245-26.255-95.867-0.020-122.143l56.535-56.525c26.255-26.276 95.877-26.276 122.163 0l163.379 163.389c26.235 26.245 26.235 95.867 0 122.153l-39.823-38.82zM947.139 356.342l-163.379 163.379c-26.255 26.245-95.877 26.245-122.143 0l38.758-39.823c7.721 5.427 36.905 5.427 44.063 0.512l162.918-162.847c5.396-7.711 5.396-36.884 0.461-44.052l-56.003-56.044c-7.639-5.396-36.383-5.427-44.38-0.154l-162.55 162.488c-5.417 7.711-5.417 36.895-0.481 44.063l-39.322 39.311c-26.276-26.235-26.276-95.857 0-122.143l163.359-163.389c26.276-26.235 95.898-26.235 122.184 0l56.525 56.556c26.276 26.245 26.255 95.846-0.010 122.143z\"/></svg>",
                    styles: ["ra-ui-not-found-image{width:100%;height:100%;display:flex;justify-content:center;align-items:center;position:relative}ra-ui-not-found-image svg{width:50px;height:inherit;transform:rotate(180deg);transform-origin:center}"],
                    changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    encapsulation: _angular_core.ViewEncapsulation.None
                },] },
    ];
    return NotFoundImageComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var RaUiImageModule = /** @class */ (function () {
    function RaUiImageModule() {
    }
    RaUiImageModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    declarations: [
                        ImageComponent,
                        NotFoundImageComponent
                    ],
                    imports: [
                        _angular_common.CommonModule,
                        RaUiStaticTextModule,
                        RaUiTooltipModule,
                        _angular_common_http.HttpClientModule,
                        RaUiSizeChangeModule
                    ],
                    exports: [
                        ImageComponent
                    ]
                },] },
    ];
    return RaUiImageModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DEFAULT_LABEL_SPACE_SIZE_PIXELS = 150;
var FULL_WIDTH_PERC = 100;
/** @enum {number} */
var LabelContainerLayout = {
    /**
         * Horizontal layout.
         */
    Horizontal: 0,
    /**
         * Vertical layout.
         */
    Vertical: 1,
};
LabelContainerLayout[LabelContainerLayout.Horizontal] = "Horizontal";
LabelContainerLayout[LabelContainerLayout.Vertical] = "Vertical";
/**
 * @record
 */

/**
 * A method that checks whether a value is of type LabelContainerLayout.
 * @param {?} val
 * @return {?}
 */
function isLabelContainerLayout(val) {
    return val === LabelContainerLayout.Horizontal || val === LabelContainerLayout.Vertical;
}
/**
 * A method that checks whether a value is of type Size.
 * @param {?} val
 * @return {?}
 */
function isSize(val) {
    if (lodash.isNil(val) || (!instanceOfSizeWithUnits(val) && !lodash.isNumber(val))) {
        return false;
    }
    var /** @type {?} */ size = SizeWithUnits.fromSize(/** @type {?} */ (val));
    if (size.units === SizeUnits.Pixels && size.size <= 0) {
        return false;
    }
    if (size.units === SizeUnits.Percent && (size.size <= 0 || size.size > 99)) {
        return false;
    }
    return true;
}
var LabelContainerConfig = /** @class */ (function () {
    function LabelContainerConfig(options, logger) {
        if (options === void 0) { options = /** @type {?} */ ({}); }
        this.logger = logger;
    }
    /**
     * A method called when a field with incorrect type is passed to the config.
     */
    // tslint:disable-next-line:no-any
    /**
     * A method called when a field with incorrect type is passed to the config.
     * @param {?} propName
     * @param {?} expected
     * @param {?} got
     * @return {?}
     */
    LabelContainerConfig.prototype.onInvalidType = /**
     * A method called when a field with incorrect type is passed to the config.
     * @param {?} propName
     * @param {?} expected
     * @param {?} got
     * @return {?}
     */
    function (propName, expected, got) {
        this.logger && LoggerUtils.logInvalidInput('LabelContainerConfig', propName, got, expected, this.logger);
    };
    LabelContainerConfig = __decorate([
        Immutable,
        Config({
            labelSpace: {
                default: DEFAULT_LABEL_SPACE_SIZE_PIXELS,
                type: isSize,
                typeDisplayName: 'Size'
            },
            labelContainerLayout: {
                default: LabelContainerLayout.Horizontal,
                type: isLabelContainerLayout,
                typeDisplayName: 'LabelContainerLayout'
            },
            addColon: {
                default: false,
                type: 'boolean'
            },
            fillParent: {
                default: false,
                type: 'boolean'
            },
            enableImmediateArrow: {
                default: false,
                type: 'boolean'
            }
        }),
        __metadata("design:paramtypes", [Object, Object])
    ], LabelContainerConfig);
    return LabelContainerConfig;
}());
/**
 * RA WTUI label container component. May be used to wrap any HTML code and add a common label to it.
 */
var LabelContainerComponent = /** @class */ (function () {
    //endregion
    //region Constructor and Life Cycle Hooks
    function LabelContainerComponent(changeRef, logger) {
        this.changeRef = changeRef;
        this.logger = logger;
        this._config = new LabelContainerConfig(undefined, this.logger);
        this._isFocused = false;
        this._isDirty = false;
        this._label = '';
        this._disabled = false;
        /**
         * Gets triggered on accelerator key.
         */
        this.onAccelerator = new _angular_core.EventEmitter();
        //endregion
        //region Private Properties
        this._fxLayout = '';
        this._fxLayoutAlign = '';
        this._fxLeftFlex = '';
        this._fxRightFlex = '';
        this._containerHeight = '';
        this._innerContainerWidth = '';
        this._innerContainerHeight = '';
        this._overflown = false;
        this._isVertical = false;
        this._componentName = 'LabelContainerComponent';
    }
    Object.defineProperty(LabelContainerComponent.prototype, "config", {
        get: /**
         * Configuration object.
         * \@default Config with default fields.
         * @return {?}
         */
        function () {
            return this._config;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (TypeUtils.isObject(val)) {
                this._config = new LabelContainerConfig(val, this.logger);
            }
            else {
                this._config = new LabelContainerConfig(undefined, this.logger);
                //log error to the console
                LoggerUtils.logInvalidInput(this._componentName, 'config', val, 'ILabelContainerConfig', this.logger);
            }
            this.onConfigChanged();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LabelContainerComponent.prototype, "isFocused", {
        get: /**
         * Input that indicates whether highlight (accent) color of label and its eventual dirty flag should be displayed.
         * \@default false
         * @return {?}
         */
        function () {
            return this._isFocused;
        },
        set: /**
         * @param {?} focused
         * @return {?}
         */
        function (focused) {
            if (!lodash.isBoolean(focused)) {
                this._isFocused = false;
                LoggerUtils.logInvalidInput(this._componentName, 'isFocused', focused, 'boolean', this.logger);
            }
            else {
                this._isFocused = focused;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LabelContainerComponent.prototype, "isDirty", {
        get: /**
         * Input that indicates whether dirty flag should be displayed.
         * @return {?}
         */
        function () {
            return this._isDirty;
        },
        set: /**
         * @param {?} dirty
         * @return {?}
         */
        function (dirty) {
            if (!lodash.isBoolean(dirty)) {
                this._isDirty = false;
                LoggerUtils.logInvalidInput(this._componentName, 'isDirty', dirty, 'boolean', this.logger);
            }
            else {
                this._isDirty = dirty;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LabelContainerComponent.prototype, "label", {
        get: /**
         * Text to be displayed in label or translation key.
         * \@default ' '
         * @return {?}
         */
        function () {
            return this._label;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (lodash.isString(val)) {
                this._label = val;
            }
            else {
                this._label = '';
                //log error to the console
                LoggerUtils.logInvalidInput(this._componentName, 'label', val, 'string', this.logger);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LabelContainerComponent.prototype, "disabled", {
        get: /**
         * Disables the label control.
         * \@default false
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (lodash.isBoolean(val)) {
                this._disabled = val;
            }
            else {
                this._disabled = false;
                //log error to the console
                LoggerUtils.logInvalidInput(this._componentName, 'disabled', val, 'boolean', this.logger);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LabelContainerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.onConfigChanged();
    };
    /**
     * @return {?}
     */
    LabelContainerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.calculateInnerHeight();
        this.changeRef.markForCheck();
    };
    //endregion
    //region Private Methods
    /**
     * @return {?}
     */
    LabelContainerComponent.prototype._onAccelerator = /**
     * @return {?}
     */
    function () {
        this.onAccelerator.emit();
    };
    /**
     * @param {?} isOverflown
     * @return {?}
     */
    LabelContainerComponent.prototype._onLabelOverflowChanged = /**
     * @param {?} isOverflown
     * @return {?}
     */
    function (isOverflown) {
        if (!this._config.addColon) {
            return;
        }
        this._overflown = isOverflown;
    };
    /**
     * @return {?}
     */
    LabelContainerComponent.prototype.onConfigChanged = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ getLeftFlexValue = function (labelSpaceSize, labelSpaceUnits) {
            return (labelSpaceUnits === SizeUnits.Pixels) ?
                '0 0 ' + labelSpaceSize + 'px' :
                '0 0 ' + labelSpaceSize + '%';
        };
        var /** @type {?} */ getRightFlexValue = function (labelSpaceSize, labelSpaceUnits) {
            return (labelSpaceUnits === SizeUnits.Pixels) ?
                '1 1 auto' :
                '0 0 ' + (FULL_WIDTH_PERC - labelSpaceSize) + '%';
        };
        // flex
        if (this.config.labelContainerLayout === LabelContainerLayout.Horizontal) {
            var /** @type {?} */ size = SizeWithUnits.fromSize(/** @type {?} */ (this.config.labelSpace));
            this._fxLayout = 'row';
            this._fxLayoutAlign = 'none center';
            this._fxLeftFlex = getLeftFlexValue(size.size, size.units);
            this._fxRightFlex = getRightFlexValue(size.size, size.units);
            this._isVertical = false;
        }
        else {
            this._fxLayout = 'column';
            this._fxLayoutAlign = '';
            this._fxLeftFlex = '0 0 15px';
            this._fxRightFlex = '1 1 auto';
            this._isVertical = true;
        }
        // staticTextConfig
        this._staticTextConfig = {
            suffix: this._config.addColon ? ':' : undefined
        };
        // _containerHeight
        this._containerHeight = this.config.fillParent ? '100%' : '';
        this.changeRef.detectChanges();
        // _innerContainerHeight
        this.calculateInnerHeight();
        // _innerContainerWidth
        this.calculateInnerWidth();
        this.changeRef.markForCheck();
    };
    /**
     * @return {?}
     */
    LabelContainerComponent.prototype.calculateInnerWidth = /**
     * @return {?}
     */
    function () {
        if (this.config.labelContainerLayout === LabelContainerLayout.Horizontal) {
            var /** @type {?} */ size = SizeWithUnits.fromSize(/** @type {?} */ (this.config.labelSpace));
            this._innerContainerWidth = (size.units === SizeUnits.Pixels) ?
                "calc(100% - " + size.size + "px)" : '';
        }
        else {
            this._innerContainerWidth = '';
        }
    };
    /**
     * @return {?}
     */
    LabelContainerComponent.prototype.calculateInnerHeight = /**
     * @return {?}
     */
    function () {
        if (!this.config.fillParent || lodash.isNil(this._labelText.lineHeight)) {
            this._innerContainerHeight = '';
            return;
        }
        if (this.config.labelContainerLayout === LabelContainerLayout.Vertical) {
            this._innerContainerHeight = "calc(100% - " + this._labelText.lineHeight + "px)";
        }
        else {
            this._innerContainerHeight = '100%';
        }
    };
    LabelContainerComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ra-ui-label-container',
                    template: "<div class=\"ra-ui-container\" [fxLayout]=\"_fxLayout\" [fxLayoutAlign]=\"_fxLayoutAlign\" [class.vertical]=\"_isVertical\" [class.horizontal]=\"!_isVertical\" [style.height]=\"_containerHeight\"><div class=\"label-container-label\" #labelTextContainer [fxFlex]=\"_fxLeftFlex\" [class.focused]=\"isFocused\" [class.overflown]=\"_overflown\"><div class=\"label-container-label-placeholder\"><div class=\"label-container-label-text\" [class.dirty-flag]=\"isDirty\" [class.immediate-arrow]=\"config && config.enableImmediateArrow\"><ra-ui-static-text #labelText style=\"width: 100%\" [config]=\"_staticTextConfig\" [disabled]=\"disabled\" [value]=\"label\" (onAccelerator)=\"_onAccelerator()\" (overflowChange)=\"_onLabelOverflowChanged($event)\"></ra-ui-static-text></div><ra-ui-dirty-flag *ngIf=\"isDirty\"></ra-ui-dirty-flag><ra-ui-immediate-arrow *ngIf=\"config && config.enableImmediateArrow\"></ra-ui-immediate-arrow></div></div><div class=\"label-container-content\" [fxFlex]=\"_fxRightFlex\" [style.height]=\"_innerContainerHeight\" [style.width]=\"_innerContainerWidth\"><ng-content></ng-content></div></div>",
                    styles: ["ra-ui-label-container .ra-ui-container.horizontal{overflow:hidden}"],
                    changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    encapsulation: _angular_core.ViewEncapsulation.None
                },] },
    ];
    //endregion
    /** @nocollapse */
    LabelContainerComponent.ctorParameters = function () { return [
        { type: _angular_core.ChangeDetectorRef, },
        { type: undefined, decorators: [{ type: _angular_core.Inject, args: [LOGGER,] },] },
    ]; };
    LabelContainerComponent.propDecorators = {
        "config": [{ type: _angular_core.Input },],
        "isFocused": [{ type: _angular_core.Input },],
        "isDirty": [{ type: _angular_core.Input },],
        "label": [{ type: _angular_core.Input },],
        "disabled": [{ type: _angular_core.Input },],
        "onAccelerator": [{ type: _angular_core.Output },],
        "_labelTextContainer": [{ type: _angular_core.ViewChild, args: ['labelTextContainer',] },],
        "_labelText": [{ type: _angular_core.ViewChild, args: ['labelText',] },],
    };
    return LabelContainerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * RA WTUI dirty flag component. It is used to mark dirty components in a form.
 * Components which support displaying the dirty flag provide enableDirtyFlag field in their config.
 * Set this property to true to enable the feature.
 */
var DirtyFlagComponent = /** @class */ (function () {
    function DirtyFlagComponent() {
    }
    DirtyFlagComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ra-ui-dirty-flag',
                    template: "<span>*</span>",
                    styles: ["ra-ui-dirty-flag{line-height:18px;vertical-align:middle;display:inline-block;width:7px;text-align:right;font-size:16px;pointer-events:all;cursor:inherit}"],
                    preserveWhitespaces: false,
                    encapsulation: _angular_core.ViewEncapsulation.None
                },] },
    ];
    return DirtyFlagComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var RaUiDirtyFlagModule = /** @class */ (function () {
    function RaUiDirtyFlagModule() {
    }
    RaUiDirtyFlagModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    declarations: [
                        DirtyFlagComponent
                    ],
                    imports: [
                        _angular_common.CommonModule
                    ],
                    exports: [
                        DirtyFlagComponent
                    ]
                },] },
    ];
    return RaUiDirtyFlagModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var RaUiLabelContainerModule = /** @class */ (function () {
    function RaUiLabelContainerModule() {
    }
    RaUiLabelContainerModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    imports: [
                        _angular_common.CommonModule,
                        _angular_flexLayout.FlexLayoutModule,
                        RaUiSizeChangeModule,
                        RaUiStaticTextModule,
                        RaUiDirtyFlagModule,
                        RaUiImmediateArrowModule
                    ],
                    declarations: [
                        LabelContainerComponent
                    ],
                    exports: [
                        LabelContainerComponent
                    ]
                },] },
    ];
    return RaUiLabelContainerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @template T
 */
var NullableBehaviorSubject = /** @class */ (function (_super) {
    __extends(NullableBehaviorSubject, _super);
    function NullableBehaviorSubject() {
        return _super.call(this, undefined) || this;
    }
    return NullableBehaviorSubject;
}(rxjs.BehaviorSubject));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MousedownPreventDirective = /** @class */ (function () {
    function MousedownPreventDirective() {
    }
    /**
     * @param {?} event
     * @return {?}
     */
    MousedownPreventDirective.prototype._onMouseDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    MousedownPreventDirective.decorators = [
        { type: _angular_core.Directive, args: [{
                    /* tslint:disable-next-line directive-selector */
                    selector: '[mousedown.prevent]'
                },] },
    ];
    /** @nocollapse */
    MousedownPreventDirective.propDecorators = {
        "_onMouseDown": [{ type: _angular_core.HostListener, args: ['mousedown', ['$event'],] },],
    };
    return MousedownPreventDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MousedownPreventModule = /** @class */ (function () {
    function MousedownPreventModule() {
    }
    MousedownPreventModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    declarations: [
                        MousedownPreventDirective
                    ],
                    imports: [
                        _angular_common.CommonModule
                    ],
                    exports: [
                        MousedownPreventDirective
                    ]
                },] },
    ];
    return MousedownPreventModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */

/**
 * Allows loading of translations from multiple files, translations with same key gets merged meaning the most recent translation is used.
 */
var TranslateHttpMultiLoader = /** @class */ (function () {
    function TranslateHttpMultiLoader(http, files) {
        this.http = http;
        this.files = files;
    }
    /**
     * Gets the translations from the server
     * @param {?} lang
     * @return {?}
     */
    TranslateHttpMultiLoader.prototype.getTranslation = /**
     * Gets the translations from the server
     * @param {?} lang
     * @return {?}
     */
    function (lang) {
        var _this = this;
        // tslint:disable-line:no-any
        return new rxjs.Observable(function (observer) {
            var /** @type {?} */ result = {};
            var /** @type {?} */ observables = []; // tslint:disable-line:no-any
            for (var _i = 0, _a = _this.files; _i < _a.length; _i++) {
                var file = _a[_i];
                observables.push(_this.getObservableForFile(lang, file.prefix, file.suffix));
            }
            if (observables.length === 0) {
                throw Error('Files must contain at least one value.');
            }
            rxjs.forkJoin.apply(void 0, observables).subscribe(function (value) {
                // tslint:disable-line:no-any
                lodash.forEach(value, function (val) {
                    lodash.assign(result, val);
                });
            }, function (error) {
                // tslint:disable-line:no-any
                throw error;
            }, function () {
                observer.next(result);
                observer.complete();
            });
        });
    };
    /**
     * @param {?} lang
     * @param {?} prefix
     * @param {?} suffix
     * @return {?}
     */
    TranslateHttpMultiLoader.prototype.getObservableForFile = /**
     * @param {?} lang
     * @param {?} prefix
     * @param {?} suffix
     * @return {?}
     */
    function (lang, prefix, suffix) {
        // tslint:disable-line:no-any
        return this.http.get("" + prefix + lang + suffix);
    };
    return TranslateHttpMultiLoader;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MathUtils = /** @class */ (function () {
    function MathUtils() {
    }
    /**
     * @param {?} value
     * @param {?} min
     * @param {?} max
     * @return {?}
     */
    MathUtils.clamp = /**
     * @param {?} value
     * @param {?} min
     * @param {?} max
     * @return {?}
     */
    function (value, min, max) {
        return Math.min(Math.max(value, min), max);
    };
    return MathUtils;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BrowserUtils = /** @class */ (function () {
    function BrowserUtils() {
    }
    /**
     * @param {?} element
     * @return {?}
     */
    BrowserUtils.isSelectionWithinElement = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        var _a = window.getSelection().getRangeAt(0), startContainer = _a.startContainer, endContainer = _a.endContainer;
        // there are some situations in Edge, where the start/endNode is not the text element but the span
        return (startContainer.parentNode === element || startContainer === element) &&
            (endContainer.parentNode === element || endContainer === element);
    };
    /**
     * @return {?}
     */
    BrowserUtils.hasSelection = /**
     * @return {?}
     */
    function () {
        return !window.getSelection().isCollapsed;
    };
    /**
     * @return {?}
     */
    BrowserUtils.getSelectionLength = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ range = BrowserUtils.getRange();
        return range ? range.toString().length : 0;
    };
    /**
     * @param {?} targetElement
     * @param {?} index
     * @return {?}
     */
    BrowserUtils.setCaret = /**
     * @param {?} targetElement
     * @param {?} index
     * @return {?}
     */
    function (targetElement, index) {
        var /** @type {?} */ range = document.createRange();
        var /** @type {?} */ sel = window.getSelection();
        range.setStart(targetElement, /** @type {?} */ ((targetElement.textContent)).length < index ? 0 : index);
        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    BrowserUtils.getClipboardData = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /* tslint:disable-next-line no-any */
        var /** @type {?} */ castedWindow = /** @type {?} */ (window);
        var /** @type {?} */ value;
        if (castedWindow.clipboardData && castedWindow.clipboardData.getData) {
            // IE
            value = castedWindow.clipboardData.getData('Text');
        }
        else if (event.clipboardData && event.clipboardData.getData) {
            value = event.clipboardData.getData('text/plain');
        }
        return value;
    };
    /**
     * @param {?} value
     * @param {?} event
     * @return {?}
     */
    BrowserUtils.setClipboardData = /**
     * @param {?} value
     * @param {?} event
     * @return {?}
     */
    function (value, event) {
        /* tslint:disable-next-line no-any */
        var /** @type {?} */ castedWindow = /** @type {?} */ (window);
        if (castedWindow.clipboardData && castedWindow.clipboardData.setData) {
            // IE
            castedWindow.clipboardData.setData('Text', value);
        }
        else if (event.clipboardData && event.clipboardData.getData) {
            event.clipboardData.setData('text/plain', value);
        }
    };
    /**
     * Find parent node of current node according to filter function
     * @param {?} node
     * @param {?} filterFunc
     * @return {?}
     */
    BrowserUtils.findParentNode = /**
     * Find parent node of current node according to filter function
     * @param {?} node
     * @param {?} filterFunc
     * @return {?}
     */
    function (node, filterFunc) {
        var /** @type {?} */ currentNode = node;
        while (currentNode) {
            if (filterFunc(currentNode)) {
                return currentNode;
            }
            if (currentNode.parentNode) {
                currentNode = currentNode.parentNode;
            }
            else {
                return;
            }
        }
        return;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    BrowserUtils.removeWhitespaces = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value.replace(new RegExp('\\s', 'g'), '');
    };
    /**
     * Returns the current caret position, if there is no selection, otherwise returns undefined
     * @return {?}
     */
    BrowserUtils.getCaretPosition = /**
     * Returns the current caret position, if there is no selection, otherwise returns undefined
     * @return {?}
     */
    function () {
        var /** @type {?} */ sel = window.getSelection();
        if (sel.isCollapsed) {
            return sel.anchorOffset;
        }
        return;
    };
    /**
     * Returns the left position of current selection
     * @return {?}
     */
    BrowserUtils.getSelectionLeftPosition = /**
     * Returns the left position of current selection
     * @return {?}
     */
    function () {
        return window.getSelection().anchorOffset;
    };
    /**
     * Returns the right position of current selection
     * @return {?}
     */
    BrowserUtils.getSelectionRightPosition = /**
     * Returns the right position of current selection
     * @return {?}
     */
    function () {
        return window.getSelection().focusOffset;
    };
    /**
     * @return {?}
     */
    BrowserUtils.getRange = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ sel = window.getSelection();
        if (sel.rangeCount > 0) {
            return sel.getRangeAt(0);
        }
        else {
            return;
        }
    };
    /**
     * @param {?} startNode
     * @param {?} startOffset
     * @param {?} endNode
     * @param {?} endOffset
     * @return {?}
     */
    BrowserUtils.addNewRangeToSelection = /**
     * @param {?} startNode
     * @param {?} startOffset
     * @param {?} endNode
     * @param {?} endOffset
     * @return {?}
     */
    function (startNode, startOffset, endNode, endOffset) {
        var /** @type {?} */ range = document.createRange();
        startOffset = MathUtils.clamp(startOffset, 0, startNode.textContent ? startNode.textContent.length : 0);
        endOffset = MathUtils.clamp(endOffset, 0, endNode.textContent ? endNode.textContent.length : 0);
        range.setStart(startNode, startOffset);
        range.setEnd(endNode, endOffset);
        BrowserUtils.setSelectionRange(range);
    };
    /**
     * @param {?} range
     * @return {?}
     */
    BrowserUtils.setSelectionRange = /**
     * @param {?} range
     * @return {?}
     */
    function (range) {
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
    };
    /**
     * Updates left or right boundary of the selection based on direction
     * @param {?} direction
     * @param {?} node
     * @param {?} offset
     * @return {?}
     */
    BrowserUtils.updateBoundaryOfSelection = /**
     * Updates left or right boundary of the selection based on direction
     * @param {?} direction
     * @param {?} node
     * @param {?} offset
     * @return {?}
     */
    function (direction, node, offset) {
        if (direction === Direction.Left) {
            BrowserUtils.updateLeftBoundaryOfSelection(node, offset);
        }
        else {
            BrowserUtils.updateRightBoundaryOfSelection(node, offset);
        }
    };
    /**
     * @param {?} leftNode
     * @param {?} leftOffset
     * @return {?}
     */
    BrowserUtils.updateLeftBoundaryOfSelection = /**
     * @param {?} leftNode
     * @param {?} leftOffset
     * @return {?}
     */
    function (leftNode, leftOffset) {
        var _a = window.getSelection(), focusNode = _a.focusNode, focusOffset = _a.focusOffset;
        BrowserUtils.addNewRangeToSelection(leftNode, leftOffset, focusNode, focusOffset);
    };
    /**
     * @param {?} rightNode
     * @param {?} rightOffset
     * @return {?}
     */
    BrowserUtils.updateRightBoundaryOfSelection = /**
     * @param {?} rightNode
     * @param {?} rightOffset
     * @return {?}
     */
    function (rightNode, rightOffset) {
        var _a = window.getSelection(), anchorNode = _a.anchorNode, anchorOffset = _a.anchorOffset;
        BrowserUtils.addNewRangeToSelection(anchorNode, anchorOffset, rightNode, rightOffset);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    BrowserUtils.isFnKeyPressed = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return (event.keyCode >= 112 && event.keyCode <= 122);
    };
    /**
     * @param {?} child
     * @param {?} parent
     * @return {?}
     */
    BrowserUtils.isChildNode = /**
     * @param {?} child
     * @param {?} parent
     * @return {?}
     */
    function (child, parent) {
        /* tslint:disable-next-line:no-bitwise */
        return !!(child.compareDocumentPosition(parent) & Node.DOCUMENT_POSITION_CONTAINS);
    };
    /**
     * If there is a selection and user pressed arrow key, this method will set the right position of the caret based on the specific arrow
     * @param {?} keyCode
     * @return {?}
     */
    BrowserUtils.restoreCaretPositionAfterSelectionCleared = /**
     * If there is a selection and user pressed arrow key, this method will set the right position of the caret based on the specific arrow
     * @param {?} keyCode
     * @return {?}
     */
    function (keyCode) {
        // saving old position
        var _a = window.getSelection(), anchorNode = _a.anchorNode, anchorOffset = _a.anchorOffset, focusNode = _a.focusNode, focusOffset = _a.focusOffset;
        var /** @type {?} */ targetElement;
        var /** @type {?} */ targetOffset;
        switch (keyCode) {
            case KeyCode.LEFT_ARROW:
                _b = [anchorNode, anchorOffset], targetElement = _b[0], targetOffset = _b[1];
                break;
            case KeyCode.RIGHT_ARROW:
                _c = [focusNode, focusOffset], targetElement = _c[0], targetOffset = _c[1];
                break;
            case KeyCode.UP_ARROW:
                _d = [anchorNode, 0], targetElement = _d[0], targetOffset = _d[1];
                break;
            case KeyCode.DOWN_ARROW:
                _e = [focusNode, /** @type {?} */ ((focusNode.textContent)).length], targetElement = _e[0], targetOffset = _e[1];
                break;
            default:
                return;
        }
        var /** @type {?} */ spanElement = /** @type {?} */ (/** @type {?} */ ((targetElement)).parentNode);
        spanElement.focus();
        BrowserUtils.setCaret(/** @type {?} */ ((targetElement)), targetOffset);
        var _b, _c, _d, _e;
    };
    return BrowserUtils;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CollectionUtils = /** @class */ (function () {
    function CollectionUtils() {
    }
    /**
     * Runs a callback for each item in collection and all sub-collections.
     */
    /**
     * Runs a callback for each item in collection and all sub-collections.
     * @template T
     * @param {?} items
     * @param {?} callback
     * @param {?=} childrenProp
     * @return {?}
     */
    CollectionUtils.runForEachChild = /**
     * Runs a callback for each item in collection and all sub-collections.
     * @template T
     * @param {?} items
     * @param {?} callback
     * @param {?=} childrenProp
     * @return {?}
     */
    function (items, callback, childrenProp) {
        if (childrenProp === void 0) { childrenProp = 'children'; }
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            callback(item);
            item.hasOwnProperty(childrenProp) && this.runForEachChild(item[childrenProp], callback, childrenProp);
        }
    };
    return CollectionUtils;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * A function that compare equality on two values.
 * Helpful for cases where both values are NaN.
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function areValuesEqual(a, b) {
    if (typeof a === 'number' && typeof b === 'number' && Number.isNaN(a) && Number.isNaN(b)) {
        return true;
    }
    return a === b;
}

exports.areValuesEqual = areValuesEqual;
exports.ButtonStyle = ButtonStyle;
exports.ButtonType = ButtonType;
exports.isButtonStyle = isButtonStyle;
exports.isButtonType = isButtonType;
exports.ButtonConfig = ButtonConfig;
exports.ButtonComponent = ButtonComponent;
exports.RaUiButtonModule = RaUiButtonModule;
exports.ImageDimension = ImageDimension;
exports.ImageConfig = ImageConfig;
exports.ImageComponent = ImageComponent;
exports.RaUiImageModule = RaUiImageModule;
exports.LabelContainerLayout = LabelContainerLayout;
exports.isLabelContainerLayout = isLabelContainerLayout;
exports.isSize = isSize;
exports.LabelContainerConfig = LabelContainerConfig;
exports.LabelContainerComponent = LabelContainerComponent;
exports.RaUiLabelContainerModule = RaUiLabelContainerModule;
exports.TextAlignVertically = TextAlignVertically;
exports.isTextAlignVertically = isTextAlignVertically;
exports.StaticTextConfig = StaticTextConfig;
exports.StaticTextComponent = StaticTextComponent;
exports.RaUiStaticTextModule = RaUiStaticTextModule;
exports.MouseEventRef = MouseEventRef;
exports.isTooltipPosition = isTooltipPosition;
exports.TooltipConfig = TooltipConfig;
exports.TooltipDirective = TooltipDirective;
exports.TooltipPosition = TooltipPosition;
exports.RaUiTooltipModule = RaUiTooltipModule;
exports.Immutable = Immutable;
exports.Config = Config;
exports.NullableBehaviorSubject = NullableBehaviorSubject;
exports.AcceleratorUtils = AcceleratorUtils;
exports.AcceleratorService = AcceleratorService;
exports.RaUiAcceleratorModule = RaUiAcceleratorModule;
exports.ControlValueAccessorBase = ControlValueAccessorBase;
exports.ImmediateArrowComponent = ImmediateArrowComponent;
exports.RaUiImmediateArrowModule = RaUiImmediateArrowModule;
exports.TruncateConfig = TruncateConfig;
exports.TruncateDirective = TruncateDirective;
exports.RaUiTruncateModule = RaUiTruncateModule;
exports.SizeChangeDirective = SizeChangeDirective;
exports.RaUiSizeChangeModule = RaUiSizeChangeModule;
exports.MousedownPreventDirective = MousedownPreventDirective;
exports.MousedownPreventModule = MousedownPreventModule;
exports.TranslateHttpMultiLoader = TranslateHttpMultiLoader;
exports.isValueType = isValueType;
exports.CursorStyle = CursorStyle;
exports.isCursorStyleOrUndefined = isCursorStyleOrUndefined;
exports.DefaultImageExtensions = DefaultImageExtensions;
exports.TextAlign = TextAlign;
exports.isTextAlign = isTextAlign;
exports.strEnum = strEnum;
exports.KeyCode = KeyCode;
exports.getKeyFromKeyboardEvent = getKeyFromKeyboardEvent;
exports.Direction = Direction;
exports.SizeUnits = SizeUnits;
exports.SizeWithUnits = SizeWithUnits;
exports.isSizeUnits = isSizeUnits;
exports.instanceOfSizeWithUnits = instanceOfSizeWithUnits;
exports.isClassDef = isClassDef;
exports.ConsoleLogger = ConsoleLogger;
exports.EmptyLogger = EmptyLogger;
exports.LOGGER = LOGGER;
exports.LoggerUtils = LoggerUtils;
exports.BrowserUtils = BrowserUtils;
exports.DomUtils = DomUtils;
exports.MathUtils = MathUtils;
exports.TypeUtils = TypeUtils;
exports.CollectionUtils = CollectionUtils;
exports.DirtyFlagComponent = DirtyFlagComponent;
exports.RaUiDirtyFlagModule = RaUiDirtyFlagModule;
exports.ɵc = ImageHelper;
exports.ɵd = NotFoundImageComponent;
exports.ɵa = TooltipPositionStrategyBuilderService;
exports.ɵb = TooltipComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=common-utils.umd.js.map


/***/ }),

/***/ "./@ra-web-tech-ui-toolkit-form-system/bundles/form-system.umd.js":
/*!************************************************************************!*\
  !*** ./@ra-web-tech-ui-toolkit-form-system/bundles/form-system.umd.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 */
(function (global, factory) {
	 true ? factory(exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js"), __webpack_require__(/*! @ra-web-tech-ui-toolkit/common-utils */ "./@ra-web-tech-ui-toolkit-common-utils/bundles/common-utils.umd.js"), __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js"), __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js"), __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/esm5/ngx-translate-core.js"), __webpack_require__(/*! ngx-device-detector */ "./@ra-web-tech-ui-toolkit-form-system/node_modules/ngx-device-detector/ngx-device-detector.umd.js")) :
	undefined;
}(this, (function (exports,_angular_core,_angular_forms,_raWebTechUiToolkit_commonUtils,rxjs,lodash,_angular_material,_angular_common,_ngxTranslate_core,ngxDeviceDetector) { 'use strict';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}





function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}



function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function isRaUiFormControl(ngControl) {
    return ngControl && ((ngControl)).dirtyChanges !== undefined;
}

var RaUiFormControl = (function (_super) {
    __extends(RaUiFormControl, _super);
    function RaUiFormControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dirtyChanges = new rxjs.Subject();
        _this.touchedChanges = new rxjs.Subject();
        return _this;
    }
    RaUiFormControl.prototype.markAsDirty = function (opts) {
        _super.prototype.markAsDirty.call(this, opts);
        this.dirtyChanges.next(true);
    };
    RaUiFormControl.prototype.markAsPristine = function (opts) {
        _super.prototype.markAsPristine.call(this, opts);
        this.dirtyChanges.next(false);
    };
    RaUiFormControl.prototype.markAsTouched = function (opts) {
        _super.prototype.markAsTouched.call(this, opts);
        this.touchedChanges.next(true);
    };
    RaUiFormControl.prototype.markAsUntouched = function (opts) {
        _super.prototype.markAsUntouched.call(this, opts);
        this.touchedChanges.next(false);
    };
    RaUiFormControl.prototype.setValue = function (value, options, fromCode) {
        _super.prototype.setValue.call(this, value, options);
    };
    return RaUiFormControl;
}(_angular_forms.FormControl));

var RaUiFormGroup = (function (_super) {
    __extends(RaUiFormGroup, _super);
    function RaUiFormGroup(controls, validatorOrOpts, asyncValidator) {
        var _this = _super.call(this, controls, validatorOrOpts, asyncValidator) || this;
        _this.objectChanges = new rxjs.Subject();
        _this._subscriptions = {};
        Object.keys(controls).forEach(function (key) {
            _this.subscribeControl(key);
        });
        return _this;
    }
    RaUiFormGroup.prototype.addControl = function (name, control) {
        _super.prototype.addControl.call(this, name, control);
        this.subscribeControl(name);
    };
    RaUiFormGroup.prototype.removeControl = function (name) {
        this.unsubscribeControl(name);
        _super.prototype.removeControl.call(this, name);
    };
    RaUiFormGroup.prototype.setControl = function (name, control) {
        this.unsubscribeControl(name);
        _super.prototype.setControl.call(this, name, control);
        this.subscribeControl(name);
        this.objectChanges.next({
            controlName: name,
            value: control.value
        });
    };
    RaUiFormGroup.prototype.subscribeControl = function (name) {
        var _this = this;
        var formPart = this.get(name);
        if (formPart instanceof RaUiFormControl) {
            this._subscriptions[name] = formPart.valueChanges.subscribe(function (value) {
                _this.objectChanges.next({
                    controlName: name,
                    value: value
                });
            });
        }
        else if (formPart instanceof RaUiFormGroup) {
            this._subscriptions[name] = formPart.objectChanges.subscribe(function (notification) {
                _this.objectChanges.next({
                    controlName: name + "." + notification.controlName,
                    value: notification.value
                });
            });
        }
        else if (formPart instanceof RaUiFormArray) {
            this._subscriptions[name] = formPart.arrayChanges.subscribe(function (notification) {
                _this.objectChanges.next({
                    controlName: name + "[" + notification.index + "]" + ((notification.controlName === '') ? '' : '.' + notification.controlName),
                    value: notification.value
                });
            });
        }
        else {
            throw new Error('Invalid Form Control type with name ' + name + '.');
        }
    };
    RaUiFormGroup.prototype.unsubscribeControl = function (name) {
        var subscription = this._subscriptions[name];
        if (subscription) {
            subscription.unsubscribe();
            delete this._subscriptions[name];
        }
    };
    return RaUiFormGroup;
}(_angular_forms.FormGroup));
var RaUiFormArray = (function (_super) {
    __extends(RaUiFormArray, _super);
    function RaUiFormArray(controls, validatorOrOpts, asyncValidator) {
        var _this = _super.call(this, controls, validatorOrOpts, asyncValidator) || this;
        _this.arrayChanges = new rxjs.Subject();
        _this._subscriptions = {};
        for (var i = 0; i < controls.length; i++) {
            _this.subscribeControl(i);
        }
        return _this;
    }
    RaUiFormArray.prototype.push = function (control) {
        _super.prototype.push.call(this, control);
        this.subscribeControl(this.controls.length - 1);
        this.arrayChanges.next({
            controlName: '',
            index: this.controls.length - 1,
            value: control.value
        });
    };
    RaUiFormArray.prototype.insert = function (index, control) {
        _super.prototype.insert.call(this, index, control);
        this.subscribeControl(index);
        this.arrayChanges.next({
            controlName: '',
            index: index,
            value: control.value
        });
    };
    RaUiFormArray.prototype.removeAt = function (index) {
        this.unsubscribeControl(index);
        _super.prototype.removeAt.call(this, index);
        this.arrayChanges.next({
            controlName: '',
            index: index,
            value: null
        });
    };
    RaUiFormArray.prototype.setControl = function (index, control) {
        this.unsubscribeControl(index);
        _super.prototype.setControl.call(this, index, control);
        this.subscribeControl(index);
        this.arrayChanges.next({
            controlName: '',
            index: index,
            value: control.value
        });
    };
    RaUiFormArray.prototype.subscribeControl = function (index) {
        var _this = this;
        var formPart = this.at(index);
        if (formPart instanceof RaUiFormControl) {
            this._subscriptions[index] = formPart.valueChanges.subscribe(function (value) {
                _this.arrayChanges.next({
                    controlName: '',
                    index: index,
                    value: value
                });
            });
        }
        else if (formPart instanceof RaUiFormGroup) {
            this._subscriptions[index] = formPart.objectChanges.subscribe(function (notification) {
                _this.arrayChanges.next({
                    controlName: notification.controlName,
                    index: index,
                    value: notification.value
                });
            });
        }
        else if (formPart instanceof RaUiFormArray) {
            this._subscriptions[index] = formPart.arrayChanges.subscribe(function (notification) {
                _this.arrayChanges.next({
                    controlName: notification.controlName + '[' + index + ']',
                    index: notification.index,
                    value: notification.value
                });
            });
        }
    };
    RaUiFormArray.prototype.unsubscribeControl = function (index) {
        var subscription = this._subscriptions[index];
        if (subscription) {
            subscription.unsubscribe();
            delete this._subscriptions[index];
        }
    };
    return RaUiFormArray;
}(_angular_forms.FormArray));

var FormComponent = (function () {
    function FormComponent(accSvc, logger) {
        this.accSvc = accSvc;
        this.logger = logger;
        this._disableAcceleratorKey = false;
        this._componentName = 'FormComponent';
    }
    Object.defineProperty(FormComponent.prototype, "formGroup", {
        get: function () {
            return this._formGroup;
        },
        set: function (val) {
            if (val instanceof RaUiFormGroup) {
                this._formGroup = val;
            }
            else {
                _raWebTechUiToolkit_commonUtils.LoggerUtils.errorInvalidInput(this._componentName, 'formGroup', val, 'RaUiFormGroup', this.logger);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormComponent.prototype, "disableAcceleratorKey", {
        get: function () {
            return this._disableAcceleratorKey;
        },
        set: function (val) {
            if (!lodash.isBoolean(val)) {
                this._disableAcceleratorKey = false;
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(this._componentName, 'disableAcceleratorKey', val, 'boolean', this.logger);
            }
            else {
                this._disableAcceleratorKey = val;
            }
            this.accSvc.isEnabled = !this._disableAcceleratorKey;
        },
        enumerable: true,
        configurable: true
    });
    FormComponent.prototype._onSubmit = function () {
        var _this = this;
        lodash.keys(this.formGroup.controls).forEach(function (field) {
            var control = _this.formGroup.get(field);
            _this.runForEachControl(((control)), 'root', function (ctrl) {
                ctrl.markAsTouched();
            });
        });
    };
    FormComponent.prototype.runForEachControl = function (control, name, clbk) {
        var _this = this;
        if (control instanceof RaUiFormGroup) {
            lodash.forEach(((control)).controls, function (childControl, key) {
                _this.runForEachControl(childControl, key, clbk);
            });
        }
        else if (control instanceof RaUiFormArray) {
            lodash.forEach(((control)).controls, function (childControl, key) {
                _this.runForEachControl(childControl, name + '[' + key + ']', clbk);
            });
        }
        else if (control instanceof RaUiFormControl) {
            clbk(control);
        }
        else {
            _raWebTechUiToolkit_commonUtils.LoggerUtils.logUnsupportedType(this._componentName, name, this.logger);
        }
    };
    FormComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ra-ui-form',
                    template: "<form [formGroup]=\"formGroup\" (submit)=\"_onSubmit()\"><ng-content></ng-content></form>",
                    providers: [_raWebTechUiToolkit_commonUtils.AcceleratorService],
                    preserveWhitespaces: false
                },] },
    ];
    FormComponent.ctorParameters = function () { return [
        { type: _raWebTechUiToolkit_commonUtils.AcceleratorService, },
        { type: undefined, decorators: [{ type: _angular_core.Inject, args: [_raWebTechUiToolkit_commonUtils.LOGGER,] },] },
    ]; };
    FormComponent.propDecorators = {
        "formGroup": [{ type: _angular_core.Input },],
        "disableAcceleratorKey": [{ type: _angular_core.Input },],
    };
    return FormComponent;
}());

var RaUiFormModule = (function () {
    function RaUiFormModule() {
    }
    RaUiFormModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    imports: [
                        _angular_forms.FormsModule,
                        _angular_forms.ReactiveFormsModule
                    ],
                    declarations: [
                        FormComponent
                    ],
                    exports: [
                        FormComponent
                    ]
                },] },
    ];
    return RaUiFormModule;
}());

var RaUiDefaultStateMatcher = (function () {
    function RaUiDefaultStateMatcher() {
    }
    RaUiDefaultStateMatcher.prototype.isErrorState = function (control, form) {
        return !!(control && control.invalid && control.touched);
    };
    return RaUiDefaultStateMatcher;
}());

var FormControlBase = (function (_super) {
    __extends(FormControlBase, _super);
    function FormControlBase(_changeRef, ngControl, logger) {
        var _this = _super.call(this, ngControl) || this;
        _this._changeRef = _changeRef;
        _this.logger = logger;
        _this._errorStateMatcher = new RaUiDefaultStateMatcher();
        _this._errorMessage = '';
        _this._matErrorStateMatcher = _this;
        return _this;
    }
    Object.defineProperty(FormControlBase.prototype, "errorMessages", {
        get: function () {
            return this._errorMessages;
        },
        set: function (val) {
            if (!_raWebTechUiToolkit_commonUtils.TypeUtils.isObject(val)) {
                this._errorMessages = {};
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(this._componentName, 'errorMessages', val, 'IErrorMessages', this.logger);
            }
            else {
                this._errorMessages = val;
            }
            this.updateErrorMessage();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlBase.prototype, "errorStateMatcher", {
        get: function () {
            return this._errorStateMatcher;
        },
        set: function (val) {
            if (lodash.isFunction(val.isErrorState)) {
                this._errorStateMatcher = val;
            }
            else {
                this._errorStateMatcher = new RaUiDefaultStateMatcher();
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(this._componentName, 'errorStateMatcher', val, 'ErrorStateMatcher', this.logger);
            }
        },
        enumerable: true,
        configurable: true
    });
    FormControlBase.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (lodash.isNil(this._ngControl) || lodash.isNil(this._ngControl.control)) {
            return;
        }
        this.statusChangesSubscription = this._ngControl.control.statusChanges.subscribe(function (status) {
            _this.updateErrorMessage();
            _this._changeRef.markForCheck();
        });
        if (isRaUiFormControl(this._ngControl.control)) {
            var control = ((this._ngControl.control));
            this.dirtyChangesSubscription = control.dirtyChanges.subscribe(function (isDirty) {
                _this._dirtyChanges(isDirty);
            });
            this.touchedChangesSubscription = control.touchedChanges.subscribe(function (isTouched) {
                _this._touchedChanges(isTouched);
            });
        }
        this._ngControl.control.errors && this.updateErrorMessage();
    };
    FormControlBase.prototype.ngOnDestroy = function () {
        if (lodash.isNil(this._ngControl) || lodash.isNil(this._ngControl.control)) {
            return;
        }
        this.statusChangesSubscription && this.statusChangesSubscription.unsubscribe();
        if (isRaUiFormControl(this._ngControl.control)) {
            this.dirtyChangesSubscription && this.dirtyChangesSubscription.unsubscribe();
            this.touchedChangesSubscription && this.touchedChangesSubscription.unsubscribe();
        }
    };
    FormControlBase.prototype.isErrorState = function (control, form) {
        if (lodash.isNil(this._ngControl) || lodash.isNil(this._ngControl.control)) {
            return false;
        }
        return this.errorStateMatcher.isErrorState(((this._ngControl.control)), form);
    };
    FormControlBase.prototype._isNgControlDirty = function () {
        return !lodash.isNil(this._ngControl) && (this._ngControl.dirty || false);
    };
    FormControlBase.prototype._dirtyChanges = function (isDirty) {
        if (this._model.valueAccessor instanceof FormControlBase && this._model.control) {
            isDirty ? this._model.control.markAsDirty() : this._model.control.markAsPristine();
            this._model.valueAccessor._dirtyChanges(isDirty);
        }
        this._changeRef.markForCheck();
    };
    FormControlBase.prototype._touchedChanges = function (isTouched) {
        this.touchedTimeout && clearTimeout(this.touchedTimeout);
        if (this._model.valueAccessor instanceof FormControlBase && this._model.control) {
            isTouched ? this._model.control.markAsTouched() : this._model.control.markAsUntouched();
            this._model.valueAccessor._touchedChanges(isTouched);
        }
        this._changeRef.markForCheck();
    };
    FormControlBase.prototype.updateErrorMessage = function () {
        var control = this._ngControl;
        if (!control || control.errors === null) {
            return;
        }
        var error = control.hasError('required') ? 'required' : Object.keys(control.errors)[0];
        this._errorMessage = (this.errorMessages && this.errorMessages.hasOwnProperty(error)) ? this.errorMessages[error] : error;
        if (this._model && this._model.valueAccessor instanceof FormControlBase) {
            this._model.valueAccessor._errorMessage = this._errorMessage;
            this._model.valueAccessor._changeRef.markForCheck();
        }
    };
    FormControlBase.propDecorators = {
        "errorMessages": [{ type: _angular_core.Input },],
        "errorStateMatcher": [{ type: _angular_core.Input },],
        "_model": [{ type: _angular_core.ViewChild, args: ['model',] },],
    };
    return FormControlBase;
}(_raWebTechUiToolkit_commonUtils.ControlValueAccessorBase));

var FormTypeUtils = (function () {
    function FormTypeUtils() {
    }
    FormTypeUtils.writeValueCheck = function (params) {
        var result = params.receivedVal;
        if (!lodash.isNil(result) && !params.checkFun(result)) {
            _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(params.component, 'ngModel', result, params.expectedType, params.logger);
            result = params.defaultVal;
            if (!lodash.isNil(params.ngControl) && !lodash.isNil(params.ngControl.control)) {
                (params.ngControl.control instanceof RaUiFormControl) ?
                    ((params.ngControl.control)).setValue(result, undefined, true) :
                    params.ngControl.control.setValue(result);
            }
        }
        return result;
    };
    return FormTypeUtils;
}());

var CheckboxConfig = (function () {
    function CheckboxConfig(options, logger) {
        if (options === void 0) { options = ({}); }
        this.logger = logger;
    }
    CheckboxConfig.prototype.onInvalidType = function (propName, expected, got) {
        this.logger && _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput('CheckboxConfig', propName, got, expected, this.logger);
    };
    CheckboxConfig = __decorate([
        _raWebTechUiToolkit_commonUtils.Immutable,
        _raWebTechUiToolkit_commonUtils.Config({
            disableAcceleratorKey: {
                default: false,
                type: 'boolean'
            },
            disableTooltip: {
                default: false,
                type: 'boolean'
            },
            enableDirtyFlag: {
                default: false,
                type: 'boolean'
            },
            enableImmediateArrow: {
                default: false,
                type: 'boolean'
            },
            tabIndex: {
                default: undefined,
                type: 'number'
            }
        }),
        __metadata("design:paramtypes", [Object, Object])
    ], CheckboxConfig);
    return CheckboxConfig;
}());
var CheckboxComponent = (function (_super) {
    __extends(CheckboxComponent, _super);
    function CheckboxComponent(changeRef, ngControl, rippleOption, logger) {
        var _this = _super.call(this, changeRef, ngControl, logger) || this;
        _this.changeRef = changeRef;
        _this.rippleOption = rippleOption;
        _this.logger = logger;
        _this._config = new CheckboxConfig(undefined, _this.logger);
        _this._value = false;
        _this._indeterminate = false;
        _this._label = '';
        _this._disabled = false;
        _this._translateParams = {};
        _this.disabledChange = new _angular_core.EventEmitter();
        _this.valueChange = new _angular_core.EventEmitter();
        _this.indeterminateChange = new _angular_core.EventEmitter();
        _this.focusChange = new _angular_core.EventEmitter();
        _this._isRippleEffectDisabled = false;
        _this._componentName = 'CheckboxComponent';
        _this._staticTextConfig = new _raWebTechUiToolkit_commonUtils.StaticTextConfig({
            disableAcceleratorKey: _this.config.disableAcceleratorKey,
            disableTooltip: _this.config.disableTooltip,
            cursorStyle: _raWebTechUiToolkit_commonUtils.CursorStyle.Pointer
        });
        _this._haveFocus = false;
        _this.propagateChange = function (value) { return rxjs.noop(); };
        _this.onTouched = function () { return rxjs.noop(); };
        if (_this.rippleOption && _this.rippleOption.disabled) {
            _this._isRippleEffectDisabled = true;
        }
        return _this;
    }
    Object.defineProperty(CheckboxComponent.prototype, "config", {
        get: function () {
            return this._config;
        },
        set: function (val) {
            if (!_raWebTechUiToolkit_commonUtils.TypeUtils.isObject(val)) {
                this._config = new CheckboxConfig(undefined, this.logger);
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(this._componentName, 'config', val, 'ICheckboxConfig', this.logger);
            }
            else {
                this._config = new CheckboxConfig(val, this.logger);
            }
            this._onConfigChanged();
            this.changeRef.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckboxComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (val) {
            if (!lodash.isBoolean(val)) {
                this._value = false;
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(this._componentName, 'value', val, 'boolean', this.logger);
            }
            else {
                this._value = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckboxComponent.prototype, "indeterminate", {
        get: function () {
            return this._indeterminate;
        },
        set: function (val) {
            if (!lodash.isBoolean(val)) {
                this._indeterminate = false;
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(this._componentName, 'indeterminate', val, 'boolean', this.logger);
            }
            else {
                this._indeterminate = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckboxComponent.prototype, "label", {
        get: function () {
            return this._label;
        },
        set: function (val) {
            if (!lodash.isString(val)) {
                this._label = '';
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(this._componentName, 'label', val, 'string', this.logger);
            }
            else {
                this._label = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckboxComponent.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (isDisabled) {
            if (!lodash.isBoolean(isDisabled)) {
                this._disabled = false;
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(this._componentName, 'disabled', isDisabled, 'boolean', this.logger);
            }
            else {
                this._disabled = isDisabled;
            }
            this.staticText.setDisabledState(isDisabled);
            this._update();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckboxComponent.prototype, "translateParams", {
        get: function () {
            return this._translateParams;
        },
        set: function (val) {
            if (!_raWebTechUiToolkit_commonUtils.TypeUtils.isObject(val)) {
                this._translateParams = {};
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(this._componentName, 'translateParams', typeof val, 'object', this.logger);
            }
            else {
                this._translateParams = val;
            }
            this.changeRef.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    CheckboxComponent.prototype.writeValue = function (value) {
        this.value = FormTypeUtils.writeValueCheck({
            component: this._componentName,
            receivedVal: value,
            defaultVal: false,
            expectedType: 'boolean',
            checkFun: function (a) { return lodash.isBoolean(a); },
            logger: this.logger,
            ngControl: this._ngControl
        });
        this.valueChange.emit(this.value);
        this._update();
    };
    CheckboxComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    CheckboxComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    CheckboxComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
        this.disabledChange.next(isDisabled);
    };
    CheckboxComponent.prototype.focus = function () {
        this.checkbox.focus();
    };
    CheckboxComponent.prototype._update = function () {
        this.changeRef.markForCheck();
    };
    CheckboxComponent.prototype._checkboxChanged = function (state) {
        this._value = state;
        this.propagateChange(state);
        this.valueChange.emit(state);
    };
    CheckboxComponent.prototype._checkboxIndeterminateChanged = function (state) {
        if (!lodash.isNil(state)) {
            this._indeterminate = state;
            this.indeterminateChange.emit(this._indeterminate);
        }
    };
    CheckboxComponent.prototype._setFocus = function (isFocused) {
        var _this = this;
        this._haveFocus = isFocused;
        if (this.touchedTimeout) {
            clearTimeout(this.touchedTimeout);
        }
        if (!isFocused) {
            this.touchedTimeout = window.setTimeout(function () {
                if (!_this._haveFocus) {
                    _this.onTouched();
                    _this.focusChange.emit(isFocused);
                }
            }, 100);
        }
        else {
            this.focusChange.emit(isFocused);
        }
    };
    CheckboxComponent.prototype._setDirtyFlag = function () {
        return this._isNgControlDirty() && (this._config.enableDirtyFlag || false);
    };
    CheckboxComponent.prototype._onConfigChanged = function () {
        this._staticTextConfig = new _raWebTechUiToolkit_commonUtils.StaticTextConfig({
            disableAcceleratorKey: this.config.disableAcceleratorKey,
            disableTooltip: this.config.disableTooltip,
            cursorStyle: _raWebTechUiToolkit_commonUtils.CursorStyle.Pointer
        });
    };
    CheckboxComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ra-ui-checkbox',
                    template: "<mat-checkbox #model=\"ngModel\" [ngModel]=\"_value\" (ngModelChange)=\"_checkboxChanged($event)\" [indeterminate]=\"_indeterminate\" (indeterminateChange)=\"_checkboxIndeterminateChanged($event)\" [disabled]=\"_disabled\" [tabIndex]=\"_config.tabIndex\" (click)=\"focus()\" (focusin)=\"_setFocus(true)\" (focusout)=\"_setFocus(false)\" class=\"chckbx\" [ngClass]=\"{'isFocused': _haveFocus}\"><div class=\"static-text-wrapper\" [ngClass]=\"{'immediate-arrow': _config.enableImmediateArrow, 'dirty-flag': _config.enableDirtyFlag}\"><ra-ui-static-text #staticText style=\"display: block\" [value]=\"_label\" (onAccelerator)=\"focus()\" [disabled]=\"_disabled\" [translateParams]=\"translateParams\" [config]=\"_staticTextConfig\"></ra-ui-static-text></div><ra-ui-dirty-flag [attr.disabled]=\"disabled\" *ngIf=\"_setDirtyFlag()\"></ra-ui-dirty-flag><ra-ui-immediate-arrow *ngIf=\"_config.enableImmediateArrow\"></ra-ui-immediate-arrow></mat-checkbox>",
                    styles: ["ra-ui-checkbox{display:block}"],
                    changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    encapsulation: _angular_core.ViewEncapsulation.None
                },] },
    ];
    CheckboxComponent.ctorParameters = function () { return [
        { type: _angular_core.ChangeDetectorRef, },
        { type: _angular_forms.NgControl, decorators: [{ type: _angular_core.Self }, { type: _angular_core.Optional },] },
        { type: undefined, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Inject, args: [_angular_material.MAT_RIPPLE_GLOBAL_OPTIONS,] },] },
        { type: undefined, decorators: [{ type: _angular_core.Inject, args: [_raWebTechUiToolkit_commonUtils.LOGGER,] },] },
    ]; };
    CheckboxComponent.propDecorators = {
        "config": [{ type: _angular_core.Input },],
        "value": [{ type: _angular_core.Input },],
        "indeterminate": [{ type: _angular_core.Input },],
        "label": [{ type: _angular_core.Input },],
        "disabled": [{ type: _angular_core.Input },],
        "translateParams": [{ type: _angular_core.Input },],
        "disabledChange": [{ type: _angular_core.Output },],
        "valueChange": [{ type: _angular_core.Output },],
        "indeterminateChange": [{ type: _angular_core.Output },],
        "focusChange": [{ type: _angular_core.Output },],
        "checkbox": [{ type: _angular_core.ViewChild, args: [_angular_material.MatCheckbox,] },],
        "staticText": [{ type: _angular_core.ViewChild, args: ['staticText',] },],
        "_isRippleEffectDisabled": [{ type: _angular_core.HostBinding, args: ['class.ripple-effect-disabled',] },],
    };
    return CheckboxComponent;
}(FormControlBase));

var RaUiCheckboxModule = (function () {
    function RaUiCheckboxModule() {
    }
    RaUiCheckboxModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    declarations: [
                        CheckboxComponent
                    ],
                    imports: [
                        _angular_common.CommonModule,
                        _angular_material.MatCheckboxModule,
                        _raWebTechUiToolkit_commonUtils.RaUiStaticTextModule,
                        _raWebTechUiToolkit_commonUtils.RaUiImmediateArrowModule,
                        _raWebTechUiToolkit_commonUtils.RaUiDirtyFlagModule,
                        _angular_forms.FormsModule,
                        _angular_forms.ReactiveFormsModule
                    ],
                    exports: [
                        CheckboxComponent
                    ]
                },] },
    ];
    return RaUiCheckboxModule;
}());

var CheckboxTreeComponent = (function () {
    function CheckboxTreeComponent(changeRef, logger) {
        this.changeRef = changeRef;
        this.logger = logger;
        this._config = new CheckboxConfig();
        this._label = '';
        this._disabled = false;
        this._translateParams = {};
        this.valueChange = new _angular_core.EventEmitter();
        this.indeterminateChange = new _angular_core.EventEmitter();
        this._componentName = 'CheckboxTreeComponent';
        this.childrenSubs = [];
        this._parentInter = false;
    }
    Object.defineProperty(CheckboxTreeComponent.prototype, "config", {
        get: function () {
            return this._config;
        },
        set: function (val) {
            if (!_raWebTechUiToolkit_commonUtils.TypeUtils.isObject(val)) {
                this._config = new CheckboxConfig();
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(this._componentName, 'config', val, 'ICheckboxConfig', this.logger);
            }
            else {
                this._config = new CheckboxConfig(val);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckboxTreeComponent.prototype, "label", {
        get: function () {
            return this._label;
        },
        set: function (val) {
            if (!lodash.isString(val)) {
                this._label = '';
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(this._componentName, 'label', val, 'string', this.logger);
            }
            else {
                this._label = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckboxTreeComponent.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (val) {
            if (!lodash.isBoolean(val)) {
                this._disabled = false;
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(this._componentName, 'disabled', val, 'boolean', this.logger);
            }
            else {
                this._disabled = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckboxTreeComponent.prototype, "translateParams", {
        get: function () {
            return this._translateParams;
        },
        set: function (val) {
            if (!_raWebTechUiToolkit_commonUtils.TypeUtils.isObject(val)) {
                this._translateParams = {};
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(this._componentName, 'translateParams', typeof val, 'object', this.logger);
            }
            else {
                this._translateParams = val;
            }
            this.changeRef.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    CheckboxTreeComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (lodash.isNil(this.checkboxes)) {
            return;
        }
        setTimeout(function () {
            _this.updateState();
        }, 0);
        this.checkboxesSubscription();
        this.checkboxesSubs = this.checkboxes.changes.subscribe(function () {
            _this.checkboxesSubscription();
            _this.updateState();
        });
    };
    CheckboxTreeComponent.prototype.ngOnDestroy = function () {
        this.checkboxesSubs.unsubscribe();
        this.childrenSubs.forEach(function (item) {
            item && item.unsubscribe();
        });
    };
    CheckboxTreeComponent.prototype.checkboxesSubscription = function () {
        var _this = this;
        if (lodash.isNil(this.checkboxes) || this.checkboxes.length === 0) {
            return;
        }
        this.childrenSubs.forEach(function (item) {
            item && item.unsubscribe();
        });
        this.childrenSubs = [];
        this.checkboxes.forEach(function (item, index) {
            _this.childrenSubs[index] = item.valueChange.subscribe(function (state) {
                item.value = state;
                _this.updateState();
            });
        });
    };
    CheckboxTreeComponent.prototype._parentChanged = function (state) {
        this._parentChecked = state;
        this.toggleAll();
        this.checkboxes.forEach(function (item) {
            item._update();
        });
        this.valueChange.emit(state);
    };
    CheckboxTreeComponent.prototype._parentIndeterminateChanged = function (state) {
        this._parentInter = state;
        this.indeterminateChange.emit(state);
    };
    CheckboxTreeComponent.prototype.updateState = function () {
        var checkedChildNodes = 0;
        this.checkboxes.forEach(function (item) {
            if (item.value) {
                checkedChildNodes = checkedChildNodes + 1;
            }
        });
        if (this.checkboxes.length === checkedChildNodes && this.checkboxes.length > 0) {
            this._parentChecked = true;
            this._parentInter = false;
        }
        else if (this.checkboxes.length !== checkedChildNodes && checkedChildNodes !== 0) {
            this._parentChecked = true;
            this._parentInter = true;
        }
        else if (checkedChildNodes === 0) {
            this._parentChecked = false;
            this._parentInter = false;
        }
        this.valueChange.emit(this._parentChecked);
        this.changeRef.markForCheck();
    };
    CheckboxTreeComponent.prototype.toggleAll = function () {
        if (lodash.isNil(this.checkboxes) || this.checkboxes.length === 0) {
            return;
        }
        var checkedChildNodes = 0;
        this.checkboxes.forEach(function (item, index) {
            if (item.value) {
                checkedChildNodes += 1;
            }
        });
        if (checkedChildNodes === 0) {
            this.checkboxes.forEach(function (item, index) {
                item.value = true;
            });
            this._parentChecked = true;
            this._parentInter = false;
        }
        else {
            this.checkboxes.forEach(function (item, index) {
                item.value = false;
            });
            this._parentChecked = false;
            this._parentInter = false;
        }
        this.changeRef.markForCheck();
    };
    CheckboxTreeComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ra-ui-checkbox-tree',
                    template: "<ra-ui-checkbox [(ngModel)]=\"_parentChecked\" (ngModelChange)=\"_parentChanged($event)\" [indeterminate]=\"_parentInter\" (indeterminateChange)=\"_parentIndeterminateChanged($event)\" [label]=\"label\" [config]=\"_config\" [disabled]=\"disabled\" [translateParams]=\"translateParams\" #parentNode></ra-ui-checkbox><div class=\"content\"><ng-content></ng-content></div>",
                    styles: [""],
                    changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    encapsulation: _angular_core.ViewEncapsulation.None
                },] },
    ];
    CheckboxTreeComponent.ctorParameters = function () { return [
        { type: _angular_core.ChangeDetectorRef, },
        { type: undefined, decorators: [{ type: _angular_core.Inject, args: [_raWebTechUiToolkit_commonUtils.LOGGER,] },] },
    ]; };
    CheckboxTreeComponent.propDecorators = {
        "config": [{ type: _angular_core.Input },],
        "label": [{ type: _angular_core.Input },],
        "disabled": [{ type: _angular_core.Input },],
        "translateParams": [{ type: _angular_core.Input },],
        "valueChange": [{ type: _angular_core.Output },],
        "indeterminateChange": [{ type: _angular_core.Output },],
        "checkboxes": [{ type: _angular_core.ContentChildren, args: [CheckboxComponent,] },],
        "parentNode": [{ type: _angular_core.ViewChild, args: ['parentNode',] },],
    };
    return CheckboxTreeComponent;
}());

var RaUiCheckboxTreeModule = (function () {
    function RaUiCheckboxTreeModule() {
    }
    RaUiCheckboxTreeModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    declarations: [
                        CheckboxTreeComponent
                    ],
                    imports: [
                        _angular_common.CommonModule,
                        RaUiCheckboxModule,
                        _angular_forms.FormsModule,
                        _angular_forms.ReactiveFormsModule
                    ],
                    exports: [
                        CheckboxTreeComponent
                    ]
                },] },
    ];
    return RaUiCheckboxTreeModule;
}());

var RadioButtonConfig = (function () {
    function RadioButtonConfig(options, logger) {
        if (options === void 0) { options = ({}); }
        this.logger = logger;
    }
    RadioButtonConfig.prototype.onInvalidType = function (propName, expected, got) {
        this.logger && _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput('RadioButtonConfig', propName, got, expected, this.logger);
    };
    RadioButtonConfig = __decorate([
        _raWebTechUiToolkit_commonUtils.Immutable,
        _raWebTechUiToolkit_commonUtils.Config({
            enableImmediateArrow: {
                default: false,
                type: 'boolean'
            },
            enableDirtyFlag: {
                default: false,
                type: 'boolean'
            },
            disableAcceleratorKey: {
                default: false,
                type: 'boolean'
            },
            disableTooltip: {
                default: false,
                type: 'boolean'
            },
            tabIndex: {
                default: undefined,
                type: 'number'
            }
        }),
        __metadata("design:paramtypes", [Object, Object])
    ], RadioButtonConfig);
    return RadioButtonConfig;
}());
var RadioButtonComponent = (function (_super) {
    __extends(RadioButtonComponent, _super);
    function RadioButtonComponent(changeRef, ngControl, rippleOption, logger) {
        var _this = _super.call(this, changeRef, ngControl, logger) || this;
        _this.changeRef = changeRef;
        _this.ngControl = ngControl;
        _this.rippleOption = rippleOption;
        _this.logger = logger;
        _this._value = undefined;
        _this._config = new RadioButtonConfig(undefined, _this.logger);
        _this._translateParams = {};
        _this.valueChange = new _angular_core.EventEmitter();
        _this.disabledChange = new _angular_core.EventEmitter();
        _this.focusChange = new _angular_core.EventEmitter();
        _this._isRippleEffectDisabled = false;
        _this._componentName = 'RadioButtonComponent';
        _this._itemFocus = [];
        _this._staticTextConfig = new _raWebTechUiToolkit_commonUtils.StaticTextConfig();
        _this._haveFocus = false;
        _this.timeout = 0;
        _this._showRadio = false;
        _this.propagateChange = function (x) { return rxjs.noop(); };
        _this.onTouched = function () { return rxjs.noop(); };
        if (_this.rippleOption && _this.rippleOption.disabled) {
            _this._isRippleEffectDisabled = true;
        }
        return _this;
    }
    Object.defineProperty(RadioButtonComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (val) {
            if (!_raWebTechUiToolkit_commonUtils.isValueType(val)) {
                this._value = undefined;
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(this._componentName, 'value', val, 'string|number|boolean', this.logger);
            }
            else {
                this._value = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioButtonComponent.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (items) {
            if (items instanceof Array) {
                this._items = items;
            }
            else {
                this._items = [];
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(this._componentName, 'items', items, 'IInnerItem[]', this.logger);
            }
            Object.freeze(this._items);
            this._updateVisibility();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioButtonComponent.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (disabled) {
            if (!lodash.isBoolean(disabled)) {
                this.setDisabledState(false);
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(this._componentName, 'disabled', disabled, 'boolean', this.logger);
            }
            else {
                this.setDisabledState(disabled);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioButtonComponent.prototype, "config", {
        get: function () {
            return this._config;
        },
        set: function (val) {
            if (!_raWebTechUiToolkit_commonUtils.TypeUtils.isObject(val)) {
                this._config = new RadioButtonConfig(undefined);
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(this._componentName, 'config', val, 'IRadioButtonConfig', this.logger);
            }
            else {
                this._config = new RadioButtonConfig(val, this.logger);
            }
            this._onConfigChanged();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioButtonComponent.prototype, "translateParams", {
        get: function () {
            return this._translateParams;
        },
        set: function (val) {
            if (!_raWebTechUiToolkit_commonUtils.TypeUtils.isObject(val)) {
                this._translateParams = {};
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(this._componentName, 'translateParams', typeof val, 'object', this.logger);
            }
            else {
                this._translateParams = val;
            }
            this.changeRef.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    RadioButtonComponent.prototype.ngOnInit = function () {
        this._onConfigChanged();
    };
    RadioButtonComponent.prototype.writeValue = function (value) {
        this.value = FormTypeUtils.writeValueCheck({
            component: this._componentName,
            receivedVal: value,
            defaultVal: undefined,
            expectedType: 'string|number|boolean',
            checkFun: _raWebTechUiToolkit_commonUtils.isValueType,
            logger: this.logger,
            ngControl: this._ngControl
        });
        this.changeRef.markForCheck();
    };
    RadioButtonComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    RadioButtonComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    RadioButtonComponent.prototype.setDisabledState = function (isDisabled) {
        if (isDisabled !== this._disabled) {
            this._disabled = isDisabled;
            this.disabledChange.next(isDisabled);
            this.changeRef.markForCheck();
        }
    };
    RadioButtonComponent.prototype._radiobuttonChanged = function (select) {
        this.value = select;
        this.propagateChange(select);
        this.valueChange.emit(select);
    };
    RadioButtonComponent.prototype.validate = function (param) {
        this.items.forEach(function (item) {
            if (item.value === param.value) {
                return null;
            }
        });
        return {
            InvalidValue: true
        };
    };
    RadioButtonComponent.prototype.focus = function (index) {
        var _this = this;
        if (!lodash.isNumber(index)) {
            index = lodash.findIndex(this._items, function (item) {
                return item.value === _this.value;
            });
        }
        var option = this._radiobuttonGroup._radios.toArray()[index] ||
            this._radiobuttonGroup._radios.toArray()[0];
        if (!lodash.isNil(option)) {
            option.focus();
        }
    };
    RadioButtonComponent.prototype._setFocus = function (index, isFocused) {
        var _this = this;
        this._haveFocus = isFocused;
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
        if (!isFocused) {
            this._itemFocus[index] = false;
            this.timeout = window.setTimeout(function () {
                if (!_this._haveFocus) {
                    _this.onTouched();
                    _this.focusChange.emit(isFocused);
                }
            }, 100);
        }
        else {
            this.focusChange.emit(isFocused);
            this._itemFocus[index] = !this._getDisableState(this.items[index]);
        }
    };
    RadioButtonComponent.prototype._getName = function (item) {
        return item.label || item.value.toString();
    };
    RadioButtonComponent.prototype._getDisableState = function (item) {
        return item.disabled || this.disabled;
    };
    RadioButtonComponent.prototype._isImmediateArrowVisible = function (item) {
        return this.config.enableImmediateArrow &&
            item.value === this.value;
    };
    RadioButtonComponent.prototype._isDirtyFlagVisible = function (item) {
        return this._isNgControlDirty() && (item.value === this.value) && (this.config.enableDirtyFlag || false);
    };
    RadioButtonComponent.prototype._onConfigChanged = function () {
        this._staticTextConfig = new _raWebTechUiToolkit_commonUtils.StaticTextConfig({
            disableAcceleratorKey: this.config.disableAcceleratorKey,
            disableTooltip: this.config.disableTooltip,
            cursorStyle: _raWebTechUiToolkit_commonUtils.CursorStyle.Pointer
        });
        this._tabIndex = this.config.tabIndex;
    };
    RadioButtonComponent.prototype._updateVisibility = function () {
        this._showRadio = !lodash.isNil(this.items) && this.items.length > 0;
    };
    RadioButtonComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ra-ui-radio-button',
                    template: "<div class=\"wrapper\" *ngIf=\"_showRadio; else noOptions\"><mat-radio-group [disabled]=\"disabled\" [ngModel]=\"value\" (ngModelChange)=\"_radiobuttonChanged($event)\" #model=\"ngModel\" #radioGroup><div *ngFor=\"let item of items; let i = index\"><mat-radio-button [value]=\"item.value\" [tabIndex]=\"_tabIndex\" (focusin)=\"_setFocus(i, true)\" (focusout)=\"_setFocus(i, false)\" [ngClass]=\"{'isFocused': _itemFocus[i]}\" [disabled]=\"item.disabled\" (click)=\"focus(i)\" class=\"rdbtn\"><div class=\"static-text-wrapper\" [ngClass]=\"{ 'immediate-arrow': config.enableImmediateArrow, 'dirty-flag': config.enableDirtyFlag} \"><ra-ui-static-text [value]=\"_getName(item)\" [disabled]=\"_getDisableState(item)\" [config]=\"_staticTextConfig\" [translateParams]=\"translateParams\" (onAccelerator)=\"focus(i)\"></ra-ui-static-text></div><ra-ui-dirty-flag [attr.disabled]=\"disabled\" *ngIf=\"_isDirtyFlagVisible(item)\"></ra-ui-dirty-flag><ra-ui-immediate-arrow *ngIf=\"_isImmediateArrowVisible(item)\"></ra-ui-immediate-arrow></mat-radio-button></div></mat-radio-group></div><ng-template #noOptions><div><ra-ui-static-text value=\"RA_UI_FORM_SYSTEM.EMPTY.RADIO\" [translateParams]=\"translateParams\"></ra-ui-static-text></div></ng-template>",
                    styles: ["ra-ui-radio-button{display:block}"],
                    changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    encapsulation: _angular_core.ViewEncapsulation.None
                },] },
    ];
    RadioButtonComponent.ctorParameters = function () { return [
        { type: _angular_core.ChangeDetectorRef, },
        { type: _angular_forms.NgControl, decorators: [{ type: _angular_core.Self }, { type: _angular_core.Optional },] },
        { type: undefined, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Inject, args: [_angular_material.MAT_RIPPLE_GLOBAL_OPTIONS,] },] },
        { type: undefined, decorators: [{ type: _angular_core.Inject, args: [_raWebTechUiToolkit_commonUtils.LOGGER,] },] },
    ]; };
    RadioButtonComponent.propDecorators = {
        "value": [{ type: _angular_core.Input },],
        "items": [{ type: _angular_core.Input },],
        "disabled": [{ type: _angular_core.Input },],
        "config": [{ type: _angular_core.Input },],
        "translateParams": [{ type: _angular_core.Input },],
        "valueChange": [{ type: _angular_core.Output },],
        "disabledChange": [{ type: _angular_core.Output },],
        "focusChange": [{ type: _angular_core.Output },],
        "_isRippleEffectDisabled": [{ type: _angular_core.HostBinding, args: ['class.ripple-effect-disabled',] },],
        "_radiobuttonGroup": [{ type: _angular_core.ViewChild, args: [_angular_material.MatRadioGroup,] },],
    };
    return RadioButtonComponent;
}(FormControlBase));

var RaUiRadioButtonModule = (function () {
    function RaUiRadioButtonModule() {
    }
    RaUiRadioButtonModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    declarations: [
                        RadioButtonComponent
                    ],
                    imports: [
                        _angular_common.CommonModule,
                        _angular_forms.FormsModule,
                        _angular_forms.ReactiveFormsModule,
                        _raWebTechUiToolkit_commonUtils.RaUiStaticTextModule,
                        _angular_material.MatRadioModule,
                        _raWebTechUiToolkit_commonUtils.RaUiImmediateArrowModule,
                        _raWebTechUiToolkit_commonUtils.RaUiDirtyFlagModule
                    ],
                    exports: [
                        RadioButtonComponent
                    ]
                },] },
    ];
    return RaUiRadioButtonModule;
}());

var DEFAULT_ICON = 'ra-icon-status';
var ActivityStatusConfig = (function () {
    function ActivityStatusConfig(options, logger) {
        if (options === void 0) { options = ({}); }
        this.logger = logger;
    }
    ActivityStatusConfig.prototype.onInvalidType = function (propName, expected, got) {
        this.logger && _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput('ActivityStatusConfig', propName, got, expected, this.logger);
    };
    ActivityStatusConfig = __decorate([
        _raWebTechUiToolkit_commonUtils.Immutable,
        _raWebTechUiToolkit_commonUtils.Config({
            defaultState: {
                default: undefined,
                type: 'object'
            },
            states: {
                default: [],
                type: 'array'
            },
            disableTooltip: {
                default: false,
                type: 'boolean'
            }
        }),
        __metadata("design:paramtypes", [Object, Object])
    ], ActivityStatusConfig);
    return ActivityStatusConfig;
}());
var ActivityStatusComponent = (function (_super) {
    __extends(ActivityStatusComponent, _super);
    function ActivityStatusComponent(changeRef, ngControl, logger) {
        var _this = _super.call(this, ngControl) || this;
        _this.changeRef = changeRef;
        _this.ngControl = ngControl;
        _this.logger = logger;
        _this._value = undefined;
        _this._translateParams = {};
        _this._config = new ActivityStatusConfig({ states: [] }, _this.logger);
        _this._componentName = 'ActivityStatusComponent';
        _this._staticTextConfig = new _raWebTechUiToolkit_commonUtils.StaticTextConfig();
        _this._showActivityStatus = false;
        _this.propagateChange = function (value) { return rxjs.noop(); };
        _this.onTouched = function () { return rxjs.noop(); };
        return _this;
    }
    Object.defineProperty(ActivityStatusComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (val) {
            if (!_raWebTechUiToolkit_commonUtils.isValueType(val)) {
                this._value = undefined;
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(this._componentName, 'value', val, 'string|number|boolean', this.logger);
            }
            else {
                this._value = val;
            }
            this._isVisible();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivityStatusComponent.prototype, "config", {
        get: function () {
            return this._config;
        },
        set: function (val) {
            if (!_raWebTechUiToolkit_commonUtils.TypeUtils.isObject(val)) {
                this._config = new ActivityStatusConfig({ states: [] }, this.logger);
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(this._componentName, 'config', val, 'IActivityStatusConfig', this.logger);
            }
            else {
                this._config = new ActivityStatusConfig(val, this.logger);
            }
            this._isVisible();
            this.onConfigChanged();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivityStatusComponent.prototype, "translateParams", {
        get: function () {
            return this._translateParams;
        },
        set: function (val) {
            if (!_raWebTechUiToolkit_commonUtils.TypeUtils.isObject(val)) {
                this._translateParams = {};
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(this._componentName, 'translateParams', typeof val, 'object', this.logger);
            }
            else {
                this._translateParams = val;
            }
            this.changeRef.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    ActivityStatusComponent.prototype.ngOnInit = function () {
        this.onConfigChanged();
    };
    ActivityStatusComponent.prototype.writeValue = function (value) {
        this.value = FormTypeUtils.writeValueCheck({
            component: this._componentName,
            receivedVal: value,
            defaultVal: undefined,
            expectedType: 'string|number|boolean',
            checkFun: _raWebTechUiToolkit_commonUtils.isValueType,
            logger: this.logger,
            ngControl: this._ngControl
        });
        if (!this.config) {
            return;
        }
        this.changeRef.markForCheck();
    };
    ActivityStatusComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    ActivityStatusComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    ActivityStatusComponent.prototype.setDisabledState = function (isDisabled) {
        rxjs.noop();
    };
    ActivityStatusComponent.prototype.focus = function () {
        rxjs.noop();
    };
    ActivityStatusComponent.prototype.getSelectedItem = function () {
        for (var _i = 0, _a = this.config.states; _i < _a.length; _i++) {
            var state = _a[_i];
            if (state.value === this.value) {
                return state;
            }
        }
        return undefined;
    };
    ActivityStatusComponent.prototype.isItemInConfig = function () {
        if (!this.config || !this.config.states) {
            return false;
        }
        for (var _i = 0, _a = this.config.states; _i < _a.length; _i++) {
            var state = _a[_i];
            if (state.value === this.value) {
                return true;
            }
        }
        return false;
    };
    ActivityStatusComponent.prototype._isVisible = function () {
        this._showActivityStatus = this.isItemInConfig() || this.config.defaultState !== undefined;
    };
    ActivityStatusComponent.prototype._getColor = function () {
        var selectedItem = this.getSelectedItem();
        return selectedItem ?
            selectedItem.color :
            this.config.defaultState && this.config.defaultState.color;
    };
    ActivityStatusComponent.prototype._getIcon = function () {
        var selectedItem = this.getSelectedItem();
        return selectedItem ?
            this._addIconPrefix(selectedItem.icon) || DEFAULT_ICON :
            (this.config.defaultState && this._addIconPrefix(this.config.defaultState.icon)) || DEFAULT_ICON;
    };
    ActivityStatusComponent.prototype._getText = function () {
        var selectedItem = this.getSelectedItem();
        var label = selectedItem ?
            selectedItem.label :
            this.config.defaultState && this.config.defaultState.label;
        return label || '';
    };
    ActivityStatusComponent.prototype.onConfigChanged = function () {
        this._staticTextConfig = new _raWebTechUiToolkit_commonUtils.StaticTextConfig({
            disableAcceleratorKey: true,
            disableTooltip: this.config.disableTooltip,
            cursorStyle: _raWebTechUiToolkit_commonUtils.CursorStyle.Default
        });
    };
    ActivityStatusComponent.prototype._addIconPrefix = function (icon) {
        if (lodash.isNil(icon)) {
            return undefined;
        }
        return icon.indexOf('ra-icon-') === -1 ? 'ra-icon-' + icon : icon;
    };
    ActivityStatusComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ra-ui-activity-status',
                    template: "<div class=\"wrapper\" *ngIf=\"_showActivityStatus; else noOptions\"><mat-icon [class]=\"_getIcon()\" [style.color]=\"_getColor()\"></mat-icon><ra-ui-static-text [value]=\"_getText()\" [config]=\"_staticTextConfig\" [translateParams]=\"translateParams\"></ra-ui-static-text></div><ng-template #noOptions><div><ra-ui-static-text value=\"RA_UI_FORM_SYSTEM.EMPTY.ACTIVITY\" [translateParams]=\"translateParams\"></ra-ui-static-text></div></ng-template>",
                    styles: ["ra-ui-activity-status{display:block;clear:both;overflow:hidden}ra-ui-activity-status mat-icon{float:left;margin-right:8px;font-style:inherit;font-size:1.2em;text-align:center}"],
                    changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    encapsulation: _angular_core.ViewEncapsulation.None
                },] },
    ];
    ActivityStatusComponent.ctorParameters = function () { return [
        { type: _angular_core.ChangeDetectorRef, },
        { type: _angular_forms.NgControl, decorators: [{ type: _angular_core.Self }, { type: _angular_core.Optional },] },
        { type: undefined, decorators: [{ type: _angular_core.Inject, args: [_raWebTechUiToolkit_commonUtils.LOGGER,] },] },
    ]; };
    ActivityStatusComponent.propDecorators = {
        "value": [{ type: _angular_core.Input },],
        "config": [{ type: _angular_core.Input },],
        "translateParams": [{ type: _angular_core.Input },],
    };
    return ActivityStatusComponent;
}(_raWebTechUiToolkit_commonUtils.ControlValueAccessorBase));

var RaUiActivityStatusModule = (function () {
    function RaUiActivityStatusModule() {
    }
    RaUiActivityStatusModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    declarations: [
                        ActivityStatusComponent
                    ],
                    imports: [
                        _angular_common.CommonModule,
                        _angular_forms.FormsModule,
                        _angular_forms.ReactiveFormsModule,
                        _raWebTechUiToolkit_commonUtils.RaUiStaticTextModule,
                        _angular_material.MatIconModule
                    ],
                    exports: [
                        ActivityStatusComponent
                    ]
                },] },
    ];
    return RaUiActivityStatusModule;
}());

var FloatPlaceholder = {
    Auto: 'auto',
    Always: 'always',
    Never: 'never',
};
function isFloatPlaceholder(val) {
    return val === FloatPlaceholder.Auto || val === FloatPlaceholder.Always || val === FloatPlaceholder.Never;
}


var MAT_FORM_FIELD_DEFAULT_WIDTH = 180;

var FloatDisplayType = (function () {
    function FloatDisplayType(minDigitsAfterPoint, maxDigitsAfterPoint) {
        this.DEFAULT_DECIMAL_POINT_CHAR = '.';
        this.TOKEN_DECIMAL_POINT = 'RA_UI_FORM_SYSTEM.INPUT.DECIMAL_POINT';
        this.id = FloatDisplayType.ID;
        this.changeValue = new rxjs.Subject();
        this.pattern = /^[+-]?(?:[0-9]\d*(?:[eE][+-]?(?:[1-9]\d*)?$)?)?(?:(?:\.\d*(?:\d+[eE][+-]?(?:[1-9]\d*)?)?)?)?$/;
        this.decimalPointChar = this.DEFAULT_DECIMAL_POINT_CHAR;
        this.lastValueAsString = '';
        !lodash.isNil(minDigitsAfterPoint) && minDigitsAfterPoint <= 0 && (minDigitsAfterPoint = undefined);
        !lodash.isNil(maxDigitsAfterPoint) && maxDigitsAfterPoint <= 0 && (maxDigitsAfterPoint = undefined);
        this.minDigitsAfterPoint = minDigitsAfterPoint;
        this.maxDigitsAfterPoint = maxDigitsAfterPoint;
        this.updatePattern();
    }
    FloatDisplayType.prototype.isInputValidFn = function (s) {
        if (s === 'Infinity' || s === 'NaN' || this.pattern.test(s)) {
            this.lastValueAsString = this.onBlurWhenNumber(s);
            return true;
        }
        return false;
    };
    FloatDisplayType.prototype.toStringFn = function (n) {
        var numAsString = n.toString(10);
        if (!lodash.isFinite(n)) {
            return numAsString;
        }
        if (!lodash.isNil(this.maxDigitsAfterPoint)) {
            n = lodash.round(n, this.maxDigitsAfterPoint);
            numAsString = n.toString();
        }
        if (!lodash.isNil(this.minDigitsAfterPoint)) {
            ((n * Math.pow(10, this.minDigitsAfterPoint - 1)) % 1 === 0) && (numAsString = n.toFixed(this.minDigitsAfterPoint));
            (this.toNumberFn(numAsString) === 0) && (numAsString = numAsString.replace(/^-/, ''));
        }
        return numAsString.replace(this.DEFAULT_DECIMAL_POINT_CHAR, this.decimalPointChar);
    };
    FloatDisplayType.prototype.toNumberFn = function (s) {
        return parseFloat(s.replace(this.decimalPointChar, this.DEFAULT_DECIMAL_POINT_CHAR));
    };
    FloatDisplayType.prototype.onBlurWhenNumber = function (s) {
        var number = this.toNumberFn(s);
        if (!this.pattern.test(s) ||
            number === Infinity || isNaN(number) ||
            (this.minDigitsAfterPoint === undefined && /[eE]/.test(s))) {
            return s;
        }
        return this.toStringFn(number);
    };
    FloatDisplayType.prototype.subscribeTranslateService = function (translateService) {
        var _this = this;
        if (!translateService) {
            return;
        }
        this.onLangChangeSubscription = translateService.onLangChange.subscribe(function () {
            _this.tokenSubscription = translateService.get(_this.TOKEN_DECIMAL_POINT).subscribe(function (pointChar) {
                var lastChar = _this.decimalPointChar;
                _this.decimalPointChar = (pointChar !== _this.TOKEN_DECIMAL_POINT) ? pointChar : _this.DEFAULT_DECIMAL_POINT_CHAR;
                if (_this.decimalPointChar !== lastChar) {
                    _this.updatePattern();
                    _this.changeValue.next(_this.lastValueAsString.replace(lastChar, _this.decimalPointChar));
                }
            });
        });
    };
    FloatDisplayType.prototype.unsubscribeTranslateService = function () {
        this.onLangChangeSubscription && this.onLangChangeSubscription.unsubscribe();
        this.tokenSubscription && this.tokenSubscription.unsubscribe();
    };
    FloatDisplayType.prototype.updatePattern = function () {
        var digitsPattern = this.maxDigitsAfterPoint ? '{0,' + this.maxDigitsAfterPoint + '}' : '*';
        var decimalPointPattern = '\\' + this.decimalPointChar;
        this.pattern = new RegExp('^[+-]?(?:[0-9]\\d*(?:[eE][+-]?(?:[1-9]\\d*)?$)?)?(?:(?:' +
            decimalPointPattern + '\\d' + digitsPattern + '(?:[eE][+-]?(?:[1-9]\\d*)?)?)?)?$');
    };
    FloatDisplayType.ID = 'float';
    return FloatDisplayType;
}());

var StringDisplayType = (function () {
    function StringDisplayType() {
        this.id = StringDisplayType.ID;
    }
    StringDisplayType.prototype.isInputValidFn = function (s) {
        var pattern = /.*?/;
        return pattern.test(s);
    };
    StringDisplayType.ID = 'str';
    return StringDisplayType;
}());

var InputType = {
    String: 'string',
    Number: 'number',
};

function isDisplayType(val) {
    return lodash.isNil(val) ? false : (val.hasOwnProperty('id') && val.isInputValidFn !== undefined);
}
function isInputType(val) {
    return val === InputType.String || val === InputType.Number;
}
var InputConfig = (function () {
    function InputConfig(options, logger) {
        if (options === void 0) { options = ({}); }
        this.logger = logger;
        if (!isInputType(options.inputType)) {
            this.onInvalidType('inputType', 'InputType', options.inputType);
            this.inputType = InputType.String;
        }
        else {
            this.inputType = options.inputType;
        }
        if (!isDisplayType(options.displayType)) {
            this.onInvalidType('displayType', 'IDisplayType', options.displayType);
            this.displayType = options.inputType === InputType.Number ? new FloatDisplayType() : new StringDisplayType();
        }
        else {
            this.displayType = options.displayType;
        }
        if (!lodash.isBoolean(options.enableFlatMode)) {
            this.onInvalidType('enableFlatMode', 'boolean', options.enableFlatMode);
            this.enableFlatMode = false;
        }
        else {
            this.enableFlatMode = options.enableFlatMode;
        }
        if (!isFloatPlaceholder(options.floatPlaceholder)) {
            this.onInvalidType('floatPlaceholder', 'FloatPlaceholder', options.floatPlaceholder);
            this.floatPlaceholder = FloatPlaceholder.Auto;
        }
        else {
            this.floatPlaceholder = options.floatPlaceholder;
        }
        if (this.enableFlatMode && this.floatPlaceholder === FloatPlaceholder.Auto) {
            this.floatPlaceholder = FloatPlaceholder.Always;
        }
    }
    InputConfig.prototype.onInvalidType = function (propName, expected, got) {
        this.logger && _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput('InputConfig', propName, got, expected, this.logger);
    };
    InputConfig = __decorate([
        _raWebTechUiToolkit_commonUtils.Immutable,
        _raWebTechUiToolkit_commonUtils.Config({
            textAlign: {
                default: _raWebTechUiToolkit_commonUtils.TextAlign.Left,
                type: _raWebTechUiToolkit_commonUtils.isTextAlign,
                typeDisplayName: 'TextAlign'
            },
            tabIndex: {
                default: undefined,
                type: 'number'
            },
            maxLength: {
                default: undefined,
                type: 'number'
            },
            numberPadding: {
                default: 0,
                type: 'number'
            },
            enableImmediateArrow: {
                default: false,
                type: 'boolean'
            },
            enableDirtyFlag: {
                default: false,
                type: 'boolean'
            },
            fillParent: {
                default: false,
                type: 'boolean'
            },
            disableAcceleratorKey: {
                default: false,
                type: 'boolean'
            },
            disableTooltip: {
                default: false,
                type: 'boolean'
            }
        }),
        __metadata("design:paramtypes", [Object, Object])
    ], InputConfig);
    return InputConfig;
}());
var InputComponent = (function (_super) {
    __extends(InputComponent, _super);
    function InputComponent(changeRef, ngControl, translateService, logger) {
        var _this = _super.call(this, changeRef, ngControl, logger) || this;
        _this.changeRef = changeRef;
        _this.translateService = translateService;
        _this.logger = logger;
        _this._value = undefined;
        _this._label = '';
        _this._translateParams = {};
        _this._hintMessageStart = '';
        _this._hintMessageEnd = '';
        _this._disabled = false;
        _this.disabledChange = new _angular_core.EventEmitter();
        _this.valueChange = new _angular_core.EventEmitter();
        _this.focusChange = new _angular_core.EventEmitter();
        _this._flatMode = false;
        _this.__matInputValue = '';
        _this._componentName = 'InputComponent';
        _this._floatPlaceholder = '';
        _this._width = '';
        _this._staticTextConfig = new _raWebTechUiToolkit_commonUtils.StaticTextConfig();
        _this._leftMessageConfig = new _raWebTechUiToolkit_commonUtils.StaticTextConfig();
        _this._rightMessageConfig = new _raWebTechUiToolkit_commonUtils.StaticTextConfig();
        _this.onChangeCallback = rxjs.noop;
        _this.onTouched = function () { return rxjs.noop(); };
        return _this;
    }
    Object.defineProperty(InputComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (val) {
            if (!_raWebTechUiToolkit_commonUtils.TypeUtils.isStringOrNumber(val)) {
                this._value = undefined;
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(this._componentName, 'value', val, (this.config && this.config.inputType) || InputType.String, this.logger);
            }
            else {
                this._value = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputComponent.prototype, "label", {
        get: function () {
            return this._label;
        },
        set: function (val) {
            if (!lodash.isString(val)) {
                this._label = '';
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(this._componentName, 'label', val, 'string', this.logger);
            }
            else {
                this._label = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputComponent.prototype, "translateParams", {
        get: function () {
            return this._translateParams;
        },
        set: function (val) {
            if (!_raWebTechUiToolkit_commonUtils.TypeUtils.isObject(val)) {
                this._translateParams = {};
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(this._componentName, 'translateParams', val, 'object', this.logger);
            }
            else {
                this._translateParams = val;
            }
            this.changeRef.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputComponent.prototype, "config", {
        get: function () {
            return this._config;
        },
        set: function (val) {
            if (!_raWebTechUiToolkit_commonUtils.TypeUtils.isObject(val)) {
                this._config = new InputConfig(undefined, this.logger);
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(this._componentName, 'config', val, 'IInputConfig', this.logger);
            }
            else {
                this._config = new InputConfig(val, this.logger);
            }
            this.onConfigChanged();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputComponent.prototype, "hintMessageStart", {
        get: function () {
            return this._hintMessageStart;
        },
        set: function (newMessage) {
            if (!lodash.isString(newMessage)) {
                this._hintMessageStart = '';
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(this._componentName, 'hintMessageStart', newMessage, 'string', this.logger);
            }
            else {
                this._hintMessageStart = newMessage;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputComponent.prototype, "hintMessageEnd", {
        get: function () {
            return this._hintMessageEnd;
        },
        set: function (newMessage) {
            if (!lodash.isString(newMessage)) {
                this._hintMessageEnd = '';
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(this._componentName, 'hintMessageEnd', newMessage, 'string', this.logger);
            }
            else {
                this._hintMessageEnd = newMessage;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputComponent.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            if (!lodash.isBoolean(value)) {
                this.setDisabledState(false);
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(this._componentName, 'disabled', value, 'boolean', this.logger);
            }
            else {
                this.setDisabledState(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputComponent.prototype, "_matInputValue", {
        get: function () {
            return this.__matInputValue;
        },
        set: function (val) {
            this.setValue(val);
        },
        enumerable: true,
        configurable: true
    });
    InputComponent.prototype.ngOnChanges = function (changes) {
        var typeChanges = false;
        if (changes["config"]) {
            var previous = changes["config"].previousValue;
            var current = changes["config"].currentValue;
            typeChanges = !previous || ((previous.inputType !== current.inputType) || (previous.displayType !== current.displayType));
            this.config = new InputConfig(current);
        }
        if (changes["value"]) {
            !this._displayType && this.setDisplayType(changes["value"].currentValue);
            !_raWebTechUiToolkit_commonUtils.areValuesEqual(changes["value"].currentValue, this.previousValue) && this.setValue(changes["value"].currentValue, false, false);
        }
        else if (typeChanges) {
            typeChanges && this.setValue(this.value, false, false);
        }
    };
    InputComponent.prototype.ngOnInit = function () {
        !this.config && (this.config = new InputConfig());
    };
    InputComponent.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
        this.unsubscribeTranslateService();
        this.unsubscribeValueChange();
    };
    InputComponent.prototype.writeValue = function (value) {
        value = FormTypeUtils.writeValueCheck({
            component: this._componentName,
            receivedVal: value,
            defaultVal: undefined,
            expectedType: (this.config && this.config.inputType) || InputType.String,
            checkFun: _raWebTechUiToolkit_commonUtils.TypeUtils.isStringOrNumber,
            logger: this.logger,
            ngControl: this._ngControl
        });
        if (value === null || (!lodash.isString(value) && !lodash.isNumber(value))) {
            this.__matInputValue = '';
            this.value = undefined;
        }
        else {
            (!this._displayType) && (this.setDisplayType(value));
            this.setValue(value, false, false);
        }
        this.changeRef.markForCheck();
    };
    InputComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    InputComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    InputComponent.prototype.setDisabledState = function (disabled) {
        if (disabled !== this._disabled) {
            this._disabled = disabled;
            this.disabledChange.next(disabled);
            this.changeRef.markForCheck();
        }
    };
    InputComponent.prototype.focus = function (selectText) {
        if (selectText === void 0) { selectText = false; }
        this._input.nativeElement.focus();
        selectText && this._input.nativeElement.select();
    };
    InputComponent.prototype._onKeyPress = function (event) {
        if (event.altKey || event.ctrlKey || event.metaKey) {
            return true;
        }
        var eventValue = String.fromCharCode(event.keyCode);
        return this.shouldWriteValueFromEvent(eventValue, event);
    };
    InputComponent.prototype._onPaste = function (event) {
        var eventValue = _raWebTechUiToolkit_commonUtils.BrowserUtils.getClipboardData(event);
        return this.shouldWriteValueFromEvent(eventValue, event);
    };
    InputComponent.prototype._onFocusOut = function () {
        if (this.config.inputType === InputType.Number && this._displayType.onBlurWhenNumber) {
            this.__matInputValue = this._displayType.onBlurWhenNumber(this.__matInputValue);
        }
        this.numberPadding && this.setPadding();
        this.onTouched();
        this._emitFocusChange(false);
    };
    InputComponent.prototype.setPadding = function () {
        var beforePointLength = this._matInputValue.replace(/^-|\.\d*$/g, '').length;
        if (!lodash.isNumber(this.value) ||
            (lodash.isNumber(this.value) && !lodash.isFinite(this.value)) ||
            /e|E/.test(this.__matInputValue) ||
            this.numberPadding <= beforePointLength) {
            return;
        }
        var zeroesToAdd = '0'.repeat(this.numberPadding - beforePointLength);
        this.__matInputValue = this._matInputValue.replace(/(^-)?(.*)/, '$1' + zeroesToAdd + '$2');
    };
    InputComponent.prototype._emitFocusChange = function (focus) {
        this.focusChange.emit(focus);
    };
    InputComponent.prototype._showDirtyFlag = function () {
        return this._isNgControlDirty() && (this.config.enableDirtyFlag || false);
    };
    InputComponent.prototype.onConfigChanged = function () {
        this._floatPlaceholder = ((this.config.floatPlaceholder)).toLowerCase();
        this._tabIndex = this.config.tabIndex;
        this._maxLength = this.config.maxLength;
        this._width = this.config.fillParent ? '100%' : MAT_FORM_FIELD_DEFAULT_WIDTH + 'px';
        this._staticTextConfig = new _raWebTechUiToolkit_commonUtils.StaticTextConfig({
            disableAcceleratorKey: this.config.disableAcceleratorKey,
            disableTooltip: this.config.disableTooltip
        });
        this._leftMessageConfig = new _raWebTechUiToolkit_commonUtils.StaticTextConfig({
            disableTooltip: this.config.disableTooltip,
            textAlign: _raWebTechUiToolkit_commonUtils.TextAlign.Left,
            cursorStyle: _raWebTechUiToolkit_commonUtils.CursorStyle.Default
        });
        this._rightMessageConfig = new _raWebTechUiToolkit_commonUtils.StaticTextConfig({
            disableTooltip: this.config.disableTooltip,
            textAlign: _raWebTechUiToolkit_commonUtils.TextAlign.Right,
            cursorStyle: _raWebTechUiToolkit_commonUtils.CursorStyle.Default
        });
        this._flatMode = this.config.enableFlatMode;
        this.numberPadding = this.config.numberPadding || 0;
        this.setDisplayType(this.value);
    };
    InputComponent.prototype.setDisplayType = function (value) {
        var _this = this;
        if (!this.config) {
            var type = (typeof value === InputType.Number) ? InputType.Number : InputType.String;
            this.config = new InputConfig({ inputType: type });
        }
        if (this.config.displayType && this.config.displayType !== this._displayType) {
            this.unsubscribeTranslateService();
            this.unsubscribeValueChange();
            this._displayType = this.config.displayType;
            this._displayType.subscribeTranslateService && this._displayType.subscribeTranslateService(this.translateService);
            if (this._displayType.changeValue) {
                this.valueChangeSubscription = this._displayType.changeValue.subscribe(function (newValue) {
                    _this.setValue(newValue, false, true);
                });
            }
        }
    };
    InputComponent.prototype.unsubscribeTranslateService = function () {
        this._displayType && this._displayType.unsubscribeTranslateService && this._displayType.unsubscribeTranslateService();
    };
    InputComponent.prototype.unsubscribeValueChange = function () {
        this.valueChangeSubscription && this.valueChangeSubscription.unsubscribe();
    };
    InputComponent.prototype.shouldWriteValue = function (value) {
        if (lodash.isNil(value)) {
            value = '';
        }
        else if (typeof value === 'number') {
            value = this._displayType.toStringFn ? this._displayType.toStringFn(value) : value.toString();
        }
        return this._displayType.isInputValidFn(value);
    };
    InputComponent.prototype.shouldWriteValueFromEvent = function (eventValue, event) {
        var currentVal = this.__matInputValue || '';
        var input = (event.srcElement);
        var selection = {
            start: input.selectionStart,
            end: input.selectionEnd
        };
        var newVal = currentVal.substr(0, selection.start) + eventValue + currentVal.substr(selection.end, currentVal.length);
        return this._displayType.isInputValidFn(newVal);
    };
    InputComponent.prototype.setValue = function (value, propagateChange, ignoreInputType) {
        if (propagateChange === void 0) { propagateChange = true; }
        if (ignoreInputType === void 0) { ignoreInputType = true; }
        var isStringInputType = this.config.inputType === InputType.String;
        var isIncompatibleStringInputType = isStringInputType && lodash.isNumber(value);
        var isIncompatibleNumericInputType = !isStringInputType && lodash.isString(value) && !ignoreInputType;
        if (isIncompatibleStringInputType || isIncompatibleNumericInputType) {
            console.error("Can't set value " + value + " of type '" + typeof value + "' to inputType: '" + this.config.inputType + "'");
            this.__matInputValue = '';
            this.value = isStringInputType ? '' : undefined;
            propagateChange = true;
        }
        else if (this.shouldWriteValue(value)) {
            isStringInputType ? this.setValueString(value) : this.setValueNumber(value, ignoreInputType);
            this.numberPadding && !ignoreInputType && this.setPadding();
        }
        else {
            this.__matInputValue = ignoreInputType && lodash.isString(value) ? value : '';
            this.value = isStringInputType ? '' : NaN;
        }
        this.previousValue = this.value;
        if (propagateChange) {
            this.onChangeCallback(this.value);
            this.valueChange.emit(this.value);
        }
    };
    InputComponent.prototype.setValueString = function (value) {
        if (lodash.isString(value)) {
            this.__matInputValue = value;
            this.value = value;
        }
        else if (lodash.isNil(value)) {
            this.__matInputValue = '';
            this.value = '';
        }
    };
    InputComponent.prototype.setValueNumber = function (value, ignoreInputType) {
        if (lodash.isNil(value) || value === '') {
            this.__matInputValue = '';
            this.value = undefined;
        }
        else if (!this._displayType.toNumberFn || !this._displayType.toStringFn) {
            console.error("displayType: '" + this._displayType.id + "' has no defined conversion functions for inputType: 'number'");
        }
        else if (lodash.isString(value) && ignoreInputType) {
            this.__matInputValue = value;
            this.value = this._displayType.toNumberFn(value);
        }
        else if (lodash.isNumber(value)) {
            this.__matInputValue = lodash.isNaN(value) ? '' : this._displayType.toStringFn(value);
            this.value = value;
        }
    };
    InputComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ra-ui-input',
                    template: "<mat-form-field [floatLabel]=\"_floatPlaceholder\" color=\"accent\" [style.width]=\"_width\"><input #input matInput [errorStateMatcher]=\"_matErrorStateMatcher\" type=\"text\" #model=\"ngModel\" [class.left]=\"config ? config.textAlign === 'Left' : false\" [class.right]=\"config ? config.textAlign === 'Right' : false\" [class.center]=\"config ? config.textAlign === 'Center' : false\" [(ngModel)]=\"_matInputValue\" (keypress)=\"_onKeyPress($event)\" (paste)=\"_onPaste($event)\" [disabled]=\"disabled\" [tabindex]=\"_tabIndex\" [maxlength]=\"_maxLength\" (focusin)=\"_emitFocusChange(true)\" (focusout)=\"_onFocusOut()\"><mat-placeholder><div class=\"static-text-wrapper\" [ngClass]=\"{'immediate-arrow': (config && config.enableImmediateArrow) || false, 'dirty-flag': _showDirtyFlag()}\"><ra-ui-static-text #labelComponent class=\"input-label\" [config]=\"_staticTextConfig\" [value]=\"label\" [translateParams]=\"_translateParams\" (onAccelerator)=\"focus(true)\" [disabled]=\"disabled\"></ra-ui-static-text></div><ra-ui-dirty-flag [attr.disabled]=\"disabled\" *ngIf=\"_showDirtyFlag()\"></ra-ui-dirty-flag><ra-ui-immediate-arrow *ngIf=\"(config && config.enableImmediateArrow) || false\"></ra-ui-immediate-arrow></mat-placeholder><span matPrefix [class.disabled]=\"disabled\"><ng-content select=\".ra-ui-input-prefix\"></ng-content></span><span matSuffix [class.disabled]=\"disabled\"><ng-content select=\".ra-ui-input-suffix\"></ng-content></span><mat-hint *ngIf=\"hintMessageStart !== ''\" align=\"start\"><ra-ui-static-text class=\"input-message\" [value]=\"hintMessageStart\" [disabled]=\"disabled\" [translateParams]=\"_translateParams\" [config]=\"_leftMessageConfig\"></ra-ui-static-text></mat-hint><mat-hint *ngIf=\"hintMessageEnd !== ''\" align=\"end\"><ra-ui-static-text class=\"input-message\" [value]=\"hintMessageEnd\" [disabled]=\"disabled\" [translateParams]=\"_translateParams\" [config]=\"_rightMessageConfig\"></ra-ui-static-text></mat-hint><mat-error *ngIf=\"_errorMessage !== ''\"><ra-ui-static-text class=\"input-message\" [value]=\"_errorMessage\" [disabled]=\"disabled\" [translateParams]=\"_translateParams\" [config]=\"_leftMessageConfig\"></ra-ui-static-text></mat-error></mat-form-field>",
                    styles: ["ra-ui-input input{display:inline-block}ra-ui-input .left{text-align:left}ra-ui-input .right{text-align:right}ra-ui-input .center{text-align:center}"],
                    changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    encapsulation: _angular_core.ViewEncapsulation.None
                },] },
    ];
    InputComponent.ctorParameters = function () { return [
        { type: _angular_core.ChangeDetectorRef, },
        { type: _angular_forms.NgControl, decorators: [{ type: _angular_core.Self }, { type: _angular_core.Optional },] },
        { type: _ngxTranslate_core.TranslateService, decorators: [{ type: _angular_core.Optional },] },
        { type: undefined, decorators: [{ type: _angular_core.Inject, args: [_raWebTechUiToolkit_commonUtils.LOGGER,] },] },
    ]; };
    InputComponent.propDecorators = {
        "value": [{ type: _angular_core.Input },],
        "label": [{ type: _angular_core.Input },],
        "translateParams": [{ type: _angular_core.Input },],
        "config": [{ type: _angular_core.Input },],
        "hintMessageStart": [{ type: _angular_core.Input },],
        "hintMessageEnd": [{ type: _angular_core.Input },],
        "disabled": [{ type: _angular_core.Input },],
        "disabledChange": [{ type: _angular_core.Output },],
        "valueChange": [{ type: _angular_core.Output },],
        "focusChange": [{ type: _angular_core.Output },],
        "_labelComponent": [{ type: _angular_core.ViewChild, args: ['labelComponent',] },],
        "_input": [{ type: _angular_core.ViewChild, args: ['input',] },],
        "_flatMode": [{ type: _angular_core.HostBinding, args: ['class.flat-mode',] },],
    };
    return InputComponent;
}(FormControlBase));

var RaUiInputModule = (function () {
    function RaUiInputModule() {
    }
    RaUiInputModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    imports: [
                        _angular_common.CommonModule,
                        _raWebTechUiToolkit_commonUtils.RaUiSizeChangeModule,
                        _angular_forms.FormsModule,
                        _angular_forms.ReactiveFormsModule,
                        _angular_material.MatFormFieldModule,
                        _angular_material.MatInputModule,
                        _raWebTechUiToolkit_commonUtils.RaUiStaticTextModule,
                        _raWebTechUiToolkit_commonUtils.RaUiImmediateArrowModule,
                        _raWebTechUiToolkit_commonUtils.RaUiDirtyFlagModule
                    ],
                    declarations: [
                        InputComponent
                    ],
                    exports: [
                        InputComponent
                    ]
                },] },
    ];
    return RaUiInputModule;
}());

var NumericDisplayType = (function () {
    function NumericDisplayType() {
        this.pattern = /^\d*$/;
    }
    NumericDisplayType.prototype.isInputValidFn = function (s) {
        if (s === 'Infinity' || s === 'NaN') {
            return true;
        }
        return this.pattern.test(s);
    };
    NumericDisplayType.prototype.toStringFn = function (n) {
        throw new Error('Abstract method has been called.');
    };
    NumericDisplayType.prototype.toNumberFn = function (s) {
        throw new Error('Abstract method has been called.');
    };
    NumericDisplayType.prototype.onBlurWhenNumber = function (s) {
        var number = this.toNumberFn(s);
        if (number === Infinity || isNaN(number) || !this.pattern.test(s)) {
            return s;
        }
        return this.toStringFn(number);
    };
    return NumericDisplayType;
}());

var BinaryDisplayType = (function (_super) {
    __extends(BinaryDisplayType, _super);
    function BinaryDisplayType() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = BinaryDisplayType.ID;
        _this.pattern = /^[0-1]*$/;
        return _this;
    }
    BinaryDisplayType.prototype.toStringFn = function (n) {
        return n.toString(2);
    };
    BinaryDisplayType.prototype.toNumberFn = function (s) {
        return parseInt(s, 2);
    };
    BinaryDisplayType.ID = 'bin';
    return BinaryDisplayType;
}(NumericDisplayType));

var HexadecimalDisplayType = (function (_super) {
    __extends(HexadecimalDisplayType, _super);
    function HexadecimalDisplayType() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = HexadecimalDisplayType.ID;
        _this.pattern = /^[0-9a-fA-F]*$/;
        return _this;
    }
    HexadecimalDisplayType.prototype.toStringFn = function (n) {
        return n.toString(16);
    };
    HexadecimalDisplayType.prototype.toNumberFn = function (s) {
        return parseInt(s, 16);
    };
    HexadecimalDisplayType.ID = 'hex';
    return HexadecimalDisplayType;
}(NumericDisplayType));

var IntegerDisplayType = (function (_super) {
    __extends(IntegerDisplayType, _super);
    function IntegerDisplayType() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = IntegerDisplayType.ID;
        _this.pattern = /^[+-]?\d*$/;
        return _this;
    }
    IntegerDisplayType.prototype.toStringFn = function (n) {
        return n.toString(10);
    };
    IntegerDisplayType.prototype.toNumberFn = function (s) {
        return parseInt(s, 10);
    };
    IntegerDisplayType.ID = 'int';
    return IntegerDisplayType;
}(NumericDisplayType));

var OctalDisplayType = (function (_super) {
    __extends(OctalDisplayType, _super);
    function OctalDisplayType() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = OctalDisplayType.ID;
        _this.pattern = /^[0-7]*$/;
        return _this;
    }
    OctalDisplayType.prototype.toStringFn = function (n) {
        return n.toString(8);
    };
    OctalDisplayType.prototype.toNumberFn = function (s) {
        return parseInt(s, 8);
    };
    OctalDisplayType.ID = 'oct';
    return OctalDisplayType;
}(NumericDisplayType));

var UnsignedIntegerDisplayType = (function (_super) {
    __extends(UnsignedIntegerDisplayType, _super);
    function UnsignedIntegerDisplayType() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = UnsignedIntegerDisplayType.ID;
        _this.pattern = /^\d*$/;
        return _this;
    }
    UnsignedIntegerDisplayType.prototype.toStringFn = function (n) {
        return n.toString(10);
    };
    UnsignedIntegerDisplayType.prototype.toNumberFn = function (s) {
        return parseInt(s, 10);
    };
    UnsignedIntegerDisplayType.ID = 'uint';
    return UnsignedIntegerDisplayType;
}(NumericDisplayType));

var MultiLineTextInputConfig = (function () {
    function MultiLineTextInputConfig(options, logger) {
        if (options === void 0) { options = ({}); }
        this.logger = logger;
        if (isFloatPlaceholder(options.floatPlaceholder)) {
            this.floatPlaceholder = options.floatPlaceholder;
        }
        else {
            this.floatPlaceholder = FloatPlaceholder.Auto;
            this.onInvalidType('floatPlaceholder', 'FloatPlaceholder', options.floatPlaceholder);
        }
        if (lodash.isNumber(options.minRows)) {
            this.minRows = options.minRows;
        }
        else {
            this.minRows = 1;
            this.onInvalidType('minRows', 'number', options.minRows);
        }
        if (this.minRows < 1) {
            this.minRows = 1;
        }
        if (lodash.isNumber(options.maxRows)) {
            this.maxRows = options.maxRows;
        }
        else {
            this.maxRows = this.minRows;
            this.onInvalidType('maxRows', 'number', options.maxRows);
        }
        if (this.maxRows < this.minRows) {
            this.maxRows = this.minRows;
        }
        if (lodash.isBoolean(options.enableFlatMode)) {
            this.enableFlatMode = options.enableFlatMode;
        }
        else {
            this.enableFlatMode = false;
            this.onInvalidType('enableFlatMode', 'boolean', options.enableFlatMode);
        }
        if (this.enableFlatMode && this.floatPlaceholder === FloatPlaceholder.Auto) {
            this.floatPlaceholder = FloatPlaceholder.Always;
        }
    }
    MultiLineTextInputConfig.prototype.onInvalidType = function (propName, expected, got) {
        this.logger && _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput('MultiLineTextInputConfig', propName, got, expected, this.logger);
    };
    MultiLineTextInputConfig = __decorate([
        _raWebTechUiToolkit_commonUtils.Immutable,
        _raWebTechUiToolkit_commonUtils.Config({
            wrapFlag: {
                default: true,
                type: 'boolean'
            },
            tabIndex: {
                default: undefined,
                type: 'number'
            },
            maxLength: {
                default: undefined,
                type: 'number'
            },
            enableImmediateArrow: {
                default: false,
                type: 'boolean'
            },
            enableDirtyFlag: {
                default: false,
                type: 'boolean'
            },
            fillParent: {
                default: false,
                type: 'boolean'
            },
            disableAcceleratorKey: {
                default: false,
                type: 'boolean'
            },
            disableTooltip: {
                default: false,
                type: 'boolean'
            },
            isAutoSizeTextArea: {
                default: true,
                type: 'boolean'
            }
        }),
        __metadata("design:paramtypes", [Object, Object])
    ], MultiLineTextInputConfig);
    return MultiLineTextInputConfig;
}());
var MultiLineTextInputComponent = (function (_super) {
    __extends(MultiLineTextInputComponent, _super);
    function MultiLineTextInputComponent(changeRef, ngControl, logger) {
        var _this = _super.call(this, changeRef, ngControl, logger) || this;
        _this.changeRef = changeRef;
        _this.logger = logger;
        _this._value = '';
        _this._disabled = false;
        _this._label = '';
        _this._hintMessageStart = '';
        _this._hintMessageEnd = '';
        _this._translateParams = {};
        _this.valueChange = new _angular_core.EventEmitter();
        _this.disabledChange = new _angular_core.EventEmitter();
        _this.focusChange = new _angular_core.EventEmitter();
        _this._flatMode = false;
        _this._componentName = 'MultiLineTextInputComponent';
        _this._floatPlaceholder = '';
        _this._staticTextConfig = new _raWebTechUiToolkit_commonUtils.StaticTextConfig();
        _this._leftMessageConfig = new _raWebTechUiToolkit_commonUtils.StaticTextConfig();
        _this._rightMessageConfig = new _raWebTechUiToolkit_commonUtils.StaticTextConfig();
        _this._config = new MultiLineTextInputConfig({}, _this.logger);
        _this._width = '';
        _this.propagateChange = function (value) { return rxjs.noop(); };
        _this.onTouched = function () { return rxjs.noop(); };
        return _this;
    }
    Object.defineProperty(MultiLineTextInputComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (newVal) {
            if (!lodash.isString(newVal)) {
                this._value = '';
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(this._componentName, 'value', newVal, 'string', this.logger);
            }
            else {
                this._value = newVal;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiLineTextInputComponent.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            if (!lodash.isBoolean(value)) {
                this.setDisabledState(false);
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(this._componentName, 'disabled', value, 'boolean', this.logger);
            }
            else {
                this.setDisabledState(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiLineTextInputComponent.prototype, "label", {
        get: function () {
            return this._label;
        },
        set: function (val) {
            if (!lodash.isString(val)) {
                this._label = '';
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(this._componentName, 'label', val, 'string', this.logger);
            }
            else {
                this._label = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiLineTextInputComponent.prototype, "config", {
        get: function () {
            return this._config;
        },
        set: function (val) {
            if (!_raWebTechUiToolkit_commonUtils.TypeUtils.isObject(val)) {
                this._config = new MultiLineTextInputConfig({}, this.logger);
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(this._componentName, 'config', val, 'IMultiLineTextInputConfig', this.logger);
            }
            else {
                this._config = new MultiLineTextInputConfig(val, this.logger);
            }
            this.onConfigChanged();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiLineTextInputComponent.prototype, "hintMessageStart", {
        get: function () {
            return this._hintMessageStart;
        },
        set: function (newMessage) {
            if (!lodash.isString(newMessage)) {
                this._hintMessageStart = '';
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(this._componentName, 'hintMessageStart', newMessage, 'string', this.logger);
            }
            else {
                this._hintMessageStart = newMessage;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiLineTextInputComponent.prototype, "hintMessageEnd", {
        get: function () {
            return this._hintMessageEnd;
        },
        set: function (newMessage) {
            if (!lodash.isString(newMessage)) {
                this._hintMessageEnd = '';
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(this._componentName, 'hintMessageEnd', newMessage, 'string', this.logger);
            }
            else {
                this._hintMessageEnd = newMessage;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiLineTextInputComponent.prototype, "translateParams", {
        get: function () {
            return this._translateParams;
        },
        set: function (val) {
            if (!_raWebTechUiToolkit_commonUtils.TypeUtils.isObject(val)) {
                this._translateParams = {};
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(this._componentName, 'translateParams', typeof val, 'object', this.logger);
            }
            else {
                this._translateParams = val;
            }
            this.changeRef.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    MultiLineTextInputComponent.prototype.ngOnInit = function () {
        this.onConfigChanged();
    };
    MultiLineTextInputComponent.prototype.writeValue = function (value) {
        this.value = FormTypeUtils.writeValueCheck({
            component: this._componentName,
            receivedVal: value,
            defaultVal: '',
            expectedType: 'string',
            checkFun: function (a) { return lodash.isString(a); },
            logger: this.logger,
            ngControl: this._ngControl
        });
        this.changeRef.markForCheck();
    };
    MultiLineTextInputComponent.prototype._multiLineChanged = function (text) {
        if (!lodash.isNil(text)) {
            this.value = text;
        }
        this.propagateChange(text);
        this.valueChange.emit(text);
    };
    MultiLineTextInputComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    MultiLineTextInputComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    MultiLineTextInputComponent.prototype.setDisabledState = function (disabled) {
        if (disabled !== this._disabled) {
            this._disabled = disabled;
            this.disabledChange.next(disabled);
            this.changeRef.markForCheck();
        }
    };
    MultiLineTextInputComponent.prototype.focus = function () {
        this._textArea.nativeElement.focus();
    };
    MultiLineTextInputComponent.prototype._isDirtyFlagVisible = function () {
        return this._isNgControlDirty() && (this.config.enableDirtyFlag || false);
    };
    MultiLineTextInputComponent.prototype.onConfigChanged = function () {
        this._floatPlaceholder = ((this.config.floatPlaceholder)).toLowerCase();
        this._tabIndex = this.config.tabIndex;
        this._maxLength = this.config.maxLength;
        this._flatMode = this.config.enableFlatMode;
        this._width = this.config.fillParent ? '100%' : MAT_FORM_FIELD_DEFAULT_WIDTH + 'px';
        this._staticTextConfig = new _raWebTechUiToolkit_commonUtils.StaticTextConfig({
            disableAcceleratorKey: this.config.disableAcceleratorKey,
            disableTooltip: this.config.disableTooltip
        });
        this._leftMessageConfig = new _raWebTechUiToolkit_commonUtils.StaticTextConfig({
            disableTooltip: this.config.disableTooltip,
            textAlign: _raWebTechUiToolkit_commonUtils.TextAlign.Left,
            cursorStyle: _raWebTechUiToolkit_commonUtils.CursorStyle.Default
        });
        this._rightMessageConfig = new _raWebTechUiToolkit_commonUtils.StaticTextConfig({
            disableTooltip: this.config.disableTooltip,
            textAlign: _raWebTechUiToolkit_commonUtils.TextAlign.Right,
            cursorStyle: _raWebTechUiToolkit_commonUtils.CursorStyle.Default
        });
    };
    MultiLineTextInputComponent.prototype._focusLeave = function () {
        this.onTouched();
        this.focusChange.emit(false);
    };
    MultiLineTextInputComponent.prototype._focusArrive = function () {
        this.focusChange.emit(true);
    };
    MultiLineTextInputComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ra-ui-multi-line-text-input',
                    template: "<mat-form-field *ngIf=\"config.isAutoSizeTextArea\" [floatLabel]=\"_floatPlaceholder\" [style.width]=\"_width\" color=\"accent\"><textarea matInput matTextareaAutosize [errorStateMatcher]=\"_matErrorStateMatcher\" [matAutosizeMinRows]=\"config.minRows\" [matAutosizeMaxRows]=\"config.maxRows\" #model=\"ngModel\" [attr.wrap]=\"config.wrapFlag ? 'hard' : 'off'\" [ngModel]=\"value\" (ngModelChange)=\"_multiLineChanged($event)\" (focusout)=\"_focusLeave()\" (focusin)=\"_focusArrive()\" [disabled]=\"disabled\" [tabindex]=\"_tabIndex\" [maxlength]=\"_maxLength\" [value]=\"value\" #textArea></textarea><mat-placeholder><div class=\"static-text-wrapper\" [ngClass]=\"{ 'immediate-arrow': config.enableImmediateArrow, 'dirty-flag': config.enableDirtyFlag} \"><ra-ui-static-text [value]=\"label\" [config]=\"_staticTextConfig\" [disabled]=\"disabled\" [translateParams]=\"translateParams\" (onAccelerator)=\"focus()\"></ra-ui-static-text></div><ra-ui-dirty-flag [attr.disabled]=\"disabled\" *ngIf=\"_isDirtyFlagVisible()\"></ra-ui-dirty-flag><ra-ui-immediate-arrow *ngIf=\"config.enableImmediateArrow\"></ra-ui-immediate-arrow></mat-placeholder><mat-hint *ngIf=\"hintMessageStart !== ''\" align=\"start\"><ra-ui-static-text class=\"input-message\" [value]=\"hintMessageStart\" [disabled]=\"disabled\" [translateParams]=\"translateParams\" [config]=\"_leftMessageConfig\"></ra-ui-static-text></mat-hint><mat-hint *ngIf=\"hintMessageEnd !== ''\" align=\"end\"><ra-ui-static-text class=\"input-message\" [value]=\"hintMessageEnd\" [disabled]=\"disabled\" [translateParams]=\"translateParams\" [config]=\"_rightMessageConfig\"></ra-ui-static-text></mat-hint><mat-error *ngIf=\"_errorMessage !== ''\"><ra-ui-static-text class=\"input-message\" [value]=\"_errorMessage\" [disabled]=\"disabled\" [translateParams]=\"translateParams\" [config]=\"_leftMessageConfig\"></ra-ui-static-text></mat-error></mat-form-field><mat-form-field *ngIf=\"!config.isAutoSizeTextArea\" [floatLabel]=\"_floatPlaceholder\" [style.width]=\"_width\" color=\"accent\"><textarea matInput #model=\"ngModel\" [attr.wrap]=\"config.wrapFlag ? 'hard' : 'off'\" [ngModel]=\"value\" (ngModelChange)=\"_multiLineChanged($event)\" (focusout)=\"_focusLeave()\" (focusin)=\"_focusArrive()\" [disabled]=\"disabled\" [tabindex]=\"_tabIndex\" [maxlength]=\"_maxLength\" [value]=\"value\" #textArea></textarea><mat-placeholder><div class=\"static-text-wrapper\" [ngClass]=\"{ 'immediate-arrow': config.enableImmediateArrow, 'dirty-flag': config.enableDirtyFlag} \"><ra-ui-static-text [value]=\"label\" [config]=\"_staticTextConfig\" [disabled]=\"disabled\" [translateParams]=\"translateParams\" (onAccelerator)=\"focus()\"></ra-ui-static-text></div><ra-ui-dirty-flag [attr.disabled]=\"disabled\" *ngIf=\"_isDirtyFlagVisible()\"></ra-ui-dirty-flag><ra-ui-immediate-arrow *ngIf=\"config.enableImmediateArrow\"></ra-ui-immediate-arrow></mat-placeholder><mat-hint *ngIf=\"hintMessageStart !== ''\" align=\"start\"><ra-ui-static-text class=\"input-message\" [value]=\"hintMessageStart\" [disabled]=\"disabled\" [translateParams]=\"translateParams\" [config]=\"_leftMessageConfig\"></ra-ui-static-text></mat-hint><mat-hint *ngIf=\"hintMessageEnd !== ''\" align=\"end\"><ra-ui-static-text class=\"input-message\" [value]=\"hintMessageEnd\" [disabled]=\"disabled\" [translateParams]=\"translateParams\" [config]=\"_rightMessageConfig\"></ra-ui-static-text></mat-hint><mat-error *ngIf=\"_errorMessage !== ''\"><ra-ui-static-text class=\"input-message\" [value]=\"_errorMessage\" [disabled]=\"disabled\" [translateParams]=\"translateParams\" [config]=\"_leftMessageConfig\"></ra-ui-static-text></mat-error></mat-form-field>",
                    styles: ["ra-ui-multi-line-text-input{display:block}@media not all and (min-resolution:0.001dpcm){@supports (-webkit-appearance:none) and (stroke-color:transparent){@media screen and (max-device-width:480px){ra-ui-multi-line-text-input textarea.mat-input-element{width:calc(100% + 6px);max-width:calc(100% + 6px);margin-left:-3px}}@media all and (min-device-width:481px) and (max-device-width:1024px){ra-ui-multi-line-text-input textarea.mat-input-element{width:calc(100% + 6px);max-width:calc(100% + 6px);margin-left:-3px}}}}"],
                    changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    encapsulation: _angular_core.ViewEncapsulation.None
                },] },
    ];
    MultiLineTextInputComponent.ctorParameters = function () { return [
        { type: _angular_core.ChangeDetectorRef, },
        { type: _angular_forms.NgControl, decorators: [{ type: _angular_core.Self }, { type: _angular_core.Optional },] },
        { type: undefined, decorators: [{ type: _angular_core.Inject, args: [_raWebTechUiToolkit_commonUtils.LOGGER,] },] },
    ]; };
    MultiLineTextInputComponent.propDecorators = {
        "value": [{ type: _angular_core.Input },],
        "disabled": [{ type: _angular_core.Input },],
        "label": [{ type: _angular_core.Input },],
        "config": [{ type: _angular_core.Input },],
        "hintMessageStart": [{ type: _angular_core.Input },],
        "hintMessageEnd": [{ type: _angular_core.Input },],
        "translateParams": [{ type: _angular_core.Input },],
        "valueChange": [{ type: _angular_core.Output },],
        "disabledChange": [{ type: _angular_core.Output },],
        "focusChange": [{ type: _angular_core.Output },],
        "_flatMode": [{ type: _angular_core.HostBinding, args: ['class.flat-mode',] },],
        "_textArea": [{ type: _angular_core.ViewChild, args: ['textArea',] },],
    };
    return MultiLineTextInputComponent;
}(FormControlBase));

var RaUiMultiLineTextInputModule = (function () {
    function RaUiMultiLineTextInputModule() {
    }
    RaUiMultiLineTextInputModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    declarations: [
                        MultiLineTextInputComponent
                    ],
                    imports: [
                        _angular_common.CommonModule,
                        _angular_forms.FormsModule,
                        _angular_forms.ReactiveFormsModule,
                        _raWebTechUiToolkit_commonUtils.RaUiStaticTextModule,
                        _raWebTechUiToolkit_commonUtils.RaUiDirtyFlagModule,
                        _raWebTechUiToolkit_commonUtils.RaUiImmediateArrowModule,
                        _angular_material.MatInputModule
                    ],
                    exports: [
                        MultiLineTextInputComponent
                    ]
                },] },
    ];
    return RaUiMultiLineTextInputModule;
}());

var SortOrder = _raWebTechUiToolkit_commonUtils.strEnum([
    'Ascending',
    'Descending',
    'None'
]);

var DropdownConfig = (function () {
    function DropdownConfig(options, logger) {
        if (options === void 0) { options = ({}); }
        this.logger = logger;
        if (!lodash.isBoolean(options.enableFlatMode)) {
            this.onInvalidType('enableFlatMode', 'boolean', options.enableFlatMode);
            this.enableFlatMode = false;
        }
        else {
            this.enableFlatMode = options.enableFlatMode;
        }
        if (!isFloatPlaceholder(options.floatPlaceholder)) {
            this.onInvalidType('floatPlaceholder', 'FloatPlaceholder', options.enableFlatMode);
            this.floatPlaceholder = FloatPlaceholder.Auto;
        }
        else {
            this.floatPlaceholder = options.floatPlaceholder;
        }
        if (this.enableFlatMode && this.floatPlaceholder === FloatPlaceholder.Auto) {
            this.floatPlaceholder = FloatPlaceholder.Always;
        }
    }
    DropdownConfig.prototype.onInvalidType = function (propName, expected, got) {
        this.logger && _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput('DropdownConfig', propName, got, expected, this.logger);
    };
    DropdownConfig = __decorate([
        _raWebTechUiToolkit_commonUtils.Immutable,
        _raWebTechUiToolkit_commonUtils.Config({
            disableAcceleratorKey: {
                default: false,
                type: 'boolean'
            },
            disableTooltip: {
                default: false,
                type: 'boolean'
            },
            enableDirtyFlag: {
                default: false,
                type: 'boolean'
            },
            enableImmediateArrow: {
                default: false,
                type: 'boolean'
            },
            enableResetOption: {
                default: false,
                type: 'boolean'
            },
            fillParent: {
                default: false,
                type: 'boolean'
            },
            resetOptionText: {
                default: 'RA_UI_FORM_SYSTEM.DROPDOWN.NONE',
                type: 'string'
            },
            tabIndex: {
                default: undefined,
                type: 'number'
            },
            showValueOutsideList: {
                default: false,
                type: 'boolean'
            }
        }),
        __metadata("design:paramtypes", [Object, Object])
    ], DropdownConfig);
    return DropdownConfig;
}());
var DropdownComponent = (function (_super) {
    __extends(DropdownComponent, _super);
    function DropdownComponent(changeRef, ngControl, logger) {
        var _this = _super.call(this, changeRef, ngControl, logger) || this;
        _this.changeRef = changeRef;
        _this.logger = logger;
        _this._config = new DropdownConfig(undefined, _this.logger);
        _this._disabled = false;
        _this._items = [];
        _this._hintMessageStart = '';
        _this._hintMessageEnd = '';
        _this._label = '';
        _this._value = undefined;
        _this._sortOrder = SortOrder.None;
        _this._translateParams = {};
        _this.disabledChange = new _angular_core.EventEmitter();
        _this.focusChange = new _angular_core.EventEmitter();
        _this.valueChange = new _angular_core.EventEmitter();
        _this.onClose = new _angular_core.EventEmitter();
        _this.onOpen = new _angular_core.EventEmitter();
        _this._flatMode = false;
        _this._componentName = 'DropdownComponent';
        _this._fillParent = false;
        _this._floatPlaceholder = '';
        _this._originalPlaceholder = 'auto';
        _this._innerLabel = '';
        _this._placeholderText = '';
        _this._sortedItems = [];
        _this._staticTextConfig = new _raWebTechUiToolkit_commonUtils.StaticTextConfig();
        _this._leftMessageConfig = new _raWebTechUiToolkit_commonUtils.StaticTextConfig();
        _this._rightMessageConfig = new _raWebTechUiToolkit_commonUtils.StaticTextConfig();
        _this._optionsStaticTexts = new _raWebTechUiToolkit_commonUtils.StaticTextConfig({
            disableTooltip: _this.config.disableTooltip,
            cursorStyle: _raWebTechUiToolkit_commonUtils.CursorStyle.Pointer
        });
        _this._haveFocus = false;
        _this.propagateChange = function (value) { return rxjs.noop(); };
        _this.onTouched = function () { return rxjs.noop(); };
        return _this;
    }
    Object.defineProperty(DropdownComponent.prototype, "config", {
        get: function () {
            return this._config;
        },
        set: function (val) {
            if (!_raWebTechUiToolkit_commonUtils.TypeUtils.isObject(val)) {
                this._config = new DropdownConfig(undefined, this.logger);
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(this._componentName, 'config', val, 'IDropdownConfig', this.logger);
            }
            else {
                this._config = new DropdownConfig(val, this.logger);
            }
            this.updateConfig();
            if (!lodash.isNil(this.value)) {
                this._setSelectTriggerText(this.value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownComponent.prototype, "disabled", {
        get: function () {
            return lodash.isBoolean(this._disabled) ? this._disabled : false;
        },
        set: function (dis) {
            if (!lodash.isBoolean(dis)) {
                this.setDisabledState(false);
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(this._componentName, 'disabled', dis, 'boolean', this.logger);
            }
            else {
                this.setDisabledState(dis);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownComponent.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (items) {
            if (items instanceof Array) {
                this._items = items;
                this.sortIt(items);
            }
            else {
                this._items = [];
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(this._componentName, 'items', items, 'IInnerItem[]', this.logger);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownComponent.prototype, "hintMessageStart", {
        get: function () {
            return this._hintMessageStart;
        },
        set: function (newMessage) {
            if (!lodash.isString(newMessage)) {
                this._hintMessageStart = '';
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(this._componentName, 'hintMessageStart', newMessage, 'string', this.logger);
            }
            else {
                this._hintMessageStart = newMessage;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownComponent.prototype, "hintMessageEnd", {
        get: function () {
            return this._hintMessageEnd;
        },
        set: function (newMessage) {
            if (!lodash.isString(newMessage)) {
                this._hintMessageEnd = '';
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(this._componentName, 'hintMessageEnd', newMessage, 'string', this.logger);
            }
            else {
                this._hintMessageEnd = newMessage;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownComponent.prototype, "label", {
        get: function () {
            return this._label;
        },
        set: function (val) {
            if (!lodash.isString(val)) {
                this._label = '';
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(this._componentName, 'label', val, 'string', this.logger);
            }
            else {
                this._label = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (val) {
            if (!_raWebTechUiToolkit_commonUtils.isValueType(val)) {
                this._value = undefined;
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(this._componentName, 'value', val, 'string|number|boolean', this.logger);
            }
            else {
                this._value = val;
            }
            this._setSelectTriggerText(this._value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownComponent.prototype, "sortOrder", {
        get: function () {
            return this._sortOrder;
        },
        set: function (order) {
            if (lodash.includes(SortOrder, order)) {
                this._sortOrder = order;
            }
            else {
                this._sortOrder = SortOrder.None;
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(this._componentName, 'sortOrder', order, 'SortOrder', this.logger);
            }
            if (this._items) {
                this.sortIt(this._items);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownComponent.prototype, "translateParams", {
        get: function () {
            return this._translateParams;
        },
        set: function (val) {
            if (!_raWebTechUiToolkit_commonUtils.TypeUtils.isObject(val)) {
                this._translateParams = {};
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(this._componentName, 'translateParams', typeof val, 'object', this.logger);
            }
            else {
                this._translateParams = val;
            }
            this.changeRef.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    DropdownComponent.prototype.ngOnChanges = function (changes) {
        changes["items"] && this._setSelectTriggerText(this.value);
    };
    DropdownComponent.prototype.ngOnInit = function () {
        this.updateConfig();
    };
    DropdownComponent.prototype.writeValue = function (val) {
        this.value = FormTypeUtils.writeValueCheck({
            component: this._componentName,
            receivedVal: val,
            defaultVal: undefined,
            expectedType: 'string|number|boolean',
            checkFun: _raWebTechUiToolkit_commonUtils.isValueType,
            logger: this.logger,
            ngControl: this._ngControl
        });
        this.changeRef.markForCheck();
    };
    DropdownComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    DropdownComponent.prototype.setDisabledState = function (isDisabled) {
        if (this._disabled !== isDisabled) {
            this._disabled = isDisabled;
            this.disabledChange.next(isDisabled);
            this.changeRef.markForCheck();
        }
    };
    DropdownComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    DropdownComponent.prototype.focus = function () {
        this.selectEl.focus();
    };
    DropdownComponent.prototype._dropdownOpenedChange = function (ev) {
        ev ? this.onOpen.emit() : this.onClose.emit();
        this.changeRef.markForCheck();
    };
    DropdownComponent.prototype._setFocus = function (isFocused) {
        var _this = this;
        this._haveFocus = isFocused;
        if (this.touchedTimeout) {
            clearTimeout(this.touchedTimeout);
        }
        if (!isFocused) {
            this.touchedTimeout = window.setTimeout(function () {
                if (!_this._haveFocus) {
                    _this.onTouched();
                    _this.focusChange.emit(isFocused);
                }
            }, 100);
        }
        else {
            this.focusChange.emit(isFocused);
        }
    };
    DropdownComponent.prototype._setSelectTriggerText = function (value) {
        var result = value;
        var valueInList = false;
        if (!lodash.isNil(this._items)) {
            this._items.forEach(function (item) {
                if (item.value === value && !lodash.isNil(item.label)) {
                    result = item.label;
                    valueInList = true;
                }
            });
        }
        var shoudShowNonListVal = this.config.showValueOutsideList && !lodash.isNil(value) && !valueInList;
        this._innerLabel = !lodash.isNil(result) ? result.toString() : '';
        if (shoudShowNonListVal) {
            this._placeholderText = ((value)).toString();
            this._floatPlaceholder = 'always';
        }
        else {
            this._placeholderText = '';
            this._floatPlaceholder = ((this.config.floatPlaceholder)).toLowerCase();
        }
    };
    DropdownComponent.prototype._showDirtyFlag = function () {
        return this._isNgControlDirty() && (this.config.enableDirtyFlag || false);
    };
    DropdownComponent.prototype._valueChanged = function (ev) {
        this.value = ev;
        this.propagateChange(ev);
        this.valueChange.emit(ev);
        this.changeRef.markForCheck();
    };
    DropdownComponent.prototype.updateConfig = function () {
        this._floatPlaceholder = ((this.config.floatPlaceholder)).toLowerCase();
        this._tabIndex = this.config.tabIndex;
        this._staticTextConfig = new _raWebTechUiToolkit_commonUtils.StaticTextConfig({
            disableAcceleratorKey: this.config.disableAcceleratorKey,
            disableTooltip: this.config.disableTooltip,
            cursorStyle: _raWebTechUiToolkit_commonUtils.CursorStyle.Pointer
        });
        this._fillParent = this.config.fillParent;
        this._leftMessageConfig = new _raWebTechUiToolkit_commonUtils.StaticTextConfig({
            disableTooltip: this.config.disableTooltip,
            textAlign: _raWebTechUiToolkit_commonUtils.TextAlign.Left,
            cursorStyle: _raWebTechUiToolkit_commonUtils.CursorStyle.Default
        });
        this._rightMessageConfig = new _raWebTechUiToolkit_commonUtils.StaticTextConfig({
            disableTooltip: this.config.disableTooltip,
            textAlign: _raWebTechUiToolkit_commonUtils.TextAlign.Right,
            cursorStyle: _raWebTechUiToolkit_commonUtils.CursorStyle.Default
        });
        this._flatMode = this.config.enableFlatMode;
    };
    DropdownComponent.prototype.sortIt = function (items) {
        this._sortedItems = lodash.cloneDeep(items);
        if (this.sortOrder === 'Ascending' || this.sortOrder === 'Descending') {
            this._sortedItems.sort(this.sortItems);
        }
        if (this.sortOrder === 'Descending') {
            this._sortedItems.reverse();
        }
        Object.freeze(this._items);
    };
    DropdownComponent.prototype.sortItems = function (a, b) {
        var localA = (a.label) ? a.label : a.value;
        var localB = (b.label) ? b.label : b.value;
        (lodash.isString(localA)) && (localA = localA.toLowerCase());
        (lodash.isString(localB)) && (localB = localB.toLowerCase());
        if (typeof localA === typeof localB) {
            return (localA < localB) ? -1 : 1;
        }
        else {
            return (!lodash.isNumber(localA)) ? -1 : 1;
        }
    };
    DropdownComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ra-ui-dropdown',
                    template: "<mat-form-field [ngClass]=\"{'ra-ui-fill-parent': _fillParent}\" color=\"accent\" [floatLabel]=\"_floatPlaceholder\"><mat-label><div class=\"static-text-wrapper\" [ngClass]=\"{'immediate-arrow': _config.enableImmediateArrow, 'dirty-flag': _config.enableDirtyFlag}\"><ra-ui-static-text [config]=\"_staticTextConfig\" [disabled]=\"disabled\" [value]=\"label\" [translateParams]=\"translateParams\" (onAccelerator)=\"focus()\"></ra-ui-static-text></div><ra-ui-dirty-flag [attr.disabled]=\"disabled\" *ngIf=\"_showDirtyFlag()\"></ra-ui-dirty-flag><ra-ui-immediate-arrow *ngIf=\"_config.enableImmediateArrow\"></ra-ui-immediate-arrow></mat-label><mat-select [ngModel]=\"value\" [errorStateMatcher]=\"_matErrorStateMatcher\" (focusin)=\"_setFocus(true)\" (focusout)=\"_setFocus(false)\" (ngModelChange)=\"_valueChanged($event)\" #model=\"ngModel\" (openedChange)=\"_dropdownOpenedChange($event)\" [disabled]=\"disabled\" [placeholder]=\"_placeholderText\" [tabIndex]=\"_tabIndex\"><mat-select-trigger><ra-ui-static-text [disabled]=\"disabled\" [config]=\"_optionsStaticTexts\" [value]=\"_innerLabel\" [translateParams]=\"translateParams\"></ra-ui-static-text></mat-select-trigger><mat-option *ngIf=\"_config.enableResetOption\"><ra-ui-static-text [disabled]=\"disabled\" [config]=\"_optionsStaticTexts\" [value]=\"_config.resetOptionText\" [translateParams]=\"translateParams\"></ra-ui-static-text></mat-option><mat-option *ngFor=\"let item of _sortedItems\" [value]=\"item.value\" [disabled]=\"item.disabled\"><ra-ui-static-text [config]=\"_optionsStaticTexts\" [disabled]=\"item.disabled\" [value]=\"item.label || item.value\" [translateParams]=\"translateParams\"></ra-ui-static-text></mat-option></mat-select><mat-hint *ngIf=\"hintMessageStart !== ''\" align=\"start\"><ra-ui-static-text class=\"dropdown-message\" [value]=\"hintMessageStart\" [disabled]=\"disabled\" [translateParams]=\"translateParams\" [config]=\"_leftMessageConfig\"></ra-ui-static-text></mat-hint><mat-hint *ngIf=\"hintMessageEnd !== ''\" align=\"end\"><ra-ui-static-text class=\"dropdown-message\" [value]=\"hintMessageEnd\" [disabled]=\"disabled\" [translateParams]=\"translateParams\" [config]=\"_rightMessageConfig\"></ra-ui-static-text></mat-hint><mat-error *ngIf=\"_errorMessage !== ''\"><ra-ui-static-text class=\"dropdown-message\" [value]=\"_errorMessage\" [disabled]=\"disabled\" [translateParams]=\"translateParams\" [config]=\"_leftMessageConfig\"></ra-ui-static-text></mat-error></mat-form-field>",
                    styles: ["ra-ui-dropdown .ra-ui-fill-parent{width:100%}@supports (-ms-ime-align:auto){ra-ui-dropdown .mat-select{display:inline}ra-ui-dropdown:not(.flat-mode) .mat-select-trigger{display:block}ra-ui-dropdown.flat-mode .mat-select-trigger .static-text{display:inline}ra-ui-dropdown.flat-mode .mat-form-field-flex{display:flex}}@media screen and (min-width:0\0) and (min-resolution:72dpi),\0screen\,screen\9{ra-ui-dropdown .mat-select{display:inline}ra-ui-dropdown .mat-select-trigger{display:block}ra-ui-dropdown.flat-mode .mat-form-field-flex{display:flex}}"],
                    changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    encapsulation: _angular_core.ViewEncapsulation.None
                },] },
    ];
    DropdownComponent.ctorParameters = function () { return [
        { type: _angular_core.ChangeDetectorRef, },
        { type: _angular_forms.NgControl, decorators: [{ type: _angular_core.Self }, { type: _angular_core.Optional },] },
        { type: undefined, decorators: [{ type: _angular_core.Inject, args: [_raWebTechUiToolkit_commonUtils.LOGGER,] },] },
    ]; };
    DropdownComponent.propDecorators = {
        "config": [{ type: _angular_core.Input },],
        "disabled": [{ type: _angular_core.HostBinding, args: ['class.ra-ui-disabled',] }, { type: _angular_core.Input },],
        "items": [{ type: _angular_core.Input },],
        "hintMessageStart": [{ type: _angular_core.Input },],
        "hintMessageEnd": [{ type: _angular_core.Input },],
        "label": [{ type: _angular_core.Input },],
        "value": [{ type: _angular_core.Input },],
        "sortOrder": [{ type: _angular_core.Input },],
        "translateParams": [{ type: _angular_core.Input },],
        "disabledChange": [{ type: _angular_core.Output },],
        "focusChange": [{ type: _angular_core.Output },],
        "valueChange": [{ type: _angular_core.Output },],
        "onClose": [{ type: _angular_core.Output },],
        "onOpen": [{ type: _angular_core.Output },],
        "_flatMode": [{ type: _angular_core.HostBinding, args: ['class.flat-mode',] },],
        "selectEl": [{ type: _angular_core.ViewChild, args: [_angular_material.MatSelect,] },],
    };
    return DropdownComponent;
}(FormControlBase));

var RaUiDropdownModule = (function () {
    function RaUiDropdownModule() {
    }
    RaUiDropdownModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    declarations: [
                        DropdownComponent
                    ],
                    imports: [
                        _angular_common.CommonModule,
                        _angular_forms.FormsModule,
                        _angular_material.MatSelectModule,
                        _angular_material.MatTooltipModule,
                        _raWebTechUiToolkit_commonUtils.RaUiDirtyFlagModule,
                        _raWebTechUiToolkit_commonUtils.RaUiImmediateArrowModule,
                        _raWebTechUiToolkit_commonUtils.RaUiStaticTextModule
                    ],
                    exports: [
                        DropdownComponent
                    ]
                },] },
    ];
    return RaUiDropdownModule;
}());

var ShiftFocusActionType = {
    AddNextPartToSelection: 0,
    AddSeparatorToSelection: 1,
    ReduceSelection: 2,
    RemoveLastCharacter: 3,
    SelectNextPart: 4,
    TypeOrSelectNextField: 5,
};
ShiftFocusActionType[ShiftFocusActionType.AddNextPartToSelection] = "AddNextPartToSelection";
ShiftFocusActionType[ShiftFocusActionType.AddSeparatorToSelection] = "AddSeparatorToSelection";
ShiftFocusActionType[ShiftFocusActionType.ReduceSelection] = "ReduceSelection";
ShiftFocusActionType[ShiftFocusActionType.RemoveLastCharacter] = "RemoveLastCharacter";
ShiftFocusActionType[ShiftFocusActionType.SelectNextPart] = "SelectNextPart";
ShiftFocusActionType[ShiftFocusActionType.TypeOrSelectNextField] = "TypeOrSelectNextField";
var ShiftFocusEventFactory = (function () {
    function ShiftFocusEventFactory() {
    }
    ShiftFocusEventFactory.createFocusEventToTheSibling = function (index, toPrevious) {
        if (toPrevious === void 0) { toPrevious = false; }
        return {
            direction: toPrevious ? _raWebTechUiToolkit_commonUtils.Direction.Left : _raWebTechUiToolkit_commonUtils.Direction.Right,
            index: index,
            actionType: ShiftFocusActionType.SelectNextPart
        };
    };
    return ShiftFocusEventFactory;
}());
var SpanUtils = (function () {
    function SpanUtils() {
    }
    SpanUtils.getSiblingTextNode = function (node, reversed) {
        if (reversed === void 0) { reversed = false; }
        var domPos = reversed ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING;
        var parentSpanInput = SpanUtils.findParentSpanInput(node);
        if (!parentSpanInput || !parentSpanInput.parentNode) {
            return;
        }
        var spansContainer = parentSpanInput.parentNode;
        var targetSpanInput;
        var spanHosts = ((spansContainer)).querySelectorAll(SpanUtils.SPAN_HOST_SELECTOR);
        for (var i = 0; i < spanHosts.length; i++) {
            var index = reversed ? spanHosts.length - i - 1 : i;
            if (spanHosts[index].compareDocumentPosition(parentSpanInput) & domPos) {
                targetSpanInput = spanHosts[index];
                break;
            }
        }
        if (targetSpanInput) {
            var spanElement = targetSpanInput.querySelector('.' + SpanUtils.SPAN_CLASS);
            if (spanElement) {
                return spanElement.childNodes.length > 0 ? spanElement.childNodes[0] : spanElement;
            }
        }
    };
    SpanUtils.removeSelectionContent = function () {
        var currentRange = _raWebTechUiToolkit_commonUtils.BrowserUtils.getRange();
        if (!currentRange) {
            return;
        }
        window.getSelection().removeAllRanges();
        var startContainer = currentRange.startContainer, endContainer = currentRange.endContainer, startOffset = currentRange.startOffset, endOffset = currentRange.endOffset;
        var ancestorContainer = ((currentRange.commonAncestorContainer));
        if (startContainer === endContainer) {
            startContainer.textContent = ((startContainer.textContent)).substr(0, startOffset) + ((startContainer.textContent)).substr(endOffset);
        }
        else {
            lodash.values(ancestorContainer.getElementsByClassName(SpanUtils.SPAN_CLASS)).forEach(function (childNode) {
                var childTextNode = childNode.childNodes.length > 0 && childNode.childNodes[0];
                if (childTextNode) {
                    if (childTextNode === startContainer) {
                        childTextNode.textContent = ((childTextNode.textContent)).substr(0, startOffset);
                    }
                    if (childTextNode === endContainer) {
                        childTextNode.textContent = ((childTextNode.textContent)).substr(endOffset);
                    }
                    if ((childTextNode.compareDocumentPosition(startContainer) & Node.DOCUMENT_POSITION_PRECEDING) &&
                        (childTextNode.compareDocumentPosition(endContainer) & Node.DOCUMENT_POSITION_FOLLOWING)) {
                        childTextNode.textContent = '';
                    }
                }
            });
        }
        var result = ((ancestorContainer)).textContent || '';
        return result.trim();
    };
    SpanUtils.isNumberPressed = function (event) {
        var key = _raWebTechUiToolkit_commonUtils.getKeyFromKeyboardEvent(event);
        return (key >= '0' && key <= '9');
    };
    SpanUtils.determineNewValueAfterKeyPressed = function (currentValue, nativeElement, key) {
        var sel = window.getSelection();
        var caretPosition = _raWebTechUiToolkit_commonUtils.BrowserUtils.getCaretPosition();
        var hasSelection = !!lodash.isNil(caretPosition);
        var prefixIndex;
        var suffixIndex;
        if (!hasSelection) {
            _a = [((caretPosition)), ((caretPosition))], prefixIndex = _a[0], suffixIndex = _a[1];
        }
        else if (_raWebTechUiToolkit_commonUtils.BrowserUtils.isSelectionWithinElement(nativeElement)) {
            var focusOffset = sel.focusNode === nativeElement ? currentValue.length : sel.focusOffset;
            _b = [sel.anchorOffset, focusOffset], prefixIndex = _b[0], suffixIndex = _b[1];
        }
        else {
            return;
        }
        return currentValue.substr(0, prefixIndex) + key + currentValue.substr(suffixIndex);
        var _a, _b;
    };
    SpanUtils.determineValueAfterBackspaceDelete = function (currentValue, keyCode, caretPosition) {
        var leftIndex;
        var rightIndex;
        if (keyCode === _raWebTechUiToolkit_commonUtils.KeyCode.BACKSPACE) {
            _a = [caretPosition - 1, caretPosition], leftIndex = _a[0], rightIndex = _a[1];
        }
        else if (keyCode === _raWebTechUiToolkit_commonUtils.KeyCode.DELETE) {
            _b = [caretPosition, caretPosition + 1], leftIndex = _b[0], rightIndex = _b[1];
        }
        else {
            return;
        }
        return currentValue.substr(0, leftIndex) + currentValue.substr(rightIndex);
        var _a, _b;
    };
    SpanUtils.determineDirection = function (event) {
        if (event.keyCode === _raWebTechUiToolkit_commonUtils.KeyCode.UP_ARROW || event.keyCode === _raWebTechUiToolkit_commonUtils.KeyCode.LEFT_ARROW) {
            return _raWebTechUiToolkit_commonUtils.Direction.Left;
        }
        else if (event.keyCode === _raWebTechUiToolkit_commonUtils.KeyCode.DOWN_ARROW || event.keyCode === _raWebTechUiToolkit_commonUtils.KeyCode.RIGHT_ARROW) {
            return _raWebTechUiToolkit_commonUtils.Direction.Right;
        }
        throw new Error('Pressed key is not an arrow key');
    };
    SpanUtils.incrementOrDecrement = function (currentValue, keyCode, min, max) {
        var newValue;
        if (keyCode === _raWebTechUiToolkit_commonUtils.KeyCode.DOWN_ARROW) {
            if (currentValue !== '') {
                newValue = Number(currentValue) - 1;
            }
            else if (!lodash.isNil(min)) {
                newValue = min;
            }
        }
        else if (keyCode === _raWebTechUiToolkit_commonUtils.KeyCode.UP_ARROW) {
            if (currentValue !== '') {
                newValue = Number(currentValue) + 1;
            }
            else if (!lodash.isNil(max)) {
                newValue = max;
            }
        }
        else {
            throw new Error('Pressed key is not an arrow up or arrow down key');
        }
        if (!lodash.isNil(newValue)) {
            return newValue.toString();
        }
    };
    SpanUtils.changeSelection = function (data) {
        var _a = window.getSelection(), focusNode = _a.focusNode, focusOffset = _a.focusOffset, anchorNode = _a.anchorNode, anchorOffset = _a.anchorOffset;
        var oldSelectionLength = _raWebTechUiToolkit_commonUtils.BrowserUtils.getSelectionLength();
        var oppositeDirection;
        var endNode;
        var endOffset;
        var startNode;
        var startOffset;
        if (data.direction === _raWebTechUiToolkit_commonUtils.Direction.Right) {
            oppositeDirection = _raWebTechUiToolkit_commonUtils.Direction.Left;
            _b = [focusNode, focusOffset], endNode = _b[0], endOffset = _b[1];
            _c = [anchorNode, anchorOffset], startNode = _c[0], startOffset = _c[1];
        }
        else {
            oppositeDirection = _raWebTechUiToolkit_commonUtils.Direction.Right;
            _d = [anchorNode, anchorOffset], endNode = _d[0], endOffset = _d[1];
            _e = [focusNode, focusOffset], startNode = _e[0], startOffset = _e[1];
        }
        if (data.actionType === ShiftFocusActionType.ReduceSelection) {
            var textNode = SpanUtils.getSiblingTextNode(startNode, data.direction === _raWebTechUiToolkit_commonUtils.Direction.Left);
            if (textNode) {
                var offset = data.direction === _raWebTechUiToolkit_commonUtils.Direction.Right ? 0 : ((textNode.textContent)).length;
                _raWebTechUiToolkit_commonUtils.BrowserUtils.updateBoundaryOfSelection(oppositeDirection, textNode, offset);
            }
            else {
                _raWebTechUiToolkit_commonUtils.BrowserUtils.setCaret(endNode, endOffset);
            }
        }
        else {
            var textNode = SpanUtils.getSiblingTextNode(endNode, data.direction === _raWebTechUiToolkit_commonUtils.Direction.Left);
            if (textNode) {
                var offset = void 0;
                if (data.actionType === ShiftFocusActionType.AddSeparatorToSelection) {
                    offset = data.direction === _raWebTechUiToolkit_commonUtils.Direction.Right ? 1 : ((textNode.textContent)).length - 1;
                }
                else if (data.actionType === ShiftFocusActionType.AddNextPartToSelection) {
                    offset = data.direction === _raWebTechUiToolkit_commonUtils.Direction.Right ? ((textNode.textContent)).length : 0;
                }
                _raWebTechUiToolkit_commonUtils.BrowserUtils.updateBoundaryOfSelection(data.direction, textNode, ((offset)));
            }
        }
        return _raWebTechUiToolkit_commonUtils.BrowserUtils.getSelectionLength() - oldSelectionLength;
        var _b, _c, _d, _e;
    };
    SpanUtils.findParentSpanInput = function (node) {
        var func = function (nodeItem) {
            var tagName = ((nodeItem)).tagName;
            return (!lodash.isNil(tagName) && tagName.toLowerCase() === SpanUtils.SPAN_HOST_SELECTOR);
        };
        return _raWebTechUiToolkit_commonUtils.BrowserUtils.findParentNode(node, func);
    };
    SpanUtils.SPAN_CLASS = 'span-input';
    SpanUtils.SPAN_HOST_SELECTOR = 'ra-ui-span-input';
    return SpanUtils;
}());

var AbstractInputInnerComponent = (function () {
    function AbstractInputInnerComponent(_hostElement, _changeRef, ngControl, _parentForm, _parentFormGroup, spanService) {
        this._hostElement = _hostElement;
        this._changeRef = _changeRef;
        this.ngControl = ngControl;
        this._parentForm = _parentForm;
        this._parentFormGroup = _parentFormGroup;
        this.spanService = spanService;
        this._hostClassName = 'inner-container';
        this._describedBy = '';
        this._disabled = false;
        this.disabledChange = new _angular_core.EventEmitter();
        this.focusChange = new _angular_core.EventEmitter();
        this.errorState = false;
        this.focused = false;
        this.id = '';
        this.onChangeCallback = rxjs.noop;
        this.onTouchCallback = rxjs.noop;
        this._required = false;
        this.stateChanges = new _angular_core.EventEmitter();
        this.tabIndex = 0;
        this._timeout = 0;
        this.valueChange = new _angular_core.EventEmitter();
        if (ngControl) {
            ngControl.valueAccessor = this;
        }
    }
    Object.defineProperty(AbstractInputInnerComponent.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this.setDisabledState(value);
            this._changeRef.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractInputInnerComponent.prototype, "_disabledAttr", {
        get: function () {
            if (this._disabled) {
                return this._disabled;
            }
            return;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractInputInnerComponent.prototype, "empty", {
        get: function () {
            return lodash.isNil(this.value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractInputInnerComponent.prototype, "placeholder", {
        get: function () {
            return this._placeholder;
        },
        set: function (plh) {
            this._placeholder = plh;
            this.stateChanges.emit();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractInputInnerComponent.prototype, "shouldLabelFloat", {
        get: function () {
            return this.focused || !this.empty;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractInputInnerComponent.prototype, "required", {
        get: function () {
            return this._required;
        },
        set: function (req) {
            this._required = req;
            this.stateChanges.emit();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractInputInnerComponent.prototype, "shouldPlaceholderFloat", {
        get: function () {
            return this.focused || !this.empty;
        },
        enumerable: true,
        configurable: true
    });
    AbstractInputInnerComponent.prototype.ngDoCheck = function () {
        this.ngControl && this._updateErrorState();
    };
    AbstractInputInnerComponent.prototype._updateErrorState = function () {
        var oldState = this.errorState;
        var parent = this._parentFormGroup || this._parentForm;
        var control = this.ngControl ? (this.ngControl.control) : null;
        var newState = this.errorStateMatcherInner.isErrorState(control, parent);
        if (newState !== oldState) {
            this.errorState = newState;
            this.stateChanges.emit();
            this._changeRef.detectChanges();
        }
    };
    AbstractInputInnerComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (lodash.isNil(this.ngControl) || lodash.isNil(this.ngControl.control) || !isRaUiFormControl(this.ngControl.control)) {
            return;
        }
        this._touchedChangesSubscription = ((this.ngControl.control)).touchedChanges.subscribe(function () {
            _this._changeRef.markForCheck();
            if (_this._timeout) {
                clearTimeout(_this._timeout);
            }
        });
    };
    AbstractInputInnerComponent.prototype.ngOnDestroy = function () {
        this.stateChanges.complete();
        this._touchedChangesSubscription && this._touchedChangesSubscription.unsubscribe();
    };
    AbstractInputInnerComponent.prototype._onMouseDown = function () {
        if (this.disabled) {
            return;
        }
        this._disableEditable();
    };
    AbstractInputInnerComponent.prototype._onMouseUp = function () {
        var range = _raWebTechUiToolkit_commonUtils.BrowserUtils.getRange();
        this._enableEditable();
        _raWebTechUiToolkit_commonUtils.BrowserUtils.setSelectionRange(((range)));
    };
    AbstractInputInnerComponent.prototype._onKeyDown = function (event) {
        if (this.disabled) {
            return;
        }
        if (event.keyCode === _raWebTechUiToolkit_commonUtils.KeyCode.BACKSPACE || event.keyCode === _raWebTechUiToolkit_commonUtils.KeyCode.DELETE) {
            var range = _raWebTechUiToolkit_commonUtils.BrowserUtils.getRange();
            if (range && range.commonAncestorContainer === this._hostElement.nativeElement) {
                this._removeSelection();
                event.stopPropagation();
                event.preventDefault();
            }
        }
    };
    AbstractInputInnerComponent.prototype._onPaste = function (event) {
        var castedEvent = (event);
        castedEvent.preventDefault();
        var value = _raWebTechUiToolkit_commonUtils.BrowserUtils.removeWhitespaces(_raWebTechUiToolkit_commonUtils.BrowserUtils.getClipboardData(castedEvent));
        if (this._acceptValueFunc(value)) {
            this.value = value;
            this._valueChanged();
        }
    };
    AbstractInputInnerComponent.prototype.setFocused = function () {
        if (this._disabled || this.focused) {
            return;
        }
        if (!this.focused && !this._wholeIpFocus) {
            this.focusChange.emit(true);
            this._wholeIpFocus = true;
            this.spanService.removeAllActions();
        }
        this.focused = true;
        this.stateChanges.emit();
        this._changeRef.markForCheck();
    };
    AbstractInputInnerComponent.prototype.focus = function () {
        if (this._disabled) {
            return;
        }
        this.setFocused();
        this._getSpanComponent(0).focus();
    };
    AbstractInputInnerComponent.prototype._focusOut = function () {
        var _this = this;
        this.focused = false;
        this.stateChanges.emit();
        this._enableEditable();
        this._changeRef.markForCheck();
        this._timeout = window.setTimeout(function () {
            if (!_this.focused) {
                _this.onTouchCallback();
                _this.focusChange.emit(false);
                _this._wholeIpFocus = false;
            }
        }, 100);
    };
    AbstractInputInnerComponent.prototype._enableEditable = function () {
        this._spanComponents.forEach(function (spanComponent) {
            spanComponent.enableEditable();
        });
    };
    AbstractInputInnerComponent.prototype._disableEditable = function () {
        this._spanComponents.forEach(function (spanComponent) {
            spanComponent.disableEditable();
        });
    };
    AbstractInputInnerComponent.prototype._onChildValueChanged = function (value, index) {
        this._childValues[index] = value;
        this._valueChanged();
    };
    AbstractInputInnerComponent.prototype.onContainerClick = function (event) {
        if (this.focused) {
            return;
        }
        this.focus();
        event.stopPropagation();
    };
    AbstractInputInnerComponent.prototype.shiftFocus = function (data) {
        var firstIndex = 0;
        var lastIndex = this._spanComponents.length - 1;
        var targetIndex;
        if (data.index === firstIndex && data.direction === _raWebTechUiToolkit_commonUtils.Direction.Left) {
            if (data.actionType === ShiftFocusActionType.ReduceSelection) {
                targetIndex = firstIndex;
            }
        }
        else if (data.index === lastIndex && data.direction === _raWebTechUiToolkit_commonUtils.Direction.Right) {
            if (data.actionType === ShiftFocusActionType.ReduceSelection) {
                targetIndex = lastIndex;
            }
        }
        else {
            var offset = data.direction === _raWebTechUiToolkit_commonUtils.Direction.Left ? -1 : 1;
            targetIndex = data.index + offset;
        }
        if (!lodash.isNil(targetIndex)) {
            if (data.event) {
                data.event.preventDefault();
                data.event.stopPropagation();
            }
            this._getSpanComponent(targetIndex).focus(data);
        }
    };
    AbstractInputInnerComponent.prototype._valueChanged = function () {
        this.onChangeCallback(this.value);
        this.valueChange.emit(this.value);
    };
    AbstractInputInnerComponent.prototype.setDescribedByIds = function (ids) {
        this._describedBy = ids.join(' ');
    };
    AbstractInputInnerComponent.prototype.writeValue = function (value) {
        value = FormTypeUtils.writeValueCheck({
            component: this._componentName,
            receivedVal: value,
            defaultVal: '',
            expectedType: 'string',
            checkFun: function (a) { return lodash.isString(a); },
            logger: this._logger,
            ngControl: this.ngControl
        });
        this.value = value;
    };
    AbstractInputInnerComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    AbstractInputInnerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchCallback = fn;
    };
    AbstractInputInnerComponent.prototype.setDisabledState = function (isDisabled) {
        if (isDisabled === this._disabled) {
            return;
        }
        this._disabled = isDisabled;
        this.disabledChange.emit(isDisabled);
        this._changeRef.markForCheck();
    };
    AbstractInputInnerComponent.prototype._removeSelection = function () {
        var _a = window.getSelection(), anchorNode = _a.anchorNode, anchorOffset = _a.anchorOffset;
        var newValue = SpanUtils.removeSelectionContent();
        if (newValue !== this.value) {
            this.value = newValue;
            this._valueChanged();
            this._changeRef.markForCheck();
        }
        var parentSpan = ((((anchorNode.parentNode))));
        if (_raWebTechUiToolkit_commonUtils.BrowserUtils.isChildNode(parentSpan, this._hostElement.nativeElement)) {
            parentSpan.focus();
            setTimeout(function () {
                _raWebTechUiToolkit_commonUtils.BrowserUtils.setCaret((parentSpan.childNodes.length ? parentSpan.childNodes[0] : parentSpan), anchorOffset);
            });
        }
        else {
            this._getSpanComponent(0).focus();
        }
    };
    AbstractInputInnerComponent.prototype._getSpanComponent = function (index) {
        return this._spanComponents.toArray()[index];
    };
    AbstractInputInnerComponent.propDecorators = {
        "_spanComponents": [{ type: _angular_core.ViewChildren, args: ['spanComponent',] },],
        "_hostClassName": [{ type: _angular_core.HostBinding, args: ['class',] },],
        "_describedBy": [{ type: _angular_core.HostBinding, args: ['attr.aria-describedby',] },],
        "disabled": [{ type: _angular_core.Input },],
        "_disabledAttr": [{ type: _angular_core.HostBinding, args: ['attr.disabled',] },],
        "disabledChange": [{ type: _angular_core.Output },],
        "focusChange": [{ type: _angular_core.Output },],
        "placeholder": [{ type: _angular_core.Input },],
        "required": [{ type: _angular_core.Input },],
        "shouldPlaceholderFloat": [{ type: _angular_core.HostBinding, args: ['class.floating',] },],
        "tabIndex": [{ type: _angular_core.Input },],
        "errorStateMatcherInner": [{ type: _angular_core.Input },],
        "valueChange": [{ type: _angular_core.Output },],
        "_onMouseDown": [{ type: _angular_core.HostListener, args: ['mousedown',] },],
        "_onMouseUp": [{ type: _angular_core.HostListener, args: ['mouseup',] },],
        "_onKeyDown": [{ type: _angular_core.HostListener, args: ['keydown', ['$event'],] },],
        "_onPaste": [{ type: _angular_core.HostListener, args: ['drop', ['$event'],] }, { type: _angular_core.HostListener, args: ['paste', ['$event'],] },],
    };
    return AbstractInputInnerComponent;
}());

var AbstractInputConfig = (function () {
    function AbstractInputConfig(options, logger, configName) {
        if (options === void 0) { options = ({}); }
        if (configName === void 0) { configName = 'AbstractInputConfig'; }
        this.logger = logger;
        this.configName = configName;
    }
    AbstractInputConfig.prototype.onInvalidType = function (propName, expected, got) {
        this.logger && _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(this.configName, propName, got, expected, this.logger);
    };
    AbstractInputConfig = __decorate([
        _raWebTechUiToolkit_commonUtils.Config({
            disableAcceleratorKey: {
                default: false,
                type: 'boolean'
            },
            disableTooltip: {
                default: false,
                type: 'boolean'
            },
            enableDirtyFlag: {
                default: false,
                type: 'boolean'
            },
            enableFlatMode: {
                default: false,
                type: 'boolean'
            },
            enableImmediateArrow: {
                default: false,
                type: 'boolean'
            },
            fillParent: {
                default: false,
                type: 'boolean'
            },
            tabIndex: {
                default: undefined,
                type: 'number'
            }
        }),
        __metadata("design:paramtypes", [Object, Object, String])
    ], AbstractInputConfig);
    return AbstractInputConfig;
}());

var ErrorMessageFactory = (function () {
    function ErrorMessageFactory() {
    }
    ErrorMessageFactory.getErrorMessage = function (errors, errorMessages) {
        if (errors["range"]) {
            return { text: errorMessages["range"], params: errors["range"] };
        }
        else if (errors["invalid"]) {
            return { text: errorMessages["invalid"], params: errors["invalid"] };
        }
        else if (errors["required"]) {
            return { text: errorMessages["required"] };
        }
        else {
            var error = Object.keys(errors)[0];
            return { text: errorMessages.hasOwnProperty(error) ? errorMessages[error] : error };
        }
    };
    return ErrorMessageFactory;
}());
var AbstractInputComponent = (function (_super) {
    __extends(AbstractInputComponent, _super);
    function AbstractInputComponent(logger) {
        var _this = _super.call(this, undefined) || this;
        _this.logger = logger;
        _this._errorStateMatcher = new RaUiDefaultStateMatcher();
        _this._hintMessageStart = '';
        _this._hintMessageEnd = '';
        _this._errorMessages = {};
        _this._label = '';
        _this._translateParams = {};
        _this.disabledChange = new _angular_core.EventEmitter();
        _this.focusChange = new _angular_core.EventEmitter();
        _this.valueChange = new _angular_core.EventEmitter();
        _this._flatMode = false;
        _this._fillParent = false;
        _this._width = '';
        _this._abstractInputConfig = new AbstractInputConfig();
        _this._defaultWidth = MAT_FORM_FIELD_DEFAULT_WIDTH;
        return _this;
    }
    Object.defineProperty(AbstractInputComponent.prototype, "disabled", {
        get: function () {
            return this._innerInputComponent.disabled;
        },
        set: function (value) {
            if (!lodash.isBoolean(value)) {
                this._innerInputComponent.setDisabledState(false);
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(this._componentName, 'disabled', value, 'boolean', this.logger);
            }
            else {
                this._innerInputComponent.setDisabledState(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractInputComponent.prototype, "errorStateMatcher", {
        get: function () {
            return this._errorStateMatcher;
        },
        set: function (val) {
            if (lodash.isFunction(val.isErrorState)) {
                this._errorStateMatcher = val;
            }
            else {
                this._errorStateMatcher = new RaUiDefaultStateMatcher();
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(this._componentName, 'errorStateMatcher', val, 'ErrorStateMatcher', this.logger);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractInputComponent.prototype, "hintMessageStart", {
        get: function () {
            return this._hintMessageStart;
        },
        set: function (newMessage) {
            if (!lodash.isString(newMessage)) {
                this._hintMessageStart = '';
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(this._componentName, 'hintMessageStart', newMessage, 'string', this.logger);
            }
            else {
                this._hintMessageStart = newMessage;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractInputComponent.prototype, "hintMessageEnd", {
        get: function () {
            return this._hintMessageEnd;
        },
        set: function (newMessage) {
            if (!lodash.isString(newMessage)) {
                this._hintMessageEnd = '';
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(this._componentName, 'hintMessageEnd', newMessage, 'string', this.logger);
            }
            else {
                this._hintMessageEnd = newMessage;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractInputComponent.prototype, "errorMessages", {
        get: function () {
            return this._errorMessages;
        },
        set: function (val) {
            if (!_raWebTechUiToolkit_commonUtils.TypeUtils.isObject(val)) {
                this._errorMessages = lodash.assign(this._errorMessages, {});
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(this._componentName, 'errorMessages', val, 'IErrorMessages', this.logger);
            }
            else {
                this._errorMessages = lodash.assign(this._errorMessages, val);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractInputComponent.prototype, "label", {
        get: function () {
            return this._label;
        },
        set: function (val) {
            if (!lodash.isString(val)) {
                this._label = '';
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(this._componentName, 'label', val, 'string', this.logger);
            }
            else {
                this._label = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractInputComponent.prototype, "value", {
        get: function () {
            return this._innerInputComponent.value;
        },
        set: function (val) {
            if (!lodash.isString(val)) {
                this._innerInputComponent.value = '';
                if (val !== undefined) {
                    _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(this._componentName, 'value', val, 'string', this.logger);
                }
            }
            else {
                this._innerInputComponent.value = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractInputComponent.prototype, "translateParams", {
        get: function () {
            return this._translateParams;
        },
        set: function (val) {
            if (!_raWebTechUiToolkit_commonUtils.TypeUtils.isObject(val)) {
                this._translateParams = {};
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(this._componentName, 'translateParams', typeof val, 'object', this.logger);
            }
            else {
                this._translateParams = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractInputComponent.prototype, "_errorMessage", {
        get: function () {
            if (this._innerInputComponent.errorState && this._innerInputComponent.ngControl.errors) {
                var errorMessageObj = ErrorMessageFactory.getErrorMessage(this._innerInputComponent.ngControl.errors, this.errorMessages);
                errorMessageObj.params = lodash.merge(this.translateParams, errorMessageObj.params);
                return errorMessageObj;
            }
            return;
        },
        enumerable: true,
        configurable: true
    });
    AbstractInputComponent.prototype.ngOnInit = function () {
        this._onAbstractConfigChanged();
        this._ngControl = this._innerInputComponent.ngControl;
        this._innerInputComponent._componentName = this._componentName;
        this._innerInputComponent._logger = this.logger;
    };
    AbstractInputComponent.prototype.writeValue = function (value) {
        this._innerInputComponent.writeValue(value);
    };
    AbstractInputComponent.prototype.registerOnChange = function (fn) {
        this._innerInputComponent.registerOnChange(fn);
    };
    AbstractInputComponent.prototype.registerOnTouched = function (fn) {
        this._innerInputComponent.registerOnTouched(fn);
    };
    AbstractInputComponent.prototype.setDisabledState = function (isDisabled) {
        this._innerInputComponent.setDisabledState(isDisabled);
    };
    AbstractInputComponent.prototype.focus = function () {
        this._innerInputComponent.focus();
    };
    AbstractInputComponent.prototype.setAbstractConfig = function (config) {
        this._abstractInputConfig = new AbstractInputConfig(config);
        this._onAbstractConfigChanged();
    };
    AbstractInputComponent.prototype._showDirtyFlag = function () {
        return !lodash.isNil(this._innerInputComponent.ngControl) && this._innerInputComponent.ngControl.dirty === true &&
            this._abstractInputConfig.enableDirtyFlag === true;
    };
    AbstractInputComponent.prototype._onAbstractConfigChanged = function () {
        this._flatMode = this._abstractInputConfig.enableFlatMode;
        this._tabIndex = this._abstractInputConfig.tabIndex;
        this._width = this._abstractInputConfig.fillParent ? '100%' : this._defaultWidth + 'px';
        this._staticTextConfig = new _raWebTechUiToolkit_commonUtils.StaticTextConfig({
            disableAcceleratorKey: this._abstractInputConfig.disableAcceleratorKey,
            disableTooltip: this._abstractInputConfig.disableTooltip
        });
        this._leftMessageConfig = new _raWebTechUiToolkit_commonUtils.StaticTextConfig({
            disableTooltip: this._abstractInputConfig.disableTooltip,
            textAlign: _raWebTechUiToolkit_commonUtils.TextAlign.Left,
            cursorStyle: _raWebTechUiToolkit_commonUtils.CursorStyle.Default
        });
        this._rightMessageConfig = new _raWebTechUiToolkit_commonUtils.StaticTextConfig({
            disableTooltip: this._abstractInputConfig.disableTooltip,
            textAlign: _raWebTechUiToolkit_commonUtils.TextAlign.Right,
            cursorStyle: _raWebTechUiToolkit_commonUtils.CursorStyle.Default
        });
    };
    AbstractInputComponent.propDecorators = {
        "disabled": [{ type: _angular_core.Input },],
        "errorStateMatcher": [{ type: _angular_core.Input },],
        "hintMessageStart": [{ type: _angular_core.Input },],
        "hintMessageEnd": [{ type: _angular_core.Input },],
        "errorMessages": [{ type: _angular_core.Input },],
        "label": [{ type: _angular_core.Input },],
        "value": [{ type: _angular_core.Input },],
        "translateParams": [{ type: _angular_core.Input },],
        "disabledChange": [{ type: _angular_core.Output },],
        "focusChange": [{ type: _angular_core.Output },],
        "valueChange": [{ type: _angular_core.Output },],
        "_innerInputComponent": [{ type: _angular_core.ViewChild, args: ['innerInputComponent',] },],
        "_labelComponent": [{ type: _angular_core.ViewChild, args: ['labelComponent',] },],
        "_flatMode": [{ type: _angular_core.HostBinding, args: ['class.flat-mode',] },],
        "_fillParent": [{ type: _angular_core.HostBinding, args: ['class.ra-ui-fill-parent',] },],
    };
    return AbstractInputComponent;
}(_raWebTechUiToolkit_commonUtils.ControlValueAccessorBase));

var PrivateIpAddressConfig = (function (_super) {
    __extends(PrivateIpAddressConfig, _super);
    function PrivateIpAddressConfig(options, logger) {
        if (options === void 0) { options = ({}); }
        return _super.call(this, (options), logger, 'PrivateIpAddressConfig') || this;
    }
    PrivateIpAddressConfig = __decorate([
        _raWebTechUiToolkit_commonUtils.Immutable,
        __metadata("design:paramtypes", [Object, Object])
    ], PrivateIpAddressConfig);
    return PrivateIpAddressConfig;
}(AbstractInputConfig));
var PrivateIpAddressComponent = (function (_super) {
    __extends(PrivateIpAddressComponent, _super);
    function PrivateIpAddressComponent(logger) {
        var _this = _super.call(this, logger) || this;
        _this.logger = logger;
        _this._config = new PrivateIpAddressConfig(undefined, _this.logger);
        _this._componentName = 'PrivateIpAddressComponent';
        _this.errorMessages = {
            required: 'RA_UI_FORM_SYSTEM.IP_ADDRESS.REQUIRED_ERROR_TOKEN',
            invalid: 'RA_UI_FORM_SYSTEM.IP_ADDRESS.INVALID_ERROR_TOKEN',
            range: 'RA_UI_FORM_SYSTEM.IP_ADDRESS.RANGE_ERROR_TOKEN'
        };
        return _this;
    }
    Object.defineProperty(PrivateIpAddressComponent.prototype, "config", {
        get: function () {
            return this._config;
        },
        set: function (value) {
            if (!_raWebTechUiToolkit_commonUtils.TypeUtils.isObject(value)) {
                this.setAbstractConfig(new PrivateIpAddressConfig(undefined, this.logger));
                this._config = new PrivateIpAddressConfig(undefined, this.logger);
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(this._componentName, 'config', value, 'IPrivateIpAddressConfig', this.logger);
            }
            else {
                this.setAbstractConfig(value);
                this._config = new PrivateIpAddressConfig(value, this.logger);
            }
        },
        enumerable: true,
        configurable: true
    });
    PrivateIpAddressComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ra-ui-private-ip-address',
                    template: "<mat-form-field floatLabel=\"always\" [style.width]=\"_width\" color=\"accent\"><ra-ui-private-ip-address-inner [errorStateMatcherInner]=\"errorStateMatcher\" [disabled]=\"disabled\" (disabledChange)=\"disabledChange.emit($event)\" (valueChange)=\"valueChange.emit($event)\" (focusChange)=\"focusChange.emit($event)\" [tabIndex]=\"_tabIndex\" #innerInputComponent></ra-ui-private-ip-address-inner><mat-placeholder><div class=\"static-text-wrapper\" [ngClass]=\"{'immediate-arrow': config.enableImmediateArrow, 'dirty-flag': _showDirtyFlag()}\"><ra-ui-static-text #labelComponent [config]=\"_staticTextConfig\" [value]=\"label\" (onAccelerator)=\"focus()\" [translateParams]=\"translateParams\" [disabled]=\"disabled\"></ra-ui-static-text></div><ra-ui-dirty-flag [attr.disabled]=\"disabled\" *ngIf=\"_showDirtyFlag()\"></ra-ui-dirty-flag><ra-ui-immediate-arrow *ngIf=\"config.enableImmediateArrow\"></ra-ui-immediate-arrow></mat-placeholder><mat-hint *ngIf=\"hintMessageStart !== ''\" align=\"start\" class=\"hint-message-start\"><ra-ui-static-text [value]=\"hintMessageStart\" [disabled]=\"disabled\" [translateParams]=\"translateParams\" [config]=\"_leftMessageConfig\"></ra-ui-static-text></mat-hint><mat-hint *ngIf=\"hintMessageEnd !== ''\" align=\"end\" class=\"hint-message-end\"><ra-ui-static-text [value]=\"hintMessageEnd\" [disabled]=\"disabled\" [translateParams]=\"translateParams\" [config]=\"_rightMessageConfig\"></ra-ui-static-text></mat-hint><mat-error *ngIf=\"_errorMessage\"><ra-ui-static-text [value]=\"_errorMessage.text\" [disabled]=\"disabled\" [translateParams]=\"_errorMessage.params\" [config]=\"_leftMessageConfig\"></ra-ui-static-text></mat-error></mat-form-field>",
                    styles: ["ra-ui-private-ip-address.ra-ui-fill-parent{width:100%}"],
                    changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    encapsulation: _angular_core.ViewEncapsulation.None
                },] },
    ];
    PrivateIpAddressComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core.Inject, args: [_raWebTechUiToolkit_commonUtils.LOGGER,] },] },
    ]; };
    PrivateIpAddressComponent.propDecorators = {
        "config": [{ type: _angular_core.Input },],
    };
    return PrivateIpAddressComponent;
}(AbstractInputComponent));

var SpanInputService = (function () {
    function SpanInputService() {
        this.shiftActions = [];
    }
    SpanInputService.prototype.addAction = function (direction) {
        this.shiftActions.push(direction);
    };
    SpanInputService.prototype.addMultipleActions = function (direction, count) {
        for (var i = 0; i < count; i++) {
            this.addAction(direction);
        }
    };
    SpanInputService.prototype.getLastAction = function () {
        return lodash.last(this.shiftActions);
    };
    SpanInputService.prototype.removeMultipleLastActions = function (count) {
        this.shiftActions.splice(0, count);
    };
    SpanInputService.prototype.removeAllActions = function () {
        this.shiftActions = [];
    };
    SpanInputService.decorators = [
        { type: _angular_core.Injectable },
    ];
    return SpanInputService;
}());

var SpanInputComponent = (function () {
    function SpanInputComponent(changeRef, spanService, _device) {
        this.changeRef = changeRef;
        this.spanService = spanService;
        this._device = _device;
        this._disabled = false;
        this.placeholder = '';
        this.radix = 10;
        this._spanClass = SpanUtils.SPAN_CLASS;
        this.textAlign = 'Center';
        this.tabIndex = 0;
        this._value = '';
        this.valueChange = new _angular_core.EventEmitter();
        this.focusInEvent = new _angular_core.EventEmitter();
        this.focusOutEvent = new _angular_core.EventEmitter();
        this.selectionStarted = new _angular_core.EventEmitter();
        this.selectionEnded = new _angular_core.EventEmitter();
        this.shiftFocus = new _angular_core.EventEmitter();
    }
    Object.defineProperty(SpanInputComponent.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = value;
            this._spanElement.nativeElement.contentEditable = !value;
            this.changeRef.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpanInputComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            if (!lodash.isNil(value) && (this._value !== value)) {
                this._spanElement.nativeElement.innerText = this._value = value;
                this.changeRef.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    SpanInputComponent.prototype.ngOnInit = function () {
        this.enableEditable();
    };
    SpanInputComponent.prototype._onMouseDown = function (event) {
        if (this.disabled) {
            return;
        }
        if (this._isEmpty()) {
            this._spanElement.nativeElement.appendChild(document.createTextNode('\u200b'));
        }
        this._spanElement.nativeElement.focus();
    };
    SpanInputComponent.prototype._onClick = function (event) {
        if (this.disabled) {
            return;
        }
        this.enableEditable();
        this._spanElement.nativeElement.blur();
        this._spanElement.nativeElement.focus();
        this.spanService.removeAllActions();
        (this._isEmpty()) && (this._spanElement.nativeElement.innerHTML = '');
    };
    SpanInputComponent.prototype._onDoubleClick = function () {
        this._selectAll();
    };
    SpanInputComponent.prototype._onFocusIn = function () {
        this.focusInEvent.emit();
    };
    SpanInputComponent.prototype._onFocusOut = function () {
        this.focusOutEvent.emit();
    };
    SpanInputComponent.prototype._onKeyPress = function (event) {
        return false;
    };
    SpanInputComponent.prototype._onKeyDown = function (event) {
        if (this.disabled) {
            event.preventDefault();
            return false;
        }
        var acceptKey = true;
        switch (event.keyCode) {
            case _raWebTechUiToolkit_commonUtils.KeyCode.TAB:
                this.spanService.removeAllActions();
                this.shiftFocus.emit({
                    direction: event.shiftKey ? _raWebTechUiToolkit_commonUtils.Direction.Left : _raWebTechUiToolkit_commonUtils.Direction.Right,
                    index: this.index,
                    event: event,
                    actionType: ShiftFocusActionType.SelectNextPart
                });
                break;
            case _raWebTechUiToolkit_commonUtils.KeyCode.UP_ARROW:
            case _raWebTechUiToolkit_commonUtils.KeyCode.DOWN_ARROW:
            case _raWebTechUiToolkit_commonUtils.KeyCode.LEFT_ARROW:
            case _raWebTechUiToolkit_commonUtils.KeyCode.RIGHT_ARROW:
                event.preventDefault();
                event.stopPropagation();
                this._handleArrow(event);
                break;
            case _raWebTechUiToolkit_commonUtils.KeyCode.DELETE:
            case _raWebTechUiToolkit_commonUtils.KeyCode.BACKSPACE:
                event.preventDefault();
                this._handleDeleteBackspaceKey(event);
                this.spanService.removeAllActions();
                break;
            default:
                var key = _raWebTechUiToolkit_commonUtils.getKeyFromKeyboardEvent(event);
                if (this.separator && key === this.separator) {
                    this._handleSeparatorKey();
                    acceptKey = false;
                }
                if (this.acceptKey(event, this.value)) {
                    acceptKey = this._handleKeyPressed(event);
                    this.spanService.removeAllActions();
                }
                else {
                    acceptKey = event.altKey || event.ctrlKey || event.metaKey || _raWebTechUiToolkit_commonUtils.BrowserUtils.isFnKeyPressed(event);
                }
        }
        return acceptKey;
    };
    SpanInputComponent.prototype._onCopy = function (event) {
        var range = _raWebTechUiToolkit_commonUtils.BrowserUtils.getRange();
        range && _raWebTechUiToolkit_commonUtils.BrowserUtils.setClipboardData(range.toString(), event);
        event.preventDefault();
        event.stopPropagation();
    };
    SpanInputComponent.prototype._onPaste = function (event) {
        this._handlePaste(event);
    };
    SpanInputComponent.prototype._onDrop = function (event) {
        this._handlePaste(event);
    };
    SpanInputComponent.prototype.disableEditable = function () {
        this._spanElement.nativeElement.contentEditable = false;
        this.changeRef.markForCheck();
    };
    SpanInputComponent.prototype.enableEditable = function () {
        if (!this.disabled) {
            this._spanElement.nativeElement.contentEditable = true;
            this.changeRef.markForCheck();
        }
    };
    SpanInputComponent.prototype.focus = function (data) {
        var _this = this;
        if (data) {
            switch (data.actionType) {
                case ShiftFocusActionType.TypeOrSelectNextField:
                    if (this._isEmpty()) {
                        this._setValueAndEmitEvent(((data.event)).key);
                        this._spanElement.nativeElement.focus();
                        this._setCaret(this.value.length);
                    }
                    else {
                        this._selectAll(data.direction);
                    }
                    break;
                case ShiftFocusActionType.RemoveLastCharacter:
                    this._setValueAndEmitEvent(this.value.substr(0, this.value.length - 1));
                    this._spanElement.nativeElement.focus();
                    this._setCaret(this.value.length);
                    break;
                case ShiftFocusActionType.SelectNextPart:
                    this._selectAll(data.direction);
                    break;
                case ShiftFocusActionType.AddNextPartToSelection:
                case ShiftFocusActionType.AddSeparatorToSelection:
                case ShiftFocusActionType.ReduceSelection:
                    var selectionLengthDifference = SpanUtils.changeSelection(data);
                    this._emitSelectionEnded();
                    if (selectionLengthDifference < 0) {
                        this.spanService.removeMultipleLastActions(-selectionLengthDifference);
                    }
                    else {
                        this.spanService.addMultipleActions(data.direction, selectionLengthDifference);
                    }
                    break;
                default:
                    this.enableEditable();
                    this._spanElement.nativeElement.focus();
                    this._setCaret(data.direction === _raWebTechUiToolkit_commonUtils.Direction.Left ? this.value.length : 0);
            }
        }
        else {
            this.enableEditable();
            setTimeout(function () {
                _this._spanElement.nativeElement.focus();
            });
        }
    };
    SpanInputComponent.prototype._selectAll = function (direction) {
        this.enableEditable();
        this._spanElement.nativeElement.focus();
        if (!lodash.isNil(this.value) && !this._isEmpty()) {
            document.execCommand('selectAll', false);
        }
        this.spanService.removeAllActions();
        if (direction) {
            this.spanService.addMultipleActions(direction, this.value.length);
        }
    };
    SpanInputComponent.prototype._handleKeyPressed = function (event) {
        var caretPosition = _raWebTechUiToolkit_commonUtils.BrowserUtils.getSelectionLeftPosition();
        var result = false;
        event.preventDefault();
        event.stopPropagation();
        var key = _raWebTechUiToolkit_commonUtils.getKeyFromKeyboardEvent(event);
        var newValue = SpanUtils.determineNewValueAfterKeyPressed(this.value, this._spanElement.nativeElement, key);
        if (newValue) {
            result = this.acceptNewValue(newValue);
            if (result) {
                this._setValueAndEmitEvent(newValue);
                this._setCaret(((caretPosition)) + 1);
                (newValue.length === this.maxLength) && this.shiftFocus.emit({
                    direction: _raWebTechUiToolkit_commonUtils.Direction.Right,
                    index: this.index,
                    event: event,
                    actionType: ShiftFocusActionType.SelectNextPart
                });
            }
            else if (parseInt(newValue, 10) > this.max) {
                this._setValueAndEmitEvent(this.max.toString());
                this._setCaret(0);
            }
        }
        return result;
    };
    SpanInputComponent.prototype._handleDeleteBackspaceKey = function (event) {
        var caretPosition = _raWebTechUiToolkit_commonUtils.BrowserUtils.getCaretPosition();
        var hasSelection = !!lodash.isNil(caretPosition);
        var newValue;
        if (!hasSelection) {
            if (caretPosition === 0 && event.keyCode === _raWebTechUiToolkit_commonUtils.KeyCode.BACKSPACE) {
                this.shiftFocus.emit({
                    direction: _raWebTechUiToolkit_commonUtils.Direction.Left,
                    index: this.index,
                    actionType: ShiftFocusActionType.RemoveLastCharacter,
                    event: event
                });
            }
            else {
                newValue = SpanUtils.determineValueAfterBackspaceDelete(this.value, event.keyCode, ((caretPosition)));
                if (lodash.isNil(newValue)) {
                    return;
                }
                if (this.acceptNewValue(newValue) && (newValue !== this.value)) {
                    this._setValueAndEmitEvent(newValue);
                    this._setCaret((event.keyCode === _raWebTechUiToolkit_commonUtils.KeyCode.BACKSPACE) ? ((caretPosition)) - 1 : ((caretPosition)));
                }
            }
            event.stopPropagation();
        }
        else if (_raWebTechUiToolkit_commonUtils.BrowserUtils.isSelectionWithinElement(this._spanElement.nativeElement)) {
            var leftOffsetOfSelection = _raWebTechUiToolkit_commonUtils.BrowserUtils.getSelectionLeftPosition();
            newValue = SpanUtils.removeSelectionContent();
            if (!lodash.isNil(newValue) && newValue !== this.value) {
                this._setValueAndEmitEvent(newValue);
                this._setCaret(leftOffsetOfSelection);
            }
            this.focus();
            event.stopPropagation();
        }
    };
    SpanInputComponent.prototype._handleSeparatorKey = function () {
        if (this._isEmpty() || _raWebTechUiToolkit_commonUtils.BrowserUtils.getCaretPosition() === 0 || _raWebTechUiToolkit_commonUtils.BrowserUtils.hasSelection()) {
            return;
        }
        this.shiftFocus.emit(ShiftFocusEventFactory.createFocusEventToTheSibling(this.index));
    };
    SpanInputComponent.prototype._handleArrow = function (event) {
        var direction;
        direction = SpanUtils.determineDirection(event);
        var spanShiftFocusData = {
            direction: direction,
            index: this.index,
            event: event
        };
        if (event.shiftKey) {
            this._handleArrowWithShift(event, spanShiftFocusData);
        }
        else if (event.ctrlKey) {
            this.spanService.removeAllActions();
            this._handleArrowWithCtrl(direction);
        }
        else {
            this.spanService.removeAllActions();
            this._handleArrowWithoutModifiers(event, spanShiftFocusData);
        }
    };
    SpanInputComponent.prototype._handleArrowWithShift = function (event, spanShiftFocusData) {
        this._emitSelectionStarted();
        var _a = window.getSelection(), anchorNode = _a.anchorNode, anchorOffset = _a.anchorOffset, focusNode = _a.focusNode, focusOffset = _a.focusOffset;
        var direction = spanShiftFocusData.direction;
        var adjustActions = false;
        var oldSelectionLength = _raWebTechUiToolkit_commonUtils.BrowserUtils.getSelectionLength();
        var endNode;
        var endOffset;
        var startNode;
        var startOffset;
        var oppositeDirection;
        var offset;
        var boundaryEndOffset;
        var boundaryStartOffset;
        if (direction === _raWebTechUiToolkit_commonUtils.Direction.Right) {
            _b = [focusNode, focusOffset, ((focusNode.textContent)).length], endNode = _b[0], endOffset = _b[1], boundaryEndOffset = _b[2];
            _c = [anchorNode, anchorOffset, ((anchorNode.textContent)).length - 1], startNode = _c[0], startOffset = _c[1], boundaryStartOffset = _c[2];
            oppositeDirection = _raWebTechUiToolkit_commonUtils.Direction.Left;
            offset = 1;
        }
        else {
            _d = [anchorNode, anchorOffset, 0], endNode = _d[0], endOffset = _d[1], boundaryEndOffset = _d[2];
            _e = [focusNode, focusOffset, 1], startNode = _e[0], startOffset = _e[1], boundaryStartOffset = _e[2];
            oppositeDirection = _raWebTechUiToolkit_commonUtils.Direction.Right;
            offset = -1;
        }
        if (this.spanService.getLastAction() === oppositeDirection && event.ctrlKey) {
            this.spanService.removeAllActions();
            oldSelectionLength = 0;
            _raWebTechUiToolkit_commonUtils.BrowserUtils.restoreCaretPositionAfterSelectionCleared(event.keyCode);
        }
        if (this.spanService.getLastAction() === oppositeDirection) {
            if (anchorNode === focusNode && event.ctrlKey) {
                _raWebTechUiToolkit_commonUtils.BrowserUtils.setCaret(endNode, endOffset);
                this._emitSelectionEnded();
                adjustActions = true;
            }
            else if (startOffset === boundaryStartOffset || event.ctrlKey) {
                spanShiftFocusData.actionType = ShiftFocusActionType.ReduceSelection;
                this.shiftFocus.emit(spanShiftFocusData);
            }
            else {
                _raWebTechUiToolkit_commonUtils.BrowserUtils.updateBoundaryOfSelection(oppositeDirection, startNode, startOffset + offset);
                this._emitSelectionEnded();
                adjustActions = true;
            }
        }
        else {
            if (endOffset === boundaryEndOffset) {
                spanShiftFocusData.actionType = event.ctrlKey ? ShiftFocusActionType.AddNextPartToSelection :
                    ShiftFocusActionType.AddSeparatorToSelection;
                this.shiftFocus.emit(spanShiftFocusData);
            }
            else {
                var position = event.ctrlKey ? boundaryEndOffset : endOffset + offset;
                _raWebTechUiToolkit_commonUtils.BrowserUtils.updateBoundaryOfSelection(direction, endNode, position);
                this._emitSelectionEnded();
                adjustActions = true;
            }
        }
        if (adjustActions) {
            var selectionLengthDifference = _raWebTechUiToolkit_commonUtils.BrowserUtils.getSelectionLength() - oldSelectionLength;
            if (selectionLengthDifference < 0) {
                this.spanService.removeMultipleLastActions(Math.abs(selectionLengthDifference));
            }
            else {
                this.spanService.addMultipleActions(direction, selectionLengthDifference);
            }
        }
        var _b, _c, _d, _e;
    };
    SpanInputComponent.prototype._handleArrowWithCtrl = function (direction) {
        var _a = window.getSelection(), anchorNode = _a.anchorNode, focusNode = _a.focusNode;
        if (direction === _raWebTechUiToolkit_commonUtils.Direction.Left && !SpanUtils.getSiblingTextNode((anchorNode), true)) {
            _raWebTechUiToolkit_commonUtils.BrowserUtils.setCaret(anchorNode, 0);
        }
        else if (direction === _raWebTechUiToolkit_commonUtils.Direction.Right && !SpanUtils.getSiblingTextNode((focusNode))) {
            _raWebTechUiToolkit_commonUtils.BrowserUtils.setCaret(focusNode, ((focusNode.textContent)).length);
        }
        else {
            this.shiftFocus.emit(ShiftFocusEventFactory.createFocusEventToTheSibling(this.index, direction === _raWebTechUiToolkit_commonUtils.Direction.Left));
        }
    };
    SpanInputComponent.prototype._handleArrowWithoutModifiers = function (event, spanShiftFocusData) {
        var caretPosition = _raWebTechUiToolkit_commonUtils.BrowserUtils.getCaretPosition();
        var hasSelection = !!lodash.isNil(caretPosition);
        if (!hasSelection) {
            if (event.keyCode === _raWebTechUiToolkit_commonUtils.KeyCode.LEFT_ARROW && caretPosition === 0) {
                this.shiftFocus.emit(spanShiftFocusData);
            }
            else if (event.keyCode === _raWebTechUiToolkit_commonUtils.KeyCode.RIGHT_ARROW && caretPosition === this.value.length) {
                this.shiftFocus.emit(spanShiftFocusData);
            }
            else if (event.keyCode === _raWebTechUiToolkit_commonUtils.KeyCode.UP_ARROW || event.keyCode === _raWebTechUiToolkit_commonUtils.KeyCode.DOWN_ARROW) {
                var newValue = SpanUtils.incrementOrDecrement(this.value, event.keyCode, this.min, this.max);
                if (newValue && this.acceptNewValue(newValue + '')) {
                    this._setValueAndEmitEvent(newValue + '');
                }
            }
            else {
                var offset = (event.keyCode === _raWebTechUiToolkit_commonUtils.KeyCode.RIGHT_ARROW) ? 1 : -1;
                this._setCaret(((caretPosition)) + offset);
            }
        }
        else {
            _raWebTechUiToolkit_commonUtils.BrowserUtils.restoreCaretPositionAfterSelectionCleared(event.keyCode);
        }
    };
    SpanInputComponent.prototype._handlePaste = function (event) {
        event.preventDefault();
        var value = _raWebTechUiToolkit_commonUtils.BrowserUtils.getClipboardData(event);
        value = _raWebTechUiToolkit_commonUtils.BrowserUtils.removeWhitespaces(value);
        if (value !== '') {
            if (this.acceptNewValue(value)) {
                this._setValueAndEmitEvent(value);
                if (this._shouldFocusTheNextSpan()) {
                    this.shiftFocus.emit(ShiftFocusEventFactory.createFocusEventToTheSibling(this.index));
                }
                else {
                    this._setCaret(this.value.length);
                }
                event.stopPropagation();
            }
        }
        else {
            event.stopPropagation();
        }
    };
    SpanInputComponent.prototype._setValueAndEmitEvent = function (newValue) {
        this.value = newValue;
        this.valueChange.emit(newValue);
    };
    SpanInputComponent.prototype._setCaret = function (index) {
        var nativeElement = this._spanElement.nativeElement;
        var targetElement = nativeElement.childNodes.length > 0 ? nativeElement.childNodes[0] : nativeElement;
        _raWebTechUiToolkit_commonUtils.BrowserUtils.setCaret(targetElement, index);
    };
    SpanInputComponent.prototype._shouldFocusTheNextSpan = function () {
        return this.value.length === this.maxLength;
    };
    SpanInputComponent.prototype._isEmpty = function () {
        return this.value === '';
    };
    SpanInputComponent.prototype._emitSelectionStarted = function () {
        if (this._device.getDeviceInfo().browser === ngxDeviceDetector.BROWSERS.SAFARI) {
            this.selectionStarted.emit();
        }
    };
    SpanInputComponent.prototype._emitSelectionEnded = function () {
        this.selectionEnded.emit();
    };
    SpanInputComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ra-ui-span-input',
                    template: "<span [tabindex]=\"disabled ? -1 : (tabIndex || 0)\" #spanElement [attr.placeholder]=\"placeholder\" [class]=\"_spanClass\" [ngStyle]=\"{'text-align': textAlign}\" (keydown)=\"_onKeyDown($event)\" (keypress)=\"_onKeyPress($event)\" (mousedown)=\"_onMouseDown($event)\" (click)=\"_onClick($event)\" (dblclick)=\"_onDoubleClick()\" (blur)=\"_onFocusOut()\" (focus)=\"_onFocusIn()\" (paste)=\"_onPaste($event)\" (copy)=\"_onCopy($event)\" (drop)=\"_onDrop($event)\"></span>",
                    styles: ["ra-ui-span-input{display:inline-block}ra-ui-span-input .span-input{display:inline-block;width:100%;text-align:center}ra-ui-span-input .span-input:focus{outline:0 solid transparent}"],
                    changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    encapsulation: _angular_core.ViewEncapsulation.None
                },] },
    ];
    SpanInputComponent.ctorParameters = function () { return [
        { type: _angular_core.ChangeDetectorRef, },
        { type: SpanInputService, },
        { type: ngxDeviceDetector.DeviceDetectorService, },
    ]; };
    SpanInputComponent.propDecorators = {
        "acceptNewValue": [{ type: _angular_core.Input },],
        "acceptKey": [{ type: _angular_core.Input },],
        "disabled": [{ type: _angular_core.Input },],
        "index": [{ type: _angular_core.Input },],
        "maxLength": [{ type: _angular_core.Input },],
        "max": [{ type: _angular_core.Input },],
        "min": [{ type: _angular_core.Input },],
        "placeholder": [{ type: _angular_core.Input },],
        "radix": [{ type: _angular_core.Input },],
        "separator": [{ type: _angular_core.Input },],
        "textAlign": [{ type: _angular_core.Input },],
        "tabIndex": [{ type: _angular_core.Input },],
        "value": [{ type: _angular_core.Input },],
        "valueChange": [{ type: _angular_core.Output },],
        "focusInEvent": [{ type: _angular_core.Output },],
        "focusOutEvent": [{ type: _angular_core.Output },],
        "selectionStarted": [{ type: _angular_core.Output },],
        "selectionEnded": [{ type: _angular_core.Output },],
        "shiftFocus": [{ type: _angular_core.Output },],
        "_spanElement": [{ type: _angular_core.ViewChild, args: ['spanElement',] },],
    };
    return SpanInputComponent;
}());

var RaUiAbstractInputModule = (function () {
    function RaUiAbstractInputModule() {
    }
    RaUiAbstractInputModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    declarations: [
                        SpanInputComponent
                    ],
                    imports: [
                        _angular_common.CommonModule,
                        ngxDeviceDetector.DeviceDetectorModule.forRoot()
                    ],
                    exports: [
                        SpanInputComponent
                    ]
                },] },
    ];
    return RaUiAbstractInputModule;
}());

var IpAddressErrors = (function () {
    function IpAddressErrors() {
    }
    return IpAddressErrors;
}());
var IpAddressValidators = (function () {
    function IpAddressValidators() {
    }
    IpAddressValidators.getIpOctetRegex = function () {
        return '^' + IpAddressValidators.IP_OCTET_SUBREGEX + '$';
    };
    IpAddressValidators.getIpRegex = function () {
        return '^(' + IpAddressValidators.IP_OCTET_SUBREGEX + '\\.){3}' + IpAddressValidators.IP_OCTET_SUBREGEX + '$';
    };
    IpAddressValidators.getIpPrefix = function () {
        return '^(' + IpAddressValidators.IP_OCTET_SUBREGEX + '\\.){2}' + IpAddressValidators.IP_OCTET_SUBREGEX + '\\.?$';
    };
    IpAddressValidators.required = function (control) {
        var hasErrors = lodash.isNil(control.value) ? true : !control.value.match(new RegExp(IpAddressValidators.getIpRegex()));
        return hasErrors ? { required: true } : null;
    };
    IpAddressValidators.valid = function (rules) {
        var fn = function (control) {
            var errors = new IpAddressErrors();
            if (!lodash.isNil(control.value)) {
                rules.forEach(function (rule) {
                    var ipAsNumber = IpAddressValidators.convertIpToNumber(control.value);
                    var min;
                    var max;
                    if (typeof rule === 'string') {
                        if (rule.indexOf('*') !== -1) {
                            min = IpAddressValidators.convertIpToNumber(rule.replace(/\*/g, '0'));
                            max = IpAddressValidators.convertIpToNumber(rule.replace(/\*/g, '255'));
                            if (IpAddressValidators.isIpInRange(ipAsNumber, min, max)) {
                                errors.invalid = { rule: rule };
                            }
                        }
                        else {
                            if (control.value === rule) {
                                errors.invalid = { rule: rule };
                            }
                        }
                    }
                    else if (Array.isArray(rule) && rule.length === 2) {
                        min = IpAddressValidators.convertIpToNumber(rule[0]);
                        max = IpAddressValidators.convertIpToNumber(rule[1]);
                        if (IpAddressValidators.isIpInRange(ipAsNumber, min, max)) {
                            errors.range = { min: rule[0], max: rule[1] };
                        }
                    }
                });
            }
            return (lodash.keys(errors).length !== 0) ? errors : null;
        };
        return fn;
    };
    IpAddressValidators.isIpInRange = function (ip, min, max) {
        return ip >= min && ip <= max;
    };
    IpAddressValidators.convertIpToNumber = function (ip) {
        var result = 0;
        ip.split('.').forEach(function (octet, index) {
            result += parseInt(octet, 10) * Math.pow(1000, 3 - index);
        });
        return result;
    };
    IpAddressValidators.IP_OCTET_SUBREGEX = '([0]{0,2}[0-9]|[0]?[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])';
    return IpAddressValidators;
}());

var IpAddressInnerComponent = (function (_super) {
    __extends(IpAddressInnerComponent, _super);
    function IpAddressInnerComponent(_hostElement, _changeRef, ngControl, _parentForm, _parentFormGroup, spanService) {
        var _this = _super.call(this, _hostElement, _changeRef, ngControl, _parentForm, _parentFormGroup, spanService) || this;
        _this._hostElement = _hostElement;
        _this._changeRef = _changeRef;
        _this.ngControl = ngControl;
        _this.spanService = spanService;
        _this.id = "ra-ui-ip-address-inner-" + IpAddressInnerComponent.nextId++;
        _this._dumbArray = new Array(4);
        _this._childValues = ['', '', '', ''];
        return _this;
    }
    Object.defineProperty(IpAddressInnerComponent.prototype, "value", {
        get: function () {
            var value = this._childValues.join('.');
            if (value === IpAddressInnerComponent._emptyValue) {
                return;
            }
            else {
                return value;
            }
        },
        set: function (value) {
            if (lodash.isNil(value)) {
                value = IpAddressInnerComponent._emptyValue;
            }
            else {
                if (!this._acceptValueFunc(value)) {
                    return;
                }
            }
            var ipParts = value.split('.');
            for (var i = 0; i < this._childValues.length; i++) {
                this._childValues[i] = i < ipParts.length ? this.convertOctetValue(ipParts[i]) : '';
            }
            this._changeRef.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    IpAddressInnerComponent.prototype._acceptValueFunc = function (value) {
        var ipParts = value.split('.');
        if (ipParts.length > 4) {
            return false;
        }
        for (var i = 0; i < ipParts.length; i++) {
            var octetNumber = Number(ipParts[i]);
            if ((isNaN(octetNumber) && ipParts[i] !== '') || (octetNumber < 0 || octetNumber > 255)) {
                return false;
            }
        }
        return true;
    };
    IpAddressInnerComponent.prototype._acceptOctetValueFunc = function (value) {
        if (value.length > 3) {
            return false;
        }
        var regexp = new RegExp(IpAddressValidators.getIpOctetRegex());
        return ((value === '') || regexp.test(value));
    };
    IpAddressInnerComponent.prototype._acceptKeyFunc = function (event, currentValue) {
        return SpanUtils.isNumberPressed(event);
    };
    IpAddressInnerComponent.prototype.convertOctetValue = function (value) {
        value = value.trim();
        return value === '' ? '' : Number(value).toString();
    };
    Object.defineProperty(IpAddressInnerComponent.prototype, "_showSeparator", {
        get: function () {
            return !this.empty || this.focused || this._floatPlaceholder === FloatPlaceholder.Always;
        },
        enumerable: true,
        configurable: true
    });
    IpAddressInnerComponent.nextId = 0;
    IpAddressInnerComponent._emptyValue = '...';
    IpAddressInnerComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ra-ui-ip-address-inner',
                    styles: ["ra-ui-ip-address-inner{display:block;width:100%;cursor:text}"],
                    template: "<ng-container *ngFor=\"let dumbItem of _dumbArray; let id = index\"><ra-ui-span-input [tabIndex]=\"tabIndex\" [disabled]=\"disabled\" [value]=\"_childValues[id]\" (valueChange)=\"_onChildValueChanged($event, id)\" (shiftFocus)=\"shiftFocus($event)\" (focusInEvent)=\"setFocused()\" (focusOutEvent)=\"_focusOut()\" (selectionStarted)=\"_disableEditable()\" (selectionEnded)=\"_enableEditable()\" [index]=\"id\" (paste)=\"_onPaste($event)\" [acceptNewValue]=\"_acceptOctetValueFunc\" [acceptKey]=\"_acceptKeyFunc\" [maxLength]=\"3\" [min]=\"0\" [max]=\"255\" separator=\".\" #spanComponent></ra-ui-span-input><span class=\"separator\" mousedown.prevent *ngIf=\"_showSeparator && id < _childValues.length - 1\">.</span></ng-container>",
                    providers: [
                        { provide: _angular_material.MatFormFieldControl, useExisting: IpAddressInnerComponent },
                        SpanInputService
                    ],
                    changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    encapsulation: _angular_core.ViewEncapsulation.None
                },] },
    ];
    IpAddressInnerComponent.ctorParameters = function () { return [
        { type: _angular_core.ElementRef, },
        { type: _angular_core.ChangeDetectorRef, },
        { type: _angular_forms.NgControl, decorators: [{ type: _angular_core.Optional },] },
        { type: _angular_forms.NgForm, decorators: [{ type: _angular_core.Optional },] },
        { type: _angular_forms.FormGroupDirective, decorators: [{ type: _angular_core.Optional },] },
        { type: SpanInputService, },
    ]; };
    IpAddressInnerComponent.propDecorators = {
        "id": [{ type: _angular_core.HostBinding },],
        "_floatPlaceholder": [{ type: _angular_core.Input },],
        "value": [{ type: _angular_core.Input },],
    };
    return IpAddressInnerComponent;
}(AbstractInputInnerComponent));

var PrivateIpAddressInnerComponent = (function (_super) {
    __extends(PrivateIpAddressInnerComponent, _super);
    function PrivateIpAddressInnerComponent(_hostElement, _changeRef, ngControl, _parentForm, _parentFormGroup, spanService) {
        var _this = _super.call(this, _hostElement, _changeRef, ngControl, _parentForm, _parentFormGroup, spanService) || this;
        _this._hostElement = _hostElement;
        _this._changeRef = _changeRef;
        _this.ngControl = ngControl;
        _this.spanService = spanService;
        _this._emptyValue = '...';
        _this._prefixCount = 3;
        _this._prefix = Array(_this._prefixCount).fill('');
        _this._childValues = ['', '', '', ''];
        return _this;
    }
    Object.defineProperty(PrivateIpAddressInnerComponent.prototype, "value", {
        get: function () {
            var value = this._childValues.join('.');
            if (value === this._emptyValue) {
                return;
            }
            return value;
        },
        set: function (value) {
            var currentValue = value;
            if (lodash.isNil(currentValue)) {
                currentValue = IpAddressInnerComponent._emptyValue;
            }
            else if (!this._acceptValueFunc(currentValue)) {
                return;
            }
            var ipParts = currentValue.split('.');
            if (!lodash.isNil(value)) {
                this._prefix = this.getPrefix(ipParts);
            }
            for (var i = 0; i < this._prefix.length; i++) {
                this._childValues[i] = this.convertOctetValue(this._prefix[i]);
            }
            this._childValues[this._prefixCount] = !lodash.isNil(ipParts[this._prefixCount]) ?
                this.convertOctetValue(ipParts[this._prefixCount]) : '';
            this._changeRef.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    PrivateIpAddressInnerComponent.prototype._acceptValueFunc = function (value) {
        var ipParts = value.split('.');
        if (ipParts.length > 4) {
            return false;
        }
        for (var i = 0; i < ipParts.length; i++) {
            var octetNumber = Number(ipParts[i]);
            if ((isNaN(octetNumber) && ipParts[i] !== '') || (octetNumber < 0 || octetNumber > 255)) {
                return false;
            }
        }
        return true;
    };
    PrivateIpAddressInnerComponent.prototype._acceptOctetValueFunc = function (value) {
        if (value.length > 3) {
            return false;
        }
        var regexp = new RegExp(IpAddressValidators.getIpOctetRegex());
        return ((value === '') || regexp.test(value));
    };
    PrivateIpAddressInnerComponent.prototype._acceptKeyFunc = function (event, currentValue) {
        return SpanUtils.isNumberPressed(event);
    };
    PrivateIpAddressInnerComponent.prototype._onKeyDown = function (event) {
        rxjs.noop();
    };
    PrivateIpAddressInnerComponent.prototype._onMouseDown = function () {
        this._spanComponents.first.disableEditable();
        this.setFocused();
    };
    PrivateIpAddressInnerComponent.prototype._onMouseUp = function () {
        rxjs.noop();
    };
    PrivateIpAddressInnerComponent.prototype._onPaste = function (event) {
        event.preventDefault();
    };
    PrivateIpAddressInnerComponent.prototype._prefixMouseDown = function (index) {
        var element = this.prefixElements.toArray()[index].nativeElement;
        window.getSelection().collapse(element, 0);
        element.focus();
    };
    PrivateIpAddressInnerComponent.prototype._prefixMouseUp = function () {
        if (_raWebTechUiToolkit_commonUtils.BrowserUtils.getSelectionLength() === 0) {
            this.focus();
        }
    };
    PrivateIpAddressInnerComponent.prototype.convertOctetValue = function (value) {
        value = value.trim();
        return value === '' ? '' : Number(value).toString();
    };
    PrivateIpAddressInnerComponent.prototype.getPrefix = function (octets) {
        var _this = this;
        var result = lodash.slice(octets, 0, this._prefixCount);
        result = lodash.map(result, function (item) {
            return _this.convertOctetValue(item);
        });
        if (this._prefixCount === result.length) {
            return result;
        }
        var missingOctets = (this._prefixCount - octets.length);
        for (var i = 0; i < missingOctets; i++) {
            result.push('');
        }
        return result;
    };
    PrivateIpAddressInnerComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ra-ui-private-ip-address-inner',
                    styles: ["ra-ui-private-ip-address-inner{display:block;width:100%;cursor:text}ra-ui-private-ip-address-inner.inner-container{display:flex}ra-ui-private-ip-address-inner.inner-container>*{text-align:center}ra-ui-private-ip-address-inner.inner-container>.prefix,ra-ui-private-ip-address-inner.inner-container>ra-ui-span-input{width:23%}ra-ui-private-ip-address-inner.inner-container>.prefix-separator{width:calc(8% / 3)}"],
                    template: "<ng-container *ngFor=\"let item of _prefix; let i = index\"><span class=\"prefix\" #prefixElement tabindex=\"-1\" (blur)=\"_focusOut()\" (focus)=\"setFocused()\" (mousedown)=\"_prefixMouseDown(i * 2)\" (mouseup)=\"_prefixMouseUp()\">{{item}}</span> <span class=\"prefix-separator separator\" #prefixElement tabindex=\"-1\" (blur)=\"_focusOut()\" (focus)=\"setFocused()\" (mousedown)=\"_prefixMouseDown((i * 2) + 1)\" (mouseup)=\"_prefixMouseUp()\">.</span></ng-container><ra-ui-span-input [tabIndex]=\"tabIndex\" [disabled]=\"disabled\" [value]=\"_childValues[_prefixCount]\" (valueChange)=\"_onChildValueChanged($event, 3)\" (shiftFocus)=\"shiftFocus($event)\" (focusInEvent)=\"setFocused()\" (focusOutEvent)=\"_focusOut()\" [index]=\"0\" (paste)=\"_onPaste($event)\" [maxLength]=\"3\" [acceptNewValue]=\"_acceptOctetValueFunc\" [acceptKey]=\"_acceptKeyFunc\" [min]=\"0\" [max]=\"255\" #spanComponent></ra-ui-span-input>",
                    providers: [
                        { provide: _angular_material.MatFormFieldControl, useExisting: PrivateIpAddressInnerComponent },
                        SpanInputService
                    ],
                    changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    encapsulation: _angular_core.ViewEncapsulation.None
                },] },
    ];
    PrivateIpAddressInnerComponent.ctorParameters = function () { return [
        { type: _angular_core.ElementRef, },
        { type: _angular_core.ChangeDetectorRef, },
        { type: _angular_forms.NgControl, decorators: [{ type: _angular_core.Optional },] },
        { type: _angular_forms.NgForm, decorators: [{ type: _angular_core.Optional },] },
        { type: _angular_forms.FormGroupDirective, decorators: [{ type: _angular_core.Optional },] },
        { type: SpanInputService, },
    ]; };
    PrivateIpAddressInnerComponent.propDecorators = {
        "prefixElements": [{ type: _angular_core.ViewChildren, args: ['prefixElement',] },],
        "value": [{ type: _angular_core.Input },],
    };
    return PrivateIpAddressInnerComponent;
}(AbstractInputInnerComponent));

var RaUiPrivateIpAddressModule = (function () {
    function RaUiPrivateIpAddressModule() {
    }
    RaUiPrivateIpAddressModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    declarations: [
                        PrivateIpAddressComponent,
                        PrivateIpAddressInnerComponent
                    ],
                    imports: [
                        _angular_common.CommonModule,
                        _angular_forms.FormsModule,
                        _angular_forms.ReactiveFormsModule,
                        _angular_material.MatFormFieldModule,
                        _raWebTechUiToolkit_commonUtils.RaUiStaticTextModule,
                        _raWebTechUiToolkit_commonUtils.RaUiDirtyFlagModule,
                        _raWebTechUiToolkit_commonUtils.RaUiImmediateArrowModule,
                        RaUiAbstractInputModule
                    ],
                    exports: [
                        PrivateIpAddressComponent
                    ]
                },] },
    ];
    return RaUiPrivateIpAddressModule;
}());

var IpAddressConfig = (function (_super) {
    __extends(IpAddressConfig, _super);
    function IpAddressConfig(options, logger) {
        if (options === void 0) { options = ({}); }
        var _this = _super.call(this, (options), logger, 'IpAddressConfig') || this;
        if (!isFloatPlaceholder(options.floatPlaceholder)) {
            _this.onInvalidType('floatPlaceholder', 'FloatPlaceholder', options.floatPlaceholder);
            _this.floatPlaceholder = FloatPlaceholder.Auto;
        }
        else {
            _this.floatPlaceholder = options.floatPlaceholder;
        }
        if (_this.enableFlatMode && _this.floatPlaceholder === FloatPlaceholder.Auto) {
            _this.floatPlaceholder = FloatPlaceholder.Always;
        }
        return _this;
    }
    IpAddressConfig = __decorate([
        _raWebTechUiToolkit_commonUtils.Immutable,
        __metadata("design:paramtypes", [Object, Object])
    ], IpAddressConfig);
    return IpAddressConfig;
}(AbstractInputConfig));
var IpAddressComponent = (function (_super) {
    __extends(IpAddressComponent, _super);
    function IpAddressComponent(logger) {
        var _this = _super.call(this, logger) || this;
        _this.logger = logger;
        _this._config = new IpAddressConfig(undefined, _this.logger);
        _this._componentName = 'IpAddressComponent';
        _this.errorMessages = {
            required: 'RA_UI_FORM_SYSTEM.IP_ADDRESS.REQUIRED_ERROR_TOKEN',
            invalid: 'RA_UI_FORM_SYSTEM.IP_ADDRESS.INVALID_ERROR_TOKEN',
            range: 'RA_UI_FORM_SYSTEM.IP_ADDRESS.RANGE_ERROR_TOKEN'
        };
        return _this;
    }
    Object.defineProperty(IpAddressComponent.prototype, "config", {
        get: function () {
            return this._config;
        },
        set: function (value) {
            if (!_raWebTechUiToolkit_commonUtils.TypeUtils.isObject(value)) {
                this.setAbstractConfig(new IpAddressConfig(undefined, this.logger));
                this._config = new IpAddressConfig(undefined, this.logger);
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(this._componentName, 'config', value, 'IIpAddressConfig', this.logger);
            }
            else {
                this.setAbstractConfig(value);
                this._config = new IpAddressConfig(value, this.logger);
            }
            this._floatPlaceholder = this._config.floatPlaceholder;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IpAddressComponent.prototype, "_showPlaceholder", {
        get: function () {
            return !(this._floatPlaceholder === FloatPlaceholder.Never && this._innerInputComponent.focused);
        },
        enumerable: true,
        configurable: true
    });
    IpAddressComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ra-ui-ip-address',
                    template: "<mat-form-field [floatLabel]=\"_floatPlaceholder\" [style.width]=\"_width\" class=\"ra-ui-ip-address-mat-form-field\" color=\"accent\"><ra-ui-ip-address-inner [errorStateMatcherInner]=\"errorStateMatcher\" [disabled]=\"disabled\" (disabledChange)=\"disabledChange.emit($event)\" (valueChange)=\"valueChange.emit($event)\" (focusChange)=\"focusChange.emit($event)\" [_floatPlaceholder]=\"_floatPlaceholder\" [tabIndex]=\"_tabIndex\" #innerInputComponent></ra-ui-ip-address-inner><mat-placeholder *ngIf=\"_showPlaceholder\"><div class=\"static-text-wrapper\" [ngClass]=\"{'immediate-arrow': config.enableImmediateArrow, 'dirty-flag': _showDirtyFlag()}\"><ra-ui-static-text #labelComponent [config]=\"_staticTextConfig\" [value]=\"label\" (onAccelerator)=\"focus()\" [translateParams]=\"translateParams\" [disabled]=\"disabled\"></ra-ui-static-text></div><ra-ui-dirty-flag [attr.disabled]=\"disabled\" *ngIf=\"_showDirtyFlag()\"></ra-ui-dirty-flag><ra-ui-immediate-arrow *ngIf=\"config.enableImmediateArrow\"></ra-ui-immediate-arrow></mat-placeholder><mat-hint *ngIf=\"hintMessageStart !== ''\" align=\"start\"><ra-ui-static-text [value]=\"hintMessageStart\" [disabled]=\"disabled\" [translateParams]=\"translateParams\" [config]=\"_leftMessageConfig\"></ra-ui-static-text></mat-hint><mat-hint *ngIf=\"hintMessageEnd !== ''\" align=\"end\"><ra-ui-static-text [value]=\"hintMessageEnd\" [disabled]=\"disabled\" [translateParams]=\"translateParams\" [config]=\"_rightMessageConfig\"></ra-ui-static-text></mat-hint><mat-error *ngIf=\"_errorMessage\"><ra-ui-static-text [value]=\"_errorMessage.text\" [disabled]=\"disabled\" [translateParams]=\"_errorMessage.params\" [config]=\"_leftMessageConfig\"></ra-ui-static-text></mat-error></mat-form-field>",
                    styles: ["ra-ui-ip-address.ra-ui-fill-parent{width:100%}"],
                    changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    encapsulation: _angular_core.ViewEncapsulation.None
                },] },
    ];
    IpAddressComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core.Inject, args: [_raWebTechUiToolkit_commonUtils.LOGGER,] },] },
    ]; };
    IpAddressComponent.propDecorators = {
        "config": [{ type: _angular_core.Input },],
    };
    return IpAddressComponent;
}(AbstractInputComponent));

var RaUiIpAddressModule = (function () {
    function RaUiIpAddressModule() {
    }
    RaUiIpAddressModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    declarations: [
                        IpAddressInnerComponent,
                        IpAddressComponent
                    ],
                    imports: [
                        _angular_common.CommonModule,
                        _angular_forms.FormsModule,
                        _angular_forms.ReactiveFormsModule,
                        _angular_material.MatFormFieldModule,
                        _raWebTechUiToolkit_commonUtils.RaUiStaticTextModule,
                        _raWebTechUiToolkit_commonUtils.RaUiDirtyFlagModule,
                        _raWebTechUiToolkit_commonUtils.RaUiImmediateArrowModule,
                        RaUiAbstractInputModule,
                        _raWebTechUiToolkit_commonUtils.MousedownPreventModule
                    ],
                    exports: [
                        IpAddressComponent
                    ]
                },] },
    ];
    return RaUiIpAddressModule;
}());

var NumericValidators = (function () {
    function NumericValidators() {
    }
    NumericValidators.testNumber = function (value, min, max, precision, maxDigits) {
        var errors = {};
        if (value === '' || lodash.isNil(value)) {
            return null;
        }
        if (!lodash.isNumber(value) || lodash.isNaN(value)) {
            errors.isNaN = true;
            return errors;
        }
        (min !== undefined && value < min) && (errors.min = true);
        (max !== undefined && value > max) && (errors.max = true);
        if (precision === undefined) {
            !Number.isInteger(value) && (errors.isNotInteger = true);
        }
        else {
            ((value > 0 && value < precision) || (value < 0 && value > precision * -1)) && (errors.lossPrecision = true);
        }
        if (maxDigits !== undefined) {
            var testingDigits = value.toString()
                .replace(/\./, '')
                .replace(/^[+-]?0*/, '')
                .replace(/e.*/, '')
                .replace(/0*$/, '');
            (testingDigits.length > maxDigits) && (errors.lossPrecision = true);
        }
        if (Object.keys(errors).length) {
            return errors;
        }
        else {
            return null;
        }
    };
    NumericValidators.real = function (control) {
        return NumericValidators.testNumber(control.value, -3.4e38, 3.4e38, 3.4e-38, 7);
    };
    NumericValidators.double = function (control) {
        return NumericValidators.testNumber(control.value, -1.7E+308, 1.7E+308, 1.7e-308, 15);
    };
    NumericValidators.sint = function (control) {
        return NumericValidators.testNumber(control.value, -128, 127);
    };
    NumericValidators.usint = function (control) {
        return NumericValidators.testNumber(control.value, 0, 255);
    };
    NumericValidators.int = function (control) {
        return NumericValidators.testNumber(control.value, -32768, 32767);
    };
    NumericValidators.uint = function (control) {
        return NumericValidators.testNumber(control.value, 0, 65535);
    };
    NumericValidators.dint = function (control) {
        return NumericValidators.testNumber(control.value, -2147483648, 2147483647);
    };
    NumericValidators.udint = function (control) {
        return NumericValidators.testNumber(control.value, 0, 4294967295);
    };
    NumericValidators.lint = function (control) {
        return NumericValidators.testNumber(control.value, -9223372036854775808, 9223372036854775807);
    };
    NumericValidators.ulint = function (control) {
        return NumericValidators.testNumber(control.value, 0, 18446744073709551615);
    };
    return NumericValidators;
}());

var NumericValidatorDintDirective = (function () {
    function NumericValidatorDintDirective() {
    }
    NumericValidatorDintDirective.prototype.validate = function (control) {
        return NumericValidators.dint(control);
    };
    NumericValidatorDintDirective.decorators = [
        { type: _angular_core.Directive, args: [{
                    selector: '[raUiDint]',
                    providers: [
                        {
                            provide: _angular_forms.NG_VALIDATORS,
                            useExisting: NumericValidatorDintDirective,
                            multi: true
                        }
                    ]
                },] },
    ];
    return NumericValidatorDintDirective;
}());

var NumericValidatorDoubleDirective = (function () {
    function NumericValidatorDoubleDirective() {
    }
    NumericValidatorDoubleDirective.prototype.validate = function (control) {
        return NumericValidators.double(control);
    };
    NumericValidatorDoubleDirective.decorators = [
        { type: _angular_core.Directive, args: [{
                    selector: '[raUiDouble]',
                    providers: [
                        {
                            provide: _angular_forms.NG_VALIDATORS,
                            useExisting: NumericValidatorDoubleDirective,
                            multi: true
                        }
                    ]
                },] },
    ];
    return NumericValidatorDoubleDirective;
}());

var NumericValidatorIntDirective = (function () {
    function NumericValidatorIntDirective() {
    }
    NumericValidatorIntDirective.prototype.validate = function (control) {
        return NumericValidators.int(control);
    };
    NumericValidatorIntDirective.decorators = [
        { type: _angular_core.Directive, args: [{
                    selector: '[raUiInt]',
                    providers: [
                        {
                            provide: _angular_forms.NG_VALIDATORS,
                            useExisting: NumericValidatorIntDirective,
                            multi: true
                        }
                    ]
                },] },
    ];
    return NumericValidatorIntDirective;
}());

var NumericValidatorLintDirective = (function () {
    function NumericValidatorLintDirective() {
    }
    NumericValidatorLintDirective.prototype.validate = function (control) {
        return NumericValidators.lint(control);
    };
    NumericValidatorLintDirective.decorators = [
        { type: _angular_core.Directive, args: [{
                    selector: '[raUiLint]',
                    providers: [
                        {
                            provide: _angular_forms.NG_VALIDATORS,
                            useExisting: NumericValidatorLintDirective,
                            multi: true
                        }
                    ]
                },] },
    ];
    return NumericValidatorLintDirective;
}());

var NumericValidatorRealDirective = (function () {
    function NumericValidatorRealDirective() {
    }
    NumericValidatorRealDirective.prototype.validate = function (control) {
        return NumericValidators.real(control);
    };
    NumericValidatorRealDirective.decorators = [
        { type: _angular_core.Directive, args: [{
                    selector: '[raUiReal]',
                    providers: [
                        {
                            provide: _angular_forms.NG_VALIDATORS,
                            useExisting: NumericValidatorRealDirective,
                            multi: true
                        }
                    ]
                },] },
    ];
    return NumericValidatorRealDirective;
}());

var NumericValidatorSintDirective = (function () {
    function NumericValidatorSintDirective() {
    }
    NumericValidatorSintDirective.prototype.validate = function (control) {
        return NumericValidators.sint(control);
    };
    NumericValidatorSintDirective.decorators = [
        { type: _angular_core.Directive, args: [{
                    selector: '[raUiSint]',
                    providers: [
                        {
                            provide: _angular_forms.NG_VALIDATORS,
                            useExisting: NumericValidatorSintDirective,
                            multi: true
                        }
                    ]
                },] },
    ];
    return NumericValidatorSintDirective;
}());

var NumericValidatorUdintDirective = (function () {
    function NumericValidatorUdintDirective() {
    }
    NumericValidatorUdintDirective.prototype.validate = function (control) {
        return NumericValidators.udint(control);
    };
    NumericValidatorUdintDirective.decorators = [
        { type: _angular_core.Directive, args: [{
                    selector: '[raUiUdint]',
                    providers: [
                        {
                            provide: _angular_forms.NG_VALIDATORS,
                            useExisting: NumericValidatorUdintDirective,
                            multi: true
                        }
                    ]
                },] },
    ];
    return NumericValidatorUdintDirective;
}());

var NumericValidatorUintDirective = (function () {
    function NumericValidatorUintDirective() {
    }
    NumericValidatorUintDirective.prototype.validate = function (control) {
        return NumericValidators.uint(control);
    };
    NumericValidatorUintDirective.decorators = [
        { type: _angular_core.Directive, args: [{
                    selector: '[raUiUint]',
                    providers: [
                        {
                            provide: _angular_forms.NG_VALIDATORS,
                            useExisting: NumericValidatorUintDirective,
                            multi: true
                        }
                    ]
                },] },
    ];
    return NumericValidatorUintDirective;
}());

var NumericValidatorUlintDirective = (function () {
    function NumericValidatorUlintDirective() {
    }
    NumericValidatorUlintDirective.prototype.validate = function (control) {
        return NumericValidators.ulint(control);
    };
    NumericValidatorUlintDirective.decorators = [
        { type: _angular_core.Directive, args: [{
                    selector: '[raUiUlint]',
                    providers: [
                        {
                            provide: _angular_forms.NG_VALIDATORS,
                            useExisting: NumericValidatorUlintDirective,
                            multi: true
                        }
                    ]
                },] },
    ];
    return NumericValidatorUlintDirective;
}());

var NumericValidatorUsintDirective = (function () {
    function NumericValidatorUsintDirective() {
    }
    NumericValidatorUsintDirective.prototype.validate = function (control) {
        return NumericValidators.usint(control);
    };
    NumericValidatorUsintDirective.decorators = [
        { type: _angular_core.Directive, args: [{
                    selector: '[raUiUsint]',
                    providers: [
                        {
                            provide: _angular_forms.NG_VALIDATORS,
                            useExisting: NumericValidatorUsintDirective,
                            multi: true
                        }
                    ]
                },] },
    ];
    return NumericValidatorUsintDirective;
}());

var RaUiNumericValidatorsModule = (function () {
    function RaUiNumericValidatorsModule() {
    }
    RaUiNumericValidatorsModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    imports: [
                        _angular_common.CommonModule
                    ],
                    declarations: [
                        NumericValidatorDoubleDirective,
                        NumericValidatorDintDirective,
                        NumericValidatorIntDirective,
                        NumericValidatorUsintDirective,
                        NumericValidatorUlintDirective,
                        NumericValidatorUintDirective,
                        NumericValidatorUdintDirective,
                        NumericValidatorSintDirective,
                        NumericValidatorLintDirective,
                        NumericValidatorRealDirective
                    ],
                    exports: [
                        NumericValidatorDoubleDirective,
                        NumericValidatorDintDirective,
                        NumericValidatorIntDirective,
                        NumericValidatorUsintDirective,
                        NumericValidatorUlintDirective,
                        NumericValidatorUintDirective,
                        NumericValidatorUdintDirective,
                        NumericValidatorSintDirective,
                        NumericValidatorLintDirective,
                        NumericValidatorRealDirective
                    ]
                },] },
    ];
    return RaUiNumericValidatorsModule;
}());

var STEP_VALUE_DEFAULT = 1;
var LOOP_VALUE_DEFAULT = false;
var NUMBER_PADDING_DEFAULT = 0;
var INPUT_DEFAULT_WIDTH = 180;
var BUTTONS_DEFAULT_WIDTH = 90;

var SpinnerConfig = (function () {
    function SpinnerConfig(options, logger) {
        if (options === void 0) { options = ({}); }
        this.logger = logger;
    }
    SpinnerConfig.prototype.onInvalidType = function (propName, expected, got) {
        this.logger && _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput('SpinnerConfig', propName, got, expected, this.logger);
    };
    SpinnerConfig = __decorate([
        _raWebTechUiToolkit_commonUtils.Immutable,
        _raWebTechUiToolkit_commonUtils.Config({
            disableAcceleratorKey: {
                default: false,
                type: 'boolean'
            },
            disableTooltip: {
                default: false,
                type: 'boolean'
            },
            enableDirtyFlag: {
                default: false,
                type: 'boolean'
            },
            enableFlatMode: {
                default: false,
                type: 'boolean'
            },
            enableImmediateArrow: {
                default: false,
                type: 'boolean'
            },
            fillParent: {
                default: false,
                type: 'boolean'
            },
            floatPlaceholder: {
                default: FloatPlaceholder.Auto,
                type: isFloatPlaceholder,
                typeDisplayName: 'FloatPlaceholder'
            },
            loopValue: {
                default: LOOP_VALUE_DEFAULT,
                type: 'boolean'
            },
            min: {
                default: undefined,
                type: 'number'
            },
            max: {
                default: undefined,
                type: 'number'
            },
            minDigitsAfterPoint: {
                default: undefined,
                type: 'number'
            },
            maxDigitsAfterPoint: {
                default: undefined,
                type: 'number'
            },
            numberPadding: {
                default: NUMBER_PADDING_DEFAULT,
                type: 'number'
            },
            stepValue: {
                default: STEP_VALUE_DEFAULT,
                type: 'number'
            },
            tabIndex: {
                default: undefined,
                type: 'number'
            },
            textAlign: {
                default: _raWebTechUiToolkit_commonUtils.TextAlign.Right,
                type: _raWebTechUiToolkit_commonUtils.isTextAlign,
                typeDisplayName: 'TextAlign'
            },
            typingDisabled: {
                default: false,
                type: 'boolean'
            }
        }),
        __metadata("design:paramtypes", [Object, Object])
    ], SpinnerConfig);
    return SpinnerConfig;
}());
var SpinnerComponent = (function (_super) {
    __extends(SpinnerComponent, _super);
    function SpinnerComponent(changeRef, ngControl, logger) {
        var _this = _super.call(this, changeRef, ngControl, logger) || this;
        _this.changeRef = changeRef;
        _this.logger = logger;
        _this._hintMessageStart = '';
        _this._hintMessageEnd = '';
        _this._label = '';
        _this._disabled = false;
        _this._translateParams = {};
        _this.disabledChange = new _angular_core.EventEmitter();
        _this.valueChange = new _angular_core.EventEmitter();
        _this.focusChange = new _angular_core.EventEmitter();
        _this._componentName = 'SpinnerComponent';
        _this._ButtonStyle = _raWebTechUiToolkit_commonUtils.ButtonStyle;
        _this._KeyCode = _raWebTechUiToolkit_commonUtils.KeyCode;
        _this._inputWidth = '';
        _this._spinnerWidth = '';
        _this._buttonChangingValue = false;
        _this.isInputFocused = false;
        _this.isButtonFocused = false;
        _this._isSpinnerFocused = false;
        _this._positiveSign = 1;
        _this._negativeSign = -1;
        _this._onTouched = function () { return rxjs.noop(); };
        _this._onChange = function (n) { return rxjs.noop(); };
        return _this;
    }
    Object.defineProperty(SpinnerComponent.prototype, "hintMessageStart", {
        get: function () {
            return this._hintMessageStart;
        },
        set: function (newMessage) {
            if (!lodash.isString(newMessage)) {
                this._hintMessageStart = '';
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(this._componentName, 'hintMessageStart', newMessage, 'string', this.logger);
            }
            else {
                this._hintMessageStart = newMessage;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpinnerComponent.prototype, "hintMessageEnd", {
        get: function () {
            return this._hintMessageEnd;
        },
        set: function (newMessage) {
            if (!lodash.isString(newMessage)) {
                this._hintMessageEnd = '';
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(this._componentName, 'hintMessageEnd', newMessage, 'string', this.logger);
            }
            else {
                this._hintMessageEnd = newMessage;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpinnerComponent.prototype, "label", {
        get: function () {
            return this._label;
        },
        set: function (val) {
            if (!lodash.isString(val)) {
                this._label = '';
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(this._componentName, 'label', val, 'string', this.logger);
            }
            else {
                this._label = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpinnerComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (val) {
            if (!lodash.isNumber(val)) {
                this.setValue(undefined);
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(this._componentName, 'value', val, 'number', this.logger);
            }
            else {
                this.setValue(val);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpinnerComponent.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            if (!lodash.isBoolean(value)) {
                this.setDisabledState(false);
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(this._componentName, 'disabled', value, 'boolean', this.logger);
            }
            else {
                this.setDisabledState(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpinnerComponent.prototype, "config", {
        get: function () {
            return this._config;
        },
        set: function (options) {
            if (!_raWebTechUiToolkit_commonUtils.TypeUtils.isObject(options)) {
                this._config = new SpinnerConfig(undefined, this.logger);
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(this._componentName, 'config', options, 'ISpinnerConfig', this.logger);
            }
            else {
                this._config = new SpinnerConfig(options, this.logger);
            }
            this.onConfigChanged();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpinnerComponent.prototype, "translateParams", {
        get: function () {
            return this._translateParams;
        },
        set: function (val) {
            if (!_raWebTechUiToolkit_commonUtils.TypeUtils.isObject(val)) {
                this._translateParams = {};
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(this._componentName, 'translateParams', typeof val, 'object', this.logger);
            }
            else {
                this._translateParams = val;
            }
            this.changeRef.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    SpinnerComponent.prototype.ngOnInit = function () {
        var _this = this;
        !this.config && (this.config = new SpinnerConfig());
        this._inputComponent._showDirtyFlag = function () {
            return _this._isNgControlDirty() && (_this.config.enableDirtyFlag || false);
        };
    };
    SpinnerComponent.prototype.focus = function () {
        this._inputComponent.focus();
    };
    SpinnerComponent.prototype.getUpdateValueFunction = function (sign) {
        var _this = this;
        return function () {
            _this.sign = sign;
            _this.setUndefinedValue() || _this.setValueToMinMaxRange() || _this.setValueToMinOrMax();
        };
    };
    SpinnerComponent.prototype.setValue = function (val, propagateChange) {
        if (propagateChange === void 0) { propagateChange = true; }
        if (val !== this._value) {
            this._value = val;
            if (propagateChange) {
                this._onChange(this.value);
                this.valueChange.emit(this.value);
            }
            this.changeRef.markForCheck();
        }
    };
    SpinnerComponent.prototype.setUndefinedValue = function () {
        if (!lodash.isNil(this.value) || lodash.isNil(this._min) || lodash.isNil(this._max)) {
            return false;
        }
        this.value = this.sign === this._positiveSign ? this._min : this._max;
        return true;
    };
    SpinnerComponent.prototype.setValueToMinMaxRange = function () {
        if (lodash.isNil(this.value)) {
            return false;
        }
        var newValue = this.value + (this._stepValue * this.sign);
        !lodash.isNil(this._maxDigitsAfterPoint) && (newValue = parseFloat(newValue.toFixed(this._maxDigitsAfterPoint)));
        var isNewValueInMinRange = !lodash.isNil(this._min) && newValue >= this._min;
        var isNewValueInMaxRange = !lodash.isNil(this._max) && newValue <= this._max;
        if ((lodash.isNil(this._min) && lodash.isNil(this._max)) ||
            (isNewValueInMinRange && isNewValueInMaxRange) ||
            (isNewValueInMinRange && lodash.isNil(this._max)) ||
            (isNewValueInMaxRange && lodash.isNil(this._min))) {
            this.value = newValue;
            return true;
        }
        return false;
    };
    SpinnerComponent.prototype.setValueToMinOrMax = function () {
        if (lodash.isNil(this.value)) {
            return;
        }
        if (this.sign === this._positiveSign) {
            if (!lodash.isNil(this._min) &&
                (this.value < this._min || (!lodash.isNil(this._max) && this.value >= this._max && this._loopValue))) {
                this.value = this._min;
            }
            else if (!lodash.isNil(this._max) &&
                (this.value < this._max || (this.value >= this._max && !this._loopValue))) {
                this.value = this._max;
            }
        }
        else {
            if (!lodash.isNil(this._max) &&
                (this.value > this._max || (!lodash.isNil(this._min) && this.value <= this._min && this._loopValue))) {
                this.value = this._max;
            }
            else if (!lodash.isNil(this._min) &&
                (this.value > this._min || (this.value <= this._min && !this._loopValue))) {
                this.value = this._min;
            }
        }
    };
    SpinnerComponent.prototype.startChangeValue = function (valueChangeFn) {
        var _this = this;
        this.stopChangeValue();
        valueChangeFn();
        this.stepTimeout = window.setTimeout(function () {
            _this.stepInterval = window.setInterval(function () {
                valueChangeFn();
            }, 40);
        }, 500);
    };
    SpinnerComponent.prototype.stopChangeValue = function () {
        clearInterval(this.stepInterval);
        clearTimeout(this.stepTimeout);
    };
    SpinnerComponent.prototype._onButtonStartChange = function (ev, sign) {
        this._buttonChangingValue = true;
        this.startChangeValue(this.getUpdateValueFunction(sign));
    };
    SpinnerComponent.prototype._onButtonStopChange = function () {
        if (!this._buttonChangingValue) {
            return;
        }
        this._buttonChangingValue = false;
        this._lastPressedKey = undefined;
        this.focus();
        this.stopChangeValue();
    };
    SpinnerComponent.prototype._onKeyStartChange = function (ev) {
        this.checkPropagation(ev);
        this.isUpOrDownKey(ev) && ev.preventDefault();
        if (this._lastPressedKey !== ev.keyCode) {
            if (ev.keyCode === _raWebTechUiToolkit_commonUtils.KeyCode.UP_ARROW && !this._isIncrementLocked()) {
                this.startChangeValue(this.getUpdateValueFunction(this._positiveSign));
            }
            else if (ev.keyCode === _raWebTechUiToolkit_commonUtils.KeyCode.DOWN_ARROW && !this._isDecrementLocked()) {
                this.startChangeValue(this.getUpdateValueFunction(this._negativeSign));
            }
            else {
                this.stopChangeValue();
            }
        }
        this._lastPressedKey = ev.keyCode;
    };
    SpinnerComponent.prototype._onKeyStopChange = function (ev) {
        this.checkPropagation(ev);
        if (this._lastPressedKey === ev.keyCode && this.isUpOrDownKey(ev)) {
            this._lastPressedKey = undefined;
            this.stopChangeValue();
        }
    };
    SpinnerComponent.prototype._isUpdateValueLocked = function () {
        return lodash.isNil(this.value) && (lodash.isNil(this._min) || lodash.isNil(this._max));
    };
    SpinnerComponent.prototype._isIncrementLocked = function () {
        return !lodash.isNil(this._max) && !lodash.isNil(this.value) && this.value >= this._max && !this._loopValue;
    };
    SpinnerComponent.prototype._isDecrementLocked = function () {
        return !lodash.isNil(this._min) && !lodash.isNil(this.value) && this.value <= this._min && !this._loopValue;
    };
    SpinnerComponent.prototype.isUpOrDownKey = function (ev) {
        return (ev.keyCode === _raWebTechUiToolkit_commonUtils.KeyCode.UP_ARROW || ev.keyCode === _raWebTechUiToolkit_commonUtils.KeyCode.DOWN_ARROW);
    };
    SpinnerComponent.prototype.checkPropagation = function (ev) {
        this.isUpOrDownKey(ev) && ev.stopPropagation();
    };
    SpinnerComponent.prototype._onButtonFocusChange = function (isButtonFocused) {
        !isButtonFocused && this.stopChangeValue();
        this.isButtonFocused = isButtonFocused;
        this.setSpinnerFocus();
    };
    SpinnerComponent.prototype._onInputFocusChange = function (isInputFocused) {
        !isInputFocused && !this._buttonChangingValue && this.stopChangeValue();
        this.isInputFocused = isInputFocused;
        this.setSpinnerFocus();
    };
    SpinnerComponent.prototype.setSpinnerFocus = function () {
        var _this = this;
        this.touchedTimeout = window.setTimeout(function () {
            var change = (_this.isInputFocused || _this.isButtonFocused) !== _this._isSpinnerFocused;
            if (change) {
                _this._isSpinnerFocused = (_this.isInputFocused || _this.isButtonFocused);
                _this.focusChange.emit(_this._isSpinnerFocused);
                !_this._isSpinnerFocused && _this._onTouched();
                _this.changeRef.markForCheck();
            }
        }, 100);
    };
    SpinnerComponent.prototype.onConfigChanged = function () {
        this._inputWidth = this.config.fillParent ? 'calc(100% - ' + BUTTONS_DEFAULT_WIDTH + 'px)' : INPUT_DEFAULT_WIDTH + 'px';
        this._spinnerWidth = this.config.fillParent ? '100%' : (INPUT_DEFAULT_WIDTH + BUTTONS_DEFAULT_WIDTH) + 'px';
        this._typingDisabled = this.config.typingDisabled;
        this._min = this.config.min;
        this._max = this.config.max;
        this._loopValue = !lodash.isNil(this.config.loopValue) ? this.config.loopValue : LOOP_VALUE_DEFAULT;
        this._stepValue = !lodash.isNil(this.config.stepValue) ? this.config.stepValue : STEP_VALUE_DEFAULT;
        this._minDigitsAfterPoint = this.config.minDigitsAfterPoint;
        this._maxDigitsAfterPoint = this.config.maxDigitsAfterPoint;
        this.checkMinMax();
        this.checkStepValue();
        this.checkMaxDigitsAfterPoint();
        this._inputConfig = new InputConfig({
            disableAcceleratorKey: this.config.disableAcceleratorKey,
            disableTooltip: this.config.disableTooltip,
            enableDirtyFlag: this.config.enableDirtyFlag,
            enableFlatMode: this.config.enableFlatMode,
            enableImmediateArrow: this.config.enableImmediateArrow,
            fillParent: this.config.fillParent,
            floatPlaceholder: this.config.floatPlaceholder,
            numberPadding: this.config.numberPadding,
            tabIndex: this.config.tabIndex,
            textAlign: this.config.textAlign,
            inputType: 'number',
            displayType: new FloatDisplayType(this._minDigitsAfterPoint, this._maxDigitsAfterPoint)
        });
    };
    SpinnerComponent.prototype.checkMinMax = function () {
        if (lodash.lte(this._max, this._min)) {
            this._min = undefined;
            this._max = undefined;
            _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidConfig(this._componentName, 'min/max', this.logger, "max = " + this._max + "; min = " + this._min + ";", "- \"max\" cannot be lesser or equal to \"min\".");
        }
        if (this._loopValue && (lodash.isNil(this._min) || lodash.isNil(this._max))) {
            this._loopValue = false;
            _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidConfig(this._componentName, 'loopValue', this.logger, this._loopValue, "- \"min\" or \"max\" is undefined.");
        }
    };
    SpinnerComponent.prototype.checkStepValue = function () {
        if (this._stepValue <= 0) {
            this._stepValue = STEP_VALUE_DEFAULT;
            _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidConfig(this._componentName, 'stepValue', this.logger, this._stepValue, "must be greater than 0.");
        }
        if (lodash.isNil(this._max) || lodash.isNil(this._min) || this._stepValue < (this._max - this._min)) {
            return;
        }
        var minMaxDiff = (this._max - this._min);
        if (minMaxDiff > STEP_VALUE_DEFAULT) {
            this._stepValue = STEP_VALUE_DEFAULT;
        }
        else {
            var n = 1;
            while (minMaxDiff * Math.pow(10, n) <= STEP_VALUE_DEFAULT) {
                n++;
            }
            this._stepValue = parseFloat(STEP_VALUE_DEFAULT + 'e-' + n);
        }
        _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidConfig(this._componentName, 'stepValue', this.logger, this._stepValue, "must be lesser than \"max\"(" + this._max + ") - \"min\"(" + this._min + ").");
    };
    SpinnerComponent.prototype.checkMaxDigitsAfterPoint = function () {
        if (lodash.isNil(this._maxDigitsAfterPoint)) {
            return;
        }
        if (!lodash.isNil(this._minDigitsAfterPoint) && this._maxDigitsAfterPoint < this._minDigitsAfterPoint) {
            this._maxDigitsAfterPoint = this._minDigitsAfterPoint;
            _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidConfig(this._componentName, 'maxDigitsAfterPoint', this.logger, this._maxDigitsAfterPoint, "cannot be lesser than \"minDigitsAfterPoint\"(" + this._minDigitsAfterPoint + ").");
        }
        var mantissaLength = this._stepValue.toExponential().replace(/^\d(\.)?|[eE].*/g, '').length;
        var exponent = parseInt(this._stepValue.toExponential().replace(/^.*[eE]/, ''), 10);
        var stepValueDigitsAfterPoint = mantissaLength - exponent;
        if (this._maxDigitsAfterPoint < stepValueDigitsAfterPoint) {
            this._maxDigitsAfterPoint = stepValueDigitsAfterPoint;
            _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidConfig(this._componentName, 'maxDigitsAfterPoint', this.logger, this._maxDigitsAfterPoint, "cannot be lesser than digits after decimal point of \"stepValue\"(" + this._stepValue + ")'.");
        }
    };
    SpinnerComponent.prototype.writeValue = function (value) {
        value = FormTypeUtils.writeValueCheck({
            component: this._componentName,
            receivedVal: value,
            defaultVal: undefined,
            expectedType: 'number',
            checkFun: function (a) { return lodash.isNumber(a); },
            logger: this.logger,
            ngControl: this._ngControl
        });
        if (value === null || !lodash.isNumber(value)) {
            this.setValue(undefined, false);
        }
        else {
            this.setValue(value, false);
        }
    };
    SpinnerComponent.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
    };
    SpinnerComponent.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    SpinnerComponent.prototype.setDisabledState = function (disabled) {
        if (disabled !== this._disabled) {
            this._disabled = disabled;
            this.disabledChange.emit(disabled);
            this.changeRef.markForCheck();
        }
    };
    SpinnerComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ra-ui-spinner',
                    template: "<div [style.width]=\"_spinnerWidth\" [class.focused]=\"_isSpinnerFocused\"><span class=\"input-wrapper\" [style.width]=\"_inputWidth\"><ra-ui-input #model=\"ngModel\" [(ngModel)]=\"value\" [config]=\"_inputConfig\" [disabled]=\"_typingDisabled || disabled\" [errorStateMatcher]=\"_matErrorStateMatcher\" [errorMessages]=\"errorMessages\" [hintMessageStart]=\"hintMessageStart\" [hintMessageEnd]=\"hintMessageEnd\" [translateParams]=\"translateParams\" [label]=\"label\" (keydown)=\"_onKeyStartChange($event)\" (keyup)=\"_onKeyStopChange($event)\" (focusChange)=\"_onInputFocusChange($event)\" #inputComponent><span class=\"ra-ui-input-prefix\"><ng-content select=\".ra-ui-spinner-prefix\"></ng-content></span><span class=\"ra-ui-input-suffix\"><ng-content select=\".ra-ui-spinner-suffix\"></ng-content></span></ra-ui-input></span><ra-ui-button class=\"button-left\" [class.active]=\"_lastPressedKey === _KeyCode.UP_ARROW && !_buttonChangingValue && !_isIncrementLocked() && !_isUpdateValueLocked()\" [config]=\"{buttonStyle: _ButtonStyle.Icon, tabIndex: -1}\" iconName=\"spinner-up\" [disabled]=\"disabled || _isUpdateValueLocked() || _isIncrementLocked()\" (pressEnd)=\"_onButtonStopChange()\" (mouseleave)=\"_onButtonStopChange()\" (pressStart)=\"_onButtonStartChange($event, _positiveSign)\" (focusChange)=\"_onButtonFocusChange($event)\"></ra-ui-button><ra-ui-button [class.active]=\"_lastPressedKey === _KeyCode.DOWN_ARROW && !_buttonChangingValue && !_isDecrementLocked() && !_isUpdateValueLocked()\" [config]=\"{buttonStyle: _ButtonStyle.Icon, tabIndex: -1}\" iconName=\"spinner-down\" [disabled]=\"disabled || _isUpdateValueLocked() || _isDecrementLocked()\" (pressEnd)=\"_onButtonStopChange()\" (mouseleave)=\"_onButtonStopChange()\" (pressStart)=\"_onButtonStartChange($event, _negativeSign)\" (focusChange)=\"_onButtonFocusChange($event)\"></ra-ui-button></div>",
                    styles: ["ra-ui-spinner .input-wrapper{display:inline-block}ra-ui-spinner ra-ui-input .mat-form-field-prefix .mat-icon,ra-ui-spinner ra-ui-input .mat-form-field-suffix .mat-icon{display:inline-block}"],
                    changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    encapsulation: _angular_core.ViewEncapsulation.None
                },] },
    ];
    SpinnerComponent.ctorParameters = function () { return [
        { type: _angular_core.ChangeDetectorRef, },
        { type: _angular_forms.NgControl, decorators: [{ type: _angular_core.Self }, { type: _angular_core.Optional },] },
        { type: undefined, decorators: [{ type: _angular_core.Inject, args: [_raWebTechUiToolkit_commonUtils.LOGGER,] },] },
    ]; };
    SpinnerComponent.propDecorators = {
        "hintMessageStart": [{ type: _angular_core.Input },],
        "hintMessageEnd": [{ type: _angular_core.Input },],
        "label": [{ type: _angular_core.Input },],
        "value": [{ type: _angular_core.Input },],
        "disabled": [{ type: _angular_core.Input },],
        "config": [{ type: _angular_core.Input },],
        "translateParams": [{ type: _angular_core.Input },],
        "disabledChange": [{ type: _angular_core.Output },],
        "valueChange": [{ type: _angular_core.Output },],
        "focusChange": [{ type: _angular_core.Output },],
        "_inputComponent": [{ type: _angular_core.ViewChild, args: ['inputComponent',] },],
    };
    return SpinnerComponent;
}(FormControlBase));

var RaUiSpinnerModule = (function () {
    function RaUiSpinnerModule() {
    }
    RaUiSpinnerModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    declarations: [
                        SpinnerComponent
                    ],
                    imports: [
                        _angular_common.CommonModule,
                        _raWebTechUiToolkit_commonUtils.RaUiButtonModule,
                        RaUiInputModule,
                        _angular_forms.FormsModule
                    ],
                    exports: [
                        SpinnerComponent
                    ]
                },] },
    ];
    return RaUiSpinnerModule;
}());

exports.RaUiFormModule = RaUiFormModule;
exports.FormComponent = FormComponent;
exports.isRaUiFormControl = isRaUiFormControl;
exports.RaUiFormControl = RaUiFormControl;
exports.RaUiFormGroup = RaUiFormGroup;
exports.RaUiFormArray = RaUiFormArray;
exports.CheckboxConfig = CheckboxConfig;
exports.CheckboxComponent = CheckboxComponent;
exports.RaUiCheckboxModule = RaUiCheckboxModule;
exports.CheckboxTreeComponent = CheckboxTreeComponent;
exports.RaUiCheckboxTreeModule = RaUiCheckboxTreeModule;
exports.RadioButtonConfig = RadioButtonConfig;
exports.RadioButtonComponent = RadioButtonComponent;
exports.RaUiRadioButtonModule = RaUiRadioButtonModule;
exports.ActivityStatusConfig = ActivityStatusConfig;
exports.ActivityStatusComponent = ActivityStatusComponent;
exports.RaUiActivityStatusModule = RaUiActivityStatusModule;
exports.InputType = InputType;
exports.isDisplayType = isDisplayType;
exports.isInputType = isInputType;
exports.InputConfig = InputConfig;
exports.InputComponent = InputComponent;
exports.RaUiInputModule = RaUiInputModule;
exports.NumericDisplayType = NumericDisplayType;
exports.BinaryDisplayType = BinaryDisplayType;
exports.FloatDisplayType = FloatDisplayType;
exports.HexadecimalDisplayType = HexadecimalDisplayType;
exports.IntegerDisplayType = IntegerDisplayType;
exports.OctalDisplayType = OctalDisplayType;
exports.StringDisplayType = StringDisplayType;
exports.UnsignedIntegerDisplayType = UnsignedIntegerDisplayType;
exports.MultiLineTextInputConfig = MultiLineTextInputConfig;
exports.MultiLineTextInputComponent = MultiLineTextInputComponent;
exports.RaUiMultiLineTextInputModule = RaUiMultiLineTextInputModule;
exports.SortOrder = SortOrder;
exports.DropdownConfig = DropdownConfig;
exports.DropdownComponent = DropdownComponent;
exports.RaUiDropdownModule = RaUiDropdownModule;
exports.PrivateIpAddressConfig = PrivateIpAddressConfig;
exports.PrivateIpAddressComponent = PrivateIpAddressComponent;
exports.RaUiPrivateIpAddressModule = RaUiPrivateIpAddressModule;
exports.RaUiIpAddressModule = RaUiIpAddressModule;
exports.IpAddressConfig = IpAddressConfig;
exports.IpAddressComponent = IpAddressComponent;
exports.IpAddressErrors = IpAddressErrors;
exports.IpAddressValidators = IpAddressValidators;
exports.AbstractInputConfig = AbstractInputConfig;
exports.AbstractInputComponent = AbstractInputComponent;
exports.AbstractInputInnerComponent = AbstractInputInnerComponent;
exports.FloatPlaceholder = FloatPlaceholder;
exports.isFloatPlaceholder = isFloatPlaceholder;
exports.MAT_FORM_FIELD_DEFAULT_WIDTH = MAT_FORM_FIELD_DEFAULT_WIDTH;
exports.FormControlBase = FormControlBase;
exports.NumericValidatorDintDirective = NumericValidatorDintDirective;
exports.NumericValidatorDoubleDirective = NumericValidatorDoubleDirective;
exports.NumericValidatorIntDirective = NumericValidatorIntDirective;
exports.NumericValidatorLintDirective = NumericValidatorLintDirective;
exports.NumericValidatorRealDirective = NumericValidatorRealDirective;
exports.NumericValidatorSintDirective = NumericValidatorSintDirective;
exports.NumericValidatorUdintDirective = NumericValidatorUdintDirective;
exports.NumericValidatorUintDirective = NumericValidatorUintDirective;
exports.NumericValidatorUlintDirective = NumericValidatorUlintDirective;
exports.NumericValidatorUsintDirective = NumericValidatorUsintDirective;
exports.NumericValidators = NumericValidators;
exports.RaUiNumericValidatorsModule = RaUiNumericValidatorsModule;
exports.RaUiDefaultStateMatcher = RaUiDefaultStateMatcher;
exports.FormTypeUtils = FormTypeUtils;
exports.SpinnerConfig = SpinnerConfig;
exports.SpinnerComponent = SpinnerComponent;
exports.RaUiSpinnerModule = RaUiSpinnerModule;
exports.ɵc = RaUiAbstractInputModule;
exports.ɵd = SpanInputComponent;
exports.ɵb = SpanInputService;
exports.ɵe = IpAddressInnerComponent;
exports.ɵa = PrivateIpAddressInnerComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=form-system.umd.js.map


/***/ }),

/***/ "./@ra-web-tech-ui-toolkit-navigation/bundles/navigation.umd.js":
/*!**********************************************************************!*\
  !*** ./@ra-web-tech-ui-toolkit-navigation/bundles/navigation.umd.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 */
(function (global, factory) {
	 true ? factory(exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @ra-web-tech-ui-toolkit/common-utils */ "./@ra-web-tech-ui-toolkit-common-utils/bundles/common-utils.umd.js"), __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js"), __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js"), __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js"), __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js"), __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js"), __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/esm5/ngx-translate-core.js"), __webpack_require__(/*! @ra-web-tech-ui-toolkit/form-system */ "./@ra-web-tech-ui-toolkit-form-system/bundles/form-system.umd.js"), __webpack_require__(/*! pegjs */ "./@ra-web-tech-ui-toolkit-navigation/node_modules/pegjs/lib/peg.js"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js")) :
	undefined;
}(this, (function (exports,_angular_core,_raWebTechUiToolkit_commonUtils,lodash,_angular_common,_angular_material,_angular_flexLayout,rxjs,_angular_cdk_tree,_angular_cdk_collections,_ngxTranslate_core,_raWebTechUiToolkit_formSystem,pegjs,_angular_forms) { 'use strict';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}





function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}



function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

var ACTION_BAR_COMPONENT = 'ActionBarComponent';

var ActionBarConfig = (function () {
    function ActionBarConfig(options, logger) {
        if (options === void 0) { options = ({}); }
        this.logger = logger;
    }
    ActionBarConfig.prototype.onInvalidType = function (propName, expected, got) {
        this.logger && _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput('ActionBarConfig', propName, got, expected, this.logger);
    };
    ActionBarConfig = __decorate([
        _raWebTechUiToolkit_commonUtils.Immutable,
        _raWebTechUiToolkit_commonUtils.Config({
            disableAcceleratorKeys: {
                default: false,
                type: 'boolean'
            },
            disableTooltips: {
                default: false,
                type: 'boolean'
            },
            hideLabels: {
                default: false,
                type: 'boolean'
            }
        }),
        __metadata("design:paramtypes", [Object, Object])
    ], ActionBarConfig);
    return ActionBarConfig;
}());
var ActionBarComponent = (function () {
    function ActionBarComponent(logger) {
        this.logger = logger;
        this._config = new ActionBarConfig({}, this.logger);
        this._buttonConfigs = [];
        this.onClick = new _angular_core.EventEmitter();
        this.pressStart = new _angular_core.EventEmitter();
        this.pressEnd = new _angular_core.EventEmitter();
        this._this = this;
    }
    Object.defineProperty(ActionBarComponent.prototype, "config", {
        get: function () {
            return this._config;
        },
        set: function (val) {
            if (!_raWebTechUiToolkit_commonUtils.TypeUtils.isObject(val)) {
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(ACTION_BAR_COMPONENT, 'config', val, 'IActionBarConfig', this.logger);
                val = {};
            }
            this._config = new ActionBarConfig(val, this.logger);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionBarComponent.prototype, "actions", {
        get: function () {
            return this._buttonConfigs;
        },
        set: function (newConfigs) {
            if (!lodash.isArray(newConfigs)) {
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(ACTION_BAR_COMPONENT, 'actions', newConfigs, 'IActionBarButtonConfig[]', this.logger);
                newConfigs = [];
            }
            this._buttonConfigs = newConfigs;
            Object.freeze(this._buttonConfigs);
        },
        enumerable: true,
        configurable: true
    });
    ActionBarComponent.prototype._clicked = function (event) {
        this.onClick.emit(event);
    };
    ActionBarComponent.prototype._pressStarted = function (event) {
        this.pressStart.emit(event);
    };
    ActionBarComponent.prototype._pressEnded = function (event) {
        this.pressEnd.emit(event);
    };
    ActionBarComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ra-ui-action-bar',
                    template: "<mat-toolbar class=\"action-bar-toolbar\"><div class=\"action-bar-container\" fxLayout=\"row\" fxFlexFill fxLayoutAlign=\"space-between\"><div class=\"action-bar-left-group\" fxLayout=\"row\"><div *ngFor=\"let config of (_buttonConfigs | raUiActionBarLeftGroup)\" fxLayout=\"column\"><ng-container *ngTemplateOutlet=\"actionBarButton; context: {component: _this, config: config}\"></ng-container></div></div><div class=\"action-bar-center-group\" fxLayout=\"row\"><div *ngFor=\"let config of (_buttonConfigs | raUiActionBarCenterGroup)\" fxLayout=\"column\"><ng-container *ngTemplateOutlet=\"actionBarButton; context: {component: _this, config: config}\"></ng-container></div></div><div class=\"action-bar-right-group\" fxLayout=\"row\"><div *ngFor=\"let config of (_buttonConfigs | raUiActionBarRightGroup)\" fxLayout=\"column\"><ng-container *ngTemplateOutlet=\"actionBarButton; context: {component: _this, config: config}\"></ng-container></div></div></div></mat-toolbar><ng-template #actionBarButton let-comp=\"component\" let-config=\"config\"><ra-ui-action-bar-button [config]=\"config\" [hideLabel]=\"comp._config.hideLabels\" [disableAcceleratorKey]=\"comp._config.disableAcceleratorKeys\" [disableTooltip]=\"comp._config.disableTooltips\" (actionClick)=\"comp._clicked($event)\" (actionPressStart)=\"comp._pressStarted($event)\" (actionPressEnd)=\"comp._pressEnded($event)\"></ra-ui-action-bar-button></ng-template>",
                    styles: [""],
                    changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    encapsulation: _angular_core.ViewEncapsulation.None
                },] },
    ];
    ActionBarComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core.Inject, args: [_raWebTechUiToolkit_commonUtils.LOGGER,] },] },
    ]; };
    ActionBarComponent.propDecorators = {
        "config": [{ type: _angular_core.Input },],
        "actions": [{ type: _angular_core.Input },],
        "onClick": [{ type: _angular_core.Output },],
        "pressStart": [{ type: _angular_core.Output },],
        "pressEnd": [{ type: _angular_core.Output },],
    };
    return ActionBarComponent;
}());

var ButtonAlignment = _raWebTechUiToolkit_commonUtils.strEnum([
    'left',
    'center',
    'right'
]);

var ActionBarButtonConfig = (function () {
    function ActionBarButtonConfig(options) {
        if (options === void 0) { options = ({}); }
        this.label = options.label;
        this.icon = options.icon;
        this.disabled = options.disabled || false;
        this.group = options.group;
        this.tabIndex = options.tabIndex;
        this.tooltipText = options.tooltipText || '';
        this.id = options.id;
    }
    ActionBarButtonConfig = __decorate([
        _raWebTechUiToolkit_commonUtils.Immutable,
        __metadata("design:paramtypes", [Object])
    ], ActionBarButtonConfig);
    return ActionBarButtonConfig;
}());
var ActionBarButtonComponent = (function () {
    function ActionBarButtonComponent() {
        this._hideLabel = false;
        this._disableTooltip = false;
        this._disableAcceleratorKey = false;
        this._config = new ActionBarButtonConfig();
        this.actionClick = new _angular_core.EventEmitter();
        this.actionPressStart = new _angular_core.EventEmitter();
        this.actionPressEnd = new _angular_core.EventEmitter();
    }
    Object.defineProperty(ActionBarButtonComponent.prototype, "hideLabel", {
        get: function () {
            return this._hideLabel;
        },
        set: function (hide) {
            this._hideLabel = hide;
            this.createNewConfig();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionBarButtonComponent.prototype, "disableTooltip", {
        get: function () {
            return this._disableTooltip;
        },
        set: function (disableTooltip) {
            this._disableTooltip = disableTooltip;
            this.updateButtonConfig();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionBarButtonComponent.prototype, "disableAcceleratorKey", {
        get: function () {
            return this._disableAcceleratorKey;
        },
        set: function (disableAcceleratorKey) {
            this._disableAcceleratorKey = disableAcceleratorKey;
            this.updateButtonConfig();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionBarButtonComponent.prototype, "config", {
        get: function () {
            return this._config;
        },
        set: function (val) {
            this._config = new ActionBarButtonConfig(val);
            if (lodash.isEmpty(this.originalLabel) && !lodash.isEmpty(this._config.label)) {
                this.originalLabel = this._config.label;
            }
            this.updateButtonConfig();
        },
        enumerable: true,
        configurable: true
    });
    ActionBarButtonComponent.prototype.ngOnInit = function () {
        this.updateButtonConfig();
    };
    ActionBarButtonComponent.prototype.updateButtonConfig = function () {
        this._buttonConfig = new _raWebTechUiToolkit_commonUtils.ButtonConfig({
            buttonStyle: 'IconWithLabel',
            fillParent: true,
            canOverflow: false,
            disableAcceleratorKey: this._hideLabel ? true : this._disableAcceleratorKey,
            disableTooltip: this._disableTooltip,
            tabIndex: this._config.tabIndex
        });
    };
    ActionBarButtonComponent.prototype.createNewConfig = function () {
        var newLabel = this._hideLabel ? '' : this.originalLabel;
        this.config = new ActionBarButtonConfig({
            label: newLabel,
            icon: this._config.icon,
            disabled: this._config.disabled || false,
            group: this._config.group,
            tabIndex: this._config.tabIndex,
            tooltipText: this._config.tooltipText,
            id: this._config.id
        });
    };
    ActionBarButtonComponent.prototype._clicked = function () {
        if (!this._config.disabled) {
            this.actionClick.emit(this._config);
        }
    };
    ActionBarButtonComponent.prototype._pressStarted = function () {
        if (!this._config.disabled) {
            this.actionPressStart.emit(this._config);
        }
    };
    ActionBarButtonComponent.prototype._pressEnded = function () {
        if (!this._config.disabled) {
            this.actionPressEnd.emit(this._config);
        }
    };
    ActionBarButtonComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ra-ui-action-bar-button',
                    template: "<div class=\"action-bar-button\"><ra-ui-button [config]=\"_buttonConfig\" [label]=\"_config.label\" [iconName]=\"_config.icon\" [disabled]=\"_config.disabled\" [tooltipText]=\"_config.tooltipText\" (onClick)=\"_clicked()\" (pressStart)=\"_pressStarted()\" (pressEnd)=\"_pressEnded()\"></ra-ui-button></div>",
                    styles: ["ra-ui-action-bar-button{width:100%}"],
                    preserveWhitespaces: false,
                    encapsulation: _angular_core.ViewEncapsulation.None
                },] },
    ];
    ActionBarButtonComponent.propDecorators = {
        "hideLabel": [{ type: _angular_core.Input },],
        "disableTooltip": [{ type: _angular_core.Input },],
        "disableAcceleratorKey": [{ type: _angular_core.Input },],
        "config": [{ type: _angular_core.Input },],
        "actionClick": [{ type: _angular_core.Output },],
        "actionPressStart": [{ type: _angular_core.Output },],
        "actionPressEnd": [{ type: _angular_core.Output },],
    };
    return ActionBarButtonComponent;
}());

var ActionBarLeftGroupPipe = (function () {
    function ActionBarLeftGroupPipe() {
    }
    ActionBarLeftGroupPipe.prototype.transform = function (value) {
        return value && value.filter(function (x) { return x.group === ButtonAlignment.left; });
    };
    ActionBarLeftGroupPipe.decorators = [
        { type: _angular_core.Pipe, args: [{ name: 'raUiActionBarLeftGroup', pure: false },] },
    ];
    return ActionBarLeftGroupPipe;
}());
var ActionBarRightGroupPipe = (function () {
    function ActionBarRightGroupPipe() {
    }
    ActionBarRightGroupPipe.prototype.transform = function (value) {
        return value && value.filter(function (x) { return x.group === ButtonAlignment.center; });
    };
    ActionBarRightGroupPipe.decorators = [
        { type: _angular_core.Pipe, args: [{ name: 'raUiActionBarCenterGroup', pure: false },] },
    ];
    return ActionBarRightGroupPipe;
}());
var ActionBarCenterGroupPipe = (function () {
    function ActionBarCenterGroupPipe() {
    }
    ActionBarCenterGroupPipe.prototype.transform = function (value) {
        return value && value.filter(function (x) { return x.group === ButtonAlignment.right; });
    };
    ActionBarCenterGroupPipe.decorators = [
        { type: _angular_core.Pipe, args: [{ name: 'raUiActionBarRightGroup', pure: false },] },
    ];
    return ActionBarCenterGroupPipe;
}());

var RaUiActionBarModule = (function () {
    function RaUiActionBarModule() {
    }
    RaUiActionBarModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    imports: [
                        _angular_common.CommonModule,
                        _angular_material.MatToolbarModule,
                        _angular_flexLayout.FlexLayoutModule,
                        _raWebTechUiToolkit_commonUtils.RaUiButtonModule
                    ],
                    declarations: [
                        ActionBarComponent,
                        ActionBarLeftGroupPipe,
                        ActionBarCenterGroupPipe,
                        ActionBarRightGroupPipe,
                        ActionBarButtonComponent
                    ],
                    exports: [
                        ActionBarComponent
                    ]
                },] },
    ];
    return RaUiActionBarModule;
}());

var TreeService = (function () {
    function TreeService() {
        this.update = new rxjs.Subject();
    }
    TreeService.decorators = [
        { type: _angular_core.Injectable },
    ];
    return TreeService;
}());

var TreeUtils = (function () {
    function TreeUtils() {
    }
    TreeUtils.nodeIsAsync = function (node) {
        return node.loadChildren !== undefined;
    };
    TreeUtils.nodeHasChildren = function (node) {
        return (!TreeUtils.nodeIsAsync(node) && node.children !== undefined && node.children.length > 0);
    };
    return TreeUtils;
}());

var TreeDatabase = (function () {
    function TreeDatabase() {
        this.dataChange = new rxjs.BehaviorSubject([]);
    }
    Object.defineProperty(TreeDatabase.prototype, "data", {
        get: function () {
            return this.dataChange.value;
        },
        enumerable: true,
        configurable: true
    });
    TreeDatabase.prototype.update = function (data) {
        this.dataChange.next(data);
    };
    TreeDatabase.prototype.notifyChanged = function () {
        this.dataChange.next(this.data);
    };
    TreeDatabase.decorators = [
        { type: _angular_core.Injectable },
    ];
    return TreeDatabase;
}());

var DEFAULT_EMPTY_TREE_TEXT = 'RA_UI_NAVIGATION.TREE.NO_ITEMS';
var TREE_COMPONENT = 'TreeComponent';
function isNodeExtOrUndefined(val) {
    return val === undefined || lodash.isArray(val);
}
var RaUiNestedTreeControl = (function (_super) {
    __extends(RaUiNestedTreeControl, _super);
    function RaUiNestedTreeControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.selectionModel = new _angular_cdk_collections.SelectionModel();
        _this.loadingModel = new _angular_cdk_collections.SelectionModel(true);
        _this.dirtyModel = new _angular_cdk_collections.SelectionModel(true);
        _this.refreshUi = new _angular_core.EventEmitter();
        _this.updateDataSource = new _angular_core.EventEmitter();
        _this.nodesRemoved = new _angular_core.EventEmitter();
        return _this;
    }
    RaUiNestedTreeControl.prototype.select = function (node) {
        this.selectionModel.select(node);
    };
    RaUiNestedTreeControl.prototype.unselect = function (node) {
        this.selectionModel.deselect(node);
    };
    RaUiNestedTreeControl.prototype.clearSelection = function () {
        this.selectionModel.hasValue() && this.selectionModel.clear();
    };
    RaUiNestedTreeControl.prototype.isSelected = function (node) {
        return this.selectionModel.isSelected(node);
    };
    RaUiNestedTreeControl.prototype.setIsLoading = function (node, val) {
        val ? this.loadingModel.select(node) : this.loadingModel.deselect(node);
    };
    RaUiNestedTreeControl.prototype.isLoading = function (node) {
        return this.loadingModel.isSelected(node);
    };
    RaUiNestedTreeControl.prototype.setIsDirty = function (node, val) {
        val ? this.dirtyModel.select(node) : this.dirtyModel.deselect(node);
    };
    RaUiNestedTreeControl.prototype.isDirty = function (node) {
        return this.dirtyModel.isSelected(node);
    };
    RaUiNestedTreeControl.prototype.addChildren = function (node, children) {
        !node.children && (node.children = []);
        for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
            var child = children_1[_i];
            node.children.push(child);
        }
        this.refreshUi.emit();
    };
    RaUiNestedTreeControl.prototype.removeNode = function (node) {
        this.nodesRemoved.emit([node]);
    };
    RaUiNestedTreeControl.prototype.clearChildren = function (node) {
        if (!node.children || !node.children.length) {
            return;
        }
        this.nodesRemoved.emit(node.children);
    };
    RaUiNestedTreeControl.prototype.runForEachChild = function (nodes, callback) {
        _raWebTechUiToolkit_commonUtils.CollectionUtils.runForEachChild(nodes, callback);
    };
    return RaUiNestedTreeControl;
}(_angular_cdk_tree.NestedTreeControl));
var TreeConfig = (function () {
    function TreeConfig(options, logger) {
        if (options === void 0) { options = ({}); }
        this.logger = logger;
    }
    TreeConfig.prototype.onInvalidType = function (propName, expected, got) {
        this.logger && _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput('TreeConfig', propName, got, expected, this.logger);
    };
    TreeConfig = __decorate([
        _raWebTechUiToolkit_commonUtils.Immutable,
        _raWebTechUiToolkit_commonUtils.Config({
            shouldExpandOnCaret: {
                default: false,
                type: 'boolean'
            },
            isNodeIconEnabled: {
                default: false,
                type: 'boolean'
            },
            nodeExt: {
                default: undefined,
                type: isNodeExtOrUndefined,
                typeDisplayName: 'TreeNodeExt'
            },
            emptyTreeText: {
                default: DEFAULT_EMPTY_TREE_TEXT,
                type: 'string'
            }
        }),
        __metadata("design:paramtypes", [Object, Object])
    ], TreeConfig);
    return TreeConfig;
}());
var TreeComponent = (function () {
    function TreeComponent(treeService, changeRef, database, logger) {
        var _this = this;
        this.treeService = treeService;
        this.changeRef = changeRef;
        this.database = database;
        this.logger = logger;
        this._config = new TreeConfig({}, this.logger);
        this._tree = [];
        this._loadRoot = undefined;
        this.treeChange = new _angular_core.EventEmitter();
        this.treeNodeSelected = new _angular_core.EventEmitter();
        this.treeNodeExpanded = new _angular_core.EventEmitter();
        this.treeInitialized = new _angular_core.EventEmitter();
        this._modified = false;
        this._rootLoading = false;
        this.getChildren = function (node) {
            return (rxjs.of(node.children));
        };
        this.updateSubscription = this.treeService.update.subscribe(function () {
            _this.changeRef.markForCheck();
        });
        this._treeControl = new RaUiNestedTreeControl(this.getChildren);
        this.selectionSubscription = ((this._treeControl.selectionModel.onChange)).subscribe(function (value) {
            _this.emitForEachAddedAndRemovedNodes(value, _this.treeNodeSelected);
            _this.update();
        });
        this.expansionSubscription = ((this._treeControl.expansionModel.onChange)).subscribe(function (value) {
            _this.emitForEachAddedAndRemovedNodes(value, _this.treeNodeExpanded);
            _this.update();
        });
        this.dirtySubscription = ((this._treeControl.dirtyModel.onChange)).subscribe(function (value) {
            _this.treeService.update.next();
        });
        this.updateDataSourceSubscription = this._treeControl.updateDataSource.subscribe(function () {
            _this.database.notifyChanged();
        });
        this.refreshUiSubscription = this._treeControl.refreshUi.subscribe(function () {
            _this.refreshUi();
        });
        this.nodesRemovedSubscription = this._treeControl.nodesRemoved.subscribe(function (nodes) {
            _this.onNodesRemoved(nodes);
        });
        this._dataSource = new _angular_material.MatTreeNestedDataSource();
        database.dataChange.subscribe(function (data) { return _this._dataSource.data = data; });
    }
    Object.defineProperty(TreeComponent.prototype, "config", {
        get: function () {
            return this._config;
        },
        set: function (val) {
            if (!_raWebTechUiToolkit_commonUtils.TypeUtils.isObject(val)) {
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(TREE_COMPONENT, 'config', val, 'ITreeConfig', this.logger);
                val = {};
            }
            this._config = new TreeConfig(val, this.logger);
            this.onConfigChanged(this._config);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeComponent.prototype, "tree", {
        get: function () {
            return this._tree;
        },
        set: function (val) {
            if (!lodash.isArray(val)) {
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(TREE_COMPONENT, 'tree', val, 'TreeModel', this.logger);
                val = [];
            }
            this._tree = val;
            this.treeChange.emit(val);
            this.database.update(val);
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeComponent.prototype, "loadRoot", {
        get: function () {
            return this._loadRoot;
        },
        set: function (val) {
            var _this = this;
            if (!(val instanceof rxjs.Observable)) {
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(TREE_COMPONENT, 'loadRoot', typeof val, 'Observable<TreeModel>', this.logger);
                this._loadRoot = undefined;
                return;
            }
            this._loadRoot = val;
            this.loadRootSubscription && this.loadRootSubscription.unsubscribe();
            this._rootLoading = true;
            this.loadRootSubscription = this._loadRoot.subscribe(function (newTree) {
                _this._rootLoading = false;
                if (_this.tree !== newTree) {
                    _this.tree = newTree;
                }
                else {
                    _this.treeChange.emit(newTree);
                    _this.database.update(newTree);
                    _this.update();
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    TreeComponent.prototype.ngOnInit = function () {
        this.onConfigChanged(this.config);
    };
    TreeComponent.prototype.ngAfterViewInit = function () {
        this.treeInitialized.emit(this._treeControl);
    };
    TreeComponent.prototype.ngOnDestroy = function () {
        this.updateSubscription && this.updateSubscription.unsubscribe();
        this.expansionSubscription && this.expansionSubscription.unsubscribe();
        this.selectionSubscription && this.selectionSubscription.unsubscribe();
        this.refreshUiSubscription && this.refreshUiSubscription.unsubscribe();
        this.updateDataSourceSubscription && this.updateDataSourceSubscription.unsubscribe();
        this.nodesRemovedSubscription && this.nodesRemovedSubscription.unsubscribe();
        this.loadRootSubscription && this.loadRootSubscription.unsubscribe();
    };
    TreeComponent.prototype.update = function () {
        this.treeService.update.next();
    };
    TreeComponent.prototype._onTreeInitialized = function (control) {
        this.treeInitialized.emit(control);
    };
    TreeComponent.prototype._nodeHasChildren = function (index, node) {
        return TreeUtils.nodeHasChildren(node);
    };
    TreeComponent.prototype._onNodeUpdated = function () {
        this.treeService.update.next();
    };
    TreeComponent.prototype._onNodeClicked = function (node) {
        (!this.config.shouldExpandOnCaret) && this._expandAsyncNode(node);
        this._treeControl.select(node);
        this.treeService.update.next();
    };
    TreeComponent.prototype._nodeIsAsync = function (node) {
        return TreeUtils.nodeIsAsync(node);
    };
    TreeComponent.prototype._nodeIsLoading = function (node) {
        return this._treeControl.isLoading(node);
    };
    TreeComponent.prototype._expandAsyncNode = function (node) {
        var _this = this;
        if (!TreeUtils.nodeIsAsync(node)) {
            return;
        }
        this._treeControl.setIsLoading(node, true);
        ((node.loadChildren)).subscribe(function (value) {
            delete node.loadChildren;
            _this._treeControl.addChildren(node, value);
        }, function () {
            _this.logger.error("Tree: error appears in asynchronous node with label " + node.label);
        }, function () {
            _this._treeControl.setIsLoading(node, false);
            _this._treeControl.expand(node);
        });
    };
    TreeComponent.prototype.onConfigChanged = function (val) {
        this.update();
    };
    TreeComponent.prototype.refreshUi = function () {
        var _this = this;
        this._modified = true;
        this.treeService.update.next();
        setTimeout(function () {
            _this._modified = false;
            _this.treeService.update.next();
        }, 0);
    };
    TreeComponent.prototype.findAndRemoveNode = function (node, collection) {
        for (var i = 0; i < collection.length; i++) {
            var item = collection[i];
            if (item === node) {
                this._treeControl.isSelected(node) && this._treeControl.unselect(node);
                collection.splice(i, 1);
                return;
            }
            if (item.children !== undefined && item.children.length > 0) {
                this.findAndRemoveNode(node, (item.children));
            }
        }
    };
    TreeComponent.prototype.emitForEachAddedAndRemovedNodes = function (event, emitter) {
        for (var _i = 0, _a = event.removed; _i < _a.length; _i++) {
            var node = _a[_i];
            emitter.emit({
                node: node,
                value: false
            });
        }
        for (var _b = 0, _c = event.added; _b < _c.length; _b++) {
            var node = _c[_b];
            emitter.emit({
                node: node,
                value: true
            });
        }
    };
    TreeComponent.prototype.onNodesRemoved = function (nodes) {
        if (!nodes.length) {
            return;
        }
        var node;
        while (node = nodes.pop()) {
            this.findAndRemoveNode(node, this.database.data);
        }
        this.refreshUi();
    };
    TreeComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ra-ui-tree',
                    template: "<div *ngIf=\"!tree.length && !_rootLoading\"><ra-ui-static-text [value]=\"config.emptyTreeText\" [config]=\"{disableTruncate: true}\"></ra-ui-static-text></div><div *ngIf=\"_rootLoading\"><mat-progress-spinner color=\"primary\" mode=\"indeterminate\" diameter=\"14\"></mat-progress-spinner></div><mat-tree [dataSource]=\"_dataSource\" [treeControl]=\"_treeControl\" class=\"ra-ui-tree\" *ngIf=\"!_modified\"><mat-tree-node *matTreeNodeDef=\"let node\"><li class=\"mat-tree-node\" [class.ra-ui-tree-node-empty]=\"!_nodeIsAsync(node)\" [class.ra-ui-tree-node-selected]=\"_treeControl.isSelected(node)\"><div class=\"ra-ui-tree-node-overlay\" fxLayout=\"row\" fxLayoutAlign=\"none center\"><div *ngIf=\"!_nodeIsAsync(node)\" class=\"ra-no-icon\"></div><ra-ui-tree-node [_model]=\"node\" [_isIconEnabled]=\"config.isNodeIconEnabled\" [_nodeExt]=\"config.nodeExt\" [_isDirty]=\"_treeControl.isDirty(node)\" (_update)=\"_onNodeUpdated()\" (_clicked)=\"_onNodeClicked($event)\"><mat-progress-spinner *ngIf=\"_nodeIsLoading(node)\" color=\"primary\" mode=\"indeterminate\" diameter=\"14\"></mat-progress-spinner><div [class.ra-icon-caret-collapsed]=\"_nodeIsAsync(node) && !_nodeIsLoading(node)\" (click)=\"config.shouldExpandOnCaret && _expandAsyncNode(node)\"></div></ra-ui-tree-node></div></li></mat-tree-node><mat-nested-tree-node *matTreeNodeDef=\"let node; when: _nodeHasChildren\"><li><div class=\"mat-tree-node\" [class.ra-ui-tree-node-selected]=\"_treeControl.isSelected(node)\"><div class=\"ra-ui-tree-node-overlay\" fxLayout=\"row\" fxLayoutAlign=\"none center\"><ra-ui-tree-node *ngIf=\"config.shouldExpandOnCaret; else treeNodeToggle\" [_model]=\"node\" [_isIconEnabled]=\"config.isNodeIconEnabled\" [_nodeExt]=\"config.nodeExt\" [_isDirty]=\"_treeControl.isDirty(node)\" (_update)=\"_onNodeUpdated()\" (_clicked)=\"_onNodeClicked($event)\"><div matTreeNodeToggle [class.ra-icon-caret-expanded]=\"_treeControl.isExpanded(node)\" [class.ra-icon-caret-collapsed]=\"!_treeControl.isExpanded(node)\"></div></ra-ui-tree-node><ng-template #treeNodeToggle><ra-ui-tree-node matTreeNodeToggle [_model]=\"node\" [_isIconEnabled]=\"config.isNodeIconEnabled\" [_nodeExt]=\"config.nodeExt\" [_isDirty]=\"_treeControl.isDirty(node)\" (_update)=\"_onNodeUpdated()\" (_clicked)=\"_onNodeClicked($event)\"><div matTreeNodeToggle [class.ra-icon-caret-expanded]=\"_treeControl.isExpanded(node)\" [class.ra-icon-caret-collapsed]=\"!_treeControl.isExpanded(node)\"></div></ra-ui-tree-node></ng-template></div></div><ul class=\"ra-ui-tree-nested\" *ngIf=\"_treeControl.isExpanded(node)\"><ng-container matTreeNodeOutlet></ng-container></ul></li></mat-nested-tree-node></mat-tree>",
                    providers: [TreeService, TreeDatabase],
                    changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    encapsulation: _angular_core.ViewEncapsulation.None
                },] },
    ];
    TreeComponent.ctorParameters = function () { return [
        { type: TreeService, },
        { type: _angular_core.ChangeDetectorRef, },
        { type: TreeDatabase, },
        { type: undefined, decorators: [{ type: _angular_core.Inject, args: [_raWebTechUiToolkit_commonUtils.LOGGER,] },] },
    ]; };
    TreeComponent.propDecorators = {
        "config": [{ type: _angular_core.Input },],
        "tree": [{ type: _angular_core.Input },],
        "loadRoot": [{ type: _angular_core.Input },],
        "treeChange": [{ type: _angular_core.Output },],
        "treeNodeSelected": [{ type: _angular_core.Output },],
        "treeNodeExpanded": [{ type: _angular_core.Output },],
        "treeInitialized": [{ type: _angular_core.Output },],
    };
    return TreeComponent;
}());

var DEFAULT_EMPTY_CATEGORY_TREE_TEXT = 'RA_UI_NAVIGATION.TREE.NO_ITEMS';
var CATEGORY_TREE_COMPONENT = 'CategoryTreeComponent';
var CategoryTreeConfig = (function () {
    function CategoryTreeConfig(options, logger) {
        if (options === void 0) { options = ({}); }
        this.logger = logger;
    }
    CategoryTreeConfig.prototype.onInvalidType = function (propName, expected, got) {
        this.logger && _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput('CategoryTreeConfig', propName, got, expected, this.logger);
    };
    CategoryTreeConfig = __decorate([
        _raWebTechUiToolkit_commonUtils.Immutable,
        _raWebTechUiToolkit_commonUtils.Config({
            treeConfig: {
                default: {},
                type: 'object',
                typeDisplayName: 'ITreeConfig'
            },
            selectFirstItem: {
                default: false,
                type: 'boolean'
            },
            emptyTreeText: {
                default: DEFAULT_EMPTY_CATEGORY_TREE_TEXT,
                type: 'string'
            }
        }),
        __metadata("design:paramtypes", [Object, Object])
    ], CategoryTreeConfig);
    return CategoryTreeConfig;
}());
var CategoryTreeComponent = (function () {
    function CategoryTreeComponent(changeRef, logger) {
        this.changeRef = changeRef;
        this.logger = logger;
        this._config = new CategoryTreeConfig({}, this.logger);
        this._sections = Array();
        this.treeNodeSelected = new _angular_core.EventEmitter();
        this.treeInitialized = new _angular_core.EventEmitter();
        this._CursorStyle = _raWebTechUiToolkit_commonUtils.CursorStyle;
        this.treeControls = Array();
    }
    Object.defineProperty(CategoryTreeComponent.prototype, "config", {
        get: function () {
            return this._config;
        },
        set: function (val) {
            if (!_raWebTechUiToolkit_commonUtils.TypeUtils.isObject(val)) {
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(CATEGORY_TREE_COMPONENT, 'config', val, 'ICategoryTreeConfig', this.logger);
                val = {};
            }
            this._config = new CategoryTreeConfig(val, this.logger);
            this.onConfigChanged(this._config);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoryTreeComponent.prototype, "sections", {
        get: function () {
            return this._sections;
        },
        set: function (val) {
            if (!lodash.isArray(val)) {
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(CATEGORY_TREE_COMPONENT, 'sections', val, 'ICategoryTreeSection[]', this.logger);
                val = [];
            }
            this._sections = val;
            this.onSectionsChanged();
        },
        enumerable: true,
        configurable: true
    });
    CategoryTreeComponent.prototype.ngOnInit = function () {
        this.onConfigChanged(this.config);
    };
    CategoryTreeComponent.prototype.update = function () {
        this._children.forEach(function (tree) {
            tree.update();
        });
    };
    CategoryTreeComponent.prototype.clearSelection = function () {
        for (var _i = 0, _a = this.treeControls; _i < _a.length; _i++) {
            var treeControl = _a[_i];
            treeControl.clearSelection();
        }
    };
    CategoryTreeComponent.prototype._onTreeNodeSelected = function (event, index) {
        if (event.value) {
            for (var i = 0; i < this.treeControls.length; i++) {
                var control = this.treeControls[i];
                (i !== index) && control.clearSelection();
            }
        }
        this.treeNodeSelected.emit(event);
    };
    CategoryTreeComponent.prototype._onTreeInitialized = function (control) {
        this.treeControls.push(control);
        (this.sections.length > 0 && this.sections.length === this.treeControls.length) &&
            this.treeInitialized.emit(this.treeControls);
    };
    CategoryTreeComponent.prototype.onSectionsChanged = function () {
        var _this = this;
        this.treeControls = [];
        if (this.config.selectFirstItem) {
            setTimeout(function () {
                var found = false;
                _this._children.forEach(function (tree, index) {
                    if (!found) {
                        tree.tree.length && _this.treeControls[index].select(tree.tree[0]);
                        found = true;
                    }
                });
            });
        }
        this.changeRef.markForCheck();
    };
    CategoryTreeComponent.prototype.onConfigChanged = function (val) {
        this._treeConfig = val.treeConfig || {};
    };
    CategoryTreeComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ra-ui-category-tree',
                    template: "<div *ngIf=\"!sections.length\"><ra-ui-static-text [value]=\"config.emptyTreeText\"></ra-ui-static-text></div><div class=\"category-tree-root\" fxFlexFill fxLayout=\"column\"><div class=\"tree-section\" *ngFor=\"let section of sections; let i = index\"><div class=\"tree-section-header-sticky\"><ra-ui-static-text [value]=\"section.label\" class=\"tree-section-header\" [config]=\"{disableAcceleratorKey: true, cursorStyle: _CursorStyle.Default}\"></ra-ui-static-text></div><ra-ui-tree [(tree)]=\"section.data\" [config]=\"_treeConfig\" (treeNodeSelected)=\"_onTreeNodeSelected($event, i)\" (treeInitialized)=\"_onTreeInitialized($event)\"></ra-ui-tree></div></div>",
                    styles: ["ra-ui-category-tree .tree-section-header{margin-left:36px;text-transform:uppercase;padding-bottom:10px;padding-top:10px}ra-ui-category-tree .tree-section-header-sticky{position:sticky;top:0;z-index:2;display:flex;flex-direction:column;justify-content:center}"],
                    changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    encapsulation: _angular_core.ViewEncapsulation.None
                },] },
    ];
    CategoryTreeComponent.ctorParameters = function () { return [
        { type: _angular_core.ChangeDetectorRef, },
        { type: undefined, decorators: [{ type: _angular_core.Inject, args: [_raWebTechUiToolkit_commonUtils.LOGGER,] },] },
    ]; };
    CategoryTreeComponent.propDecorators = {
        "config": [{ type: _angular_core.Input },],
        "sections": [{ type: _angular_core.Input },],
        "treeNodeSelected": [{ type: _angular_core.Output },],
        "treeInitialized": [{ type: _angular_core.Output },],
        "_children": [{ type: _angular_core.ViewChildren, args: [TreeComponent,] },],
    };
    return CategoryTreeComponent;
}());

var TreeNodeComponent = (function () {
    function TreeNodeComponent(treeService, changeRef, el) {
        var _this = this;
        this.treeService = treeService;
        this.changeRef = changeRef;
        this.el = el;
        this._isIconEnabled = false;
        this.__isDirty = false;
        this._clicked = new _angular_core.EventEmitter();
        this._update = new _angular_core.EventEmitter();
        this._width = '';
        this._CursorStyle = _raWebTechUiToolkit_commonUtils.CursorStyle;
        this.indent = 1;
        this.updateSubscription = this.treeService.update.subscribe(function () {
            _this.changeRef.markForCheck();
        });
    }
    Object.defineProperty(TreeNodeComponent.prototype, "_isDirty", {
        get: function () {
            return this.__isDirty;
        },
        set: function (val) {
            this.__isDirty = val;
            this.updateWidth();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeNodeComponent.prototype, "_nodeExt", {
        get: function () {
            return this.__nodeExt;
        },
        set: function (val) {
            this.__nodeExt = val;
            this.updateWidth();
        },
        enumerable: true,
        configurable: true
    });
    TreeNodeComponent.prototype.ngOnInit = function () {
        var parents = _raWebTechUiToolkit_commonUtils.DomUtils.getParentsOfClass(this.el.nativeElement, 'ra-ui-tree-nested', 'ra-ui-tree');
        this.indent = parents.length + 1;
    };
    TreeNodeComponent.prototype.ngOnDestroy = function () {
        this.updateSubscription && this.updateSubscription.unsubscribe();
    };
    TreeNodeComponent.prototype._onNodeClick = function () {
        this._clicked.emit(this._model);
    };
    TreeNodeComponent.prototype._getIconClass = function (icon) {
        var result = {};
        result[icon.iconClass] = true;
        return result;
    };
    TreeNodeComponent.prototype._showNodeIcon = function (icon) {
        return typeof icon.condition === 'function' ? icon.condition(this._model) : false;
    };
    TreeNodeComponent.prototype._getStyle = function () {
        return {
            paddingLeft: this.indent * 18 + 'px'
        };
    };
    TreeNodeComponent.prototype.updateWidth = function () {
        var iconsShown = 0;
        if (this._nodeExt) {
            for (var _i = 0, _a = this._nodeExt; _i < _a.length; _i++) {
                var item = _a[_i];
                this._showNodeIcon(item) && iconsShown++;
            }
        }
        var size = this._isDirty ? 10 : 0;
        this._width = 'calc(100% - ' + (size + iconsShown * 22) + 'px)';
    };
    TreeNodeComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ra-ui-tree-node',
                    template: "<div class=\"ra-ui-tree-node\" fxLayout=\"row\" fxLayoutAlign=\"none center\" (click)=\"_onNodeClick()\" [ngStyle]=\"_getStyle()\"><ng-content></ng-content><div class=\"icon-container\" *ngIf=\"_isIconEnabled\" fxLayout=\"row\" fxLayoutAlign=\"none center\"><ng-template ngFor let-ext=\"$implicit\" [ngForOf]=\"_nodeExt\"><div [ngClass]=\"_getIconClass(ext)\" *ngIf=\"_showNodeIcon(ext)\"></div></ng-template></div><ra-ui-static-text class=\"ra-ui-tree-node-label\" [value]=\"_model.label\" [config]=\"{disableAcceleratorKey: true, cursorStyle: _CursorStyle.Pointer}\" [style.maxWidth]=\"_width\"></ra-ui-static-text><ra-ui-dirty-flag *ngIf=\"_isDirty\"></ra-ui-dirty-flag></div>",
                    styles: [""],
                    changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    encapsulation: _angular_core.ViewEncapsulation.None
                },] },
    ];
    TreeNodeComponent.ctorParameters = function () { return [
        { type: TreeService, },
        { type: _angular_core.ChangeDetectorRef, },
        { type: _angular_core.ElementRef, },
    ]; };
    TreeNodeComponent.propDecorators = {
        "_model": [{ type: _angular_core.Input },],
        "_isIconEnabled": [{ type: _angular_core.Input },],
        "_isDirty": [{ type: _angular_core.Input },],
        "_nodeExt": [{ type: _angular_core.Input },],
        "_clicked": [{ type: _angular_core.Output },],
        "_update": [{ type: _angular_core.Output },],
    };
    return TreeNodeComponent;
}());

var RaUiTreeModule = (function () {
    function RaUiTreeModule() {
    }
    RaUiTreeModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    imports: [
                        _angular_common.CommonModule,
                        _angular_material.MatTreeModule,
                        _angular_material.MatIconModule,
                        _angular_flexLayout.FlexLayoutModule,
                        _angular_material.MatProgressSpinnerModule,
                        _raWebTechUiToolkit_commonUtils.RaUiDirtyFlagModule,
                        _raWebTechUiToolkit_commonUtils.RaUiStaticTextModule
                    ],
                    declarations: [
                        TreeNodeComponent,
                        TreeComponent
                    ],
                    exports: [
                        TreeComponent
                    ]
                },] },
    ];
    return RaUiTreeModule;
}());

var RaUiCategoryTreeModule = (function () {
    function RaUiCategoryTreeModule() {
    }
    RaUiCategoryTreeModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    declarations: [
                        CategoryTreeComponent
                    ],
                    imports: [
                        _angular_common.CommonModule,
                        _angular_flexLayout.FlexLayoutModule,
                        _raWebTechUiToolkit_commonUtils.RaUiStaticTextModule,
                        RaUiTreeModule
                    ],
                    exports: [
                        CategoryTreeComponent
                    ]
                },] },
    ];
    return RaUiCategoryTreeModule;
}());

var ɵ0 = {
    default: '',
    type: _raWebTechUiToolkit_commonUtils.TypeUtils.isStringOrNumber,
    typeDisplayName: 'string|number'
};
var BarButtonConfig = (function () {
    function BarButtonConfig(options, logger, configName) {
        if (options === void 0) { options = ({}); }
        if (configName === void 0) { configName = 'BarButtonConfig'; }
        this.logger = logger;
        this.configName = configName;
        this.data = options.data || undefined;
    }
    BarButtonConfig.prototype.onInvalidType = function (propName, expected, got) {
        this.logger && _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(this.configName, propName, got, expected, this.logger);
    };
    BarButtonConfig = __decorate([
        _raWebTechUiToolkit_commonUtils.Config({
            disabled: {
                default: false,
                type: 'boolean'
            },
            icon: {
                default: '',
                type: 'string'
            },
            id: ɵ0,
            label: {
                default: '',
                type: 'string'
            },
            tooltipText: {
                default: '',
                type: 'string'
            }
        }),
        __metadata("design:paramtypes", [Object, Object, String])
    ], BarButtonConfig);
    return BarButtonConfig;
}());
var BarButtonComponent = (function () {
    function BarButtonComponent() {
        this._disableAcceleratorKey = false;
        this._disableTooltip = false;
        this.onClick = new _angular_core.EventEmitter();
        this.pressStart = new _angular_core.EventEmitter();
        this.pressEnd = new _angular_core.EventEmitter();
    }
    Object.defineProperty(BarButtonComponent.prototype, "disableAcceleratorKey", {
        get: function () {
            return this._disableAcceleratorKey;
        },
        set: function (disableAcceleratorKey) {
            this._disableAcceleratorKey = disableAcceleratorKey;
            this._updateButtonConfig();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BarButtonComponent.prototype, "disableTooltip", {
        get: function () {
            return this._disableTooltip;
        },
        set: function (disableTooltip) {
            this._disableTooltip = disableTooltip;
            this._updateButtonConfig();
        },
        enumerable: true,
        configurable: true
    });
    BarButtonComponent.propDecorators = {
        "disableAcceleratorKey": [{ type: _angular_core.Input },],
        "disableTooltip": [{ type: _angular_core.Input },],
        "onClick": [{ type: _angular_core.Output },],
        "pressStart": [{ type: _angular_core.Output },],
        "pressEnd": [{ type: _angular_core.Output },],
    };
    return BarButtonComponent;
}());

var NAV_BAR_HEIGHT = 40;
var NavBarLogoComponent = (function () {
    function NavBarLogoComponent() {
        this.onClick = new _angular_core.EventEmitter();
        this.onWidthLoaded = new _angular_core.EventEmitter();
    }
    NavBarLogoComponent.prototype._clicked = function () {
        this.onClick.emit();
    };
    NavBarLogoComponent.prototype._loaded = function (ev) {
        var naturalWidth = ev.width || 0;
        var naturalHeight = ev.height || 0;
        this._width = naturalHeight > NAV_BAR_HEIGHT ? naturalWidth * NAV_BAR_HEIGHT / naturalHeight : naturalWidth;
        this.onWidthLoaded.emit(this._width);
    };
    NavBarLogoComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ra-ui-nav-bar-logo',
                    template: "<div class=\"nav-bar-main\" [style.width.px]=\"_width\"><button mat-button (click)=\"_clicked()\"><ra-ui-image [value]=\"imageSourcePath\" class=\"nav-bar-logo\" (loaded)=\"_loaded($event)\" #imageRef></ra-ui-image></button></div>",
                    styles: ["ra-ui-nav-bar-logo button{width:100%;height:40px;margin:0;padding-right:4px;padding-left:4px}"],
                    encapsulation: _angular_core.ViewEncapsulation.None
                },] },
    ];
    NavBarLogoComponent.propDecorators = {
        "_width": [{ type: _angular_core.Input },],
        "imageSourcePath": [{ type: _angular_core.Input },],
        "onClick": [{ type: _angular_core.Output },],
        "onWidthLoaded": [{ type: _angular_core.Output },],
        "imageRef": [{ type: _angular_core.ViewChild, args: ['imageRef',] },],
    };
    return NavBarLogoComponent;
}());

var NavBarButtonConfig = (function (_super) {
    __extends(NavBarButtonConfig, _super);
    function NavBarButtonConfig(options, logger) {
        if (options === void 0) { options = ({}); }
        var _this = _super.call(this, (options), logger, 'NavBarButtonConfig') || this;
        _this.logger = logger;
        return _this;
    }
    NavBarButtonConfig.prototype.onInvalidType = function (propName, expected, got) {
        this.logger && _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput('NavBarButtonConfig', propName, got, expected, this.logger);
    };
    NavBarButtonConfig = __decorate([
        _raWebTechUiToolkit_commonUtils.Config({
            allowMultiline: {
                default: false,
                type: 'boolean'
            }
        }),
        __metadata("design:paramtypes", [Object, Object])
    ], NavBarButtonConfig);
    return NavBarButtonConfig;
}(BarButtonConfig));

var NavBarConfig = (function () {
    function NavBarConfig(options, logger) {
        if (options === void 0) { options = ({}); }
        this.logger = logger;
    }
    NavBarConfig.prototype.onInvalidType = function (propName, expected, got) {
        this.logger && _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput('NavBarConfig', propName, got, expected, this.logger);
    };
    NavBarConfig = __decorate([
        _raWebTechUiToolkit_commonUtils.Immutable,
        _raWebTechUiToolkit_commonUtils.Config({
            disableTooltips: {
                default: false,
                type: 'boolean'
            },
            logo: {
                default: '',
                type: 'string'
            }
        }),
        __metadata("design:paramtypes", [Object, Object])
    ], NavBarConfig);
    return NavBarConfig;
}());
var NavBarButtonType = {
    Action: 0,
    Tab: 1,
    TextIcon: 2,
};
NavBarButtonType[NavBarButtonType.Action] = "Action";
NavBarButtonType[NavBarButtonType.Tab] = "Tab";
NavBarButtonType[NavBarButtonType.TextIcon] = "TextIcon";
var TAB_WIDTH = 120;
var ICON_WIDTH = 40;
var SMALL_WIDTH = 3 * TAB_WIDTH;
var MAT_BUTTON_MIN_WIDTH = 88;
var NavBarComponent = (function () {
    function NavBarComponent(changeRef, logger) {
        this.changeRef = changeRef;
        this.logger = logger;
        this._tabs = [];
        this._actions = [];
        this._showBackButton = false;
        this._config = new NavBarConfig(undefined, this.logger);
        this.tabOnClick = new _angular_core.EventEmitter();
        this.actionOnClick = new _angular_core.EventEmitter();
        this.backButtonOnClick = new _angular_core.EventEmitter();
        this.logoOnClick = new _angular_core.EventEmitter();
        this.selectedTab = new NavBarButtonConfig();
        this._componentName = 'NavBarComponent';
        this._bottomRowLength = 0;
        this._fullBottomRowLength = 0;
        this._lastNavBarLength = 0;
        this._upperRowLength = 0;
        this._fullUpperRowLength = 0;
        this._minUpperRowLength = 0;
        this.imageShrinked = false;
        this.firstImage = true;
        this._tabsToDisplay = [];
        this._tabsInSideNav = [];
        this._actionsToDisplay = [];
        this._actionsInMoreMenu = [];
        this._imageWidth = 0;
        this._showMoreButton = false;
        this._showMoreIcon = false;
        this._mobileMode = false;
        this._disableAccelerators = true;
        this._actionButton = NavBarButtonType.Action;
        this._textIconButton = NavBarButtonType.TextIcon;
        this._tabButton = NavBarButtonType.Tab;
        this._backButtonConfig = new NavBarButtonConfig({
            icon: 'back',
            id: 'ra-ui-nav-bar-back-button',
            tooltipText: 'RA_UI_NAVIGATION.NAV_BAR.BACK_BUTTON'
        });
        this._moreIconConfig = new NavBarButtonConfig({
            icon: 'more',
            id: 'ra-ui-nav-bar-more-icon',
            tooltipText: 'RA_UI_NAVIGATION.NAV_BAR.MORE_BUTTON'
        });
        this._moreButtonConfig = new BarButtonConfig({
            icon: 'spinner-down',
            id: 'more-button',
            label: 'More',
            tooltipText: 'RA_UI_NAVIGATION.NAV_BAR.MORE_BUTTON'
        });
    }
    Object.defineProperty(NavBarComponent.prototype, "tabs", {
        get: function () {
            return this._tabs;
        },
        set: function (newConfigs) {
            if (!(newConfigs instanceof Array)) {
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(this._componentName, 'tabs', newConfigs, 'INavBarButtonConfig[]', this.logger);
                newConfigs = [];
            }
            this._tabs = newConfigs;
            this.initializeTabs();
            this.updateNavBar(this._lastNavBarLength);
            Object.freeze(this._tabs);
            this.changeRef.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavBarComponent.prototype, "actions", {
        get: function () {
            return this._actions;
        },
        set: function (newConfigs) {
            if (!(newConfigs instanceof Array)) {
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(this._componentName, 'actions', newConfigs, 'INavBarButtonConfig[]', this.logger);
                newConfigs = [];
            }
            this._actions = newConfigs;
            this.initializeActions();
            this.updateNavBar(this._lastNavBarLength);
            Object.freeze(this._actions);
            this.changeRef.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavBarComponent.prototype, "showBackButton", {
        get: function () {
            return this._showBackButton;
        },
        set: function (val) {
            if (!lodash.isBoolean(val)) {
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(this._componentName, 'showBackButton', val, 'boolean', this.logger);
                val = false;
            }
            this._showBackButton = val;
            this.updateNavBar(this._lastNavBarLength);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavBarComponent.prototype, "config", {
        get: function () {
            return this._config;
        },
        set: function (val) {
            if (!_raWebTechUiToolkit_commonUtils.TypeUtils.isObject(val)) {
                this._config = new NavBarConfig(undefined, this.logger);
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(this._componentName, 'config', val, 'INavBarConfig', this.logger);
            }
            else {
                this._config = new NavBarConfig(val, this.logger);
            }
        },
        enumerable: true,
        configurable: true
    });
    NavBarComponent.prototype.selectTab = function (id, shouldClick) {
        if (shouldClick === void 0) { shouldClick = false; }
        var index = this.checkIfIdExists(id, this._tabs);
        if (index === -1) {
            return;
        }
        if (shouldClick) {
            this._clicked(this._tabs[index], 'tab');
        }
        else {
            this.selectedTab = this._tabs[index];
        }
        this.changeRef.markForCheck();
    };
    NavBarComponent.prototype.deselectTab = function () {
        this.selectedTab = new NavBarButtonConfig();
        this.changeRef.markForCheck();
    };
    NavBarComponent.prototype.clickBackButton = function () {
        this._showBackButton && this.backButtonOnClick.emit();
    };
    NavBarComponent.prototype.clickAction = function (id) {
        var index = this.checkIfIdExists(id, this._actions);
        if (index !== -1) {
            this._clicked(this._actions[index], 'action');
        }
    };
    NavBarComponent.prototype.clickLogo = function () {
        !lodash.isNil(this._config.logo) && this.logoOnClick.emit();
    };
    NavBarComponent.prototype._onSizeChange = function (event) {
        var width = event.width;
        if (this._lastNavBarLength === 0) {
            this._lastNavBarLength = this._fullBottomRowLength > this._fullUpperRowLength ?
                this._fullBottomRowLength : this._fullUpperRowLength;
        }
        this.resize(width);
    };
    NavBarComponent.prototype.updateNavBar = function (width) {
        this.updateProperties();
        this.resize(width);
    };
    NavBarComponent.prototype.resize = function (width) {
        if ((width > this._fullBottomRowLength && !this._showMoreButton && this._fullBottomRowLength > this._fullUpperRowLength)
            || (width > this._fullUpperRowLength && !this._showMoreIcon && this._fullBottomRowLength < this._fullUpperRowLength)) {
            this._lastNavBarLength = width;
            return;
        }
        if (width < SMALL_WIDTH) {
            width = 360;
        }
        this.updateImageWidth(width);
        this.checkTabs(width);
        this.checkActions(width);
        this._lastNavBarLength = width;
    };
    NavBarComponent.prototype.checkTabs = function (width) {
        if (width < this._bottomRowLength && width <= this._lastNavBarLength) {
            this.removeTabs(width);
        }
        else if (width > this._bottomRowLength && width > this._lastNavBarLength) {
            this.addTabs(width);
        }
    };
    NavBarComponent.prototype.checkActions = function (width) {
        if (width < this._upperRowLength && width <= this._lastNavBarLength) {
            this.removeActions(width);
        }
        else if (width > this._upperRowLength && width > this._lastNavBarLength) {
            this.addActions(width);
        }
    };
    NavBarComponent.prototype.removeTabs = function (width) {
        while (this._bottomRowLength > width) {
            this.shiftTabsToSideNav();
            this._bottomRowLength = (this._tabsToDisplay.length + 1) * TAB_WIDTH;
        }
        this._showMoreButton = true;
    };
    NavBarComponent.prototype.removeActions = function (width) {
        this._showMoreIcon = true;
        while (this._upperRowLength > width && this._actionsToDisplay.length > 0) {
            this.shiftActionsToSideMenu();
            this._upperRowLength = this.getUpperRowLength();
            this._minUpperRowLength = this.getMinUpperRowLength();
            this.updateImageWidth(width);
        }
    };
    NavBarComponent.prototype.addActions = function (width) {
        while ((this._upperRowLength + ICON_WIDTH) <= width && this._actionsInMoreMenu.length !== 0) {
            this.shiftActionsFromSideMenu();
            this._upperRowLength = this.getUpperRowLength();
        }
    };
    NavBarComponent.prototype.addTabs = function (width) {
        while ((this._bottomRowLength + TAB_WIDTH) <= width && this._tabsInSideNav.length !== 0) {
            this.shiftTabsFromSideNav();
            var add = this._showMoreButton ? 1 : 0;
            this._bottomRowLength = (this._tabsToDisplay.length + add) * TAB_WIDTH;
        }
    };
    NavBarComponent.prototype.shiftTabsToSideNav = function () {
        this._tabsInSideNav.push(this._tabsToDisplay[this._tabsToDisplay.length - 1]);
        this._tabsToDisplay.pop();
        (this._tabsInSideNav.length === 1) && this.shiftTabsToSideNav();
    };
    NavBarComponent.prototype.shiftActionsToSideMenu = function () {
        this._actionsInMoreMenu.push(this._actionsToDisplay[this._actionsToDisplay.length - 1]);
        this._actionsToDisplay.pop();
        (this._actionsInMoreMenu.length === 1) && this.shiftActionsToSideMenu();
    };
    NavBarComponent.prototype.shiftActionsFromSideMenu = function () {
        this._actionsToDisplay.push(this._actionsInMoreMenu[this._actionsInMoreMenu.length - 1]);
        this._actionsInMoreMenu.pop();
        if (this._actionsInMoreMenu.length === 1) {
            this.shiftActionsFromSideMenu();
            this._showMoreIcon = false;
        }
    };
    NavBarComponent.prototype.shiftTabsFromSideNav = function () {
        this._tabsToDisplay.push(this._tabsInSideNav[this._tabsInSideNav.length - 1]);
        this._tabsInSideNav.pop();
        if (this._tabsInSideNav.length === 1) {
            this.shiftTabsFromSideNav();
            this._showMoreButton = false;
        }
    };
    NavBarComponent.prototype.updateProperties = function () {
        this.addDefaultIDs(this._tabs, 'tab');
        this.addDefaultIDs(this._actions, 'action');
        this.checkIDs(this._tabs);
        this.checkIDs(this._actions);
        this._minUpperRowLength = this.getMinUpperRowLength();
        this._bottomRowLength = this._tabsToDisplay.length * TAB_WIDTH;
        this._fullBottomRowLength = this._tabs.length * TAB_WIDTH;
        this._upperRowLength = this.getUpperRowLength();
        this._fullUpperRowLength = this.getUpperRowLength();
    };
    NavBarComponent.prototype.updateImageWidth = function (width) {
        var resizeLogoBack = (((this._showBackButton ? ICON_WIDTH : 0) + (this.originalImageWidth || 0)
            + (this._showMoreIcon ? ICON_WIDTH : 0)) <= width) && this.imageShrinked;
        if (width < this._minUpperRowLength) {
            this._imageWidth = width - (this._showMoreIcon ? ICON_WIDTH : 0) - (this._showBackButton ? ICON_WIDTH : 0);
            this.updateProperties();
            this.imageShrinked = true;
        }
        else if (resizeLogoBack) {
            this._imageWidth = this.originalImageWidth;
            this.imageShrinked = false;
        }
    };
    NavBarComponent.prototype.getUpperRowLength = function () {
        var image = this._imageWidth && this._imageWidth < MAT_BUTTON_MIN_WIDTH ? MAT_BUTTON_MIN_WIDTH : this._imageWidth;
        return (this._actionsToDisplay.length) * ICON_WIDTH + (this._showMoreIcon ? ICON_WIDTH : 0) +
            (image || 0) + (this._showBackButton ? ICON_WIDTH : 0);
    };
    NavBarComponent.prototype.getMinUpperRowLength = function () {
        var image = this._imageWidth && this._imageWidth < MAT_BUTTON_MIN_WIDTH ? MAT_BUTTON_MIN_WIDTH : this._imageWidth;
        return (this._showMoreIcon ? ICON_WIDTH : 0) + (image || 0) + (this._showBackButton ? ICON_WIDTH : 0);
    };
    NavBarComponent.prototype._getWidth = function () {
        this._imageWidth = this.logoRef._width;
        if (this.firstImage) {
            this.originalImageWidth = this._imageWidth;
            this.firstImage = false;
        }
        this.updateNavBar(this._lastNavBarLength);
    };
    NavBarComponent.prototype.checkIDs = function (configs) {
        if (!lodash.isArray(configs)) {
            return;
        }
        configs.some(function (element) {
            var identifier = element.id;
            var result = configs.filter(function (el) {
                return el.id === identifier;
            });
            if (result.length > 1) {
                console.warn('There are duplicated IDs in the Nav Bar, the component might not work correctly!');
                return true;
            }
            else {
                return false;
            }
        });
    };
    NavBarComponent.prototype.addDefaultIDs = function (configs, buttonType) {
        var _this = this;
        if (!lodash.isArray(configs)) {
            return;
        }
        configs.forEach(function (config, index) {
            if (lodash.isEmpty(config.id)) {
                config.id = 'ra-ui-nav-bar-' + buttonType + '-' + index.toString();
                switch (buttonType) {
                    case 'tab': {
                        _this._tabsToDisplay[index] = config;
                        break;
                    }
                    case 'action': {
                        _this._actionsToDisplay[index] = config;
                        break;
                    }
                    default: {
                        break;
                    }
                }
            }
        });
    };
    NavBarComponent.prototype._clicked = function (event, button) {
        if (this.selectedTab === event) {
            return;
        }
        switch (button) {
            case 'tab': {
                this.selectedTab = event;
                this.tabOnClick.emit(event);
                break;
            }
            case 'action': {
                this.actionOnClick.emit(event);
                break;
            }
            default: {
                break;
            }
        }
        if (this.sideBar.opened) {
            this.sideBar.close();
        }
    };
    NavBarComponent.prototype.initializeTabs = function () {
        this._tabsToDisplay = lodash.cloneDeep(this._tabs);
        this._tabsInSideNav = [];
        this._showMoreButton = false;
    };
    NavBarComponent.prototype.initializeActions = function () {
        this._actionsToDisplay = lodash.cloneDeep(this._actions);
        this._actionsInMoreMenu = [];
        this._showMoreIcon = false;
    };
    NavBarComponent.prototype._getTabStyle = function (tab) {
        return !lodash.isEmpty(tab.icon) ? this._textIconButton : this._tabButton;
    };
    NavBarComponent.prototype._containsIcon = function (button) {
        return !lodash.isEmpty(button.icon);
    };
    NavBarComponent.prototype.checkIfIdExists = function (id, buttonArray) {
        return lodash.findIndex(buttonArray, function (button) {
            return button.id === id;
        });
    };
    NavBarComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ra-ui-nav-bar',
                    template: "<div fxLayout=\"column\" fxFlexFill (raUiOnSizeChange)=\"_onSizeChange($event)\" class=\"nav-bar-wrapper\"><mat-toolbar class=\"nav-bar-toolbar\"><mat-toolbar-row [class.nav-bar-small]=\"_mobileMode\" class=\"nav-bar-top-row\"><div class=\"back-button-container\" *ngIf=\"_showBackButton\"><ra-ui-nav-bar-button [config]=\"_backButtonConfig\" [disableTooltip]=\"_config.disableTooltips\" [nbButtonType]=\"_actionButton\" (onClick)=\"clickBackButton()\"></ra-ui-nav-bar-button></div><div class=\"logo-button-container\" #logoContainer [ngStyle]=\"{width: _imageWidth + 'px'}\"><ra-ui-nav-bar-logo [imageSourcePath]=\"_config.logo\" (onClick)=\"clickLogo()\" [_width]=\"_imageWidth\" (onWidthLoaded)=\"_getWidth()\" #logoRef></ra-ui-nav-bar-logo></div><span class=\"log-row-spacer\"></span><div *ngFor=\"let icon of (_actionsToDisplay); let i = index;\" class=\"action-button-container\"><ra-ui-nav-bar-button [config]=\"icon\" [disableTooltip]=\"_config.disableTooltips\" [nbButtonType]=\"_actionButton\" (onClick)=\"_clicked($event, 'action')\"></ra-ui-nav-bar-button></div><div class=\"more-actions-button-container\" *ngIf=\"_showMoreIcon\"><ra-ui-nav-bar-button [config]=\"_moreIconConfig\" [disableTooltip]=\"_config.disableTooltips\" [matMenuTriggerFor]=\"menu\" (onClick)=\"navSmallMenu.close()\" [nbButtonType]=\"_actionButton\"></ra-ui-nav-bar-button></div><mat-menu #menu=\"matMenu\" class=\"nav-bar-more-menu\"><div *ngFor=\"let action of (_actionsInMoreMenu); let i = index;\" class=\"action-button-in-menu\"><ra-ui-nav-bar-button [config]=\"action\" class=\"icon-button-in-menu\" [class.icon-button-in-menu-with-icon]=\"_containsIcon(action)\" [disableTooltip]=\"_config.disableTooltips\" [disableAcceleratorKey]=\"_disableAccelerators\" [nbButtonType]=\"_textIconButton\" [shouldFillParent]=\"true\" [alignText]=\"'Left'\" (onClick)=\"_clicked($event, 'action')\"></ra-ui-nav-bar-button></div></mat-menu></mat-toolbar-row><mat-toolbar-row [class.nav-bar-small]=\"_mobileMode\" class=\"nav-bar-bottom-row\"><div *ngFor=\"let tab of (_tabsToDisplay); let i = index;\" class=\"tab-button-container\"><ra-ui-nav-bar-button [config]=\"tab\" [class.multi-line-tab]=\"tab.allowMultiline\" [class.active-tab]=\"tab.id === selectedTab.id\" [disableTooltip]=\"_config.disableTooltips\" [disableAcceleratorKey]=\"_disableAccelerators\" [nbButtonType]=\"_getTabStyle(tab)\" [shouldFillParent]=\"true\" [allowMultiline]=\"tab.allowMultiline\" (onClick)=\"_clicked($event, 'tab')\"></ra-ui-nav-bar-button></div><div *ngIf=\"_showMoreButton\" class=\"more-button-container\"><ra-ui-nav-bar-button [config]=\"_moreButtonConfig\" [invertIconAndText]=\"true\" [disableTooltip]=\"_config.disableTooltips\" [disableAcceleratorKey]=\"_disableAccelerators\" [nbButtonType]=\"_textIconButton\" [shouldFillParent]=\"true\" (onClick)=\"navSmallMenu.toggle()\"></ra-ui-nav-bar-button></div></mat-toolbar-row></mat-toolbar><mat-sidenav-container fxFlex=\"1 1 auto\" class=\"nav-bar-content\"><ng-content></ng-content><mat-sidenav #navSmallMenu mode=\"over\" position=\"end\" opened=\"false\"><mat-nav-list color=\"primary\" class=\"nav-bar-small-menu-items\"><div *ngFor=\"let tab of (_tabsInSideNav); let i = index;\" class=\"tab-button-in-menu-container\"><ra-ui-nav-bar-button [config]=\"tab\" [class.active-tab]=\"tab.id === selectedTab.id\" [class.tab-in-side-nav-with-icon]=\"_containsIcon(tab)\" class=\"tab-in-side-nav\" [disableTooltip]=\"_config.disableTooltips\" [disableAcceleratorKey]=\"_disableAccelerators\" [nbButtonType]=\"_getTabStyle(tab)\" [shouldFillParent]=\"true\" [alignText]=\"'Left'\" (onClick)=\"_clicked($event, 'tab')\"></ra-ui-nav-bar-button></div></mat-nav-list></mat-sidenav></mat-sidenav-container></div>",
                    styles: ["ra-ui-nav-bar .nav-bar-toolbar{min-width:360px}ra-ui-nav-bar .nav-bar-toolbar .log-row-spacer{flex:1 1 auto;align-content:center;text-align:center;justify-content:center}ra-ui-nav-bar .nav-bar-toolbar .mat-toolbar-row{height:40px;padding:0}ra-ui-nav-bar .nav-bar-toolbar .mat-toolbar-row .more-button-container,ra-ui-nav-bar .nav-bar-toolbar .mat-toolbar-row .tab-button-container{height:40px;width:120px}ra-ui-nav-bar .nav-bar-toolbar .mat-toolbar-row .logo-button-container{height:40px}ra-ui-nav-bar .nav-bar-toolbar .mat-toolbar-row.nav-bar-small{height:52px;padding:0;width:360px}ra-ui-nav-bar .nav-bar-toolbar .mat-toolbar-row.nav-bar-small .tab-button-container{height:52px;width:33%}ra-ui-nav-bar .nav-bar-content{min-width:360px}ra-ui-nav-bar .small-menu-icon{margin-right:10px}"],
                    changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    encapsulation: _angular_core.ViewEncapsulation.None
                },] },
    ];
    NavBarComponent.ctorParameters = function () { return [
        { type: _angular_core.ChangeDetectorRef, },
        { type: undefined, decorators: [{ type: _angular_core.Inject, args: [_raWebTechUiToolkit_commonUtils.LOGGER,] },] },
    ]; };
    NavBarComponent.propDecorators = {
        "tabs": [{ type: _angular_core.Input },],
        "actions": [{ type: _angular_core.Input },],
        "showBackButton": [{ type: _angular_core.Input },],
        "config": [{ type: _angular_core.Input },],
        "tabOnClick": [{ type: _angular_core.Output },],
        "actionOnClick": [{ type: _angular_core.Output },],
        "backButtonOnClick": [{ type: _angular_core.Output },],
        "logoOnClick": [{ type: _angular_core.Output },],
        "sideBar": [{ type: _angular_core.ViewChild, args: ['navSmallMenu',] },],
        "logoRef": [{ type: _angular_core.ViewChild, args: ['logoRef',] },],
    };
    return NavBarComponent;
}());

var NavBarButtonComponent = (function (_super) {
    __extends(NavBarButtonComponent, _super);
    function NavBarButtonComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._config = new BarButtonConfig();
        _this._invertIconAndText = false;
        _this._shouldFillParent = false;
        _this.alignText = _raWebTechUiToolkit_commonUtils.TextAlign.Center;
        _this.allowMultiline = false;
        return _this;
    }
    Object.defineProperty(NavBarButtonComponent.prototype, "nbButtonType", {
        get: function () {
            return this._nbButtonType;
        },
        set: function (type) {
            this._nbButtonType = type;
            this.setStyleAndClass(this._nbButtonType);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavBarButtonComponent.prototype, "config", {
        get: function () {
            return this._config;
        },
        set: function (val) {
            this._config = new BarButtonConfig(val);
            this.setStyleAndClass(this._nbButtonType);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavBarButtonComponent.prototype, "invertIconAndText", {
        get: function () {
            return this._invertIconAndText;
        },
        set: function (shouldRevert) {
            this._invertIconAndText = shouldRevert;
            this.nbButtonType === NavBarButtonType.TextIcon && this.setStyleAndClass(this._nbButtonType);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavBarButtonComponent.prototype, "shouldFillParent", {
        get: function () {
            return this._shouldFillParent;
        },
        set: function (shouldFill) {
            this._shouldFillParent = shouldFill;
            this.setStyleAndClass(this._nbButtonType);
        },
        enumerable: true,
        configurable: true
    });
    NavBarButtonComponent.prototype.ngOnChanges = function () {
        this._updateButtonConfig();
    };
    NavBarButtonComponent.prototype._updateButtonConfig = function () {
        this._buttonConfig = new _raWebTechUiToolkit_commonUtils.ButtonConfig({
            buttonStyle: this.style,
            disableTooltip: this._disableTooltip,
            fillParent: this._shouldFillParent,
            staticTextConfig: new _raWebTechUiToolkit_commonUtils.StaticTextConfig({
                textAlign: this.alignText,
                allowMultiline: this.allowMultiline,
                textAlignVertically: _raWebTechUiToolkit_commonUtils.TextAlignVertically.Center
            })
        });
    };
    NavBarButtonComponent.prototype._clicked = function () {
        !this._config.disabled && this.onClick.emit(this._config);
    };
    NavBarButtonComponent.prototype.setStyleAndClass = function (type) {
        switch (type) {
            case NavBarButtonType.Action: {
                this.style = _raWebTechUiToolkit_commonUtils.ButtonStyle.Icon;
                this._buttonClass = 'nav-bar-icon';
                break;
            }
            case NavBarButtonType.TextIcon: {
                this.style = _raWebTechUiToolkit_commonUtils.ButtonStyle.IconWithLabel;
                this._buttonClass = this.invertIconAndText ?
                    'nav-bar-text-icon-button nav-bar-more-side-nav-tab' : 'nav-bar-text-icon-button';
                break;
            }
            case NavBarButtonType.Tab: {
                this.style = _raWebTechUiToolkit_commonUtils.ButtonStyle.Basic;
                this._buttonClass = 'nav-bar-tab';
                break;
            }
            default: {
                break;
            }
        }
    };
    NavBarButtonComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ra-ui-nav-bar-button',
                    template: "<div [class]=\"_buttonClass\"><ra-ui-button [iconName]=\"_config.icon\" [label]=\"_config.label\" [disabled]=\"_config.disabled\" [tooltipText]=\"_config.tooltipText\" [config]=\"_buttonConfig\" (onClick)=\"_clicked()\"></ra-ui-button></div>",
                    styles: [""],
                    preserveWhitespaces: false,
                    changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
                    encapsulation: _angular_core.ViewEncapsulation.None
                },] },
    ];
    NavBarButtonComponent.propDecorators = {
        "nbButtonType": [{ type: _angular_core.Input },],
        "config": [{ type: _angular_core.Input },],
        "invertIconAndText": [{ type: _angular_core.Input },],
        "shouldFillParent": [{ type: _angular_core.Input },],
        "alignText": [{ type: _angular_core.Input },],
        "allowMultiline": [{ type: _angular_core.Input },],
    };
    return NavBarButtonComponent;
}(BarButtonComponent));

var RaUiNavBarModule = (function () {
    function RaUiNavBarModule() {
    }
    RaUiNavBarModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    imports: [
                        _angular_common.CommonModule,
                        _angular_flexLayout.FlexLayoutModule,
                        _angular_material.MatSidenavModule,
                        _angular_material.MatListModule,
                        _angular_material.MatToolbarModule,
                        _raWebTechUiToolkit_commonUtils.RaUiSizeChangeModule,
                        _raWebTechUiToolkit_commonUtils.RaUiButtonModule,
                        _raWebTechUiToolkit_commonUtils.RaUiImageModule,
                        _raWebTechUiToolkit_commonUtils.RaUiStaticTextModule,
                        _angular_material.MatMenuModule,
                        _angular_material.MatButtonModule,
                        _angular_material.MatTooltipModule,
                        _angular_material.MatIconModule,
                        _raWebTechUiToolkit_commonUtils.RaUiTruncateModule
                    ],
                    declarations: [
                        NavBarComponent,
                        NavBarLogoComponent,
                        NavBarButtonComponent
                    ],
                    exports: [
                        NavBarComponent
                    ]
                },] },
    ];
    return RaUiNavBarModule;
}());

var AboutModel = (function () {
    function AboutModel(config) {
        this.subProducts = [];
        this.links = [];
        this.YEARS = new Date().getFullYear().toString();
        this.COPYRIGHT = 'RA_UI_NAVIGATION.ABOUT_PAGE.COPYRIGHT';
        this.RESERVED = 'RA_UI_NAVIGATION.ABOUT_PAGE.RIGHTS_RESERVED';
        this.NOTICE = 'RA_UI_NAVIGATION.ABOUT_PAGE.LEGAL_NOTICE';
        this.product = {
            name: (config && config.product ? config.product.name : 'RA_UI_NAVIGATION.ABOUT_PAGE.INVALID_NAME'),
            version: (config && config.product ? config.product.version : 'RA_UI_NAVIGATION.ABOUT_PAGE.INVALID_VERSION'),
            arch: (config && config.product ? config.product.arch : undefined)
        };
        this.logo = config.logo || 'assets/images/logos/default-logo.svg';
        this.largeLogo = config.largeLogo || '';
        this.subProducts = config.subProducts || [];
        this.links = config.links || [];
        this.legal = {
            years: (config && config.legal && config.legal.years ? config.legal.years : this.YEARS),
            copyright: (config && config.legal && config.legal.copyright ? config.legal.copyright : this.COPYRIGHT),
            rightsReserved: (config && config.legal && config.legal.rightsReserved ? config.legal.rightsReserved : this.RESERVED),
            legalNotice: (config && config.legal && config.legal.legalNotice ? config.legal.legalNotice : this.NOTICE)
        };
    }
    return AboutModel;
}());
var AboutPageComponent = (function () {
    function AboutPageComponent() {
        this.showClose = true;
        this.closeClicked = new _angular_core.EventEmitter();
        this.aboutLinkClicked = new _angular_core.EventEmitter();
        this.textConfig = {
            disableTruncate: true
        };
        this._smallWidth = 350;
        this._mediumWidth = 535;
        this._smallClass = 'small-display';
        this._mediumClass = 'medium-display';
    }
    AboutPageComponent.prototype.ngOnInit = function () {
        this.model = new AboutModel(this.config);
    };
    AboutPageComponent.prototype._onSizeChange = function (event) {
        var width = event.width;
        if (width < this._smallWidth) {
            this.responsiveClass = this._smallClass;
        }
        else if (width < this._mediumWidth) {
            this.responsiveClass = this._mediumClass;
        }
        else {
            this.responsiveClass = '';
        }
    };
    AboutPageComponent.prototype.closeButtonClicked = function () {
        this.closeClicked.emit('closeButtonClicked');
    };
    AboutPageComponent.prototype.openLink = function (link) {
        this.aboutLinkClicked.emit(link);
    };
    AboutPageComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ra-ui-about-page',
                    template: "<div (raUiOnSizeChange)=\"_onSizeChange($event)\"><div fxLayout=\"row\" class=\"about-header\" *ngIf=\"!model.largeLogo\"><div class=\"item-logo\" [style.background-image]=\"'url(' + model.logo + ')'\" fxFlex=\"0 0 48px\"></div><div fxFlex=\"1 1 auto\" fxLayout=\"column\"><div class=\"product-name large-font {{responsiveClass}}\" fxFlex=\"1 0 auto\"><ra-ui-static-text [value]=\"model.product.name\" [config]=\"textConfig\"></ra-ui-static-text></div><div class=\"big-font {{responsiveClass}}\" fxFlex=\"1 1 auto\" fxLayout=\"row\"><ra-ui-static-text [value]=\"'RA_UI_NAVIGATION.ABOUT_PAGE.VERSION_LABEL'\" [config]=\"textConfig\"></ra-ui-static-text>&nbsp;<ra-ui-static-text class=\"product-version\" [value]=\"model.product.version\" [config]=\"textConfig\"></ra-ui-static-text>&nbsp;<ra-ui-static-text class=\"product-arch\" *ngIf=\"model.product.arch\" [value]=\"'(' + model.product.arch + ')'\" [config]=\"textConfig\"></ra-ui-static-text></div></div><div class=\"item-exit\" fxFlex=\"0 0 40px\"><ra-ui-button *ngIf=\"showClose\" class=\"about-page-close-button\" [config]=\"{buttonStyle: 'Icon'}\" iconName=\"clear\" (onClick)=\"closeButtonClicked()\"></ra-ui-button></div></div><div *ngIf=\"model.largeLogo\"><div class=\"about-large-logo\" [style.background-image]=\"'url(' + model.largeLogo + ')'\"></div><div class=\"about-large-version big-font\" fxLayout=\"row\"><ra-ui-static-text [value]=\"'RA_UI_NAVIGATION.ABOUT_PAGE.VERSION_LABEL'\" [config]=\"textConfig\"></ra-ui-static-text>&nbsp;<ra-ui-static-text class=\"product-version\" [value]=\"model.product.version\" [config]=\"textConfig\"></ra-ui-static-text>&nbsp;<ra-ui-static-text *ngIf=\"model.product.arch\" class=\"product-arch\" [value]=\"'(' + model.product.arch + ')'\" [config]=\"textConfig\"></ra-ui-static-text></div></div><div class=\"about-links {{responsiveClass}}\" *ngIf=\"model.links.length > 0\" fxLayout=\"row\"><ra-ui-button *ngFor=\"let link of model.links\" fxFlex=\"1 1 auto\" [config]=\"{buttonStyle: 'Raised', fillParent: true}\" [label]=\"link.name\" color=\"accent\" (onClick)=\"openLink(link.name)\" class=\"link-button\"></ra-ui-button></div><div class=\"about-content\"><div class=\"sub-item big-font {{responsiveClass}}\" *ngFor=\"let item of model.subProducts\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\"><ra-ui-static-text class=\"sub-item-name\" [value]=\"item.name\" [config]=\"textConfig\"></ra-ui-static-text><div fxLayout=\"row\"><ra-ui-static-text class=\"sub-item-version\" [value]=\"item.version\" [config]=\"textConfig\"></ra-ui-static-text>&nbsp;<ra-ui-static-text class=\"sub-item-arch\" *ngIf=\"item.arch\" [value]=\"'(' + item.arch + ')'\" [config]=\"textConfig\"></ra-ui-static-text></div></div><div class=\"version-spacer\"></div><div class=\"medium-font copy-right {{responsiveClass}}\" fxLayout=\"row\"><ra-ui-static-text [value]=\"'\u00A9'\" [config]=\"textConfig\"></ra-ui-static-text>&nbsp;<ra-ui-static-text [value]=\"model.legal.years\" [config]=\"textConfig\"></ra-ui-static-text>&nbsp;<ra-ui-static-text [value]=\"model.legal.copyright\" [config]=\"textConfig\"></ra-ui-static-text></div><div class=\"medium-font rights-reserved {{responsiveClass}}\"><ra-ui-static-text [value]=\"model.legal.rightsReserved\" [config]=\"textConfig\"></ra-ui-static-text></div><div class=\"small-font legal-notice {{responsiveClass}}\"><ra-ui-static-text [value]=\"model.legal.legalNotice\" [config]=\"textConfig\"></ra-ui-static-text></div></div></div>",
                    styles: ["ra-ui-about-page .product-arch,ra-ui-about-page .sub-item-arch{opacity:.5}ra-ui-about-page .about-large-logo{margin:10px;width:100%;height:300px;background-repeat:no-repeat;background-size:contain;background-position:center center}ra-ui-about-page .about-large-version{justify-content:center;margin-bottom:20px}ra-ui-about-page .about-header{margin-bottom:10px}ra-ui-about-page .about-header .item-logo{margin-right:16px;background-repeat:no-repeat;background-size:contain;background-position:center center}ra-ui-about-page .about-header .large-font{font-size:24px}ra-ui-about-page .about-header .large-font.medium-display{font-size:20px}ra-ui-about-page .about-header .large-font.small-display{font-size:19px}ra-ui-about-page .about-header .version-field{justify-self:right}ra-ui-about-page .about-content .big-font{font-size:16px;margin-bottom:5px}ra-ui-about-page .about-content .big-font.medium-display{font-size:13px}ra-ui-about-page .about-content .big-font.small-display{font-size:12px}ra-ui-about-page .about-content .version-spacer{height:20px}ra-ui-about-page .about-content .medium-font{font-size:14px;margin-bottom:3px}ra-ui-about-page .about-content .medium-font.medium-display{font-size:12px}ra-ui-about-page .about-content .medium-font.small-display{font-size:11px}ra-ui-about-page .about-content .small-font{font-size:13px;margin:10px 0}ra-ui-about-page .about-content .small-font.medium-display{font-size:11px}ra-ui-about-page .about-content .small-font.small-display{font-size:10px}ra-ui-about-page .about-links{margin:10px 0}ra-ui-about-page .about-links .link-button{margin:5px;min-width:0!important}ra-ui-about-page .about-links .link-button.small-display{margin:5px 20px}"],
                    changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    encapsulation: _angular_core.ViewEncapsulation.None
                },] },
    ];
    AboutPageComponent.propDecorators = {
        "config": [{ type: _angular_core.Input },],
        "showClose": [{ type: _angular_core.Input },],
        "closeClicked": [{ type: _angular_core.Output },],
        "aboutLinkClicked": [{ type: _angular_core.Output },],
    };
    return AboutPageComponent;
}());

var AboutDialogComponent = (function () {
    function AboutDialogComponent(translate, dialogRef, data) {
        this.translate = translate;
        this.dialogRef = dialogRef;
        this.data = data;
        this.config = this.data.config;
    }
    AboutDialogComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    AboutDialogComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ra-ui-about-dialog',
                    template: "<div class=\"about-margin\"><div class=\"about-page\"><ra-ui-about-page [config]=\"config\" (closeClicked)=\"closeDialog()\"></ra-ui-about-page></div></div>",
                    styles: ["ra-ui-about-dialog .about-margin{margin:-8px}@media (max-width:535px){ra-ui-about-dialog .about-margin{margin:-16px}}ra-ui-about-dialog .about-page{max-width:390px}"],
                    encapsulation: _angular_core.ViewEncapsulation.None
                },] },
    ];
    AboutDialogComponent.ctorParameters = function () { return [
        { type: _ngxTranslate_core.TranslateService, },
        { type: _angular_material.MatDialogRef, },
        { type: undefined, decorators: [{ type: _angular_core.Inject, args: [_angular_material.MAT_DIALOG_DATA,] },] },
    ]; };
    return AboutDialogComponent;
}());

var RaUiAboutDialogModule = (function () {
    function RaUiAboutDialogModule() {
    }
    RaUiAboutDialogModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    imports: [
                        _angular_common.CommonModule,
                        _raWebTechUiToolkit_commonUtils.RaUiStaticTextModule,
                        _raWebTechUiToolkit_commonUtils.RaUiButtonModule,
                        _angular_flexLayout.FlexLayoutModule
                    ],
                    declarations: [
                        AboutPageComponent,
                        AboutDialogComponent
                    ],
                    exports: [
                        AboutPageComponent,
                        AboutDialogComponent
                    ],
                    entryComponents: [
                        AboutDialogComponent
                    ]
                },] },
    ];
    return RaUiAboutDialogModule;
}());

var FilterMatchService = (function () {
    function FilterMatchService() {
    }
    FilterMatchService.prototype.matchItem = function (parseTree, obj, predicates, ignoreNestedProperties, propertiesToMatch) {
        return this.isMatchForNonTerminalNode(parseTree, obj, predicates, ignoreNestedProperties, propertiesToMatch);
    };
    FilterMatchService.prototype.getPredicateByKey = function (key, predicates) {
        for (var _i = 0, predicates_1 = predicates; _i < predicates_1.length; _i++) {
            var predicate = predicates_1[_i];
            for (var _a = 0, _b = predicate.keys; _a < _b.length; _a++) {
                var k = _b[_a];
                if (key === k) {
                    return predicate;
                }
            }
        }
        return undefined;
    };
    FilterMatchService.prototype.isMatchForValue = function (value, match, isExactMatch, propName, propertiesToMatch) {
        if (propName === void 0) { propName = ''; }
        if (propertiesToMatch === void 0) { propertiesToMatch = []; }
        if (propertiesToMatch.length && propertiesToMatch.indexOf(propName) === -1) {
            return false;
        }
        if (isExactMatch) {
            return value === match;
        }
        else {
            return value.indexOf(match) >= 0;
        }
    };
    FilterMatchService.prototype.isMatchForPredicate = function (value, obj, matchPredicate, predicates, isExactMatch) {
        var predicate = this.getPredicateByKey(matchPredicate.toLowerCase(), predicates);
        if (!predicate) {
            return false;
        }
        var valueToMatch = predicate.callback(obj);
        if (valueToMatch) {
            valueToMatch = valueToMatch.trim().toLowerCase();
            return this.isMatchForValue(valueToMatch, value, isExactMatch);
        }
        return false;
    };
    FilterMatchService.prototype.isMatchForNestedProp = function (value, match, isExactMatch, propertiesToMatch) {
        var _this = this;
        var result = false;
        var matchAllProps = function (obj) {
            for (var prop in obj) {
                if (obj.hasOwnProperty(prop)) {
                    if (_raWebTechUiToolkit_commonUtils.TypeUtils.isObject(obj[prop])) {
                        matchAllProps(obj[prop]);
                    }
                    else {
                        result = result || _this.isMatchForValue(obj[prop].trim().toLowerCase(), match, isExactMatch, prop, propertiesToMatch);
                    }
                }
            }
        };
        matchAllProps(value);
        return result;
    };
    FilterMatchService.prototype.isMatchForNonPredicate = function (value, obj, isExactMatch, ignoreNestedProperties, propertiesToMatch) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                var propVal = obj[prop];
                if (_raWebTechUiToolkit_commonUtils.TypeUtils.isObject(propVal)) {
                    if (ignoreNestedProperties) {
                        return false;
                    }
                    else {
                        return this.isMatchForNestedProp(propVal, value, isExactMatch, propertiesToMatch);
                    }
                }
                if (typeof propVal !== 'string') {
                    return false;
                }
                var propValue = propVal.trim().toLowerCase();
                if (this.isMatchForValue(propValue, value, isExactMatch, prop, propertiesToMatch)) {
                    return true;
                }
            }
        }
        return false;
    };
    FilterMatchService.prototype.isMatchForTerminalNode = function (parseTree, obj, predicates, ignoreNestedProperties, propertiesToMatch) {
        var value = parseTree.value.trim().toLowerCase();
        var isExactMatch = parseTree.hasOwnProperty('isExactMatch') && parseTree.isExactMatch === true;
        if (parseTree.hasOwnProperty('predicate')) {
            return this.isMatchForPredicate(value, obj, parseTree.predicate, predicates, isExactMatch);
        }
        return this.isMatchForNonPredicate(value, obj, isExactMatch, ignoreNestedProperties, propertiesToMatch);
    };
    FilterMatchService.prototype.isMatchForNonTerminalNode = function (parseTree, obj, predicates, ignoreNestedProperties, propertiesToMatch) {
        if (parseTree.hasOwnProperty('value')) {
            return this.isMatchForTerminalNode(parseTree, obj, predicates, ignoreNestedProperties, propertiesToMatch);
        }
        if (parseTree.op === 'OR') {
            return (this.isMatchForNonTerminalNode(parseTree.left, obj, predicates, ignoreNestedProperties, propertiesToMatch) ||
                this.isMatchForNonTerminalNode(parseTree.right, obj, predicates, ignoreNestedProperties, propertiesToMatch));
        }
        else if (parseTree.op === 'AND') {
            return (this.isMatchForNonTerminalNode(parseTree.left, obj, predicates, ignoreNestedProperties, propertiesToMatch) &&
                this.isMatchForNonTerminalNode(parseTree.right, obj, predicates, ignoreNestedProperties, propertiesToMatch));
        }
        else {
            return false;
        }
    };
    FilterMatchService.decorators = [
        { type: _angular_core.Injectable },
    ];
    return FilterMatchService;
}());

var grammar = "\n{\n   var predicates = options.predicates;\n   function stringFromChars(stringOrStringArray) {\n       return stringOrStringArray.join('');\n   }\n   function isDefinedPredicate(predicate){\n       var predicateString = stringFromChars(predicate).toLowerCase();\n       return predicates.indexOf(predicateString) > -1;\n   }\n}\n// If use this grammar online, put commneted code instead the one above\n//    {\n//        var predicates = ['adi', 'rt5'];\n//        function stringFromChars(stringOrStringArray) {\n//            return stringOrStringArray.join('');\n//        }\n//        function isDefinedPredicate(predicate){\n//            return predicates.indexOf(stringFromChars(predicate)) > -1;\n//        }\n//    }\nstart = ored\nored\n  = left:anded op:OPOR right:ored { return {left:left, op:op, right:right}; }\n  / anded\nanded\n  = left:primary op:OPAND right:anded { return {left:left, op:op, right:right};}\n  / primary\nprimary\n  = OPENPAREN ored:ored CLOSEPAREN { return ored;}\n  / predicateSearch\n  / nonPredicateSearch\n  / OPENEXACTMATCH wordsWithSpace:LETTERWITHSPACE+ CLOSEEXACTMATCH\n       { return {isExactMatch:true, value:stringFromChars(wordsWithSpace)};}\npredicateSearch\n  = isRegisteredPredicate predicate:LETTERPREDICATE+ ':' SPACE\n   {throw error('ra:Blank spaces between Filter and Filter value');}\n  / isRegisteredPredicate predicate:LETTERPREDICATE+ ':' (OPENPAREN / CLOSEPAREN)\n   {throw error('ra:Predicates cannot be nested');}\n  / isRegisteredPredicate predicate:LETTERPREDICATE+ ':' word:LETTER+\n   {return {predicate:stringFromChars(predicate), value: stringFromChars(word)};}\n  / isRegisteredPredicate predicate:LETTERPREDICATE+ ':'\n    OPENEXACTMATCH wordsWithSpace:LETTERWITHSPACE+ CLOSEEXACTMATCH\n   {return {predicate:stringFromChars(predicate), isExactMatch:true,\n   value:stringFromChars(wordsWithSpace)};}\nnonPredicateSearch = word:LETTER+ {return {value:stringFromChars(word)};}\nisRegisteredPredicate = & (predicate:LETTERPREDICATE+ ':'\n & {return isDefinedPredicate(predicate);})\nLETTERPREDICATE =    lett:([^(): \"]) { return lett; }\nLETTER =             lett:(LETTERPREDICATE / [:]) { return lett; }\nLETTERWITHSPACE =    lett:(LETTER / [ ]) { return lett; }\nOPENPAREN = SPACEOPT '(' SPACEOPT\nCLOSEPAREN = SPACEOPT ')' SPACEOPT\nOPENEXACTMATCH  = SPACEOPT '\\\"' SPACEOPT\nCLOSEEXACTMATCH = SPACEOPT '\\\"' & (SPACE / ')' / EOF ) //Don't eat chars after closing char\n\nOPAND\n  = SPACEOPT c:'AND' SPACE {return c;} // Explicit AND\n / SPACE ! ('OR' SPACE) {return 'AND'} // Implicit AND\n       //(Note the ! prevents us from erronously overidding an OR)\n\nOPOR\n  = SPACEOPT c:'OR' SPACE {return c;}\n  / SPACEOPT ! ('OR' SPACE) {return 'AND'}\n       //This allows us to do stuff like '(a b) c' and not get errors because of 'c'\n\nSPACEOPT  = [ ]*\nSPACE = [ ]+\nEOF = !.\n";
var FilterService = (function () {
    function FilterService(match) {
        this.match = match;
    }
    FilterService.getParser = function () {
        if (!FilterService._parser) {
            FilterService._parser = pegjs.generate(grammar);
        }
        return FilterService._parser;
    };
    FilterService.prototype.run = function (searchText, data, predicates, childrenProp, childMustMatch, ignoreNestedProperties, propertiesToMatch) {
        if (childrenProp === void 0) { childrenProp = ''; }
        if (childMustMatch === void 0) { childMustMatch = false; }
        if (ignoreNestedProperties === void 0) { ignoreNestedProperties = false; }
        if (propertiesToMatch === void 0) { propertiesToMatch = []; }
        var aliases = this.getPredicateAliases(predicates);
        this.parseTree = this.buildParseTree(searchText, aliases);
        var result = lodash.cloneDeep(data);
        this.matchCollection(result, predicates, childrenProp, childMustMatch, undefined, undefined, ignoreNestedProperties, propertiesToMatch);
        return result;
    };
    FilterService.prototype.buildParseTree = function (searchText, predicateAliases) {
        return FilterService.getParser().parse(searchText, {
            predicates: predicateAliases
        });
    };
    FilterService.prototype.getPredicateAliases = function (predicates) {
        var result = [];
        for (var _i = 0, predicates_1 = predicates; _i < predicates_1.length; _i++) {
            var predicate = predicates_1[_i];
            for (var _a = 0, _b = predicate.keys; _a < _b.length; _a++) {
                var alias = _b[_a];
                result.push(alias.toLowerCase());
            }
        }
        return result;
    };
    FilterService.prototype.matchCollection = function (data, predicates, childrenProp, childMustMatch, parent, parentMatch, ignoreNestedProperties, propertiesToMatch) {
        if (parent === void 0) { parent = undefined; }
        if (parentMatch === void 0) { parentMatch = false; }
        if (ignoreNestedProperties === void 0) { ignoreNestedProperties = false; }
        if (propertiesToMatch === void 0) { propertiesToMatch = []; }
        var childMatch = false;
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var obj = data_1[_i];
            var matchResult = this.match.matchItem(this.parseTree, obj, predicates, ignoreNestedProperties, propertiesToMatch);
            if (childrenProp && obj[childrenProp]) {
                childMatch = this.matchCollection(obj[childrenProp], predicates, childrenProp, childMustMatch, obj, parentMatch || matchResult, ignoreNestedProperties, propertiesToMatch) || childMatch;
            }
            if (childrenProp && obj[childrenProp]) {
            }
            else {
                var cond = childMustMatch ? !matchResult : !matchResult && !parentMatch;
                if (cond) {
                    obj["_obsolete"] = true;
                }
            }
            childMatch = childMatch || matchResult;
        }
        var hasObsoleteItems;
        do {
            hasObsoleteItems = false;
            for (var index in data) {
                if (data.hasOwnProperty(index)) {
                    var obj = data[index];
                    if (obj.hasOwnProperty('_obsolete')) {
                        var i = data.indexOf(obj);
                        i !== -1 && data.splice(i, 1);
                        hasObsoleteItems = true;
                        break;
                    }
                }
            }
        } while (hasObsoleteItems);
        if (parent && childrenProp && parent[childrenProp] && parent[childrenProp].length === 0) {
            delete parent[childrenProp];
        }
        return childMatch;
    };
    FilterService._parser = undefined;
    FilterService.decorators = [
        { type: _angular_core.Injectable },
    ];
    FilterService.ctorParameters = function () { return [
        { type: FilterMatchService, },
    ]; };
    return FilterService;
}());

var FilterErrorMessageFormatService = (function () {
    function FilterErrorMessageFormatService(translate) {
        this.translate = translate;
    }
    FilterErrorMessageFormatService.prototype.format = function (error, searchText, config) {
        var _this = this;
        var position = error.hasOwnProperty('location') ? error.location.start.column : -1;
        var positionLabel = config.errorPosition;
        var message = '';
        return new rxjs.Observable(function (observer) {
            if (_this.isParserErrorNestedPredicateValuesNotAllowed(error, position, searchText)) {
                message = config.errorNoParens;
            }
            else if (_this.isParserErrorParensValueMissing(position, searchText)) {
                message = config.errorParensValueMissing;
            }
            else if (_this.isParserErrorOpenParenthesisMissing(error, position)) {
                message = config.errorLeftParenMissing;
            }
            else if (_this.isParserErrorCloseParenthesisMissing(error, position, searchText)) {
                message = config.errorRightParenMissing;
            }
            else if (_this.isParserErrorPredicateValueMissingSpacesBeforeValue(error, position, searchText)) {
                message = config.errorValueMissing;
            }
            else if (_this.isParserErrorQuotationMarkMissing(position, searchText)) {
                message = config.errorQuoteMissing;
            }
            else if (_this.isParserErrorQuotationMarkMustContainValidChars(position, searchText)) {
                message = config.errorQuoteInvalid;
            }
            if (_this.translate) {
                _this.translate.get(positionLabel).subscribe(function (res) {
                    positionLabel = res;
                    _this.translate.get(message, { position: position }).subscribe(function (r) {
                        message = r;
                        observer.next({
                            position: position,
                            positionLabel: positionLabel,
                            message: message
                        });
                    });
                });
            }
            else {
                observer.next({
                    position: position,
                    positionLabel: positionLabel,
                    message: message
                });
            }
        });
    };
    FilterErrorMessageFormatService.prototype.isParserErrorNestedPredicateValuesNotAllowed = function (error, position, searchText) {
        if (position < 0) {
            return false;
        }
        if (error.message === 'ra:Predicates cannot be nested') {
            return true;
        }
        return (searchText[position] === ':');
    };
    FilterErrorMessageFormatService.prototype.isParserErrorParensValueMissing = function (position, searchText) {
        if (position < 0) {
            return false;
        }
        return searchText.indexOf('()') >= 0;
    };
    FilterErrorMessageFormatService.prototype.isParserErrorOpenParenthesisMissing = function (error, position) {
        if (error.found !== ')') {
            return false;
        }
        if (position < 0) {
            return false;
        }
        if (error.message.indexOf('or end of input but ")" found.') >= 0) {
            return true;
        }
        return (error.message.indexOf('Expected "(",') >= 0 &&
            error.message.indexOf('but ")" found.') >= 0);
    };
    FilterErrorMessageFormatService.prototype.isParserErrorCloseParenthesisMissing = function (error, position, searchText) {
        var openParens;
        var closeParens;
        if (position < 0) {
            return false;
        }
        if (error.message.indexOf('but end of input found.') < 0 &&
            error.message.indexOf('or end of input but "(" found.') < 0) {
            return false;
        }
        openParens = searchText.match(/[(]/g);
        if (openParens) {
            openParens = openParens.length;
        }
        else {
            openParens = 0;
        }
        closeParens = searchText.match(/[)]/g);
        if (closeParens) {
            closeParens = closeParens.length;
        }
        else {
            closeParens = 0;
        }
        if (openParens === closeParens) {
            return false;
        }
        return openParens > closeParens;
    };
    FilterErrorMessageFormatService.prototype.isParserErrorPredicateValueMissingSpacesBeforeValue = function (error, position, searchText) {
        if (position < 0) {
            return false;
        }
        if (error.message === 'ra:Blank spaces between Filter and Filter value') {
            return true;
        }
        if (!error.found) {
            return false;
        }
        if (error.found !== searchText[position]) {
            return false;
        }
        if (!error.message.indexOf('but "' + error.found + '" found.')) {
            return false;
        }
        return (this.firstNonEmptyCharacterInStringBeforePosition(position, searchText) === ':');
    };
    FilterErrorMessageFormatService.prototype.isParserErrorQuotationMarkMissing = function (position, searchText) {
        var quotMarksMatch;
        var quotMarksCnt;
        if (position < 0) {
            return false;
        }
        quotMarksMatch = searchText.match(/["]/g);
        quotMarksCnt = quotMarksMatch ? quotMarksMatch.length : 0;
        return quotMarksCnt % 2 === 1;
    };
    FilterErrorMessageFormatService.prototype.isParserErrorQuotationMarkMustContainValidChars = function (position, searchText) {
        if (position < 0) {
            return false;
        }
        return searchText.indexOf('""') >= 0;
    };
    FilterErrorMessageFormatService.prototype.firstNonEmptyCharacterInStringBeforePosition = function (position, searchText) {
        if (searchText.length === 0) {
            return '';
        }
        for (var i = position - 2; i >= 0; i--) {
            if (searchText[i] !== ' ') {
                return searchText[i];
            }
        }
        return '';
    };
    FilterErrorMessageFormatService.decorators = [
        { type: _angular_core.Injectable },
    ];
    FilterErrorMessageFormatService.ctorParameters = function () { return [
        { type: _ngxTranslate_core.TranslateService, decorators: [{ type: _angular_core.Optional },] },
    ]; };
    return FilterErrorMessageFormatService;
}());

function isFilterListener(val) {
    return _raWebTechUiToolkit_commonUtils.TypeUtils.isObject(val) && typeof val.getInput === 'function' && typeof val.sendOutput === 'function';
}
function isFilterText(val) {
    return lodash.isNil(val) ? false : (val.hasOwnProperty('quickFilterLabel') && val.hasOwnProperty('clearButtonLabel') &&
        val.hasOwnProperty('searchInputLabel') && val.hasOwnProperty('errorPosition') && val.hasOwnProperty('errorNoParens') &&
        val.hasOwnProperty('errorLeftParenMissing') && val.hasOwnProperty('errorRightParenMissing') &&
        val.hasOwnProperty('errorParensValueMissing') && val.hasOwnProperty('errorValueMissing') &&
        val.hasOwnProperty('errorQuoteMissing') && val.hasOwnProperty('errorQuoteInvalid'));
}
var DEFAULT_FILTER_TEXT = {
    quickFilterLabel: 'RA_UI_NAVIGATION.FILTER.QUICK_FILTER_LABEL',
    clearButtonLabel: 'RA_UI_NAVIGATION.FILTER.CLEAR_BUTTON_LABEL',
    searchInputLabel: 'RA_UI_NAVIGATION.FILTER.SEARCH_INPUT_LABEL',
    errorPosition: 'RA_UI_NAVIGATION.FILTER.ERROR.POSITION',
    errorNoParens: 'RA_UI_NAVIGATION.FILTER.ERROR.NO_PARENS',
    errorLeftParenMissing: 'RA_UI_NAVIGATION.FILTER.ERROR.LEFT_PAREN_MISSING',
    errorRightParenMissing: 'RA_UI_NAVIGATION.FILTER.ERROR.RIGHT_PAREN_MISSING',
    errorParensValueMissing: 'RA_UI_NAVIGATION.FILTER.ERROR.PARENS_VALUE_MISSING',
    errorValueMissing: 'RA_UI_NAVIGATION.FILTER.ERROR.VALUE_MISSING',
    errorQuoteMissing: 'RA_UI_NAVIGATION.FILTER.ERROR.QUOTE_MISSING',
    errorQuoteInvalid: 'RA_UI_NAVIGATION.FILTER.ERROR.QUOTE_INVALID'
};
var FILTER_COMPONENT = 'FilterComponent';
var FilterConfig = (function () {
    function FilterConfig(options, logger) {
        if (options === void 0) { options = ({}); }
        this.logger = logger;
    }
    FilterConfig.prototype.onInvalidType = function (propName, expected, got) {
        this.logger && _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput('FilterConfig', propName, got, expected, this.logger);
    };
    FilterConfig = __decorate([
        _raWebTechUiToolkit_commonUtils.Immutable,
        _raWebTechUiToolkit_commonUtils.Config({
            filterText: {
                default: DEFAULT_FILTER_TEXT,
                type: isFilterText,
                typeDisplayName: 'IFilterText'
            },
            predicates: {
                default: [],
                type: 'array',
                typeDisplayName: 'Predicates'
            },
            childrenProp: {
                default: '',
                type: 'string'
            },
            childMustMatch: {
                default: false,
                type: 'boolean'
            },
            ignoreNestedProperties: {
                default: false,
                type: 'boolean'
            },
            propertiesToMatch: {
                default: [],
                type: 'array'
            }
        }),
        __metadata("design:paramtypes", [Object, Object])
    ], FilterConfig);
    return FilterConfig;
}());
var FilterComponent = (function () {
    function FilterComponent(changeRef, filterService, filterErrorMessageFormatService, translate, logger) {
        var _this = this;
        this.changeRef = changeRef;
        this.filterService = filterService;
        this.filterErrorMessageFormatService = filterErrorMessageFormatService;
        this.translate = translate;
        this.logger = logger;
        this._config = new FilterConfig({}, this.logger);
        this._searchText = '';
        this._prefilter = '';
        this.searchTextChange = new _angular_core.EventEmitter();
        this.quickFilter = new _angular_core.EventEmitter();
        this._inputConfig = new _raWebTechUiToolkit_formSystem.InputConfig({
            floatPlaceholder: _raWebTechUiToolkit_formSystem.FloatPlaceholder.Never,
            disableAcceleratorKey: true,
            enableFlatMode: true,
            fillParent: true,
            enableImmediateArrow: false,
            enableDirtyFlag: false
        });
        this._searchLabel = '';
        this._foundItems = 0;
        this._totalItems = 0;
        this._tooltipText = '';
        this._positionText = '';
        this._disableInput = false;
        this.__isFocused = false;
        if (this.translate) {
            this.translate.onLangChange.subscribe(function (event) {
                if (!_this.lastSyntaxError) {
                    return;
                }
                var errorFormatted = _this.filterErrorMessageFormatService.format(_this.lastSyntaxError, _this.searchText, (_this.config.filterText));
                errorFormatted.subscribe(function (res) {
                    _this._positionText = res.position > -1 ?
                        res.positionLabel + ": " + res.position : '';
                    _this._tooltipText = res.message;
                });
            });
        }
    }
    Object.defineProperty(FilterComponent.prototype, "config", {
        get: function () {
            return this._config;
        },
        set: function (val) {
            if (!_raWebTechUiToolkit_commonUtils.TypeUtils.isObject(val)) {
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(FILTER_COMPONENT, 'config', val, 'IFilterConfig', this.logger);
                val = {};
            }
            this._config = new FilterConfig(val, this.logger);
            this.onConfigChanged();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterComponent.prototype, "searchText", {
        get: function () {
            return this._searchText;
        },
        set: function (val) {
            if (val !== undefined && typeof val !== 'string') {
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(FILTER_COMPONENT, 'searchText', val, 'string', this.logger);
                val = '';
            }
            this._searchText = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterComponent.prototype, "listener", {
        set: function (val) {
            if (val !== undefined && !isFilterListener(val)) {
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(FILTER_COMPONENT, 'listener', val, 'IFilterListener', this.logger);
                val = undefined;
            }
            this._listener = val;
            val && this.doFilter();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterComponent.prototype, "prefilter", {
        get: function () {
            return this._prefilter;
        },
        set: function (val) {
            if (val !== undefined && typeof val !== 'string') {
                _raWebTechUiToolkit_commonUtils.LoggerUtils.logInvalidInput(FILTER_COMPONENT, 'prefilter', val, 'string', this.logger);
                val = '';
            }
            this._prefilter = val;
            this.doFilter();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterComponent.prototype, "_isFocused", {
        get: function () {
            return this.__isFocused;
        },
        set: function (val) {
            this.__isFocused = val;
            this.updateSearchLabelText();
        },
        enumerable: true,
        configurable: true
    });
    FilterComponent.prototype.ngOnInit = function () {
        this.onConfigChanged();
    };
    FilterComponent.prototype.ngOnDestroy = function () {
        this.unsubscribeQuickFilter();
    };
    FilterComponent.prototype.refresh = function () {
        this.doFilter();
    };
    FilterComponent.prototype._onOpenQuickFilter = function () {
        var _this = this;
        this.unsubscribeQuickFilter();
        var quickFilterEvent = new rxjs.Subject();
        this.quickFilterSubscription = quickFilterEvent.subscribe(function (val) {
            _this._onModelChange(val);
            _this.changeRef.detectChanges();
        });
        this.quickFilter.emit(quickFilterEvent);
    };
    FilterComponent.prototype._onOpenMru = function () {
    };
    FilterComponent.prototype._onClearFilterText = function () {
        this.searchText = '';
        this.updateSearchLabelText();
        this.clearError();
        this.result = this.prefilteredData;
        this.sendFilterResult();
    };
    FilterComponent.prototype._onModelChange = function (value) {
        value === '' && this.clearError();
        this.searchText = value.trim();
        this.doFilter();
        this.searchTextChange.emit(this.searchText);
    };
    FilterComponent.prototype.onConfigChanged = function () {
        this.updateSearchLabelText();
        this.prevPredicates !== this.config.predicates && this.doFilter();
        this.prevPredicates = (this.config.predicates);
    };
    FilterComponent.prototype.clearError = function () {
        this._tooltip && this._tooltip.hide();
        this.lastSyntaxError = undefined;
    };
    FilterComponent.prototype.showTooltip = function () {
        var _this = this;
        setTimeout(function () {
            _this._tooltip.show();
        });
    };
    FilterComponent.prototype.showError = function (error) {
        var _this = this;
        this._tooltipText = error.message;
        this.lastSyntaxError = error;
        var errorFormatted = this.filterErrorMessageFormatService.format(this.lastSyntaxError, this.searchText, (this.config.filterText));
        errorFormatted.subscribe(function (res) {
            if (!_this._tooltipText) {
                return;
            }
            _this._positionText = res.position > -1 ?
                res.positionLabel + ": " + res.position : '';
            _this._tooltipText = res.message;
            _this.showTooltip();
        });
    };
    FilterComponent.prototype.updateSearchLabelText = function () {
        if (this.__isFocused) {
            this._searchLabel = '';
        }
        else {
            if (!this.searchText) {
                this._searchLabel = ((this.config.filterText)).searchInputLabel;
            }
        }
    };
    FilterComponent.prototype.doFilter = function () {
        var _this = this;
        if (!this._listener) {
            return;
        }
        this.result = [];
        this._totalItems = 0;
        this._disableInput = false;
        if (!this.data) {
            var inputData = this._listener.getInput();
            if (inputData instanceof rxjs.Observable) {
                this._disableInput = true;
                ((inputData)).subscribe(function (data) {
                    _this._disableInput = false;
                    _this.onInputData(data);
                    _this.changeRef.detectChanges();
                });
            }
            else {
                this.onInputData((inputData));
            }
        }
        else {
            this.processResult();
        }
    };
    FilterComponent.prototype.onInputData = function (data) {
        this.data = data;
        this.processResult();
    };
    FilterComponent.prototype.processResult = function () {
        this.prefilteredData = this.data.slice();
        if (!this.searchText) {
            if (this._prefilter.length) {
                this.prefilteredData = this.runFilter(this._prefilter);
            }
            this.result = this.prefilteredData;
            this.sendFilterResult();
            return;
        }
        try {
            if (this._prefilter.length) {
                this.prefilteredData = this.runFilter(this._prefilter);
            }
            this.result = this.runFilter(this.searchText);
            this.clearError();
        }
        catch (error) {
            this.showError(error);
        }
        this.sendFilterResult();
    };
    FilterComponent.prototype.runFilter = function (filter) {
        return this.filterService.run(filter, this.prefilteredData, this.config.predicates || [], ((this.config.childrenProp)), this.config.childMustMatch, this.config.ignoreNestedProperties, this.config.propertiesToMatch);
    };
    FilterComponent.prototype.sendFilterResult = function () {
        this._totalItems = this.prefilteredData.length;
        this._foundItems = this.result.length;
        this._listener && this._listener.sendOutput(this.result);
    };
    FilterComponent.prototype.unsubscribeQuickFilter = function () {
        if (this.quickFilterSubscription) {
            this.quickFilterSubscription.unsubscribe();
            this.quickFilterSubscription = undefined;
        }
    };
    FilterComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ra-ui-filter',
                    template: "<div fxLayout=\"column\" fxFlexFill class=\"fix-height\" [raUiTooltip]=\"_tooltipText\" [tooltipConfig]=\"{position: 'Bottom', explicit: true, showDelay: 0, maxWidth: 500}\"><ng-template #tooltip let-text=\"message\"><span class=\"tooltip-highlight\"><ra-ui-static-text style=\"display:inline-block\" [value]=\"_positionText\" [config]=\"{disableTruncate: true, disableTranslate: true, disableAcceleratorKey: true}\"></ra-ui-static-text></span>&nbsp;<ra-ui-static-text style=\"display:inline-block\" [value]=\"text\" [config]=\"{disableTruncate: true, disableTranslate: true, disableAcceleratorKey: true}\"></ra-ui-static-text></ng-template><div fxLayout=\"row\" fxFlexFill fxLayoutAlign=\"start center\" class=\"search-filter-bar fix-height\"><div fxLayout=\"column\" class=\"search-filter-icon\" [class.filter-active]=\"searchText\"><mat-icon class=\"ra-icon-filter\"></mat-icon></div><div *ngIf=\"quickFilter.observers.length; else noQuickFilter\"><ra-ui-button class=\"search-quick-filter-button\" iconName=\"spinner-down\" [raUiTooltip]=\"config.filterText && config.filterText.quickFilterLabel\" [tooltipConfig]=\"{position: 'Bottom'}\" [config]=\"{buttonStyle: 'Icon'}\" (click)=\"_onOpenQuickFilter()\"></ra-ui-button></div><ng-template #noQuickFilter><div class=\"filter-icon-pad\"></div></ng-template><div fxFlex class=\"search-text-container\" [class.search-text-pad]=\"!searchText\"><ra-ui-input [label]=\"_searchLabel\" [ngModel]=\"searchText\" (ngModelChange)=\"_onModelChange($event)\" [config]=\"_inputConfig\" [disabled]=\"_disableInput\" (focusin)=\"_isFocused = true\" (focusout)=\"_isFocused = false\"><span *ngIf=\"searchText\" class=\"ra-ui-input-suffix search-filter-count\">({{_foundItems}}/{{_totalItems}})</span></ra-ui-input></div><div *ngIf=\"searchText\"><ra-ui-button class=\"search-clear-button\" iconName=\"clear\" [raUiTooltip]=\"config.filterText && config.filterText.clearButtonLabel\" [tooltipConfig]=\"{position: 'Bottom'}\" [config]=\"{buttonStyle: 'Icon'}\" (click)=\"_onClearFilterText()\"></ra-ui-button></div></div></div>",
                    styles: ["ra-ui-filter .fix-height{height:52px!important;min-height:52px!important}"],
                    providers: [FilterService, FilterMatchService, FilterErrorMessageFormatService],
                    changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    encapsulation: _angular_core.ViewEncapsulation.None
                },] },
    ];
    FilterComponent.ctorParameters = function () { return [
        { type: _angular_core.ChangeDetectorRef, },
        { type: FilterService, },
        { type: FilterErrorMessageFormatService, },
        { type: _ngxTranslate_core.TranslateService, decorators: [{ type: _angular_core.Optional },] },
        { type: undefined, decorators: [{ type: _angular_core.Inject, args: [_raWebTechUiToolkit_commonUtils.LOGGER,] },] },
    ]; };
    FilterComponent.propDecorators = {
        "config": [{ type: _angular_core.Input },],
        "searchText": [{ type: _angular_core.Input },],
        "listener": [{ type: _angular_core.Input },],
        "prefilter": [{ type: _angular_core.Input },],
        "searchTextChange": [{ type: _angular_core.Output },],
        "quickFilter": [{ type: _angular_core.Output },],
        "_tooltip": [{ type: _angular_core.ViewChild, args: [_raWebTechUiToolkit_commonUtils.TooltipDirective,] },],
    };
    return FilterComponent;
}());

var RaUiFilterModule = (function () {
    function RaUiFilterModule() {
    }
    RaUiFilterModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    declarations: [
                        FilterComponent
                    ],
                    imports: [
                        _angular_common.CommonModule,
                        _raWebTechUiToolkit_commonUtils.RaUiSizeChangeModule,
                        _angular_forms.FormsModule,
                        _angular_material.MatIconModule,
                        _angular_flexLayout.FlexLayoutModule,
                        _raWebTechUiToolkit_commonUtils.RaUiButtonModule,
                        _raWebTechUiToolkit_formSystem.RaUiInputModule,
                        _raWebTechUiToolkit_commonUtils.RaUiTooltipModule,
                        _raWebTechUiToolkit_commonUtils.RaUiStaticTextModule
                    ],
                    exports: [
                        FilterComponent
                    ]
                },] },
    ];
    return RaUiFilterModule;
}());

exports.ActionBarConfig = ActionBarConfig;
exports.ActionBarComponent = ActionBarComponent;
exports.RaUiActionBarModule = RaUiActionBarModule;
exports.ButtonAlignment = ButtonAlignment;
exports.ActionBarButtonConfig = ActionBarButtonConfig;
exports.ActionBarButtonComponent = ActionBarButtonComponent;
exports.CategoryTreeConfig = CategoryTreeConfig;
exports.CategoryTreeComponent = CategoryTreeComponent;
exports.RaUiCategoryTreeModule = RaUiCategoryTreeModule;
exports.NavBarButtonConfig = NavBarButtonConfig;
exports.NavBarConfig = NavBarConfig;
exports.NavBarButtonType = NavBarButtonType;
exports.NavBarComponent = NavBarComponent;
exports.RaUiNavBarModule = RaUiNavBarModule;
exports.isNodeExtOrUndefined = isNodeExtOrUndefined;
exports.RaUiNestedTreeControl = RaUiNestedTreeControl;
exports.TreeConfig = TreeConfig;
exports.TreeComponent = TreeComponent;
exports.TreeNodeComponent = TreeNodeComponent;
exports.TreeService = TreeService;
exports.RaUiTreeModule = RaUiTreeModule;
exports.TreeUtils = TreeUtils;
exports.AboutModel = AboutModel;
exports.AboutPageComponent = AboutPageComponent;
exports.AboutDialogComponent = AboutDialogComponent;
exports.RaUiAboutDialogModule = RaUiAboutDialogModule;
exports.isFilterText = isFilterText;
exports.DEFAULT_FILTER_TEXT = DEFAULT_FILTER_TEXT;
exports.FilterConfig = FilterConfig;
exports.FilterComponent = FilterComponent;
exports.RaUiFilterModule = RaUiFilterModule;
exports.ɵf = BarButtonComponent;
exports.ɵe = BarButtonConfig;
exports.ɵc = ActionBarCenterGroupPipe;
exports.ɵa = ActionBarLeftGroupPipe;
exports.ɵb = ActionBarRightGroupPipe;
exports.ɵk = FilterErrorMessageFormatService;
exports.ɵj = FilterMatchService;
exports.ɵi = FilterService;
exports.ɵh = NavBarButtonComponent;
exports.ɵg = NavBarLogoComponent;
exports.ɵd = TreeDatabase;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=navigation.umd.js.map


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'new-app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _providers_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./providers/shared.service */ "./src/app/providers/shared.service.ts");
/* harmony import */ var _ra_web_tech_ui_toolkit_common_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ra-web-tech-ui-toolkit/common-utils */ "./@ra-web-tech-ui-toolkit-common-utils/bundles/common-utils.umd.js");
/* harmony import */ var _ra_web_tech_ui_toolkit_common_utils__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ra_web_tech_ui_toolkit_common_utils__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ra_web_tech_ui_toolkit_navigation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ra-web-tech-ui-toolkit/navigation */ "./@ra-web-tech-ui-toolkit-navigation/bundles/navigation.umd.js");
/* harmony import */ var _ra_web_tech_ui_toolkit_navigation__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ra_web_tech_ui_toolkit_navigation__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ra_web_tech_ui_toolkit_form_system__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ra-web-tech-ui-toolkit/form-system */ "./@ra-web-tech-ui-toolkit-form-system/bundles/form-system.umd.js");
/* harmony import */ var _ra_web_tech_ui_toolkit_form_system__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_ra_web_tech_ui_toolkit_form_system__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/dialog/dialog.component */ "./src/app/components/dialog/dialog.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








//WBTUI





//Components




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_13__["DialogComponent"],
                _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_14__["MenuComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTreeModule"],
                _ra_web_tech_ui_toolkit_common_utils__WEBPACK_IMPORTED_MODULE_8__["RaUiStaticTextModule"],
                _ra_web_tech_ui_toolkit_navigation__WEBPACK_IMPORTED_MODULE_9__["RaUiTreeModule"],
                _ra_web_tech_ui_toolkit_form_system__WEBPACK_IMPORTED_MODULE_10__["RaUiInputModule"],
                _ra_web_tech_ui_toolkit_form_system__WEBPACK_IMPORTED_MODULE_10__["RaUiFormModule"],
                _ra_web_tech_ui_toolkit_common_utils__WEBPACK_IMPORTED_MODULE_8__["RaUiButtonModule"],
                _ra_web_tech_ui_toolkit_common_utils__WEBPACK_IMPORTED_MODULE_8__["RaUiStaticTextModule"]
            ],
            exports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTreeModule"]
            ],
            providers: [_providers_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/dialog/dialog.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/dialog/dialog.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"over\"  *ngIf=\"show\">\n  <div class=\"pop connected\">\n    <mat-radio-group class=\"example-radio-group\" class=\"group\" [(ngModel)]=\"controller\">\n      <mat-radio-button class=\"example-radio-button\" [checked]=\"item === controller\" *ngFor=\"let item of list\" [value]=\"item\"  (click)=\"choose(item); \">\n        {{item}}\n      </mat-radio-button>\n    </mat-radio-group>\n    <p *ngIf=\"list.length == 0\">No active controllers!</p>\n    <p>{{newMess}}</p>\n    <button mat-raised-button color=\"primary\" class=\"first-btn\" (click)=\"closeModal1()\">close</button>\n  </div>\n</div>\n<div class=\"over\"  *ngIf=\"showConnect\">\n  <div class=\"pop connected\">\n    <p class=\"header\">Successfully connected!</p>\n    <div class=\"groupDiv\">\n      <p class=\"info\">Project Name:</p>\n      <p class=\"main-info\">{{message.ProjectName}}</p>\n    </div>\n    <div class=\"groupDiv\">\n      <p class=\"info\">Type of Processos:</p>\n      <p class=\"main-info\">{{message.ProcessorType}}</p>\n    </div>\n    <div class=\"groupDiv\">\n      <p class=\"info\">Description of ProcessorType:</p>\n      <p class=\"main-info\">{{message.ProcessorTypeDescription}}</p>\n    </div>\n    <button mat-raised-button color=\"primary\" (click)=\"closeModal2()\">close</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/dialog/dialog.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/dialog/dialog.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  text-align: center;\n  margin: 0; }\n\ndiv.over {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.5);\n  color: white;\n  font-size: 28px; }\n\n.pop {\n  min-height: 100px;\n  background: white;\n  color: black;\n  border-radius: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 30px; }\n\n.group {\n  display: flex;\n  flex-direction: column; }\n\n.connected {\n  display: flex;\n  flex-direction: column; }\n\nbutton {\n  height: 40px; }\n\n.first-btn {\n  margin-top: 20px; }\n\n.info {\n  font-size: 14px; }\n\n.groupDiv {\n  margin-bottom: 20px; }\n\n.main-info {\n  font-size: 20px;\n  text-decoration: underline; }\n\n.header {\n  margin-bottom: 20px;\n  color: #28a745; }\n"

/***/ }),

/***/ "./src/app/components/dialog/dialog.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/dialog/dialog.component.ts ***!
  \*******************************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../providers/shared.service */ "./src/app/providers/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DialogComponent = /** @class */ (function () {
    function DialogComponent(shared, cdRef) {
        var _this = this;
        this.shared = shared;
        this.cdRef = cdRef;
        this.show = false;
        this.showConnect = false;
        this.list = [];
        this.error = [];
        this.shared.bSubject.subscribe(function (value) {
            if (value) {
                if (value === 'error') {
                    _this.error = ['Something went wrong!'];
                    _this.show = true;
                    _this.cdRef.detectChanges();
                }
                else {
                    console.log('SSSSSS', value);
                    console.log();
                    _this.list = value;
                    _this.show = true;
                    _this.cdRef.detectChanges();
                }
            }
            _this.shared.connectAPI().subscribe(function (d) {
                console.log('DATA', d);
                _this.newMess = d;
                _this.cdRef.detectChanges();
            });
        }, function (error) { console.log(error.message); });
    }
    DialogComponent.prototype.ngOnInit = function () {
    };
    DialogComponent.prototype.choose = function (item) {
        var _this = this;
        console.log(this.list);
        this.controller = item;
        this.cdRef.detectChanges();
        var body = {};
        body["Name"] = item;
        this.shared.chooseVersionsofControllers(body).subscribe(function (data) {
            _this.message = data;
            _this.cdRef.detectChanges();
            _this.showConnect = true;
        }, function (error) { console.log('SSSSS', error); });
        setTimeout(function () {
            _this.show = false;
            _this.cdRef.detectChanges();
        }, 500);
    };
    DialogComponent.prototype.closeModal1 = function () {
        this.show = false;
        this.cdRef.detectChanges();
    };
    DialogComponent.prototype.closeModal2 = function () {
        this.showConnect = false;
        this.cdRef.detectChanges();
    };
    DialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dialog',
            template: __webpack_require__(/*! ./dialog.component.html */ "./src/app/components/dialog/dialog.component.html"),
            styles: [__webpack_require__(/*! ./dialog.component.scss */ "./src/app/components/dialog/dialog.component.scss")]
        }),
        __metadata("design:paramtypes", [_providers_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], DialogComponent);
    return DialogComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\n<section>\n  <mat-tab-group>\n      <mat-tab label=\"Model\"> \n        <div class=\"wrap\">\n            <div class=\"container-tree\">\n                <div class=\"panel\">  \n                  <ra-ui-button [disabled]=\"!selectedNode || !newNodeForm.valid\"\n                                [config]=\"{buttonType: 'submit', buttonStyle: 'Raised'}\"\n                                color=\"primary\"\n                                label=\"Add Child Node\">\n                  </ra-ui-button>\n                  <ra-ui-form [formGroup]=\"newNodeForm\" (submit)=\"onAddNewNode()\">\n                      <ra-ui-input formControlName=\"label\"></ra-ui-input>&nbsp;\n                      <ra-ui-button [disabled]=\"!selectedNode || !newNodeForm.valid\"\n                                    [config]=\"{buttonType: 'submit', buttonStyle: 'Raised'}\"\n                                    color=\"primary\"\n                                    label=\"Add Child Node\">\n                      </ra-ui-button>\n                  </ra-ui-form>\n                </div>\n                <ra-ui-tree [(tree)]=\"treeModel\" (treeNodeSelected)=\"onTreeNodeSelected($event)\" (treeInitialized)=\"onTreeInitialized($event)\"></ra-ui-tree>\n              </div>\n            <div class=\"container\" >\n              <!-- <app-tableofvalues></app-tableofvalues> -->\n            <!-- <h1 class=\"title\">\n              Choose Versions of Controller!\n            </h1> -->\n            </div>\n        </div>\n      </mat-tab>\n      <mat-tab label=\"Smart Tag\" >\n        <div class=\"smart\">\n        </div>\n      </mat-tab>\n    </mat-tab-group>\n</section>\n\n\n<app-dialog class=\"dialog\"><app-dialog>\n\n<!-- <context-menu #basicMenu>\n<ng-template contextMenuItem (execute)=\"customAddNewItem($event)\">\n  <i  class=\"material-icons\">add_circle</i>\n  <span class=\"line\"></span>\n  <span>Add new item!</span>\n</ng-template>\n</context-menu>\n\n<context-menu #deleteMenu>\n<ng-template contextMenuItem (execute)=\"removeItem($event)\">\n  <i  class=\"material-icons\">delete</i>\n  <span class=\"line\"></span>\n  <span>Delete item!</span>\n</ng-template>\n</context-menu> -->\n\n\n\n\n\n<!-- <div class=\"container\">\n<h1 class=\"title\">\n  Choose Versions of Controller!\n</h1>\n</div>\n\n<app-dialog class=\"dialog\"><app-dialog> -->"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\nsection .wrap {\n  display: flex;\n  min-height: calc(100vh - 85px); }\nsection .wrap .container {\n    width: -webkit-fill-available;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    /* pour anciens Chrome et Safari */\n    background-size: cover;\n    /* version standardisée */ }\nsection .wrap .container .title {\n      color: white;\n      margin: 0;\n      padding: 50px 20px;\n      text-align: center; }\nsection .wrap .container .mat-tree {\n      background: #eaeaea !important; }\nsection .wrap .container-tree {\n    width: 400px;\n    height: 100%;\n    overflow-y: auto;\n    background: #eaeaea;\n    flex-shrink: 0;\n    min-height: calc(100vh - 85px);\n    max-height: calc(100vh - 85px); }\n.smart {\n  min-height: calc(100vh - 85px);\n  background: #eaeaea; }\n.dialog {\n  position: absolute;\n  top: 0;\n  z-index: 1; }\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ra_web_tech_ui_toolkit_form_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ra-web-tech-ui-toolkit/form-system */ "./@ra-web-tech-ui-toolkit-form-system/bundles/form-system.umd.js");
/* harmony import */ var _ra_web_tech_ui_toolkit_form_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ra_web_tech_ui_toolkit_form_system__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.treeModel = [{
                label: 'Shop',
                children: [{
                        label: 'Books',
                        children: [{
                                label: 'Sale',
                                children: [{
                                        label: 'Paperbacks'
                                    }]
                            }, {
                                label: 'Fiction'
                            }, {
                                label: 'Nonfiction'
                            }]
                    }, {
                        label: 'Hardware',
                        children: [{
                                label: 'Desktops'
                            }, {
                                label: 'Notebooks'
                            }]
                    }]
            },
            {
                label: 'Coffe',
                children: [{
                        label: 'Books',
                        children: [{
                                label: 'Sale',
                                children: [{
                                        label: 'Paperbacks'
                                    }]
                            }, {
                                label: 'Fiction'
                            }, {
                                label: 'Nonfiction'
                            }]
                    }, {
                        label: 'Hardware',
                        children: [{
                                label: 'Desktops'
                            }, {
                                label: 'Notebooks'
                            }]
                    }]
            }
        ];
        this.items = [
            { name: 'John', otherProperty: 'Foo' },
            { name: 'Joe', otherProperty: 'Bar' }
        ];
        this.result = [];
        this.newNodeForm = new _ra_web_tech_ui_toolkit_form_system__WEBPACK_IMPORTED_MODULE_2__["RaUiFormGroup"]({
            label: new _ra_web_tech_ui_toolkit_form_system__WEBPACK_IMPORTED_MODULE_2__["RaUiFormControl"]('New Node', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    HomeComponent.prototype.onTreeInitialized = function (treeControl) {
        this.treeControlRa = treeControl;
    };
    HomeComponent.prototype.onTreeNodeSelected = function (event) {
        this.selectedNode = event.value ? event.node : undefined;
    };
    HomeComponent.prototype.onAddNewNode = function () {
        var newNode = {
            label: this.newNodeForm.value.label,
            myProperty: this.newNodeForm.value.label,
            children: []
        };
        this.selectedNode && this.treeControlRa.addChildren(this.selectedNode, [newNode]);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/menu/menu.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/menu/menu.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n  <button mat-raised-button color=\"primary\" (click)=\"onConnect()\" >Connect</button>\n  <button mat-raised-button color=\"primary\">Setting</button>\n</nav>"

/***/ }),

/***/ "./src/app/components/menu/menu.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/menu/menu.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  background: #666; }\n\n.mat-raised-button:not([class*=mat-elevation-z]) {\n  box-shadow: unset; }\n"

/***/ }),

/***/ "./src/app/components/menu/menu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../providers/shared.service */ "./src/app/providers/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = /** @class */ (function () {
    function MenuComponent(shared) {
        this.shared = shared;
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.onConnect = function () {
        var _this = this;
        this.shared.connectVersionsofControllers().subscribe(function (data) {
            console.log(data);
            _this.shared.bSubject.next(data);
        }, function (error) {
            _this.shared.bSubject.next('error');
        });
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/components/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/components/menu/menu.component.scss")]
        }),
        __metadata("design:paramtypes", [_providers_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/providers/shared.service.ts":
/*!*********************************************!*\
  !*** ./src/app/providers/shared.service.ts ***!
  \*********************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SharedService = /** @class */ (function () {
    function SharedService(http) {
        this.http = http;
        this.bSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        // API_URL = 'http://localhost:52954/api/connect';
        this.API_URL = 'http://localhost:8080/api';
    }
    SharedService.prototype.connectVersionsofControllers = function () {
        // return this.http.get('/api/connect').pipe(map(data => data));  //debug
        console.log(this.API_URL);
        return this.http.get(this.API_URL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data; })); //production
    };
    SharedService.prototype.connectAPI = function () {
        return this.http.get('http://localhost:8080/api', { responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data; })); //production
    };
    SharedService.prototype.chooseVersionsofControllers = function (body) {
        // return this.http.post('/api/connect' , body); //debug
        return this.http.post(this.API_URL, body); //production
    };
    SharedService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\taras\Desktop\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map