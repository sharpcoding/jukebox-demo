import _ from "lodash"
import { AlbumsScreenReducerActionTypes } from "./actions"
import * as actionTypes from "./action-types"
import { AlbumsScreenState } from "./models"

const initialState: AlbumsScreenState = {
  albumsRaw: [],
  albumsNode: {
    caption: "Albums",
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
        albumsNode: {
          caption: "Success !",
          uuid: ""
        }
      } as AlbumsScreenState
    default:
      return state
  }
}
