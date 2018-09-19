import React, { Component } from 'react';
import './App.css';
import store from './store'
import {Provider} from 'react-redux'
import FilterParamsContainer from './filter_params/FilterParamsContainer'
import LenderTableContainer from './lender_table/LenderTableContainer'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="main">
                    <FilterParamsContainer/>
                    <LenderTableContainer/>
                </div>
            </Provider>
        );
    }
}

export default App;
