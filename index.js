/**
 * Created by lanccj on 16/12/16.
 */
'use strict';

var ReactNative = require('react-native');
var {
    NativeModules
} = ReactNative;

var RCTCJUtils= NativeModules.CJUtilsModule;


var index = {};

index.addWaterMark = function (orignBase64,waterMark) {
    console.log('我在发起调用原生方法');
    RCTCJUtils.addWaterMark(orignBase64,waterMark);
};

module.exports = index;