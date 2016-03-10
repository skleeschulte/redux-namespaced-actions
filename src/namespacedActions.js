import { createAction, handleAction, handleActions } from 'redux-actions';

export default function (namespace) {
    return {
        createAction() {
            const args = Array.prototype.slice.call(arguments);
            args[0] = namespace + '/' + args[0];
            return createAction.apply(this, args);
        },

        handleAction() {
            const args = Array.prototype.slice.call(arguments);
            args[0] = namespace + '/' + args[0];
            return handleAction.apply(this, args);
        },

        handleActions() {
            const args = Array.prototype.slice.call(arguments);
            args[0] = Object.keys(args[0]).reduce((reducerMap, type) => {
                reducerMap[namespace + '/' + type] = args[0][type];
                return reducerMap;
            }, {});
            return handleActions.apply(this, args);
        }
    }
}
