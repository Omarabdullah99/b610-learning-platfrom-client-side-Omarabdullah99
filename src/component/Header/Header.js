import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import './Header.css'
const Header = () => {
    const {user}=useContext(AuthContext)
    return (
       <div className=' bg-gray-500 py-5'>
       
       <div className='flex-none lg:flex justify-around w-10/12 mx-auto items-center'>

       <div className="left flex items-center">
       <div className="logo"><h1 className='text-2xl text-white'>Learn</h1></div>
       <div className="name"><h1>name</h1></div>
       </div>

       <div className='right'>
       <ul className=' lg:flex'>
       <Link to='/'><li>Home</li></Link>
       <Link to='/courses'><li>Courses</li></Link>
       <Link to='/register'><li>Register</li></Link>
      <Link to='/login'> <li>Login</li></Link>
      <p>{user.displayName}</p>
       </ul>
       </div>

       <div>
       <h1>toggel</h1>
       </div>

       </div>
       </div>
    );
};

export default Header;