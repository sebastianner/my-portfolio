import { Meta, StoryObj } from "@storybook/react";
import SocialIconRow from "./SocialIconRow";

const meta = {
  component: SocialIconRow,
} satisfies Meta<typeof SocialIconRow>;
type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {
    // Fill with props
    icons: [{ alt: "fff", behavior: "Link", href: "", src: "" }],
  },
};
