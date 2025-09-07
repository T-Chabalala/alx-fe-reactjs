import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    const items = screen.getAllByTestId("todo-item");
    expect(items.length).toBe(3);
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add todo");
    const addButton = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(addButton);

    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

  test("toggles a todo completion", () => {
    render(<TodoList />);
    const firstTodo = screen.getAllByTestId("todo-item")[0];

    // Initially not completed
    expect(firstTodo).toHaveStyle("text-decoration: none");

    fireEvent.click(firstTodo);

    // Should be completed
    expect(firstTodo).toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const firstDeleteButton = screen.getAllByTestId("delete-btn")[0];

    fireEvent.click(firstDeleteButton);

    const itemsAfterDelete = screen.getAllByTestId("todo-item");
    expect(itemsAfterDelete.length).toBe(2);
  });
});
