import React from 'react';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

import './Project.css';
import pleca from '../../assets/pleca_200.png'
import angle_brackets from '../../assets/diple_azules_120.png';

const Title = () => {
    return (
        <div>
        <Slide left delay={500}>
        <div className="pleca">
            <img src={pleca} alt='Pleca'></img>
        </div>
        </Slide>

        <Fade>
        <div className="title_wrapper">
        <div className="angle_image_project">
        <img className="angle_brackets_project" src={angle_brackets} style={{width:"50px"}} alt="logo"></img>
        </div>
        <h2 className="title_project">Proyectos</h2>
        <hr></hr>
        </div>
         </Fade>
            
        </div>
    );
};

export default Title;