import React from "react"
import * as S from "./styles"

interface Props {
  onClick: () => void
}

export const ExpandButton = (props: Props) => (
  <S.Button onClick={props.onClick}>➕</S.Button>
)

export const CollapseButton = (props: Props) => (
  <S.Button onClick={props.onClick}>➖</S.Button>
)
