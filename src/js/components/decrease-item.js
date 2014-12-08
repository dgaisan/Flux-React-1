/**
 * Created by Dmitri on 12/4/2014.
 */

var React = require('react');
var AppActions = require('../actions/app-actions');

var DecreaseItem = React.createClass({

    handleClick: function() {
        AppActions.decreaseItem(this.props.index);
    },

    render: function() {
        return (
            <button onClick={this.handleClick}> - </button>
        )
    }
});

module.exports = DecreaseItem;