import React from "react"
import styled from 'styled-components'
import { CodeSample } from "../components/CodeSample"
import { ExmpleContainer } from "../components/ExampleContainer"


export const FileSystemDirectoryHandle: React.FC<any> = () => {
    return (
            <ExmpleContainer>
<h3>FileSystemDirectoryHandle</h3>

<p> 
    <ul>
        <li>
            It's an iterator of FileSystemHandle.  
        </li>
        <li>
            Data: {`{ kind: "directory" | "file", name: string }`}
        </li>
        <li>
            Methods;  keys(), values(), entries(), or the directory itself as an async iterable.
        </li>
        <li>
            Each method returns NativeFileSystemDirectoryIterator, aka {`AsyncIterableIterator<FileSystemHandle>`}
        </li>
        <li>
            Loop over the iterator with a function resemling the following to get an array of FileSystemHandles for every item in the directory. 
        </li>
    </ul>
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
You will see the terms FileSystemHandle/ FileSystemFileHandle/ FileSystemDirectoryHandle used
interchangeably. Basically they are all FileSystemHandles, but if their "kind" is "directory" 
then it's a FileSystem<i>Directory</i>Handle, and if "kind" is "file" then it's a FileSystem<i>File</i>Handle
{/* TODO use link ^ */}

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
                    <b>.values()</b> - Returns a FileSystemFileHandle or FileSystemDirectoryHandle  <br />
                    for each of the selected directories children, from the iterator.  <br />

                    Each child will also contain kind/name values and all file or directory methods -since each child is also a FileSystemHandle.
                    So you can use it to access a file or traverse deeper ito more directories.

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
    <b>.entries()</b> - Returns an item  <br />
    for each of the directory children from the iterator. <br />
    Each item contains an array of 2 items.<br />
    Item 0 is just a string of the name of the child file/folder, <br />
    and Item 1 is a FileSystemHandle of that child. <br />
    Containing the same two data properties kind/name and all file or directory methods 
    -since each child is also a FileSystemHandle.
    So you can use it to access a file or traverse deeper ito more directories
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
    )
}