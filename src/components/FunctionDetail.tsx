import React from "react"
import { functionDetailInterface } from "../common/function-detail-interface";


export const FunctionDetail: React.FC<functionDetailInterface> = ({
    name,
}) => {
    return (
        <div>
            <a href="/">Home</a>
            Function Name: {name}
        </div>
    )
}