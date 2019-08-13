import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './Redux/Redux-store';
import {HashRouter} from "react-router-dom";
import { Provider } from 'react-redux';
import HTML5Backend from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import  Router from './Router.jsx'


  ReactDOM.render(
    <HashRouter>
        <Provider store = {store}>
                <DndProvider backend={HTML5Backend}>
                    <Router />
                </DndProvider>
        </Provider>


   </HashRouter>,  document.getElementById('root'));

serviceWorker.unregister();
