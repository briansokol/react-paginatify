# react-paginatify
Simple, configurable, truncatable pagination for React.

[![npm](https://img.shields.io/npm/v/react-paginatify.svg?style=flat-square)](https://www.npmjs.com/package/react-paginatify)
[![Travis](https://img.shields.io/travis/briansokol/react-paginatify.svg?branch=master&style=flat-square)](https://travis-ci.org/briansokol/react-paginatify)
[![Codecov](https://img.shields.io/codecov/c/github/briansokol/react-paginatify/master.svg?style=flat-square)](https://codecov.io/github/briansokol/react-paginatify?branch=master)
[![David](https://img.shields.io/david/briansokol/react-paginatify.svg?style=flat-square)](https://github.com/briansokol/react-paginatify/blob/master/package.json)
[![David](https://img.shields.io/david/dev/briansokol/react-paginatify.svg?style=flat-square)](https://github.com/briansokol/react-paginatify/blob/master/package.json)
[![npm](https://img.shields.io/npm/l/react-paginatify.svg?style=flat-square)](https://www.npmjs.com/package/react-paginatify)
[![npm](https://img.shields.io/npm/dt/react-paginatify.svg?style=flat-square)](https://www.npmjs.com/package/react-paginatify)

**Paginatify** generates pagination links with automatic, customizable truncation to prevent the list from becoming too large. All it requires is the total number of pages and the current page in order to function, but to actually be useful, you'll want to pass in a callback function so the component can inform your app when the page has changed.

In this way, the current page can either be tracked internally through state, or externally by modifying the component's props when the current page changes.

This library is provided in several forms:

- As an ES2015 module in the `esm` directory. 
  `import Paginatify from 'react-paginatify/esm/react-paginatify';`
- Transpiled to CommonJS/ES5 in the `src` directory. This is the default import.
  `import Paginatify from 'react-paginatify';`
- Pre-compiled as a [UMD](https://github.com/umdjs/umd) module. When loaded using `<script>` tags, it creates a global variable called `Paginatify`.
  `<script src="react-paginatify.min.js"></script>`

**Paginatify must be used with React 0.13 or higher, including 15.**

## Props

### page
**Number**, Default: **1**, *required*

The initial current page. Internally, Paginatify will keep track of the current page in its state. However, if a new page is passed in through this prop, the internal state will be updated to match it. The **onChange** function will not be called if the current page changes due to a prop change.

### pages
**Number**, Default: **1**, *required*

The total number of pages, inclusive.

### className
**String**, Default: **null**

This class will be added to the main surrounding *div* alongside the `Paginatify` class.

### id
**String**, Default: **null**

This class will be added to the main surrounding *div*.

### onChange
**Function**, Default: **null**

A function that will be called whenever the user clicks on one of the pagination links. It will pass along the current page number, the new page number, and the button type that was clicked. Possible button values are *previous*, *next*, and *page*.
```javascript
(newPage, oldPage, button) => {
  ...
}
```

### innerPadding
**Number**, Default: **1**

Determines the minimum number of additional page numbers that should remain on either side of the current page number without being hidden by truncation.

### outerPadding
**Number**, Default: **1**

Determines the minimum number of additional page numbers that should remain before and after the last and first pages, respectively, without being hidden by truncation.

### nextLabel
**String**, Default: **'>'**

The string to show for the next page link. Will not show if there is only one page.

### prevLabel
**String**, Default: **'<'**

The string to show for the previous page link. Will not show if there is only one page.

### truncateChar
**String**, Default: **'…'**

The character used to indicate that a truncation has occurred.

### truncateShort
**Boolean**, Default: **false**

In situations where the total number of pages is below a certain threshold (based on the inner and outer padding), Paginatify will not perform any truncation in order to prevent too few links from showing up. If you want truncation to occur even in this situation, set **truncateShort** to *true*.

### truncateNever
**Boolean**, Default: **false**

If true, truncation will never be applied. This supersedes **truncateShort**.

## Styling

There is no styling applied by default. You may provide a custom class name for the parent element, and several classes are provided on the child elements to allow for styling.

Some example themes are included in the **css** directory, with SCSS versions found in **scss**. You can view and play around with them on [Codepen](http://codepen.io/collection/APoJRQ/).

### paginatify
The class of the surrounding parent *div* element.

### paginatify__link
Applied to every *page* link, as well as the *next* and *previous* links. These elements are *a* tags. These are several types of links:

#### paginatify__link--page
A direct link to a page.

#### paginatify__link--previous
A link to the previous page.

#### paginatify__link--next
A link to the next page.

#### paginatify__link--current
Applied to the current page. While it is still a clickable *a* tag, no action is performed when it is clicked.

#### paginatify__link--disabled
Applied to a page that is not clickable (but not the current page). This is applied to the *previous* and *next* links when the current page is the first or last page, respectively.

### paginatify__truncation
This is the string that indicates that a truncation has occurred. These elements are *span* tags and are not clickable.
