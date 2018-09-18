import React, { Component } from 'react';
import './App.css';
import FilterParamsContainer from './filter_params/FilterParamsContainer'
import LenderTableContainer from './lender_table/LenderTableContainer'

class App extends Component {
    render() {
        return (
            <div className="App">
                <FilterParamsContainer/>
                <LenderTableContainer/>
            </div>
        );
    }
}

export default App;
