import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { UserContext } from '../../../App';
import logo from '../../../images/logo.png';
import ProfilePopper from '../ProfilePopper/ProfilePopper';

const NavBar = () => {
  const { loggedInUser: { isSignedIn } } = useContext(UserContext);
  const [isSticky, setSticky] = useState(false);
  const [isCollapsed , setCollapsed] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 50){
        setSticky(true)
      }else{
        setSticky(false)
      }
    })
  }, []);

    return (
          <Navbar expand="lg" className={ (isSticky || isCollapsed) ? "slide in py-2 show shadow-sm navbar navbar-expand-md bg-white navbar-light   fixed-top" : "slide out show navbar navbar-expand-nd navbar-light py-2 fixed-top "}>
            <Container >
                <Navbar.Brand smooth as={HashLink} to="#home"  > <Image style={{height:'33px', width:'43px'}} src={logo} /> <strong>Corvette Car...</strong></Navbar.Brand>
                <Navbar.Toggle onClick={  () => setCollapsed(!isCollapsed ? 'show' : null )} aria-controls="basic-navbar-nav"  style={{background:'#10bad4'}} />
                  <Navbar.Collapse id="navbar-nav" >
                    <Nav className="ml-auto text-center">
                      <Nav.Link  smooth as={HashLink} to="/home"   className="mr-3"><strong>Home</strong></Nav.Link>
                      <Nav.Link  smooth as={HashLink} to="/home#about" className="mr-3"><strong>About</strong></Nav.Link>
                      {/* <Nav.Link  smooth as={HashLink} to="#service" className="mr-3"><strong>Service</strong></Nav.Link> */}
                      <Nav.Link  smooth as={HashLink} to="/home#blog" className="mr-3"><strong>Pay</strong></Nav.Link>
                      <Nav.Link smooth as={HashLink} to='/home#reviews' className="mr-3"><strong>Reviews</strong></Nav.Link>
                      <Nav.Link   as={Link} to="/allservices"  className="mr-3"><strong>AllServices</strong></Nav.Link>
                      <Nav.Link   as={Link} to="/dashboard/profile"  className="mr-3"><strong>Dashboard</strong></Nav.Link>
                        {
                            isSignedIn ?  <ProfilePopper /> : <Button as={Link} to='/login' variant="info" className='main-button'>Login</Button>
                        }
                    </Nav>
                  </Navbar.Collapse>
             </Container>
          </Navbar>
    );
};

export default NavBar;