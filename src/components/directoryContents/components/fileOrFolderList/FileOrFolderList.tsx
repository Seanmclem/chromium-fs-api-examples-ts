import React from 'react'
import './FileOrFolderList.scss'
import { FolderItem } from '../folderItem/FolderItem'
import { FileItem } from '../fileItem/FileItem'

interface Props {
    entry: FileSystemHandle,
    handleSelectFile? : any,
    dirPath?: string,
    parentHandle: FileSystemDirectoryHandle
}

export const FileOrFolderList: React.FC<Props> = ({ entry, handleSelectFile, dirPath, parentHandle }) => {
    if (entry.kind === "directory") {
        return (
            <FolderItem 
                entry={entry}
                handleSelectFile={handleSelectFile}
                dirPath={dirPath}
                parentHandle={parentHandle}
            />
        )
    } else {
        return (
            <FileItem
                entry={entry}
                handleSelectFile={handleSelectFile}
                dirPath={dirPath}
                parentHandle={parentHandle}
            />
        )
    }
}
