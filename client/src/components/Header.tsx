import React from "react";
import styled from "styled-components";
import { PlusIcon } from "@radix-ui/react-icons";
import { Form } from "./form";

export type HeaderProps = {
    children: React.ReactNode;
    handleAddItem: (data: string) => void;
};

const StyledDiv = styled.header`
    display: flex;

    h1 {
        margin-right: auto;
    }

    button {
        all: unset;
        border-radius: 50%;
        border: 1px solid;
        border-color: ${(props) => props.theme.colors.olive9};
        background-color: ${(props) => props.theme.colors.grass9};
        color: #fff;
        width: 25px;
        height: 25px;
    }
`;

export const Header: React.FC<HeaderProps> = ({ handleAddItem, children }) => {
    const [showForm, setShowForm] = React.useState(false);

    const onFormSubmit = (data: string) => {
        handleAddItem(data);
        setShowForm(false);
    };

    const onFormCancel = () => {
        setShowForm(false);
    };

    return (
        <StyledDiv>
            <h1>{children}</h1>
            {showForm ? (
                <Form handleSubmit={onFormSubmit} handleCancel={onFormCancel} initialValue="" />
            ) : (
                <button onClick={() => setShowForm(true)}>
                    <PlusIcon />
                </button>
            )}
        </StyledDiv>
    );
};
