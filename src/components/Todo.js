import React, { Component } from "react";
import TodoItems from "./TodoItems";
import Header from "./Header";
import todoStyles from "../styles/todo.module.css";
class Todo extends Component {
  state = {
    todoItems: [],
    newTodo: ""
  };

  handleChange = e => {
    this.setState({ newTodo: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const duplicateItem = this.state.todoItems.filter(todoItem => {
      if (isNaN(todoItem)) {
        return todoItem.toUpperCase() === this.state.newTodo.toUpperCase();
      } else {
        return todoItem === this.state.newTodo;
      }
    });

    if (this.state.newTodo && duplicateItem.length === 0) {
      this.setState(prevState => {
        return {
          todoItems: [...prevState.todoItems, this.state.newTodo],
          newTodo: ""
        };
      });
    }
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.todoItems.length !== this.state.todoItems.length) {
      const jsonState = JSON.stringify(this.state.todoItems);
      localStorage.setItem("todoItems", jsonState);
    }
  }

  componentDidMount() {
    const itemsFromLocalStorage = localStorage.getItem("todoItems");
    const todoItems = JSON.parse(itemsFromLocalStorage);
    if (todoItems) {
      this.setState(() => ({
        todoItems
      }));
    }
  }
  handleRemoveOneItem = itemToBeRemoved => {
    this.setState(prevState => ({
      todoItems: prevState.todoItems.filter(
        todoItem => todoItem !== itemToBeRemoved
      )
    }));
  };
  handleRemoveAllItems = () => {
    this.setState(() => ({ todoItems: [] }));
  };
  render() {
    const { todoItems, newTodo } = this.state;
    return (
      <div className={todoStyles.container}>
        <Header title="MY TODO TITLE" />
        <h1 className={todoStyles.title}> Welcome to my todo App </h1>
        <div className={todoStyles.wrapper}>
          <div className={todoStyles.forms}>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="todo-item"
                value={newTodo}
                onChange={this.handleChange}
              />
              <br />
              <button>Submit</button>
            </form>
          </div>

          <div className={todoStyles.cover}>
            <button
              className={todoStyles.removeAllButton}
              style={{ display: todoItems.length !== 0 ? "block" : "none" }}
              onClick={this.handleRemoveAllItems}
            >
              Remove All
            </button>

            {todoItems.map(item => (
              <TodoItems
                key={item}
                handleRemoveOneItem={this.handleRemoveOneItem}
                individualItem={item}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default Todo;
