
import './App.css'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useState } from 'react'

function App() {
  const [principle,setPrinciple]=useState("")
  const [rate,setRate]=useState("")
  const [year,setYear]=useState("")
  const [interest, setInterest]=useState(0)
  const [isPrinciple,setisPrinciple]=useState(true)
  const [isRate,setisRate]=useState(true)
  const [isYear,setisYear]=useState(true)

  const validate=(e)=>{
    console.log(e.target.name);
    
    console.log(e.target.value);

    console.log(!!e.target.value.match('^[0-9]*$'));
    if(!!e.target.value.match('^[0-9]*$')){
      if(e.target.name=='principle'){
        setPrinciple(e.target.value)
        setisPrinciple(true)
  
      }
      else if(e.target.name=='rate'){
        setRate(e.target.value)
        setisRate(true)
  
      }
      else{
        setYear(e.target.value)
        setisYear(true)
      }
    }
    else{
      if(e.target.name=='principle'){
        setPrinciple(e.target.value)
        setisPrinciple(false)
  
      }
      else if(e.target.name=='rate'){
        setRate(e.target.value)
        setisRate(false)
  
      }
      else{
        setYear(e.target.value)
        setisYear(false)
      }
    }
  
  }
  const handleReset=()=>{
    setPrinciple("")
    setRate("")
    setYear("")
    setisPrinciple(true)
    setisRate(true)
    setisYear(true)
 


  }
  const HandleCalculate=()=>{
    setInterest((principle*rate*year)/100)
  }
 

  return (
    <>
      <div style={{height:'100vh'}} className='bg-dark w-100 d-flex justify-content-center align-items-center'>
        <div style={{width:'500px'}} className='p-5 bg-light rounded'>
          <h1>Simple Interest App</h1>
          <p>Calculate your simple interest easily</p>
          <div style={{height:'150px'}} className='bg-warning rounded d-flex justify-content-center align-items-center flex-column'>
             <h1>₨ {interest}</h1>
             <p>Total simple interest</p>
          </div>
         <div className="my-3">
         <TextField name='principle' id="outlined-basic" value={principle} label="₨ Principle amount" variant="outlined" className='w-100' onChange={(e)=>validate(e)}/>
         { !isPrinciple && <span className='text-danger'>*Invalid input</span>}
         </div>
         <div className="mb-3">
         <TextField name='rate' id="outlined-basic" value={rate} label="Rate of interest (p.a)%" variant="outlined" className='w-100' onChange={(e)=>validate(e)}/>
         {!isRate && <span className='text-danger'>*Invalid input</span>}
         </div>
         <div className="mb-3">
         <TextField name='year' id="outlined-basic" value={year} label="Year (Yr)" variant="outlined" className='w-100' onChange={(e)=>validate(e)}/>
        {!isYear && <span className='text-danger'>*Invalid input</span>}
         </div>
         <div className='mb-3 d-flex justify-content-between'>
         <Button style={{width:'190px' ,height:'60px'}} variant="contained" color='success' disabled={isPrinciple && isRate && isYear ?false:true} onClick={HandleCalculate}>Calculate</Button>
         <Button onClick={handleReset} style={{width:'190px' ,height:'60px'}} variant="outlined">Reset</Button>
         </div>
        </div>
      </div>
    </>
  )
}

export default App