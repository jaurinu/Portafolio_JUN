import React, { Component }from 'react';
import './styles.css';
import { Element } from 'react-scroll';

import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Home from './components/home/Home';
import Aboutme from './components/About_me/Aboutme';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';


class App extends Component {
  state = {
    sideDrawerOpen: false,
  }

  drawerToogleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    })
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen){
      backdrop = <Backdrop  click={this.backdropClickHandler}/>
    }

    return(
      <div>
       <Toolbar drawerClickHandler={this.drawerToogleClickHandler} />
       <SideDrawer show={this.state.sideDrawerOpen} />
       {backdrop}
       <Element name='home'>
        <Home />
       </Element>
       <Element name='aboutme'>
        <Aboutme />
       </Element>
       <Element name='projects'>
       <Projects />
      </Element>
      <Element name='contact'>
      <Footer />
     </Element>
     
      </div>
    );
  }
}

export default App;
