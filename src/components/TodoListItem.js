import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from 'react-icons/md';

export default function TodoListItem({ todo, onRemove, style, onToggle }) {
  return (
    <div className="TodoListItem-virtualized" style={style}>
      <div className="TodoListItem">
        <div
          className={'ui-check' + (todo.checked ? ' checked' : '')}
          onClick={() => onToggle(todo.id)}
        >
          {todo.checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <span className="text">{todo.text}</span>
        </div>
        <button
          type="button"
          className="btn btn-remove"
          onClick={() => onRemove(todo.id)}
        >
          <MdRemoveCircleOutline />
        </button>
      </div>
    </div>
  );
}
