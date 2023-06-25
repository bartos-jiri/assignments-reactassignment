import { Meta, StoryObj } from "@storybook/react";

import { Button } from "../Button";
import { PlusIcon } from "@radix-ui/react-icons";

const meta = {
    title: "Button",
    component: Button,
} as Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        children: "Label",
    },
};

export const ButtonWithIconOnly: Story = {
    args: {
        children: <PlusIcon />,
    },
};

export const Red: Story = {
    args: {
        children: "Label",
        color: "red",
    },
};

export const Green: Story = {
    args: {
        children: "Label",
        color: "green",
    },
};
