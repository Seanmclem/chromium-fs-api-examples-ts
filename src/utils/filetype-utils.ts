// const typeCategories: string[] = ['image', 'video', 'text']
const imageExtentions: string[] = ['png', 'jpeg', 'jpg', 'bmp', 'gif', 'webp', 'svg', 'ico']
const videoExtentions: string[] = ['mov', 'mp4', 'mpeg', 'mpg', 'webm', 'mkv', 'avi', 'gifv' ]

export const getFileTypeByExtension = (extension: string): 'image' | 'video' | 'text' => {
    if(imageExtentions.includes(extension)) 
    {
        return 'image'
    }
    else if (videoExtentions.includes(extension)){
        return 'video'
    }
    else {
        return 'text'
    }
}

export const getFileExtensionFromHandle = (fileHandle: FileSystemFileHandle) => {
    const array = fileHandle.name.split('.')
    const lastItem = array[array.length - 1]
    return lastItem
}

export const getFileTypeFromHandle = (fileHandle: FileSystemFileHandle) => {
    const ext = getFileExtensionFromHandle(fileHandle)
    const type = getFileTypeByExtension(ext)
    return type
}