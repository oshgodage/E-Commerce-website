import React from 'react'
import image1 from './img1.jpg'
import image2 from './online-yoga-dog.jpg'
import './Classes.css'

function Classes(){
    return(
        <div className='container-classes'>
            <img src={image1} alt='pic' className='back_image1'></img>
            <img src={image2} alt='pic' className='back_image2'></img>
            <br></br>
            <div className='container-classe'>
            <h4>Online Yoga Classes</h4>
            <br></br>
            <p>
            Enjoy yoga your way, on your schedule. 
            Stream or download our online yoga classes offered by highly qualified, enthusiastic teachers. Whether you are a new or experienced yoga student, 
            we have a yoga class online for you. Easily find the exact class you want today. Simply filter by length, level, instructor, or focus. An affordable membership to Yoga International connects you to both quick tutorials and full-length classes to suit your lifestyle. 
            Stream a 90-minute hatha yoga class or a 20-minute prenatal practice. 
            Download an alignment-based vinyasa class or a guided relaxation. We offer fun practices that allow you to nourish body and mind as you build strength. 
            You can watch a yoga class online that focuses on a specific area of the body or one that offers variations on traditional poses. We bring professional, motivating instruction straight to you, wherever you are. 
            You’ll also be able to view targeted tutorials to quickly learn more about standing or seated poses, backbends, twists, inversions, and more. Start or revitalize your personal yoga practice with our broad variety of engaging classes.
            </p>
            <br></br>
            <br></br>
            <br></br>
            <h5>Yoga Classes at Anytime</h5>
            <br></br>
           
            <p>
            Let your home become your personal yoga studio. With our community, you can stream yoga classes on your favorite device. 
            You can also enjoy classes and view tutorials offline at your convenience. 
            Move through an intermediate practice that builds heat in the body or experience an all-levels restorative class. 
            View video tips for fine-tuning your postures. 
            We can even send you an email when an inspiring new class or fun challenge is available. 
            Our accessible, affordable classes will solidify your commitment to a consistent practice.
            We also offer breath work and guided yoga meditation
            </p>
         
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <a href='./signup' className='href'>Click here to join the tutorials....</a>
            <br></br>
            <br></br>
            </div>
            </div>
    
        
    )
}

export default Classes