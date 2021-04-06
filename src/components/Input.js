import React, { useState } from 'react';
/* 
  【inputコンポーネント】
　・新しいTodoを作成するINPUTフィールドを作成するコンポーネント
　・Enterをクリックされたら入力された文字を使って新しいTodoを作成する
*/
const handleAddTodoItem = (e) => {
  e.preventDefault()
  
}


function Input(props) {

  return (
    <div>
      <form method="post" onSubmit={handleAddTodoItem}>
        <input class="input" type="text" placeholder="Text input" />
      </form>
    </div>
  );
}

export default Input;
