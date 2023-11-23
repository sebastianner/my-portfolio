import { Meta, StoryObj } from "@storybook/react";
import TimeLineItem from "./TimeLineItem";

const meta = {
  component: TimeLineItem,
} satisfies Meta<typeof TimeLineItem>;
type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {
    // Fill with props
    date: new Date(2022, 3, 7),
    title: "Frontend developer",
    company: "FSB TECH",
    description: "Frontend developer at FSB",
    backgroundColor: "#fcb603",
  },
};
