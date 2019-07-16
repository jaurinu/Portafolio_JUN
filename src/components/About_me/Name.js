import React from 'react';
import Fade from 'react-reveal/Fade';

import './Aboutme.css';
import angle_brackets from '../../assets/diple_azules_120.png';

const Name = () => {
    return (
        <Fade>
            <div className="left_wrapper">
            <div className="angle_image">
            <img className="angle_brackets" src={angle_brackets} alt="logo"></img>
            </div>
            <h2 className="about_me_name">Janet Urbina Núñez</h2>
            <hr></hr>
            </div>
        </Fade>
    );
};

export default Name;