import React from 'react'
import "./About.css"



const About = () => {
    return (
        <div>

            <div className='aboutcontainer'>
                <div className='about'>
                    <h1>ABOUT</h1>
                </div>
                <div className='bottombar'></div>
                <h3>Hey! I'Am <span>Akash</span> Civil Engineer From Jaunpur Up, India. <br></br>I'Am Also a Architecture Of Your Dream House. I Have Two Year Of Experience. <br></br>I'Am Graduated From This College. I Have Done To Many Projects Which Give Me A Very Boost Confidence To Complete Your Project</h3>
                <h1>AGE............<span>23</span></h1>
                <h1>RESIDENCE............<span>JAUNPUR UP, INDIA</span></h1>
                <h1>FRELANCER..........<span>INDIA</span></h1>
                <h1>DEGREE.........<span>GRADUATE</span></h1>
            </div>


            <div className='secabout'>
                <div className='left'>

                    <img src='https://images.pexels.com/photos/5553065/pexels-photo-5553065.jpeg?auto=compress&cs=tinysrgb&w=600'></img>
                    <h1>Polytechnique</h1>
                    <h3>Branch......civil Engineer</h3>
                    <h5>College.......This College</h5>

                </div>
                <div className='right'>

                    <img src='https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600'></img>
                    <h1>Work</h1>
                    <h3>Freelancer</h3>
                    <h3>Exp: Two Years</h3>

                </div>
            </div>

            <div className='sample'>
                <div className='left'>
                    <h1>Basic</h1>
                </div>
                <div className='right'>
                    <img src='./image/h1.jpg'></img>
                </div>
            </div>

            <div className='sample'>
                <div className='right'>
                    <img src='./image/h2.jpg'></img>
                </div>
                <div className='left'>
                    <h1>Basic</h1>
                </div>
            </div>

            <div className='sample'>
                <div className='left'>
                    <h1>Basic</h1>
                </div>
                <div className='right'>
                    <img src='./image/h3.jpg'></img>
                </div>
            </div>

            <div className='sample'>
                <div className='right'>
                    <img src='./image/h4.jpg'></img>
                </div>
                <div className='left'>
                    <h1>Basic</h1>
                </div>
            </div>

            <div className='sample'>
                <div className='left'>
                    <h1>Basic</h1>
                </div>
                <div className='right'>
                    <img src='./image/h5.jpg'></img>
                </div>
            </div>





        </div>
    )
}

export default About