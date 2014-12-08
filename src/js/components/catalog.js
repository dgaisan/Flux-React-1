/**
 * Created by Dmitri on 12/8/2014.
 */
var React = require('react');
var AppStore = require('../stores/app-store');
var AddToCart = require('./add-to-cart');

var catalog = React.createClass({
    getInitialState: function() {
        return { items: AppStore.getCatalog() }
    },

    render: function() {
        var items = this.state.items.map(function(item) {
            return (
                <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.cost}</td>
                    <td><AddToCart item = {item}/></td>
                </tr>
            );
        });
        return (
            <table className="table table-hover">
                {items}
            </table>
        );
    }
});

module.exports = catalog;