import _ from "lodash"
import { v4 } from "uuid"
import { AlbumsScreenReducerActionTypes } from "./actions"
import * as actionTypes from "./action-types"
import { AlbumsScreenState, convertRawDataToTreeNode } from "./models"

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
        albumsNode: convertRawDataToTreeNode(action.payload)
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
