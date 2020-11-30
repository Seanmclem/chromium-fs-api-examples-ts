import React, { useEffect, useState } from 'react'
import './ChildItems.scss'
// import { getFilesFromDirectory } from '../../../../../../services/file-system-service'
import { FileOrFolderList } from '../../../fileOrFolderList/FileOrFolderList'
import { EntryType, getDirectoryContents } from '../../../../../../utils/file-system-utils'

export const ChildItems = ({ parent, show }: { parent: FileSystemDirectoryHandle, show: boolean }) => {
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
                    <FileOrFolderList key={entry[0]} entry={entry[1]} />
                ))}
            </div>
        )
    } else {
        return null
    }

}
