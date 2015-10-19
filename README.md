# react-paginatify
Simple, truncatable pagination for React.

[![Travis](https://img.shields.io/travis/bsokol/react-paginatify.svg?https://travis-ci.org/briansokol/react-paginatify.svg?branch=master&style=flat-square)](https://travis-ci.org/briansokol/react-paginatify)
[![Codecov](https://img.shields.io/codecov/c/github/briansokol/react-paginatify.svg?style=flat-square)](https://github.com/briansokol/react-paginatify)
[![npm](https://img.shields.io/npm/dt/react-paginatify.svg)](https://www.npmjs.com/package/react-paginatify)
[![npm](https://img.shields.io/npm/v/react-paginatify.svg?style=flat-square)](https://www.npmjs.com/package/react-paginatify)
[![npm](https://img.shields.io/npm/l/react-paginatify.svg?style=flat-square)](https://www.npmjs.com/package/react-paginatify)

**Paginatify** generates pagination links with automatic, customizable truncation to prevent the list from becoming too large. All it requires is the total number of pages and the current page in order to function, but it functions best when given a callback to call when one of the links is clicked. The current page can be tracked internally or externally.

**Paginatify must be used with React 0.13 or higher.**

## Props

### page
*Number, required*
Default: **1**
The initial current page. Internally, Paginatify will keep track of the current page in its state. However, if a new page is passed in through this prop, the internal state will be updated to match it. The **onChange** function will not be called if the current page changes due to a prop change.

### pages
*Number, required*
Default: **1**
The total number of pages, inclusive.

### onChange
*Function*
Default: **null**
A function that will be called whenever the user clicks on one of the pagination links. It will pass along the new and old current page numbers as well as the button type that was clicked. Possible button values are *previous*, *next*, and *page*.
```javascript
(newPage, oldPage, button) => {
  ...
}
```

### innerPadding
*Number*
Default: **1**
Determines the minimum number of additional page numbers that should remain on either side of the current page number without being hidden by truncation.

### outerPadding
*Number*
Default: **1**
Determines the minimum number of additional page numbers that should remain before and after the last and first pages, respectively, without being hidden by truncation.

### nextLabel
*String*
Default: **'>'**
The string to show for the next page link. Will not show if there is only one page.

### prevLabel
*String*
Default: **'<'**
The string to show for the previous page link. Will not show if there is only one page.

### truncateChar
*String*
Default: **'…'**
The character used to indicate that a truncation has occurred.

### truncateShort
*Boolean*
Default: **false**
If false, Paginatify will not apply any truncation if the list is too short to require it. Otherwise, it will truncate based on the inner and outer padding as usual, which may result in very few page numbers visible.

### truncateNever
*Boolean*
Default: **false**
If true, truncation will never be applied. This supersedes **truncateShort**.

## Styling

Several classes are provided on the pagination elements to allow for styling.

### `paginatify`
The class of the surrounding *div* element.

### `paginatify__link`
Applied to every *page* link, as well as the *next* and *previous* links. These elements are *a* tags. These are several modified versions of this class.

#### `paginatify__link--page`
A direct link to a page.

#### `paginatify__link--previous`
A link to the previous page.

#### `paginatify__link--next`
A link to the next page.

#### `paginatify__link--current`
Applied to the current page. This page link is not clickable.

#### `paginatify__link--disabled`
Applied to a page that is not clickable (but not the current page). This is applied to the *previous* and *next* links when the current page is the first or last page, respectively.

### `paginatify__truncation`
This is the string that indicates that a truncation has occurred. These elements are *span* tags and are not clickable.