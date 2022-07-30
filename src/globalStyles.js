import styled, {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
    }
`

export const container = styled.div`
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 50px;

    @media screen and (max-width: 960px) {
        padding: 0 30px;
    }
`
export const MainHeading = styled.h1`
    font-size: 4.5rem;
    margin-bottom: 2rem;
    color: ${({inverse}) => (inverse ? '#403ae3' : "#fff")};
    width: 100%;
    letter-spacing: 4px;
    text-align: center;

    @media screen and (max-width: 960px) {
        font-size: 3.1rem;
    }
`
export const Heading = styled.h2`
    font-size: 3.1rem;

    @media screen and (max-width: 960px) {
        font-size: 2.3rem;
        color: ${({inverse}) => (inverse ? '#403ae3' : "#fff")};
        letter-spacing: 0.4rem;
        line-height: 1.06;
        text-align: center;
        width: 100%;

        @media screen and (max-width: 960px) {
        font-size: 1.7rem;
    }
    }
`
export const TextWrapper = styled.span``
export const Section = styled.section``
export const Row = styled.div``  //display flex row
export const Column = styled.div``  //display flex column

export const Button = styled.button``