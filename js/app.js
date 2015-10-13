'use strict';
// This file bootstraps the entire application.
var FilterableProductTable = require('./components/FilterableProductTable.react');

var React = require('react');
window.React = React; // export for http://fb.me/react-devtools

var PRODUCTs = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

React.render(
    <FilterableProductTable products={PRODUCTs} />,
    document.getElementById('react')
);
