import React from 'react';

const Copyright = () => {
    return (
        <div className="copyright">
            <small>Designed & Build by <a href="mailto:nahidahmed9933@gmail.com" style={{color:'rgb(26 210 14)'}}>Rasel Alam Jubayed</a></small> <br />
            <small>{(new Date()).getFullYear()} &copy; copyright | Rasel</small> <br />
         </div>
    );
};

export default Copyright;