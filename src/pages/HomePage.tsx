import { A } from "hookrouter"
import React from "react"

interface page {
    name: string;
    path: string;
}

const pages: page[] = [
    {
        name: "showDrectoryPicker",
        path: "/ShowDirectoryPicker"
    }
]

export const HomePage = () => {
    return (
        <div>
            Home
            <ul>
                {pages.map(page =>
                    <li>
                        <a href={page.path}>{page.name}</a>
                    </li>
                )}
            </ul>
        </div>
    )
}