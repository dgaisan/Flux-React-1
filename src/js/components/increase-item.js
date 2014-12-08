/**
 * Created by Dmitri on 12/4/2014.
 */

var React = require('react');
var AppActions = require('../actions/app-actions');

var IncreaseItem = React.createClass({
    handleClick: function() {
        AppActions.increaseItem(this.props.index);
    },

    render: function() {
        return (
            <button onClick={this.handleClick}> + </button>
        )
    }
});

module.exports = IncreaseItem;