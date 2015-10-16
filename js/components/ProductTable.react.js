'use strict';
var React = require('react');
var ProductCategoryRow = require('./ProductCategoryRow.react');
var ProductRow = require('./ProductRow.react');
var ProductTableHeader = require('./ProductTableHeader.react');
var _ = require('lodash');

var ProductTable = React.createClass({
  getInitialState: function () {
    return {
      sortBy: 'category',
      prevSortBy: 'category',
      order: true
    }
  },

  handleUserInput: function (criteria) {
    this.setState({
      prevSortBy: this.state.sortBy,
      sortBy: criteria,
      order: this.state.prevSortBy === this.state.sortBy ? !this.state.order : true
    });
  },

  render: function() {
    var filterText = this.props.filterText, inStockOnly = this.props.inStockOnly;
    var rows = _.chain(this.props.products)
    .sortByOrder(function (product) {
      if (this.state.sortBy === 'price') {
        return Number(product.price.replace(/[^0-9\.]+/g,""));
      }
      return product[this.state.sortBy];
    }.bind(this), this.state.order ? 'asc' : 'desc')
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
          <ProductTableHeader
            onUserInput={this.handleUserInput}
            sortBy={this.state.sortBy}
            order={this.state.order} />
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
});

module.exports = ProductTable;