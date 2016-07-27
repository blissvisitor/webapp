/**
*可查询接口
*实接口的实现可以生成其对应的查询地址中的对应参数
*create by liujian
*/
define(["dojo/_base/declare", "dojo/_base/lang"], function(declare, lang) {
    return declare("interface.ISearchable", null, {
        constructor: function(args) {
            lang.mixin(this, args);
        },
        /*设置该接口的实现对应的组成查询url的参数部分*/
        setParam4Url: function(name, value, field) {
        },
        /*
        *生成该接口的实现对应的组成查询url的参数部分
        *return [field,value] eg:1、['where','"所在区" like '%一区%'']
        *2、['limit','10']
        */
        getParam4Url: function() {

        },

        /*重写toString方法*/
        toString: function() {
            return "this is isearchable";
        }

    });
});