import React from "react";

export class Input extends React.Component {
    render() {
        return (
            <div>
                <input
                    type={this.props.type}
                    placeholder={this.props.place}/>
            </div>
        );
    }
}