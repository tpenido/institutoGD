import React, { Component } from 'react';
import Hero from '../Components/Hero';
import HomeVideos from '../Components/HomeVideos';
import Formulario from '../Components/Form';
import { Modal, ModalHeader, ModalBody, Button, ModalFooter } from 'reactstrap';

class Home extends Component {
  state = {
    navClass: 'transparent',
    showModal: false
  };

  componentDidMount() {
    const urlParams = new URLSearchParams(window.location.search);
    const showModal = urlParams.get('showModal');
    this.setState({showModal});
  }

  render() {

    const { showModal } = this.state;

    return (
      <React.Fragment>
        <Hero data={this.props.data} lang={this.props.lang} />
        <HomeVideos data={this.props.data} lang={this.props.lang} />
        <Formulario/>
        <Modal isOpen={showModal}>
          <ModalHeader style={{color: '#000'}}>Sua contribuição foi recebida com sucesso!</ModalHeader>
          <ModalBody style={{color: '#000'}}>Obrigado por compartilhar sua história conosco.</ModalBody>
          <ModalFooter><Button onClick={() => {
            this.setState({ showModal: false });
            window.location = '/';
          }}>Fechar</Button></ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Home;
