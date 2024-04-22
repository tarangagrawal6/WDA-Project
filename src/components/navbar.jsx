import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Link, useNavigate, useLocation } from 'react-router-dom';
import './navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Navbar = () => {
  const [stic, setStic] = useState(false);
  const location=useLocation();
  console.log(location.pathname)
  // const navigate = useNavigate();
  
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 80 ? setStic(true) : setStic(false);
    });
  }, []);
  
  return (
    <nav className={`container ${stic ? 'dark-nav' : ''} ${location.pathname==='/about'?'nav_about':''} ${location.pathname==='/client'?'nav_client':''}`}>
      <h1 className="logo">NashaMukti</h1>
      <ul>
       
        <Link  className='heading' to={'/'}>Home</Link>
        {location.pathname === '/' ? <AnchorLink className='heading' href='#client'>Client</AnchorLink> : <Link to={'/client'}>Client</Link>}
        <Link  className='heading' to={'/about'}>About us</Link>
        <Link  className='heading' to={'/service'}>Services</Link>
        <Link to={'/login'}><button className='btn xyz'>Login</button></Link>

      </ul>
    </nav>
  )
}

export default Navbar;
