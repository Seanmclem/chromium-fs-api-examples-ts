import React from 'react'
import './DirectoryContents.scss'
import { FileOrFolderList } from './components/fileOrFolderList/FileOrFolderList'
import { EntryType } from '../../utils/file-system-utils'

interface Props {
    rootHandle: FileSystemDirectoryHandle;
    directoryContents: EntryType[];
}

export const DirectoryContents: React.FC<Props> = ({ directoryContents, rootHandle }) => {
    if (!directoryContents) {
        return (<div className="main-folder-list-container">No Folder Selected</div>)
    } else if (directoryContents.length === 0) {
        return (<div className="main-folder-list-container">Folder Empty</div>)
    } else {
        return (
            <div className="main-folder-list-container">
                <div>'{rootHandle.name}' Contents:</div>
                <div className="main-folder-list">
                    {directoryContents.map(entry => (
                        <FileOrFolderList key={entry[0]} entry={entry[1]} />
                    ))}
                </div>
            </div>
        )
    }
}