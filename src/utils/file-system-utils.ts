export type EntryType = [string, FileSystemHandle]

const asyncIteratorToArray = async (iterator: any) => {
    const array = []
    for await (const handle of iterator) {
        array.push(handle)
    }
    return array
}

export const createFileInDirectory = async (
    directoryHandle: FileSystemDirectoryHandle,
    filename: string
) => directoryHandle.getFileHandle(filename, { create: true}) 

export const writeFile = async (
    fileHandle: FileSystemFileHandle, 
    contents: FileSystemWriteChunkType // is it? Dafuq is that
) => {
    const writer = await fileHandle.createWritable();
    await writer.truncate(0);// Make sure we start with an empty file
    await writer.write(contents);
    await writer.close();
}

export const openTextFile = async () => { // dafuq test
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
    return window.showOpenFilePicker(options);
}

export const getDirectoryContents = async (directoryHandle:FileSystemDirectoryHandle) => {
    const handlesEntriesIterator = directoryHandle.entries();
    return asyncIteratorToArray(handlesEntriesIterator)
}
