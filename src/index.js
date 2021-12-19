import React from 'react';
import { Provider } from 'react-redux';

import { render } from 'react-dom';

import { BrowserRouter as Router } from "react-router-dom"

import App from "./App";
import "antd/dist/antd.css"

import store from './app/store';

render(<Router><Provider store={store}><App/></Provider></Router>, document.getElementById('root'));