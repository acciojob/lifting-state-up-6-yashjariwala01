import React from 'react'

const ChildComponent = ({todos, setTodos}) => {

    const onComplete=(id)=>{
        setTodos(todos.map(item=>{
            if(id == item.id){
                return {...item , status:true};
            }
            return item;
        })
    )
}
  return (
    <div>
        <h2>Child Component</h2>
            <ul>{todos.map(item=>(
                <div style={{display:"flex",gap:"10px"}}>
                    <li key={item.id}>{item.title}</li>
                    {!item.status && <button onClick={()=>onComplete(item.id)}>complete</button>}
                </div>)
            )}</ul>
    </div>
  )
}

export default ChildComponent
