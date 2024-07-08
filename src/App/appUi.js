import React from 'react';
import { Counter } from '../Counter';
import { Search } from '../Search';
import { TodoList } from '../List';
import { TodoItem } from '../item';
import { NewTask } from '../NewTask';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { TaskContext } from '../TaskContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';



function AppUi(){
    const {
        loading,
        error,
        searchedTask,
        completeTask,
        deleteTask,
        openModal,
        setOpenModal,
    } = React.useContext(TaskContext)
    return (
    <>
        <Counter/>
        <Search/>
        <TodoList>
            {loading && (
                <>
                    <TodosLoading/>
                    <TodosLoading/>
                    <TodosLoading/>
                </>
            )}
            {error && <TodosError/>}
            {(!loading && searchedTask.length === 0)&& <EmptyTodos/>}

            {searchedTask.map(task => (
                <TodoItem 
                key={task.text} 
                text={task.text} 
                completed={task.completed}
                 onComplete={ () => completeTask(task.text)}
                onDelete= { () => deleteTask(task.text)}
                />
            ))}
        </TodoList>
    
        <NewTask 
            setOpenModal={setOpenModal}
            />

        {openModal && (
            <Modal>
                <TodoForm/>
            </Modal>
        )}
    </>
    );
}

export {AppUi};