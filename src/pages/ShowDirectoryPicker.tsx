import React, { useState } from "react"
import { DirectoryContents } from "../components/directoryContents/DirectoryContents"
import { FunctionDetail } from "../components/FunctionDetail"
import { FileListView } from "../projects/file-list-view/FileListView"
import { EntryType, getDirectoryContents } from '../utils/file-system-utils'

export const ShowDirectoryPicker = () => {
    // const [directoryContents, setDirectoryContents] = useState<EntryType[]>([])
    const [directoryHandle, setDirectoryHandle] = useState<FileSystemDirectoryHandle | undefined>(undefined)

    const showFolderPicker = async () => {
        const handle = await window.showDirectoryPicker()
        setDirectoryHandle(handle)
    }

    const handleSelectFileCustom = (file: any) => {
        console.log({customFileFn:file})
    }


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
            {/* <FileListView
                rootHandle={directoryHandle}
                directoryContents={directoryContents}
            /> */}
            <DirectoryContents
                handleSelectFile={handleSelectFileCustom}
                altRootHandle={directoryHandle}
            />
        </div>
    )
}