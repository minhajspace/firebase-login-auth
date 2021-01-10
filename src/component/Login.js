import React from 'react'
import fire from '../firebase';
import Singup from './Singup';

class  Login extends React.Component {
   state =  {
       email:'',
       password:'',
       userId:''
   }
 
      handleAuth = ()=>{
          console.log(`run`)
          const { } =this.state;
          fire.auth().onAuthStateChanged((user)=>{
             if(this.state.userId){
              this.setState({userId:user})
             }else {
                 this.setState({userId:null})
             }
          })
      }

      componentDidMount(){
          this.handleAuth()
      }
    
 
     

    
     userLogin = (e) => {
         e.preventDefault()
        console.log(this.state.email, this.state.password)
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((res) => {
            console.log(res.user.uid)
            this.setState({userId:res.user.uid})
        }).catch((err) => {
            console.log(err)
        })
    }
   
   
    
    render(){
    return (
        <div>

        
       {this.state.userId  !== "" && <form>
            <div>

           
            <div className="m-2">
                <span>
                    Email
                </span>
                <span>
                    <input
                        placeholder="Email"
                        onChange={(e)=>this.setState({email:e.target.value})}
                        value={this.state.email}
                         />
                </span>
            </div>
            <div>
                <span>
                    Password
                </span>
                <span>
                    <input
                    type="password"
                    placeholder="Enter your password"
                    value={this.state.password}
                    onChange={(e)=>{this.setState({password:e.target.value})}}
                    />
                </span>
            </div>
                <div><span><button onClick={this.userLogin}>Login</button></span></div>
        
            </div>
        </form> }
      { this.state.userId === "" && <Singup/>}
        </div>
    )
}
}
export default Login
