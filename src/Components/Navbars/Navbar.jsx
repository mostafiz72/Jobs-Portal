import React, { useContext, useState } from 'react'
import { FaRegUserCircle } from 'react-icons/fa'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdLogout } from 'react-icons/md';
import { FaBarsStaggered } from 'react-icons/fa6';
import { IoMdClose } from 'react-icons/io';
import { AuthContext } from '../Context/AuthContext/AuthProvider';

export default function Navbar() {
   const { user, SignOutUser } = useContext(AuthContext)
   
//    const [show, setShow] = useState(false);

   const Navigate = useNavigate();
  
   const handleSignOut = ()=>{
    SignOutUser()
     toast.warning("Logged Out Successfully!")
     Navigate('/')
   }

   /// showing the responsive navbar section functionality satat here now***********************
   /// showing the responsive navbar section functionality satat here now***********************

//    const handleShow = ()=>{
//      setShow(true);
//     //  console.log(show);
     
//    }
   /// Hidden the responsive navbar section functionality end here now***********************

//    const handleHiddenShowing = ()=>{
//      setShow(false);
//    }

  return (
    <>
        <ToastContainer position="top-center" />
        
        {/* responsive site navbar satart here now */}

        {/* <div className={`bg-gray-200 font-semibold absolute top-0 -left-80 min-h-screen duration-200 w-80 z-50 p-4 ${show && "left-[0px]" } ${!show?"-left-80": ""}`}> */}
        {/* <button onClick={handleHiddenShowing} className=' absolute top-1 -right-2 w-10 h-10 rounded-full text-gray-800 text-2xl hover:text-red-600'><IoMdClose /></button> */}
          {/* <nav>
          <ul className=' flex flex-col items-start gap-5 mt-5'>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/camping">Camping</NavLink></li>
                <li><NavLink to="/bungeejumping">Bungee Jumping</NavLink></li>
                {user && user.email? <li><NavLink to="/Profile">Profile</NavLink></li> : ""}
                {user && user.email? <li><NavLink to="/updata">Updata Profile</NavLink></li> : ""}
            </ul>
          </nav>
        </div> */}

        {/* responsive site navbar end here now */}

          <nav className=' flex justify-between items-center text-lg font-semibold w-11/12 md:container mx-auto py-5'>
        {/* <button onClick={handleShow} className=' font-bold text-2xl cursor-pointer md:hidden'><FaBarsStaggered /></button>  */}
        <Link to="/" className=' lg:flex justify-center items-center gap-3 font-bold text-xl md:text-2xl cursor-pointer hidden md:block'><img className=' w-10' src="https://img.icons8.com/?size=80&id=13dQN8gCu60R&format=png" alt="" /> Jobs-Portal</Link> 
        {/* ekhane bola hoyse jodi user er mordhe kicu thake ta hole tumi amake tar nam ta show koro na hole error deyo na */}
        <div className=' hidden lg:block'>
            <ul className=' flex items-center gap-5'>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/camping">About</NavLink></li>
                <li><NavLink to="/myApplication">My Applications</NavLink></li>
                <li><NavLink to="/bungeejumping">Contact</NavLink></li>
                {/* {user && user.email? <li><NavLink to="/Profile">Profile</NavLink></li> : ""}
                {user && user.email? <li><NavLink to="/updata">Updata Profile</NavLink></li> : ""} */}
            </ul>
        </div>
        <div className=' flex items-center gap-5'>
            <div className=' cursor-pointer'>
                <div>
                  {/* {user && user.email?<img title={user.displayName} className=' w-10 h-10 rounded-full object-cover' src={user.photoURL} alt="" /> : <span className=' text-4xl'><FaRegUserCircle /></span>} */}
                </div>
              {/* {user && user.email? <img className=' w-10 h-10 rounded-full' src={user.photoURL} alt="" /> : <img src={profileLogo} alt="" />}  */}
            </div>
            {
              user?
              <button onClick={handleSignOut} className=' btn btn-error cursor-pointer'><MdLogout />Log-Out</button>
              :
              <div className=' flex justify-center items-center gap-3'>
                 <div><Link to="/login" className=' btn btn-accent cursor-pointer'>Login</Link></div>
                 <div><Link to="/register" className=' btn btn-success cursor-pointer text-white'>Register</Link></div>
                 </div>
                 }
                 {/* <div><Link to="/login" className=' btn btn-accent cursor-pointer'>Login</Link></div>
                 <div><Link to="/register" className=' btn btn-success cursor-pointer text-white'>Register</Link></div> */}
        </div>
      </nav>
    </>
  )
}