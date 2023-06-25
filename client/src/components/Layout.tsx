import styled from "styled-components";

export const Layout = styled.main`
    background-color: rgb(255, 255, 255);
    border: 1px solid;
    border-color: ${(props) => props.theme.colors.olive6};
    border-radius: 5px;
    width: 100%;
    margin: 0 16px;
    max-width: 600px;
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    footer {
        margin-top: auto;
    }
`;
