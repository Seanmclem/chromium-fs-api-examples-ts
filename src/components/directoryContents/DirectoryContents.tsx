import React, { useEffect, useState } from 'react'
import './DirectoryContents.scss'
import { FileOrFolderList } from './components/fileOrFolderList/FileOrFolderList'
import { EntryType, getDirectoryContents } from '../../utils/file-system-utils'

interface Props {
    handleSelectFile? : any;
    altRootHandle?: FileSystemDirectoryHandle;
}

//rename to FileBrowserSidebar

export const DirectoryContents: React.FC<Props> = ({ handleSelectFile, altRootHandle }) => {
    const [rootHandle, setRootHandle] = useState<FileSystemDirectoryHandle| undefined>(undefined)
    const [directoryContents, setDirectoryContents] = useState<EntryType[]>([])

    useEffect(() => {altRootHandle && setupFileSystem(altRootHandle)}, [altRootHandle])

    const showFolderPicker = async () => {
        const handle = await window.showDirectoryPicker()
        setupFileSystem(handle)
    }

    const setupFileSystem = async (handle: FileSystemDirectoryHandle) => {
        const contents = await getDirectoryContents(handle)
        setRootHandle(handle)
        setDirectoryContents(contents)
    }

    if (!rootHandle || !directoryContents) {
        return (
            <div className="main-folder-list-container">
                <div className="main-folder-list no-contents">
                    <p>No Folder Selected</p>
                    <button onClick={showFolderPicker}>
                        Select Root Folder
                    </button>
                </div>
            </div>
        )
    } else if (directoryContents.length === 0) {
        return (
            <div className="main-folder-list-container">
                <div className="main-folder-list no-contents">
                    <p>Folder Empty</p>
                    <button onClick={showFolderPicker}>
                        Select Root Folder
                    </button>
                </div>
            </div>
        )
    } else {
        return (rootHandle ? (
            <div className="main-folder-list-container">
                <div>'{rootHandle.name}' Contents:</div>
                <div className="main-folder-list">
                    {directoryContents.map(entry => (
                        <FileOrFolderList
                            key={entry[0]}
                            entry={entry[1]}
                            handleSelectFile={handleSelectFile}
                        />
                    ))}
                </div>
            </div>
        ) : (
            <div>No folder selected</div>
        ))
    }
}