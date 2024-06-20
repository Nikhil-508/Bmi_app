import React,{useState}from 'react'
import './Bmi.css'

const Bmi = () => {

  const [age, setAge] = useState('')
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [bmi, setBmi] = useState('')
  const [msg, setMsg] = useState('')
  const [errorMessage, setErrorMessage] = useState('');

  const refresh = (e) => {
    window.location.reload()
  }

  const handleCalculations = (e)=>{

    if(weight === '' || height === '' ){
      setErrorMessage("Hello Please enter your weight and height")
    
    }
      let bmiFormula = (weight/(height*height)) * 703;
      setBmi(bmiFormula.toFixed(2))
  
    if(bmiFormula < 25){
      setMsg("You're healthy")
    }else{
      setMsg("You're unhealhty,please seek for medication")
    }
  }

  return (

    <div className='app'>
        <div className='container'>
        <h1 className='text-yellow-50'>BMI Calculator</h1> 

      <form onSubmit={handleCalculations} className='form' action="">

        <div>
            <label className='labels'>Age:</label>
            <input className='bmi-input' type="number" placeholder='Age...' value={age} onChange={(e)=>setAge(e.target.value)} />
        </div>

        <div>
            <label className='labels'>Weight:</label>
            <input className='bmi-input' type="number" placeholder='Weight...' value={weight} onChange={(e)=>setWeight(e.target.value)} />
        </div>

        <div>
            <label className='labels'>Height</label>
            <input className='bmi-input' type="number" placeholder='Height...'value={height} onChange={(e)=>setHeight(e.target.value)}/>
        </div>

        <div className='buttons my-10 '>
        <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-5 rounded shadow-lg' type='submit'>Calculate</button>
        <button onClick={refresh} className=" mx-5 bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-5 rounded shadow-lg" type='button'>Refresh</button>
        </div>

        <div className=' my-10 result text-white'>
          <h3>Age:{age}</h3>
          <h3>Your Bmi is:{bmi}</h3>
          <p className='p-msg'>{msg}</p>
        </div>
        {errorMessage && (
        <div className=' flex justify-center'>
          <p className='my-10 text-yellow'>{errorMessage} !!!</p>
        </div>
        )}

      </form>
        </div>
     
    </div>
  )
}

export default Bmi
