import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input } from "./input";

const meta: ComponentMeta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  argTypes: {
    disabled: {
      type: "boolean",
      defaultValue: false,
    },
  },
};

export default meta;

const Template: ComponentStory<typeof Input> = args => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: "email",
};

export const InputWithError = Template.bind({});
InputWithError.args = {
  placeholder: "email",
  error: "An error occurred",
};

export const InputWithText = Template.bind({});
InputWithText.args = {
  placeholder: "email",
  helperText: "Enter your email address.",
};
