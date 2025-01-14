import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import styled from "styled-components";
import { CheckboxProps } from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

const StyledCheckbox = styled(CheckboxPrimitive.Root)`
    all: unset;
    background-color: white;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: ${(props) => `0 2px 10px ${props.theme.colors.blackA7}`};
    &:hover {
        background-color: ${(props) => props.theme.colors.grass3};
    }
    &:focus {
        box-shadow: ${(props) => `0 2px 10px ${props.theme.colors.blackA9}`};
    }
`;

const StyledIndicator = styled(CheckboxPrimitive.Indicator)`
    color: ${(props) => props.theme.grass11};
    margin-top: 3px;
`;

export const Checkbox: React.FC<CheckboxProps> = (props) => (
    <StyledCheckbox {...props}>
        <StyledIndicator>
            <CheckIcon />
        </StyledIndicator>
    </StyledCheckbox>
);
