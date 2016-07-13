/*jquery观察者模式 基于jquery.Callbacks的fire、add、remove方法*/
define(['jquery'], function ($) {
    var observer = {
        hash: {},
        subscribe: function (id, callback) {
            if (typeof id !== 'string') {
                return
            }
            if (!this.hash[id]) {
                this.hash[id] = $.Callbacks()
                this.hash[id].add(callback)
            } else {
                this.hash[id].add(callback)
            }
        },
        publish: function (id, args) {
            if (!this.hash[id]) {
                return
            }
            this.hash[id].fire(args)
        },
        unsubscribe: function (id, func) {
            if (!this.hash[id]) {
                return;
            }
            this.hash[id].remove(func);
        }
    }
    $.observer = observer;
});