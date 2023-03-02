import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "./button";
import { Plus } from "lucide-react";

const meta: ComponentMeta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  argTypes: {
    fullWidth: {
      type: "boolean",
      defaultValue: false,
    },
    isLoading: {
      type: "boolean",
      defaultValue: false,
    },
    disabled: {
      type: "boolean",
      defaultValue: false,
    },
    rounded: {
      type: "boolean",
      defaultValue: false,
    },
  },
};

export default meta;

const Template: ComponentStory<typeof Button> = args => (
  <Button {...args}>Button</Button>
);

export const Primary = Template.bind({});

export const Rounded = Template.bind({});
Rounded.args = {
  rounded: true,
};

export const ButtonWithIcon = Template.bind({});
ButtonWithIcon.args = {
  rightIcon: <Plus size={16} />,
};

export const ButtonFullWidth = Template.bind({});
ButtonFullWidth.args = {
  fullWidth: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: "tertiary",
};

export const Danger = Template.bind({});
Danger.args = {
  variant: "danger",
};
