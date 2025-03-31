import Header from './components/Header.jsx';
import Note from './components/Note.jsx';
import Footer from './components/Footer.jsx';
import './App.css';
import './components/Note.css';
import notes from './notes.js';

function createNote(note) {
  return (
    <Note
      key={note.key}
      id={note.key}
      title={note.title}
      content={note.content}
    />
  );
}

function App() {
  return (
    <>
      <Header />

      <main className="container">
        {notes.map(createNote)}
      </main>

      <Footer />
    </>
  )
}

export default App
