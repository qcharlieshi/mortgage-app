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
                <div>
                    <div className="logo-section"><img src="logo.png" /></div>
                    <div className="main">
                        <FilterParamsContainer/>
                        <LenderTableContainer/>
                    </div>
                </div>
            </Provider>
        );
    }
}

export default App;
