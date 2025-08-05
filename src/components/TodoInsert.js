import { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import styled from 'styled-components';

const ErrMsg = styled.span`
  color: #936d10;
  font-size: 12px;
  line-height: 18px;
  margin-top: 4px;
  margin-left: 4px;
  display: inline-block;
`;
const TodoInsertWrap = styled.div`
  padding: 12px 0;
  margin-top: 12px;
`;
export default function TodoInsert({ onInsert, error }) {
  const [input, setInput] = useState('');

  const onSubmint = useCallback(
    (e) => {
      onInsert(input);
      setInput('');
      e.preventDefault();
    },
    [onInsert, input],
  );

  return (
    <TodoInsertWrap>
      <form className="TodoInsert" onSubmit={onSubmint}>
        <input
          type="text"
          className="ui-input w-full"
          placeholder="할 일을 입력해 주세요."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          id="todo"
          name="todo"
        />
        <button type="submit" className="btn btn-default">
          <MdAdd />
        </button>
      </form>
      {error && <ErrMsg>{error}</ErrMsg>}
    </TodoInsertWrap>
  );
}
