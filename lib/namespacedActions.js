'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (namespace) {
    return {
        createAction: function createAction() {
            var args = Array.prototype.slice.call(arguments);
            args[0] = namespace + '/' + args[0];
            return _reduxActions.createAction.apply(this, args);
        },
        handleAction: function handleAction() {
            var args = Array.prototype.slice.call(arguments);
            args[0] = namespace + '/' + args[0];
            return _reduxActions.handleAction.apply(this, args);
        },
        handleActions: function handleActions() {
            var args = Array.prototype.slice.call(arguments);
            args[0] = Object.keys(args[0]).reduce(function (reducerMap, type) {
                reducerMap[namespace + '/' + type] = args[0][type];
                return reducerMap;
            }, {});
            return _reduxActions.handleActions.apply(this, args);
        }
    };
};

var _reduxActions = require('redux-actions');
