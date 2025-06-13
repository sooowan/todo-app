import './App.css';
import './components/component-common.scss';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { useState, useRef, useCallback } from 'react';

function App() {
  const [todos, setTodos] = useState(createBulkTodos);

  let nextId = useRef(2501);

  const addList = useCallback(
    (text) => {
      setTodos([
        ...todos,
        { id: nextId.current++, text: text, checked: false },
      ]);
    },
    [todos],
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );

  function handleRemove(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  // const removeList = useCallback((id)=>{
  //   setTodos(
  //     todos.filter(todo=>todo.id!==id)
  //   )
  // }, [todos])

  function createBulkTodos() {
    const arr = [];
    for (let i = 1; i <= 15; i++) {
      arr.push({
        id: i,
        text: `해야 할 일 ${i}`,
        checked: false,
      });
    }
    return arr;
  }

  return (
    <TodoTemplate>
      <TodoInsert onInsert={addList} />
      <TodoList todo={todos} onRemove={handleRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}
export default App;
