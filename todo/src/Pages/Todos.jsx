import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import "./todo.css"

export const Todos = () => {
    const todo = useSelector(store => store.todos)
    

    const handleChange = (id) =>{
        const newTodos = todo.map(todo => {
            if (todo.id === id) {
              return { ...todo, completed: !todo.completed };
            } else {
              return todo;
            }
          });
        localStorage.setItem('todos-x', JSON.stringify(newTodos));
        window.location.reload()
        
    }
    return (
        <div className="todos">

            {
                todo.length > 0 && todo.map((todos) => {
                    return <div key={todos.id} style={{display:"flex", justifyContent:"center",gap:"10px"}} >
                        <input type="checkbox" checked={todo.completed} onChange={()=>handleChange(todos.id)} />
                        <h1>{todos.todos}</h1>
                    </div>
                })
            }
        </div>
    )
}
