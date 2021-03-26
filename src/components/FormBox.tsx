import React from 'react'

interface props {
    children: any,
}

export const FormBox: React.FC<props> = ({children}) => {
        
    return (
        <div>
            {children}
        </div>
    )
}
