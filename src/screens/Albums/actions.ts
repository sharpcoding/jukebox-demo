import { Action } from "redux"
import * as actionTypes from "./action-types"
import { RawAlbumRecord } from "./models"

export class AlbumsLoadStartedAction implements Action {
  public readonly type = actionTypes.ALBUMS_LOAD_STARTED
}

export class AlbumsLoadSucceededAction implements Action {
  public readonly type = actionTypes.ALBUMS_LOAD_SUCCEEDED
  constructor(public payload: RawAlbumRecord[]) {}
}

export class AlbumsLoadFailedAction implements Action {
  public readonly type = actionTypes.ALBUMS_LOAD_FAILED
  constructor(public error: string) {}
}

export type AlbumsScreenReducerActionTypes =
  | AlbumsLoadStartedAction
  | AlbumsLoadSucceededAction
  | AlbumsLoadFailedAction
