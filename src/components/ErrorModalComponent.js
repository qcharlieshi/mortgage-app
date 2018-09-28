import React, {Component} from "react";

export default class ErrorModalComponent extends Component {
    constructor(props) {
        super(props)

        this.handleOnClick = this.handleOnClick.bind(this)
    }

    render() {
        const {errors, handleClose} = this.props
        const CLOSE_MESSAGE = 'Close'

        return (
            <div className="error-box">
                <ul>{errors.map(e => {
                        return <li>{e}</li>
                    })}
                </ul>
                <button onClick={handleClose}>{CLOSE_MESSAGE}</button>
            </div>
        )
    }
}
