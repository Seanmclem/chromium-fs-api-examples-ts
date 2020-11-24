import { useQueryParams } from 'hookrouter'
import React from 'react'

const pages: string[] = [
    "ShowOpenfilepicker",
    "Showsavefilepicker",
    "ShowDirectoryPicker",
    "FileExplorer?hideLayout=true"
]


export const Layout = ({ children }: any) => {
    const [params] = useQueryParams()

    return (
        <div className="layout">
            {!params.hideLayout && (
                <div className="heading">
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        {pages.map(page =>
                            <li>
                                <a href={`/${page}`}>{page.split("?")[0]}</a>
                            </li>
                        )}
                    </ul>
                </div>
            )}
            {children}
        </div>
    )
}