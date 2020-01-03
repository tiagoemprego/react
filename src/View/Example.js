import React from "react"

export class Examples extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            value: '',
            addItems: [],
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState(state => {
            if (this.state.value !== ''){
                const list = state.addItems.push({'name': this.state.value});
                return {
                    list,
                    value: '',
                };
            }
        });
    }

    render(){
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.handleSubmit}>
                        <input value={this.state.value} onChange={this.handleChange} placeholder="Task" />
                        <button type="submit"> Add Task </button>
                    </form>
                </div>

                <div className="listToDo">
                    <ul>
                        {this.state.addItems.map(
                            (items, key) => (<li key={key} >{items.name}</li>)
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}