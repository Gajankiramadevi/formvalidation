import React,{useEffect,useState} from 'react';
import List from "./List"

function Todo() {
    const intinal={
        task:""
    }
    const[input,setInput]=useState(intinal)
  const[Todos,setTodos]=useState([])

  const[Errors,setErrors]=useState({})
  const[issubmit,setIssubmit]=useState(false)
  const changeHan=(e)=>{
    setInput({...input,[e.target.name]:e.target.value})
}
const submitHan=(e)=>{
  e.preventDefault();
  setIssubmit(true)
  setErrors(validate(input))
}
const deleteHandle=(Index)=>{
    const detete=Todos.filter((todo,index)=>index!==Index)
    setTodos(detete)

}
const editHandle=(editIndex)=>{
    const detete=Todos.filter((todo,index)=>index!==editIndex)
    setTodos(detete)
    const edit=Todos.find((index)=>index===editIndex)
    setInput({input:edit.input})
    
}
useEffect(()=>{
    console.log(Errors)
    if(Object.keys(Errors).length===0&&issubmit){
        const newTodo=[...Todos,input]
        setTodos(newTodo)
    }
},[Errors])
const validate=(values)=>{
    const error={}
    const data=/^[a-zA-z0-9]*$/
    if(!values.task){
        error.task="task required!"
    }
    else if(!values.task.match(data)){
        error.task="task not valid"
    }
    return error

}

  return (<>
    <div className="container">
          <div className='row'>
              <div className='col'></div>
              <div className='col'>
                  <form onSubmit={submitHan}>
                      <div className='row'>
                          <div className='col'>
                    <div className='form-group'>
                          <input type="text"onChange={changeHan} name="task" vaule={input.task} placeholder='enter task'/>
                      <p>{Errors.task}</p>
                      </div>
                      </div>
.                      </div>
                     <div className='row'>
                       <div className='col'>
                      <div className='form-group'>
                          <button type="submit" className='btn btn-success mr-3'>Save</button>
                          
                        </div>
                        </div>
                        </div>
                  </form>
                  <div className='row mt-4'>
     <div className='col  m-md-auto'>
         <div className='gutter-gap'>
             <List Todos={Todos} deleteHandle={deleteHandle}  editHandle={editHandle}/>
         </div>
     </div>
 </div>
                  </div>  
              </div>
            </div>
     
   </>                             
      
  )
      
  
}

export default Todo;
