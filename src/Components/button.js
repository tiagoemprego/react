import React from "react";

const divStyle = {
    margin: '30px 0',
    padding: '15px',
    border: '1px solid #ccc',
    textAlign: 'center',
};

export class Button extends React.Component{
    render() {
        return (
            <div style={divStyle}>
                <input
                    type={this.props.type}
                    className={this.props.className}
                    value={this.props.value}
                />
            </div>
        )
    }
}