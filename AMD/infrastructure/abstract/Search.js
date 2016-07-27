/**
* 查询，抽象类
* 包含url,result接口的实现
*/
define(["dojo/_base/declare", "dojo/_base/lang", "dojo/io/script", "dojo/request",
"dojo/json"],
function (declare, lang, script, request, JSON) {
    return declare("abstractClass.Search", null, {
        constructor: function (args) {
            //            lang.mixin(this, args);
        },

        /**
        * 请求地址，根据实现Search类的不同，类型也不一样
        * 1、域内请求：（注：data属性只对POST请求有效）
        * 1）单个请求时为对象。{query:{沿袭dojo.request.get方法中query参数的写法},data:{}}
        * 2）并发请求时为对象的数组。[{query:{沿袭dojo.request.get方法中query参数的写法},data:{}},{}]
        *
        * 2、proxy代理请求：（注：data属性只对POST请求有效）
        * 1)单个请求时为对象。{proxyUrl:'被代理的地址',query:{对应dojo的request，baseoption的写法}}
        * 2)并发请求时为对象的数组.[{proxyUrl:'被代理的地址',query:{对应dojo的request，baseoption的写法},data:{提交的数据}},
        * {proxyUrl:'被代理的地址',query:{对应dojo的request，baseoption的写法},data:{提交的数据}}]
        * 
        * 3、跨域请求：
        * 1）单个请求时为对象。{url:'请求地址',query:{沿袭dojo.request.get方法中query参数的写法}}
        * 2）并发请求时为对象的数组。[{url:'请求地址',query:{沿袭dojo.request.get方法中query参数的写法}},{}]
        * 
        */
        url: null,

        //result接口
        result: null,

        //开始查询
        startQuery: function () {

        },

        /*重写toString方法*/
        toString: function () {
            return "this is Search";
        }
    });

});