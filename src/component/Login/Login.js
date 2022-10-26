import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBeer,FaGoogle,FaGithub } from "react-icons/fa";
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Login = () => {
  const {logIn}=useContext(AuthContext)
  const [error,setError]=useState('')

    const handleSubmit=(event)=>{
        event.preventDefault()
        const form= event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password)

        logIn(email,password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user)
          setError('')
          form.reset()  
          // ...
        })

        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage)
          setError(errorMessage)
        });


    }
    return (
        <div className="hero min-h-screen bg-base-200 ">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className='text-xl font-bold text-red-400'>{error} </p>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text" >Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <Link to='/register' className="label-text-alt link link-hover">If you have no account?Register Here</Link>
          </label>
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
          
        </div>
      </form>
      <button className='btn btn-primary mt-5'>Sign In Google <span className='ml-5 text-xl'><FaGoogle></FaGoogle></span> </button>
          <button className='btn btn-primary mt-5'>Sign In  GitHub <span className='text-xl ml-5'><FaGithub></FaGithub> </span> </button>
    </div>
  </div>
</div>
    );
};

export default Login;