import classNames from 'classnames';
/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
function TodoItem(props) {
  return (
    <label className="panel-block">
      <input type="checkbox"/>
      <span className=>
        {props.item.text}
      </span>
    </label>
  );
}

export default TodoItem;