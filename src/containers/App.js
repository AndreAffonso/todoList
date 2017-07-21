import React, { Component } from 'react'
import './App.css'


import Input from 'components/Input'
import List from 'components/List'
import Title from 'components/Title'


export default class App extends Component {
  state = {
    todos: ['Click to remove', 'Learn React', 'Wrtite Code', 'Ship App']
  }

  onAddTodo = (text) => {
    const {todos} = this.state

    this.setState({
      todos: [text, ...todos]
    })
  }

  onRemoveTodo = (index) => {
    const {todos} = this.state

    this.setState({
      todos: todos.filter((todo, i) => i !== index )
    })
  }

  render() {
    const {todos} = this.state
    return (
      <div className="container">
        <Title>
          To-Do List
        </Title>

        <Input
          placeholder={'Type a todo, then hit enter'}
          onSubmitEditing={this.onAddTodo}
        />
        <List
          list={todos}
          onClickItem={this.onRemoveTodo}
        />


      
      </div>
    );
  }
}
