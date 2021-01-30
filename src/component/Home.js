import React from 'react'
import logo from '../image/mylogo2.png'



const Home = () => {
    return (
        <div className="flex flex-row mx-28">
            <div className="border-solid border-2 border-blue-500 flex-2 my-4">
                <img className="mx-auto h-20 px-10" src={logo} alt="logo" />
            </div>
            <div className="border-solid border-2 border-red-500 flex-1 my-4">
                <nav>
                    <div className="my-5">
                        <ul>
                            <span className="inline-block px-10"><li><a href="#">Resume template </a></li></span>
                            <span className="inline-block px-10"><li><a href="#"> About</a></li></span>
                            <span className="inline-block px-10"><li><a href="#"> Contact</a></li></span>
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

