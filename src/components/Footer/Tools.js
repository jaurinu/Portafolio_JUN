import React from 'react';

import './Footer.css';
import background_footer from '../../assets/background_inferior_230.jpg'
import tools from '../../assets/herramientas_100.png';

const Tools = () => {
    return (
        <footer>
            <div>
            <div className="background_footer">
                <img src={background_footer} alt='background_footer' style={{width: '100%'}} ></img>
            </div>
            
            <div className="tools">
                <img src={tools} alt='tools' ></img>
            </div>
            </div>
        </footer>
    );
};

export default Tools;