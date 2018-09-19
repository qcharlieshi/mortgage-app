import React, {Component} from 'react'
import {toRegularCase} from "../utils";

export default class InputComponent extends Component {
    constructor(props) {
        super(props)

        this.handleOnChange = this.handleOnChange.bind(this)
    }

    handleOnChange(e) {
        const newValue = e.target.value
        this.props.editField(this.props.name, newValue);
    }

    render() {
        const {value, name} = this.props;
        const displayName = toRegularCase(name)

        return (
            <span className="field">
                <label>{displayName}:</label>
                <input
                    value={value}
                    onChange={this.handleOnChange}
                />
            </span>
        )
    }
}