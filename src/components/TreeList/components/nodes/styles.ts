import styled from "styled-components"

export const RootNode = styled.div`
  display: flex;
  flex-direction: column;
`

export const ChildNodes = styled(RootNode)`
  margin-left: 25px;
`

export const LeafNode = styled.div`
  margin-top: 4px;
  margin-bottom: 4px;
`
