import React, { Component } from 'react'

class NewTodoForm extends Component{
    constructor(props){
        super(props)
        this.state = {todo:""}
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleOnChange = this.handleOnChange.bind(this)
    }
    handleSubmit(event){
        event.preventDefault();
        this.props.addTodo(this.state.todo)
        this.setState({todo:""})
    }
    handleOnChange(evt){
        this.setState({[evt.target.name]: evt.target.value})
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="todo">New Todo</label>
                <input 
                type="text"
                name='todo'
                value={this.state.description}
                placeholder='New Todo'
                onChange={this.handleOnChange} 
                />
                <button>ADD TODO</button>                    
            </form>
        )
    }
}
export default NewTodoForm;