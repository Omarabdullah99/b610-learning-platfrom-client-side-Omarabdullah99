import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({course}) => {
    console.log(course)
    const {id,image,description,title}=course
    return (
        <div className= 'p-10 border rounded-lg my-10'>
        <p className='text-xl font-bold'>{title}</p>
        <img className='w-60' src={image} alt="" />
        <p>{description}</p>
        <Link to={`/course/${id}`}><button  className='btn-primary py-2 px-5 rounded mt-5'>Details Course</button></Link>
            
        </div>
    );
};

export default CourseCard;