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
    padding: 2px;
    border-radius: 14px;

    div {
        display: none;
        button {
            margin-left: 4px;
        }
    }

    :hover div {
        display: flex;
    }

    > form {
        margin-left: 2px;
    }
`;

const Label = styled.label`
    margin-left: 15px;
    flex: 1;
    text-decoration: ${(props: { crossed: boolean }) => (props.crossed ? "line-through" : "initial")};
    opacity: ${(props: { crossed: boolean }) => (props.crossed ? 0.5 : "initial")};
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
            <Checkbox checked={checked} disabled={checkboxProps.disabled || showForm} {...checkboxProps} />
            {showForm ? (
                <Form handleSubmit={handleFormSubmit} handleCancel={handleFormCancel} initialValue={label} />
            ) : (
                <>
                    <Label crossed={checked === true}>{label}</Label>
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
