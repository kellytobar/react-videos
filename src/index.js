import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
//import Playlist from './playlist/components/playlist';
import data from './api.json';
import Home from './pages/containers/home';

// ReactDOM.render(<Playlist
//     data={data}
// />, document.getElementById('root'));
    
ReactDOM.render(<Home data={data} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
