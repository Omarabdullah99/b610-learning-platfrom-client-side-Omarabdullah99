import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';

const Courses = () => {
    const courses =useLoaderData()
    
    return (
        <div className='grid grid-cols-2 w-9/12 mx-auto'>
         
        <div>
        {
            courses.map(couse=>{
                return <Link to={`/course/${couse.id}`}><p  key={couse.id} className='my-10'>{couse.title} </p></Link>
            })
         }
        </div>
         <div className='grid  grid-cols-1 lg:grid-cols-2 gap-10 '>
         {
            courses.map((course)=>(
                
                
                <CourseCard key={course.id} course={course}></CourseCard>
                
                
            ))
         }
         </div>
        </div>
    );
};

export default Courses;