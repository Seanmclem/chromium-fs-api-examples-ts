import React, { useState } from "react"
import { FunctionDetail } from "../components/FunctionDetail"

export const ShowDirectoryPicker = () => {
    ///const [folderHandle, setFolderHandle] = useState<FileSystemDirectoryHandle | undefined>()

    const showFolderPicker = async () => {
        const handle = await window.showDirectoryPicker()
        console.log('handle', handle)
        //setFolderHandle(handle)
    }

    return (
        <div>
            <FunctionDetail
                name={`ShowDirectoryPicker`}
            />
            <div className="exapmle-container">
                <button 
                    onClick={showFolderPicker}
                >
                    Open Directory
                </button>
            </div>
        </div>
    )
}