import React, { useEffect, useState } from 'react'
import './ChildItems.scss'
import { FileOrFolderList } from '../../../fileOrFolderList/FileOrFolderList'
import { EntryType, getDirectoryContents } from '../../../../../../utils/file-system-utils'

interface Props {
    parent: FileSystemDirectoryHandle,
    show: boolean,
    handleSelectFile?: any,
    dirPath?: string
}

export const ChildItems: React.FC<Props> = ({ parent, show, handleSelectFile, dirPath }) => {
    const [folderContentsHandles, setFolderContentsHandles] = useState<EntryType[]>([])

    useEffect(() => {
        refreshInludedFiles(parent)
    }, [parent, show])

    const refreshInludedFiles = async (handle: FileSystemDirectoryHandle) => {
        const filesOrFoldersHandles: EntryType[] = await getDirectoryContents(handle)
        setFolderContentsHandles(filesOrFoldersHandles)
    }
    if (show && folderContentsHandles.length) {
        return (
            <div className="child-items">
                {folderContentsHandles.map((entry: EntryType) => (
                    <FileOrFolderList
                        dirPath={dirPath}
                        key={entry[0]}
                        entry={entry[1]}
                        handleSelectFile={handleSelectFile}
                    />
                ))}
            </div>
        )
    } else {
        return null
    }

}
