import './App.css'
import useAdvice from './hooks/useAdvice';
import { useEffect } from 'react';
import Spinner from './components/Spinner';

function App() {

  const {advice, getAdvice, hasAdvice, spinner, notFound} = useAdvice();
  useEffect( () => {
    getAdvice()
  }, [])
  const handleClick = () =>{
    getAdvice();
  } 

  return (
    <>
      <div className='main-component'>
        <p className='advice-number'>Advice: {hasAdvice ? 
        `#${advice.slip.id}` : 'Loading...'}</p>
        <div className='advice-section'>
          <p className='advice-text'>
            {spinner && <Spinner/>}
            {hasAdvice && `"${advice.slip.advice}"`}
            {notFound && "Sorry, advice service no available"}
          </p>
          <div className='advice-divider'></div>
        </div>
        <div className='image-section' onClick={handleClick}>
          <img className='dice' src="src/assets/icon-dice.svg" alt="dice icon" />
        </div>
      </div>
      
      
    </>
  )
}

export default App
