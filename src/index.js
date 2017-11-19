import React from 'react';
import ReactDOM from 'react-dom';
import helloWorld from './utils/hello-world';
import HelloWorld from './components/hello-world';

console.log(helloWorld());

ReactDOM.render(<HelloWorld />, document.getElementById('app'));
