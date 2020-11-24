import React, { useState } from "react"
import { FunctionDetail } from "../components/FunctionDetail"
import { getFilesFromDirectory } from '../utils/file-system-utils'

export const ShowDirectoryPicker = () => {
    const showFolderPicker = async () => {
        const handle = await window.showDirectoryPicker()
        const test = await getFilesFromDirectory(handle) // test this <----------------
        debugger
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
        </div>
    )
}