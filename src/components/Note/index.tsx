import React from 'react';
import {
  Notes, HeaderNote, TitleNote, MessageNote,
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

const Note: React.FC<IPropsNote> = ({ noteInfos }) => (
  <Notes color={noteInfos.color}>
    <HeaderNote color={noteInfos.color}>
      <TitleNote>{noteInfos.title}</TitleNote>
    </HeaderNote>
    <MessageNote>
      <p>
        {noteInfos.message}
      </p>
    </MessageNote>
  </Notes>
);

export default Note;
