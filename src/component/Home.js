import React from 'react'
import logo from '../image/mylogo2.png'
import Cookies from 'universal-cookie';
const cookies = new Cookies();



const Home = (props) => {
    const handleLogout = () => {
        cookies.remove("jwt")
        props.history.push("/")
    }
    return (
        <div className="flex flex-row mx-28">
            <div className="border-solid border-2 border-blue-500 flex-2 my-4">
                <img className="mx-auto h-20 px-10" src={logo} alt="logo" />
            </div>
            <div className="border-solid border-2 border-red-500 flex-1 my-4">
                <nav>
                    <div className="my-5 flex justify-center">
                        <ul>
                            <span className="inline-block px-10 flex-1"><li><a href="#">Resume template </a></li></span>
                            <span className="inline-block px-10 flex-1"><li><a href="#"> About</a></li></span>
                            <span className="inline-block px-10 flex-1"><li><a href="#"> Contact</a></li></span>
                            <span className="inline-block px-10"><button onClick={handleLogout} className="link border-2 border-indigo-600 rounded px-6 py-2 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors duration-300 mr-1 ">Logout</button></span>
                        </ul>
                    </div>
                </nav>


            </div>
            <div className="flex flex-row mx-28">

            </div>

        </div>
    )
}

export default Home

