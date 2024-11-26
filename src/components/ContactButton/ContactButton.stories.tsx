import { Meta, StoryObj } from "@storybook/react";
import ContactButton from "./ContactButton";

const meta = {
  component: ContactButton,
} satisfies Meta<typeof ContactButton>;
type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {
    href: "", // Fill with props
    icon: { alt: "", src: "https://www.svgrepo.com/show/532031/cloud-fog.svg" },
  },
  storyName: "Button link",
};

export const Email: Story = {
  args: {
    href: "", // Fill with props
    icon: { alt: "", src: "https://www.svgrepo.com/show/532031/cloud-fog.svg" },
  },
  storyName: "Button Email",
};
