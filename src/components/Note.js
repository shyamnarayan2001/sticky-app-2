import React, { useState } from 'react';

function Note({ note, deleteNote, updateNote }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(note.title);
  const [editContent, setEditContent] = useState(note.content);

  const handleUpdate = () => {
    if (editTitle.trim() || editContent.trim()) {
      updateNote(
        note.id,
        editTitle.trim() || 'Untitled Note',
        editContent.trim()
      );
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditTitle(note.title);
    setEditContent(note.content);
    setIsEditing(false);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="note" style={{ backgroundColor: note.color }}>
      {!isEditing ? (
        <>
          <div className="note-header">
            <h3 className="note-title">{note.title}</h3>
            <div className="note-actions">
              <button
                className="btn-edit"
                onClick={() => setIsEditing(true)}
                title="Edit note"
              >
                ✏️
              </button>
              <button
                className="btn-delete"
                onClick={() => deleteNote(note.id)}
                title="Delete note"
              >
                🗑️
              </button>
            </div>
          </div>
          <p className="note-content">{note.content}</p>
          <p className="note-date">{formatDate(note.createdAt)}</p>
        </>
      ) : (
        <div className="note-edit-form">
          <input
            type="text"
            className="edit-title"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            autoFocus
          />
          <textarea
            className="edit-content"
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            rows="4"
          />
          <div className="edit-actions">
            <button className="btn-save-edit" onClick={handleUpdate}>
              Save
            </button>
            <button className="btn-cancel-edit" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Note;