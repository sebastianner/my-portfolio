import { Meta, StoryObj } from "@storybook/react";
import HamburgerMenu from "./HamburgerMenu";
import { navItems } from "@/utils/mockData/data";

const meta = {
  component: HamburgerMenu,
} satisfies Meta<typeof HamburgerMenu>;
type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {
    // Fill with props
    color: "#000",
    navItem: navItems,
  },
};
