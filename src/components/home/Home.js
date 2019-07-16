import React from 'react';

import background from '../../assets/background_superior.jpg'
import './Home.css';


const Home = () => {
    return(
        <div className='home_wrapper'>
        <div 
            className='home_image'            
            style={{
                background:`url(${background})`,
                height:`${window.innerHeight}px`,
            }}>
        </div>
        </div>
    );
};

export default Home;