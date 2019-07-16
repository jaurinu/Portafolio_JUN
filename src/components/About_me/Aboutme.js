import React from 'react';
import Name from './Name';
import Description from './Description';

import './Aboutme.css';


const Aboutme = () => {
    return (
        <div>
            <div className="about_me_name font_raleway">
            <Name />
            </div>
            <Description />
            
        </div>
    );
};

export default Aboutme;