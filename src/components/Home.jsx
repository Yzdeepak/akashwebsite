import React from 'react'
import "./home.css"

export const Home = () => {
    return (
        <div>

            <div className='homecontainer'>

                <div className='homeimg'>
                    <img src='https://tse2.mm.bing.net/th?id=OIP._6kSqsTmX5o4yeSjGnw48AHaLH&pid=Api&P=0&h=220'></img>
                </div>
                <div className='hometext'>
                    <h1>Hello</h1>
                    <h1>I'Am <span>Akash!</span></h1>

                    <h4>A Bit About Me</h4>
                    <p>i am very good please contact you friend for further use of this drug i thin that so many text is enough for the demo becouse i am not a text writter i am a coder</p>
                    <div className='hometextinner'>
                        <div className='hometextinnerdiv' style={{ backgroundColor: "orange" }}><h4>Resume</h4></div>
                        <div className='hometextinnerdiv' style={{ backgroundColor: "yellow" }}><h4>Project</h4></div>
                        <div className='hometextinnerdiv'><h4>Contact</h4></div>

                    </div>
                </div>


            </div>

        </div>
    )
}
