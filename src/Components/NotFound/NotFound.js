import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import oops from '../../images/oops.png';
const goBack = () => window.history.back();

const NotFound = () => {
    return (
        <div className="d-flex align-items-center justify-content-center text-center" style={{height:"100vh"}}>
        <div style={{border:'1px solid gray', padding:'30px'}}>
             <img src={oops} style={{width: '50%'}} alt="" />
             <Button variant='info'  onClick={goBack} className="brand-btn"  to="/"><FontAwesomeIcon className="mr-2" icon={faArrowLeft}/>Back To Home</Button>
        </div>
     </div>
    );
};

export default NotFound;