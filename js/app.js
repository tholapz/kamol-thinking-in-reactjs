'use strict';
// This file bootstraps the entire application.

var MediaViewApp = require('./components/MediaViewApp.react');
var MediaViewExampleData = require('./MediaViewExampleData');
var React = require('react');
window.React = React; // export for http://fb.me/react-devtools

var data = MediaViewExampleData.init(); // load example data into localstorage

React.render(
    <MediaViewApp media={data} />,
    document.getElementById('react')
);
