import React from 'react'
import image1 from './image6.jpg'
import image2 from './Logo.png'
import './About.css'

function About(){
    return(
        <div className='container-about'>
            <br></br>
            <br></br>
            <h7>WE BELIEVE IN MAKING YOGA MORE INCLUSIVE, AVAILABLE</h7> 
            <br></br>
            <h10>AND ACCESSIBLE TO ALL.</h10>
            <br></br>
            <br></br>
            <p> 
                Do Yoga  is dedicated to providing our 300,000+ members with a diverse array of exclusive multimedia content for yoga,
                meditation, and mindful living. Yoga students, teachers, and aspiring teachers can expand their knowledge and deepen their practices with our classes, courses, and articles.
                Members can access their accounts on any device including phones, tablets, and TVs using Yoga International’s mobile and TV apps.
            </p>
            <br></br>
            <p>
                Do Yoga offers classes for all levels and brings together 500+ expert teachers who specialize in a variety of styles and focuses including yoga therapy, anatomy, ayurveda, meditation, vinyasa, yin, restorative, and more.
                With over 1,000 classes ranging from 15 to 120 minutes to choose from, you can always find a practice that matches your intention for your day.
            </p>
            
            <img src={image1} alt='pic' className='back_image-about1'></img>
            <br></br>
            <h8>THE PEOPLE BEHIND DO YOGA </h8>
            <br></br>
            <br></br>
            <p>
            Since 2010, we have been committed to making yoga more available and accessible to people of all ages, sizes, abilities, and levels of practice.
            Our team of producers, photographers, videographers, teachers, writers, editors, marketers, designers, developers, and advisors have helped shape Do Yoga into a leading online yoga resource and streaming video service. 
            Together we cultivate a strong community with a vision to create a positive, welcoming space for people to be their most authentic selves. We aim to give our members the best yoga experience possible and to offer top-quality content from expert teachers.
            </p>
            <br></br>
            <br></br>
            <h9>We are devoted to serving all of our members and strive to promote inclusivity in the work that we do.</h9>
            <br></br>
            
            <br></br>
            <br></br>
            <img src={image2} alt='pic' className='back_image-about2'></img>
        </div>
    )
}

export default About