import React from 'react'
import Navbar3 from "../components/Navbar3.js";
import Footer from '../components/Footer.js';
import { SlBadge } from 'react-icons/sl';
import profileimage from '../assests/profile.jpg'
import { Link } from 'react-router-dom';
import "../pages/userprofile.css"
import { FaRegBookmark } from "react-icons/fa";
import profilephoto from '../assests/profilephoto.png'
import loginimage from '../assests/bg1.jpg'


const Userprofile = () => {
  return (
    <div>
      <Navbar3 />
      <section className='user-profile'>
        <div className='leftbar'>
        <img className='profilepic' src={profilephoto}></img>
          <div className='photo'>
            
            <h1>Namo Sapkota</h1>
            <button className="but_edit">Edit profile</button>
          </div>
          <div className='achieve'>
            <h2>Achievements:</h2> </div>
          <div className='badge'>
            <SlBadge size={40} />
            &nbsp;  &nbsp;
            <SlBadge size={40} />
            &nbsp;  &nbsp;
            <SlBadge size={40} />
          </div>

          <div className='link' >
            <Link className='link-itemp' to="/userprofile">My Profile</Link>
            <Link className='link-item' to="/my-work">Applied Work</Link>
            <Link className='link-item' to="/fav-work">Favourite Work</Link>
            <Link className='link-item' to="/home">Logout</Link>
          </div>

        </div>

        <div className='rightbar'>
          <h1>Basic information:</h1>

          <div className='name1'>
            <div className='firstname'>
              <h2>First Name:</h2>
              <input type="text" placeholder="Namo"></input>
            </div>
            <div className='lastname'>
              <h2>Last Name:</h2>
              <input type="text" placeholder='Sapkota'></input>
            </div>
          </div>

          <div className='yess'>
            <div className='email-'>
              <h2>Email:</h2>
              <input type="email" placeholder='namosapkota@gmail.com'></input>
            </div>
            <div className='fields'>
              <h2>Interested fields:</h2>
              <input type="text" placeholder="Technology,Environment"></input>
            </div>
          </div>

          <div className='stat'>
            <h1>Application Statistics:</h1>
            <div className='stat-box'>
              <div className='stat-box1'><h2 >Applied Work</h2>
              <h1>3</h1></div>
              <div className='stat-box1'><h2 >Favourite Work</h2>
              <h1>5</h1></div>
              <div className='stat-box1'><h2 >Volunteering Done</h2>
              <h1>1</h1></div>
              
            
            </div>
          </div>
          
          <h1 className="mt-1rem">Work Applied Recently</h1>
            <div className="info">
              <div >
                <img src={loginimage} alt="pic" className="pro-logo" />
              </div>

              <div className="pro-details">
                <div className="book">
                  {" "}
                  <h2>Program:&nbsp;Clean Pokhara</h2>

                </div>
                <div className="book">
                  {" "}
                  <h3>Organization:&nbsp;Amnesty Nepal</h3>
                </div>
                <div className="book">
                  {" "}
                  <h3>Date & Time:&nbsp;2079/11/2 11:00 A.M</h3>
                </div>
                <div className="book">
                  {" "}
                  <h3>Location:&nbsp;Pokhara</h3>
                </div>
                <div className="book">
                  {" "}
                  <h3>Duration:&nbsp;5 Hrs</h3>
                </div>
                <div className="book">
                  {" "}
                  <h3>Type:&nbsp;Unpaid</h3>
                </div>
                <div className="book">
                  {" "}
                  <h3>Stipend:&nbsp;Free</h3>
                  
                </div>
              </div>
            </div>
          </div>
          
      
      </section>



      <Footer/>

    </div>
  )
}

export default Userprofile
