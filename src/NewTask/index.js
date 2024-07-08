import './newTask.css';


function NewTask ({setOpenModal}) {
    return (
        <button type="button" className='newTask'
        onClick={() => {setOpenModal(state => !state)}
        }>+</button>
    );
}


export { NewTask };