import React, {Component} from 'react';
import {connect} from 'react-redux'
import {createTodo, completeTodo, deleteTodo, deleteAllCompletedTodo} from './actions/todos';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleComplete = this.handleComplete.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleDeleteAllCompleted = this.handleDeleteAllCompleted.bind(this)
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.createTodo(this.state.text);
        this.setState({
            text: ''
        })
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    };

    handleComplete = id => {
        this.props.completeTodo(id);
    };

    handleDelete = id => {
        this.props.deleteTodo(id);
    };

    handleDeleteAllCompleted = () => {
        this.props.deleteAllCompletedTodo();
    };

    render() {
        return (
            <div className="App">
                <form className="App-intro" onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.text} onChange={this.handleChange} name="text"
                           placeholder="Create a todo..."/>
                </form>
                <br/>
                {this.props.todos.map(({text, id, completed}) => (
                    <div key={id}>
                        {text}
                        <input onChange={() => this.handleComplete(id)} type="checkbox" value={completed}/>
                        <button onClick={() => this.handleDelete(id)}>Delete</button>
                    </div>
                ))}
                <br/>
                <hr/>
                <br/>
                <button onClick={this.handleDeleteAllCompleted}>Delete All Completed</button>
            </div>
        );
    }
}

export default connect(state => ({
    todos: state.todos
}), {createTodo, completeTodo, deleteTodo, deleteAllCompletedTodo})(App);
