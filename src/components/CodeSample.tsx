import React from 'react'
import styled from 'styled-components'

const Pre = styled.pre`
    overflow-y: auto;
`

const Code = styled.code`
    width: fit-content;
    background-color: #eee;
    border: 1px solid #999;
    display: block;
    padding: 20px;
`

export const CodeSample: React.FC<any> = ({ children }) => {

    return (
<Pre>
<Code>
{children}
</Code>
</Pre>
    )
}