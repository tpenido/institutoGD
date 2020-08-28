import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, CardText } from 'reactstrap';
import './form.css';

const Formulario = () => {
    return (
        <CardText>Divida conosco sua experiência de vida com o Gilberto. - OK
        
        Como gravar seu vídeo:
        Procure um lugar com luminosidade boa;
        Grave preferencialmente na horizontal
        Os vídeos podem ter de 1 a 5 minutos
        Sempre começar sua fala com seu nome e de onde você é, e dividir com todos sua experiência de vida com Gilberto e seus projetos.
        </CardText>
        <Form id="formulario-video" className='formulario' method="post" action="upload.php" encType="multipart/form-data">
            <FormGroup>
                <Label for="nome">Nome</Label>
                <Input type="text" name="nome" id='nome' />
            </FormGroup>
            <FormGroup>
                <Label for="email">E-mail</Label>
                <Input type="email" name="email" id='email' />
            </FormGroup>
            <FormGroup>
                <Label for="video">Seu vídeo</Label>
                <Input type="file" name="video" id='video' />
            </FormGroup>
            <FormGroup>
                <Button color="secondary" type="submit">Enviar</Button>            
            </FormGroup>
        </Form>
    )
}

export default Formulario;