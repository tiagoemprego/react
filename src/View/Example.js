import React from "react"

export class Examples extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            visible: false
        };
    }
    

    Increment = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    Decrement = () => {
        const contador = this.state.count;

        this.setState({
            count: contador === 0
                ? (contador + 0)
                : (contador - 1)
        })
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