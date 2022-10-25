import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const singleCourse=useLoaderData();
    const {id,title,price,description,image,rating,author}=singleCourse
    return (
        <div className='w-1/2 mx-auto border-8 my-10 rounded-lg p-5'>
            <h1 className='text-2xl font-bold my-2'>Course Name:{title}</h1>
            <p>Description:{description}</p>
            <img className='w-80' src={image} alt="" />
            <p className='text-xl  font-bold'>Price:{price} </p>
            <img className='rounded-full' src={author.img} alt="" />
            <h1 className='text-xl font-bold'>Instructor Name:{author.name}</h1>
            <p className='text-xl font-bold'>Qualification{author.Educationalqualification}</p>
            
        </div>
    );
};

export default CourseDetails;