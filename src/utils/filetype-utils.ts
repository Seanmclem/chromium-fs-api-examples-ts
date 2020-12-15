// const typeCategories: string[] = ['image', 'video', 'text']
const imageExtentions: string[] = ['png', 'jpeg', 'jpg', 'bmp', 'gif', 'webp']
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

export const getExtension = (fileHandle: FileSystemFileHandle) => {
    const array = fileHandle.name.split('.')
    const lastItem = array[array.length - 1]
    return lastItem
}

export const getFileExtensionFromHandle = (fileHandle: FileSystemFileHandle) => {
    const ext = getExtension(fileHandle);
    const type = getFileTypeByExtension(ext)
    return type
}