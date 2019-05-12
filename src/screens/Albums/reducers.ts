import _ from "lodash"
import { v4 } from "uuid"
import { AlbumsScreenReducerActionTypes } from "./actions"
import * as actionTypes from "./action-types"
import {
  AlbumsScreenState,
  makeRawAlbumDataDataTwoLevel,
  ConvertedRawAlbumRecord
} from "./models"
import { convertRawDataToTreeNodeWithHierarchy } from "../../components/TreeList"

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
        albumsNode: convertRawDataToTreeNodeWithHierarchy<
          ConvertedRawAlbumRecord
        >(
          makeRawAlbumDataDataTwoLevel(action.payload),
          ["bandAlbum", "song"],
          "Albums"
        )
      } as AlbumsScreenState
    case actionTypes.ALBUMS_LOAD_FAILED:
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
