import React from 'react'
import { EntryType } from '../../utils/file-system-utils'



interface Props {
    directoryContents: EntryType[];
    rootHandle?: FileSystemDirectoryHandle;
}

const List = ({directoryContents}: {directoryContents:EntryType[]}) => {
    const items = directoryContents.map(entry => {
        var hat = entry[0]
        var poo = entry[1]
        return (<Item key={entry[0]} entry={entry} />)
    })
    return (
        <div className="list-container">
            {items}
        </div>
    )
}

const Item = ({entry}: {entry: EntryType}) => {
    return (
        <div>{entry[0]}</div>
    )
}

export const FileListView: React.FC<Props> = ({directoryContents, rootHandle}) => {

    console.log({directoryContents})
    return (
        rootHandle && directoryContents?.length ? (
            <List directoryContents={directoryContents} />
        ) : (
            <div>no files here</div>
        )
    )
}