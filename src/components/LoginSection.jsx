import { useState } from 'react'
import TextField from './TextField'
import { login } from '../firebase'
function loginSection() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const sendLogin = async () => {
        if (!email || !password) return alert('Please fill all fields');
        let response = await login(email, password)
        if (response) {
            alert('Successfully logged in')
        }
        else {
            alert('Wrong email or password')
        }
    }

    return (
        <div className='flex items-center justify-center flex-col' >

            <span className='text-2xl font-semibold leading-[45px] text-left w-full' >Sign in</span>

            <TextField onChange={e => setEmail(e.target.value) } text="Enter email or user name" />
            <TextField onChange={e => setPassword(e.target.value) } secret={true} text="Password" />

            <a className='text-xs mt-3 text-[#B0B0B0] w-full text-right' href='#' >Forgot Password ?</a>
            <button
                onClick={sendLogin}
                style={{ fontFamily: 'Poppins' }}
                className='loginButton mt-12 w-[369px] text-white font-[500] h-[59px] bg-[#4D47C3] rounded-lg outline-none px-7 placeholder-[#A7A3FF] text-xs'
            >
                Login
            </button>

            <span className='font-semibold text-[#B5B5B5] my-14 text-sm' >or continue with</span>

            <div className='flex items-center justify-center space-x-7' >
                <img src="fblogo.webp" width="40" alt="" />
                <img src="apple.png" className="rounded-full" width="40" alt="" />
                <img src="google.png" width="40" alt="" />
            </div>

        </div>
    )
}

export default loginSection
