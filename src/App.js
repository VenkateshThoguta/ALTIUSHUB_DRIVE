import React, { useEffect, useState } from 'react'

const App = () => {
  const [name,setname]=useState('')
  const [pass,setpass]=useState('')
  const [login,setlogin]=useState(false)
  const exp=1000*3;
  const pre=[
    {
      uname:'og',upass:'og'
    }
  ]
  let con;
  useEffect(()=>{
    const fun=()=>{
      const data=localStorage.getItem('user');
      if(data){
        const t=Date.now();
        const p=JSON.parse(data).ltime
        if(p-t>exp){
          out();
        }
        else{
          setlogin(true)
        }
      }
    }
    fun();
  },[])
  useEffect(()=>{
    let t;
    t=setTimeout(()=>{
      out();
    },exp)
  },[login])
  const hand=()=>{
    const data=pre.find((item)=>item.uname===name && item.upass===pass)
    const p=Date.now()
    if(data){
      localStorage.setItem('user',JSON.stringify({lname:name,ltime:p}));
      setlogin(true);
    }
    else{
      alert('invalid')
    }
  }
  const out=()=>{
    localStorage.removeItem('user');
    setname('')
    setpass('')
    setlogin(false);
  }
  if(login){
    con=(
      <>
      <h1>welcome</h1>
      <button onClick={out}>Logout</button>
      </>
    )
  }
  else{
    con=(
      <>
      <label>name:</label>
      <input type='text' value={name} onChange={(e)=>setname(e.target.value)}/>
      <label>pass:</label>
      <input type='text' value={pass} onChange={(e)=>setpass(e.target.value)}/>
      
      <button onClick={hand}>Login</button>
      </>
    )
  }
  return (
    con
  )
}

export default App
