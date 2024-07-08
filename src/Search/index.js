import './search.css';
import React from 'react';

function Search ({searchValue, setSearchValue}){
  
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