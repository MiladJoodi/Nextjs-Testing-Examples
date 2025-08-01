# 🧪 React Component Testing Examples

This repository contains a collection of tests for different types of React components  
using **Jest** and **React Testing Library**.

The goal is to create a reference with real-world test examples, including:
- Forms with `onSubmit` handlers
- Input validation and value assertions
- Button clicks and user interaction
- Using `jest.fn()` to spy on function calls
- Fetching data from APIs with loading and error states
- Simple and complex component behavior

Each folder in `components/` includes a demo component along with its test file.

---

👨‍💻 Built by [Milad Joodi](https://github.com/MiladJoodi)  
📂 Personal reference and learning project


---
## ✅ Useful Testing Tools and Matchers

### 📦 Core Tools

- **`jest.fn()`**  
  Creates a mock function. Useful for tracking calls and arguments.

- **`render(component)`**  
  Renders a React component into the testing DOM.

- **`screen`**  
  Access rendered elements using queries like `getByText`, `getByRole`, etc.

- **`userEvent`**  
  Simulates user interactions (click, type, etc.)

- **`waitFor(callback)`**  
  Waits for an async condition to be true. Handy for async rendering.

- **`beforeEach()` / `afterEach()`**  
  Setup or cleanup logic before/after each test.

---

### 🧪 Matchers with `expect()`

- **`expect(value)`**  
  Base function to assert values or behaviors.

- **`.toBe(value)`**  
  Checks strict equality.

- **`.toEqual(object)`**  
  Deep comparison for objects or arrays.

- **`.toBeTruthy()` / `.toBeFalsy()`**  
  Checks if a value is truthy or falsy.

- **`.toContain(item)`**  
  Checks if string/array contains a value.

- **`.toHaveTextContent(text)`**  
  Asserts a DOM node has matching text content.

- **`.toBeInTheDocument()`**  
  Verifies the element exists in the DOM.

- **`.toBeEnabled()` / `.toBeDisabled()`**  
  Checks if a DOM element is enabled/disabled.

- **`.toHaveAttribute(attr, value?)`**  
  Checks for existence and value of an HTML attribute.

- **`.toHaveValue(value)`**  
  Asserts the value of a form element.

- **`.toHaveBeenCalled()`**  
  Checks if a mock function was called.

- **`.toHaveBeenCalledTimes(n)`**  
  Asserts how many times a function was called.

- **`.toHaveBeenCalledWith(arg1, ...)`**  
  Verifies what arguments were passed to the mock function.

- **`.not`**  
  Negates any matcher: `expect(button).not.toBeDisabled()`
