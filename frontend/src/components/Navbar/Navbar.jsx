import React, { useState } from 'react'
import '../../styles/Navbar.css'
import { assets } from '../../assets/assets'


const Navbar = () => {

  const [menu, setMenu] = useState('home');
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li onClick={()=> setMenu('home')} className={menu==='home'?'active':''}>Home</li>
        <li onClick={()=> setMenu('menu')} className={menu==='menu'?'active':''}>Menu</li>
        <li onClick={()=> setMenu('download')} className={menu==='download'?'active':''}>Download</li>
        <li onClick={()=> setMenu('contact-us')} className={menu==='contact-us'?'active':''}>Contact us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search icon"/>
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot">
            
          </div>
        </div>
        <button type="submit">Sign up</button>
      </div>
      
    </div>
  )
}


export default Navbar