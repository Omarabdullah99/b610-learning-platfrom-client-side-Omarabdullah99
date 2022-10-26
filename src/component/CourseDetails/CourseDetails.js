import React,{createRef} from "react";
import { Link, useLoaderData } from "react-router-dom";
import { HiFolderDownload } from "react-icons/hi";
import Pdf from "react-to-pdf";


const CourseDetails = () => {
  const componentRef = createRef();                                                                                                                                                                                                                                            
  const singleCourse = useLoaderData();
  const { id, title, price, description, image, rating, author } = singleCourse;
  return (

    <div className="w-1/2 mx-auto border-8 my-10 rounded-lg p-5 flex">
      
      <div ref={componentRef}>
        <h1 className="text-2xl font-bold my-2">Course Name:{title}</h1>
        <p>Description:{description}</p>
        <img className="w-80" src={image} alt="" />
        <p className="text-xl  font-bold">Price:{price} </p>
        <p className="text-xl ">Rating: {rating.rate}</p>
        <img className="rounded-full" src={author.img} alt="" />
        <h1 className="text-xl font-bold">Instructor Name: {author.name}</h1>
        <p className="text-xl font-bold">
          Qualification: {author.Educationalqualification}
        </p>
        <Link to={`/checkout/${id}`}>
          <button className="btn-primary py-2 px-5 rounded my-2">
            Get Premium access
          </button>
        </Link>
      </div>

      <div>
        
      
      <Pdf targetRef={componentRef} filename="code-example.pdf">
      {({ toPdf }) => <h1 className="text-5xl font-bold"><HiFolderDownload onClick={toPdf}></HiFolderDownload></h1>}
    </Pdf>
      </div>
    
    </div>
  );
};

export default CourseDetails;
