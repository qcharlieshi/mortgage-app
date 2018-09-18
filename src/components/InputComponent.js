import React, {Component} from 'react'

export default class InputComponent extends Component {
    constructor(props) {
        super(props)

        this.handleOnChange = this.handleOnChange.bind(this)
    }

    handleOnChange(e) {
        const newValue = e.target.value
        // this.props.editField();
    }

    render() {
        const {value} = this.props;

        return (
            <input
                value={value}
            />
        )
    }
}