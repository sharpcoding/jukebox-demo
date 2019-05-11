import * as _ from "lodash"
import { Dispatch } from "redux"
import { AlbumsLoadStartedAction, AlbumsLoadSucceededAction } from "./actions"
import { RawAlbumRecord } from "./models"

export type LoadAlbumsEffect = () => (dipatch: Dispatch) => void

// Yeah, this is really cool, yet comes with a small price to pay, namely: action objects are defined as classes !
// Returning new Action(arg1, arg2, ..., argN) in an action-creator would return non-plain objects to the Redux store,
// causing a run-time exception / error.
// So - the price - we need to call lodash _.toPlainObject() in action-creators to convert complex JavaScript object to plain object.

export const loadAlbums: LoadAlbumsEffect = () => (dispatch: Dispatch) => {
  dispatch(_.toPlainObject(new AlbumsLoadStartedAction()))
  new Promise<RawAlbumRecord[]>((resolve, reject) =>
    setTimeout(
      () =>
        resolve([
          {
            band: "Cat Power",
            album: "Sun",
            song: "Human Being"
          },
          {
            band: "Beatles",
            album: "Abbey Road",
            song: "Maxwell's Silver Hammer"
          },
          {
            band: "Cat Power",
            album: "Sun",
            song: "Always On My Own"
          }
        ]),
      500
    )
  ).then((data: RawAlbumRecord[]) =>
    dispatch(_.toPlainObject(new AlbumsLoadSucceededAction(data)))
  )
}
