import React, {Component} from 'react';
/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/

class TodoItem extends Component {
  render() {
    const {item} = this.props
    return (
      <label className="panel-block">
        <input type="checkbox" onChange={() => this.props.handleOnClick(item.key)} checked={item.done}/>
        <span className={this.props.item.done ? 'has-text-grey-light' : ''}>
          {this.props.item.text}
        </span>
      </label>
    );
  }
}

export default TodoItem;