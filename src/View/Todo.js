import React from "react"
import Btn from "../Components/button"
import Scrollyng from "../Components/GetScrollExample"
export class Todo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: '',
            addItems: [],
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState(state => {
            if (this.state.value !== ''){
                const list = state.addItems.push(this.state.value);
                return {
                    list,
                    value: ''
                };
            }
        });
    }

    onRemoveItem = i => {
        const listRemove = this.state.addItems.filter( (item, j) => i !== j );

        this.setState({
            addItems: listRemove,
        })
    };

    render(){
        return (
            <div className="todoListMain">
                <Scrollyng />
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <input value={this.state.value} onChange={this.handleChange} placeholder="Task" />
                        <button className="btn" type="submit">Add Task</button>
                    </form>
                </div>

                <div className="listToDo">
                    <ul>
                        {this.state.addItems.map(
                            (items, key) => (<li key={key} >{items} <Btn text="X" className="btn-close" handleClick={() => this.onRemoveItem(key)}/> </li>)
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}
