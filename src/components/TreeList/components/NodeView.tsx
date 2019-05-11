import React, { useState } from "react"
import _ from "lodash"
import { TreeNode } from "../../../data-structures"
import { EnumExpandedCollapsed } from "../definitions"
import { CollapsedNode, ExpandedNode, LeafNode } from "./nodes"

interface Props {
  node: TreeNode
}

export const recalculateInitialState = (props: Props): EnumExpandedCollapsed =>
  _.isArray(props.node.children) && !_.isEmpty(props.node.children)
    ? EnumExpandedCollapsed.Collapsed
    : EnumExpandedCollapsed.NotExpandable

export const NodeView = (props: Props) => {
  const [nodeExpandedCollapsed, setExpandedCollapsed] = useState<
    EnumExpandedCollapsed
  >(recalculateInitialState(props))
  if (
    nodeExpandedCollapsed === EnumExpandedCollapsed.NotExpandable &&
    recalculateInitialState(props) === EnumExpandedCollapsed.Collapsed
  ) {
    setExpandedCollapsed(EnumExpandedCollapsed.Collapsed)
  }
  switch (nodeExpandedCollapsed) {
    case EnumExpandedCollapsed.Collapsed:
      return (
        <CollapsedNode
          {...props.node}
          onClick={() => setExpandedCollapsed(EnumExpandedCollapsed.Expanded)}
        />
      )
    case EnumExpandedCollapsed.Expanded:
      return (
        <ExpandedNode
          {...props.node}
          onClick={() => setExpandedCollapsed(EnumExpandedCollapsed.Collapsed)}
          renderAnotherNodeView={(el) => <NodeView node={el} />}
        />
      )
    case EnumExpandedCollapsed.NotExpandable:
      return <LeafNode {...props.node} />
  }
}
