import React from "react";
import styled from "styled-components";

const StyledDiv = styled.footer`
    display: flex;
    align-items: center;
    padding: 10px 20px;
    margin-top: 15px;
    border-top: 1px solid;
    border-color: ${(props) => props.theme.colors.olive6};
    gap: 12px;

    > span:last-child {
        opacity: 0.5;
    }
`;

export type FooterProps = {
    todoItems?: number;
    doneItems?: number;
};

export const Footer: React.FC<FooterProps> = ({ todoItems = 0, doneItems = 0 }) => (
    <StyledDiv>
        <span>Todo: {todoItems}</span>
        <span>Done: {doneItems}</span>
    </StyledDiv>
);
