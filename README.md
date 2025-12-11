# 📝 Sticky Notes App

A beautiful and functional React Notes application with auto-save functionality to localStorage.

## ✨ Features

- ✅ **Create Notes**: Add new notes with titles and content
- 🎨 **Colorful UI**: Each note gets a random vibrant color
- ✏️ **Edit Notes**: Modify existing notes inline
- 🗑️ **Delete Notes**: Remove notes you no longer need
- 🔍 **Search**: Filter notes by title or content
- 💾 **Auto-Save**: All notes are automatically saved to localStorage
- 📱 **Responsive**: Works perfectly on desktop and mobile devices
- 🎯 **Clean UI**: Modern and intuitive user interface

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/shyamnarayan2001/sticky-app-2.git
cd sticky-app-2
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Project Structure

```
sticky-app-2/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Note.js           # Individual note component
│   │   ├── NoteForm.js       # Form for creating new notes
│   │   └── NoteList.js       # List container for notes
│   ├── App.js                # Main application component
│   ├── App.css               # Application styles
│   ├── index.js              # Entry point
│   └── index.css             # Global styles
├── package.json
└── README.md
```

## 🎯 How It Works

### Auto-Save Feature
The app uses React's `useEffect` hook to automatically save notes to localStorage whenever they change:

```javascript
useEffect(() => {
  if (notes.length > 0) {
    localStorage.setItem('stickyNotes', JSON.stringify(notes));
  }
}, [notes]);
```

### Data Persistence
- Notes are stored in the browser's localStorage
- Data persists across page refreshes
- Each note has a unique ID based on timestamp
- Notes are loaded automatically on app startup

## 🎨 Color Palette

The app uses a vibrant color palette for notes:
- Yellow (#fff740)
- Red (#ff6b6b)
- Teal (#4ecdc4)
- Mint (#95e1d3)
- Gold (#ffd93d)
- Light Green (#a8e6cf)
- Pink (#ffd6e7)
- Lavender (#c7ceea)

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## 📦 Technologies Used

- **React 18.2.0** - UI library
- **React Hooks** - State management (useState, useEffect)
- **CSS3** - Styling and animations
- **localStorage API** - Data persistence

## 🌟 Key Features Explained

### 1. Create Notes
- Click "➕ New Note" button
- Enter title and content
- Click "Save" to add the note

### 2. Edit Notes
- Click the ✏️ icon on any note
- Modify the title or content
- Click "Save" to update

### 3. Delete Notes
- Click the 🗑️ icon on any note
- Note is immediately removed and localStorage is updated

### 4. Search Notes
- Use the search bar to filter notes
- Search works on both title and content
- Results update in real-time

## 🎓 Learning Points

This project demonstrates:
- React functional components
- React Hooks (useState, useEffect)
- Component composition and props
- localStorage API usage
- Form handling in React
- Array manipulation (map, filter)
- CSS Grid for responsive layouts
- Modern CSS styling techniques

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the project
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Shyam Narayan**
- GitHub: [@shyamnarayan2001](https://github.com/shyamnarayan2001)

## 🙏 Acknowledgments

- Built with Create React App
- Inspired by Google Keep and sticky note applications
- Color palette inspired by modern UI design trends

---

⭐ If you find this project useful, please consider giving it a star on GitHub!