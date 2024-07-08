
import { TaskProvider } from '../TaskContext';
import { AppUi } from './appUi';
import React from 'react';


function App() {
  
  
  return (
    <TaskProvider>
      <AppUi/>
      
    </TaskProvider>
    
  )
}; 



export default App;
