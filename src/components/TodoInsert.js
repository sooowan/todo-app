import { useState,useCallback } from 'react'
import { MdAdd } from 'react-icons/md'

export default function TodoInsert({onInsert}){
    const [input, setInput] = useState('');

    const onSubmint = useCallback((e)=>{
        onInsert(input);
        setInput('');
        e.preventDefault();
    },[onInsert, input])

    return (
        <form  className='TodoInsert' onSubmit={onSubmint}>
            <input className='ui-input' placeholder='할 일을 입력해 주세요.' value={input} onChange={(e)=>setInput(e.target.value)}/>
            <button type='submit' className='btn btn-default'>
                <MdAdd/>
            </button>
        </form>
    )
}