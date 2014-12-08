/**
 * Created by Dmitri on 12/5/2014.
 */
var AppConstants = require('../constants/app-constants');
var AppDispatcher = require('../dispatchers/app-dispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _catalog = [
    {id:1, title: 'Catalog Item #1', cost: 11.5},
    {id:2, title: 'Catalog Item #2', cost: 62.9},
    {id:3, title: 'Catalog Item #3', cost: 13.2}
];

var _cartItems = [];

function _removeItem(index) {
    _cartItems[ index].inCart = false;
    _cartItems.splice(index, 1);
}

function _increaseItem(index) {
    _cartItems[ index].qty++;
}

function _decreaseItem(index) {
    if (_cartItems[ index].qty > 1) {
        _cartItems[ index].qty--;
    } else {
        _removeItem(index);
    }
}

function _addItem(item) {
    if (!item.inCart) {
        item[ 'qty'] = 1;
        item[ 'inCart'] = true;
        _cartItems.push(item);
    } else {
        _cartItems.forEach(function(cartItem, i) {
            if (cartItem.id === item.id) {
                _increaseItem(i);
            }
        });
    }
}

var AppStore = assign({}, EventEmitter.prototype, {

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    /**
     * @param {function} callback
     */
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    /**
     * @param {function} callback
     */
    removeChangeListener: function(callback) {
        this.removeChangeListener(callback);
    },

    getCart: function() {
        return _cartItems;
    },

    getCatalog: function() {
        return _catalog;
    }
 });

AppStore.dispatcherIndex = AppDispatcher.register(function(payload) {
    console.log(payload);
    var action = payload.action;

    switch(action.type) {
        case AppConstants.ADD_ITEM:
            _addItem(action.item);
            break;
        case AppConstants.DECREASE_ITEM:
            _decreaseItem(action.index);
            break;
        case AppConstants.INCREASE_ITEM:
            _increaseItem(action.index);
            break;
        case AppConstants.REMOVE_ITEM:
            _removeItem(action.index);
            break;
        default :
            /* Do nothing */
    }

    AppStore.emitChange();
});

module.exports = AppStore;