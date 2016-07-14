define(["jquery"],function($){
//私有方法、属性
function _show(){

};
//公有方法、属性
   var module={
     //初始化、属性方法、事件绑定
     load:function(){
       console.log("func1 loaded "+new Date());
     }
   };
   return module;
})
