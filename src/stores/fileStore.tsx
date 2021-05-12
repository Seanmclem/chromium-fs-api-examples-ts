import create, { SetState } from "zustand";

export interface FileTab {
    name: string;
    path: string;
    fileHandle: FileSystemFileHandle;
    isActive: boolean; //mirrored
    hasPendingChanges?: boolean; //mirrored
    saveFunction?: (...args: any[]) => any; //mirrored
}

export interface openTabsProps {
    tabs: FileTab[]
}

type ISet = {
    openTabs: openTabsProps;
    addTab: (newTab: FileTab) => void;
    closeTab: (path: string) => void;
    makeActive: (path: string) => void;
    setHasPendingChanges: (path: string, hasPendingChanges: boolean) => void;
    setFileTabSaveFunction: (path: string, saveFunction: (...args: any[]) => void) => void;
}

export const useFileStore = create<ISet>((set: SetState<ISet>) => ({
    openTabs: { tabs: [] },

    setFileTabSaveFunction: (path: string, saveFunction: (...args: any[]) => void) => set((_state: ISet) => {
        const newOpenTabs = _state.openTabs.tabs.map(tab => tab.path === path ? {
            ...tab,
            saveFunction
        } : tab)
        return { openTabs: { tabs: newOpenTabs } }
    }),

    setHasPendingChanges: (path: string, hasPendingChanges: boolean) => set((_state: ISet) => {
        const newOpenTabs = _state.openTabs.tabs.map(tab => tab.path === path ? {
            ...tab,
            hasPendingChanges
        } : tab)
        return { openTabs: { tabs: newOpenTabs } }
    }),

    addTab: (newTab: FileTab) => set((_state: ISet) => {
        const newOpenTabs = [..._state.openTabs.tabs, newTab]
        return { openTabs: { tabs: newOpenTabs } }
    }),

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