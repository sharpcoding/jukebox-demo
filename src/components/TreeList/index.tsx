import React from "react"
import * as S from "./styles"
import { NodeView } from "./components"
import { TreeNode } from "../../data-structures"

export * from "../../data-structures"
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
