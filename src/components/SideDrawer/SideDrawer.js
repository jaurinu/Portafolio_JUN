import React from 'react';
import { scroller } from 'react-scroll';

import './SideDrawer.css';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    };

    const scrollToElement = (element) => {
        scroller.scrollTo(element, {
            duration: 1500,
            delay:100,
            smooth:true,
            offset:-85
        });
        
    }


    return (
    <nav
        anchor='right'
        open={props.open}
        onClose={()=> props.onClose(false)}
        padding= '10px 0px'
    >
        <ul className={drawerClasses}>
            <ListItem button className="button-list" onClick={()=> scrollToElement('home')} >
            Home
            </ListItem>
            <ListItem button className="button-list" onClick={()=> scrollToElement('aboutme')} >
            Acerca de mí
            </ListItem>
            <ListItem button className="button-list" onClick={()=> scrollToElement('projects')} >
            Proyectos
            </ListItem>
            <ListItem button className="button-list" onClick={()=> scrollToElement('contact')} >
            Habilidades técnicas
            </ListItem>
            <ListItem button className="button-list" onClick={()=> scrollToElement('contact')} >
            Contacto
            </ListItem>
        </ul>
    </nav>
    );
};

export default SideDrawer;