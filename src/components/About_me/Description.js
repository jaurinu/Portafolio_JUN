import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import './Aboutme.css';
import profile_photo from '../../assets/foto_perfil_1.jpg'
import CV from '../../assets/cv/CV_JUN_2019.pdf';
import blue_logo from '../../assets/about_me_logo_azul_250.png';
import MyButton from '../Button/Button';

class Description extends Component {
    render() {
        return (
            <div>
            <div className="center_wrapper">
            <div className="aboutme_wrapper">
            <Fade>
            <Slide left>
            <div className="profile_image">
                <img src={profile_photo} alt="logo"></img>
            </div>
            </Slide>
            </Fade>

            <Slide right>
            <div className="right_wrapper">
            <div className="description_wrappper">
            <p>
            Soy Janet, arquitecta de profesión, graduada de la especialidad 
            de Front-end del Bootcamp de Laboratoria. 
            <br /><br />
            Con interés en participar en el desarrollo de proyectos web.
            <br /><br />
            Me apasiona la tecnología, arquitectura, música, el cine y 
            la permacultura.
            </p>
            <hr></hr>

            <div className="my_button_cv">
            <MyButton 
                text='Descargar CV'
                bck='#CAE26A'
                color='#143058'
                link={CV}
            />
            </div>
            </div>
            </div>
            </Slide>
            </div>
            </div>

            <div className="logo_wrapper">
                <img src={blue_logo} alt="logo"></img>
            </div>
            
            </div>
                

        );
    }
}

export default Description;