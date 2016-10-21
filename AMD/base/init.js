define(["jquery","appContext"],function($,appContext){
  //私有方法、属性
  "use strict";
  //公有属性、方法
  var module={
    init:function(){
        module.initFuncs();
    },
   initFuncs:function(){
     require([
       "script/funcs/func1/func1",
       "script/funcs/func2/func2"],function(func1,func2){
       func1.load();
       func2.load();
     })
   }
  };
  return module;
})
