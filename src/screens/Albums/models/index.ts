import { TreeNode } from "../../../data-structures/index"
import { RawAlbumRecord } from "./raw-payload"
export * from "./raw-payload"
export * from "./auxiliary"

export interface AlbumsScreenState {
  albumsRaw: RawAlbumRecord[]
  albumsNode: TreeNode
}
