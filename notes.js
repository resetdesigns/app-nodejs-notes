const fs = require('fs');

const getNotes = function () {
    return 'Your notes...';
};

/**
 * Validate if there is a note with the same title. If there are no duplicates proceed with saving the note
 * @param notes - existing notes object
 * @param duplicateNotes - array to store duplicates
 */
const addNote = function (title, body) {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title;
    });

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body,
        });
        saveNotes(notes);
        console.log('New note added!');
    } else {
        console.log('Note title taken!');
    }
};

const removeNote = function (title) {
    const notes = loadNotes();
    const notesToKeep = notes.filter(function (note) {
        return note.title !== title;
    });

    saveNotes(notesToKeep);
};

/**
 * Save notes to JSON
 * @param notes - notes to be saved to JSON
 */
const saveNotes = function (notes) {
    const notesJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', notesJSON);
};

/**
 * Load notes from JSON. If no notes exist this shouldreturn an empty array to begin storing notes to save later
 * @returns {notes} - is for loading all notes
 */
const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
};

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
};
