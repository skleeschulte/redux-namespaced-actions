# redux-namespaced-actions

Wrapper for [redux-actions](https://www.npmjs.com/package/redux-actions) to
easily add namespaces to action types.

## Installation

    npm install redux-actions redux-namespaced-actions --save

## Usage

Import `redux-namespaced-actions` instead of `redux-actions` and set the
namespace:

    import namespacedActions from 'redux-namespaced-actions';
    const { createAction, handleAction, handleActions } = namespacedActions('myNamespace');

Use createAction, handleAction and handleActions like before:

    const myAction = createAction('MY_ACTION');
    handleAction('MY_ACTION', ...);
    handleActions({ MY_ACTION: ... }, {});

The namespace will automatically be prepended to the action type:

    expect(myAction('payload')).to.deep.equal({
        type: 'myNamespace/MY_ACTION',
        payload: 'payload'
    });

And the reducers returned by `handleAction` and `handleActions` will properly
handle actions of type `myNamespace/MY_ACTION` instead of `MY_ACTION`.
