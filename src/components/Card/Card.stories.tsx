import { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";

const meta = {
  component: Card,
} satisfies Meta<typeof Card>;
type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {
    description: "Mobile developer",
    icon: "/assets/smartphone.svg",
    // Fill with props
    technology: "react",
  },
};
