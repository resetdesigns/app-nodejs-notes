const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes');

// Customize yargs version
yargs.version('1.1.0');

// People should be able to add, remove, read, and list their notes
// We want to show options and help text

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string',
        },
    },
    handler: function (argv) {
        console.log('Title: ' + argv.title);
        console.log('Body: ' + argv.body);
    },
});

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing the note');
    },
});

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function () {
        console.log('Listing out all the notes');
    },
});

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading a given note');
    },
});

yargs.parse();
