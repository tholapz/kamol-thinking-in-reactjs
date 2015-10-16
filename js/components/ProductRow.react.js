'use strict';
var React = require('react');

var ProductRow = React.createClass({
    render: function() {
        var name = this.props.product.stocked ?
            this.props.product.name :
            <span style={{color: 'red'}}>
                {this.props.product.name}
            </span>;
        return (
            <tr>
                <td>{name}</td>
                <td style={{textAlign: 'right'}}>{this.props.product.price}</td>
                <td>{this.props.product.category}</td>
            </tr>
        );
    }
});

module.exports = ProductRow;
