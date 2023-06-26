import React, { useState } from "react";
import styled from "styled-components";
import { FormProps } from "./types";
import { Input } from "./Input";
import { CheckIcon, Cross1Icon } from "@radix-ui/react-icons";
import { Button } from "../Button";

const StyledForm = styled.form`
    display: flex;

    button {
        margin-left: 4px;
    }
`;

export const Form: React.FC<FormProps> = ({ handleCancel, handleSubmit, initialValue }) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const [data, setData] = useState(initialValue);

    React.useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <StyledForm
            onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(data);
            }}
            onReset={handleCancel}
        >
            <Input ref={inputRef} initialValue={initialValue} handleInputChange={setData} />
            <Button type={"submit"} color="green">
                <CheckIcon />
            </Button>
            <Button type={"reset"}>
                <Cross1Icon />
            </Button>
        </StyledForm>
    );
};
