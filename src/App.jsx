import './App.css'
import Button from '@mui/material/Button';
import { useState } from 'react';
import TextField from '@mui/material/TextField';





function App() {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [age, setAge] = useState('')
  const [bmi, setBmi] = useState(null)
  const [msg,setMsg] = useState('')

  const [isWeight ,setIsWeight] =useState(true)
  const [isHeight ,setIsHeight] =useState(true)
  const [isAge ,setIsAge] =useState(true)



  const validate = (e) => {
    let name = e.target.name
    let value = e.target.value
    // console.log(name, value);

    if (!!value.match(/^[0-9]*$/) ) {
      if (name == "height") {
        setHeight(value)
        setIsHeight(true)

      } else if (name == 'weight') {
        setWeight(value)
        setIsWeight(true)

      } else {
        setAge(value)
        setIsAge(true)

      }
    } else {
      if (name == "height") {
        setHeight(value)
        setIsHeight(false)

      } else if (name == 'weight') {
        setWeight(value)
        setIsWeight(false)

      } else {
        setAge(value)
        setIsAge(false)
        }
    }

  }

  const calculate = () => {
    
    let bmivalue = ((weight / (height * height)) * 10000).toFixed()
    setBmi(bmivalue)
    
    const determineMessage =(bmivalue)=>{
      let bmiMsg = ''
      if(bmivalue<18.5){
        
        bmiMsg = 'You are Underweight'
        
  
      }else if(bmivalue >=18.5 && bmivalue<=24.9){
        bmiMsg = 'You are Normal'
        
      }
      else if(bmivalue >=25 && bmivalue<=29.9){
        bmiMsg = 'You are Overweight'
        
      }else{
        bmiMsg = 'Obesity'
        
      }
      setMsg(bmiMsg)
    }
    determineMessage(bmivalue)

   

  }
  const handleReset = () => {
    setAge('')
    setHeight('')
    setWeight('')
    setIsHeight(true)
    setIsWeight(true)
    setIsAge(true)
    setBmi('')
    setMsg('')
  }

  return (
    <>
      <div className='main'>
        <div className='border calcContainer rounded '>
          <h2 className='text-center mt-3'>BMI Calculator</h2>
          <div className='result p-4 text-center'>
            <p className='message'> {bmi}</p>
            <p>{msg}</p>
          </div>

          <div className='p-4 '>
            <form>
                <TextField className='w-100' value={age} name='age' onChange={(e) => validate(e)}

                  id="outlined-number"
                  label="Age"
                  type="number"
                  inputProps={{ min: 2, max: 120 }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                
              <TextField id="standard-basic" label="Weight / Kg" variant="standard" value={weight} name='weight' onChange={(e) => validate(e)} className='mt-4 w-100' />
              <TextField id="standard-basic" label="Height / Cm" variant="standard" value={height} name='height' onChange={(e) => validate(e)} className='mt-4 w-100' />
            </form>
          </div>
          <div className='d-flex justify-content-evenly px-4 mb-3'>

            <Button variant="contained" style={{ height: '56px', width: '40%' }} onClick={calculate} disabled={isWeight && isHeight && isAge ? false:true}>Calculate</Button>
            <Button variant="outlined" style={{ height: '56px', width: '40%' }} onClick={handleReset}>Reset</Button>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
