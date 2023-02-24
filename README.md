<div align="center">
  <a href="" target="_blank">
    <img alt="ocean Logo" width="200" src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d9a8cef008104ed38ced7a3a3e7bee72~tplv-k3u1fbpfcp-watermark.image?"/>
  </a>
</div>

<div align="center">
  <h1>Ocean UI</h1>
</div>

<h1 align="center">Build Accessible and Atomic CSS React Apps with Speed ⚡️</h1>
<br>

<p align="center">
  <img alt="MIT License" src="https://img.shields.io/badge/license-MIT-blue.svg" />
  <img alt="Github Stars" src="https://img.shields.io/github/stars/ocean" />
 
</p>

<br />

Ocean UI provides a set of accessible, reusable, and composable React
components that make it super easy to create websites and apps.

## Looking for the documentation? 📝

It's the website for the latest version of Ocean UI.

## Features 🚀

- Ease of Styling: Ocean UI contains a set of layout components like `ocean.div` that make it easy to style your components by passing props.

- Flexible & composable: Ocean UI components are built on top of a React UI
- Atomic & Speed
- Dark Mode 😍 and twenty colorScheme custom theme

## Support Ocean UI 💖

By donating \$1 or more you can support the ongoing development of this project.
We'll appreciate some support. Thank you to all our supporters! 🙏

## Installing Ocean UI

To use Ocean UI components, all you need to do is install the
`@cyan-ocean/ui` package:

```sh
$ yarn add @cyan-ocean/ui

# or

$ npm i @cyan-ocean/ui
```

## Usage

To start using the components, please follow these steps:

1. Wrap your application with the `GlobalThemeProvider` provided by
   **@cyan-ocean/ui**.

```jsx
import { GlobalThemeProvider } from '@cyan-ocean/ui';

// Do this at the root of your application
function App({ children }) {
  return <GlobalThemeProvider>{children}</GlobalThemeProvider>;
}
```

2. Now you can start using components like so!:

```jsx
import { Button } from '@cyan-ocean/ui';

function Example() {
  return <Button type="primary">I just consumed some ⚡️Chakra!</Button>;
}
```

More guides on how to get started are available

## CodeSandbox Templates

- JavaScript Starter: https://codesandbox.io/s/oceanui-pkw6v5
- TypeScript Starter: https://codesandbox.io/s/oceanui-pkw6v5

## Testing supported by

<img width="200" src="https://i.imgur.com/eeuDARI.png" alt="BrowserStack"/>

## License

MIT © [Cyan Benjamin](https://github.com/Ryan-eng-del)
