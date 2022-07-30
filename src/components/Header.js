import { StyledHeader } from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";

import React from 'react'

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Nav>
                    <Logo src="./images/logo.svg" alt="" />
                    <Button>Try It Free</Button>
                </Nav>
                <h1>Hubble</h1>
            </Container>
        </StyledHeader>
    )
}

export default Header
