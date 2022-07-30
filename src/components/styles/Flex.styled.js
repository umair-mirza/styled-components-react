import styled from "styled-components";

export const Flex = styled.div`
    display: flex;
    align-items: center;

    & > div,    //Any direct div or ul will be set to flex 1
    & > ul {
        flex: 1;
    }

    @media(max-width: ${({theme}) => theme.mobile}) {
        flex-direction: column;
        text-align: center;
    }
`