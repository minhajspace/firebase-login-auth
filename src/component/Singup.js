import React from 'react'
import fire from '../firebase'


class Singup extends React.Component {
    state={
        userName:'',
        password:''
    }

    handleSignup =(e)=>{
      e.preventDefault()
      fire.auth().createUserWithEmailAndPassword(this.state.userName,this.state.password).then((res)=>{
        console.log(res)
      }).catch((err)=>{
          console.log(err)
      })
    }
   
    render() {
    return (
        <form>
            <div>


                <div>

                    <span>
                        Email
                </span>
                    <span>
                        <input
                            placeholder="Email"
                            onChange={(e) => this.setState({userName:e.target.value})}
                            value={this.state.userName}
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
                            onChange={(e) => this.setState({ password: e.target.value })}
                            value={this.state.password}

                        />
                    </span>
                </div>
                <div><span><button onClick={this.handleSignup}>Singup</button></span></div>
            </div>
        </form>    )
    }
}

export default Singup
