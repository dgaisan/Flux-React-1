/**
 * Created by Dmitri on 12/4/2014.
 */
var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');

var AppDispatcher = assign(new Dispatcher(), {

    /**
     * @param {object} action The details of the action, including the action's
     * type and the data coming from the view.
     */
    handleViewAction: function(action){
        console.log('action', action);
        this.dispatch({
            source: 'VIEW_ACTION',
            action: action
        });
    }
});

module.exports = AppDispatcher;