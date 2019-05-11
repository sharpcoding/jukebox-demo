import React, { Fragment } from "react"
import ReactDOM from "react-dom"
import { TreeList } from "./components/TreeList"
import { createGlobalStyle } from "styled-components"
import { testNode } from "./data-structures/tree"

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
  <Fragment>
    <GlobalStyle />
    <TreeList node={testNode} />
  </Fragment>,
  document.getElementById("root")
)
