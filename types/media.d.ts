import type { BasicUser } from "./user"
import type { BasicRole } from "./role"

export type MediaItem = {
    id: number
    parent_id: number | null
    drive: string | null
    src_path: string
    thumbnail: string | null
    cdn_path: string | null
    mime_type: string | null
    name: string
    owner_id: number | null
    owner_type: string | null
    owner: BasicUser | BasicRole | null
    inherit_access: boolean
    access: ModelAccess[]
    meta: {
        size?: number
        extension?: string
    }
    created_at: string | null
    updated_at: string | null
}

export type ModelAccess = {
    accessable_id: number
    accessable_type: string
    permissible_id: number
    permissible_type: string
    permissible: BasicUser | BasicRole | any | null
    type: string
    permission: string
}