import {CompleteIcon} from '../icons/completeIcon';
import {DeleteIcon} from '../icons/deleteIcon';
import './item.css'; 


function TodoItem (props){ 
    return (
        <li className='item'>
          <CompleteIcon
          completed={props.completed}
          onComplete={props.onComplete}
          />

          <p className={`item-p ${props.completed && "item-p--complete"}`} >{props.text}</p>

          <DeleteIcon
          onDelete={props.onDelete}
          />
         
        </li>
      );
};

export { TodoItem };
