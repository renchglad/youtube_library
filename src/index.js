import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Frame from './Frame'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Frame/>, document.getElementById('root'));
// class Welcome extends React.Component {
//     render() {
//         return <h1>Bonjour, {this.props.unname}</h1>;
//     }
// }
//
// const element = <Welcome unname="Sara" />;
// ReactDOM.render(
//     element,
//     document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
