import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import './Courses.css'

const Courses = () => {
    const products = useLoaderData();
    // console.log(products)
    return (
        <div className='course-container'>
            <div className='left-side-container text-center'>
            <ul>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/register'>Register</Link></li>
                </ul>
            </div>
            <div className='products-container'>
                {
                    products.map(product => <Course key={product.id} product={product}></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;

