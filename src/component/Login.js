import React,{useState} from 'react'

const Login = () => {
    const [email,setEmail] =useState()
    const [password,setPassword] =useState()
    console.log(email,password)
    return (
        <div>
            <div>
                <span>
                    Email
                </span>
                <spna>
                    <input
                        placeholder="Email"
                        onChange={(e)=>setEmail(e.target.value)}
                        value={email}
                 />

                </spna>
            </div>
            <div>
                <span>
                    Password
                </span>
                <span>
                    <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}

                    />
                </span>
            </div>
           
        </div>
    )
}

export default Login
