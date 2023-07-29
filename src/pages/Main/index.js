import React from "react";
import { Container, Form, SubmitButton } from "./styles";

import {FaGithub, FaPlus} from 'react-icons/fa'

export default function Home() {
    return(
        <Container>
            
            <h1>
                <FaGithub size={25}/>
                Meus Repositorios
            </h1>


            <Form onSubmit={()=>{}}>
                <input type={'text'} placeholder='Adicionar Repositorios'/>
                <SubmitButton>
                    <FaPlus color="#fff" size={14}/>
            
                </SubmitButton>    
            </Form>    
        </Container>
    )
}