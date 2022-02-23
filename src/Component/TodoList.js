import React,{useEffect, useState} from 'react';
//import List from './List';

function TodoList() {
    const getdataLocal=()=>{
    let item= localStorage.getItem("lists");
     console.log(item);
     if(item){
         return JSON.parse(localStorage.getItem("lists"))
     }
     else{
         return []
     }
}

    const[input,setInput]=useState("")
    const[list,setList]=useState(getdataLocal())
    const handler=(e)=>{
        setInput(e.target.value)
    }
    const subhandle=(e)=>{
        e.preventDefault()
        setList([...list,input])
        setInput("")
    }
    const edithand=(editIndex)=>{
        const edit=list.filter((li,index)=>index!==editIndex)
        setList(edit)
        const editselector=list.find((li,index)=>index===editIndex)
        setInput({input:editselector.input})
    }
    const deletHand=(Index)=>{
        const delet=list.filter((li,index)=>index!==Index)
        setList(delet)
        
    }
    useEffect(()=>{
        localStorage.setItem("lists",JSON.stringify(list))
    },[list])
  return (
      <>
      <input type="text" placeholder='task add'  onChange={handler}/>
      <button onClick={subhandle}>Add</button>
      <hr />
      {
          list.length>0?<table border="1">
              <thead>
                  <tr>
                      <th>s.no</th>
                      <th>task</th>
                      <th>edit/delete</th>
                  </tr>
                  </thead>
                  <tbody>
                    {list.map((li,index)=>{
                      return (<tr key={index}>
                          <td>{index+1}</td>
                          <td>{li}</td>
                          <td className='btn'>
                              <button type="button" onClick={()=>edithand(index)}>edit</button>
                              <button type="button" onClick={()=>deletHand(index)}>delete</button>
                          </td>
                      </tr>)
                    })}
                  </tbody>
                
          </table>
          
         :null }
          
        
      </>
  )


}

export default TodoList;
