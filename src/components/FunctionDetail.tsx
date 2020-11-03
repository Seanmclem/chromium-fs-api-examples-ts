import React from "react"
import { functionDetailInterface } from "../common/function-detail-interface";


export const FunctionDetail: React.FC<functionDetailInterface> = ({
    name,
    link
}) => {
    return (
        <div>
            Function Name: {name}
            Link: {link}
        </div>
    )
}