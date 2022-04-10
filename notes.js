const fs = require('fs');
const chalk = require('chalk');

/**
 * Add a note to the notes object
 * @param title - the title of the note
 * @param body - the body of the note
 */
const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body,
        });
        saveNotes(notes);
        console.log(chalk.green.inverse('New note added!'));
    } else {
        console.log(chalk.red.inverse('Note title taken!'));
    }
};

/**
 * Remove a note from the list.
 * @param title - title of the note we need to find and remove
 */
const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title);

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Notes removed!'));
        saveNotes(notesToKeep);
    } else {
        console.log(chalk.red.inverse('No note found!'));
    }
};

/**
 * List all notes
 */
const listNote = () => {
    const notes = loadNotes();
    console.log(chalk.inverse('Your notes'));
    notes.forEach((note) => console.log(note.title));
};

/**
 * Read a selected note
 * @param title - title of the note we need to find and return
 */
const readNote = (title) => {
    const notes = loadNotes();
    const selectedNote = notes.find((note) => note.title === title);

    if (selectedNote) {
        console.log(chalk.inverse(selectedNote.title));
        console.log(selectedNote.body);
    } else {
        console.log(chalk.red.inverse('Unable to find note'));
    }
};

/**
 * Save notes to JSON
 * @param notes - notes to be saved to JSON
 */
const saveNotes = (notes) => {
    const notesJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', notesJSON);
};

/**
 * Load notes from JSON. If no notes exist this shouldreturn an empty array to begin storing notes to save later
 * @returns {notes} - is for loading all notes
 */
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
};

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote,
    readNote: readNote,
};
