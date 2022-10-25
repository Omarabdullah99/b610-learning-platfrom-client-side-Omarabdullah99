import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { HiFolderDownload } from "react-icons/hi";

const CourseDetails = () => {
  const singleCourse = useLoaderData();
  const { id, title, price, description, image, rating, author } = singleCourse;
  return (
    <div className="w-1/2 mx-auto border-8 my-10 rounded-lg p-5 flex">
      
      <div>
        <h1 className="text-2xl font-bold my-2">Course Name:{title}</h1>
        <p>Description:{description}</p>
        <img className="w-80" src={image} alt="" />
        <p className="text-xl  font-bold">Price:{price} </p>
        <img className="rounded-full" src={author.img} alt="" />
        <h1 className="text-xl font-bold">Instructor Name: {author.name}</h1>
        <p className="text-xl font-bold">
          Qualification: {author.Educationalqualification}
        </p>
        <Link to={`/checkout/${id}`}>
          <button className="btn-primary py-2 px-5 rounded my-2">
            Check out{" "}
          </button>
        </Link>
      </div>

      <div>
        <h1 className="text-5xl font-bold"><HiFolderDownload></HiFolderDownload></h1>
      </div>
    </div>
  );
};

export default CourseDetails;
