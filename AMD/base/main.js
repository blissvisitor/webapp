require.config({
    baseUrl: "AMD",
    paths: {
        "jquery": "base/jquery.1.10", //因为jquery2.0不支持IE8 此处使用1.X版本
        "init": "base/init", //初始化
        "appContext": "script/common/appContext", //初始化参数
        "observer": "script/commom/observer",
        "layerShow":"base/layer/layer", //layer.js弹出控件
        "layPage": "base/layerpage/laypage/laypage", //layer.js 分页独立组件
        "layDate": "base/layerdate/layerdate/laydate" //layer.js 独立时间组件
    },
    shim: { //用于加载不符合AMD规范的JS文件
        //deps：依赖的文件 exports：输入文件名
        "layerShow": {
            deps: ["jquery"],
            exports: "layerShow"
        },
        "layPage": {
            deps: ["jquery"],
            exports: "layPage"
        },
        "layDate": {
            deps: "jquery",
            exports: "layDate"
        }
    }
});
require(["jquery", "observer", "init", "layerShow"], function($, observer, init, layer) {
    console.log("init loaded " + new Date());
    init.initFuncs();
    layer.config({//引入layer需要的组件
    path: 'AMD/base/layer/' //layer.js所在的目录，可以是绝对目录，也可以是相对目录
    });
});
