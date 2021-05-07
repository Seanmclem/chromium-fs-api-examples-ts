import { proxy } from 'valtio'

interface FileTab {
    name: string;
    path: string;
    fileHandle: any; // todo: kill me
    isActive?: boolean; //mirrored
    hasPendingChanges?: boolean; //mirrored
    saveFunction?: any; //mirrored
}

interface openTabsProps {
    tabs: FileTab[]
}

export const openTabs = proxy<openTabsProps>({
    tabs: [],
})