import './newTask.css';


function NewTask () {
    return (
        <button type="button" className='newTask'
        onClick={() => {console.log('le diste click')}
        }>+</button>
    );
}


export { NewTask };