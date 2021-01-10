import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Editor from '@monaco-editor/react';
import { getTextFileContents } from "../../utils/file-system-utils";
import ts from "typescript"

const Contianer = styled.div`
    width: 100%;
    height: auto;
    border: 1px solid black;
    border-radius: 10px;
`

interface props {
    fileHandle: FileSystemFileHandle;
}

export const TextFileViewer: React.FC<props> = ({fileHandle}) => {
    const [text, setText] = useState<string>('')

    useEffect(() => {
        fileTextToState(fileHandle)
    }, [fileHandle])

    const fileTextToState = async (fileHandle: FileSystemFileHandle) => {
        const fileText = await getTextFileContents(fileHandle)
        setText(fileText)
        debugger;
        const test = ts.createSourceFile('boo.txt', fileText, ts.ScriptTarget.JSON)
        debugger
        console.log('test', test)
        // crazy AST parsed from text
        //need to test turning back to a file
        // then understand any and modify it
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