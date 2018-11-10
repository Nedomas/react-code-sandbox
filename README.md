# React code sandbox

React code sandbox helps you render React JSX code in the sandbox. It
takes source as a string and returns renderable JSX code.

## Usage

```jsx
import CodeSandbox from 'react-code-sandbox'
import { render } from 'react-dom'

const code = `
import { render } from 'react-dom'
import React from 'react'
import { Text } from 'candour'

render(
  <div>
    This is a source string
  </div>
)
`

render(
  <CodeSandbox imports={{ React, Text }}>
    {code}
  </CodeSandbox>
)
```

## How it works

It uses [babel](https://babeljs.io) in the browser to parse and convert the
source string into a usable JSX component. It will return parsed component
that was returned through `render` in the source code.

## Render

`render` is a special global variable that is injected into the code parser.
When you call `render`, the source code of the first argument to it will be
returned from the sandbox.

This part is only used for display purposes and does not effect the source code.
```
import { render } from 'react-dom'
```

## Imports

Any imports that you specify in the source code have no actual effects and are
removed by the parser. They are replaced with global variables injected by
the `imports` prop.

## Real world usage

React code sandbox is used throughout [Candour docs](https://candour.pro).
