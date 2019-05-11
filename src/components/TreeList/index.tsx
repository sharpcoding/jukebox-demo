import React, { useState, Fragment } from "react"
import _ from "lodash"
import { Node } from "../../data-structures"
import { EnumNodeState } from "./definitions"
import { ExpandButton, CollapseButton } from "./components"

interface Props {
  node: Node
}

export const TreeList = (props: Props) => {
  const [nodeState, setNodeState] = useState<EnumNodeState>(
    _.isArray(props.node.children) && !_.isEmpty(props.node.children)
      ? EnumNodeState.Collapsed
      : EnumNodeState.NotExpandable
  )
  switch (nodeState) {
    case EnumNodeState.Collapsed:
      return (
        <span onClick={() => setNodeState(EnumNodeState.Expanded)}>
          {props.node.caption} <ExpandButton />
        </span>
      )
    case EnumNodeState.Expanded:
      return (
        <Fragment>
          <span onClick={() => setNodeState(EnumNodeState.Collapsed)}>
            {props.node.caption} <CollapseButton />
          </span>
          {props.node.children && (
            <ul>
              {props.node.children.map((el) => {
                return (
                  <li key={el.uuid}>
                    <TreeList node={el} />
                  </li>
                )
              })}
            </ul>
          )}
        </Fragment>
      )
    case EnumNodeState.NotExpandable:
      return <span>{props.node.caption}</span>
  }
}
