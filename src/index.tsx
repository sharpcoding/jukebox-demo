import React, { Fragment } from "react"
import { Provider } from "react-redux"
import ReactDOM from "react-dom"
import { store } from "./store"
import { createGlobalStyle } from "styled-components"
import { AlbumsScreen } from "./screens/Albums"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

ReactDOM.render(
  <Provider store={store}>
    <Fragment>
      <GlobalStyle />
      <AlbumsScreen />
    </Fragment>
  </Provider>,
  document.getElementById("root")
)
