import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';


import './Footer.css';
import background_footer from '../../assets/background_inferior_230.jpg'
import tools from '../../assets/herramientas_100.png';
import MyButton from '../Button/Button';

class Footer extends Component {

    state={
        link_name:['Linkedin', 'GitHub' ],
        linktoContact:['https://www.linkedin.com/in/janet-urbina/', 'https://github.com/jaurinu']
    }

    contactLink = () => (
        this.state.linktoContact.map((contact, i)=>(
            <div className='contact_icons' key={i}>
            <MyButton
                text={this.state.link_name[i]}
                bck='#CAE26A'
                color='#143058'
                link={this.state.linktoContact[i]} 
                />      
             </div>
        ))   
    )

    render() {
    return (
        <footer>
            <div style={{position:'relative'}}>
            <div className="background_footer">
                <img src={background_footer} alt='background_footer' style={{width: '100%'}} ></img>
            </div>
            
            <div className="tools">
                <img src={tools} alt='tools' ></img>
            </div>

            <div className="contact">
            <Fade delay={500}>
                <div >Contacto</div>

                <div className='center_wrapper_contact'>
                        {this.contactLink()}
                </div>
            </Fade>

            <Fade delay={500} bottom>
                <div className='footer_copyright'>
                Correo electronico: jaurinu@gmail.com
                </div>
                <div className='footer_copyright'>
                Copyright © 2019  | All Rights Reserved | Janet Urbina Núñez
                </div>
            </Fade>
            </div>
            </div>
        </footer>
     );
}
}

export default Footer;