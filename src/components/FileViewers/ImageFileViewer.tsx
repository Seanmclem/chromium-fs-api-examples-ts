import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { getFileBlobUrl } from "../../utils/file-system-utils";

const Contianer = styled.div`
    /* display: flex;
    justify-content: center;
    align-items: center; */
    padding: 10% 0 0 10%;

    width: 100%;
    height: auto;
    
    border: 1px solid black;
    border-radius: 10px;
`

interface props {
    fileHandle: FileSystemFileHandle;
}

export const ImageFileViewer: React.FC<props> = ({fileHandle}) => {
    const [url, setUrl] = useState<string>('')

    useEffect(() => {
        fileToUrlState(fileHandle)
    }, [fileHandle])

    const fileToUrlState = async (fileHandle: FileSystemFileHandle) => {
        const urlResult = await getFileBlobUrl(fileHandle)
        setUrl(urlResult)
    }
    
    return (
        <Contianer>
            {url ?
                <img src={url} height="100px" width="100px"/>
            : null}
            {/* no language="anything", gives basic default text editor, should use primarily at first */}
        </Contianer>
    )
}