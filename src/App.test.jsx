import { describe, it, expect } from "vitest";
import App from "./App";

import { fireEvent, render, screen } from "@testing-library/react";

describe("App", () => {
	it("renders headline", () => {
		render(<App />);

		expect(screen.getByText("Vite + React")).toBeInTheDocument();
	});

	it("renders subheadline", () => {
		render(<App />);

		expect(screen.getByText("Moinul Moin")).toBeInTheDocument();
	});

	it("renders Vite logo", () => {
		render(<App />);

		expect(screen.getByAltText("Vite logo")).toBeInTheDocument();
	});

	it("renders React logo", () => {
		render(<App />);

		expect(screen.getByAltText("React logo")).toBeInTheDocument();
	});

	it("renders button and checks count", () => {
		render(<App />);

		expect(screen.getByRole("button")).toHaveTextContent("count is 0");

		fireEvent.click(screen.getByRole("button"));

		expect(screen.getByRole("button")).toHaveTextContent("count is 1");
	});
});
