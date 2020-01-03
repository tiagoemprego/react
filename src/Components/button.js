import React from "react";

export class Btn extends React.Component{

    buttonClick = () => this.props.handleClick();

    render() {
        return (
            <button
                onClick={() => this.buttonClick()}
                className={this.props.className}>
                {this.props.text}
            </button>
        )
    }
}

export default Btn;