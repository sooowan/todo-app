import { useCallback } from 'react';
import TodoListItem from './TodoListItem';
import { List } from 'react-virtualized';

export default function TodoList({ todo, onRemove, onToggle }) {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const td = todo[index]; //index는 필수로 index로, idx같은걸로는 안됨
      return (
        <TodoListItem
          todo={td}
          key={key}
          onRemove={onRemove}
          style={style}
          onToggle={onToggle}
        />
      );
    },
    [onRemove, todo, onToggle],
  );

  return (
    <div style={{ overflow: 'auto' }}>
      <List
        width={488}
        height={520}
        rowCount={todo.length}
        rowHeight={52}
        rowRenderer={rowRenderer}
        list={todo}
        style={{ outline: 'none', width: '100%' }}
      />
    </div>
  );
}
