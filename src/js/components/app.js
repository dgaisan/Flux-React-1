/**
 * Created by Dmitri on 12/4/2014.
 */

var React = require('react');
var Catalog = require('./catalog');
var Cart = require('./cart');

var App = React.createClass({

    render: function() {
        return (
            <div>
                <b>Product Catalog: </b>
                <Catalog />
                <br />
                <b>Cart: </b>
                <Cart />
            </div>
        )
    }
});

module.exports = App;