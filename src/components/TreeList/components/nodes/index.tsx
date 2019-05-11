import React, { Fragment } from "react"
import _ from "lodash"
import { ExpandButton, CollapseButton } from "../buttons"
import * as S from "./styles"
import { Node } from "../../../../data-structures"

interface CollapsedNodeProps extends Node {
  onClick: () => void
}

interface ExpandedNodeProps extends CollapsedNodeProps {
  renderAnotherNodeView: (el: Node) => React.ReactElement
}

export const ChildNodes = (props: ExpandedNodeProps) => {
  if (_.isUndefined(props.children)) return null
  return (
    <Fragment>
      {props.children.map((el) => {
        return (
          <Fragment key={el.uuid}>{props.renderAnotherNodeView(el)}</Fragment>
        )
      })}
    </Fragment>
  )
}

export const CollapsedNode = (props: CollapsedNodeProps) => {
  return (
    <S.RootNode>
      <span>
        {props.caption} <ExpandButton onClick={props.onClick} />
      </span>
    </S.RootNode>
  )
}

export const ExpandedNode = (props: ExpandedNodeProps) => {
  return (
    <S.RootNode>
      <div>
        {props.caption} <CollapseButton onClick={props.onClick} />
      </div>
      <S.ChildNodes>
        <ChildNodes {...props} />
      </S.ChildNodes>
    </S.RootNode>
  )
}

export const LeafNode = (props: Node) => {
  return <S.LeafNode>{props.caption}</S.LeafNode>
}
