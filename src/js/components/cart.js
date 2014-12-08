/**
 * Created by Dmitri on 12/8/2014.
 */
var React = require('react');
var AppStore = require('../stores/app-store');
var RemoveFromCart = require('./remove-from-cart');
var IncreaseItem = require('./increase-item');
var DecreaseItem = require('./decrease-item');

function getCartItems() {
    return { items: AppStore.getCart() };
}

var Cart = React.createClass({

    getInitialState: function() {
        return getCartItems();
    },

    componentWillMount: function() {
        AppStore.addChangeListener(this._onChange);
    },

    _onChange: function() {
        this.setState(getCartItems());
    },

    render: function() {
        var total = 0;
        var items = this.state.items.map(function(item, i) {
            var subtotal = item.cost * item.qty;
            total += subtotal;

            return (
                <tr key={i}>
                    <td><RemoveFromCart index={i} /></td>
                    <td>{item.title}</td>
                    <td>{item.qty}</td>
                    <td>
                        <IncreaseItem index={i} />
                        <DecreaseItem index={i} />
                    </td>
                    <td>{subtotal}</td>
                </tr>
            );
        });

        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th></th>
                        <th>Title</th>
                        <th>Quantity</th>
                        <th></th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {items}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="5" className="text-right">Total</td>
                        <td>${total}</td>
                    </tr>
                </tfoot>
            </table>
        );
    }
});

module.exports = Cart;