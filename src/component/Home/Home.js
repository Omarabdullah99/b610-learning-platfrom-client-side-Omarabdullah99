import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
  const courses = useLoaderData();
  return (
    <div>
      <div className="w-2/4 mx-auto leading-8 my-10 ">
        <p>
          {" "}
          <span className="text-xl font-bold">Get your courses.com</span> All
          the courses are modern and advanced. The teachers of each course are
          experienced. They provide modern and high quality education. <br />
          All the courses are very beneficial for the students. Each course has
          detailed discussions on that subject, quizzes and assignments 2 days a
          week. As a result, students will understand the topics easily
        </p>
      </div>
     <div className=" w-9/12 mx-auto">
     <h1 className="text-xl my-5">Here is our popular  courses</h1>
    <Link to='/courses'> <button className=" py-3 px-5 rounded btn-primary text-center ">Visit to Courses Page</button></Link>
     </div>
      <div className="grid grid-cols-3 w-9/12 mx-auto my-10">
      
      {
        courses.map(course =>{
            return  <div >
            <img className="w-72" src={course.image} alt="" />
            
            </div> 
        })
      }
      </div>
     
     
    
      
    </div>
  );
};

export default Home;
