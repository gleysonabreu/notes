import React, {
  useState, ChangeEvent, FormEvent,
} from 'react';
import Header from 'src/components/Header';
import { v4 as uuidv4 } from 'uuid';
import {
  CreateNoteContent, Main, AddNote, Title, Form, InputBlock, Fieldset,
  Legend, TextAreaBlock, Button, ColorNotes, ButtonColorNotes,
} from './styles';

interface IColorsNotes {
  id: number;
  name: string;
  color: string;
}

function CreateNote() {
  const colorsNotes = [
    {
      id: 1,
      name: 'Yellow',
      color: '#F3DE8A',
    },
    {
      id: 2,
      name: 'Orange',
      color: '#F3C969',
    },
    {
      id: 3,
      name: 'Blue',
      color: '#65AFFF',
    },
  ];

  const [formData, setFormData] = useState({
    title: '',
    message: '',
    color: '',
    id: uuidv4(),
  });

  const handleOnChangeEvent = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((oldData) => ({
      ...oldData,
      [name]: value,
    }));
  };

  const handleSelectColorNote = (color: string) => {
    setFormData((oldData) => ({
      ...oldData,
      color,
    }));
  };

  const handleOnChangeTextArea = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    setFormData((oldData) => ({
      ...oldData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (
      formData.color === ''
      || formData.message === ''
      || formData.title === ''
    ) {
      alert('Preencha todos os dados.');
      return null;
    }

    setFormData((old) => ({
      ...old,
      id: uuidv4(),
    }));

    const notes = localStorage.getItem('Notes');

    if (notes) {
      const nt: Array<{}> = await JSON.parse(notes);
      nt.push(formData);
      localStorage.setItem('Notes', JSON.stringify(nt));
    } else {
      localStorage.setItem('Notes', JSON.stringify([formData]));
    }

    alert('Added note.');
  };

  return (
    <CreateNoteContent className="container">
      <Header arrowBack />
      <Main>
        <AddNote>
          <Title>Add Note</Title>
          <Form onSubmit={handleSubmit}>
            <Fieldset>
              <Legend>Title Note</Legend>
              <InputBlock>
                <input
                  value={formData.title}
                  onChange={handleOnChangeEvent}
                  name="title"
                  placeholder="Enter your title note"
                />
              </InputBlock>
            </Fieldset>
            <Fieldset>
              <Legend>Message note</Legend>
              <TextAreaBlock>
                <textarea
                  value={formData.message}
                  onChange={handleOnChangeTextArea}
                  name="message"
                  placeholder="Enter your message"
                />
              </TextAreaBlock>
            </Fieldset>

            <Fieldset>
              <Legend>Select color for your note</Legend>
              <ColorNotes>
                {
                  colorsNotes.map((color: IColorsNotes) => (
                    <ButtonColorNotes
                      type="button"
                      className={formData.color === color.color ? 'selected' : ''}
                      color={color.color}
                      key={color.id}
                      onClick={() => handleSelectColorNote(color.color)}
                    >
                      {color.name}

                    </ButtonColorNotes>
                  ))
                }
              </ColorNotes>
            </Fieldset>

            <Fieldset>
              <Button type="submit">Send</Button>
            </Fieldset>
          </Form>
        </AddNote>
      </Main>
    </CreateNoteContent>
  );
}

export default CreateNote;
