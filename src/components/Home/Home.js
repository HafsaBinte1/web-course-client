import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import img from '../../img/istockphoto-1143533761-612x612.jpg'
import './Home.css'

const Home = () => {
    return (
        <div className='container mx-auto row row-cols-lg-2 row-cols-md-1 row-cols-sm-1'>
            <div className='d-flex justify-content-center align-items-center'>
                <div>
                    <h1 className='banner-heading'>The Best Online Web Course
                   
                     You Find Here
                    </h1>
                    <p className='banner-pera'>Take your learning organization to the next level.Who'll share their <br />
                        knowledge to people around the world
                    </p>
                    <Link to='/courses'><Button variant="primary" className='mt-3  btn' size="lg">See all courses</Button></Link>
                </div>
            </div>
            <div >
                <img src={img} alt="" className='img-fluid' />
            </div>
        </div>
    );
};

export default Home;

