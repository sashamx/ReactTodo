import React from 'react'
import './todo-list-item.css'

const TodoListItem = ({label, done, important, onDeleted, onToogleImpotant, onToogleDone}) => {  
    let classNames = 'todo-list-item'
        
    if(done) classNames += ' done' 
    if(important) classNames += ' activeItem' 

    return (
        <div className="row">
            <div className="col">
                <span className={classNames}>
                    <span 
                        className="todo-list-item-label"
                        onClick={onToogleDone}
                    >
                        {label}
                    </span>
                </span>
            </div>
            <div>
                <button 
                    className="btn btn-outline-dark btn-sm" 
                    onClick={onDeleted}                       
                >
                    <i className="fa fa-trash"></i>
                </button>                        
            </div>
            <div className="ml-2">
                <button 
                    className="btn btn-outline-success btn-sm"
                    onClick={onToogleImpotant}
                >
                    <i className="fa fa-check"></i>
                </button>                        
            </div>
        </div>            
    )
    
}
export default TodoListItem;