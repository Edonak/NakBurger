import React, { useState } from 'react';
import './Navbar.css';
import { IoFastFoodSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
  const [active, setActive] = useState('navbar')

  const showNav = () =>{
    setActive('navbar activeNavbar')
  }
  const removeNav = () =>{
    setActive('navbar')
  }
  return (
    <section className='NavbarSection'>
      <header className='header flex'>
        <div className="logoDiv">
          <a href="#" className="logo flex">

            <h1 className='title'> <IoFastFoodSharp className='icon' />NakBurger</h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navList flex">
            <li className="navItem">
              <a href="#" className="navLink"> Accueil </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink"> Nouvelles </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink"> Shop </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink"> A Propos </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink"> Contact </a>
            </li>

            <button className='btn'>
              <a href="">Acheter</a>
            </button>
          </ul>

          <div onClick={removeNav} className='closeNavbar'>
            <IoMdClose className='icon' />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className='icon' />
        </div>
      </header>

    </section>
  )
}

export default Navbar