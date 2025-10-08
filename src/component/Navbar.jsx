import React from 'react';
import logoImg from '../assets/logo.png'
import githubLogo from '../assets/fi_2111432.png'
import { FaGithub } from 'react-icons/fa';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    return (
       <div className="navbar bg-base-100 shadow-sm px-20  max-sm:px-2">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">

        <NavLink to='/'
        className={({isActive})=>(isActive?"text-gradient font-medium text-md border-b-3 border-purple-500":"")} 
        >Home</NavLink>

        <NavLink to='/apps'
        className={({isActive})=>(isActive?"text-gradient font-medium text-md border-b-3 border-purple-500":"")}
        >Apps</NavLink>

        <NavLink to='/installation'
        className={({isActive})=>(isActive?"text-gradient font-medium text-md border-b-3 border-purple-500":"")}
        >Installation</NavLink> 
        
      </ul>
    </div>
   <Link to="/">
    <div className='flex items-center'>
        <img className='h-[40px] w-[40px]' src={logoImg} alt="" />
        <a className="btn btn-ghost text-xl text-gradient">HERO.IO</a>
    </div>
   </Link>
  </div>
  <div className="navbar-center hidden  lg:flex ">
    <ul className="menu menu-horizontal px-1 gap-5">
    <NavLink to='/' className={({isActive})=>(isActive?"text-gradient font-medium text-md border-b-3 border-purple-500":"")}
    >Home</NavLink>

      <NavLink to='/apps' 
      className={({isActive})=>(isActive?"text-gradient font-medium text-md border-b-3 border-purple-500":"")}>
      Apps</NavLink>

      <NavLink to='/installation'
      className={({isActive})=>(isActive?"text-gradient font-medium text-md border-b-3 border-purple-500":"")}>
      Installation</NavLink> 
     
    </ul>
  </div>
 
  <div className="   navbar-end ">
   <Link to="https://github.com/ReshByte">
        <a className="btn background-gradient text-white font-medium"> <FaGithub></FaGithub> Contribute</a>
   </Link>
    
  </div>
</div>
    );
};

export default Navbar;