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
/* harmony import */ var _ra_web_tech_ui_toolkit_common_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ra-web-tech-ui-toolkit-common-utils */ "./@ra-web-tech-ui-toolkit-common-utils/bundles/common-utils.umd.js");
/* harmony import */ var _ra_web_tech_ui_toolkit_common_utils__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ra_web_tech_ui_toolkit_common_utils__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/dialog/dialog.component */ "./src/app/components/dialog/dialog.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








//WBTUI
// import { RaUiStaticTextModule } from '@ra-web-tech-ui-toolkit/common-utils';
// import { RaUiTreeModule } from '@ra-web-tech-ui-toolkit/navigation';
// import { RaUiInputModule } from '@ra-web-tech-ui-toolkit/form-system';
// import { RaUiFormModule } from '@ra-web-tech-ui-toolkit/form-system';
// import { RaUiButtonModule } from '@ra-web-tech-ui-toolkit/common-utils';

//Components




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DialogComponent"],
                _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_12__["MenuComponent"]
            ],
            imports: [
                // RaUiStaticTextModule,
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
                // RaUiStaticTextModule,
                // RaUiTreeModule,
                // RaUiInputModule,
                // RaUiFormModule,
                _ra_web_tech_ui_toolkit_common_utils__WEBPACK_IMPORTED_MODULE_8__["RaUiButtonModule"]
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
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
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

module.exports = "<div class=\"over\"  *ngIf=\"show\">\n  <div class=\"pop connected\">\n    <mat-radio-group class=\"example-radio-group\" class=\"group\" [(ngModel)]=\"controller\">\n      <mat-radio-button class=\"example-radio-button\" [checked]=\"item === controller\" *ngFor=\"let item of list\" [value]=\"item\"  (click)=\"choose(item); \">\n        {{item}}\n      </mat-radio-button>\n    </mat-radio-group>\n    <p *ngIf=\"list.length == 0\">No active controllers!</p>\n    <button mat-raised-button color=\"primary\" class=\"first-btn\" (click)=\"closeModal1()\">close</button>\n  </div>\n</div>\n<div class=\"over\"  *ngIf=\"showConnect\">\n  <div class=\"pop connected\">\n    <p class=\"header\">Successfully connected!</p>\n    <div class=\"groupDiv\">\n      <p class=\"info\">Project Name:</p>\n      <p class=\"main-info\">{{message.ProjectName}}</p>\n    </div>\n    <div class=\"groupDiv\">\n      <p class=\"info\">Type of Processos:</p>\n      <p class=\"main-info\">{{message.ProcessorType}}</p>\n    </div>\n    <div class=\"groupDiv\">\n      <p class=\"info\">Description of ProcessorType:</p>\n      <p class=\"main-info\">{{message.ProcessorTypeDescription}}</p>\n    </div>\n    <button mat-raised-button color=\"primary\" (click)=\"closeModal2()\">close</button>\n  </div>\n</div>\n"

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
                    _this.list = value;
                    _this.show = true;
                    _this.cdRef.detectChanges();
                }
            }
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

module.exports = "<app-menu></app-menu>\n<section>\n  <mat-tab-group>\n      <mat-tab label=\"Model\"> \n        <div class=\"wrap\">\n            <div class=\"container-tree\">\n                <div class=\"panel\">  \n                  <ra-ui-button [disabled]=\"!selectedNode || !newNodeForm.valid\"\n                                [config]=\"{buttonType: 'submit', buttonStyle: 'Raised'}\"\n                                color=\"primary\"\n                                label=\"Add Child Node\">\n                  </ra-ui-button>\n                  <!-- <ra-ui-form [formGroup]=\"newNodeForm\" (submit)=\"onAddNewNode()\">\n                      <ra-ui-input formControlName=\"label\"></ra-ui-input>&nbsp;\n                      <ra-ui-button [disabled]=\"!selectedNode || !newNodeForm.valid\"\n                                    [config]=\"{buttonType: 'submit', buttonStyle: 'Raised'}\"\n                                    color=\"primary\"\n                                    label=\"Add Child Node\">\n                      </ra-ui-button>\n                  </ra-ui-form> -->\n                </div>\n                <!-- <ra-ui-tree [(tree)]=\"treeModel\" (treeNodeSelected)=\"onTreeNodeSelected($event)\" (treeInitialized)=\"onTreeInitialized($event)\"></ra-ui-tree> -->\n              </div>\n            <div class=\"container\" >\n              <!-- <app-tableofvalues></app-tableofvalues> -->\n            <!-- <h1 class=\"title\">\n              Choose Versions of Controller!\n            </h1> -->\n            </div>\n        </div>\n      </mat-tab>\n      <mat-tab label=\"Smart Tag\" >\n        <div class=\"smart\">\n        </div>\n      </mat-tab>\n    </mat-tab-group>\n</section>\n\n\n<app-dialog class=\"dialog\"><app-dialog>\n\n<!-- <context-menu #basicMenu>\n<ng-template contextMenuItem (execute)=\"customAddNewItem($event)\">\n  <i  class=\"material-icons\">add_circle</i>\n  <span class=\"line\"></span>\n  <span>Add new item!</span>\n</ng-template>\n</context-menu>\n\n<context-menu #deleteMenu>\n<ng-template contextMenuItem (execute)=\"removeItem($event)\">\n  <i  class=\"material-icons\">delete</i>\n  <span class=\"line\"></span>\n  <span>Delete item!</span>\n</ng-template>\n</context-menu> -->\n\n\n\n\n\n<!-- <div class=\"container\">\n<h1 class=\"title\">\n  Choose Versions of Controller!\n</h1>\n</div>\n\n<app-dialog class=\"dialog\"><app-dialog> -->"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { Nullable } from '@ra-web-tech-ui-toolkit-common-utils';
// import { TreeComponent, RaUiNestedTreeControl, ITreeNodeState, ITreeNode } from '@ra-web-tech-ui-toolkit-navigation';
// import { RaUiFormGroup, RaUiFormControl } from '@ra-web-tech-ui-toolkit-form-system';
var HomeComponent = /** @class */ (function () {
    // treeModel = [{
    //   label: 'Shop',
    //   children: [{
    //     label: 'Books',
    //     children: [{
    //       label: 'Sale',
    //       children: [{
    //         label: 'Paperbacks'
    //       }]
    //     }, {
    //       label: 'Fiction'
    //     }, {
    //       label: 'Nonfiction'
    //     }]
    //   }, {
    //     label: 'Hardware',
    //     children: [{
    //       label: 'Desktops'
    //     }, {
    //       label: 'Notebooks'
    //     }]
    //   }]
    // },
    // {
    //   label: 'Coffe',
    //   children: [{
    //     label: 'Books',
    //     children: [{
    //       label: 'Sale',
    //       children: [{
    //         label: 'Paperbacks'
    //       }]
    //     }, {
    //       label: 'Fiction'
    //     }, {
    //       label: 'Nonfiction'
    //     }]
    //   }, {
    //     label: 'Hardware',
    //     children: [{
    //       label: 'Desktops'
    //     }, {
    //       label: 'Notebooks'
    //     }]
    //   }]
    // }
    // ];
    // selectedNode: Nullable<ITreeNode>;
    // treeControlRa: RaUiNestedTreeControl;
    // public items = [
    //   { name: 'John', otherProperty: 'Foo' },
    //   { name: 'Joe', otherProperty: 'Bar' }
    // ];
    // result = [];
    function HomeComponent() {
    }
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
        this.API_URL = 'http://localhost:52954/api/connect';
    }
    SharedService.prototype.connectVersionsofControllers = function () {
        // return this.http.get('/api/connect').pipe(map(data => data));  //debug
        console.log(this.API_URL);
        return this.http.get(this.API_URL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data; })); //production
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

module.exports = __webpack_require__(/*! C:\Users\taras\Desktop\Prototype\WindowsFormWithWeb\WindowsFormWithWeb\NodejsWebApp\new-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map