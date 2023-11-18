import React, { useState } from 'react'

// Imported Icons
import {BiLogoMediumOld} from 'react-icons/bi';
import {AiFillCloseCircle} from 'react-icons/ai';
import {PiDotsNineBold} from 'react-icons/pi';

const Navbar = () => {
    //State to track and update navbar
    const [navBar, setNavBar] = useState('menu');

    // Function to show navbar
    const showNavBar = () => {
        setNavBar("menu shoNavBar");
    }

    //function to hide navBar
    const removeNavBar = () => {
        setNavBar('menu')
    }
  return (
  <>
    <div className='w-full px-4 flex justify-between items-center gap-2 max-w-[100%] py-2 bg-[#f7f9f7]'>
        <div className='siteLogo cursor-pointer text-[50px] text-[#873cff]'>
            <BiLogoMediumOld 
            className='logoIcon font-3xl' />
        </div>
        <div className='hidden menu
            left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] absolute mx-auto w-[200px] sm:w-[300px] top-[70px]
        '>
            <ul className='flex flex-col pb-10 items-center content-center shadow z-90 bg-[#fff]'>
                <li className='navList p-2 cursor-pointer'>Destination</li>
                <li className='navList p-2 cursor-pointer'>About Us</li>
                <li className='navList p-2 cursor-pointer'>Testimonials</li>
                <li className='navList p-2 cursor-pointer'>Gallery</li>
            </ul>
            {/* Icon to remove navbar */}
            <AiFillCloseCircle 
            className='cursor-pointer text-[30px] closeMenu text-[#873cff]
            absolute left-[50%] -bottom-[15px]'
            onClick={removeNavBar}
            />
        </div>
        <button className='text-sm signUpBtn btn bg-[#873cff] rounded-[100px] text-[#fff] font-bold px-4 py-2'>Sign Up</button>
        {/* Icon to toggle NavBar */}
        <PiDotsNineBold 
            className='cursor-pointer menuIcon text-[40px] text-[#873cff]'
            onClick={showNavBar}    
        />
    </div>
  </>
  )
}

export default Navbar