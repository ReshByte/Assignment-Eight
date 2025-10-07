import React from 'react';
import logoImg from '../assets/logo.png'
import githubLogo from '../assets/fi_2111432.png'
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router';

const Navbar = () => {
    return (
       <div className="navbar bg-base-100 shadow-sm px-20">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <Link to='/'><li><a>Home</a></li></Link>
        <Link to='/apps'><li><a>Apps</a></li></Link> 
        <li><a>Installation</a></li>
      </ul>
    </div>
   <Link to="/">
    <div className='flex items-center'>
        <img className='h-[40px] w-[40px]' src={logoImg} alt="" />
        <a className="btn btn-ghost text-xl text-gradient">HERO.IO</a>
    </div>
   </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <Link to='/'> <li><a className='font-medium text-md  '>Home</a></li></Link>
      <Link to='/apps'>  <li><a className='font-medium'>Apps</a></li> </Link>
      <li><a className='font-medium'>Installation</a></li>
    </ul>
  </div>
 
  <div className="navbar-end">
   
    <a className="btn background-gradient text-white font-medium"> <FaGithub></FaGithub> Contribute</a>
  </div>
</div>
    );
};

export default Navbar;