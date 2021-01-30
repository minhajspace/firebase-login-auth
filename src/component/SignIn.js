import React from 'react'
import fire from '../firebase';
import logo from '../image/mylogo2.png'
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class SignIn extends React.Component {
    constructor(props) {
        super(props)
        const jwt = cookies.get("jwt")
        if (jwt) this.props.history.push("/home")
        this.state = {
            email: '',
            password: '',
            userId: ''
        }
    }

    handleAuth = () => {
        console.log(`run`)
        const { } = this.state;
        fire.auth().onAuthStateChanged((user) => {
            if (this.state.userId) {
                this.setState({ userId: user })
            } else {
                this.setState({ userId: null })
            }
        })
    }

    componentDidMount() {
        this.handleAuth()
    }

    userLogin = (e) => {
        console.log(this.state.email, this.state.password)
        e.preventDefault()
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((res) => {
            cookies.set("jwt", res.user.uid)
            this.setState({ userId: res.user.uid })
            this.props.history.push('/home')

        }).catch((err) => {
            console.log(err)
        })
    }



    render() {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <img className="mx-auto h-60 " src={logo} alt="Workflow" />
                        <h2 className="mt-6 text-center text-3xl font-bold text-green-700">
                            Sign in to your account
      </h2>

                    </div>
                    <form className="mt-8 space-y-6" action="#" method="POST">
                        <input type="hidden" name="remember" value="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div className="my-2">
                                <label for="email-address" className="sr-only">Email address</label>
                                <input id="email-address" name="email" type="email" value={this.state.email} onChange={e => this.setState({ email: e.target.value })} autocomplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
                            </div>
                            <div>
                                <label for="password" className="sr-only">Password</label>
                                <input id="password" name="password" value={this.state.password} onChange={e => this.setState({ password: e.target.value })} type="password" autocomplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded" />
                                <label for="remember_me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
          </label>
                            </div>

                            <div className="text-sm">
                                <a href="/signup" className="font-medium text-green-600 hover:text-green-500">
                                    Don't have an account?
          </a>
                            </div>
                        </div>

                        <div>
                            <button type="submit" onClick={this.userLogin} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-700 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">


                                </span>
          Sign in
        </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}


export default SignIn
