import React, {Component} from "react";

export default class ErrorModalComponent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {errors, handleClose} = this.props
        const CLOSE_MESSAGE = 'Close'

        console.log('---- err', errors)
        return (
            <div className="error-box">
                <div className="header">ERROR</div>
                <ul>{errors.map(e => {
                        return <li>{e}</li>
                    })}
                </ul>
                <button onClick={handleClose}>{CLOSE_MESSAGE}</button>
            </div>
        )
    }
}
