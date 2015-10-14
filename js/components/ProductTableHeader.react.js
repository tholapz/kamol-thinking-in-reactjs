'use strict';
var React = require('react');

var ProductTableHeader = React.createClass({
	changeCriteria: function (e) {
    this.props.onUserInput(e.target.dataset.sort);
  },
	render: function () {
		return (
			<tr>
          <th data-sort="name" onClick={this.changeCriteria}>Name</th>
          <th data-sort="price" onClick={this.changeCriteria}>Price</th>
          <th data-sort="category" onClick={this.changeCriteria}>Category</th>
      </tr>
    );
	}
});

module.exports = ProductTableHeader;