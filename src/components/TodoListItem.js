import { useState } from 'react'
import { MdCheckBox, MdCheckBoxOutlineBlank,MdRemoveCircleOutline } from 'react-icons/md'

export default function TodoListItem({todo, onRemove, style}){
    const [done, setDone] = useState(todo.checked);

    function handleToggle(){
        done?setDone(false):setDone(true);
    }

    return (
        <div className='TodoListItem-virtualized' style={style}>
            <div className='TodoListItem'>
                <div className={'ui-check'+ (done? " checked" : "")} onClick={handleToggle}>
                    {done ? <MdCheckBox/>:<MdCheckBoxOutlineBlank/>}
                    <div className='text'>{todo.text}</div>
                </div>
                <button type='button' className='btn btn-remove' onClick={()=>onRemove(todo.id)}>
                    <MdRemoveCircleOutline/>
                </button>
            </div>
        </div>
    )
}