import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from '../../Contexts/AuthProvider/AuthProvider'
import {  FiLogIn} from 'react-icons/fi';
import { HiAcademicCap } from "react-icons/hi";
import { VscAccount } from "react-icons/vsc";

const Navbertwo = () => {
    const {user,logOut}=useContext(AuthContext)
    const [toggle, setToggle] = useState(false)
    const handleLogOut=()=>{
        logOut()
        .then(()=> {})
        .catch(error => console.log(error))
    }
    return (
        <div >
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2  shadow bg-base-100 rounded-box w-52">
              <Link to='/'><li>Home</li></Link>
              <Link to='/courses'><li>Courses</li></Link>
              <Link><li>Blog</li></Link>
              <Link><li>FAQ</li></Link>
            </ul>
          </div>
          <Link to='/'><h1 className='text-sm md:text-2xl font-bold font-it flex items-center'>Get Your Courses.com <span className='ml-0 md:ml-5'> <HiAcademicCap></HiAcademicCap> </span> </h1></Link>
        </div>
        <div className="navbar-center  hidden lg:flex">
          <ul className="menu menu-horizontal text-xl ">
            <Link to='/'><li>Home</li></Link>
            <Link to='/courses'><li className='px-2'>Courses</li></Link>
           <Link> <li>Blog </li></Link>
           <Link> <li className='px-2'>FAQ </li></Link>
          </ul>
        </div>
        
        <div className="navbar-start gap-[5px] md:navbar-end md:gap-0">
        {
            user?.uid ?
            <>
            <button  onClick={handleLogOut} className='text-sm md:text-xl'>Logout</button>
            </>
            :
            <>
            <Link className="text-sm md:text-xl font-bold" to='/login'>Login</Link>
           <Link className="text-sm md:text-xl  md:mx-5 font-bold" to='/register'>Register </Link>
            
            </>
        }

        {
            user?.photoURL ?
            <div ><img    className='w-20 rounded-full'  src={user?.photoURL} alt="" title={user?.displayName} /></div>
            :
            <h1 className='text-xl md:text-3xl font-bold'> <VscAccount ></VscAccount > </h1>
        }

        <div className='bg-[#e3e1e1] w-[38px] md:w-[65px] h-[20px] md:h-[30px] rounded-[18px] md:rounded-[40px] relative'>
        <div className={`bg-[gray] w-[12px] md:w-[22px] h-[14px] md:h-[22px] absolute top-[0.2rem]  md:top-1 left-1 transition-all duration-500  ease-in-out ${toggle ? 'translate-x-[20px] md:translate-x-[35px]' : 'translate-x-0 ' } rounded-full`} onClick={()=>setToggle(!toggle)}></div>
      </div>
      
          
        </div>
      </div>
        </div>
    );
};

export default Navbertwo;