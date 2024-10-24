import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import App from "../App";
import { describe, it } from "vitest";
import { GET_ALL_CATS } from "../connectors/cats";

const mocks = [
  {
    request: {
      query: GET_ALL_CATS,
    },
    result: {
      data: {
        getCats: [
          { id: "1", name: "Item 1", imageSrc: "url" },
          { id: "2", name: "Item 2", imageSrc: "url" },
        ],
      },
    },
  },
];

describe("App", () => {
  it("renders headline", () => {
    render(
      <MockedProvider mocks={mocks}>
        <App />
      </MockedProvider>
    );

    screen.debug();
  });
});
