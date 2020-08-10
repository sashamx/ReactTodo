import React from 'react';

const AppHeader = ({done, todo}) => {
    return (
      <div className="row my-2">
        <div className="col">
          <h1>My Todo list</h1>
        </div>
        <div className="col align-self-end">
          {todo} more todo, {done} done
        </div>
      </div>      
    )
}
export default AppHeader