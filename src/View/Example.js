import React from "react"

export class Examples extends React.Component {
    state = {
        count: 0
    };

    Increment = () => {
        this.setState({count: this.state.count + 1});
    };

    Decrement = () => {
        this.setState({count: this.state.count - 1})
    };

    render(){
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.Decrement.bind(this) }>- Decrement</button>
                <button onClick={this.Increment.bind(this) }>+ Increment</button>
            </div>
        )
    }
}