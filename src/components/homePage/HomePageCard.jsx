import devs from './assets/Programming and Development.png';
import business from './assets/Business.png';
import admin from './assets/Administrative and Secretary.png';
import design from './assets/Design and art.png';
import digital from './assets/Digital Marketing.png'
import music from './assets/Music and Audio.png';
import various from './assets/Various.png';
import video from './assets/Video and Animation.png';
import writing from './assets/Writing and Translation.png';

import './homePageCard.css';


export const HomePageCards = () => {

   
   return (


    <div className="home-page">

<div className='home-page-card'>
    <img src={devs} alt='devs'/>
  <h1 className='home-page-card-title'>Programming and Development</h1>
  <p className='home-page-card-content'>
    written to give readers an accurate, 
    concise examination of JavaScript objects and their supporting nuances
  </p>
</div>

<div className='home-page-card'>
    <img src={business} alt='business'/>
  <h1 className='home-page-card-title'>Business</h1>
  <p className='home-page-card-content'>
    written to give readers an accurate, 
    concise examination of JavaScript objects and their supporting nuances
  </p>
</div>

<div className='home-page-card'>
    <img src={admin} alt='admin'/>
  <h1 className='home-page-card-title'>Administrative and Secretary</h1>
  <p className='home-page-card-content'>
    written to give readers an accurate, 
    concise examination of JavaScript objects and their supporting nuances
  </p>
</div>

<div className='home-page-card'>
    <img src={design} alt='design'/>
  <h1 className='home-page-card-title'>Design and art</h1>
  <p className='home-page-card-content'>
    written to give readers an accurate, 
    concise examination of JavaScript objects and their supporting nuances
  </p>
</div>

<div className='home-page-card'>
    <img src={digital} alt='digital'/>
  <h1 className='home-page-card-title'>Digital Marketing</h1>
  <p className='home-page-card-content'>
    written to give readers an accurate, 
    concise examination of JavaScript objects and their supporting nuances
  </p>
</div>

<div className='home-page-card'>
    <img src={music} alt='music'/>
  <h1 className='home-page-card-title'>Music and Audio</h1>
  <p className='home-page-card-content'>
    written to give readers an accurate, 
    concise examination of JavaScript objects and their supporting nuances
  </p>
</div>

<div className='home-page-card'>
    <img src={various} alt='various'/>
  <h1 className='home-page-card-title'>Various</h1>
  <p className='home-page-card-content'>
    written to give readers an accurate, 
    concise examination of JavaScript objects and their supporting nuances
  </p>
</div>

<div className='home-page-card'>
    <img src={video} alt='video'/>
  <h1 className='home-page-card-title'>Video and Animation</h1>
  <p className='home-page-card-content'>
    written to give readers an accurate, 
    concise examination of JavaScript objects and their supporting nuances
  </p>
</div>

<div className='home-page-card'>
    <img src={writing} alt='writing'/>
  <h1 className='home-page-card-title'>Writing and Translation</h1>
  <p className='home-page-card-content'>
    written to give readers an accurate, 
    concise examination of JavaScript objects and their supporting nuances
  </p>
</div>
</div>  
      
  
    )
    
}