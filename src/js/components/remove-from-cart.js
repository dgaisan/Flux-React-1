/**
 * Created by Dmitri on 12/4/2014.
 */

var React = require('react');
var AppActions = require('../actions/app-actions');

var RemoveFromCart = React.createClass({

    handleClick: function() {
        AppActions.removeItem(this.props.index);
    },

    render: function() {
        return (
            <button onClick={this.handleClick}> Remove </button>
        )
    }
});

module.exports = RemoveFromCart;