import './Counter.css';


function Counter ({completadas, total}){
    return (
      <h1 className='counter'>
        Has completado <span>{completadas}</span> de <span>{total}</span> tareas
      </h1>
    );
  };



export {Counter};