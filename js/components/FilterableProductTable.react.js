'use strict';
var React = require('react');
var SearchBar = require('./SearchBar.react');
var ProductTable = require('./ProductTable.react');
var FilterableProductTable = React.createClass({
    render: function() {
        return (
            <div>
                <SearchBar />
                <ProductTable products={this.props.products} />
            </div>
        );
    }
});

module.exports = FilterableProductTable;