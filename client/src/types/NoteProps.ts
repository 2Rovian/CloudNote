export interface NoteProps{
    _id?: string;
    title: string;
    description: string;
    content: string;
}

export interface CreateNoteProps{
    setTitle: (val: string) => void; 
    setDescription: (val: string) => void; 
    setContent: (val: string) => void;
    note: NoteProps;
}
