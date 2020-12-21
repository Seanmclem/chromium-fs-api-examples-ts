import React, { useCallback, useState } from "react"
import { DirectoryContents } from "../components/directoryContents/DirectoryContents"
import styled from "styled-components"
import { FileViewerByType } from "../components/FileViewerByType"
import { FileMenu } from "../components/FileMenu"
import { ContextifyMenu } from "../components/ContextifyMenu"

const FileExplorerContainer = styled.div`
    height: 100vh;
`

const InnerStuffContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 95%;
`

export const FileExplorer: React.FC<any> = () => {
    const [altRootHandle, setAltRootHandle] = useState<FileSystemDirectoryHandle| undefined>(undefined)

    const [selectedFile, setSelectedFile] = useState<FileSystemHandle| undefined>(undefined)

    const handleSelectFileCustom = useCallback(async (file: FileSystemFileHandle) => {
        console.log({customFileFn:file})
        setSelectedFile(file)
    }, [])

    return (
        <FileExplorerContainer>
            <FileMenu setAltRootHandle={setAltRootHandle} />
            <InnerStuffContainer>
                <DirectoryContents //needs memoized when sober
                    handleSelectFile={handleSelectFileCustom}
                    altRootHandle={altRootHandle}
                /> 
                {/* move condition into component */}
                {selectedFile && <FileViewerByType fileHandle={selectedFile as FileSystemFileHandle} />}
            </InnerStuffContainer>

            <ContextifyMenu />
        </FileExplorerContainer>
    )
}