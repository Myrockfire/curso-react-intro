import { TaskContext } from '../TaskContext';
import './Counter.css';
import React from 'react';


function Counter (){
  const {
    completedTasks,
    totalTasks
  } = React.useContext(TaskContext);

    return (
      <h1 className='counter'>
        Has completado <span>{completedTasks}</span> de <span>{totalTasks}</span> tareas
      </h1>
    );
  };



export {Counter};