## Group Activity

## Activity 1

- Difference between JSX and html. 

  - Hypertext Markup Language (HTML) is the standard language for documents that determine the structure of a web page.
    - Tags have to be closed 

  - JSX, on the other hand, means JavaScript Syntax Extension or JavaScript XML as some like to put it.

    - in JSX, you must return a single parent element, or it won't compile
    - All tags self closed in JSX
    - As class is reserved, instead of class we use className in jsx


- Compare props with functions parameters.

  - They are basically the same so there is nothing to compare. 


- What is `create-react-app`?
    - this command use along with 'npm' or 'npx' followed by project name to create a React project.
- Why do we use Babel?
    - Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.
- What is the difference between transpiling and compiling?
    - Compiling: Converting high-level language to machine level (Eg: Compile a C program to executable)
    - Transpiling: Converting one high-level language to another. (Eg: Transpilation of Typescript to Javascript)


## Activity 2
Convert the following snippet to JavaScript:

```js
function Profile() {
  return (
    <img
      src="https://i.imgur.com/lICfvbD.jpg"
      alt="Lemma"
    />
  );
}
```
Answer:

```js
"use strict";

function Profile() {
  return /*#__PURE__*/React.createElement("img", {
    src: "https://i.imgur.com/lICfvbD.jpg",
    alt: "Lemma"
  });
}
```

## Useful Links
- [Babel](https://babeljs.io/repl/)
