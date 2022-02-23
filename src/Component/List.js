import React from 'react';

function List({Todos,editHandle,deleteHandle}) {
  return (<>
      {Object.keys(Todos).length>0?<table border="1">
          <thead>
              <tr>
                  <th>Sno</th>
                  <th>task</th>
                  <th>edit/delete</th>
              </tr>
          </thead>
          <tbody>
              {
                  Todos.map((todo,index)=>{
                      return <tr key={index}>
                          <td>{index+1}</td>
                          <td>{todo.task}</td>
                          <td className>
                              <button type="button" onClick={()=>editHandle(index)} className="btn btn-success">edit</button>
                              <button type="button" onClick={()=>deleteHandle(index)} className="btn btn-success">delete</button>
                          </td>
                      </tr>
                  })
              }
          </tbody>
      </table>:null}
    
  </>
  )
}

export default List;
