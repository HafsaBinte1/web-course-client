import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';

import { FaGoogle, FaGithub } from "react-icons/fa";

import './Register.css'
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../Context/UserContext';

const Register = () => {
    const { createEmail, createWithGmail, createWithGithub } = useContext(AuthContext)
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const image = form.image.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(image)


        if (password.length <= 6) {
            setError('password should be 6 charecters')
            return
        }

        if (password !== confirm) {
            setError('password did not matched')
            return
        }
        createEmail(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset();
                navigate('/')
            })
            .catch(error => console.error(error))
    }

    const handlegoogle = () => {
        const provider = new GoogleAuthProvider()
        createWithGmail(provider)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate('/')
            })
            .catch(error => console.error(error))

    }

    const handleGithub = () => {
        const provider = new GithubAuthProvider()
        createWithGithub(provider)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate('/')
            })
            .catch(error => console.error(error))
    }



    return (
        <div className='form-container'>
            <h5 className='text-center mt-5 fw-bold form-title'>Please Register</h5>
            <Form onSubmit={handleSubmit} className='d-flex justify-content-center align-items-center mt-3'>
                <div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control className='w-100' type="email" name='email' placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Image URL</Form.Label>
                        <Form.Control className='w-100' type="text" name='image' placeholder="Enter image URL" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className='w-100' type="password" name='password' placeholder="Enter Your password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm password!</Form.Label>
                        <Form.Control className='w-100' type="password" name='confirm' placeholder="Confirm your Password" />
                    </Form.Group>
                    <div>
                        <p>Already have an account? <Link to='/login'>login</Link> </p>
                    </div>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <Form.Text className="text-danger">
                        <p>{error}</p>
                    </Form.Text>
                </div>
            </Form>
            <div className='d-flex justify-content-center mt-3 fs-4 text-primary'>
                <Link onClick={handlegoogle}><FaGoogle className='me-3'></FaGoogle></Link>
                <Link onClick={handleGithub}><FaGithub></FaGithub></Link>
            </div>
        </div>
    );
};

export default Register;

