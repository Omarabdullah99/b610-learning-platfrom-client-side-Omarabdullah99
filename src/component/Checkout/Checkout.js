import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Checkout = () => {
    const {user}=useContext(AuthContext)
    const course=useLoaderData()
    console.log(course)
    return (
        <div>
        <h1 className='text-3xl text-center mt-10'>Congreculation! <span className='text-blue-500 font-bold'>{user?.displayName}</span> You Enroll <span className='text-blue-500 font-bold italic'>{course.title}</span></h1>
            
        </div>
    );
};

export default Checkout;