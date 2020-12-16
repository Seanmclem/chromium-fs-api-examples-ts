export type EntryType = [string, FileSystemHandle]

const asyncIteratorToArray = async (iterator: any) => { // verified
    const array = []
    for await (const handle of iterator) {
        array.push(handle)
    }
    return array
}

export const createFileInDirectory = async (
    directoryHandle: FileSystemDirectoryHandle,
    filename: string
) => directoryHandle.getFileHandle(filename, { create: true})  // UNverified

// UNverified
export const writeFile = async (
    fileHandle: FileSystemFileHandle, 
    contents: FileSystemWriteChunkType // is it? Dafuq is that
) => {
    const writer = await fileHandle.createWritable();
    await writer.truncate(0);// Make sure we start with an empty file
    await writer.write(contents);
    await writer.close();
}

export const openTextFile = async () => { // dafuq test // or create?
    // https://wicg.github.io/file-system-access/#api-filpickeroptions-types
    const options: OpenFilePickerOptions = {
        types: [{
            description: 'Text Files',
            accept: {
                'text/plain': ['.txt', '.text'],
                'text/html': ['.html', '.htm']
            }
        }],
        multiple: false
    };
    return window.showOpenFilePicker(options)
}
 
// Verified
export const getDirectoryContents = async (directoryHandle:FileSystemDirectoryHandle): Promise<EntryType[]>  => {
    const handlesEntriesIterator = directoryHandle.entries()
    return asyncIteratorToArray(handlesEntriesIterator)
}

// Files
export const getTextFileContents = async (fileHandle: FileSystemFileHandle) => {
    const file: File = await fileHandle.getFile()
    const fileText: string = await file.text()
    return fileText
}

export const getFileBlobUrl = async (fileHandle: FileSystemFileHandle) => {
    const file: File = await fileHandle.getFile()
    const farp: string = await file.type
    const poop =  await file.arrayBuffer()
    let url = URL.createObjectURL(file)

    return url
}
