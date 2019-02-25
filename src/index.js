import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<AppContainer />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


/*
Closures are formed when an inner function access the scope
of an outer function, even after the outer function has
returned.

Closures can be used to create "partial "
 */

function firstName(fName){

  // scope has fName variable

  function lastName(lName){

    // scope has fName AND lName

    console.log('Your name', fName, lName);
  }

  return lastName;
}

var createName = firstName('Dan');
createName('Dietz');

// var source = document.getElementById('root');
// var template = handlebars.compile(source);
// template(context);
