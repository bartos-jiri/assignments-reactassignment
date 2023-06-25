import React from "react";
import styled, { ThemeProps, css } from "styled-components";

const ColorCss = css`
    border-color: ${(props: ThemeProps<any> & ButtonProps) => {
        switch (props.color) {
            case "red":
                return props.theme.colors.red7;
            case "green":
                return props.theme.colors.olive9;
            default:
                return props.theme.colors.blackA;
        }
    }};
    background-color: ${(props: ThemeProps<any> & ButtonProps) => {
        switch (props.color) {
            case "red":
                return props.theme.colors.red9;
            case "green":
                return props.theme.colors.grass9;
            default:
                return "transparent";
        }
    }};
    color: ${(props: ThemeProps<any> & ButtonProps) => {
        switch (props.color) {
            case "transparent":
                return props.theme.colors.blackA;
            default:
                return "#fff";
        }
    }};
`;

type ButtonProps = {
    color?: "red" | "green" | "transparent";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const StyledButton = styled.button`
    all: unset;
    border-radius: 9999px;
    border: 1px solid;
    padding: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    transition: all 0.1s ease-in;

    ${ColorCss}

    :hover {
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }

    :active {
        box-shadow: none;
        translate: 0 1px;
    }
`;

export const Button: React.FC<ButtonProps> = ({ color = "transparent", ...buttonProps }) => {
    return <StyledButton color={color} {...buttonProps} />;
};
