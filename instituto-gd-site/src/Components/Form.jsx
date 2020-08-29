import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, CardText } from 'reactstrap';

const Formulario = () => {
    return (
        <div id="participe">
            <Form id="formulario-video" className='formulario' method="post" action="upload.php" encType="multipart/form-data">
                <p>
                    <h2>Divida conosco sua experiência de vida com o Gilberto.</h2>
                Como gravar seu vídeo:<br></br>
                    <ul>
                        <li>Procure um lugar com luminosidade boa.</li>
                        <li>Grave preferencialmente na horizontal.</li>
                        <li>Os vídeos podem ter de 1 a 5 minutos.</li>
                        <li>Sempre começar sua fala com seu nome e de onde você é, e dividir com todos sua experiência de vida com Gilberto e seus projetos.</li>
                    </ul>
                </p>
                <FormGroup>
                    <Label id='labelNome' for="nome">Nome</Label>
                    <Input type="text" name="nome" id='nome' required/>
                </FormGroup>
                <FormGroup>
                    <Label id='labelEmail' for="email">E-mail</Label>
                    <Input type="email" name="email" id='email' required/>
                </FormGroup>
                <FormGroup>
                    <Label for="video">Seu vídeo</Label>
                    <Input type="file" name="video" id='video' required/>
                </FormGroup>
                <FormGroup>
                    <Button color="secondary" type="submit">Enviar</Button>
                </FormGroup>
            </Form>
        </div>
    )
}

export default Formulario;