import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';

import './Project.css';
import Title from './Title';
import MyButton from '../Button/Button';

import Pata_hueca_logo from '../../assets/projects/Pata_hueca_logo.jpg'
import Pokesaurius from '../../assets/projects/Pokesaurius.jpg'
import Salon_rojo from '../../assets/projects/Salon_rojo.jpg'



class Projects extends Component {
state = {
    project_img:[`${Pata_hueca_logo}`, Pokesaurius, Salon_rojo],
    project_name:['Pata hueca', 'Pokesaurius', 'Salón rojo'],
    desc:['E-commerce para una red de ceramistas y diseñadores',
          'Catálogo de Pokemones de la región Kanto',
          'Catálogo digital de películas para conocer cine alternativo.'],
    tools:['HTML5, CSS3, JavaScript, Materialize, Firebase', 
           'HTML5, CSS3, JavaScript', 'HTML5, CSS3, JavaScript, Bootstrap, Marvel'],
    linktodemo:['https://jaurinu.github.io/e-commerce/src/', 'https://jaurinu.github.io/cdmx-2019-01-bc-core-data-lovers/src/', 'https://jaurinu.github.io/mex007-hackathon-interna/src'],
    linktocode:['https://github.com/jaurinu/e-commerce', 'https://github.com/jaurinu/cdmx-2019-01-bc-core-data-lovers', 'https://github.com/jaurinu/mex007-hackathon-interna'],
    delay:[500, 0, 500]
}

showProjects = () => (
    this.state.project_img.map((box,i)=>(
        <Zoom delay={this.state.delay[i]} key={i}>
        <div className='projects_item'>
<div className='projects_inner_wrapper'>
<div className='projects_image'
    style={{
    background:`url(${this.state.project_img[i]})`,
}}
>            
</div>
<div className='projects_title'>
    <span>{this.state.project_name[i]}</span>
</div>
<div className='projects_description'>
    {this.state.desc[i]}
</div>
<div className='projects_description'>
    Herramientas: {this.state.tools[i]}
</div>
<div className='projects_buttons'>
    <MyButton
        text='Demo'
        bck='#CAE26A'
        color='#143058'
        link={this.state.linktodemo[i]}
    />
    <MyButton 
        text='Código'
        bck='#CAE26A'
        color='#143058'
        link={this.state.linktocode[i]}
    />
 </div>
</div>
</div>
</Zoom>
    ))
)

    render() {
        return (
            <div>
            <Title />
            <div className='center_wrapper_projects projects_wrapper'>
            {this.showProjects()}
            </div>
                
            </div>
        );
    }
}

export default Projects;