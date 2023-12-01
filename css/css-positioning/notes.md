# CSS positioning

## Some CSS code

```css
h3 {
    position relative; /* according to parent element*/
    left: 50px;
    bottom: 30px; /* bottom of last element in container*/
}

.container {
    height: 80vh;
    border: 5px solid orange;
    background-color: yellow;
    position: relative;
}

h3 {
    position: absolute;
}

img {
    position: fixed;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    /*relative to its own width and height; x- and y-axis;
    you can also just transform one axis with translateY / translateX */
}

.sticky {
    background-color: lightblue;
    position: sticky;
    top: 90px;
    height: 80px;
    z-index: 4;
}

```

## Positioning Methods

| Type                 | Description                                                                                                                                                                                                                                                                                                                                                                                                                       |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `position: static`   | The position of the element is determined by the document flow (default). The properties `top`, `bottom`, `right`, `left` have no effect.                                                                                                                                                                                                                                                                                         |
| `position: absolute` | Position the element absolutely inside the nearest non-static ancestor element (does not have `position: static`). If no non-static ancestor element exists, the reference frame falls back to the page (`body`).                                                                                                                                                                                                                 |
| `position: relative` | Elements are positioned according to the normal document flow and then displaced by the `top`, `bottom`, `right`, `left` properties. This method is also used to set the reference frame for an absolutely positioned child element. By doing so, the child element will be placed absolutely inside this element. Position relative to the next element (parent/ancestor) with relative positioning, otherwise relative to body. |
| `position: fixed`    | Position the element on a specified position on the screen. Element not influenced by scrolling. It os often used for `navigation bars` or "back to top" `buttons`.                                                                                                                                                                                                                                                               |
| `position: sticky`   | Element is placed normally in the document flow, but keeps an offset relative to its nearest scrolling ancestor; it will stop and stay at the specified position.                                                                                                                                                                                                                                                                 |

## Positioning properties

| Type                           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `z-index`                      | The z-index defines the stacking order of html elements. Elements with a higher stacking order appear on top if they overlap with other elements. When elements have the same z-index value, they are displayed in the order they appear in the HTML code. The z-index can be an integer number (negative numbers are possible) or it can have the default value auto which sets the stack order equal to its parents. The z-index only effects positioned elements - that is elements with a non-static position value. |
| `transform: translate(x, y)`   | move elements in relation to its (x, y) position.                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `transform: rotate(45deg)`     | rotates elements.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `transform: scale(multiplier)` | scales elements.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `width: 80vw`                  | `vw unit` scales element according to viewport, here, 80 percent width of the **viewport** (size browser window); is more precise than %.                                                                                                                                                                                                                                                                                                                                                                                |
| `max-height: 80vh`             | 80 percent height of the viewport.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

### Document Flow

| Type                 | Description                                                                                                                                                                         |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Normal** Flow      | The default arrangement of elements in HTML, where elements stack vertically one after another, following the order they appear in the HTML code.                                   |
| **Floating** Flow    | Elements are removed from the normal flow and positioned relative to their parent element or the viewport. They can overlap with other elements, creating complex layouts.          |
| **Positioning** Flow | Elements are positioned absolutely, relatively, or fixed to the viewport or their container elements. They are removed from the normal flow and can be placed anywhere on the page. |
