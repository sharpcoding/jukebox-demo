export * from "./raw-payload"
import { TreeNode } from "../../../data-structures/index"
import { RawAlbumRecord } from "./raw-payload"

export interface AlbumsScreenState {
  albumsRaw: RawAlbumRecord[]
  albumsNode: TreeNode
}
