// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
// import './Header.css'
// import {  FiLogIn} from 'react-icons/fi';

// const Header = () => {
//     const {user,logOut}=useContext(AuthContext)
//     console.log(user)


    
//     const handleLogOut=()=>{
//         logOut()
//         .then(()=> {})
//         .catch(error => console.log(error))
//     }
//     // photoURL
//     return (
//        <div className=' bg-gray-500 py-5'>
       
//        <div className='flex-none lg:flex justify-around w-10/12 mx-auto items-center'>

//        <div className="left flex items-center">
//        <div className="logo"><h1 className='text-2xl text-white'>Learn</h1></div>
//        <div className="name"><h1>name</h1></div>
//        </div>

//        <div className='right'>
//        <ul className=' lg:flex'>
//        <Link to='/'><li>Home</li></Link>
//        <Link to='/courses'><li>Courses</li></Link>

//        {
//         user?.uid ?
//         <div>
//         <button className='text-xl' onClick={handleLogOut} >Logout</button>
        
//         </div>
//         :
//         <div>
//         <Link to='/register'><li>Register</li></Link>
//       <Link to='/login'> <li>Login</li></Link>
//       <img  src="" alt="" />
//       <div ></div>
     
//         </div>
//        }

//        {
//         user?.photoURL ?
//         <div className="tooltip" data-tip="hello" >
//         <img   className='w-10 text-5xl text-red-500 rounded-full'  src={user.photoURL} alt=""  title="mammals" />
        
//         </div>
//         :
//         <h1 className='text-3xl font-bold'><FiLogIn></FiLogIn></h1>
//        }
    

       
//        </ul>
//        </div>

//        <div>
//        <h1>toggel</h1>
//        </div>

//        </div>
//        </div>
//     );
// };

// export default Header;