/*
*用来处理主界面控制的类
**/
define(["dojo/dom", "dojo/dom-style", "dojo/topic", "dojo/_base/lang", "dojo/on"],
    function (dom, domStyle, topic, lang, on) {
        var UIController = {
            layout_nav: "_nav",
            layout_nav_left: "_nav_left",
            layout_nav_right: "_nav_tool",
            layout_center: "_center",
            layout_centerLeft: "_center_left",
            layout_centerLeftBar: "_center_left_info",
            layout_centerRight: "_center_right",
            layout_centerDragBar: "_center_drag",
            layout_footer: "_outerbar",


            curLeftBarView: null,//当前左侧栏的dom对象

            leftBarClickHandler: null,//存储对于左侧栏_center_left的事件监听

            /*设置左侧栏的当前功能面板对象*/
            setLeftBarView: function (/*View类的一个实例*/view) {
                var t = this;
                t.curLeftBarView = view;
                t.viewState = "common";
                t.drawPage();
                console.log("left");
            },

            // currentView:当前功能的view对象，为View类的实例
            currentView: null,

            setCurrentView: function (view, cDomId, eventName, handler) {
                // summary:
                //      设置当前的View对象，以及控制该View容器的事件绑定
                //      view:要设置的功能的view，为View类的实例
                //      cDomId:容器id
                //      eventName:绑定事件名称
                //      handler:事件处理      
                var t = this;
                t.currentView = view;
                t.viewState = "common";
                t.drawPage();
                t.bindContainerHandler(cDomId, eventName, handler);
            },

            // eventBinds:记录容器相应事件的绑定数组
            //      其中数组内对象信息
            //      cDomId:容器id,eventName:绑定事件名称,handler:事件处理程序
            //      handle:使用on绑定时返回的处理对象，用来保持和移除该处理
            //      [{cDomId:"",eventName:"",handler:function,handle:}]
            eventBinds: [],

            bindContainerHandler: function (cDomId, eventName, handler) {
                // summary:
                //      绑定容器的事件处理
                //      cDomId:容器id
                //      eventName:绑定事件名称
                //      handler:事件处理
                var t = this;
                for (var i = 0; i < t.eventBinds.length; i++) {
                    if (t.eventBinds[i].cDomId == cDomId && t.eventBinds[i].eventName == eventName) {
                        t.eventBinds[i].handle.remove();
                    }
                }
                var b = {
                    cDomId: cDomId,
                    eventName: eventName,
                    handler: handler,
                    handle: on(dom.byId(cDomId), eventName, handler)
                };
                t.eventBinds.push(b);
            },



            viewState: "common",//地图窗口状态：common、big
            shrinkBar: function () {
                var t = this;

                if (t.viewState == "common") {
                    t.viewState = "big";
                } else if (t.viewState == "big") {
                    t.viewState = "common";
                }
                t.drawPage();
            },
            drawPage: function () {
                var t = appContext.UIController;
                var ww = t.getClientSize().width, wh = t.getClientSize().height,
                    nav = dom.byId(t.layout_nav),
                    nav_l = dom.byId(t.layout_nav_left),
                    nav_r = dom.byId(t.layout_nav_right),
                    c = dom.byId(t.layout_center),
                    c_l = dom.byId(t.layout_centerLeft),
                    c_d = dom.byId(t.layout_centerDragBar),
                    c_r = dom.byId(t.layout_centerRight),
                    f = dom.byId(t.layout_footer);

                var cH, cW, c_lW, c_lH, c_rL, c_rW, c_rH, navW, nav_lW, nav_rL, nav_rW, fW;
                cH = wh - 115 - 35 - 30;
                cW = ww;
                c_lW = t.currentView.initWidth;
                c_lH = cH;
                c_rL = c_lW + 2;
                c_rW = ww - c_lW - 2;
                c_rH = cH;
                navW = ww;
                nav_rW = c_rW - 4;
                nav_rL = c_lW + 2;
                fW = ww;

                domStyle.set(nav, "width", navW + "px");
                domStyle.set(nav_r, "width", c_rW - 5 + "px");
                domStyle.set(c, "width", cW + "px");
                domStyle.set(c, "height", cH + "px");
                domStyle.set(c_d, "height", cH + "px");

                t.setWidth(t.layout_nav, navW);
                t.changeCenterSize(cW, cH);
                if (t.viewState == "common") {
                    nav_lW = c_lW + 2;
                    nav_rL = nav_lW;
                    c_rL = nav_lW;

                    domStyle.set(nav_l, "display", "block");
                    domStyle.set(c_l, "display", "block");
                    domStyle.set(nav_r, "left", c_lW + 5 + "px");
                    domStyle.set(c_r, "left", c_rL + 3 + "px");
                    domStyle.set(c_d, "left", c_lW + "px");

                } else if (t.viewState == "big") {
                    nav_lW = 0;
                    nav_rW = ww - 2;
                    c_rL = 3;
                    c_rW = ww - 2;
                    c_lW = 0;
                    console.log("big");
                    domStyle.set(nav_l, "display", "none");
                    domStyle.set(c_l, "display", "none");

                    domStyle.set(nav_r, "left", c_rL + "px");
                    domStyle.set(c_r, "left", c_rL + "px");
                    domStyle.set(c_d, "left", "3px");
                }
                t.setWidth(t.layout_nav_left, nav_lW - 2);
                t.setWidth(t.layout_nav_right, nav_rW);

                t.changeCenterLeftSize(c_lW, c_lH);
                t.changeCenterRightSize(c_rW - 3, c_rH);

                if (appContext.map) {
                    //appContext.map._sizeChanged();
                }

            },
            getClientSize: function () {
                var c = window, b = document, a = b.documentElement;
                if (c.innerHeight) {
                    return { width: c.innerWidth, height: c.innerHeight }
                } else {
                    if (a && a.clientHeight) {
                        return { width: a.clientWidth, height: a.clientHeight }
                    } else {
                        return { width: b.body.clientWidth, height: b.body.clientHeight }
                    }
                }
            },

            /*改变中间部分的大小，_center*/
            changeCenterSize: function (w, h) {
                var t = this;
                var c = dom.byId(t.layout_center);
                domStyle.set(c, "width", w + "px");
                domStyle.set(c, "height", h + "px");
            },
            /*改变中间左侧部分的大小，_center_left*/
            changeCenterLeftSize: function (w, h) {
                var t = this;
                t.setCenterLeftWidth(w);
                t.setCenterLeftHeight(h);
            },
            setCenterLeftWidth: function (w) {
                var t = this;
                var c = dom.byId(t.layout_centerLeft);
                domStyle.set(c, "width", w + "px");
                var childs = c.children;
                for (var i = 0; i < childs.length; i++) {
                    domStyle.set(childs[i], "width", w + "px");
                }

            },
            setCenterLeftHeight: function (h) {
                var t = this;
                var c = dom.byId(t.layout_centerLeft);
                domStyle.set(c, "height", h + "px");
                var childs = c.children;
                for (var i = 0; i < childs.length; i++) {
                    domStyle.set(childs[i], "height", h + "px");
                }
            },

            /*改变中间右侧部分的大小，_center_right*/
            changeCenterRightSize: function (w, h) {
                var t = this;
                t.setCenterRightWidth(w);
                t.setCenterRightHeight(h);
                var interval = setInterval(function () {
                    if (appContext.map) {
                        clearInterval(interval);
                        appContext.map._onResize();
                    }
                }, 200);
            },
            /*设置中间右侧部分的宽度*/
            setCenterRightWidth: function (w) {
                var t = this;
                var c = dom.byId(t.layout_centerRight);
                domStyle.set(c, "width", w + "px");
                var childs = c.children;
                for (var i = 0; i < childs.length; i++) {
                    domStyle.set(childs[i], "width", w + "px");
                }
            },
            /*设置中间右侧部分的高度*/
            setCenterRightHeight: function (h) {
                var t = this;
                var c = dom.byId(t.layout_centerRight);
                domStyle.set(c, "height", h + "px");
                var childs = c.children;
                for (var i = 0; i < childs.length; i++) {
                    domStyle.set(childs[i], "height", h + "px");
                }
            },
            setWidth: function (id/*要改变宽度的dom的id*/, w/*宽度值*/) {
                var d = dom.byId(id);
                if (d) {
                    domStyle.set(d, "width", w + "px");
                }
            },
            setHeight: function (id/*要改变宽度的dom的id*/, h/*宽度值*/) {
                var d = dom.byId(id);
                if (d) {
                    domStyle.set(d, "height", h + "px");
                }
            },
            getDom: function (id/*domId*/) {
                var t = this;
                var d = dom.byId(id);
                if (d) {
                    return d;
                }
                console.log(t.domId + "不存在");
            },

            redraw: function () {

            }


        };
        appContext.UIController = UIController;
        //window.onload = function () {
        //    console.log("onload" + "   time  " + new Date().getMinutes() + ":" + new Date().getSeconds());
        //};
        //window.onresize = UIController.drawPage;

        //window.onresize = function () {
        //    console.log("onresize" + "   time  " + new Date().getMinutes() + ":" + new Date().getSeconds());
        //};
        return UIController;
    });