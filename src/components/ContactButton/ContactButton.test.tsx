import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactButton from "./ContactButton";

type Props = {
  behavior: "Email" | "Link";
  className?: string;
  email?: string;
  icon: {
    alt: string;
    src: string;
  };
  link?: string;
  text: string;
};

const emailProps: Props = {
  behavior: "Email",
  email: "someone@example.com",
  icon: { alt: "", src: "https://www.svgrepo.com/show/532031/cloud-fog.svg" },
  text: "Button Email",
};

const linkProps: Props = {
  behavior: "Link",
  icon: { alt: "", src: "https://www.svgrepo.com/show/532031/cloud-fog.svg" },
  link: "https://www.google.com/",
  text: "Button link",
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
