import React from 'react'
import "./nav.css"

const Nav = () => {
    return (
        <div>
            <div className="navcontainer">
                <div className='navlogo'>Logo</div>
                <ul className='navlist'>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>About</li>
                    <li>Login</li>


                </ul>
            </div>
        </div>
    )
}

export default Nav