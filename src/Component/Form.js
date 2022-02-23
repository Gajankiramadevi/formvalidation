import React,{ useEffect, useState} from 'react';
function Form() {
    const initional={
        input:"",
        password:""
    }
    const getlocalstorage=()=>{
        const data=JSON.parse(localStorage.getItem("username"))
    }
    const[username,setUsername]=useState(initional)
    const[userError,setUserError]=useState(getlocalstorage())
    const[issubmit,setIssubmit]=useState(false)
    const changeHandler=(e)=>{
        setUsername({...username,[e.target.name]:e.target.value})
    }
const submitHandler=(e)=>{
        e.preventDefault()
        setIssubmit(true)
        setUserError(validate(username))
    }
    useEffect(()=>{
        console.log(userError)

        if(Object.keys(userError).length===0&&issubmit){
            localStorage.setItem("user",JSON.stringify(username))
        }
    },[userError,username])
    const validate=(values)=>{
        const error={};
        const OnlyString= /^[a-zA-Z ]*$/;
        const number=/^[0-9]*$/;
        if(!values.input){
            error.input="name required!"
        }
        else if(!values.name.match(OnlyString)){
            error.name="name not valid"
        }
        if(!values.password){
            error.password="password required!"
        }
        else if(!values.password.match(number)){
            error.password="password not valid"
        }
        return error
    }
  return (<>
  <div className='container'>
      {Object.keys(userError).length===0&& issubmit?(<div className='top'>Login success!</div>):<pre>{JSON.stringify(username)}</pre>}
      <div className='row'>
          <div className='col-md-5'></div>
          <div className='col-md-5'>
              <form onSubmit={submitHandler}>
                  <div className='row'>
                      <div className='col-md-6'>
                          <div className='form-group'>
                              <input type="text" name="input" value={username.input} onChange={changeHandler} className='form-control'placeholder='username' />
                              <p>{userError.input}</p>
                            </div>
                      </div>
                  </div>
                  <div className='row'>
                      <div className='col-md-6'>
                  <div className='form-group'>
                      <input type="text"onChange={changeHandler} name="password" value={username.password} className='form-control' placeholder="password"/>
                      <p>{userError.password}</p>
                  </div>
                  </div>
                  </div>
                  <button type="submit" className="btn btn-success">Login</button>
              </form>
              
          </div>
      </div>
  </div>
  </>
);
}
export default Form;
