import _ from "lodash"
import { TreeNode } from "../../../data-structures"
import { v4 } from "uuid"
import { RawAlbumRecord } from "."

type GroupedRawAlbumRecord = { [key: string]: RawAlbumRecord[] }

const getSongs = (raw: RawAlbumRecord[]): TreeNode[] => {
  return _.toArray(
    _.chain(raw)
      .map((el) => {
        return {
          caption: el.song,
          uuid: v4()
        } as TreeNode
      })
      .value()
  )
}

const getAlbums = (raw: RawAlbumRecord[]): TreeNode[] => {
  const albums: GroupedRawAlbumRecord = _.groupBy(raw, (el) => el.album)
  return _.toArray(
    _.chain(albums)
      .keys()
      .map((albumName) => {
        return {
          caption: albumName,
          children: getSongs(albums[albumName]),
          uuid: v4()
        } as TreeNode
      })
      .value()
  )
}

const getBands = (raw: RawAlbumRecord[]): TreeNode[] => {
  const bands: GroupedRawAlbumRecord = _.groupBy(raw, (el) => el.band)
  return _.toArray(
    _.chain(bands)
      .keys()
      .map((bandName) => {
        return {
          caption: bandName,
          children: getAlbums(bands[bandName]),
          uuid: v4()
        } as TreeNode
      })
      .value()
  )
}

export const convertRawDataToTreeNode = (raw: RawAlbumRecord[]): TreeNode => {
  return {
    caption: "Albums",
    children: getBands(raw),
    uuid: v4()
  }
}
