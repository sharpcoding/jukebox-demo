import React from "react"
import * as S from "./styles"
import { Node } from "../../data-structures"
import { NodeView } from "./components"

interface Props {
  node: Node
}

export const TreeList = (props: Props) => {
  return (
    <S.TreeList>
      <NodeView node={props.node} />
    </S.TreeList>
  )
}
