import { fireEvent, render, screen } from "@testing-library/react";
import Card from "./Card";
import { LinkedInIcon } from "@/icons";

type Props = {
  className?: string;
  technology: string;
  description: string;
  icon: JSX.Element;
};

const props: Props = {
  technology: "Typescript",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus nunc sapien, et malesuada tellus sodales non. Proin sodales hendrerit nibh, et tincidunt dolor pretium et. In posuere elementum ante, non sollicitudin lectus. Cras euismod quis est nec ultrices.",
  icon: <LinkedInIcon />,
  className: "testing-className",
};

describe("Card component", () => {
  beforeAll(() => {
    HTMLElement.prototype.getBoundingClientRect = jest.fn(() => {
      return {
        width: 200,
        height: 200,
        x: 100,
        y: 100,
        top: 100,
        left: 100,
        right: 300,
        bottom: 300,
        toJSON: () => {},
      };
    });
  });
  test("Should render component", () => {
    const { container } = render(<Card {...props} />);
    expect(container).toBeDefined();
  });

  test("Should render text props", () => {
    render(<Card {...props} />);
    screen.getByText(props.technology);
    screen.getByText(props.description);
  });

  test("Should apply className prop", () => {
    const { container } = render(<Card {...props} />);
    if (props.className) {
      expect(container.firstChild).toHaveClass(props.className);
    }
  });

  test("Should apply rotation on mouseMove", () => {
    const { container } = render(<Card {...props} />);
    const cardElement = container.querySelector("div");
    if (cardElement) {
      fireEvent.mouseMove(cardElement, { clientX: 100, clientY: 100 });
      expect(cardElement.style.transform).toMatch(
        /rotateY\(-?\d+deg\) rotateX\(-?\d+deg\)/
      );
    }
  });
  test("Should remove rotation on mouseMove", () => {
    const { container } = render(<Card {...props} />);
    const cardElement = container.querySelector("div");
    if (cardElement) {
      fireEvent.mouseMove(cardElement, { clientX: 100, clientY: 100 });
      fireEvent.mouseLeave(cardElement);
      expect(cardElement.style.transform).toBe("rotateY(0deg) rotateX(0deg)");
    }
  });
});
