import _ from "lodash"
import { RawAlbumRecord } from "./raw-payload"

export interface ConvertedRawAlbumRecord {
  /**
   * Concatenated band + album
   */
  bandAlbum: string
  song: string
}

export const makeRawAlbumDataDataTwoLevel = (
  rawData: RawAlbumRecord[]
): ConvertedRawAlbumRecord[] =>
  _.toArray(
    _.chain(rawData)
      .map(
        (el: RawAlbumRecord) =>
          ({
            bandAlbum: `${el.band} - ${el.album}`,
            song: el.song
          } as ConvertedRawAlbumRecord)
      )
      .sortBy((el: ConvertedRawAlbumRecord) => el.bandAlbum)
      .value()
  )
