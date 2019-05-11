import React from "react"
import styled from "styled-components"

const Button = styled.span`
  cursor: pointer;
`

export const ExpandButton = () => <Button>➕</Button>

export const CollapseButton = () => <Button>➖</Button>
