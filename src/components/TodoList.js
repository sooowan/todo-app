import { useCallback } from 'react';
import TodoListItem from './TodoListItem';
import { List } from 'react-virtualized';
import styled from 'styled-components';

const NoContent = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  /* background-color: #f6f8fa; */
  padding: 12px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #adadad;
`;

const ListWrap = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

export default function TodoList({ todo, onRemove, onToggle }) {
  // const rowRenderer = useCallback(
  //   ({ index, key, style }) => {
  //     const td = todo[index]; //index는 필수로 index로, idx같은걸로는 안됨
  //     return (
  //       <TodoListItem
  //         todo={td}
  //         key={key}
  //         onRemove={onRemove}
  //         style={style}
  //         onToggle={onToggle}
  //       />
  //     );
  //   },
  //   [onRemove, todo, onToggle],
  // );

  return (
    // <>
    //   {todo.length === 0 ? (
    //     <NoContent>할 일을 추가해 보세요!</NoContent>
    //   ) : (
    //     <List
    //       width={500}
    //       height={560}
    //       rowCount={todo.length}
    //       rowHeight={56}
    //       rowRenderer={rowRenderer}
    //       list={todo}
    //       style={{
    //         outline: 'none',
    //         width: '100%',
    //         height: '100%',
    //         padding: '12px',
    //         backgroundColor: '#f6f8fa',
    //         borderRadius: '8px',
    //       }}
    //     />
    //   )}
    // </>
    <ListWrap>
      {todo.length === 0 ? (
        <NoContent>할 일을 추가해 보세요!</NoContent>
      ) : (
        todo.map((td) => (
          <TodoListItem
            todo={td}
            key={td.index}
            onRemove={onRemove}
            onToggle={onToggle}
          />
        ))
      )}
    </ListWrap>
  );
}
