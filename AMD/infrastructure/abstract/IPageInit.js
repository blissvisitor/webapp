/**
*页面初始化接口
*create by liujian
*/
define(["dojo/_base/declare", "dojo/_base/lang"], function (declare, lang) {
    return declare("interface.IPageInit", null, {
        constructor: function (args) {
            lang.mixin(this, args);
        },
        //订阅相关topic
        subListener: function () {
            //页面初始化时，需要添加的事件订阅。

        },

        //初始化页面
        start: function () {
            //var t = this;
            //t.subListener();//执行监听订阅

        },

        //初始化前台功能
        initFuncs: function () {

            //require(["dojo/topic"],
            //    function (topic) {
            //        /*********************************
            //        *此处来初始化前台功能实例
            //        */
            //        var a = appContext;


            //        //此处勿删，初始化功能之后，发布启动系统的消息
            //        console.log("step2：sys/init" + "   time  " + new Date().getMinutes() + ":" + new Date().getSeconds());
            //        topic.publish("sys/init",
            //            {
            //                name: "sys/init",
            //                data: {}
            //            });

            //    });
        }


    });
});