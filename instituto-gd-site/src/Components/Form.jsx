import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './form.css';

const Formulario = () => {
    return (
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