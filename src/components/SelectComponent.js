import React, {Component} from 'react'
import {toRegularCase} from "../utils";

export default class SelectComponent extends Component {
    constructor(props) {
        super(props)

        this.handleOnChange = this.handleOnChange.bind(this)
    }

    handleOnChange(e) {
        const newValue = e.target.value
        this.props.editField(this.props.name, newValue);
    }

    render() {
        const {value, name, options} = this.props;

        const displayName = toRegularCase(name)

        return (
            <span>
                <label>{displayName}</label>
                <select
                    value={value}
                    onChange={this.handleOnChange}
                >
                    {   options.map((item, idx) => {
                            return (
                                <option key={idx} value={item}>
                                    {item}
                                </option>
                            )
                        })
                    }
                </select>
            </span>
        )
    }
}