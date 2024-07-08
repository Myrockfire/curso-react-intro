import React from "react";
import { Icons } from './';

function DeleteIcon ({onDelete}){
    return (
    < Icons 
        type="delete"
        color="gray"
        onClick={onDelete}
    />
    );
};

export { DeleteIcon };

