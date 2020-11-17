import React from 'react'
import image1 from './im4.jpg'
import image2 from './im5.jpg'
import image3 from './Michell.png'
import image4 from './Johnny.png'
import image5 from './Latina.png'
import image6 from './Devaid.png'
import  './Teachers.css'

function Teachers(){
    return(
        <div className='teachers-container'>
            <br></br>
            <br></br>
            <h6>Take classes and study with over 100 expert teachers in styles like </h6>
            <br></br>
            <p1 >Vinyasa, Hatha Yoga, Yin Yoga</p1>
            <br></br>
            <br></br>      
            <br></br>
            <img src={image1} alt='pic' className='back_image3'></img>
            <img src={image2} alt='pic' className='back_image4'></img>
            <br></br>
            <br></br>
            <div className='row'>
            <div className='column'>
                <div className='card'>
                    <img src ={image3} alt='pic' className='back-image5'></img>
                        <div className='teachers-container2'>
                            <h7>Michell Devide</h7>
                            <p class="title">Yoga Teacher</p>
                            <p>Some text that describes me.</p>
                            <p>example@example.com</p>
                            <p><button class="button-teachers">Contact</button></p>
                        </div>
                </div>
                </div>
                <div className='column'>
                <div className='card'>
                    <img src ={image4} alt='pic' className='back-image5'></img>
                        <div className='teachers-container2'>
                            <h7>Johnny-Headshot</h7>
                            <p class="title">Yoga Teacher</p>
                            <p>Some text that describes me.</p>
                            <p>example@example.com</p>
                            <p><button class="button-teachers">Contact</button></p>
                        </div>
                </div>
                </div>
                <div className='column'>
                <div className='card'>
                    <img src ={image5} alt='pic' className='back-image5'></img>
                        <div className='teachers-container2'>
                            <h7>Latina Thomase</h7>
                            <p class="title">Yoga Teacher</p>
                            <p>Some text that describes.</p>
                            <p>example@example.com</p>
                            <p><button class="button-teachers">Contact</button></p>
                        </div>
                </div>
                </div>
                <div className='column'>
                <div className='card'>
                    <img src ={image6} alt='pic' className='back-image5'></img>
                        <div className='teachers-container2'>
                            <h7>Devide oner</h7>
                            <p class="title">Yoga Teacher</p>
                            <p>Some text that describes.</p>
                            <p>example@example.com</p>
                            <p><button class="button-teachers">Contact</button></p>
                        </div>
                </div>
                </div>
                </div>
                
        </div>
    )
}

export default Teachers