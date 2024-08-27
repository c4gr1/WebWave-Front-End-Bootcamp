# JavaScript Notes
## 1. JavaScript Basics

### Placing JavaScript in HTML
- Place JavaScript at the end of the `<body>` tag to ensure that the HTML content loads first, preventing any issues with rendering.

### Writing and Logging
- `document.write("Hello World");`: Directly writes to the document (not recommended for modern use).
- `console.log("Hello World");`: Logs output to the browser console, useful for debugging.
- `alert("Hello World");`: Displays an alert box with a message.

### Case Sensitivity
- JavaScript is case-sensitive. For example, `myVariable` and `myvariable` are different.

### Semicolons
- Using semicolons at the end of statements is optional but recommended to avoid potential issues in code interpretation.

### Blocks
- Code blocks are defined using curly braces `{}`. If omitted, only the first statement is considered part of the block.

## 2. Variables

### Declaration Types
- `var`: Global or function-scoped. Can be redeclared and updated.
- `let`: Block-scoped. Cannot be redeclared in the same scope but can be updated.
- `const`: Block-scoped. Cannot be redeclared or updated (used for constants).

### Examples
```javascript
var name = "Alice";
let age = 25;
const country = "USA";
```

## 3. Operators

### Arithmetic Operators
- `+`: Addition
- `-`: Subtraction
- `*`: Multiplication
- `/`: Division
- `%`: Modulus (remainder)
- `++`: Increment
- `--`: Decrement

### Comparison Operators
- `==`: Equal to
- `===`: Strict equal (checks value and type)
- `!=`: Not equal to
- `!==`: Strict not equal
- `>`: Greater than
- `<`: Less than
- `>=`: Greater than or equal to
- `<=`: Less than or equal to

### Logical Operators
- `&&`: AND
- `||`: OR
- `!`: NOT

### Type Checking
- `typeof variable`: Returns the type of the variable (e.g., string, number, boolean).

### Instance Checking
- `variable instanceof Constructor`: Checks if an object is an instance of a particular class.

## 4. Data Types

### Primitive Types
- `undefined`: A variable declared but not assigned a value.
- `null`: Represents "nothing" or "empty".
- `boolean`: `true` or `false`.
- `number`: Includes integers and floats.
- `string`: Sequence of characters.

### Special Values
- `NaN`: "Not-a-Number," a result of an invalid number operation.
- `Infinity`: Represents infinity; obtained by dividing a number by zero.

## 5. Control Flow

### Conditional Statements
- `if`, `else if`, `else`: Execute code based on conditions.

```javascript
if (condition) {
  // Code to execute if condition is true
} else if (anotherCondition) {
  // Code to execute if anotherCondition is true
} else {
  // Code to execute if no conditions are true
}
```

### Loops

- ### `for`
  - Iterates a block of code a specified number of times.

- ### `while`
  - Executes a block of code as long as a condition is true.

- ### `do...while`
  - Similar to `while`, but the block of code is executed at least once.

### Example Loop
```javascript
for (let i = 0; i < 5; i++) {
  console.log(i); // Logs numbers 0 to 4
}
```

## 6. Arrays

### Creating Arrays
- `let myArray = [];`: An empty array.
- `let myArray = ["Hello", 42, true];`: An array with mixed data types.

### Array Operations
- `push(element)`: Adds an element to the end.
- `pop()`: Removes the last element.
- `unshift(element)`: Adds an element to the beginning.
- `shift()`: Removes the first element.
- `slice(start, end)`: Extracts a section of the array.
- `splice(index, deleteCount, item1, item2, ...)`: Adds/removes items from an array.
- `concat(array2)`: Combines two arrays.
- `sort()`: Sorts the array alphabetically or numerically.
- `reverse()`: Reverses the array's order.
- `indexOf(item)`: Finds the index of an item.
- `includes(item)`: Checks if an item exists in the array.

## 7. Functions

### Function Declaration
```javascript
function greet(name) {
  return "Hello, " + name;
}
```

### Function Expression
```javascript
let greet = function(name) {
  return "Hello, " + name;
};
```

### Arrow Function
```javascript
let multiply = (a, b) => a * b;
```

### Immediately Invoked Function Expression (IIFE)
```javascript
(function() {
  console.log("This function runs immediately!");
})();
```

## 8. Date and Time

### Getting Dates
- `let now = new Date();`: Current date and time.
- `let specificDate = new Date("August 19, 2024 22:11:00");`: Specific date and time.

### Date Methods
- `getFullYear()`: Returns the year.
- `getMonth()`: Returns the month (0-11).
- `getDate()`: Returns the day of the month.
- `getDay()`: Returns the day of the week (0-6).
- `setFullYear(year)`: Sets the year.

### Date Difference
```javascript
let startDate = new Date("August 1, 2024");
let endDate = new Date("August 14, 2024");
let timeDiff = endDate - startDate;
let daysDiff = timeDiff / (1000 * 60 * 60 * 24); // Convert milliseconds to days
```

## 9. Type Conversion

### String to Number
- `Number("123")`: Converts to a number.
- `parseInt("123")`: Converts to an integer.
- `parseFloat("123.45")`: Converts to a float.

### Number to String
- `String(123)`: Converts to a string.

### Boolean Conversion
- `Boolean(0)`: Converts to `false`.
- `Boolean(1)`: Converts to `true`.

### Implicit Type Coercion
- `5 + "5"`: Results in `"55"`.
- `"5" - 5`: Results in `0`.
- `true + 5`: Results in `6`.
- `false * 10`: Results in `0`.

## 10. Event Handling

### Adding Event Listeners
- `element.addEventListener(event, function)`: Attaches an event handler to an element.
  - `event`: Type of event to listen for (e.g., `click`, `mouseover`).
  - `function`: Function to execute when the event occurs.

### Example
```javascript
document.getElementById("myButton").addEventListener("click", function() {
  alert("Button clicked!");
});
```

### Removing Event Listeners
- `element.removeEventListener(event, function)`: Removes an event handler.

## 11. Event Delegation

### What is Event Delegation?
Event Delegation allows you to handle events at a higher level in the DOM, rather than adding event listeners to individual elements. This is particularly useful when dealing with dynamic content.

### Example
```javascript
document.querySelector("#parent").addEventListener("click", function(event) {
  if (event.target && event.target.matches("button")) {
    console.log("Button clicked:", event.target);
  }
});
```

### Event Bubbling and Capturing
- `Event Bubbling`: The event starts at the target element and bubbles up to the root.
- `Event Capturing`: The event starts from the root and captures down to the target element.
- Use `useCapture` in `addEventListener` to specify the phase.
```javascript
element.addEventListener("click", handler, true); // Event Capturing
element.addEventListener("click", handler, false); // Event Bubbling (default)
```

## 12. Error Handling

### `try...catch`
- `try...catch`: Handles exceptions, preventing errors from stopping script execution.

### Example
```javascript
try {
  // Code that may throw an error
} catch (error) {
  console.log("Error:", error.message);
} finally {
  // Code that will run regardless of the error
}
```

## 13. Local and Session Storage

### Local Storage
- `localStorage.setItem("key", "value");`: Stores data with no expiration.
- `localStorage.getItem("key");`: Retrieves data.
- `localStorage.removeItem("key");`: Removes data.
- `localStorage.clear();`: Clears all stored data.

### Session Storage
- Similar to local storage, but data is cleared when the page session ends.
- `sessionStorage.setItem("key", "value");`
- `sessionStorage.getItem("key");`

## 14. DOM Manipulation

### Selecting Elements
- `document.getElementById("id");`: Selects an element by ID.
- `document.querySelector("selector");`: Selects the first element matching a CSS selector.
- `document.querySelectorAll("selector");`: Selects all elements matching a CSS selector.

### Modifying Elements
- `element.textContent = "New Text";`: Changes the text content.
- `element.innerHTML = "<strong>New HTML</strong>";`: Changes the HTML content.
- `element.style.color = "red";`: Changes the CSS style.

### Creating and Removing Elements
- `document.createElement("tag");`: Creates a new element.
- `element.appendChild(newElement);`: Adds a child element.
- `element.removeChild(childElement);`: Removes a child element.

### Classes
- `element.classList.add("class");`: Adds a class.
- `element.classList.remove("class");`: Removes a class.
- `element.classList.toggle("class");`: Toggles a class.

## Miscellaneous

### Template Literals
- **Multi-line strings** and **expressions embedded in strings**.
### Example
```javascript
let greeting = `Hello, ${name}!`;
```

### `preventDefault()` in JavaScript
- **Purpose**: The `preventDefault()` method is used to stop the default action that belongs to the event from occurring.
- **Use Case**: Often used in forms to prevent the form from submitting when a button is clicked, or to stop a link from navigating to a new page.
- ### Example
```javascript
document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevents the form from submitting
  console.log("Form submission prevented!");
});
```

### Shadow DOM

- **Purpose**: Shadow DOM is a web standard that allows encapsulation of a component's internal structure, styles, and scripts. It enables a web component to be self-contained, avoiding style and behavior conflicts with the rest of the document.

### Intersection Observer API

- **Purpose**: The Intersection Observer API allows you to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document’s viewport.

### Mutation Observer

- **Purpose**: The Mutation Observer API allows you to watch for changes in the DOM and respond to them in real-time. It observes changes to the structure, attributes, and text content of a DOM node.

### `for...in` Loop

- **Purpose**: Iterates over the enumerable properties of an object.
- **Key Points**:
  - Ideal for iterating over object properties.
  - Includes properties from the object's prototype chain.
- ### Example
```javascript
let person = {
    name: "Cagri",
    age: 24,
    city: "Istanbul"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}
```

### `for...of` Loop

- **Purpose**: Iterates over iterable objects (like arrays, strings, or maps).
- **Key Points**:
  - Ideal for iterating over the values of iterable objects.
  - Does not include properties from the prototype chain.
- ### Example
```javascript
let colors = ["red", "blue", "yellow"];

for (let color of colors) {
    console.log(color);
}
```