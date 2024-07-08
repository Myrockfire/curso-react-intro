import { TaskContext } from '../TaskContext';
import './search.css';
import React from 'react';

function Search (){

  const {
    searchValue,
    setSearchValue
  } = React.useContext(TaskContext);
  
    return (
      <input 
      placeholder="Buscar" 
      className='search' 
      value={searchValue} 
      onChange={ 
        (event) => {
          setSearchValue(event.target.value);
        } }
        />
    );
  }


export {Search};