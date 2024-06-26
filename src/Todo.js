import React, { Component } from 'react'

class Todo extends Component{
    constructor(props){
        super(props);
        this.state = {
            isEditing: false, 
            checked: false, 
            value: this.props.description
        };
        this.handleOnEdit = this.handleOnEdit.bind(this);
        this.handleOnTrash = this.handleOnTrash.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnEdit(){
        this.setState({isEditing: "true"});
    }

    handleOnTrash(evt){
        this.props.deleteTodo(this.props.id);
    }

    handleOnSubmit(evt){
        evt.preventDefault()
        this.props.updateTodo(this.state.value, this.props.id) 
        this.setState({isEditing: false})
    }
    handleOnChange(evt){
        this.setState({value: evt.target.value})
    }

    renderEditInput(){
        return(
            <form onSubmit={this.handleOnSubmit}>
                <input 
                value={this.state.value}
                onChange={this.handleOnChange}
                />
                <button>save</button>
            </form>
        )
    }

    handleOnClick(){
        this.setState(state => ({
            checked: !state.checked
        }))
    }

    render(){
        return(
            <div>
                {this.state.isEditing    ?
                  this.renderEditInput() : 
                  <p style={{ textDecoration: this.state.checked ? 'line-through' : 'none' }} 
                  onClick={this.handleOnClick}
                  > {this.props.description} </p>
                }
                <button onClick={this.handleOnEdit}> edit </button>
                <button onClick={this.handleOnTrash}> trash </button>
            </div>
        )
    }
}
export default Todo;