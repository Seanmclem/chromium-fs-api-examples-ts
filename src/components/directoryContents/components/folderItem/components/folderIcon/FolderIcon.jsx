import React, { useState, useEffect } from 'react'
import './FolderIcon.scss'
import { MdKeyboardArrowRight } from "react-icons/md"


export const FolderIcon = (props) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const isOpen = props.open === true ? true : false;
        setOpen(isOpen);
    }, [props.open])

    return (
        <div className={`icon-container${open ? ' open' : ''}`}>
            <MdKeyboardArrowRight size="20px" />
        </div>
    )
}
