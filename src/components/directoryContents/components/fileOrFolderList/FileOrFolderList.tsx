import React from 'react'
import './FileOrFolderList.scss'
import { FolderItem } from '../folderItem/FolderItem'
import { FileItem } from '../fileItem/FileItem'

interface Props {
    entry: FileSystemHandle,
    handleSelectFile? : any,
    dirPath?: string
}

export const FileOrFolderList: React.FC<Props> = ({ entry, handleSelectFile, dirPath }) => {
    if (entry.kind === "directory") {
        return (
            <FolderItem 
                entry={entry}
                handleSelectFile={handleSelectFile}
                dirPath={dirPath}
            />
        )
    } else {
        return (
            <FileItem
                entry={entry}
                handleSelectFile={handleSelectFile}
                dirPath={dirPath}
            />
        )
    }
}
