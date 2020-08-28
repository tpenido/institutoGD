import React, { Component } from 'react';
import Hero from '../Components/Hero';
import HomeVideos from '../Components/HomeVideos';
import Formulario from '../Components/Form';
class Home extends Component {
  state = {
    navClass: 'transparent',
  };

  render() {
    return (
      <React.Fragment>
        <Hero data={this.props.data} lang={this.props.lang} />
        <HomeVideos data={this.props.data} lang={this.props.lang} />
        <Formulario/>
      </React.Fragment>
    );
  }
}

export default Home;
