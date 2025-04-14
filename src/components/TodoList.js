import { useCallback } from 'react';
import TodoListItem from './TodoListItem';
import { List } from 'react-virtualized';

export default function TodoList({ todo, onRemove }) {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const td = todo[index]; //index는 필수로 index로, idx같은걸로는 안됨
      return (
        <TodoListItem todo={td} key={key} onRemove={onRemove} style={style} />
      );
    },
    [onRemove, todo],
  );

  return (
    <List
        className="TodoList"
        width={488}
        height={560}
        rowCount={todo.length}
        rowHeight={52}
        rowRenderer={rowRenderer}
        list={todo}
        style={{ outline: 'none' }}
    />
  );
}
