/**
 * Created by Dmitri on 12/4/2014.
 */

var React = require('react');
var AppActions = require('../actions/app-actions');

var App = React.createClass({
    handleClick: function() {
        AppActions.addItem('Adding this item');
    },
    render: function() {
        return (
            <h1 onClick={this.handleClick}> My App XXX</h1>
        )
    }
});

module.exports = App;