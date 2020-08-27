import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './form.css';
const Formulario = () => {
    return (
        <Form className='formulario'>
            <FormGroup>
                <Label for="exampleNome">Nome</Label>
                <Input type="text" name="nome" id='exampleNome' />
            </FormGroup>
            <FormGroup>
                <Label for="exampleEmail">E-mail</Label>
                <Input type="email" name="email" id='exampleEmail' />
            </FormGroup>
            <FormGroup>
                <Label for="exampleEmail">Seu vídeo</Label>
                <Input type="file" name="video" id='exampleVideo' />
            </FormGroup>
            <FormGroup>
                <Button color="secondary">Enviar</Button>            
            </FormGroup>
        </Form>
    )
}

export default Formulario;