import React, { useState } from "react";
import styled from "styled-components";
import { InputProps } from "./types";

const StyledInput = styled.input`
    border-radius: 9999px;
    padding: 0 12px;
    border: 1px solid;
    border-color: ${(props) => props.theme.colors.olive6};
    outline: none;

    :focus-visible,
    :focus,
    :focus-within {
        border-color: ${(props) => props.theme.colors.olive10};
    }
`;

export const Input = React.forwardRef<HTMLInputElement, InputProps>((props: InputProps, ref) => {
    const [value, setValue] = useState(props.initialValue);

    return (
        <StyledInput
            ref={ref}
            value={value}
            onChange={(e) => {
                const value = e.currentTarget.value;
                setValue(value);
                props.handleInputChange(value);
            }}
        />
    );
});
