import _ from "lodash"
import * as React from "react"
import { connect } from "react-redux"
import { bindActionCreators, Dispatch } from "redux"
import { loadAlbums, LoadAlbumsEffect } from "./effects"
import { TreeList, TreeNode } from "../../components/TreeList"
import { AppState } from "../../store/state"

export * from "./reducers"

interface ScreenProps {
  node: TreeNode
}

interface ScreenState {
  // intentionally left empty !
}

interface IDispatchProps {
  loadAlbums: LoadAlbumsEffect
}

export class TreeListScreen extends React.Component<
  ScreenProps & IDispatchProps,
  ScreenState
> {
  public render() {
    return <TreeList node={this.props.node} />
  }

  public componentDidMount() {
    this.props.loadAlbums()
  }
}

const mapStateToProps = (state: AppState): ScreenProps => {
  return { node: state.albumsScreenState.albumsNode } as ScreenProps
}

const matchDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      loadAlbums
    },
    dispatch
  )
}

export const AlbumsScreen = connect<ScreenProps, IDispatchProps, {}>(
  //@ts-ignore
  mapStateToProps,
  matchDispatchToProps
)(TreeListScreen)
