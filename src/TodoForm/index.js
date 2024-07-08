import React from "react";
import './TodoForm.css';
import { TaskContext } from "../TaskContext";


function TodoForm() {
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TaskContext)

    const [ newTodoValue , setNewTodoValue] = React.useState('')

    const onSubmit = (event)=>{
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (event) =>{
        setNewTodoValue(event.target.value);
    }



    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea 
            placeholder="Nueva Tarea ... "
            value={newTodoValue}
            onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
                <button type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                    >Cancelar</button>
                <button type="submit"
                    className="TodoForm-button TodoForm-button--add">Añadir</button>
            </div>
        </form>
    )
}

export { TodoForm };