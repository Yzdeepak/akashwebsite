import React from 'react'
import { AiFillFacebook } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";


import "./footer.css"

const Footer = () => {
    return (
        <div>

            <div className='footercontainer'>

                <div className='leftfooter'><h1>Thanks For Visiting<br></br>My Websites</h1>
                    <h1>Have A Good Day</h1>
                </div>

                <div className='rightfooter'>
                    <h1><a href='facebook.com'><AiFillFacebook />Facebook</a></h1>
                    <h1><a href="youtube.com"><AiFillYoutube />Youtube</a></h1>
                    <h1><a href='twitter.com'><FaXTwitter />Twitter</a></h1>
                    <h1><a href='linkedIn.com'><AiFillLinkedin />LinkedIn</a></h1>

                </div>


            </div>


        </div>
    )
}

export default Footer