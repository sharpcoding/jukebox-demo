import React, { useState } from "react"
import _ from "lodash"
import { TreeNode } from "../../../data-structures"
import { EnumNodeState } from "../definitions"
import { CollapsedNode, ExpandedNode, LeafNode } from "./nodes"

interface Props {
  node: TreeNode
}

export const NodeView = (props: Props) => {
  const [nodeState, setNodeState] = useState<EnumNodeState>(
    _.isArray(props.node.children) && !_.isEmpty(props.node.children)
      ? EnumNodeState.Collapsed
      : EnumNodeState.NotExpandable
  )
  switch (nodeState) {
    case EnumNodeState.Collapsed:
      return (
        <CollapsedNode
          {...props.node}
          onClick={() => setNodeState(EnumNodeState.Expanded)}
        />
      )
    case EnumNodeState.Expanded:
      return (
        <ExpandedNode
          {...props.node}
          onClick={() => setNodeState(EnumNodeState.Collapsed)}
          renderAnotherNodeView={(el) => <NodeView node={el} />}
        />
      )
    case EnumNodeState.NotExpandable:
      return <LeafNode {...props.node} />
  }
}
