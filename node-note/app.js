// console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes.js')

const titleOptions = {
  describe: 'Title your note',
  demand: true,
  alias: 't'
}

const bodyOptions = {
  describe: 'The body of your note',
  demand: true,
  alias: 'b'
}


// these are methods on yargs. command calls for a string of what user will input and then a description, then options argument to specify requirements
const argv = yargs
  .command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list', 'List all your notes')
  .command('read', 'Read a note', {
    title: titleOptions
  })
  .command('remove', 'Remove a note', {
    title: titleOptions
  })
  .help() // sets up Yargs to return information
  .argv;

// console.log('Command:', command)
// console.log('Process:', process.argv)
// console.log('Yargs:', argv)

var command = argv._[0]

if (command == 'add') {
  var note = notes.addNote(argv.title, argv.body)
  if (note) {
    console.log(`Note created`)
    notes.logNote(note)
  } else {
    console.log("Title already taken")
  }
} else if (command == 'list') {
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} notes`)
  allNotes.forEach((note) => { notes.logNote(note) })
} else if (command == 'read') {
  var note = notes.getNote(argv.title)
  if (note) {
    console.log("Note: found")
    notes.logNote(note)
  } else {
    console.log("Note not found")
  }
} else if (command == 'remove') {
  var noteRemoved = notes.removeNote(argv.title)
  var message = noteRemoved ? "Note removed" : "No note with that title"
  console.log(message)
}
  else {
  console.log('Command not recognized')
}
