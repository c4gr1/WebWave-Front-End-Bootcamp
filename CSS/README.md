# CSS: Cascading Style Sheets Notes

## Overview
CSS is essential for styling HTML elements. However, if there is no HTML file, a CSS file serves no purpose. CSS can be included in HTML in three different ways: external, internal, and inline. A `wwwroot` folder is often created to include CSS files and other assets.

### 1. External CSS
**Example:**
```html
<link rel="stylesheet" href="styles.css">
```
- This method links an external CSS file to the HTML document.

### 2. Internal CSS
**Example:**
```html
<style>
    p {
        color: red;
    }
</style>
```
- This method involves writing CSS directly within the `<style>` tag inside the HTML document's `<head>` section.

### 3. Inline CSS
**Example:**
```html
<p style="color: red;">This is a red paragraph.</p>
```
- CSS is applied directly to the HTML element using the style attribute.

## CSS Selectors
Selectors are used to target and apply styles to specific HTML elements.
**Example:**
- This will turn all `<p>` elements red.
```html
<style>
    p {
        color: red;
    }
</style>
```
- Only elements with the highlight class will be blue.
```html
.highlight {
    color: blue;
}
```
- The hierarchy in CSS follows a specific order: Inline CSS > ID > Class > Element Selector.
- In cases where multiple selectors apply, the last one in the code takes precedence.

## Universal Selector
The universal selector (`*`) applies styles to all elements.
**Example:**
```css
* {
    background-color: aqua;
}
```

## Nested Selectors
To target elements within a specific parent, use nested selectors.
**Example:**
```css
div p {
    color: red;
}
div p span {
    color: blue;
}
```

## Colors in CSS
Colors can be defined in several ways:

- **Named colors:** `color: red;`
- **Hexadecimal values:** `color: #ff0000;`
- **RGB:** `color: rgb(255, 0, 0);`
- **RGBA:** `color: rgba(255, 0, 0, 0.5);` (includes alpha for transparency)
- **HSL:** `color: hsl(0, 100%, 50%);`
- **HSLA:** `color: hsla(0, 100%, 50%, 0.5);`

## Backgrounds

- `background-color:` Changes the background color.
- `background-image:` Sets a background image.
- `background-repeat:` Controls if/how the background image repeats.
- `background-size:` Adjusts the size of the background image (e.g., cover, contain).
- `background-position:` Sets the initial position of the background image.
- `background-attachment:` Defines whether the background image scrolls with the page (`scroll`, `fixed`, `local`).

## Borders and Radius

- `border:` Sets the border properties.
- `border-radius:` Rounds the corners of an element.

## Padding and Margin

### Padding
- **Padding**: The space between the content and the border of an element.

### Margin
- **Margin**: The space between the border of an element and other elements.

## Box Model
The **Box Model** defines how HTML elements are sized and positioned.
- **Content**: The actual content of the element.
- **Padding**: The space between the content and the border.
- **Border**: The border surrounding the padding (and content).
- **Margin**: The space outside the border, separating the element from other elements.


## Box Model 2
The box model includes the content, padding, border, and margin of an element.
### Example:
```css
.box {
    width: 200px;
    padding: 10px;
    border: 5px solid black;
    margin: 20px;
}
```
- Total width: 200px (content) + 20px (padding) + 10px (border) + 40px (margin) = 270px.

## Display Property
Controls how an element is displayed:

- **block:** Element takes up the full width.
- **inline:** Element flows with text.
- **inline-block:** Like inline but allows width and height.
- **none:** Hides the element.
- **flex:** Makes the element a flex container.
- **grid:** Defines a grid container for two-dimensional layouts.

## Positioning

- **static:** Default position, elements follow normal document flow.
- **relative:** Positioned relative to its normal position.
- **absolute:** Positioned relative to the nearest positioned ancestor.
- **fixed:** Stays fixed relative to the viewport.
- **sticky:** Toggles between relative and fixed, depending on scroll position.

## Font Styling

- **font-family:** Defines the font.
- **font-size:** Sets the size of the text, can use `px`, `em`, or `rem`.
  - **em:** Relative to the font-size of the parent element.
  - **rem:** Relative to the root element's font-size.
- **font-weight:** Defines the thickness of the text (e.g., bold).
- **font-style:** Controls the style (e.g., italic).
- **font-variant:** Allows small caps.
- **External fonts** can be added using services like Google Fonts.

## Pseudo-Classes

Pseudo-classes define the special states of an element:

- **:hover:** Applies styles when the user hovers over an element.
- **:visited:** Styles a link that has been visited.
- **:nth-child(n):** Styles the nth child element in a list.

## Overflow

Controls how content is handled when it overflows an element’s box:

- **visible:** Overflow is visible.
- **hidden:** Overflow is hidden.
- **scroll:** Adds scroll bars.
- **auto:** Adds scroll bars if necessary.

## Responsive Design

Responsive design adjusts the layout to different screen sizes. 

- **Media queries** are used to apply different styles based on screen width.

### Example:
```css
@media only screen and (max-width: 480px) {
    /* Styles for small screens */
}
```

## Flexbox and Grid

### Flexbox

- **Flexbox** is used for one-dimensional layouts, aligning items horizontally or vertically.

#### Key Properties:
- **`justify-content`**: Aligns items horizontally.
- **`align-items`**: Aligns items vertically.

### Grid

- **Grid** is used for two-dimensional layouts, aligning items in rows and columns.

#### Key Properties:
- **`grid-template-columns`**: Defines the columns of the grid.
- **`grid-template-rows`**: Defines the rows of the grid.

## Miscellaneous

### FontAwesome
- **FontAwesome**: A library used to add vector icons to websites.

### Transition and Hover Effects
- Allows for smooth changes when hovering over elements.

#### Example:

```css
a:hover {
    color: red;
}
```
- text-align: Aligns text horizontally (e.g., left, right, center, justify).
