import React, { Component } from 'react';
import { scroller } from 'react-scroll';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';
import logo from  '../../assets/logo_bco_150.png';
import ListItem from '@material-ui/core/ListItem';


class toolbar extends Component {
    state = {
        headerShow: false
    }

componentDidMount(){
    window.addEventListener('scroll',this.handleScroll);
}
handleScroll = () => {
    if(window.scrollY > 0){
        this.setState({
            headerShow:true
        })
    }else{
        this.setState({
            headerShow:false
        })
    }
}

scrollToElement = (element) => {
    scroller.scrollTo(element,{
        duration: 1500,
        delay:100,
        smooth: true,
        offset: -150
    });
}


    render(){
        return(
            <header 
                className="toolbar"
                style={{
                    backgroundColor: this.state.headerShow ? '#143058' : 'transparent'
                }}
                anchor="right"
         
                >
            <nav className="toolbar_navigation">
            <div className="toolbar_toggle_button">
                <DrawerToggleButton click={this.props.drawerClickHandler}/>
            </div>
            <div className="toolbar_logo font_raleway"><a href="/"><img src={logo} alt="logo"></img></a></div>
            <div className="spacer"/>
            <div className="toolbar_navigation_items">
            <ul>
            <ListItem button className="button-list_nav" onClick={()=> this.scrollToElement('home')} >
            Home
            </ListItem>
            <ListItem button className="button-list_nav" onClick={()=> this.scrollToElement('aboutme')} >
            Acerca de mí
            </ListItem>
            <ListItem button className="button-list_nav" onClick={()=> this.scrollToElement('projects')} >
            Proyectos
            </ListItem>
            <ListItem button className="button-list_nav" onClick={()=> this.scrollToElement('contact')} >
            Habilidades técnicas
            </ListItem>
            <ListItem button className="button-list_nav" onClick={()=> this.scrollToElement('contact')} >
            Contacto
            </ListItem>
        </ul>
            </div>
        </nav>
    </header>
        )
    }
}

export default toolbar;