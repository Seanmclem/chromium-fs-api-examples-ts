import React, { useState } from "react"
import { DirectoryContents } from "../components/directoryContents/DirectoryContents"
import { FunctionDetail } from "../components/FunctionDetail"
import { FileListView } from "../projects/file-list-view/FileListView"
import { EntryType, getDirectoryContents } from '../utils/file-system-utils'

export const ShowDirectoryPicker = () => {
    const [directoryContents, setDirectoryContents] = useState<EntryType[]>([])
    const [directoryHandle, setDirectoryHandle] = useState<FileSystemDirectoryHandle | undefined>(undefined)

    // ^^ maybe be a hook

    const showFolderPicker = async () => {
        const handle = await window.showDirectoryPicker()
        const contents = await getDirectoryContents(handle) // test this <----------------
        setDirectoryHandle(handle)
        setDirectoryContents(contents)
    }
//Post-Docs?


    return (
        <div>
            <FunctionDetail
                name={`ShowDirectoryPicker`}
                link={`https://wicg.github.io/file-system-access/#api-filesystemdirectoryhandle`}
            />
            <div className="exapmle-container">
                <button 
                    onClick={showFolderPicker}
                >
                    Open Directory
                </button>
            </div>
            <FileListView
                rootHandle={directoryHandle}
                directoryContents={directoryContents}
            />
            {/* ^v hide/show logic should be in the component ^v */}
            {directoryHandle &&
                <DirectoryContents
                    rootHandle={directoryHandle}
                    directoryContents={directoryContents}
                />
            }
        </div>
    )
}