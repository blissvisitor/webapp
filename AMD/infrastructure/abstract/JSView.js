// 创建人：刘健
// 日期：2014-3-12
// 功能描述：
//      前台功能模块的视图基类
//      定义及描述了前台功能模块视图该有的属性及行为，以及初始化参考
define(["dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/dom",
    "dojo/dom-style"
], function (declare, lang, dom, domStyle) {
    return declare("interface.abstract.spatialQueryNewView", null, {
        constructor: function (args) {
            lang.mixin(this, args);
        },

        // ============必须具有的属性 start============================
        // initHeight:初始高度
        initHeight: 0,

        // initWidth:初始宽度
        initWidth: 0,

        // cDomId:对应容器dom的id
        cDomId: "",

        // domId:对应dom的id
        domId: "",

        // buttonId:显示功能界面的buttonId
        buttonId: "",

        //_template:面板模板html
        _template:"",
        // ============必须具有的属性 end============================

        // 该视图特有的属性 start======================================


        // 该视图特有的属性 end========================================



        // ============必须具备的方法 start============================
        getHTML: function () {
            // summary:
            //      获取该面板的Html模板内容
            //      return string

            // demo:
            //      var t = this;
            //      var d = dom.byId(t.cDomId);
            //      if (!d) {
            //          console.log(t.cDomId + "不存在");
            //          return '';
            //      }
            //      return t._template;
            var t = this;
            var d = dom.byId(t.cDomId);
            if (!d) {
                console.log(t.cDomId + "不存在");
                return '';
            }
            return t._template;
        },

        toString: function () {
            // summary:
            //      输出该类的toString
            // return string

            // demo:
            //      return "this is _View";
            spatialQuerynew:
                return "this id spatialQueryNewView";
        }
        // ============必须具备的方法 end==============================


        // 该功能特有的方法 start======================================


        // 该功能特有的方法 end========================================

    });
});