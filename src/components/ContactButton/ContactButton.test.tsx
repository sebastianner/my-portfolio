import { render } from "@testing-library/react";
import ContactButton from "./ContactButton";

type Props = {
  className?: string;
  behavior: "Email" | "Link";
  icon: {
    src: string;
    alt: string;
  };
  text: string;
  email?: string;
  link?: string;
};

const emailProps: Props = {
  behavior: "Email",
  icon: { src: "https://www.svgrepo.com/show/532031/cloud-fog.svg", alt: "" },
  text: "Button Email",
  email: "mailto:someone@example.com",
};

const linkProps: Props = {
  behavior: "Link",
  icon: { src: "https://www.svgrepo.com/show/532031/cloud-fog.svg", alt: "" },
  text: "Button link",
  link: "https://www.google.com/",
};

describe("ContactButton component", () => {
  test("Should render component", () => {
    render(<ContactButton {...emailProps} />);
  });
  test("Should behave as mailto", () => {});
  test("Should behave as link", () => {});
});
