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

export const Form = (props: FormProps): JSX.Element => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const [data, setData] = useState(props.initialValue);

    React.useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <StyledForm
            onSubmit={(e) => {
                e.preventDefault();
                props.handleSubmit(data);
            }}
            onReset={() => {
                props.handleCancel();
            }}
        >
            <Input
                ref={inputRef}
                initialValue={props.initialValue}
                handleInputChange={(value: string) => setData(value)}
            />
            <Button type={"submit"} color="green">
                <CheckIcon />
            </Button>
            <Button type={"reset"}>
                <Cross1Icon />
            </Button>
        </StyledForm>
    );
};
