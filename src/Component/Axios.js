//import axios from 'axios';
import React, { useEffect,useState } from 'react';

function Axios() {
    const getdata=JSON.parse(localStorage.getItem(data))
    
    const[data,setData]=useState(getdata())

    
      useEffect(()=>{
          fetch("https://jsonplaceholder.typicode.com/users")
          .then((res)=>res.json())
          .then((res)=>setData(res))
          .catch((err)=>console.log(err))
          localStorage.setItem(JSON.stringify('data',data))
      },[data])
  return (
      <table border="1">
                       <thead>
                           <tr>
                        <th>Id</th>
                        <th>name</th>
                        <th>email</th>
                        </tr>
                        </thead>
                           <tbody>
                               
                               {
                                   data.map((item)=>{
                               return(
                               <tr key={item}>
                                   <td>{item.id}</td>
                                   <td>{item.name}</td>
                                   <td>{item.email}</td>
                               </tr>)
                                   })}
                                
                           </tbody>
                       

                   </table>
                       
                  
            
    
          
      
  );
}

export default Axios;
