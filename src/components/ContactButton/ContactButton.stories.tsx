import { Meta, StoryObj } from "@storybook/react";
import ContactButton from "./ContactButton";

const meta = {
  component: ContactButton,
} satisfies Meta<typeof ContactButton>;
type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  storyName: "Button link",
  args: {
    // Fill with props
    behavior: "Link",
    icon: { src: "https://www.svgrepo.com/show/532031/cloud-fog.svg", alt: "" },
    text: "Button link",
    link: "https://www.google.com/",
  },
};

export const Email: Story = {
  storyName: "Button Email",
  args: {
    // Fill with props
    behavior: "Email",
    icon: { src: "https://www.svgrepo.com/show/532031/cloud-fog.svg", alt: "" },
    text: "Button Email",
    email: "mailto:someone@example.com",
  },
};
