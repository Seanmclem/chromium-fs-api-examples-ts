import React from 'react'
import './FileOrFolderList.scss'
import { FolderItem } from '../folderItem/FolderItem'
import { FileItem } from '../fileItem/FileItem'

export const FileOrFolderList: React.FC<{entry: FileSystemHandle}> = ({ entry }) => {
    if (entry.kind === "directory") {
        return (<FolderItem entry={entry} />)
    } else {
        return (<FileItem entry={entry} />)
    }
}
