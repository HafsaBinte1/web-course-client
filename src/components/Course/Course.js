
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Course.css'

const Course = ({ product }) => {
    const { id, img, name, details, price } = product;
    return (
        <Card>
            <Card.Img className='image-size' variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {
                        details.length > 250 ?
                            <p>{details.slice(0, 100) + '...'}</p>
                            :
                            <p>{details}</p>
                    }
                    <span className='text-primary fw-bold'>Price: ${price}</span>
                </Card.Text>
                <Link to={`/courseDetails/${id}`}><Button variant="primary">Course Details</Button></Link>
            </Card.Body>
        </Card>
    );
};

export default Course;