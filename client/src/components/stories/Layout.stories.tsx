import styled from "styled-components";
import { Meta, StoryObj } from "@storybook/react";

import { Layout } from "../Layout";

const StyledHeader = styled.header`
    background-color: darkred;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledContent = styled.div`
    background-color: green;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledFooter = styled.footer`
    background-color: skyblue;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const meta = {
    title: "Layout",
    component: Layout,
} as Meta<typeof Layout>;

export default meta;

type Story = StoryObj<typeof Layout>;

export const Default: Story = {
    args: {
        children: (
            <>
                <StyledHeader>Header</StyledHeader>
                <StyledContent>Content</StyledContent>
                <StyledFooter>Footer</StyledFooter>
            </>
        ),
    },
};
