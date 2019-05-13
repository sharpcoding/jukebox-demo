import React from "react"
import * as S from "./styles"
import { NodeView } from "./components"
import { TreeNode } from "./models"

export * from "./models"
export * from "./data-loaders"

interface Props {
  node: TreeNode
}

export const TreeList = (props: Props) => {
  return (
    <S.TreeList>
      <NodeView node={props.node} />
    </S.TreeList>
  )
}
