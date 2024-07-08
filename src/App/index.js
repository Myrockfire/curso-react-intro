
import { AppUi } from './appUi';
import React from 'react';
import { useLocalStorage } from './useLocalStorage';

/* const defaultTasks = [
  {text:'Ir a trabajar', completed:false},
  {text:'Pasear al perro', completed:false},
  {text: 'comprar pan', completed: true},
  {text: 'Dormir la siesta', completed:false},
  {text:'Pagar el cable', completed:false}

]

localStorage.setItem('TASK_V1', JSON.stringify(defaultTasks)); */



function App() {
  
  
  /* Estados de React */

  const {
    item:todos,
    saveItem:saveTasks,
    loading, 
    error} = useLocalStorage('TASK_V1', []);
  const [searchValue, setSearchValue] = React.useState('');


  /* Estados derivados, usan un estado real ya creado para realizar alguna operación. */  
  const completedTasks = todos.filter(todo => !!todo.completed).length;
  const totalTasks = todos.length ;
  const searchedTask = todos.filter((todo) =>{
    const taskText = todo.text.toLowerCase(); 
    const searchText = searchValue.toLowerCase();
    return taskText.includes(searchText);
  });

 

  const completeTask = (text) => {
    const newList = [...todos];
    const index = newList.findIndex(
      (todos) => todos.text === text
      );
    newList [index].completed = !newList[index].completed;
    saveTasks(newList)
  }

  const deleteTask = (text) => {
    const newList = [...todos];
    const index = newList.findIndex(
      (todos) => todos.text === text
      );
    newList.splice(index, 1);
    saveTasks(newList)
  }
  
  return (
    <AppUi
    loading={loading}
    error={error}
    completedTasks={completedTasks}
    totalTasks={totalTasks}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTask={searchedTask}
    completeTask={completeTask}
    deleteTask={deleteTask}
    />
  )
}; 



export default App;
