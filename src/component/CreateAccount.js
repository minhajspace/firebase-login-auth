import React from 'react'
import fire from '../firebase'
import logo from '../image/mylogo2.png'

class CreateAccount extends React.Component {
    state = {

        UserName: "",
        password: "",

    }

    handleSignup = (e) => {
        console.log(this.state.userName, this.state.password)
        e.preventDefault()
        fire.auth().createUserWithEmailAndPassword(this.state.userName, this.state.password).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }
    render() {
        return (
            <div>
                <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-md w-full space-y-8">
                        <div>
                            <img className="mx-auto h-60 " src={logo} alt="Workflow" />
                            <h2 className="mt-6 text-center text-3xl font-bold text-green-700">
                                Create an acoount
      </h2>
                        </div>
                        <form className="mt-8 space-y-6" action="#" method="POST">

                            <div className="rounded-md  ">

                                <div className="mt-2">

                                    <input id="email-address" onChange={e => this.setState({ userName: e.target.value })} value={this.state.userName} name="email" type="email" autocomplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
                                </div>
                                <div className="mt-2">

                                    <input id="password" name="password" type="password" onChange={e => this.setState({ password: e.target.value })} value={this.state.password} autocomplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
                                </div>
                            </div>
                            <div>
                                <button type="submit" onClick={this.handleSignup} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-700 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">


                                    </span>
         Sign up
        </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateAccount
