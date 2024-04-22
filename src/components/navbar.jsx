import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Link, useNavigate } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [stic, setStic] = useState(false);
  // const navigate = useNavigate();
  
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 80 ? setStic(true) : setStic(false);
    });
  }, []);
  
  return (
    <nav className={`container ${stic ? 'dark-nav' : ''}`}>
      <h1 className="logo">NashaMukti</h1>
      <ul>
        {/* <Link>Home</li>
        <li>Clients</li>
        <li>About us</li>
        <li>Services</li>
        <li><button className='btn'>Login</button></li> */}
        <Link className='heading' >Home</Link>
        <Link  className='heading'>Client</Link>
        <Link  className='heading'>About us</Link>
        <Link  className='heading' to={'/service'}>Services</Link>
        <Link to={'/login'}><button className='btn xyz'>Login</button></Link>

      </ul>
    </nav>
  )
}

export default Navbar;
