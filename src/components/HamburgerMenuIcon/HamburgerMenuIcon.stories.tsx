import { Meta, StoryObj } from "@storybook/react";
import HamburgerMenuIcon from "./HamburgerMenuIcon";

const meta = {
  component: HamburgerMenuIcon,
} satisfies Meta<typeof HamburgerMenuIcon>;
type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {
    // Fill with props
    color: "#fafa",
    isOpen: false,
  },
};
