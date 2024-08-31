import { render, screen } from "@testing-library/react";
import ContactButton from "./ContactButton";
import userEvent from "@testing-library/user-event";

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
  email: "someone@example.com",
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
  test("Should behave as mailto", async () => {
    render(<ContactButton {...emailProps} />);
    const linkElement = screen.getByRole("link");
    const hrefAttribute = linkElement.getAttribute("href");

    expect(hrefAttribute).toEqual(`mailto:${emailProps.email}`);
  });
  test("Should behave as link", () => {
    render(<ContactButton {...linkProps} />);
    const linkElement = screen.getByRole("link");
    const hrefAttribute = linkElement.getAttribute("href");

    expect(hrefAttribute).toEqual(`${linkProps.link}`);
  });
  test("Should open a new tab on link click", () => {
    render(<ContactButton {...linkProps} />);
    userEvent.click(screen.getByRole("link"));
    expect(document.hidden).toBeFalsy();
  });
});
