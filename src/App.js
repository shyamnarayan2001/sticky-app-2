import React, { useState, useEffect } from 'react';
import './App.css';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

function App() {
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Load notes from localStorage on mount
  useEffect(() => {
    const savedNotes = localStorage.getItem('stickyNotes');
    if (savedNotes) {
      try {
        setNotes(JSON.parse(savedNotes));
      } catch (error) {
        console.error('Error loading notes:', error);
      }
    }
  }, []);

  // Auto-save notes to localStorage whenever they change
  useEffect(() => {
    if (notes.length > 0) {
      localStorage.setItem('stickyNotes', JSON.stringify(notes));
    }
  }, [notes]);

  // Add a new note
  const addNote = (title, content) => {
    const newNote = {
      id: Date.now(),
      title,
      content,
      createdAt: new Date().toISOString(),
      color: getRandomColor()
    };
    setNotes([newNote, ...notes]);
  };

  // Delete a note
  const deleteNote = (id) => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
    if (updatedNotes.length === 0) {
      localStorage.removeItem('stickyNotes');
    }
  };

  // Update a note
  const updateNote = (id, title, content) => {
    const updatedNotes = notes.map(note =>
      note.id === id ? { ...note, title, content } : note
    );
    setNotes(updatedNotes);
  };

  // Generate random color for notes
  const getRandomColor = () => {
    const colors = [
      '#fff740', // Yellow
      '#ff6b6b', // Red
      '#4ecdc4', // Teal
      '#95e1d3', // Mint
      '#ffd93d', // Gold
      '#a8e6cf', // Light green
      '#ffd6e7', // Pink
      '#c7ceea'  // Lavender
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // Filter notes based on search term
  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <header className="app-header">
        <h1>📝 Sticky Notes</h1>
        <p className="subtitle">Your thoughts, organized and auto-saved</p>
      </header>

      <div className="container">
        <NoteForm addNote={addNote} />

        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="🔍 Search notes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="notes-info">
          <p>{filteredNotes.length} {filteredNotes.length === 1 ? 'note' : 'notes'}</p>
        </div>

        <NoteList
          notes={filteredNotes}
          deleteNote={deleteNote}
          updateNote={updateNote}
        />

        {notes.length === 0 && (
          <div className="empty-state">
            <p>📭 No notes yet!</p>
            <p className="empty-subtitle">Create your first note above</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;