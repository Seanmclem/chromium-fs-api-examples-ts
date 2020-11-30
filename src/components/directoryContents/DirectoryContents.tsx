import React from 'react'
import './DirectoryContents.scss'
import { FileOrFolderList } from './components/fileOrFolderList/FileOrFolderList'
import { EntryType } from '../../utils/file-system-utils'

interface Props {
    contents: EntryType[];
    folder: FileSystemDirectoryHandle;
}

export const DirectoryContents: React.FC<Props> = ({ contents, folder }) => {
    if (!contents) {
        return (<div className="main-folder-list-container">No Folder Selected</div>)
    } else if (contents.length === 0) {
        return (<div className="main-folder-list-container">Folder Empty</div>)
    } else {
        return (
            <div className="main-folder-list-container">
                <div>'{folder.name}' Contents:</div>
                <div className="main-folder-list">
                    {contents.map(entry => (
                        <FileOrFolderList key={entry[0]} entry={entry[1]} />
                    ))}
                </div>
            </div>
        )
    }
}