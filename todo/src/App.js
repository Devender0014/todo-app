
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { Addtodo } from './Pages/Addtodo';
import { Todos } from './Pages/Todos';

function App() {
  const todo = useSelector(store => store.todos)
  const numCompleted = todo.reduce((count, todo) => {
    return count + (todo.completed ? 1 : 0);
  }, 0);
useEffect(()=>{

},[numCompleted])
  console.log(numCompleted)
  return (
    <div className="App">
      <div>
      <h1>Completed : {numCompleted}</h1>
      </div>
      <Addtodo/>
      <Todos/>
    </div>
  );
}

export default App;
