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

interface DispatchProps {
  loadAlbums: LoadAlbumsEffect
}

export class TreeListScreen extends React.Component<
  ScreenProps & DispatchProps,
  ScreenState
> {
  public componentWillMount() {
    this.props.loadAlbums()
  }

  public render() {
    return <TreeList node={this.props.node} />
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

export const AlbumsScreen = connect(
  mapStateToProps,
  matchDispatchToProps
)(TreeListScreen)
