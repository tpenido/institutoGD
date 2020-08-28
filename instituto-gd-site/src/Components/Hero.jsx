import React, { Component } from 'react';
import bg from '../assets/back.mp4';
import { Container, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import TeaserLightbox from './TeaserLightbox';

class Hero extends Component {
  state = { openLightbox: false };
  _openLightbox = (id, category) => {
    const openLightbox = !this.state.openLightbox;
    if (openLightbox) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'scroll';
    }
    this.setState({ openLightbox });
  };
  render() {
    const { data, lang } = this.props;
    const { home } = data.pages;

    const executeScroll = () => {
      document.getElementById("formulario-video").scrollIntoView({behavior: "smooth", block: "nearest"});
    };

    return (
      <React.Fragment>
        <div className="video-container">
          <div className="herocontent">
            <Container>
              <h1>{home[lang].titulo}</h1>
              <p>{home[lang].subtitulo}</p>
              <Button
                color="danger"
                className="mr-3 animate__animated animate__headShake animate__delay-1s bounce animate__repeat-3"
                onClick={this._openLightbox}
              >
                {home[lang].video} <i className="fa fa-play"></i>
              </Button>
              <Link to={`/movimento`}>
                <Button color="dark" className="mr-3">
                  {home[lang].conheca}
                </Button>
              </Link>
              <Button color="dark" onClick={executeScroll}>{home[lang].participe}</Button>
            </Container>
          </div>
          <div className="overlay"></div>
          <video autoPlay muted loop>
            <source src={bg} type="video/mp4" />
          </video>
        </div>
        {this.state.openLightbox ? (
          <TeaserLightbox
            _openLightbox={this._openLightbox}
            id={home[lang].videoID}
          />
        ) : (
          ''
        )}
      </React.Fragment>
    );
  }
}

export default Hero;
