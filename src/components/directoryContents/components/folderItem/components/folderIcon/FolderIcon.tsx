import React, { useState, useEffect } from 'react'
import './FolderIcon.scss'
import { MdKeyboardArrowRight } from "react-icons/md"

interface props {
    open: boolean
}

export const FolderIcon: React.FC<props> = ({open}) => {
    return (
        <div className={`icon-container${open ? ' open' : ''}`}>
            <MdKeyboardArrowRight size="20px" />
        </div>
    )
}
