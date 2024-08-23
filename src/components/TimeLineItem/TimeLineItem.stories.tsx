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
    className: "",
    date: [new Date(2022, 3, 7), new Date(2023, 1, 7)],
    title: "Frontend developer",
    company: "FSB TECH",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis nisi a lectus finibus imperdiet eget vel magna.",
    backgroundColor: "#fcb603",
    textColor: "#111",
  },
};
