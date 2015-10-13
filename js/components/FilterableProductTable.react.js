'use strict';
var React = require('react');
var SearchBar = require('./SearchBar.react');
var ProductTable = require('./ProductTable.react');
var FilterableProductTable = React.createClass({
		getInitialState: function () {
			return {
				filterText: '',
				inStockOnly: false
			}
		},

		handleUserInput: function (filterText, inStockOnly) {
			this.setState({
				filterText: filterText,
				inStockOnly: inStockOnly
			});
		},

    render: function() {
        return (
            <div>
                <SearchBar 
                	filterText={this.state.filterText}
                	inStockOnly={this.state.inStockOnly}
                	onUserInput={this.handleUserInput} />
                <ProductTable
                	products={this.props.products}
                	filterText={this.state.filterText}
                	inStockOnly={this.state.inStockOnly} />
            </div>
        );
    }
});

module.exports = FilterableProductTable;