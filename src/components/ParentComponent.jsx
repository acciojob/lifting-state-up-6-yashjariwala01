import React, { useState } from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
    const [todos, setTodos]= useState([
        {id:1, title:"Learn React" , status:false},
        {id:2, title:"build a React app" , status:false},
        {id:3, title:"Deploy the React app" , status:false}
    ])
    
  return (
    <div>
        <h1>Parent Component</h1>
        <ChildComponent todos={todos} setTodos={setTodos}/>  
    </div>
  )
}

export default ParentComponent
