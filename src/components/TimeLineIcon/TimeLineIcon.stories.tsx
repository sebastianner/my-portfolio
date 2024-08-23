import { Meta, StoryObj } from "@storybook/react";
import TimeLineIcon from "./TimeLineIcon";

const meta = {
  component: TimeLineIcon,
} satisfies Meta<typeof TimeLineIcon>;
type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {
    // Fill with props
    image: {
      url: "https://i.ibb.co/yggdyjT/fsb-technology-logo.jpg",
      alt: "test image",
    },
    outlineColor: "#fff",
  },
};
