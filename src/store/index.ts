import {
  combineReducers,
  ReducersMapObject,
  Store,
  createStore,
  applyMiddleware
} from "redux"
import reduxThunk from "redux-thunk"
import { albumsScreenReducer } from "../screens/Albums"
import { AppState } from "./state"
import { AlbumsScreenState } from "../screens/Albums/models"
import { AlbumsScreenReducerActionTypes } from "../screens/Albums/actions"

interface ICombinedReducers extends ReducersMapObject {
  albumsScreenState: (
    state: AlbumsScreenState | undefined,
    action: AlbumsScreenReducerActionTypes
  ) => AlbumsScreenState
}

const reducerMapObject: ICombinedReducers = {
  albumsScreenState: albumsScreenReducer
}

const combinedReducers = combineReducers<AppState>(reducerMapObject)

export const store: Store<AppState> = createStore(
  combinedReducers,
  applyMiddleware(reduxThunk)
)
