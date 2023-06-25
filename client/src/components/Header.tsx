import React from "react";
import styled from "styled-components";
import { PlusIcon } from "@radix-ui/react-icons";
import { Form } from "./form";
import { Button } from "./Button";

export type HeaderProps = {
    children: React.ReactNode;
    handleAddItem: (data: string) => void;
};

const StyledDiv = styled.header`
    display: flex;
    align-items: center;
    padding: 10px 20px;
    border-bottom: 1px solid;
    border-color: ${(props) => props.theme.colors.olive6};

    h1 {
        overflow: hidden;
        margin-right: auto;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`;

export const Header: React.FC<HeaderProps> = ({ handleAddItem, children }) => {
    const [showForm, setShowForm] = React.useState(false);

    const handleFormSubmit = (data: string) => {
        handleAddItem(data);
        setShowForm(false);
    };

    const handleFormCancel = () => {
        setShowForm(false);
    };

    return (
        <StyledDiv>
            <h1>{children}</h1>
            {showForm ? (
                <Form handleSubmit={handleFormSubmit} handleCancel={handleFormCancel} initialValue="" />
            ) : (
                <Button onClick={() => setShowForm(true)} color="green">
                    <PlusIcon />
                </Button>
            )}
        </StyledDiv>
    );
};
