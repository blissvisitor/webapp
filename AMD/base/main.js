require.config({
    baseUrl: "AMD",
    paths: {
        "jquery": "base/jquery.1.10", //因为jquery2.0不支持IE8 此处使用1.X版本
        "init": "base/init", //初始化
        "appContext": "script/common/appContext" //初始化参数
    },
    shim: { //用于加载不符合AMD规范的JS文件
        //deps：依赖的文件 exports：输入文件名
        //     "layerShow": {
        //         deps: ["jquery"],
        //         exports: "layerShow"
        //     },
        //     "layPage": {
        //         deps: ["jquery"],
        //         exports: "layPage"
        //     },
        //     "layDate": {
        //         deps: "jquery",
        //         exports: "layDate"
        //     }
    }
});
require(["jquery", "init"], function($, init) {
    console.log("init loaded " + new Date());
    init.init();


});
// layui.config({
//   // dir: '/layui/' //layui.js 所在路径（注意，如果是script单独引入layui.js，无需设定该参数。），一般情况下可以无视
//   //     ,
//   version: false //一般用于更新组件缓存，默认不开启。设为true即让浏览器不缓存。也可以设为一个固定的值，如：201610
//       ,
//   debug: false //用于开启调试模式，默认false，如果设为true，则JS模块的节点会保留在页面
//       ,
//   base: '' //设定扩展的Layui组件的所在目录，一般用于外部组件扩展
// });
layui.all(function() {
    var layer = layui.layer,//弹出框
        laytpl = layui.laytpl,
        laypage = layui.laypage,//分页
        laydate = layui.data;//日期控件
        layedit=layui.layedit;
        // 页面中有许多元素需要自动去完成一些处理，譬如导航菜单的小滑块、
        // Tab的切换等操作，他们往往不需要去单独调用一个方法来开启一项功能，而页面上恰恰有太多这样的小交互，
        // 所以我们统一归类为element组件。跟表单一样，基于元素属性和事件驱动的接口书写方式。
        layElement=layui.element();
});
