import React, { useEffect, useRef, useState } from 'react'
import './Nav.css';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';
import './style.css';
import { navItems } from './NavItems';
import { Turn as Hamburger } from 'hamburger-react'
import { WavyLink} from "react-wavy-transitions"


import {
  nav_menu_scroll,
  nav_menu_width,
  dropdown_handler,
  nav_tl_driver,
  nav_scroll_disable,
} from '../../utils';

function Nav() {
    const [isOpen, setOpen] = useState(false)
  const [navbar, setNavbar] = useState(false)


const changeBackground = ()=>{
    if(window.scrollY >= 80){
        setNavbar(true)
    }else{
        setNavbar(false)
    }
}
window.addEventListener('scroll' , changeBackground)


    useEffect(() => {

      // Add an event listener to call the nav_stick_scroll function on scroll
      $(window).on('scroll', nav_scroll_disable);

      return () => {
          // Cleanup: remove the event listener when the component unmounts
          $(window).off('scroll', nav_scroll_disable);
      };
  }, []);

  useEffect(() => {
      let offset = 0;
      if ($('.navigation:not(.shown):not(.scrolled)').length > 0) {
          offset = $('.navigation:not(.shown):not(.scrolled)').offset().top;
      }
      $('.placeholder').css({
          width: '10vw',
          height: $('.navigation:not(.shown):not(.scrolled)').height(),
          top: offset,
      });
  }, []);

  useEffect(() => {
      nav_tl_driver();

      // // add event listener to handle window resize
      // window.addEventListener('resize', nav_tl_driver);

      // return () => {
      //     // remove event listener on unmount
      //     window.removeEventListener('resize', nav_tl_driver);
      // };
  }, []);

  useEffect(() => dropdown_handler(), []);

  useEffect(() => {
      $(document).ready(() => {
          // dropdown_handler();
          nav_menu_width();
      });

      $(window).resize(() => {
          nav_menu_width();
      });
  }, []);

  useEffect(() => {
      // Run this code when the component is mounted
      $(document).ready(() => {
          nav_menu_scroll();
      });

      // Run this code when the window is resized
      $(window).on('resize', nav_menu_scroll);

      // Remove the event listener when the component is unmounted
      return () => {
          $(window).off('resize', nav_menu_scroll);
      };
  }, []);

  useEffect(() => {
      nav_scroll_disable();
  }, []);

  useEffect(() => {
      const heightHandler = () => {
          // update opened navigation height on resize
          // it is implemented this way because 100vh works differently on phones
          // and bottom part of the menu is hidden, so this is a fix
          let nav = $('.navigation .navigation-menu');
          nav.css('height', window.innerHeight);
      }

      $('.navigation').on('navigationOpened', heightHandler);

      $('.navigation').on('dropdown-clicked', () => {
          // handle the scroll for the menu links if they overflow
          setTimeout(nav_menu_scroll, 400);
      });

      $(window).on('resize', heightHandler);

      // $('body').on('overlayScrollbar', () => {
      //     // determine the scroll width of the window
      //     scrollWidth();
      // });

      return () => {
          $('.navigation').off('navigationOpened', heightHandler);
          $(window).off('resize', heightHandler);
      }
  }, []);

  
  const buttonRef = useRef(null);

  return (
    <>

<div className={navbar ? 'headnav active' : 'headnav'}>
<div className='nonon '>
<div className='content'>


  <div className='text-light' id='logo' >
  <WavyLink className="WavyLink" to="/"  color="red" ><h3 className='logo'><img src='/images/4.png' className='logoi' alt='' /></h3></WavyLink>
  </div>
  <div className='text-light d-flex align-items-center ' >
  {/* <div className='me-5 nlop'><a href="tel:+91 80727 54415" className='LinksFooter mt-3' >+91 80727 54415 <span className='hgjgjghfchgch'>/ 63796 79146</span></a></div> */}
  <WavyLink className="WavyLink" to="/booking"  color="red" ><div className='book nlop'>Book Now</div></WavyLink>
  {/* <div className='bar' data-bs-toggle="modal" data-bs-target="#exampleModalOne"><img className='barimage' alt='' src='/images/bar.png'></img></div> */}
  </div>
  
  <div className='text-light d-flex align-items-center'  >
  <WavyLink className="WavyLink" to="/rooms"  color="red" ><div  id='loppo' className='mx-4'>ROOMS</div></WavyLink>
  <WavyLink className="WavyLink" to="/aboutus"  color="pink" ><div  id='loppo' className='mx-4'>ABOUT US</div></WavyLink>
  <WavyLink className="WavyLink" to="/contactus"  color="green" ><div  id='loppo' className='mx-4'>CONTACT US</div></WavyLink>
  <a href="tel:+90809 10971" ><div  id='loppo' >+91 242 525 1566</div></a>     
     <div className="hamburger" ref={buttonRef}>
                            <a href="/#">
                            {/* <img className='barimage' alt='' src='/images/bar.png'></img> */}
            <h2 className='Ham'>
            <Hamburger toggled={isOpen} toggle={setOpen} />

            </h2>
                            </a>
                        </div>
     {/* <a href="/blog">  <div id='loppo' className='mx-4'>Blogs</div></a> */}

  </div>

  </div> 



  <div className="navigation-menu">
                     
                        <div className="navigation-menu-menu">
                            <div className="navigation-menu-menu--wrapper">
                                <ul className="menu ">
                                {navItems.map((navItem, index) => (
                                        <li key={index} className="menu-item menu-item-has-children">
                                            <a href={navItem.link}>{navItem.label}</a>
                                            {navItem.subMenu && (
                                                <ul className="sub-menu">
                                                    {navItem.subMenu.map((subnavItem, subIndex) => (
                                                        <li key={subIndex} className="menu-item">
                                                            <NavLink className="navLink" id='loppo' to={subnavItem.link}>
                                                                {subnavItem.label}
                                                            </NavLink>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))}

                                </ul>
 

                            </div>
                            {/* <NavSocials /> */}
                        </div>
                    </div>
  </div> 



</div>


    </>
  )
}

export default Nav