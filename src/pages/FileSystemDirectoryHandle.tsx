import React from "react"
import styled from 'styled-components'
import { CodeSample } from "../components/CodeSample"

const ExmpleContainer = styled.div`
    margin: 15px;
    word-break: break-word;
`

export const FileSystemDirectoryHandle: React.FC<any> = () => {
    return (
        <div>
            <ExmpleContainer>
                <h3>FileSystemDirectoryHandle</h3>

                <p>
                    It's an iterator of FileSystemHandle.  
                    <br />
                    Data: 
                    <br />
                    Methods;  keys(), values(), entries(), or the directory itself as an async iterable.
                    <br />
                    Each return NativeFileSystemDirectoryIterator, aka {`AsyncIterableIterator<FileSystemHandle>`}
                    <br />
                    Loop over them with a function resemling the following to get an array of FileSystemHandles
                    <br />

<CodeSample>
{`async function toArray(asyncIterator){
    const array = [];
    for await(const fileSystemhandle of asyncIterator) {
        array.push(fileSystemhandle);
    }
    return array;
}`}
</CodeSample>

                    <br />
                    <i>
                        Data output from a function like above - will yield usable data as detailed below
                    </i>
                    <br />
                    You will see the terms FileSystemHandle/FileSystemFileHandle/FileSystemDirectoryHandle used
                    interchangeably. Basically they are all FileSystemHandles, but if their "kind" is "directory" 
                    then it's a FileSystemDirectoryHandle, and if "kind" is "file" then it's a FileSystemFileHandle
                    {/* TODO use links ^ */}
                    <br />
                    <hr />
                    <h3>
                        Data
                    </h3>

<CodeSample>
{`// Example
kind: "directory"
name: "chromium-fs-api-examples-ts"
`}
</CodeSample>


<hr />
                    <h3>
                        Methods
                    </h3>
                    <b>.keys()</b> - Returns a string-key for each of the drectory children from the iterator, 
                    which is just the name of the folder, one for every handle/child.
<CodeSample>
{`// Example
[
    "filesystem_api_tests",
    "chromium-fs-api-examples-ts"
]
`}
</CodeSample>

                    <br />
                    <br />
                    <b>.values()</b> - Returns a FileSystemFileHandle/FileSystemDirectoryHandle  <br />
                    for each of the directory children from the iterator,  <br />
                    As described in the <i>data</i> section above, each holds data containing 2 keys.  <br />
                    "kind", which is the type of FileSystemHandle, for an fs directory handle, it's <i>directory</i>. <br />
                    And "name", which is just the string name of the current directory/file.
                    <br />
                    <i>Note: the FileSystemHandle will also contain all file or directory methods. 
                    So you can use it to access a file or traverse deeper ito more directories.</i>

<CodeSample>
{`// Example
[
    {kind: "directory"
    name: "chromium-fs-api-examples-ts"},
    {kind: "directory"
    name: "filesystem_api_tests"}
]
`}
</CodeSample>


                    <br />
                    <br />
                    <b>.entries()</b> - Returns an item  <br />
                    for each of the directory children from the iterator. <br />
                    Each item contains an array of 2 items.<br />
                    Item 0 is just a string of the name of the child file/folder, <br />
                    and Item 1 is a FileSystemHandle of that child. <br />
                    Containing the same two data properties kind/name. <br />
                    <i>kind</i> is alwayseither "directory" or "file", <br />
                    <i>name</i> is the name of the file/folder again.<br />
                    <i>Note: the FileSystemHandle will also contain all file or directory methods. 
                    So you can use it to access a file or traverse deeper ito more directories.</i>
                    <br />

<CodeSample>
{`// Example
[
    [
        "package.json",
        {kind: "file", name: "package.json"}
    ],
    [
        "src",
        {kind: "directory", name: "src"}
    ],
]
`}
</CodeSample>

                </p>

            </ExmpleContainer>

        </div>
    )
}