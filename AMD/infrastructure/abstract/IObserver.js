/**
*具有观察者行为的接口
*create by liujian
*/
define(["dojo/_base/declare", "dojo/_base/lang"], function(declare, lang) {
    return declare("interfaces.IObserver", null, {
        constructor: function(args) {
            //            lang.mixin(this, args);
        },
        update: function() {
            //观察者中的更新操作。
        },
        /*重写toString方法*/
        toString: function() {
            return "this is IObserver";
        }
    });
});