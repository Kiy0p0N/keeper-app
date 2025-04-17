import Header from './components/Header.jsx';
import Note from './components/Note.jsx';
import Footer from './components/Footer.jsx';
import InputArea from './components/InputArea.jsx';
import './style/App.css';
import { useState } from 'react';

function App() {
  const [notes, setNotes] = useState([]);  // State to store the list of notes
  const [lastId, setLastId] = useState(0);  // State to keep track of the last used note ID

  // Function to add a new note
  function addNote(note) {
    setNotes((prevNotes) => {
      return [
        ...prevNotes,
        {
          id: lastId,  // Assign the previous ID
          title: note.title,
          content: note.content
        },
      ];
    });

    setLastId(lastId + 1);  // Increment note ID
  }

  // Function to delete a note by its ID
  function delNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => {
        return note.id !== id;  // Keep all notes except the one with the matching ID
      });
    });
  }

  return (
    <>
      {/* Top header component */}
      <Header />

      <main className="container">
        {/* Input component for adding new notes */}
        <InputArea 
          addNote={addNote}
        />

        {/* Displaying all notes */}
        <div className='notes-container'>
          {notes.map((newNote) => (
            <Note
              key={newNote.id}  // Unique key for React rendering
              id={newNote.id}
              title={newNote.title}
              content={newNote.content}
              delNote={delNote}  // Pass delete function to each note
            />
          ))}
        </div>
      </main>

      {/* Footer component */}
      <Footer />
    </>
  )
}

export default App
