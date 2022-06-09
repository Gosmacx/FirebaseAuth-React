import { useState } from 'react'
import './assets/tailwind.css'
import './App.css'
import photo from './assets/Saly-14.png'
import LoginSection from './compoenents/LoginSection'
import RegisterSection from './compoenents/RegisterSection'

function App() {
  const [register, setRegister] = useState(false)
  const changeState = (e) => setRegister(e)

  return (
    <div className='w-full flex items-center justify-center flex-col space-x-0 px-5 md:flex-row md:space-x-56 md:h-screen' >
      <div className=' bg-opacity-25 md:h-screen flex items-center justify-center' >

        <div className='flex items-left justify-start flex-col' >
          <span className='text-5xl font-[800] leading-[75px]' >Sign in to</span>
          <span className='text-3xl mt-5 font-semibold' >Lorem Ipsum is simply</span>
          <div className='mt-14 flex flex-col mb-16' >
            <span className='font-[500] ' > {register ? 'If you already have an account' : 'If you don’t have an account register'} </span>
            <span className='font-[500] ' >
              You can <button className='text-[#4D47C3] font-bold cursor-pointer' onClick={() => setRegister(!register)} > {register ? 'Login Here!' : 'Register here !'} </button>
            </span>
          </div>

        </div>

        <img className='absolute hidden left-[40%] top-[47%] md:block' src={photo} alt="" />

      </div>
      <div className='bg-opacity-25 md:h-screen flex items-center justify-center' >

        {register ?
          <RegisterSection changeState={changeState} /> :
          <LoginSection /> 
        }

      </div>

    </div>
  )
}

export default App
