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
    <nav className={`container ${stic ? 'dark-nav' : ''} ${location.pathname==='/about'?'nav_about':''}`}>
      <h1 className="logo">NashaMukti</h1>
      <ul>
        {/* <Link>Home</li>
        <li>Clients</li>
        <li>About us</li>
        <li>Services</li>
        <li><button className='btn'>Login</button></li> */}
        <Link  className='heading' to={'/'}>Home</Link>
        <AnchorLink  className='heading' href='#client'>Client</AnchorLink>
        <Link  className='heading' to={'/about'}>About us</Link>
        <Link  className='heading'>Services</Link>
        <Link to={'/login'}><button className='btn xyz'>Login</button></Link>

      </ul>
    </nav>
  )
}

export default Navbar;
