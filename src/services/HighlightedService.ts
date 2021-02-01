import { Subject } from 'rxjs';

const subject = new Subject<HightlightedItem>();

export interface HightlightedItem {
    path: string,
    handle: FileSystemDirectoryHandle | FileSystemFileHandle
}

export const HighlightedService = {
    setItem: ({path, handle} : HightlightedItem) => subject.next({ path, handle }),
    clearItem: () => subject.next(),
    getItem: () => subject.asObservable()
};
