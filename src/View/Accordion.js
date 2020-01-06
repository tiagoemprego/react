import React from "react"
import styled from "styled-components"
import AccordionComponent from "../Components/AccordionComponent"

const Text = styled.h1`
    padding: 15px;
    text-align: center;
    color: ${(props) => (props.primary ? 'red' : 'black')};
`;

export class Accordion extends React.Component{

    render() {
        return (
            <>
                <Text primary>Exemplo de Accordion</Text>

                <AccordionComponent
                    title="Qual é a sua política de devolução?"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <AccordionComponent
                    title="Qual é a sua política de privacidade?"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
            </>
        )
    }
}