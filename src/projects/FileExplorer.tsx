import React, { useCallback, useState } from "react"
import { DirectoryContents } from "../components/directoryContents/DirectoryContents"
import styled from "styled-components"
import { ModelViewerPane } from "../components/ModelViewerPane"

const FileExplorerContainer = styled.div`
    display: flex;
    flex-direction: row;
`

export const FileExplorer: React.FC<any> = () => {
    const [selectedFile, setSelectedFile] = useState<FileSystemHandle| undefined>(undefined)

    const handleSelectFileCustom = useCallback((file: FileSystemHandle) => {
        console.log({customFileFn:file})
        setSelectedFile(file)
    }, [])

    return (
        <FileExplorerContainer>
            <DirectoryContents //needs memoized when sober
                handleSelectFile={handleSelectFileCustom}
            /> 
            <ModelViewerPane selectedFile={selectedFile} />
        </FileExplorerContainer>
    )
}