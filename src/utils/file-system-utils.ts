export const getFilesFromDirectory = async (directoryHandle:FileSystemDirectoryHandle) => {
    debugger;
    const handlesEntriesIterator = directoryHandle.entries()
    // ^ ? NativeFileSystemDirectoryIterator
    debugger;
    const handlesArray = []
    for await (const handle of handlesEntriesIterator) {
        handlesArray.push(handle)
    }
    return handlesArray
}