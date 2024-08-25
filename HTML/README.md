# HTML Notes

## Programming Logic in HTML
- **Conditional Logic (if statements):** If a condition is met, actions can be performed. This logic is often seen in programming languages, but CSS and HTML are not programming languages since they do not have conditional logic like if statements.

## HTML Quick Start
- Use `Shift + 1` (`!`) to quickly generate an HTML boilerplate in some code editors.

## HTML Document Structure
- `<!doctype html>`: Defines the document type and version of HTML.
- `<head>` tag: Contains meta information about the document, which is not displayed on the front end.

# Comments in HTML

### Single-line Comments in HTML:
``<!-- This is a comment -->``

 ### Single-line Comments in CSS:
 ``/* This is a comment */``

 ### Multi-line Comments in CSS:
 ```css
 /* This is a 
   multi-line comment */
```

# Common HTML Elements

- `<p>`: Paragraph tags.
- `<strong>`: Bold text.
- `<em>`: Italic text.
- `<h1>` to `<h6>`: Headings from h1 (largest) to h6 (smallest).

### Horizontal Rule:

```html
<hr width="100%" size="1" color="gray">
```

# Links and Hyperlinks

### Link Example:
```html
<a href="https://example.com" target="_blank">Link</a>
```
- `target="_blank"`: Opens the link in a new tab.
- `rel="nofollow"`: Tells search engines not to follow this link.

# Lists in HTML

### Ordered List Shortcut:
- Typing `ol>li*3` and pressing Enter generates a 3-item ordered list.

### Unordered List Shortcut:
- Typing `ul>li*3` and pressing Enter generates a 3-item unordered list.

# Images in HTML

### Image Example:
```html
<img src="img/image.png" alt="Image not loaded" width="500" height="300">
```
- Attributes like `width` and `height` are optional.

# Media in HTML

### Video Example:
```html
<video width="300" height="300" controls>
    <source src="img/test.mp4" type="video/mp4">
</video>
```
- `controls` adds playback controls to the video.

### Audio Example:
```html
<audio controls>
    <source src="img/test.mp3" type="audio/mpeg">
</audio>
```

# Tables in HTML

### Table Shortcut:
- Typing `table>tr*2>td*3` and pressing Enter generates a table with 2 rows and 3 columns.

### `<thead>` and `<tbody>`:
- `<thead>` is used for the table header and should contain `<th>` instead of `<td>` for correct semantics.
- `<tbody>` is used for the body of the table.

# Forms in HTML

## Basic Form Example:
```html
<form action="/submit" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
</form>
```

## Form with Additional Inputs:
```html
<label for="email">Email:</label>
<input type="email" id="email" name="email" required>

<label for="password">Password:</label>
<input type="password" id="password" name="password" required>

<label for="dob">Date of Birth:</label>
<input type="date" id="dob" name="dob" required>
```

# Label and Input

Wrapping the `<input>` inside the `<label>` makes the label clickable, which focuses the input field.

```html
<label>
    Username:
    <input type="text" name="username">
</label>
```

# HTML5 Semantic Elements

- `<header>`: Contains the site logo, navigation, etc. Typically, `<h1>` is placed inside it.
- `<nav>`: Contains navigation links, usually as a list.
- `<main>`: Represents the main content of the document. Only one `<main>` element should be used per page.
- `<article>`: Represents a self-contained composition within a page, and can contain `<header>` and `<p>` tags.
- `<figcaption>`: Caption for a `<figure>` element, used within `<figure>`.
- `<section>`: Groups related content, and can contain `<header>`, `<p>`, `<article>`, etc.
- `<aside>`: Represents content related to the main content, like a sidebar.
- `<footer>`: Contains footer content, such as copyright information.

### Footer Example:
```html
<footer>
    <p>&copy; My Website 2019</p>
</footer>
```

# Block and Inline Elements

## Block Elements:
- `<div>`: A generic container element, similar to `<section>`.
- `<blockquote>`: Used for quoting text, creates a block-level element.

## Inline Elements:
- `<span>`: Used for styling a portion of text within a block.
- `<br>`: Line break element.

### Inline Example:
```html
<p>This is a paragraph, and this is a <span>span</span> element.</p>
```

# IDs and Classes

## IDs:

IDs are used to uniquely identify an element on a page.

### Example:
```html
<div id="header">Header</div>
<p id="intro">Introduction paragraph</p>
```
- IDs should be unique on the page and are often used in JavaScript.

## Classes

Classes are used to apply styles to multiple elements and can be reused across the page.

### Example:
```html
<div class="content">Hello</div>
```
- Classes can be reused across multiple elements and are typically used in CSS.
