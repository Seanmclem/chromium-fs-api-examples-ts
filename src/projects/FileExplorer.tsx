import React, { useCallback, useState } from "react"
import { DirectoryContents } from "../components/directoryContents/DirectoryContents"
import styled from "styled-components"
import { FileViewerByType } from "../components/FileViewerByType"


const FileExplorerContainer = styled.div`
    display: flex;
    flex-direction: row;
`

export const FileExplorer: React.FC<any> = () => {
    const [selectedFile, setSelectedFile] = useState<FileSystemHandle| undefined>(undefined)

    const handleSelectFileCustom = useCallback(async (file: FileSystemFileHandle) => {
        console.log({customFileFn:file})
        setSelectedFile(file)
    }, [])

    return (
        <FileExplorerContainer>
            <DirectoryContents //needs memoized when sober
                handleSelectFile={handleSelectFileCustom}
            /> 
            {/* move condition into component */}
            {selectedFile && <FileViewerByType fileHandle={selectedFile as FileSystemFileHandle} />}
        </FileExplorerContainer>
    )
}