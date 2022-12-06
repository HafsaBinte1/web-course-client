import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { FaDownload } from "react-icons/fa";


const CourseDetails = () => {
    const details = useLoaderData();
    console.log(details)

    return (
        <div className=' container detail-container mx-auto text-center mt-5'>
            <h2 className='fw-bold mb-4'>{details.name}</h2>
            <img className='w-25' src={details.img} alt="" />
            <p className='mt-4'>{details.details}</p>
            <p className='text-primary fw-bold'>Price : ${details.price}</p>
            <Link to={`/checkout/${details.id}`}><Button variant="primary">Premium Access</Button></Link>
            <Link className='ms-5 fs-3'><FaDownload></FaDownload></Link>
        </div>
    );
};

export default CourseDetails;
