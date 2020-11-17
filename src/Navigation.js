import React from 'react'
import './App.css'
import { Link } from "react-router-dom"
import './Navbar.css'
import './Navigation.css'
import image from './components/Image/Logo.png'
import './components/Home/Home'


function Navigation()
{
    return(
    <>
        <div className="navbar">
            <div className="container">
                <div className="nav-item">
                    <a href='/home'>
                      <img src={image} alt='pic' className='navbar-logo'></img> 
                    </a>
               </div> 
            </div>
             
            <navigation class="navigation">
                <ul className="nav-link">
                    <li >
                        <Link to='/home'>
                        <li className="navbar-item" >Home</li>
                        </Link> 
                        <Link to='/classes'>
                        <li className="navbar-item">Classes</li> 
                        </Link>
                        <Link to='/teachers'>
                        <li className="navbar-item">Teachers</li>
                        </Link>
                        <Link to='about'>
                        <li className="navbar-item">About</li> 
                        </Link>
                    </li>
                </ul>    
            
            </navigation>
         </div>  
    
        </>
    )
}

export default Navigation