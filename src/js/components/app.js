/**
 * Created by Dmitri on 12/4/2014.
 */

var React = require('react');
var AppActions = require('../actions/app-actions');
var Catalog = require('./catalog');

var App = React.createClass({

    render: function() {
        return (
            <div>
                <p className="center">Product Catalog: </p>
                <Catalog />
            </div>
        )
    }
});

module.exports = App;