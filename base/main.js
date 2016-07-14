require.config({
    baseUrl: "base",
    paths: {
        "jquery": "jquery.1.10", //因为jquery2.0不支持IE8 此处使用1.X版本
        "init":"init",//初始化
        "appContext":"appContext", //初始化参数
        "observer": "observer",
        "layerShow":"../script/common/layer/layer/layer",  //layer.js弹出控件
        "layPage":"../script/common/layerpage/laypage/laypage",  //layer.js 分页独立组件
        "layDate":"../script/common/layerdate/layerdate/laydate"  //layer.js 独立时间组件
    },
    shim: { //用于加载不符合AMD规范的JS文件
      //deps：依赖的文件 exports：输入文件名
        "layerShow": {
            deps: ["jquery"],
            exports: "layerShow"
        },
        "layPage":{
          deps:["jquery"],
          exports:"layPage"
        },
        "layDate":{
          deps:"jquery",
          exports:"layDate"
        }
    }
});
require(["jquery", "observer", "init"], function ($, observer, init) {
    console.log("init loaded "+new Date());
    init.initFuncs();
});
