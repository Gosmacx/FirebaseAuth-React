import { useState } from 'react';
import '../App.css'
import apple from '../assets/apple.png'
import fblogo from '../assets/fblogo.webp'
import google from '../assets/google.png'
import TextField from './TextField'
import { register } from '../firebase'

function registerSection({ changeState }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const sendRegister = async () => {
        if (!email || !password || !confirmPassword) return alert('Please fill all fields');
        if (password !== confirmPassword) return alert("Passwords don't match");
        let response = await register(email, password)
        if (response) {
            alert('Successfully registered')
            changeState(false) // change to login
        } else {
            alert('Something went wrong')
        }
        
    }

    return (
        <div className='flex items-center justify-center flex-col' >

            <span className='text-2xl font-semibold mb-2 leading-[45px] text-left w-full' >Sign Up</span>

            <TextField text="Your Name" />
            <TextField onChange={e => setEmail(e.target.value) } text="Enter email" />
            <TextField text="Create User Name" />
            <TextField onChange={e => setPassword(e.target.value) } secret={true} text="Password" />
            <TextField onChange={e => setConfirmPassword(e.target.value) } secret={true} text="Confirm Password" />

            <button
                onClick={sendRegister}
                style={ {fontFamily: 'Poppins'} }
                className='loginButton mt-6 w-[369px] text-white font-[400] h-[59px] bg-[#4D47C3] rounded-lg outline-none px-7 placeholder-[#A7A3FF] text-xs'
            >
                Register
            </button>

            <span className='font-semibold text-[#B5B5B5] my-9 text-sm' >or continue with</span>

            <div className='flex items-center justify-center space-x-7' >
                <img src={fblogo} width="40" alt="" />
                <img src={apple} className="rounded-full" width="40" alt="" />
                <img src={google} width="40" alt="" />
            </div>

        </div>
    )
}

export default registerSection
