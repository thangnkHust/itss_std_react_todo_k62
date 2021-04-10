// import React, { useState } from 'react';

/* 
  【Todoのデータ構成】
 ・key：Todoを特定するID（String）
 ・text：Todoの内容（String）
 ・done：完了状態（Boolean true:完了済み,, false:未完了）
*/

/* コンポーネント */
import TodoItem from './TodoItem';
import Input from './Input';
import Filter from './Filter';

/* カスタムフック */
import useStorage from '../hooks/storage';

/* ライブラリ */
import { getKey } from "../lib/util";
import React, { Component } from 'react';

class Todo extends Component {

  constructor(props) {
    super(props)
    this.state = {
      items: [
        /* テストコード 開始 */
        { key: getKey(), text: '日本語の宿題', done: true },
        { key: getKey(), text: 'reactを勉強する', done: false },
        { key: getKey(), text: '明日の準備をする', done: false },
        /* テストコード 終了 */
      ],
      filter: 'all'
    }
  }

  handleOnClick = (key) => {
    this.setState({
      items: this.state.items.map(item => {
        return item.key === key ? { ...item, done: !item.done } : item
      })
    })
    // localStorage.setItem('itss-todo', JSON.stringify(this.state.items))
  }

  handleAddTodoItem = text => {
    this.setState({
      items: [...this.state.items, { key: getKey(), text: text, done: false }]
    })
    localStorage.setItem('itss-todo', JSON.stringify(this.state.items))
  }

  filterStatus = (status) => {
    if (status === 'all') {
      this.setState({
        filter: 'all'
      })
    } else if (status === 'unactive') {
      this.setState({
        filter: 'unactive'
      })
    } else {
      this.setState({
        filter: 'active'
      })
    }
  }

  handleSaveItems = () => {
    localStorage.setItem('itss-todo', JSON.stringify(this.state.items))
    this.setState({items: [], filter: 'all'})
  }
  componentDidMount = () => {
    const data = localStorage.getItem('itss-todo');
    this.setState({items: JSON.parse(data), filter: 'all'});
  }

  componentDidUpdate = () => {
    localStorage.setItem('itss-todo', JSON.stringify(this.state.items))
  }

  render() {
    const { items, filter } = this.state
    return (
      <div className="panel">
        <div className="panel-heading">
          ITSS ToDoアプリ
        </div>
        <Input handleAddTodoItem={this.handleAddTodoItem} />
        <Filter filter={filter} filterStatus={this.filterStatus} />
        {
          items.filter(item => {
            return (filter === 'all') || (filter === 'unactive' && item.done) || (filter === 'active' && !item.done)
          })
            .map(item => (
              <TodoItem
                key={item.key}
                item={item}
                handleOnClick={this.handleOnClick}
              ></TodoItem>
            ))}
        <div className="panel-block">
          {items.length} items
        </div>

        <div className="panel-block">
        <button className="button is-light is-fullwidth" onClick={this.handleSaveItems}>
          全てのToDoを削除
        </button>
      </div>
      </div>
    );
  }
}

export default Todo;