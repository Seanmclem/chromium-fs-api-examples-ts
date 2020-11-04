export const getFilesFromDirectory = async (directoryHandle:FileSystemDirectoryHandle) => {
    debugger;
    const handlesEntriesIterator = directoryHandle.entries()
    // ^ ? NativeFileSystemDirectoryIterator
    debugger;
    return asyncIteratorToArray(handlesEntriesIterator)
}

const asyncIteratorToArray = async (iterator: any) => {
    const array = []
    for await (const handle of iterator) {
        array.push(handle)
    }
    return array
}