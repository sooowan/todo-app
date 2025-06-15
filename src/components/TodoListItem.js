import { GoCheckCircle, GoCheckCircleFill } from 'react-icons/go';
import { BsFillDashCircleFill } from 'react-icons/bs';

export default function TodoListItem({ todo, onRemove, onToggle }) {
  return (
    <div className="TodoListItem">
      <div
        className={'ui-check' + (todo.checked ? ' checked' : '')}
        onClick={() => onToggle(todo.id)}
      >
        {todo.checked ? <GoCheckCircleFill /> : <GoCheckCircle />}
        <div className="text-wrap">
          <span className="text">{todo.text}</span>
          <span className="time">{todo.time}</span>
        </div>
      </div>
      <button
        type="button"
        className="btn btn-remove"
        onClick={() => onRemove(todo.id)}
      >
        <BsFillDashCircleFill />
      </button>
    </div>
  );
}
