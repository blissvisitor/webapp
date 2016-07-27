/*
*视图界面接口
*/
define(["dojo/_base/declare", "dojo/_base/lang"], function(declare, lang) {
    return declare("interface.IView", null, {
        constructor: function(args) {
            lang.mixin(this, args);
        },
        //获取界面html内容
        getHtml: function() {
            return "";
        }


    });
});