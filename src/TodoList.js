import React, { Component } from 'react'
import NewTodoForm from './NewTodoForm';
import {v4 as uuid} from 'uuid';
import Todo from './Todo';

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = {todos: [{description: "todo1", id: uuid()}]}
        this.addTodo = this.addTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
    }
    renderTodoList(){
        return(
            <ul style={{listStyleType: 'none', padding: 0}}>
                {this.state.todos.map(todo => (
                    <li key={todo.id}>
                        <Todo 
                        description={todo.description} 
                        id={todo.id}
                        deleteTodo={this.deleteTodo}
                        updateTodo={this.updateTodo}
                        />
                        
                    </li>
        ))}
            </ul>
        )
    }
    updateTodo(value, id){
        this.setState(curState => ({todos: curState.todos.map(
            todo => todo.id === id ?
                    { ...todo, description: value } :
                    todo
    )}));

    }
    addTodo(newTodoDesc){
        let newTodo = {description: newTodoDesc, id: uuid()};
        this.setState({todos: [...this.state.todos, newTodo]})
    }
    deleteTodo(id){
        let newTodoList = this.state.todos.filter(todo => todo.id != id);
        this.setState({todos: newTodoList})
    }
    render(){
        return(
            <div>
                <h1>Todo List</h1>
                {this.renderTodoList()}
                <NewTodoForm addTodo={this.addTodo}/>
            </div>
        )
    }
}
export default TodoList;