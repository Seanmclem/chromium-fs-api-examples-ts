import { proxy } from 'valtio'

interface FileTab {
    name: string;
    path: string;
    fileHandle: FileSystemFileHandle;
}

interface openTabsProps {
    tabs: FileTab[]
}

export const openTabs = proxy<openTabsProps>({
    tabs: [],
})