import create, { SetState } from "zustand";

//export interface SelectedFolder {
//     path: string;
//     folderHandle: FileSystemDirectoryHandle;
// }

export interface FileTab {
    name: string;
    path: string;
    fileHandle: FileSystemFileHandle; // todo: kill me
    isActive?: boolean; //mirrored
    hasPendingChanges?: boolean; //mirrored
    saveFunction?: any; //mirrored
}

export interface openTabsProps {
    tabs: FileTab[]
}

type ISet = {
    // selectedFolder?: SelectedFolder;
    // contextHighlightedFolder?: SelectedFolder;
    // setContextHighlightFolder: (selectedFolder?: SelectedFolder) => void;
    // setSelectedFolder: (selectedFolder?: SelectedFolder) => void;
    makeActive: (path: string) => void;
    closeTab: (path: string) => void;
    addTab: (newTab: FileTab) => void;
    openTabs: openTabsProps;
}

export const useFileStore = create<ISet>((set: SetState<ISet>) => ({
    // selectedFolder: undefined,
    // contextHighlightedFolder: undefined,
    // setContextHighlightFolder: (folder?: SelectedFolder) => set((_state: ISet) => ({ contextHighlightedFolder: folder })),
    // setSelectedFolder: (folder?: SelectedFolder) => set((_state: ISet) => ({ selectedFolder: folder })),



    addTab: (newTab: FileTab) => set((_state: ISet) => {
        const newOpenTabs = [..._state.openTabs.tabs, newTab]
        return { openTabs: { tabs: newOpenTabs } }
    }),
    openTabs: { tabs: [] },

    closeTab: (path: string) => set((_state: ISet) => {
        const newOpenTabs = _state.openTabs.tabs.filter(tab => tab.path !== path)
        return { openTabs: { tabs: newOpenTabs } }
    }),

    makeActive: (path: string) => set((_state: ISet) => {
        const newOpenTabs = [..._state.openTabs.tabs];
        newOpenTabs.forEach((tab) => (tab.isActive = false));
        newOpenTabs.forEach((tab) => {
            if (tab.path === path) {
                tab.isActive = true;
            }
        });
        return { openTabs: { tabs: newOpenTabs } }
    }),
}))