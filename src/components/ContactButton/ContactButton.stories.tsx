import { Meta, StoryObj } from "@storybook/react";
import ContactButton from "./ContactButton";

const meta = {
  component: ContactButton,
} satisfies Meta<typeof ContactButton>;
type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {
    // Fill with props
    behavior: "Link",
    icon: { alt: "", src: "https://www.svgrepo.com/show/532031/cloud-fog.svg" },
    link: "https://www.google.com/",
    text: "Button link",
  },
  storyName: "Button link",
};

export const Email: Story = {
  args: {
    // Fill with props
    behavior: "Email",
    email: "mailto:someone@example.com",
    icon: { alt: "", src: "https://www.svgrepo.com/show/532031/cloud-fog.svg" },
    text: "Button Email",
  },
  storyName: "Button Email",
};
