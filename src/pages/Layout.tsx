import React from 'react'
// import { A } from "hookrouter"


interface page {
    name: string;
    path: string;
}

const pages: page[] = [
    {
        name: "ShowDrectoryPicker",
        path: "/showDirectoryPicker"
    },
    {
        name: "FileSystemDirectoryHandle",
        path: "/fileSystemDirectoryHandle"
    }
]


export const Layout = ({ children }: any) => (
    <div className="layout">
        <div className="heading">
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                {pages.map(page =>
                    <li>
                        <a href={page.path}>{page.name}</a>
                    </li>
                )}
            </ul>
        </div>
        {children}
    </div>
)