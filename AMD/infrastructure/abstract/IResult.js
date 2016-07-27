/**
*结果接口
*create by liujian
*/
define(["dojo/_base/declare", "dojo/_base/lang"], function (declare, lang) {
    return declare("interface.IResult", null, {
        contructor: function (args) {
            lang.mixin(this, args);
        },
        show: function (res) {
            //显示结果
        },
        /*重写toString方法*/
        toString: function () {
            return "this is iresult";
        }
    });
});