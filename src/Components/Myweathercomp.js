import React, { useState,useEffect } from 'react'

const Myweathercomp = () => {
    const [wet,setwet]=useState({
        temp:'',main:''
    })
    useEffect(()=>{
        const fun=async()=>{
            try{
                                        
                const res=await fetch('https://api.openweathermap.org/data/2.5/weather?q=oslo&appid=93f26e3c57081a6210de53b8dcfdfea4');
                if(res.ok){
                    const data=await res.json();
                    setwet({
                        temp:data.main.temp+'F',
                        main:data.weather[0].main
                    })
                }
                else{
                    console.log('not detected')
                }
            }
            catch(err){
                console.log(err);
            }
        }
        fun();
    },[]);
  return (
    <div>
      <h1>temp:{wet.temp}</h1>
      <h1>wet:{wet.main}</h1>
    </div>
  )
}

export default Myweathercomp
