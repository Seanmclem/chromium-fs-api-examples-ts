import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { getVideoData, VideoData } from "../../utils/file-system-utils";

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

export const VideoFileViewer: React.FC<props> = ({fileHandle}) => {
    const [data, setData] = useState<VideoData | undefined>(undefined)

    useEffect(() => {
        fileToUrlState(fileHandle)
    }, [fileHandle])

    const fileToUrlState = async (fileHandle: FileSystemFileHandle) => {
        const dataResult = await getVideoData(fileHandle)
        setData(dataResult)
    }

    return (
        <Contianer>
            {data ?
                <video width="auto" height="auto" controls>
                    <source src={data.blobUrl} type={data.type} />
                </video>
            : null}
        </Contianer>
    )
}