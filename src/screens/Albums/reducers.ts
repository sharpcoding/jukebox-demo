import * as R from "ramda"
import { v4 } from "uuid"
import { AlbumsScreenReducerActionTypes } from "./actions"
import * as actionTypes from "./action-types"
import { AlbumsScreenState, makeRawAlbumDataTwoLevel } from "./models"
import { convertTabluarDataToTreeNodeWithHierarchy } from "../../components/TreeList"

const convertToTreeNodeForAlbums = R.curry(
  convertTabluarDataToTreeNodeWithHierarchy
)(["bandAlbum", "song"], "Albums")

const initialState: AlbumsScreenState = {
  albumsRaw: [],
  albumsNode: {
    caption: "Loading albums...",
    uuid: ""
  }
}

// Typescript's discriminated unions (see https://www.typescriptlang.org/docs/handbook/advanced-types.html)
// are used here to write reducer logic in a streamlined way.

export const albumsScreenReducer = (
  state: AlbumsScreenState = initialState,
  action: AlbumsScreenReducerActionTypes
): AlbumsScreenState => {
  switch (action.type) {
    case actionTypes.ALBUMS_LOAD_STARTED:
      return state
    case actionTypes.ALBUMS_LOAD_SUCCEEDED:
      return {
        ...state,
        albumsNode: R.compose(
          convertToTreeNodeForAlbums,
          makeRawAlbumDataTwoLevel
        )(action.payload)
      } as AlbumsScreenState
    case actionTypes.ALBUMS_LOAD_FAILED:
      console.error(action.error)
      return {
        ...state,
        albumsNode: {
          caption: "Failed !",
          uuid: v4()
        }
      } as AlbumsScreenState
    default:
      return state
  }
}
