import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactButton from "./ContactButton";

type Props = {
  className?: string;
  href: string;
  icon: {
    alt: string;
    src: string;
  };
};

const emailProps: Props = {
  href: "mailto:sebastianma87@gmail.com",
  icon: {
    alt: "mail icon",
    src: "https://www.svgrepo.com/show/532031/cloud-fog.svg",
  },
};

const linkProps: Props = {
  href: "https://www.linkedin.com/in/sebastian-mera/",
  icon: {
    alt: "link icon",
    src: "https://www.svgrepo.com/show/532031/cloud-fog.svg",
  },
};

describe("ContactButton component", () => {
  test("Should render component", () => {
    render(<ContactButton {...emailProps} />);
  });
  test("Should behave as mailto", async () => {
    render(<ContactButton {...emailProps} />);
    const linkElement = screen.getByRole("link");
    const hrefAttribute = linkElement.getAttribute("href");

    expect(hrefAttribute).toEqual(expect.stringMatching(/^mailto:.+/));
  });
  test("Should behave as link", () => {
    render(<ContactButton {...linkProps} />);
    const linkElement = screen.getByRole("link");
    const hrefAttribute = linkElement.getAttribute("href");

    expect(hrefAttribute).toEqual(`${linkProps.href}`);
  });
  test("Should open a new tab on link click", () => {
    render(<ContactButton {...linkProps} />);
    userEvent.click(screen.getByRole("link"));
    expect(document.hidden).toBeFalsy();
  });
});
