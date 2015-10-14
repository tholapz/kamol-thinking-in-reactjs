'use strict';
var React = require('react');

var ProductTableHeader = React.createClass({
  changeCriteria: function (criteria) {
    return function () {
      this.props.onUserInput(criteria);
    }.bind(this)
  },
	render: function () {
		return (
			<tr>
          <th onClick={this.changeCriteria('name')}>Name</th>
          <th onClick={this.changeCriteria('priceValue')}>Price</th>
          <th onClick={this.changeCriteria('category')}>Category</th>
      </tr>
    );
	}
});

module.exports = ProductTableHeader;