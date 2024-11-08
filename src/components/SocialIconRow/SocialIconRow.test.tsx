import { render } from "@testing-library/react";
import SocialIconRow from "./SocialIconRow";

describe("ContactButton component", () => {
  test("Should render component", () => {
    render(<SocialIconRow icons={[]} />);
  });
});
