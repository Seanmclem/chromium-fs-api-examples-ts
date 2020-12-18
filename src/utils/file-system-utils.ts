export type EntryType = [string, FileSystemHandle]

const asyncIteratorToArray = async (iterator: any, sort?: boolean) => { // verified
    const array = []
    for await (const handle of iterator) {
        array.push(handle)
    }

    console.log({array})
    sort && array.sort(comparator)
    return array
}

function comparator(a: string, b: string) {
    if (a[0] < b[0]) return -1;
    if (a[0] > b[0]) return 1;
    return 0;
}
// https://stackoverflow.com/questions/5435228/sort-an-array-with-arrays-in-it-by-string/5435341

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
export const getDirectoryContents = async (directoryHandle:FileSystemDirectoryHandle, sort = true): Promise<EntryType[]>  => {
    const handlesEntriesIterator = directoryHandle.entries()
    return asyncIteratorToArray(handlesEntriesIterator, sort)
}

// Files
export const getTextFileContents = async (fileHandle: FileSystemFileHandle) => {
    const file: File = await fileHandle.getFile()
    const fileText: string = await file.text()
    return fileText
}

export const getFileBlobUrl = async (fileHandle: FileSystemFileHandle) => {
    const file: File = await fileHandle.getFile()
    let url = URL.createObjectURL(file)

    return url
}

export interface VideoData {
    blobUrl: string;
    type: string;
    name: string;
}

export const getVideoData = async (fileHandle: FileSystemFileHandle): Promise<VideoData> => {
    const file: File = await fileHandle.getFile()
    const type: string = await file.type
    let blobUrl = URL.createObjectURL(file)

    const data: VideoData = {
        blobUrl,
        type,
        name: file.name
    }
    return data
}