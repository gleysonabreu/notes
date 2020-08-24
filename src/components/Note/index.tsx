import React from 'react';
import { IoMdClose, IoMdCreate } from 'react-icons/io';
import {
  Notes, HeaderNote, TitleNote, MessageNote, Button,
} from './styles';

export interface INote {
  title: string;
  message: string;
  color: string;
  id: string;
}

interface IPropsNote {
  noteInfos: INote;
}

const Note: React.FC<IPropsNote> = ({ noteInfos }) => {
  function handleDeleteNote() {
    const notesStorage = localStorage.getItem('Notes');
    if (notesStorage) {
      const notes: Array<{
        id: string;
        title: string;
        color: string;
        message: string;
      }> = JSON.parse(notesStorage);

      const deleteNote = notes.filter((note) => note.id !== noteInfos.id);
      localStorage.setItem('Notes', JSON.stringify(deleteNote));

      window.location.reload();
    }
  }

  return (

    <Notes color={noteInfos.color}>
      <HeaderNote color={noteInfos.color}>
        <Button type="button" onClick={handleDeleteNote}>
          <IoMdClose />
        </Button>
        <TitleNote>{noteInfos.title}</TitleNote>
        <IoMdCreate />
      </HeaderNote>
      <MessageNote>
        <p>
          {noteInfos.message}
        </p>
      </MessageNote>
    </Notes>

  );
};

export default Note;
