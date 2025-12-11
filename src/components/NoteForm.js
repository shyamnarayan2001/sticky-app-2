import React, { useState } from 'react';

function NoteForm({ addNote }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() || content.trim()) {
      addNote(
        title.trim() || 'Untitled Note',
        content.trim()
      );
      setTitle('');
      setContent('');
      setShowForm(false);
    }
  };

  const handleCancel = () => {
    setTitle('');
    setContent('');
    setShowForm(false);
  };

  return (
    <div className="note-form-container">
      {!showForm ? (
        <button
          className="add-note-btn"
          onClick={() => setShowForm(true)}
        >
          ➕ New Note
        </button>
      ) : (
        <form className="note-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="note-input-title"
            placeholder="Note title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />
          <textarea
            className="note-input-content"
            placeholder="Write your note here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows="4"
          />
          <div className="form-actions">
            <button type="submit" className="btn-save">
              Save
            </button>
            <button
              type="button"
              className="btn-cancel"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default NoteForm;