import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { CatImage } from "../pages/HomePage/subcomponents/CatImage";
import { Rarity } from "../types/Rarity";
import { NameTag } from "../pages/HomePage/subcomponents/NameTag";
import { ButtonContainer } from "../pages/HomePage/subcomponents/ButtonContainer";
import { Bio } from "../pages/HomePage/subcomponents/Bio";
import { Homepage } from "../pages/HomePage/HomePage";
import { MemoryRouter } from "react-router";
import { UseCatStore } from "../state/useCatsStore";
import { server } from "./handlers";

describe("CatImage", () => {
  test("Should render rarity tag and image source", () => {
    render(
      <CatImage
        imageSource={
          "https://plus.unsplash.com/premium_photo-1677101221533-52b45823a2dc?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        rarityTag={Rarity.common}
      />
    );

    expect(screen.getByText(Rarity.common)).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src");
  });

  test("Should render app logo when image src is broken", () => {
    render(
      <CatImage
        imageSource={
          "plus.unsplash.com/premium_photo-1677101221533-52b45823a2dc?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        rarityTag={Rarity.common}
      />
    );
    const img = screen.getByRole("img");

    fireEvent.error(img);

    expect(img).toHaveAttribute("src", "/the-cat-button-logo.png");
  });

  test("Should render fallback rarity tag when rarity prop is broken", () => {
    render(
      <CatImage
        imageSource={
          "plus.unsplash.com/premium_photo-1677101221533-52b45823a2dc?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        // @ts-expect-error purposefully passes invalid prop
        rarityTag={""}
      />
    );

    expect(screen.getByText("???")).toBeInTheDocument();
  });
});

describe("NameTag", () => {
  test("Should render name and icon", () => {
    render(<NameTag name="Sir WhiskerBottom" />);

    const element = screen.getByTestId("fa-crown");

    expect(element).toBeInTheDocument();

    expect(screen.getByText("Sir WhiskerBottom")).toBeInTheDocument();
  });

  test("Should render unknown kitty name if invalid prop", () => {
    render(<NameTag name="" />);

    expect(screen.getByText("Unknown Kitty")).toBeInTheDocument();
  });
});

describe("The Cat Button", () => {
  test("Should call onClick when button wrapper is clicked", () => {
    const handleClick = vi.fn();
    render(<ButtonContainer onClick={handleClick} />);
    const wrapper = document.querySelector(".button-wrapper");

    expect(wrapper).toBeInTheDocument();
    if (wrapper) fireEvent.click(wrapper);

    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(screen.getByText("Press the button!")).toBeInTheDocument();
  });

  test('"Press The Button" message should not display after one click', () => {
    const handleClick = vi.fn();
    render(<ButtonContainer onClick={handleClick} />);
    const wrapper = document.querySelector(".button-wrapper");

    expect(wrapper).toBeInTheDocument();
    if (wrapper) fireEvent.click(wrapper);

    expect(handleClick).toHaveBeenCalledTimes(1);
    const messageElement = screen.queryByText("Press The Button!");
    expect(messageElement).not.toBeInTheDocument();
  });
});

describe("Bio", () => {
  test("Should render age, occupation, hobby, backstory, origin, and show cat is in storage", () => {
    render(
      <Bio
        age={1}
        occupation="Cat Job"
        hobby="Cat Hobby"
        backstory="Cat Backstory"
        origin="Cat Origin"
        toggleFavorite={() => null}
        isCatInStorage={true}
      />
    );

    expect(screen.getByText("Age: 1 Year")).toBeInTheDocument();
    expect(screen.getByText("Occupation: Cat Job")).toBeInTheDocument();
    expect(screen.getByText("Hobby: Cat Hobby")).toBeInTheDocument();
    expect(screen.getByText("Cat Backstory")).toBeInTheDocument();
    expect(screen.getByText("Origin: Cat Origin")).toBeInTheDocument();
    expect(screen.getByText("Saved to Favorites")).toBeInTheDocument();
  });

  test("Should prompt to save cat to favorites", () => {
    render(
      <Bio
        age={1}
        occupation="Cat Job"
        hobby="Cat Hobby"
        backstory="Cat Backstory"
        origin="Cat Origin"
        toggleFavorite={() => null}
        isCatInStorage={false}
      />
    );

    expect(screen.getByText("Age: 1 Year")).toBeInTheDocument();
    expect(screen.getByText("Occupation: Cat Job")).toBeInTheDocument();
    expect(screen.getByText("Hobby: Cat Hobby")).toBeInTheDocument();
    expect(screen.getByText("Cat Backstory")).toBeInTheDocument();
    expect(screen.getByText("Origin: Cat Origin")).toBeInTheDocument();
    expect(screen.getByText("Save to Favorites")).toBeInTheDocument();
  });

  test("Should display fallback ??? for empty fields", () => {
    render(
      <Bio
        //@ts-expect-error testing bad props
        age={undefined}
        //@ts-expect-error testing bad props
        occupation={undefined}
        //@ts-expect-error testing bad props
        hobby={undefined}
        //@ts-expect-error testing bad props
        backstory={undefined}
        //@ts-expect-error testing bad props
        origin={undefined}
        toggleFavorite={() => null}
        isCatInStorage={false}
      />
    );

    expect(screen.getByText("Age: ???")).toBeInTheDocument();
    expect(screen.getByText("Occupation: ???")).toBeInTheDocument();
    expect(screen.getByText("Hobby: ???")).toBeInTheDocument();
    expect(screen.getByText("Origin: ???")).toBeInTheDocument();
    expect(document.querySelector(".backstory")?.innerHTML).toBe("???");
  });
});

describe("Home Page Loading State", () => {
  beforeEach(async () => {
    vi.resetModules(); // Clear previous mocks and module cache
    vi.doMock("axios", () => ({
      default: {
        get: vi.fn(() => new Promise(() => {})),
      },
    }));

    vi.stubEnv("VITE_USE_MOCK_DATA", "false"); // or 'true' to hit mock path
  });

  afterEach(() => {
    vi.restoreAllMocks(); // Clear mocks
    vi.resetModules(); // Clear module cache so real axios can be used in other tests
  });

  test("Should show spinner when fetching api response and hide profile image", () => {
    render(
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>
    );

    const spinnerElement = document.querySelector(".spinner");
    expect(spinnerElement).toBeInTheDocument();
    expect(document.querySelector("img")).not.toBeInTheDocument();
  });
});

describe("Home Page Integration", () => {
  beforeEach(() => {
    // Reset Zustand store before each test for a clean slate
    vi.stubEnv("VITE_USE_MOCK_DATA", "true"); // or 'true' to hit mock path

    UseCatStore.setState({ cats: [] });
  });

  test("Clicking favorite button updates zustand store", async () => {
    render(
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>
    );

    const button = screen.getByTestId("favorite-btn");
    fireEvent.click(button);

    const { cats } = UseCatStore.getState();
    expect(cats.length).toBe(1);
  });

  test("Clicking favorite button twice updates zustand store with cat then removes", () => {
    render(
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>
    );

    const button = screen.getByTestId("favorite-btn");
    fireEvent.click(button);
    fireEvent.click(button);

    const { cats } = UseCatStore.getState();
    expect(cats.length).toBe(0);
  });

  test("Fetch new cat when pressing The Cat Button", () => {
    render(
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>
    );

    const button = screen.getByText("Another Cat!");

    const prevImageSrc = screen.getByRole("img").getAttribute("src");
    const prevCatName = screen.getByTestId("cat-name").textContent;

    fireEvent.click(button);

    const currentImageSource = screen.getByRole("img").getAttribute("src");
    const currentCatName = screen.getByTestId("cat-name").textContent;

    expect(prevImageSrc === currentImageSource).toBeFalsy();
    expect(prevCatName === currentCatName).toBeFalsy();
  });

  test("Saved Cat text should persist on re-renders", () => {
    render(
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>
    );

    const favoriteButton = screen.getByTestId("favorite-btn");

    expect(favoriteButton.textContent).toBe("Save to Favorites");

    fireEvent.click(favoriteButton);

    render(
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>
    );

    expect(favoriteButton.textContent).toBe("Saved to Favorites");
  });
});

describe("Home Page Mock Service Worker", () => {
  beforeEach(() => {
    vi.stubEnv("VITE_USE_MOCK_DATA", "false"); // 'true' to hit mock path
    vi.stubEnv("VITE_CAT_BUTTON_API", "http://localhost:3000/api/cats/"); // 'true' to hit mock path

    // Reset Zustand store before each test for a clean slate
    UseCatStore.setState({ cats: [] });
  });

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test("Should use Mock Service Worker", async () => {
    render(
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>
    );

    const catName = await screen.findByTestId("cat-name");
    expect(catName.textContent).toBe("Captain Marmalade");
  });
});
