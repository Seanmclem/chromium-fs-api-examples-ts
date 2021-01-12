import create, { SetState } from "zustand";

export interface SelectedFolder {
    path: string;
    folderHandle: FileSystemDirectoryHandle;
}

type ISet = {
    selectedFolder?: SelectedFolder;
    contextHighlightedFolder?: SelectedFolder;
    setContextHighlightFolder: (selectedFolder?: SelectedFolder) => void;
    setSelectedFolder: (selectedFolder?: SelectedFolder) => void;
}

export const useTodoStore = create<ISet>((set: SetState<ISet>) => ({
    selectedFolder: undefined,
    contextHighlightedFolder:undefined,
    setContextHighlightFolder: (folder?: SelectedFolder) => set((_state: ISet) => ({contextHighlightedFolder: folder})),
    setSelectedFolder: (folder?: SelectedFolder) => set((_state: ISet) => ({selectedFolder: folder})),


    // addToTodoList: (toAdd: SelectedFolder) => set((state: ISet) => ({ todoList: [...state.todoList, toAdd] })),
    // removeToDoListItem: (idToRemove: number) => set((state: ISet) => {
    //     let newArray = [...state.todoList];
    //     newArray.splice(idToRemove, 1);
    //     return { todoList: [...newArray] };
    // }),
    // markDoneToDoListItem: (idToToggleDone: number) => set((state: ISet) => {
    //     let newArray = [...state.todoList];
    //     newArray[idToToggleDone].done = !newArray[idToToggleDone].done;
    //     return { todoList: [...newArray] };
    // }),
}))