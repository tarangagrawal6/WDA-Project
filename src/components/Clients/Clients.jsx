import React, { useEffect, useState } from 'react'
import './Clients.css';
import c1 from '../../assets/c1.webp';
import c2 from '../../assets/c2.avif';
import c3 from '../../assets/c3.webp';
import c4 from '../../assets/c4.jpg';
import c5 from '../../assets/c5.jpg';
import c6 from '../../assets/c6.jpg';
import c7 from '../../assets/c7.jpg';
import c8 from '../../assets/c8.png';
const Clients = () => {
  const [pho,setpho]=useState(false);
  const handleclick = () => {
    setpho(!pho);
  };
  return (
    <div className='clients'>
      <div className='cli'>
        <img src={`${pho?c1:c5}`} alt=""></img>
        <img src={`${pho?c2:c6}`} alt=""></img>
        <img src={`${pho?c3:c7}`} alt=""></img>
        <img src={`${pho?c4:c8}`} alt=""></img>
      </div>
      <button className='btn dark-btn' onClick={handleclick}>See more here &#8594;</button>
    </div>
  )
}

export default Clients
