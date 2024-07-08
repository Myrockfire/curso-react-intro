import React from "react";
import { useLocalStorage } from './useLocalStorage';

const TaskContext = React.createContext();

function TaskProvider ({ children }) {

  /* Estados de React */

  const {
    item:todos,
    saveItem:saveTasks,
    loading, 
    error
  } = useLocalStorage('TASK_V1', []);

  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);



  /* Estados derivados, usan un estado real ya creado para realizar alguna operación. */  
  const completedTasks = todos.filter(todo => !!todo.completed).length;
  const totalTasks = todos.length ;
  const searchedTask = todos.filter((todo) =>{
    const taskText = todo?.text?.toLowerCase(); 
    console.log(taskText);
    const searchText = searchValue?.toLowerCase();
    console.log(searchText);
    return taskText?.includes(searchText);
  });

 const addTodo = (text) =>{
    const newList = [...todos];
    newList.push({
      text,
      completed:false
    });
    saveTasks(newList);
 }

  const completeTask = (text) => {
    const newList = [...todos];
    const index = newList.findIndex(
      (todos) => todos.text === text
      );
    newList[index].completed = true
    saveTasks(newList)
  };

  const deleteTask = (text) => {
    const newList = [...todos];
    const index = newList.findIndex(
      (todos) => todos.text === text
      );
    newList.splice(index, 1);
    saveTasks(newList)
  };


  return (
    <TaskContext.Provider value={{
      loading,
      error,
      completedTasks,
      totalTasks,
      searchValue,
      setSearchValue,
      searchedTask,
      completeTask,
      deleteTask,
      openModal,
      setOpenModal,
      addTodo,
    }}>
      {children}
    </TaskContext.Provider>
    );
};


export { TaskContext, TaskProvider};