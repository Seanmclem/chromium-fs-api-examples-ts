import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Editor from '@monaco-editor/react';

const Contianer = styled.div`
    width: 100%;
    height: auto;
    /* background-color: green; */
    border: 1px solid black;
    border-radius: 10px;
`

interface props {
    fileHandle: FileSystemFileHandle;
}

export const TextFileViewer: React.FC<props> = ({fileHandle}) => {
    const [text, setText] = useState<string>('')

    useEffect(() => {
        getTextFileContents(fileHandle)
    }, [fileHandle])

    const getTextFileContents = async (fileHandle: FileSystemFileHandle) => {
        const fileRead = await fileHandle.getFile()
        const fileText = await fileRead.text()
        setText(fileText)
    }
    
    return (
        <Contianer>
            {text ?
                <Editor height="98vh" value={text} />
            : null}
            {/* no language="anything", gives basic default text editor, should use primarily at first */}
        </Contianer>
    )
}