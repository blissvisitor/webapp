/**
*功能模块接口
*可以通过调用实现该接口的execute方法，来启动功能模块
*create by liujian
*/
define(["dojo/_base/declare", "dojo/_base/lang"],
function(declare, lang) {
    return declare("interface.IBusinessLogic", null, {
        constructor: function(args) {
            lang.mixin(this, args);
        },
        execute: function() {
            //用来执行的方法
        },
        unexecute: function() {
            //用来卸载的方法
        },
        /*重写toString方法*/
        toString: function() {
            return "this is IBusinessLogic";
        }
    });
});