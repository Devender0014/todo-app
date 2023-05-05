import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodosSuccess } from '../Redux/action'
export const Addtodo = () => {
    const [todo,setTodo] = useState("")
    const dispatch = useDispatch()
   const handleSubmit = (e)=>{
    e.preventDefault()
    const payload = {
        id : Date.now(),
        todos : todo,
        completed : false
    }
    
    dispatch(addTodosSuccess(payload))
    setTodo("")
   }
  return (
    <div>
        <input type="text"  placeholder='Add Todo' onChange={(e)=>setTodo(e.target.value)}/>
        <button onClick={handleSubmit} >Add</button>
    </div>
  )
}
