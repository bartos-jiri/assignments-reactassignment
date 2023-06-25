import React from "react";
import styled from "styled-components";
import { Checkbox } from "./Checkbox";
import { CheckboxProps } from "@radix-ui/react-checkbox";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { Form } from "./form";
import { Button } from "./Button";

const StyledDiv = styled.div`
    display: flex;
    align-items: center;

    div {
        display: none;
    }

    :hover div {
        display: flex;
    }
`;

const Label = styled.label`
    margin-left: 15px;
    flex: 1;
`;

export type LiteItemProp = CheckboxProps & {
    label: string;
    handleEdit: (title: string) => void;
    handleRemoval: () => void;
};

export const ListItem: React.FC<LiteItemProp> = ({ label, handleRemoval, handleEdit, checked, ...checkboxProps }) => {
    const [showForm, setShowForm] = React.useState(false);

    const handleFormSubmit = (title: string) => {
        handleEdit(title);
        setShowForm(false);
    };

    const handleFormCancel = () => {
        setShowForm(false);
    };

    return (
        <StyledDiv>
            {showForm ? (
                <Form handleSubmit={handleFormSubmit} handleCancel={handleFormCancel} initialValue={label} />
            ) : (
                <>
                    <Checkbox checked={checked} {...checkboxProps} />
                    <Label>{label}</Label>
                    <div>
                        <Button onClick={() => setShowForm(true)}>
                            <Pencil1Icon />
                        </Button>
                        <Button onClick={() => handleRemoval()} color="red">
                            <TrashIcon />
                        </Button>
                    </div>
                </>
            )}
        </StyledDiv>
    );
};
