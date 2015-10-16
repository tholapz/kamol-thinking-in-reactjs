'use strict';
var React = require('react');

var ProductTableHeader = React.createClass({
  changeCriteria: function (criteria) {
    return function () {
      this.props.onUserInput(criteria);
    }.bind(this)
  },
	render: function () {
    var arrow = this.props.order ? '↑' : '↓';
		return (
			<tr>
          <th onClick={this.changeCriteria('name')}>Name{this.props.sortBy === 'name'? arrow: ''}</th>
          <th onClick={this.changeCriteria('price')}>Price{this.props.sortBy === 'price'? arrow: ''}</th>
          <th onClick={this.changeCriteria('category')}>Category{this.props.sortBy === 'category'? arrow: ''}</th>
      </tr>
    );
	}
});

module.exports = ProductTableHeader;