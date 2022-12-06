import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link} from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import './Header.css'
import { Image } from 'react-bootstrap';
import { FaUser} from "react-icons/fa";
import { AuthContext } from '../../Context/UserContext';
const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log('Header', user)

    return (
        <Navbar bg="light" expand="lg" className='p-3'>
            <Container>
                <Navbar.Brand href="#home"><span className='web-title fw-bold'>Web Course</span> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav ">
                    <Nav className="mx-auto me-0 menu">
                        <Link to='/'>Home</Link>
                        <Link to='/courses'>Courses</Link>
                     
                        <Link to='/blog'>Blog</Link>
                        {
                            user?.uid ?
                                <Link onClick={logOut}><Button variant="primary">Logout</Button></Link>
                                :
                                <>
                                    <Link to='/login'>Login</Link>
                                    <Link to='/register'>Register</Link>
                                </>

                        }
                        {
                            user?.photoURL ?
                                <Link title={user?.email}><Image style={{ height: '40px' }} roundedCircle src={user?.photoURL}></Image></Link>
                                :
                                <FaUser></FaUser>
                        }


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
