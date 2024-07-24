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

  const handleCalculations = (e) => {
    e.preventDefault(); 
  
    if (isNaN(weight) || isNaN(height) || weight === '' || height === '') {
      setErrorMessage("Please enter valid weight and height.");
      setBmi('');
      setMsg('');
      return;
    }
  
    let bmiFormula = (weight * 10000) / (height * height)
    setBmi(bmiFormula.toFixed(2));
  
    if (bmiFormula < 18.5) {
      setMsg("You're underweight, please consult with a healthcare provider.");
    } else if (bmiFormula >= 18.5 && bmiFormula < 24.9) {
      setMsg("You're healthy.");
    } else if (bmiFormula >= 25 && bmiFormula < 29.9) {
      setMsg("You're overweight, consider adopting a healthier lifestyle.");
    } else {
      setMsg("You're obese, please seek medical advice.");
    }   
  
    setErrorMessage('');
  };
  

  return (

    <div className='app mt-3'>
        <div className='container h-[650px] pb-5 pt-1 mt-[-25px]'>
        <h1 className='text-[#FFFF]'>BMI Calculator</h1> 

      <form onSubmit={handleCalculations} className='form' action="">

        <div>
            <label className='labels'>Age:</label>
            <input className='bmi-input rounded-lg' type="number" placeholder='Age...' value={age} onChange={(e)=>setAge(e.target.value)} />
        </div>

        <div>
            <label className='labels'>Weight:</label>
            <input className='bmi-input rounded-lg' type="number" placeholder='Weight(kg)...' value={weight} onChange={(e)=>setWeight(e.target.value)} />
        </div>

        <div>
            <label className='labels'>Height</label>
            <input className='bmi-input rounded-lg' type="number" placeholder='Height(cm)...'value={height} onChange={(e)=>setHeight(e.target.value)}/>
        </div>

        <div className='buttons my-10 '>
        <button className=' bg-[#047857] hover:bg-[#064e3b] rounded-lg text-white font-bold py-3 px-5 shadow-lg' type='submit'>Calculate</button>
        <button onClick={refresh} className=" mx-5 bg-red-500 hover:bg-red-700 rounded-lg text-white font-bold py-3 px-5  shadow-lg" type='button'>Refresh</button>
        </div>

        <div className=' my-10 result text-white'>
          <h3>Age:{age}</h3>
          <h3>Your Bmi is:  {bmi}</h3>
          <p className='p-msg'>{msg}</p>
        </div>
        {errorMessage && (
        <div className=' flex justify-start'>
          <p className='my-10 text-rose-500'>{errorMessage} !!!</p>
        </div>
        )}

      </form>
        </div>
     
    </div>
  )
}

export default Bmi
