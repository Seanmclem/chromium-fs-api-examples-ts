import React from 'react'
import './FileOrFolderList.scss'
import { FolderItem } from '../folderItem/FolderItem'
import { FileItem } from '../fileItem/FileItem'

interface Props {
    entry: FileSystemHandle,
    handleSelectFile? : any
}

export const FileOrFolderList: React.FC<Props> = ({ entry, handleSelectFile }) => {
    if (entry.kind === "directory") {
        return (
            <FolderItem 
                entry={entry}
                handleSelectFile={handleSelectFile}
            />
        )
    } else {
        return (
            <FileItem
                entry={entry}
                handleSelectFile={handleSelectFile}
            />
        )
    }
}
