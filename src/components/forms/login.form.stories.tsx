import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { LoginForm } from "./login.form";

const meta: ComponentMeta<typeof LoginForm> = {
  title: "UI/LoginForm",
  component: LoginForm,
};

export default meta;

const Template: ComponentStory<typeof LoginForm> = args => (
  <LoginForm {...args} />
);

export const Primary = Template.bind({});
