import { Counter } from '../Counter';
import { Search } from '../Search';
import { TodoList } from '../List';
import { TodoItem } from '../item';
import { NewTask } from '../NewTask';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';





function AppUi({
    loading,
    error,
    completedTasks,
    totalTasks,
    searchValue,
    setSearchValue,
    searchedTask,
    completeTask,
    deleteTask

}){
    
    return (
        <>
          <Counter 
          completadas={completedTasks} 
          total={totalTasks}/>
          <Search 
          searchValue ={searchValue} 
          setSearchValue={setSearchValue} />
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
    
          <NewTask />
          </>
      );
}

export {AppUi};