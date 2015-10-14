'use strict';
var React = require('react');
var ProductCategoryRow = require('./ProductCategoryRow.react');
var ProductRow = require('./ProductRow.react');
var ProductTableHeader = require('./ProductTableHeader.react');
var _ = require('lodash');

var ProductTable = React.createClass({
  getInitialState: function () {
    return {
      sortBy: 'category'
    }
  },

  handleUserInput: function (criteria) {
    this.setState({sortBy: criteria});
  },

  render: function() {
    var filterText = this.props.filterText, inStockOnly = this.props.inStockOnly;
    var rows = _.chain(this.props.products)
    .sortBy(this.state.sortBy)
    .map(function(product) {
    	if (product.name.indexOf(filterText) === -1 || (!product.stocked && inStockOnly)) {
    			return;
    	}
      return (<ProductRow product={product} key={product.name} />);
    })
    .value();

    return (
      <table>
        <thead>
          <ProductTableHeader onUserInput={this.handleUserInput} />
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
});

module.exports = ProductTable;