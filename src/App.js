
import './App.css';
import './components/component-common.scss';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import {useState, useRef, useCallback} from 'react'

function App() {
  const [todos, setTodos] = useState(createBulkTodos)

  let nextId = useRef(2501);

  const addList = useCallback((text)=>{
    setTodos([
      ...todos,
      { id: nextId.current++, text:text, checked:false}
    ]);
  }, [todos])

  function handleRemove(id){
    setTodos(
      todos.filter(todo=>todo.id!==id)
    )
  }
  // const removeList = useCallback((id)=>{
  //   setTodos(
  //     todos.filter(todo=>todo.id!==id)
  //   )
  // }, [todos])

  function createBulkTodos(){
    const arr = [];
    for(let i=1;i<=25;i++){
      arr.push({
        id:i,
        text: `해야 할 일 ${i}`,
        checked: false
      })
    }
    return arr;
  }

  return (
      <TodoTemplate>
        <TodoInsert onInsert={addList}/>
        <TodoList todo={todos}  onRemove={handleRemove}/>
      </TodoTemplate> 
  );
}
export default App;
