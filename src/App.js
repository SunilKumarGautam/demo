
import './App.css'
import React from 'react';
//import Header from './Header';
import Footer from './Footer';


function App() {
  return (
    <div className="App">

  <img src="https://cdn.mos.cms.futurecdn.net/m5ADpuAdKTpadnUWmsCrHJ.jpg"/>
  <img src="https://cdn.pixabay.com/photo/2014/04/02/10/47/red-304573_640.png"/>
  <div>
    
  </div>
    <div className='topnav'>
      <a className='active' href='#home'>Home</a>
      <a className='active' href='#about'>About</a>
      <a className='active' href='#contact'>Contact</a>
      <input type='text' placeholder='search..'></input>
      
    </div>
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Scroll Down Button</title>
    
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600&display=swap"
      rel="stylesheet"
    />
    
    <link rel="stylesheet" href="style.css" />
  
  
    
    <section id="section-2">
      <h1>HELLO THERE</h1>
      <h2>WELCOME TO MY WEBSITE</h2>
    </section>
    <aside>
        <p>My family and I visited The Epcot center this summer. The weather was nice, and Epcot was amazing! I had a great summer together with my family!</p>

<aside>
<p>The Epcot center is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
</aside>


</aside>
<div>
         <article class="all-browsers">
  <h1>Most Popular Browsers</h1>
  <article class="browser">
    <h2>Google Chrome</h2>
    <p>Google Chrome is a web browser developed by Google,
       released in 2008. Chrome is the world's most popular
        web browser today!</p>
  </article>
  <article class="browser">
    <h2>Mozilla Firefox</h2>
    <p>Mozilla Firefox is an open-source web browser developed by Mozilla. 
      Firefox has been the second most popular
       web browser since January, 2018.</p>
  </article>
  <article class="browser">
    <h2>Microsoft Edge</h2>
    <p>Microsoft Edge is a web browser developed by Microsoft, released in 2015. Microsoft Edge replaced Internet Explorer.</p>
  </article>
</article>   
        </div>

    <div>
   <figure>
  
  <figcaption>Fig1. - hindi, english, math.</figcaption>
</figure>
</div>
    <div>
            


        </div>
    <div>
      
</div>

<div>



        </div>
    <Footer/>
    <div className='downnav'>
      <a className='active' href='#article'>article</a>
      <a className='active' href='#section'>section</a>
      <a className='active' href='#list'>list</a>
      
      
    </div>
    
    </div>
    
    
  );
}


export default App;
