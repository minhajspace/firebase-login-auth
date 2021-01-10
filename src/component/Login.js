import React,{useState,useEffect} from 'react'
import fire from '../firebase';

const Login = () => {
    const [email,setEmail] =useState()
    const [password,setPassword] =useState()
    console.log(email,password)

    const  checkLogin = ()=>{

        fire.auth().onAuthStateChanged=(email,password)=>{
            if(email && password){
                setEmail(email)
                setPassword(password)
            } else{
                setEmail(null)
                setPassword(null)
            }
        }
    }
    useEffect(()=>{
        checkLogin()
    })

    const userLogin = (e)=>{
        fire.auth().signInWithEmailAndPassword(email,password).then((user)=>{
          console.log(`${user} are you loged in now`)
        }).catch((err)=>{
           console.log(err)
        })
    }

    return (
            <form>
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
            <div><span><button>Login</button></span></div>
        </div>
         </form>
    )
}

export default Login
