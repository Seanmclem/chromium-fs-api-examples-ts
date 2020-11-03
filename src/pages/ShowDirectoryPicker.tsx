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
                    <b>This should all just be a separate page for FileSystemDirectoryHandle </b><br />
                    Returns Type: FileSystemDirectoryHandle <br />
                    It's an iterator of FileSystemHandle <br />
                    <br />
                    Funtions, "Use .keys(), .values(), .entries(), or the directory itself as an async iterable in the new API."
                    <br />
                    <br />
                    FileSystemDirectoryHandle - all return NativeFileSystemDirectoryIterator, aka {`AsyncIterableIterator<FileSystemHandle>`}
                    <br />
                    <code>
                        {`async function toArray(asyncIterator){
                            const arr=[];
                            for await(const i of asyncIterator) arr.push(i);
                            return arr;
                        }`}
                    </code>
                    <br />
                    .keys() - Returns the string key, which is just the name of the folder, for each handle. <br />
                    .values() - Returns a FileSystemDirectoryHandle of the selected folder, which is like an object containing 2 keys. "kind", which is the type of FileSystemHandle, in our case its <i>directory</i>.
                        And "name", which is just the string name of the current directory <br />
                    .entries() - Returns an iterator/list of the children of a directory. Everything inside of it. Each child contains an array of 2 items.
                    Item 0 is just a string of the name of the child file/folder, and Item 1 is a FileSystemHandle of that child. Containing the same two keys of kind/name specifying kind="directory/file", and name= the file or folder string name<br />
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