import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const course=useLoaderData()
    console.log(course)
    return (
        <div>
        <h1 className='text-3xl text-center mt-10'>Congreculation! You Enroll <span className='text-blue-500 font-bold italic'>{course.title}</span></h1>
            
        </div>
    );
};

export default Checkout;