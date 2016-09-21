# Change Log
All notable changes to this library will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## v2.0.0
This release contains potentially breaking changes due to the change in the HTML elements used and the new project structure.

- Changes each pagination link to an button instead of an anchor.
- Changes structure of project files:
    - ES2015 module format source code is in the `esm` directory.
    - Transpiled CommonJS/ES5 source code is available in the `src` directory.
    - UMD modules are still found in the `dist` directory.
    - SCSS and CSS example files are found in the `scss` and `css` directories, respectively.
- Modernizes build process by replacing Grunt with NPM scripts.
- Updates all dev dependencies.
- Adds additional optimizations to distribution version.


## v1.0.1
- Updates dev dependencies.
- Ensures compatibility with React 15.
- Makes `defaultProps` and `propTypes` static class fields.

## v1.0.0
*Changes from beta*

- Adds ability to add a custom class and id.
- Removes the need for referencing the default export explicitly.
