import React, { useEffect, useState } from 'react';
import Header from 'src/components/Header';
import { Link } from 'react-router-dom';
import Note, { INote } from 'src/components/Note';
import {
  HomeContent, Main, Menu, MenuUL, MenuLI, Notes,
} from './styles';
import addIcon from '../../assets/images/add.png';

function HomePage() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const notesStorage = localStorage.getItem('Notes');
    if (notesStorage) {
      const nt = JSON.parse(notesStorage);
      setNotes(nt);
    }
  }, []);

  return (
    <HomeContent className="container">
      <Header />
      <Main>
        <Menu>
          <MenuUL>
            <MenuLI>
              <Link to="/createNote">
                <img src={addIcon} alt="Add notes" />
                Add notes
              </Link>
            </MenuLI>
          </MenuUL>
        </Menu>
        <Notes>
          {
            notes.map((note: INote) => (
              <Note
                key={note.id}
                noteInfos={note}
              />
            ))
          }
        </Notes>
      </Main>
    </HomeContent>
  );
}

export default HomePage;
