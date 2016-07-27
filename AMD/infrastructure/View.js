/**
*功能的面板界面类
*该类对相应功能的界面控制
*create by liujian
*/
define(["dojo/_base/declare", "dojo/_base/lang", "dojo/dom", "dojo/dom-style",
"./static/UIController"],
function (declare, lang, dom, domStyle, UIController) {
    return declare("interface.View", null, {
        constructor: function (args) {
            lang.mixin(this, args);
        },
        //初始高度
        initHeight: 0,
        //初始宽度
        initWidth: 0,
        //对应容器dom的id
        cDomId: "",
        //对应dom的id
        domId: "",
        //显示功能界面的buttonId
        buttonId: "",
        //可视化状态
        visible: false,
        //面板模板html
        _template: '',

        subListener: function () { },
        show: function () { },
        //设置左侧栏的当前功能面板对象
        setLeftBarView: function (/*View类的一个实例*/view) {
            UIController.setLeftBarView(view);
            UIController.setDragBarLeft(view.initWidth);
        },

        toString: function () {
            return "this is View";
        }

    });
});