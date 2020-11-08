import React, { useState } from "react"
import { FunctionDetail } from "../components/FunctionDetail"
import { getFilesFromDirectory } from '../utils/file-system-utils'

export const ShowDirectoryPicker = () => {
    ///const [folderHandle, setFolderHandle] = useState<FileSystemDirectoryHandle | undefined>()
    const [output, setOutput] = useState<string>('')

    const showFolderPicker = async () => {
        const handle = await window.showDirectoryPicker()
        console.log('handle', handle)
        var handleOutput = {kind:handle.kind, name: handle.name}
        debugger
        setOutput(JSON.stringify(handleOutput))

        //FileSystemDirectoryHandle vs FileSystemHandle ??
        //setFolderHandle(handle)
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
                <p>
                    Returns Type: <a href="/fileSystemDirectoryHandle">FileSystemDirectoryHandle</a> <br />
                    It's an iterator of FileSystemHandle <br />
                    The result of using this function to open a directory is an obect of type FileSystemDirectoryHandle, which is basically a reference to the directory we just picked. 
                    This reference contains descriptive data properties and methods to interact with the direcotries children. 
                    Which would be anyfiles or folders contained within the directory.
                </p>
                <button 
                    onClick={showFolderPicker}
                >
                    Open Directory
                </button>
            </div>
            <hr />
            <div className="pho-console">
                <p>
                    {output} 
                    {/* /// may need work for serializeable */}
                </p>
            </div>
        </div>
    )
}