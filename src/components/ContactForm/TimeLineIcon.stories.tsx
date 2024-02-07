import { Meta, StoryObj } from "@storybook/react";
import ContactForm from "./ContactForm";

const meta = {
  component: ContactForm,
} satisfies Meta<typeof ContactForm>;
type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {
    // Fill with props
  },
};
