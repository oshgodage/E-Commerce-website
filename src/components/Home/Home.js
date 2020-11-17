import React, { Component } from "react"
import './Home.css'
import image1 from './group.jpg'
import  './Homenav.css'

function Home (){

    return(
        <>
            <div className='image-containe'>
            <img src={image1} alt='pic' className='back_image'></img>
            <div className='container1'>
                <div className='overlay'>  
                <br></br> 
                <br></br>         
                <h1>Practice Yoga </h1>
                <br></br>
                <br></br>
                
                <h2>at Home</h2> 
                <a href='/classes'>
                <button className='button1'>Join Now</button>
                </a>
                </div>      
        </div>
        </div>
        </>
    )
}

export default Home