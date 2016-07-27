// 创建人：刘健
// 日期：2014-3-12
// 功能描述：
//      前台功能模块的基类
//      定义及描述了前台功能模块该有的属性及行为，以及初始化参考
define(["dojo/_base/declare", "dojo/_base/lang"],
    function (declare, lang) {
        return declare("JSModule", null, {
            constructor: function (args) {
                lang.mixin(this, args);
            },


            // ============必须具有的属性 start============================
            // isShowOnInit: 是否在初始化系统时显示
            isShowOnInit: false,

            // view: 模块的界面类，View类的实例
            view: null,
            // ============必须具有的属性 end============================



            // 该功能特有的属性 start======================================


            // 该功能特有的属性 end========================================


            // ============必须具备的方法 start============================
            load: function () {
                // summary:
                //      此处用来实现模块的加载，初始化模块的必要资源
                //      return null

                // demo:
                //      var t = this;
                //      t.init();
                //      if(t.isShowOnInit==true){
                //          t.show();
                //      }
                spatialQuerynew:
                    var t = this;
                    t.init();
                    if(t.isShowOnInit==true)
                    {
                        t.show();
                    }
            },
            unLoad: function () { },
            toString: function () { },
            // ============必须具备的方法 end==============================


            // ============常用的方法 start================================

            init: function () {
                // summary:
                //      此处用来初始化相应资源
                //      return null

                // demo:
                //      var t = this;
                //      t.view = new View({
                //          initWidth: 350,
                //          initHeight: 545,
                //          cDomId: "_center_left_info",
                //          buttonId: "layerManager"
                //      });
                //      t.subListener();
                    var t = this;
                    t.view = new view({
                        initWidth: 350,
                        initHeigth: 545,
                        cDomId: "_center_left_info",
                        buttonId: "multQuery"
                    });
                    t.subListener();
            },

            subListener: function () {
                // summary:
                //      此处用来加载模块时，订阅相关的系统或者功能事件
                //

            },

            bindFireShow: function () {
                // summary:
                //      此处用来设置功能在主界面上入口的绑定
                //      return null

                // demo:
                //      var t = this;
                //      on(dom.byId(t.view.cDomId),"click",lang.hitch(t,t.show));
                var t = this;
                on(dom.byId(t.view.cDomId), "click", lang.hitch(t, t.show));

            },
            show: function () {
                // summary:
                //      将功能模块可视化时通常分两步并行
                //      一、生成界面的Dom结构
                //      二、给功能界面的容器绑定事件处理，
                //          该功能面板内的所有事件，都绑定在容器中
                //      return null

                //  demo:
                //      var t = this;
                //      setTimeout(lang.hitch(t, t.makeMainDom), 50);
                //      setTimeout(lang.hitch(t, t.bindMainDomEvent), 50);
                    var t = this;
                    setTimeout(lang.hitch(t, t.makeMainDom), 50);
                    setTimeout(lang.hitch(t, t.bindMainDomEvent), 50);

            },
            makeMainDom: function () { },
            bindMainDomEvent: function () {
                // summary:
                //      给容器绑定事件处理方法，容器内部的所有子节点的事件，都通过容器来处理。
                //      考虑到在功能模块切换时，可能会有多个模块的界面注入到同一个Dom容器中，
                //      所以借助UIControll类来控制切换当前的View，以及对应容器的事件绑定
                //      return null

                // demo:
                //      var t = this;
                //      var handler = lang.hitch(t,t.mainDomClickHandler);//附带this模块域
                //      UIController.setCurrentView(t.view,cDomId,"click",handler);
                    vart = this;
                var handler = lang.hitch(t, t.mainDomClickHandler);
                UIController.setCurrentView(t.view, cDomId, "click", handler);
            },

            mainDomClickHandler: function (e) {
                // summary:
                //      处理功能容器绑定的click事件，内部所有子节点的click都通过该方法实现
                //      e:事件回传参数
                //      return null

            }

            // ============常用的方法 end=================================

            // 该功能特有的方法 start======================================


            // 该功能特有的方法 end========================================

        });/* end declare() JSModule */


    });/* end define() */